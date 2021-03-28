module.exports = {
  title: 'Computer Science Society Wiki',
  tagline: 'A Wiki for Computer Science Society',
  url: 'https://css.uwindsor.ca/wiki',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'UWindsorCSS', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  themeConfig: {
    defaultMode: 'dark',
	  hideableSidebar: true, 
    navbar: {
      style: 'dark',
      title: '',
      logo: {
        alt: 'CSS Logo',
        src: 'img/css-logo.png',
      },
      items: [
        {
          href: 'https://css.uwindsor.ca',
          label: 'Hub',
          position: 'left',
        },
        {
          to: 'courses/',
          activeBasePath: 'courses',
          label: 'Course Information',
          position: 'left',
        },
        {
          to: 'careers/',
          activeBasePath: 'careers',
          label: 'Careers',
          position: 'left',
        },
        {
          to: 'academics/',
          activeBasePath: 'academics',
          label: 'Academics',
          position: 'left',
        },
        {
          to: 'resources/',
          activeBasePath: 'resources',
          label: 'Resources',
          position: 'left',
        },
        {
          to: 'css/',
          activeBasePath: 'css',
          label: 'CSS',
          position: 'left',
        },
        {
          to: 'newsletter/',
          activeBasePath: 'newsletter',
          label: 'Newsletter',
          position: 'left',
        },
        {
          href: 'https://github.com/UWindsorCSS/Wiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Style Guide',
              to: 'resources/guides/style',
            }
          ]
        },
        {
          /* TDB: Replace this with something else*/
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://css.uwindsor.ca/discord',
            },
            {
              label: 'Github',
              href: 'https://github.com/UWindsorCSS'

            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/UWindsorCSS',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/uwindsorcss/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/UWindsorCSS',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/uwindsorcss/',
            },
            {
              label: 'facebook',
              href: 'https://www.facebook.com/uwindsorcss',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University of Windsor Computer Science Society`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'plugin-docs-careers',
          path: 'careers',
          sidebarPath: require.resolve('./careers/careers_sidebars.js'),
          routeBasePath: 'careers',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'plugin-docs-courses',
          path: 'courses',
          sidebarPath: require.resolve('./courses/courses_sidebars.js'),
          routeBasePath: 'courses',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'plugin-docs-academics',
          path: 'academics',
          sidebarPath: require.resolve('./academics/academics_sidebars.js'),
          routeBasePath: 'academics',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'plugin-docs-resources',
          path: 'resources',
          sidebarPath: require.resolve('./resources/resources_sidebars.js'),
          routeBasePath: 'resources',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'plugin-docs-css',
          path: 'css',
          sidebarPath: require.resolve('./css/css_sidebars.js'),
          routeBasePath: 'css',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
          id: 'plugin-blog-newsletter',
          path: 'newsletter',
          routeBasePath: 'newsletter',
          editUrl:
            'https://github.com/UWindsorCSS/Wiki/tree/master/',
      },
    ],
  ]
};
