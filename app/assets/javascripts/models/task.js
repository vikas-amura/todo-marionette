TodoMarionette.Models.Task = Backbone.Model.extend({
  urlRoot : "/tasks",
  defaults: {
    name: "Default Task",
    flag: true
  },
});
