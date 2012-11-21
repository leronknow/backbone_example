#(function($){
  
 # var ListView = Backbone.View.extend({
  #  el: $('body'),
  #  initialize: function(){
     # _.bindAll(this,'hello');

    #  this.hello();
   # },

    #hello: function(){
   #   $(this.el).append("<h1>hello backbone</h1>");
  #  }:
 # });
#  var listview = new ListView();

#})(jQuery);
$ ->
	class ListView extends Backbone.View
		el: $ 'body'
		initialize: ->
			_.bindAll @

			@render()

		render: ->
		 	$(@el).append '<h1>Hello backbone</h1>'
			
		List_view = new ListView
