'use strict';

var TodoMarionette = {};
var App = {};

window.TodoMarionette = {
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {},
  Layouts:{},
  Views: {},
  Templates: {},


},
App = new Mn.Application();
App.on('start',function(){
    TodoMarionette._controllers = {tasks: new TodoMarionette.Controllers.Tasks()}
    TodoMarionette.Routers.TasksRouter = new TodoMarionette.Routers.TasksRouter({controller: TodoMarionette._controllers.tasks});
    Backbone.history.start({ pushState: true });
});

$(function(){
  App.start();
});
