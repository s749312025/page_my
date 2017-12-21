<template>
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
