!function(){"use strict";const e={inIFrame:()=>{try{return window.self!==window.top}catch(e){return!0}}};e.dom={onDOMReady:()=>new Promise(e=>{"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}),forEach(e,t,n){const i=[...e];for(let e=0;e<i.length;e++)t.call(n||window,i[e],e)},wrap:(e,t)=>(e.parentNode.insertBefore(t,e),t.appendChild(e),t),wrapAll(e,t){if(e&&e.length){const n=Array.prototype.slice.call(e);n[0].parentNode.insertBefore(t,n[0]),n.forEach(e=>t.appendChild(e))}return t},createElement(e){const t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}};var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(){function e(){n(this,e),this._listeners={}}return i(e,[{key:"on",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this._listeners[e]||(this._listeners[e]=[]),t._priority=parseInt(n)||0,-1===this._listeners[e].indexOf(t)&&(this._listeners[e].push(t),this._listeners[e].length>1&&this._listeners[e].sort(this.listenerSorter))}},{key:"listenerSorter",value:function(e,t){return e._priority-t._priority}},{key:"off",value:function(e,t){if(void 0!==this._listeners[e])if(void 0!==t){var n=this._listeners[e].indexOf(t);-1<n&&this._listeners[e].splice(n,1)}else delete this._listeners[e]}},{key:"trigger",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e&&(e={type:e,data:"object"===(void 0===n?"undefined":t(n))&&null!==n?n:{}}),void 0!==this._listeners[e.type])for(var i=this._listeners[e.type].length-1;i>=0;i--)this._listeners[e.type][i](e)}},{key:"destroy",value:function(){this._listeners={}}}]),e}(),r=function(e){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100*Math.random()|0;n(this,r);var t=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.id="BELLHOP:"+e,t.connected=!1,t.isChild=!0,t.connecting=!1,t.origin="*",t._sendLater=[],t.iframe=null,t.receive=t.receive.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,s),i(r,[{key:"receive",value:function(e){if(this.target===e.source)if("connected"===e.data)this.onConnectionReceived(e.data);else{var n=e.data;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){console.error("Bellhop error: ",e)}this.connected&&"object"===(void 0===n?"undefined":t(n))&&n.type&&this.trigger(n)}}},{key:"onConnectionReceived",value:function(e){this.connecting=!1,this.connected=!0,this.isChild||this.target.postMessage(e,this.origin);for(var t=0;t<this._sendLater.length;t++){var n=this._sendLater[t],i=n.type,o=n.data;this.send(i,o)}this._sendLater.length=0,this.trigger("connected")}},{key:"connect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*";this.connecting||(this.disconnect(),this.connecting=!0,e instanceof HTMLIFrameElement&&(this.iframe=e),this.isChild=void 0===e,this.supported=!0,this.isChild&&(this.supported=window!=e),this.origin=t,window.addEventListener("message",this.receive),this.isChild&&(window===this.target?this.trigger("failed"):this.target.postMessage("connected",this.origin)))}},{key:"disconnect",value:function(){this.connected=!1,this.connecting=!1,this.origin=null,this.iframe=null,this.isChild=!0,this._sendLater.length=0,window.removeEventListener("message",this.receive)}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw"The event type must be a string";var n={type:e,data:t};this.connecting?this._sendLater.push(n):this.target.postMessage(JSON.stringify(n),this.origin)}},{key:"fetch",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this.connecting&&!this.connected)throw"No connection, please call connect() first";this.on(e,function e(i){o&&n.off(i.type,e),t(i)}),this.send(e,i)}},{key:"respond",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.on(e,function o(s){i&&t.off(s.type,o),t.send(e,"function"==typeof n?n():n)})}},{key:"destroy",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"destroy",this).call(this),this.disconnect(),this._sendLater.length=0}},{key:"target",get:function(){return this.isChild?window.parent:this.iframe.contentWindow}}]),r}();const c=new class{constructor(){this._bellhop=new r,this._timer=null,this._onConnected=null,this._bellhop.on("connected",()=>{this._timer&&(clearTimeout(this._timer),this._timer=null),this._onConnected&&this._onConnected()})}connect({discourseOrigin:t,onConnected:n,timeout:i,onTimeout:o}){if(!e.inIFrame())throw new Error("comToPlugin must be used in an iframe");this.disconnect(),this._onConnected=n,this._timer=i?setTimeout(()=>{o&&o()},i):null,this._bellhop.connect(void 0,t)}disconnect(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._bellhop.disconnect()}isConnected(){return this._bellhop.connected}onDiscourseRoutePushed(e){this._bellhop.on("m2",t=>e(t.data))}onCountsChanged(e){this._bellhop.on("m3",t=>e(t.data))}postSetDiscourseRoute({route:e,mode:t,clientContext:n}){this._bellhop.send("m4",arguments[0])}postSetRouteProps({category:e,discourseTitle:t,error:n}){this._bellhop.send("m6",arguments[0])}postSetRedirects(e){this._bellhop.send("m7",e)}},a=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight;function l(e,t){"UP"===t?0===window.scrollY&&e.preventDefault():"DOWN"===t&&window.scrollY===a&&e.preventDefault()}window.addEventListener("wheel",e=>{e.deltaY<0?l(e,"UP"):e.deltaY>0&&l(e,"DOWN")},{passive:!1}),document.addEventListener("keydown",e=>{e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||("ArrowUp"!==e.code&&"PageUp"!==e.code||l(e,"UP"),"ArrowDown"!==e.code&&"PageDown"!==e.code||l(e,"DOWN"))});const d=".dcs-icons, .dcs-trigger.dcs-no-balloon .dcs-trigger-span, .dcs-trigger.dcs-no-balloon.dcs-no-span";function h(e){const t=e.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>=0||e.scrollIntoView()}function u(){const t=document.getElementsByClassName("dcs-trigger"),n={};e.dom.forEach(t,e=>{const t=e.dataset.dcsTriggerId;n[t]=n[t]||!!e.dataset.dcsHighlightable});const i=Object.keys(n).filter(e=>!n[e]).map(e=>({src:{layout:2,triggerId:e},dest:{layout:0,pageName:"@SAME_AS_SRC@"}}));c.postSetRedirects(i)}const g=new class{constructor(){this.selTriggerNode=null,this.resizeTimer=null,this.currentRoute=null,c.onDiscourseRoutePushed(this._onDiscourseRoutePushed.bind(this)),c.onCountsChanged(({counts:e})=>console.log("counts: ",e))}connect({discourseOrigin:e,timeout:t}){return new Promise((n,i)=>{this.resolveConnect=n,c.connect({discourseOrigin:e,timeout:t,onTimeout:()=>i("timeout")})})}parseDom({descr:t,pageName:n,discourseOrigin:i,counts:o}){const s=t.pages.find(e=>e.name===n);return new MutationObserver(e=>{for(let o of e)for(let e of o.addedNodes){if(e.nodeType!==Node.ELEMENT_NODE)return;const o=[..."A"===e.tagName?[e]:[],...e.getElementsByTagName("A")];for(let e of o)console.log("Docuss experimental feature: a link has been dynamically added",e),this._transformLink({a:e,descr:t,discourseOrigin:i,page:s});const r=[...e.matches(d)?[e]:[],...e.querySelectorAll(d)];for(let e of r)console.log("Docuss experimental feature: a trigger target has been dynamically added",e),this._addTriggerClickEvent({node:e,pageName:n});const c=[...e.classList.contains("dcs-trigger")?[e]:[],...e.getElementsByClassName("dcs-trigger")];c.length&&(console.log("Docuss experimental feature: one or several triggers have been dynamically added",c),u())}}).observe(document.documentElement,{childList:!0,subtree:!0}),window.addEventListener("click",()=>{!window.getSelection().toString()&&this.selTriggerNode&&this.selTriggerNode.dataset.dcsHighlightable&&(this._selectTriggers(null),c.postSetDiscourseRoute({route:{layout:0,pageName:n},mode:"PUSH",clientContext:!0}))}),window.addEventListener("resize",e=>{null!==this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.resizeTimer=null,this.selTriggerNode&&h(this.selTriggerNode)},100)}),e.dom.onDOMReady().then(()=>{e.dom.forEach(document.getElementsByTagName("a"),e=>{this._transformLink({a:e,descr:t,discourseOrigin:i,page:s})}),e.dom.forEach(document.querySelectorAll(d),e=>{this._addTriggerClickEvent({node:e,pageName:n})}),u(),this.runReady=!0,this.delayedRoute&&this._onDiscourseRoutePushed({route:this.delayedRoute})})}_onDiscourseRoutePushed({route:e,descr:t,counts:n,clientContext:i,origin:o}){if(this.currentRoute=e,this.resolveConnect)return this.resolveConnect({descr:t,pageName:e.pageName,discourseOrigin:o,counts:n}),delete this.resolveConnect,this.runReady=!1,void(this.delayedRoute=e);if(this.runReady){if(i||this._selectTriggers(e.triggerId),2===e.layout||3===e.layout){const e=this.selTriggerNode&&this.selTriggerNode.dataset.dcsCategory||document.documentElement.dataset.dcsCategory,t=this.selTriggerNode&&this.selTriggerNode.dataset.dcsDiscourseTitle||document.documentElement.dataset.dcsDiscourseTitle;c.postSetRouteProps({category:e,discourseTitle:t})}}else this.delayedRoute=e}_addTriggerClickEvent({node:e,pageName:t}){e.addEventListener("click",e=>{if(window.getSelection().toString())return;const n=e.target.closest(".dcs-trigger"),i=n.dataset.dcsTriggerId;this._selectTriggers(i),c.postSetDiscourseRoute({route:{layout:3,pageName:n.dataset.dcsPageName||t,triggerId:i,interactMode:n.dataset.dcsInteractMode},mode:"PUSH",clientContext:!0}),e.stopPropagation()})}_selectTriggers(t){if(!this.runReady)throw new Error("should be ready");if(this.selTriggerNode=null,e.dom.forEach(document.getElementsByClassName("dcs-highlighted"),e=>e.classList.remove("dcs-highlighted")),!t)return;const n=document.querySelectorAll(`.dcs-trigger[data-dcs-trigger-id="${t}"]`);n.length?(this.selTriggerNode=null,e.dom.forEach(n,e=>{if(e.dataset.dcsHighlightable){e.classList.add("dcs-highlighted");const t=e.closest(".dcs-subsec");t&&t.classList.add("dcs-highlighted"),this.selTriggerNode=this.selTriggerNode||e}}),this.selTriggerNode=this.selTriggerNode||n[0],setTimeout(()=>h(this.selTriggerNode),700)):c.postSetRouteProps({error:error})}_transformLink({a:e,descr:t,discourseOrigin:n,page:i}){if(!e.href||"#"===e.href||"#!"===e.href||e.href.startsWith("javascript:"))return;"_parent"!==e.target&&"_top"!==e.target||delete e.target,"discourse"===e.hostname&&(e.href=new URL(e.pathname+e.search+e.hash,n));const o=i.url,s=e.getAttribute("href").trim(),r=new URL(s,o);r.hash="";const a=t.pages.find(e=>e.url.split("#")[0]===r.href);if(!a&&e.origin!==n)return void("_blank"!==e.target&&(e.target="_parent"));let l;if(a)e.href=n+"/docuss/"+a.name+e.hash,l={layout:0,pageName:a.name,hash:e.hash};else if(e.pathname.startsWith("/docuss/")){const t=e.pathname.substring("/docuss/".length);l={layout:0,pageName:t,hash:e.hash}}else{if("/"===e.pathname||"/docuss"===e.pathname)return void("_blank"!==e.target&&(e.target="_parent"));l={layout:1,pathname:e.pathname,hash:e.hash}}"_blank"!==e.target&&e.addEventListener("click",t=>{if(!t.ctrlKey)if(t.preventDefault(),t.stopPropagation(),l.pageName===i.name){location.hash=e.hash;const t=Object.assign({},this.currentRoute,{hash:e.hash});c.postSetDiscourseRoute({route:t,mode:"REPLACE",clientContext:!0})}else c.postSetDiscourseRoute({route:l,mode:"PUSH",clientContext:!0})})}};g.connect({discourseOrigin:"*",timeout:1e4}).then(e=>{g.parseDom(e)},e=>logError("Unable to connect to dcs-discourse-plugin2",e))}();
//# sourceMappingURL=dcs-html-based.js.map
