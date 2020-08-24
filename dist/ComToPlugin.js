var t,e;t=this,e=function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(r){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=n=function(t){return e(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},n(r)}t.exports=n}),r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t},s=function(){function t(){r(this,t),this._listeners={}}return i(t,[{key:"on",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this._listeners[t]||(this._listeners[t]=[]),e._priority=parseInt(n)||0,-1===this._listeners[t].indexOf(e)&&(this._listeners[t].push(e),this._listeners[t].length>1&&this._listeners[t].sort(this.listenerSorter))}},{key:"listenerSorter",value:function(t,e){return t._priority-e._priority}},{key:"off",value:function(t,e){if(void 0!==this._listeners[t])if(void 0!==e){var n=this._listeners[t].indexOf(e);-1<n&&this._listeners[t].splice(n,1)}else delete this._listeners[t]}},{key:"trigger",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t&&(t={type:t,data:"object"===n(e)&&null!==e?e:{}}),void 0!==this._listeners[t.type])for(var r=this._listeners[t.type].length-1;r>=0;r--)this._listeners[t.type][r](t)}},{key:"destroy",value:function(){this._listeners={}}}]),t}(),c=e(function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),s=new C(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=E(s,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var a=u(t,e,n);if("normal"===a.type){if(r=n.done?d:h,a.arg===p)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=d,n.method="throw",n.arg=a.arg)}}}(t,n,s),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var l="suspendedStart",h="suspendedYield",f="executing",d="completed",p={};function y(){}function g(){}function v(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(S([])));_&&_!==n&&r.call(_,i)&&(m=_);var b=v.prototype=y.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var a=c.arg,l=a.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(l).then(function(t){a.value=t,i(a)},function(t){return e("throw",t,i,s)})}s(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:k}}function k(){return{value:e,done:!0}}return g.prototype=b.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[s]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o){var i=new L(a(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],c=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var a=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(a&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}),a=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},u=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e},l=e(function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e}),h=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t},f=e(function(t){function e(n,r,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=e=Reflect.get:t.exports=e=function(t,e,n){var r=h(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},e(n,r,o||n)}t.exports=e}),d=e(function(t){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e}),p=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100*Math.random()|0;return r(this,e),(t=u(this,l(e).call(this))).id="BELLHOP:".concat(n),t.connected=!1,t.isChild=!0,t.connecting=!1,t.origin="*",t._sendLater=[],t.iframe=null,t.receive=t.receive.bind(a(t)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,s),i(e,[{key:"receive",value:function(t){if(this.target===t.source)if("connected"===t.data)this.onConnectionReceived(t.data);else{var e=t.data;if("string"==typeof e)try{e=JSON.parse(e)}catch(t){console.error("Bellhop error: ",t)}this.connected&&"object"===n(e)&&e.type&&this.trigger(e)}}},{key:"onConnectionReceived",value:function(t){this.connecting=!1,this.connected=!0,this.isChild||this.target.postMessage(t,this.origin);for(var e=0;e<this._sendLater.length;e++){var n=this._sendLater[e],r=n.type,o=n.data;this.send(r,o)}this._sendLater.length=0,this.trigger("connected")}},{key:"connect",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*";this.connecting||(this.disconnect(),this.connecting=!0,t instanceof HTMLIFrameElement&&(this.iframe=t),this.isChild=void 0===t,this.supported=!0,this.isChild&&(this.supported=window!=t),this.origin=e,window.addEventListener("message",this.receive),this.isChild&&(window===this.target?this.trigger("failed"):this.target.postMessage("connected",this.origin)))}},{key:"disconnect",value:function(){this.connected=!1,this.connecting=!1,this.origin=null,this.iframe=null,this.isChild=!0,this._sendLater.length=0,window.removeEventListener("message",this.receive)}},{key:"send",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof t)throw"The event type must be a string";var n={type:t,data:e};this.connecting?this._sendLater.push(n):this.target.postMessage(JSON.stringify(n),this.origin)}},{key:"fetch",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this.connecting&&!this.connected)throw"No connection, please call connect() first";this.on(t,function t(r){o&&n.off(r.type,t),e(r)}),this.send(t,r)}},{key:"respond",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this;this.on(t,function t(o){var i;return c.async(function(s){for(;;)switch(s.prev=s.next){case 0:return n&&r.off(o,t),"function"==typeof e&&(e=e()),s.next=4,c.awrap(e);case 4:i=s.sent,r.send(o.type,i);case 6:case"end":return s.stop()}})})}},{key:"destroy",value:function(){f(l(e.prototype),"destroy",this).call(this),this.disconnect(),this._sendLater.length=0}},{key:"target",get:function(){return this.isChild?window.parent:this.iframe.contentWindow}}]),e}();const y={inIFrame:()=>{try{return window.self!==window.top}catch(t){return!0}}};y.dom={onDOMReady:()=>new Promise(t=>{"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}),forEach(t,e,n){const r=[...t];for(let t=0;t<r.length;t++)e.call(n||window,r[t],t)},wrap:(t,e)=>(t.parentNode.insertBefore(e,t),e.appendChild(t),e),wrapAll(t,e){if(t&&t.length){const n=Array.prototype.slice.call(t);n[0].parentNode.insertBefore(e,n[0]),n.forEach(t=>e.appendChild(t))}return e},createElement(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}};const g=y.inIFrame,v=new class{constructor(){this._bellhop=new p,this._timer=null,this._onConnected=null,this._bellhop.on("connected",()=>{this._timer&&(clearTimeout(this._timer),this._timer=null),this._onConnected&&this._onConnected()})}connect({discourseOrigin:t,onConnected:e,timeout:n,onTimeout:r}){if(!y.inIFrame())throw new Error("comToPlugin must be used in an iframe");this.disconnect(),this._onConnected=e,this._timer=n?setTimeout(()=>{r&&r()},n):null,this._bellhop.connect(void 0,t)}disconnect(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._bellhop.disconnect()}isConnected(){return this._bellhop.connected}onDiscourseRoutePushed(t){this._bellhop.on("m2",e=>t(e.data))}onCountsChanged(t){this._bellhop.on("m3",e=>t(e.data))}postSetDiscourseRoute({route:t,mode:e,clientContext:n}){this._bellhop.send("m4",arguments[0])}postSetRouteProps({category:t,discourseTitle:e,error:n}){this._bellhop.send("m6",arguments[0])}postSetRedirects(t){this._bellhop.send("m7",t)}postCreateDcsTags({pageName:t,triggerIds:e,notificationLevel:n}){this._bellhop.send("m8",arguments[0])}postCreateTopic({title:t,body:e,category:n,pageName:r,triggerId:o,tagNotificationLevel:i}){this._bellhop.send("m9",arguments[0])}};function m(t,e){if("UP"===e)0===window.scrollY&&t.preventDefault();else if("DOWN"===e){const e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight;window.scrollY>e-1&&t.preventDefault()}}window.addEventListener("wheel",t=>{t.deltaY<0?m(t,"UP"):t.deltaY>0&&m(t,"DOWN")},{passive:!1}),document.addEventListener("keydown",t=>{t.shiftKey||t.altKey||t.ctrlKey||t.metaKey||("ArrowUp"!==t.code&&"PageUp"!==t.code||m(t,"UP"),"ArrowDown"!==t.code&&"PageDown"!==t.code||m(t,"DOWN"))}),t.comToPlugin=v,t.inIFrame=g,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{});
//# sourceMappingURL=comToPlugin.js.map
