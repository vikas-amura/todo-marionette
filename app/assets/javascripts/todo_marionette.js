'use strict';

var TodoMarionette = {};

window.TodoMarionette = {
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {},
  Views: {},
  Templates: {},

  initialize: function() {

    //initializing router
    TodoMarionette._controllers = {tasks: new TodoMarionette.Controllers.Tasks()}
    TodoMarionette.Routers.TasksRouter = new TodoMarionette.Routers.TasksRouter({controller: TodoMarionette._controllers.tasks});

    //starting backbone.history which we need to history
    return Backbone.history.start({ pushState: true });
  },
},


$(document).ready(function(){
  TodoMarionette.initialize();
});
