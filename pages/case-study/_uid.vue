<template>
    <main ref="main">
        <article>
            <section ref="pageHeading" class="page-heading page-heading__left">
                <div class="container">
                    <h1 class="page-heading__heading">{{ $prismic.asText(content.name) }}</h1>
                    <p class="page-heading__summary">{{ content.summary }}</p>
                    <span
                        ref="largeLetter"
                        class="page-heading__large-letter"
                    >{{ content.name[0].text.charAt(0) }}</span>
                </div>
            </section>

            <slices-block :slices="slices" />

            <section class="case-study-navigation">
                <div class="container">
                    <nuxt-link v-if="nextPost !== undefined" :to="$prismic.linkResolver(nextPost)">
                        <p>Next Project</p>
                        <h3 class="next-post__title">{{ $prismic.asText(nextPost.data.name) }}</h3>
                    </nuxt-link>
                </div>
            </section>
        </article>
    </main>
</template>

<script>
import { gsap, ScrollTrigger, TweenMax, TimelineMax } from 'gsap/all'
import PageHeading from '~/components/PageHeading.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'
export default {
    name: 'case-study',
    components: {
        PageHeading,
        SlicesBlock,
    },
    head() {
        return {
            title: 'Case Study',
        }
    },
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        this.label = this.content['class_name']
            ? 'case-study__link--' + this.content['class_name']
            : ''

        const pageHeading = this.$refs.pageHeading,
            largeLetter = this.$refs.largeLetter,
            componentA = this.$refs.componentA,
            componentAShape = this.$refs.componentAShape,
            main = this.$refs.main

        const sections = main.querySelectorAll('section')

        let sectionTimeline = gsap.timeline()

        this.$nextTick(function () {
            sections.forEach(item => {
                // sectionTimeline.to(item, {
                //     scrollTrigger: {
                //         trigger: item,
                //         start: 'top center',
                //     },
                //     onUpdate: self => console.log(self),
                // })
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 70%',
                    onEnter: self => {
                        self.trigger.classList.add('section-active')
                    },
                })
            })
        })

        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TimelineMax)

        let timeline = gsap.timeline()

        this.$nextTick(function () {
            timeline.to(largeLetter, {
                scrollTrigger: {
                    trigger: pageHeading,
                    start: 'top top',
                    scrub: 1.2,
                },
                ease: 'power4.out',
                y: '-12vh',
                opacity: 0.01,
            })
            timeline.to(componentAShape, {
                scrollTrigger: {
                    trigger: componentA,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 1.5,
                },
                y: '-16vh',
            })
        })
    },
    async asyncData({ $prismic, params, error }) {
        try {
            // Query to get post content
            const document = await $prismic.api.getByUID(
                'case_study',
                params.uid
            )

            const nextpost = (
                await $prismic.api.query(
                    $prismic.predicates.at('document.type', 'case_study'),
                    {
                        pageSize: 2,
                        after: `${document.id}`,
                        orderings: '[my.case_study.date]',
                    }
                )
            ).results[0]

            return {
                // Set slices as variable
                content: document.data,
                slices: document.data.body,
                nextPost: nextpost,
            }
        } catch (e) {
            // Returns error page
            error({
                statusCode: 404,
                message: 'Page not found',
            })
        }
    },
    methods: {},
}
</script>

<style lang="scss">
.case-study-navigation {
    margin: 12vh 0;

    .container {
        max-width: 100%;
        padding: 0;
        text-align: center;

        a {
            text-decoration: none;
            color: inherit;
        }

        p {
            font-weight: 500;
        }

        h3 {
            margin-top: 0;
            font-size: var(--size-large-6);
        }
    }
}
</style>
