import Markdown from '@/components/common/markdown/'
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
	},
	methods: {

	},
	components: {
		Markdown
	}
}