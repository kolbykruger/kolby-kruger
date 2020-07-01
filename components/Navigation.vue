<template>
<nav class="navigation" :class="{ 'navigation--open': status }">
	<div class="container">
		<div class="navigation__content">
			<ul class="navigation__links">
				<li>
					<nuxt-link to="/">Home</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/work">Work</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/about">About</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/lab">Lab</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/writing">Writing</nuxt-link>
				</li>
			</ul>
			<ul class="navigation__contact">
				<li>say hello</li>
			</ul>
		</div>
	</div>
</nav>
</template>

<script>
export default {
	name: 'Navigation',
	props: [
		'status'
	],
	methods: {

	},
}
</script>
