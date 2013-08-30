App.Message = DS.Model.extend({
  timestamp: DS.attr('date'),
  body: DS.attr('string'),

  // example of a property
  timestampString: function() {
  	var timestamp = this.get('timestamp');
  	if (!timestamp) return "";

  	var month = timestamp.getMonth() + 1;
  	var minutes = timestamp.getMinutes();
  	if (minutes < 10)
  		minutes = "0" + minutes;

  	return timestamp.getDate() + "/" + month + "/" + timestamp.getFullYear() + " " + timestamp.getHours() + ":" + minutes;
  }.property('timestamp')

});