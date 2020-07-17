<template>
	<div>
		<section class="case-study-cards">
			<div class="carousel" ref="flickity">
				<CaseStudyCard v-for="(item, index) in cases" :key="index" :data="item" :count="index" />
			</div>

			<button class="flickity-btn flickity-btn__prev" @click="previous()">
				<span class="flickity-btn__text">{{ prevButton }}</span>
			</button>
			<button class="flickity-btn flickity-btn__next" @click="next()">
				<span class="flickity-btn__text">{{ nextButton }}</span>
			</button>
		</section>

		<section class="project-cards">
			<div class="container">
				<div class="section-heading">
					<h2>
						<span class="font-size__1">{{ projects.length }}</span>
						<br />projects launched since 2016
					</h2>
				</div>
				<div class="group">
					<ProjectCard v-for="(item, index) in featured[0].data.featured" :key="index" :data="item.project" />
				</div>
			</div>
		</section>

		<section class="project-list">
			<div class="container">
				<div class="section-heading">
					<h2>the wall</h2>
				</div>
				<div class="group">
					<ProjectListCard v-for="(item, index) in projects" :key="index" :data="item" />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import CaseStudyCard from '~/components/CaseStudyCard.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import ProjectListCard from '~/components/ProjectListCard.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';

let Flickity = {};
if (process.browser) {
	Flickity = require('flickity');
}

export default {
	name: 'Work',
	layout: 'default',
	components: {
		PageHeading,
		CaseStudyCard,
		ProjectCard,
		ProjectListCard,
		SlicesBlock,
	},
	head() {
		return {
			title: 'Work',
		};
	},
	data() {
		return {
			flick: null,
			nextButton: 'Next',
			prevButton: 'Back',
		};
	},
	mounted() {
		const carousel = this.$refs.flickity;
		const $el = this;

		if (carousel) {
			this.flick = new Flickity(carousel, {
				cellSelector: '.case-study-card',
				wrapAround: true,
				adaptiveHeight: false,
				cellAlign: 'center',
				prevNextButtons: false,
				pageDots: true,
				imagesLoaded: true,
				initialIndex: 0,
				on: {
					ready: function() {
						$el.updateFlickityButtons(0, $el);
					},
					change: function(index) {
						$el.updateFlickityButtons(index, $el);
					},
				},
			});
		}
	},
	methods: {
		next() {
			this.flick.next();
		},
		previous() {
			this.flick.previous();
		},
		updateFlickityButtons(index, $el) {
			let nextIndex = index + 1,
				prevIndex = index - 1;

			if (nextIndex == $el.cases.length) {
				nextIndex = 0;
			}
			if (prevIndex == -1) {
				prevIndex = $el.cases.length - 1;
			}

			this.nextButton = $el.cases[nextIndex].data.name[0].text;
			this.prevButton = $el.cases[prevIndex].data.name[0].text;
		},
	},
	async asyncData({ $prismic, params, error }) {
		try {
			const project = await $prismic.api.query($prismic.predicates.at('document.type', 'project'), {
				pageSize: 100,
				orderings: '[my.project.name]',
			});
			const caseStudies = await $prismic.api.query($prismic.predicates.at('document.type', 'case_study'), {
				orderings: '[document.first_publication_date ]',
			});
			const projects = await $prismic.api.query($prismic.predicates.at('document.type', 'projects'), {
				fetchLinks: ['project.name', 'project.cover', 'project.link', 'project.role', 'project.date'],
			});

			return {
				cases: caseStudies.results,
				projects: project.results,
				featured: projects.results,
			};
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found',
			});
		}
	},
};
</script>
