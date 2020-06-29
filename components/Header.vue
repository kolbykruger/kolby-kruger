<template>
<header>
	<nav>
		<ul>
			<li>
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/work">Work</nuxt-link>
				<nuxt-link to="/about">About</nuxt-link>
				<nuxt-link to="/writing">Writing</nuxt-link>
				<nuxt-link to="/lab">Experiments</nuxt-link>
			</li>
		</ul>
	</nav>
</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>
