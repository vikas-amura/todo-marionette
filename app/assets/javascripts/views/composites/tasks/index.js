TodoMarionette.Views.TasksIndex = Marionette.CompositeView.extend({
  initialize: function(options){
	},
	childView: TodoMarionette.Views.TasksDetails,
	childViewContainer: ".tasks-list",

  template: JST["templates/composites/tasks/index"],

  ui: {
		input: '#new-todo',
		chechAll: '#Check_all',
	},

	events: {
		'keypress @ui.input': 'SaveTask',
		'click @ui.chechAll': 'complatedAllTask',
	},
	collectionEvents:{
		add: 'render',
	},

	SaveTask: function (e) {
		var ENTER_KEY = 13;
		var taskName = this.ui.input.val().trim();
		if (e.which === ENTER_KEY && taskName) {
			this.collection.create({name: taskName});
			this.ui.input.val('');
			this.ui.input.focus();
		}
	},
	complatedAllTask:function(event){
		var isChecked = event.currentTarget.checked;
			this.collection.each(function (task) {
				task.save({ flag: isChecked });
			});
	},
});