<template>
  <div>
    <div>
      <el-input placeholder="请输入标题" v-model="title" class="title-block">
        <template slot="prepend">标题</template>
      </el-input>
      <el-button type="info" @click="submit">提交</el-button>
    </div>
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
        title: '',
        textarea: ''
      }
    },
    methods: {
      submit() {
        let params = {
          title: this.title,
          content: this.textarea
        }
        console.log(params)
      }
    },
    components: {
      Markdown
    }
  }
</script>

<style lang="scss" scoped>
  .title-block {
    margin-top: 10px;
    margin-left: 10px;
    width: 75%;
  }
  .article-add {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 20px;
    .input {
      position: absolute;
      top: 0;
      left: 10px;
      bottom: 5px;
      width: 48%;
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
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 5px;
      display: inline-block!important;
      vertical-align: top;
      border: 1px solid #ddd;
      margin-left: 2%;
      width: 48%;
      background-color: #fff;
      overflow: auto;
      padding: 2px 10px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
</style>