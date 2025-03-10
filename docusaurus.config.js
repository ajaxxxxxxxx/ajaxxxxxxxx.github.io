// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kitchen Sink Productions',
  tagline: 'Modlists & Servers',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://ajaxxxxxxxx.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ajaxxxxxxxx', // Usually your GitHub org/user name.
  projectName: 'ajaxxxxxxxx.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      },
      image: 'img/bycsocial.png',
      navbar: {
        title: 'Kitchen Sink',
        logo: {
          alt: 'Boneyard Creations',
          src: 'img/logo.png',
        },
        items: [
		  {
			type: 'doc',
			position: 'left',
			docId: '1listo/Home',
            label: 'Listonomicon',
          },
          {
            href: 'https://discord.gg/43EhRjU',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/AmxvjHkQ5v',
              },
              {
                label: 'Twitter',
                href: 'https://duckduckgo.com/?q=twitter+meme&atb=v415-1&iax=images&ia=images',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Nexus',
                to: 'https://www.nexusmods.com/baldursgate3/mods/8976',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kitchen Sink, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

