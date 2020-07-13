<template>
<section class="info" :class="label">
	<div class="container">
		<prismic-rich-text :field="slice.primary.text" />
	</div>
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'info-slice',
	data() {
		return {
			label: '',
		}
	},
	mounted() {
		const label = this.slice.slice_label ? this.slice.slice_label : '';
		if (label != '') {
			this.label = 'info__' + label;
		}
	}
}
</script>
