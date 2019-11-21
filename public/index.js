"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    _this.state = {
      title: {
        main: props.main,
        sub: props.sub
      },
      items: [1, 2, 3, 4]
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Title, {
        main: this.state.title.main,
        sub: this.state.title.sub
      }), React.createElement(FindItems, null), React.createElement(Items, {
        items: this.state.items
      }), React.createElement(AddItem, null));
    }
  }]);

  return App;
}(React.Component); // Title Component


var Title =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Title, _React$Component2);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, _getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    // constructor(props){
    //     super(props)
    // }
    value: function render() {
      return React.createElement("div", {
        className: "title"
      }, React.createElement("h1", null, this.props.main), React.createElement("h5", null, this.props.sub));
    }
  }]);

  return Title;
}(React.Component); // FindItems action btn Component


var FindItems =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FindItems, _React$Component3);

  function FindItems() {
    _classCallCheck(this, FindItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(FindItems).apply(this, arguments));
  }

  _createClass(FindItems, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", null, "Find an Item"));
    }
  }]);

  return FindItems;
}(React.Component); // Items Component


var Items =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Items, _React$Component4);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("ul", null,
      /*
          TODO: The items list from the App's state
      */
      this.props.items.map(function (item) {
        return React.createElement(Item, {
          key: Math.random(),
          item: item
        });
      })));
    }
  }]);

  return Items;
}(React.Component); // Item Component


var Item =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Item, _React$Component5);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      return React.createElement("li", {
        className: "item"
      },
      /*
          TODO: Renders a single item
      */
      this.props.item);
    }
  }]);

  return Item;
}(React.Component); // Add Item Component


var AddItem =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(AddItem, _React$Component6);

  function AddItem() {
    _classCallCheck(this, AddItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddItem).apply(this, arguments));
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, {
  main: "Warehouse",
  sub: "A super warehouse "
}), document.getElementById('root'));
