<template>
    <section class="image-text" :class="label">
        <div class="container">
            <div class="group" v-for="(item, index) in slice.items">
                <div class="image-text__image">
                    <LazyImage :src="item.image" mobile tablet laptop desktop aspect />
                </div>
                <div class="image-text__details">
                    <p class="eyebrow" v-if="item.eyebrow">{{ item.eyebrow }}</p>
                    <prismic-rich-text class="image-text__description" :field="item.description" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'ImageText',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'image-text__' + label
        }
    },
}
</script>
