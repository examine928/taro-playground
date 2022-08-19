/*! For license information please see 16.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[16],{"5403":function(e,r,t){t.d(r,{"ub":function(){return n},"Gt":function(){return c},"_z":function(){return i},"pf":function(){return a},"tq":function(){return s},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return y},"cO":function(){return h},"l0":function(){return Z},"__":function(){return w},"cW":function(){return b},"Nf":function(){return g},"$o":function(){return x},"Y8":function(){return T},"FX":function(){return j},"iR":function(){return O},"rs":function(){return S},"gx":function(){return _},"V1":function(){return k},"Ee":function(){return N},"nk":function(){return E},"kh":function(){return P}});t(3464);var o=t(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),c=(0,o.Z)("taro-movable-view-core"),i=(0,o.Z)("taro-page-container-core"),a=((0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),s=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),u=(0,o.Z)("taro-swiper-item-core"),l=(0,o.Z)("taro-view-core"),f=(0,o.Z)("taro-icon-core"),p=(0,o.Z)("taro-progress-core"),d=(0,o.Z)("taro-rich-text-core"),v=(0,o.Z)("taro-text-core"),m=(0,o.Z)("taro-button-core"),y=(0,o.Z)("taro-checkbox-core"),h=(0,o.Z)("taro-checkbox-group-core"),Z=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),w=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),b=(0,o.Z)("taro-picker-core"),g=(0,o.Z)("taro-picker-view-core"),x=(0,o.Z)("taro-picker-view-column-core"),T=(0,o.Z)("taro-radio-core"),j=(0,o.Z)("taro-radio-group-core"),O=(0,o.Z)("taro-slider-core"),S=(0,o.Z)("taro-switch-core"),_=(0,o.Z)("taro-textarea-core"),k=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),N=(0,o.Z)("taro-image-core"),E=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),P=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var o=t(5827),n=t(1760),c=t(517),i=t(6830),a=t(8652),s=t(6014),u=t(3317),l=t(5935),f=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,l.Z)(e);if(r){var n=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,u.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var c=e.ref.current,i=n[t],a=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&c.setAttribute(t,i),r===d){if("scrollTop"===t)return void(c.mpScrollTop=i);if("scrollLeft"===t)return void(c.mpScrollLeft=i);if("scrollIntoView"===t)return void(c.mpScrollIntoView=i)}if("function"==typeof i&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=i;return r===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof i||"number"==typeof i?(c.setAttribute(t,i),void(c[t]=i)):"boolean"==typeof i?i?(c[t]=!0,c.setAttribute(t,i)):(c[t]=!1,c.removeAttribute(t)):void(c[t]=i)}if("string"==typeof i)return void c.setAttribute(t,i);if(!i)return void c.removeAttribute(t);if(o)if("string"==typeof a)c.style.cssText="";else for(var l in a)updateStyle(c,l,"");for(var p in i)updateStyle(c,p,i[p])}else c.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),c=(t.className||t.class||"").split(" "),i=[];return o.forEach((function(e){c.indexOf(e)>-1?(i.push(e),c=c.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&i.push(e)})),(i=[].concat((0,f.Z)(i),(0,f.Z)(c))).join(" ")}(c,o,n):i}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,i.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,a.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,n.Z)(r,2),o=t[0],c=t[1];e.ref.current&&e.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,o=r.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,p.createElement)(e,n,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){t(4744);var o=t(3464),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),r.Fragment=c("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,c={},u=null,l=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!s.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":i.current}}r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"461":function(e,r,t){t.r(r),t.d(r,{"default":function(){return l}});var o,n=t(801),c=function easeInOut(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},i=t(4388),a=t(5931),s=t(5403),u=t(2922),l=function Index(){var e=function _pageScrollTo(e){return function(){!function pageScrollTo(e){var r,t=e.scrollTop,a=e.selector,s=void 0===a?"":a,u=e.offsetTop,l=void 0===u?0:u,f=e.duration,p=void 0===f?300:f,d=e.success,v=e.fail,m=e.complete,y=new i.N({"name":"pageScrollTo","success":d,"fail":v,"complete":m});new Promise((function(e,i){var a,u;try{if(void 0===t&&!s)return y.fail({"errMsg":'scrollTop" 或 "selector" 需要其之一'},i);var f=null===(u=null===(a=n.GY.page)||void 0===a?void 0:a.path)||void 0===u?void 0:u.replace(/([^a-z0-9\u00a0-\uffff_-])/gi,"\\$1"),d=f?document.querySelector(".taro_page#".concat(f)):document.querySelector(".taro_page")||document.querySelector(".taro_router");r||(r=d?function scrollFunc(e){if(void 0===e)return d.scrollTop;d.scrollTop=e}:function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}),t&&s&&console.warn('"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector');var v,m=r();if(s){var h=document.querySelector(s);v=((null==h?void 0:h.offsetTop)||0)+l}else v="number"==typeof t?t:0;var Z=v-m,w=p/17,b=function getTimingFunc(e,r){return function(t){return e(r<=1?1:t/(r-1))}}(c,w);!function scroll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=m+Z*b(t);if(r(n),!(t<w))return y.success({},e);o&&clearTimeout(o),o=setTimeout((function(){scroll(t+1)}),17)}()}catch(e){return y.fail({"errMsg":e.message},i)}}))}({"scrollTop":Number(a.ZPm.pxTransform(2*e))})}};return(0,u.jsx)(s.G7,{"className":"view-content","children":(0,u.jsxs)(s.G7,{"className":"view-list","children":[(0,u.jsxs)(s.G7,{"className":"view-list-item item1","children":[(0,u.jsx)(s.G7,{"className":"view-list-item-text","children":"高度 400"}),(0,u.jsxs)(s.zx,{"size":"mini","className":"view-list-item-btn","onClick":e(400),"children":["Taro.pageScrollTo(","{scrollTop: 400}",")"]})]}),(0,u.jsxs)(s.G7,{"className":"view-list-item item2","children":[(0,u.jsx)(s.G7,{"className":"view-list-item-text","children":"高度 400"}),(0,u.jsxs)(s.zx,{"size":"mini","className":"view-list-item-btn","onClick":e(800),"children":["Taro.pageScrollTo(","{scrollTop: 800}",")"]})]}),(0,u.jsxs)(s.G7,{"className":"view-list-item item3","children":[(0,u.jsx)(s.G7,{"className":"view-list-item-text","children":"高度 400"}),(0,u.jsxs)(s.zx,{"size":"mini","className":"view-list-item-btn","onClick":e(1200),"children":["Taro.pageScrollTo(","{scrollTop: 1200}",")"]})]}),(0,u.jsxs)(s.G7,{"className":"view-list-item item4","children":[(0,u.jsx)(s.G7,{"className":"view-list-item-text","children":"高度 400"}),(0,u.jsxs)(s.zx,{"size":"mini","className":"view-list-item-btn","onClick":e(0),"children":["Taro.pageScrollTo(","{scrollTop: 0}",")"]})]})]})})}}}]);