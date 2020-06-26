<template>
<section>

	<h1>Home</h1>

	<!-- Slices block component -->
	<!-- <slices-block :slices="slices"/> -->
</section>
</template>

<script>
// Imports for all components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
	name: 'Home',
	layout: 'homepage',
	components: {
		SlicesBlock
	},
	head() {
		return {
			title: 'Prismic Nuxt.js Multi Page Website',
		}
	},
}
</script>
