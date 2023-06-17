This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use the right version of node

```bash
nvm use
```
Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Next Images

Since this repo is currently deploying to `gh-pages`, assets must be placed in the `/public` folder and `src` should use the full url.

Example:
```
<Image
  className={styles.logo}
  src="https://mitxpro-dev.github.io/nextjs/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
/>
```

## Project Structure

https://nextjs.org/docs/getting-started/project-structure

## Deploy on GH Pages

https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



