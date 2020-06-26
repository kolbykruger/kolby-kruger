<template>
<main>

	<PageHeading :heading="$prismic.asText(content.name)" :summary="content.summary" />

	<section class="case-study__cover">
		<div class="container">
			<prismic-image :field="content.screen" />
		</div>
	</section>

	<section class="case-study__meta">
		<div class="container">
			<div class="group">

				<div>
					<p>Client</p>
					<p>{{ content.client }}</p>
				</div>

				<div>
					<p>Year</p>
					<p>{{ content.year }}</p>
				</div>

				<div>
					<p>Timeline</p>
					<p>{{ content.timeline }}</p>
				</div>

				<div>
					<p>Role</p>
					<p>
						<span v-for="(item, index) in content.role" :key="index">
							{{ item.tag }}
						</span>
					</p>
				</div>

				<div>
					<p>Tech</p>
					<p>{{ content.technologies }}</p>
				</div>

				<div>
					<p>Website</p>
					<p>
						<a href="">{{ content.website.url }}</a>
					</p>
				</div>

			</div>
		</div>
	</section>

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

	}
}
</script>
