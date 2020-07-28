<template>
	<section class="page-heading">
		<div class="page-heading__container">
			<div class="page-heading__group" ref="pageheading">
				<h1 class="page-heading__title" ref="title">{{ heading }}<span class="page-heading__period">.</span></h1>
				<div class="page-heading__decor" ref="line">
					<span class="page-heading__line"></span>
				</div>
				<p class="page-heading__summary" ref="summary">{{ summary }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import { gsap, ScrollTrigger, TweenMax, TimelineMax } from 'gsap/all';
export default {
	name: 'PageHeading',
	props: ['heading', 'summary'],
	mounted() {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(TimelineMax);

		const pageheading = this.$refs.pageheading,
			title = this.$refs.title,
			line = this.$refs.line,
			summary = this.$refs.summary;

		let timeline = gsap.timeline();

		this.$nextTick(function() {
			timeline
				.to(title, {
					scrollTrigger: {
						trigger: pageheading,
						start: 'bottom 35%',
						scrub: 0.1,
						markers: true,
					},
					ease: 'circ.out',
					y: '-8vw',
					opacity: 0.2,
					skewY: '-3',
				})
				.to(line, {
					scrollTrigger: {
						trigger: pageheading,
						start: 'bottom 38%',
						scrub: 0.1,
						markers: false,
					},
					ease: 'back.out(1.7)',
					x: '-80',
					opacity: 0,
				})
				.to(summary, {
					scrollTrigger: {
						trigger: pageheading,
						start: 'bottom 35%',
						scrub: 0.1,
						markers: false,
					},
					ease: 'circ.out',
					y: '-4vw',
					opacity: 0,
					skewY: '-3',
				});
		});
	},
};
</script>
