/*! For license information please see 78.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[78],{"5403":function(e,r,t){t.d(r,{"ub":function(){return o},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return i},"tq":function(){return u},"t3":function(){return s},"G7":function(){return f},"JO":function(){return l},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return y},"cO":function(){return h},"l0":function(){return Z},"__":function(){return b},"cW":function(){return x},"Nf":function(){return w},"$o":function(){return g},"Y8":function(){return j},"FX":function(){return k},"iR":function(){return O},"rs":function(){return _},"gx":function(){return E},"V1":function(){return S},"Ee":function(){return C},"nk":function(){return N},"kh":function(){return P}});t(3464);var n=t(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),c=(0,n.Z)("taro-movable-view-core"),a=(0,n.Z)("taro-page-container-core"),i=((0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core")),u=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),s=(0,n.Z)("taro-swiper-item-core"),f=(0,n.Z)("taro-view-core"),l=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),v=(0,n.Z)("taro-text-core"),m=(0,n.Z)("taro-button-core"),y=(0,n.Z)("taro-checkbox-core"),h=(0,n.Z)("taro-checkbox-group-core"),Z=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),b=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),x=(0,n.Z)("taro-picker-core"),w=(0,n.Z)("taro-picker-view-core"),g=(0,n.Z)("taro-picker-view-column-core"),j=(0,n.Z)("taro-radio-core"),k=(0,n.Z)("taro-radio-group-core"),O=(0,n.Z)("taro-slider-core"),_=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),S=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),C=(0,n.Z)("taro-image-core"),N=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),P=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var n=t(5827),o=t(1760),c=t(517),a=t(6830),i=t(8652),u=t(6014),s=t(3317),f=t(5935),l=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,f.Z)(e);if(r){var o=(0,f.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var c=e.ref.current,a=o[t],i=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&c.setAttribute(t,a),r===d){if("scrollTop"===t)return void(c.mpScrollTop=a);if("scrollLeft"===t)return void(c.mpScrollLeft=a);if("scrollIntoView"===t)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&t.match(/^on[A-Z]/)){var u=t.substr(2).toLowerCase(),s=a;return r===d&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(t,a),void(c[t]=a)):"boolean"==typeof a?a?(c[t]=!0,c.setAttribute(t,a)):(c[t]=!1,c.removeAttribute(t)):void(c[t]=a)}if("string"==typeof a)return void c.setAttribute(t,a);if(!a)return void c.removeAttribute(t);if(n)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),c=(t.className||t.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat((0,l.Z)(a),(0,l.Z)(c))).join(" ")}(c,n,o):a}r.Z=function reactifyWebComponent(e){var r=function(r){(0,u.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,a.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],c=t[1];e.ref.current&&e.ref.current.removeEventListener(n,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){var n=t(3464),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,c={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{"$$typeof":o,"type":e,"key":s,"ref":f,"props":c,"_owner":i.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var n=t(5403),o=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":r}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!t&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":t})]})}},"6500":function(e,r,t){t.r(r),t.d(r,{"default":function(){return PageView}});var n=t(1760),o=t(3464),c=t(5403),a=t(7465),i=t(2922);function PageView(){var e=(0,o.useState)(!1),r=(0,n.Z)(e,2),t=r[0],u=r[1],s=(0,o.useState)("bottom"),f=(0,n.Z)(s,2),l=f[0],p=f[1];return(0,i.jsxs)(i.Fragment,{"children":[(0,i.jsx)(c.G7,{"className":"components-page__header","children":(0,i.jsx)(a.Z,{"title":"Page Container"})}),(0,i.jsxs)(c.G7,{"className":"components-page__body","children":[(0,i.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){p("top"),u(!0)},"children":"top"}),(0,i.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){p("bottom"),u(!0)},"children":"bottom"}),(0,i.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){p("left"),u(!0)},"children":"left"}),(0,i.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){p("right"),u(!0)},"children":"right"})]}),(0,i.jsx)(c._z,{"show":t,"position":l,"onRequestClose":function onRequestClose(){u(!1)},"children":(0,i.jsx)(c.G7,{"className":"container","children":(0,i.jsx)(c.zx,{"className":"btn","type":"warn","onClick":function onClick(){u(!1)},"children":"close"})})})]})}}}]);