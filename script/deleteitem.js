(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  $(function() {
    var ListView, list_view;
    ListView = (function(_super) {

      __extends(ListView, _super);

      function ListView() {
        ListView.__super__.constructor.apply(this, arguments);
      }

      ListView.prototype.el = $('body');

      ListView.prototype.initialize = function() {
        _.bindAll(this);
        return this.render();
      };

      ListView.prototype.render = function() {
        $(this.el).append('<ul></ul>');
        return $(this.el).append('<button>add item</button>');
      };

      ListView.prototype.addItem = function() {
        return $('ul').append("<li class='del'>hello world <button>delete</button></li>");
      };

      ListView.prototype.deleteItem = function() {
        return $('ul').remove;
      };

      ListView.prototype.events = {
        'click': 'addItem',
        'click .del': 'deleteItem'
      };

      return ListView;

    })(Backbone.View);
    return list_view = new ListView;
  });

}).call(this);
