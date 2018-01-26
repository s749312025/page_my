import Markdown from '@/components/common/markdown/'
import api from '@/config/api'
export default {
	data() {
		return {
			showData: {
				title: '',
				content: ''
			}
		}
	},
	created: function() {
		let obj = this.$route.params
		this.showData.title = obj.title;
		this.showData.content = obj.content;
		if(!obj.title || !obj.content) {
			api.articleList({_id: obj._id})
			  .then(response => {
			    this.showData.title = response.data[0].title;
			    this.showData.content = response.data[0].content;
			  })
		}
	},
	methods: {

	},
	components: {
		Markdown
	}
}