(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(t,e,n){__NEXT_REGISTER_PAGE("/dashboard-home",function(){return t.exports=n(234),{page:t.exports.default}})},234:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(7),a=n(2),i=(n(32),n(37)),c=n(15),f=n(38),l=n(39);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m,v,d,w={height:"100%"},E=function(t){return o.a.createElement("img",{src:t.image,alt:"logo"})},O=[{alias:"Home",component:o.a.createElement(c.Link,{route:"/dashboard"},"Dashboard")},{alias:"Posts",component:o.a.createElement(c.Link,{route:"/dashboard/posts"},"Posts")}],_=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,y(e).apply(this,arguments))}var n,c,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["PureComponent"]),n=e,(c=[{key:"render",value:function(){return o.a.createElement(i.b,null,o.a.createElement(a.c,{grid:"1fr 3fr",style:w},o.a.createElement(f.a,null,o.a.createElement(E,null),o.a.createElement(l.a,{items:O})),o.a.createElement(a.a,null,o.a.createElement(u.a,null,"Dashboard"))))}}])&&p(n.prototype,c),s&&p(n,s),e}();m=_,v="contextType",d=i.a,v in m?Object.defineProperty(m,v,{value:d,enumerable:!0,configurable:!0,writable:!0}):m[v]=d,e.default=_},37:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(19),o=n.n(r),u=n(0),a=n.n(u),i=n(15),c=n(32);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=a.a.createContext({auth:!1}),m=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=p(this,b(e).call(this))).state={auth:!1},t}var n,r,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,u["PureComponent"]),n=e,(r=[{key:"componentDidMount",value:function(){var t,e=(t=o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==this.state.auth){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,c.a.get("/ping");case 5:t.sent,this.setState({auth:!0}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),i.Router.push("/");case 12:case"end":return t.stop()}},t,this,[[2,9]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(t){l(u,r,o,a,i,"next",t)}function i(t){l(u,r,o,a,i,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(h.Provider,{value:this.state},this.props.children)}}])&&s(n.prototype,r),f&&s(n,f),e}();e.b=m}},[[233,1,0]]]);