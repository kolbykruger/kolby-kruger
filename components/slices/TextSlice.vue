<template>

    <section class="text">
        <div class="container">
            <prismic-rich-text
                :class="label"
                :field="slice.primary.text" />
        </div>
    </section>

</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice',
  data() {
      return {
          label: '',
      }
  },
  mounted() {
      const label = this.slice.slice_label ? this.slice.slice_label : '';
      if (label != '') {
          this.label = 'text__'+label;
      }
  }
}
</script>
