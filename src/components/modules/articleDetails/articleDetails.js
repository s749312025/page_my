import Markdown from '@/components/common/markdown/'
import api from '@/config/api'
export default {
	data() {
		return {
			showData: {
				title: '',
				created: '',
				content: ''
			}
		}
	},
	created: function() {
		let obj = this.$route.params
		this.showData= obj
		if(!obj.title || !obj.content) {
			api.articleList({_id: obj._id})
			  .then(response => {	
			    this.showData = response.data[0]
			    console.log(this.showData)
			  })
		}
	},
	methods: {

	},
	components: {
		Markdown
	}
}