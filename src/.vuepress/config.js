const {
  description
} = require('../../package')

module.exports = {
  title: 'Laravel Menus Manager',
  description: description,
  theme: 'titanium',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3a0839' },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  themeConfig: {
    repo: 'hexadog/laravel-menus-manager',
    docsRepo: 'hexadog/laravel-menus-manager-docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nextVersionTitle: 'develop',
    nav: [
      {
        text: 'Our packages',
        ariaLabel: 'Our packages',
        items: [
          { text: 'Laravel Theme Installer', link: 'https://github.com/hexadog/laravel-theme-installer' },
          { text: 'Laravel Themes Manager', link: 'https://laravel-themes-manager.netlify.app' }
        ]
      }
    ],
    sidebar: [{
        title: 'Package',
        collapsable: false,
        children: [
          '',
          'installation'
        ]
      },
      {
        title: 'Usage',
        collapsable: false,
        children: [
          'usage/basic',
          'usage/hierarchy',
          'usage/item',
          'usage/search',
          'usage/tree',
          'usage/components'
        ]
      }
    ]
  },

  plugins: [
    'versioning',
    '@vuepress/plugin-back-to-top'
  ]
}