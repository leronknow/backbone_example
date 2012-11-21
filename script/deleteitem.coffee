$ ->
	class ListView extends Backbone.View
		el: $ 'body'
		initialize: ->
			_.bindAll @
			@render()

		render: ->
			$(@el).append '<ul></ul>'
			$(@el).append '<button>add item</button>'

		addItem: ->
			$('ul').append("<li class='del'>hello world <button>delete</button></li>")

		deleteItem: ->
			$('ul').remove
		events: 
			'click': 'addItem'
			'click .del': 'deleteItem'
	list_view = new ListView

