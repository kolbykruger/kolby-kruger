<template>
  <main id="home" @click="regenerateShapes">
    <section class="shapes">
      <div class="container" ref="shapes"></div>
    </section>

    <section
      class="impression"
      ref="impression"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousemove="mouseMove"
    >
      <div class="container">
        <div class="impression__contents">
          <h1>Hi, I'm Kolby.</h1>
          <p
            class="impression__summary"
          >I'm a {{ age }} year old designer & developer from Vermont. I create noteworthy, performant, and custom websites.</p>
          <div class="buttons">
            <nuxt-link to="/work" @click="destroyShapes" class="link__gradient">
              <span class="link__gradient--colorized">
                Explore my work
                <span class="arrow">-></span>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  name: "Home",
  layout: "default",
  head() {
    return {
      title: "Web designer and developer in Burlington, Vermont"
    };
  },
  components: {},
  data() {
    return {
      links: null,
      linkDimensions: null,
      linkCircle: null,
      destroy: false
    };
  },
  computed: {
    age() {
      const date = new Date();
      const year = date.getFullYear();
      return year - 1993;
    }
  },
  mounted() {
    this.destroy = false;
    this.links = this.$el.querySelectorAll(".impression a");
    const cursor = this.$refs.cursor;
    const $el = this;
    this.links.forEach(link => {
      link.addEventListener("mouseenter", function() {
        $el.linkEnter(link, cursor);
      });
      link.addEventListener("mouseleave", function() {
        $el.linkLeave(link, cursor);
      });
    });

    this.regenerateShapes();
  },
  methods: {
    mouseEnter() {
      this.cursorStatus = true;
    },
    mouseLeave() {
      this.cursorStatus = false;
    },
    mouseMove(e) {
      const cursor = this.$refs.cursor;
      const mouse = {
        x: e.pageX,
        y: e.pageY
      };
      // TweenMax.to(cursor, {
      // 	left: mouse.x,
      // 	top: mouse.y
      // });
    },
    linkEnter(link, cursor) {
      this.linkDimensions = link.getBoundingClientRect();
      this.linkCircle = link.querySelector("span");
      link.classList.add("cursor--entered");
    },
    linkLeave(link, cursor) {
      link.classList.remove("cursor--entered");
    },
    regenerateShapes() {
      console.log(this.destroy);

      if (this.destroy) {
        return false;
      }

      const shapeCount = 40;
      const shapes = this.$refs.shapes;
      const shapeList = shapes.querySelectorAll(".shape");
      const shapeOptions = [
        "shape__circle",
        "shape__circle",
        "shape__circle",
        "shape__triangle",
        "shape__triangle",
        "shape__triangle-circle",
        "shape__triangle-circle",
        "shape__triangle-triangle"
      ];
      const type = [
        "shape__circle--half",
        "shape__circle--quarter",
        "shape__circle--full",
        "shape__circle--split-shared",
        "shape__circle--split-apart"
      ];
      const rotation = ["90", "180", "270"];
      const colors = ["primary", "secondary", "tertiary"];
      const size = [1, 2];
      const timing = [1, 2, 3];
      const funct = [1, 2, 3];
      const delay = [1, 2, 3];
      const direction = [90, -90];

      shapes.parentNode.classList.remove("animate-in");
      shapes.innerHTML = "";
      let lastSize = 1;

      for (let i = 0; i < shapeCount; i++) {
        let shape = document.createElement("div");
        shape.classList.add("shape");
        shape.classList.add(
          shapeOptions[Math.floor(Math.random() * shapeOptions.length)]
        );
        shape.setAttribute(
          "data-rotation",
          rotation[Math.floor(Math.random() * rotation.length)]
        );
        shape.setAttribute(
          "data-direction",
          direction[Math.floor(Math.random() * direction.length)]
        );
        shape.setAttribute(
          "data-color",
          colors[Math.floor(Math.random() * colors.length)]
        );
        shape.setAttribute(
          "data-timing",
          timing[Math.floor(Math.random() * timing.length)]
        );
        shape.setAttribute(
          "data-delay",
          delay[Math.floor(Math.random() * delay.length)]
        );
        shape.setAttribute(
          "data-funct",
          funct[Math.floor(Math.random() * funct.length)]
        );

        const randomSize = size[Math.floor(Math.random() * size.length)];
        if (lastSize == 2) {
          shape.setAttribute("data-size", 1);
          lastSize = 1;
        } else {
          shape.setAttribute("data-size", randomSize);
          lastSize = randomSize;
        }

        if (shape.classList.contains("shape__circle")) {
          shape.classList.add(type[Math.floor(Math.random() * type.length)]);
        }
        if (
          shape.classList.contains("shape__triangle-circle") ||
          shape.classList.contains("shape__triangle-triangle") ||
          shape.classList.contains("shape__circle--split-shared") ||
          shape.classList.contains("shape__circle--split-apart")
        ) {
          shape.setAttribute(
            "data-color-secondary",
            colors[Math.floor(Math.random() * colors.length)]
          );
        }

        shapes.appendChild(shape);
      }

      setTimeout(function() {
        shapes.parentNode.classList.add("animate-in");
      }, 50);
    },
    destroyShapes() {
      this.destroy = true;
    }
  },
  beforeDestroy() {
    this.destroy = true;
  },
  watch: {
    $route(to, from) {
      this.destroy = true;
    }
  }
};
</script>
