!function(u){function t(t){for(var e,n,i=t[0],o=t[1],r=t[2],c=0,a=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&a.push(s[n][0]),s[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(u[e]=o[e]);for(h&&h(t);a.length;)a.shift()();return d.push.apply(d,r||[]),l()}function l(){for(var t,e=0;e<d.length;e++){for(var n=d[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(i=!1)}i&&(d.splice(e--,1),t=c(c.s=n[0]))}return t}var n={},s={7:0},d=[];function c(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=u,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var h=i;d.push([329,0]),l()}({11:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var i=n(1),l=n.n(i),o=n(10),r=n.n(o),c=n(5),a=n.n(c),u=n(6),s=n.n(u),d=n(15),h=(n(18),function(){function n(t){var e=this;a()(this,n),this.element=t,this.originalElement=t.cloneNode(!0),this.parent=t.parentElement,this.scrollInstance=null,this.mobileMedia=matchMedia("(max-width: 767px)"),this.autoFillHeight=this.autoFillHeight.bind(this),this.mobileMedia.addListener(function(t){t.matches?e.unMount():e.init()}),this.mobileMedia.matches||setTimeout(function(){return e.init()},0)}return s()(n,[{key:"autoFillHeight",value:function(){this.element.style.height="".concat(this.height,"px")}},{key:"init",value:function(){var e=this;this.element.style.height="".concat(this.height,"px"),this.scrollInstance=new d.a(this.element),["resize","deviceorientation"].forEach(function(t){window.addEventListener(t,e.autoFillHeight)})}},{key:"unMount",value:function(){var t,e,n,i=this;this.scrollInstance&&(n=(e=Array.from(this.parent.children)).indexOf(this.element),e.splice(n,1,this.originalElement),this.parent.innerHTML="",(t=this.parent).append.apply(t,r()(e)),this.scrollInstance.unMount(),["resize","deviceorientation"].forEach(function(t){window.removeEventListener(t,i.autoFillHeight)}))}},{key:"height",get:function(){var e=this,t=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(t){return Number(window.getComputedStyle(e.element,null).getPropertyValue(t).slice(0,-2))}),o=l()(i,3),r=o[0],c=o[1],a=o[2],u=t-n-c||0-r||0;return!(u<a)&&a||u}}]),n}())},18:function(t,e,n){},255:function(t,e,n){},329:function(t,e,n){"use strict";n.r(e);function l(t){var e=window.innerWidth/2,n=t.getBoundingClientRect();return e-n.left-n.width/2}function s(t){var e=window.innerHeight/2,n=t.getBoundingClientRect().height;return console.log(e),e-n/2}function o(){var t=matchMedia("(max-width: 1024px)").matches,e=matchMedia("(max-width: 767px)").matches,n=document.querySelector(".image-gradient-element"),i=l(n),o=s(n),r=document.querySelector(".nav"),c=document.querySelector(".sidebar"),a=document.querySelector(".index-content"),u=document.querySelector(".mobile-menu-button");console.log(t),f.a.apply(void 0,h()(e||!t?[Object(f.d)({from:{x:i,scale:.5,opacity:0},to:{scale:1,opacity:1,x:i},duration:600}),Object(f.d)({from:{x:i},duration:600})]:[Object(f.d)({from:{y:o,scale:.5,opacity:0},to:{y:o,scale:1,opacity:1},duration:600}),Object(f.d)({from:{y:o},duration:600})])).start({update:Object(f.c)(n).set,complete:function(){n.classList.remove("opacity-0"),Object(f.b)(Object(f.d)({from:{y:-40,opacity:0},duration:600}),Object(f.d)({from:{x:40,opacity:0},duration:600}),Object(f.d)({from:{scale:.7,opacity:0},duration:900})).start({update:function(t){var e=d()(t,3),n=e[0],i=e[1],o=e[2];Object(f.c)(r).set(n),Object(f.c)(c).set(i),Object(f.c)(u).set(i),Object(f.c)(a).set(o)},complete:function(){[r,c,a,u].forEach(function(t){return t.classList.remove("opacity-0")})}})}})}var r=n(11),i=n(1),d=n.n(i),c=n(10),h=n.n(c),f=n(24);n(255);document.addEventListener("DOMContentLoaded",function(){var t=matchMedia("(max-width: 1024px)"),i=null;t.addListener(function(t){var e=t.matches,n=document.querySelector(".index-content");e&&n?i=new r.a(n):i&&i.unMount()});var e=document.querySelector(".index-content");t.matches&&e&&(i=new r.a(e)),setTimeout(o,0)})}});