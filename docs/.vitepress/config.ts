import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '教育资源分享站',
  description: '早教启蒙 · 幼儿园 · 小学 · 初高中 — 一站式教育资源导航',
  lang: 'zh-CN',
  base: '/vitepress/',
  
  head: [
    ['link', { rel: 'icon', href: '/vitepress/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '早教启蒙', link: '/early-childhood/' },
      { text: '幼儿园', link: '/kindergarten/' },
      { text: '小学', link: '/primary-school/' },
      { text: '初高中', link: '/secondary-school/' },
    ],

    sidebar: {
      '/early-childhood/': [
        {
          text: '早教启蒙（0-3岁）',
          items: [
            { text: '总览', link: '/early-childhood/' },
            { text: '洪恩幼儿教育资源', link: '/early-childhood/hongen' },
            { text: '学前教育合集', link: '/early-childhood/preschool' },
            { text: '字母描红与拼音', link: '/early-childhood/alphabet' },
            { text: '逻辑狗思维训练', link: '/early-childhood/logic-dog' },
            { text: '幼小衔接', link: '/early-childhood/transition' },
          ]
        }
      ],
      '/kindergarten/': [
        {
          text: '幼儿园（3-6岁）',
          items: [
            { text: '总览', link: '/kindergarten/' },
          ]
        }
      ],
      '/primary-school/': [
        {
          text: '小学（6-12岁）',
          items: [
            { text: '总览', link: '/primary-school/' },
            { text: '大中华寻宝记', link: '/primary-school/treasure-hunt' },
            { text: '山海经（孩子一听就懂）', link: '/primary-school/shanhaijing' },
            { text: 'DK百科图书合集', link: '/primary-school/dk-books' },
            { text: 'DK英语10000词', link: '/primary-school/dk-english' },
            { text: '双语纪录片', link: '/primary-school/documentaries' },
          ]
        }
      ],
      '/secondary-school/': [
        {
          text: '初高中（12-18岁）',
          items: [
            { text: '总览', link: '/secondary-school/' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unitaryhighs/vitepress' },
    ],

    footer: {
      message: '基于夸克网盘教育资源整理',
      copyright: '© 2026 教育资源分享站'
    },

    search: {
      provider: 'local'
    }
  }
})
