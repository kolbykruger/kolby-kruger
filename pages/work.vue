<template>
  <main>
    <PageHeading
      heading="work"
      :summary="`Since 2016, I've been building interactive, accessible, and usable websites that help make the web a better place. I have launched ${projects.length} projects since 2016.`"
    />

    <section class="case-study-cards">
      <CaseStudyCard v-for="(item, index) in cases" :key="index" :data="item" :count="index" />
    </section>

    <!-- <section class="project-cards">
      <div class="container">
        <div class="group">
          <ProjectCard
            v-for="(item, index) in featured[0].data.featured"
            :key="index"
            :data="item.project"
          />
        </div>
      </div>
    </section>-->

    <section class="project-list">
      <div class="container">
        <div class="section-heading">
          <h2>the wall</h2>
        </div>
        <div class="group">
          <ProjectListCard v-for="(item, index) in projects" :key="index" :data="item" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import CaseStudyCard from "~/components/CaseStudyCard.vue";
import ProjectListCard from "~/components/ProjectListCard.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "Work",
  layout: "default",
  components: {
    PageHeading,
    CaseStudyCard,
    ProjectListCard,
    SlicesBlock,
  },
  head() {
    return {
      title: "Work",
    };
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
  async asyncData({ $prismic, params, error }) {
    try {
      const project = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        {
          pageSize: 100,
          orderings: "[my.project.name]",
        }
      );
      const caseStudies = await $prismic.api.query(
        $prismic.predicates.at("document.type", "case_study"),
        {
          orderings: "[document.first_publication_date ]",
        }
      );
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "projects"),
        {
          fetchLinks: [
            "project.name",
            "project.cover",
            "project.link",
            "project.role",
            "project.date",
          ],
        }
      );

      return {
        cases: caseStudies.results,
        projects: project.results,
        featured: projects.results,
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found",
      });
    }
  },
};
</script>
