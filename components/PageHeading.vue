<template>
    <section class="page-heading" v-if="visible != false">
        <div class="container">
            <h1 class="page-heading__heading">{{ heading }}</h1>
            <p class="page-heading__summary">{{ summary }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PageHeading',
    props: [
        'heading',
        'summary',
        'visibility'
    ],
    data() {
        return {
            visible: null
        }
    },
    mounted() {
        this.visible = this.visibility ? this.visibility : true;
    }
}
</script>
