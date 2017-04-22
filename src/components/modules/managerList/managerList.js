import api from '@/config/api'
export default {
  data() {
    return {
      a: 'tit'
    }
  },
  created: function() {
    this.getInfo()
  },
  methods: {
    getInfo: function () {
      api.inforDeteil()
        .then(response => {
          this.a = response.result.managers;
        })
    }
  }
}
