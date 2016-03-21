TodoMarionette.Views.TasksIndex = Marionette.CompositeView.extend({
  initialize: function(options){
	},
	childView: TodoMarionette.Views.TasksDetails,
	childViewContainer: ".tasks-list",
  template: JST["templates/composites/tasks/index"],
});
