TodoMarionette.Layouts.Tasks = Marionette.LayoutView.extend({
	template: JST["templates/layouts/tasks"],
  regions: {
		index: '.app-container',
		footer: '#footer',
	},
});