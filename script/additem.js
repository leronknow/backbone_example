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
        this.counter = 0;
        return this.render();
      };

      ListView.prototype.render = function() {
        $(this.el).append('<ul></ul>');
        return $(this.el).append('<button>add item</button>');
      };

      ListView.prototype.addItem = function() {
        this.counter++;
        return $('ul').append("<li>hello," + this.counter + "</li>");
      };

      ListView.prototype.events = {
        'click button': 'addItem'
      };

      return ListView;

    })(Backbone.View);
    return list_view = new ListView;
  });

}).call(this);
