TodoMarionette.Collections.Tasks = Backbone.Collection.extend({

  model: TodoMarionette.Models.Task,

  urlRoot: "/tasks",
  url: "/tasks",

});
