<template>
<section class="page-heading" :class="'page-heading__'+align" v-if="visible != false">
	<div class="container">
		<h1 class="page-heading__heading">{{ heading }}</h1>
		<p class="page-heading__summary">{{ summary }}</p>
	</div>
</section>
</template>

<script>
export default {
	name: 'PageHeading',
	props: [
		'heading',
		'summary',
		'visibility',
		'alignment'
	],
	data() {
		return {
			visible: null,
			align: null
		}
	},
	mounted() {
		this.visible = this.visibility ? this.visibility : true;
		this.align = this.alignment ? this.alignment : 'center';
	}
}
</script>
