import api from '@/config/api'
export default {
  data() {
    return {
      a: 'tit',
      type: 'all',
      articleList: []
    }
  },
  created: function() {
    this.type = this.$route.params.type
    this.getArticleList()
  },
  beforeRouteUpdate(to, from, next){
    this.type = to.params.type
    this.getArticleList()
    next()
  },
  methods: {
    getArticleList: function () {
      this.type == 'all' || this.type == 'search' ? this.type = '' : ''
      let tags = this.type;
      api.articleList({tags})
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            response.data[i].tags = response.data[i].tags.join(',')
          }
          this.articleList = response.data;
        })
    }
  }
}
