<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="2" :offset="18">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="../../../assets/image/avtor.jpeg" class="avt" alt="">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="login">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
  import api from '../../../config/api'
  export default {
    data() {
      return {
        
      }
    },
    created() {
      
    },
    methods: {
      handleCommand(command) {
        this.$router.push('/login')
      }

    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    background-color: white;
    img {
      margin-top: 5px;
      width: 40px;
      height: 40px;
    }
  }
</style>

















