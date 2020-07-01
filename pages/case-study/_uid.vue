<template>
<main>

	<article>

		<!-- <PageHeading :heading="$prismic.asText(content.name)" :summary="content.summary" /> -->
		<section class="page-heading page-heading__left">
			<div class="container">
				<div class="columns">
					<div class="column column__1">
						<h1 class="page-heading__heading">{{ $prismic.asText(content.name) }}</h1>
						<p class="page-heading__summary">{{ content.summary }}</p>
					</div>
					<div class="column column__2">
						<div class="case-study__meta">
							<p>{{ content.year }}</p>
							<p>
								<span v-for="(item, index) in content.role" :key="index">
									{{ item.tag }}{{ delimiter(index + 1, content.role.length) }}
								</span>
							</p>
							<p>{{ content.technologies }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="case-study__cover">
			<div class="container">
				<prismic-image :field="content.screen" />
			</div>
		</section>

		<slices-block :slices="slices" />

	</article>

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
			title: 'Case Study',
		}
	},
	async asyncData({
		$prismic,
		params,
		error
	}) {
		try {
			// Query to get post content
			const document = (await $prismic.api.getByUID('case_study', params.uid)).data

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
		delimiter(index, length) {
			if (index != length) {
				return `, `
			}
		}
	}
}
</script>
