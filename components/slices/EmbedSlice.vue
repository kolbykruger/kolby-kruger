<template>
<section class="embed" :class="'embed__'+label">
	<div class="container" v-if="slice.slice_label == 'iframe'" v-html="slice.primary.iframe"></div>
	<div class="container" v-else>
		<prismic-embed :field="slice.primary.oembed" />
	</div>
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'embed-slice',
	data() {
		return {
			label: '',
		}
	},
	mounted() {
		const label = this.slice.slice_label ? this.slice.slice_label : '';
		if (label != '') {
			this.label = label;
		}
	}
}
</script>
