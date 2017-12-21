<template>
  <div>
    <div class="article-add">
      <textarea
      class="input"
      v-model="textarea"
      placeholder="请输入内容">
      </textarea>
      <Markdown class="show" :source="textarea" />
    </div>
  </div>
</template>

<script>
  import Markdown from '@/components/common/markdown/'
  export default {
    data() {
      return {
        textarea: ''
      }
    },
    components: {
      Markdown
    }
  }
</script>

<style lang="scss" scoped>
  .article-add {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 20px;
    .input {
      width: 48%;
      height: 100%;
      outline: none;
      padding: 10px;
      background-color: #333;
      color: #fff;
      border-color: #ddd;
      resize: none;
      font-size: 13px;
      font-family: Menlo,Monaco,Consolas,"Courier New",monospace
    }
    .show {
      display: inline-block!important;
      vertical-align: top;
      border: 1px solid #ddd;
      margin-left: 2%;
      width: 48%;
      background-color: #fff;
      height: 100%;
      overflow: auto;
      padding: 2px 10px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
</style>