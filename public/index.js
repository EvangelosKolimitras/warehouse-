"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Application Component
var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.addItemHandler = _this.addItemHandler.bind(_assertThisInitialized(_this));
    _this.deleItemsHandler = _this.deleItemsHandler.bind(_assertThisInitialized(_this));
    _this.randomItemPicker = _this.randomItemPicker.bind(_assertThisInitialized(_this));
    _this.state = {
      title: {
        main: props.main,
        sub: props.sub
      },
      items: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "addItemHandler",
    value: function addItemHandler(item) {
      if (!item) {
        var msg = "Enter a valid item!";
        console.log(msg);
        return msg;
      } else if (this.state.items.indexOf(item) > -1) {
        var _msg = "This item already exists!";
        console.log(_msg);
        return _msg;
      }

      this.setState(function (prevState) {
        return {
          items: [].concat(_toConsumableArray(prevState.items), [item])
        };
      });
    }
  }, {
    key: "deleItemsHandler",
    value: function deleItemsHandler() {
      this.setState(function () {
        return {
          items: []
        };
      });
    }
  }, {
    key: "randomItemPicker",
    value: function randomItemPicker() {
      var item = this.state.items[Math.round(Math.random() * this.state.items.length)];
      console.log(item);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Title, {
        main: this.state.title.main,
        sub: this.state.title.sub
      }), React.createElement(FindItems, {
        randomItemPicker: this.randomItemPicker,
        items: this.state.items
      }), React.createElement(Items, {
        deleItemsHandler: this.deleItemsHandler,
        items: this.state.items
      }), React.createElement(AddItem, {
        addItemHandler: this.addItemHandler
      }));
    }
  }]);

  return App;
}(React.Component); // Title Component


var Title = function Title(props) {
  return React.createElement("div", {
    className: "title"
  }, React.createElement("h1", null, props.main), React.createElement("h5", null, props.sub));
}; // FindItems action btn Component


var FindItems = function FindItems(props) {
  return React.createElement("div", {
    className: "finditems"
  }, React.createElement("button", {
    disabled: props.items.length === 0,
    onClick: props.randomItemPicker
  }, "Find an Item"));
}; // Items Component


var Items = function Items(props) {
  return React.createElement("div", {
    className: "items"
  }, React.createElement("button", {
    onClick: props.deleItemsHandler,
    disabled: props.items.length === 0
  }, "Delete All items"), props.items.length === 0 ? React.createElement("p", null, "No items in the warehouse") : React.createElement("ul", null, props.items.map(function (item) {
    return React.createElement(Item, {
      key: Math.random(),
      item: item
    });
  })));
}; // Item Component


var Item = function Item(props) {
  return React.createElement("li", {
    className: "item"
  }, " ", props.item, " ");
}; // Add Item Component


var AddItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddItem, _React$Component2);

  function AddItem(props) {
    var _this2;

    _classCallCheck(this, AddItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddItem).call(this, props));
    _this2.addItemHandler = _this2.addItemHandler.bind(_assertThisInitialized(_this2));
    _this2.state = {
      e: undefined
    };
    return _this2;
  }

  _createClass(AddItem, [{
    key: "addItemHandler",
    value: function addItemHandler(event) {
      event.preventDefault();
      var item = event.target.elements.i.value;
      var e = this.props.addItemHandler(item);
      this.setState(function () {
        return e;
      });
      event.target.elements.i.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "additem"
      }, this.state.e && React.createElement("p", null, this.state.e), React.createElement("form", {
        onSubmit: this.addItemHandler
      }, React.createElement("input", {
        type: "text",
        name: "i"
      }), React.createElement("button", null, "Add Item")));
    }
  }]);

  return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, {
  main: "Warehouse",
  sub: "A super warehouse "
}), document.getElementById('root'));
