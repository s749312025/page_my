<template>
  <div>
    <div class="article_items">
      <div class="nodata" v-if="nodata">
        <el-alert
          title="错误"
          type="error"
          description="暂无此类目文章，请等待更新"
          show-icon>
        </el-alert>
      </div>
      <div class="item" v-for="article in articleList">
        <div class="head" @click="pushDetails(article)">{{article.title}}</div>
          <div class="attr">
            <i class="el-icon-edit"></i>
            <span class="tags">标签:  {{ article.tags | ArrToStr }}</span>
            <i class="el-icon-date"></i>
            <span class="tags">创建时间:  {{ article.created | time('m') }}</span>
          </div>
        <div class="content">{{article.content}}</div>
      </div>
    </div>
    <router-view class="details"></router-view>
  </div>
</template>

<script>
  module.exports = require('./article')
</script>

<style lang="scss" scoped>
  .article_items {
    background-color: $default_bg;
    padding: 25px 15px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
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
        overflow: hidden;
        white-space: pre;
      }
    }
  }
  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $default_bg;
    overflow: auto;
  }
</style>