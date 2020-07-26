<template>
  <div class="project-list-card" ref="link">
    <a
      v-if="data.data.link.url"
      :href="data.data.link.url"
      target="_blank"
      rel="nofollow norefer"
    >{{ $prismic.asText(data.data.name) }}</a>
    <span v-else>{{ $prismic.asText(data.data.name) }}</span>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "project-list-card",
  data() {
    return {};
  },
  mounted() {},
};
</script>
