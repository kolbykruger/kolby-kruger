<template>
<section class="text" :class="label">
	<div class="container">
		<p class="vertical" v-if="slice.primary.vertical">
			{{ slice.primary.vertical }}
		</p>
		<p class="sup" v-if="slice.primary.sup">{{ slice.primary.sup }}</p>
		<prismic-rich-text v-if="slice.primary.heading" class="heading" :field="slice.primary.heading" />
		<div class="group">
			<prismic-rich-text :field="slice.primary.text" />
		</div>
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
