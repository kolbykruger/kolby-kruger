<template>
    <main>
        <PageHeading
            heading="writing"
            summary="I write stuff occasionally..."
        />

        <section class="utility-bar">
            <div class="utility-bar__container">
                <div class="utility-bar__group">
                    <div class="utility-bar__info">
                        <div v-if="queryResults">
                            Results for <span>{{ query }}</span>
                        </div>
                    </div>
                    <div class="utility-bar__search">
                        <input
                            type="text"
                            v-model="query"
                            placeholder="Search..."
                            @keyup.enter="search"
                        />
                        <button @click="search">Search</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="post-cards" v-if="queryResults == ''">
            <div class="container">
                <PostCard
                    v-for="(post, index) in posts"
                    :key="index"
                    :post="post"
                />
            </div>
        </section>

        <section class="post-cards" v-else>
            <div class="container">
                <PostCard
                    v-for="(post, index) in queryResults"
                    :key="index"
                    :post="post"
                />
            </div>
        </section>
    </main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import PostCard from '~/components/PostCard.vue'

export default {
    name: 'Home',
    layout: 'default',
    components: {
        PageHeading,
        PostCard
    },
    head() {
        return {
            title: 'Writing'
        }
    },
    data() {
        return {
            query: '',
            queryResults: ''
        }
    },
    methods: {
        search() {
            const $el = this
            $el.$prismic.api
                .query([
                    $el.$prismic.predicates.at('document.type', 'post'),
                    $el.$prismic.predicates.fulltext('document', $el.query)
                ])
                .then(function(response) {
                    console.log(response)
                    $el.queryResults = response.results
                })
        }
    },
    async asyncData({ $prismic, error }) {
        try {
            const posts = await $prismic.api.query(
                $prismic.predicates.at('document.type', 'post'),
                {
                    orderings: '[document.first_publication_date desc]'
                }
            )

            return {
                posts: posts.results
            }
        } catch (e) {
            error({
                statusCode: 404,
                message: 'Page not found'
            })
        }
    }
}
</script>
