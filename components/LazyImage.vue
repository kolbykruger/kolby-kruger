<template>
<picture>

	<source v-if="sizes.mobile.dpr1" :data-srcset="sizes.mobile.dpr1+' 1x,'+ sizes.mobile.dpr2+' 2x'" media="(max-width: 640px)">
	<source v-if="sizes.tablet.dpr1" :data-srcset="sizes.tablet.dpr1+' 1x,'+ sizes.tablet.dpr2+' 2x'" media="(max-width: 960px)">
	<source v-if="sizes.laptop.dpr1" :data-srcset="sizes.laptop.dpr1+' 1x,'+ sizes.laptop.dpr2+' 2x'" media="(max-width: 1200px)">
	<source v-if="sizes.desktop.dpr1" :data-srcset="sizes.desktop.dpr1+' 1x,'+ sizes.desktop.dpr2+' 2x'" media="(max-width: 1920px)">
	<source :data-srcset="sizes.tv.dpr1+' 1x,'+ sizes.tv.dpr2+' 2x'" media="(min-width: 1921px)">

	<img class="lazyload" :data-src="sizes.placeholder" :src="sizes.placeholder" :alt="src.alt" :copyright="src.copyright">

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
		'tv',
		'aspect',
		'alt',
		'custom'
	],
	data() {
		return {
			sizes: {
				placeholder: null,
				mobile: {
					dpr1: null,
					dpr2: null
				},
				tablet: {
					dpr1: null,
					dpr2: null
				},
				laptop: {
					dpr1: null,
					dpr2: null
				},
				desktop: {
					dpr1: null,
					dpr2: null
				},
				tv: {
					dpr1: null,
					dpr2: null
				},
				original: null
			},
		}
	},
	mounted() {

		this.sizes.placeholder = this.src.url + '&w=1920&colorquant=16&blur=200';
		this.sizes.original = this.src.url;

		const aspectRatio = this.aspect ? `&ar=${this.aspect}&fit=crop` : '';
		const customProps = this.custom ? this.custom : '';

		const mobile = this.mobile ? this.mobile : '640';
		this.sizes.mobile.dpr1 = this.src.url + '&w=' + mobile + aspectRatio + customProps;
		this.sizes.mobile.dpr2 = this.src.url + '&dpr=2&w=' + mobile + aspectRatio + customProps;

		const tablet = this.tablet ? this.tablet : '960';
		this.sizes.tablet.dpr1 = this.src.url + '&w=' + tablet + aspectRatio + customProps;
		this.sizes.tablet.dpr2 = this.src.url + '&dpr=2&w=' + tablet + aspectRatio + customProps;

		const laptop = this.laptop ? this.laptop : '1200';
		this.sizes.laptop.dpr1 = this.src.url + '&w=' + laptop + aspectRatio + customProps;
		this.sizes.laptop.dpr2 = this.src.url + '&dpr=2&w=' + laptop + aspectRatio + customProps;

		const desktop = this.desktop ? this.desktop : '1920';
		this.sizes.desktop.dpr1 = this.src.url + '&w=' + desktop + aspectRatio + customProps;
		this.sizes.desktop.dpr2 = this.src.url + '&dpr=2&w=' + desktop + aspectRatio + customProps;

		const tv = this.tv ? this.tv : '2560';
		this.sizes.tv.dpr1 = this.src.url + '&w=' + tv + aspectRatio + customProps;
		this.sizes.tv.dpr2 = this.src.url + '&dpr=2&w=' + tv + aspectRatio + customProps;

	}
}
</script>
