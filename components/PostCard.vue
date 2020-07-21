<template>
  <div class="post-card">
    <nuxt-link :to="link" class="link__gradient">
      <h3 class="post-card__title link__gradient--colorized">{{ post.data.title[0].text }}</h3>
      <p class="post-card__summary">{{ post.data.summary }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  name: "Post",
  props: ["post"],
  data() {
    return {
      link: "",
      date: ""
    };
  },
  created() {
    this.link = LinkResolver(this.post);
    this.date = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(this.post.last_publication_date));
  }
};
</script>
