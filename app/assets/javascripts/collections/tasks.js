TodoMarionette.Collections.Tasks = Backbone.Collection.extend({
  url: "/tasks",
  model: TodoMarionette.Models.Task,
});
