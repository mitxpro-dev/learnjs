# MIT X-PRO Development Group

> Next.js Project

## Getting Started

Use the right version of node and install [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

> This project includes a `.nvmrc` file that specifies the version of node to use. If you have `nvm` installed, you can run the following command to use the correct version of node:

```bash
nvm use
```

Install dependencies.

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
  src="https://mitxpro-dev.github.io/learnjs/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
/>
```

## Learn More

This is a Next.js project bootstrapped with create-next-app.

- [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Deploy on GH Pages](https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/)
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
