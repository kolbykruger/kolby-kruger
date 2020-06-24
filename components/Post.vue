<template>
        <nuxt-link :to="link">
            <h3>{{ post.data.title[0].text }}</h3>
            <p class="summary">{{ post.data.summary }}</p>
            <p class="date">{{ date }}</p>

        </nuxt-link>
</template>

<script>
    import LinkResolver from "~/plugins/link-resolver.js";

    export default {
        name: 'Post',
        props: ['post'],
        data() {
            return {
                link: '',
                date: '',
            }
        },
        created() {
            this.link = LinkResolver(this.post)
            this.date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(this.post.last_publication_date))
        }
    }
</script>
