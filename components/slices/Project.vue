<template>

    <div class="project-card">

        <h3 class="project-card__title">{{ $prismic.asText(slice.primary.name) }}</h3>

        <div class="project-card__details">
            <div class="project-card__date">
                <p>Date</p>
                <p>{{ date }}</p>
            </div>
            <div class="project-card__role">
                <p>Role</p>
                <p>
                    <span v-for="(item, index) in slice.items" :key="index">
                        {{ item.role }}
                    </span>
                </p>
            </div>
            <div class="project-card__website">
                <p>Website</p>
                <p v-if="slice.primary.website.url">
                    <a :href="slice.primary.website.url">{{ slice.primary.website.url }}</a>
                </p>
                <p v-else>Not available.</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  props: ['slice'],
  name: 'project',
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    if (this.slice.primary.date) {
        this.date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(this.slice.primary.date))
    }
  }
}
</script>
