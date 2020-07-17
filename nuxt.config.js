export default {
    mode: 'universal',

    head: {
        title: 'Kolby Kruger',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Kolby Kruger is a freelance designer, developer and student that does web design and web development in Burlington, Vermont.',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    loading: {
        color: '#fff',
    },

    css: ['@/static/fonts/moderat/moderat.css'],

    plugins: [
        '@/assets/css/bundle.scss',
        'node_modules/flickity/dist/flickity.min.css',
        '@/plugins/vue-lazysizes.client.js',
        '@/plugins/LazySizes',
    ],

    modules: [
        '@/modules/static',
        '@/modules/crawler',
        '@nuxtjs/svg',
        '@nuxtjs/prismic',
    ],

    prismic: {
        endpoint: 'https://kolby-kruger.cdn.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer',
    },

    build: {
        extend(config, { isDev, isClient, loaders: { vue } }) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common';
            vue.transformAssetUrls.img = ['data-src', 'src'];
            vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
        },
    },

    generate: {
        fallback: '404.html',
    },
};
