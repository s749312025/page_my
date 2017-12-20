<template>
  <div>
    <div class="logo">{{logo}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: ''
      }
    },
    methods: {
      logoEvent: function() {
        let str = "{ shengchao's blog }"
        let strLength = str.length;
        let i = 0;
        let display = () => {let x = setInterval(() => {
          this.logo = str.slice(0,i);
          if(i == strLength) {
            i = 0;
            clearInterval(x)
            setTimeout(() => {
              display()
            },3000)
          }else {
            i ++;
          }
        },200)}
        display()
      }
    },
    created() {
      this.logoEvent();
    },
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: 100px;
    color: white;
    font-size: 28px;
    width: 100%;
    text-align: center;
  }
</style>