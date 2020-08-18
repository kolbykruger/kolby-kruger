<template>
    <section ref="componentA" class="component-a" :class="label">
        <div class="container">
            <div ref="componentAShape" class="shape"></div>
            <p class="eyebrow" v-if="slice.primary.eyebrow">{{ slice.primary.eyebrow }}</p>
            <h2>{{ $prismic.asText(slice.primary.heading) }}</h2>
            <prismic-rich-text v-if="slice.primary.summary1" :field="slice.primary.summary1" />
            <div class="group" v-if="slice.items">
                <div class="a" v-for="item in slice.items" :key="item.id">
                    <h3>{{ $prismic.asText(item.heading) }}</h3>
                    <prismic-rich-text :field="item.summary1" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'component-a',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'component-a__' + label
        }
    },
}
</script>
