# Learn JS

## About

This application, using `NextJS`, provides users the ability to complete coding challenges and learn more about specific, common problems that arise in software development.

The main goal of this project is to assist new developers in preparing for common challenges they will encounter when entering the software development industry and building production-level software.

The site will be laid out similar to a regular blog, with the caveat that each "post" is comprised of three consistent parts:

- A description of the problem the user is faced with
- An interactive window allowing the user to solve the problem
- An overview of how the problem was approached and solved (not based on user input)

Examples of other methods of solving the issue and the whys / why nots of using those other solutions (often there is a clear, best-fit solution available).

## Project Goals

- Home page containing tiles of recent challenges posted.
- About page containing information about the project, the team and how to contribute.
- Challenge page containing all challenges available, 
  - Each challenge page should be formatted as a blog post
  - The ability to sort, search and filter
  - Detailed descriptions of the problem faced
  - An interactive challenge
  - A review of how the problem is troubleshot and solved.

Progress should be saved within a user's browser with the long term plan to support sign in through OAuth / third parties like GitHub, Apple and Google.

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
