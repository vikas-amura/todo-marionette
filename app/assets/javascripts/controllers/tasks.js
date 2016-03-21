TodoMarionette.Controllers.Tasks = Marionette.Object.extend({

  initialize: function(options) {
		this.views = {};
	},
	index: function() {
    this.collection = new TodoMarionette.Collections.Tasks();
		var self = this;
		this.collection.fetch().done(function(){
			self._index();
		});
	},
  _index: function(){
  	var details = new TodoMarionette.Views.TasksIndex({collection: this.collection});
		var taskLayout = new TodoMarionette.Layouts.Tasks();
		$(".indexContainer").html(taskLayout.render().$el);
		taskLayout.getRegion('index').show(details);
	}

});