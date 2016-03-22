 TodoMarionette.Views.TasksDetails = Marionette.ItemView.extend({
	tagName: 'li',
  template: JST["templates/items/tasks/details"],

	className: function () {
		return this.model.get('flag') ? 'activecolor' :'completedcolor';
	},
	ui:{
		edit: '.editName',
		destroy: '.destroy',
		update :'.edit_entry',
		checkSingleTask : '.taskcheck',
	},
	events:{
		'click @ui.destroy': 'deleteModel',
		'dblclick @ui.edit': 'onEditClick',
		'keydown @ui.update': 'updateEntry',
		'blur .edit_entry': 'onEditFocusout',
		'click @ui.checkSingleTask' : 'checkSingleTask'
	},
	modelEvents:{
		change: 'render',
		'destroy':'destroyView',
	},

	deleteModel: function(){
		this.model.destroy();
	},
	destroyView:function(){
		this.destroy();
	},
	onEditClick: function(){
		if($.find('.edit_entry').length == 1){
			window.prev_view.render()
		}
		window.prev_view = this
		$(this.ui.edit).html('<input type="text" class="form-control edit_entry" value="' + this.model.get('name') + '">');
		$(this.ui.edit).focus();
	},
	updateEntry:function(event){
		var entryName = event.currentTarget.value;
		if(entryName && event.keyCode == 13){
			this.model.save({name:entryName })
		}
	},
	onEditFocusout:function(event){
		window.prev_view.render();
	},
	checkSingleTask:function(event){
		var isChecked = event.currentTarget.checked;
		this.model.save({flag:isChecked});
	},
});






