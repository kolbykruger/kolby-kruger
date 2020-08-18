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
                        :style="{ 'color' : content.color }"
                    >{{ content.name[0].text.charAt(0) }}</span>
                </div>
            </section>

            <section ref="componentA" class="component-a">
                <div class="container">
                    <div ref="componentAShape" class="shape"></div>
                    <p class="eyebrow">EYEBROW</p>
                    <h2>Eternity's 20th anniversary of it's start was quickly approaching.</h2>
                    <div class="group">
                        <div class="a">
                            <h3>The Challenge</h3>
                            <p>A redesign of the Eternity company website. A redesign of the Eternity company website. A redesign of the Eternity company website.</p>
                        </div>
                        <div class="a">
                            <h3>The Challenge</h3>
                            <p>A redesign of the Eternity company website. A redesign of the Eternity company website.</p>
                        </div>
                        <div class="a">
                            <h3>The Challenge</h3>
                            <p>A redesign of the Eternity company website. A redesign of the Eternity company website.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <svg viewBox="0 0 100 100">
                                <clipPath id="clipPath">
                                    <circle cx="40" cy="35" r="35" />
                                </clipPath>

                                <text x="0" y="20" fill="red" id="text">E</text>

                                <use clip-path="url()" xlink:href="#text" fill="red" />
            </svg>-->

            <!-- <section class="case-study__cover">
        <div class="container">
          <LazyImage :src="content.screen" mobile tablet laptop desktop />
        </div>
            </section>-->

            <slices-block :slices="slices" />
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
            const document = (
                await $prismic.api.getByUID('case_study', params.uid)
            ).data
            return {
                // Set slices as variable
                content: document,
                slices: document.body,
            }
        } catch (e) {
            // Returns error page
            error({
                statusCode: 404,
                message: 'Page not found',
            })
        }
    },
    methods: {
        delimiter(index, length) {
            if (index != length) {
                return `, `
            }
        },
    },
}
</script>
