$ ->
  class Item extends Backbone.Model
    defaults:
      title: 'hello backbone'

  class List extends Backbone.Collection
    model: Item

  class ItemView extends Backbone.View
    tagName: 'li'

    initialize: ->
      _.bindAll @
      @model.bind 'change',@render
      @model.bind 'remove',@unrender

    render: =>
      $(@el).html """
        <span>#{@model.get 'title'}</span>
        <span class="delete">delete</span>
      """
      @

    unrender: =>
      $(@el).remove()

    remove: ->
      @model.destroy()

    events: 'click .delete' : 'remove'
  class ListView extends Backbone.View
    el: $ 'body'
    initialize: ->
      _.bindAll @

      @collection = new List
      @collection.bind 'add', @appendItem

      @counter = 0
      @render()

    render: ->
      $(@el).append '<ul></ul>'
      $(@el).append '<button>add item</button>'

    addItem: ->
      @counter++
      item = new Item
      item.set title: "#{item.get 'title'} #{@counter}"
      @collection.add item

    appendItem: (item) ->
      item_view = new ItemView  model: item
      $('ul').append item_view.render.el

    events: 
      'click': 'addItem'

  Backbone.sync = (method, model, success,error) ->
    success()
  
  list_view = new ListView

