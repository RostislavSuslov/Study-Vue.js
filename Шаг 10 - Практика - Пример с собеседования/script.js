new Vue({
	el: '#app',
	data: {
		message: 'web dev'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})