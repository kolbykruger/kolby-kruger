<template>
    <div class="case-study-card" :class="label" @mousemove="mouseMove" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mouseout="mouseOut">

        <div class="case-study-card__layers">

            <div class="case-study-card__layer case-study-card__layer--1" ref="layer1">
                <prismic-image :field="data.data.layer_1" />
            </div>

            <div class="case-study-card__layer case-study-card__layer--2" ref="layer2">
                <div class="case-study-card__details">
                    <h1 class="case-study-card__title">{{ $prismic.asText(data.data.name) }}</h1>
                    <nuxt-link class="button case-study-card__button" :to="link">View case study</nuxt-link>
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
    import { TweenMax } from 'gsap'

    export default {
        name: 'CaseStudyCard',
        props: ['data', 'count'],
        data() {
            return {
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
              active: false,
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
          this.label = this.data.data.class_name ? 'case-study-card__'+this.data.data.class_name : '';

          if (this.count === 0) {
              this.label = this.label+' is-selected';
          }

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
                  const layer1 = this.$refs.layer1,
                        layer3 = this.$refs.layer3;
                  TweenMax.to(layer1, 1.2, {
                      y: 0,
                      x: 0,
                      rotateZ: 0,
                      rotateY: 0,
                      rotateX: 0,
                      scale: 0.86,
                  });
                  TweenMax.to(layer3, 1.8, {
                      y: 0,
                      x: 0,
                      rotateZ: 0,
                      rotateY: 0,
                      rotateX: 0,
                      scale: 0.86,
                  });
              },
              mouseMove(e) {
                  if (this.active) {
                      const layer1 = this.$refs.layer1,
                            layer3 = this.$refs.layer3;
                        const cursor = {
                            x: (this.viewport.center.x - e.clientX) * -1,
                            y: (this.viewport.center.y - e.clientY) * -1
                        }
                        TweenMax.to(layer1, 1.2, {
                            y: 0.02 * cursor.y,
                            x: 0.04 * cursor.x,
                            rotateZ: 0.0015 * cursor.x,
                            rotateY: 0.003 * cursor.x,
                            rotateX: 0.003 * cursor.y,
                            scale: 0.86,
                        });
                        TweenMax.to(layer3, 1.8, {
                            y: 0.008 * cursor.y,
                            x: 0.025 * cursor.x,
                            rotateZ: 0.0015 * cursor.x,
                            rotateY: 0.003 * cursor.x,
                            rotateX: 0.003 * cursor.y,
                            scale: 0.86,
                        });
                  }
              }
          },
    }
</script>
