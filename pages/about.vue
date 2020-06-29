<template>
<main>

	<PageHeading heading="about me" summary="Kolby Kruger — Designer & Developer" />

	<section class="about about__cover">
		<div class="container">
			<prismic-image :field="doc.data.cover"></prismic-image>
		</div>
	</section>

	<section v-for="(section, index) in doc.data.sections" :key="index" class="about" :class="'about__'+section.title[0].text.toLowerCase()">
		<div class="container">
			<div class="columns">
				<div class="column column--1">
					<h2 class="font-size__3">{{ $prismic.asText(section.title) }}</h2>
				</div>
				<div class="column column--2">
					<prismic-rich-text :field="section.description" />
				</div>
			</div>
		</div>
	</section>

</main>
</template>

<script>
// Imports for all components
import PageHeading from '~/components/PageHeading.vue'

export default {
	name: 'About',
	layout: 'default',
	components: {
		PageHeading,
	},
	async asyncData({
		$prismic,
		error
	}) {
		try {
			const about = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'about')
			)

			return {
				doc: about.results[0]
			}
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found'
			})
		}
	},
	head() {
		return {
			title: '',
		}
	},
}
</script>
