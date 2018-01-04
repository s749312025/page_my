<template>
  <div id="m_edit">
    <div v-if="isEdit" class="hover-title">
      <el-checkbox class="m-check" v-model="isScroll">保持底部</el-checkbox>
    </div>
    <div id="pre_content" v-html="mark"></div>
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
        isScroll: false,
        mark: this.source
      }
    },
    props: {
      source: {
        type: String,
        default: ''
      },
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    created(){
      this.mark = md.render(this.source)
    },
    watch: {
      source: function(n) {
        console.log(n)
        this.mark = md.render(n)
        this.isScroll ? document.getElementById('m_edit').scrollTop = document.getElementById('pre_content').scrollHeight : '';
      },
      isScroll: function(n) {
        n ? document.getElementById('m_edit').scrollTop = document.getElementById('pre_content').scrollHeight : '';
      }
    }
  }
</script>

<style lang="scss">
.hover-title {
  position: fixed;
  height: 20px;
  width: 100px;
  .m-check {
    display: none;
  }
  &:hover  {
    .m-check {
      display: inline-block;
    }
  }
}
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