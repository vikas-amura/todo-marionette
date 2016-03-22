TodoMarionette.Models.Task = Backbone.Model.extend({
  urlRoot : "/tasks",
  defaults: {
    flag: false
  },
});
