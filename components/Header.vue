<template>
  <header class="header">
    <div class="container">
      <div class="group">
        <button
          @click="toggleNavigation"
          :class="{ 'active': navigation }"
          class="navicon"
          ref="navicon"
          :aria-label="naviconLabel"
        >
          <div class="navicon__container">
            <!-- <svg viewBox="0 0 46 46">
						<rect x="2" y="23" width="6" height="6" rx="6" />
						<rect x="20" y="23" width="6" height="6" rx="6" />
						<rect x="38" y="23" width="6" height="6" rx="6" />
            </svg>-->
            <span class="navicon__bars">
              <span class="navicon__bar navicon__bar--one"></span>
              <span class="navicon__bar navicon__bar--two"></span>
              <span class="navicon__bar navicon__bar--three"></span>
            </span>
          </div>
        </button>
      </div>
    </div>
    <Navigation :status="navigation" />
  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import TweenMax from "gsap";

export default {
  name: "Header",
  data() {
    return {
      navigation: false,
      navicon: null,
      naviconDimensions: null,
      naviconEntered: false,
      mobile: false
    };
  },
  components: {
    Navigation
  },
  computed: {
    naviconLabel() {
      if (this.navigation) {
        return "Close Menu";
      } else {
        return "Open Menu";
      }
    }
  },
  methods: {
    toggleNavigation() {
      this.navigation = !this.navigation;
    },
    linkEnter(link, rects) {
      this.naviconDimensions = link.getBoundingClientRect();
      link.classList.add("cursor--entered");
      this.naviconEntered = true;
    },
    linkLeave(link, rects) {
      link.classList.remove("cursor--entered");
      this.resetLink(link);
      this.naviconEntered = false;
    },
    resetLink(link) {
      TweenMax.to(link, 0.2, {
        x: 0,
        y: 0,
        skewY: 0
      });
    },
    linkMove(link, event, $el) {
      if (!$el.naviconDimensions || $el.mobile) {
        return false;
      }

      const rel = {
        x:
          event.clientX -
          $el.naviconDimensions.left -
          $el.naviconDimensions.width / 2,
        y:
          event.clientY -
          $el.naviconDimensions.top -
          $el.naviconDimensions.height / 2
      };
      TweenMax.to(link, 0.2, {
        x: (rel.x / $el.naviconDimensions.width) * 40,
        y: (rel.y / $el.naviconDimensions.height) * 30,
        skewY: rel.x * -0.05
      });
    },
    linkClick(link, rects, event, $el) {}
  },
  mounted() {
    this.navicon = this.$refs.navicon;
    const navicon = this.$el.querySelector(".navicon");
    const rects = {
      one: navicon.querySelector("rect:nth-of-type(1)"),
      two: navicon.querySelector("rect:nth-of-type(2)"),
      three: navicon.querySelector("rect:nth-of-type(3)")
    };

    if (screen.width < 900) {
      this.mobile = true;
    }

    const $el = this;
    navicon.addEventListener("mouseenter", function() {
      $el.linkEnter(navicon, rects);
    });
    navicon.addEventListener("mouseleave", function() {
      $el.linkLeave(navicon, rects);
    });
    navicon.addEventListener("mousemove", function(event) {
      $el.linkMove(navicon, event, $el);
    });
    navicon.addEventListener("click", function(event) {
      $el.linkClick(navicon, rects, event, $el);
    });
  },
  watch: {
    $route() {
      this.navigation = false;
    }
  }
};
</script>
