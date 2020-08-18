<template>
  <div
    class="case-study-card"
    :class="label"
    :style="{ 'background-color': color }"
    ref="card"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    @mousemove="mouseMove"
  >
    <nuxt-link ref="button" class="case-study-card__button" :to="link">
      <div class="case-study-card__layers">
        <div class="case-study-card__layer case-study-card__layer--1" ref="layer1">
          <LazyImage :src="data.data.layer_1" />
        </div>

        <div class="case-study-card__layer case-study-card__layer--3" ref="layer3">
          <LazyImage :src="data.data.layer_2" />
        </div>

        <div class="case-study-card__layer case-study-card__layer--2" ref="layer2">
          <div class="case-study-card__details">
            <h1 class="case-study-card__title">{{ $prismic.asText(data.data.name) }}</h1>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
import { gsap, ScrollTrigger, TimelineMax, TweenMax } from "gsap/all";

export default {
  name: "CaseStudyCard",
  props: ["data", "count", "cursorPos"],
  data() {
    return {
      link: "",
      label: "",
      color: "",
      dimensions: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        centerX: 0,
        centerY: 0,
      },
      entered: false,
    };
  },
  created() {
    this.link = LinkResolver(this.data);
  },
  mounted() {
    this.label = this.data.data.class_name
      ? "case-study-card__" + this.data.data.class_name
      : "";
    this.color = this.data.data.color ? this.data.data.color : "#000000";

    this.getObjDimensions();

    window.addEventListener("resize", () => {
      this.getObjDimensions();
    });
  },
  methods: {
    mouseEnter(e) {
      this.entered = true;
    },
    mouseLeave(e) {
      this.entered = true;
      this.resetObjectPos();
    },
    mouseMove(e) {
      const cursorObjPos = {
        x: e.clientX - this.dimensions.left - this.dimensions.centerX,
        y: e.clientY - this.dimensions.top - this.dimensions.centerY,
      };

      const layer1 = this.$refs.layer1,
        layer3 = this.$refs.layer3,
        cursor = this.$refs.cursorPointer;

      requestAnimationFrame(() => {
        gsap.to(layer1, 0.65, {
          x: cursorObjPos.x * 0.064,
          y: cursorObjPos.y * 0.08,
          rotateX: cursorObjPos.x * 0.002 * -1,
          rotateY: cursorObjPos.y * 0.002 * -1,
          ease: "circ.out",
        });
        gsap.to(layer3, 0.8, {
          x: cursorObjPos.x * 0.096,
          y: cursorObjPos.y * 0.12,
          rotateX: cursorObjPos.x * 0.003,
          rotateY: cursorObjPos.y * 0.003,
          ease: "circ.out",
        });

        if (this.entered) {
          console.log(cursor);
        }
      });
    },
    resetObjectPos() {
      const layer1 = this.$refs.layer1,
        layer3 = this.$refs.layer3,
        cursor = this.$refs.cursorPointer;

      requestAnimationFrame(() => {
        gsap.to(layer1, 0.65, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          ease: "circ.out",
        });
        gsap.to(layer3, 0.8, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          ease: "circ.out",
        });
      });
    },
    getObjDimensions() {
      const objDims = this.$refs.card.getBoundingClientRect();
      this.dimensions = {
        width: objDims.width.toFixed(2),
        height: objDims.height.toFixed(2),
        left: objDims.left.toFixed(2),
        top: objDims.top.toFixed(2),
        centerX: objDims.width.toFixed(2) / 2,
        centerY: objDims.height.toFixed(2) / 2,
      };
    },
  },
  beforeDestroy() {},
};
</script>
