// The Menu items and links
var menu = [
  {
    title: "Page A (Cats)",
    url  : "#diary"
  },
  {
    title: "Page B (Dogs)",
    url  : "simple-page-b.html"
  },
  {
    title: "Page C (Elephants)",
    url  : "simple-page-c.html"
  }
];

// For this "simple demo" we can change event to "pageinit", but for the more advanced features, it has to be bound to "pageshow"
$(document).on("pageshow", function (event) {

  var items = '', // menu items list
    ul = $(".mainMenu:empty");  // get "every" mainMenu that has not yet been processed

  for (var i = 0; i < menu.length; i++) {
    items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>';
  }

  ul.append(items);
  ul.listview('refresh'); // use cache, as ".mainMenu:empty" will no longer work (append called!)

});



//Login Stuff
