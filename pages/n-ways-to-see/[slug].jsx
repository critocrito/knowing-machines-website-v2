import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit, SKIP } from "unist-util-visit";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import { markdownToHtml } from "../../util/markdownHelpers";
import Layout from "@/components/Layout";
import NWaysImage from "@/components/n-ways-to-see/NWaysImage";
import NWaysGrid from "@/components/n-ways-to-see/NWaysGrid";

export default function NWaysPage({ content, frontmatter }) {
  const [htmlOutput, setHtmlOutput] = useState("");
  const [sections, setSections] = useState([]);
  const elementTypes = ["paragraph", "strong", "list"];

  useEffect(() => {
    const htmlOutput = markdownToHtml(content).then((output) => {
      const AST = unified().use(remarkParse).parse(content);
      let sections = [];
      visit(AST, ["text", ...elementTypes], (node) => {
        if (node.children && node.children[0].value.startsWith("[:")) {
          sections.push({
            type: node.children[0].value.slice(1, -1).slice(1).split("-")[0],
            id: node.children[0].value,
          });
        } else if (node.type === "strong" || node.type === "list") {
          const mda = u("root", u(node.type, node.children));
          sections.push({
            type: node.parent ? node.parent.type : node.type,
            content: toHtml(toHast(mda)),
            className: node.type,
          });
          return SKIP;
        } else if (elementTypes.includes(node.type)) {
          const mda = u("root", u(node.type, node.children));
          sections.push({
            type: node.parent ? node.parent.type : node.type,
            content: toHtml(toHast(mda)),
            className: node.type,
          });
          return SKIP;
          // if (
          //   node.children[0].value &&
          //   !node.children[0].value.startsWith("[:")
          // ) {
          //   const mdast = {
          //     type: `root`,
          //     children: [{ type: node.type, children: node.children }],
          //   };
          //   const mda = u("root", node);
          //   const hast = toHast(mda);
          //   sections.push({
          //     type: node.parent ? node.parent.type : node.type,
          //     content: toHtml(hast),
          //     className: node.type,
          //   });
          // }
        }
      });
      setHtmlOutput(output);
      return setSections(sections);
    });
  }, []);

  function loadEmbed(type, id) {
    const item = frontmatter[id.slice(1, -1).slice(1)];
    return type === "grid" ? (
      <NWaysGrid title={item.caption} collection={item.collection} />
    ) : (
      <NWaysImage title={item.caption} imagePath={item.imagePath} />
    );
  }
  return (
    <Layout title={frontmatter.title} navbarDefaultCollapsed={false}>
      <div className="border-[1px] border-black p-6 flex flex-col items-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <div className="max-w-3xl w-[900px] h-[265.93px] bg-center bg-cover"
            style={{backgroundImage: "url(" + frontmatter.coverImg + ")"}}
            title={frontmatter.coverImgAlt}></div>
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {frontmatter.contentType}
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] text-center max-w-[450px] tracking-widest ">
          {frontmatter.title}
        </div>
        <div className="text-xs my-6 text-center mx-auto">
          <span className="font-bold uppercase">{frontmatter.authors}</span>
        </div>
        <div className="max-w-3xl">
          {sections.length > 0 &&
            sections.map((section, idx) => (
              <div key={idx}>
                {elementTypes.includes(section.type) ? (
                  <div
                    key={idx}
                    className={`max-w-3xl ${section.className}`}
                    dangerouslySetInnerHTML={{
                      __html: section.content || "",
                    }}
                  />
                ) : (
                  <>{loadEmbed(section.type, section.id)}</>
                )}
              </div>
            ))}
        </div>
        <style jsx global>{`
          p {
            margin-bottom: 1.2em !important;
          }
          b,
          strong,
          .strong {
            font-weight: bolder;
          }
          ul {
            list-style: disc;
            margin-left: 1em;
            margin-bottom: 2em;
          }
          .li::first-of-type {
            margin-top: -1em;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content", "n-ways-to-see"));
  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "n-ways-to-see", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    if (frontmatter.draft === false) {
      return { params: { slug: filename.replace(".md", "") } };
    } else {
      return null;
    }
  });
  const paths = temppaths.filter((path) => {
    return path && path;
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", "n-ways-to-see", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, slug, content } };
}
