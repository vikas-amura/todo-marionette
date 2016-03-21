TodoMarionette.Views.TasksDetails = Marionette.ItemView.extend({
	tagName: 'li',
	className: function () {
		return this.model.get('flag') ? 'completed' : 'active';
	},
  template: JST["templates/items/tasks/details"]
});
