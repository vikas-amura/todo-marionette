TodoMarionette.Views.TasksFooter = Marionette.ItemView.extend({
	tagName: 'div',
  template: JST["templates/items/tasks/footer"],
  className:"footer",

  ui:{
		clear: '#clear-completed'
	},
	events: {
		'click @ui.clear': 'clearAllTask',
	},
	collectionEvents: {
		all: 'render'
	},

	clearAllTask:function(){
		var completed = this.collection.filter({flag:true});
			completed.forEach(function (task) {
				task.destroy();
		});
	},
	serializeData: function () {
			var active = this.collection.filter({flag:false}).length;
			var total = this.collection.length;
			return {
				activeCount: active,
				totalCount: total,
				completedCount: total - active,
				activeCountLabel: active  > 1 ? 'items':'item'
			};
		},
});