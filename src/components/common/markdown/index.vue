<template>
  <div>
    <div v-html="mark"></div>
  </div>
</template>

<script>
  import markdownIt from 'markdown-it';
  import emoji from 'markdown-it-emoji';
  import abbr from 'markdown-it-abbr';
  import container from 'markdown-it-container';
  import deflist from 'markdown-it-deflist';
  import footnote from 'markdown-it-footnote';
  import inline from 'markdown-it-for-inline';
  import ins from 'markdown-it-ins';
  import mark from 'markdown-it-mark';
  import sub from 'markdown-it-sub';
  import sup from 'markdown-it-sup';
  import highlight from 'markdown-it-highlightjs';
  import 'highlight.js/styles/monokai.css'
  const md = markdownIt({typographer:  true})
  md.use(emoji).use(highlight).use(abbr).use(deflist).use(footnote).use(inline).use(ins).use(mark).use(sub).use(sup)
  md.renderer.rules.table_open = function(tokens, idx) {
        return '<table class="table">';
  };
  export default {
    data() {
      return {
        mark: this.source
      }
    },
    props: {
      source: ''
    },
    watch: {
      source: function(n) {
        this.mark = md.render(n)
      }
    }
  }
</script>

<style lang="scss">
pre {
  padding: 0;
  border-width: 0;
}
  
</style>

<!-- <template>
  <div>
    <vue-markdown
    :source="source">
    </vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    props: {
      source: ''
    },
    data() {
      return {
        //data: this.source
      }
    },
    components: {
      VueMarkdown
    },
  }
</script>
 -->