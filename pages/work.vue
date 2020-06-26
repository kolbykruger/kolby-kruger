<template>
  <div>

    <section class="case-study-cards">

        <div class="carousel" ref="flickity">
            <CaseStudyCard v-for="(item, index) in cases" :key="index" :data="item"/>
        </div>

        <button class="flickity-btn flickity-btn__prev" @click="previous()">Back</button>
        <button class="flickity-btn flickity-btn__next" @click="next()">Next</button>

    </section>

    <section class="projects">
        <div class="container">
            <slices-block :slices="slices"/>
        </div>
    </section>


  </div>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import CaseStudyCard from '~/components/CaseStudyCard.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

let Flickity = {}
if (process.browser) {
  Flickity = require("flickity")
}

export default {
  name: 'Work',
  layout: 'default',
  components: {
    PageHeading,
    CaseStudyCard,
    SlicesBlock,
  },
  head () {
    return {
      title: 'Work',
    }
  },
  data() {
        return {
            flick: null,
            flickityOptions: {
                wrapAround: true,
                adaptiveHeight: false,
                cellAlign: 'center',
                prevNextButtons: false,
                pageDots: true,
                imagesLoaded: true,
                initialIndex: 0,
                // on: {
                //     ready: function() {
                //         this.cells[0].element.classList.add('POOPY')
                //         console.log('added')
                //     }
                // }
            },
        }
    },
    mounted() {
        const carousel = this.$refs.flickity;
        if (carousel) {
            this.flick = new Flickity(carousel, this.flickityOptions)
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        },
    },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const projects = (await $prismic.api.getSingle('projects')).data;
      const caseStudies = await $prismic.api.query(
          $prismic.predicates.at('document.type', 'case_study')
      )

      return {
        // Set slices as variable
        cases: caseStudies.results,
        content: projects,
        slices: projects.body
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
