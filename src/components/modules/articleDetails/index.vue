<template>
  <div class="details">
    <h1 class="head">{{showData.title}}</h1>
    <div class="content">
      <Markdown class="show" :source="showData.content" />
    </div>
  </div>
</template>

<script>
  module.exports = require('./articleDetails')
</script>

<style lang="scss" scoped>
  .details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
    .head {
      text-align: center;
    }
    .content {
      max-width: 900px;
      margin: 50px auto;
    }
  }
</style>