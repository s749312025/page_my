<template>
  <div>
    <div class="article_items">
      <div class="item" v-for="article in articleList">
        <div class="head">{{article.title}}</div>
          <div class="attr">
            <i class="el-icon-edit"></i>
            <span class="tags">标签:  {{article.tags}}</span>
            <i class="el-icon-date"></i>
            <span class="tags">创建时间:  {{article.created}}</span>
          </div>
        <div class="content">{{article.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = require('./article')
</script>

<style lang="scss" scoped>
  .article_items {
    background-color: #f2f4f6;
    padding: 25px 15px;
    .item {
      margin-bottom: 20px;
      padding: 20px 15px;
      color: #333;
      @include content-block;
      .head {
        margin: 0 0 12px 0;
        font-size: 18px;
        height: 26px;
        line-height: 26px;
        overflow: hidden;  
        white-space: normal;
        cursor: pointer;
      }
      .attr {
        span.tags {
          font-size: 13px;
        }
        .el-icon-date {
          margin-left: 20px;
        }
      }
      .content {
        margin-top: 10px;
        color: #666;
        font-size: 14px;
        max-height: 66px;
        line-height: 22px;
      }
    }
  }
</style>