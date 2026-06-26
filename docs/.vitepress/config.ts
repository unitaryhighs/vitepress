import { defineConfig } from 'vitepress'

// SEO: 站点全局元数据
const SITE_URL = 'https://unitaryhighs.github.io/vitepress'
const SITE_TITLE = '教育资源分享站 - 早教启蒙·幼儿园·小学·初高中一站式导航'
const SITE_DESCRIPTION = '免费教育资源分享站点，涵盖早教启蒙(0-3岁)、幼儿园(3-6岁)、小学(6-12岁)、初高中(12-18岁)全年龄段学习资料。洪恩教育、DK百科、大中华寻宝记、山海经等优质资源，夸克网盘直接下载。'
const SITE_KEYWORDS = '教育资源,早教启蒙,幼儿园,小学,初高中,洪恩教育,学前教育,儿童英语,拼音学习,数学启蒙,DK百科,大中华寻宝记,山海经,免费下载,夸克网盘,家庭教育,育儿资源,幼小衔接,逻辑狗,识字,描红'

export default defineConfig({
  title: '教育资源分享站',
  description: SITE_DESCRIPTION,
  lang: 'zh-CN',
  base: '/vitepress/',

  // SEO: HTML head 标签
  head: [
    ['link', { rel: 'icon', href: '/vitepress/logo.svg' }],
    
    // 基础 SEO meta
    ['meta', { name: 'description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'keywords', content: SITE_KEYWORDS }],
    ['meta', { name: 'author', content: '教育资源分享站' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'baiduspider', content: 'index, follow' }],
    
    // Canonical URL
    ['link', { rel: 'canonical', href: SITE_URL }],
    
    // Open Graph (Facebook, LinkedIn, Discord 等)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/images/early-childhood.jpg` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '教育资源分享站' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: SITE_URL }],
    ['meta', { name: 'twitter:title', content: SITE_TITLE }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/images/early-childhood.jpg` }],
    
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    
    // JSON-LD 结构化数据 (WebSite)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': '教育资源分享站',
      'url': SITE_URL,
      'description': SITE_DESCRIPTION,
      'inLanguage': 'zh-CN',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    })],
  ],

  // SEO: 每个页面注入 JSON-LD 面包屑
  transformHead: async (context) => {
    const { pageData } = context
    const head: [string, Record<string, string>, string?][] = []
    
    // 为每个页面添加 canonical URL
    const pageUrl = `${SITE_URL}${pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '')}`
    head.push(['link', { rel: 'canonical', href: pageUrl }])
    
    // 为每个页面添加页面级 OG 标签
    const pageTitle = pageData.title ? `${pageData.title} - 教育资源分享站` : SITE_TITLE
    const pageDesc = pageData.description || SITE_DESCRIPTION
    head.push(['meta', { property: 'og:title', content: pageTitle }])
    head.push(['meta', { property: 'og:description', content: pageDesc }])
    head.push(['meta', { property: 'og:url', content: pageUrl }])
    head.push(['meta', { name: 'twitter:title', content: pageTitle }])
    head.push(['meta', { name: 'twitter:description', content: pageDesc }])
    
    return head
  },

  // SEO: Sitemap 配置
  sitemap: {
    hostname: SITE_URL,
    transformItems: (items) => {
      // 为每个页面设置优先级和更新频率
      return items.map((item) => {
        let priority = 0.5
        let changefreq = 'monthly'
        
        if (item.url === SITE_URL + '/') {
          priority = 1.0
          changefreq = 'weekly'
        } else if (item.url.includes('/early-childhood/') || item.url.includes('/primary-school/')) {
          priority = 0.9
          changefreq = 'weekly'
        } else if (item.url.includes('/kindergarten/') || item.url.includes('/secondary-school/')) {
          priority = 0.7
          changefreq = 'monthly'
        }
        
        return { ...item, changefreq, priority }
      })
    }
  },

  // SEO: 页面元数据增强
  transformPageData(pageData) {
    // 确保每个页面都有 description frontmatter
    if (!pageData.frontmatter.description) {
      const title = pageData.title || ''
      pageData.frontmatter.description = `${title} - 教育资源分享站，提供免费优质的教育学习资料下载。`
    }
  },

  // SEO: cleanUrls 让 URL 更友好
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    
    // SEO: 导航结构清晰
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

    // SEO: 页脚信息
    footer: {
      message: '基于夸克网盘教育资源整理 · 免费分享 · 持续更新',
      copyright: '© 2026 教育资源分享站'
    },

    search: {
      provider: 'local'
    },

    // SEO: 文档页脚编辑链接
    editLink: {
      pattern: 'https://github.com/unitaryhighs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // SEO: 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
  }
})
