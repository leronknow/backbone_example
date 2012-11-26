$ ->
  class ListView extends Backbone.View

    el: $ 'body'

    initialize: ->
      _.bindAll @
      @counter =0
      @render()

    render: ->
      $(@el).append '<ul></ul>'
      $(@el).append '<button>add item</button>'

    addItem: ->
      @counter++
      $('ul').append "<li>hello,#{@counter}</li>"

    events: 'click button': 'addItem'
  list_view = new ListView
