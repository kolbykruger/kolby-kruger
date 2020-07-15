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
			this.mode = mode;
			window.localStorage.setItem('theme', mode)
			document.querySelector('HTML').setAttribute('theme', mode);
		}
	},
	beforeMount() {

		let colorSetting = window.localStorage.getItem('theme');

		if (!colorSetting) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				window.localStorage.setItem('theme', 'dark')
				colorSetting = 'dark';
			} else {
				window.localStorage.setItem('theme', 'light');
				colorSetting = 'light';
			}

		} else {
			window.localStorage.setItem('theme', colorSetting);
		}

		document.querySelector('HTML').setAttribute('theme', colorSetting)

	},
	mounted() {
		const colorSetting = window.localStorage.getItem('theme');
		this.mode = colorSetting;
	}
}
</script>
