!function(a){function t(t){for(var e,n,i=t[0],o=t[1],r=t[2],s=0,l=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(h,n)&&h[n]&&l.push(h[n][0]),h[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);for(f&&f(t);l.length;)l.shift()();return c.push.apply(c,r||[]),u()}function u(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==h[r]&&(i=!1)}i&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var n={},h={16:0},c=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var f=i;c.push([252,0]),u()}({11:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(1),u=n.n(i),o=n(10),r=n.n(o),s=n(3),l=n.n(s),a=n(4),h=n.n(a),c=n(15),f=(n(17),function(){function n(t){var e=this;l()(this,n),this.element=t,this.originalElement=t.cloneNode(!0),this.parent=t.parentElement,this.scrollInstance=null,this.mobileMedia=matchMedia("(max-width: 767px)"),this.autoFillHeight=this.autoFillHeight.bind(this),this.mobileMedia.addListener(function(t){t.matches?e.unMount():e.init()}),this.mobileMedia.matches||setTimeout(function(){return e.init()},0)}return h()(n,[{key:"autoFillHeight",value:function(){this.element.style.height="".concat(this.height,"px")}},{key:"init",value:function(){var e=this;this.element.style.height="".concat(this.height,"px"),this.scrollInstance=new c.a(this.element),["resize","deviceorientation"].forEach(function(t){window.addEventListener(t,e.autoFillHeight)})}},{key:"unMount",value:function(){var t,e,n,i=this;this.scrollInstance&&(n=(e=Array.from(this.parent.children)).indexOf(this.element),e.splice(n,1,this.originalElement),this.parent.innerHTML="",(t=this.parent).append.apply(t,r()(e)),this.scrollInstance.unMount(),["resize","deviceorientation"].forEach(function(t){window.removeEventListener(t,i.autoFillHeight)}))}},{key:"height",get:function(){var e=this,t=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(t){return Number(window.getComputedStyle(e.element,null).getPropertyValue(t).slice(0,-2))}),o=u()(i,3),r=o[0],s=o[1],l=o[2],a=t-n-s||0-r||0;return!(a<l)&&l||a}}]),n}())},17:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var i=n(11),o=n(33);n(253);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".team-content-list");t&&new i.a(t);var e=document.querySelectorAll(".team-content-list-item__toggler");e&&e.length&&e.forEach(function(t){var e=t.parentElement,n=e.querySelector(".team-content-list-item__text");new o.a(t,{toggleElement:n,typeEvent:"click",onClose:function(){e.classList.remove("open")},onShow:function(){e.classList.add("open")}})})})},253:function(t,e,n){},33:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(3),u=n.n(i),o=n(4),r=n.n(o),s=function(){function a(t,e){u()(this,a);var n=e.typeEvent,i=e.toggleElement,o=e.onClose,r=void 0===o?function(){}:o,s=e.onShow,l=void 0===s?function(){}:s;this.trigger=t,this.element=i,this.show=!1,this.prevHeight=0,this.onShow=l,this.onClose=r,this.init(n)}return r()(a,[{key:"setHeight",value:function(t){this.element.style.maxHeight="".concat(t,"px")}},{key:"handlerEvent",value:function(t){var e,n,i;t.preventDefault(),this.show=!this.show,this.show?(n=(e=this.element).clientHeight,i=e.scrollHeight,this.prevHeight=n,this.setHeight(i),this.onShow()):(this.setHeight(this.prevHeight),this.onClose())}},{key:"init",value:function(t){this.trigger.addEventListener(t,this.handlerEvent.bind(this))}}]),a}()}});