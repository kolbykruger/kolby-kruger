<template>
<main>

	<PageHeading heading="about" summary="Kolby Kruger — Designer & Developer" />

	<section class="about about__cover">
		<div class="container">
			<prismic-image :field="doc.data.cover"></prismic-image>
		</div>
	</section>

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

</main>
</template>

<script>
// Imports for all components
import PageHeading from '~/components/PageHeading.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
	name: 'About',
	layout: 'default',
	components: {
		PageHeading,
		SlicesBlock
	},
	async asyncData({
		$prismic,
		error
	}) {
		try {
			const about = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'about')
			)
			const process = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'process')
			)

			return {
				doc: about.results[0],
				process: process.results[0]
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
			title: 'About',
		}
	},
}
</script>
