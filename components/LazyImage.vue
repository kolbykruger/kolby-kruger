<template>
<picture>

	<source :data-srcset="sizes.desktop" media="(min-width: 1920px)">
	<source :data-srcset="sizes.laptop" media="(min-width: 1200px)">
	<source :data-srcset="sizes.tablet" media="(min-width: 960px)">
	<source :data-srcset="sizes.mobile" media="(min-width: 640px)">

	<img class="lazyload" :data-src="src.url" :src="sizes.placeholder" :alt="src.alt" :copyright="src.copyright">

</picture>
</template>

<script>
export default {
	props: [
		'src',
		'mobile',
		'tablet',
		'laptop',
		'desktop',
		'aspect',
		'alt'
	],
	data() {
		return {
			sizes: {
				placeholder: '',
				mobile: '',
				tablet: '',
				laptop: '',
				desktop: ''
			},
		}
	},
	mounted() {

		this.sizes.placeholder = this.src.url + '&colorquant=16&blur=500';
		let aspectRatio = '';
		if (this.aspect) {
			apsectRatio = '&ar=' + this.aspect + '&fit=entropy'
		}

		const mobile = this.mobile ? this.mobile : '640';
		this.sizes.mobile = this.src.url + '&w=' + mobile + aspectRatio;

		const tablet = this.tablet ? this.tablet : '960';
		this.sizes.tablet = this.src.url + '&w=' + tablet + aspectRatio;

		const laptop = this.laptop ? this.laptop : '1200';
		this.sizes.laptop = this.src.url + '&w=' + laptop + aspectRatio;

		const desktop = this.desktop ? this.desktop : '1920';
		this.sizes.desktop = this.src.url + '&w=' + desktop + aspectRatio;

	}
}
</script>
