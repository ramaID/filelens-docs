# FileLens Documentation

This is the official documentation site for FileLens, a high-performance file preview generation service that provides multi-page document processing with download URL responses. The site is built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this documentation site, first install the dependencies using Bun (preferred) or npm:

```bash
bun install
```

Next, run the development server:

```bash
bun dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation site.

## About FileLens

FileLens is a powerful file preview generation service that supports over 450 file formats and provides:

- **Multi-page document processing**: Generate previews for complex documents with multiple pages
- **High-performance processing**: Fast and reliable file conversion
- **Download URL responses**: Get direct links to generated preview files
- **Wide format support**: Support for documents, images, videos, and more
- **API-first design**: RESTful API for easy integration

## Early Access via GitHub Sponsors

🚀 **Get Early Access to FileLens**

FileLens is currently available through GitHub Sponsors with early access pricing:

**$25 one-time payment**
- Early access to FileLens, a high-performance file preview generation service written in Go
- Designed to replace the Node.js filepreview library with better performance, reliability, and cloud-native capabilities
- Access to the complete source code and deployment resources
- Priority support during the early access period

[🎯 **Become a Sponsor for Early Access**](https://github.com/sponsors/ramaid)

## Editing the Documentation

You can edit the documentation by modifying the MDX files in the `/src/app` folder. The site will auto-update as you edit these files. Each page is structured as an MDX file that combines Markdown content with React components.

## Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/mdx/search.mjs` file.

## Documentation Structure

The documentation is organized into the following sections:

- **API Reference**: Complete API documentation and endpoints
- **Quick Start**: Getting started guide for new users
- **Examples**: Code examples and use cases
- **SDKs**: Language-specific SDKs and libraries
- **Implementation**: Integration guides and best practices
- **Webhooks**: Event handling and webhook configuration
- **Multi-page**: Advanced multi-page processing features
- **Docker**: Containerized deployment options

## License

This documentation site is based on the [Tailwind UI Protocol template](https://tailwindui.com) and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this documentation site, see the following resources:

- **FileLens Service**: Visit the main FileLens documentation for API details
- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation for writing documentation
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - the search functionality powering the site
- [Headless UI](https://headlessui.dev) - accessible UI components
- [Framer Motion](https://www.framer.com/docs/) - animation library
