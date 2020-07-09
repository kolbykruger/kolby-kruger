<template>
<main id="home" @click="regenerateShapes">

	<div class="shapes" ref="shapes"></div>

	<section class="impression" ref="impression" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="mouseMove">
		<div class="container">

			<div class="impression__contents">
				<h1>Hi, I'm Kolby.</h1>
				<p class="impression__summary">I'm a {{ age }} year old designer & developer from Vermont. I create noteworthy, performant, and custom websites.</p>
				<div class="buttons">
					<nuxt-link to="/work">Explore my work <span class="arrow">-></span></nuxt-link>
				</div>
			</div>

		</div>
	</section>

</main>
</template>

<script>
import {
	TweenMax
} from 'gsap'
import Arc from '~/assets/graphic/arc.svg?raw'

export default {
	name: 'Home',
	layout: 'default',
	head() {
		return {
			title: 'Web designer and developer in Burlington, Vermont'
		}
	},
	components: {

	},
	data() {
		return {
			links: null,
			linkDimensions: null,
			linkCircle: null,
			Arc,
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

		this.regenerateShapes();
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
			requestAnimationFrame(() => {
				const rel = {
					x: (event.clientX - $el.linkDimensions.left) - ($el.linkDimensions.width / 2),
					y: (event.clientY - $el.linkDimensions.top) - ($el.linkDimensions.height / 2)
				}
				TweenMax.to(link, 1.2, {
					x: rel.x / $el.linkDimensions.width * 25,
					y: rel.y / $el.linkDimensions.height * 25,
				});
			});
		},
		regenerateShapes() {

			const shapeCount = 40;
			const shapes = this.$refs.shapes;
			const shapeList = shapes.querySelectorAll('.shape');
			const shapeOptions = ['shape__circle', 'shape__triangle', 'shape__triangle-circle']
			const type = ['shape__circle--half', 'shape__circle--quarter', 'shape__circle--full']
			const rotation = ['90', '180', '270'];
			const colors = ['primary', 'secondary', 'tertiary'];
			const size = [1, 2];
			const timing = [1, 2, 3];
			const delay = [1, 2, 3];
			const direction = [90, -90];

			shapes.classList.remove('animate-in')
			shapes.innerHTML = '';
			let lastSize = 1;

			for (let i = 0; i < shapeCount; i++) {

				let shape = document.createElement('div');
				shape.classList.add('shape');
				shape.classList.add(shapeOptions[Math.floor(Math.random() * shapeOptions.length)])
				shape.setAttribute('data-rotation', rotation[Math.floor(Math.random() * rotation.length)])
				shape.setAttribute('data-direction', direction[Math.floor(Math.random() * direction.length)])
				shape.setAttribute('data-color', colors[Math.floor(Math.random() * colors.length)])
				shape.setAttribute('data-timing', timing[Math.floor(Math.random() * timing.length)])
				shape.setAttribute('data-delay', delay[Math.floor(Math.random() * delay.length)])

				const randomSize = size[Math.floor(Math.random() * size.length)];
				if (lastSize == 2) {
					shape.setAttribute('data-size', 1)
					lastSize = 1;
				} else {
					shape.setAttribute('data-size', randomSize)
					lastSize = randomSize;
				}

				if (shape.classList.contains('shape__circle')) {
					shape.classList.add(type[Math.floor(Math.random() * type.length)]);
				}
				if (shape.classList.contains('shape__triangle-circle')) {
					shape.setAttribute('data-color-secondary', colors[Math.floor(Math.random() * colors.length)])
				}

				shapes.appendChild(shape)
			}

			setTimeout(function() {
				shapes.classList.add('animate-in');
			}, 50)
		}
	}
}
</script>
