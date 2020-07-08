<template>
<div class="case-study-card" :class="label" @mousemove="mouseMove" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mouseout="mouseOut">

	<div class="case-study-card__layers">

		<div class="case-study-card__layer case-study-card__layer--1" ref="layer1">
			<prismic-image :field="data.data.layer_1" />
		</div>

		<div class="case-study-card__layer case-study-card__layer--2" ref="layer2">
			<div class="case-study-card__details">
				<h1 class="case-study-card__title">{{ $prismic.asText(data.data.name) }}</h1>
				<nuxt-link ref="button" class="button case-study-card__button" :to="link">View case study</nuxt-link>
			</div>
		</div>

		<div class="case-study-card__layer case-study-card__layer--3" ref="layer3">
			<prismic-image :field="data.data.layer_2" />
		</div>

	</div>

</div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
import {
	TweenMax
} from 'gsap'

export default {
	name: 'CaseStudyCard',
	props: ['data', 'count'],
	data() {
		return {
			destroy: false,
			link: '',
			date: '',
			label: '',
			active: '',
			customClass: '',
			viewport: {
				width: 0,
				height: 0,
				center: {
					x: 0,
					y: 0
				}
			},
			mobile: false,
			active: false,
			button: null,
			buttonDimensions: null,
		}
	},
	created() {
		this.link = LinkResolver(this.data)
		// this.date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(this.post.last_publication_date))
	},
	mounted() {
		this.viewport.width = screen.width;
		this.viewport.height = screen.height;
		this.viewport.center.x = screen.width / 2;
		this.viewport.center.y = screen.height / 2;
		this.label = this.data.data.class_name ? 'case-study-card__' + this.data.data.class_name : '';
		//initialize the tweens on the layers to provide better initial scaling
		this.resetTweenMax()

		//check size
		if (screen.width < 900) {
			this.mobile = true
		}

		if (this.count === 0) {
			this.label = this.label + ' is-selected';
		}

		//Button
		this.button = this.$refs.button;
		const button = this.$el.querySelector('.case-study-card__button');

		const $el = this;
		button.addEventListener('mouseenter', function() {
			$el.buttonEnter(button)
		})
		button.addEventListener('mouseleave', function() {
			$el.buttonLeave(button)
		})
		button.addEventListener('mousemove', function(event) {
			$el.buttonMove(button, event, $el)
		})

		if (window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation', function(event) {
				$el.handleOrientation(event, $el)
			});
		}

		window.addEventListener('resize', function() {
			if (screen.width < 900) {
				$el.mobile = true
			} else {
				$el.mobile = false
			}
			$el.viewport.width = screen.width;
			$el.viewport.height = screen.height;
			$el.viewport.center.x = screen.width / 2;
			$el.viewport.center.y = screen.height / 2;
		})

	},
	methods: {
		mouseEnter() {
			this.active = true
			this.resetTweenMax()
		},
		mouseLeave() {
			this.active = false
			this.resetTweenMax()
		},
		mouseOut(e) {
			if (!e.relatedTarget && !e.toElement) {
				this.active = false
				this.resetTweenMax()
			}
		},
		resetTweenMax() {
			if (!this.destroy) {

				const layer1 = this.$refs.layer1,
					layer3 = this.$refs.layer3;

				TweenMax.to(layer1, 1.2, {
					y: 0,
					x: 0,
					rotateZ: 0,
					rotateY: 0,
					rotateX: 0,
					scale: 1.12,
				});
				TweenMax.to(layer3, 1.8, {
					y: 0,
					x: 0,
					rotateZ: 0,
					rotateY: 0,
					rotateX: 0,
					scale: 1.06,
				});
			}
		},
		mouseMove(e) {
			if (this.active && !this.destroy && !this.mobile) {

				const layer1 = this.$refs.layer1,
					layer3 = this.$refs.layer3;

				const cursor = {
					x: (this.viewport.center.x - e.clientX) * -1,
					y: (this.viewport.center.y - e.clientY) * -1
				}

				let dropShadow = {
					x: 0.05 * cursor.x,
					y: (0.10 * cursor.y) / 2 + 15,
					scale: Math.abs(((cursor.x + cursor.y) / 2) * 0.1) * 1.5,
				}

				TweenMax.to(layer1, 1.2, {
					y: 0.02 * cursor.y,
					x: 0.04 * cursor.x,
					rotateZ: 0.0015 * cursor.x,
					rotateY: 0.005 * cursor.x,
					rotateX: 0.005 * cursor.y,
					scale: 1.12,
				});

				TweenMax.to(layer1.childNodes[0], 1, {
					filter: `drop-shadow(${dropShadow.x}px ${dropShadow.y}px 25px rgba(34, 34, 34, 0.12))`,
				})

				TweenMax.to(layer3, 1.8, {
					y: 0.008 * cursor.y,
					x: 0.025 * cursor.x,
					rotateZ: 0.0015 * cursor.x,
					rotateY: 0.005 * cursor.x,
					rotateX: 0.005 * cursor.y,
					scale: 1.06,
				});

				TweenMax.to(layer3.childNodes[0], 1, {
					filter: `drop-shadow(${dropShadow.x}px ${dropShadow.y}px 25px rgba(34, 34, 34, 0.08))`,
				})
			}
		},
		handleOrientation(event, $el) {

			if ($el.mobile) {

				requestAnimationFrame(() => {

					const layer1 = $el.$refs.layer1,
						layer3 = $el.$refs.layer3;

					const orientation = {
						x: event.beta,
						y: event.gamma
					}

					TweenMax.to(layer1, 1, {
						y: 0.35 * orientation.x,
						x: 0.6 * orientation.y,
					});

					TweenMax.to(layer3, 1.2, {
						y: 0.5 * orientation.x,
						x: 0.8 * orientation.y,
					});

				})
			}

		},
		buttonEnter(button) {
			this.buttonDimensions = button.getBoundingClientRect()
			button.classList.add('cursor--entered')
		},
		buttonLeave(button) {
			button.classList.remove('cursor--entered')
			this.resetButton(button)
		},
		resetButton(button) {
			TweenMax.to(button, 1.2, {
				x: 0,
				y: 0,
			})
		},
		buttonMove(button, event, $el) {

			if (!$el.buttonDimensions) {
				return false
			}

			const rel = {
				x: (event.clientX - $el.buttonDimensions.left) - ($el.buttonDimensions.width / 2),
				y: (event.clientY - $el.buttonDimensions.top) - ($el.buttonDimensions.height / 2)
			}

			TweenMax.to(button, 1.2, {
				x: rel.x / $el.buttonDimensions.width * 40,
				y: rel.y / $el.buttonDimensions.height * 30,
			});

		},
	},
	beforeDestroy() {
		this.destroy = true;
	}
}
</script>
