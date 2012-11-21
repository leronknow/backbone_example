(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  $(function() {
    var ListView;
    return ListView = (function(_super) {
      var List_view;

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
        return $(this.el).append('<h1>Hello backbone</h1>');
      };

      List_view = new ListView;

      return ListView;

    })(Backbone.View);
  });

}).call(this);
