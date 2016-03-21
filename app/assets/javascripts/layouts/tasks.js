TodoMarionette.Layouts.Tasks = Marionette.LayoutView.extend({

	template: JST["templates/layouts/tasks"],
  regions: {
		header: '#header',
		index: '.app-container',
		footer: '#footer',
	},
});