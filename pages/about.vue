<template>
	<main>
		<PageHeading heading="about me" summary="My name is Kolby Kruger and I'm a 27 year old designer + developer from Vermont." />

		<article>
			<section class="about about__cover">
				<div class="about__container">
					<LazyImage :src="doc.data.cover" mobile="591" tablet="911" laptop="1068" desktop="1068" aspect />
				</div>
			</section>

			<section class="about about__greeting" ref="aboutGreeting">
				<div class="about__container">
					<div class="about__heading">
						<h2 class="font-size__3">{{ $prismic.asText(doc.data.greeting[0].title) }}<span class="about__period">.</span></h2>
					</div>
					<div class="about__contents">
						<prismic-rich-text :field="doc.data.greeting[0].description" />
					</div>
				</div>
				<div class="about__backdrop"></div>
			</section>

			<section class="about about__process" ref="aboutProcess">
				<div class="about__container">
					<div class="about__heading">
						<h2 class="font-size__3">{{ $prismic.asText(process.data.name) }}<span class="about__period">.</span></h2>
					</div>
					<div class="about__contents">
						<prismic-rich-text :field="process.data.description" />
					</div>
				</div>
				<div class="about__backdrop"></div>
			</section>

			<section class="about about__work" ref="aboutWork">
				<div class="about__container">
					<div class="about__heading">
						<h2 class="font-size__3">{{ $prismic.asText(doc.data.work[0].title) }}<span class="about__period">.</span></h2>
					</div>
					<div class="about__contents">
						<prismic-rich-text :field="doc.data.work[0].description" />
					</div>
				</div>
				<div class="about__backdrop"></div>
			</section>

			<section class="about about__background" ref="aboutBackground">
				<div class="about__container">
					<div class="about__heading">
						<h2 class="font-size__3">{{ $prismic.asText(doc.data.background[0].title) }}<span class="about__period">.</span></h2>
					</div>
					<div class="about__contents">
						<prismic-rich-text :field="doc.data.background[0].description" />
					</div>
				</div>
				<div class="about__backdrop"></div>
			</section>
		</article>
	</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';
import { gsap, ScrollTrigger, TimelineMax } from 'gsap/all';

export default {
	name: 'About',
	layout: 'default',
	components: {
		PageHeading,
		SlicesBlock,
	},
	async asyncData({ $prismic, error }) {
		try {
			const about = await $prismic.api.query($prismic.predicates.at('document.type', 'about'));
			const process = await $prismic.api.query($prismic.predicates.at('document.type', 'process'));

			return {
				doc: about.results[0],
				process: process.results[0],
			};
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found',
			});
		}
	},
	head() {
		return {
			title: 'About',
		};
	},
	mounted() {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(TimelineMax);

		const animationCandidates = this.$el.querySelectorAll('section');
		animationCandidates.forEach((item) => {
			ScrollTrigger.create({
				trigger: item,
				start: 'top 50%',
				end: 'bottom 100%',
				markers: false,
				onEnter: () => item.classList.add('animation--active'),
			});
		});

		const greeting = this.$refs.aboutGreeting;
		const process = this.$refs.aboutProcess;
		const work = this.$refs.aboutWork;
		const background = this.$refs.aboutBackground;

		let timeline = gsap.timeline();

		this.$nextTick(function() {
			timeline
				.to(greeting.querySelector('.about__heading'), {
					scrollTrigger: {
						trigger: greeting,
						start: 'top 65%',
						scrub: 1,
						markers: false,
					},
					y: '-8vh',
					ease: 'circ.out',
					skewY: '0',
				})
				.to(process.querySelector('.about__backdrop'), {
					scrollTrigger: {
						trigger: process,
						start: 'top 150%',
						scrub: 0.2,
						markers: false,
					},
					y: '-100vh',
					skewY: 5,
					scale: 1.25,
				})
				.to(process.querySelector('.about__heading'), {
					scrollTrigger: {
						trigger: process,
						start: 'top 65%',
						scrub: 1,
						markers: false,
					},
					y: '-8vh',
					ease: 'circ.out',
					skewY: '0',
				})
				.to(work.querySelector('.about__backdrop'), {
					scrollTrigger: {
						trigger: work,
						start: 'top 150%',
						scrub: 0.2,
						markers: false,
					},
					y: '-100vh',
					skewY: -5,
					scale: 1.25,
				})
				.to(work.querySelector('.about__heading'), {
					scrollTrigger: {
						trigger: work,
						start: 'top 65%',
						scrub: 1,
						markers: false,
					},
					y: '-8vh',
					ease: 'circ.out',
					skewY: '0',
				})
				.to(background.querySelector('.about__backdrop'), {
					scrollTrigger: {
						trigger: background,
						start: 'top 150%',
						scrub: 0.2,
						markers: false,
					},
					y: '-100vh',
					skewY: 0,
					scale: 1.25,
				})
				.to(background.querySelector('.about__heading'), {
					scrollTrigger: {
						trigger: background,
						start: 'top 65%',
						scrub: 1,
						markers: false,
					},
					y: '-8vh',
					ease: 'circ.out',
					skewY: '0',
				});
		});

		// const cross = this.$refs.cross;
		// const cross2 = this.$refs.cross2;
		// this.$nextTick(function() {
		// 	gsap.to(cross, {
		// 		scrollTrigger: {
		// 			trigger: cross,
		// 			start: 'top bottom',
		// 			end: 'bottom top',
		// 			scrub: 0.5,
		// 			markers: true,
		// 		},
		// 		y: '-12vh',
		// 		rotate: '360',
		// 	});
		// 	gsap.to(cross2, {
		// 		scrollTrigger: {
		// 			trigger: cross2,
		// 			start: 'top bottom',
		// 			end: 'bottom top',
		// 			scrub: 0.5,
		// 			markers: true,
		// 		},
		// 		y: '6vh',
		// 		rotate: '260',
		// 	});
		// });
	},
};
</script>
