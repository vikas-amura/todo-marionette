TodoMarionette.Collection = Marionette.CollectionView.extend({

  model: TodoMarionette.Models.Task,

  urlRoot: "/tasks",
  url: "/tasks",

});
