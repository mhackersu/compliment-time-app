!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,u=function(e,t){for(var r,n=[],o=(i.test(t)?e+"/"+t:t).split("/"),u=0,c=o.length;u<c;u++)r=o[u],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},a=function(t){return function(r){var n=u(c(t),r);return e.require(n,t)}},l=function(e,t){var n=null;n=b&&b.createHot(e);var o={id:e,exports:{},hot:n};return r[e]=o,t(o.exports,a(e),o),o.exports},f=function(e){return n[e]?f(n[e]):e},s=function(e,t){return f(u(c(e),t))},p=function(e,n){null==n&&(n="/");var i=f(e);if(o.call(r,i))return r[i].exports;if(o.call(t,i))return l(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,_=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(v.test(e)){var r=e.replace(v,"");o.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if("object"==typeof e)for(var i in e)o.call(e,i)&&p.register(i,e[i]);else t[e]=n,delete r[e],_(e)},p.list=function(){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};var b=e._hmr&&new e._hmr(s,p,t,r);p._cache=r,p.hmr=b&&b.wrap,p.brunch=!0,e.require=p}}(),function(){var e;window;require.register("components/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=t("react"),l=n(a),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement("div",{id:"content"},l["default"].createElement("compliment",null,"Go You"))}}]),t}(l["default"].Component);e["default"]=f}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=t("react-dom"),i=n(o),u=t("react"),c=n(u),a=t("components/App"),l=n(a);document.addEventListener("DOMContentLoaded",function(){i["default"].render(c["default"].createElement(l["default"],null),document.querySelector("#app"))})}),require.register("socket.js",function(e,t,r){"use strict";var n=io();n.on("server event",function(e){console.log(e),n.emit("client event",{socket:"io"})})}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");