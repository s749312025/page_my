<template>
  <div>
    <el-dialog title="收货地址"
    :append-to-body="true"
    :visible.sync="show">
      <el-button>123</el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      open: function() {
        this.show = true
      }
    },
  }
</script>