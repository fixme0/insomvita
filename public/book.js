!function(l){function t(t){for(var e,n,i=t[0],r=t[1],o=t[2],u=0,a=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&a.push(c[n][0]),c[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(l[e]=r[e]);for(f&&f(t);a.length;)a.shift()();return h.push.apply(h,o||[]),s()}function s(){for(var t,e=0;e<h.length;e++){for(var n=h[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(i=!1)}i&&(h.splice(e--,1),t=u(u.s=n[0]))}return t}var n={},c={2:0},h=[];function u(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=l,u.c=n,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var f=i;h.push([150,0]),s()}({150:function(t,e,n){"use strict";n.r(e);var i=n(2);n(151);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".text-list");t&&new i.a(t)})},151:function(t,e,n){},2:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(4),s=n.n(i),r=n(3),o=n.n(r),u=n(0),a=n.n(u),l=n(1),c=n.n(l),h=n(5),f=(n(6),function(){function n(t){var e=this;a()(this,n),this.element=t,this.originalElement=t.cloneNode(!0),this.parent=t.parentElement,this.scrollInstance=null,this.mobileMedia=matchMedia("(max-width: 767px)"),this.autoFillHeight=this.autoFillHeight.bind(this),this.mobileMedia.addListener(function(t){t.matches?e.unMount():e.init()}),this.mobileMedia.matches||setTimeout(function(){return e.init()},0)}return c()(n,[{key:"autoFillHeight",value:function(){this.element.style.height="".concat(this.height,"px")}},{key:"init",value:function(){var e=this;this.element.style.height="".concat(this.height,"px"),this.scrollInstance=new h.a(this.element),["resize","deviceorientation"].forEach(function(t){window.addEventListener(t,e.autoFillHeight)})}},{key:"unMount",value:function(){var t,e,n,i=this;this.scrollInstance&&(n=(e=Array.from(this.parent.children)).indexOf(this.element),e.splice(n,1,this.originalElement),this.parent.innerHTML="",(t=this.parent).append.apply(t,o()(e)),this.scrollInstance.unMount(),["resize","deviceorientation"].forEach(function(t){window.removeEventListener(t,i.autoFillHeight)}))}},{key:"height",get:function(){var e=this,t=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(t){return Number(window.getComputedStyle(e.element,null).getPropertyValue(t).slice(0,-2))}),r=s()(i,3),o=r[0],u=r[1],a=r[2],l=t-n-u||0-o||0;return!(l<a)&&a||l}}]),n}())},6:function(t,e,n){}});