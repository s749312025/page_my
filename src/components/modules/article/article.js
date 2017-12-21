import api from '@/config/api'
import moment from 'moment'
export default {
  data() {
    return {
      a: 'tit',
      type: 'all',
      articleList: [],
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
      api.articleList({tags, pageIndex: 1, pageSize: 1000})
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            response.data[i].tags = response.data[i].tags.join(',')
            response.data[i].created = moment(response.data[i].created).format('YYYY-MM-DD HH:mm:ss');  
          }
          this.articleList = response.data;
        })
    },
    pushDetails: function(data) {
      this.$router.push({name:'详情', params: {...data}})
    }
  }
}
