<template>
  <div>
    <head-nav></head-nav>
    <sider-nav></sider-nav>
    <router-view></router-view>
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
