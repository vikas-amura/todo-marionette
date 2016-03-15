TodoMarionette.Controllers.Tasks = Marionette.Object.extend({

  // initialize: function(options) {
	// 	this.views = {};
	// },

  index: function() {
    console.log("I'm inside controller and action is index");
    this.collection = new TodoMarionette.Collections.Tasks();
    this.collection.fetch();
    console.log(this.collection);
  },

	// index: function() {
  // console.log("This is task Controllers");
  //   this.collection = new TodoMarionette.Collections();
  //
  //   managing references
	// 	var self = this;
	// 	this.collection.fetch().done(function(){
	// 		self._index();
	// 	});
	// },
});
