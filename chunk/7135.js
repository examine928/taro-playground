/*! For license information please see 7135.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7135],{"5403":function(e,t,r){r.d(t,{"ub":function(){return o},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return s},"tq":function(){return i},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return h},"zx":function(){return v},"XZ":function(){return m},"cO":function(){return y},"l0":function(){return x},"__":function(){return Z},"cW":function(){return w},"Nf":function(){return j},"$o":function(){return b},"Y8":function(){return _},"FX":function(){return g},"iR":function(){return N},"rs":function(){return O},"gx":function(){return k},"V1":function(){return E},"Ee":function(){return S},"nk":function(){return G},"kh":function(){return P}});r(3464);var n=r(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),c=(0,n.Z)("taro-movable-view-core"),a=(0,n.Z)("taro-page-container-core"),s=((0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core")),i=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),u=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),h=(0,n.Z)("taro-text-core"),v=(0,n.Z)("taro-button-core"),m=(0,n.Z)("taro-checkbox-core"),y=(0,n.Z)("taro-checkbox-group-core"),x=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),Z=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),w=(0,n.Z)("taro-picker-core"),j=(0,n.Z)("taro-picker-view-core"),b=(0,n.Z)("taro-picker-view-column-core"),_=(0,n.Z)("taro-radio-core"),g=(0,n.Z)("taro-radio-group-core"),N=(0,n.Z)("taro-slider-core"),O=(0,n.Z)("taro-switch-core"),k=(0,n.Z)("taro-textarea-core"),E=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),S=(0,n.Z)("taro-image-core"),G=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),P=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var n=r(5827),o=r(1760),c=r(517),a=r(6830),s=r(8652),i=r(6014),u=r(3317),l=r(5935),f=r(766),p=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}p.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],s=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),t===d){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),u=a;return t===d&&"scroll"===i&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,u]),c.addEventListener(i,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof s)c.style.cssText="";else for(var l in s)updateStyle(c,l,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat((0,f.Z)(a),(0,f.Z)(c))).join(" ")}(c,n,o):a}t.Z=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,a.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),n=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(n,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"8502":function(e,t,r){var n=r(3464),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":c,"_owner":s.current}}t.Fragment=c,t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"7465":function(e,t,r){var n=r(5403),o=r(2922);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!r&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":r})]})}},"7135":function(e,t,r){r.r(t);var n=r(1760),o=r(3464),c=r(5403),a=r(7465),s=r(2922);t.default=function PageSwitch(){var e=(0,o.useState)(!0),t=(0,n.Z)(e,2),r=t[0],i=t[1];return(0,s.jsxs)(c.G7,{"className":"container","children":[(0,s.jsx)(a.Z,{"title":"Switch"}),(0,s.jsxs)(c.G7,{"className":"page-body","children":[(0,s.jsxs)(c.G7,{"className":"page-section","children":[(0,s.jsx)(c.xv,{"className":"page-section-title","children":"静态展示"}),(0,s.jsxs)(c.G7,{"className":"switch-list","children":[(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":"关闭"}),(0,s.jsx)(c.rs,{})]}),(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":"开启中"}),(0,s.jsx)(c.rs,{"checked":!0})]}),(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":"disabled"}),(0,s.jsx)(c.rs,{"checked":!0,"disabled":!0})]}),(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":"更换颜色"}),(0,s.jsx)(c.rs,{"checked":!0,"color":"#6190E8"})]}),(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":"CheckBox形式"}),(0,s.jsx)(c.rs,{"type":"checkbox"})]})]})]}),(0,s.jsxs)(c.G7,{"className":"page-section","children":[(0,s.jsx)(c.xv,{"className":"page-section-title","children":"数据绑定"}),(0,s.jsx)(c.G7,{"className":"switch-list","children":(0,s.jsxs)(c.G7,{"className":"switch-list__item","children":[(0,s.jsx)(c.G7,{"className":"switch-list__text","children":r?"开启":"关闭"}),(0,s.jsx)(c.rs,{"onChange":function onChangeSwitch(e){var t;null!=e&&null!==(t=e.detail)&&void 0!==t&&t.value&&i(e.detail.value)},"checked":r})]})})]})]})]})}}}]);