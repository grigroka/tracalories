'use strict';
// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  console.log('item controller');
})();
// UI Controller
const UICtrl = (function() {
  console.log('ui controller');
})();
// App Controller
const App = (function(ItemCtrl, UICtrl) {
  console.log('app controller');
})(ItemCtrl, UICtrl);
