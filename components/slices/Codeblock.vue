<template>
    <pre :class="'language-'+lang">
        <code
            :class="'language-'+lang"
            v-html="formattedCode">
        </code>
    </pre>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'

export default {
  props: ['slice'],
  name: 'codeblock',
  data() {
      return {
          lang: null,
          formattedCode: ''
      }
  },
  mounted() {
      const codeblock = this.slice.primary.code[0].text;
      const lang = this.slice.slice_label ? this.slice.slice_label : 'html';

      if (codeblock) {
          this.lang = lang;
          this.formattedCode = Prism.highlight(codeblock, Prism.languages[lang], lang);
      }
  },
}
</script>
