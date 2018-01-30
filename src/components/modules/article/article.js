import api from '@/config/api'
export default {
  data() {
    return {
      a: 'tit',
      type: 'all',
      articleList: [],
      nodata: false
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
      api.articleList({tags, pageIndex: 1, pageSize: 100})
        .then(response => {
          this.articleList = response.data;
          if(!response.data || response.data.length == 0) {
            this.nodata = true;
          }else {
            this.nodata = false;
          }
        })
    },
    pushDetails: function(data) {
      this.$router.push({name:'详情', params: {...data}})
    }
  }
}
