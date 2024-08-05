This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
next dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, run the production:

```bash
next build
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project structure
Refresh token mekanism:
```
src/app/store/axios.ts
```

Using style in JSS:
```
src/app/theme.ts
src/app/styles.ts
```
Use `Saga` for state management.