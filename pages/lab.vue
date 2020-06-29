<template>
<main>

	<PageHeading heading="experiments" summary="a collection of things I've built over the years" />

	<input type="text" placeholder="Search...">

	<section class="experiment-cards" v-if="docs.length !== 0">
		<div class="container">
			<Experiment v-for="(post, index) in docs" :key="index" :post="post" />
		</div>
	</section>


</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import Experiment from '~/components/Experiment.vue'

export default {
	name: 'Lab',
	layout: 'default',
	components: {
		PageHeading,
		Experiment,
	},
	head() {
		return {
			title: 'Writing',
		}
	},
	async asyncData({
		$prismic,
		error
	}) {
		try {
			const posts = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'experiment')
			)

			return {
				docs: posts.results,
			}
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found'
			})
		}
	},
	methods: {
		searchExperiments() {
			console.log(this.docs)
		}
	}
}
</script>
