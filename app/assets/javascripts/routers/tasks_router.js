TodoMarionette.Routers.TasksRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '(/)': "index",
    '*filter': 'filterItems'
  },
});
