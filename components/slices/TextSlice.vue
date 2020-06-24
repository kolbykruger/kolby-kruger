<template>
  <prismic-rich-text :field="slice.primary.text"/>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>
