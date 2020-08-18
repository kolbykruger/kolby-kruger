<template>
    <section class="component-b" :class="label">
        <div class="container">
            <p class="eyebrow" v-if="slice.primary.eyebrow">{{ slice.primary.eyebrow }}</p>
            <h2>{{ $prismic.asText(slice.primary.heading) }}</h2>
            <prismic-rich-text v-if="slice.primary.summary1" :field="slice.primary.summary1" />
            <div class="group" v-if="slice.items">
                <div class="b" v-for="item in slice.items" :key="item.id">
                    <h3 class="b-title">{{ $prismic.asText(item.heading) }}</h3>
                    <prismic-rich-text class="b-summary" :field="item.summary1" />
                </div>
            </div>
            <div class="shape"></div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'component-b',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'component-b__' + label
        }
    },
}
</script>
