function pS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var mS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C_={exports:{}},qu={},N_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),gS=Symbol.for("react.portal"),yS=Symbol.for("react.fragment"),vS=Symbol.for("react.strict_mode"),_S=Symbol.for("react.profiler"),wS=Symbol.for("react.provider"),ES=Symbol.for("react.context"),TS=Symbol.for("react.forward_ref"),IS=Symbol.for("react.suspense"),SS=Symbol.for("react.memo"),xS=Symbol.for("react.lazy"),yg=Symbol.iterator;function AS(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var b_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D_=Object.assign,O_={};function bs(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||b_}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L_(){}L_.prototype=bs.prototype;function Uf(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||b_}var Ff=Uf.prototype=new L_;Ff.constructor=Uf;D_(Ff,bs.prototype);Ff.isPureReactComponent=!0;var vg=Array.isArray,V_=Object.prototype.hasOwnProperty,$f={current:null},M_={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V_.call(e,r)&&!M_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:$f.current}}function kS(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _g=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case gS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xc(o,0):r,vg(i)?(n="",t!=null&&(n=t.replace(_g,"$&/")+"/"),Sl(i,e,n,"",function(u){return u})):i!=null&&(Bf(i)&&(i=kS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_g,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xc(s,a);o+=Sl(s,e,n,l,i)}else if(l=AS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xc(s,a++),o+=Sl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function PS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},xl={transition:null},CS={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:xl,ReactCurrentOwner:$f};ne.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=bs;ne.Fragment=yS;ne.Profiler=_S;ne.PureComponent=Uf;ne.StrictMode=vS;ne.Suspense=IS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$f.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V_.call(e,l)&&!M_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:ES,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wS,_context:t},t.Consumer=t};ne.createElement=j_;ne.createFactory=function(t){var e=j_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:TS,render:t}};ne.isValidElement=Bf;ne.lazy=function(t){return{$$typeof:xS,_payload:{_status:-1,_result:t},_init:PS}};ne.memo=function(t,e){return{$$typeof:SS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return It.current.useCallback(t,e)};ne.useContext=function(t){return It.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ne.useEffect=function(t,e){return It.current.useEffect(t,e)};ne.useId=function(){return It.current.useId()};ne.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return It.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ne.useRef=function(t){return It.current.useRef(t)};ne.useState=function(t){return It.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return It.current.useTransition()};ne.version="18.2.0";N_.exports=ne;var A=N_.exports;const vn=P_(A),NS=pS({__proto__:null,default:vn},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=A,DS=Symbol.for("react.element"),OS=Symbol.for("react.fragment"),LS=Object.prototype.hasOwnProperty,VS=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MS={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LS.call(e,r)&&!MS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:DS,type:t,key:s,ref:o,props:i,_owner:VS.current}}qu.Fragment=OS;qu.jsx=U_;qu.jsxs=U_;C_.exports=qu;var d=C_.exports,ih={},F_={exports:{}},Bt={},$_={exports:{}},B_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var Y=L.length;L.push(K);e:for(;0<Y;){var ve=Y-1>>>1,Ne=L[ve];if(0<i(Ne,K))L[ve]=K,L[Y]=Ne,Y=ve;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],Y=L.pop();if(Y!==K){L[0]=Y;e:for(var ve=0,Ne=L.length,Vi=Ne>>>1;ve<Vi;){var pn=2*(ve+1)-1,qs=L[pn],en=pn+1,Kr=L[en];if(0>i(qs,Y))en<Ne&&0>i(Kr,qs)?(L[ve]=Kr,L[en]=Y,ve=en):(L[ve]=qs,L[pn]=Y,ve=pn);else if(en<Ne&&0>i(Kr,Y))L[ve]=Kr,L[en]=Y,ve=en;else break e}}return K}function i(L,K){var Y=L.sortIndex-K.sortIndex;return Y!==0?Y:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=L)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(L){if(_=!1,v(L),!y)if(n(l)!==null)y=!0,rt(S);else{var K=n(u);K!==null&&xt(E,K.startTime-L)}}function S(L,K){y=!1,_&&(_=!1,m(b),b=-1),g=!0;var Y=f;try{for(v(K),h=n(l);h!==null&&(!(h.expirationTime>K)||L&&!ge());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,f=h.priorityLevel;var Ne=ve(h.expirationTime<=K);K=t.unstable_now(),typeof Ne=="function"?h.callback=Ne:h===n(l)&&r(l),v(K)}else r(l);h=n(l)}if(h!==null)var Vi=!0;else{var pn=n(u);pn!==null&&xt(E,pn.startTime-K),Vi=!1}return Vi}finally{h=null,f=Y,g=!1}}var P=!1,R=null,b=-1,W=5,F=-1;function ge(){return!(t.unstable_now()-F<W)}function ee(){if(R!==null){var L=t.unstable_now();F=L;var K=!0;try{K=R(!0,L)}finally{K?J():(P=!1,R=null)}}else P=!1}var J;if(typeof p=="function")J=function(){p(ee)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,nt=ye.port2;ye.port1.onmessage=ee,J=function(){nt.postMessage(null)}}else J=function(){T(ee,0)};function rt(L){R=L,P||(P=!0,J())}function xt(L,K){b=T(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,rt(S))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Y=f;f=K;try{return L()}finally{f=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=f;f=L;try{return K()}finally{f=Y}},t.unstable_scheduleCallback=function(L,K,Y){var ve=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,L){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Y+Ne,L={id:c++,callback:K,priorityLevel:L,startTime:Y,expirationTime:Ne,sortIndex:-1},Y>ve?(L.sortIndex=Y,e(u,L),n(l)===null&&L===n(u)&&(_?(m(b),b=-1):_=!0,xt(E,Y-ve))):(L.sortIndex=Ne,e(l,L),y||g||(y=!0,rt(S))),L},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(L){var K=f;return function(){var Y=f;f=K;try{return L.apply(this,arguments)}finally{f=Y}}}})(B_);$_.exports=B_;var jS=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=A,Ft=jS;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W_=new Set,jo={};function ki(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(jo[t]=e,t=0;t<e.length;t++)W_.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,US=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wg={},Eg={};function FS(t){return sh.call(Eg,t)?!0:sh.call(wg,t)?!1:US.test(t)?Eg[t]=!0:(wg[t]=!0,!1)}function $S(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BS(t,e,n,r){if(e===null||typeof e>"u"||$S(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zf,Wf);tt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zf,Wf);tt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zf,Wf);tt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BS(e,n,i,r)&&(n=null),r||i===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),K_=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Jc;function oo(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var Zc=!1;function ed(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function zS(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function uh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Hi:return"Portal";case oh:return"Profiler";case qf:return"StrictMode";case ah:return"Suspense";case lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case H_:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}function WS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uh(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HS(t){var e=G_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=HS(t))}function Q_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ch(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y_(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function dh(t,e){Y_(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(ao(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function X_(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qS=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){qS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function ew(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function tw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ew(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KS=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mh(t,e){if(e){if(KS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vh=null,as=null,ls=null;function kg(t){if(t=Sa(t)){if(typeof vh!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Xu(e),vh(t.stateNode,t.type,e))}}function nw(t){as?ls?ls.push(t):ls=[t]:as=t}function rw(){if(as){var t=as,e=ls;if(ls=as=null,kg(t),e)for(t=0;t<e.length;t++)kg(e[t])}}function iw(t,e){return t(e)}function sw(){}var td=!1;function ow(t,e,n){if(td)return t(e,n);td=!0;try{return iw(t,e,n)}finally{td=!1,(as!==null||ls!==null)&&(sw(),rw())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var _h=!1;if(Wn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{_h=!1}function GS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var wo=!1,ql=null,Kl=!1,wh=null,QS={onError:function(t){wo=!0,ql=t}};function YS(t,e,n,r,i,s,o,a,l){wo=!1,ql=null,GS.apply(QS,arguments)}function XS(t,e,n,r,i,s,o,a,l){if(YS.apply(this,arguments),wo){if(wo){var u=ql;wo=!1,ql=null}else throw Error(N(198));Kl||(Kl=!0,wh=u)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rg(t){if(Ri(t)!==t)throw Error(N(188))}function JS(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rg(i),t;if(s===r)return Rg(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function lw(t){return t=JS(t),t!==null?uw(t):null}function uw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uw(t);if(e!==null)return e;t=t.sibling}return null}var cw=Ft.unstable_scheduleCallback,Pg=Ft.unstable_cancelCallback,ZS=Ft.unstable_shouldYield,ex=Ft.unstable_requestPaint,De=Ft.unstable_now,tx=Ft.unstable_getCurrentPriorityLevel,Yf=Ft.unstable_ImmediatePriority,dw=Ft.unstable_UserBlockingPriority,Gl=Ft.unstable_NormalPriority,nx=Ft.unstable_LowPriority,hw=Ft.unstable_IdlePriority,Ku=null,xn=null;function rx(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:ox,ix=Math.log,sx=Math.LN2;function ox(t){return t>>>=0,t===0?32:31-(ix(t)/sx|0)|0}var el=64,tl=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=lo(a):(s&=o,s!==0&&(r=lo(s)))}else o=n&~i,o!==0?r=lo(o):s!==0&&(r=lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ax(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fw(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function ux(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function pw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mw,Jf,gw,yw,vw,Th=!1,nl=[],_r=null,wr=null,Er=null,$o=new Map,Bo=new Map,ar=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&Jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dx(t,e,n,r,i){switch(e){case"focusin":return _r=Qs(_r,t,e,n,r,i),!0;case"dragenter":return wr=Qs(wr,t,e,n,r,i),!0;case"mouseover":return Er=Qs(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,Qs($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,Qs(Bo.get(s)||null,t,e,n,r,i)),!0}return!1}function _w(t){var e=Xr(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=aw(n),e!==null){t.blockedOn=e,vw(t.priority,function(){gw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=Sa(n),e!==null&&Jf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){Al(t)&&n.delete(e)}function hx(){Th=!1,_r!==null&&Al(_r)&&(_r=null),wr!==null&&Al(wr)&&(wr=null),Er!==null&&Al(Er)&&(Er=null),$o.forEach(Ng),Bo.forEach(Ng)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,hx)))}function zo(t){function e(i){return Ys(i,t)}if(0<nl.length){Ys(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&Ys(_r,t),wr!==null&&Ys(wr,t),Er!==null&&Ys(Er,t),$o.forEach(e),Bo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)_w(n),n.blockedOn===null&&ar.shift()}var us=er.ReactCurrentBatchConfig,Yl=!0;function fx(t,e,n,r){var i=ae,s=us.transition;us.transition=null;try{ae=1,Zf(t,e,n,r)}finally{ae=i,us.transition=s}}function px(t,e,n,r){var i=ae,s=us.transition;us.transition=null;try{ae=4,Zf(t,e,n,r)}finally{ae=i,us.transition=s}}function Zf(t,e,n,r){if(Yl){var i=Ih(t,e,n,r);if(i===null)hd(t,e,r,Xl,n),Cg(t,r);else if(dx(i,t,e,n,r))r.stopPropagation();else if(Cg(t,r),e&4&&-1<cx.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&mw(s),s=Ih(t,e,n,r),s===null&&hd(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var Xl=null;function Ih(t,e,n,r){if(Xl=null,t=Qf(r),t=Xr(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tx()){case Yf:return 1;case dw:return 4;case Gl:case nx:return 16;case hw:return 536870912;default:return 16}default:return 16}}var pr=null,ep=null,kl=null;function Ew(){if(kl)return kl;var t,e=ep,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function bg(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:bg,this.isPropagationStopped=bg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=zt(Ds),Ia=Ie({},Ds,{view:0,detail:0}),mx=zt(Ia),rd,id,Xs,Gu=Ie({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(rd=t.screenX-Xs.screenX,id=t.screenY-Xs.screenY):id=rd=0,Xs=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),Dg=zt(Gu),gx=Ie({},Gu,{dataTransfer:0}),yx=zt(gx),vx=Ie({},Ia,{relatedTarget:0}),sd=zt(vx),_x=Ie({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=zt(_x),Ex=Ie({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=zt(Ex),Ix=Ie({},Ds,{data:0}),Og=zt(Ix),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ax[t])?!!e[t]:!1}function np(){return kx}var Rx=Ie({},Ia,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=zt(Rx),Cx=Ie({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=zt(Cx),Nx=Ie({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),bx=zt(Nx),Dx=Ie({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=zt(Dx),Lx=Ie({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=zt(Lx),Mx=[9,13,27,32],rp=Wn&&"CompositionEvent"in window,Eo=null;Wn&&"documentMode"in document&&(Eo=document.documentMode);var jx=Wn&&"TextEvent"in window&&!Eo,Tw=Wn&&(!rp||Eo&&8<Eo&&11>=Eo),Vg=String.fromCharCode(32),Mg=!1;function Iw(t,e){switch(t){case"keyup":return Mx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ki=!1;function Ux(t,e){switch(t){case"compositionend":return Sw(e);case"keypress":return e.which!==32?null:(Mg=!0,Vg);case"textInput":return t=e.data,t===Vg&&Mg?null:t;default:return null}}function Fx(t,e){if(Ki)return t==="compositionend"||!rp&&Iw(t,e)?(t=Ew(),kl=ep=pr=null,Ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tw&&e.locale!=="ko"?null:e.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$x[t.type]:e==="textarea"}function xw(t,e,n,r){nw(r),e=Jl(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Wo=null;function Bx(t){Vw(t,0)}function Qu(t){var e=Yi(t);if(Q_(e))return t}function zx(t,e){if(t==="change")return e}var Aw=!1;if(Wn){var od;if(Wn){var ad="oninput"in document;if(!ad){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),ad=typeof Ug.oninput=="function"}od=ad}else od=!1;Aw=od&&(!document.documentMode||9<document.documentMode)}function Fg(){To&&(To.detachEvent("onpropertychange",kw),Wo=To=null)}function kw(t){if(t.propertyName==="value"&&Qu(Wo)){var e=[];xw(e,Wo,t,Qf(t)),ow(Bx,e)}}function Wx(t,e,n){t==="focusin"?(Fg(),To=e,Wo=n,To.attachEvent("onpropertychange",kw)):t==="focusout"&&Fg()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(Wo)}function qx(t,e){if(t==="click")return Qu(e)}function Kx(t,e){if(t==="input"||t==="change")return Qu(e)}function Gx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:Gx;function Ho(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function $g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=$g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$g(n)}}function Rw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pw(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qx(t){var e=Pw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rw(n.ownerDocument.documentElement,n)){if(r!==null&&ip(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bg(n,s);var o=Bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=Wn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Sh=null,Io=null,xh=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||Gi==null||Gi!==Hl(r)||(r=Gi,"selectionStart"in r&&ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Ho(Io,r)||(Io=r,r=Jl(Sh,"onSelect"),0<r.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},ld={},Cw={};Wn&&(Cw=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function Yu(t){if(ld[t])return ld[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cw)return ld[t]=e[n];return t}var Nw=Yu("animationend"),bw=Yu("animationiteration"),Dw=Yu("animationstart"),Ow=Yu("transitionend"),Lw=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Lw.set(t,e),ki(e,[t])}for(var ud=0;ud<Wg.length;ud++){var cd=Wg[ud],Xx=cd.toLowerCase(),Jx=cd[0].toUpperCase()+cd.slice(1);jr(Xx,"on"+Jx)}jr(Nw,"onAnimationEnd");jr(bw,"onAnimationIteration");jr(Dw,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Ow,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Hg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XS(r,e,void 0,t),t.currentTarget=null}function Vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Hg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Hg(i,a,u),s=l}}}if(Kl)throw t=wh,Kl=!1,wh=null,t}function de(t,e){var n=e[Ch];n===void 0&&(n=e[Ch]=new Set);var r=t+"__bubble";n.has(r)||(Mw(e,t,2,!1),n.add(r))}function dd(t,e,n){var r=0;e&&(r|=4),Mw(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[sl]){t[sl]=!0,W_.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||dd(n,!1,t),dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,dd("selectionchange",!1,e))}}function Mw(t,e,n,r){switch(ww(e)){case 1:var i=fx;break;case 4:i=px;break;default:i=Zf}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ow(function(){var u=s,c=Qf(n),h=[];e:{var f=Lw.get(t);if(f!==void 0){var g=tp,y=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":g=Px;break;case"focusin":y="focus",g=sd;break;case"focusout":y="blur",g=sd;break;case"beforeblur":case"afterblur":g=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bx;break;case Nw:case bw:case Dw:g=wx;break;case Ow:g=Ox;break;case"scroll":g=mx;break;case"wheel":g=Vx;break;case"copy":case"cut":case"paste":g=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lg}var _=(e&4)!==0,T=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=Fo(p,m),E!=null&&_.push(Ko(p,E,v)))),T)break;p=p.return}0<_.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==yh&&(y=n.relatedTarget||n.fromElement)&&(Xr(y)||y[Hn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Xr(y):null,y!==null&&(T=Ri(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Dg,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Lg,E="onPointerLeave",m="onPointerEnter",p="pointer"),T=g==null?f:Yi(g),v=y==null?f:Yi(y),f=new _(E,p+"leave",g,n,c),f.target=T,f.relatedTarget=v,E=null,Xr(c)===u&&(_=new _(m,p+"enter",y,n,c),_.target=v,_.relatedTarget=T,E=_),T=E,g&&y)t:{for(_=g,m=y,p=0,v=_;v;v=ji(v))p++;for(v=0,E=m;E;E=ji(E))v++;for(;0<p-v;)_=ji(_),p--;for(;0<v-p;)m=ji(m),v--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=ji(_),m=ji(m)}_=null}else _=null;g!==null&&qg(h,f,g,_,!1),y!==null&&T!==null&&qg(h,T,y,_,!0)}}e:{if(f=u?Yi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=zx;else if(jg(f))if(Aw)S=Kx;else{S=Hx;var P=Wx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=qx);if(S&&(S=S(t,u))){xw(h,S,n,c);break e}P&&P(t,f,u),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&hh(f,"number",f.value)}switch(P=u?Yi(u):window,t){case"focusin":(jg(P)||P.contentEditable==="true")&&(Gi=P,Sh=u,Io=null);break;case"focusout":Io=Sh=Gi=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,zg(h,n,c);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":zg(h,n,c)}var R;if(rp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ki?Iw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Tw&&n.locale!=="ko"&&(Ki||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ki&&(R=Ew()):(pr=c,ep="value"in pr?pr.value:pr.textContent,Ki=!0)),P=Jl(u,b),0<P.length&&(b=new Og(b,t,null,n,c),h.push({event:b,listeners:P}),R?b.data=R:(R=Sw(n),R!==null&&(b.data=R)))),(R=jx?Ux(t,n):Fx(t,n))&&(u=Jl(u,"onBeforeInput"),0<u.length&&(c=new Og("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}Vw(h,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=Fo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fo(n,s),l!=null&&o.unshift(Ko(n,l,a))):i||(l=Fo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eA=/\r\n?/g,tA=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(eA,`
`).replace(tA,"")}function ol(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(N(425))}function Zl(){}var Ah=null,kh=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,nA=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,rA=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(iA)}:Ph;function iA(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),_n="__reactFiber$"+Os,Go="__reactProps$"+Os,Hn="__reactContainer$"+Os,Ch="__reactEvents$"+Os,sA="__reactListeners$"+Os,oA="__reactHandles$"+Os;function Xr(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[_n])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[_n]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Xu(t){return t[Go]||null}var Nh=[],Xi=-1;function Ur(t){return{current:t}}function pe(t){0>Xi||(t.current=Nh[Xi],Nh[Xi]=null,Xi--)}function ce(t,e){Xi++,Nh[Xi]=t.current,t.current=e}var Or={},pt=Ur(Or),Pt=Ur(!1),hi=Or;function vs(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function eu(){pe(Pt),pe(pt)}function Yg(t,e,n){if(pt.current!==Or)throw Error(N(168));ce(pt,e),ce(Pt,n)}function jw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,WS(t)||"Unknown",i));return Ie({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,hi=pt.current,ce(pt,t),ce(Pt,Pt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=jw(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,pe(Pt),pe(pt),ce(pt,t)):pe(Pt),ce(Pt,n)}var Vn=null,Ju=!1,pd=!1;function Uw(t){Vn===null?Vn=[t]:Vn.push(t)}function aA(t){Ju=!0,Uw(t)}function Fr(){if(!pd&&Vn!==null){pd=!0;var t=0,e=ae;try{var n=Vn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Ju=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),cw(Yf,Fr),i}finally{ae=e,pd=!1}}return null}var Ji=[],Zi=0,nu=null,ru=0,Ht=[],qt=0,fi=null,Mn=1,jn="";function Gr(t,e){Ji[Zi++]=ru,Ji[Zi++]=nu,nu=t,ru=e}function Fw(t,e,n){Ht[qt++]=Mn,Ht[qt++]=jn,Ht[qt++]=fi,fi=t;var r=Mn;t=jn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-an(e)+i|n<<i|r,jn=s+t}else Mn=1<<s|n<<i|r,jn=t}function sp(t){t.return!==null&&(Gr(t,1),Fw(t,1,0))}function op(t){for(;t===nu;)nu=Ji[--Zi],Ji[Zi]=null,ru=Ji[--Zi],Ji[Zi]=null;for(;t===fi;)fi=Ht[--qt],Ht[qt]=null,jn=Ht[--qt],Ht[qt]=null,Mn=Ht[--qt],Ht[qt]=null}var jt=null,Lt=null,we=!1,sn=null;function $w(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Lt=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Mn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Lt=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dh(t){if(we){var e=Lt;if(e){var n=e;if(!Jg(t,e)){if(bh(t))throw Error(N(418));e=Tr(n.nextSibling);var r=jt;e&&Jg(t,e)?$w(r,n):(t.flags=t.flags&-4097|2,we=!1,jt=t)}}else{if(bh(t))throw Error(N(418));t.flags=t.flags&-4097|2,we=!1,jt=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function al(t){if(t!==jt)return!1;if(!we)return Zg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=Lt)){if(bh(t))throw Bw(),Error(N(418));for(;e;)$w(t,e),e=Tr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=jt?Tr(t.stateNode.nextSibling):null;return!0}function Bw(){for(var t=Lt;t;)t=Tr(t.nextSibling)}function _s(){Lt=jt=null,we=!1}function ap(t){sn===null?sn=[t]:sn.push(t)}var lA=er.ReactCurrentBatchConfig;function nn(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var iu=Ur(null),su=null,es=null,lp=null;function up(){lp=es=su=null}function cp(t){var e=iu.current;pe(iu),t._currentValue=e}function Oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){su=t,lp=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(su===null)throw Error(N(308));es=t,su.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var Jr=null;function dp(t){Jr===null?Jr=[t]:Jr.push(t)}function zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ww(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=Ie({},h,f);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=h}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Hw=new z_.Component().refs;function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=xr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(ln(e,t,i,r),Pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=xr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(ln(e,t,i,r),Pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=xr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(ln(e,t,r,n),Pl(e,t,r))}};function ny(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,r)||!Ho(i,s):!0}function qw(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Ct(e)?hi:pt.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ry(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hw,hp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Ct(e)?hi:pt.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Hw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iy(t){var e=t._init;return e(t._payload)}function Kw(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ar(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,E){return p===null||p.tag!==6?(p=Ed(v,m.mode,E),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,E){var S=v.type;return S===qi?c(m,p,v.props.children,E,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&iy(S)===p.type)?(E=i(p,v.props),E.ref=Js(m,p,v),E.return=m,E):(E=Ll(v.type,v.key,v.props,null,m.mode,E),E.ref=Js(m,p,v),E.return=m,E)}function u(m,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Td(v,m.mode,E),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,E,S){return p===null||p.tag!==7?(p=ai(v,m.mode,E,S),p.return=m,p):(p=i(p,v),p.return=m,p)}function h(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ed(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xa:return v=Ll(p.type,p.key,p.props,null,m.mode,v),v.ref=Js(m,null,p),v.return=m,v;case Hi:return p=Td(p,m.mode,v),p.return=m,p;case sr:var E=p._init;return h(m,E(p._payload),v)}if(ao(p)||Ks(p))return p=ai(p,m.mode,v,null),p.return=m,p;ll(m,p)}return null}function f(m,p,v,E){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===S?l(m,p,v,E):null;case Hi:return v.key===S?u(m,p,v,E):null;case sr:return S=v._init,f(m,p,S(v._payload),E)}if(ao(v)||Ks(v))return S!==null?null:c(m,p,v,E,null);ll(m,v)}return null}function g(m,p,v,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(p,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xa:return m=m.get(E.key===null?v:E.key)||null,l(p,m,E,S);case Hi:return m=m.get(E.key===null?v:E.key)||null,u(p,m,E,S);case sr:var P=E._init;return g(m,p,v,P(E._payload),S)}if(ao(E)||Ks(E))return m=m.get(v)||null,c(p,m,E,S,null);ll(p,E)}return null}function y(m,p,v,E){for(var S=null,P=null,R=p,b=p=0,W=null;R!==null&&b<v.length;b++){R.index>b?(W=R,R=null):W=R.sibling;var F=f(m,R,v[b],E);if(F===null){R===null&&(R=W);break}t&&R&&F.alternate===null&&e(m,R),p=s(F,p,b),P===null?S=F:P.sibling=F,P=F,R=W}if(b===v.length)return n(m,R),we&&Gr(m,b),S;if(R===null){for(;b<v.length;b++)R=h(m,v[b],E),R!==null&&(p=s(R,p,b),P===null?S=R:P.sibling=R,P=R);return we&&Gr(m,b),S}for(R=r(m,R);b<v.length;b++)W=g(R,m,b,v[b],E),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?b:W.key),p=s(W,p,b),P===null?S=W:P.sibling=W,P=W);return t&&R.forEach(function(ge){return e(m,ge)}),we&&Gr(m,b),S}function _(m,p,v,E){var S=Ks(v);if(typeof S!="function")throw Error(N(150));if(v=S.call(v),v==null)throw Error(N(151));for(var P=S=null,R=p,b=p=0,W=null,F=v.next();R!==null&&!F.done;b++,F=v.next()){R.index>b?(W=R,R=null):W=R.sibling;var ge=f(m,R,F.value,E);if(ge===null){R===null&&(R=W);break}t&&R&&ge.alternate===null&&e(m,R),p=s(ge,p,b),P===null?S=ge:P.sibling=ge,P=ge,R=W}if(F.done)return n(m,R),we&&Gr(m,b),S;if(R===null){for(;!F.done;b++,F=v.next())F=h(m,F.value,E),F!==null&&(p=s(F,p,b),P===null?S=F:P.sibling=F,P=F);return we&&Gr(m,b),S}for(R=r(m,R);!F.done;b++,F=v.next())F=g(R,m,b,F.value,E),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?b:F.key),p=s(F,p,b),P===null?S=F:P.sibling=F,P=F);return t&&R.forEach(function(ee){return e(m,ee)}),we&&Gr(m,b),S}function T(m,p,v,E){if(typeof v=="object"&&v!==null&&v.type===qi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:e:{for(var S=v.key,P=p;P!==null;){if(P.key===S){if(S=v.type,S===qi){if(P.tag===7){n(m,P.sibling),p=i(P,v.props.children),p.return=m,m=p;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&iy(S)===P.type){n(m,P.sibling),p=i(P,v.props),p.ref=Js(m,P,v),p.return=m,m=p;break e}n(m,P);break}else e(m,P);P=P.sibling}v.type===qi?(p=ai(v.props.children,m.mode,E,v.key),p.return=m,m=p):(E=Ll(v.type,v.key,v.props,null,m.mode,E),E.ref=Js(m,p,v),E.return=m,m=E)}return o(m);case Hi:e:{for(P=v.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Td(v,m.mode,E),p.return=m,m=p}return o(m);case sr:return P=v._init,T(m,p,P(v._payload),E)}if(ao(v))return y(m,p,v,E);if(Ks(v))return _(m,p,v,E);ll(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=Ed(v,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return T}var ws=Kw(!0),Gw=Kw(!1),xa={},An=Ur(xa),Qo=Ur(xa),Yo=Ur(xa);function Zr(t){if(t===xa)throw Error(N(174));return t}function fp(t,e){switch(ce(Yo,e),ce(Qo,t),ce(An,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ph(e,t)}pe(An),ce(An,e)}function Es(){pe(An),pe(Qo),pe(Yo)}function Qw(t){Zr(Yo.current);var e=Zr(An.current),n=ph(e,t.type);e!==n&&(ce(Qo,t),ce(An,n))}function pp(t){Qo.current===t&&(pe(An),pe(Qo))}var Ee=Ur(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function mp(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var Cl=er.ReactCurrentDispatcher,gd=er.ReactCurrentBatchConfig,pi=0,Te=null,Fe=null,He=null,lu=!1,So=!1,Xo=0,uA=0;function it(){throw Error(N(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function yp(t,e,n,r,i,s){if(pi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?fA:pA,t=n(r,i),So){s=0;do{if(So=!1,Xo=0,25<=s)throw Error(N(301));s+=1,He=Fe=null,e.updateQueue=null,Cl.current=mA,t=n(r,i)}while(So)}if(Cl.current=uu,e=Fe!==null&&Fe.next!==null,pi=0,He=Fe=Te=null,lu=!1,e)throw Error(N(300));return t}function vp(){var t=Xo!==0;return Xo=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function Xt(){if(Fe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(N(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function Jo(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Te.lanes|=c,mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yw(){}function Xw(t,e){var n=Te,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,_p(e0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Zw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(N(349));pi&30||Jw(n,e,i)}return i}function Jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zw(t,e,n,r){e.value=n,e.getSnapshot=r,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function n0(t){var e=qn(t,1);e!==null&&ln(e,t,1,-1)}function sy(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=hA.bind(null,Te,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r0(){return Xt().memoizedState}function Nl(t,e,n,r){var i=yn();Te.flags|=t,i.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&gp(r,o.deps)){i.memoizedState=Zo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Zo(1|e,n,s,r)}function oy(t,e){return Nl(8390656,8,t,e)}function _p(t,e){return ec(2048,8,t,e)}function i0(t,e){return ec(4,2,t,e)}function s0(t,e){return ec(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,o0.bind(null,e,t),n)}function wp(){}function l0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return pi&21?(un(n,e)||(n=fw(),Te.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function cA(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{ae=n,gd.transition=r}}function d0(){return Xt().memoizedState}function dA(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},h0(t))f0(e,n);else if(n=zw(t,e,n,r),n!==null){var i=Et();ln(n,t,r,i),p0(n,e,r)}}function hA(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(t))f0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,dp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zw(t,e,i,r),n!==null&&(i=Et(),ln(n,t,r,i),p0(n,e,r))}}function h0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function f0(t,e){So=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}var uu={readContext:Yt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},fA={readContext:Yt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dA.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:sy,useDebugValue:wp,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=sy(!1),e=t[0];return t=cA.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=yn();if(we){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),qe===null)throw Error(N(349));pi&30||Jw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,oy(e0.bind(null,r,s,t),[t]),r.flags|=2048,Zo(9,Zw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=qe.identifierPrefix;if(we){var n=jn,r=Mn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pA={readContext:Yt,useCallback:l0,useContext:Yt,useEffect:_p,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:yd,useRef:r0,useState:function(){return yd(Jo)},useDebugValue:wp,useDeferredValue:function(t){var e=Xt();return c0(e,Fe.memoizedState,t)},useTransition:function(){var t=yd(Jo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:d0,unstable_isNewReconciler:!1},mA={readContext:Yt,useCallback:l0,useContext:Yt,useEffect:_p,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:vd,useRef:r0,useState:function(){return vd(Jo)},useDebugValue:wp,useDeferredValue:function(t){var e=Xt();return Fe===null?e.memoizedState=t:c0(e,Fe.memoizedState,t)},useTransition:function(){var t=vd(Jo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:d0,unstable_isNewReconciler:!1};function Ts(t,e){try{var n="",r=e;do n+=zS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gA=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,Kh=r),Mh(t,e)},n}function g0(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CA.bind(null,t,e,n),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var yA=er.ReactCurrentOwner,Rt=!1;function vt(t,e,n,r){e.child=t===null?Gw(e,null,n,r):ws(e,t.child,n,r)}function cy(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=yp(t,e,n,r,s,i),n=vp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(we&&n&&sp(e),e.flags|=1,vt(t,e,r,i),e.child)}function dy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y0(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function y0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ho(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return jh(t,e,n,r,i)}function v0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ns,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ns,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ns,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ns,Ot),Ot|=r;return vt(t,e,i,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jh(t,e,n,r,i){var s=Ct(n)?hi:pt.current;return s=vs(e,s),cs(e,i),n=yp(t,e,n,r,s,i),r=vp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(we&&r&&sp(e),e.flags|=1,vt(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(Ct(n)){var s=!0;tu(e)}else s=!1;if(cs(e,i),e.stateNode===null)bl(t,e),qw(e,n,r),Vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?hi:pt.current,u=vs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ry(e,o,r,u),or=!1;var f=e.memoizedState;o.state=f,ou(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Pt.current||or?(typeof c=="function"&&(Lh(e,n,c,r),l=e.memoizedState),(a=or||ny(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ww(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Ct(n)?hi:pt.current,l=vs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ry(e,o,r,l),or=!1,f=e.memoizedState,o.state=f,ou(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Pt.current||or?(typeof g=="function"&&(Lh(e,n,g,r),y=e.memoizedState),(u=or||ny(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,s,i)}function Uh(t,e,n,r,i,s){_0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xg(e,n,!1),Kn(t,e,s);r=e.stateNode,yA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Xg(e,n,!0),e.child}function w0(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),fp(t,e.containerInfo)}function fy(t,e,n,r,i){return _s(),ap(i),e.flags|=256,vt(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function E0(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(Ee,i&1),t===null)return Dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$h(n),e.memoizedState=Fh,t):Ep(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ep(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&ap(r),ws(e,t.child,null,n),t=Ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_d(Error(N(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Fh,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=_d(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),ln(r,t,i,-1))}return kp(),r=_d(Error(N(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Tr(i.nextSibling),jt=e,we=!0,sn=null,t!==null&&(Ht[qt++]=Mn,Ht[qt++]=jn,Ht[qt++]=fi,Mn=t.id,jn=t.overflow,fi=e),e=Ep(e,r.children),e.flags|=4096,e)}function py(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oh(t.return,e,n)}function wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,n,e);else if(t.tag===19)py(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wd(e,!0,n,null,s);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _A(t,e,n){switch(e.tag){case 3:w0(e),_s();break;case 5:Qw(e);break;case 1:Ct(e.type)&&tu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?E0(t,e,n):(ce(Ee,Ee.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ce(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return T0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return Kn(t,e,n)}var I0,Bh,S0,x0;I0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};S0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(An.current);var s=null;switch(n){case"input":i=ch(t,i),r=ch(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=fh(t,i),r=fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}mh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};x0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wA(t,e,n){var r=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&eu(),st(e),null;case 3:return r=e.stateNode,Es(),pe(Pt),pe(pt),mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Yh(sn),sn=null))),Bh(t,e),st(e),null;case 5:pp(e);var i=Zr(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return st(e),null}if(t=Zr(An.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Go]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<uo.length;i++)de(uo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Ig(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":xg(r,s),de("invalid",r)}mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ja(r),Sg(r,s,!0);break;case"textarea":Ja(r),Ag(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Go]=r,I0(t,e,!1,!1),e.stateNode=t;e:{switch(o=gh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<uo.length;i++)de(uo[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Ig(t,r),i=ch(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),de("invalid",t);break;case"textarea":xg(t,r),i=fh(t,r),de("invalid",t);break;default:i=r}mh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Hf(t,s,l,o))}switch(n){case"input":Ja(t),Sg(t,r,!1);break;case"textarea":Ja(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)x0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Zr(Yo.current),Zr(An.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return st(e),null;case 13:if(pe(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Lt!==null&&e.mode&1&&!(e.flags&128))Bw(),_s(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[_n]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else sn!==null&&(Yh(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?$e===0&&($e=3):kp())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Es(),Bh(t,e),t===null&&qo(e.stateNode.containerInfo),st(e),null;case 10:return cp(e.type._context),st(e),null;case 17:return Ct(e.type)&&eu(),st(e),null;case 19:if(pe(Ee),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Is&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*De()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ee.current,ce(Ee,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function EA(t,e){switch(op(e),e.tag){case 1:return Ct(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),pe(Pt),pe(pt),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(pe(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(Ee),null;case 4:return Es(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var cl=!1,lt=!1,TA=typeof WeakSet=="function"?WeakSet:Set,j=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function zh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var my=!1;function IA(t,e){if(Ah=Yl,t=Pw(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},Yl=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,T=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:nn(e.type,_),T);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){ke(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return y=my,my=!1,y}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zh(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Go],delete e[Ch],delete e[sA],delete e[oA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k0(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var Ye=null,rn=!1;function nr(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:lt||ts(n,e);case 6:var r=Ye,i=rn;Ye=null,nr(t,e,n),Ye=r,rn=i,Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),zo(t)):fd(Ye,n.stateNode));break;case 4:r=Ye,i=rn,Ye=n.stateNode.containerInfo,rn=!0,nr(t,e,n),Ye=r,rn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!lt&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,nr(t,e,n),lt=r):nr(t,e,n);break;default:nr(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TA),e.forEach(function(r){var i=bA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,rn=!1;break e;case 3:Ye=a.stateNode.containerInfo,rn=!0;break e;case 4:Ye=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(Ye===null)throw Error(N(160));R0(s,o,i),Ye=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),mn(t),r&4){try{xo(3,t,t.return),tc(3,t)}catch(_){ke(t,t.return,_)}try{xo(5,t,t.return)}catch(_){ke(t,t.return,_)}}break;case 1:tn(e,t),mn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(tn(e,t),mn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Uo(i,"")}catch(_){ke(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Y_(i,s),gh(a,o);var u=gh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?tw(i,h):c==="dangerouslySetInnerHTML"?Z_(i,h):c==="children"?Uo(i,h):Hf(i,c,h,u)}switch(a){case"input":dh(i,s);break;case"textarea":X_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Go]=s}catch(_){ke(t,t.return,_)}}break;case 6:if(tn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ke(t,t.return,_)}}break;case 3:if(tn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(_){ke(t,t.return,_)}break;case 4:tn(e,t),mn(t);break;case 13:tn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sp=De())),r&4&&yy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,tn(e,t),lt=u):tn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(h=j=c;j!==null;){switch(f=j,g=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:ts(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ke(r,n,_)}}break;case 5:ts(f,f.return);break;case 22:if(f.memoizedState!==null){_y(h);continue}}g!==null?(g.return=f,j=g):_y(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ew("display",o))}catch(_){ke(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ke(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tn(e,t),mn(t),r&4&&yy(t);break;case 21:break;default:tn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=gy(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gy(t);Hh(t,a,o);break;default:throw Error(N(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SA(t,e,n){j=t,C0(t)}function C0(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=cl;var u=lt;if(cl=o,(lt=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?wy(i):l!==null?(l.return=o,j=l):wy(i);for(;s!==null;)j=s,C0(s),s=s.sibling;j=i,cl=a,lt=u}vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):vy(t)}}function vy(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}lt||e.flags&512&&Wh(e)}catch(f){ke(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function _y(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function wy(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{Wh(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{Wh(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var xA=Math.ceil,cu=er.ReactCurrentDispatcher,Tp=er.ReactCurrentOwner,Qt=er.ReactCurrentBatchConfig,se=0,qe=null,je=null,Ze=0,Ot=0,ns=Ur(0),$e=0,ea=null,mi=0,nc=0,Ip=0,Ao=null,At=null,Sp=0,Is=1/0,Ln=null,du=!1,Kh=null,Sr=null,dl=!1,mr=null,hu=0,ko=0,Gh=null,Dl=-1,Ol=0;function Et(){return se&6?De():Dl!==-1?Dl:Dl=De()}function xr(t){return t.mode&1?se&2&&Ze!==0?Ze&-Ze:lA.transition!==null?(Ol===0&&(Ol=fw()),Ol):(t=ae,t!==0||(t=window.event,t=t===void 0?16:ww(t.type)),t):1}function ln(t,e,n,r){if(50<ko)throw ko=0,Gh=null,Error(N(185));Ta(t,n,r),(!(se&2)||t!==qe)&&(t===qe&&(!(se&2)&&(nc|=n),$e===4&&lr(t,Ze)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(Is=De()+500,Ju&&Fr()))}function Nt(t,e){var n=t.callbackNode;lx(t,e);var r=Ql(t,t===qe?Ze:0);if(r===0)n!==null&&Pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pg(n),e===1)t.tag===0?aA(Ey.bind(null,t)):Uw(Ey.bind(null,t)),rA(function(){!(se&6)&&Fr()}),n=null;else{switch(pw(r)){case 1:n=Yf;break;case 4:n=dw;break;case 16:n=Gl;break;case 536870912:n=hw;break;default:n=Gl}n=j0(n,N0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N0(t,e){if(Dl=-1,Ol=0,se&6)throw Error(N(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Ql(t,t===qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=se;se|=2;var s=D0();(qe!==t||Ze!==e)&&(Ln=null,Is=De()+500,oi(t,e));do try{RA();break}catch(a){b0(t,a)}while(1);up(),cu.current=s,se=i,je!==null?e=0:(qe=null,Ze=0,e=$e)}if(e!==0){if(e===2&&(i=Eh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=ea,oi(t,0),lr(t,r),Nt(t,De()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!AA(i)&&(e=fu(t,r),e===2&&(s=Eh(t),s!==0&&(r=s,e=Qh(t,s))),e===1))throw n=ea,oi(t,0),lr(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Qr(t,At,Ln);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Sp+500-De(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ph(Qr.bind(null,t,At,Ln),e);break}Qr(t,At,Ln);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xA(r/1960))-r,10<r){t.timeoutHandle=Ph(Qr.bind(null,t,At,Ln),r);break}Qr(t,At,Ln);break;case 5:Qr(t,At,Ln);break;default:throw Error(N(329))}}}return Nt(t,De()),t.callbackNode===n?N0.bind(null,t):null}function Qh(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=fu(t,e),t!==2&&(e=At,At=n,e!==null&&Yh(e)),t}function Yh(t){At===null?At=t:At.push.apply(At,t)}function AA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Ip,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(se&6)throw Error(N(327));ds();var e=Ql(t,0);if(!(e&1))return Nt(t,De()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=Eh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=ea,oi(t,0),lr(t,e),Nt(t,De()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,At,Ln),Nt(t,De()),null}function xp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Is=De()+500,Ju&&Fr())}}function gi(t){mr!==null&&mr.tag===0&&!(se&6)&&ds();var e=se;se|=1;var n=Qt.transition,r=ae;try{if(Qt.transition=null,ae=1,t)return t()}finally{ae=r,Qt.transition=n,se=e,!(se&6)&&Fr()}}function Ap(){Ot=ns.current,pe(ns)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nA(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:Es(),pe(Pt),pe(pt),mp();break;case 5:pp(r);break;case 4:Es();break;case 13:pe(Ee);break;case 19:pe(Ee);break;case 10:cp(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(qe=t,je=t=Ar(t.current,null),Ze=Ot=e,$e=0,ea=null,Ip=nc=mi=0,At=Ao=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function b0(t,e){do{var n=je;try{if(up(),Cl.current=uu,lu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(pi=0,He=Fe=Te=null,So=!1,Xo=0,Tp.current=null,n===null||n.return===null){$e=1,ea=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ly(o);if(g!==null){g.flags&=-257,uy(g,o,a,s,e),g.mode&1&&ay(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ay(s,u,e),kp();break e}l=Error(N(426))}}else if(we&&a.mode&1){var T=ly(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),uy(T,o,a,s,e),ap(Ts(l,a));break e}}s=l=Ts(l,a),$e!==4&&($e=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=m0(s,l,e);ey(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=g0(s,a,e);ey(s,E);break e}}s=s.return}while(s!==null)}L0(n)}catch(S){e=S,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function D0(){var t=cu.current;return cu.current=uu,t===null?uu:t}function kp(){($e===0||$e===3||$e===2)&&($e=4),qe===null||!(mi&268435455)&&!(nc&268435455)||lr(qe,Ze)}function fu(t,e){var n=se;se|=2;var r=D0();(qe!==t||Ze!==e)&&(Ln=null,oi(t,e));do try{kA();break}catch(i){b0(t,i)}while(1);if(up(),se=n,cu.current=r,je!==null)throw Error(N(261));return qe=null,Ze=0,$e}function kA(){for(;je!==null;)O0(je)}function RA(){for(;je!==null&&!ZS();)O0(je)}function O0(t){var e=M0(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?L0(t):je=e,Tp.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EA(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,je=null;return}}else if(n=wA(n,e,Ot),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);$e===0&&($e=5)}function Qr(t,e,n){var r=ae,i=Qt.transition;try{Qt.transition=null,ae=1,PA(t,e,n,r)}finally{Qt.transition=i,ae=r}return null}function PA(t,e,n,r){do ds();while(mr!==null);if(se&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ux(t,s),t===qe&&(je=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,j0(Gl,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ae;ae=1;var a=se;se|=4,Tp.current=null,IA(t,n),P0(n,t),Qx(kh),Yl=!!Ah,kh=Ah=null,t.current=n,SA(n),ex(),se=a,ae=o,Qt.transition=s}else t.current=n;if(dl&&(dl=!1,mr=t,hu=i),s=t.pendingLanes,s===0&&(Sr=null),rx(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=Kh,Kh=null,t;return hu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Gh?ko++:(ko=0,Gh=t):ko=0,Fr(),null}function ds(){if(mr!==null){var t=pw(hu),e=Qt.transition,n=ae;try{if(Qt.transition=null,ae=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,hu=0,se&6)throw Error(N(331));var i=se;for(se|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:xo(8,c,s)}var h=c.child;if(h!==null)h.return=c,j=h;else for(;j!==null;){c=j;var f=c.sibling,g=c.return;if(A0(c),c===u){j=null;break}if(f!==null){f.return=g,j=f;break}j=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,j=m;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(S){ke(a,a.return,S)}if(a===o){j=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,j=E;break e}j=a.return}}if(se=i,Fr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{ae=n,Qt.transition=e}}return!1}function Ty(t,e,n){e=Ts(n,e),e=m0(t,e,1),t=Ir(t,e,1),e=Et(),t!==null&&(Ta(t,1,e),Nt(t,e))}function ke(t,e,n){if(t.tag===3)Ty(t,t,n);else for(;e!==null;){if(e.tag===3){Ty(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Ts(n,t),t=g0(e,t,1),e=Ir(e,t,1),t=Et(),e!==null&&(Ta(e,1,t),Nt(e,t));break}}e=e.return}}function CA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>De()-Sp?oi(t,0):Ip|=n),Nt(t,e)}function V0(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Et();t=qn(t,e),t!==null&&(Ta(t,e,n),Nt(t,n))}function NA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V0(t,n)}function bA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),V0(t,n)}var M0;M0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,_A(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,we&&e.flags&1048576&&Fw(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var i=vs(e,pt.current);cs(e,n),i=yp(null,e,r,t,i,n);var s=vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Vh(e,r,t,n),e=Uh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&sp(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OA(r),t=nn(r,t),i){case 0:e=jh(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=cy(null,e,r,t,n);break e;case 14:e=dy(null,e,r,nn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),hy(t,e,r,i,n);case 3:e:{if(w0(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ww(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(N(423)),e),e=fy(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(N(424)),e),e=fy(t,e,r,n,i);break e}else for(Lt=Tr(e.stateNode.containerInfo.firstChild),jt=e,we=!0,sn=null,n=Gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Kn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Qw(e),t===null&&Dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),_0(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Dh(e),null;case 13:return E0(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),cy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(iu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Pt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=Yt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),dy(t,e,r,i,n);case 15:return y0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),bl(t,e),e.tag=1,Ct(r)?(t=!0,tu(e)):t=!1,cs(e,n),qw(e,r,i),Vh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return T0(t,e,n);case 22:return v0(t,e,n)}throw Error(N(156,e.tag))};function j0(t,e){return cw(t,e)}function DA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new DA(t,e,n,r)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OA(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Gf)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return ai(n.children,i,s,e);case qf:o=8,i|=8;break;case oh:return t=Gt(12,n,e,i|2),t.elementType=oh,t.lanes=s,t;case ah:return t=Gt(13,n,e,i),t.elementType=ah,t.lanes=s,t;case lh:return t=Gt(19,n,e,i),t.elementType=lh,t.lanes=s,t;case K_:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H_:o=10;break e;case q_:o=9;break e;case Kf:o=11;break e;case Gf:o=14;break e;case sr:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=K_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Td(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,a,l){return t=new LA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),t}function VA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U0(t){if(!t)return Or;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Ct(n))return jw(t,n,e)}return e}function F0(t,e,n,r,i,s,o,a,l){return t=Pp(n,r,!0,t,i,s,o,a,l),t.context=U0(null),n=t.current,r=Et(),i=xr(n),s=Bn(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,Ta(t,i,r),Nt(t,r),t}function ic(t,e,n,r){var i=e.current,s=Et(),o=xr(i);return n=U0(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(ln(t,i,o,s),Pl(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){Iy(t,e),(t=t.alternate)&&Iy(t,e)}function MA(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}sc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));ic(t,e,null,null)};sc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){ic(null,t,null,null)}),e[Hn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&_w(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function jA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pu(o);s.call(u)}}var o=F0(e,r,t,0,null,!1,!1,"",Sy);return t._reactRootContainer=o,t[Hn]=o.current,qo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=pu(l);a.call(u)}}var l=Pp(t,0,!1,null,null,!1,!1,"",Sy);return t._reactRootContainer=l,t[Hn]=l.current,qo(t.nodeType===8?t.parentNode:t),gi(function(){ic(e,l,n,r)}),l}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=pu(o);a.call(l)}}ic(e,o,t,i)}else o=jA(n,e,t,i,r);return pu(o)}mw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(Xf(e,n|1),Nt(e,De()),!(se&6)&&(Is=De()+500,Fr()))}break;case 13:gi(function(){var r=qn(t,1);if(r!==null){var i=Et();ln(r,t,1,i)}}),Cp(t,1)}};Jf=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=Et();ln(e,t,134217728,n)}Cp(t,134217728)}};gw=function(t){if(t.tag===13){var e=xr(t),n=qn(t,e);if(n!==null){var r=Et();ln(n,t,e,r)}Cp(t,e)}};yw=function(){return ae};vw=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};vh=function(t,e,n){switch(e){case"input":if(dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(N(90));Q_(r),dh(r,i)}}}break;case"textarea":X_(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};iw=xp;sw=gi;var UA={usingClientEntryPoint:!1,Events:[Sa,Yi,Xu,nw,rw,xp]},eo={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FA={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lw(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||MA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Ku=hl.inject(FA),xn=hl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UA;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(N(200));return VA(t,e,null,n)};Bt.createRoot=function(t,e){if(!bp(t))throw Error(N(299));var n=!1,r="",i=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,qo(t.nodeType===8?t.parentNode:t),new Np(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=lw(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return gi(t)};Bt.hydrate=function(t,e,n){if(!oc(e))throw Error(N(200));return ac(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F0(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};Bt.render=function(t,e,n){if(!oc(e))throw Error(N(200));return ac(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!oc(t))throw Error(N(40));return t._reactRootContainer?(gi(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Bt.unstable_batchedUpdates=xp;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return ac(t,e,n,!1,r)};Bt.version="18.2.0-next-9e3b772b8-20220608";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),F_.exports=Bt;var $A=F_.exports,xy=$A;ih.createRoot=xy.createRoot,ih.hydrateRoot=xy.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const Ay="popstate";function BA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Xh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mu(i)}return WA(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zA(){return Math.random().toString(36).substr(2,8)}function ky(t,e){return{usr:t.state,key:t.key,idx:e}}function Xh(t,e,n,r){return n===void 0&&(n=null),ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ls(e):e,{state:n,key:e&&e.key||r||zA()})}function mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ta({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=gr.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:m})}function f(T,m){a=gr.Push;let p=Xh(_.location,T,m);n&&n(p,T),u=c()+1;let v=ky(p,u),E=_.createHref(p);try{o.pushState(v,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function g(T,m){a=gr.Replace;let p=Xh(_.location,T,m);n&&n(p,T),u=c();let v=ky(p,u),E=_.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:mu(T);return Oe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ay,h),l=T,()=>{i.removeEventListener(Ay,h),l=null}},createHref(T){return e(i,T)},createURL:y,encodeLocation(T){let m=y(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(T){return o.go(T)}};return _}var Ry;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ry||(Ry={}));function HA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ls(e):e,i=Op(r.pathname||"/",n);if(i==null)return null;let s=z0(t);qA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tk(s[a],ik(i));return o}function z0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),z0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of W0(s.path))i(s,o,l)}),e}function W0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=W0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function qA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ek(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KA=/^:\w+$/,GA=3,QA=2,YA=1,XA=10,JA=-2,Py=t=>t==="*";function ZA(t,e){let n=t.split("/"),r=n.length;return n.some(Py)&&(r+=JA),e&&(r+=QA),n.filter(i=>!Py(i)).reduce((i,s)=>i+(KA.test(s)?GA:s===""?YA:XA),r)}function ek(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:kr([i,c.pathname]),pathnameBase:lk(kr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=kr([i,c.pathnameBase]))}return s}function nk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=sk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ik(t){try{return decodeURI(t)}catch(e){return Dp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sk(t,e){try{return decodeURIComponent(t)}catch(n){return Dp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Op(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ok(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ls(t):t;return{pathname:n?n.startsWith("/")?n:ak(n,e):e,search:uk(r),hash:ck(i)}}function ak(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Id(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ls(t):(i=ta({},t),Oe(!i.pathname||!i.pathname.includes("?"),Id("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Id("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=ok(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const kr=t=>t.join("/").replace(/\/\/+/g,"/"),lk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ck=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H0=["post","put","patch","delete"];new Set(H0);const hk=["get",...H0];new Set(hk);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}const Mp=A.createContext(null),fk=A.createContext(null),Vs=A.createContext(null),lc=A.createContext(null),$r=A.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=A.createContext(null);function pk(t,e){let{relative:n}=e===void 0?{}:e;Ms()||Oe(!1);let{basename:r,navigator:i}=A.useContext(Vs),{hash:s,pathname:o,search:a}=G0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ms(){return A.useContext(lc)!=null}function js(){return Ms()||Oe(!1),A.useContext(lc).location}function K0(t){A.useContext(Vs).static||A.useLayoutEffect(t)}function Us(){let{isDataRoute:t}=A.useContext($r);return t?kk():mk()}function mk(){Ms()||Oe(!1);let t=A.useContext(Mp),{basename:e,navigator:n}=A.useContext(Vs),{matches:r}=A.useContext($r),{pathname:i}=js(),s=JSON.stringify(Lp(r).map(l=>l.pathnameBase)),o=A.useRef(!1);return K0(()=>{o.current=!0}),A.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Vp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:kr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function G0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.useContext($r),{pathname:i}=js(),s=JSON.stringify(Lp(r).map(o=>o.pathnameBase));return A.useMemo(()=>Vp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function gk(t,e){return yk(t,e)}function yk(t,e,n){Ms()||Oe(!1);let{navigator:r}=A.useContext(Vs),{matches:i}=A.useContext($r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=js(),u;if(e){var c;let _=typeof e=="string"?Ls(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Oe(!1),u=_}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=HA(t,{pathname:f}),y=Tk(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:kr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:kr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?A.createElement(lc.Provider,{value:{location:gu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:gr.Pop}},y):y}function vk(){let t=Ak(),e=dk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const _k=A.createElement(vk,null);class wk extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement($r.Provider,{value:this.props.routeContext},A.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ek(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(Mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement($r.Provider,{value:e},r)}function Tk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Oe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||_k);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=h:l.route.Component?y=A.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,A.createElement(Ek,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?A.createElement(wk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Q0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Q0||{}),yu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yu||{});function Ik(t){let e=A.useContext(Mp);return e||Oe(!1),e}function Sk(t){let e=A.useContext(fk);return e||Oe(!1),e}function xk(t){let e=A.useContext($r);return e||Oe(!1),e}function Y0(t){let e=xk(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function Ak(){var t;let e=A.useContext(q0),n=Sk(yu.UseRouteError),r=Y0(yu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function kk(){let{router:t}=Ik(Q0.UseNavigateStable),e=Y0(yu.UseNavigateStable),n=A.useRef(!1);return K0(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gu({fromRouteId:e},s)))},[t,e])}function Cy(t){let{to:e,replace:n,state:r,relative:i}=t;Ms()||Oe(!1);let{matches:s}=A.useContext($r),{pathname:o}=js(),a=Us(),l=Vp(e,Lp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return A.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ir(t){Oe(!1)}function Rk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1}=t;Ms()&&Oe(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ls(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,y=A.useMemo(()=>{let _=Op(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:f,key:g},navigationType:i}},[a,u,c,h,f,g,i]);return y==null?null:A.createElement(Vs.Provider,{value:l},A.createElement(lc.Provider,{children:n,value:y}))}function Pk(t){let{children:e,location:n}=t;return gk(Jh(e),n)}new Promise(()=>{});function Jh(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Jh(r.props.children,s));return}r.type!==ir&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zh(){return Zh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zh.apply(this,arguments)}function Ck(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Nk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bk(t,e){return t.button===0&&(!e||e==="_self")&&!Nk(t)}const Dk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ok="startTransition",Ny=NS[Ok];function Lk(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=BA({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(h=>{u&&Ny?Ny(()=>l(h)):l(h)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(Rk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Vk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Ck(e,Dk),{basename:f}=A.useContext(Vs),g,y=!1;if(typeof u=="string"&&Mk.test(u)&&(g=u,Vk))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Op(v.pathname,f);v.origin===p.origin&&E!=null?u=E+v.search+v.hash:y=!0}catch{}let _=pk(u,{relative:i}),T=jk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||T(p)}return A.createElement("a",Zh({},h,{href:g||_,onClick:y||s?r:m,ref:n,target:l}))});var by;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(by||(by={}));var Dy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function jk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Us(),l=js(),u=G0(t,{relative:o});return A.useCallback(c=>{if(bk(c,n)){c.preventDefault();let h=r!==void 0?r:mu(l)===mu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function Uk({loggedIn:t,onLogin:e,handleLogout:n}){const[r,i]=A.useState(!1),s=js(),a=["/SnapBack/login","/SnapBack/register"].includes(s.pathname),l=()=>{i(!r)};if(a)return null;const u="/SnapBack/";return d.jsxs("div",{children:[d.jsx("nav",{className:"bg-black p-4",children:d.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[d.jsx(Ae,{to:"/SnapBack/home",children:d.jsx("img",{className:"w-12 h-12",src:`${u}Snapback-Logo.png`,alt:"SnapBack Logo"})}),d.jsx("button",{onClick:l,className:"text-white p-2 md:hidden","x-transition:enter":"transition duration-300 ease-out transform","x-transition:enter-start":"opacity-0 scale-90","x-transition:enter-end":"opacity-100 scale-100","x-transition:leave":"transition duration-200 ease-in transform","x-transition:leave-start":"opacity-100 scale-100","x-transition:leave-end":"opacity-0 scale-90",children:r?d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})}),d.jsxs("ul",{className:"flex space-x-8 md:flex max-md:hidden",children:[d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Home"})}),d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Games"})}),d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/games/hangman/leaderboard",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Hangman LeaderBoard"})}),d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/profile",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Profile"})}),t?d.jsx("li",{children:d.jsx("button",{onClick:n,className:"text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Logout"})}):d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/login",className:"text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Login"})}),d.jsx("li",{className:"mt-0.5",children:d.jsx(Ae,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900",children:"Play Now"})})]})]})}),r&&d.jsx("div",{className:"md:hidden bg-black absolute top-16 left-0 right-0 z-50",children:d.jsxs("ul",{className:"text-white text-center py-4",children:[d.jsx("li",{className:"mb-6",children:d.jsx(Ae,{to:"/SnapBack/",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Home"})}),d.jsx("li",{className:"my-6",children:d.jsx(Ae,{to:"/SnapBack/games",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Games"})}),d.jsx("li",{className:"my-6",children:d.jsx(Ae,{to:"/SnapBack/games/hangman/leaderboard",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Hangman LeaderBoard"})}),d.jsx("li",{className:"my-6",children:d.jsx(Ae,{to:"/SnapBack/profile",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Profile"})}),t?d.jsx("li",{className:"my-6",children:d.jsx("button",{onClick:n,className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",children:"Logout"})}):d.jsx("li",{className:"my-6",children:d.jsx(Ae,{to:"/SnapBack/login",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Login"})}),d.jsx("li",{className:"mt-0.5 my-6",children:d.jsx(Ae,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900",children:"Play Now"})})]})})]})}function Fk({text:t}){const[e,n]=A.useState(""),[r,i]=A.useState(0);return A.useEffect(()=>{const s=setInterval(()=>{r<t.length?(n(t.substring(0,r+1)),i(r+1)):clearInterval(s)},15);return()=>{clearInterval(s)}},[t,r]),d.jsx("p",{className:"lg:mr-56 font-sans text-lg md:text-xl mt-4 text-gray-300 max-w-3xl",children:e})}const gn="/SnapBack/";function $k(){return d.jsx(d.Fragment,{children:d.jsxs("div",{children:[d.jsxs("section",{className:"relative h-[600px]",children:[d.jsx("video",{autoPlay:!0,loop:!0,muted:!0,className:"absolute inset-0 w-full h-full object-cover brightness-75",src:`${gn}intro.mp4`}),d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-white",children:[d.jsx("div",{children:d.jsx("h6",{className:"font-[poppins] text-xl md:text-lg font-semibold",children:"Welcome to SnapBack - Indulge in the exquisite world of gaming"})}),d.jsx("div",{className:"mt-4",children:d.jsx("h1",{className:"text-4xl md:text-9xl uppercase tracking-widest font-bold font-[poppins]",children:"SnapBack"})}),d.jsx("div",{className:"border border-white p-2 mt-3",children:d.jsx(Ae,{to:"/SnapBack/games",children:d.jsxs("button",{className:"btn2 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[d.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),d.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})})]})]}),d.jsxs("div",{className:"md:grid md:grid-rows-2 mb-12 grid-cols-3 gap-10 mt-6 lg:mt-24 max-lg:mx-2 lg:mx-36",children:[d.jsxs("div",{className:"relative col-span-2 h-96 group",children:[d.jsx("img",{src:`${gn}homecod.jpg`,alt:"COD",className:"border border-gray-600 brightness-50 rounded-md w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center text-white ml-4 lg:ml-8",children:[d.jsx("h2",{className:"text-4xl md:text-3xl font-extrabold font-[impact]",children:"Explore Gaming with SnapBack"}),d.jsx(Fk,{text:"Join our elite community of passionate gamers. Explore the latest games, connect with fellow enthusiasts, and dominate the leaderboards in epic tournaments."})]})]}),d.jsxs("div",{className:"text-white row-span-2 col-span-1",children:[d.jsx("h2",{className:"uppercase font-[impact] text-5xl max-lg:mt-6",children:"News"}),d.jsx("hr",{className:"mb-4 mt-2 border-t-2 border-gray-300"}),d.jsx("img",{src:`${gn}assassins-creed-valhalla.jpg`,alt:"Assassins creed image",className:"w-full object-cover"}),d.jsx("h2",{className:"text-2xl lg:text-4xl mt-3 md:text-3xl font-thin font-[impact]",children:"Top Games : Everything You Need To Know"}),d.jsx("hr",{className:"my-5 border-t-2 border-gray-300"}),d.jsxs("div",{className:"flex",children:[d.jsx("img",{src:`${gn}assassins-creed-valhalla.jpg`,alt:"Assassins creed image",className:"object-cover w-36"}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Assassin's Creed Valhalla"}),d.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Embark on epic Viking adventures during the 9th century in England."})]})]}),d.jsx("hr",{className:"my-6 border-t-2 border-gray-300"}),d.jsxs("div",{className:"flex",children:[d.jsx("img",{src:`${gn}forza5.jpg`,alt:"Forza 5 image",className:"object-cover w-36"}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Forze Horizon 5"}),d.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Race through stunning landscapes in the world's most exotic cars."})]})]}),d.jsx("hr",{className:"my-6 border-t-2 border-gray-300"}),d.jsxs("div",{className:"flex",children:[d.jsx("img",{src:`${gn}rdr2.jpg`,alt:"RDR 2 image",className:"object-cover w-36"}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Red Dead Redemption 2"}),d.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Step into an untamed Wild West filled with outlaws and gunfights."})]})]})]}),d.jsxs("div",{className:"relative group max-lg:mt-8 rounded-md",children:[d.jsx("img",{src:`${gn}spiderman.jpg`,alt:"Your Image",className:"brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center ml-8 text-white",children:[d.jsx("p",{className:"max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide",children:"SNAPBACK"}),d.jsx("p",{className:"max-lg:text-2xl text-4xl font-thin font-[impact] mt-4",children:"Embrace the Challenge, Take the Fight with You!"}),d.jsx(Ae,{to:"/SnapBack/games",children:d.jsxs("button",{className:"btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[d.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),d.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})]})]}),d.jsxs("div",{className:"relative group max-lg:mt-6 rounded-md",children:[d.jsx("img",{src:`${gn}cod2nd.webp`,alt:"Your Image",className:"brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center ml-8 text-white",children:[d.jsx("p",{className:"max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide",children:"SNAPBACK"}),d.jsx("p",{className:"max-lg:text-2xl text-4xl font-thin font-[impact] mt-4",children:"Unlock Your Gaming Potential, Conquer the Virtual Realm!."}),d.jsx(Ae,{to:"/SnapBack/games",children:d.jsxs("button",{className:"btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[d.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),d.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})]})]})]}),d.jsx("footer",{className:"h-96 bg-black text-white py-12",children:d.jsxs("div",{className:"container mx-auto flex flex-col items-center justify-center",children:[d.jsxs("div",{className:"flex lg:space-x-4 font-[impact] text-gray-200/50 tracking-wide",children:[d.jsx("a",{href:"#",className:"lg:pr-6 hover:text-gray-400 transition-colors duration-300",children:"Privacy Policy"}),d.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),d.jsx("a",{href:"#",className:"lg:px-6 hover:text-gray-400 transition-colors duration-300",children:"Terms of Service"}),d.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),d.jsx("a",{href:"#",className:"lg:px-6 hover:text-gray-400 transition-colors duration-300",children:"Support"}),d.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),d.jsx(Ae,{to:"/SnapBack/games",className:"",children:"Games"})]}),d.jsx("div",{className:"relative mb-10 m-8 flex items-center mx-auto",children:d.jsx("div",{className:"w-[350px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"})}),d.jsxs("div",{className:"flex space-x-12",children:[d.jsx("img",{className:"w-20",src:`${gn}Snapback-Logo.png`,alt:"SnapBack Logo"}),d.jsx("img",{className:"w-36",src:`${gn}esrb.svg`,alt:"ESRB Logo"})]}),d.jsx("div",{className:"relative mb-10 m-8 flex items-center mx-auto",children:d.jsx("div",{className:"w-[350px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"})}),d.jsxs("p",{className:"px-6 text-lg font-thing tracking-wider mb-2 font-[impact]",children:["© ",new Date().getFullYear()," SnapBack. All Rights Reserved."]})]})})]})})}function Bk({wordToGuess:t,guessedLetters:e}){return d.jsx("div",{className:"lg:ml-80 mb-6 space-x-2 uppercase text-white text-3xl lg:text-5xl font-semibold ",children:t.split("").map((n,r)=>d.jsx("span",{children:e.includes(n)?n:"_ "},r))})}function zk({incorrectGuesses:t}){const e=t.length,n=[{cx:70,cy:50,r:15},{x1:70,y1:65,x2:70,y2:95},{x1:70,y1:75,x2:60,y2:85},{x1:70,y1:75,x2:80,y2:85},{x1:70,y1:95,x2:60,y2:110},{x1:70,y1:95,x2:80,y2:110},...t.length>0?[{x1:20,y1:125,x2:100,y2:125},{x1:40,y1:125,x2:40,y2:0},{x1:40,y1:0,x2:75,y2:0},{x1:60,y1:2,x2:40,y2:22},{x1:68,y1:0,x2:68,y2:35}]:[]].slice(0,e+6);return d.jsx("div",{className:"hangman-drawing flex items-center justify-center mb-6",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"w-44 h-80",children:n.map((r,i)=>r.cx?d.jsx("circle",{cx:r.cx,cy:r.cy,r:r.r,className:"hangman-part animated"},i):d.jsx("line",{x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,className:"hangman-part"},i))})})}function Wk({wordToGuess:t,hint:e,guessedLetters:n,incorrectGuesses:r,onNewGame:i,onGuess:s,gameStatus:o,score:a,setScore:l,resetScore:u,totalWordsGuessed:c}){const h=A.useRef(null),f=A.useRef(null),g="/SnapBack/",y=()=>{h.current&&h.current.play()},_=()=>{f.current&&f.current.play()},T=()=>{"vibrate"in navigator&&navigator.vibrate(200)},m=p=>{s(p),t.includes(p)?(y(),l(a+1)):(_(),T(),o()==="gameover"&&u())};return d.jsxs("div",{className:"p-4 rounded-lg",children:[o()==="gameover"&&d.jsxs("div",{className:"text-lg lg:text-2xl font-semibold lg:text-center",children:[d.jsxs("div",{className:"text-red-600 flex lg:justify-center",children:["Game Over! The word was: ",d.jsx("p",{className:"uppercase ml-3 ",children:t})]}),d.jsxs("div",{className:"text-white flex-1",children:[d.jsxs("p",{children:["Your score :  ",a," points"]}),d.jsxs("p",{children:["Words guessed : ",c]})]})]}),o()==="ongoing"&&d.jsxs("div",{children:[d.jsx(zk,{incorrectGuesses:r}),d.jsxs("div",{className:"lg:flex lg:justify-between lg:mr-80",children:[d.jsxs("div",{children:[d.jsx(Bk,{wordToGuess:t,guessedLetters:n}),d.jsxs("p",{className:"text-white lg:ml-80 mb-6 text-lg",children:["Hint : ",e]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"lg:ml-80 mt-6 text-2xl font-semibold text-white",children:["Score: ",a]}),d.jsxs("div",{className:"lg:ml-80 mt-2 mb-6 text-2xl font-semibold text-white",children:["words guessed : ",c]})]})]}),d.jsxs("div",{className:"text-red-500 font-semibold text-lg lg:ml-80",children:[d.jsx("span",{className:"border-b-2 border-red-500",children:"Incorrect Guesses:"}),d.jsx("span",{className:"ml-2 uppercase",children:r.map((p,v)=>d.jsx("span",{className:"bg-red-500 text-white px-2 py-1 rounded-md m-1",children:p},v))})]}),d.jsx("div",{className:"lg:mx-80 mt-4 grid grid-cols-8 max-lg:grid max-lg:grid-cols-6",children:"abcdefghijklmnopqrstuvwxyz".split("").map(p=>{const v=n.includes(p),E=r.includes(p);return d.jsx("button",{onClick:()=>m(p),className:`px-4 py-3 font-semibold text-2xl uppercase rounded-lg ${v&&!E?"border-2 border-green-500 text-green-500":E?"border-2 border-red-500 text-red-500 cursor-not-allowed":"border-2 border-blue-500 text-white hover:bg-blue-700"}`,disabled:v||E,children:p},p)})}),d.jsx("audio",{ref:h,src:`${g}correct.mp3`}),d.jsx("audio",{ref:f,src:`${g}incorrect.mp3`})]}),o()==="gameover"&&d.jsx("div",{className:"lg:text-center",children:d.jsx("button",{onClick:i,className:" mt-6 py-2 px-8 border-2 font-semibold border-green-500 text-white rounded hover:bg-green-600",children:"New Game"})})]})}const Hk=()=>{const t=[{word:"orange",hint:"A fruit"},{word:"banana",hint:"A yellow fruit"},{word:"computer",hint:"An electronic device"},{word:"ocean",hint:"A large body of water"},{word:"guitar",hint:"A musical instrument"},{word:"book",hint:"Contains written information"},{word:"mountain",hint:"A tall natural landform"},{word:"basketball",hint:"A sports ball used in a game"},{word:"pizza",hint:"A popular Italian dish"},{word:"bicycle",hint:"A two-wheeled vehicle"},{word:"sunglasses",hint:"Protects your eyes from the sun"},{word:"garden",hint:"A place to grow plants"},{word:"television",hint:"A device for watching shows"},{word:"jacket",hint:"Keeps you warm in cold weather"},{word:"pencil",hint:"Used for writing and drawing"},{word:"clock",hint:"Tells you the time"},{word:"cloud",hint:"Visible mass of water vapor"},{word:"chair",hint:"For sitting"},{word:"wallet",hint:"Holds money and cards"},{word:"hat",hint:"Worn on the head"},{word:"globe",hint:"Represents the Earth"},{word:"mirror",hint:"Reflects your image"},{word:"cookie",hint:"Sweet treat"},{word:"carrot",hint:"Orange vegetable"},{word:"swimming",hint:"Activity in the water"},{word:"fire",hint:"Produces heat and light"},{word:"camera",hint:"Captures memories"},{word:"socks",hint:"Worn on your feet"},{word:"key",hint:"Unlocks doors"},{word:"globe",hint:"Represents the world"},{word:"painting",hint:"Art on canvas"},{word:"moon",hint:"Lunar body"},{word:"chocolate",hint:"Sweet indulgence"},{word:"sycophant",hint:"A person who acts obsequiously towards someone important in order to gain an advantage."},{word:"obfuscate",hint:"To render obscure, unclear, or unintelligible."},{word:"pernicious",hint:"Having a harmful effect, especially in a gradual or subtle way."},{word:"recumbentibus",hint:"A provoking criticism, or a well-founded complaint."},{word:"sagacious",hint:"Having or showing keen mental discernment and good judgment; shrewd."},{word:"taciturn",hint:"Reserved or uncommunicative in speech; saying little."},{word:"umbra",hint:"The fully shaded inner region of a shadow cast by an opaque object."},{word:"vexatious",hint:"Causing annoyance, frustration, or worry."},{word:"wraith",hint:"A ghost or ghostlike image of someone, especially one seen shortly before or after their death."},{word:"xenophobe",hint:"A person who dislikes or is prejudiced against people from other countries."},{word:"yoke",hint:"A wooden crosspiece that is fastened over the necks of two animals and attached to the plow or cart that they are to pull."},{word:"zephyr",hint:"A gentle, mild breeze."},{word:"verisimilitude",hint:"The appearance of being true or real."},{word:"oxymoron",hint:"A figure of speech in which apparently contradictory terms appear in conjunction."},{word:"kleidoscope",hint:"A constantly changing pattern or sequence of elements."},{word:"reticent",hint:"Not revealing one's thoughts or feelings readily."},{word:"munificent",hint:"More generous than is usual or necessary."},{word:"nocturnal",hint:"Done, occurring, or active at night."},{word:"Acumen",hint:"The ability to make good judgments and quick decisions."},{word:"benevolent",hint:"Well-meaning and kindly."},{word:"cacophony",hint:"A harsh, discordant mixture of sounds."},{word:"debilitate",hint:"Make (someone) weak and infirm."},{word:"eloquent",hint:"Fluent or persuasive in speaking or writing."},{word:"facetious",hint:"Treating serious issues with deliberately inappropriate humor."},{word:"garrulous",hint:"Excessively talkative, especially on trivial matters."},{word:"hapless",hint:"Unfortunate."},{word:"ineffable",hint:"Too great or extreme to be expressed or described in words."},{word:"juxtapose",hint:"To place or deal with close together for contrasting effect."},{word:"kaleidoscope",hint:"A constantly changing pattern or sequence of elements."},{word:"languish",hint:"Lose or lack vitality; grow weak or feeble."},{word:"meticulous",hint:"Showing great attention to detail; very careful and precise."},{word:"nefarious",hint:"Wicked, villainous, or heinously infamous."},{word:"obfuscate",hint:"To render obscure, unclear, or unintelligible."},{word:"pernicious",hint:"Having a harmful effect, especially in a gradual or subtle way."},{word:"quixotic",hint:"Exceedingly idealistic; unrealistic and impractical."},{word:"rambunctious",hint:"Uncontrollably exuberant; boisterous."},{word:"sycophant",hint:"A person who acts obsequiously towards someone important in order to gain an advantage."},{word:"taciturn",hint:"Reserved or uncommunicative in speech; saying little."},{word:"ubiquitous",hint:"Present, appearing, or found everywhere."},{word:"voracious",hint:"Wanting or devouring great quantities of food; having a very eager approach to an activity."},{word:"whimsical",hint:"Playfully quaint or fanciful, especially in an appealing and amusing way."},{word:"xenophile",hint:"A person who is attracted to foreign peoples, cultures, or customs."},{word:"yearn",hint:"Have an intense feeling of longing for something."},{word:"zealous",hint:"Showing great energy or enthusiasm in pursuit of a cause or objective."},{word:"amicable",hint:"Having a spirit of friendliness; without serious disagreement or rancor."},{word:"belligerent",hint:"Hostile and aggressive."},{word:"circumspect",hint:"Wary and unwilling to take risks."},{word:"deleterious",hint:"Causing harm or damage."},{word:"ephemeral",hint:"Lasting for a very short time; fleeting."},{word:"furtive",hint:"Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble."},{word:"gregarious",hint:"Fond of company; sociable."},{word:"hapless",hint:"Unfortunate."},{word:"ineffable",hint:"Too great or extreme to be expressed or described in words."},{word:"juxtapose",hint:"To place or deal with close together for contrasting effect."},{word:"kaleidoscope",hint:"A constantly changing pattern or sequence of elements."},{word:"languish",hint:"Lose or lack vitality; grow weak or feeble."},{word:"meticulous",hint:"Showing great attention to detail; very careful and precise."},{word:"nefarious",hint:"Wicked, villainous, or heinously infamous."},{word:"obfuscate",hint:"To render obscure, unclear, or unintelligible."},{word:"pernicious",hint:"Having a harmful effect, especially in a gradual or subtle way."},{word:"quixotic",hint:"Exceedingly idealistic; unrealistic and impractical."},{word:"rambunctious",hint:"Uncontrollably exuberant; boisterous."},{word:"sycophant",hint:"A person who acts obsequiously towards someone important in order to gain an advantage."},{word:"taciturn",hint:"Reserved or uncommunicative in speech; saying little."},{word:"ubiquitous",hint:"Present, appearing, or found everywhere."},{word:"voracious",hint:"Wanting or devouring great quantities of food; having a very eager approach to an activity."},{word:"whimsical",hint:"Playfully quaint or fanciful, especially in an appealing and amusing way."},{word:"xenophile",hint:"A person who is attracted to foreign peoples, cultures, or customs."},{word:"yearn",hint:"Have an intense feeling of longing for something."},{word:"zealous",hint:"Showing great energy or enthusiasm in pursuit of a cause or objective."}],e=Math.floor(Math.random()*t.length);return t[e]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Kk;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gk=function(t){const e=X0(t);return J0.encodeByteArray(e,!0)},vu=function(t){return Gk(t).replace(/\./g,"")},Z0=function(t){try{return J0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=()=>Qk().__FIREBASE_DEFAULTS__,Xk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z0(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return Yk()||Xk()||Jk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tE=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nE=()=>{var t;return(t=uc())===null||t===void 0?void 0:t.config},rE=t=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function tR(){var t;const e=(t=uc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rR(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sR,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,r)}}function oR(t,e){return t.replace(aR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aR=/\{\$([^}]+)}/g;function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Oy(s)&&Oy(o)){if(!na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Oy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=1e3,fR=2,pR=4*60*60*1e3,mR=.5;function Ly(t,e=hR,n=fR){const r=e*Math.pow(n,t),i=Math.round(mR*r*(Math.random()-.5)*2);return Math.min(pR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vR(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yR(t){return t===Yr?void 0:t}function vR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const wR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ER=re.INFO,TR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},IR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=ER,this._logHandler=IR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const SR=(t,e)=>e.some(n=>t instanceof n);let Vy,My;function xR(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AR(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,ef=new WeakMap,uE=new WeakMap,xd=new WeakMap,jp=new WeakMap;function kR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lE.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function RR(t){if(ef.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ef.set(t,e)}let tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ef.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PR(t){tf=t(tf)}function CR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),Rr(r)}:AR().includes(t)?function(...e){return t.apply(Ad(this),e),Rr(lE.get(this))}:function(...e){return Rr(t.apply(Ad(this),e))}}function NR(t){return typeof t=="function"?CR(t):(t instanceof IDBTransaction&&RR(t),SR(t,xR())?new Proxy(t,tf):t)}function Rr(t){if(t instanceof IDBRequest)return kR(t);if(xd.has(t))return xd.get(t);const e=NR(t);return e!==t&&(xd.set(t,e),jp.set(e,t)),e}const Ad=t=>jp.get(t);function bR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DR=["get","getKey","getAll","getAllKeys","count"],OR=["put","add","delete","clear"],kd=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kd.set(e,s),s}PR(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nf="@firebase/app",Uy="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new cc("@firebase/app"),MR="@firebase/app-compat",jR="@firebase/analytics-compat",UR="@firebase/analytics",FR="@firebase/app-check-compat",$R="@firebase/app-check",BR="@firebase/auth",zR="@firebase/auth-compat",WR="@firebase/database",HR="@firebase/database-compat",qR="@firebase/functions",KR="@firebase/functions-compat",GR="@firebase/installations",QR="@firebase/installations-compat",YR="@firebase/messaging",XR="@firebase/messaging-compat",JR="@firebase/performance",ZR="@firebase/performance-compat",eP="@firebase/remote-config",tP="@firebase/remote-config-compat",nP="@firebase/storage",rP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/firestore-compat",oP="firebase",aP="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="[DEFAULT]",lP={[nf]:"fire-core",[MR]:"fire-core-compat",[UR]:"fire-analytics",[jR]:"fire-analytics-compat",[$R]:"fire-app-check",[FR]:"fire-app-check-compat",[BR]:"fire-auth",[zR]:"fire-auth-compat",[WR]:"fire-rtdb",[HR]:"fire-rtdb-compat",[qR]:"fire-fn",[KR]:"fire-fn-compat",[GR]:"fire-iid",[QR]:"fire-iid-compat",[YR]:"fire-fcm",[XR]:"fire-fcm-compat",[JR]:"fire-perf",[ZR]:"fire-perf-compat",[eP]:"fire-rc",[tP]:"fire-rc-compat",[nP]:"fire-gcs",[rP]:"fire-gcs-compat",[iP]:"fire-fst",[sP]:"fire-fst-compat","fire-js":"fire-js",[oP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map,sf=new Map;function uP(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(sf.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,t);for(const n of _u.values())uP(n,t);return!0}function Br(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new Pi("app","Firebase",cP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=aP;function cE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=nE()),!n)throw Pr.create("no-options");const s=_u.get(i);if(s){if(na(n,s.options)&&na(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new _R(i);for(const l of sf.values())o.addComponent(l);const a=new dP(n,r,o);return _u.set(i,a),a}function dc(t=rf){const e=_u.get(t);if(!e&&t===rf&&nE())return cE();if(!e)throw Pr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=lP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}cn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="firebase-heartbeat-database",fP=1,ra="firebase-heartbeat-store";let Rd=null;function dE(){return Rd||(Rd=bR(hP,fP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ra)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Rd}async function pP(t){try{return await(await dE()).transaction(ra).objectStore(ra).get(hE(t))}catch(e){if(e instanceof Zt)yi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function Fy(t,e){try{const r=(await dE()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,hE(t)),await r.done}catch(n){if(n instanceof Zt)yi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=1024,gP=30*24*60*60*1e3;class yP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _P(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$y();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$y(),{heartbeatsToSend:n,unsentEntries:r}=vP(this._heartbeatsCache.heartbeats),i=vu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $y(){return new Date().toISOString().substring(0,10)}function vP(t,e=mP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),By(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),By(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function By(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){cn(new Jt("platform-logger",e=>new LR(e),"PRIVATE")),cn(new Jt("heartbeat",e=>new yP(e),"PRIVATE")),bt(nf,Uy,t),bt(nf,Uy,"esm2017"),bt("fire-js","")}wP("");var EP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Up=Up||{},Q=EP||self;function hc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TP(t){return Object.prototype.hasOwnProperty.call(t,Pd)&&t[Pd]||(t[Pd]=++IP)}var Pd="closure_uid_"+(1e9*Math.random()>>>0),IP=0;function SP(t,e,n){return t.call.apply(t.bind,arguments)}function xP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=SP:dt=xP,dt.apply(null,arguments)}function fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function zr(){this.s=this.s,this.o=this.o}var AP=0;zr.prototype.s=!1;zr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),AP!=0)&&TP(this)};zr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var kP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function ia(t){return/^[\s\xa0]*$/.test(t)}function fc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return fc().indexOf(t)!=-1}function $p(t){return $p[" "](t),t}$p[" "]=function(){};function RP(t,e){var n=wC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PP=wn("Opera"),Ss=wn("Trident")||wn("MSIE"),pE=wn("Edge"),of=pE||Ss,mE=wn("Gecko")&&!(fc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),CP=fc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function gE(){var t=Q.document;return t?t.documentMode:void 0}var af;e:{var Cd="",Nd=function(){var t=fc();if(mE)return/rv:([^\);]+)(\)|;)/.exec(t);if(pE)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CP)return/WebKit\/(\S+)/.exec(t);if(PP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nd&&(Cd=Nd?Nd[1]:""),Ss){var bd=gE();if(bd!=null&&bd>parseFloat(Cd)){af=String(bd);break e}}af=Cd}var lf;if(Q.document&&Ss){var Wy=gE();lf=Wy||parseInt(af,10)||void 0}else lf=void 0;var NP=lf;function sa(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mE){e:{try{$p(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sa.$.h.call(this)}}Ge(sa,ht);var bP={2:"touch",3:"pen",4:"mouse"};sa.prototype.h=function(){sa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ra="closure_listenable_"+(1e6*Math.random()|0),DP=0;function OP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++DP,this.fa=this.ia=!1}function pc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yE(t){const e={};for(const n in t)e[n]=t[n];return e}const Hy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Hy.length;s++)n=Hy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function mc(t){this.src=t,this.g={},this.h=0}mc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new OP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function uf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var zp="closure_lm_"+(1e6*Math.random()|0),Dd={};function _E(t,e,n,r,i){if(r&&r.once)return EE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_E(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Ra]?t.O(e,n,ka(r)?!!r.capture:!!r,i):wE(t,e,n,!1,r,i)}function wE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ka(i)?!!i.capture:!!i,a=Hp(t);if(a||(t[zp]=a=new mc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=VP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(IE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VP(){function t(n){return e.call(t.src,t.listener,n)}const e=MP;return t}function EE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)EE(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Ra]?t.P(e,n,ka(r)?!!r.capture:!!r,i):wE(t,e,n,!0,r,i)}function TE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);else r=ka(r)?!!r.capture:!!r,n=qp(n),t&&t[Ra]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cf(s,n,r,i),-1<n&&(pc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cf(e,n,r,i)),(n=-1<t?e[t]:null)&&Wp(n))}function Wp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ra])uf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hp(e))?(uf(n,t),n.h==0&&(n.src=null,e[zp]=null)):pc(t)}}}function IE(t){return t in Dd?Dd[t]:Dd[t]="on"+t}function MP(t,e){if(t.fa)t=!0;else{e=new sa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wp(t),t=n.call(r,e)}return t}function Hp(t){return t=t[zp],t instanceof mc?t:null}var Od="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(t){return typeof t=="function"?t:(t[Od]||(t[Od]=function(e){return t.handleEvent(e)}),t[Od])}function Ke(){zr.call(this),this.i=new mc(this),this.S=this,this.J=null}Ge(Ke,zr);Ke.prototype[Ra]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){TE(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),vE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pl(o,r,!0,e)&&i}if(o=e.g=t,i=pl(o,r,!0,e)&&i,i=pl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pl(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pc(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&uf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kp=Q.JSON.stringify;class jP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UP(){var t=Gp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FP{constructor(){this.h=this.g=null}add(e,n){const r=SE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var SE=new jP(()=>new $P,t=>t.reset());class $P{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function zP(t){Q.setTimeout(()=>{throw t},0)}let oa,aa=!1,Gp=new FP,xE=()=>{const t=Q.Promise.resolve(void 0);oa=()=>{t.then(WP)}};var WP=()=>{for(var t;t=UP();){try{t.h.call(t.g)}catch(n){zP(n)}var e=SE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}aa=!1};function gc(t,e){Ke.call(this),this.h=t||1,this.g=e||Q,this.j=dt(this.qb,this),this.l=Date.now()}Ge(gc,Ke);O=gc.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Qp(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){gc.$.N.call(this),Qp(this),delete this.g};function Yp(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function AE(t){t.g=Yp(()=>{t.g=null,t.i&&(t.i=!1,AE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HP extends zr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AE(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(t){zr.call(this),this.h=t,this.g={}}Ge(la,zr);var qy=[];function kE(t,e,n,r){Array.isArray(n)||(n&&(qy[0]=n.toString()),n=qy);for(var i=0;i<n.length;i++){var s=_E(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function RE(t){Bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wp(e)},t),t.g={}}la.prototype.N=function(){la.$.N.call(this),RE(this)};la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yc(){this.g=!0}yc.prototype.Ea=function(){this.g=!1};function qP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function KP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QP(t,n)+(r?" "+r:"")})}function GP(t,e){t.info(function(){return"TIMEOUT: "+e})}yc.prototype.info=function(){};function QP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kp(n)}catch{return e}}var Ni={},Ky=null;function vc(){return Ky=Ky||new Ke}Ni.Ta="serverreachability";function PE(t){ht.call(this,Ni.Ta,t)}Ge(PE,ht);function ua(t){const e=vc();et(e,new PE(e))}Ni.STAT_EVENT="statevent";function CE(t,e){ht.call(this,Ni.STAT_EVENT,t),this.stat=e}Ge(CE,ht);function wt(t){const e=vc();et(e,new CE(e,t))}Ni.Ua="timingevent";function NE(t,e){ht.call(this,Ni.Ua,t),this.size=e}Ge(NE,ht);function Pa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var _c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xp(){}Xp.prototype.h=null;function Gy(t){return t.h||(t.h=t.i())}function DE(){}var Ca={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jp(){ht.call(this,"d")}Ge(Jp,ht);function Zp(){ht.call(this,"c")}Ge(Zp,ht);var df;function wc(){}Ge(wc,Xp);wc.prototype.g=function(){return new XMLHttpRequest};wc.prototype.i=function(){return{}};df=new wc;function Na(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new la(this),this.P=YP,t=of?125:void 0,this.V=new gc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new OE}function OE(){this.i=null,this.g="",this.h=!1}var YP=45e3,hf={},wu={};O=Na.prototype;O.setTimeout=function(t){this.P=t};function ff(t,e,n){t.L=1,t.v=Tc(Gn(e)),t.s=n,t.S=!0,LE(t,null)}function LE(t,e){t.G=Date.now(),ba(t),t.A=Gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),zE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new OE,t.g=cT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new HP(dt(t.Pa,t,t.g),t.O)),kE(t.U,t.g,"readystatechange",t.nb),e=t.I?yE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ua(),qP(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&En(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||of||this.g&&(this.h.h||this.g.ja()||Jy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ua(3):ua(2)),Ec(this);var n=this.g.da();this.ca=n;t:if(VE(this)){var r=Jy(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),Ro(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var u=a;break t}}u=null}if(n=u)rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pf(this,n);else{this.i=!1,this.o=3,wt(12),ei(this),Ro(this);break e}}this.S?(ME(this,c,o),of&&this.i&&c==3&&(kE(this.U,this.V,"tick",this.mb),this.V.start())):(rs(this.j,this.m,o,null),pf(this,o)),c==4&&ei(this),this.i&&!this.J&&(c==4?oT(this.l,this):(this.i=!1,ba(this)))}else yC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),ei(this),Ro(this)}}}catch{}finally{}};function VE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ME(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=XP(t,n),i==wu){e==4&&(t.o=4,wt(14),r=!1),rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hf){t.o=4,wt(15),rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else rs(t.j,t.m,i,null),pf(t,i);VE(t)&&i!=wu&&i!=hf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sm(e),e.M=!0,wt(11))):(rs(t.j,t.m,n,"[Invalid Chunked Response]"),ei(t),Ro(t))}O.mb=function(){if(this.g){var t=En(this.g),e=this.g.ja();this.C<e.length&&(Ec(this),ME(this,t,e),this.i&&t!=4&&ba(this))}};function XP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wu:(n=Number(e.substring(n,r)),isNaN(n)?hf:(r+=1,r+n>e.length?wu:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,ei(this)};function ba(t){t.Y=Date.now()+t.P,jE(t,t.P)}function jE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pa(dt(t.lb,t),e)}function Ec(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(GP(this.j,this.A),this.L!=2&&(ua(),wt(17)),ei(this),this.o=2,Ro(this)):jE(this,this.Y-t)};function Ro(t){t.l.H==0||t.J||oT(t.l,t)}function ei(t){Ec(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qp(t.V),RE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mf(n.i,t))){if(!t.K&&mf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Iu(n),Ac(n);else break e;im(n),wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Pa(dt(n.ib,n),6e3));if(1>=qE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ti(n,11)}else if((t.K||n.g==t)&&Iu(n),!ia(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(em(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,he(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=uT(r,r.J?r.pa:null,r.Y),o.K){KE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ec(a),ba(a)),r.g=o}else iT(r);0<n.j.length&&kc(n)}else u[0]!="stop"&&u[0]!="close"||ti(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ti(n,7):rm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ua(4)}catch{}}function JP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function UE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZP(t),r=JP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function li(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof li){this.h=t.h,Eu(this,t.j),this.s=t.s,this.g=t.g,Tu(this,t.m),this.l=t.l;var e=t.i,n=new ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qy(this,n),this.o=t.o}else t&&(e=String(t).match(FE))?(this.h=!1,Eu(this,e[1]||"",!0),this.s=fo(e[2]||""),this.g=fo(e[3]||"",!0),Tu(this,e[4]),this.l=fo(e[5]||"",!0),Qy(this,e[6]||"",!0),this.o=fo(e[7]||"")):(this.h=!1,this.i=new ca(null,this.h))}li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(po(e,Yy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(po(e,Yy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(po(n,n.charAt(0)=="/"?rC:nC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",po(n,sC)),t.join("")};function Gn(t){return new li(t)}function Eu(t,e,n){t.j=n?fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qy(t,e,n){e instanceof ca?(t.i=e,oC(t.i,t.h)):(n||(e=po(e,iC)),t.i=new ca(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Tc(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function po(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yy=/[#\/\?@]/g,nC=/[#\?:]/g,rC=/[#\?]/g,iC=/[#\?@]/g,sC=/#/g;function ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wr(t){t.g||(t.g=new Map,t.h=0,t.i&&eC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ca.prototype;O.add=function(t,e){Wr(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $E(t,e){Wr(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BE(t,e){return Wr(t),e=Fs(t,e),t.g.has(e)}O.forEach=function(t,e){Wr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){Wr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){Wr(this);let e=[];if(typeof t=="string")BE(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Wr(this),this.i=null,t=Fs(this,t),BE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zE(t,e,n){$E(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),Fp(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oC(t,e){e&&!t.j&&(Wr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($E(this,r),zE(this,i,n))},t)),t.j=e}var aC=class{constructor(t,e){this.g=t,this.map=e}};function WE(t){this.l=t||lC,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lC=10;function HE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qE(t){return t.h?1:t.g?t.g.size:0}function mf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function em(t,e){t.g?t.g.add(e):t.h=e}function KE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WE.prototype.cancel=function(){if(this.i=GE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fp(t.i)}var uC=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function cC(){this.g=new uC}function dC(t,e,n){const r=n||"";try{UE(t,function(i,s){let o=i;ka(i)&&(o=Kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hC(t,e){const n=new yc;if(Q.Image){const r=new Image;r.onload=fl(ml,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fl(ml,n,r,"TestLoadImage: error",!1,e),r.onabort=fl(ml,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fl(ml,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ml(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ic(t){this.l=t.ec||null,this.j=t.ob||!1}Ge(Ic,Xp);Ic.prototype.g=function(){return new Sc(this.l,this.j)};Ic.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(Sc,Ke);var tm=0;O=Sc.prototype;O.open=function(t,e){if(this.readyState!=tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,da(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=tm};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):da(this),this.readyState==3&&QE(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Da(this))};O.Ya=function(t){this.g&&(this.response=t,Da(this))};O.ka=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,da(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function da(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fC=Q.JSON.parse;function Re(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YE,this.L=this.M=!1}Ge(Re,Ke);var YE="",pC=/^https?$/i,mC=["POST","PUT"];O=Re.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():df.g(),this.C=this.u?Gy(this.u):Gy(df),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=fE(mC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZE(this),0<this.B&&((this.L=gC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Yp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xy(this,s)}};function gC(t){return Ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Up<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Xy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XE(t),xc(t)}function XE(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),xc(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),Re.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?JE(this):this.kb())};O.kb=function(){JE(this)};function JE(t){if(t.h&&typeof Up<"u"&&(!t.C[1]||En(t)!=4||t.da()!=2)){if(t.v&&En(t)==4)Yp(t.La,0,t);else if(et(t,"readystatechange"),En(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(FE)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!pC.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var s=2<En(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",XE(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){ZE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function En(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fC(e)}};function Jy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yC(t){const e={};t=(t.g&&2<=En(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ia(t[r]))continue;var n=BP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}LP(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eT(t){let e="";return Bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function to(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tT(t){this.Ga=0,this.j=[],this.l=new yc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=to("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=to("baseRetryDelayMs",5e3,t),this.hb=to("retryDelaySeedMs",1e4,t),this.eb=to("forwardChannelMaxRetries",2,t),this.xa=to("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WE(t&&t.concurrentRequestLimit),this.Ja=new cC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=tT.prototype;O.ra=8;O.H=1;function rm(t){if(nT(t),t.H==3){var e=t.W++,n=Gn(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),Oa(t,n),e=new Na(t,t.l,e),e.L=2,e.v=Tc(Gn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=cT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ba(e)}lT(t)}function Ac(t){t.g&&(sm(t),t.g.cancel(),t.g=null)}function nT(t){Ac(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Iu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function kc(t){if(!HE(t.i)&&!t.m){t.m=!0;var e=t.Na;oa||xE(),aa||(oa(),aa=!0),Gp.add(e,t),t.C=0}}function vC(t,e){return qE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pa(dt(t.Na,t,e),aT(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Na(this,this.l,t);let s=this.s;if(this.U&&(s?(s=yE(s),vE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rT(this,i,e),n=Gn(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),Oa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(eT(s)))+"&"+e:this.o&&nm(n,this.o,s)),em(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,ff(i,n,null)):ff(i,n,e),this.H=2}}else this.H==3&&(t?Zy(this,t):this.j.length==0||HE(this.i)||Zy(this))};function Zy(t,e){var n;e?n=e.m:n=t.W++;const r=Gn(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),Oa(t,r),t.o&&t.s&&nm(r,t.o,t.s),n=new Na(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),em(t.i,n),ff(n,r,e)}function Oa(t,e){t.na&&Bp(t.na,function(n,r){he(e,r,n)}),t.h&&UE({},function(n,r){he(e,r,n)})}function rT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{dC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function iT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oa||xE(),aa||(oa(),aa=!0),Gp.add(e,t),t.A=0}}function im(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pa(dt(t.Ma,t),aT(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,sT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Pa(dt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Ac(this),sT(this))};function sm(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function sT(t){t.g=new Na(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),Oa(t,e),t.o&&t.s&&nm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Tc(Gn(e)),n.s=null,n.S=!0,LE(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Ac(this),im(this),wt(19))};function Iu(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function oT(t,e){var n=null;if(t.g==e){Iu(t),sm(t),t.g=null;var r=2}else if(mf(t.i,e))n=e.F,KE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=vc(),et(r,new NE(r,n)),kc(t)}else iT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&vC(t,e)||r==2&&im(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ti(t,5);break;case 4:ti(t,10);break;case 3:ti(t,6);break;default:ti(t,2)}}}function aT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ti(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new li("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Eu(n,"https"),Tc(n)),hC(n.toString(),r)}else wt(2);t.H=0,t.h&&t.h.za(e),lT(t),nT(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function lT(t){if(t.H=0,t.ma=[],t.h){const e=GE(t.i);(e.length!=0||t.j.length!=0)&&(zy(t.ma,e),zy(t.ma,t.j),t.i.i.length=0,Fp(t.j),t.j.length=0),t.h.ya()}}function uT(t,e,n){var r=n instanceof li?Gn(n):new li(n);if(r.g!="")e&&(r.g=e+"."+r.g),Tu(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new li(null);r&&Eu(s,r),e&&(s.g=e),i&&Tu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),Oa(t,r),r}function cT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new Ic({ob:!0})):new Re(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function dT(){}O=dT.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Su(){if(Ss&&!(10<=Number(NP)))throw Error("Environmental error: no available transport.")}Su.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ke.call(this),this.g=new tT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Ge($t,Ke);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=uT(t,null,t.Y),kc(t)};$t.prototype.close=function(){rm(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kp(t),t=n);e.j.push(new aC(e.fb++,t)),e.H==3&&kc(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,rm(this.g),delete this.g,$t.$.N.call(this)};function hT(t){Jp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(hT,Jp);function fT(){Zp.call(this),this.status=1}Ge(fT,Zp);function $s(t){this.g=t}Ge($s,dT);$s.prototype.Ba=function(){et(this.g,"a")};$s.prototype.Aa=function(t){et(this.g,new hT(t))};$s.prototype.za=function(t){et(this.g,new fT)};$s.prototype.ya=function(){et(this.g,"b")};function _C(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(dn,_C);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ld(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ld(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ld(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ld(this,r),i=0;break}}this.h=i,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var wC={};function om(t){return-128<=t&&128>t?RP(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Tn(t){if(isNaN(t)||!isFinite(t))return hs;if(0>t)return Je(Tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=gf;return new ue(e,0)}function pT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(pT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tn(Math.pow(e,8)),r=hs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Tn(Math.pow(e,s)),r=r.R(s).add(Tn(o))):(r=r.R(n),r=r.add(Tn(o)))}return r}var gf=4294967296,hs=om(0),yf=om(1),ev=om(16777216);O=ue.prototype;O.ea=function(){if(Kt(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:gf+r)*e,e*=gf}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Kt(this))return"-"+Je(this).toString(t);for(var e=Tn(Math.pow(t,6)),n=this,r="";;){var i=Au(n,e).g;n=xu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Un(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}O.X=function(t){return t=xu(this,t),Kt(t)?-1:Un(t)?0:1};function Je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(yf)}O.abs=function(){return Kt(this)?Je(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function xu(t,e){return t.add(Je(e))}O.R=function(t){if(Un(this)||Un(t))return hs;if(Kt(this))return Kt(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(Kt(t))return Je(this.R(Je(t)));if(0>this.X(ev)&&0>t.X(ev))return Tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,gl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,gl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function gl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function no(t,e){this.g=t,this.h=e}function Au(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new no(hs,hs);if(Kt(t))return e=Au(Je(t),e),new no(Je(e.g),Je(e.h));if(Kt(e))return e=Au(t,Je(e)),new no(Je(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yf,r=e;0>=r.X(t);)n=tv(n),r=tv(r);var i=Ui(n,1),s=Ui(r,1);for(r=Ui(r,2),n=Ui(n,2);!Un(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ui(r,1),n=Ui(n,1)}return e=xu(t,i.R(e)),new no(i,e)}for(i=hs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tn(n),o=s.R(e);Kt(o)||0<o.X(t);)n-=r,s=Tn(n),o=s.R(e);Un(s)&&(s=yf),i=i.add(s),t=xu(t,o)}return new no(i,t)}O.gb=function(t){return Au(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function tv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Ui(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ue(i,t.h)}Su.prototype.createWebChannel=Su.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;_c.NO_ERROR=0;_c.TIMEOUT=8;_c.HTTP_ERROR=6;bE.COMPLETE="complete";DE.EventType=Ca;Ca.OPEN="a";Ca.CLOSE="b";Ca.ERROR="c";Ca.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Tn;ue.fromString=pT;var EC=function(){return new Su},TC=function(){return vc()},Vd=_c,IC=bE,SC=Ni,nv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yl=DE,xC=Re,AC=dn,fs=ue;const rv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new cc("@firebase/firestore");function ro(){return vi.logLevel}function U(t,...e){if(vi.logLevel<=re.DEBUG){const n=e.map(am);vi.debug(`Firestore (${Bs}): ${t}`,...n)}}function Qn(t,...e){if(vi.logLevel<=re.ERROR){const n=e.map(am);vi.error(`Firestore (${Bs}): ${t}`,...n)}}function xs(t,...e){if(vi.logLevel<=re.WARN){const n=e.map(am);vi.warn(`Firestore (${Bs}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function me(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class RC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new mT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class CC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new bC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=OC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Be(0,0))}static max(){return new X(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ha{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const LC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends ha{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return LC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(fe.fromString(e))}static fromName(e){return new z(fe.fromString(e).popFirst(5))}static empty(){return new z(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new fe(e.slice()))}}function VC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Lr(i,z.empty(),e)}function MC(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(X.min(),z.empty(),-1)}static max(){return new Lr(X.max(),z.empty(),-1)}}function jC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==UC)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Va(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}lm.ae=-1;function Rc(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function $C(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sv(this.data.getIterator())}getIteratorFrom(e){return new sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ft(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vT("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const BC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(me(!!t),typeof t=="string"){let e=0;const n=BC.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return um(e)?cm(e):e}function fa(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:WC(t)?9007199254740991:10:G()}function bn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?ku(o)===ku(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(iv(o)!==iv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!bn(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function ma(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ov(t.timestampValue,e.timestampValue);case 4:return ov(fa(t),fa(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=_i(s),l=_i(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=oe(a[u],l[u]);if(c!==0)return c}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(Ve(s.latitude),Ve(o.latitude));return a!==0?a:oe(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ks(a[u],l[u]);if(c)return c}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_l.mapValue&&o===_l.mapValue)return 0;if(s===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=oe(l[h],c[h]);if(f!==0)return f;const g=ks(a[l[h]],u[c[h]]);if(g!==0)return g}return oe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vr(t),r=Vr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Rs(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vf(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function av(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function dm(t){return!!t&&"arrayValue"in t}function lv(t){return!!t&&"nullValue"in t}function uv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Po(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(Po(this.value))}}function _T(t){const e=[];return bi(t.fields,(n,r)=>{const i=new ct([n]);if(Vl(r)){const s=_T(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function cv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function HC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{}class Ue extends wT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KC(e,n,r):n==="array-contains"?new YC(e,r):n==="in"?new XC(e,r):n==="not-in"?new JC(e,r):n==="array-contains-any"?new ZC(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GC(e,r):new QC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class hn extends wT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new hn(e,n)}matches(e){return ET(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ET(t){return t.op==="and"}function TT(t){return qC(t)&&ET(t)}function qC(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function wf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(TT(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function IT(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IT(o,i.filters[a]),!0):!1}(t,e):void G()}function ST(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"}(t):"Filter"}class KC extends Ue{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class GC extends Ue{constructor(e,n){super(e,"in",n),this.keys=xT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QC extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=xT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class YC extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dm(n)&&ma(n.arrayValue,this.value)}}class XC extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ma(this.value.arrayValue,n)}}class JC extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ma(this.value.arrayValue,n)}}class ZC extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ma(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function hv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new eN(t,e,n,r,i,s,o)}function hm(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.he=n}return e.he}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dv(t.startAt,e.startAt)&&dv(t.endAt,e.endAt)}function Ef(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function tN(t,e,n,r,i,s,o,a){return new Ma(t,e,n,r,i,s,o,a)}function pm(t){return new Ma(t)}function fv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kT(t){return t.collectionGroup!==null}function No(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=mm(e),r=AT(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Co(n)),e.Pe.push(new Co(ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Co(ct.keyField(),s))}}}return e.Pe}function kn(t){const e=Z(t);return e.Ie||(e.Ie=nN(e,No(t))),e.Ie}function nN(t,e){if(t.limitType==="F")return hv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return hv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tf(t,e){e.getFirstInequalityField(),mm(t);const n=t.filters.concat([e]);return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function If(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pc(t,e){return fm(kn(t),kn(e))&&t.limitType===e.limitType}function RT(t){return`${hm(kn(t))}|lt:${t.limitType}`}function $i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ST(i)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of No(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=cv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,No(r),i)||r.endAt&&!function(o,a,l){const u=cv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,No(r),i))}(t,e)}function rN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PT(t){return(e,n)=>{let r=!1;for(const i of No(t)){const s=iN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iN(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ks(l,u):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Se(z.comparator);function Yn(){return sN}const CT=new Se(z.comparator);function mo(...t){let e=CT;for(const n of t)e=e.insert(n.key,n);return e}function NT(t){let e=CT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ni(){return bo()}function bT(){return bo()}function bo(){return new zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const oN=new Se(z.comparator),aN=new ft(z.comparator);function te(...t){let e=aN;for(const n of t)e=e.add(n);return e}const lN=new ft(oe);function uN(){return lN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function cN(t,e){return $C(e)?OT(e):DT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this._=void 0}}function dN(t,e,n){return t instanceof Pu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&um(s)&&(s=cm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ga?VT(t,e):t instanceof ya?MT(t,e):function(i,s){const o=LT(i,s),a=pv(o)+pv(i.Te);return _f(o)&&_f(i.Te)?OT(a):DT(i.serializer,a)}(t,e)}function hN(t,e,n){return t instanceof ga?VT(t,e):t instanceof ya?MT(t,e):n}function LT(t,e){return t instanceof Cu?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pu extends Nc{}class ga extends Nc{constructor(e){super(),this.elements=e}}function VT(t,e){const n=jT(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends Nc{constructor(e){super(),this.elements=e}}function MT(t,e){let n=jT(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Cu extends Nc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function pv(t){return Ve(t.integerValue||t.doubleValue)}function jT(t){return dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ga&&i instanceof ga||r instanceof ya&&i instanceof ya?As(r.elements,i.elements,bn):r instanceof Cu&&i instanceof Cu?bn(r.Te,i.Te):r instanceof Pu&&i instanceof Pu}(t.transform,e.transform)}class pN{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function UT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $T(t.key,Rn.none()):new ja(t.key,t.data,Rn.none());{const n=t.data,r=kt.empty();let i=new ft(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new Vt(i.toArray()),Rn.none())}}function mN(t,e,n){t instanceof ja?function(i,s,o){const a=i.value.clone(),l=gv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=gv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(FT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof ja?function(s,o,a,l){if(!Ml(s.precondition,o))return a;const u=s.value.clone(),c=yv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,a,l){if(!Ml(s.precondition,o))return a;const u=yv(s.fieldTransforms,l,o),c=o.data;return c.setAll(FT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function gN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=LT(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>fN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ja extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hN(o,a,n[i]))}return r}function yv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dN(s,o,e))}return r}class $T extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yN extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=UT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>mv(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>mv(n,r))}}class gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return oN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ie;function EN(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function BT(t){if(t===void 0)return Qn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Le.OK:return k.OK;case Le.CANCELLED:return k.CANCELLED;case Le.UNKNOWN:return k.UNKNOWN;case Le.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Le.INTERNAL:return k.INTERNAL;case Le.UNAVAILABLE:return k.UNAVAILABLE;case Le.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Le.NOT_FOUND:return k.NOT_FOUND;case Le.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Le.ABORTED:return k.ABORTED;case Le.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Le.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(ie=Le||(Le={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new fs([4294967295,4294967295],0);function vv(t){const e=TN().encode(t),n=new AC;return n.update(e),new Uint8Array(n.digest())}function _v(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fs([n,r],0),new fs([i,s],0)]}class ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=fs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(fs.fromNumber(r)));return i.compare(IN)===1&&(i=new fs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=vv(e),[r,i]=_v(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ym(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=vv(e),[r,i]=_v(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(X.min(),i,new Se(oe),Yn(),te())}}class Ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ua(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class zT{constructor(e,n){this.targetId=e,this.ye=n}}class WT{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wv{constructor(){this.we=0,this.Se=Tv(),this.be=gt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=te(),n=te(),r=te();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ua(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Tv()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class SN{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Yn(),this.Ue=Ev(),this.We=new Se(oe)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Ef(s))if(r===0){const o=new z(s.path);this.je(n,o,ut.newNoDocument(o,X.min()))}else me(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=_i(r).toUint8Array()}catch(l){if(l instanceof vT)return xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ym(o,i,s)}catch(l){return xs(l instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Ef(a.target)){const l=new z(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,ut.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=te();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.We,this.$e,r);return this.$e=Yn(),this.Ue=Ev(),this.We=new Se(oe),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new wv,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ft(oe),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new wv),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Ev(){return new Se(z.comparator)}function Tv(){return new Se(z.comparator)}const xN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kN=(()=>({and:"AND",or:"OR"}))();class RN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sf(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PN(t,e){return Nu(t,e.toTimestamp())}function Pn(t){return me(!!t),X.fromTimestamp(function(n){const r=Vr(n);return new Be(r.seconds,r.nanos)}(t))}function vm(t,e){return function(r){return new fe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function qT(t){const e=fe.fromString(t);return me(YT(e)),e}function xf(t,e){return vm(t.databaseId,e.path)}function Md(t,e){const n=qT(e);if(n.get(1)!==t.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(KT(n))}function Af(t,e){return vm(t.databaseId,e)}function CN(t){const e=qT(t);return e.length===4?fe.emptyPath():KT(e)}function kf(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Iv(t,e,n){return{name:xf(t,e),fields:n.value.mapValue.fields}}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(me(c===void 0||typeof c=="string"),gt.fromBase64String(c||"")):(me(c===void 0||c instanceof Uint8Array),gt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:BT(u.code);return new M(c,u.message||"")}(o);n=new WT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Md(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):X.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new jl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Md(t,r.document),s=r.readTime?Pn(r.readTime):X.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Md(t,r.document),s=r.removedTargetIds||[];n=new jl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wN(i,s),a=r.targetId;n=new zT(a,o)}}return n}function bN(t,e){let n;if(e instanceof ja)n={update:Iv(t,e.key,e.value)};else if(e instanceof $T)n={delete:xf(t,e.key)};else if(e instanceof Hr)n={update:Iv(t,e.key,e.data),updateMask:$N(e.fieldMask)};else{if(!(e instanceof yN))return G();n={verify:xf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cu)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function DN(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(X.min())&&(o=Pn(s)),new pN(o,i.transformResults||[])}(n,e))):[]}function ON(t,e){return{documents:[Af(t,e.path)]}}function LN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Af(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Af(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return QT(hn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Bi(h.field),direction:jN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Sf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function VN(t){let e=CN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=GT(h);return f instanceof hn&&TT(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Co(zi(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Rc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,g=h.values||[];return new Ru(g,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,g=h.values||[];return new Ru(g,f)}(n.endAt)),tN(e,i,o,s,a,"F",l,u)}function MN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>GT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function jN(t){return xN[t]}function UN(t){return AN[t]}function FN(t){return kN[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function zi(t){return ct.fromServerFormat(t.fieldPath)}function QT(t){return t instanceof Ue?function(n){if(n.op==="=="){if(uv(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(lv(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uv(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(lv(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:UN(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>QT(i));return r.length===1?r[0]:{compositeFilter:{op:FN(n.op),filters:r}}}(t):G()}function $N(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.ht=e}}function zN(t){const e=VN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?If(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.an=new HN}addToCollectionParentIndex(e,n){return this.an.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Lr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class HN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ps(0)}static Ln(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changes=new zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,Vt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=bo(),a=function(){return bo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Hr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Do(c.mutation,u,c.mutation.getFieldMask(),Be.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new KN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bo();let i=new Se((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bT();c.forEach(f=>{if(!s.has(f)){const g=UT(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(ni());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:NT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(h,f){return new Ma(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ut.newInvalidDocument(c)))});let a=mo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Do(c.mutation,u,Vt.empty(),Be.now()),Cc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return C.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:zN(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.overlays=new Se(z.comparator),this.Pr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ni();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=ni(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ni(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ni(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _N(n,r));let s=this.Pr.get(n);s===void 0&&(s=te(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.Ir=new ft(We.dr),this.Tr=new ft(We.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new We(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new We(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new z(new fe([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new z(new fe([])),r=new We(n,e),i=new We(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return z.comparator(e.key,n.key)||oe(e.yr,n.yr)}static Er(e,n){return oe(e.yr,n.yr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ft(We.dr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(oe);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new We(new z(s),0);let a=new ft(oe);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),C.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return C.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new We(n,0),i=this.Sr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.Fr=e,this.docs=function(){return new Se(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||jC(MC(c),r)<=0||(i.has(c.key)||Cc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Mr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZN(this)}getSize(e){return C.resolve(this.size)}}class ZN extends qN{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.persistence=e,this.Or=new zs(n=>hm(n),fm),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Nr=0,this.Br=new _m,this.targetCount=0,this.Lr=Ps.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),C.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Qn(n),C.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.kr={},this.overlays={},this.qr=new lm(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new eb(this),this.indexManager=new WN,this.remoteDocumentCache=function(i){return new JN(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new BN(n),this.Ur=new QN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new XN(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new nb(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return C.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class nb extends FC{constructor(e){super(),this.currentSequenceNumber=e}}class wm{constructor(e){this.persistence=e,this.jr=new _m,this.Hr=null}static Jr(e){return new wm(e)}get Yr(){if(this.Hr)return this.Hr;throw G()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),C.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Yr,r=>{const i=z.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return C.or([()=>C.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Em(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rb;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(ro()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",$i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),C.resolve()):(ro()<=re.DEBUG&&U("QueryEngine","Query:",$i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(ro()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",$i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):C.resolve())}Hi(e,n){if(fv(n))return C.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=If(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,If(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return fv(n)||i.isEqual(X.min())?C.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?C.resolve(null):(ro()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$i(n)),this.ts(e,o,n,VC(i,-1)).next(a=>a))})}Xi(e,n){let r=new ft(PT(e));return n.forEach((i,s)=>{Cc(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return ro()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$i(n)),this.ji.getDocumentsMatchingQuery(e,n,Lr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Se(oe),this.ss=new zs(s=>hm(s),fm),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GN(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function ob(t,e,n,r){return new sb(t,e,n,r)}async function XT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function ab(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let g=C.resolve();return f.forEach(y=>{g=g.next(()=>c.getEntry(l,y)).next(_=>{const T=u.docVersions.get(y);me(T!==null),_.version.compareTo(T)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function lb(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(_,T,m){return _.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,g,c)&&a.push(n.Kr.updateTargetData(s,g))});let l=Yn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ub(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(X.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function ub(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function cb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hb(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Rf(t,e,n){const r=Z(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Va(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Sv(t,e,n){const r=Z(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=Z(l),f=h.ss.get(c);return f!==void 0?C.resolve(h.rs.get(f)):h.Kr.getTargetData(u,c)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(a=>(fb(r,rN(e),a),{documents:a,Ps:s})))}function fb(t,e,n){let r=t.os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class xv{constructor(){this.activeTargetIds=uN()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pb{constructor(){this.ro=new xv,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=null;function jd(){return wl===null?wl=function(){return 268435456+Math.round(2147483648*Math.random())}():wl++,"0x"+wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class vb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=jd(),l=this.Do(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw xs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=gb[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=jd();return new Promise((o,a)=>{const l=new xC;l.setWithCredentials(!0),l.listenOnce(IC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vd.NO_ERROR:const c=l.getResponseJson();U(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Vd.TIMEOUT:U(ot,`RPC '${e}' ${s} timed out`),a(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case Vd.HTTP_ERROR:const h=l.getStatus();if(U(ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(T){const m=T.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(g.status);a(new M(y,g.message))}else a(new M(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=jd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=EC(),a=TC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,g=!1;const y=new yb({ho:T=>{g?U(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(f||(U(ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),U(ot,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},Po:()=>h.close()}),_=(T,m,p)=>{T.listen(m,v=>{try{p(v)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,yl.EventType.OPEN,()=>{g||U(ot,`RPC '${e}' stream ${i} transport opened.`)}),_(h,yl.EventType.CLOSE,()=>{g||(g=!0,U(ot,`RPC '${e}' stream ${i} transport closed`),y.mo())}),_(h,yl.EventType.ERROR,T=>{g||(g=!0,xs(ot,`RPC '${e}' stream ${i} transport errored:`,T),y.mo(new M(k.UNAVAILABLE,"The operation could not be completed")))}),_(h,yl.EventType.MESSAGE,T=>{var m;if(!g){const p=T.data[0];me(!!p);const v=p,E=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(E){U(ot,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let P=function(W){const F=Le[W];if(F!==void 0)return BT(F)}(S),R=E.message;P===void 0&&(P=k.INTERNAL,R="Unknown error status: "+S+" with message "+E.message),g=!0,y.mo(new M(P,R)),h.close()}else U(ot,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),_(a,SC.STAT_EVENT,T=>{T.stat===nv.PROXY?U(ot,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===nv.NOPROXY&&U(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return new RN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new ZT(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _b extends eI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=NN(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Pn(o.readTime):X.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=kf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ef(l)?{documents:ON(s,l)}:{query:LN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HT(s,o.resumeToken);const u=Sf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Nu(s,o.snapshotVersion.toTimestamp());const u=Sf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=MN(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=kf(this.serializer),n.removeTarget=e,this.n_(n)}}class wb extends eI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=DN(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.T_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=kf(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bN(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(k.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Qn(n),this.p_=!1):U("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Di(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.F_.add(4),await Fa(u),u.O_.set("Unknown"),u.F_.delete(4),await Lc(u)}(this))})}),this.O_=new Tb(r,i)}}async function Lc(t){if(Di(t))for(const e of t.M_)await e(!0)}async function Fa(t){for(const e of t.M_)await e(!1)}function tI(t,e){const n=Z(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Sm(n)?Im(n):Ws(n).Yo()&&Tm(n,e))}function nI(t,e){const n=Z(t),r=Ws(n);n.v_.delete(e),r.Yo()&&rI(n,e),n.v_.size===0&&(r.Yo()?r.e_():Di(n)&&n.O_.set("Unknown"))}function Tm(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).l_(e)}function rI(t,e){t.N_.Le(e),Ws(t).h_(e)}function Im(t){t.N_=new SN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.O_.y_()}function Sm(t){return Di(t)&&!Ws(t).Jo()&&t.v_.size>0}function Di(t){return Z(t).F_.size===0}function iI(t){t.N_=void 0}async function Sb(t){t.v_.forEach((e,n)=>{Tm(t,e)})}async function xb(t,e){iI(t),Sm(t)?(t.O_.b_(e),Im(t)):t.O_.set("Unknown")}async function Ab(t,e,n){if(t.O_.set("Online"),e instanceof WT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bu(t,r)}else if(e instanceof jl?t.N_.Ge(e):e instanceof zT?t.N_.Xe(e):t.N_.He(e),!n.isEqual(X.min()))try{const r=await JT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(gt.EMPTY_BYTE_STRING,c.snapshotVersion)),rI(s,l);const h=new yr(c.target,l,u,c.sequenceNumber);Tm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await bu(t,r)}}async function bu(t,e,n){if(!Va(e))throw e;t.F_.add(1),await Fa(t),t.O_.set("Offline"),n||(n=()=>JT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Lc(t)})}function sI(t,e){return e().catch(n=>bu(t,n,e))}async function Vc(t){const e=Z(t),n=Mr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;kb(e);)try{const i=await cb(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,Rb(e,i)}catch(i){await bu(e,i)}oI(e)&&aI(e)}function kb(t){return Di(t)&&t.C_.length<10}function Rb(t,e){t.C_.push(e);const n=Mr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function oI(t){return Di(t)&&!Mr(t).Jo()&&t.C_.length>0}function aI(t){Mr(t).start()}async function Pb(t){Mr(t).A_()}async function Cb(t){const e=Mr(t);for(const n of t.C_)e.d_(n.mutations)}async function Nb(t,e,n){const r=t.C_.shift(),i=gm.from(r,e,n);await sI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vc(t)}async function bb(t,e){e&&Mr(t).I_&&await async function(r,i){if(function(o){return EN(o)&&o!==k.ABORTED}(i.code)){const s=r.C_.shift();Mr(r).Xo(),await sI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vc(r)}}(t,e),oI(t)&&aI(t)}async function kv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Di(n);n.F_.add(3),await Fa(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Lc(n)}async function Db(t,e){const n=Z(t);e?(n.F_.delete(2),await Lc(n)):e||(n.F_.add(2),await Fa(n),n.O_.set("Unknown"))}function Ws(t){return t.B_||(t.B_=function(n,r,i){const s=Z(n);return s.V_(),new _b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:Sb.bind(null,t),Eo:xb.bind(null,t),c_:Ab.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Sm(t)?Im(t):t.O_.set("Unknown")):(await t.B_.stop(),iI(t))})),t.B_}function Mr(t){return t.L_||(t.L_=function(n,r,i){const s=Z(n);return s.V_(),new wb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:Pb.bind(null,t),Eo:bb.bind(null,t),E_:Cb.bind(null,t),T_:Nb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Vc(t)):(await t.L_.stop(),t.C_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Va(t))return new M(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.k_=new Se(z.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):G():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cs(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.Q_=void 0,this.listeners=[]}}class Lb{constructor(){this.queries=new zs(e=>RT(e),Pc),this.onlineState="Unknown",this.K_=new Set}}async function lI(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ob),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Am(o,`Initialization of query '${$i(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&km(n)}async function uI(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Vb(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&km(n)}function Mb(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function km(t){t.K_.forEach(e=>{e.next()})}class cI{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.key=e}}class hI{constructor(e){this.key=e}}class jb{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=te(),this.mutatedKeys=te(),this.ua=PT(e),this.ca=new ps(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Rv,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Cc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),T=!0):this.Ia(f,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(f,g){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return y(f)-y(g)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Cs(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Rv,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=te(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new hI(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new dI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=te();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Cs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Ub{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Fb{constructor(e){this.key=e,this.ma=!1}}class $b{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new zs(a=>RT(a),Pc),this.pa=new Map,this.ya=new Set,this.wa=new Se(z.comparator),this.Sa=new Map,this.ba=new _m,this.Da={},this.Ca=new Map,this.va=Ps.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Bb(t,e){const n=Jb(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await hb(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await zb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&tI(n.remoteStore,o)}return i}async function zb(t,e,n,r,i){t.Ma=(h,f,g)=>async function(_,T,m,p){let v=T.view.ha(m);v.es&&(v=await Sv(_.localStore,T.query,!1).then(({documents:P})=>T.view.ha(P,v)));const E=p&&p.targetChanges.get(T.targetId),S=T.view.applyChanges(v,_.isPrimaryClient,E);return Cv(_,T.targetId,S.Ea),S.snapshot}(t,h,f,g);const s=await Sv(t.localStore,e,!0),o=new jb(e,s.Ps),a=o.ha(s.documents),l=Ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Cv(t,n,u.Ea);const c=new Ub(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function Wb(t,e){const n=Z(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Pc(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nI(n.remoteStore,r.targetId),Pf(n,r.targetId)}).catch(La)):(Pf(n,r.targetId),await Rf(n.localStore,r.targetId,!0))}async function Hb(t,e,n){const r=Zb(t);try{const i=await function(o,a){const l=Z(o),u=Be.now(),c=a.reduce((g,y)=>g.add(y.key),te());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Yn(),_=te();return l._s.getEntries(g,c).next(T=>{y=T,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(T=>{h=T;const m=[];for(const p of a){const v=gN(p,h.get(p.key).overlayedDocument);v!=null&&m.push(new Hr(p.key,v,_T(v.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,m,a)}).next(T=>{f=T;const m=T.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(g,T.batchId,m)})}).then(()=>({batchId:f.batchId,changes:NT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Se(oe)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await $a(r,i.changes),await Vc(r.remoteStore)}catch(i){const s=Am(i,"Failed to persist write");n.reject(s)}}async function fI(t,e){const n=Z(t);try{const r=await lb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?me(o.ma):i.removedDocuments.size>0&&(me(o.ma),o.ma=!1))}),await $a(n,r,e)}catch(r){await La(r)}}function Pv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.U_(a)&&(u=!0)}),u&&km(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Se(z.comparator);o=o.insert(s,ut.newNoDocument(s,X.min()));const a=te().add(s),l=new Dc(X.min(),new Map,new Se(oe),o,a);await fI(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Rm(r)}else await Rf(r.localStore,e,!1).then(()=>Pf(r,e,n)).catch(La)}async function Kb(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await ab(n.localStore,e);mI(n,r,null),pI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $a(n,i)}catch(i){await La(i)}}async function Gb(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(me(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mI(r,e,n),pI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $a(r,i)}catch(i){await La(i)}}function pI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function mI(t,e,n){const r=Z(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Pf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||gI(t,r)})}function gI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(nI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Rm(t))}function Cv(t,e,n){for(const r of n)r instanceof dI?(t.ba.addReference(r.key,e),Qb(t,r)):r instanceof hI?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||gI(t,r.key)):G()}function Qb(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ya.add(r),Rm(t))}function Rm(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new z(fe.fromString(e)),r=t.va.next();t.Sa.set(r,new Fb(n)),t.wa=t.wa.insert(n,r),tI(t.remoteStore,new yr(kn(pm(n.path)),r,"TargetPurposeLimboResolution",lm.ae))}}async function $a(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Em.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,f=>C.forEach(f.Qi,g=>c.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>C.forEach(f.Ki,g=>c.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Va(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const g=c.rs.get(f),y=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(f,_)}}}(r.localStore,s))}async function Yb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await XT(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new M(k.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $a(n,r.cs)}}function Xb(t,e){const n=Z(t),r=n.Sa.get(e);if(r&&r.ma)return te().add(r.key);{let i=te();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Jb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qb.bind(null,e),e.fa.c_=Vb.bind(null,e.eventManager),e.fa.xa=Mb.bind(null,e.eventManager),e}function Zb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class Nv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ob(this.persistence,new ib,e.initialUser,this.serializer)}createPersistence(e){return new tb(wm.Jr,this.serializer)}createSharedClientState(e){return new pb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yb.bind(null,this.syncEngine),await Db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lb}()}createDatastore(e){const n=Oc(e.databaseInfo.databaseId),r=function(s){return new vb(s)}(e.databaseInfo);return function(s,o,a,l){return new Eb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Ib(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pv(this.syncEngine,n,0),function(){return Av.C()?new Av:new mb}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new $b(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Fa(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=gT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rD(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>kv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>kv(e.remoteStore,s)),t._onlineComponents=e}function nD(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nD(n))throw n;xs("Error using user provided cache. Falling back to memory cache: "+n),await Fd(t,new Nv)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Fd(t,new Nv);return t._offlineComponents}async function vI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await bv(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await bv(t,new eD))),t._onlineComponents}function iD(t){return vI(t).then(e=>e.syncEngine)}async function _I(t){const e=await vI(t),n=e.eventManager;return n.onListen=Bb.bind(null,e.syncEngine),n.onUnlisten=Wb.bind(null,e.syncEngine),n}function sD(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new yI({next:f=>{o.enqueueAndForget(()=>uI(s,h));const g=f.docs.has(a);!g&&f.fromCache?u.reject(new M(k.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&l&&l.source==="server"?u.reject(new M(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new cI(pm(a.path),c,{includeMetadataChanges:!0,Z_:!0});return lI(s,h)}(await _I(t),t.asyncQueue,e,n,r)),r.promise}function oD(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new yI({next:f=>{o.enqueueAndForget(()=>uI(s,h)),f.fromCache&&l.source==="server"?u.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new cI(a,c,{includeMetadataChanges:!0,Z_:!0});return lI(s,h)}(await _I(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e,n){if(!n)throw new M(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aD(t,e,n,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ov(t){if(!z.isDocumentKey(t))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lv(t){if(z.isDocumentKey(t))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kC;switch(r.type){case"firstParty":return new NC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dv.get(n);r&&(U("ComponentProvider","Removing Datastore"),Dv.delete(n),r.terminate())}(this),Promise.resolve()}}function lD(t,e,n,r={}){var i;const s=(t=Xn(t,jc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=iE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new RC(new mT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Cr extends Hs{constructor(e,n,r){super(e,n,pm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new z(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function uD(t,e,...n){if(t=le(t),EI("collection","path",e),t instanceof jc){const r=fe.fromString(e,...n);return Lv(r),new Cr(t,null,r)}{if(!(t instanceof Tt||t instanceof Cr))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Lv(r),new Cr(t.firestore,null,r)}}function ui(t,e,...n){if(t=le(t),arguments.length===1&&(e=gT.V()),EI("doc","path",e),t instanceof jc){const r=fe.fromString(e,...n);return Ov(r),new Tt(t,null,new z(r))}{if(!(t instanceof Tt||t instanceof Cr))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ov(r),new Tt(t.firestore,t instanceof Cr?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new ZT(this,"async_queue_retry"),this.ou=()=>{const n=Ud();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Ud();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new zn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Va(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=xm.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&G()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Ba extends jc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new cD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TI(this),this._firestoreClient.terminate()}}function dD(t,e){const n=typeof t=="object"?t:dc(),r=typeof t=="string"?t:e||"(default)",i=Br(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tE("firestore");s&&lD(i,...s)}return i}function Pm(t){return t._firestoreClient||TI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new zC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,wI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(gt.fromBase64String(e))}catch(n){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^__.*__$/;class fD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ja(e,this.data,n,this.fieldTransforms)}}class II{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class bm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new bm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Du(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(SI(this.Tu)&&hD.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class pD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oc(e)}wu(e,n,r,i=!1){return new bm({Tu:e,methodName:n,yu:r,path:ct.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new pD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mD(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Om("Data must be an object, but it was:",o,r);const a=xI(r,o);let l,u;if(s.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Cf(e,h,n);if(!o.contains(f))throw new M(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kI(c,f)||c.push(f)}l=new Vt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new fD(new kt(a),l,u)}class Fc extends Cm{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fc}}function gD(t,e,n,r){const i=t.wu(1,e,n);Om("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();bi(r,(l,u)=>{const c=Lm(e,l,n);u=le(u);const h=i.mu(c);if(u instanceof Fc)s.push(c);else{const f=za(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Vt(s);return new II(o,a,i.fieldTransforms)}function yD(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Cf(e,r,n)],l=[i];if(s.length%2!=0)throw new M(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Cf(e,s[f])),l.push(s[f+1]);const u=[],c=kt.empty();for(let f=a.length-1;f>=0;--f)if(!kI(u,a[f])){const g=a[f];let y=l[f];y=le(y);const _=o.mu(g);if(y instanceof Fc)u.push(g);else{const T=za(y,_);T!=null&&(u.push(g),c.set(g,T))}}const h=new Vt(u);return new II(c,h,o.fieldTransforms)}function vD(t,e,n,r=!1){return za(n,t.wu(r?4:3,e))}function za(t,e){if(AI(t=le(t)))return Om("Unsupported field value:",e,t),xI(t,e);if(t instanceof Cm)return function(r,i){if(!SI(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=za(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Nm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:HT(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Mc(r)}`)}(t,e)}function xI(t,e){const n={};return yT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=za(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Nm||t instanceof Ns||t instanceof Tt||t instanceof Cm)}function Om(t,e,n){if(!AI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Cf(t,e,n){if((e=le(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return Lm(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const _D=new RegExp("[~\\*/\\[\\]]");function Lm(t,e,n){if(e.search(_D)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(k.INVALID_ARGUMENT,a+t+l)}function kI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wD extends RI{data(){return super.data()}}function PI(t,e){return typeof e=="string"?Lm(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vm{}class TD extends Vm{}function ID(t,e,...n){let r=[];e instanceof Vm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof jm).length,a=s.filter(l=>l instanceof Mm).length;if(o>1||o>0&&a>0)throw new M(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mm extends TD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mm(e,n,r)}_apply(e){const n=this._parse(e);return CI(e._query,n),new Hs(e.firestore,e.converter,Tf(e._query,n))}_parse(e){const n=Dm(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new M(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){jv(h,c);const g=[];for(const y of h)g.push(Mv(l,s,y));f={arrayValue:{values:g}}}else f=Mv(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||jv(h,c),f=vD(a,o,h,c==="in"||c==="not-in");return Ue.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class jm extends Vm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)CI(o,l),o=Tf(o,l)}(e._query,n),new Hs(e.firestore,e.converter,Tf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mv(t,e,n){if(typeof(n=le(n))=="string"){if(n==="")throw new M(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kT(e)&&n.indexOf("/")!==-1)throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!z.isDocumentKey(r))throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return av(t,new z(r))}if(n instanceof Tt)return av(t,n._key);throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function jv(t,e){if(!Array.isArray(t)||t.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CI(t,e){if(e.isInequality()){const r=mm(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=AT(t);s!==null&&SD(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SD(t,e,n){if(!n.isEqual(e))throw new M(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xD{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Nm(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);me(YT(r));const i=new pa(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NI extends RI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends NI{data(e={}){return super.data(e)}}class kD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:RD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){t=Xn(t,Tt);const e=Xn(t.firestore,Ba);return sD(Pm(e),t._key).then(n=>CD(e,t,n))}class bI extends xD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function PD(t){t=Xn(t,Hs);const e=Xn(t.firestore,Ba),n=Pm(e),r=new bI(e);return ED(t._query),oD(n,t._query).then(i=>new kD(e,r,t,i))}function DI(t,e,n){t=Xn(t,Tt);const r=Xn(t.firestore,Ba),i=AD(t.converter,e,n);return OI(r,[mD(Dm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Nf(t,e,n,...r){t=Xn(t,Tt);const i=Xn(t.firestore,Ba),s=Dm(i);let o;return o=typeof(e=le(e))=="string"||e instanceof Uc?yD(s,"updateDoc",t._key,e,n,r):gD(s,"updateDoc",t._key,e),OI(i,[o.toMutation(t._key,Rn.exists(!0))])}function OI(t,e){return function(r,i){const s=new zn;return r.asyncQueue.enqueueAndForget(async()=>Hb(await iD(r),i,s)),s.promise}(Pm(t),e)}function CD(t,e,n){const r=n.docs.get(e._key),i=new bI(t);return new NI(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Bs=i})(Ci),cn(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ba(new PC(r.getProvider("auth-internal")),new DC(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bt(rv,"4.2.0",e),bt(rv,"4.2.0","esm2017")})();var ND="firebase",bD="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(ND,bD,"app");const DD=(t,e)=>e.some(n=>t instanceof n);let Uv,Fv;function OD(){return Uv||(Uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LD(){return Fv||(Fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LI=new WeakMap,bf=new WeakMap,VI=new WeakMap,$d=new WeakMap,Um=new WeakMap;function VD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LI.set(n,t)}).catch(()=>{}),Um.set(e,t),e}function MD(t){if(bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jD(t){Df=t(Df)}function UD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return VI.set(r,e.sort?e.sort():[e]),Nr(r)}:LD().includes(t)?function(...e){return t.apply(Bd(this),e),Nr(LI.get(this))}:function(...e){return Nr(t.apply(Bd(this),e))}}function FD(t){return typeof t=="function"?UD(t):(t instanceof IDBTransaction&&MD(t),DD(t,OD())?new Proxy(t,Df):t)}function Nr(t){if(t instanceof IDBRequest)return VD(t);if($d.has(t))return $d.get(t);const e=FD(t);return e!==t&&($d.set(t,e),Um.set(e,t)),e}const Bd=t=>Um.get(t);function $D(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const BD=["get","getKey","getAll","getAllKeys","count"],zD=["put","add","delete","clear"],zd=new Map;function $v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zd.set(e,s),s}jD(t=>({...t,get:(e,n,r)=>$v(e,n)||t.get(e,n,r),has:(e,n)=>!!$v(e,n)||t.has(e,n)}));const MI="@firebase/installations",Fm="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1e4,UI=`w:${Fm}`,FI="FIS_v2",WD="https://firebaseinstallations.googleapis.com/v1",HD=60*60*1e3,qD="installations",KD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new Pi(qD,KD,GD);function $I(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI({projectId:t}){return`${WD}/projects/${t}/installations`}function zI(t){return{token:t.token,requestStatus:2,expiresIn:YD(t.expiresIn),creationTime:Date.now()}}async function WI(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function HI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QD(t,{refreshToken:e}){const n=HI(t);return n.append("Authorization",XD(e)),n}async function qI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YD(t){return Number(t.replace("s","000"))}function XD(t){return`${FI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=BI(t),i=HI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:FI,appId:t.appId,sdkVersion:UI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:zI(u.authToken)}}else throw await WI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=/^[cdef][\w-]{21}$/,Of="";function t2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n2(t);return e2.test(n)?n:Of}catch{return Of}}function n2(t){return ZD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new Map;function QI(t,e){const n=$c(t);YI(n,e),r2(n,e)}function YI(t,e){const n=GI.get(t);if(n)for(const r of n)r(e)}function r2(t,e){const n=i2();n&&n.postMessage({key:t,fid:e}),s2()}let ri=null;function i2(){return!ri&&"BroadcastChannel"in self&&(ri=new BroadcastChannel("[Firebase] FID Change"),ri.onmessage=t=>{YI(t.data.key,t.data.fid)}),ri}function s2(){GI.size===0&&ri&&(ri.close(),ri=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="firebase-installations-database",a2=1,Ti="firebase-installations-store";let Wd=null;function $m(){return Wd||(Wd=$D(o2,a2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}})),Wd}async function Ou(t,e){const n=$c(t),i=(await $m()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&QI(t,e.fid),e}async function XI(t){const e=$c(t),r=(await $m()).transaction(Ti,"readwrite");await r.objectStore(Ti).delete(e),await r.done}async function Bc(t,e){const n=$c(t),i=(await $m()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&QI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t){let e;const n=await Bc(t.appConfig,r=>{const i=l2(r),s=u2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Of?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function l2(t){const e=t||{fid:t2(),registrationStatus:0};return JI(e)}function u2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:d2(t)}:{installationEntry:e}}async function c2(t,e){try{const n=await JD(t,e);return Ou(t.appConfig,n)}catch(n){throw $I(n)&&n.customData.serverCode===409?await XI(t.appConfig):await Ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function d2(t){let e=await Bv(t.appConfig);for(;e.registrationStatus===1;)await KI(100),e=await Bv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bm(t);return r||n}return e}function Bv(t){return Bc(t,e=>{if(!e)throw Ei.create("installation-not-found");return JI(e)})}function JI(t){return h2(t)?{fid:t.fid,registrationStatus:0}:t}function h2(t){return t.registrationStatus===1&&t.registrationTime+jI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2({appConfig:t,heartbeatServiceProvider:e},n){const r=p2(t,n),i=QD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:UI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qI(()=>fetch(r,a));if(l.ok){const u=await l.json();return zI(u)}else throw await WI("Generate Auth Token",l)}function p2(t,{fid:e}){return`${BI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t,e=!1){let n;const r=await Bc(t.appConfig,s=>{if(!ZI(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&y2(o))return s;if(o.requestStatus===1)return n=m2(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const a=_2(s);return n=g2(t,a),a}});return n?await n:r.authToken}async function m2(t,e){let n=await zv(t.appConfig);for(;n.authToken.requestStatus===1;)await KI(100),n=await zv(t.appConfig);const r=n.authToken;return r.requestStatus===0?zm(t,e):r}function zv(t){return Bc(t,e=>{if(!ZI(e))throw Ei.create("not-registered");const n=e.authToken;return w2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function g2(t,e){try{const n=await f2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ou(t.appConfig,r),n}catch(n){if($I(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await XI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ou(t.appConfig,r)}throw n}}function ZI(t){return t!==void 0&&t.registrationStatus===2}function y2(t){return t.requestStatus===2&&!v2(t)}function v2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HD}function _2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function w2(t){return t.requestStatus===1&&t.requestTime+jI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bm(e);return r?r.catch(console.error):zm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e=!1){const n=t;return await I2(n),(await zm(n,e)).token}async function I2(t){const{registrationPromise:e}=await Bm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){if(!t||!t.options)throw Hd("App Configuration");if(!t.name)throw Hd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hd(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="installations",x2="installations-internal",A2=t=>{const e=t.getProvider("app").getImmediate(),n=S2(e),r=Br(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},k2=t=>{const e=t.getProvider("app").getImmediate(),n=Br(e,e1).getImmediate();return{getId:()=>E2(n),getToken:i=>T2(n,i)}};function R2(){cn(new Jt(e1,A2,"PUBLIC")),cn(new Jt(x2,k2,"PRIVATE"))}R2();bt(MI,Fm);bt(MI,Fm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="analytics",P2="firebase_id",C2="origin",N2=60*1e3,b2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new Pi("analytics","Analytics",D2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){if(!t.startsWith(Wm)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function t1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function L2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function V2(t,e){const n=L2("firebase-js-sdk-policy",{createScriptURL:O2}),r=document.createElement("script"),i=`${Wm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function M2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function j2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await t1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Dt.error(a)}t("config",i,s)}async function U2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await t1(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Dt.error(s)}}function F2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await U2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await j2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Dt.error(a)}}return i}function $2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=F2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function B2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=30,W2=1e3;class H2{constructor(e={},n=W2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const n1=new H2;function q2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function K2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:q2(r)},s=b2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function G2(t,e=n1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new X2;return setTimeout(async()=>{a.abort()},n!==void 0?n:N2),r1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function r1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=n1){var s;const{appId:o,measurementId:a}=t;try{await Q2(r,e)}catch(l){if(a)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await K2(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Y2(u)){if(i.deleteThrottleMetadata(o),a)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ly(n,i.intervalMillis,z2):Ly(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Dt.debug(`Calling attemptFetch again in ${c} millis`),r1(t,h,r,i)}}function Q2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Y2(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class X2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function J2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(){if(oE())try{await aE()}catch(t){return Dt.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eO(t,e,n,r,i,s,o){var a;const l=G2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Dt.error(g)),e.push(l);const u=Z2().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);B2(s)||V2(s,c.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[C2]="firebase",f.update=!0,h!=null&&(f[P2]=h),i("config",c.measurementId,f),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.app=e}_delete(){return delete Oo[this.app.options.appId],Promise.resolve()}}let Oo={},Wv=[];const Hv={};let qd="dataLayer",nO="gtag",qv,i1,Kv=!1;function rO(){const t=[];if(sE()&&t.push("This is a browser extension environment."),iR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function iO(t,e,n){rO();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(Oo[r]!=null)throw Ut.create("already-exists",{id:r});if(!Kv){M2(qd);const{wrappedGtag:s,gtagCore:o}=$2(Oo,Wv,Hv,qd,nO);i1=s,qv=o,Kv=!0}return Oo[r]=eO(t,Wv,Hv,e,qv,qd,n),new tO(t)}function sO(t=dc()){t=le(t);const e=Br(t,Lu);return e.isInitialized()?e.getImmediate():oO(t)}function oO(t,e={}){const n=Br(t,Lu);if(n.isInitialized()){const i=n.getImmediate();if(na(e,n.getOptions()))return i;throw Ut.create("already-initialized")}return n.initialize({options:e})}function aO(t,e,n,r){t=le(t),J2(i1,Oo[t.app.options.appId],e,n,r).catch(i=>Dt.error(i))}const Gv="@firebase/analytics",Qv="0.10.0";function lO(){cn(new Jt(Lu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return iO(r,i,n)},"PUBLIC")),cn(new Jt("analytics-internal",t,"PRIVATE")),bt(Gv,Qv),bt(Gv,Qv,"esm2017");function t(e){try{const n=e.getProvider(Lu).getImmediate();return{logEvent:(r,i,s)=>aO(n,r,i,s)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}lO();function Hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yv(t){return t!==void 0&&t.enterprise!==void 0}class uO{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function s1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cO=s1,o1=new Pi("auth","Firebase",s1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new cc("@firebase/auth");function dO(t,...e){Vu.logLevel<=re.WARN&&Vu.warn(`Auth (${Ci}): ${t}`,...e)}function Fl(t,...e){Vu.logLevel<=re.ERROR&&Vu.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw qm(t,...e)}function Cn(t,...e){return qm(t,...e)}function hO(t,e,n){const r=Object.assign(Object.assign({},cO()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function qm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o1.create(t,...e)}function q(t,e,...n){if(!t)throw qm(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fl(e),new Error(e)}function Jn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fO(){return Xv()==="http:"||Xv()==="https:"}function Xv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fO()||sE()||"connection"in navigator)?navigator.onLine:!0}function mO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=eR()||nR()}get(){return pO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=new Wa(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return l1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),a1.fetch()(u1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function l1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gO),e);try{const i=new vO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw El(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hO(t,c,u);fn(t,c)}}catch(i){if(i instanceof Zt)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Ha(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Km(t.config,i):`${t.config.apiScheme}://${i}`}class vO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),yO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}async function _O(t,e){return tr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function EO(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TO(t,e=!1){const n=le(t),r=await n.getIdToken(e),i=Gm(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo(Kd(i.auth_time)),issuedAtTime:Lo(Kd(i.iat)),expirationTime:Lo(Kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kd(t){return Number(t)*1e3}function Gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Z0(n);return i?JSON.parse(i):(Fl("Failed to decode base64 JWT payload"),null)}catch(i){return Fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IO(t){const e=Gm(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&SO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ii(t,EO(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RO(s.providerUserInfo):[],a=kO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new c1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function AO(t){const e=le(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RO(t){return t.map(e=>{var{providerId:n}=e,r=Hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e){const n=await l1(t,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=u1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",a1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _a;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new c1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TO(this,e)}reload(){return AO(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ii(this,wO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:S,providerData:P,stsTokenManager:R}=n;q(v&&R,e,"internal-error");const b=_a.fromJSON(this.name,R);q(typeof v=="string",e,"internal-error"),rr(h,e.name),rr(f,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof S=="boolean",e,"internal-error"),rr(g,e.name),rr(y,e.name),rr(_,e.name),rr(T,e.name),rr(m,e.name),rr(p,e.name);const W=new ci({uid:v,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:b,createdAt:m,lastLoginAt:p});return P&&Array.isArray(P)&&(W.providerData=P.map(F=>Object.assign({},F))),T&&(W._redirectEventId=T),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new _a;i.updateFromServerResponse(n);const s=new ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;function $n(t){Jn(t instanceof Function,"Expected a class definition");let e=Jv.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d1.type="NONE";const Zv=d1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$l(this.userKey,i.apiKey,s),this.fullPersistenceKey=$l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms($n(Zv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(Zv);const o=$l(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ci._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(p1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g1(e))return"Blackberry";if(y1(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||f1(e))&&!e.includes("edge/"))return"Chrome";if(m1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function h1(t=mt()){return/firefox\//i.test(t)}function Qm(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f1(t=mt()){return/crios\//i.test(t)}function p1(t=mt()){return/iemobile/i.test(t)}function m1(t=mt()){return/android/i.test(t)}function g1(t=mt()){return/blackberry/i.test(t)}function y1(t=mt()){return/webos/i.test(t)}function zc(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CO(t=mt()){var e;return zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NO(){return rR()&&document.documentMode===10}function v1(t=mt()){return zc(t)||m1(t)||y1(t)||g1(t)||/windows phone/i.test(t)||p1(t)}function bO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t,e=[]){let n;switch(t){case"Browser":n=e_(mt());break;case"Worker":n=`${e_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e={}){return tr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=6;class VO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t_(this),this.idTokenSubscription=new t_(this),this.beforeStateQueue=new DO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?le(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OO(this),n=new VO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return le(t)}class t_{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function w1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jO().appendChild(r)})}function UO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FO="https://www.google.com/recaptcha/enterprise.js?render=",$O="recaptcha-enterprise",BO="NO_RECAPTCHA";class zO{constructor(e){this.type=$O,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_O(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new uO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Yv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}w1(FO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ju(t,e,n,r=!1){const i=new zO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e){const n=Br(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(na(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function HO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qO(t,e,n){const r=Oi(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=E1(e),{host:o,port:a}=KO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GO()}function E1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KO(t){const e=E1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:n_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:n_(o)}}}function n_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function T1(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}async function QO(t,e){return tr(t,"POST","/v1/accounts:sendOobCode",qr(t,e))}async function YO(t,e){return QO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function JO(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Ym{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ju(e,r,"signInWithPassword");return Gd(e,i)}else return Gd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ju(e,r,"signInWithPassword");return Gd(e,s)}else return Promise.reject(i)});case"emailLink":return XO(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return T1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JO(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="http://localhost";class Si extends Ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:ZO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tL(t){const e=co(ho(t)).link,n=e?co(ho(e)).deep_link_id:null,r=co(ho(t)).deep_link_id;return(r?co(ho(r)).link:null)||r||n||e||t}class Xm{constructor(e){var n,r,i,s,o,a;const l=co(ho(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=eL((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tL(e);try{return new Xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xm.parseLink(n);return q(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends I1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends qa{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends qa{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends qa{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){return Ha(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ci._fromIdTokenResponse(e,r,i),o=r_(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=r_(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function r_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function S1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,s,e,r):s})}async function nL(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ii(t,S1(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Gm(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(t,e,n=!1){const r="signIn",i=await S1(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rL(t,e){return A1(Oi(t),e)}async function iL(t,e){return x1(le(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t,e,n){var r;q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oL(t,e,n){var r;const i=Oi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ju(i,s,"signUpPassword");o=Qd(i,u)}else o=Qd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ju(i,s,"signUpPassword");return Qd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&k1(t),u}),l=await xi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function aL(t,e,n){return rL(le(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k1(t),r})}async function lL(t,e){const n=le(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&sL(n.auth,i,e);const{email:s}=await YO(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ii(r,uL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dL(t,e){return hL(le(t),null,e)}async function hL(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ii(t,T1(r,s));await t._updateTokensIfNecessary(o,!0)}function fL(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function pL(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function mL(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}async function gL(t){return le(t).delete()}const Fu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(){const t=mt();return Qm(t)||zc(t)}const vL=1e3,_L=10;class P1 extends R1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yL()&&bO(),this.fallbackToPolling=v1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_L):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P1.type="LOCAL";const wL=P1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1 extends R1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C1.type="SESSION";const N1=C1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await EL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function IL(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function SL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AL(){return b1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="firebaseLocalStorageDb",kL=1,$u="firebaseLocalStorage",O1="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function RL(){const t=indexedDB.deleteDatabase(D1);return new Ka(t).toPromise()}function Vf(){const t=indexedDB.open(D1,kL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($u,{keyPath:O1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($u)?e(r):(r.close(),await RL(),e(await Vf()))})})}async function i_(t,e,n){const r=Hc(t,!0).put({[O1]:e,value:n});return new Ka(r).toPromise()}async function PL(t,e){const n=Hc(t,!1).get(e),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function s_(t,e){const n=Hc(t,!0).delete(e);return new Ka(n).toPromise()}const CL=800,NL=3;class L1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(AL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SL(),!this.activeServiceWorker)return;this.sender=new TL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vf();return await i_(e,Fu,"1"),await s_(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>i_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>s_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new Ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L1.type="LOCAL";const bL=L1;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t,e){return e?$n(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OL(t){return A1(t.auth,new Zm(t),t.bypassAuthState)}function LL(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),x1(n,new Zm(t),t.bypassAuthState)}async function VL(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),nL(n,new Zm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OL;case"linkViaPopup":case"linkViaRedirect":return VL;case"reauthViaPopup":case"reauthViaRedirect":return LL;default:fn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new Wa(2e3,1e4);class is extends V1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ML.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="pendingRedirect",Bl=new Map;class UL extends V1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await FL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FL(t,e){const n=zL(e),r=BL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $L(t,e){Bl.set(t._key(),e)}function BL(t){return $n(t._redirectPersistence)}function zL(t){return $l(jL,t.config.apiKey,t.name)}async function WL(t,e,n=!1){const r=Oi(t),i=DL(r,e),o=await new UL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=10*60*1e3;class qL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!M1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HL&&this.cachedEventUids.clear(),this.cachedEventUids.has(o_(e))}saveEventToCache(e){this.cachedEventUids.add(o_(e)),this.lastProcessedEventTime=Date.now()}}function o_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function M1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GL(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YL=/^https?/;async function XL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GL(t);for(const n of e)try{if(JL(n))return}catch{}fn(t,"unauthorized-domain")}function JL(t){const e=Lf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YL.test(n))return!1;if(QL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=new Wa(3e4,6e4);function a_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eV(t){return new Promise((e,n)=>{var r,i,s;function o(){a_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{a_(),n(Cn(t,"network-request-failed"))},timeout:ZL.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=UO("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},w1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zl=null,e})}let zl=null;function tV(t){return zl=zl||eV(t),zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=new Wa(5e3,15e3),rV="__/auth/iframe",iV="emulator/auth/iframe",sV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aV(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,iV):`https://${t.config.authDomain}/${rV}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=oV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Aa(r).slice(1)}`}async function lV(t){const e=await tV(t),n=Nn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:aV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},nV.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cV=500,dV=600,hV="_blank",fV="http://localhost";class l_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pV(t,e,n,r=cV,i=dV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=mt().toLowerCase();n&&(a=f1(u)?hV:n),h1(u)&&(e=e||fV,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(CO(u)&&a!=="_self")return mV(e||"",a),new l_(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new l_(h)}function mV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV="__/auth/handler",yV="emulator/auth/handler",vV=encodeURIComponent("fac");async function u_(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof I1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof qa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${vV}=${encodeURIComponent(l)}`:"";return`${_V(t)}?${Aa(a).slice(1)}${u}`}function _V({config:t}){return t.emulator?Km(t,yV):`https://${t.authDomain}/${gV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class wV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N1,this._completeRedirectFn=WL,this._overrideRedirectResult=$L}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await u_(e,n,r,Lf(),i);return pV(e,o,Jm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await u_(e,n,r,Lf(),i);return IL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lV(e),r=new qL(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yd,{type:Yd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yd];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v1()||Qm()||zc()}}const EV=wV;var c_="@firebase/auth",d_="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SV(t){cn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_1(t)},u=new MO(r,i,s,l);return HO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Jt("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new TV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(c_,d_,IV(t)),bt(c_,d_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV=5*60,AV=rE("authIdTokenMaxAge")||xV;let h_=null;const kV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AV)return;const i=n==null?void 0:n.token;h_!==i&&(h_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function j1(t=dc()){const e=Br(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WO(t,{popupRedirectResolver:EV,persistence:[bL,wL,N1]}),r=rE("authTokenSyncURL");if(r){const s=kV(r);pL(n,s,()=>s(n.currentUser)),fL(n,o=>s(o))}const i=eE("auth");return i&&qO(n,`http://${i}`),n}SV("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="firebasestorage.googleapis.com",F1="storageBucket",RV=2*60*1e3,PV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Zt{constructor(e,n,r=0){super(Xd(e),`Firebase Storage: ${n} (${Xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Xd(t){return"storage/"+t}function eg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Pe.UNKNOWN,t)}function CV(t){return new Ce(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NV(t){return new Ce(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Pe.UNAUTHENTICATED,t)}function DV(){return new Ce(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OV(t){return new Ce(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LV(){return new Ce(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VV(){return new Ce(Pe.CANCELED,"User canceled the upload/download.")}function MV(t){return new Ce(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function jV(t){return new Ce(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UV(){return new Ce(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+F1+"' property when initializing the app?")}function FV(){return new Ce(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $V(){return new Ce(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function BV(t){return new Ce(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mf(t){return new Ce(Pe.INVALID_ARGUMENT,t)}function $1(){return new Ce(Pe.APP_DELETED,"The Firebase app was deleted.")}function zV(t){return new Ce(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vo(t,e){return new Ce(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function io(t){throw new Ce(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw jV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},_=n===U1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${T}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const S=v[E],P=S.regex.exec(e);if(P){const R=P[S.indices.bucket];let b=P[S.indices.path];b||(b=""),r=new Mt(R,b),S.postModify(r);break}}if(r==null)throw MV(e);return r}}class WV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(g,l())},T)}function f(){s&&clearTimeout(s)}function g(T,...m){if(u){f();return}if(T){f(),c.call(null,T,...m);return}if(l()||o){f(),c.call(null,T,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function _(T){y||(y=!0,f(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function qV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){return t!==void 0}function GV(t){return typeof t=="object"&&!Array.isArray(t)}function tg(t){return typeof t=="string"||t instanceof String}function f_(t){return ng()&&t instanceof Blob}function ng(){return typeof Blob<"u"&&!tR()}function p_(t,e,n,r){if(r<e)throw Mf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Mf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function B1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(di||(di={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===di.NO_ERROR,l=s.getStatus();if(!a||QV(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===di.ABORT;r(!1,new Tl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Tl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=eg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?$1():VV();o(l)}else{const l=LV();o(l)}};this.canceled_?n(!1,new Tl(!1,null,!0)):this.backoffId_=HV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function XV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tM(t,e,n,r,i,s,o=!0){const a=B1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return ZV(u,e),XV(u,n),JV(u,s),eM(u,r),new YV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rM(...t){const e=nM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ng())return new Blob(t);throw new Ce(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t){if(typeof atob>"u")throw BV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Jd{constructor(e,n){this.data=e,this.contentType=n||null}}function oM(t,e){switch(t){case In.RAW:return new Jd(z1(e));case In.BASE64:case In.BASE64URL:return new Jd(W1(t,e));case In.DATA_URL:return new Jd(lM(e),uM(e))}throw eg()}function z1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aM(t){let e;try{e=decodeURIComponent(t)}catch{throw Vo(In.DATA_URL,"Malformed data URL.")}return z1(e)}function W1(t,e){switch(t){case In.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Vo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Vo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sM(e)}catch(i){throw i.message.includes("polyfill")?i:Vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class H1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Vo(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lM(t){const e=new H1(t);return e.base64?W1(In.BASE64,e.rest):aM(e.rest)}function uM(t){return new H1(t).contentType}function cM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,i="";f_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(f_(this.data_)){const r=this.data_,i=iM(r,e,n);return i===null?null:new fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(ng()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(rM.apply(null,n))}else{const n=e.map(o=>tg(o)?oM(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new fr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){let e;try{e=JSON.parse(t)}catch{return null}return GV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function K1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t,e){return e}class yt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||fM}}let Il=null;function pM(t){return!tg(t)||t.length<2?t:K1(t)}function G1(){if(Il)return Il;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(s,o){return pM(o)}const n=new yt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Il=t,Il}function mM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return mM(r,t),r}function Q1(t,e,n){const r=q1(e);return r===null?null:gM(t,r,n)}function yM(t,e,n,r){const i=q1(e);if(i===null||!tg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),g=qc(f,n,r),y=B1({alt:"media",token:u});return g+y})[0]}function vM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class rg{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){if(!t)throw eg()}function _M(t,e){function n(r,i){const s=Q1(t,i,e);return Y1(s!==null),s}return n}function wM(t,e){function n(r,i){const s=Q1(t,i,e);return Y1(s!==null),yM(s,i,t.host,t._protocol)}return n}function X1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DV():i=bV():n.getStatus()===402?i=NV(t.bucket):n.getStatus()===403?i=OV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function J1(t){const e=X1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=CV(t.path)),s.serverResponse=i.serverResponse,s}return n}function EM(t,e,n){const r=e.fullServerUrl(),i=qc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rg(i,s,wM(t,n),o);return a.errorHandler=J1(e),a}function TM(t,e){const n=e.fullServerUrl(),r=qc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new rg(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=J1(e),a}function IM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function SM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=IM(null,e)),r}function xM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=SM(e,r,i),c=vM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=fr.getBlob(h,r,f);if(g===null)throw FV();const y={name:u.fullPath},_=qc(s,t.host,t._protocol),T="POST",m=t.maxUploadRetryTime,p=new rg(_,T,_M(t,n),m);return p.urlParams=y,p.headers=o,p.body=g.uploadData(),p.errorHandler=X1(e),p}class AM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kM extends AM{initXhr(){this.xhr_.responseType="text"}}function ig(){return new kM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ai(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K1(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zV(e)}}function RM(t,e,n){t._throwIfRoot("uploadBytes");const r=xM(t.storage,t._location,G1(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,ig).then(i=>({metadata:i,ref:t}))}function PM(t){t._throwIfRoot("getDownloadURL");const e=EM(t.storage,t._location,G1());return t.storage.makeRequestWithTokens(e,ig).then(n=>{if(n===null)throw $V();return n})}function CM(t){t._throwIfRoot("deleteObject");const e=TM(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ig)}function NM(t,e){const n=hM(t._location.path,e),r=new Mt(t._location.bucket,n);return new Ai(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t){return/^[A-Za-z]+:\/\//.test(t)}function DM(t,e){return new Ai(t,e)}function Z1(t,e){if(t instanceof sg){const n=t;if(n._bucket==null)throw UV();const r=new Ai(n,n._bucket);return e!=null?Z1(r,e):r}else return e!==void 0?NM(t,e):t}function OM(t,e){if(e&&bM(e)){if(t instanceof sg)return DM(t,e);throw Mf("To use ref(service, url), the first argument must be a Storage instance.")}else return Z1(t,e)}function m_(t,e){const n=e==null?void 0:e[F1];return n==null?null:Mt.makeFromBucketSpec(n,t)}function LM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:iE(i,t.app.options.projectId))}class sg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=U1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RV,this._maxUploadRetryTime=PV,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ai(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WV($1());{const o=tM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const g_="@firebase/storage",y_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="storage";function v_(t,e,n){return t=le(t),RM(t,e,n)}function Wi(t){return t=le(t),PM(t)}function VM(t){return t=le(t),CM(t)}function vo(t,e){return t=le(t),OM(t,e)}function Mo(t=dc(),e){t=le(t);const r=Br(t,eS).getImmediate({identifier:e}),i=tE("storage");return i&&MM(r,...i),r}function MM(t,e,n,r={}){LM(t,e,n,r)}function jM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sg(n,r,i,e,Ci)}function UM(){cn(new Jt(eS,jM,"PUBLIC").setMultipleInstances(!0)),bt(g_,y_,""),bt(g_,y_,"esm2017")}UM();const FM={apiKey:"AIzaSyAxYBlB9fQlXNIPfkhlb5PR4MbEvdnFs08",authDomain:"snapback-b2084.firebaseapp.com",projectId:"snapback-b2084",storageBucket:"snapback-b2084.appspot.com",messagingSenderId:"362009039741",appId:"1:362009039741:web:ad400dbe0b1e8b021e7214",measurementId:"G-Z3BBRJ77WG"},Kc=cE(FM);sO(Kc);const Zn=j1(Kc),br=dD(Kc);Mo(Kc);function $M(){const[t,e]=A.useState(""),[n,r]=A.useState(""),[i,s]=A.useState([]),[o,a]=A.useState([]),[l,u]=A.useState(0),c=6,[h,f]=A.useState(0),g=()=>{const{word:p,hint:v}=Hk();e(p),r(v),s([]),a([]),o.length>=c&&(u(0),f(0))};A.useEffect(()=>{g()},[]);const y=p=>{i.includes(p)||(s([...i,p]),t.includes(p)||a([...o,p]))},_=()=>{u(0)},T=()=>{const p=new Set(t.split(""));return i.filter(E=>p.has(E)).length===p.size?((i.length>0||o.length>0)&&(u(l+1),f(h+1)),e(""),s([]),a([]),g(),"ongoing"):o.length>=c?(m(),"gameover"):"ongoing"},m=async()=>{const p=Zn.currentUser,v=ui(br,"user_scores",p.uid),E=await va(v);if(E.exists()){const S=E.data();Array.isArray(S.score)||(S.score=[]);const P={score:l,timestamp:new Date().toISOString()};S.score.push(P),await Nf(v,{score:S.score}),console.log("Score saved successfully!")}else if(l===0)console.error("Error saving score: Score is not higher.");else{const S={name:p.displayName,email:p.email,score:[{score:l,timestamp:new Date().toISOString()}]};await DI(v,S),console.log("New user document created with score!")}};return d.jsxs("div",{className:"App",children:[d.jsx("h1",{className:"max-lg:text-center text-white lg:text-4xl text-3xl lg:ml-80 mt-6 font-semibold",children:"Hangman Game"}),d.jsx(Wk,{wordToGuess:t,hint:n,guessedLetters:i,incorrectGuesses:o,onNewGame:g,onGuess:y,gameStatus:T,score:l,setScore:u,resetScore:_,totalWordsGuessed:h})]})}var Ga=t=>t.type==="checkbox",ss=t=>t instanceof Date,_t=t=>t==null;const tS=t=>typeof t=="object";var ze=t=>!_t(t)&&!Array.isArray(t)&&tS(t)&&!ss(t),BM=t=>ze(t)&&t.target?Ga(t.target)?t.target.checked:t.target.value:t,zM=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,WM=(t,e)=>t.has(zM(e)),HM=t=>{const e=t.constructor&&t.constructor.prototype;return ze(e)&&e.hasOwnProperty("isPrototypeOf")},og=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function On(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(og&&(t instanceof Blob||t instanceof FileList))&&(n||ze(t)))if(e=n?[]:{},!n&&!HM(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=On(t[r]));else return t;return e}var Qa=t=>Array.isArray(t)?t.filter(Boolean):[],Me=t=>t===void 0,$=(t,e,n)=>{if(!e||!ze(t))return n;const r=Qa(e.split(/[,[\].]+?/)).reduce((i,s)=>_t(i)?i:i[s],t);return Me(r)||r===t?Me(t[e])?n:t[e]:r};const __={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},on={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};vn.createContext(null);var qM=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==on.all&&(e._proxyFormState[o]=!r||on.all),n&&(n[o]=!0),t[o]}});return i},Wt=t=>ze(t)&&!Object.keys(t).length,KM=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Wt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||on.all))},Zd=t=>Array.isArray(t)?t:[t];function GM(t){const e=vn.useRef(t);e.current=t,vn.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Sn=t=>typeof t=="string",QM=(t,e,n,r,i)=>Sn(t)?(r&&e.watch.add(t),$(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),$(n,s))):(r&&(e.watchAll=!0),n),ag=t=>/^\w*$/.test(t),nS=t=>Qa(t.replace(/["|']|\]/g,"").split(/\.|\[/));function _e(t,e,n){let r=-1;const i=ag(e)?[e]:nS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=ze(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var YM=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const jf=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=$(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else ze(o)&&jf(o,e)}}};var w_=t=>({isOnSubmit:!t||t===on.onSubmit,isOnBlur:t===on.onBlur,isOnChange:t===on.onChange,isOnAll:t===on.all,isOnTouch:t===on.onTouched}),E_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),XM=(t,e,n)=>{const r=Qa($(t,n));return _e(r,"root",e[n]),_e(t,n,r),t},ii=t=>typeof t=="boolean",lg=t=>t.type==="file",vr=t=>typeof t=="function",Bu=t=>{if(!og)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Wl=t=>Sn(t),ug=t=>t.type==="radio",zu=t=>t instanceof RegExp;const T_={value:!1,isValid:!1},I_={value:!0,isValid:!0};var rS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Me(t[0].attributes.value)?Me(t[0].value)||t[0].value===""?I_:{value:t[0].value,isValid:!0}:I_:T_}return T_};const S_={isValid:!1,value:null};var iS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,S_):S_;function x_(t,e,n="validate"){if(Wl(t)||Array.isArray(t)&&t.every(Wl)||ii(t)&&!t)return{type:n,message:Wl(t)?t:"",ref:e}}var Fi=t=>ze(t)&&!zu(t)?t:{value:t,message:""},A_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:f,validate:g,name:y,valueAsNumber:_,mount:T,disabled:m}=t._f,p=$(e,y);if(!T||m)return{};const v=o?o[0]:s,E=ee=>{r&&v.reportValidity&&(v.setCustomValidity(ii(ee)?"":ee||""),v.reportValidity())},S={},P=ug(s),R=Ga(s),b=P||R,W=(_||lg(s))&&Me(s.value)&&Me(p)||Bu(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,F=YM.bind(null,y,n,S),ge=(ee,J,ye,nt=Dn.maxLength,rt=Dn.minLength)=>{const xt=ee?J:ye;S[y]={type:ee?nt:rt,message:xt,ref:s,...F(ee?nt:rt,xt)}};if(i?!Array.isArray(p)||!p.length:a&&(!b&&(W||_t(p))||ii(p)&&!p||R&&!rS(o).isValid||P&&!iS(o).isValid)){const{value:ee,message:J}=Wl(a)?{value:!!a,message:a}:Fi(a);if(ee&&(S[y]={type:Dn.required,message:J,ref:v,...F(Dn.required,J)},!n))return E(J),S}if(!W&&(!_t(c)||!_t(h))){let ee,J;const ye=Fi(h),nt=Fi(c);if(!_t(p)&&!isNaN(p)){const rt=s.valueAsNumber||p&&+p;_t(ye.value)||(ee=rt>ye.value),_t(nt.value)||(J=rt<nt.value)}else{const rt=s.valueAsDate||new Date(p),xt=Y=>new Date(new Date().toDateString()+" "+Y),L=s.type=="time",K=s.type=="week";Sn(ye.value)&&p&&(ee=L?xt(p)>xt(ye.value):K?p>ye.value:rt>new Date(ye.value)),Sn(nt.value)&&p&&(J=L?xt(p)<xt(nt.value):K?p<nt.value:rt<new Date(nt.value))}if((ee||J)&&(ge(!!ee,ye.message,nt.message,Dn.max,Dn.min),!n))return E(S[y].message),S}if((l||u)&&!W&&(Sn(p)||i&&Array.isArray(p))){const ee=Fi(l),J=Fi(u),ye=!_t(ee.value)&&p.length>+ee.value,nt=!_t(J.value)&&p.length<+J.value;if((ye||nt)&&(ge(ye,ee.message,J.message),!n))return E(S[y].message),S}if(f&&!W&&Sn(p)){const{value:ee,message:J}=Fi(f);if(zu(ee)&&!p.match(ee)&&(S[y]={type:Dn.pattern,message:J,ref:s,...F(Dn.pattern,J)},!n))return E(J),S}if(g){if(vr(g)){const ee=await g(p,e),J=x_(ee,v);if(J&&(S[y]={...J,...F(Dn.validate,J.message)},!n))return E(J.message),S}else if(ze(g)){let ee={};for(const J in g){if(!Wt(ee)&&!n)break;const ye=x_(await g[J](p,e),v,J);ye&&(ee={...ye,...F(J,ye.message)},E(ye.message),n&&(S[y]=ee))}if(!Wt(ee)&&(S[y]={ref:v,...ee},!n))return S}}return E(!0),S};function JM(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Me(t)?r++:t[e[r++]];return t}function ZM(t){for(const e in t)if(t.hasOwnProperty(e)&&!Me(t[e]))return!1;return!0}function Qe(t,e){const n=Array.isArray(e)?e:ag(e)?[e]:nS(e),r=n.length===1?t:JM(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ze(r)&&Wt(r)||Array.isArray(r)&&ZM(r))&&Qe(t,n.slice(0,-1)),t}function eh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Wu=t=>_t(t)||!tS(t);function si(t,e){if(Wu(t)||Wu(e))return t===e;if(ss(t)&&ss(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ss(s)&&ss(o)||ze(s)&&ze(o)||Array.isArray(s)&&Array.isArray(o)?!si(s,o):s!==o)return!1}}return!0}var sS=t=>t.type==="select-multiple",ej=t=>ug(t)||Ga(t),th=t=>Bu(t)&&t.isConnected,oS=t=>{for(const e in t)if(vr(t[e]))return!0;return!1};function Hu(t,e={}){const n=Array.isArray(t);if(ze(t)||n)for(const r in t)Array.isArray(t[r])||ze(t[r])&&!oS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Hu(t[r],e[r])):_t(t[r])||(e[r]=!0);return e}function aS(t,e,n){const r=Array.isArray(t);if(ze(t)||r)for(const i in t)Array.isArray(t[i])||ze(t[i])&&!oS(t[i])?Me(e)||Wu(n[i])?n[i]=Array.isArray(t[i])?Hu(t[i],[]):{...Hu(t[i])}:aS(t[i],_t(e)?{}:e[i],n[i]):n[i]=!si(t[i],e[i]);return n}var nh=(t,e)=>aS(t,e,Hu(e)),lS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Me(t)?t:e?t===""?NaN:t&&+t:n&&Sn(t)?new Date(t):r?r(t):t;function rh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return lg(e)?e.files:ug(e)?iS(t.refs).value:sS(e)?[...e.selectedOptions].map(({value:n})=>n):Ga(e)?rS(t.refs).value:lS(Me(e.value)?t.ref.value:e.value,t)}var tj=(t,e,n,r)=>{const i={};for(const s of t){const o=$(e,s);o&&_e(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},so=t=>Me(t)?t:zu(t)?t.source:ze(t)?zu(t.value)?t.value.source:t.value:t,nj=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function k_(t,e,n){const r=$(t,n);if(r||ag(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=$(e,s),a=$(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var rj=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,ij=(t,e)=>!Qa($(t,e)).length&&Qe(t,e);const sj={mode:on.onSubmit,reValidateMode:on.onChange,shouldFocusError:!0};function oj(t={},e){let n={...sj,...t},r={submitCount:0,isDirty:!1,isLoading:vr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=ze(n.defaultValues)||ze(n.values)?On(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:On(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:eh(),array:eh(),state:eh()},g=t.resetOptions&&t.resetOptions.keepDirtyValues,y=w_(n.mode),_=w_(n.reValidateMode),T=n.criteriaMode===on.all,m=w=>I=>{clearTimeout(c),c=setTimeout(w,I)},p=async w=>{if(h.isValid||w){const I=n.resolver?Wt((await W()).errors):await ge(i,!0);I!==r.isValid&&f.state.next({isValid:I})}},v=w=>h.isValidating&&f.state.next({isValidating:w}),E=(w,I=[],x,B,V=!0,D=!0)=>{if(B&&x){if(a.action=!0,D&&Array.isArray($(i,w))){const H=x($(i,w),B.argA,B.argB);V&&_e(i,w,H)}if(D&&Array.isArray($(r.errors,w))){const H=x($(r.errors,w),B.argA,B.argB);V&&_e(r.errors,w,H),ij(r.errors,w)}if(h.touchedFields&&D&&Array.isArray($(r.touchedFields,w))){const H=x($(r.touchedFields,w),B.argA,B.argB);V&&_e(r.touchedFields,w,H)}h.dirtyFields&&(r.dirtyFields=nh(s,o)),f.state.next({name:w,isDirty:J(w,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _e(o,w,I)},S=(w,I)=>{_e(r.errors,w,I),f.state.next({errors:r.errors})},P=(w,I,x,B)=>{const V=$(i,w);if(V){const D=$(o,w,Me(x)?$(s,w):x);Me(D)||B&&B.defaultChecked||I?_e(o,w,I?D:rh(V._f)):rt(w,D),a.mount&&p()}},R=(w,I,x,B,V)=>{let D=!1,H=!1;const xe={name:w};if(!x||B){h.isDirty&&(H=r.isDirty,r.isDirty=xe.isDirty=J(),D=H!==xe.isDirty);const be=si($(s,w),I);H=$(r.dirtyFields,w),be?Qe(r.dirtyFields,w):_e(r.dirtyFields,w,!0),xe.dirtyFields=r.dirtyFields,D=D||h.dirtyFields&&H!==!be}if(x){const be=$(r.touchedFields,w);be||(_e(r.touchedFields,w,x),xe.touchedFields=r.touchedFields,D=D||h.touchedFields&&be!==x)}return D&&V&&f.state.next(xe),D?xe:{}},b=(w,I,x,B)=>{const V=$(r.errors,w),D=h.isValid&&ii(I)&&r.isValid!==I;if(t.delayError&&x?(u=m(()=>S(w,x)),u(t.delayError)):(clearTimeout(c),u=null,x?_e(r.errors,w,x):Qe(r.errors,w)),(x?!si(V,x):V)||!Wt(B)||D){const H={...B,...D&&ii(I)?{isValid:I}:{},errors:r.errors,name:w};r={...r,...H},f.state.next(H)}v(!1)},W=async w=>n.resolver(o,n.context,tj(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),F=async w=>{const{errors:I}=await W(w);if(w)for(const x of w){const B=$(I,x);B?_e(r.errors,x,B):Qe(r.errors,x)}else r.errors=I;return I},ge=async(w,I,x={valid:!0})=>{for(const B in w){const V=w[B];if(V){const{_f:D,...H}=V;if(D){const xe=l.array.has(D.name),be=await A_(V,o,T,n.shouldUseNativeValidation&&!I,xe);if(be[D.name]&&(x.valid=!1,I))break;!I&&($(be,D.name)?xe?XM(r.errors,be,D.name):_e(r.errors,D.name,be[D.name]):Qe(r.errors,D.name))}H&&await ge(H,I,x)}}return x.valid},ee=()=>{for(const w of l.unMount){const I=$(i,w);I&&(I._f.refs?I._f.refs.every(x=>!th(x)):!th(I._f.ref))&&en(w)}l.unMount=new Set},J=(w,I)=>(w&&I&&_e(o,w,I),!si(ve(),s)),ye=(w,I,x)=>QM(w,l,{...a.mount?o:Me(I)?s:Sn(w)?{[w]:I}:I},x,I),nt=w=>Qa($(a.mount?o:s,w,t.shouldUnregister?$(s,w,[]):[])),rt=(w,I,x={})=>{const B=$(i,w);let V=I;if(B){const D=B._f;D&&(!D.disabled&&_e(o,w,lS(I,D)),V=Bu(D.ref)&&_t(I)?"":I,sS(D.ref)?[...D.ref.options].forEach(H=>H.selected=V.includes(H.value)):D.refs?Ga(D.ref)?D.refs.length>1?D.refs.forEach(H=>(!H.defaultChecked||!H.disabled)&&(H.checked=Array.isArray(V)?!!V.find(xe=>xe===H.value):V===H.value)):D.refs[0]&&(D.refs[0].checked=!!V):D.refs.forEach(H=>H.checked=H.value===V):lg(D.ref)?D.ref.value="":(D.ref.value=V,D.ref.type||f.values.next({name:w,values:{...o}})))}(x.shouldDirty||x.shouldTouch)&&R(w,V,x.shouldTouch,x.shouldDirty,!0),x.shouldValidate&&Y(w)},xt=(w,I,x)=>{for(const B in I){const V=I[B],D=`${w}.${B}`,H=$(i,D);(l.array.has(w)||!Wu(V)||H&&!H._f)&&!ss(V)?xt(D,V,x):rt(D,V,x)}},L=(w,I,x={})=>{const B=$(i,w),V=l.array.has(w),D=On(I);_e(o,w,D),V?(f.array.next({name:w,values:{...o}}),(h.isDirty||h.dirtyFields)&&x.shouldDirty&&f.state.next({name:w,dirtyFields:nh(s,o),isDirty:J(w,D)})):B&&!B._f&&!_t(D)?xt(w,D,x):rt(w,D,x),E_(w,l)&&f.state.next({...r}),f.values.next({name:w,values:{...o}}),!a.mount&&e()},K=async w=>{const I=w.target;let x=I.name,B=!0;const V=$(i,x),D=()=>I.type?rh(V._f):BM(w);if(V){let H,xe;const be=D(),Mi=w.type===__.BLUR||w.type===__.FOCUS_OUT,dS=!nj(V._f)&&!n.resolver&&!$(r.errors,x)&&!V._f.deps||rj(Mi,$(r.touchedFields,x),r.isSubmitted,_,y),Qc=E_(x,l,Mi);_e(o,x,be),Mi?(V._f.onBlur&&V._f.onBlur(w),u&&u(0)):V._f.onChange&&V._f.onChange(w);const Yc=R(x,be,Mi,!1),hS=!Wt(Yc)||Qc;if(!Mi&&f.values.next({name:x,type:w.type,values:{...o}}),dS)return h.isValid&&p(),hS&&f.state.next({name:x,...Qc?{}:Yc});if(!Mi&&Qc&&f.state.next({...r}),v(!0),n.resolver){const{errors:mg}=await W([x]),fS=k_(r.errors,i,x),gg=k_(mg,i,fS.name||x);H=gg.error,x=gg.name,xe=Wt(mg)}else H=(await A_(V,o,T,n.shouldUseNativeValidation))[x],B=isNaN(be)||be===$(o,x,be),B&&(H?xe=!1:h.isValid&&(xe=await ge(i,!0)));B&&(V._f.deps&&Y(V._f.deps),b(x,xe,H,Yc))}},Y=async(w,I={})=>{let x,B;const V=Zd(w);if(v(!0),n.resolver){const D=await F(Me(w)?w:V);x=Wt(D),B=w?!V.some(H=>$(D,H)):x}else w?(B=(await Promise.all(V.map(async D=>{const H=$(i,D);return await ge(H&&H._f?{[D]:H}:H)}))).every(Boolean),!(!B&&!r.isValid)&&p()):B=x=await ge(i);return f.state.next({...!Sn(w)||h.isValid&&x!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:x}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!B&&jf(i,D=>D&&$(r.errors,D),w?V:l.mount),B},ve=w=>{const I={...s,...a.mount?o:{}};return Me(w)?I:Sn(w)?$(I,w):w.map(x=>$(I,x))},Ne=(w,I)=>({invalid:!!$((I||r).errors,w),isDirty:!!$((I||r).dirtyFields,w),isTouched:!!$((I||r).touchedFields,w),error:$((I||r).errors,w)}),Vi=w=>{w&&Zd(w).forEach(I=>Qe(r.errors,I)),f.state.next({errors:w?r.errors:{}})},pn=(w,I,x)=>{const B=($(i,w,{_f:{}})._f||{}).ref;_e(r.errors,w,{...I,ref:B}),f.state.next({name:w,errors:r.errors,isValid:!1}),x&&x.shouldFocus&&B&&B.focus&&B.focus()},qs=(w,I)=>vr(w)?f.values.subscribe({next:x=>w(ye(void 0,I),x)}):ye(w,I,!0),en=(w,I={})=>{for(const x of w?Zd(w):l.mount)l.mount.delete(x),l.array.delete(x),I.keepValue||(Qe(i,x),Qe(o,x)),!I.keepError&&Qe(r.errors,x),!I.keepDirty&&Qe(r.dirtyFields,x),!I.keepTouched&&Qe(r.touchedFields,x),!n.shouldUnregister&&!I.keepDefaultValue&&Qe(s,x);f.values.next({values:{...o}}),f.state.next({...r,...I.keepDirty?{isDirty:J()}:{}}),!I.keepIsValid&&p()},Kr=({disabled:w,name:I,field:x,fields:B})=>{if(ii(w)){const V=w?void 0:$(o,I,rh(x?x._f:$(B,I)._f));_e(o,I,V),R(I,V,!1,!1,!0)}},Gc=(w,I={})=>{let x=$(i,w);const B=ii(I.disabled);return _e(i,w,{...x||{},_f:{...x&&x._f?x._f:{ref:{name:w}},name:w,mount:!0,...I}}),l.mount.add(w),x?Kr({field:x,disabled:I.disabled,name:w}):P(w,!0,I.value),{...B?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:so(I.min),max:so(I.max),minLength:so(I.minLength),maxLength:so(I.maxLength),pattern:so(I.pattern)}:{},name:w,onChange:K,onBlur:K,ref:V=>{if(V){Gc(w,I),x=$(i,w);const D=Me(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,H=ej(D),xe=x._f.refs||[];if(H?xe.find(be=>be===D):D===x._f.ref)return;_e(i,w,{_f:{...x._f,...H?{refs:[...xe.filter(th),D,...Array.isArray($(s,w))?[{}]:[]],ref:{type:D.type,name:w}}:{ref:D}}}),P(w,!1,void 0,D)}else x=$(i,w,{}),x._f&&(x._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(WM(l.array,w)&&a.action)&&l.unMount.add(w)}}},dg=()=>n.shouldFocusError&&jf(i,w=>w&&$(r.errors,w),l.mount),hg=(w,I)=>async x=>{x&&(x.preventDefault&&x.preventDefault(),x.persist&&x.persist());let B=On(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:V,values:D}=await W();r.errors=V,B=D}else await ge(i);Qe(r.errors,"root"),Wt(r.errors)?(f.state.next({errors:{}}),await w(B,x)):(I&&await I({...r.errors},x),dg(),setTimeout(dg)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Wt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},cS=(w,I={})=>{$(i,w)&&(Me(I.defaultValue)?L(w,$(s,w)):(L(w,I.defaultValue),_e(s,w,I.defaultValue)),I.keepTouched||Qe(r.touchedFields,w),I.keepDirty||(Qe(r.dirtyFields,w),r.isDirty=I.defaultValue?J(w,$(s,w)):J()),I.keepError||(Qe(r.errors,w),h.isValid&&p()),f.state.next({...r}))},fg=(w,I={})=>{const x=w?On(w):s,B=On(x),V=w&&!Wt(w)?B:s;if(I.keepDefaultValues||(s=x),!I.keepValues){if(I.keepDirtyValues||g)for(const D of l.mount)$(r.dirtyFields,D)?_e(V,D,$(o,D)):L(D,$(V,D));else{if(og&&Me(w))for(const D of l.mount){const H=$(i,D);if(H&&H._f){const xe=Array.isArray(H._f.refs)?H._f.refs[0]:H._f.ref;if(Bu(xe)){const be=xe.closest("form");if(be){be.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?On(s):{}:On(V),f.array.next({values:{...V}}),f.values.next({values:{...V}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!si(w,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&w?nh(s,w):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},pg=(w,I)=>fg(vr(w)?w(o):w,I);return{control:{register:Gc,unregister:en,getFieldState:Ne,handleSubmit:hg,setError:pn,_executeSchema:W,_getWatch:ye,_getDirty:J,_updateValid:p,_removeUnmounted:ee,_updateFieldArray:E,_updateDisabledField:Kr,_getFieldArray:nt,_reset:fg,_resetDefaultValues:()=>vr(n.defaultValues)&&n.defaultValues().then(w=>{pg(w,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_subjects:f,_proxyFormState:h,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:Y,register:Gc,handleSubmit:hg,watch:qs,setValue:L,getValues:ve,reset:pg,resetField:cS,clearErrors:Vi,unregister:en,setError:pn,setFocus:(w,I={})=>{const x=$(i,w),B=x&&x._f;if(B){const V=B.refs?B.refs[0]:B.ref;V.focus&&(V.focus(),I.shouldSelect&&V.select())}},getFieldState:Ne}}function cg(t={}){const e=vn.useRef(),n=vn.useRef(),[r,i]=vn.useState({isDirty:!1,isValidating:!1,isLoading:vr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:vr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...oj(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,GM({subject:s._subjects.state,next:o=>{KM(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),vn.useEffect(()=>{t.values&&!si(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),vn.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=qM(r,s),e.current}function aj(){console.log("Checking for Notification API support"),"Notification"in window&&"serviceWorker"in navigator?(console.log("Notification API and service worker are supported"),Notification.permission==="granted"?R_():Notification.permission!=="denied"&&Notification.requestPermission().then(t=>{t==="granted"&&R_()})):console.log("Notification API or service worker is not available in this browser.")}function R_(){navigator.serviceWorker.ready.then(t=>{t.showNotification("Welcome to SnapBack",{body:"Get ready to have a blast!",icon:"icon192.png",vibrate:[200,100,200,100,200,100,200],tag:"SnapBack"})})}function lj(){return aj}function uj({loggedIn:t,onLogin:e}){const{register:n,handleSubmit:r,errors:i}=cg(),[s,o]=A.useState(""),a=Us(),l="/SnapBack/",u=lj(),c=async h=>{try{if(!(await aL(Zn,h.email,h.password)).user.emailVerified){o("Email is not verified. Please check your email inbox and verify your email.");return}u(),e(!0),localStorage.setItem("authToken",!0),a("/SnapBack/")}catch(f){switch(f.code){case"auth/invalid-login-credentials":o("Invalid email address or password");break;case"auth/missing-password":o("Please enter a password");break;case"auth/user-disabled":o("Your account has been disabled");break;case"auth/invalid-email":o("Invalid email address");break;case"auth/too-many-requests":o("Too many requests. Please try again later.");break;case"auth/weak-password":o("Password must be at least 6 characters");break;default:o("An error occurred. Please try again later.")}}};return d.jsxs("div",{className:"bg-black flex flex-col md:flex-row h-screen items-center",children:[d.jsx("img",{src:`${l}Login.jpg`,alt:"Loginimage",className:" max-md:w-full w-7/12 h-full object-cover brightness-75"}),d.jsx("div",{className:"absolute top-0 left-0 w-7/12 h-full flex items-center justify-center",children:d.jsxs("div",{className:"text-white",children:[d.jsx("span",{className:"font-[playfairdisplay] text-white text-7xl max-md:hidden font-normal",children:"Shadow Realm Retreat"}),d.jsx("br",{}),d.jsx("br",{}),d.jsxs("span",{className:"font-[poppins] text-white text-opacity-60 max-md:hidden text-2xl font-medium",children:[" Where gamers stealthily unite for ",d.jsx("br",{}),"unforgettable adventures in the ",d.jsx("br",{}),"virtual shadows"]})]})}),d.jsx("div",{className:"w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center",children:d.jsxs("div",{className:"w-full h-100",children:[d.jsx("img",{className:"max-lg:w-16 w-24 mx-auto max-md:relative max-lg:bottom-12",src:`${l}Snapback-Logo.png`,alt:"SnapBack Logo"}),d.jsxs("form",{onSubmit:r(c),className:"mt-6 max-md:relative max-md:bottom-16",children:[d.jsx("h1",{className:"font-[poppins] text-gray-200 text-center text-xl md:text-2xl font-semibold leading-tight mb-6 mt-10 max-md:mb-6 max-md:mt-6",children:"Log in to your account"}),s&&d.jsx("p",{className:"text-red-500",children:s}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-envelope text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"email",placeholder:"Email",...n("email")})]}),d.jsxs("div",{className:"mt-4 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-key text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Password",...n("password")})]}),d.jsxs("div",{className:"text-right mt-2",children:[d.jsx("a",{href:"",className:"text-sm font-semibold text-gray-400 hover:text-white focus:text-white",children:"Forgot your password?"}),d.jsx("button",{type:"submit",className:"w-full mt-6 text-center px-4 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-[#0a174a] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150",children:"LOG IN"})]}),d.jsx("hr",{className:"my-6 border-gray-300 w-full"}),d.jsxs("p",{className:"mt-auto text-gray-400",children:["Don't have an account?",d.jsx(Ae,{to:"/SnapBack/register",className:"text-gray-200 hover:text-white font-semibold",children:"Register"})]})]})]})})]})}function cj(){const{register:t,handleSubmit:e,errors:n}=cg(),[r,i]=A.useState(""),[s,o]=A.useState(""),a=Us(),l="/SnapBack/",u=async c=>{try{if(c.password!==c.confirmPassword){i("Password and confirm password do not match.");return}const f=(await oL(Zn,c.email,c.password)).user;await lL(f),await cL(f,{displayName:c.name});const g=ui(br,"users",f.uid);await DI(g,{name:c.name,email:c.email}),o("Account created successfully. Please check your email for verification."),i(""),setTimeout(()=>{a("/SnapBack/login")},5e3)}catch(h){switch(h.code){case"auth/email-already-in-use":i("Email already in use");break;case"auth/missing-email":i("Please enter an email address");break;case"auth/invalid-email":i("Invalid email address");break;case"auth/missing-password":i("Please enter a password");break;case"auth/weak-password":i("Password must be at least 6 characters");break;default:i(h.message)}}};return d.jsxs("div",{className:"bg-black flex flex-col md:flex-row h-screen items-center",children:[d.jsx("img",{src:`${l}signup1.jpg`,alt:"Singupimage",className:" max-md:w-full w-7/12 h-full object-cover brightness-75"}),d.jsx("div",{className:"absolute top-0 left-0 w-7/12 h-full flex items-center justify-center",children:d.jsxs("div",{className:"text-white",children:[d.jsx("span",{className:"font-[playfairdisplay] text-white text-7xl max-md:hidden font-normal",children:"Shadow Realm Retreat"}),d.jsx("br",{}),d.jsx("br",{}),d.jsxs("span",{className:"font-[poppins] text-white text-opacity-60 max-md:hidden text-2xl font-medium",children:[" Where gamers stealthily unite for ",d.jsx("br",{}),"unforgettable adventures in the ",d.jsx("br",{}),"virtual shadows"]})]})}),d.jsx("div",{className:"w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center",children:d.jsxs("div",{className:"w-full h-100",children:[d.jsx("img",{className:"max-lg:w-16 w-24 mx-auto max-md:relative max-lg:bottom-12",src:`${l}/Snapback-Logo.png`,alt:"SnapBack Logo"}),d.jsxs("form",{onSubmit:e(u),className:"mt-6 max-md:relative max-md:bottom-16",children:[d.jsx("h1",{className:"font-[poppins] text-gray-200 text-center text-xl md:text-2xl font-semibold leading-tight mb-6 mt-10 max-md:mb-6 max-md:mt-6",children:"Create Account"}),r&&d.jsx("p",{className:"text-red-500",children:r}),s&&d.jsx("p",{className:"text-green-500",children:s})," ",d.jsxs("div",{className:"mt-4 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-person text-xl text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"text",placeholder:"Name",required:!0,...t("name")})]}),d.jsxs("div",{className:"mt-4 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-envelope text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"email",placeholder:"Email",...t("email")})]}),d.jsxs("div",{className:"mt-4 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-key text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Password",...t("password")})]}),d.jsxs("div",{className:"mt-4 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-lock text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Confirm Password",...t("confirmPassword")})]}),d.jsxs("div",{className:"text-right mt-4",children:[d.jsx(Ae,{to:"/SnapBack/login",className:"text-sm font-semibold text-gray-400 hover:text-white focus:text-white",children:"Already registered?"}),d.jsx("button",{type:"submit",className:"w-full mt-6 text-center px-4 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-[#0a174a] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150",children:"REGISTER"})]})]})]})})]})}function dj(){const t="/SnapBack/";return d.jsxs("div",{className:"text-white p-6",children:[d.jsx("h1",{className:"text-3xl font-semibold mb-4",children:"Games"}),d.jsxs("div",{className:"lg:flex lg:space-x-10 max-lg:space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center ",children:[d.jsx(Ae,{to:"/SnapBack/games/hangman",children:d.jsxs("div",{className:"max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform",children:[d.jsx("img",{src:`${t}Hangman.jpg`,alt:"Game Image",className:"w-full h-full absolute inset-0 object-cover rounded-lg"}),d.jsx("div",{className:"bg-black bg-opacity-50 absolute inset-0 rounded-lg"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:d.jsx("p",{className:"text-lg font-[poppins] font-semibold",children:"HangMan"})})]})}),d.jsx(Ae,{to:"https://forza.net/horizon",children:d.jsxs("div",{className:"max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform",children:[d.jsx("img",{src:`${t}forza5.jpg`,alt:"Game Image",className:"w-full h-full absolute inset-0 object-cover rounded-lg"}),d.jsx("div",{className:"bg-black bg-opacity-50 absolute inset-0 rounded-lg"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:d.jsx("p",{className:"text-lg font-[poppins] font-semibold",children:"Forza Horizon"})})]})}),d.jsx(Ae,{to:"https://www.ubisoft.com/en-gb/game/assassins-creed",children:d.jsxs("div",{className:"max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform",children:[d.jsx("img",{src:`${t}assassins-creed-valhalla.jpg`,alt:"Game Image",className:"w-full h-full absolute inset-0 object-cover rounded-lg"}),d.jsx("div",{className:"bg-black bg-opacity-50 absolute inset-0 rounded-lg"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:d.jsx("p",{className:"text-lg font-[poppins] font-semibold",children:"Assassins Creed"})})]})})]})]})}function hj(){const[t,e]=A.useState([]),[n,r]=A.useState(!0),[i,s]=A.useState({}),o="/SnapBack/";return A.useEffect(()=>{async function a(){try{const l=uD(br,"user_scores"),u=ID(l),c=await PD(u),h=[];c.forEach(async f=>{const g=f.data(),_=(g.score||[]).reduce((m,p)=>Math.max(m,p.score),0),T=vo(Mo(),`profilePictures/${f.id}/profile-picture.jpg`);try{const m=await Wi(T);console.log("Profile picture URL:",m),s(p=>({...p,[f.id]:m}))}catch(m){m.code==="storage/object-not-found"?console.log("Profile picture not found for user with ID:",f.id):console.log("Error fetching profile picture:",m),i[f.id]=null}h.push({id:f.id,name:g.name,highestScore:_}),h.length===c.size&&(h.sort((m,p)=>p.highestScore-m.highestScore),e(h),r(!1))})}catch(l){console.error("Error fetching leaderboard data: ",l)}}a()},[]),n?d.jsx("p",{className:"text-center text-white text-2xl",children:"Loading leaderboard..."}):d.jsxs("div",{className:"my-6",children:[d.jsx("h1",{className:"text-5xl tracking-wide text-center font-semibold mb-4",children:d.jsx("span",{className:"bg-gray-800 px-8 lg:px-24 py-5 rounded-b-[50px] font-thin text-white font-[impact]",children:"Leaderboard"})}),d.jsx("div",{className:"max-lg:mx-10 max-lg:space-y-2 lg:flex justify-center mb-6 mt-16",children:t.slice(0,3).map((a,l)=>d.jsxs("div",{className:`px-6 py-4 ${l===0?"lg:rounded-l-lg bg-yellow-400 bg-opacity-70":l===1?"bg-gray-400 bg-opacity-70":l===2?"bg-orange-400 bg-opacity-70 lg:rounded-r-lg":""} shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 items-center flex`,children:[l===0&&d.jsx("img",{src:`${o}gold.png`,alt:"Gold Medal",className:"w-10 inline-block mr-2"}),l===1&&d.jsx("img",{src:`${o}silver.png`,alt:"Silver Medal",className:"w-10 inline-block mr-2"}),l===2&&d.jsx("img",{src:`${o}bronze.png`,alt:"Bronze Medal",className:"w-10 inline-block mr-2"}),d.jsxs("div",{className:"text-lg",children:[d.jsxs("span",{className:"font-bold text-white",children:[l+1,"st"]}),d.jsx("div",{className:"text-white font-[poppins]",children:a.name}),d.jsxs("div",{className:"text-white font-[poppins]",children:[a.highestScore," pts"]})]}),d.jsx("div",{className:"ml-4",children:i[a.id]?d.jsx("img",{src:i[a.id],alt:"Profile",className:"rounded-full w-16 h-16 object-cover"}):d.jsx("i",{className:"bi bi-person-fill max-lg:text-3xl text-5xl"})})]},a.id))}),d.jsxs("table",{className:"table mx-auto max-lg:mx-2 md:w-[1200px]",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"text-white font-[poppins] text-lg",children:[d.jsx("th",{className:"py-2 px-4",children:"# Rank"}),d.jsx("th",{className:"py-2 px-4",children:"Player Name"}),d.jsx("th",{className:"py-2 px-4",children:"Highest Score"})]})}),d.jsx("tbody",{className:"text-white ",children:t.slice(3).map((a,l)=>d.jsxs("tr",{className:"rounded-lg bg-gray-700/30 text-center font-[poppins] text-lg",children:[d.jsx("td",{className:"py-2 px-4",children:l+4}),d.jsxs("td",{className:"py-2 px-4 flex items-center justify-center",children:[d.jsx("div",{children:i[a.id]?d.jsx("img",{src:i[a.id],alt:"Profile",className:"rounded-full max-lg:w-8 max-lg:h-8 w-12 h-12 object-cover"}):d.jsx("i",{className:"bi bi-person-fill max-lg:text-3xl text-5xl"})}),d.jsx("div",{className:"ml-2 overflow-hidden overflow-ellipsis whitespace-nowrap",children:a.name})]}),d.jsxs("td",{className:"py-2 px-4",children:[a.highestScore," ",d.jsx("span",{className:"text-md",children:"pts"})]})]},a.id))})]})]})}function fj({updateUserName:t}){const[e,n]=A.useState("");A.useState("");const[r,i]=A.useState(null);A.useState(!1),A.useEffect(()=>{const o=Zn.onAuthStateChanged(async a=>{if(a){i(a);const l=ui(br,"users",a.uid),u=await va(l);if(u.exists()){const c=u.data();c.name&&n(c.name)}}else i(null)});return()=>{o()}},[]);const s=async()=>{j1();try{const o=ui(br,"users",r.uid);await Nf(o,{name:e});const a=ui(br,"user_scores",r.uid);(await va(a)).exists()&&await Nf(a,{name:e}),n(e),console.log("Display name updated successfully!"),t(e)}catch(o){console.error("Error updating display name:",o)}};return d.jsx("div",{children:d.jsxs("div",{className:"mt-8",children:[d.jsx("h2",{className:"text-2xl font-semibold text-white ",children:"Edit Profile"}),d.jsxs("form",{children:[d.jsxs("div",{className:"relative max-lg:mx-4",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-person text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10",type:"text",value:e,onChange:o=>n(o.target.value)})]}),d.jsx("div",{className:"my-4",children:d.jsx("button",{className:"border border-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded",type:"button",onClick:s,children:"Update Display Name"})})]})]})})}function pj(){const[t,e]=A.useState(""),[n,r]=A.useState(null),i=async s=>{s.preventDefault();try{await dL(Zn.currentUser,t),console.log("Password updated successfully!")}catch(o){console.error("Error updating password:",o),r(o.message)}};return d.jsxs("div",{children:[n&&d.jsx("p",{children:n}),d.jsxs("form",{onSubmit:i,children:[d.jsxs("div",{className:"relative max-lg:mx-4",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-key text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10",placeholder:"New Password",type:"password",value:t,onChange:s=>e(s.target.value)})]}),d.jsx("div",{className:"my-4",children:d.jsx("button",{className:"border border-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded",type:"submit",children:"Update Password"})})]})]})}function mj(){const[t,e]=A.useState(""),[n,r]=A.useState(null),i=async s=>{s.preventDefault();try{const o=Zn.currentUser,a=Li.credential(o.email,t);await iL(o,a),await gL(o);const l=doc(db,"users",o.uid);await deleteDoc(l),console.log("Account deleted successfully!")}catch(o){console.error("Error deleting account:",o),r(o.message)}};return d.jsxs("div",{children:[n&&d.jsx("p",{children:n}),d.jsxs("form",{onSubmit:i,children:[d.jsxs("div",{className:"relative max-lg:mx-4",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx("i",{className:"bi bi-lock text-gray-300 mt-1.5"})}),d.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10",placeholder:"Current Password",type:"password",value:t,onChange:s=>e(s.target.value)})]}),d.jsx("div",{className:"my-4",children:d.jsx("button",{className:"border border-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded",type:"submit",children:"Delete Account"})})]})]})}var uS={exports:{}};(function(t,e){(function(r,i){t.exports=i(A)})(mS,function(n){return function(r){var i={};function s(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return r[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=r,s.c=i,s.d=function(o,a,l){s.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,a){if(a&1&&(o=s(o)),a&8||a&4&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),a&2&&typeof o!="string")for(var u in o)s.d(l,u,(function(c){return o[c]}).bind(null,u));return l},s.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(a,"a",a),a},s.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},s.p="",s(s.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(r,i,s){s.r(i);var o=s("react"),a=function(){var f=function(g,y){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,T){_.__proto__=T}||function(_,T){for(var m in T)T.hasOwnProperty(m)&&(_[m]=T[m])},f(g,y)};return function(g,y){f(g,y);function _(){this.constructor=g}g.prototype=y===null?Object.create(y):(_.prototype=y.prototype,new _)}}(),l=function(){return l=Object.assign||function(f){for(var g,y=1,_=arguments.length;y<_;y++){g=arguments[y];for(var T in g)Object.prototype.hasOwnProperty.call(g,T)&&(f[T]=g[T])}return f},l.apply(this,arguments)},u=function(f,g){var y={};for(var _ in f)Object.prototype.hasOwnProperty.call(f,_)&&g.indexOf(_)<0&&(y[_]=f[_]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,_=Object.getOwnPropertySymbols(f);T<_.length;T++)g.indexOf(_[T])<0&&Object.prototype.propertyIsEnumerable.call(f,_[T])&&(y[_[T]]=f[_[T]]);return y};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(g){var y=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return y?new Promise(function(_,T){y.call(navigator,g,_,T)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function c(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var h=function(f){a(g,f);function g(y){var _=f.call(this,y)||this;return _.canvas=null,_.ctx=null,_.requestUserMediaId=0,_.unmounted=!1,_.state={hasUserMedia:!1},_}return g.prototype.componentDidMount=function(){var y=this,_=y.state,T=y.props;if(this.unmounted=!1,!c()){T.onUserMediaError("getUserMedia not supported");return}_.hasUserMedia||this.requestUserMedia(),T.children&&typeof T.children!="function"&&console.warn("children must be a function")},g.prototype.componentDidUpdate=function(y){var _=this.props;if(!c()){_.onUserMediaError("getUserMedia not supported");return}var T=JSON.stringify(y.audioConstraints)!==JSON.stringify(_.audioConstraints),m=JSON.stringify(y.videoConstraints)!==JSON.stringify(_.videoConstraints),p=y.minScreenshotWidth!==_.minScreenshotWidth,v=y.minScreenshotHeight!==_.minScreenshotHeight;(m||p||v)&&(this.canvas=null,this.ctx=null),(T||m)&&(this.stopAndCleanup(),this.requestUserMedia())},g.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},g.stopMediaStream=function(y){y&&(y.getVideoTracks&&y.getAudioTracks?(y.getVideoTracks().map(function(_){y.removeTrack(_),_.stop()}),y.getAudioTracks().map(function(_){y.removeTrack(_),_.stop()})):y.stop())},g.prototype.stopAndCleanup=function(){var y=this.state;y.hasUserMedia&&(g.stopMediaStream(this.stream),y.src&&window.URL.revokeObjectURL(y.src))},g.prototype.getScreenshot=function(y){var _=this,T=_.state,m=_.props;if(!T.hasUserMedia)return null;var p=this.getCanvas(y);return p&&p.toDataURL(m.screenshotFormat,m.screenshotQuality)},g.prototype.getCanvas=function(y){var _=this,T=_.state,m=_.props;if(!this.video||!T.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var p=this.video.videoWidth,v=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var E=p/v;p=m.minScreenshotWidth||this.video.clientWidth,v=p/E,m.minScreenshotHeight&&v<m.minScreenshotHeight&&(v=m.minScreenshotHeight,p=v*E)}this.canvas=document.createElement("canvas"),this.canvas.width=(y==null?void 0:y.width)||p,this.canvas.height=(y==null?void 0:y.height)||v,this.ctx=this.canvas.getContext("2d")}var S=this,P=S.ctx,R=S.canvas;return P&&R&&(R.width=(y==null?void 0:y.width)||R.width,R.height=(y==null?void 0:y.height)||R.height,m.mirrored&&(P.translate(R.width,0),P.scale(-1,1)),P.imageSmoothingEnabled=m.imageSmoothing,P.drawImage(this.video,0,0,(y==null?void 0:y.width)||R.width,(y==null?void 0:y.height)||R.height),m.mirrored&&(P.scale(-1,1),P.translate(-R.width,0))),R},g.prototype.requestUserMedia=function(){var y=this,_=this.props,T=function(v,E){var S={video:typeof E<"u"?E:!0};_.audio&&(S.audio=typeof v<"u"?v:!0),y.requestUserMediaId++;var P=y.requestUserMediaId;navigator.mediaDevices.getUserMedia(S).then(function(R){y.unmounted||P!==y.requestUserMediaId?g.stopMediaStream(R):y.handleUserMedia(null,R)}).catch(function(R){y.handleUserMedia(R)})};if("mediaDevices"in navigator)T(_.audioConstraints,_.videoConstraints);else{var m=function(v){return{optional:[{sourceId:v}]}},p=function(v){var E=v.deviceId;return typeof E=="string"?E:Array.isArray(E)&&E.length>0?E[0]:typeof E=="object"&&E.ideal?E.ideal:null};MediaStreamTrack.getSources(function(v){var E=null,S=null;v.forEach(function(b){b.kind==="audio"?E=b.id:b.kind==="video"&&(S=b.id)});var P=p(_.audioConstraints);P&&(E=P);var R=p(_.videoConstraints);R&&(S=R),T(m(E),m(S))})}},g.prototype.handleUserMedia=function(y,_){var T=this.props;if(y||!_){this.setState({hasUserMedia:!1}),T.onUserMediaError(y);return}this.stream=_;try{this.video&&(this.video.srcObject=_),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(_)})}T.onUserMedia(_)},g.prototype.render=function(){var y=this,_=this,T=_.state,m=_.props,p=m.audio;m.forceScreenshotSourceSize,m.onUserMedia,m.onUserMediaError,m.screenshotFormat,m.screenshotQuality,m.minScreenshotWidth,m.minScreenshotHeight,m.audioConstraints,m.videoConstraints,m.imageSmoothing;var v=m.mirrored,E=m.style,S=E===void 0?{}:E,P=m.children,R=u(m,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),b=v?l(l({},S),{transform:(S.transform||"")+" scaleX(-1)"}):S,W={getScreenshot:this.getScreenshot.bind(this)};return o.createElement(o.Fragment,null,o.createElement("video",l({autoPlay:!0,src:T.src,muted:!p,playsInline:!0,ref:function(F){y.video=F},style:b},R)),P&&P(W))},g.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},g}(o.Component);i.default=h},react:function(r,i){r.exports=n}}).default})})(uS);var gj=uS.exports;const yj=P_(gj);function vj({isOpen:t,onClose:e,onCapture:n}){const r=A.useRef(null),i=()=>{const s=r.current.getScreenshot();n(s)};return t?d.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",children:d.jsxs("div",{className:"bg-gray-900 rounded-lg shadow-md p-4 w-96",children:[" ",d.jsx("div",{className:"text-center mb-4",children:d.jsx("h2",{className:"text-xl font-semibold text-white",children:"Camera Preview"})}),d.jsxs("div",{className:"relative aspect-w-16 aspect-h-12",children:[" ",d.jsx(yj,{audio:!1,ref:r,screenshotFormat:"image/jpeg",className:"rounded-lg w-full h-full"})]}),d.jsxs("div",{className:"text-center mt-4",children:[d.jsx("button",{onClick:i,className:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2",children:"Capture"}),d.jsx("button",{onClick:e,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md",children:"Close"})]})]})}):null}function _j({user:t}){cg();const[e,n]=A.useState(null),[r,i]=A.useState(""),[s,o]=A.useState(!1),[a,l]=A.useState(""),u=Us(),[c,h]=A.useState(!1),[f,g]=A.useState(!1),[y,_]=A.useState("");A.useEffect(()=>{p(t.uid).then(R=>{l(R)})},[t.uid]);const T=R=>{const b=R.target.files[0];n(b),_(b.name)},m=async(R,b)=>{try{if(!b)throw new Error("Please select a profile picture.");o(!0);const W=Mo(),F=vo(W,`profilePictures/${R}/profile-picture.jpg`);try{await v(t.uid)}catch(ee){console.error("Error deleting previous profile picture:",ee)}if(typeof b=="string"&&b.startsWith("data:image")){const J=await(await fetch(b)).blob();await v_(F,J)}else await v_(F,b);const ge=await Wi(F);return o(!1),l(ge),console.log("Uploaded Successfully"),ge}catch(W){throw console.error("Error uploading profile picture:",W),o(!1),W}},p=async R=>{try{const b=Mo(),W=vo(b,`profilePictures/${R}/profile-picture.jpg`);await Wi(W);const F=await Wi(W);return l(F),F}catch(b){if(b.code==="storage/object-not-found")return console.log("Profile picture not found"),null;const W=vo(storage,"profilePictures/default/profile-picture.jpg");return await Wi(W)}},v=async R=>{try{const b=Mo(),W=vo(b,`profilePictures/${R}/profile-picture.jpg`);try{await Wi(W)}catch(F){if(F.code==="storage/object-not-found")return console.log("Profile picture not found"),!1}return await VM(W),console.log("Deleted profile picture successfully"),l(""),u("/SnapBack/profile"),g(!1),!0}catch(b){return console.error("Error deleting profile picture:",b),!1}},E=async()=>{try{if(e){const R=await m(t.uid,e);g(!1),i("")}else i("Please select or capture a profile picture before uploading.")}catch{i("An error occurred. Please try again later.")}},S=()=>{h(!0)},P=()=>{g(!f)};return d.jsxs("div",{className:"container text-white",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex flex-col items-center justify-center text-center",onClick:P,children:a?d.jsx("img",{src:a,alt:"Profile",className:"max-lg:mt-3 max-lg:rounded-full max-lg:w-32 max-lg:h-32 w-64 h-64 rounded-lg object-cover"}):d.jsx("div",{className:"max-lg:rounded-full max-lg:w-32 max-lg:h-32 w-64 h-64 rounded-lg bg-gray-500 flex items-center justify-center",children:d.jsx("span",{children:"Click to add a photo"})})}),f&&d.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-[poppins]",children:d.jsxs("div",{className:"bg-gray-900 border rounded-lg shadow-md w-96",children:[d.jsx("div",{className:"p-4",children:d.jsx("h2",{className:"text-xl font-semibold",children:"Upload Profile Photo"})}),r&&d.jsx("p",{className:"text-red-500 text-lg",children:r}),y&&d.jsx("div",{className:"px-4 mt-2",children:d.jsxs("p",{className:"text-gray-400",children:["Selected Image : ",y]})}),d.jsxs("div",{className:"",children:[d.jsxs("div",{className:"flex mt-2 mx-2",children:[d.jsx("button",{onClick:()=>document.getElementById("fileInput").click(),className:"w-full px-4 py-2 border border-teal-500 hover:bg-teal-800 text-white rounded-md mr-2",children:"Choose from Gallery"}),d.jsx("button",{onClick:S,className:"w-full px-4 py-2 border border-teal-500 hover:bg-teal-800 text-white rounded-md",children:"Use Camera"})]}),a&&d.jsx("div",{className:"px-4 mt-4",children:d.jsx("button",{onClick:()=>v(t.uid),className:"block w-full py-2 px-4 border border-red-600 text-white hover:bg-red-800 rounded-md",children:"Delete Profile Picture"})}),d.jsx("div",{className:"px-4 mt-4",children:d.jsx("button",{onClick:E,disabled:s,className:"w-full py-2 px-4 border border-blue-600 text-white hover:bg-blue-800 rounded-md",children:s?"Uploading...":"Upload"})})]}),d.jsx("div",{className:"p-4",children:d.jsx("button",{onClick:()=>g(!1),className:"w-full py-2 px-4 bg-red-500 text-white hover:bg-red-600 rounded-md",children:"Cancel"})})]})})]}),d.jsx(vj,{isOpen:c,onClose:()=>h(!1),onCapture:R=>{console.log("Captured image source:",R),n(R),h(!1)}}),d.jsx("input",{type:"file",accept:"image/*",id:"fileInput",style:{display:"none"},onChange:T})]})}function wj(){const[t,e]=A.useState(null),[n,r]=A.useState(!0),[i,s]=A.useState([]);A.useEffect(()=>{const a=Zn.onAuthStateChanged(async l=>{if(l){const u=ui(br,"users",l.uid),c=await va(u);c.exists()?e({name:c.data().name,...l}):console.log("No such document in users collection!");const h=ui(br,"user_scores",l.uid),f=await va(h);if(f.exists()){const y=f.data().score||[];s(y)}else console.log("No such document for user scores!"),s([]);r(!1)}else e(null),r(!1),s([])});return()=>{a()}},[]);const o=a=>{e({...t,name:a})};return n?d.jsx("p",{className:"text-center text-white text-2xl",children:"Loading..."}):d.jsx("div",{className:"text-center py-8",children:t?d.jsxs("div",{className:"font-[poppins]",children:[d.jsxs("h1",{className:"text-3xl font-semibold text-white mb-4",children:["Welcome, ",t.name]}),d.jsxs("p",{className:"text-white text-lg",children:["Email: ",t.email]}),d.jsxs("div",{className:"lg:flex items-center justify-center text-center",children:[d.jsx("div",{className:"mb-2 lg:mr-10",children:d.jsx(_j,{user:t})}),d.jsx("div",{children:d.jsxs("div",{className:"mt-8",children:[d.jsx(fj,{updateUserName:o}),d.jsx(pj,{}),d.jsx(mj,{})]})})]}),d.jsxs("div",{className:"mt-8",children:[d.jsx("h2",{className:"text-2xl font-semibold text-white mb-4",children:"Your Past Games"}),i.length>0?d.jsx("ul",{className:"text-white",children:i.map((a,l)=>d.jsxs("li",{className:"mb-2 py-2 lg:inline-block lg:ml-24",children:[d.jsxs("div",{className:"bg-gray-500/50 inline px-4 py-1 rounded-md mr-2 text-lg font-[poppins]",children:["Game ",l+1,":"]}),d.jsxs("span",{className:"text-lg font-[poppins]",children:[" Score ",a.score]})]},l))}):d.jsx("p",{className:"text-white",children:"You haven't played any games yet."})]})]}):d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-semibold text-white mb-4",children:"You are not signed in."}),d.jsx("p",{className:"text-white text-lg",children:"Please sign in to view your profile."})]})})}function Ej({loggedIn:t,onLogin:e}){return d.jsxs(Pk,{children:[d.jsx(ir,{path:"/SnapBack/login",element:d.jsx(uj,{loggedIn:t,onLogin:e})}),d.jsx(ir,{path:"/SnapBack/register",element:d.jsx(cj,{})}),d.jsx(ir,{path:"/SnapBack/",element:d.jsx($k,{})}),d.jsx(ir,{path:"/SnapBack/games/hangman",element:t?d.jsx($M,{}):d.jsx(Cy,{to:"/SnapBack/login",replace:!0})}),d.jsx(ir,{path:"/SnapBack/games",element:t?d.jsx(dj,{}):d.jsx(Cy,{to:"/SnapBack/login",replace:!0})}),d.jsx(ir,{path:"/SnapBack/games/hangman/leaderboard",element:d.jsx(hj,{})}),d.jsx(ir,{path:"/SnapBack/profile",element:d.jsx(wj,{})})]})}function Tj({isOpen:t,onRequestClose:e,onConfirm:n}){return t&&d.jsxs("div",{className:"inset-0 flex items-center justify-center z-50",children:[d.jsx("div",{className:"fixed inset-0 bg-black opacity-60"}),d.jsxs("div",{className:"absolute max-md:top-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-xl w-full max-w-xs",children:[d.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Confirm Logout"}),d.jsx("p",{className:"mb-4",children:"Are you sure you want to log out?"}),d.jsxs("div",{className:"flex justify-center float-right",children:[d.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",onClick:n,children:"Yes"}),d.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:e,children:"No"})]})]})]})}function Ij(){const[t,e]=A.useState(localStorage.getItem("authToken")==="true"),[n,r]=A.useState(null),[i,s]=A.useState(!1),o=Us();A.useEffect(()=>{const u=mL(Zn,c=>{c?(r(c),e(!0),localStorage.setItem("authToken",!0)):(r(null),e(!1),localStorage.removeItem("authToken"))});return()=>u()},[]);const a=async()=>{s(!0)},l=async()=>{try{await Zn.signOut(),r(null),e(!1),localStorage.removeItem("authToken"),o("/SnapBack/")}catch(u){console.log(u)}finally{s(!1)}};return d.jsxs("div",{children:[d.jsx("div",{children:d.jsx(Uk,{loggedIn:t,onLogin:e,handleLogout:a})}),d.jsx("div",{children:d.jsx(Ej,{loggedIn:t,onLogin:e})}),i&&d.jsx("div",{className:"modal-overlay",children:d.jsx(Tj,{isOpen:i,onRequestClose:()=>s(!1),onConfirm:l})})]})}ih.createRoot(document.getElementById("root")).render(d.jsx(vn.StrictMode,{children:d.jsx(Lk,{children:d.jsx(Ij,{})})}));
