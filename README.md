# nextjs-starter project

A starter project for Next.js with lots of features

## Recommended config

### Adding VSCode Autosave

Install `Prettier - Code formatter`, and in `.vscode/settings.json`, add:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Getting Started

For development, create a .env.development

```
  // General
  DOMAIN_NAME=required (ex: clinia.com)
  APP_NAME=required (ex: Clinia

  // Google Analytics
  GOOGLE_ANALYTICS_TRACKING_CODE=optional
```

Then, run the development server:

```bash
yarn install
yarn dev
```

### Pages

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

### API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Styles

All styles are available under `src/assets/*`. The styles auto-updates as you edit the file.

Styles targetting pages are available under `src/assets/pages/*`, and targetting components under `src/assets/components/*`. They both use [Component-level CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) support.
Component and pages styles can be imported at the Typescript/Javascript level.

To edit default values for site, you can edit `src/assets/theme/variables.scss`.

Default support for:

- Foundation 6 breakpoint mixins
- [Bulma CSS Classes](https://bulma.io/documentation/overview/classes/)
- [Flexbox Grid CSS Classes](http://flexboxgrid.com/)
- [Fontawesome Icons](https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use)

### Generate Favicons

Use a [Favicon Generator](https://realfavicongenerator.net/) to create required files and add to `/public/` folder.

## Learn More

To learn more, take a look at the following resources:

### Next.js libraries

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API.
- [Next.js SEO](https://github.com/garmeeh/next-seo) - Plugin that makes managing your SEO easier in Next.js projects.
- [Next-i18Next](https://github.com/isaachinman/next-i18next) - Translation for Next.js apps.

### Server

- [Express](https://github.com/expressjs/express) - Minimalist web framework for node.
- [Helmet](https://github.com/helmetjs/helmet) - Secure Express apps by setting various HTTP headers.

### Components

- [Font Awesome Documentation](https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use) - Vector icons and social logos
- [Bulma Documentation](https://bulma.io/documentation/) - Ready-to-use frontend components
