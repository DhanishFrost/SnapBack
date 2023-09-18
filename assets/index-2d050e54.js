function cS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x_={exports:{}},zu={},R_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),dS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),pS=Symbol.for("react.strict_mode"),mS=Symbol.for("react.profiler"),gS=Symbol.for("react.provider"),yS=Symbol.for("react.context"),vS=Symbol.for("react.forward_ref"),_S=Symbol.for("react.suspense"),wS=Symbol.for("react.memo"),ES=Symbol.for("react.lazy"),gg=Symbol.iterator;function TS(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,C_={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||k_}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N_(){}N_.prototype=Cs.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||k_}var jf=Ff.prototype=new N_;jf.constructor=Ff;P_(jf,Cs.prototype);jf.isPureReactComponent=!0;var yg=Array.isArray,b_=Object.prototype.hasOwnProperty,Uf={current:null},D_={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,r)&&!D_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ya,type:t,key:s,ref:o,props:i,_owner:Uf.current}}function IS(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function SS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SS(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case dS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gc(o,0):r,yg(i)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),El(i,e,n,"",function(u){return u})):i!=null&&($f(i)&&(i=IS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gc(s,a);o+=El(s,e,n,l,i)}else if(l=TS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gc(s,a++),o+=El(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Tl={transition:null},xS={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Uf};ne.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Cs;ne.Fragment=fS;ne.Profiler=mS;ne.PureComponent=Ff;ne.StrictMode=pS;ne.Suspense=_S;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)b_.call(e,l)&&!D_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ya,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:yS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gS,_context:t},t.Consumer=t};ne.createElement=O_;ne.createFactory=function(t){var e=O_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:vS,render:t}};ne.isValidElement=$f;ne.lazy=function(t){return{$$typeof:ES,_payload:{_status:-1,_result:t},_init:AS}};ne.memo=function(t,e){return{$$typeof:wS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return It.current.useCallback(t,e)};ne.useContext=function(t){return It.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ne.useEffect=function(t,e){return It.current.useEffect(t,e)};ne.useId=function(){return It.current.useId()};ne.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return It.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ne.useRef=function(t){return It.current.useRef(t)};ne.useState=function(t){return It.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return It.current.useTransition()};ne.version="18.2.0";R_.exports=ne;var R=R_.exports;const vn=hS(R),RS=cS({__proto__:null,default:vn},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=R,PS=Symbol.for("react.element"),CS=Symbol.for("react.fragment"),NS=Object.prototype.hasOwnProperty,bS=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DS={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NS.call(e,r)&&!DS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PS,type:t,key:s,ref:o,props:i,_owner:bS.current}}zu.Fragment=CS;zu.jsx=L_;zu.jsxs=L_;x_.exports=zu;var f=x_.exports,nd={},V_={exports:{}},Bt={},M_={exports:{}},F_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var Q=O.length;O.push(q);e:for(;0<Q;){var ye=Q-1>>>1,Ce=O[ye];if(0<i(Ce,q))O[ye]=q,O[Q]=Ce,Q=ye;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Q=O.pop();if(Q!==q){O[0]=Q;e:for(var ye=0,Ce=O.length,Oi=Ce>>>1;ye<Oi;){var pn=2*(ye+1)-1,Ws=O[pn],en=pn+1,qr=O[en];if(0>i(Ws,Q))en<Ce&&0>i(qr,Ws)?(O[ye]=qr,O[en]=Q,ye=en):(O[ye]=Ws,O[pn]=Q,ye=pn);else if(en<Ce&&0>i(qr,Q))O[ye]=qr,O[en]=Q,ye=en;else break e}}return q}function i(O,q){var Q=O.sortIndex-q.sortIndex;return Q!==0?Q:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,_=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=O)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function E(O){if(w=!1,y(O),!_)if(n(l)!==null)_=!0,rt(x);else{var q=n(u);q!==null&&At(E,q.startTime-O)}}function x(O,q){_=!1,w&&(w=!1,m(F),F=-1),g=!0;var Q=d;try{for(y(q),h=n(l);h!==null&&(!(h.expirationTime>q)||O&&!Pe());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var Ce=ye(h.expirationTime<=q);q=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),y(q)}else r(l);h=n(l)}if(h!==null)var Oi=!0;else{var pn=n(u);pn!==null&&At(E,pn.startTime-q),Oi=!1}return Oi}finally{h=null,d=Q,g=!1}}var N=!1,D=null,F=-1,Z=5,H=-1;function Pe(){return!(t.unstable_now()-H<Z)}function ee(){if(D!==null){var O=t.unstable_now();H=O;var q=!0;try{q=D(!0,O)}finally{q?J():(N=!1,D=null)}}else N=!1}var J;if(typeof p=="function")J=function(){p(ee)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,nt=ge.port2;ge.port1.onmessage=ee,J=function(){nt.postMessage(null)}}else J=function(){T(ee,0)};function rt(O){D=O,N||(N=!0,J())}function At(O,q){F=T(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,rt(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return O()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=d;d=O;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(O,q,Q){var ye=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,O){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Q+Ce,O={id:c++,callback:q,priorityLevel:O,startTime:Q,expirationTime:Ce,sortIndex:-1},Q>ye?(O.sortIndex=Q,e(u,O),n(l)===null&&O===n(u)&&(w?(m(F),F=-1):w=!0,At(E,Q-ye))):(O.sortIndex=Ce,e(l,O),_||g||(_=!0,rt(x))),O},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(O){var q=d;return function(){var Q=d;d=q;try{return O.apply(this,arguments)}finally{d=Q}}}})(F_);M_.exports=F_;var OS=M_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=R,Ut=OS;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U_=new Set,Oo={};function Ai(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Oo[t]=e,t=0;t<e.length;t++)U_.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,LS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},wg={};function VS(t){return rd.call(wg,t)?!0:rd.call(_g,t)?!1:LS.test(t)?wg[t]=!0:(_g[t]=!0,!1)}function MS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FS(t,e,n,r){if(e===null||typeof e>"u"||MS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bf=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bf,zf);tt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bf,zf);tt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bf,zf);tt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FS(e,n,i,r)&&(n=null),r||i===null?VS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),qf=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Eg&&t[Eg]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Qc;function io(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var Yc=!1;function Xc(t,e){if(!t||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function jS(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=Xc(t.type,!1),t;case 11:return t=Xc(t.type.render,!1),t;case 1:return t=Xc(t.type,!0),t;default:return""}}function ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Bi:return"Portal";case id:return"Profiler";case Hf:return"StrictMode";case sd:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B_:return(t.displayName||"Context")+".Consumer";case $_:return(t._context.displayName||"Context")+".Provider";case qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:ad(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return ad(t(e))}catch{}}return null}function US(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ad(e);case 8:return e===Hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $S(t){var e=W_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=$S(t))}function H_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ld(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q_(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function ud(t,e){q_(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(so(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function K_(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Q_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BS=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){BS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function Y_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function X_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Y_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zS=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(zS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gd=null,is=null,ss=null;function xg(t){if(t=wa(t)){if(typeof gd!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Gu(e),gd(t.stateNode,t.type,e))}}function J_(t){is?ss?ss.push(t):ss=[t]:is=t}function Z_(){if(is){var t=is,e=ss;if(ss=is=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function ew(t,e){return t(e)}function tw(){}var Jc=!1;function nw(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return ew(t,e,n)}finally{Jc=!1,(is!==null||ss!==null)&&(tw(),Z_())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var yd=!1;if(Hn)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){yd=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{yd=!1}function WS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yo=!1,zl=null,Wl=!1,vd=null,HS={onError:function(t){yo=!0,zl=t}};function qS(t,e,n,r,i,s,o,a,l){yo=!1,zl=null,WS.apply(HS,arguments)}function KS(t,e,n,r,i,s,o,a,l){if(qS.apply(this,arguments),yo){if(yo){var u=zl;yo=!1,zl=null}else throw Error(P(198));Wl||(Wl=!0,vd=u)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rg(t){if(xi(t)!==t)throw Error(P(188))}function GS(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rg(i),t;if(s===r)return Rg(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function iw(t){return t=GS(t),t!==null?sw(t):null}function sw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sw(t);if(e!==null)return e;t=t.sibling}return null}var ow=Ut.unstable_scheduleCallback,kg=Ut.unstable_cancelCallback,QS=Ut.unstable_shouldYield,YS=Ut.unstable_requestPaint,be=Ut.unstable_now,XS=Ut.unstable_getCurrentPriorityLevel,Qf=Ut.unstable_ImmediatePriority,aw=Ut.unstable_UserBlockingPriority,Hl=Ut.unstable_NormalPriority,JS=Ut.unstable_LowPriority,lw=Ut.unstable_IdlePriority,Wu=null,An=null;function ZS(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:nA,eA=Math.log,tA=Math.LN2;function nA(t){return t>>>=0,t===0?32:31-(eA(t)/tA|0)|0}var Ya=64,Xa=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oo(a):(s&=o,s!==0&&(r=oo(s)))}else o=n&~i,o!==0?r=oo(o):s!==0&&(r=oo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function rA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=rA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uw(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function sA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function cw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hw,Xf,dw,fw,pw,wd=!1,Ja=[],_r=null,wr=null,Er=null,Mo=new Map,Fo=new Map,ar=[],oA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wa(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aA(t,e,n,r,i){switch(e){case"focusin":return _r=Ks(_r,t,e,n,r,i),!0;case"dragenter":return wr=Ks(wr,t,e,n,r,i),!0;case"mouseover":return Er=Ks(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,Ks(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fo.set(s,Ks(Fo.get(s)||null,t,e,n,r,i)),!0}return!1}function mw(t){var e=Yr(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=rw(n),e!==null){t.blockedOn=e,pw(t.priority,function(){dw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);md=r,n.target.dispatchEvent(r),md=null}else return e=wa(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Cg(t,e,n){Il(t)&&n.delete(e)}function lA(){wd=!1,_r!==null&&Il(_r)&&(_r=null),wr!==null&&Il(wr)&&(wr=null),Er!==null&&Il(Er)&&(Er=null),Mo.forEach(Cg),Fo.forEach(Cg)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,lA)))}function jo(t){function e(i){return Gs(i,t)}if(0<Ja.length){Gs(Ja[0],t);for(var n=1;n<Ja.length;n++){var r=Ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&Gs(_r,t),wr!==null&&Gs(wr,t),Er!==null&&Gs(Er,t),Mo.forEach(e),Fo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)mw(n),n.blockedOn===null&&ar.shift()}var os=er.ReactCurrentBatchConfig,Kl=!0;function uA(t,e,n,r){var i=ae,s=os.transition;os.transition=null;try{ae=1,Jf(t,e,n,r)}finally{ae=i,os.transition=s}}function cA(t,e,n,r){var i=ae,s=os.transition;os.transition=null;try{ae=4,Jf(t,e,n,r)}finally{ae=i,os.transition=s}}function Jf(t,e,n,r){if(Kl){var i=Ed(t,e,n,r);if(i===null)uh(t,e,r,Gl,n),Pg(t,r);else if(aA(i,t,e,n,r))r.stopPropagation();else if(Pg(t,r),e&4&&-1<oA.indexOf(t)){for(;i!==null;){var s=wa(i);if(s!==null&&hw(s),s=Ed(t,e,n,r),s===null&&uh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uh(t,e,r,null,n)}}var Gl=null;function Ed(t,e,n,r){if(Gl=null,t=Gf(r),t=Yr(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function gw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XS()){case Qf:return 1;case aw:return 4;case Hl:case JS:return 16;case lw:return 536870912;default:return 16}default:return 16}}var pr=null,Zf=null,Sl=null;function yw(){if(Sl)return Sl;var t,e=Zf,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Ng(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Ng,this.isPropagationStopped=Ng,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=zt(Ns),_a=Te({},Ns,{view:0,detail:0}),hA=zt(_a),eh,th,Qs,Hu=Te({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(eh=t.screenX-Qs.screenX,th=t.screenY-Qs.screenY):th=eh=0,Qs=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),bg=zt(Hu),dA=Te({},Hu,{dataTransfer:0}),fA=zt(dA),pA=Te({},_a,{relatedTarget:0}),nh=zt(pA),mA=Te({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),gA=zt(mA),yA=Te({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vA=zt(yA),_A=Te({},Ns,{data:0}),Dg=zt(_A),wA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TA[t])?!!e[t]:!1}function tp(){return IA}var SA=Te({},_a,{key:function(t){if(t.key){var e=wA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AA=zt(SA),xA=Te({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Og=zt(xA),RA=Te({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),kA=zt(RA),PA=Te({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),CA=zt(PA),NA=Te({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bA=zt(NA),DA=[9,13,27,32],np=Hn&&"CompositionEvent"in window,vo=null;Hn&&"documentMode"in document&&(vo=document.documentMode);var OA=Hn&&"TextEvent"in window&&!vo,vw=Hn&&(!np||vo&&8<vo&&11>=vo),Lg=String.fromCharCode(32),Vg=!1;function _w(t,e){switch(t){case"keyup":return DA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function LA(t,e){switch(t){case"compositionend":return ww(e);case"keypress":return e.which!==32?null:(Vg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Vg?null:t;default:return null}}function VA(t,e){if(Wi)return t==="compositionend"||!np&&_w(t,e)?(t=yw(),Sl=Zf=pr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vw&&e.locale!=="ko"?null:e.data;default:return null}}var MA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MA[t.type]:e==="textarea"}function Ew(t,e,n,r){J_(r),e=Ql(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Uo=null;function FA(t){bw(t,0)}function qu(t){var e=Ki(t);if(H_(e))return t}function jA(t,e){if(t==="change")return e}var Tw=!1;if(Hn){var rh;if(Hn){var ih="oninput"in document;if(!ih){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),ih=typeof Fg.oninput=="function"}rh=ih}else rh=!1;Tw=rh&&(!document.documentMode||9<document.documentMode)}function jg(){_o&&(_o.detachEvent("onpropertychange",Iw),Uo=_o=null)}function Iw(t){if(t.propertyName==="value"&&qu(Uo)){var e=[];Ew(e,Uo,t,Gf(t)),nw(FA,e)}}function UA(t,e,n){t==="focusin"?(jg(),_o=e,Uo=n,_o.attachEvent("onpropertychange",Iw)):t==="focusout"&&jg()}function $A(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(Uo)}function BA(t,e){if(t==="click")return qu(e)}function zA(t,e){if(t==="input"||t==="change")return qu(e)}function WA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:WA;function $o(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rd.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $g(t,e){var n=Ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function Sw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Aw(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HA(t){var e=Aw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sw(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$g(n,s);var o=$g(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qA=Hn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Td=null,wo=null,Id=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||Hi==null||Hi!==Bl(r)||(r=Hi,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&$o(wo,r)||(wo=r,r=Ql(Td,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},sh={},xw={};Hn&&(xw=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Ku(t){if(sh[t])return sh[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xw)return sh[t]=e[n];return t}var Rw=Ku("animationend"),kw=Ku("animationiteration"),Pw=Ku("animationstart"),Cw=Ku("transitionend"),Nw=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Nw.set(t,e),Ai(e,[t])}for(var oh=0;oh<zg.length;oh++){var ah=zg[oh],KA=ah.toLowerCase(),GA=ah[0].toUpperCase()+ah.slice(1);Mr(KA,"on"+GA)}Mr(Rw,"onAnimationEnd");Mr(kw,"onAnimationIteration");Mr(Pw,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Cw,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KS(r,e,void 0,t),t.currentTarget=null}function bw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}}}if(Wl)throw t=vd,Wl=!1,vd=null,t}function he(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||(Dw(e,t,2,!1),n.add(r))}function lh(t,e,n){var r=0;e&&(r|=4),Dw(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[tl]){t[tl]=!0,U_.forEach(function(n){n!=="selectionchange"&&(QA.has(n)||lh(n,!1,t),lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,lh("selectionchange",!1,e))}}function Dw(t,e,n,r){switch(gw(e)){case 1:var i=uA;break;case 4:i=cA;break;default:i=Jf}n=i.bind(null,e,n,t),i=void 0,!yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nw(function(){var u=s,c=Gf(n),h=[];e:{var d=Nw.get(t);if(d!==void 0){var g=ep,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":g=AA;break;case"focusin":_="focus",g=nh;break;case"focusout":_="blur",g=nh;break;case"beforeblur":case"afterblur":g=nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=fA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kA;break;case Rw:case kw:case Pw:g=gA;break;case Cw:g=CA;break;case"scroll":g=hA;break;case"wheel":g=bA;break;case"copy":case"cut":case"paste":g=vA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Og}var w=(e&4)!==0,T=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=Vo(p,m),E!=null&&w.push(zo(p,E,y)))),T)break;p=p.return}0<w.length&&(d=new g(d,_,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==md&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[qn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Yr(_):null,_!==null&&(T=xi(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(w=bg,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Og,E="onPointerLeave",m="onPointerEnter",p="pointer"),T=g==null?d:Ki(g),y=_==null?d:Ki(_),d=new w(E,p+"leave",g,n,c),d.target=T,d.relatedTarget=y,E=null,Yr(c)===u&&(w=new w(m,p+"enter",_,n,c),w.target=y,w.relatedTarget=T,E=w),T=E,g&&_)t:{for(w=g,m=_,p=0,y=w;y;y=Vi(y))p++;for(y=0,E=m;E;E=Vi(E))y++;for(;0<p-y;)w=Vi(w),p--;for(;0<y-p;)m=Vi(m),y--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Vi(w),m=Vi(m)}w=null}else w=null;g!==null&&Hg(h,d,g,w,!1),_!==null&&T!==null&&Hg(h,T,_,w,!0)}}e:{if(d=u?Ki(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var x=jA;else if(Mg(d))if(Tw)x=zA;else{x=$A;var N=UA}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=BA);if(x&&(x=x(t,u))){Ew(h,x,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&cd(d,"number",d.value)}switch(N=u?Ki(u):window,t){case"focusin":(Mg(N)||N.contentEditable==="true")&&(Hi=N,Td=u,wo=null);break;case"focusout":wo=Td=Hi=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Bg(h,n,c);break;case"selectionchange":if(qA)break;case"keydown":case"keyup":Bg(h,n,c)}var D;if(np)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Wi?_w(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(vw&&n.locale!=="ko"&&(Wi||F!=="onCompositionStart"?F==="onCompositionEnd"&&Wi&&(D=yw()):(pr=c,Zf="value"in pr?pr.value:pr.textContent,Wi=!0)),N=Ql(u,F),0<N.length&&(F=new Dg(F,t,null,n,c),h.push({event:F,listeners:N}),D?F.data=D:(D=ww(n),D!==null&&(F.data=D)))),(D=OA?LA(t,n):VA(t,n))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(c=new Dg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}bw(h,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Vo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function Vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vo(n,s),l!=null&&o.unshift(zo(n,l,a))):i||(l=Vo(n,s),l!=null&&o.push(zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YA=/\r\n?/g,XA=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(YA,`
`).replace(XA,"")}function nl(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(P(425))}function Yl(){}var Sd=null,Ad=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,JA=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,ZA=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(ex)}:Rd;function ex(t){setTimeout(function(){throw t})}function ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),_n="__reactFiber$"+bs,Wo="__reactProps$"+bs,qn="__reactContainer$"+bs,kd="__reactEvents$"+bs,tx="__reactListeners$"+bs,nx="__reactHandles$"+bs;function Yr(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[_n])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[_n]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Gu(t){return t[Wo]||null}var Pd=[],Gi=-1;function Fr(t){return{current:t}}function pe(t){0>Gi||(t.current=Pd[Gi],Pd[Gi]=null,Gi--)}function ce(t,e){Gi++,Pd[Gi]=t.current,t.current=e}var Dr={},pt=Fr(Dr),Pt=Fr(!1),ci=Dr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Xl(){pe(Pt),pe(pt)}function Qg(t,e,n){if(pt.current!==Dr)throw Error(P(168));ce(pt,e),ce(Pt,n)}function Ow(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,US(t)||"Unknown",i));return Te({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ci=pt.current,ce(pt,t),ce(Pt,Pt.current),!0}function Yg(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=Ow(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,pe(Pt),pe(pt),ce(pt,t)):pe(Pt),ce(Pt,n)}var Mn=null,Qu=!1,hh=!1;function Lw(t){Mn===null?Mn=[t]:Mn.push(t)}function rx(t){Qu=!0,Lw(t)}function jr(){if(!hh&&Mn!==null){hh=!0;var t=0,e=ae;try{var n=Mn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,Qu=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),ow(Qf,jr),i}finally{ae=e,hh=!1}}return null}var Qi=[],Yi=0,Zl=null,eu=0,Ht=[],qt=0,hi=null,Fn=1,jn="";function Kr(t,e){Qi[Yi++]=eu,Qi[Yi++]=Zl,Zl=t,eu=e}function Vw(t,e,n){Ht[qt++]=Fn,Ht[qt++]=jn,Ht[qt++]=hi,hi=t;var r=Fn;t=jn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-an(e)+i|n<<i|r,jn=s+t}else Fn=1<<s|n<<i|r,jn=t}function ip(t){t.return!==null&&(Kr(t,1),Vw(t,1,0))}function sp(t){for(;t===Zl;)Zl=Qi[--Yi],Qi[Yi]=null,eu=Qi[--Yi],Qi[Yi]=null;for(;t===hi;)hi=Ht[--qt],Ht[qt]=null,jn=Ht[--qt],Ht[qt]=null,Fn=Ht[--qt],Ht[qt]=null}var Ft=null,Lt=null,_e=!1,sn=null;function Mw(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:Fn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Lt=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(_e){var e=Lt;if(e){var n=e;if(!Xg(t,e)){if(Cd(t))throw Error(P(418));e=Tr(n.nextSibling);var r=Ft;e&&Xg(t,e)?Mw(r,n):(t.flags=t.flags&-4097|2,_e=!1,Ft=t)}}else{if(Cd(t))throw Error(P(418));t.flags=t.flags&-4097|2,_e=!1,Ft=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function rl(t){if(t!==Ft)return!1;if(!_e)return Jg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=Lt)){if(Cd(t))throw Fw(),Error(P(418));for(;e;)Mw(t,e),e=Tr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ft?Tr(t.stateNode.nextSibling):null;return!0}function Fw(){for(var t=Lt;t;)t=Tr(t.nextSibling)}function gs(){Lt=Ft=null,_e=!1}function op(t){sn===null?sn=[t]:sn.push(t)}var ix=er.ReactCurrentBatchConfig;function nn(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=Fr(null),nu=null,Xi=null,ap=null;function lp(){ap=Xi=nu=null}function up(t){var e=tu.current;pe(tu),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){nu=t,ap=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(nu===null)throw Error(P(308));Xi=t,nu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var Xr=null;function cp(t){Xr===null?Xr=[t]:Xr.push(t)}function jw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}function Zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(d=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=Te({},h,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=h}}function ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var $w=new j_.Component().refs;function Dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Ar(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(ln(e,t,i,r),xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Ar(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(ln(e,t,i,r),xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Ar(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(ln(e,t,r,n),xl(e,t,r))}};function ty(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function Bw(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Ct(e)?ci:pt.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$w,hp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Ct(e)?ci:pt.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$w&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ry(t){var e=t._init;return e(t._payload)}function zw(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=xr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,E){return p===null||p.tag!==6?(p=vh(y,m.mode,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,E){var x=y.type;return x===zi?c(m,p,y.props.children,E,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sr&&ry(x)===p.type)?(E=i(p,y.props),E.ref=Ys(m,p,y),E.return=m,E):(E=bl(y.type,y.key,y.props,null,m.mode,E),E.ref=Ys(m,p,y),E.return=m,E)}function u(m,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=_h(y,m.mode,E),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,E,x){return p===null||p.tag!==7?(p=oi(y,m.mode,E,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vh(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ka:return y=bl(p.type,p.key,p.props,null,m.mode,y),y.ref=Ys(m,null,p),y.return=m,y;case Bi:return p=_h(p,m.mode,y),p.return=m,p;case sr:var E=p._init;return h(m,E(p._payload),y)}if(so(p)||Hs(p))return p=oi(p,m.mode,y,null),p.return=m,p;il(m,p)}return null}function d(m,p,y,E){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:return y.key===x?l(m,p,y,E):null;case Bi:return y.key===x?u(m,p,y,E):null;case sr:return x=y._init,d(m,p,x(y._payload),E)}if(so(y)||Hs(y))return x!==null?null:c(m,p,y,E,null);il(m,y)}return null}function g(m,p,y,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(p,m,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ka:return m=m.get(E.key===null?y:E.key)||null,l(p,m,E,x);case Bi:return m=m.get(E.key===null?y:E.key)||null,u(p,m,E,x);case sr:var N=E._init;return g(m,p,y,N(E._payload),x)}if(so(E)||Hs(E))return m=m.get(y)||null,c(p,m,E,x,null);il(p,E)}return null}function _(m,p,y,E){for(var x=null,N=null,D=p,F=p=0,Z=null;D!==null&&F<y.length;F++){D.index>F?(Z=D,D=null):Z=D.sibling;var H=d(m,D,y[F],E);if(H===null){D===null&&(D=Z);break}t&&D&&H.alternate===null&&e(m,D),p=s(H,p,F),N===null?x=H:N.sibling=H,N=H,D=Z}if(F===y.length)return n(m,D),_e&&Kr(m,F),x;if(D===null){for(;F<y.length;F++)D=h(m,y[F],E),D!==null&&(p=s(D,p,F),N===null?x=D:N.sibling=D,N=D);return _e&&Kr(m,F),x}for(D=r(m,D);F<y.length;F++)Z=g(D,m,F,y[F],E),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?F:Z.key),p=s(Z,p,F),N===null?x=Z:N.sibling=Z,N=Z);return t&&D.forEach(function(Pe){return e(m,Pe)}),_e&&Kr(m,F),x}function w(m,p,y,E){var x=Hs(y);if(typeof x!="function")throw Error(P(150));if(y=x.call(y),y==null)throw Error(P(151));for(var N=x=null,D=p,F=p=0,Z=null,H=y.next();D!==null&&!H.done;F++,H=y.next()){D.index>F?(Z=D,D=null):Z=D.sibling;var Pe=d(m,D,H.value,E);if(Pe===null){D===null&&(D=Z);break}t&&D&&Pe.alternate===null&&e(m,D),p=s(Pe,p,F),N===null?x=Pe:N.sibling=Pe,N=Pe,D=Z}if(H.done)return n(m,D),_e&&Kr(m,F),x;if(D===null){for(;!H.done;F++,H=y.next())H=h(m,H.value,E),H!==null&&(p=s(H,p,F),N===null?x=H:N.sibling=H,N=H);return _e&&Kr(m,F),x}for(D=r(m,D);!H.done;F++,H=y.next())H=g(D,m,F,H.value,E),H!==null&&(t&&H.alternate!==null&&D.delete(H.key===null?F:H.key),p=s(H,p,F),N===null?x=H:N.sibling=H,N=H);return t&&D.forEach(function(ee){return e(m,ee)}),_e&&Kr(m,F),x}function T(m,p,y,E){if(typeof y=="object"&&y!==null&&y.type===zi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:e:{for(var x=y.key,N=p;N!==null;){if(N.key===x){if(x=y.type,x===zi){if(N.tag===7){n(m,N.sibling),p=i(N,y.props.children),p.return=m,m=p;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sr&&ry(x)===N.type){n(m,N.sibling),p=i(N,y.props),p.ref=Ys(m,N,y),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}y.type===zi?(p=oi(y.props.children,m.mode,E,y.key),p.return=m,m=p):(E=bl(y.type,y.key,y.props,null,m.mode,E),E.ref=Ys(m,p,y),E.return=m,m=E)}return o(m);case Bi:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=_h(y,m.mode,E),p.return=m,m=p}return o(m);case sr:return N=y._init,T(m,p,N(y._payload),E)}if(so(y))return _(m,p,y,E);if(Hs(y))return w(m,p,y,E);il(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=vh(y,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return T}var ys=zw(!0),Ww=zw(!1),Ea={},xn=Fr(Ea),Ho=Fr(Ea),qo=Fr(Ea);function Jr(t){if(t===Ea)throw Error(P(174));return t}function dp(t,e){switch(ce(qo,e),ce(Ho,t),ce(xn,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dd(e,t)}pe(xn),ce(xn,e)}function vs(){pe(xn),pe(Ho),pe(qo)}function Hw(t){Jr(qo.current);var e=Jr(xn.current),n=dd(e,t.type);e!==n&&(ce(Ho,t),ce(xn,n))}function fp(t){Ho.current===t&&(pe(xn),pe(Ho))}var we=Fr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dh=[];function pp(){for(var t=0;t<dh.length;t++)dh[t]._workInProgressVersionPrimary=null;dh.length=0}var Rl=er.ReactCurrentDispatcher,fh=er.ReactCurrentBatchConfig,di=0,Ee=null,Ue=null,He=null,su=!1,Eo=!1,Ko=0,sx=0;function it(){throw Error(P(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(di=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?ux:cx,t=n(r,i),Eo){s=0;do{if(Eo=!1,Ko=0,25<=s)throw Error(P(301));s+=1,He=Ue=null,e.updateQueue=null,Rl.current=hx,t=n(r,i)}while(Eo)}if(Rl.current=ou,e=Ue!==null&&Ue.next!==null,di=0,He=Ue=Ee=null,su=!1,e)throw Error(P(300));return t}function yp(){var t=Ko!==0;return Ko=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ee.memoizedState=He=t:He=He.next=t,He}function Xt(){if(Ue===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Ee.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(P(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ee.memoizedState=He=t:He=He.next=t}return He}function Go(t,e){return typeof e=="function"?e(t):e}function ph(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((di&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ee.lanes|=c,fi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qw(){}function Kw(t,e){var n=Ee,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,vp(Yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Qo(9,Qw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(P(349));di&30||Gw(n,e,i)}return i}function Gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qw(t,e,n,r){e.value=n,e.getSnapshot=r,Xw(e)&&Jw(t)}function Yw(t,e,n){return n(function(){Xw(e)&&Jw(t)})}function Xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function Jw(t){var e=Kn(t,1);e!==null&&ln(e,t,1,-1)}function iy(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=lx.bind(null,Ee,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zw(){return Xt().memoizedState}function kl(t,e,n,r){var i=yn();Ee.flags|=t,i.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function Xu(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&mp(r,o.deps)){i.memoizedState=Qo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Qo(1|e,n,s,r)}function sy(t,e){return kl(8390656,8,t,e)}function vp(t,e){return Xu(2048,8,t,e)}function e0(t,e){return Xu(4,2,t,e)}function t0(t,e){return Xu(4,4,t,e)}function n0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,n0.bind(null,e,t),n)}function _p(){}function i0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o0(t,e,n){return di&21?(un(n,e)||(n=uw(),Ee.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function ox(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=fh.transition;fh.transition={};try{t(!1),e()}finally{ae=n,fh.transition=r}}function a0(){return Xt().memoizedState}function ax(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l0(t))u0(e,n);else if(n=jw(t,e,n,r),n!==null){var i=Et();ln(n,t,r,i),c0(n,e,r)}}function lx(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l0(t))u0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,cp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jw(t,e,i,r),n!==null&&(i=Et(),ln(n,t,r,i),c0(n,e,r))}}function l0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function u0(t,e){Eo=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}var ou={readContext:Yt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},ux={readContext:Yt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,n0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ax.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:iy,useDebugValue:_p,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=iy(!1),e=t[0];return t=ox.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),qe===null)throw Error(P(349));di&30||Gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sy(Yw.bind(null,r,s,t),[t]),r.flags|=2048,Qo(9,Qw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=qe.identifierPrefix;if(_e){var n=jn,r=Fn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cx={readContext:Yt,useCallback:i0,useContext:Yt,useEffect:vp,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:ph,useRef:Zw,useState:function(){return ph(Go)},useDebugValue:_p,useDeferredValue:function(t){var e=Xt();return o0(e,Ue.memoizedState,t)},useTransition:function(){var t=ph(Go)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:a0,unstable_isNewReconciler:!1},hx={readContext:Yt,useCallback:i0,useContext:Yt,useEffect:vp,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:mh,useRef:Zw,useState:function(){return mh(Go)},useDebugValue:_p,useDeferredValue:function(t){var e=Xt();return Ue===null?e.memoizedState=t:o0(e,Ue.memoizedState,t)},useTransition:function(){var t=mh(Go)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:a0,unstable_isNewReconciler:!1};function _s(t,e){try{var n="",r=e;do n+=jS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dx=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Hd=r),Ld(t,e)},n}function d0(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xx.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var fx=er.ReactCurrentOwner,kt=!1;function vt(t,e,n,r){e.child=t===null?Ww(e,null,n,r):ys(e,t.child,n,r)}function uy(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=gp(t,e,n,r,s,i),n=yp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(_e&&n&&ip(e),e.flags|=1,vt(t,e,r,i),e.child)}function cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f0(t,e,s,r,i)):(t=bl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function f0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Vd(t,e,n,r,i)}function p0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Zi,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Zi,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Zi,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Zi,Ot),Ot|=r;return vt(t,e,i,n),e.child}function m0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,r,i){var s=Ct(n)?ci:pt.current;return s=ms(e,s),as(e,i),n=gp(t,e,n,r,s,i),r=yp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(_e&&r&&ip(e),e.flags|=1,vt(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(Ct(n)){var s=!0;Jl(e)}else s=!1;if(as(e,i),e.stateNode===null)Pl(t,e),Bw(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?ci:pt.current,u=ms(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ny(e,o,r,u),or=!1;var d=e.memoizedState;o.state=d,ru(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Pt.current||or?(typeof c=="function"&&(Dd(e,n,c,r),l=e.memoizedState),(a=or||ty(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Ct(n)?ci:pt.current,l=ms(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ny(e,o,r,l),or=!1,d=e.memoizedState,o.state=d,ru(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Pt.current||or?(typeof g=="function"&&(Dd(e,n,g,r),_=e.memoizedState),(u=or||ty(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Md(t,e,n,r,s,i)}function Md(t,e,n,r,i,s){m0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yg(e,n,!1),Gn(t,e,s);r=e.stateNode,fx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Yg(e,n,!0),e.child}function g0(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),dp(t,e.containerInfo)}function dy(t,e,n,r,i){return gs(),op(i),e.flags|=256,vt(t,e,n,r),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function y0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(we,i&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jd(n),e.memoizedState=Fd,t):wp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return px(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fd,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wp(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&op(r),ys(e,t.child,null,n),t=wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function px(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gh(Error(P(422))),sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ec({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=jd(o),e.memoizedState=Fd,s);if(!(e.mode&1))return sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=gh(s,r,void 0),sl(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),ln(r,t,i,-1))}return xp(),r=gh(Error(P(421))),sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Rx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Tr(i.nextSibling),Ft=e,_e=!0,sn=null,t!==null&&(Ht[qt++]=Fn,Ht[qt++]=jn,Ht[qt++]=hi,Fn=t.id,jn=t.overflow,hi=e),e=wp(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function v0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mx(t,e,n){switch(e.tag){case 3:g0(e),gs();break;case 5:Hw(e);break;case 1:Ct(e.type)&&Jl(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?y0(t,e,n):(ce(we,we.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);ce(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,p0(t,e,n)}return Gn(t,e,n)}var _0,Ud,w0,E0;_0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ud=function(){};w0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(xn.current);var s=null;switch(n){case"input":i=ld(t,i),r=ld(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=hd(t,i),r=hd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}fd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};E0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gx(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&Xl(),st(e),null;case 3:return r=e.stateNode,vs(),pe(Pt),pe(pt),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Gd(sn),sn=null))),Ud(t,e),st(e),null;case 5:fp(e);var i=Jr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return st(e),null}if(t=Jr(xn.current),rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ao.length;i++)he(ao[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Tg(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Sg(r,s),he("invalid",r)}fd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,a,t),i=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Ga(r),Ig(r,s,!0);break;case"textarea":Ga(r),Ag(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Wo]=r,_0(t,e,!1,!1),e.stateNode=t;e:{switch(o=pd(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ao.length;i++)he(ao[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Tg(t,r),i=ld(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),he("invalid",t);break;case"textarea":Sg(t,r),i=hd(t,r),he("invalid",t);break;default:i=r}fd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Q_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(t,l):typeof l=="number"&&Lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&Wf(t,s,l,o))}switch(n){case"input":Ga(t),Ig(t,r,!1);break;case"textarea":Ga(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)E0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Jr(qo.current),Jr(xn.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return st(e),null;case 13:if(pe(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Lt!==null&&e.mode&1&&!(e.flags&128))Fw(),gs(),e.flags|=98560,s=!1;else if(s=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[_n]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else sn!==null&&(Gd(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?$e===0&&($e=3):xp())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return vs(),Ud(t,e),t===null&&Bo(e.stateNode.containerInfo),st(e),null;case 10:return up(e.type._context),st(e),null;case 17:return Ct(e.type)&&Xl(),st(e),null;case 19:if(pe(we),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xs(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>ws&&(e.flags|=128,r=!0,Xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return st(e),null}else 2*be()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=we.current,ce(we,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function yx(t,e){switch(sp(e),e.tag){case 1:return Ct(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),pe(Pt),pe(pt),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(pe(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(we),null;case 4:return vs(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var ol=!1,lt=!1,vx=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function $d(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var py=!1;function _x(t,e){if(Sd=Kl,t=Aw(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},Kl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,T=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:nn(e.type,w),T);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return _=py,py=!1,_}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$d(e,n,s)}i=i.next}while(i!==r)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T0(t){var e=t.alternate;e!==null&&(t.alternate=null,T0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Wo],delete e[kd],delete e[tx],delete e[nx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}var Ye=null,rn=!1;function nr(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:lt||Ji(n,e);case 6:var r=Ye,i=rn;Ye=null,nr(t,e,n),Ye=r,rn=i,Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?ch(t.parentNode,n):t.nodeType===1&&ch(t,n),jo(t)):ch(Ye,n.stateNode));break;case 4:r=Ye,i=rn,Ye=n.stateNode.containerInfo,rn=!0,nr(t,e,n),Ye=r,rn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!lt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,nr(t,e,n),lt=r):nr(t,e,n);break;default:nr(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vx),e.forEach(function(r){var i=kx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,rn=!1;break e;case 3:Ye=a.stateNode.containerInfo,rn=!0;break e;case 4:Ye=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(Ye===null)throw Error(P(160));S0(s,o,i),Ye=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),mn(t),r&4){try{To(3,t,t.return),Ju(3,t)}catch(w){Ae(t,t.return,w)}try{To(5,t,t.return)}catch(w){Ae(t,t.return,w)}}break;case 1:tn(e,t),mn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(tn(e,t),mn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Lo(i,"")}catch(w){Ae(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q_(i,s),pd(a,o);var u=pd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?X_(i,h):c==="dangerouslySetInnerHTML"?Q_(i,h):c==="children"?Lo(i,h):Wf(i,c,h,u)}switch(a){case"input":ud(i,s);break;case"textarea":K_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rs(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(w){Ae(t,t.return,w)}}break;case 6:if(tn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ae(t,t.return,w)}}break;case 3:if(tn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(w){Ae(t,t.return,w)}break;case 4:tn(e,t),mn(t);break;case 13:tn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=be())),r&4&&gy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,tn(e,t),lt=u):tn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:To(4,d,d.return);break;case 1:Ji(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Ae(r,n,w)}}break;case 5:Ji(d,d.return);break;case 22:if(d.memoizedState!==null){vy(h);continue}}g!==null?(g.return=d,M=g):vy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y_("display",o))}catch(w){Ae(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ae(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tn(e,t),mn(t),r&4&&gy(t);break;case 21:break;default:tn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var s=my(t);Wd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=my(t);zd(t,a,o);break;default:throw Error(P(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wx(t,e,n){M=t,x0(t)}function x0(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ol;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=ol;var u=lt;if(ol=o,(lt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?_y(i):l!==null?(l.return=o,M=l):_y(i);for(;s!==null;)M=s,x0(s),s=s.sibling;M=i,ol=a,lt=u}yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):yy(t)}}function yy(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||Ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ey(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ey(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}lt||e.flags&512&&Bd(e)}catch(d){Ae(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function vy(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function _y(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{Bd(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{Bd(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var Ex=Math.ceil,au=er.ReactCurrentDispatcher,Ep=er.ReactCurrentOwner,Qt=er.ReactCurrentBatchConfig,se=0,qe=null,Fe=null,Ze=0,Ot=0,Zi=Fr(0),$e=0,Yo=null,fi=0,Zu=0,Tp=0,Io=null,xt=null,Ip=0,ws=1/0,Vn=null,lu=!1,Hd=null,Sr=null,al=!1,mr=null,uu=0,So=0,qd=null,Cl=-1,Nl=0;function Et(){return se&6?be():Cl!==-1?Cl:Cl=be()}function Ar(t){return t.mode&1?se&2&&Ze!==0?Ze&-Ze:ix.transition!==null?(Nl===0&&(Nl=uw()),Nl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:gw(t.type)),t):1}function ln(t,e,n,r){if(50<So)throw So=0,qd=null,Error(P(185));va(t,n,r),(!(se&2)||t!==qe)&&(t===qe&&(!(se&2)&&(Zu|=n),$e===4&&lr(t,Ze)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(ws=be()+500,Qu&&jr()))}function Nt(t,e){var n=t.callbackNode;iA(t,e);var r=ql(t,t===qe?Ze:0);if(r===0)n!==null&&kg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kg(n),e===1)t.tag===0?rx(wy.bind(null,t)):Lw(wy.bind(null,t)),ZA(function(){!(se&6)&&jr()}),n=null;else{switch(cw(r)){case 1:n=Qf;break;case 4:n=aw;break;case 16:n=Hl;break;case 536870912:n=lw;break;default:n=Hl}n=O0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(Cl=-1,Nl=0,se&6)throw Error(P(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=ql(t,t===qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=se;se|=2;var s=P0();(qe!==t||Ze!==e)&&(Vn=null,ws=be()+500,si(t,e));do try{Sx();break}catch(a){k0(t,a)}while(1);lp(),au.current=s,se=i,Fe!==null?e=0:(qe=null,Ze=0,e=$e)}if(e!==0){if(e===2&&(i=_d(t),i!==0&&(r=i,e=Kd(t,i))),e===1)throw n=Yo,si(t,0),lr(t,r),Nt(t,be()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Tx(i)&&(e=cu(t,r),e===2&&(s=_d(t),s!==0&&(r=s,e=Kd(t,s))),e===1))throw n=Yo,si(t,0),lr(t,r),Nt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Gr(t,xt,Vn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Ip+500-be(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rd(Gr.bind(null,t,xt,Vn),e);break}Gr(t,xt,Vn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ex(r/1960))-r,10<r){t.timeoutHandle=Rd(Gr.bind(null,t,xt,Vn),r);break}Gr(t,xt,Vn);break;case 5:Gr(t,xt,Vn);break;default:throw Error(P(329))}}}return Nt(t,be()),t.callbackNode===n?R0.bind(null,t):null}function Kd(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=cu(t,e),t!==2&&(e=xt,xt=n,e!==null&&Gd(e)),t}function Gd(t){xt===null?xt=t:xt.push.apply(xt,t)}function Tx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Tp,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function wy(t){if(se&6)throw Error(P(327));ls();var e=ql(t,0);if(!(e&1))return Nt(t,be()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=_d(t);r!==0&&(e=r,n=Kd(t,r))}if(n===1)throw n=Yo,si(t,0),lr(t,e),Nt(t,be()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,xt,Vn),Nt(t,be()),null}function Sp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ws=be()+500,Qu&&jr())}}function pi(t){mr!==null&&mr.tag===0&&!(se&6)&&ls();var e=se;se|=1;var n=Qt.transition,r=ae;try{if(Qt.transition=null,ae=1,t)return t()}finally{ae=r,Qt.transition=n,se=e,!(se&6)&&jr()}}function Ap(){Ot=Zi.current,pe(Zi)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JA(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:vs(),pe(Pt),pe(pt),pp();break;case 5:fp(r);break;case 4:vs();break;case 13:pe(we);break;case 19:pe(we);break;case 10:up(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(qe=t,Fe=t=xr(t.current,null),Ze=Ot=e,$e=0,Yo=null,Tp=Zu=fi=0,xt=Io=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function k0(t,e){do{var n=Fe;try{if(lp(),Rl.current=ou,su){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(di=0,He=Ue=Ee=null,Eo=!1,Ko=0,Ep.current=null,n===null||n.return===null){$e=1,Yo=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ay(o);if(g!==null){g.flags&=-257,ly(g,o,a,s,e),g.mode&1&&oy(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){oy(s,u,e),xp();break e}l=Error(P(426))}}else if(_e&&a.mode&1){var T=ay(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ly(T,o,a,s,e),op(_s(l,a));break e}}s=l=_s(l,a),$e!==4&&($e=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=h0(s,l,e);Zg(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=d0(s,a,e);Zg(s,E);break e}}s=s.return}while(s!==null)}N0(n)}catch(x){e=x,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function P0(){var t=au.current;return au.current=ou,t===null?ou:t}function xp(){($e===0||$e===3||$e===2)&&($e=4),qe===null||!(fi&268435455)&&!(Zu&268435455)||lr(qe,Ze)}function cu(t,e){var n=se;se|=2;var r=P0();(qe!==t||Ze!==e)&&(Vn=null,si(t,e));do try{Ix();break}catch(i){k0(t,i)}while(1);if(lp(),se=n,au.current=r,Fe!==null)throw Error(P(261));return qe=null,Ze=0,$e}function Ix(){for(;Fe!==null;)C0(Fe)}function Sx(){for(;Fe!==null&&!QS();)C0(Fe)}function C0(t){var e=D0(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?N0(t):Fe=e,Ep.current=null}function N0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yx(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Fe=null;return}}else if(n=gx(n,e,Ot),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);$e===0&&($e=5)}function Gr(t,e,n){var r=ae,i=Qt.transition;try{Qt.transition=null,ae=1,Ax(t,e,n,r)}finally{Qt.transition=i,ae=r}return null}function Ax(t,e,n,r){do ls();while(mr!==null);if(se&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sA(t,s),t===qe&&(Fe=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,O0(Hl,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ae;ae=1;var a=se;se|=4,Ep.current=null,_x(t,n),A0(n,t),HA(Ad),Kl=!!Sd,Ad=Sd=null,t.current=n,wx(n),YS(),se=a,ae=o,Qt.transition=s}else t.current=n;if(al&&(al=!1,mr=t,uu=i),s=t.pendingLanes,s===0&&(Sr=null),ZS(n.stateNode),Nt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=Hd,Hd=null,t;return uu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===qd?So++:(So=0,qd=t):So=0,jr(),null}function ls(){if(mr!==null){var t=cw(uu),e=Qt.transition,n=ae;try{if(Qt.transition=null,ae=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,uu=0,se&6)throw Error(P(331));var i=se;for(se|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:To(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,g=c.return;if(T0(c),c===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ju(9,a)}}catch(x){Ae(a,a.return,x)}if(a===o){M=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,M=E;break e}M=a.return}}if(se=i,jr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Wu,t)}catch{}r=!0}return r}finally{ae=n,Qt.transition=e}}return!1}function Ey(t,e,n){e=_s(n,e),e=h0(t,e,1),t=Ir(t,e,1),e=Et(),t!==null&&(va(t,1,e),Nt(t,e))}function Ae(t,e,n){if(t.tag===3)Ey(t,t,n);else for(;e!==null;){if(e.tag===3){Ey(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=_s(n,t),t=d0(e,t,1),e=Ir(e,t,1),t=Et(),e!==null&&(va(e,1,t),Nt(e,t));break}}e=e.return}}function xx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>be()-Ip?si(t,0):Tp|=n),Nt(t,e)}function b0(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=Et();t=Kn(t,e),t!==null&&(va(t,e,n),Nt(t,n))}function Rx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),b0(t,n)}var D0;D0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,mx(t,e,n);kt=!!(t.flags&131072)}else kt=!1,_e&&e.flags&1048576&&Vw(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=ms(e,pt.current);as(e,n),i=gp(null,e,r,t,i,n);var s=yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(e),i.updater=Yu,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Md(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&ip(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Cx(r),t=nn(r,t),i){case 0:e=Vd(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,nn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Vd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),hy(t,e,r,i,n);case 3:e:{if(g0(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Uw(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_s(Error(P(423)),e),e=dy(t,e,r,n,i);break e}else if(r!==i){i=_s(Error(P(424)),e),e=dy(t,e,r,n,i);break e}else for(Lt=Tr(e.stateNode.containerInfo.firstChild),Ft=e,_e=!0,sn=null,n=Ww(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Gn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Hw(e),t===null&&Nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xd(r,i)?o=null:s!==null&&xd(r,s)&&(e.flags|=32),m0(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return y0(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),uy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(tu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Pt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=Yt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),cy(t,e,r,i,n);case 15:return f0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Pl(t,e),e.tag=1,Ct(r)?(t=!0,Jl(e)):t=!1,as(e,n),Bw(e,r,i),Od(e,r,i,n),Md(null,e,r,!0,t,n);case 19:return v0(t,e,n);case 22:return p0(t,e,n)}throw Error(P(156,e.tag))};function O0(t,e){return ow(t,e)}function Px(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new Px(t,e,n,r)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qf)return 11;if(t===Kf)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return oi(n.children,i,s,e);case Hf:o=8,i|=8;break;case id:return t=Gt(12,n,e,i|2),t.elementType=id,t.lanes=s,t;case sd:return t=Gt(13,n,e,i),t.elementType=sd,t.lanes=s,t;case od:return t=Gt(19,n,e,i),t.elementType=od,t.lanes=s,t;case z_:return ec(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $_:o=10;break e;case B_:o=9;break e;case qf:o=11;break e;case Kf:o=14;break e;case sr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function ec(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function _h(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,r,i,s,o,a,l){return t=new Nx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),t}function bx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return Dr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Ow(t,n,e)}return e}function V0(t,e,n,r,i,s,o,a,l){return t=kp(n,r,!0,t,i,s,o,a,l),t.context=L0(null),n=t.current,r=Et(),i=Ar(n),s=zn(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,va(t,i,r),Nt(t,r),t}function tc(t,e,n,r){var i=e.current,s=Et(),o=Ar(i);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(ln(t,i,o,s),xl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function Dx(){return null}var M0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}nc.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));tc(t,e,null,null)};nc.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){tc(null,t,null,null)}),e[qn]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=fw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&mw(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function Ox(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=V0(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[qn]=o.current,Bo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hu(l);a.call(u)}}var l=kp(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=l,t[qn]=l.current,Bo(t.nodeType===8?t.parentNode:t),pi(function(){tc(e,l,n,r)}),l}function ic(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hu(o);a.call(l)}}tc(e,o,t,i)}else o=Ox(n,e,t,i,r);return hu(o)}hw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Yf(e,n|1),Nt(e,be()),!(se&6)&&(ws=be()+500,jr()))}break;case 13:pi(function(){var r=Kn(t,1);if(r!==null){var i=Et();ln(r,t,1,i)}}),Pp(t,1)}};Xf=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=Et();ln(e,t,134217728,n)}Pp(t,134217728)}};dw=function(t){if(t.tag===13){var e=Ar(t),n=Kn(t,e);if(n!==null){var r=Et();ln(n,t,e,r)}Pp(t,e)}};fw=function(){return ae};pw=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};gd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gu(r);if(!i)throw Error(P(90));H_(r),ud(r,i)}}}break;case"textarea":K_(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};ew=Sp;tw=pi;var Lx={usingClientEntryPoint:!1,Events:[wa,Ki,Gu,J_,Z_,Sp]},Js={findFiberByHostInstance:Yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vx={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iw(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Wu=ll.inject(Vx),An=ll}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(P(200));return bx(t,e,null,n)};Bt.createRoot=function(t,e){if(!Np(t))throw Error(P(299));var n=!1,r="",i=M0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Cp(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=iw(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return pi(t)};Bt.hydrate=function(t,e,n){if(!rc(e))throw Error(P(200));return ic(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V0(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nc(e)};Bt.render=function(t,e,n){if(!rc(e))throw Error(P(200));return ic(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!rc(t))throw Error(P(40));return t._reactRootContainer?(pi(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Sp;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return ic(t,e,n,!1,r)};Bt.version="18.2.0-next-9e3b772b8-20220608";function F0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)}catch(t){console.error(t)}}F0(),V_.exports=Bt;var Mx=V_.exports,Sy=Mx;nd.createRoot=Sy.createRoot,nd.hydrateRoot=Sy.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const Ay="popstate";function Fx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Qd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:du(i)}return Ux(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jx(){return Math.random().toString(36).substr(2,8)}function xy(t,e){return{usr:t.state,key:t.key,idx:e}}function Qd(t,e,n,r){return n===void 0&&(n=null),Xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||jx()})}function du(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ux(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=gr.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:w.location,delta:m})}function d(T,m){a=gr.Push;let p=Qd(w.location,T,m);n&&n(p,T),u=c()+1;let y=xy(p,u),E=w.createHref(p);try{o.pushState(y,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function g(T,m){a=gr.Replace;let p=Qd(w.location,T,m);n&&n(p,T),u=c();let y=xy(p,u),E=w.createHref(p);o.replaceState(y,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function _(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:du(T);return De(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ay,h),l=T,()=>{i.removeEventListener(Ay,h),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let m=_(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(T){return o.go(T)}};return w}var Ry;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ry||(Ry={}));function $x(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ds(e):e,i=Dp(r.pathname||"/",n);if(i==null)return null;let s=j0(t);Bx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Xx(s[a],eR(i));return o}function j0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Qx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of U0(s.path))i(s,o,l)}),e}function U0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=U0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Bx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Yx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zx=/^:\w+$/,Wx=3,Hx=2,qx=1,Kx=10,Gx=-2,ky=t=>t==="*";function Qx(t,e){let n=t.split("/"),r=n.length;return n.some(ky)&&(r+=Gx),e&&(r+=Hx),n.filter(i=>!ky(i)).reduce((i,s)=>i+(zx.test(s)?Wx:s===""?qx:Kx),r)}function Yx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Xx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Jx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Rr([i,c.pathname]),pathnameBase:iR(Rr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Rr([i,c.pathnameBase]))}return s}function Jx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Zx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=tR(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Zx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eR(t){try{return decodeURI(t)}catch(e){return bp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function tR(t,e){try{return decodeURIComponent(t)}catch(n){return bp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Dp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:rR(n,e):e,search:sR(r),hash:oR(i)}}function rR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Op(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=Xo({},t),De(!i.pathname||!i.pathname.includes("?"),wh("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),wh("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=nR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),iR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $0=["post","put","patch","delete"];new Set($0);const lR=["get",...$0];new Set(lR);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fu.apply(this,arguments)}const Vp=R.createContext(null),uR=R.createContext(null),Os=R.createContext(null),sc=R.createContext(null),Ur=R.createContext({outlet:null,matches:[],isDataRoute:!1}),B0=R.createContext(null);function cR(t,e){let{relative:n}=e===void 0?{}:e;Ls()||De(!1);let{basename:r,navigator:i}=R.useContext(Os),{hash:s,pathname:o,search:a}=W0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ls(){return R.useContext(sc)!=null}function Vs(){return Ls()||De(!1),R.useContext(sc).location}function z0(t){R.useContext(Os).static||R.useLayoutEffect(t)}function Ms(){let{isDataRoute:t}=R.useContext(Ur);return t?IR():hR()}function hR(){Ls()||De(!1);let t=R.useContext(Vp),{basename:e,navigator:n}=R.useContext(Os),{matches:r}=R.useContext(Ur),{pathname:i}=Vs(),s=JSON.stringify(Op(r).map(l=>l.pathnameBase)),o=R.useRef(!1);return z0(()=>{o.current=!0}),R.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Lp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Rr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function W0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=R.useContext(Ur),{pathname:i}=Vs(),s=JSON.stringify(Op(r).map(o=>o.pathnameBase));return R.useMemo(()=>Lp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function dR(t,e){return fR(t,e)}function fR(t,e,n){Ls()||De(!1);let{navigator:r}=R.useContext(Os),{matches:i}=R.useContext(Ur),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Vs(),u;if(e){var c;let w=typeof e=="string"?Ds(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||De(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=$x(t,{pathname:d}),_=vR(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Rr([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Rr([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&_?R.createElement(sc.Provider,{value:{location:fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:gr.Pop}},_):_}function pR(){let t=TR(),e=aR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,s)}const mR=R.createElement(pR,null);class gR extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(Ur.Provider,{value:this.props.routeContext},R.createElement(B0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yR(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Ur.Provider,{value:e},r)}function vR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||De(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||mR);let d=e.concat(s.slice(0,u+1)),g=()=>{let _;return c?_=h:l.route.Component?_=R.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,R.createElement(yR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?R.createElement(gR,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var H0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(H0||{}),pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pu||{});function _R(t){let e=R.useContext(Vp);return e||De(!1),e}function wR(t){let e=R.useContext(uR);return e||De(!1),e}function ER(t){let e=R.useContext(Ur);return e||De(!1),e}function q0(t){let e=ER(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function TR(){var t;let e=R.useContext(B0),n=wR(pu.UseRouteError),r=q0(pu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function IR(){let{router:t}=_R(H0.UseNavigateStable),e=q0(pu.UseNavigateStable),n=R.useRef(!1);return z0(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fu({fromRouteId:e},s)))},[t,e])}function Py(t){let{to:e,replace:n,state:r,relative:i}=t;Ls()||De(!1);let{matches:s}=R.useContext(Ur),{pathname:o}=Vs(),a=Ms(),l=Lp(e,Op(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return R.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ir(t){De(!1)}function SR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1}=t;Ls()&&De(!1);let a=e.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,_=R.useMemo(()=>{let w=Dp(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return _==null?null:R.createElement(Os.Provider,{value:l},R.createElement(sc.Provider,{children:n,value:_}))}function AR(t){let{children:e,location:n}=t;return dR(Yd(e),n)}new Promise(()=>{});function Yd(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Yd(r.props.children,s));return}r.type!==ir&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xd.apply(this,arguments)}function xR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kR(t,e){return t.button===0&&(!e||e==="_self")&&!RR(t)}const PR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],CR="startTransition",Cy=RS[CR];function NR(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=Fx({window:i,v5Compat:!0}));let o=s.current,[a,l]=R.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=R.useCallback(h=>{u&&Cy?Cy(()=>l(h)):l(h)},[l,u]);return R.useLayoutEffect(()=>o.listen(c),[o,c]),R.createElement(SR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const bR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=xR(e,PR),{basename:d}=R.useContext(Os),g,_=!1;if(typeof u=="string"&&DR.test(u)&&(g=u,bR))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Dp(y.pathname,d);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:_=!0}catch{}let w=cR(u,{relative:i}),T=OR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||T(p)}return R.createElement("a",Xd({},h,{href:g||w,onClick:_||s?r:m,ref:n,target:l}))});var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ny||(Ny={}));var by;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function OR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ms(),l=Vs(),u=W0(t,{relative:o});return R.useCallback(c=>{if(kR(c,n)){c.preventDefault();let h=r!==void 0?r:du(l)===du(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function LR({loggedIn:t,onLogin:e,handleLogout:n}){const[r,i]=R.useState(!1),s=Vs(),a=["/SnapBack/login","/SnapBack/register"].includes(s.pathname),l=()=>{i(!r)};if(a)return null;const u="/SnapBack/";return f.jsxs("div",{children:[f.jsx("nav",{className:"bg-black p-4",children:f.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[f.jsx(Le,{to:"/SnapBack/home",children:f.jsx("img",{className:"w-12 h-12",src:`${u}Snapback-Logo.png`,alt:"SnapBack Logo"})}),f.jsx("button",{onClick:l,className:"text-white p-2 md:hidden","x-transition:enter":"transition duration-300 ease-out transform","x-transition:enter-start":"opacity-0 scale-90","x-transition:enter-end":"opacity-100 scale-100","x-transition:leave":"transition duration-200 ease-in transform","x-transition:leave-start":"opacity-100 scale-100","x-transition:leave-end":"opacity-0 scale-90",children:r?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})}),f.jsxs("ul",{className:"flex space-x-8 md:flex max-md:hidden",children:[f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Home"})}),f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Games"})}),f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/games/hangman/leaderboard",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Hangman LeaderBoard"})}),f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/profile",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Profile"})}),t?f.jsx("li",{children:f.jsx("button",{onClick:n,className:"text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Logout"})}):f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/login",className:"text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Login"})}),f.jsx("li",{className:"mt-0.5",children:f.jsx(Le,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900",children:"Play Now"})})]})]})}),r&&f.jsx("div",{className:"md:hidden bg-black absolute top-16 left-0 right-0 z-50",children:f.jsxs("ul",{className:"text-white text-center py-4",children:[f.jsx("li",{className:"mb-6",children:f.jsx(Le,{to:"/SnapBack/",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Home"})}),f.jsx("li",{className:"my-6",children:f.jsx(Le,{to:"/SnapBack/games",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Games"})}),f.jsx("li",{className:"my-6",children:f.jsx(Le,{to:"/SnapBack/games/hangman/leaderboard",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Hangman LeaderBoard"})}),f.jsx("li",{className:"my-6",children:f.jsx(Le,{to:"/SnapBack/profile",className:"text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300",children:"Profile"})}),t?f.jsx("li",{className:"my-6",children:f.jsx("button",{onClick:n,className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",children:"Logout"})}):f.jsx("li",{className:"my-6",children:f.jsx(Le,{to:"/SnapBack/login",className:"block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold",onClick:l,children:"Login"})}),f.jsx("li",{className:"mt-0.5 my-6",children:f.jsx(Le,{to:"/SnapBack/games",className:"text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900",children:"Play Now"})})]})})]})}function VR({text:t}){const[e,n]=R.useState(""),[r,i]=R.useState(0);return R.useEffect(()=>{const s=setInterval(()=>{r<t.length?(n(t.substring(0,r+1)),i(r+1)):clearInterval(s)},15);return()=>{clearInterval(s)}},[t,r]),f.jsx("p",{className:"lg:mr-56 font-sans text-lg md:text-xl mt-4 text-gray-300 max-w-3xl",children:e})}const gn="/SnapBack/";function MR(){return f.jsx(f.Fragment,{children:f.jsxs("div",{children:[f.jsxs("section",{className:"relative h-[600px]",children:[f.jsx("video",{autoPlay:!0,loop:!0,muted:!0,className:"absolute inset-0 w-full h-full object-cover brightness-75",src:`${gn}intro.mp4`}),f.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-white",children:[f.jsx("div",{children:f.jsx("h6",{className:"font-[poppins] text-xl md:text-lg font-semibold",children:"Welcome to SnapBack - Indulge in the exquisite world of gaming"})}),f.jsx("div",{className:"mt-4",children:f.jsx("h1",{className:"text-4xl md:text-9xl uppercase tracking-widest font-bold font-[poppins]",children:"SnapBack"})}),f.jsx("div",{className:"border border-white p-2 mt-3",children:f.jsx(Le,{to:"/SnapBack/games",children:f.jsxs("button",{className:"btn2 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[f.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),f.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})})]})]}),f.jsxs("div",{className:"md:grid md:grid-rows-2 mb-12 grid-cols-3 gap-10 mt-6 lg:mt-24 max-lg:mx-2 lg:mx-36",children:[f.jsxs("div",{className:"relative col-span-2 h-96 group",children:[f.jsx("img",{src:`${gn}homecod.jpg`,alt:"COD",className:"border border-gray-600 brightness-50 rounded-md w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),f.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center text-white ml-4 lg:ml-8",children:[f.jsx("h2",{className:"text-4xl md:text-3xl font-extrabold font-[impact]",children:"Explore Gaming with SnapBack"}),f.jsx(VR,{text:"Join our elite community of passionate gamers. Explore the latest games, connect with fellow enthusiasts, and dominate the leaderboards in epic tournaments."})]})]}),f.jsxs("div",{className:"text-white row-span-2 col-span-1",children:[f.jsx("h2",{className:"uppercase font-[impact] text-5xl max-lg:mt-6",children:"News"}),f.jsx("hr",{className:"mb-4 mt-2 border-t-2 border-gray-300"}),f.jsx("img",{src:`${gn}assassins-creed-valhalla.jpg`,alt:"Assassins creed image",className:"w-full object-cover"}),f.jsx("h2",{className:"text-2xl lg:text-4xl mt-3 md:text-3xl font-thin font-[impact]",children:"Top Games : Everything You Need To Know"}),f.jsx("hr",{className:"my-5 border-t-2 border-gray-300"}),f.jsxs("div",{className:"flex",children:[f.jsx("img",{src:`${gn}assassins-creed-valhalla.jpg`,alt:"Assassins creed image",className:"object-cover w-36"}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Assassin's Creed Valhalla"}),f.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Embark on epic Viking adventures during the 9th century in England."})]})]}),f.jsx("hr",{className:"my-6 border-t-2 border-gray-300"}),f.jsxs("div",{className:"flex",children:[f.jsx("img",{src:`${gn}forza5.jpg`,alt:"Forza 5 image",className:"object-cover w-36"}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Forze Horizon 5"}),f.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Race through stunning landscapes in the world's most exotic cars."})]})]}),f.jsx("hr",{className:"my-6 border-t-2 border-gray-300"}),f.jsxs("div",{className:"flex",children:[f.jsx("img",{src:`${gn}rdr2.jpg`,alt:"RDR 2 image",className:"object-cover w-36"}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-light tracking-wide ml-4 font-[impact]",children:"Red Dead Redemption 2"}),f.jsx("p",{className:" font-serif tracking-wide ml-4 mt-2",children:"Step into an untamed Wild West filled with outlaws and gunfights."})]})]})]}),f.jsxs("div",{className:"relative group max-lg:mt-8 rounded-md",children:[f.jsx("img",{src:`${gn}spiderman.jpg`,alt:"Your Image",className:"brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),f.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center ml-8 text-white",children:[f.jsx("p",{className:"max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide",children:"SNAPBACK"}),f.jsx("p",{className:"max-lg:text-2xl text-4xl font-thin font-[impact] mt-4",children:"Embrace the Challenge, Take the Fight with You!"}),f.jsx(Le,{to:"/SnapBack/games",children:f.jsxs("button",{className:"btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[f.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),f.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})]})]}),f.jsxs("div",{className:"relative group max-lg:mt-6 rounded-md",children:[f.jsx("img",{src:`${gn}cod2nd.webp`,alt:"Your Image",className:"brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"}),f.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center ml-8 text-white",children:[f.jsx("p",{className:"max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide",children:"SNAPBACK"}),f.jsx("p",{className:"max-lg:text-2xl text-4xl font-thin font-[impact] mt-4",children:"Unlock Your Gaming Potential, Conquer the Virtual Realm!."}),f.jsx(Le,{to:"/SnapBack/games",children:f.jsxs("button",{className:"btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105",type:"button",children:[f.jsx("span",{className:"absolute inset-0 bg-gray-500/30"}),f.jsx("span",{className:"text-white absolute inset-0 flex justify-center items-center font-bold",children:"Play now"}),"Play now"]})})]})]})]}),f.jsx("footer",{className:"h-96 bg-black text-white py-12",children:f.jsxs("div",{className:"container mx-auto flex flex-col items-center justify-center",children:[f.jsxs("div",{className:"flex lg:space-x-4 font-[impact] text-gray-200/50 tracking-wide",children:[f.jsx("a",{href:"#",className:"lg:pr-6 hover:text-gray-400 transition-colors duration-300",children:"Privacy Policy"}),f.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),f.jsx("a",{href:"#",className:"lg:px-6 hover:text-gray-400 transition-colors duration-300",children:"Terms of Service"}),f.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),f.jsx("a",{href:"#",className:"lg:px-6 hover:text-gray-400 transition-colors duration-300",children:"Support"}),f.jsx("div",{className:"w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50"}),f.jsx(Le,{to:"/SnapBack/games",className:"",children:"Games"})]}),f.jsx("div",{className:"relative mb-10 m-8 flex items-center mx-auto",children:f.jsx("div",{className:"w-[400px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"})}),f.jsxs("div",{className:"flex space-x-12",children:[f.jsx("img",{className:"w-20",src:`${gn}Snapback-Logo.png`,alt:"SnapBack Logo"}),f.jsx("img",{className:"w-36",src:`${gn}esrb.svg`,alt:"ESRB Logo"})]}),f.jsx("div",{className:"relative mb-10 m-8 flex items-center mx-auto",children:f.jsx("div",{className:"w-[400px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"})}),f.jsxs("p",{className:"px-6 text-lg font-thing tracking-wider mb-2 font-[impact]",children:["© ",new Date().getFullYear()," SnapBack. All Rights Reserved."]})]})})]})})}function FR({wordToGuess:t,guessedLetters:e}){return f.jsx("div",{className:"lg:ml-80 mb-6 space-x-2 uppercase text-white text-3xl lg:text-5xl font-semibold ",children:t.split("").map((n,r)=>f.jsx("span",{children:e.includes(n)?n:"_ "},r))})}function jR({incorrectGuesses:t}){const e=t.length,n=[{cx:70,cy:50,r:15},{x1:70,y1:65,x2:70,y2:95},{x1:70,y1:75,x2:60,y2:85},{x1:70,y1:75,x2:80,y2:85},{x1:70,y1:95,x2:60,y2:110},{x1:70,y1:95,x2:80,y2:110},...t.length>0?[{x1:20,y1:125,x2:100,y2:125},{x1:40,y1:125,x2:40,y2:0},{x1:40,y1:0,x2:75,y2:0},{x1:60,y1:2,x2:40,y2:22},{x1:68,y1:0,x2:68,y2:35}]:[]].slice(0,e+6);return f.jsx("div",{className:"hangman-drawing flex items-center justify-center mb-6",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"w-44 h-80",children:n.map((r,i)=>r.cx?f.jsx("circle",{cx:r.cx,cy:r.cy,r:r.r,className:"hangman-part animated"},i):f.jsx("line",{x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,className:"hangman-part"},i))})})}function UR({wordToGuess:t,hint:e,guessedLetters:n,incorrectGuesses:r,onNewGame:i,onGuess:s,gameStatus:o,score:a,setScore:l,resetScore:u,totalWordsGuessed:c}){const h=R.useRef(null),d=R.useRef(null),g="/SnapBack/",_=()=>{h.current&&h.current.play()},w=()=>{d.current&&d.current.play()},T=m=>{s(m),t.includes(m)?(_(),l(a+1)):(w(),o()==="gameover"&&u())};return f.jsxs("div",{className:"p-4 rounded-lg",children:[o()==="gameover"&&f.jsxs("div",{className:"text-lg lg:text-2xl font-semibold lg:text-center",children:[f.jsxs("div",{className:"text-red-600 flex lg:justify-center",children:["Game Over! The word was: ",f.jsx("p",{className:"uppercase ml-3 ",children:t})]}),f.jsxs("div",{className:"text-white flex-1",children:[f.jsxs("p",{children:["Your score :  ",a," points"]}),f.jsxs("p",{children:["Words guessed : ",c]})]})]}),o()==="ongoing"&&f.jsxs("div",{children:[f.jsx(jR,{incorrectGuesses:r}),f.jsxs("div",{className:"lg:flex lg:justify-between lg:mr-80",children:[f.jsxs("div",{children:[f.jsx(FR,{wordToGuess:t,guessedLetters:n}),f.jsxs("p",{className:"text-white lg:ml-80 mb-6 text-lg",children:["Hint : ",e]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"lg:ml-80 mt-6 text-2xl font-semibold text-white",children:["Score: ",a]}),f.jsxs("div",{className:"lg:ml-80 mt-2 mb-6 text-2xl font-semibold text-white",children:["words guessed : ",c]})]})]}),f.jsxs("div",{className:"text-red-500 font-semibold text-lg lg:ml-80",children:[f.jsx("span",{className:"border-b-2 border-red-500",children:"Incorrect Guesses:"}),f.jsx("span",{className:"ml-2 uppercase",children:r.map((m,p)=>f.jsx("span",{className:"bg-red-500 text-white px-2 py-1 rounded-md m-1",children:m},p))})]}),f.jsx("div",{className:"lg:mx-80 mt-4 grid grid-cols-8 max-lg:grid max-lg:grid-cols-6",children:"abcdefghijklmnopqrstuvwxyz".split("").map(m=>{const p=n.includes(m),y=r.includes(m);return f.jsx("button",{onClick:()=>T(m),className:`px-4 py-3 font-semibold text-2xl uppercase rounded-lg ${p&&!y?"border-2 border-green-500 text-green-500":y?"border-2 border-red-500 text-red-500 cursor-not-allowed":"border-2 border-blue-500 text-white hover:bg-blue-700"}`,disabled:p||y,children:m},m)})}),f.jsx("audio",{ref:h,src:`${g}correct.mp3`}),f.jsx("audio",{ref:d,src:`${g}incorrect.mp3`})]}),o()==="gameover"&&f.jsx("div",{className:"lg:text-center",children:f.jsx("button",{onClick:i,className:" mt-6 py-2 px-8 border-2 font-semibold border-green-500 text-white rounded hover:bg-green-600",children:"New Game"})})]})}const $R=()=>{const t=[{word:"orange",hint:"A fruit"},{word:"banana",hint:"A yellow fruit"},{word:"computer",hint:"An electronic device"},{word:"ocean",hint:"A large body of water"},{word:"guitar",hint:"A musical instrument"},{word:"book",hint:"Contains written information"},{word:"mountain",hint:"A tall natural landform"},{word:"basketball",hint:"A sports ball used in a game"},{word:"pizza",hint:"A popular Italian dish"},{word:"bicycle",hint:"A two-wheeled vehicle"},{word:"sunglasses",hint:"Protects your eyes from the sun"},{word:"garden",hint:"A place to grow plants"},{word:"television",hint:"A device for watching shows"},{word:"jacket",hint:"Keeps you warm in cold weather"},{word:"pencil",hint:"Used for writing and drawing"},{word:"clock",hint:"Tells you the time"},{word:"cloud",hint:"Visible mass of water vapor"},{word:"chair",hint:"For sitting"},{word:"wallet",hint:"Holds money and cards"},{word:"hat",hint:"Worn on the head"},{word:"globe",hint:"Represents the Earth"},{word:"mirror",hint:"Reflects your image"},{word:"cookie",hint:"Sweet treat"},{word:"carrot",hint:"Orange vegetable"},{word:"swimming",hint:"Activity in the water"},{word:"fire",hint:"Produces heat and light"},{word:"camera",hint:"Captures memories"},{word:"socks",hint:"Worn on your feet"},{word:"key",hint:"Unlocks doors"},{word:"globe",hint:"Represents the world"},{word:"painting",hint:"Art on canvas"},{word:"moon",hint:"Lunar body"},{word:"chocolate",hint:"Sweet indulgence"},{word:"Sycophant",hint:"A person who acts obsequiously towards someone important in order to gain an advantage."},{word:"Obfuscate",hint:"To render obscure, unclear, or unintelligible."},{word:"Pernicious",hint:"Having a harmful effect, especially in a gradual or subtle way."},{word:"Ineffable",hint:"Too great or extreme to be expressed or described in words."},{word:"Inchoate",hint:"Just begun and so not fully formed or developed; rudimentary."},{word:"Lugubrious",hint:"Looking or sounding sad and dismal."},{word:"Quixotic",hint:"Exceedingly idealistic; unrealistic and impractical."},{word:"Mellifluous",hint:"Sweetly flowing or sounding."},{word:"Nefarious",hint:"Wicked, villainous, or heinously infamous."},{word:"Mendacious",hint:"Not telling the truth; lying."},{word:"Esoteric",hint:"Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest."},{word:"Cacophony",hint:"A harsh, discordant mixture of sounds."},{word:"Voracious",hint:"Wanting or devouring great quantities of food; having a very eager approach to an activity."},{word:"Surreptitious",hint:"Kept secret, especially because it would not be approved of."},{word:"Supercilious",hint:"Behaving or looking as though one thinks one is superior to others."},{word:"Querulous",hint:"Complaining in a petulant or whining manner."},{word:"Recalcitrant",hint:"Having an obstinately uncooperative attitude toward authority or discipline."},{word:"Parsimonious",hint:"Unwilling to spend money or use resources; stingy or frugal."},{word:"Idiosyncratic",hint:"Peculiar or individual."},{word:"Lethargic",hint:"Affected by lethargy; sluggish and apathetic."},{word:"Obstreperous",hint:"Noisy and difficult to control."},{word:"Perfidious",hint:"Deceitful and untrustworthy."},{word:"Quotidian",hint:"Of or occurring every day; daily."},{word:"Recumbentibus",hint:"A provoking criticism, or a well-founded complaint."},{word:"Sagacious",hint:"Having or showing keen mental discernment and good judgment; shrewd."},{word:"Taciturn",hint:"Reserved or uncommunicative in speech; saying little."},{word:"Umbra",hint:"The fully shaded inner region of a shadow cast by an opaque object."},{word:"Vexatious",hint:"Causing annoyance, frustration, or worry."},{word:"Wraith",hint:"A ghost or ghostlike image of someone, especially one seen shortly before or after their death."},{word:"Xenophobe",hint:"A person who dislikes or is prejudiced against people from other countries."},{word:"Yoke",hint:"A wooden crosspiece that is fastened over the necks of two animals and attached to the plow or cart that they are to pull."},{word:"Zephyr",hint:"A gentle, mild breeze."},{word:"Verisimilitude",hint:"The appearance of being true or real."},{word:"Oxymoron",hint:"A figure of speech in which apparently contradictory terms appear in conjunction."},{word:"Kaleidoscope",hint:"A constantly changing pattern or sequence of elements."},{word:"Reticent",hint:"Not revealing one's thoughts or feelings readily."},{word:"Munificent",hint:"More generous than is usual or necessary."},{word:"Nocturnal",hint:"Done, occurring, or active at night."},{word:"Oblivion",hint:"The state of being unaware or unconscious of what is happening."},{word:"Panacea",hint:"A solution or remedy for all difficulties or diseases."},{word:"Quintessential",hint:"Representing the most perfect or typical example of a quality or class."},{word:"Rambunctious",hint:"Uncontrollably exuberant; boisterous."},{word:"Serendipity",hint:"A pleasant surprise or fortunate discovery by chance."},{word:"Truculent",hint:"Eager or quick to argue or fight; aggressively defiant."},{word:"Umbrage",hint:"Offense or annoyance."},{word:"Vorfreude",hint:"The joyful, intense anticipation that comes from imagining future pleasures."},{word:"Wanderlust",hint:"A strong desire to travel and explore the world."},{word:"Xerophyte",hint:"A plant that is adapted to live in a dry habitat."},{word:"Yuletide",hint:"The Christmas season."},{word:"Zoetic",hint:"Of or relating to life."},{word:"Ephemeral",hint:"Lasting for a very short time; fleeting."},{word:"Ubiquitous",hint:"Present, appearing, or found everywhere."}],e=Math.floor(Math.random()*t.length);return t[e]};/**
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
 */const K0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},G0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new zR;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WR=function(t){const e=K0(t);return G0.encodeByteArray(e,!0)},mu=function(t){return WR(t).replace(/\./g,"")},Q0=function(t){try{return G0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qR=()=>HR().__FIREBASE_DEFAULTS__,KR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q0(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return qR()||KR()||GR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y0=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X0=t=>{const e=Y0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J0=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config},Z0=t=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class QR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),a].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function XR(){var t;const e=(t=oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZR(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nE(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ek(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tk="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tk,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,r)}}function nk(t,e){return t.replace(rk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rk=/\{\$([^}]+)}/g;function ik(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dy(s)&&Dy(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sk(t,e){const n=new ok(t,e);return n.subscribe.bind(n)}class ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ak(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eh),i.error===void 0&&(i.error=Eh),i.complete===void 0&&(i.complete=Eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eh(){}/**
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
 */const lk=1e3,uk=2,ck=4*60*60*1e3,hk=.5;function Oy(t,e=lk,n=uk){const r=e*Math.pow(n,t),i=Math.round(hk*r*(Math.random()-.5)*2);return Math.min(ck,r+i)}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pk(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fk(t){return t===Qr?void 0:t}function pk(t){return t.instantiationMode==="EAGER"}/**
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
 */class mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const gk={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},yk=re.INFO,vk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},_k=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=yk,this._logHandler=_k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const wk=(t,e)=>e.some(n=>t instanceof n);let Ly,Vy;function Ek(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tk(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,Jd=new WeakMap,sE=new WeakMap,Th=new WeakMap,Mp=new WeakMap;function Ik(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iE.set(n,t)}).catch(()=>{}),Mp.set(e,t),e}function Sk(t){if(Jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ak(t){Zd=t(Zd)}function xk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ih(this),e,...n);return sE.set(r,e.sort?e.sort():[e]),kr(r)}:Tk().includes(t)?function(...e){return t.apply(Ih(this),e),kr(iE.get(this))}:function(...e){return kr(t.apply(Ih(this),e))}}function Rk(t){return typeof t=="function"?xk(t):(t instanceof IDBTransaction&&Sk(t),wk(t,Ek())?new Proxy(t,Zd):t)}function kr(t){if(t instanceof IDBRequest)return Ik(t);if(Th.has(t))return Th.get(t);const e=Rk(t);return e!==t&&(Th.set(t,e),Mp.set(e,t)),e}const Ih=t=>Mp.get(t);function kk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Pk=["get","getKey","getAll","getAllKeys","count"],Ck=["put","add","delete","clear"],Sh=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sh.get(e))return Sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ck.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Pk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Sh.set(e,s),s}Ak(t=>({...t,get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));/**
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
 */class Nk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ef="@firebase/app",Fy="0.9.19";/**
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
 */const mi=new ac("@firebase/app"),Dk="@firebase/app-compat",Ok="@firebase/analytics-compat",Lk="@firebase/analytics",Vk="@firebase/app-check-compat",Mk="@firebase/app-check",Fk="@firebase/auth",jk="@firebase/auth-compat",Uk="@firebase/database",$k="@firebase/database-compat",Bk="@firebase/functions",zk="@firebase/functions-compat",Wk="@firebase/installations",Hk="@firebase/installations-compat",qk="@firebase/messaging",Kk="@firebase/messaging-compat",Gk="@firebase/performance",Qk="@firebase/performance-compat",Yk="@firebase/remote-config",Xk="@firebase/remote-config-compat",Jk="@firebase/storage",Zk="@firebase/storage-compat",eP="@firebase/firestore",tP="@firebase/firestore-compat",nP="firebase",rP="10.4.0";/**
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
 */const tf="[DEFAULT]",iP={[ef]:"fire-core",[Dk]:"fire-core-compat",[Lk]:"fire-analytics",[Ok]:"fire-analytics-compat",[Mk]:"fire-app-check",[Vk]:"fire-app-check-compat",[Fk]:"fire-auth",[jk]:"fire-auth-compat",[Uk]:"fire-rtdb",[$k]:"fire-rtdb-compat",[Bk]:"fire-fn",[zk]:"fire-fn-compat",[Wk]:"fire-iid",[Hk]:"fire-iid-compat",[qk]:"fire-fcm",[Kk]:"fire-fcm-compat",[Gk]:"fire-perf",[Qk]:"fire-perf-compat",[Yk]:"fire-rc",[Xk]:"fire-rc-compat",[Jk]:"fire-gcs",[Zk]:"fire-gcs-compat",[eP]:"fire-fst",[tP]:"fire-fst-compat","fire-js":"fire-js",[nP]:"fire-js-all"};/**
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
 */const gu=new Map,nf=new Map;function sP(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(nf.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,t);for(const n of gu.values())sP(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const oP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new Ri("app","Firebase",oP);/**
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
 */class aP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=rP;function oE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=J0()),!n)throw Pr.create("no-options");const s=gu.get(i);if(s){if(Jo(n,s.options)&&Jo(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new mk(i);for(const l of nf.values())o.addComponent(l);const a=new aP(n,r,o);return gu.set(i,a),a}function lc(t=tf){const e=gu.get(t);if(!e&&t===tf&&J0())return oE();if(!e)throw Pr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=iP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}cn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lP="firebase-heartbeat-database",uP=1,Zo="firebase-heartbeat-store";let Ah=null;function aE(){return Ah||(Ah=kk(lP,uP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zo)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Ah}async function cP(t){try{return await(await aE()).transaction(Zo).objectStore(Zo).get(lE(t))}catch(e){if(e instanceof Zt)mi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function jy(t,e){try{const r=(await aE()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,lE(t)),await r.done}catch(n){if(n instanceof Zt)mi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(r.message)}}}function lE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hP=1024,dP=30*24*60*60*1e3;class fP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uy(),{heartbeatsToSend:n,unsentEntries:r}=pP(this._heartbeatsCache.heartbeats),i=mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uy(){return new Date().toISOString().substring(0,10)}function pP(t,e=hP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $y(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gP(t){cn(new Jt("platform-logger",e=>new Nk(e),"PRIVATE")),cn(new Jt("heartbeat",e=>new fP(e),"PRIVATE")),bt(ef,Fy,t),bt(ef,Fy,"esm2017"),bt("fire-js","")}gP("");var yP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Fp=Fp||{},G=yP||self;function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ia(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vP(t){return Object.prototype.hasOwnProperty.call(t,xh)&&t[xh]||(t[xh]=++_P)}var xh="closure_uid_"+(1e9*Math.random()>>>0),_P=0;function wP(t,e,n){return t.call.apply(t.bind,arguments)}function EP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=wP:ht=EP,ht.apply(null,arguments)}function ul(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Br(){this.s=this.s,this.o=this.o}var TP=0;Br.prototype.s=!1;Br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),TP!=0)&&vP(this)};Br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function By(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var IP=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function ea(t){return/^[\s\xa0]*$/.test(t)}function cc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return cc().indexOf(t)!=-1}function Up(t){return Up[" "](t),t}Up[" "]=function(){};function SP(t,e){var n=gC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var AP=wn("Opera"),Es=wn("Trident")||wn("MSIE"),cE=wn("Edge"),rf=cE||Es,hE=wn("Gecko")&&!(cc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),xP=cc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function dE(){var t=G.document;return t?t.documentMode:void 0}var sf;e:{var Rh="",kh=function(){var t=cc();if(hE)return/rv:([^\);]+)(\)|;)/.exec(t);if(cE)return/Edge\/([\d\.]+)/.exec(t);if(Es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xP)return/WebKit\/(\S+)/.exec(t);if(AP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kh&&(Rh=kh?kh[1]:""),Es){var Ph=dE();if(Ph!=null&&Ph>parseFloat(Rh)){sf=String(Ph);break e}}sf=Rh}var of;if(G.document&&Es){var zy=dE();of=zy||parseInt(sf,10)||void 0}else of=void 0;var RP=of;function ta(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hE){e:{try{Up(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ta.$.h.call(this)}}Ge(ta,dt);var kP={2:"touch",3:"pen",4:"mouse"};ta.prototype.h=function(){ta.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Sa="closure_listenable_"+(1e6*Math.random()|0),PP=0;function CP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++PP,this.fa=this.ia=!1}function hc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $p(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fE(t){const e={};for(const n in t)e[n]=t[n];return e}const Wy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wy.length;s++)n=Wy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dc(t){this.src=t,this.g={},this.h=0}dc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=lf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function af(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Bp="closure_lm_"+(1e6*Math.random()|0),Ch={};function mE(t,e,n,r,i){if(r&&r.once)return yE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mE(t,e[s],n,r,i);return null}return n=Hp(n),t&&t[Sa]?t.O(e,n,Ia(r)?!!r.capture:!!r,i):gE(t,e,n,!1,r,i)}function gE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ia(i)?!!i.capture:!!i,a=Wp(t);if(a||(t[Bp]=a=new dc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_E(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bP(){function t(n){return e.call(t.src,t.listener,n)}const e=DP;return t}function yE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yE(t,e[s],n,r,i);return null}return n=Hp(n),t&&t[Sa]?t.P(e,n,Ia(r)?!!r.capture:!!r,i):gE(t,e,n,!0,r,i)}function vE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vE(t,e[s],n,r,i);else r=Ia(r)?!!r.capture:!!r,n=Hp(n),t&&t[Sa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=lf(s,n,r,i),-1<n&&(hc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lf(e,n,r,i)),(n=-1<t?e[t]:null)&&zp(n))}function zp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Sa])af(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_E(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wp(e))?(af(n,t),n.h==0&&(n.src=null,e[Bp]=null)):hc(t)}}}function _E(t){return t in Ch?Ch[t]:Ch[t]="on"+t}function DP(t,e){if(t.fa)t=!0;else{e=new ta(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zp(t),t=n.call(r,e)}return t}function Wp(t){return t=t[Bp],t instanceof dc?t:null}var Nh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hp(t){return typeof t=="function"?t:(t[Nh]||(t[Nh]=function(e){return t.handleEvent(e)}),t[Nh])}function Ke(){Br.call(this),this.i=new dc(this),this.S=this,this.J=null}Ge(Ke,Br);Ke.prototype[Sa]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){vE(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),pE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=cl(o,r,!0,e)&&i}if(o=e.g=t,i=cl(o,r,!0,e)&&i,i=cl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=cl(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hc(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function cl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&af(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var qp=G.JSON.stringify;class OP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function LP(){var t=Kp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VP{constructor(){this.h=this.g=null}add(e,n){const r=wE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wE=new OP(()=>new MP,t=>t.reset());class MP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function jP(t){G.setTimeout(()=>{throw t},0)}let na,ra=!1,Kp=new VP,EE=()=>{const t=G.Promise.resolve(void 0);na=()=>{t.then(UP)}};var UP=()=>{for(var t;t=LP();){try{t.h.call(t.g)}catch(n){jP(n)}var e=wE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ra=!1};function fc(t,e){Ke.call(this),this.h=t||1,this.g=e||G,this.j=ht(this.qb,this),this.l=Date.now()}Ge(fc,Ke);b=fc.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Gp(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){fc.$.N.call(this),Gp(this),delete this.g};function Qp(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function TE(t){t.g=Qp(()=>{t.g=null,t.i&&(t.i=!1,TE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $P extends Br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:TE(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Br.call(this),this.h=t,this.g={}}Ge(ia,Br);var Hy=[];function IE(t,e,n,r){Array.isArray(n)||(n&&(Hy[0]=n.toString()),n=Hy);for(var i=0;i<n.length;i++){var s=mE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function SE(t){$p(t.g,function(e,n){this.g.hasOwnProperty(n)&&zp(e)},t),t.g={}}ia.prototype.N=function(){ia.$.N.call(this),SE(this)};ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pc(){this.g=!0}pc.prototype.Ea=function(){this.g=!1};function BP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HP(t,n)+(r?" "+r:"")})}function WP(t,e){t.info(function(){return"TIMEOUT: "+e})}pc.prototype.info=function(){};function HP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qp(n)}catch{return e}}var Pi={},qy=null;function mc(){return qy=qy||new Ke}Pi.Ta="serverreachability";function AE(t){dt.call(this,Pi.Ta,t)}Ge(AE,dt);function sa(t){const e=mc();et(e,new AE(e))}Pi.STAT_EVENT="statevent";function xE(t,e){dt.call(this,Pi.STAT_EVENT,t),this.stat=e}Ge(xE,dt);function wt(t){const e=mc();et(e,new xE(e,t))}Pi.Ua="timingevent";function RE(t,e){dt.call(this,Pi.Ua,t),this.size=e}Ge(RE,dt);function Aa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var gc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yp(){}Yp.prototype.h=null;function Ky(t){return t.h||(t.h=t.i())}function PE(){}var xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xp(){dt.call(this,"d")}Ge(Xp,dt);function Jp(){dt.call(this,"c")}Ge(Jp,dt);var uf;function yc(){}Ge(yc,Yp);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};uf=new yc;function Ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ia(this),this.P=qP,t=rf?125:void 0,this.V=new fc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new CE}function CE(){this.i=null,this.g="",this.h=!1}var qP=45e3,cf={},yu={};b=Ra.prototype;b.setTimeout=function(t){this.P=t};function hf(t,e,n){t.L=1,t.v=_c(Qn(e)),t.s=n,t.S=!0,NE(t,null)}function NE(t,e){t.G=Date.now(),ka(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),jE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new CE,t.g=oT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $P(ht(t.Pa,t,t.g),t.O)),IE(t.U,t.g,"readystatechange",t.nb),e=t.I?fE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),sa(),BP(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&En(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||rf||this.g&&(this.h.h||this.g.ja()||Xy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?sa(3):sa(2)),vc(this);var n=this.g.da();this.ca=n;t:if(bE(this)){var r=Xy(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),Ao(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ea(a)){var u=a;break t}}u=null}if(n=u)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,df(this,n);else{this.i=!1,this.o=3,wt(12),Zr(this),Ao(this);break e}}this.S?(DE(this,c,o),rf&&this.i&&c==3&&(IE(this.U,this.V,"tick",this.mb),this.V.start())):(es(this.j,this.m,o,null),df(this,o)),c==4&&Zr(this),this.i&&!this.J&&(c==4?nT(this.l,this):(this.i=!1,ka(this)))}else fC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Zr(this),Ao(this)}}}catch{}finally{}};function bE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function DE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=KP(t,n),i==yu){e==4&&(t.o=4,wt(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cf){t.o=4,wt(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,i,null),df(t,i);bE(t)&&i!=yu&&i!=cf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),im(e),e.M=!0,wt(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),Zr(t),Ao(t))}b.mb=function(){if(this.g){var t=En(this.g),e=this.g.ja();this.C<e.length&&(vc(this),DE(this,t,e),this.i&&t!=4&&ka(this))}};function KP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yu:(n=Number(e.substring(n,r)),isNaN(n)?cf:(r+=1,r+n>e.length?yu:(e=e.slice(r,r+n),t.C=r+n,e)))}b.cancel=function(){this.J=!0,Zr(this)};function ka(t){t.Y=Date.now()+t.P,OE(t,t.P)}function OE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Aa(ht(t.lb,t),e)}function vc(t){t.B&&(G.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(WP(this.j,this.A),this.L!=2&&(sa(),wt(17)),Zr(this),this.o=2,Ao(this)):OE(this,this.Y-t)};function Ao(t){t.l.H==0||t.J||nT(t.l,t)}function Zr(t){vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gp(t.V),SE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function df(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ff(n.i,t))){if(!t.K&&ff(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wu(n),Ic(n);else break e;rm(n),wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Aa(ht(n.ib,n),6e3));if(1>=BE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ei(n,11)}else if((t.K||n.g==t)&&wu(n),!ea(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Zp(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,de(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=sT(r,r.J?r.pa:null,r.Y),o.K){zE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(vc(a),ka(a)),r.g=o}else eT(r);0<n.j.length&&Sc(n)}else u[0]!="stop"&&u[0]!="close"||ei(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ei(n,7):nm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}sa(4)}catch{}}function GP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function LE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QP(t),r=GP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ai(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ai){this.h=t.h,vu(this,t.j),this.s=t.s,this.g=t.g,_u(this,t.m),this.l=t.l;var e=t.i,n=new oa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gy(this,n),this.o=t.o}else t&&(e=String(t).match(VE))?(this.h=!1,vu(this,e[1]||"",!0),this.s=co(e[2]||""),this.g=co(e[3]||"",!0),_u(this,e[4]),this.l=co(e[5]||"",!0),Gy(this,e[6]||"",!0),this.o=co(e[7]||"")):(this.h=!1,this.i=new oa(null,this.h))}ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ho(e,Qy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ho(e,Qy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ho(n,n.charAt(0)=="/"?ZP:JP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ho(n,tC)),t.join("")};function Qn(t){return new ai(t)}function vu(t,e,n){t.j=n?co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gy(t,e,n){e instanceof oa?(t.i=e,nC(t.i,t.h)):(n||(e=ho(e,eC)),t.i=new oa(e,t.h))}function de(t,e,n){t.i.set(e,n)}function _c(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qy=/[#\/\?@]/g,JP=/[#\?:]/g,ZP=/[#\?]/g,eC=/[#\?@]/g,tC=/#/g;function oa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zr(t){t.g||(t.g=new Map,t.h=0,t.i&&YP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=oa.prototype;b.add=function(t,e){zr(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ME(t,e){zr(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function FE(t,e){return zr(t),e=Fs(t,e),t.g.has(e)}b.forEach=function(t,e){zr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){zr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){zr(this);let e=[];if(typeof t=="string")FE(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return zr(this),this.i=null,t=Fs(this,t),FE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jE(t,e,n){ME(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),jp(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nC(t,e){e&&!t.j&&(zr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ME(this,r),jE(this,i,n))},t)),t.j=e}var rC=class{constructor(t,e){this.g=t,this.map=e}};function UE(t){this.l=t||iC,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iC=10;function $E(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function BE(t){return t.h?1:t.g?t.g.size:0}function ff(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zp(t,e){t.g?t.g.add(e):t.h=e}function zE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}UE.prototype.cancel=function(){if(this.i=WE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function WE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jp(t.i)}var sC=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function oC(){this.g=new sC}function aC(t,e,n){const r=n||"";try{LE(t,function(i,s){let o=i;Ia(i)&&(o=qp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function lC(t,e){const n=new pc;if(G.Image){const r=new Image;r.onload=ul(hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ul(hl,n,r,"TestLoadImage: error",!1,e),r.onabort=ul(hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ul(hl,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wc(t){this.l=t.ec||null,this.j=t.ob||!1}Ge(wc,Yp);wc.prototype.g=function(){return new Ec(this.l,this.j)};wc.prototype.i=function(t){return function(){return t}}({});function Ec(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=em,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(Ec,Ke);var em=0;b=Ec.prototype;b.open=function(t,e){if(this.readyState!=em)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,aa(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pa(this)),this.readyState=em};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pa(this):aa(this),this.readyState==3&&HE(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,Pa(this))};b.Ya=function(t){this.g&&(this.response=t,Pa(this))};b.ka=function(){this.g&&Pa(this)};function Pa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,aa(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uC=G.JSON.parse;function xe(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qE,this.L=this.M=!1}Ge(xe,Ke);var qE="",cC=/^https?$/i,hC=["POST","PUT"];b=xe.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uf.g(),this.C=this.u?Ky(this.u):Ky(uf),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Yy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=uE(hC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{QE(this),0<this.B&&((this.L=dC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Qp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Yy(this,s)}};function dC(t){return Es&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Fp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Yy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,KE(t),Tc(t)}function KE(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Tc(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tc(this,!0)),xe.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?GE(this):this.kb())};b.kb=function(){GE(this)};function GE(t){if(t.h&&typeof Fp<"u"&&(!t.C[1]||En(t)!=4||t.da()!=2)){if(t.v&&En(t)==4)Qp(t.La,0,t);else if(et(t,"readystatechange"),En(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(VE)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!cC.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var s=2<En(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",KE(t)}}finally{Tc(t)}}}}function Tc(t,e){if(t.g){QE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function QE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function En(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uC(e)}};function Xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fC(t){const e={};t=(t.g&&2<=En(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ea(t[r]))continue;var n=FP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}NP(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function YE(t){let e="";return $p(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=YE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XE(t){this.Ga=0,this.j=[],this.l=new pc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zs("baseRetryDelayMs",5e3,t),this.hb=Zs("retryDelaySeedMs",1e4,t),this.eb=Zs("forwardChannelMaxRetries",2,t),this.xa=Zs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new UE(t&&t.concurrentRequestLimit),this.Ja=new oC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=XE.prototype;b.ra=8;b.H=1;function nm(t){if(JE(t),t.H==3){var e=t.W++,n=Qn(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),Ca(t,n),e=new Ra(t,t.l,e),e.L=2,e.v=_c(Qn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=oT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ka(e)}iT(t)}function Ic(t){t.g&&(im(t),t.g.cancel(),t.g=null)}function JE(t){Ic(t),t.u&&(G.clearTimeout(t.u),t.u=null),wu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Sc(t){if(!$E(t.i)&&!t.m){t.m=!0;var e=t.Na;na||EE(),ra||(na(),ra=!0),Kp.add(e,t),t.C=0}}function pC(t,e){return BE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Aa(ht(t.Na,t,e),rT(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ra(this,this.l,t);let s=this.s;if(this.U&&(s?(s=fE(s),pE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZE(this,i,e),n=Qn(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),Ca(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(YE(s)))+"&"+e:this.o&&tm(n,this.o,s)),Zp(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,hf(i,n,null)):hf(i,n,e),this.H=2}}else this.H==3&&(t?Jy(this,t):this.j.length==0||$E(this.i)||Jy(this))};function Jy(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),Ca(t,r),t.o&&t.s&&tm(r,t.o,t.s),n=new Ra(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ZE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zp(t.i,n),hf(n,r,e)}function Ca(t,e){t.na&&$p(t.na,function(n,r){de(e,r,n)}),t.h&&LE({},function(n,r){de(e,r,n)})}function ZE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{aC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function eT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;na||EE(),ra||(na(),ra=!0),Kp.add(e,t),t.A=0}}function rm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Aa(ht(t.Ma,t),rT(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,tT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Aa(ht(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Ic(this),tT(this))};function im(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function tT(t){t.g=new Ra(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),Ca(t,e),t.o&&t.s&&tm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=_c(Qn(e)),n.s=null,n.S=!0,NE(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Ic(this),rm(this),wt(19))};function wu(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function nT(t,e){var n=null;if(t.g==e){wu(t),im(t),t.g=null;var r=2}else if(ff(t.i,e))n=e.F,zE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=mc(),et(r,new RE(r,n)),Sc(t)}else eT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&pC(t,e)||r==2&&rm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ei(t,5);break;case 4:ei(t,10);break;case 3:ei(t,6);break;default:ei(t,2)}}}function rT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ei(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new ai("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||vu(n,"https"),_c(n)),lC(n.toString(),r)}else wt(2);t.H=0,t.h&&t.h.za(e),iT(t),JE(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function iT(t){if(t.H=0,t.ma=[],t.h){const e=WE(t.i);(e.length!=0||t.j.length!=0)&&(By(t.ma,e),By(t.ma,t.j),t.i.i.length=0,jp(t.j),t.j.length=0),t.h.ya()}}function sT(t,e,n){var r=n instanceof ai?Qn(n):new ai(n);if(r.g!="")e&&(r.g=e+"."+r.g),_u(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ai(null);r&&vu(s,r),e&&(s.g=e),i&&_u(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),Ca(t,r),r}function oT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new wc({ob:!0})):new xe(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function aT(){}b=aT.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Eu(){if(Es&&!(10<=Number(RP)))throw Error("Environmental error: no available transport.")}Eu.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ke.call(this),this.g=new XE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ea(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Ge($t,Ke);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sT(t,null,t.Y),Sc(t)};$t.prototype.close=function(){nm(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qp(t),t=n);e.j.push(new rC(e.fb++,t)),e.H==3&&Sc(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,nm(this.g),delete this.g,$t.$.N.call(this)};function lT(t){Xp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(lT,Xp);function uT(){Jp.call(this),this.status=1}Ge(uT,Jp);function js(t){this.g=t}Ge(js,aT);js.prototype.Ba=function(){et(this.g,"a")};js.prototype.Aa=function(t){et(this.g,new lT(t))};js.prototype.za=function(t){et(this.g,new uT)};js.prototype.ya=function(){et(this.g,"b")};function mC(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(hn,mC);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)bh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){bh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){bh(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var gC={};function sm(t){return-128<=t&&128>t?SP(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Tn(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return Je(Tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=pf;return new ue(e,0)}function cT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(cT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tn(Math.pow(e,8)),r=us,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Tn(Math.pow(e,s)),r=r.R(s).add(Tn(o))):(r=r.R(n),r=r.add(Tn(o)))}return r}var pf=4294967296,us=sm(0),mf=sm(1),Zy=sm(16777216);b=ue.prototype;b.ea=function(){if(Kt(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:pf+r)*e,e*=pf}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Kt(this))return"-"+Je(this).toString(t);for(var e=Tn(Math.pow(t,6)),n=this,r="";;){var i=Iu(n,e).g;n=Tu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Un(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}b.X=function(t){return t=Tu(this,t),Kt(t)?-1:Un(t)?0:1};function Je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(mf)}b.abs=function(){return Kt(this)?Je(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function Tu(t,e){return t.add(Je(e))}b.R=function(t){if(Un(this)||Un(t))return us;if(Kt(this))return Kt(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(Kt(t))return Je(this.R(Je(t)));if(0>this.X(Zy)&&0>t.X(Zy))return Tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,dl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,dl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,dl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,dl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function dl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function eo(t,e){this.g=t,this.h=e}function Iu(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new eo(us,us);if(Kt(t))return e=Iu(Je(t),e),new eo(Je(e.g),Je(e.h));if(Kt(e))return e=Iu(t,Je(e)),new eo(Je(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=mf,r=e;0>=r.X(t);)n=ev(n),r=ev(r);var i=Mi(n,1),s=Mi(r,1);for(r=Mi(r,2),n=Mi(n,2);!Un(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Mi(r,1),n=Mi(n,1)}return e=Tu(t,i.R(e)),new eo(i,e)}for(i=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tn(n),o=s.R(e);Kt(o)||0<o.X(t);)n-=r,s=Tn(n),o=s.R(e);Un(s)&&(s=mf),i=i.add(s),t=Tu(t,o)}return new eo(i,t)}b.gb=function(t){return Iu(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function ev(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Mi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ue(i,t.h)}Eu.prototype.createWebChannel=Eu.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;gc.NO_ERROR=0;gc.TIMEOUT=8;gc.HTTP_ERROR=6;kE.COMPLETE="complete";PE.EventType=xa;xa.OPEN="a";xa.CLOSE="b";xa.ERROR="c";xa.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Tn;ue.fromString=cT;var yC=function(){return new Eu},vC=function(){return mc()},Dh=gc,_C=kE,wC=Pi,tv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fl=PE,EC=xe,TC=hn,cs=ue;const nv="@firebase/firestore";/**
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
 */let Us="10.4.0";/**
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
 */const gi=new ac("@firebase/firestore");function to(){return gi.logLevel}function j(t,...e){if(gi.logLevel<=re.DEBUG){const n=e.map(om);gi.debug(`Firestore (${Us}): ${t}`,...n)}}function Yn(t,...e){if(gi.logLevel<=re.ERROR){const n=e.map(om);gi.error(`Firestore (${Us}): ${t}`,...n)}}function Ts(t,...e){if(gi.logLevel<=re.WARN){const n=e.map(om);gi.warn(`Firestore (${Us}): ${t}`,...n)}}function om(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function me(t,e){t||K()}function X(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class SC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new hT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class xC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new kC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function CC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class la{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return la.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof la?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends la{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const NC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends la{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return NC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(fe.fromString(e))}static fromName(e){return new B(fe.fromString(e).popFirst(5))}static empty(){return new B(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new fe(e.slice()))}}function bC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Or(i,B.empty(),e)}function DC(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(Y.min(),B.empty(),-1)}static max(){return new Or(Y.max(),B.empty(),-1)}}function OC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const LC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Na(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==LC)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}am.ae=-1;function Ac(t){return t==null}function Su(t){return t===0&&1/t==-1/0}function MC(t){return typeof t=="number"&&Number.isInteger(t)&&!Su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ft(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pT("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const FC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(me(!!t),typeof t=="string"){let e=0;const n=FC.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function um(t){const e=t.mapValue.fields.__previous_value__;return lm(e)?um(e):e}function ua(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class jC{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ca{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lm(t)?4:UC(t)?9007199254740991:10:K()}function bn(t,e){if(t===e)return!0;const n=vi(t);if(n!==vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),a=Lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?Su(o)===Su(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rv(o)!==rv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!bn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function ha(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=vi(t),r=vi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sv(t.timestampValue,e.timestampValue);case 4:return sv(ua(t),ua(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=yi(s),l=yi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=oe(a[u],l[u]);if(c!==0)return c}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(Ve(s.latitude),Ve(o.latitude));return a!==0?a:oe(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ss(a[u],l[u]);if(c)return c}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ml.mapValue&&o===ml.mapValue)return 0;if(s===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=oe(l[h],c[h]);if(d!==0)return d;const g=Ss(a[l[h]],u[c[h]]);if(g!==0)return g}return oe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function sv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Lr(t),r=Lr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function As(t){return gf(t)}function gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gf(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function ov(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yf(t){return!!t&&"integerValue"in t}function cm(t){return!!t&&"arrayValue"in t}function av(t){return!!t&&"nullValue"in t}function lv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(xo(this.value))}}function mT(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new ct([n]);if(Dl(r)){const s=mT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function uv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function $C(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gT{}class je extends gT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zC(e,n,r):n==="array-contains"?new qC(e,r):n==="in"?new KC(e,r):n==="not-in"?new GC(e,r):n==="array-contains-any"?new QC(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WC(e,r):new HC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ss(n,this.value)):n!==null&&vi(this.value)===vi(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dn extends gT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new dn(e,n)}matches(e){return yT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function yT(t){return t.op==="and"}function vT(t){return BC(t)&&yT(t)}function BC(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function vf(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+As(t.value);if(vT(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function _T(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_T(o,i.filters[a]),!0):!1}(t,e):void K()}function wT(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class zC extends je{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class WC extends je{constructor(e,n){super(e,"in",n),this.keys=ET("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HC extends je{constructor(e,n){super(e,"not-in",n),this.keys=ET("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ET(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class qC extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cm(n)&&ha(n.arrayValue,this.value)}}class KC extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class GC extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ha(this.value.arrayValue,n)}}class QC extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ha(this.value.arrayValue,r))}}/**
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
 */class YC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function hv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YC(t,e,n,r,i,s,o)}function hm(t){const e=X(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.he=n}return e.he}function dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$C(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_T(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cv(t.startAt,e.startAt)&&cv(t.endAt,e.endAt)}function _f(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Da{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function XC(t,e,n,r,i,s,o,a){return new Da(t,e,n,r,i,s,o,a)}function fm(t){return new Da(t)}function dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function IT(t){return t.collectionGroup!==null}function ko(t){const e=X(t);if(e.Pe===null){e.Pe=[];const n=pm(e),r=TT(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ro(n)),e.Pe.push(new Ro(ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ro(ct.keyField(),s))}}}return e.Pe}function Rn(t){const e=X(t);return e.Ie||(e.Ie=JC(e,ko(t))),e.Ie}function JC(t,e){if(t.limitType==="F")return hv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ro(i.field,s)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return hv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wf(t,e){e.getFirstInequalityField(),pm(t);const n=t.filters.concat([e]);return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ef(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return dm(Rn(t),Rn(e))&&t.limitType===e.limitType}function ST(t){return`${hm(Rn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wT(i)).join(", ")}]`),Ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function Rc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=uv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ko(r),i)||r.endAt&&!function(o,a,l){const u=uv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ko(r),i))}(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AT(t){return(e,n)=>{let r=!1;for(const i of ko(t)){const s=eN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eN(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ss(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fT(this.inner)}size(){return this.innerSize}}/**
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
 */const tN=new Ie(B.comparator);function Xn(){return tN}const xT=new Ie(B.comparator);function fo(...t){let e=xT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=xT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return Po()}function kT(){return Po()}function Po(){return new $s(t=>t.toString(),(t,e)=>t.isEqual(e))}const nN=new Ie(B.comparator),rN=new ft(B.comparator);function te(...t){let e=rN;for(const n of t)e=e.add(n);return e}const iN=new ft(oe);function sN(){return iN}/**
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
 */function PT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function CT(t){return{integerValue:""+t}}function oN(t,e){return MC(e)?CT(e):PT(t,e)}/**
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
 */class kc{constructor(){this._=void 0}}function aN(t,e,n){return t instanceof xu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lm(s)&&(s=um(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof da?bT(t,e):t instanceof fa?DT(t,e):function(i,s){const o=NT(i,s),a=fv(o)+fv(i.Te);return yf(o)&&yf(i.Te)?CT(a):PT(i.serializer,a)}(t,e)}function lN(t,e,n){return t instanceof da?bT(t,e):t instanceof fa?DT(t,e):n}function NT(t,e){return t instanceof Ru?function(r){return yf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xu extends kc{}class da extends kc{constructor(e){super(),this.elements=e}}function bT(t,e){const n=OT(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends kc{constructor(e){super(),this.elements=e}}function DT(t,e){let n=OT(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Ru extends kc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function fv(t){return Ve(t.integerValue||t.doubleValue)}function OT(t){return cm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof da&&i instanceof da||r instanceof fa&&i instanceof fa?Is(r.elements,i.elements,bn):r instanceof Ru&&i instanceof Ru?bn(r.Te,i.Te):r instanceof xu&&i instanceof xu}(t.transform,e.transform)}class cN{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function LT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new MT(t.key,kn.none()):new Oa(t.key,t.data,kn.none());{const n=t.data,r=Rt.empty();let i=new ft(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new Vt(i.toArray()),kn.none())}}function hN(t,e,n){t instanceof Oa?function(i,s,o){const a=i.value.clone(),l=mv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!Ol(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=mv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(VT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Co(t,e,n,r){return t instanceof Oa?function(s,o,a,l){if(!Ol(s.precondition,o))return a;const u=s.value.clone(),c=gv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,a,l){if(!Ol(s.precondition,o))return a;const u=gv(s.fieldTransforms,l,o),c=o.data;return c.setAll(VT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function dN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NT(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function pv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>uN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends Pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends Pc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lN(o,a,n[i]))}return r}function gv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aN(s,o,e))}return r}class MT extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fN extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=LT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>pv(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>pv(n,r))}}class mm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return nN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mm(e,n,r,i)}}/**
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
 */class mN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,ie;function yN(t){switch(t){default:return K();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function FT(t){if(t===void 0)return Yn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Oe.OK:return A.OK;case Oe.CANCELLED:return A.CANCELLED;case Oe.UNKNOWN:return A.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return A.INTERNAL;case Oe.UNAVAILABLE:return A.UNAVAILABLE;case Oe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Oe.NOT_FOUND:return A.NOT_FOUND;case Oe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Oe.ABORTED:return A.ABORTED;case Oe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Oe.DATA_LOSS:return A.DATA_LOSS;default:return K()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vN(){return new TextEncoder}/**
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
 */const _N=new cs([4294967295,4294967295],0);function yv(t){const e=vN().encode(t),n=new TC;return n.update(e),new Uint8Array(n.digest())}function vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=cs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(_N)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=yv(e),[r,i]=vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=yv(e),[r,i]=vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cc(Y.min(),i,new Ie(oe),Xn(),te())}}class La{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new La(r,n,te(),te(),te())}}/**
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
 */class Ll{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class jT{constructor(e,n){this.targetId=e,this.ye=n}}class UT{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _v{constructor(){this.we=0,this.Se=Ev(),this.be=gt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=te(),n=te(),r=te();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new La(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Ev()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class wN{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Xn(),this.Ue=wv(),this.We=new Ie(oe)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(_f(s))if(r===0){const o=new B(s.path);this.je(n,o,ut.newNoDocument(o,Y.min()))}else me(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=yi(r).toUint8Array()}catch(l){if(l instanceof pT)return Ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gm(o,i,s)}catch(l){return Ts(l instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&_f(a.target)){const l=new B(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,ut.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=te();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Cc(e,n,this.We,this.$e,r);return this.$e=Xn(),this.Ue=wv(),this.We=new Ie(oe),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new _v,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ft(oe),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new _v),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function wv(){return new Ie(B.comparator)}function Ev(){return new Ie(B.comparator)}const EN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),IN=(()=>({and:"AND",or:"OR"}))();class SN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tf(t,e){return t.useProto3Json||Ac(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AN(t,e){return ku(t,e.toTimestamp())}function Pn(t){return me(!!t),Y.fromTimestamp(function(n){const r=Lr(n);return new Be(r.seconds,r.nanos)}(t))}function ym(t,e){return function(r){return new fe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function BT(t){const e=fe.fromString(t);return me(qT(e)),e}function If(t,e){return ym(t.databaseId,e.path)}function Oh(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(zT(n))}function Sf(t,e){return ym(t.databaseId,e)}function xN(t){const e=BT(t);return e.length===4?fe.emptyPath():zT(e)}function Af(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zT(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tv(t,e,n){return{name:If(t,e),fields:n.value.mapValue.fields}}function RN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(me(c===void 0||typeof c=="string"),gt.fromBase64String(c||"")):(me(c===void 0||c instanceof Uint8Array),gt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:FT(u.code);return new V(c,u.message||"")}(o);n=new UT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oh(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):Y.min(),a=new Rt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ll(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oh(t,r.document),s=r.readTime?Pn(r.readTime):Y.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oh(t,r.document),s=r.removedTargetIds||[];n=new Ll([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gN(i,s),a=r.targetId;n=new jT(a,o)}}return n}function kN(t,e){let n;if(e instanceof Oa)n={update:Tv(t,e.key,e.value)};else if(e instanceof MT)n={delete:If(t,e.key)};else if(e instanceof Wr)n={update:Tv(t,e.key,e.data),updateMask:MN(e.fieldMask)};else{if(!(e instanceof fN))return K();n={verify:If(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof da)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ru)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function PN(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(Y.min())&&(o=Pn(s)),new cN(o,i.transformResults||[])}(n,e))):[]}function CN(t,e){return{documents:[Sf(t,e.path)]}}function NN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return HT(dn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ui(h.field),direction:ON(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Tf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function bN(t){let e=xN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=WT(h);return d instanceof dn&&vT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Ro($i(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ac(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new Au(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new Au(g,d)}(n.endAt)),XC(e,i,o,s,a,"F",l,u)}function DN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return je.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>WT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function ON(t){return EN[t]}function LN(t){return TN[t]}function VN(t){return IN[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function $i(t){return ct.fromServerFormat(t.fieldPath)}function HT(t){return t instanceof je?function(n){if(n.op==="=="){if(lv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(av(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(av(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:LN(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>HT(i));return r.length===1?r[0]:{compositeFilter:{op:VN(n.op),filters:r}}}(t):K()}function MN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FN{constructor(e){this.ht=e}}function jN(t){const e=bN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
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
 */class UN{constructor(){this.an=new $N}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Or.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class $N{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(fe.comparator)).toArray()}}/**
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
 */class xs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new xs(0)}static Ln(){return new xs(-1)}}/**
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
 */class BN{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Co(r.mutation,i,Vt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=Po(),a=function(){return Po()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Wr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Co(c.mutation,u,c.mutation.getFieldMask(),Be.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new zN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Po();let i=new Ie((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=kT();c.forEach(d=>{if(!s.has(d)){const g=LT(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(ti());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:RT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(h,d){return new Da(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ut.newInvalidDocument(c)))});let a=fo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Co(c.mutation,u,Vt.empty(),Be.now()),Rc(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class HN{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:jN(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class qN{constructor(){this.overlays=new Ie(B.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=ti(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ti(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ti(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mN(n,r));let s=this.Pr.get(n);s===void 0&&(s=te(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class vm{constructor(){this.Ir=new ft(We.dr),this.Tr=new ft(We.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new We(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new We(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new B(new fe([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new B(new fe([])),r=new We(n,e),i=new We(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return B.comparator(e.key,n.key)||oe(e.yr,n.yr)}static Er(e,n){return oe(e.yr,n.yr)||B.comparator(e.key,n.key)}}/**
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
 */class KN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ft(We.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(oe);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new We(new B(s),0);let a=new ft(oe);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return k.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new We(n,0),i=this.Sr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GN{constructor(e){this.Fr=e,this.docs=function(){return new Ie(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OC(DC(c),r)<=0||(i.has(c.key)||Rc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Mr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QN(this)}getSize(e){return k.resolve(this.size)}}class QN extends BN{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class YN{constructor(e){this.persistence=e,this.Or=new $s(n=>hm(n),dm),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Nr=0,this.Br=new vm,this.targetCount=0,this.Lr=xs.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
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
 */class XN{constructor(e,n){this.kr={},this.overlays={},this.qr=new am(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new YN(this),this.indexManager=new UN,this.remoteDocumentCache=function(i){return new GN(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new FN(n),this.Ur=new HN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new KN(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new JN(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return k.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class JN extends VC{constructor(e){super(),this.currentSequenceNumber=e}}class _m{constructor(e){this.persistence=e,this.jr=new vm,this.Hr=null}static Jr(e){return new _m(e)}get Yr(){if(this.Hr)return this.Hr;throw K()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,r=>{const i=B.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wm(e,n.fromCache,r,i)}}/**
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
 */class ZN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eb{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZN;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(to()<=re.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(to()<=re.DEBUG&&j("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(to()<=re.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):k.resolve())}Hi(e,n){if(dv(n))return k.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ef(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Ef(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return dv(n)||i.isEqual(Y.min())?k.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?k.resolve(null):(to()<=re.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.ts(e,o,n,bC(i,-1)).next(a=>a))})}Xi(e,n){let r=new ft(AT(e));return n.forEach((i,s)=>{Rc(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return to()<=re.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",ji(n)),this.ji.getDocumentsMatchingQuery(e,n,Or.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tb{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Ie(oe),this.ss=new $s(s=>hm(s),dm),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WN(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function nb(t,e,n,r){return new tb(t,e,n,r)}async function KT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function rb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let g=k.resolve();return d.forEach(_=>{g=g.next(()=>c.getEntry(l,_)).next(w=>{const T=u.docVersions.get(_);me(T!==null),w.version.compareTo(T)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function ib(t,e){const n=X(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(w,T,m){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,c)&&a.push(n.Kr.updateTargetData(s,g))});let l=Xn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sb(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(Y.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function sb(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function ob(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ab(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function xf(t,e,n){const r=X(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ba(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Iv(t,e,n){const r=X(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=X(l),d=h.ss.get(c);return d!==void 0?k.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,Rn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(a=>(lb(r,ZC(e),a),{documents:a,Ps:s})))}function lb(t,e,n){let r=t.os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class Sv{constructor(){this.activeTargetIds=sN()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ub{constructor(){this.ro=new Sv,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cb{so(e){}shutdown(){}}/**
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
 */class Av{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Lh(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fb{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const ot="WebChannelConnection";class pb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Lh(),l=this.Do(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ts("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=hb[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Lh();return new Promise((o,a)=>{const l=new EC;l.setWithCredentials(!0),l.listenOnce(_C.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Dh.NO_ERROR:const c=l.getResponseJson();j(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Dh.TIMEOUT:j(ot,`RPC '${e}' ${s} timed out`),a(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Dh.HTTP_ERROR:const h=l.getStatus();if(j(ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(T){const m=T.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(m)>=0?m:A.UNKNOWN}(g.status);a(new V(_,g.message))}else a(new V(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(A.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{j(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Lh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yC(),a=vC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");j(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const _=new fb({ho:T=>{g?j(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(j(ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),j(ot,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},Po:()=>h.close()}),w=(T,m,p)=>{T.listen(m,y=>{try{p(y)}catch(E){setTimeout(()=>{throw E},0)}})};return w(h,fl.EventType.OPEN,()=>{g||j(ot,`RPC '${e}' stream ${i} transport opened.`)}),w(h,fl.EventType.CLOSE,()=>{g||(g=!0,j(ot,`RPC '${e}' stream ${i} transport closed`),_.mo())}),w(h,fl.EventType.ERROR,T=>{g||(g=!0,Ts(ot,`RPC '${e}' stream ${i} transport errored:`,T),_.mo(new V(A.UNAVAILABLE,"The operation could not be completed")))}),w(h,fl.EventType.MESSAGE,T=>{var m;if(!g){const p=T.data[0];me(!!p);const y=p,E=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(E){j(ot,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let N=function(Z){const H=Oe[Z];if(H!==void 0)return FT(H)}(x),D=E.message;N===void 0&&(N=A.INTERNAL,D="Unknown error status: "+x+" with message "+E.message),g=!0,_.mo(new V(N,D)),h.close()}else j(ot,`RPC '${e}' stream ${i} received:`,p),_.fo(p)}}),w(a,wC.STAT_EVENT,T=>{T.stat===tv.PROXY?j(ot,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===tv.NOPROXY&&j(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function Vh(){return typeof document<"u"?document:null}/**
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
 */function Nc(t){return new SN(t,!0)}/**
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
 */class QT{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class YT{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new QT(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mb extends YT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=RN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Pn(o.readTime):Y.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=_f(l)?{documents:CN(s,l)}:{query:NN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$T(s,o.resumeToken);const u=Tf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=ku(s,o.snapshotVersion.toTimestamp());const u=Tf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=DN(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.n_(n)}}class gb extends YT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=PN(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.T_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Af(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kN(this.serializer,r))};this.n_(n)}}/**
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
 */class yb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(A.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class vb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Yn(n),this.p_=!1):j("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class _b{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=X(l);u.F_.add(4),await Va(u),u.O_.set("Unknown"),u.F_.delete(4),await bc(u)}(this))})}),this.O_=new vb(r,i)}}async function bc(t){if(Ni(t))for(const e of t.M_)await e(!0)}async function Va(t){for(const e of t.M_)await e(!1)}function XT(t,e){const n=X(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Im(n)?Tm(n):Bs(n).Yo()&&Em(n,e))}function JT(t,e){const n=X(t),r=Bs(n);n.v_.delete(e),r.Yo()&&ZT(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ni(n)&&n.O_.set("Unknown"))}function Em(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).l_(e)}function ZT(t,e){t.N_.Le(e),Bs(t).h_(e)}function Tm(t){t.N_=new wN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.O_.y_()}function Im(t){return Ni(t)&&!Bs(t).Jo()&&t.v_.size>0}function Ni(t){return X(t).F_.size===0}function eI(t){t.N_=void 0}async function wb(t){t.v_.forEach((e,n)=>{Em(t,e)})}async function Eb(t,e){eI(t),Im(t)?(t.O_.b_(e),Tm(t)):t.O_.set("Unknown")}async function Tb(t,e,n){if(t.O_.set("Online"),e instanceof UT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pu(t,r)}else if(e instanceof Ll?t.N_.Ge(e):e instanceof jT?t.N_.Xe(e):t.N_.He(e),!n.isEqual(Y.min()))try{const r=await GT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(gt.EMPTY_BYTE_STRING,c.snapshotVersion)),ZT(s,l);const h=new yr(c.target,l,u,c.sequenceNumber);Em(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Pu(t,r)}}async function Pu(t,e,n){if(!ba(e))throw e;t.F_.add(1),await Va(t),t.O_.set("Offline"),n||(n=()=>GT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await bc(t)})}function tI(t,e){return e().catch(n=>Pu(t,n,e))}async function Dc(t){const e=X(t),n=Vr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Ib(e);)try{const i=await ob(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,Sb(e,i)}catch(i){await Pu(e,i)}nI(e)&&rI(e)}function Ib(t){return Ni(t)&&t.C_.length<10}function Sb(t,e){t.C_.push(e);const n=Vr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function nI(t){return Ni(t)&&!Vr(t).Jo()&&t.C_.length>0}function rI(t){Vr(t).start()}async function Ab(t){Vr(t).A_()}async function xb(t){const e=Vr(t);for(const n of t.C_)e.d_(n.mutations)}async function Rb(t,e,n){const r=t.C_.shift(),i=mm.from(r,e,n);await tI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dc(t)}async function kb(t,e){e&&Vr(t).I_&&await async function(r,i){if(function(o){return yN(o)&&o!==A.ABORTED}(i.code)){const s=r.C_.shift();Vr(r).Xo(),await tI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dc(r)}}(t,e),nI(t)&&rI(t)}async function xv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ni(n);n.F_.add(3),await Va(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await bc(n)}async function Pb(t,e){const n=X(t);e?(n.F_.delete(2),await bc(n)):e||(n.F_.add(2),await Va(n),n.O_.set("Unknown"))}function Bs(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.V_(),new mb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:wb.bind(null,t),Eo:Eb.bind(null,t),c_:Tb.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Im(t)?Tm(t):t.O_.set("Unknown")):(await t.B_.stop(),eI(t))})),t.B_}function Vr(t){return t.L_||(t.L_=function(n,r,i){const s=X(n);return s.V_(),new gb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:Ab.bind(null,t),Eo:kb.bind(null,t),E_:xb.bind(null,t),T_:Rb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Dc(t)):(await t.L_.stop(),t.C_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Sm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),ba(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Rv{constructor(){this.k_=new Ie(B.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):K():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,n,hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Cb{constructor(){this.Q_=void 0,this.listeners=[]}}class Nb{constructor(){this.queries=new $s(e=>ST(e),xc),this.onlineState="Unknown",this.K_=new Set}}async function iI(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Cb),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Am(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&xm(n)}async function sI(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bb(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&xm(n)}function Db(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function xm(t){t.K_.forEach(e=>{e.next()})}class oI{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class aI{constructor(e){this.key=e}}class lI{constructor(e){this.key=e}}class Ob{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=te(),this.mutatedKeys=te(),this.ua=AT(e),this.ca=new hs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Rv,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Rc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?_!==w&&(r.track({type:3,doc:g}),T=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),T=!0):d&&!g&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,g){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return _(d)-_(g)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Rs(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Rv,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=te(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new lI(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new aI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=te();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Rs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Lb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Vb{constructor(e){this.key=e,this.ma=!1}}class Mb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new $s(a=>ST(a),xc),this.pa=new Map,this.ya=new Set,this.wa=new Ie(B.comparator),this.Sa=new Map,this.ba=new vm,this.Da={},this.Ca=new Map,this.va=xs.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Fb(t,e){const n=Gb(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await ab(n.localStore,Rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&XT(n.remoteStore,o)}return i}async function jb(t,e,n,r,i){t.Ma=(h,d,g)=>async function(w,T,m,p){let y=T.view.ha(m);y.es&&(y=await Iv(w.localStore,T.query,!1).then(({documents:N})=>T.view.ha(N,y)));const E=p&&p.targetChanges.get(T.targetId),x=T.view.applyChanges(y,w.isPrimaryClient,E);return Pv(w,T.targetId,x.Ea),x.snapshot}(t,h,d,g);const s=await Iv(t.localStore,e,!0),o=new Ob(e,s.Ps),a=o.ha(s.documents),l=La.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Pv(t,n,u.Ea);const c=new Lb(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function Ub(t,e){const n=X(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!xc(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),JT(n.remoteStore,r.targetId),Rf(n,r.targetId)}).catch(Na)):(Rf(n,r.targetId),await xf(n.localStore,r.targetId,!0))}async function $b(t,e,n){const r=Qb(t);try{const i=await function(o,a){const l=X(o),u=Be.now(),c=a.reduce((g,_)=>g.add(_.key),te());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=Xn(),w=te();return l._s.getEntries(g,c).next(T=>{_=T,_.forEach((m,p)=>{p.isValidDocument()||(w=w.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(T=>{h=T;const m=[];for(const p of a){const y=dN(p,h.get(p.key).overlayedDocument);y!=null&&m.push(new Wr(p.key,y,mT(y.value.mapValue),kn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,m,a)}).next(T=>{d=T;const m=T.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(g,T.batchId,m)})}).then(()=>({batchId:d.batchId,changes:RT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Ie(oe)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ma(r,i.changes),await Dc(r.remoteStore)}catch(i){const s=Am(i,"Failed to persist write");n.reject(s)}}async function uI(t,e){const n=X(t);try{const r=await ib(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?me(o.ma):i.removedDocuments.size>0&&(me(o.ma),o.ma=!1))}),await Ma(n,r,e)}catch(r){await Na(r)}}function kv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&xm(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bb(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Ie(B.comparator);o=o.insert(s,ut.newNoDocument(s,Y.min()));const a=te().add(s),l=new Cc(Y.min(),new Map,new Ie(oe),o,a);await uI(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Rm(r)}else await xf(r.localStore,e,!1).then(()=>Rf(r,e,n)).catch(Na)}async function zb(t,e){const n=X(t),r=e.batch.batchId;try{const i=await rb(n.localStore,e);hI(n,r,null),cI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,i)}catch(i){await Na(i)}}async function Wb(t,e,n){const r=X(t);try{const i=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(me(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);hI(r,e,n),cI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,i)}catch(i){await Na(i)}}function cI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function hI(t,e,n){const r=X(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||dI(t,r)})}function dI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(JT(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Rm(t))}function Pv(t,e,n){for(const r of n)r instanceof aI?(t.ba.addReference(r.key,e),Hb(t,r)):r instanceof lI?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||dI(t,r.key)):K()}function Hb(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ya.add(r),Rm(t))}function Rm(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new B(fe.fromString(e)),r=t.va.next();t.Sa.set(r,new Vb(n)),t.wa=t.wa.insert(n,r),XT(t.remoteStore,new yr(Rn(fm(n.path)),r,"TargetPurposeLimboResolution",am.ae))}}async function Ma(t,e,n){const r=X(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wm.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=X(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,d=>k.forEach(d.Qi,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>k.forEach(d.Ki,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!ba(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.rs.get(d),_=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(_);c.rs=c.rs.insert(d,w)}}}(r.localStore,s))}async function qb(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await KT(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new V(A.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ma(n,r.cs)}}function Kb(t,e){const n=X(t),r=n.Sa.get(e);if(r&&r.ma)return te().add(r.key);{let i=te();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Gb(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bb.bind(null,e),e.fa.c_=bb.bind(null,e.eventManager),e.fa.xa=Db.bind(null,e.eventManager),e}function Qb(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wb.bind(null,e),e}class Cv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nb(this.persistence,new eb,e.initialUser,this.serializer)}createPersistence(e){return new XN(_m.Jr,this.serializer)}createSharedClientState(e){return new ub}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qb.bind(null,this.syncEngine),await Pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nb}()}createDatastore(e){const n=Nc(e.databaseInfo.databaseId),r=function(s){return new pb(s)}(e.databaseInfo);return function(s,o,a,l){return new yb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _b(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kv(this.syncEngine,n,0),function(){return Av.C()?new Av:new cb}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new Mb(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);j("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Va(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class fI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Xb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=dT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mh(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zb(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>xv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>xv(e.remoteStore,s)),t._onlineComponents=e}function Jb(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Zb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Jb(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await Mh(t,new Cv)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Mh(t,new Cv);return t._offlineComponents}async function pI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Nv(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Nv(t,new Yb))),t._onlineComponents}function eD(t){return pI(t).then(e=>e.syncEngine)}async function mI(t){const e=await pI(t),n=e.eventManager;return n.onListen=Fb.bind(null,e.syncEngine),n.onUnlisten=Ub.bind(null,e.syncEngine),n}function tD(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new fI({next:d=>{o.enqueueAndForget(()=>sI(s,h));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new V(A.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oI(fm(a.path),c,{includeMetadataChanges:!0,Z_:!0});return iI(s,h)}(await mI(t),t.asyncQueue,e,n,r)),r.promise}function nD(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new fI({next:d=>{o.enqueueAndForget(()=>sI(s,h)),d.fromCache&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oI(a,c,{includeMetadataChanges:!0,Z_:!0});return iI(s,h)}(await mI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function gI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bv=new Map;/**
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
 */function yI(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rD(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dv(t){if(!B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ov(t){if(B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IC;switch(r.type){case"firstParty":return new RC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bv.get(n);r&&(j("ComponentProvider","Removing Datastore"),bv.delete(n),r.terminate())}(this),Promise.resolve()}}function iD(t,e,n,r={}){var i;const s=(t=Jn(t,Lc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=eE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new SC(new hT(a,l))}}/**
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
 */class zs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Cr extends zs{constructor(e,n,r){super(e,n,fm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new B(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function sD(t,e,...n){if(t=le(t),yI("collection","path",e),t instanceof Lc){const r=fe.fromString(e,...n);return Ov(r),new Cr(t,null,r)}{if(!(t instanceof Tt||t instanceof Cr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ov(r),new Cr(t.firestore,null,r)}}function pa(t,e,...n){if(t=le(t),arguments.length===1&&(e=dT.V()),yI("doc","path",e),t instanceof Lc){const r=fe.fromString(e,...n);return Dv(r),new Tt(t,null,new B(r))}{if(!(t instanceof Tt||t instanceof Cr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Dv(r),new Tt(t.firestore,t instanceof Cr?t.converter:null,new B(r))}}/**
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
 */class oD{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new QT(this,"async_queue_retry"),this.ou=()=>{const n=Vh();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Wn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ba(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=Sm.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&K()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Fa extends Lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new oD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vI(this),this._firestoreClient.terminate()}}function aD(t,e){const n=typeof t=="object"?t:lc(),r=typeof t=="string"?t:e||"(default)",i=$r(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=X0("firestore");s&&iD(i,...s)}return i}function km(t){return t._firestoreClient||vI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new jC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,gI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Xb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(gt.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pm{constructor(e){this._methodName=e}}/**
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
 */class Cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const lD=/^__.*__$/;class uD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}class _I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Nm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Cu(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(wI(this.Tu)&&lD.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class cD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nc(e)}wu(e,n,r,i=!1){return new Nm({Tu:e,methodName:n,yu:r,path:ct.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bm(t){const e=t._freezeSettings(),n=Nc(t._databaseId);return new cD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hD(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Dm("Data must be an object, but it was:",o,r);const a=EI(r,o);let l,u;if(s.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=kf(e,h,n);if(!o.contains(d))throw new V(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);II(c,d)||c.push(d)}l=new Vt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new uD(new Rt(a),l,u)}class Mc extends Pm{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function dD(t,e,n,r){const i=t.wu(1,e,n);Dm("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Ci(r,(l,u)=>{const c=Om(e,l,n);u=le(u);const h=i.mu(c);if(u instanceof Mc)s.push(c);else{const d=ja(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Vt(s);return new _I(o,a,i.fieldTransforms)}function fD(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[kf(e,r,n)],l=[i];if(s.length%2!=0)throw new V(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(kf(e,s[d])),l.push(s[d+1]);const u=[],c=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!II(u,a[d])){const g=a[d];let _=l[d];_=le(_);const w=o.mu(g);if(_ instanceof Mc)u.push(g);else{const T=ja(_,w);T!=null&&(u.push(g),c.set(g,T))}}const h=new Vt(u);return new _I(c,h,o.fieldTransforms)}function pD(t,e,n,r=!1){return ja(n,t.wu(r?4:3,e))}function ja(t,e){if(TI(t=le(t)))return Dm("Unsupported field value:",e,t),EI(t,e);if(t instanceof Pm)return function(r,i){if(!wI(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ja(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:ku(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(i.serializer,s)}}if(r instanceof Cm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:$T(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ym(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Oc(r)}`)}(t,e)}function EI(t,e){const n={};return fT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=ja(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Cm||t instanceof ks||t instanceof Tt||t instanceof Pm)}function Dm(t,e,n){if(!TI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Oc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function kf(t,e,n){if((e=le(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return Om(t,e);throw Cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const mD=new RegExp("[~\\*/\\[\\]]");function Om(t,e,n){if(e.search(mD)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(A.INVALID_ARGUMENT,a+t+l)}function II(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(AI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gD extends SI{data(){return super.data()}}function AI(t,e){return typeof e=="string"?Om(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function yD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lm{}class vD extends Lm{}function _D(t,e,...n){let r=[];e instanceof Lm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Mm).length,a=s.filter(l=>l instanceof Vm).length;if(o>1||o>0&&a>0)throw new V(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Vm extends vD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vm(e,n,r)}_apply(e){const n=this._parse(e);return xI(e._query,n),new zs(e.firestore,e.converter,wf(e._query,n))}_parse(e){const n=bm(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Mv(h,c);const g=[];for(const _ of h)g.push(Vv(l,s,_));d={arrayValue:{values:g}}}else d=Vv(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Mv(h,c),d=pD(a,o,h,c==="in"||c==="not-in");return je.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mm extends Lm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)xI(o,l),o=wf(o,l)}(e._query,n),new zs(e.firestore,e.converter,wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vv(t,e,n){if(typeof(n=le(n))=="string"){if(n==="")throw new V(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IT(e)&&n.indexOf("/")!==-1)throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!B.isDocumentKey(r))throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ov(t,new B(r))}if(n instanceof Tt)return ov(t,n._key);throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function Mv(t,e){if(!Array.isArray(t)||t.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xI(t,e){if(e.isInequality()){const r=pm(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new V(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=TT(t);s!==null&&wD(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function wD(t,e,n){if(!n.isEqual(e))throw new V(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ED{convertValue(e,n="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Cm(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=um(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);me(qT(r));const i=new ca(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function TD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RI extends SI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(AI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vl extends RI{data(e={}){return super.data(e)}}class ID{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:SD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Pf(t){t=Jn(t,Tt);const e=Jn(t.firestore,Fa);return tD(km(e),t._key).then(n=>xD(e,t,n))}class kI extends ED{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function AD(t){t=Jn(t,zs);const e=Jn(t.firestore,Fa),n=km(e),r=new kI(e);return yD(t._query),nD(n,t._query).then(i=>new ID(e,r,t,i))}function PI(t,e,n){t=Jn(t,Tt);const r=Jn(t.firestore,Fa),i=TD(t.converter,e,n);return NI(r,[hD(bm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,kn.none())])}function CI(t,e,n,...r){t=Jn(t,Tt);const i=Jn(t.firestore,Fa),s=bm(i);let o;return o=typeof(e=le(e))=="string"||e instanceof Vc?fD(s,"updateDoc",t._key,e,n,r):dD(s,"updateDoc",t._key,e),NI(i,[o.toMutation(t._key,kn.exists(!0))])}function NI(t,e){return function(r,i){const s=new Wn;return r.asyncQueue.enqueueAndForget(async()=>$b(await eD(r),i,s)),s.promise}(km(t),e)}function xD(t,e,n){const r=n.docs.get(e._key),i=new kI(t);return new RI(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Us=i})(ki),cn(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fa(new AC(r.getProvider("auth-internal")),new PC(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bt(nv,"4.2.0",e),bt(nv,"4.2.0","esm2017")})();var RD="firebase",kD="10.4.0";/**
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
 */bt(RD,kD,"app");const PD=(t,e)=>e.some(n=>t instanceof n);let Fv,jv;function CD(){return Fv||(Fv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ND(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bI=new WeakMap,Cf=new WeakMap,DI=new WeakMap,Fh=new WeakMap,Fm=new WeakMap;function bD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bI.set(n,t)}).catch(()=>{}),Fm.set(e,t),e}function DD(t){if(Cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cf.set(t,e)}let Nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OD(t){Nf=t(Nf)}function LD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jh(this),e,...n);return DI.set(r,e.sort?e.sort():[e]),Nr(r)}:ND().includes(t)?function(...e){return t.apply(jh(this),e),Nr(bI.get(this))}:function(...e){return Nr(t.apply(jh(this),e))}}function VD(t){return typeof t=="function"?LD(t):(t instanceof IDBTransaction&&DD(t),PD(t,CD())?new Proxy(t,Nf):t)}function Nr(t){if(t instanceof IDBRequest)return bD(t);if(Fh.has(t))return Fh.get(t);const e=VD(t);return e!==t&&(Fh.set(t,e),Fm.set(e,t)),e}const jh=t=>Fm.get(t);function MD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FD=["get","getKey","getAll","getAllKeys","count"],jD=["put","add","delete","clear"],Uh=new Map;function Uv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Uh.set(e,s),s}OD(t=>({...t,get:(e,n,r)=>Uv(e,n)||t.get(e,n,r),has:(e,n)=>!!Uv(e,n)||t.has(e,n)}));const OI="@firebase/installations",jm="0.6.4";/**
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
 */const LI=1e4,VI=`w:${jm}`,MI="FIS_v2",UD="https://firebaseinstallations.googleapis.com/v1",$D=60*60*1e3,BD="installations",zD="Installations";/**
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
 */const WD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_i=new Ri(BD,zD,WD);function FI(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
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
 */function jI({projectId:t}){return`${UD}/projects/${t}/installations`}function UI(t){return{token:t.token,requestStatus:2,expiresIn:qD(t.expiresIn),creationTime:Date.now()}}async function $I(t,e){const r=(await e.json()).error;return _i.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function BI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function HD(t,{refreshToken:e}){const n=BI(t);return n.append("Authorization",KD(e)),n}async function zI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qD(t){return Number(t.replace("s","000"))}function KD(t){return`${MI} ${t}`}/**
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
 */async function GD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jI(t),i=BI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:MI,appId:t.appId,sdkVersion:VI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:UI(u.authToken)}}else throw await $I("Create Installation",l)}/**
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
 */function WI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function QD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YD=/^[cdef][\w-]{21}$/,bf="";function XD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JD(t);return YD.test(n)?n:bf}catch{return bf}}function JD(t){return QD(t).substr(0,22)}/**
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
 */function Fc(t){return`${t.appName}!${t.appId}`}/**
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
 */const HI=new Map;function qI(t,e){const n=Fc(t);KI(n,e),ZD(n,e)}function KI(t,e){const n=HI.get(t);if(n)for(const r of n)r(e)}function ZD(t,e){const n=e2();n&&n.postMessage({key:t,fid:e}),t2()}let ni=null;function e2(){return!ni&&"BroadcastChannel"in self&&(ni=new BroadcastChannel("[Firebase] FID Change"),ni.onmessage=t=>{KI(t.data.key,t.data.fid)}),ni}function t2(){HI.size===0&&ni&&(ni.close(),ni=null)}/**
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
 */const n2="firebase-installations-database",r2=1,wi="firebase-installations-store";let $h=null;function Um(){return $h||($h=MD(n2,r2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),$h}async function Nu(t,e){const n=Fc(t),i=(await Um()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&qI(t,e.fid),e}async function GI(t){const e=Fc(t),r=(await Um()).transaction(wi,"readwrite");await r.objectStore(wi).delete(e),await r.done}async function jc(t,e){const n=Fc(t),i=(await Um()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&qI(t,a.fid),a}/**
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
 */async function $m(t){let e;const n=await jc(t.appConfig,r=>{const i=i2(r),s=s2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function i2(t){const e=t||{fid:XD(),registrationStatus:0};return QI(e)}function s2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=o2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:a2(t)}:{installationEntry:e}}async function o2(t,e){try{const n=await GD(t,e);return Nu(t.appConfig,n)}catch(n){throw FI(n)&&n.customData.serverCode===409?await GI(t.appConfig):await Nu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function a2(t){let e=await $v(t.appConfig);for(;e.registrationStatus===1;)await WI(100),e=await $v(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $m(t);return r||n}return e}function $v(t){return jc(t,e=>{if(!e)throw _i.create("installation-not-found");return QI(e)})}function QI(t){return l2(t)?{fid:t.fid,registrationStatus:0}:t}function l2(t){return t.registrationStatus===1&&t.registrationTime+LI<Date.now()}/**
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
 */async function u2({appConfig:t,heartbeatServiceProvider:e},n){const r=c2(t,n),i=HD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:VI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zI(()=>fetch(r,a));if(l.ok){const u=await l.json();return UI(u)}else throw await $I("Generate Auth Token",l)}function c2(t,{fid:e}){return`${jI(t)}/${e}/authTokens:generate`}/**
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
 */async function Bm(t,e=!1){let n;const r=await jc(t.appConfig,s=>{if(!YI(s))throw _i.create("not-registered");const o=s.authToken;if(!e&&f2(o))return s;if(o.requestStatus===1)return n=h2(t,e),s;{if(!navigator.onLine)throw _i.create("app-offline");const a=m2(s);return n=d2(t,a),a}});return n?await n:r.authToken}async function h2(t,e){let n=await Bv(t.appConfig);for(;n.authToken.requestStatus===1;)await WI(100),n=await Bv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bm(t,e):r}function Bv(t){return jc(t,e=>{if(!YI(e))throw _i.create("not-registered");const n=e.authToken;return g2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function d2(t,e){try{const n=await u2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Nu(t.appConfig,r),n}catch(n){if(FI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await GI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nu(t.appConfig,r)}throw n}}function YI(t){return t!==void 0&&t.registrationStatus===2}function f2(t){return t.requestStatus===2&&!p2(t)}function p2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$D}function m2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function g2(t){return t.requestStatus===1&&t.requestTime+LI<Date.now()}/**
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
 */async function y2(t){const e=t,{installationEntry:n,registrationPromise:r}=await $m(e);return r?r.catch(console.error):Bm(e).catch(console.error),n.fid}/**
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
 */async function v2(t,e=!1){const n=t;return await _2(n),(await Bm(n,e)).token}async function _2(t){const{registrationPromise:e}=await $m(t);e&&await e}/**
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
 */function w2(t){if(!t||!t.options)throw Bh("App Configuration");if(!t.name)throw Bh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bh(t){return _i.create("missing-app-config-values",{valueName:t})}/**
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
 */const XI="installations",E2="installations-internal",T2=t=>{const e=t.getProvider("app").getImmediate(),n=w2(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},I2=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,XI).getImmediate();return{getId:()=>y2(n),getToken:i=>v2(n,i)}};function S2(){cn(new Jt(XI,T2,"PUBLIC")),cn(new Jt(E2,I2,"PRIVATE"))}S2();bt(OI,jm);bt(OI,jm,"esm2017");/**
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
 */const bu="analytics",A2="firebase_id",x2="origin",R2=60*1e3,k2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Dt=new ac("@firebase/analytics");/**
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
 */const P2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new Ri("analytics","Analytics",P2);/**
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
 */function C2(t){if(!t.startsWith(zm)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function JI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function N2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function b2(t,e){const n=N2("firebase-js-sdk-policy",{createScriptURL:C2}),r=document.createElement("script"),i=`${zm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function D2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function O2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await JI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Dt.error(a)}t("config",i,s)}async function L2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await JI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Dt.error(s)}}function V2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await L2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await O2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Dt.error(a)}}return i}function M2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=V2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function F2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zm)&&n.src.includes(t))return n;return null}/**
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
 */const j2=30,U2=1e3;class $2{constructor(e={},n=U2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ZI=new $2;function B2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function z2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:B2(r)},s=k2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function W2(t,e=ZI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw jt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new K2;return setTimeout(async()=>{a.abort()},n!==void 0?n:R2),e1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function e1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ZI){var s;const{appId:o,measurementId:a}=t;try{await H2(r,e)}catch(l){if(a)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await z2(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!q2(u)){if(i.deleteThrottleMetadata(o),a)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Oy(n,i.intervalMillis,j2):Oy(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Dt.debug(`Calling attemptFetch again in ${c} millis`),e1(t,h,r,i)}}function H2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function q2(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class K2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function G2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Q2(){if(nE())try{await rE()}catch(t){return Dt.warn(jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Y2(t,e,n,r,i,s,o){var a;const l=W2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Dt.error(g)),e.push(l);const u=Q2().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);F2(s)||b2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[x2]="firebase",d.update=!0,h!=null&&(d[A2]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class X2{constructor(e){this.app=e}_delete(){return delete No[this.app.options.appId],Promise.resolve()}}let No={},zv=[];const Wv={};let zh="dataLayer",J2="gtag",Hv,t1,qv=!1;function Z2(){const t=[];if(tE()&&t.push("This is a browser extension environment."),ek()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function eO(t,e,n){Z2();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(No[r]!=null)throw jt.create("already-exists",{id:r});if(!qv){D2(zh);const{wrappedGtag:s,gtagCore:o}=M2(No,zv,Wv,zh,J2);t1=s,Hv=o,qv=!0}return No[r]=Y2(t,zv,Wv,e,Hv,zh,n),new X2(t)}function tO(t=lc()){t=le(t);const e=$r(t,bu);return e.isInitialized()?e.getImmediate():nO(t)}function nO(t,e={}){const n=$r(t,bu);if(n.isInitialized()){const i=n.getImmediate();if(Jo(e,n.getOptions()))return i;throw jt.create("already-initialized")}return n.initialize({options:e})}function rO(t,e,n,r){t=le(t),G2(t1,No[t.app.options.appId],e,n,r).catch(i=>Dt.error(i))}const Kv="@firebase/analytics",Gv="0.10.0";function iO(){cn(new Jt(bu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eO(r,i,n)},"PUBLIC")),cn(new Jt("analytics-internal",t,"PRIVATE")),bt(Kv,Gv),bt(Kv,Gv,"esm2017");function t(e){try{const n=e.getProvider(bu).getImmediate();return{logEvent:(r,i,s)=>rO(n,r,i,s)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}iO();function Wm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Qv(t){return t!==void 0&&t.enterprise!==void 0}class sO{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function n1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oO=n1,r1=new Ri("auth","Firebase",n1());/**
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
 */const Du=new ac("@firebase/auth");function aO(t,...e){Du.logLevel<=re.WARN&&Du.warn(`Auth (${ki}): ${t}`,...e)}function Ml(t,...e){Du.logLevel<=re.ERROR&&Du.error(`Auth (${ki}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Hm(t,...e)}function Cn(t,...e){return Hm(t,...e)}function lO(t,e,n){const r=Object.assign(Object.assign({},oO()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function Hm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r1.create(t,...e)}function W(t,e,...n){if(!t)throw Hm(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Zn(t,e){t||$n(e)}/**
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
 */function Df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uO(){return Yv()==="http:"||Yv()==="https:"}function Yv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uO()||tE()||"connection"in navigator)?navigator.onLine:!0}function hO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=YR()||JR()}get(){return cO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qm(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class i1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fO=new Ua(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return s1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ta(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),i1.fetch()(o1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function s1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dO),e);try{const i=new pO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lO(t,c,u);fn(t,c)}}catch(i){if(i instanceof Zt)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function $a(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function o1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qm(t.config,i):`${t.config.apiScheme}://${i}`}class pO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),fO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}async function mO(t,e){return tr(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
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
 */async function gO(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function yO(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vO(t,e=!1){const n=le(t),r=await n.getIdToken(e),i=Km(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bo(Wh(i.auth_time)),issuedAtTime:bo(Wh(i.iat)),expirationTime:bo(Wh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wh(t){return Number(t)*1e3}function Km(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=Q0(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _O(t){const e=Km(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&wO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class a1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ei(t,yO(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SO(s.providerUserInfo):[],a=IO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new a1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function TO(t){const e=le(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SO(t){return t.map(e=>{var{providerId:n}=e,r=Wm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AO(t,e){const n=await s1(t,{},async()=>{const r=Ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=o1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",i1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_O(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ma;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function rr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new a1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vO(this,e)}reload(){return TO(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ei(this,gO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:x,providerData:N,stsTokenManager:D}=n;W(y&&D,e,"internal-error");const F=ma.fromJSON(this.name,D);W(typeof y=="string",e,"internal-error"),rr(h,e.name),rr(d,e.name),W(typeof E=="boolean",e,"internal-error"),W(typeof x=="boolean",e,"internal-error"),rr(g,e.name),rr(_,e.name),rr(w,e.name),rr(T,e.name),rr(m,e.name),rr(p,e.name);const Z=new li({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:F,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(Z.providerData=N.map(H=>Object.assign({},H))),T&&(Z._redirectEventId=T),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new ma;i.updateFromServerResponse(n);const s=new li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ou(s),s}}/**
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
 */const Xv=new Map;function Bn(t){Zn(t instanceof Function,"Expected a class definition");let e=Xv.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xv.set(t,e),e)}/**
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
 */class l1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l1.type="NONE";const Jv=l1;/**
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
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Bn(Jv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bn(Jv);const o=Fl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=li._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ds(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,e,r))}}/**
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
 */function Zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f1(e))return"Blackberry";if(p1(e))return"Webos";if(Gm(e))return"Safari";if((e.includes("chrome/")||c1(e))&&!e.includes("edge/"))return"Chrome";if(d1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u1(t=mt()){return/firefox\//i.test(t)}function Gm(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c1(t=mt()){return/crios\//i.test(t)}function h1(t=mt()){return/iemobile/i.test(t)}function d1(t=mt()){return/android/i.test(t)}function f1(t=mt()){return/blackberry/i.test(t)}function p1(t=mt()){return/webos/i.test(t)}function Uc(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xO(t=mt()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RO(){return ZR()&&document.documentMode===10}function m1(t=mt()){return Uc(t)||d1(t)||p1(t)||f1(t)||/windows phone/i.test(t)||h1(t)}function kO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function g1(t,e=[]){let n;switch(t){case"Browser":n=Zv(mt());break;case"Worker":n=`${Zv(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
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
 */class PO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CO(t,e={}){return tr(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
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
 */const NO=6;class bO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e_(this),this.idTokenSubscription=new e_(this),this.beforeStateQueue=new PO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?le(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CO(this),n=new bO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return le(t)}class e_{constructor(e){this.auth=e,this.observer=null,this.addObserver=sk(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function y1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OO().appendChild(r)})}function LO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VO="https://www.google.com/recaptcha/enterprise.js?render=",MO="recaptcha-enterprise",FO="NO_RECAPTCHA";class jO{constructor(e){this.type=MO,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(FO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}y1(VO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Lu(t,e,n,r=!1){const i=new jO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function UO(t,e){const n=$r(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jo(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function $O(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BO(t,e,n){const r=bi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=v1(e),{host:o,port:a}=zO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WO()}function v1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zO(t){const e=v1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:t_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:t_(o)}}}function t_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function _1(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Hh(t,e){return $a(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}async function HO(t,e){return tr(t,"POST","/v1/accounts:sendOobCode",Hr(t,e))}async function qO(t,e){return HO(t,e)}/**
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
 */async function KO(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function GO(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
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
 */class ga extends Qm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Lu(e,r,"signInWithPassword");return Hh(e,i)}else return Hh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Lu(e,r,"signInWithPassword");return Hh(e,s)}else return Promise.reject(i)});case"emailLink":return KO(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GO(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fs(t,e){return $a(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
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
 */const QO="http://localhost";class Ti extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:QO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ta(n)}return e}}/**
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
 */function YO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XO(t){const e=lo(uo(t)).link,n=e?lo(uo(e)).deep_link_id:null,r=lo(uo(t)).deep_link_id;return(r?lo(uo(r)).link:null)||r||n||e||t}class Ym{constructor(e){var n,r,i,s,o,a;const l=lo(uo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=YO((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XO(e);try{return new Ym(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ym.parseLink(n);return W(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class w1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ba extends w1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends Ba{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class hr extends Ba{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends Ba{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function qh(t,e){return $a(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
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
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await li._fromIdTokenResponse(e,r,i),o=n_(r);return new Ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=n_(r);return new Ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function n_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vu extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function E1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}async function JO(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
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
 */async function T1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ei(t,E1(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Km(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
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
 */async function I1(t,e,n=!1){const r="signIn",i=await E1(t,r,e),s=await Ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ZO(t,e){return I1(bi(t),e)}async function eL(t,e){return T1(le(t),e)}/**
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
 */function tL(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function S1(t){const e=bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nL(t,e,n){var r;const i=bi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Lu(i,s,"signUpPassword");o=qh(i,u)}else o=qh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Lu(i,s,"signUpPassword");return qh(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&S1(t),u}),l=await Ii._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function rL(t,e,n){return ZO(le(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&S1(t),r})}async function iL(t,e){const n=le(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&tL(n.auth,i,e);const{email:s}=await qO(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function sL(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ei(r,sL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aL(t,e){return lL(le(t),null,e)}async function lL(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ei(t,_1(r,s));await t._updateTokensIfNecessary(o,!0)}function uL(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function cL(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function hL(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}async function dL(t){return le(t).delete()}const Mu="__sak";/**
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
 */class A1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fL(){const t=mt();return Gm(t)||Uc(t)}const pL=1e3,mL=10;class x1 extends A1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fL()&&kO(),this.fallbackToPolling=m1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x1.type="LOCAL";const gL=x1;/**
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
 */class R1 extends A1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R1.type="SESSION";const k1=R1;/**
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
 */function yL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
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
 */function Xm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Xm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function _L(t){Nn().location.href=t}/**
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
 */function P1(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function wL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TL(){return P1()?self:null}/**
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
 */const C1="firebaseLocalStorageDb",IL=1,Fu="firebaseLocalStorage",N1="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bc(t,e){return t.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function SL(){const t=indexedDB.deleteDatabase(C1);return new za(t).toPromise()}function Of(){const t=indexedDB.open(C1,IL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fu,{keyPath:N1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fu)?e(r):(r.close(),await SL(),e(await Of()))})})}async function r_(t,e,n){const r=Bc(t,!0).put({[N1]:e,value:n});return new za(r).toPromise()}async function AL(t,e){const n=Bc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function i_(t,e){const n=Bc(t,!0).delete(e);return new za(n).toPromise()}const xL=800,RL=3;class b1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(TL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wL(),!this.activeServiceWorker)return;this.sender=new vL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Of();return await r_(e,Mu,"1"),await i_(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>r_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>i_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bc(i,!1).getAll();return new za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b1.type="LOCAL";const kL=b1;new Ua(3e4,6e4);/**
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
 */function PL(t,e){return e?Bn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jm extends Qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CL(t){return I1(t.auth,new Jm(t),t.bypassAuthState)}function NL(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),T1(n,new Jm(t),t.bypassAuthState)}async function bL(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),JO(n,new Jm(t),t.bypassAuthState)}/**
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
 */class D1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CL;case"linkViaPopup":case"linkViaRedirect":return bL;case"reauthViaPopup":case"reauthViaRedirect":return NL;default:fn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DL=new Ua(2e3,1e4);class ts extends D1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DL.get())};e()}}ts.currentPopupAction=null;/**
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
 */const OL="pendingRedirect",jl=new Map;class LL extends D1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await VL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VL(t,e){const n=jL(e),r=FL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ML(t,e){jl.set(t._key(),e)}function FL(t){return Bn(t._redirectPersistence)}function jL(t){return Fl(OL,t.config.apiKey,t.name)}async function UL(t,e,n=!1){const r=bi(t),i=PL(r,e),o=await new LL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $L=10*60*1e3;class BL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$L&&this.cachedEventUids.clear(),this.cachedEventUids.has(s_(e))}saveEventToCache(e){this.cachedEventUids.add(s_(e)),this.lastProcessedEventTime=Date.now()}}function s_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O1(t);default:return!1}}/**
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
 */async function WL(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const HL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qL=/^https?/;async function KL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WL(t);for(const n of e)try{if(GL(n))return}catch{}fn(t,"unauthorized-domain")}function GL(t){const e=Df(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qL.test(n))return!1;if(HL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QL=new Ua(3e4,6e4);function o_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YL(t){return new Promise((e,n)=>{var r,i,s;function o(){o_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o_(),n(Cn(t,"network-request-failed"))},timeout:QL.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=LO("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},y1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function XL(t){return Ul=Ul||YL(t),Ul}/**
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
 */const JL=new Ua(5e3,15e3),ZL="__/auth/iframe",eV="emulator/auth/iframe",tV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rV(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qm(e,eV):`https://${t.config.authDomain}/${ZL}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=nV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ta(r).slice(1)}`}async function iV(t){const e=await XL(t),n=Nn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:rV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},JL.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oV=500,aV=600,lV="_blank",uV="http://localhost";class a_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cV(t,e,n,r=oV,i=aV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=mt().toLowerCase();n&&(a=c1(u)?lV:n),u1(u)&&(e=e||uV,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(xO(u)&&a!=="_self")return hV(e||"",a),new a_(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new a_(h)}function hV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dV="__/auth/handler",fV="emulator/auth/handler",pV=encodeURIComponent("fac");async function l_(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof w1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ik(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ba){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${pV}=${encodeURIComponent(l)}`:"";return`${mV(t)}?${Ta(a).slice(1)}${u}`}function mV({config:t}){return t.emulator?qm(t,fV):`https://${t.authDomain}/${dV}`}/**
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
 */const Kh="webStorageSupport";class gV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k1,this._completeRedirectFn=UL,this._overrideRedirectResult=ML}async _openPopup(e,n,r,i){var s;Zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await l_(e,n,r,Df(),i);return cV(e,o,Xm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await l_(e,n,r,Df(),i);return _L(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iV(e),r=new BL(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kh,{type:Kh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m1()||Gm()||Uc()}}const yV=gV;var u_="@firebase/auth",c_="1.3.0";/**
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
 */class vV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _V(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wV(t){cn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g1(t)},u=new DO(r,i,s,l);return $O(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Jt("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new vV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(u_,c_,_V(t)),bt(u_,c_,"esm2017")}/**
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
 */const EV=5*60,TV=Z0("authIdTokenMaxAge")||EV;let h_=null;const IV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TV)return;const i=n==null?void 0:n.token;h_!==i&&(h_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function L1(t=lc()){const e=$r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UO(t,{popupRedirectResolver:yV,persistence:[kL,gL,k1]}),r=Z0("authTokenSyncURL");if(r){const s=IV(r);cL(n,s,()=>s(n.currentUser)),uL(n,o=>s(o))}const i=Y0("auth");return i&&BO(n,`http://${i}`),n}wV("Browser");/**
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
 */const V1="firebasestorage.googleapis.com",M1="storageBucket",SV=2*60*1e3,AV=10*60*1e3;/**
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
 */class ke extends Zt{constructor(e,n,r=0){super(Gh(e),`Firebase Storage: ${n} (${Gh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function Gh(t){return"storage/"+t}function Zm(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Re.UNKNOWN,t)}function xV(t){return new ke(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RV(t){return new ke(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Re.UNAUTHENTICATED,t)}function PV(){return new ke(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CV(t){return new ke(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NV(){return new ke(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bV(){return new ke(Re.CANCELED,"User canceled the upload/download.")}function DV(t){return new ke(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function OV(t){return new ke(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LV(){return new ke(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M1+"' property when initializing the app?")}function VV(){return new ke(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MV(){return new ke(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FV(t){return new ke(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lf(t){return new ke(Re.INVALID_ARGUMENT,t)}function F1(){return new ke(Re.APP_DELETED,"The Firebase app was deleted.")}function jV(t){return new ke(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Do(t,e){return new ke(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function no(t){throw new ke(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw OV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},w=n===V1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${T}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const x=y[E],N=x.regex.exec(e);if(N){const D=N[x.indices.bucket];let F=N[x.indices.path];F||(F=""),r=new Mt(D,F),x.postModify(r);break}}if(r==null)throw DV(e);return r}}class UV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $V(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(g,l())},T)}function d(){s&&clearTimeout(s)}function g(T,...m){if(u){d();return}if(T){d(),c.call(null,T,...m);return}if(l()||o){d(),c.call(null,T,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let _=!1;function w(T){_||(_=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function BV(t){t(!1)}/**
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
 */function zV(t){return t!==void 0}function WV(t){return typeof t=="object"&&!Array.isArray(t)}function eg(t){return typeof t=="string"||t instanceof String}function d_(t){return tg()&&t instanceof Blob}function tg(){return typeof Blob<"u"&&!XR()}function f_(t,e,n,r){if(r<e)throw Lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function zc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ui;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ui||(ui={}));/**
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
 */function HV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class qV{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ui.NO_ERROR,l=s.getStatus();if(!a||HV(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ui.ABORT;r(!1,new vl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new vl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Zm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?F1():bV();o(l)}else{const l=NV();o(l)}};this.canceled_?n(!1,new vl(!1,null,!0)):this.backoffId_=$V(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XV(t,e,n,r,i,s,o=!0){const a=j1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return QV(u,e),KV(u,n),GV(u,s),YV(u,r),new qV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function JV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZV(...t){const e=JV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tg())return new Blob(t);throw new ke(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tM(t){if(typeof atob>"u")throw FV("base-64");return atob(t)}/**
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
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qh{constructor(e,n){this.data=e,this.contentType=n||null}}function nM(t,e){switch(t){case In.RAW:return new Qh(U1(e));case In.BASE64:case In.BASE64URL:return new Qh($1(t,e));case In.DATA_URL:return new Qh(iM(e),sM(e))}throw Zm()}function U1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rM(t){let e;try{e=decodeURIComponent(t)}catch{throw Do(In.DATA_URL,"Malformed data URL.")}return U1(e)}function $1(t,e){switch(t){case In.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Do(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Do(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tM(e)}catch(i){throw i.message.includes("polyfill")?i:Do(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class B1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Do(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function iM(t){const e=new B1(t);return e.base64?$1(In.BASE64,e.rest):rM(e.rest)}function sM(t){return new B1(t).contentType}function oM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,i="";d_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(d_(this.data_)){const r=this.data_,i=eM(r,e,n);return i===null?null:new fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(tg()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(ZV.apply(null,n))}else{const n=e.map(o=>eg(o)?nM(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new fr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function z1(t){let e;try{e=JSON.parse(t)}catch{return null}return WV(e)?e:null}/**
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
 */function aM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function W1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function uM(t,e){return e}class yt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||uM}}let _l=null;function cM(t){return!eg(t)||t.length<2?t:W1(t)}function H1(){if(_l)return _l;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(s,o){return cM(o)}const n=new yt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),_l=t,_l}function hM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function dM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return hM(r,t),r}function q1(t,e,n){const r=z1(e);return r===null?null:dM(t,r,n)}function fM(t,e,n,r){const i=z1(e);if(i===null||!eg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=zc(d,n,r),_=j1({alt:"media",token:u});return g+_})[0]}function pM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ng{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function K1(t){if(!t)throw Zm()}function mM(t,e){function n(r,i){const s=q1(t,i,e);return K1(s!==null),s}return n}function gM(t,e){function n(r,i){const s=q1(t,i,e);return K1(s!==null),fM(s,i,t.host,t._protocol)}return n}function G1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=PV():i=kV():n.getStatus()===402?i=RV(t.bucket):n.getStatus()===403?i=CV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Q1(t){const e=G1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=xV(t.path)),s.serverResponse=i.serverResponse,s}return n}function yM(t,e,n){const r=e.fullServerUrl(),i=zc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ng(i,s,gM(t,n),o);return a.errorHandler=Q1(e),a}function vM(t,e){const n=e.fullServerUrl(),r=zc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ng(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Q1(e),a}function _M(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_M(null,e)),r}function EM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=wM(e,r,i),c=pM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=fr.getBlob(h,r,d);if(g===null)throw VV();const _={name:u.fullPath},w=zc(s,t.host,t._protocol),T="POST",m=t.maxUploadRetryTime,p=new ng(w,T,mM(t,n),m);return p.urlParams=_,p.headers=o,p.body=g.uploadData(),p.errorHandler=G1(e),p}class TM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ui.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ui.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ui.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw no("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw no("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw no("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw no("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw no("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IM extends TM{initXhr(){this.xhr_.responseType="text"}}function rg(){return new IM}/**
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
 */class Si{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Si(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W1(this._location.path)}get storage(){return this._service}get parent(){const e=aM(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jV(e)}}function SM(t,e,n){t._throwIfRoot("uploadBytes");const r=EM(t.storage,t._location,H1(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,rg).then(i=>({metadata:i,ref:t}))}function AM(t){t._throwIfRoot("getDownloadURL");const e=yM(t.storage,t._location,H1());return t.storage.makeRequestWithTokens(e,rg).then(n=>{if(n===null)throw MV();return n})}function xM(t){t._throwIfRoot("deleteObject");const e=vM(t.storage,t._location);return t.storage.makeRequestWithTokens(e,rg)}function RM(t,e){const n=lM(t._location.path,e),r=new Mt(t._location.bucket,n);return new Si(t.storage,r)}/**
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
 */function kM(t){return/^[A-Za-z]+:\/\//.test(t)}function PM(t,e){return new Si(t,e)}function Y1(t,e){if(t instanceof ig){const n=t;if(n._bucket==null)throw LV();const r=new Si(n,n._bucket);return e!=null?Y1(r,e):r}else return e!==void 0?RM(t,e):t}function CM(t,e){if(e&&kM(e)){if(t instanceof ig)return PM(t,e);throw Lf("To use ref(service, url), the first argument must be a Storage instance.")}else return Y1(t,e)}function p_(t,e){const n=e==null?void 0:e[M1];return n==null?null:Mt.makeFromBucketSpec(n,t)}function NM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eE(i,t.app.options.projectId))}class ig{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=V1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SV,this._maxUploadRetryTime=AV,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=p_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=p_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Si(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UV(F1());{const o=XV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const m_="@firebase/storage",g_="0.11.2";/**
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
 */const X1="storage";function bM(t,e,n){return t=le(t),SM(t,e,n)}function wl(t){return t=le(t),AM(t)}function DM(t){return t=le(t),xM(t)}function Yh(t,e){return t=le(t),CM(t,e)}function Vf(t=lc(),e){t=le(t);const r=$r(t,X1).getImmediate({identifier:e}),i=X0("storage");return i&&OM(r,...i),r}function OM(t,e,n,r={}){NM(t,e,n,r)}function LM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ig(n,r,i,e,ki)}function VM(){cn(new Jt(X1,LM,"PUBLIC").setMultipleInstances(!0)),bt(m_,g_,""),bt(m_,g_,"esm2017")}VM();const MM={apiKey:"AIzaSyAxYBlB9fQlXNIPfkhlb5PR4MbEvdnFs08",authDomain:"snapback-b2084.firebaseapp.com",projectId:"snapback-b2084",storageBucket:"snapback-b2084.appspot.com",messagingSenderId:"362009039741",appId:"1:362009039741:web:ad400dbe0b1e8b021e7214",measurementId:"G-Z3BBRJ77WG"},Wc=oE(MM);tO(Wc);const Dn=L1(Wc),Ps=aD(Wc);Vf(Wc);function FM(){const[t,e]=R.useState(""),[n,r]=R.useState(""),[i,s]=R.useState([]),[o,a]=R.useState([]),[l,u]=R.useState(0),c=6,[h,d]=R.useState(0),g=()=>{const{word:p,hint:y}=$R();e(p),r(y),s([]),a([]),o.length>=c&&(u(0),d(0))};R.useEffect(()=>{g()},[]);const _=p=>{i.includes(p)||(s([...i,p]),t.includes(p)||a([...o,p]))},w=()=>{u(0)},T=()=>{const p=new Set(t.split(""));return i.filter(E=>p.has(E)).length===p.size?((i.length>0||o.length>0)&&(u(l+1),d(h+1)),e(""),s([]),a([]),g(),"ongoing"):o.length>=c?(m(),"gameover"):"ongoing"},m=async()=>{const p=Dn.currentUser,y=pa(Ps,"user_scores",p.uid),E=await Pf(y);if(E.exists()){const x=E.data();Array.isArray(x.score)||(x.score=[]);const N={score:l,timestamp:new Date().toISOString()};x.score.push(N),await CI(y,{score:x.score}),console.log("Score saved successfully!")}else if(l===0)console.error("Error saving score: Score is not higher.");else{const x={name:p.displayName,email:p.email,score:[{score:l,timestamp:new Date().toISOString()}]};await PI(y,x),console.log("New user document created with score!")}};return f.jsxs("div",{className:"App",children:[f.jsx("h1",{className:"max-lg:text-center text-white lg:text-4xl text-3xl lg:ml-80 mt-6 font-semibold",children:"Hangman Game"}),f.jsx(UR,{wordToGuess:t,hint:n,guessedLetters:i,incorrectGuesses:o,onNewGame:g,onGuess:_,gameStatus:T,score:l,setScore:u,resetScore:w,totalWordsGuessed:h})]})}var Wa=t=>t.type==="checkbox",ns=t=>t instanceof Date,_t=t=>t==null;const J1=t=>typeof t=="object";var ze=t=>!_t(t)&&!Array.isArray(t)&&J1(t)&&!ns(t),jM=t=>ze(t)&&t.target?Wa(t.target)?t.target.checked:t.target.value:t,UM=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,$M=(t,e)=>t.has(UM(e)),BM=t=>{const e=t.constructor&&t.constructor.prototype;return ze(e)&&e.hasOwnProperty("isPrototypeOf")},sg=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ln(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(sg&&(t instanceof Blob||t instanceof FileList))&&(n||ze(t)))if(e=n?[]:{},!n&&!BM(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Ln(t[r]));else return t;return e}var Ha=t=>Array.isArray(t)?t.filter(Boolean):[],Me=t=>t===void 0,U=(t,e,n)=>{if(!e||!ze(t))return n;const r=Ha(e.split(/[,[\].]+?/)).reduce((i,s)=>_t(i)?i:i[s],t);return Me(r)||r===t?Me(t[e])?n:t[e]:r};const y_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},on={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},On={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};vn.createContext(null);var zM=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==on.all&&(e._proxyFormState[o]=!r||on.all),n&&(n[o]=!0),t[o]}});return i},Wt=t=>ze(t)&&!Object.keys(t).length,WM=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Wt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||on.all))},Xh=t=>Array.isArray(t)?t:[t];function HM(t){const e=vn.useRef(t);e.current=t,vn.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Sn=t=>typeof t=="string",qM=(t,e,n,r,i)=>Sn(t)?(r&&e.watch.add(t),U(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),U(n,s))):(r&&(e.watchAll=!0),n),og=t=>/^\w*$/.test(t),Z1=t=>Ha(t.replace(/["|']|\]/g,"").split(/\.|\[/));function ve(t,e,n){let r=-1;const i=og(e)?[e]:Z1(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=ze(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var KM=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Mf=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=U(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else ze(o)&&Mf(o,e)}}};var v_=t=>({isOnSubmit:!t||t===on.onSubmit,isOnBlur:t===on.onBlur,isOnChange:t===on.onChange,isOnAll:t===on.all,isOnTouch:t===on.onTouched}),__=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),GM=(t,e,n)=>{const r=Ha(U(t,n));return ve(r,"root",e[n]),ve(t,n,r),t},ri=t=>typeof t=="boolean",ag=t=>t.type==="file",vr=t=>typeof t=="function",ju=t=>{if(!sg)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},$l=t=>Sn(t),lg=t=>t.type==="radio",Uu=t=>t instanceof RegExp;const w_={value:!1,isValid:!1},E_={value:!0,isValid:!0};var eS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Me(t[0].attributes.value)?Me(t[0].value)||t[0].value===""?E_:{value:t[0].value,isValid:!0}:E_:w_}return w_};const T_={isValid:!1,value:null};var tS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,T_):T_;function I_(t,e,n="validate"){if($l(t)||Array.isArray(t)&&t.every($l)||ri(t)&&!t)return{type:n,message:$l(t)?t:"",ref:e}}var Fi=t=>ze(t)&&!Uu(t)?t:{value:t,message:""},S_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:d,validate:g,name:_,valueAsNumber:w,mount:T,disabled:m}=t._f,p=U(e,_);if(!T||m)return{};const y=o?o[0]:s,E=ee=>{r&&y.reportValidity&&(y.setCustomValidity(ri(ee)?"":ee||""),y.reportValidity())},x={},N=lg(s),D=Wa(s),F=N||D,Z=(w||ag(s))&&Me(s.value)&&Me(p)||ju(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,H=KM.bind(null,_,n,x),Pe=(ee,J,ge,nt=On.maxLength,rt=On.minLength)=>{const At=ee?J:ge;x[_]={type:ee?nt:rt,message:At,ref:s,...H(ee?nt:rt,At)}};if(i?!Array.isArray(p)||!p.length:a&&(!F&&(Z||_t(p))||ri(p)&&!p||D&&!eS(o).isValid||N&&!tS(o).isValid)){const{value:ee,message:J}=$l(a)?{value:!!a,message:a}:Fi(a);if(ee&&(x[_]={type:On.required,message:J,ref:y,...H(On.required,J)},!n))return E(J),x}if(!Z&&(!_t(c)||!_t(h))){let ee,J;const ge=Fi(h),nt=Fi(c);if(!_t(p)&&!isNaN(p)){const rt=s.valueAsNumber||p&&+p;_t(ge.value)||(ee=rt>ge.value),_t(nt.value)||(J=rt<nt.value)}else{const rt=s.valueAsDate||new Date(p),At=Q=>new Date(new Date().toDateString()+" "+Q),O=s.type=="time",q=s.type=="week";Sn(ge.value)&&p&&(ee=O?At(p)>At(ge.value):q?p>ge.value:rt>new Date(ge.value)),Sn(nt.value)&&p&&(J=O?At(p)<At(nt.value):q?p<nt.value:rt<new Date(nt.value))}if((ee||J)&&(Pe(!!ee,ge.message,nt.message,On.max,On.min),!n))return E(x[_].message),x}if((l||u)&&!Z&&(Sn(p)||i&&Array.isArray(p))){const ee=Fi(l),J=Fi(u),ge=!_t(ee.value)&&p.length>+ee.value,nt=!_t(J.value)&&p.length<+J.value;if((ge||nt)&&(Pe(ge,ee.message,J.message),!n))return E(x[_].message),x}if(d&&!Z&&Sn(p)){const{value:ee,message:J}=Fi(d);if(Uu(ee)&&!p.match(ee)&&(x[_]={type:On.pattern,message:J,ref:s,...H(On.pattern,J)},!n))return E(J),x}if(g){if(vr(g)){const ee=await g(p,e),J=I_(ee,y);if(J&&(x[_]={...J,...H(On.validate,J.message)},!n))return E(J.message),x}else if(ze(g)){let ee={};for(const J in g){if(!Wt(ee)&&!n)break;const ge=I_(await g[J](p,e),y,J);ge&&(ee={...ge,...H(J,ge.message)},E(ge.message),n&&(x[_]=ee))}if(!Wt(ee)&&(x[_]={ref:y,...ee},!n))return x}}return E(!0),x};function QM(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Me(t)?r++:t[e[r++]];return t}function YM(t){for(const e in t)if(t.hasOwnProperty(e)&&!Me(t[e]))return!1;return!0}function Qe(t,e){const n=Array.isArray(e)?e:og(e)?[e]:Z1(e),r=n.length===1?t:QM(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ze(r)&&Wt(r)||Array.isArray(r)&&YM(r))&&Qe(t,n.slice(0,-1)),t}function Jh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var $u=t=>_t(t)||!J1(t);function ii(t,e){if($u(t)||$u(e))return t===e;if(ns(t)&&ns(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ns(s)&&ns(o)||ze(s)&&ze(o)||Array.isArray(s)&&Array.isArray(o)?!ii(s,o):s!==o)return!1}}return!0}var nS=t=>t.type==="select-multiple",XM=t=>lg(t)||Wa(t),Zh=t=>ju(t)&&t.isConnected,rS=t=>{for(const e in t)if(vr(t[e]))return!0;return!1};function Bu(t,e={}){const n=Array.isArray(t);if(ze(t)||n)for(const r in t)Array.isArray(t[r])||ze(t[r])&&!rS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Bu(t[r],e[r])):_t(t[r])||(e[r]=!0);return e}function iS(t,e,n){const r=Array.isArray(t);if(ze(t)||r)for(const i in t)Array.isArray(t[i])||ze(t[i])&&!rS(t[i])?Me(e)||$u(n[i])?n[i]=Array.isArray(t[i])?Bu(t[i],[]):{...Bu(t[i])}:iS(t[i],_t(e)?{}:e[i],n[i]):n[i]=!ii(t[i],e[i]);return n}var ed=(t,e)=>iS(t,e,Bu(e)),sS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Me(t)?t:e?t===""?NaN:t&&+t:n&&Sn(t)?new Date(t):r?r(t):t;function td(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return ag(e)?e.files:lg(e)?tS(t.refs).value:nS(e)?[...e.selectedOptions].map(({value:n})=>n):Wa(e)?eS(t.refs).value:sS(Me(e.value)?t.ref.value:e.value,t)}var JM=(t,e,n,r)=>{const i={};for(const s of t){const o=U(e,s);o&&ve(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},ro=t=>Me(t)?t:Uu(t)?t.source:ze(t)?Uu(t.value)?t.value.source:t.value:t,ZM=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function A_(t,e,n){const r=U(t,n);if(r||og(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=U(e,s),a=U(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var e4=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,t4=(t,e)=>!Ha(U(t,e)).length&&Qe(t,e);const n4={mode:on.onSubmit,reValidateMode:on.onChange,shouldFocusError:!0};function r4(t={},e){let n={...n4,...t},r={submitCount:0,isDirty:!1,isLoading:vr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=ze(n.defaultValues)||ze(n.values)?Ln(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Ln(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Jh(),array:Jh(),state:Jh()},g=t.resetOptions&&t.resetOptions.keepDirtyValues,_=v_(n.mode),w=v_(n.reValidateMode),T=n.criteriaMode===on.all,m=v=>I=>{clearTimeout(c),c=setTimeout(v,I)},p=async v=>{if(h.isValid||v){const I=n.resolver?Wt((await Z()).errors):await Pe(i,!0);I!==r.isValid&&d.state.next({isValid:I})}},y=v=>h.isValidating&&d.state.next({isValidating:v}),E=(v,I=[],S,$,L=!0,C=!0)=>{if($&&S){if(a.action=!0,C&&Array.isArray(U(i,v))){const z=S(U(i,v),$.argA,$.argB);L&&ve(i,v,z)}if(C&&Array.isArray(U(r.errors,v))){const z=S(U(r.errors,v),$.argA,$.argB);L&&ve(r.errors,v,z),t4(r.errors,v)}if(h.touchedFields&&C&&Array.isArray(U(r.touchedFields,v))){const z=S(U(r.touchedFields,v),$.argA,$.argB);L&&ve(r.touchedFields,v,z)}h.dirtyFields&&(r.dirtyFields=ed(s,o)),d.state.next({name:v,isDirty:J(v,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ve(o,v,I)},x=(v,I)=>{ve(r.errors,v,I),d.state.next({errors:r.errors})},N=(v,I,S,$)=>{const L=U(i,v);if(L){const C=U(o,v,Me(S)?U(s,v):S);Me(C)||$&&$.defaultChecked||I?ve(o,v,I?C:td(L._f)):rt(v,C),a.mount&&p()}},D=(v,I,S,$,L)=>{let C=!1,z=!1;const Se={name:v};if(!S||$){h.isDirty&&(z=r.isDirty,r.isDirty=Se.isDirty=J(),C=z!==Se.isDirty);const Ne=ii(U(s,v),I);z=U(r.dirtyFields,v),Ne?Qe(r.dirtyFields,v):ve(r.dirtyFields,v,!0),Se.dirtyFields=r.dirtyFields,C=C||h.dirtyFields&&z!==!Ne}if(S){const Ne=U(r.touchedFields,v);Ne||(ve(r.touchedFields,v,S),Se.touchedFields=r.touchedFields,C=C||h.touchedFields&&Ne!==S)}return C&&L&&d.state.next(Se),C?Se:{}},F=(v,I,S,$)=>{const L=U(r.errors,v),C=h.isValid&&ri(I)&&r.isValid!==I;if(t.delayError&&S?(u=m(()=>x(v,S)),u(t.delayError)):(clearTimeout(c),u=null,S?ve(r.errors,v,S):Qe(r.errors,v)),(S?!ii(L,S):L)||!Wt($)||C){const z={...$,...C&&ri(I)?{isValid:I}:{},errors:r.errors,name:v};r={...r,...z},d.state.next(z)}y(!1)},Z=async v=>n.resolver(o,n.context,JM(v||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),H=async v=>{const{errors:I}=await Z(v);if(v)for(const S of v){const $=U(I,S);$?ve(r.errors,S,$):Qe(r.errors,S)}else r.errors=I;return I},Pe=async(v,I,S={valid:!0})=>{for(const $ in v){const L=v[$];if(L){const{_f:C,...z}=L;if(C){const Se=l.array.has(C.name),Ne=await S_(L,o,T,n.shouldUseNativeValidation&&!I,Se);if(Ne[C.name]&&(S.valid=!1,I))break;!I&&(U(Ne,C.name)?Se?GM(r.errors,Ne,C.name):ve(r.errors,C.name,Ne[C.name]):Qe(r.errors,C.name))}z&&await Pe(z,I,S)}}return S.valid},ee=()=>{for(const v of l.unMount){const I=U(i,v);I&&(I._f.refs?I._f.refs.every(S=>!Zh(S)):!Zh(I._f.ref))&&en(v)}l.unMount=new Set},J=(v,I)=>(v&&I&&ve(o,v,I),!ii(ye(),s)),ge=(v,I,S)=>qM(v,l,{...a.mount?o:Me(I)?s:Sn(v)?{[v]:I}:I},S,I),nt=v=>Ha(U(a.mount?o:s,v,t.shouldUnregister?U(s,v,[]):[])),rt=(v,I,S={})=>{const $=U(i,v);let L=I;if($){const C=$._f;C&&(!C.disabled&&ve(o,v,sS(I,C)),L=ju(C.ref)&&_t(I)?"":I,nS(C.ref)?[...C.ref.options].forEach(z=>z.selected=L.includes(z.value)):C.refs?Wa(C.ref)?C.refs.length>1?C.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(L)?!!L.find(Se=>Se===z.value):L===z.value)):C.refs[0]&&(C.refs[0].checked=!!L):C.refs.forEach(z=>z.checked=z.value===L):ag(C.ref)?C.ref.value="":(C.ref.value=L,C.ref.type||d.values.next({name:v,values:{...o}})))}(S.shouldDirty||S.shouldTouch)&&D(v,L,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&Q(v)},At=(v,I,S)=>{for(const $ in I){const L=I[$],C=`${v}.${$}`,z=U(i,C);(l.array.has(v)||!$u(L)||z&&!z._f)&&!ns(L)?At(C,L,S):rt(C,L,S)}},O=(v,I,S={})=>{const $=U(i,v),L=l.array.has(v),C=Ln(I);ve(o,v,C),L?(d.array.next({name:v,values:{...o}}),(h.isDirty||h.dirtyFields)&&S.shouldDirty&&d.state.next({name:v,dirtyFields:ed(s,o),isDirty:J(v,C)})):$&&!$._f&&!_t(C)?At(v,C,S):rt(v,C,S),__(v,l)&&d.state.next({...r}),d.values.next({name:v,values:{...o}}),!a.mount&&e()},q=async v=>{const I=v.target;let S=I.name,$=!0;const L=U(i,S),C=()=>I.type?td(L._f):jM(v);if(L){let z,Se;const Ne=C(),Li=v.type===y_.BLUR||v.type===y_.FOCUS_OUT,aS=!ZM(L._f)&&!n.resolver&&!U(r.errors,S)&&!L._f.deps||e4(Li,U(r.touchedFields,S),r.isSubmitted,w,_),qc=__(S,l,Li);ve(o,S,Ne),Li?(L._f.onBlur&&L._f.onBlur(v),u&&u(0)):L._f.onChange&&L._f.onChange(v);const Kc=D(S,Ne,Li,!1),lS=!Wt(Kc)||qc;if(!Li&&d.values.next({name:S,type:v.type,values:{...o}}),aS)return h.isValid&&p(),lS&&d.state.next({name:S,...qc?{}:Kc});if(!Li&&qc&&d.state.next({...r}),y(!0),n.resolver){const{errors:pg}=await Z([S]),uS=A_(r.errors,i,S),mg=A_(pg,i,uS.name||S);z=mg.error,S=mg.name,Se=Wt(pg)}else z=(await S_(L,o,T,n.shouldUseNativeValidation))[S],$=isNaN(Ne)||Ne===U(o,S,Ne),$&&(z?Se=!1:h.isValid&&(Se=await Pe(i,!0)));$&&(L._f.deps&&Q(L._f.deps),F(S,Se,z,Kc))}},Q=async(v,I={})=>{let S,$;const L=Xh(v);if(y(!0),n.resolver){const C=await H(Me(v)?v:L);S=Wt(C),$=v?!L.some(z=>U(C,z)):S}else v?($=(await Promise.all(L.map(async C=>{const z=U(i,C);return await Pe(z&&z._f?{[C]:z}:z)}))).every(Boolean),!(!$&&!r.isValid)&&p()):$=S=await Pe(i);return d.state.next({...!Sn(v)||h.isValid&&S!==r.isValid?{}:{name:v},...n.resolver||!v?{isValid:S}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!$&&Mf(i,C=>C&&U(r.errors,C),v?L:l.mount),$},ye=v=>{const I={...s,...a.mount?o:{}};return Me(v)?I:Sn(v)?U(I,v):v.map(S=>U(I,S))},Ce=(v,I)=>({invalid:!!U((I||r).errors,v),isDirty:!!U((I||r).dirtyFields,v),isTouched:!!U((I||r).touchedFields,v),error:U((I||r).errors,v)}),Oi=v=>{v&&Xh(v).forEach(I=>Qe(r.errors,I)),d.state.next({errors:v?r.errors:{}})},pn=(v,I,S)=>{const $=(U(i,v,{_f:{}})._f||{}).ref;ve(r.errors,v,{...I,ref:$}),d.state.next({name:v,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&$&&$.focus&&$.focus()},Ws=(v,I)=>vr(v)?d.values.subscribe({next:S=>v(ge(void 0,I),S)}):ge(v,I,!0),en=(v,I={})=>{for(const S of v?Xh(v):l.mount)l.mount.delete(S),l.array.delete(S),I.keepValue||(Qe(i,S),Qe(o,S)),!I.keepError&&Qe(r.errors,S),!I.keepDirty&&Qe(r.dirtyFields,S),!I.keepTouched&&Qe(r.touchedFields,S),!n.shouldUnregister&&!I.keepDefaultValue&&Qe(s,S);d.values.next({values:{...o}}),d.state.next({...r,...I.keepDirty?{isDirty:J()}:{}}),!I.keepIsValid&&p()},qr=({disabled:v,name:I,field:S,fields:$})=>{if(ri(v)){const L=v?void 0:U(o,I,td(S?S._f:U($,I)._f));ve(o,I,L),D(I,L,!1,!1,!0)}},Hc=(v,I={})=>{let S=U(i,v);const $=ri(I.disabled);return ve(i,v,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:v}},name:v,mount:!0,...I}}),l.mount.add(v),S?qr({field:S,disabled:I.disabled,name:v}):N(v,!0,I.value),{...$?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:ro(I.min),max:ro(I.max),minLength:ro(I.minLength),maxLength:ro(I.maxLength),pattern:ro(I.pattern)}:{},name:v,onChange:q,onBlur:q,ref:L=>{if(L){Hc(v,I),S=U(i,v);const C=Me(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,z=XM(C),Se=S._f.refs||[];if(z?Se.find(Ne=>Ne===C):C===S._f.ref)return;ve(i,v,{_f:{...S._f,...z?{refs:[...Se.filter(Zh),C,...Array.isArray(U(s,v))?[{}]:[]],ref:{type:C.type,name:v}}:{ref:C}}}),N(v,!1,void 0,C)}else S=U(i,v,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!($M(l.array,v)&&a.action)&&l.unMount.add(v)}}},cg=()=>n.shouldFocusError&&Mf(i,v=>v&&U(r.errors,v),l.mount),hg=(v,I)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let $=Ln(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:L,values:C}=await Z();r.errors=L,$=C}else await Pe(i);Qe(r.errors,"root"),Wt(r.errors)?(d.state.next({errors:{}}),await v($,S)):(I&&await I({...r.errors},S),cg(),setTimeout(cg)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Wt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},oS=(v,I={})=>{U(i,v)&&(Me(I.defaultValue)?O(v,U(s,v)):(O(v,I.defaultValue),ve(s,v,I.defaultValue)),I.keepTouched||Qe(r.touchedFields,v),I.keepDirty||(Qe(r.dirtyFields,v),r.isDirty=I.defaultValue?J(v,U(s,v)):J()),I.keepError||(Qe(r.errors,v),h.isValid&&p()),d.state.next({...r}))},dg=(v,I={})=>{const S=v?Ln(v):s,$=Ln(S),L=v&&!Wt(v)?$:s;if(I.keepDefaultValues||(s=S),!I.keepValues){if(I.keepDirtyValues||g)for(const C of l.mount)U(r.dirtyFields,C)?ve(L,C,U(o,C)):O(C,U(L,C));else{if(sg&&Me(v))for(const C of l.mount){const z=U(i,C);if(z&&z._f){const Se=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(ju(Se)){const Ne=Se.closest("form");if(Ne){Ne.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?Ln(s):{}:Ln(L),d.array.next({values:{...L}}),d.values.next({values:{...L}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!ii(v,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&v?ed(s,v):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},fg=(v,I)=>dg(vr(v)?v(o):v,I);return{control:{register:Hc,unregister:en,getFieldState:Ce,handleSubmit:hg,setError:pn,_executeSchema:Z,_getWatch:ge,_getDirty:J,_updateValid:p,_removeUnmounted:ee,_updateFieldArray:E,_updateDisabledField:qr,_getFieldArray:nt,_reset:dg,_resetDefaultValues:()=>vr(n.defaultValues)&&n.defaultValues().then(v=>{fg(v,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:v=>{r={...r,...v}},_subjects:d,_proxyFormState:h,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(v){a=v},get _defaultValues(){return s},get _names(){return l},set _names(v){l=v},get _formState(){return r},set _formState(v){r=v},get _options(){return n},set _options(v){n={...n,...v}}},trigger:Q,register:Hc,handleSubmit:hg,watch:Ws,setValue:O,getValues:ye,reset:fg,resetField:oS,clearErrors:Oi,unregister:en,setError:pn,setFocus:(v,I={})=>{const S=U(i,v),$=S&&S._f;if($){const L=$.refs?$.refs[0]:$.ref;L.focus&&(L.focus(),I.shouldSelect&&L.select())}},getFieldState:Ce}}function ug(t={}){const e=vn.useRef(),n=vn.useRef(),[r,i]=vn.useState({isDirty:!1,isValidating:!1,isLoading:vr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:vr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...r4(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,HM({subject:s._subjects.state,next:o=>{WM(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),vn.useEffect(()=>{t.values&&!ii(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),vn.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=zM(r,s),e.current}function i4({loggedIn:t,onLogin:e}){const{register:n,handleSubmit:r,errors:i}=ug(),[s,o]=R.useState(""),a=Ms(),l="/SnapBack/",u=async c=>{try{if(!(await rL(Dn,c.email,c.password)).user.emailVerified){o("Email is not verified. Please check your email inbox and verify your email.");return}e(!0),localStorage.setItem("authToken",!0),a("/SnapBack/")}catch(h){switch(h.code){case"auth/invalid-login-credentials":o("Invalid email address or password");break;case"auth/missing-password":o("Please enter a password");break;case"auth/user-disabled":o("Your account has been disabled");break;case"auth/invalid-email":o("Invalid email address");break;case"auth/too-many-requests":o("Too many requests. Please try again later.");break;case"auth/weak-password":o("Password must be at least 6 characters");break;default:o("An error occurred. Please try again later.")}}};return f.jsxs("div",{className:"bg-black flex flex-col md:flex-row h-screen items-center",children:[f.jsx("img",{src:`${l}Login.jpg`,alt:"Loginimage",className:" max-md:w-full w-7/12 h-full object-cover brightness-75"}),f.jsx("div",{className:"absolute top-0 left-0 w-7/12 h-full flex items-center justify-center",children:f.jsxs("div",{className:"text-white",children:[f.jsx("span",{className:"font-[playfairdisplay] text-white text-7xl max-md:hidden font-normal",children:"Shadow Realm Retreat"}),f.jsx("br",{}),f.jsx("br",{}),f.jsxs("span",{className:"font-[poppins] text-white text-opacity-60 max-md:hidden text-2xl font-medium",children:[" Where gamers stealthily unite for ",f.jsx("br",{}),"unforgettable adventures in the ",f.jsx("br",{}),"virtual shadows"]})]})}),f.jsx("div",{className:"w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center",children:f.jsxs("div",{className:"w-full h-100",children:[f.jsx("img",{className:"max-lg:w-16 w-24 mx-auto max-md:relative max-lg:bottom-12",src:`${l}Snapback-Logo.png`,alt:"SnapBack Logo"}),f.jsxs("form",{onSubmit:r(u),className:"mt-6 max-md:relative max-md:bottom-16",children:[f.jsx("h1",{className:"font-[poppins] text-gray-200 text-center text-xl md:text-2xl font-semibold leading-tight mb-6 mt-10 max-md:mb-6 max-md:mt-6",children:"Log in to your account"}),s&&f.jsx("p",{className:"text-red-500",children:s}),f.jsxs("div",{className:"relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-envelope text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"email",placeholder:"Email",...n("email")})]}),f.jsxs("div",{className:"mt-4 relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-key text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Password",...n("password")})]}),f.jsxs("div",{className:"text-right mt-2",children:[f.jsx("a",{href:"",className:"text-sm font-semibold text-gray-400 hover:text-white focus:text-white",children:"Forgot your password?"}),f.jsx("button",{type:"submit",className:"w-full mt-6 text-center px-4 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-[#0a174a] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150",children:"LOG IN"})]}),f.jsx("hr",{className:"my-6 border-gray-300 w-full"}),f.jsxs("p",{className:"mt-auto text-gray-400",children:["Don't have an account?",f.jsx(Le,{to:"/SnapBack/register",className:"text-gray-200 hover:text-white font-semibold",children:"Register"})]})]})]})})]})}function s4(){const{register:t,handleSubmit:e,errors:n}=ug(),[r,i]=R.useState(""),[s,o]=R.useState(""),a=Ms(),l="/SnapBack/",u=async c=>{try{if(c.password!==c.confirmPassword){i("Password and confirm password do not match.");return}const d=(await nL(Dn,c.email,c.password)).user;await iL(d),await oL(d,{displayName:c.name});const g=pa(Ps,"users",d.uid);await PI(g,{name:c.name,email:c.email}),o("Account created successfully. Please check your email for verification."),i(""),setTimeout(()=>{a("/SnapBack/login")},5e3)}catch(h){switch(h.code){case"auth/email-already-in-use":i("Email already in use");break;case"auth/missing-email":i("Please enter an email address");break;case"auth/invalid-email":i("Invalid email address");break;case"auth/missing-password":i("Please enter a password");break;case"auth/weak-password":i("Password must be at least 6 characters");break;default:i(h.message)}}};return f.jsxs("div",{className:"bg-black flex flex-col md:flex-row h-screen items-center",children:[f.jsx("img",{src:`${l}signup1.jpg`,alt:"Singupimage",className:" max-md:w-full w-7/12 h-full object-cover brightness-75"}),f.jsx("div",{className:"absolute top-0 left-0 w-7/12 h-full flex items-center justify-center",children:f.jsxs("div",{className:"text-white",children:[f.jsx("span",{className:"font-[playfairdisplay] text-white text-7xl max-md:hidden font-normal",children:"Shadow Realm Retreat"}),f.jsx("br",{}),f.jsx("br",{}),f.jsxs("span",{className:"font-[poppins] text-white text-opacity-60 max-md:hidden text-2xl font-medium",children:[" Where gamers stealthily unite for ",f.jsx("br",{}),"unforgettable adventures in the ",f.jsx("br",{}),"virtual shadows"]})]})}),f.jsx("div",{className:"w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center",children:f.jsxs("div",{className:"w-full h-100",children:[f.jsx("img",{className:"max-lg:w-16 w-24 mx-auto max-md:relative max-lg:bottom-12",src:`${l}/Snapback-Logo.png`,alt:"SnapBack Logo"}),f.jsxs("form",{onSubmit:e(u),className:"mt-6 max-md:relative max-md:bottom-16",children:[f.jsx("h1",{className:"font-[poppins] text-gray-200 text-center text-xl md:text-2xl font-semibold leading-tight mb-6 mt-10 max-md:mb-6 max-md:mt-6",children:"Create Account"}),r&&f.jsx("p",{className:"text-red-500",children:r}),s&&f.jsx("p",{className:"text-green-500",children:s})," ",f.jsxs("div",{className:"mt-4 relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-person text-xl text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"text",placeholder:"Name",required:!0,...t("name")})]}),f.jsxs("div",{className:"mt-4 relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-envelope text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"email",placeholder:"Email",...t("email")})]}),f.jsxs("div",{className:"mt-4 relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-key text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Password",...t("password")})]}),f.jsxs("div",{className:"mt-4 relative",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx("i",{className:"bi bi-lock text-gray-300 mt-1.5"})}),f.jsx("input",{className:"w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10",type:"password",placeholder:"Confirm Password",...t("confirmPassword")})]}),f.jsxs("div",{className:"text-right mt-4",children:[f.jsx(Le,{to:"/SnapBack/login",className:"text-sm font-semibold text-gray-400 hover:text-white focus:text-white",children:"Already registered?"}),f.jsx("button",{type:"submit",className:"w-full mt-6 text-center px-4 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-[#0a174a] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150",children:"REGISTER"})]})]})]})})]})}function o4(){const t="/SnapBack/";return f.jsxs("div",{className:"text-white p-6",children:[f.jsx("h1",{className:"text-3xl font-semibold mb-4",children:"Games"}),f.jsx(Le,{to:"/SnapBack/games/hangman",children:f.jsxs("div",{className:"w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform",children:[f.jsx("img",{src:`${t}Hangman.jpg`,alt:"Game Image",className:"w-full h-full absolute inset-0 object-cover rounded-lg"}),f.jsx("div",{className:"bg-black bg-opacity-50 absolute inset-0 rounded-lg"}),f.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:f.jsx("p",{className:"text-lg font-[poppins] font-semibold",children:"HangMan"})})]})})]})}function a4(){const[t,e]=R.useState([]),[n,r]=R.useState(!0),i="/SnapBack/";return R.useEffect(()=>{async function s(){try{const o=sD(Ps,"user_scores"),a=_D(o),l=await AD(a),u=[];l.forEach(async c=>{const h=c.data(),g=(h.score||[]).reduce((_,w)=>Math.max(_,w.score),0);u.push({id:c.id,name:h.name,highestScore:g}),u.length===l.size&&(u.sort((_,w)=>w.highestScore-_.highestScore),e(u),r(!1))})}catch(o){console.error("Error fetching leaderboard data: ",o)}}s()},[]),n?f.jsx("p",{className:"text-center text-white text-2xl",children:"Loading leaderboard..."}):f.jsxs("div",{className:"my-6",children:[f.jsx("h1",{className:"text-5xl tracking-wide text-center font-semibold mb-4",children:f.jsx("span",{className:"bg-gray-800 px-8 lg:px-24 py-5 rounded-b-[50px] font-thin text-white font-[impact]",children:"Leaderboard"})}),f.jsxs("table",{className:"table mx-auto max-lg:mx-2 md:w-[1200px] mt-16",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"text-white font-[poppins] text-md",children:[f.jsx("th",{className:"py-2 px-4",children:"# Rank"}),f.jsx("th",{className:"py-2 px-4",children:"Player Name"}),f.jsx("th",{className:"py-2 px-4",children:"Highest Score"})]})}),f.jsx("tbody",{className:"text-white ",children:t.map((s,o)=>f.jsxs("tr",{className:"rounded-lg bg-gray-700/30 text-center font-[poppins] text-lg",children:[f.jsxs("td",{className:"py-2 px-4",children:[o===0&&f.jsx("img",{src:`${i}gold.png`,alt:"Gold Medal",className:"w-7 inline-block mr-2"}),o===1&&f.jsx("img",{src:`${i}silver.png`,alt:"Silver Medal",className:"w-7 inline-block mr-2"}),o===2&&f.jsx("img",{src:`${i}bronze.png`,alt:"Bronze Medal",className:"w-7 inline-block mr-2"}),o+1]}),f.jsx("td",{className:"py-2 px-4",children:s.name}),f.jsxs("td",{className:"py-2 px-4",children:[s.highestScore," ",f.jsx("span",{className:"text-md",children:"pts"})]})]},s.id))})]})]})}function l4(){const[t,e]=R.useState(""),[n,r]=R.useState(""),[i,s]=R.useState(null);R.useState(!1),R.useEffect(()=>{const a=Dn.onAuthStateChanged(l=>{l?(s(l),e(l.displayName||""),r(l.email||"")):(s(null),e(""),r(""))});return()=>{a()}},[]);const o=async()=>{L1();try{const a=pa(Ps,"users",i.uid);await CI(a,{name:t}),console.log("Display name updated successfully!")}catch(a){console.error("Error updating display name:",a)}};return f.jsxs("div",{children:[f.jsx("h2",{className:"text-white",children:"Edit Profile"}),f.jsxs("form",{children:[f.jsxs("label",{className:"text-white",children:["Display Name:",f.jsx("input",{className:"text-black",type:"text",value:t,onChange:a=>e(a.target.value)})]}),f.jsx("br",{}),f.jsx("button",{className:"text-white",type:"button",onClick:o,children:"Update Display Name"})]})]})}function u4(){const[t,e]=R.useState(""),[n,r]=R.useState(null),i=async s=>{s.preventDefault();try{await aL(Dn.currentUser,t),console.log("Password updated successfully!")}catch(o){console.error("Error updating password:",o),r(o.message)}};return f.jsxs("div",{children:[f.jsx("h2",{children:"Update Password"}),f.jsxs("form",{onSubmit:i,children:[f.jsxs("label",{children:["New Password:",f.jsx("input",{type:"password",value:t,onChange:s=>e(s.target.value)})]}),f.jsx("br",{}),f.jsx("button",{type:"submit",children:"Update Password"})]}),n&&f.jsx("p",{children:n})]})}function c4(){const[t,e]=R.useState(""),[n,r]=R.useState(null),i=async s=>{s.preventDefault();try{const o=Dn.currentUser,a=Di.credential(o.email,t);await eL(o,a),await dL(o);const l=doc(db,"users",o.uid);await deleteDoc(l),console.log("Account deleted successfully!")}catch(o){console.error("Error deleting account:",o),r(o.message)}};return f.jsxs("div",{children:[f.jsx("h2",{children:"Delete Account"}),f.jsxs("form",{onSubmit:i,children:[f.jsxs("label",{children:["Current Password:",f.jsx("input",{type:"password",value:t,onChange:s=>e(s.target.value)})]}),f.jsx("br",{}),f.jsx("button",{type:"submit",children:"Delete Account"})]}),n&&f.jsx("p",{children:n})]})}function h4({user:t}){ug();const[e,n]=R.useState(null),[r,i]=R.useState(""),[s,o]=R.useState(!1),[a,l]=R.useState(""),u=Ms();R.useEffect(()=>{d(t.uid).then(w=>{l(w)})},[t.uid]);const c=w=>{const T=w.target.files[0];n(T),console.log("Selected File:",T)},h=async(w,T)=>{try{if(!T)throw new Error("Please select a profile picture.");o(!0);const m=Vf(),p=Yh(m,`profilePictures/${w}/profile-picture.jpg`);try{await DM(p),console.log("Deleted previous profile picture")}catch(E){if(E.code!=="storage/object-not-found")throw E}await bM(p,T);const y=await wl(p);return o(!1),l(y),console.log("Uploaded Successfully"),y}catch(m){throw console.error("Error uploading profile picture:",m),o(!1),m}},d=async w=>{try{const T=Vf(),m=Yh(T,`profilePictures/${w}/profile-picture.jpg`);await wl(m);const p=await wl(m);return l(p),p}catch(T){console.error("Error getting profile picture URL:",T);const m=Yh(storage,"profilePictures/default/profile-picture.jpg");return await wl(m)}},g=async()=>{try{const w=await h(t.uid,e);u("/SnapBack/profile")}catch{i("An error occurred. Please try again later.")}},_=async()=>{try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(T=>T.stop())}catch{i("Camera access is required to take a profile picture.")}};return f.jsxs("div",{className:"container text-white",children:[f.jsx("h1",{children:"Upload Profile Photo"}),f.jsxs("div",{children:[f.jsx("input",{type:"file",accept:"image/*",capture:"camera",onChange:c}),f.jsx("button",{onClick:_,children:"Request Camera Access"})]}),r&&f.jsx("p",{className:"error",children:r}),f.jsx("div",{children:a?f.jsx("img",{src:a,alt:"Profile",width:"200",height:"200"}):f.jsx("p",{children:"No profile picture available."})}),f.jsx("button",{onClick:g,disabled:s,children:s?"Uploading...":"Upload"})]})}function d4(){const[t,e]=R.useState(null),[n,r]=R.useState(!0),[i,s]=R.useState([]);R.useEffect(()=>{const a=Dn.onAuthStateChanged(async l=>{if(l){const u=pa(Ps,"users",l.uid),c=await Pf(u);c.exists()?e({name:c.data().name,...l}):console.log("No such document in users collection!");const h=pa(Ps,"user_scores",l.uid),d=await Pf(h);if(d.exists()){const _=d.data().score||[];s(_)}else console.log("No such document for user scores!"),s([]);r(!1)}else e(null),r(!1),s([])});return()=>{a()}},[]);const o=()=>{Dn.signOut().then(()=>{console.log("Sign-out successful")}).catch(a=>{console.error("Error signing out:",a)})};return n?f.jsx("p",{className:"text-center text-white text-2xl",children:"Loading..."}):f.jsx("div",{className:"text-center py-8",children:t?f.jsxs("div",{children:[f.jsxs("h1",{className:"text-3xl font-semibold text-white mb-4",children:["Welcome, ",t.name]}),f.jsxs("p",{className:"text-white text-lg",children:["Email: ",t.email]}),f.jsx("button",{onClick:o,className:"mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600",children:"Sign Out"}),f.jsxs("div",{className:"mt-8",children:[f.jsx("h2",{className:"text-2xl font-semibold text-white mb-4",children:"Your Past Games"}),i.length>0?f.jsx("ul",{className:"text-white",children:i.map((a,l)=>f.jsxs("li",{className:"mb-2",children:["Game ",l+1,": Score ",a.score]},l))}):f.jsx("p",{className:"text-white",children:"You haven't played any games yet."})]}),f.jsxs("div",{className:"mt-8",children:[f.jsx(h4,{user:t}),f.jsx(l4,{}),f.jsx(u4,{}),f.jsx(c4,{})]})]}):f.jsxs("div",{children:[f.jsx("h1",{className:"text-3xl font-semibold text-white mb-4",children:"You are not signed in."}),f.jsx("p",{className:"text-white text-lg",children:"Please sign in to view your profile."})]})})}function f4({loggedIn:t,onLogin:e}){return f.jsxs(AR,{children:[f.jsx(ir,{path:"/SnapBack/login",element:f.jsx(i4,{loggedIn:t,onLogin:e})}),f.jsx(ir,{path:"/SnapBack/register",element:f.jsx(s4,{})}),f.jsx(ir,{path:"/SnapBack/",element:f.jsx(MR,{})}),f.jsx(ir,{path:"/SnapBack/games/hangman",element:t?f.jsx(FM,{}):f.jsx(Py,{to:"/SnapBack/login",replace:!0})}),f.jsx(ir,{path:"/SnapBack/games",element:t?f.jsx(o4,{}):f.jsx(Py,{to:"/SnapBack/login",replace:!0})}),f.jsx(ir,{path:"/SnapBack/games/hangman/leaderboard",element:f.jsx(a4,{})}),f.jsx(ir,{path:"/SnapBack/profile",element:f.jsx(d4,{})})]})}function p4({isOpen:t,onRequestClose:e,onConfirm:n}){return t&&f.jsxs("div",{className:"inset-0 flex items-center justify-center z-50",children:[f.jsx("div",{className:"fixed inset-0 bg-black opacity-60"}),f.jsxs("div",{className:"absolute max-md:top-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-xl w-full max-w-xs",children:[f.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Confirm Logout"}),f.jsx("p",{className:"mb-4",children:"Are you sure you want to log out?"}),f.jsxs("div",{className:"flex justify-center float-right",children:[f.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",onClick:n,children:"Yes"}),f.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:e,children:"No"})]})]})]})}function m4(){const[t,e]=R.useState(localStorage.getItem("authToken")==="true"),[n,r]=R.useState(null),[i,s]=R.useState(!1),o=Ms();R.useEffect(()=>{const u=hL(Dn,c=>{c?(r(c),e(!0),localStorage.setItem("authToken",!0)):(r(null),e(!1),localStorage.removeItem("authToken"))});return()=>u()},[]);const a=async()=>{s(!0)},l=async()=>{try{await Dn.signOut(),r(null),e(!1),localStorage.removeItem("authToken"),o("/SnapBack/home")}catch(u){console.log(u)}finally{s(!1)}};return f.jsxs("div",{children:[f.jsx("div",{children:f.jsx(LR,{loggedIn:t,onLogin:e,handleLogout:a})}),f.jsx("div",{children:f.jsx(f4,{loggedIn:t,onLogin:e})}),i&&f.jsx("div",{className:"modal-overlay",children:f.jsx(p4,{isOpen:i,onRequestClose:()=>s(!1),onConfirm:l})})]})}nd.createRoot(document.getElementById("root")).render(f.jsx(vn.StrictMode,{children:f.jsx(NR,{children:f.jsx(m4,{})})}));
