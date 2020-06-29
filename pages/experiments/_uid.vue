<template>
<main>

	<PageHeading :heading="$prismic.asText(content.name)" :summary="content.summary" />

	<slices-block :slices="slices" />

</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
	name: 'case-study',
	components: {
		PageHeading,
		SlicesBlock
	},
	head() {
		return {
			title: 'Experiment',
		}
	},
	async asyncData({
		$prismic,
		params,
		error
	}) {
		try {
			// Query to get post content
			const document = (await $prismic.api.getByUID('experiment', params.uid)).data

			return {
				// Set slices as variable
				content: document,
				slices: document.body
			}
		} catch (e) {
			// Returns error page
			error({
				statusCode: 404,
				message: 'Page not found'
			})
		}
	},
	methods: {

	}
}
</script>
