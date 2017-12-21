<template>
  <div class="main">
    <sider-nav class="sider"></sider-nav>
    <head-nav class="header"></head-nav>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import {headNav, siderNav} from '../../common/'
  export default {
      components: {
        headNav,
        siderNav
      }
  }
</script>
<style lang="scss" scoped>
  .main {
    position: relative;
    height: 100%;
  }
  .content {
    position: absolute;
    background-color: $default_bg;
    top: 60px;
    left: 200px;
    bottom: 0;
    right: 0;
    z-index: 8;
  }
  .header {
    position: fixed;
    left: 200px;
    right: 0;
    z-index: 9;
  }
</style>