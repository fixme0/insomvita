!function(a){function e(e){for(var t,n,r=e[0],o=e[1],i=e[2],u=0,c=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&c.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(p&&p(e);c.length;)c.shift()();return s.push.apply(s,i||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==f[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},f={2:0},s=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=a,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;s.push([169,0]),l()}({10:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var r=n(7);n(170);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".text-list");e&&new r.a(e)})},170:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(8),l=n.n(r),o=n(5),i=n.n(o),u=n(6),c=n.n(u),a=n(9),f=(n(10),function(){function n(e){var t=this;i()(this,n),this.element=e,setTimeout(function(){return t.init()},0)}return c()(n,[{key:"init",value:function(){this.element.style.height="".concat(this.height,"px"),new a.a(this.element)}},{key:"height",get:function(){var t=this,e=window.innerHeight,n=this.element.offsetTop,r=["margin-top","margin-bottom","max-height"].map(function(e){return Number(window.getComputedStyle(t.element,null).getPropertyValue(e).slice(0,-2))}),o=l()(r,3),i=o[0],u=o[1],c=o[2],a=e-n-u||0-i||0;return!(a<c)&&c||a}}]),n}())}});