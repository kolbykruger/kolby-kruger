<template>
	<main>
		<PageHeading heading="about" summary="Kolby Kruger — Designer & Developer" />

		<article>
			<section class="about about__cover">
				<div class="container">
					<LazyImage :src="doc.data.cover" mobile="591" tablet="911" laptop="1068" desktop="1068" aspect />
				</div>
			</section>

			<Cross ref="cross" class="cross" />

			<section class="about about__greeting">
				<div class="container">
					<div class="columns">
						<div class="column column--1">
							<h2 class="font-size__3">{{ $prismic.asText(doc.data.greeting[0].title) }}</h2>
						</div>
						<div class="column column--2">
							<prismic-rich-text :field="doc.data.greeting[0].description" />
						</div>
					</div>
				</div>
			</section>

			<section class="about about__process">
				<div class="container">
					<div class="columns">
						<div class="column column--1">
							<h2 class="font-size__3">{{ $prismic.asText(process.data.name) }}</h2>
						</div>
						<div class="column column--2">
							<prismic-rich-text :field="process.data.description" />
							<SlicesBlock :slices="process.data.body" />
						</div>
					</div>
				</div>
			</section>

			<section class="about about__work">
				<div class="container">
					<div class="columns">
						<div class="column column--1">
							<h2 class="font-size__3">{{ $prismic.asText(doc.data.work[0].title) }}</h2>
						</div>
						<div class="column column--2">
							<prismic-rich-text :field="doc.data.work[0].description" />
						</div>
					</div>
				</div>
			</section>

			<section class="about about__background">
				<div class="container">
					<div class="columns">
						<div class="column column--1">
							<h2 class="font-size__3">{{ $prismic.asText(doc.data.background[0].title) }}</h2>
						</div>
						<div class="column column--2">
							<prismic-rich-text :field="doc.data.background[0].description" />
						</div>
					</div>
				</div>
			</section>
		</article>
	</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';
import Cross from '~/assets/graphics/cross.svg?inline';
import { gsap, ScrollTrigger, TweenMax } from 'gsap/all';

export default {
	name: 'About',
	layout: 'default',
	components: {
		PageHeading,
		SlicesBlock,
		Cross,
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

		const cross = this.$refs.cross;
		gsap.to(cross, {
			rotate: '+=360',
			scrollTrigger: {
				trigger: cross,
				start: 'bottom bottom',
				end: 'bottom top',
				pin: false,
				scrub: 0.5,
			},
		});
	},
};
</script>
<style lang="scss">
.cross-1 {
	width: 180px;
	height: 180px;
	left: 10%;
	bottom: 15%;
	position: absolute;
	mix-blend-mode: difference;
}
</style>
