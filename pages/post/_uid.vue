<template>
<section>

	<section class="post__cover">
		<div class="container">
			<prismic-image :field="content.cover"></prismic-image>
		</div>
	</section>

	<article>

		<PageHeading :heading="$prismic.asText(content.title)" :summary="content.summary" alignment="center" />

		<slices-block :slices="slices" />

	</article>

</section>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
	name: 'post',
	components: {
		PageHeading,
		SlicesBlock
	},
	head() {
		return {
			title: 'Post',
		}
	},
	async asyncData({
		$prismic,
		params,
		error
	}) {
		try {
			// Query to get post content
			const document = (await $prismic.api.getByUID('post', params.uid)).data

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
	mounted() {

	}
}
</script>
