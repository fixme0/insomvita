!function(u){function e(e){for(var t,n,i=e[0],r=e[1],o=e[2],s=0,l=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&l.push(c[n][0]),c[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t]);for(f&&f(e);l.length;)l.shift()();return h.push.apply(h,o||[]),a()}function a(){for(var e,t=0;t<h.length;t++){for(var n=h[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(i=!1)}i&&(h.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},c={12:0},h=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=u,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=i;h.push([158,0]),a()}({13:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(0),a=n.n(i),r=n(1),o=n.n(r),s=function(){function u(e,t){a()(this,u);var n=t.typeEvent,i=t.toggleElement,r=t.onClose,o=void 0===r?function(){}:r,s=t.onShow,l=void 0===s?function(){}:s;this.trigger=e,this.element=i,this.show=!1,this.prevHeight=0,this.onShow=l,this.onClose=o,this.init(n)}return o()(u,[{key:"setHeight",value:function(e){this.element.style.maxHeight="".concat(e,"px")}},{key:"handlerEvent",value:function(e){var t,n,i;e.preventDefault(),this.show=!this.show,this.show?(n=(t=this.element).clientHeight,i=t.scrollHeight,this.prevHeight=n,this.setHeight(i),this.onShow()):(this.setHeight(this.prevHeight),this.onClose())}},{key:"init",value:function(e){this.trigger.addEventListener(e,this.handlerEvent.bind(this))}}]),u}()},158:function(e,t,n){"use strict";n.r(t);var u=n(2),a=n(13),c=n(25),h=n(26);n(159);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".reviews-content-list");e&&new u.a(e);var t=document.querySelectorAll(".reviews-content-list-item__toggler");t&&t.length&&t.forEach(function(e){var t=e.previousElementSibling,n=e.parentElement;new a.a(e,{toggleElement:t,typeEvent:"click",onClose:function(){n.classList.remove("open")},onShow:function(){n.classList.add("open")}})});var n=document.querySelectorAll(".reviews-form-likes .likes-item"),i=document.querySelector(".reviews-form-likes__control");n&&new c.a(n,function(e){i&&(i.value=e.filter(Boolean).length)});var r=document.querySelector("[data-counter]"),o=document.querySelector("[data-counter-view]");r&&new h.a(r,function(e){o&&(o.textContent=e.length)});var s=document.querySelector(".review-created__submit--js"),l=document.querySelector(".review-created--js");s&&l&&s.addEventListener("click",function(e){e.preventDefault(),l.classList.remove("visible")})})},159:function(e,t,n){},2:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var i=n(4),a=n.n(i),r=n(3),o=n.n(r),s=n(0),l=n.n(s),u=n(1),c=n.n(u),h=n(5),f=(n(6),function(){function n(e){var t=this;l()(this,n),this.element=e,this.originalElement=e.cloneNode(!0),this.parent=e.parentElement,this.scrollInstance=null,this.mobileMedia=matchMedia("(max-width: 767px)"),this.autoFillHeight=this.autoFillHeight.bind(this),this.mobileMedia.addListener(function(e){e.matches?t.unMount():t.init()}),this.mobileMedia.matches||setTimeout(function(){return t.init()},0)}return c()(n,[{key:"autoFillHeight",value:function(){this.element.style.height="".concat(this.height,"px")}},{key:"init",value:function(){var t=this;this.element.style.height="".concat(this.height,"px"),this.scrollInstance=new h.a(this.element),["resize","deviceorientation"].forEach(function(e){window.addEventListener(e,t.autoFillHeight)})}},{key:"unMount",value:function(){var e,t,n,i=this;this.scrollInstance&&(n=(t=Array.from(this.parent.children)).indexOf(this.element),t.splice(n,1,this.originalElement),this.parent.innerHTML="",(e=this.parent).append.apply(e,o()(t)),this.scrollInstance.unMount(),["resize","deviceorientation"].forEach(function(e){window.removeEventListener(e,i.autoFillHeight)}))}},{key:"height",get:function(){var t=this,e=window.innerHeight,n=this.element.offsetTop,i=["margin-top","margin-bottom","max-height"].map(function(e){return Number(window.getComputedStyle(t.element,null).getPropertyValue(e).slice(0,-2))}),r=a()(i,3),o=r[0],s=r[1],l=r[2],u=e-n-s||0-o||0;return!(u<l)&&l||u}}]),n}())},25:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),l="active",u=function(){function n(e,t){r()(this,n),this.element=e,this.onChange=t,this.init()}return s()(n,[{key:"getLikePosition",value:function(e){return Array.from(this.element).indexOf(e)}},{key:"checkStatusLike",value:function(e){return e.classList.contains(l)}},{key:"handler",value:function(e){e.preventDefault();var t=e.currentTarget,n=this.getLikePosition(t);this.checkStatusLike(t)?this.element.forEach(function(e,t){n<=t&&e.classList.remove(l)}):this.element.forEach(function(e,t){n<t?e.classList.remove(l):e.classList.add(l)}),this.onChange(this.value)}},{key:"init",value:function(){var t=this;this.element.forEach(function(e){e.addEventListener("click",t.handler.bind(t))})}},{key:"value",get:function(){return Array.from(this.element).map(function(e){return e.classList.contains(l)})}}]),n}()},26:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),l=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};r()(this,n),this.element=e,this.limitValue=Number(this.element.dataset.limitValue),this.onChange=t,this.init()}return s()(n,[{key:"handler",value:function(e){var t=e.target.value,n=t.length<this.limitValue?void 0:this.limitValue;this.element.value=t.slice(0,n),this.onChange(this.element.value)}},{key:"init",value:function(){this.element.addEventListener("input",this.handler.bind(this))}}]),n}()},6:function(e,t,n){}});