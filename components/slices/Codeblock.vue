<template>
    <pre :language="slice.slice_label">
        <code :language="slice.slice_label" v-html="formattedCode"></code>
    </pre>
</template>

<script>
import Prism from 'prismjs';

export default {
  props: ['slice'],
  name: 'codeblock',
  data() {
      return {
          formattedCode: null
      }
  },
  mounted() {
      const lang = this.slice.slice_label;
      if (lang) {
          const codeblock = this.slice.primary.code[0].text;
          const formatted = Prism.highlight(codeblock, Prism.languages[lang], lang);
          this.formattedCode = formatted;
      }
  }
}
</script>
