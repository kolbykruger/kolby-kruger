<template>
    <section class="banner" :class="label">
        <div class="container">
            <LazyImage :src="slice.primary.image" mobile tablet laptop desktop aspect />
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'banner',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'banner__' + label
        }
    },
}
</script>
