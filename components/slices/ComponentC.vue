<template>
    <section class="component-c" :class="label">
        <div class="container">
            <p class="eyebrow" v-if="slice.primary.eyebrow">{{ slice.primary.eyebrow }}</p>
            <h2>{{ $prismic.asText(slice.primary.heading) }}</h2>
            <prismic-rich-text
                class="summary"
                v-if="slice.primary.summary1"
                :field="slice.primary.summary1"
            />
            <div class="actions" v-if="slice.primary.action">
                <prismic-link class="button" :field="slice.primary.action">
                    <span>{{ slice.primary.button ? slice.primary.button : 'Visit website' }}</span> ->
                </prismic-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'component-c',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'component-c__' + label
        }
    },
}
</script>
