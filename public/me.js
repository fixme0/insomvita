!function(l){function e(e){for(var t,n,o=e[0],i=e[1],r=e[2],a=0,s=[];a<o.length;a++)n=o[a],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&s.push(d[n][0]),d[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(f&&f(e);s.length;)s.shift()();return c.push.apply(c,r||[]),u()}function u(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var r=n[i];0!==d[r]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var n={},d={6:0},c=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=l,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var t=window.webpackJsonp=window.webpackJsonp||[],o=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=o;c.push([179,0]),u()}({143:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(0),r=n.n(o),a=n(1),s=n.n(a),l="modal--open",u="open--enter",d="open--enter-active",c=function(){function o(e,t,n){r()(this,o),this.modalDOM=e,this.modalTriggerDOM=t,this.modalCloseDOM=n,this.init()}return s()(o,[{key:"open",value:function(e){var n=this;e.preventDefault(),this.modalCloseDOM.addEventListener("click",this.close.bind(this),{once:!0});window.addEventListener("keydown",function e(t){console.log(t.key),"Escape"===t.key?n.close(t):window.addEventListener("keydown",e,{once:!0})},{once:!0}),document.body.classList.add(l),requestAnimationFrame(function(){n.modalDOM.classList.add(u),requestAnimationFrame(function(){return n.modalDOM.classList.add(d)})})}},{key:"close",value:function(e){e.preventDefault(),this.modalDOM.addEventListener("transitionend",this.handleTransitionEndCloseModal.bind(this),{once:!0}),this.modalDOM.classList.remove(d)}},{key:"handleTransitionEndCloseModal",value:function(e){e.target===this.modalDOM?(this.modalDOM.classList.remove(u),document.body.classList.remove(l)):this.modalDOM.addEventListener("transitionend",this.handleTransitionEndCloseModal.bind(this),{once:!0})}},{key:"init",value:function(){this.modalTriggerDOM.addEventListener("click",this.open.bind(this))}}]),o}();n(143);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".text-list");e&&new i.a(e);var t=document.querySelector('[data-modal="phone-modal"]'),n=document.querySelector(".sidebar-socials-list-item__link--call"),o=document.querySelector(".phone-modal-body__submit");t&&new c(t,n,o)})},2:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n(3),u=n.n(o),i=n(0),r=n.n(i),a=n(1),s=n.n(a),l=n(4),d=(n(5),function(){function n(e){var t=this;r()(this,n),this.element=e,setTimeout(function(){return t.init()},0)}return s()(n,[{key:"init",value:function(){this.element.style.height="".concat(this.height,"px"),new l.a(this.element)}},{key:"height",get:function(){var t=this,e=window.innerHeight,n=this.element.offsetTop,o=["margin-top","margin-bottom","max-height"].map(function(e){return Number(window.getComputedStyle(t.element,null).getPropertyValue(e).slice(0,-2))}),i=u()(o,3),r=i[0],a=i[1],s=i[2],l=e-n-a||0-r||0;return!(l<s)&&s||l}}]),n}())},5:function(e,t,n){}});