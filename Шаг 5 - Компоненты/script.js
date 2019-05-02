Vue.component('book', {
	template: '#books',
	props: ['title', 'author', 'content']
})

new Vue({
	el: '#app',
	data: {
		author: 'RostSuslov & AntiCarat',
		title: 'javaScript The Defentive Guide',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum earum nemo sit!'
	}
})