<template>
    <section class="images" :class="label">
        <div class="container">
            <div class="group" :data-count="slice.items.length">
                <div v-for="item in slice.items" :key="item.id" class="images-item">
                    <LazyImage :src="item.image" mobile tablet laptop desktop aspect />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'images',
    data() {
        return {
            label: '',
        }
    },
    mounted() {
        const label = this.slice.slice_label ? this.slice.slice_label : ''
        if (label != '') {
            this.label = 'images__' + label
        }
    },
}
</script>
