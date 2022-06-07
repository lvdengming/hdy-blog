const path = require('path');

module.exports = {
    title: '西瓜皮儿',
    port: 8070,
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/assets/icons/book128.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ceffa0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/icons/portrait128.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/icons/portrait128.svg', color: '#ceffa0' }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/portrait128.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: {
        type: 'blog',
        author: '西瓜皮儿',
        startYear: '2021',
        authorAvatar: '/assets/img/portrait.jpg',
        modePicker: false,
        logo: '/assets/img/portrait.jpg',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        lastUpdated: '上次更新',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
                link: 'https://www.recoluan.com'
            },
            {
                title: '小紫念沁',
                desc: '不积跬步,无以至千里.不积小流,无以成江海',
                logo: 'https://anyfork.gitee.io/blog-docs/images/user.jpg',
                link: 'https://anyfork.gitee.io/blog-docs/'
            }
        ],
        // 博客设置
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            },
            category: {
                location: 5, // 在导航栏菜单中所占的位置，默认3
                text: '分类' // 默认 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/coderHDY' },
                { icon: 'reco-coding', link: 'https://leetcode-cn.com/u/huang-tong-xue-e/' },
                { icon: 'reco-other', link: 'https://coderhdy.github.io/react-stories/?path=/story' },
                { icon: 'reco-wechat', link: '/blog/2022/contact.html' },
            ]
        },
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: false,
        //valine
        // valineConfig: {
        //     appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz', // your appId
        //     appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
        //     placeholder: '说说你的看法~',
        //     avatar: 'wavatar',
        //     serverUrl: 'https://brhdq5vq.lc-cn-n1-shared.com'
        // }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: require('./plugins/index.js'),
    clientRootMixin: path.resolve(__dirname, './plugins/mixins/index.js'),
}