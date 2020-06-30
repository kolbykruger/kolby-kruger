<template>
<main>

	<section class="impression" ref="impression" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="mouseMove">
		<div class="container">

			<div class="impression__contents">
				<p class="impression__intro">Hello,</p>
				<h1><span>my&nbsp;</span><span>name&nbsp;</span><span>is&nbsp;</span><span><b>Kolby</b></span></h1>
				<p class="impression__summary">I'm a {{ age }} year old designer & developer from Vermont. I aspire to create noteworthy, performant, and custom websites.</p>
			</div>

			<div class="buttons">
				<nuxt-link to="/work">Explore my work</nuxt-link>
				<nuxt-link to="/about">More about me</nuxt-link>
			</div>

		</div>
	</section>

</main>
</template>

<script>
import {
	TweenMax
} from 'gsap'

export default {
	name: 'Home',
	layout: 'default',
	head() {
		return {
			title: 'Web designer and developer in Burlington, Vermont'
		}
	},
	data() {
		return {
			links: null,
			linkDimensions: null,
			linkCircle: null,
		}
	},
	computed: {
		age() {
			const date = new Date();
			const year = date.getFullYear();
			return year - 1993;
		}
	},
	mounted() {
		this.links = this.$el.querySelectorAll('.impression a');
		const cursor = this.$refs.cursor;
		const $el = this;
		this.links.forEach((link) => {
			link.addEventListener('mouseenter', function() {
				$el.linkEnter(link, cursor)
			})
			link.addEventListener('mouseleave', function() {
				$el.linkLeave(link, cursor)
			})
			link.addEventListener('mousemove', function(event) {
				$el.linkMove(link, cursor, event, $el)
			})
		})
	},
	methods: {
		mouseEnter() {
			this.cursorStatus = true
		},
		mouseLeave() {
			this.cursorStatus = false
		},
		mouseMove(e) {
			const cursor = this.$refs.cursor;
			const mouse = {
				x: e.pageX,
				y: e.pageY
			}
			// TweenMax.to(cursor, {
			// 	left: mouse.x,
			// 	top: mouse.y
			// });
		},
		linkEnter(link, cursor) {
			this.linkDimensions = link.getBoundingClientRect();
			this.linkCircle = link.querySelector('span');
			link.classList.add('cursor--entered')
		},
		linkLeave(link, cursor) {
			link.classList.remove('cursor--entered')
			this.resetLink(link)
		},
		resetLink(link) {
			TweenMax.to(link, 1.2, {
				x: 0,
				y: 0
			})
		},
		linkMove(link, cursor, event, $el) {
			const rel = {
				x: (event.clientX - $el.linkDimensions.left) - ($el.linkDimensions.width / 2),
				y: (event.clientY - $el.linkDimensions.top) - ($el.linkDimensions.height / 2)
			}
			TweenMax.to(link, 1.2, {
				x: rel.x / $el.linkDimensions.width * 40,
				y: rel.y / $el.linkDimensions.height * 30,
			});
		}
	}
}
</script>
