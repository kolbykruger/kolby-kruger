<template>
<div>
	<Header />
	<nuxt />
	<Theme />
</div>
</template>

<script>
import Header from '~/components/Header.vue'
import Theme from '~/components/Theme.vue'

export default {
	components: {
		Header,
		Theme
	},
	transition: "page"
}
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition-property: opacity;
	transition-timing-function: ease-in-out;
	transition-duration: 400ms;
}

.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
