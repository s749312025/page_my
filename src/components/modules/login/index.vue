<template>
  <div id="menu">
    <canvas id="canvas" class="canvas"></canvas>
    <div id="logo">
      <div class="login-box">
        <div class="logo">sheng chao</div>
          <div class="ipunt-wrap">
            <label for="username" class="icon-user"></label>
            <input type="text" id="username" placeholder="用户名" v-model="username" autocomplete="new-password">
          </div>
          <div class="ipunt-wrap">
            <label for="password" class="icon-password"></label>
            <input type="password" id="password" placeholder="密码" v-model="password" autocomplete="new-password" @keyup.enter="login">
          </div>
          <div class="button">
            <a class="gv" href="javascript:;" @click="login">登录</a>
          </div>
          <div class="toregist" v-show="customer">
            还没有账号？<router-link to="/regist"><a href="javascript:;">去注册</a></router-link>
          </div>
      </div>
    </div>
    <div class="icon-moon"></div>
    <div class="icon-city"></div>
  </div>
</template>
<script>
  module.exports = require('./login')
</script>
<style lang="scss" scoped>
  #menu {
    height: 100%;
    overflow: hidden;
    position: relative;
    .canvas {
      position: fixed;
      z-index: -1;
    }
  }
  #login {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .logo {
    font-size: 90px;
    color: #3979b1;
    font-weight: 800;
    letter-spacing: -10px;
    margin-bottom: 0px;
  }
  .login-box {
    width: 600px;
    padding: 50px;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100001;
  }
  .ipunt-wrap label{
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    background-size: cover;
  }
  .ipunt-wrap input{
    border: none;
    outline: none;
    background: none!important;
    border-bottom: 1px solid #fff;
    margin-top: 30px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    /* text-align: center; */
    color: #fff;
    font-size: 14px;
    padding: 0 5px;
  }
  .button {
    margin-top: 30px;
    margin-left: 60px
  }
  .toregist{
    font-size: 12px;
    float: right;
    padding-top: 20px;
    color: #fff;
  }
  .toregist a{
    color: #066197;
    text-decoration: none;
  }

</style>
