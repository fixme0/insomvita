!function(l){function e(e){for(var t,n,i=e[0],o=e[1],r=e[2],u=0,s=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(h,n)&&h[n]&&s.push(h[n][0]),h[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(f&&f(e);s.length;)s.shift()();return a.push.apply(a,r||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==h[r]&&(i=!1)}i&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},h={9:0},a=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=l,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=i;a.push([178,0]),c()}({10:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var i=n(7),o=n(18);n(179);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".recommend-list");e&&new i.a(e);var t=document.querySelectorAll(".recommend-list-item__toggler");t&&t.length&&t.forEach(function(e){var t=e.parentElement,n=t.querySelector(".recommend-list-item__text");new o.a(e,{toggleElement:n,typeEvent:"click",onClose:function(){t.classList.remove("open")},onShow:function(){t.classList.add("open")}})})})},179:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n(5),c=n.n(i),o=n(6),r=n.n(o),u=function(){function l(e,t){c()(this,l);var n=t.typeEvent,i=t.toggleElement,o=t.onClose,r=void 0===o?function(){}:o,u=t.onShow,s=void 0===u?function(){}:u;this.trigger=e,this.element=i,this.show=!1,this.prevHeight=0,this.onShow=s,this.onClose=r,this.init(n)}return r()(l,[{key:"setHeight",value:function(e){this.element.style.maxHeight="".concat(e,"px")}},{key:"handlerEvent",value:function(e){var t,n,i;e.preventDefault(),this.show=!this.show,this.show?(n=(t=this.element).clientHeight,i=t.scrollHeight,this.prevHeight=n,this.setHeight(i),this.onShow()):(this.setHeight(this.prevHeight),this.onClose())}},{key:"init",value:function(e){this.trigger.addEventListener(e,this.handlerEvent.bind(this))}}]),l}()},7:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var i=n(8),c=n.n(i),o=n(5),r=n.n(o),u=n(6),s=n.n(u),l=n(9),h=(n(10),function(){function n(e){var t=this;r()(this,n),this.element=e,setTimeout(function(){return t.init()},0)}return s()(n,[{key:"init",value:function(){this.element.style.height="".concat(this.height,"px"),new l.a(this.element)}},{key:"height",get:function(){var t=this,e=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(e){return Number(window.getComputedStyle(t.element,null).getPropertyValue(e).slice(0,-2))}),o=c()(i,3),r=o[0],u=o[1],s=o[2],l=e-n-u||0-r||0;return!(l<s)&&s||l}}]),n}())}});