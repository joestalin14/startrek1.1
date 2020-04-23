function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}import{GameFunc,gameFuncClass}from"./gamefunc.js";var Counter=function(t){_inherits(n,GameFunc);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.call(this)).timerId=null,t.totalCount=0,t}return _createClass(n,[{key:"startCounterMethods",value:function(){var t=this,e=this.startBtn,n=this.stopBtn,r=this.pauseBtn;e.addEventListener("click",(function(){"stop"===gameFuncClass.state&&t.startCount()})),n.addEventListener("click",(function(){"play"===gameFuncClass.state&&t.stopCounter()})),r.addEventListener("click",(function(){"play"===gameFuncClass.state?t.pauseCounter():"paused"===gameFuncClass.state&&t.startCount()}))}},{key:"startCount",value:function(){var t=this;this.timerId=setInterval((function(){t.totalCount+=1,t.counterField.innerHTML=t.totalCount}),500)}},{key:"pauseCounter",value:function(){clearInterval(this.timerId)}},{key:"stopCounter",value:function(){clearInterval(this.timerId),this.totalCount=0,this.counterField.innerHTML=this.totalCount}}]),n}();export var counterClass=new Counter;
