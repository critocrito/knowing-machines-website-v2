## How to add a new team member

1. Create [lastname].md in /content/about/team, and add the bio as markdown. So far, we used the convention of naming the file [lastname].md, but if there is a lastname collision, any file name works, as long as it's unique, and as long as the img file in the step below uses the same name.

2. Add [lastname].png as provided by the designer (because the image needs to have the dithering and the blue filter applied) to /public/img/about/team. It is neccessary that the .md file (from the step above) and the .png file have the same name

## How to add a new alumni

1. Create [lastname].md in /content/about/alumni, and add the bio as markdown. So far, we used the convention of naming the file [lastname].md, but if there is a lastname collision, any file name works, as long as it's unique, and as long as the img file in the step below uses the same name.

2. Add [lastname].png as provided by the designer (because the image needs to have the dithering and the blue filter applied) to /public/img/about/alumni. It is neccessary that the .md file (from the step above) and the .png file have the same name

## How to convert team member to alumni

1. Move [lastname].md from /content/about/team to /content/about/alumni

2. Move [lastname].png from /public/img/about/alumni to /public/img/about/alumni. It is neccessary that the .md file (from the step above) and the .png file have the same name

## How to edit legal explainer questions

1. Find the question .md file in /content/knowing_legal_machines/legal_explainer/questions

2. Edit the metadata, or edit the main content if you're editing the "long answer"

## How to edit legal explainer cases

1. Find the question .md file in /content/knowing_legal_machines/legal_explainer/cases

2. Edit the metadata and/or content
   
3. If this is a new question, add slug to the metadata of the relevant related question(s)

## How to add files

1. Add them to /public/docs

## How to add podcast episodes

1. Edit /pages/podcast.tsx

## Below is the initial next.js project readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
