import CollectionEssay from "@/components/collection-essay/CollectionEssay";

export default function DatasetsAsInstitutionsEssayPage() {
  const essay = {
    index: 0,
    contentType: "essay",
    title: "DATASETS AS INSTITUTIONS: THE NEW YORK TIMES ANNOTATED CORPUS",
    img: "/img/n_ways_to_see_a_dataset.png",
    imgAlt: "/img/n_ways_to_see_a_dataset.png",
    preposition: "by",
    authors: "Mike Ananny",
    excerpt:
      "The NYT Annotated Corpus (NYTAC) shows how datasets are institutional achievements.",
    href: "/n-ways-to-see/datasets-as-institutions",
  };
  return (
    <CollectionEssay essay={essay}>
      <p>
        The NYT Annotated Corpus (NYTAC) shows how datasets are institutional
        achievements.
      </p>
      <br />
      <p>
        When seen as parts of institutions (and not only information
        collections), datasets reveal a rich set of largely invisible
        professional practices, organizational assumptions, and historical
        patterns that make institutions seem stable and routine. Datasets like
        NYTAC are part of “loosely coupled arrays of standardized elements” that
        make an organization like the New York Times (NYT), and an institution
        like “the press” seem coherent, stable, and predictable. In fact,
        organizations and fields are contingent, require ongoing maintenance,
        and can shift in unexpected ways. An institutional view of datasets like
        NYTAC shows the “lenses through which actors view the world and the very
        categories of structure, action, and thought.”
      </p>
      <br />
      <p>
        What is the NYTAC? Including “nearly every article published in The New
        York Times between January 01, 1987 and June 19, 2007,” the NYTAC
        contains 1,855,658 documents (over 1.5 million of which have been
        manually categorized into topics, people, location, and more) and
        664,998 human-written abstracts, all organized into an XML structure
        that conforms to the International Press Telecommunications Council’s
        “News Industry Text Format” (NITF). Offering 48 different ways of
        describing NYT articles, NYTAC metadata reflects 20 years of different
        ways that Times staff wrote, edited, indexed, and published news
        articles. The dataset has become an incredibly popular corpus of news
        articles and resource for data scientists, spawning countless academic
        articles, derivative datasets, and machine learning models – e.g., a
        summarization dataset of NYT article abstracts, an extraction of NYT
        linguistic patterns, a computational method for detecting news events,
        and a technique for increasing the diversity of news search results. The
        NYTAC has become much more than a repository of news articles; it has
        become an infrastructure for studying journalism and, when used in
        systems that extract, summarize, and generate news stories, the NYTAC
        becomes an invisible authority on journalistic language – a kind of
        journalistic lingua franca for computational news.
      </p>
      <br />
      <p>
        What does the NYTAC show? As an institutional achievement, the NYTAC
        shows how countless largely invisible human and nonhuman actions combine
        to create taken-for-granted objects with the power to organize disparate
        communities. The NYT’s internal indexing service reflects decades of
        bibliographic practice; the exclusion of wire articles and adherence to
        NITF standards show organizational contracts and partnerships; the
        derivative datasets, models, and tools show a vibrant community of
        journalism-adjacent engineers eager to build with the imprimatur of the
        NYT.
      </p>
      <br />
      <p>
        Beyond tracing the NYTAC as a site of (inter)organizational practices,
        the NYTAC is also a dataset ripe for asking questions about journalism
        and news. For example, engaging the NYTAC with the forensic Knowing
        Machines dataset tool lets us form some simple but generative inquiries
        like:
      </p>
      <br />
      <p>
        Question: Where in the paper do stories mentioning racism in sports
        appear?
      </p>
      <br />
      <p>
        Method: Searching for “racism” + “baseball”, “racism” + “football”,
        “racism” + “hockey” within Sports and News returns this pattern:
      </p>
      <br />
      <p>
        Interpretation: Taking 1987-2007 NYT coverage as a baseline, racism
        seems more likely to be discussed in stories appearing in the News
        section versus the Sports section. More sophisticated investigations
        into exactly how these discussions appear is needed, but this cursory
        look raises questions:
      </p>
      <br />
      <p>
        why might stories mentioning racism in sports more likely appear in the
        News versus Sports section? what reporting and publishing practices and
        beat structures produce this pattern? How do News and Sports section
        journalists talk to each other about their coverage and what sustains
        the separations and overlaps we see in dataset categorizations? do other
        news organizations also mention sports racism in their News sections
        more than Sports sections? how might people building derivative datasets
        and machine learning models account for such a pattern in the
        assumptions guiding their own work? especially critical for Generative
        AI, is this NYTAC pattern one that builders think should underpin the
        synthetic creation of news stories?
      </p>
      <br />
      <p>
        Counting word occurrences in datasets is not a new or particularly
        sophisticated research technique. What these two simple examples
        illustrate, however, is how a foundational, infrastructural dataset like
        NYTAC can be interrogated for patterns that could prompt broader,
        institutionally situated questions about machine learning datasets and
        their use. This relatively simple example raises questions about how
        NYTAC sees NYT news, the power of it becoming a proxy for generic news,
        and its potential significance as an authoritative knowledge source for
        teaching Generative AI systems how to create news stories.
      </p>
      <br />
      <p>
        Specifically, how did 20 years of NYT organizational culture create
        NYTAC patterns? How do shifts in NYTAC patterns suggest potential shifts
        in NYT practices? How do patterns in NYTAC mimic or diverge from other
        news organization datasets? How might the data scientists and machine
        learning engineers who use and extend the NYTAC understand its patterns
        and shifts, so that they might critically evaluate its de facto status
        as a gold standard of news language, adjusting their practices in light
        of a deeper understanding of the institutional forces that created the
        NYTAC?
      </p>
      <br />
      <p>
        The NYTAC emerged from decades of reporting habits, publishing
        standards, and news librarianship that seem contained within
        journalistic choices – but these choices are taking on a new and
        authoritative life in engineering communities using the NYTAC to build
        seemingly objective systems for classifying and producing news.
      </p>
      <br />
      <p>
        The NYTAC is simultaneously a reflection of news cultures and
        organizational patterns, a dataset with a life beyond journalism, and a
        standard for data engineers building derivative products. As “loosely
        coupled array of standardized elements” (practices, languages, norms,
        categories), the NYTAC is an institutional achievement. Understanding it
        and its journalism-engineering meetings shows the contemporary “press”
        to be not just what journalists and newsrooms do, but what datasets see
        and shape.
      </p>
      <br />
    </CollectionEssay>
  );
}
