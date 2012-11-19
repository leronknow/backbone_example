(function($){

  Bckbone.sync = function(method, model) {
    alert(method + ": " + JSON.stringify(model));
    model.id = 1;
  };

  var book = new Backbone.Model({
    title: "The Rough Riders",
    author: "Theodore Roosevelt"
  });

  book.save();

  book.save({author: "Teddy"});
})(jQuery);
