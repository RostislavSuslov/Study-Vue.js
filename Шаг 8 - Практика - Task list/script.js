var app = new Vue({
	el: '#app',
	data: {
		title: "Task List",
		item: [
			{ text: "First" },
			{ text: "Second" },
			{ text: "First" },
			{ text: "Second" }
		]
	},
	methods: {
		addItem: function () {
			var input = document.getElementById('itemForm');

			if (input.value !== '') {
				this.item.push({
					text:input.value
				})
				input.value = "";
			}
		},
		deleteItem: function(index) {
			this.item.splice(index, 1);
		}
	}
});