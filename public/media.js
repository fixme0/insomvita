!function(p){function e(e){for(var t,r,n=e[0],o=e[1],i=e[2],u=0,c=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(f,r)&&f[r]&&c.push(f[r][0]),f[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(p[t]=o[t]);for(s&&s(e);c.length;)c.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==f[i]&&(n=!1)}n&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var r={},f={9:0},l=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return p[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=p,u.c=r,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;l.push([331,0]),a()}({276:function(e,t,r){},331:function(e,t,r){"use strict";r.r(t);r(276);var n=r(4),o=r.n(n),i=r(5),u=r.n(i),c=r(6),p=r.n(c);function a(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}var f=function(){function t(e){u()(this,t),this.appDOM=e,this.init()}return p()(t,[{key:"init",value:function(){var e=this.appDOM.id,t=this.appDOM.dataset.playerSetup,r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(e){o()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({id:e},JSON.parse(t));new window.Playerjs(r)}}]),t}();document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("player");e&&new f(e)})}});