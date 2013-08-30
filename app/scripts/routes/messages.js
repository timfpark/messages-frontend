App.MessagesRoute = Ember.Route.extend({

  /* Models that we should use for this route. */
  model: function() {
    return App.Message.find();
  }

});