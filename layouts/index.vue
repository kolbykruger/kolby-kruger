<template>
	<div>
		<Header />
		<nuxt />
		<Theme />
	</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Theme from '~/components/Theme.vue';

export default {
	components: {
		Header,
		Theme,
	},
	transition: 'page',
};
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95), transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.page-enter,
.page-leave-to {
	opacity: 0;
	transform: translateY(0.625em);
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s;
	opacity: 1;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.nav-enter-active,
.nav-leave-active {
	transition: opacity 0.4s 0.15s, transform 0.4s 0.15s;
	opacity: 1;
	transform: translateY(0);
}
.nav-enter {
	opacity: 0;
	transform: translateY(2em);
}
.nav-active,
.nav-leave-to {
	transition-delay: 0s;
}
.nav-leave-to {
	opacity: 0;
	transform: translateY(0);
}
.card-fade-enter-active,
.card-fade-leave-active {
	transition: all 0.2s;
	max-height: 100%;
	overflow: hidden;
}
.card-fade-enter,
.card-fade-leave-to {
	opacity: 0;
	width: 0 !important;
}
</style>
