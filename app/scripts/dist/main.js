(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'pow!' });
    _wsClient2.default.sendMessage(message.serialize());
  });
  _wsClient2.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFDTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWCxxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxxQkFBTyxtQkFBUCxDQUEyQixZQUFJO0FBQzdCLFFBQUksVUFBUSxJQUFJLFdBQUosQ0FBZ0IsRUFBQyxTQUFRLE1BQVQsRUFBaEIsQ0FBWjtBQUNBLHVCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0QsR0FIRDtBQUlBLHFCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFRO0FBQ3BDLFlBQVEsR0FBUixDQUFZLElBQVo7QUFDRCxHQUZEO0FBR0YsQzs7SUFFRyxXO0FBQ0osNkJBQ0E7QUFBQSxRQURxQixDQUNyQixRQURhLE9BQ2I7QUFBQSx5QkFEdUIsSUFDdkI7QUFBQSxRQUQ0QixDQUM1Qiw2QkFEOEIsUUFDOUI7QUFBQSw4QkFEdUMsU0FDdkM7QUFBQSxRQURpRCxDQUNqRCxrQ0FEb0QsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ25EOztBQUFBOztBQUNJLFNBQUssT0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLLElBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBSyxTQUFMLEdBQWUsQ0FBZjtBQUNIOzs7O2dDQUNVO0FBQ1QsYUFBTTtBQUNKLGNBQUssS0FBSyxJQUROO0FBRUosaUJBQVEsS0FBSyxPQUZUO0FBR0osbUJBQVUsS0FBSztBQUhYLE9BQU47QUFLRDs7Ozs7O2tCQUlZLE87Ozs7O0FDOUJmOzs7Ozs7QUFDQTs7Ozs7Ozs7QUNEQSxJQUFJLGVBQUo7QUFDQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQWtCO0FBQ2hCLFdBQU8sSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFQO0FBQ0EsVUFBUSxHQUFSLENBQVksZUFBWjtBQUNEOztBQUVELFNBQVMsbUJBQVQsQ0FBNkIsZUFBN0IsRUFBNkM7QUFDM0MsU0FBTyxNQUFQLEdBQWMsWUFBSTtBQUNoQixZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFnRDtBQUM5QyxTQUFPLFNBQVAsR0FBaUIsVUFBQyxDQUFELEVBQUs7QUFDbkIsWUFBUSxHQUFSLENBQVksU0FBWixFQUFzQixFQUFFLElBQXhCO0FBQ0EsUUFBSSxPQUFLLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFUO0FBQ0Esb0JBQWdCLElBQWhCO0FBQ0YsR0FKRDtBQUtEOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE2QjtBQUMzQixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWE7QUFDWixZQURZO0FBRVosMENBRlk7QUFHWixnREFIWTtBQUlaO0FBSlksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5jbGFzcyBDaGF0QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG4gICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpPT57XG4gICAgICAgbGV0IG1lc3NhZ2U9bmV3IENoYXRNZXNzYWdlKHttZXNzYWdlOidwb3chJ30pO1xuICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcbiAgICAgfSk7XG4gICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKT0+e1xuICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICB9KTtcbiAgfVxufVxuY2xhc3MgQ2hhdE1lc3NhZ2V7XG4gIGNvbnN0cnVjdG9yKHttZXNzYWdlOm0sdXNlcjp1PSdiYXRtYW4nLHRpbWVzdGFtcDp0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbn0pe1xuICAgICAgdGhpcy5tZXNzYWdlPW07XG4gICAgICB0aGlzLnVzZXI9dTtcbiAgICAgIHRoaXMudGltZXN0YW1wPXQ7XG4gIH1cbiAgc2VyaWFsaXplKCl7XG4gICAgcmV0dXJue1xuICAgICAgdXNlcjp0aGlzLnVzZXIsXG4gICAgICBtZXNzYWdlOnRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDp0aGlzLnRpbWVzdGFtcFxuICAgIH07XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTtcbiIsImxldCBzb2NrZXQ7XG5mdW5jdGlvbiBpbml0KHVybCl7XG4gIHNvY2tldD1uZXcgV2ViU29ja2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKXtcbiAgc29ja2V0Lm9ub3Blbj0oKT0+e1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKXtcbiAgc29ja2V0Lm9ubWVzc2FnZT0oZSk9PntcbiAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLGUuZGF0YSk7XG4gICAgIGxldCBkYXRhPUpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKXtcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgaW5pdCxcbiAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcbiAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcbiAgc2VuZE1lc3NhZ2Vcbn1cbiJdfQ==
