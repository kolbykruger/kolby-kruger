<template>
    <section class="page-heading">
        <div class="page-heading__container">
            <div class="page-heading__group" ref="pageheading">
                <h1 class="page-heading__title" ref="title">{{ heading }}</h1>
                <p class="page-heading__summary" ref="summary">{{ summary }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, ScrollTrigger, TweenMax, TimelineMax } from 'gsap/all'
export default {
    name: 'PageHeading',
    props: ['heading', 'summary'],
    mounted() {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TimelineMax)

        const pageheading = this.$refs.pageheading,
            title = this.$refs.title,
            line = this.$refs.line,
            summary = this.$refs.summary,
            period = this.$refs.period

        let timeline = gsap.timeline()

        // this.$nextTick(function () {
        //   timeline.to(period, {
        //     scrollTrigger: {
        //       trigger: pageheading,
        //       start: "top bottom",
        //       end: "bottom top",
        //       markers: true,
        //     },
        //     ease: "circ.out",
        //     scale: 80,
        //   });
        // });

        // this.$nextTick(function () {
        //   timeline
        //     .to(title, 1.5, {
        //       scrollTrigger: {
        //         trigger: pageheading,
        //         start: "bottom 35%",
        //         markers: true,
        //       },
        //       ease: "circ.out",
        //       y: "-8vw",
        //       opacity: 0,
        //       skewY: "-3",
        //     })
        //     .to(line, 1.5, {
        //       scrollTrigger: {
        //         trigger: pageheading,
        //         start: "bottom 38%",
        //         markers: false,
        //       },
        //       ease: "back.out(1.7)",
        //       x: "-80",
        //       opacity: 0,
        //       duration: 5,
        //     })
        //     .to(summary, 1.5, {
        //       scrollTrigger: {
        //         trigger: pageheading,
        //         start: "bottom 35%",
        //         markers: false,
        //       },
        //       ease: "circ.out",
        //       y: "-4vw",
        //       opacity: 0,
        //       skewY: "-3",
        //     });
        // });
    },
}
</script>
