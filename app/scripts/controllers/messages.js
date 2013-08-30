App.MessagesController = Ember.ArrayController.extend({
	messageBody: "",

	add: function() {
		var transaction = this.get('store').transaction();
        var message = transaction.createRecord(App.Message, { body: this.get('messageBody') });
        transaction.commit();

		this.set('messageBody', "");
	},

	haveMessages: function() {
		return this.get('content.length') > 0;
	}.property('content.@each')
});
