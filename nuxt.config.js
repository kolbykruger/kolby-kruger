export default {
    mode: 'universal',
    target: 'static',

    head: {
        title: 'Kolby Kruger',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Kolby Kruger is a freelance designer, developer and student that does web design and web development in Burlington, Vermont.'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    loading: {
        color: '#fff'
    },

    layoutTransition: {
        name: 'page',
        mode: 'out-in'
    },

    path: '/sitemap.xml',
    sitemap: {
        hostname: 'https://kolby.dev',
        gzip: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }
    },

    css: ['@/static/fonts/moderat/moderat.css'],

    plugins: [
        '@/assets/css/bundle.scss',
        '@/plugins/vue-lazysizes.client.js',
        '@/plugins/lazy-sizes'
    ],

    modules: [
        '@nuxtjs/svg',
        '@nuxtjs/google-analytics',
        '@nuxtjs/prismic',
        '@nuxtjs/sitemap'
    ],

    prismic: {
        endpoint: 'https://kolby-kruger.cdn.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer'
    },

    googleAnalytics: {
        id: 'UA-79905161-1'
    },

    build: {
        extend(config, { isDev, isClient, loaders: { vue } }) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common'
            vue.transformAssetUrls.img = ['data-src', 'src']
            vue.transformAssetUrls.source = ['data-srcset', 'srcset']
        },
        transpile: ['gsap']
    },

    generate: {
        fallback: '404.html'
    }
}
