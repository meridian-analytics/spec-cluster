import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const preset: Preset.Options = {
  docs: {
    sidebarPath: "./sidebars.ts",
  },
  blog: {
    showReadingTime: true,
    feedOptions: {
      type: ["rss", "atom"],
      xslt: true,
    },
    onInlineTags: "warn",
    onInlineAuthors: "warn",
    onUntruncatedBlogPosts: "warn",
  },
  theme: {
    customCss: "./src/css/custom.css",
  },
}

const themeConfig: Preset.ThemeConfig = {
  image: "logo.png",
  navbar: {
    title: "SpecCluster",
    logo: {
      alt: "SpecCluster Logo",
      src: "img/logo.svg",
    },
    items: [
      {
        type: "docSidebar",
        sidebarId: "mainSidebar",
        position: "left",
        label: "Docs",
      },
      {
        href: "https://github.com/meridianCFI/specviz", //need to change to speccluster repo
        label: "GitHub",
        position: "right",
      },
    ],
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "Docs",
        items: [
          {
            label: "Get started",
            to: "/docs/get-started.md",
          },
        ],
      },
      {
        title: "Examples",
        items: [
          {
            label: "Shape Visualization",
            to: "docs/examples/basic-spectrogram",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "GitHub",
            href: "https://github.com/meridianCFI/specviz",
          },
        ],
      },
    ],
    copyright: "rights reserved",
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
}

const config: Config = {
  title: "SpecCluster",
  tagline: "From Soundwaves to Insights: Visualize Your Audio Data.",
  favicon: "img/favicon.ico",
  url: "https://meridiancfi.github.io",
  baseUrl: "/",
  organizationName: "meridiancfi",
  projectName: "spec-cluster",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [["classic", preset]],
  themeConfig,
  staticDirectories: ["static"],
}
export default config
