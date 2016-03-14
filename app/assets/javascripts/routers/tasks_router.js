TodoMarionette.Routers.TasksRouter = Marionette.AppRouter.extend({
  routes: {
    '(/)' : 'index'
  },

  index: function() {
    console.log("I'm inside router index");
  },
});
