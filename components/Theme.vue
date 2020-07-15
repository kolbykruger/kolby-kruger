<template>
<div class="theme">
	<div class="theme__switch" :class="'theme__switch--'+mode">
		<button @click="theme('dark')" v-html="IconDark" title="Activate the dark color theme" :class="{ 'active' : mode == 'light'}"></button>
		<button @click="theme('light')" v-html="IconLight" title="Activate the light color theme" :class="{ 'active' : mode == 'dark'}"></button>
	</div>
</div>
</template>

<script>
import IconDark from '~/assets/icons/dark.svg?raw'
import IconLight from '~/assets/icons/light.svg?raw'

export default {
	name: 'Theme',
	components: {
		IconDark,
		IconLight
	},
	data() {
		return {
			IconDark,
			IconLight,
			mode: 'light'
		}
	},
	methods: {
		theme(mode) {
			console.log(mode)
			// this.$colorMode.preference = mode;
			// this.mode = this.$colorMode.preference;
		}
	},
	mounted() {
		// if (this.$colorMode.unknown) {
		// 	this.$colorMode.preference = 'light'
		// }
		//
		// this.mode = this.$colorMode.preference;
	}
}
</script>
