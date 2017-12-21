<template>
  <div class="siderbar">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      :default-openeds=this.open
      :router="true"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/article/all" class="avt-block">
        <img @click="pushHome" src="../../../assets/image/avtor.jpeg" class="avt" alt="">
      </el-menu-item>
      
      <Logo class="logo"/>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>文章</span>
        </template>
          <el-menu-item index="/article/web">web相关</el-menu-item>
          <el-menu-item index="/article/nodejs">nodejs</el-menu-item>
          <el-menu-item index="/article/server">服务器</el-menu-item>
          <el-menu-item index="/article/other">其它</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/article/resource">
        <i class="el-icon-menu"></i>
        <span slot="title">资源</span>
      </el-menu-item>
      <el-menu-item index="/article/share">
        <i class="el-icon-share"></i>
        <span slot="title">转载</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
  import Logo from '../logo'
  export default {
    data() {
      return {
        open: ["1"],
        activeIndex: '/article/all'
      }
    },
    methods: {
      pushHome() {
        console.log(this.activeIndex)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      Logo
    }
  }
</script>
<style lang="scss" scoped>
* {
  box-sizing: content-box;
}
.siderbar {
  position: fixed!important;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  .avt-block {
    margin: 50px 0;
    text-align: center;
    &:hover {
      background-color: #545c64!important;
    }
  }
  .avt {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    cursor: pointer;
  }
}
.logo {
  margin-top: 20px;
}
.el-menu-vertical-demo {
  height: 100%;
  width: 100%;
}
</style>