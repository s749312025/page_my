<template>
  <div>
    <div>
      <el-input placeholder="请输入标题" v-model="title" class="title-block">
        <template slot="prepend">标题</template>
      </el-input>
      <el-button type="info" @click="submit">提交</el-button>
      <el-button type="info" @click="$refs.uploadModal.open()">上传文件</el-button>
      <UploadDialog ref="uploadModal" />
    </div>
    <div class="check-group">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="web">web</el-checkbox>
        <el-checkbox label="nodejs">nodejs</el-checkbox>
        <el-checkbox label="server">服务器</el-checkbox>
        <el-checkbox label="resource">资源</el-checkbox>
        <el-checkbox label="share">转载</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="article-add">
      <textarea
      class="input"
      v-model="textarea"
      placeholder="请输入内容 (Markdown语法)">
      </textarea>
      <Markdown class="show" :isEdit="true" :source="textarea" />
    </div>
  </div>
</template>

<script>
  import Markdown from '@/components/common/markdown/'
  import UploadDialog from './uploadModal'
  import api from '@/config/api'
  export default {
    data() {
      return {
        title: '',
        textarea: '',
        checkList: []
      }
    },
    methods: {
      async submit() {
        let params = {
          title: this.title,
          content: this.textarea,
          tags: this.checkList.join()
        }
        let res = await api.articleAdd(params)
        console.log(res)
      },
    },
    components: {
      Markdown,
      UploadDialog
    }
  }
</script>

<style lang="scss" scoped>
  .title-block {
    margin-top: 10px;
    margin-left: 10px;
    width: 75%;
  }
  .check-group {
    margin-left: 15px;
    margin-top: 5px;
  }
  .article-add {
    position: absolute;
    top: 80px;
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