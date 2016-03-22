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
		this.taskLayout = new TodoMarionette.Layouts.Tasks({collection: this.collection});
  	this.details = new TodoMarionette.Views.TasksIndex({collection: this.collection});
  	this.footer = new TodoMarionette.Views.TasksFooter({	collection: this.collection });

		$(".indexContainer").html(this.taskLayout.render().$el);
		this.taskLayout.getRegion('index').show(this.details);
		this.taskLayout.getRegion('footer').show(this.footer);
	},

	filterItems: function (filter) {
		var newFilter = filter && filter.trim() || 'all';
		filterChannel.request('filterState').set('filter', newFilter);
	}

});