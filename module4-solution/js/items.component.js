(function() {
  angular.module("MenuApp").component("itemList", {
    templateUrl: "templates/items.html",
    bindings: {
      items: "<"
    }
  });

})();
