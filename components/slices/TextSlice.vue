<template>
<section class="text" :class="label">
	<div class="container">
		<prismic-rich-text :field="slice.primary.text" />
	</div>
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'text-slice',
	data() {
		return {
			label: '',
		}
	},
	mounted() {
		const label = this.slice.slice_label ? this.slice.slice_label : '';
		if (label != '') {
			this.label = 'text__' + label;
		}
	}
}
</script>
