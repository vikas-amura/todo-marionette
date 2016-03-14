'use strict';

var TodoMarionette = {};

window.TodoMarionette = {
  Models: {},
  Collections: {},
  Routers: {},
  Templates: {},
  Views: {},

  initialize: function() {
    TodoMarionette.Routers.TasksRouter = new TodoMarionette.Routers.TasksRouter();
    return Backbone.history.start({
      pushState: true
    });
  }
};

$(document).ready(function(){
  TodoMarionette.initialize();
});
