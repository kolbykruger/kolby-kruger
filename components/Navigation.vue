<template>
	<nav class="navigation" :class="{ 'navigation--open': status }">
		<div class="container">
			<div class="navigation__background navigation__background--layer-1">
				<svg viewBox="0 0 50 50">
					<circle cx="25" cy="25" r="25" />
				</svg>
			</div>
			<div class="navigation__background navigation__background--layer-2">
				<svg viewBox="0 0 50 50">
					<circle cx="25" cy="25" r="25" />
				</svg>
			</div>
			<div class="navigation__background navigation__background--layer-3">
				<svg viewBox="0 0 50 50">
					<circle cx="25" cy="25" r="25" />
				</svg>
			</div>
			<div class="navigation__content">
				<ul class="navigation__links" ref="navigationLinks">
					<li>
						<nuxt-link to="/" data-word="home" aria-label="home" class="navigation__link" data-shape="0">
							<span data-letter="h" aria-hidden="true">
								<span data-letter="h">h</span>
							</span>
							<span data-letter="o" aria-hidden="true">
								<span data-letter="o">o</span>
							</span>
							<span data-letter="m" aria-hidden="true">
								<span data-letter="m">m</span>
							</span>
							<span data-letter="e" aria-hidden="true">
								<span data-letter="e">e</span>
							</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link
							to="/work"
							data-word="work"
							aria-label="work"
							class="navigation__link"
							data-shape="1"
						>
							<span data-letter="w" aria-hidden="true">
								<span data-letter="w">w</span>
							</span>
							<span data-letter="o" aria-hidden="true">
								<span data-letter="o">o</span>
							</span>
							<span data-letter="r" aria-hidden="true">
								<span data-letter="r">r</span>
							</span>
							<span data-letter="k" aria-hidden="true">
								<span data-letter="k">k</span>
							</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link
							to="/about"
							data-word="about"
							aria-label="about"
							class="navigation__link"
							data-shape="2"
						>
							<span data-letter="a" aria-hidden="true">
								<span data-letter="a">a</span>
							</span>
							<span data-letter="b" aria-hidden="true">
								<span data-letter="b">b</span>
							</span>
							<span data-letter="o" aria-hidden="true">
								<span data-letter="o">o</span>
							</span>
							<span data-letter="u" aria-hidden="true">
								<span data-letter="u">u</span>
							</span>
							<span data-letter="t" aria-hidden="true">
								<span data-letter="t">t</span>
							</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/lab" data-word="lab" aria-label="lab" class="navigation__link" data-shape="3">
							<span data-letter="l" aria-hidden="true">
								<span data-letter="l">l</span>
							</span>
							<span data-letter="a" aria-hidden="true">
								<span data-letter="a">a</span>
							</span>
							<span data-letter="b" aria-hidden="true">
								<span data-letter="b">b</span>
							</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link
							to="/writing"
							data-word="writing"
							aria-label="writing"
							class="navigation__link"
							data-shape="4"
						>
							<span data-letter="w" aria-hidden="true">
								<span data-letter="w">w</span>
							</span>
							<span data-letter="r" aria-hidden="true">
								<span data-letter="r">r</span>
							</span>
							<span data-letter="i" aria-hidden="true">
								<span data-letter="i">i</span>
							</span>
							<span data-letter="t" aria-hidden="true">
								<span data-letter="t">t</span>
							</span>
							<span data-letter="i" aria-hidden="true">
								<span data-letter="i">i</span>
							</span>
							<span data-letter="n" aria-hidden="true">
								<span data-letter="n">n</span>
							</span>
							<span data-letter="g" aria-hidden="true">
								<span data-letter="g">g</span>
							</span>
						</nuxt-link>
					</li>
				</ul>
				<ul class="navigation__contact">
					<li class="link__gradient">
						<nuxt-link class="link__gradient--colorized" to="/contact">say hello</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navigation',
	props: ['status'],
	mounted() {},
	methods: {},
};
</script>
