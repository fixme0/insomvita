!function(u){function t(t){for(var e,n,i=t[0],o=t[1],r=t[2],s=0,l=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(u[e]=o[e]);for(f&&f(t);l.length;)l.shift()();return c.push.apply(c,r||[]),h()}function h(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var n={},a={1:0},c=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=u,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var f=i;c.push([252,0]),h()}({11:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(1),h=n.n(i),o=n(10),r=n.n(o),s=n(3),l=n.n(s),u=n(4),a=n.n(u),c=n(15),f=(n(17),function(){function n(t){var e=this;l()(this,n),this.element=t,this.originalElement=t.cloneNode(!0),this.parent=t.parentElement,this.scrollInstance=null,this.mobileMedia=matchMedia("(max-width: 767px)"),this.autoFillHeight=this.autoFillHeight.bind(this),this.mobileMedia.addListener(function(t){t.matches?e.unMount():e.init()}),this.mobileMedia.matches||setTimeout(function(){return e.init()},0)}return a()(n,[{key:"autoFillHeight",value:function(){this.element.style.height="".concat(this.height,"px")}},{key:"init",value:function(){var e=this;this.element.style.height="".concat(this.height,"px"),this.scrollInstance=new c.a(this.element),["resize","deviceorientation"].forEach(function(t){window.addEventListener(t,e.autoFillHeight)})}},{key:"unMount",value:function(){var t,e,n,i=this;this.scrollInstance&&(n=(e=Array.from(this.parent.children)).indexOf(this.element),e.splice(n,1,this.originalElement),this.parent.innerHTML="",(t=this.parent).append.apply(t,r()(e)),this.scrollInstance.unMount(),["resize","deviceorientation"].forEach(function(t){window.removeEventListener(t,i.autoFillHeight)}))}},{key:"height",get:function(){var e=this,t=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(t){return Number(window.getComputedStyle(e.element,null).getPropertyValue(t).slice(0,-2))}),o=h()(i,3),r=o[0],s=o[1],l=o[2],u=t-n-s||0-r||0;return!(u<l)&&l||u}}]),n}())},17:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var i=n(11),o=n(33);n(253);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".blog-content-news-list");t&&new i.a(t);var e=document.querySelectorAll(".blog-content-news-list-item__toggler");e&&e.length&&e.forEach(function(t){var e=t.previousElementSibling,n=t.parentElement;new o.a(t,{toggleElement:e,typeEvent:"click",onClose:function(){n.classList.remove("open")},onShow:function(){n.classList.add("open")}})})})},253:function(t,e,n){},33:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(3),h=n.n(i),o=n(4),r=n.n(o),s=function(){function u(t,e){h()(this,u);var n=e.typeEvent,i=e.toggleElement,o=e.onClose,r=void 0===o?function(){}:o,s=e.onShow,l=void 0===s?function(){}:s;this.trigger=t,this.element=i,this.show=!1,this.prevHeight=0,this.onShow=l,this.onClose=r,this.init(n)}return r()(u,[{key:"setHeight",value:function(t){this.element.style.maxHeight="".concat(t,"px")}},{key:"handlerEvent",value:function(t){var e,n,i;t.preventDefault(),this.show=!this.show,this.show?(n=(e=this.element).clientHeight,i=e.scrollHeight,this.prevHeight=n,this.setHeight(i),this.onShow()):(this.setHeight(this.prevHeight),this.onClose())}},{key:"init",value:function(t){this.trigger.addEventListener(t,this.handlerEvent.bind(this))}}]),u}()}});