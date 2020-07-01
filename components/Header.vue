<template>
<header class="header">
	<div class="container">
		<div class="group">
			<button @click="toggleNavigation" :class="{ 'active': navigation }" class="navicon" ref="navicon">
				<div>
					<svg viewBox="0 0 46 46">

						<rect x="2" y="23" width="6" height="6" rx="6" />
						<rect x="20" y="23" width="6" height="6" rx="6" />
						<rect x="38" y="23" width="6" height="6" rx="6" />

					</svg>
				</div>
			</button>
		</div>
	</div>
	<Navigation :status="navigation" />
</header>
</template>

<script>
import Navigation from '~/components/Navigation.vue';
import TweenMax from 'gsap';

export default {
	name: 'Header',
	data() {
		return {
			navigation: false,
			navicon: null,
			naviconDimensions: null,
		}
	},
	components: {
		Navigation
	},
	methods: {
		toggleNavigation() {
			this.navigation = !this.navigation;
		},
		linkEnter(link) {
			this.naviconDimensions = link.getBoundingClientRect();
			link.classList.add('cursor--entered')
		},
		linkLeave(link) {
			link.classList.remove('cursor--entered')
			this.resetLink(link)
		},
		resetLink(link) {
			TweenMax.to(link, 1.2, {
				x: 0,
				y: 0,
				skewY: 0,
			})
		},
		linkMove(link, event, $el) {
			const rel = {
				x: (event.clientX - $el.naviconDimensions.left) - ($el.naviconDimensions.width / 2),
				y: (event.clientY - $el.naviconDimensions.top) - ($el.naviconDimensions.height / 2)
			}
			TweenMax.to(link, 1.2, {
				x: rel.x / $el.naviconDimensions.width * 40,
				y: rel.y / $el.naviconDimensions.height * 30,
				skewY: (rel.y * -0.15),
			});
		}
	},
	mounted() {
		this.navicon = this.$refs.navicon;
		const navicon = this.$el.querySelector('.navicon');

		const $el = this;
		navicon.addEventListener('mouseenter', function() {
			$el.linkEnter(navicon)
		})
		navicon.addEventListener('mouseleave', function() {
			$el.linkLeave(navicon)
		})
		navicon.addEventListener('mousemove', function(event) {
			$el.linkMove(navicon, event, $el)
		})
	},
	watch: {
		'$route'() {
			this.navigation = false
		}
	}
}
</script>
