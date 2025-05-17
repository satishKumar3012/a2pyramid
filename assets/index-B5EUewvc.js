(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();function Qy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var as={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function Vy(){if(Wm)return Si;Wm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var x in s)x!=="key"&&(d[x]=s[x])}else d=s;return s=d.ref,{$$typeof:l,type:u,key:m,ref:s!==void 0?s:null,props:d}}return Si.Fragment=i,Si.jsx=o,Si.jsxs=o,Si}var Im;function e0(){return Im||(Im=1,as.exports=Vy()),as.exports}var f=e0(),ls={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Xy(){if(ep)return ue;ep=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,H={};function _(S,Q,K){this.props=S,this.context=Q,this.refs=H,this.updater=K||B}_.prototype.isReactComponent={},_.prototype.setState=function(S,Q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Q,"setState")},_.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function N(){}N.prototype=_.prototype;function V(S,Q,K){this.props=S,this.context=Q,this.refs=H,this.updater=K||B}var q=V.prototype=new N;q.constructor=V,A(q,_.prototype),q.isPureReactComponent=!0;var F=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function J(S,Q,K,$,te,me){return K=me.ref,{$$typeof:l,type:S,key:Q,ref:K!==void 0?K:null,props:me}}function se(S,Q){return J(S.type,Q,void 0,void 0,void 0,S.props)}function de(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function _e(S){var Q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(K){return Q[K]})}var Ve=/\/+/g;function Ce(S,Q){return typeof S=="object"&&S!==null&&S.key!=null?_e(""+S.key):Q.toString(36)}function ct(){}function at(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ct,ct):(S.status="pending",S.then(function(Q){S.status==="pending"&&(S.status="fulfilled",S.value=Q)},function(Q){S.status==="pending"&&(S.status="rejected",S.reason=Q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Re(S,Q,K,$,te){var me=typeof S;(me==="undefined"||me==="boolean")&&(S=null);var ae=!1;if(S===null)ae=!0;else switch(me){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(S.$$typeof){case l:case i:ae=!0;break;case b:return ae=S._init,Re(ae(S._payload),Q,K,$,te)}}if(ae)return te=te(S),ae=$===""?"."+Ce(S,0):$,F(te)?(K="",ae!=null&&(K=ae.replace(Ve,"$&/")+"/"),Re(te,Q,K,"",function(lt){return lt})):te!=null&&(de(te)&&(te=se(te,K+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(Ve,"$&/")+"/")+ae)),Q.push(te)),1;ae=0;var $e=$===""?".":$+":";if(F(S))for(var ve=0;ve<S.length;ve++)$=S[ve],me=$e+Ce($,ve),ae+=Re($,Q,K,me,te);else if(ve=T(S),typeof ve=="function")for(S=ve.call(S),ve=0;!($=S.next()).done;)$=$.value,me=$e+Ce($,ve++),ae+=Re($,Q,K,me,te);else if(me==="object"){if(typeof S.then=="function")return Re(at(S),Q,K,$,te);throw Q=String(S),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ae}function k(S,Q,K){if(S==null)return S;var $=[],te=0;return Re(S,$,"","",function(me){return Q.call(K,me,te++)}),$}function Z(S){if(S._status===-1){var Q=S._result;Q=Q(),Q.then(function(K){(S._status===0||S._status===-1)&&(S._status=1,S._result=K)},function(K){(S._status===0||S._status===-1)&&(S._status=2,S._result=K)}),S._status===-1&&(S._status=0,S._result=Q)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function re(){}return ue.Children={map:k,forEach:function(S,Q,K){k(S,function(){Q.apply(this,arguments)},K)},count:function(S){var Q=0;return k(S,function(){Q++}),Q},toArray:function(S){return k(S,function(Q){return Q})||[]},only:function(S){if(!de(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ue.Component=_,ue.Fragment=o,ue.Profiler=s,ue.PureComponent=V,ue.StrictMode=u,ue.Suspense=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ue.__COMPILER_RUNTIME={__proto__:null,c:function(S){return X.H.useMemoCache(S)}},ue.cache=function(S){return function(){return S.apply(null,arguments)}},ue.cloneElement=function(S,Q,K){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=A({},S.props),te=S.key,me=void 0;if(Q!=null)for(ae in Q.ref!==void 0&&(me=void 0),Q.key!==void 0&&(te=""+Q.key),Q)!W.call(Q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Q.ref===void 0||($[ae]=Q[ae]);var ae=arguments.length-2;if(ae===1)$.children=K;else if(1<ae){for(var $e=Array(ae),ve=0;ve<ae;ve++)$e[ve]=arguments[ve+2];$.children=$e}return J(S.type,te,void 0,void 0,me,$)},ue.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},ue.createElement=function(S,Q,K){var $,te={},me=null;if(Q!=null)for($ in Q.key!==void 0&&(me=""+Q.key),Q)W.call(Q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(te[$]=Q[$]);var ae=arguments.length-2;if(ae===1)te.children=K;else if(1<ae){for(var $e=Array(ae),ve=0;ve<ae;ve++)$e[ve]=arguments[ve+2];te.children=$e}if(S&&S.defaultProps)for($ in ae=S.defaultProps,ae)te[$]===void 0&&(te[$]=ae[$]);return J(S,me,void 0,void 0,null,te)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(S){return{$$typeof:x,render:S}},ue.isValidElement=de,ue.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:Z}},ue.memo=function(S,Q){return{$$typeof:p,type:S,compare:Q===void 0?null:Q}},ue.startTransition=function(S){var Q=X.T,K={};X.T=K;try{var $=S(),te=X.S;te!==null&&te(K,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(re,ee)}catch(me){ee(me)}finally{X.T=Q}},ue.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ue.use=function(S){return X.H.use(S)},ue.useActionState=function(S,Q,K){return X.H.useActionState(S,Q,K)},ue.useCallback=function(S,Q){return X.H.useCallback(S,Q)},ue.useContext=function(S){return X.H.useContext(S)},ue.useDebugValue=function(){},ue.useDeferredValue=function(S,Q){return X.H.useDeferredValue(S,Q)},ue.useEffect=function(S,Q,K){var $=X.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(S,Q)},ue.useId=function(){return X.H.useId()},ue.useImperativeHandle=function(S,Q,K){return X.H.useImperativeHandle(S,Q,K)},ue.useInsertionEffect=function(S,Q){return X.H.useInsertionEffect(S,Q)},ue.useLayoutEffect=function(S,Q){return X.H.useLayoutEffect(S,Q)},ue.useMemo=function(S,Q){return X.H.useMemo(S,Q)},ue.useOptimistic=function(S,Q){return X.H.useOptimistic(S,Q)},ue.useReducer=function(S,Q,K){return X.H.useReducer(S,Q,K)},ue.useRef=function(S){return X.H.useRef(S)},ue.useState=function(S){return X.H.useState(S)},ue.useSyncExternalStore=function(S,Q,K){return X.H.useSyncExternalStore(S,Q,K)},ue.useTransition=function(){return X.H.useTransition()},ue.version="19.1.0",ue}var tp;function To(){return tp||(tp=1,ls.exports=Xy()),ls.exports}var M=To();const Yt=Qy(M);var is={exports:{}},wi={},rs={exports:{}},os={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Zy(){return np||(np=1,function(l){function i(k,Z){var ee=k.length;k.push(Z);e:for(;0<ee;){var re=ee-1>>>1,S=k[re];if(0<s(S,Z))k[re]=Z,k[ee]=S,ee=re;else break e}}function o(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var Z=k[0],ee=k.pop();if(ee!==Z){k[0]=ee;e:for(var re=0,S=k.length,Q=S>>>1;re<Q;){var K=2*(re+1)-1,$=k[K],te=K+1,me=k[te];if(0>s($,ee))te<S&&0>s(me,$)?(k[re]=me,k[te]=ee,re=te):(k[re]=$,k[K]=ee,re=K);else if(te<S&&0>s(me,ee))k[re]=me,k[te]=ee,re=te;else break e}}return Z}function s(k,Z){var ee=k.sortIndex-Z.sortIndex;return ee!==0?ee:k.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var m=Date,x=m.now();l.unstable_now=function(){return m.now()-x}}var y=[],p=[],b=1,w=null,T=3,B=!1,A=!1,H=!1,_=!1,N=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var Z=o(p);Z!==null;){if(Z.callback===null)u(p);else if(Z.startTime<=k)u(p),Z.sortIndex=Z.expirationTime,i(y,Z);else break;Z=o(p)}}function X(k){if(H=!1,F(k),!A)if(o(y)!==null)A=!0,W||(W=!0,Ce());else{var Z=o(p);Z!==null&&Re(X,Z.startTime-k)}}var W=!1,J=-1,se=5,de=-1;function _e(){return _?!0:!(l.unstable_now()-de<se)}function Ve(){if(_=!1,W){var k=l.unstable_now();de=k;var Z=!0;try{e:{A=!1,H&&(H=!1,V(J),J=-1),B=!0;var ee=T;try{t:{for(F(k),w=o(y);w!==null&&!(w.expirationTime>k&&_e());){var re=w.callback;if(typeof re=="function"){w.callback=null,T=w.priorityLevel;var S=re(w.expirationTime<=k);if(k=l.unstable_now(),typeof S=="function"){w.callback=S,F(k),Z=!0;break t}w===o(y)&&u(y),F(k)}else u(y);w=o(y)}if(w!==null)Z=!0;else{var Q=o(p);Q!==null&&Re(X,Q.startTime-k),Z=!1}}break e}finally{w=null,T=ee,B=!1}Z=void 0}}finally{Z?Ce():W=!1}}}var Ce;if(typeof q=="function")Ce=function(){q(Ve)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=Ve,Ce=function(){at.postMessage(null)}}else Ce=function(){N(Ve,0)};function Re(k,Z){J=N(function(){k(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_next=function(k){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var ee=T;T=Z;try{return k()}finally{T=ee}},l.unstable_requestPaint=function(){_=!0},l.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=T;T=k;try{return Z()}finally{T=ee}},l.unstable_scheduleCallback=function(k,Z,ee){var re=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,k){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,k={id:b++,callback:Z,priorityLevel:k,startTime:ee,expirationTime:S,sortIndex:-1},ee>re?(k.sortIndex=ee,i(p,k),o(y)===null&&k===o(p)&&(H?(V(J),J=-1):H=!0,Re(X,ee-re))):(k.sortIndex=S,i(y,k),A||B||(A=!0,W||(W=!0,Ce()))),k},l.unstable_shouldYield=_e,l.unstable_wrapCallback=function(k){var Z=T;return function(){var ee=T;T=Z;try{return k.apply(this,arguments)}finally{T=ee}}}}(os)),os}var ap;function Ky(){return ap||(ap=1,rs.exports=Zy()),rs.exports}var us={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function $y(){if(lp)return ot;lp=1;var l=To();function i(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(y,p,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:y,containerInfo:p,implementation:b}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ot.createPortal=function(y,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return d(y,p,null,b)},ot.flushSync=function(y){var p=m.T,b=u.p;try{if(m.T=null,u.p=2,y)return y()}finally{m.T=p,u.p=b,u.d.f()}},ot.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(y,p))},ot.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},ot.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var b=p.as,w=x(b,p.crossOrigin),T=typeof p.integrity=="string"?p.integrity:void 0,B=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?u.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:B}):b==="script"&&u.d.X(y,{crossOrigin:w,integrity:T,fetchPriority:B,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ot.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=x(p.as,p.crossOrigin);u.d.M(y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(y)},ot.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,w=x(b,p.crossOrigin);u.d.L(y,b,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ot.preloadModule=function(y,p){if(typeof y=="string")if(p){var b=x(p.as,p.crossOrigin);u.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(y)},ot.requestFormReset=function(y){u.d.r(y)},ot.unstable_batchedUpdates=function(y,p){return y(p)},ot.useFormState=function(y,p,b){return m.H.useFormState(y,p,b)},ot.useFormStatus=function(){return m.H.useHostTransitionStatus()},ot.version="19.1.0",ot}var ip;function Jy(){if(ip)return us.exports;ip=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),us.exports=$y(),us.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function Fy(){if(rp)return wi;rp=1;var l=Ky(),i=To(),o=Jy();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(u(188))}function y(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return x(r),e;if(c===a)return x(r),t;c=c.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=c;else{for(var h=!1,g=r.child;g;){if(g===n){h=!0,n=r,a=c;break}if(g===a){h=!0,a=r,n=c;break}g=g.sibling}if(!h){for(g=c.child;g;){if(g===n){h=!0,n=c,a=r;break}if(g===a){h=!0,a=c,n=r;break}g=g.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case H:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case q:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Re=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},re=[],S=-1;function Q(e){return{current:e}}function K(e){0>S||(e.current=re[S],re[S]=null,S--)}function $(e,t){S++,re[S]=e.current,e.current=t}var te=Q(null),me=Q(null),ae=Q(null),$e=Q(null);function ve(e,t){switch($(ae,t),$(me,e),$(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tm(t),e=zm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(te),$(te,e)}function lt(){K(te),K(me),K(ae)}function Wn(e){e.memoizedState!==null&&$($e,e);var t=te.current,n=zm(t,e.type);t!==n&&($(me,e),$(te,n))}function rn(e){me.current===e&&(K(te),K(me)),$e.current===e&&(K($e),gi._currentValue=ee)}var Dt=Object.prototype.hasOwnProperty,Vo=l.unstable_scheduleCallback,Xo=l.unstable_cancelCallback,Sg=l.unstable_shouldYield,wg=l.unstable_requestPaint,Ft=l.unstable_now,Eg=l.unstable_getCurrentPriorityLevel,rf=l.unstable_ImmediatePriority,of=l.unstable_UserBlockingPriority,Li=l.unstable_NormalPriority,jg=l.unstable_LowPriority,uf=l.unstable_IdlePriority,Ag=l.log,Tg=l.unstable_setDisableYieldValue,jl=null,bt=null;function Tn(e){if(typeof Ag=="function"&&Tg(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(jl,e)}catch{}}var vt=Math.clz32?Math.clz32:Og,zg=Math.log,Rg=Math.LN2;function Og(e){return e>>>=0,e===0?32:31-(zg(e)/Rg|0)|0}var qi=256,Yi=4194304;function In(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~c,a!==0?r=In(a):(h&=g,h!==0?r=In(h):n||(n=g&~e,n!==0&&(r=In(n))))):(g=a&~c,g!==0?r=In(g):h!==0?r=In(h):n||(n=a&~e,n!==0&&(r=In(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(){var e=qi;return qi<<=1,(qi&4194048)===0&&(qi=256),e}function sf(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dg(e,t,n,a,r,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var L=31-vt(n),G=1<<L;g[L]=0,v[L]=-1;var C=O[L];if(C!==null)for(O[L]=null,L=0;L<C.length;L++){var D=C[L];D!==null&&(D.lane&=-536870913)}n&=~G}a!==0&&ff(e,a,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function ff(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function df(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Zm(e.type))}function _g(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var zn=Math.random().toString(36).slice(2),it="__reactFiber$"+zn,ft="__reactProps$"+zn,ja="__reactContainer$"+zn,Jo="__reactEvents$"+zn,Mg="__reactListeners$"+zn,Ng="__reactHandles$"+zn,mf="__reactResources$"+zn,zl="__reactMarker$"+zn;function Fo(e){delete e[it],delete e[ft],delete e[Jo],delete e[Mg],delete e[Ng]}function Aa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ja]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dm(e);e!==null;){if(n=e[it])return n;e=Dm(e)}return t}e=n,n=e.parentNode}return null}function Ta(e){if(e=e[it]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function za(e){var t=e[mf];return t||(t=e[mf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[zl]=!0}var pf=new Set,gf={};function ea(e,t){Ra(e,t),Ra(e+"Capture",t)}function Ra(e,t){for(gf[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var Ug=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yf={},xf={};function Bg(e){return Dt.call(xf,e)?!0:Dt.call(yf,e)?!1:Ug.test(e)?xf[e]=!0:(yf[e]=!0,!1)}function Qi(e,t,n){if(Bg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function on(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Po,bf;function Oa(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||"",bf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Po+e+bf}var Wo=!1;function Io(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(D){var C=D}Reflect.construct(e,[],G)}else{try{G.call()}catch(D){C=D}e.call(G.prototype)}}else{try{throw Error()}catch(D){C=D}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(D){if(D&&C&&typeof D.stack=="string")return[D.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),h=c[0],g=c[1];if(h&&g){var v=h.split(`
`),O=g.split(`
`);for(r=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(a===v.length||r===O.length)for(a=v.length-1,r=O.length-1;1<=a&&0<=r&&v[a]!==O[r];)r--;for(;1<=a&&0<=r;a--,r--)if(v[a]!==O[r]){if(a!==1||r!==1)do if(a--,r--,0>r||v[a]!==O[r]){var L=`
`+v[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=r);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Oa(n):""}function Hg(e){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return Io(e.type,!1);case 11:return Io(e.type.render,!1);case 1:return Io(e.type,!0);case 31:return Oa("Activity");default:return""}}function vf(e){try{var t="";do t+=Hg(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kg(e){var t=Sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=kg(e))}function wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Sf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lg=/[\n"\\]/g;function Mt(e){return e.replace(Lg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,n,a,r,c,h,g){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?tu(e,h,_t(t)):n!=null?tu(e,h,_t(n)):a!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_t(g):e.removeAttribute("name")}function Ef(e,t,n,a,r,c,h,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+_t(n):"",t=t!=null?""+_t(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function tu(e,t,n){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ca(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function jf(e,t,n){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_t(n):""}function Af(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Re(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=_t(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||qg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Tf(e,r,a)}else for(var c in t)t.hasOwnProperty(c)&&Tf(e,c,t[c])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return Gg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Ma=null;function Rf(e){var t=Ta(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[ft]||null;if(!r)throw Error(u(90));eu(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&wf(a)}break e;case"textarea":jf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ca(e,!!n.multiple,t,!1)}}}var iu=!1;function Of(e,t,n){if(iu)return e(t,n);iu=!0;try{var a=e(t);return a}finally{if(iu=!1,(_a!==null||Ma!==null)&&(_r(),_a&&(t=_a,e=Ma,Ma=_a=null,Rf(t),e)))for(t=0;t<e.length;t++)Rf(e[t])}}function Ol(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ft]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(un)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{ru=!1}var Rn=null,ou=null,$i=null;function Cf(){if($i)return $i;var e,t=ou,n=t.length,a,r="value"in Rn?Rn.value:Rn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===r[c-a];a++);return $i=r.slice(e,1<a?1-a:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function Df(){return!1}function dt(e){function t(n,a,r,c,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fi:Df,this.isPropagationStopped=Df,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=dt(ta),Dl=b({},ta,{view:0,detail:0}),Qg=dt(Dl),uu,cu,_l,Wi=b({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(uu=e.screenX-_l.screenX,cu=e.screenY-_l.screenY):cu=uu=0,_l=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),_f=dt(Wi),Vg=b({},Wi,{dataTransfer:0}),Xg=dt(Vg),Zg=b({},Dl,{relatedTarget:0}),su=dt(Zg),Kg=b({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=dt(Kg),Jg=b({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=dt(Jg),Pg=b({},ta,{data:0}),Mf=dt(Pg),Wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e1[e])?!!t[e]:!1}function fu(){return t1}var n1=b({},Dl,{key:function(e){if(e.key){var t=Wg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=dt(n1),l1=b({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=dt(l1),i1=b({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),r1=dt(i1),o1=b({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=dt(o1),c1=b({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=dt(c1),f1=b({},ta,{newState:0,oldState:0}),d1=dt(f1),h1=[9,13,27,32],du=un&&"CompositionEvent"in window,Ml=null;un&&"documentMode"in document&&(Ml=document.documentMode);var m1=un&&"TextEvent"in window&&!Ml,Uf=un&&(!du||Ml&&8<Ml&&11>=Ml),Bf=" ",Hf=!1;function kf(e,t){switch(e){case"keyup":return h1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function p1(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(Hf=!0,Bf);case"textInput":return e=t.data,e===Bf&&Hf?null:e;default:return null}}function g1(e,t){if(Na)return e==="compositionend"||!du&&kf(e,t)?(e=Cf(),$i=ou=Rn=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y1[e.type]:t==="textarea"}function Yf(e,t,n,a){_a?Ma?Ma.push(a):Ma=[a]:_a=a,t=kr(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Nl=null,Ul=null;function x1(e){Sm(e,0)}function Ii(e){var t=Rl(e);if(wf(t))return e}function Gf(e,t){if(e==="change")return t}var Qf=!1;if(un){var hu;if(un){var mu="oninput"in document;if(!mu){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),mu=typeof Vf.oninput=="function"}hu=mu}else hu=!1;Qf=hu&&(!document.documentMode||9<document.documentMode)}function Xf(){Nl&&(Nl.detachEvent("onpropertychange",Zf),Ul=Nl=null)}function Zf(e){if(e.propertyName==="value"&&Ii(Ul)){var t=[];Yf(t,Ul,e,lu(e)),Of(x1,t)}}function b1(e,t,n){e==="focusin"?(Xf(),Nl=t,Ul=n,Nl.attachEvent("onpropertychange",Zf)):e==="focusout"&&Xf()}function v1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(Ul)}function S1(e,t){if(e==="click")return Ii(t)}function w1(e,t){if(e==="input"||e==="change")return Ii(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:E1;function Bl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Dt.call(t,r)||!St(e[r],t[r]))return!1}return!0}function Kf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,t){var n=Kf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function Jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ff(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var j1=un&&"documentMode"in document&&11>=document.documentMode,Ua=null,gu=null,Hl=null,yu=!1;function Pf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||Ua==null||Ua!==Zi(a)||(a=Ua,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&Bl(Hl,a)||(Hl=a,a=kr(gu,"onSelect"),0<a.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ua)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},xu={},Wf={};un&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function aa(e){if(xu[e])return xu[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wf)return xu[e]=t[n];return e}var If=aa("animationend"),ed=aa("animationiteration"),td=aa("animationstart"),A1=aa("transitionrun"),T1=aa("transitionstart"),z1=aa("transitioncancel"),nd=aa("transitionend"),ad=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Qt(e,t){ad.set(e,t),ea(t,[e])}var ld=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=ld.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vf(t)},ld.set(e,t),t)}return{value:e,source:t,stack:vf(t)}}var Ut=[],Ha=0,vu=0;function er(){for(var e=Ha,t=vu=Ha=0;t<e;){var n=Ut[t];Ut[t++]=null;var a=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}c!==0&&id(n,r,c)}}function tr(e,t,n,a){Ut[Ha++]=e,Ut[Ha++]=t,Ut[Ha++]=n,Ut[Ha++]=a,vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Su(e,t,n,a){return tr(e,t,n,a),nr(e)}function ka(e,t){return tr(e,null,null,t),nr(e)}function id(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-vt(n),e=c.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),c):null}function nr(e){if(50<ui)throw ui=0,zc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function R1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,a){return new R1(e,t,n,a)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ar(e,t,n,a,r,c){var h=0;if(a=e,typeof e=="function")wu(e)&&(h=1);else if(typeof e=="string")h=Cy(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=wt(31,n,t,r),e.elementType=de,e.lanes=c,e;case A:return la(n.children,r,c,t);case H:h=8,r|=24;break;case _:return e=wt(12,n,t,r|2),e.elementType=_,e.lanes=c,e;case X:return e=wt(13,n,t,r),e.elementType=X,e.lanes=c,e;case W:return e=wt(19,n,t,r),e.elementType=W,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:case q:h=10;break e;case V:h=9;break e;case F:h=11;break e;case J:h=14;break e;case se:h=16,a=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=wt(h,n,t,r),t.elementType=e,t.type=a,t.lanes=c,t}function la(e,t,n,a){return e=wt(7,e,a,t),e.lanes=n,e}function Eu(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ju(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qa=[],Ya=0,lr=null,ir=0,Bt=[],Ht=0,ia=null,sn=1,fn="";function ra(e,t){qa[Ya++]=ir,qa[Ya++]=lr,lr=e,ir=t}function od(e,t,n){Bt[Ht++]=sn,Bt[Ht++]=fn,Bt[Ht++]=ia,ia=e;var a=sn;e=fn;var r=32-vt(a)-1;a&=~(1<<r),n+=1;var c=32-vt(t)+r;if(30<c){var h=r-r%5;c=(a&(1<<h)-1).toString(32),a>>=h,r-=h,sn=1<<32-vt(t)+r|n<<r|a,fn=c+e}else sn=1<<c|n<<r|a,fn=e}function Au(e){e.return!==null&&(ra(e,1),od(e,1,0))}function Tu(e){for(;e===lr;)lr=qa[--Ya],qa[Ya]=null,ir=qa[--Ya],qa[Ya]=null;for(;e===ia;)ia=Bt[--Ht],Bt[Ht]=null,fn=Bt[--Ht],Bt[Ht]=null,sn=Bt[--Ht],Bt[Ht]=null}var st=null,He=null,be=!1,oa=null,Pt=!1,zu=Error(u(519));function ua(e){var t=Error(u(418,""));throw ql(Nt(t,e)),zu}function ud(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[it]=e,t[ft]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<si.length;n++)ge(si[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Ef(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xi(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Af(t,a.value,a.defaultValue,a.children),Xi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Am(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=Lr),t=!0):t=!1,t||ua(e)}function cd(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:st=st.return}}function kl(e){if(e!==st)return!1;if(!be)return cd(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qc(e.type,e.memoizedProps)),n=!n),n&&He&&ua(e),cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,Vn(e.type)?(e=Kc,Kc=null,He=e):He=t):He=st?Xt(e.stateNode.nextSibling):null;return!0}function Ll(){He=st=null,be=!1}function sd(){var e=oa;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),oa=null),e}function ql(e){oa===null?oa=[e]:oa.push(e)}var Ru=Q(null),ca=null,dn=null;function On(e,t,n){$(Ru,t._currentValue),t._currentValue=n}function hn(e){e._currentValue=Ru.current,K(Ru)}function Ou(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Cu(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var h=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var v=0;v<t.length;v++)if(g.context===t[v]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),Ou(c.return,n,e),a||(h=null);break e}c=g.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(u(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Ou(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function Yl(e,t,n,a){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var g=r.type;St(r.pendingProps.value,h.value)||(e!==null?e.push(g):e=[g])}}else if(r===$e.current){if(h=r.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}r=r.return}e!==null&&Cu(t,e,n,a),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){ca=e,dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return fd(ca,e)}function or(e,t){return ca===null&&sa(e),fd(e,t)}function fd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dn===null){if(e===null)throw Error(u(308));dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dn=dn.next=t;return n}var O1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},C1=l.unstable_scheduleCallback,D1=l.unstable_NormalPriority,Xe={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new O1,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&C1(D1,function(){e.controller.abort()})}var Ql=null,_u=0,Ga=0,Qa=null;function _1(e,t){if(Ql===null){var n=Ql=[];_u=0,Ga=Nc(),Qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return _u++,t.then(dd,dd),t}function dd(){if(--_u===0&&Ql!==null){Qa!==null&&(Qa.status="fulfilled");var e=Ql;Ql=null,Ga=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function M1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var hd=k.S;k.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&_1(e,t),hd!==null&&hd(e,t)};var fa=Q(null);function Mu(){var e=fa.current;return e!==null?e:Oe.pooledCache}function ur(e,t){t===null?$(fa,fa.current):$(fa,t.pool)}function md(){var e=Mu();return e===null?null:{parent:Xe._currentValue,pool:e}}var Vl=Error(u(460)),pd=Error(u(474)),cr=Error(u(542)),Nu={then:function(){}};function gd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(){}function yd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sr,sr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bd(e),e}throw Xl=t,Vl}}var Xl=null;function xd(){if(Xl===null)throw Error(u(459));var e=Xl;return Xl=null,e}function bd(e){if(e===Vl||e===cr)throw Error(u(483))}var Cn=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(we&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=nr(e),id(e,null,n),t}return tr(e,a,t,n),nr(e)}function Zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,df(e,n)}}function Hu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ku=!1;function Kl(){if(ku){var e=Qa;if(e!==null)throw e}}function $l(e,t,n,a){ku=!1;var r=e.updateQueue;Cn=!1;var c=r.firstBaseUpdate,h=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var v=g,O=v.next;v.next=null,h===null?c=O:h.next=O,h=v;var L=e.alternate;L!==null&&(L=L.updateQueue,g=L.lastBaseUpdate,g!==h&&(g===null?L.firstBaseUpdate=O:g.next=O,L.lastBaseUpdate=v))}if(c!==null){var G=r.baseState;h=0,L=O=v=null,g=c;do{var C=g.lane&-536870913,D=C!==g.lane;if(D?(ye&C)===C:(a&C)===C){C!==0&&C===Ga&&(ku=!0),L!==null&&(L=L.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ie=e,ne=g;C=t;var Te=n;switch(ne.tag){case 1:if(ie=ne.payload,typeof ie=="function"){G=ie.call(Te,G,C);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ne.payload,C=typeof ie=="function"?ie.call(Te,G,C):ie,C==null)break e;G=b({},G,C);break e;case 2:Cn=!0}}C=g.callback,C!==null&&(e.flags|=64,D&&(e.flags|=8192),D=r.callbacks,D===null?r.callbacks=[C]:D.push(C))}else D={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},L===null?(O=L=D,v=G):L=L.next=D,h|=C;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;D=g,g=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null}}while(!0);L===null&&(v=G),r.baseState=v,r.firstBaseUpdate=O,r.lastBaseUpdate=L,c===null&&(r.shared.lanes=0),qn|=h,e.lanes=h,e.memoizedState=G}}function vd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Sd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vd(n[e],t)}var Va=Q(null),fr=Q(0);function wd(e,t){e=vn,$(fr,e),$(Va,t),vn=e|t.baseLanes}function Lu(){$(fr,vn),$(Va,Va.current)}function qu(){vn=fr.current,K(Va),K(fr)}var Mn=0,fe=null,je=null,Ye=null,dr=!1,Xa=!1,da=!1,hr=0,Jl=0,Za=null,N1=0;function Le(){throw Error(u(321))}function Yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Gu(e,t,n,a,r,c){return Mn=c,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?ih:rh,da=!1,c=n(a,r),da=!1,Xa&&(c=jd(t,n,a,r)),Ed(e),c}function Ed(e){k.H=br;var t=je!==null&&je.next!==null;if(Mn=0,Ye=je=fe=null,dr=!1,Jl=0,Za=null,t)throw Error(u(300));e===null||Fe||(e=e.dependencies,e!==null&&rr(e)&&(Fe=!0))}function jd(e,t,n,a){fe=e;var r=0;do{if(Xa&&(Za=null),Jl=0,Xa=!1,25<=r)throw Error(u(301));if(r+=1,Ye=je=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}k.H=Y1,c=t(n,a)}while(Xa);return c}function U1(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(fe.flags|=1024),t}function Qu(){var e=hr!==0;return hr=0,e}function Vu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xu(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}Mn=0,Ye=je=fe=null,Xa=!1,Jl=hr=0,Za=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ye===null?fe.memoizedState:Ye.next;if(t!==null)Ye=t,je=e;else{if(e===null)throw fe.alternate===null?Error(u(467)):Error(u(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Jl;return Jl+=1,Za===null&&(Za=[]),e=yd(Za,e,t),t=fe,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?ih:rh),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===q)return rt(e)}throw Error(u(438,String(e)))}function Ku(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zu(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=_e;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function pr(e){var t=Ge();return $u(t,je,e)}function $u(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,c=a.pending;if(c!==null){if(r!==null){var h=r.next;r.next=c.next,c.next=h}t.baseQueue=r=c,a.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var g=h=null,v=null,O=t,L=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(ye&G)===G:(Mn&G)===G){var C=O.revertLane;if(C===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===Ga&&(L=!0);else if((Mn&C)===C){O=O.next,C===Ga&&(L=!0);continue}else G={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(g=v=G,h=c):v=v.next=G,fe.lanes|=C,qn|=C;G=O.action,da&&n(c,G),c=O.hasEagerState?O.eagerState:n(c,G)}else C={lane:G,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(g=v=C,h=c):v=v.next=C,fe.lanes|=G,qn|=G;O=O.next}while(O!==null&&O!==t);if(v===null?h=c:v.next=g,!St(c,e.memoizedState)&&(Fe=!0,L&&(n=Qa,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=v,a.lastRenderedState=c}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ju(e){var t=Ge(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do c=e(c,h.action),h=h.next;while(h!==r);St(c,t.memoizedState)||(Fe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Ad(e,t,n){var a=fe,r=Ge(),c=be;if(c){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!St((je||r).memoizedState,n);h&&(r.memoizedState=n,Fe=!0),r=r.queue;var g=Rd.bind(null,a,r,e);if(Pl(2048,8,g,[e]),r.getSnapshot!==t||h||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ka(9,gr(),zd.bind(null,a,r,n,t),null),Oe===null)throw Error(u(349));c||(Mn&124)!==0||Td(a,t,n)}return n}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Zu(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,a){t.value=n,t.getSnapshot=a,Od(t)&&Cd(e)}function Rd(e,t,n){return n(function(){Od(t)&&Cd(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Cd(e){var t=ka(e,2);t!==null&&zt(t,e,2)}function Fu(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),da){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function Dd(e,t,n,a){return e.baseState=n,$u(e,je,typeof a=="function"?a:mn)}function B1(e,t,n,a,r){if(xr(e))throw Error(u(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};k.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,_d(t,c)):(c.next=n.next,t.pending=n.next=c)}}function _d(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var c=k.T,h={};k.T=h;try{var g=n(r,a),v=k.S;v!==null&&v(h,g),Md(e,t,g)}catch(O){Pu(e,t,O)}finally{k.T=c}}else try{c=n(r,a),Md(e,t,c)}catch(O){Pu(e,t,O)}}function Md(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Nd(e,t,a)},function(a){return Pu(e,t,a)}):Nd(e,t,n)}function Nd(e,t,n){t.status="fulfilled",t.value=n,Ud(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_d(e,n)))}function Pu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ud(t),t=t.next;while(t!==a)}e.action=null}function Ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bd(e,t){return t}function Hd(e,t){if(be){var n=Oe.formState;if(n!==null){e:{var a=fe;if(be){if(He){t:{for(var r=He,c=Pt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Xt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){He=Xt(r.nextSibling),a=r.data==="F!";break e}}ua(a)}a=!1}a&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:t},n.queue=a,n=nh.bind(null,fe,a),a.dispatch=n,a=Fu(!1),c=nc.bind(null,fe,!1,a.queue),a=ht(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=B1.bind(null,fe,r,c,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function kd(e){var t=Ge();return Ld(t,je,e)}function Ld(e,t,n){if(t=$u(e,t,Bd)[0],e=pr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fl(t)}catch(h){throw h===Vl?cr:h}else a=t;t=Ge();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,Ka(9,gr(),H1.bind(null,r,n),null)),[a,c,e]}function H1(e,t){e.action=t}function qd(e){var t=Ge(),n=je;if(n!==null)return Ld(t,n,e);Ge(),t=t.memoizedState,n=Ge();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Zu(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gr(){return{destroy:void 0,resource:void 0}}function Yd(){return Ge().memoizedState}function yr(e,t,n,a){var r=ht();a=a===void 0?null:a,fe.flags|=e,r.memoizedState=Ka(1|t,gr(),n,a)}function Pl(e,t,n,a){var r=Ge();a=a===void 0?null:a;var c=r.memoizedState.inst;je!==null&&a!==null&&Yu(a,je.memoizedState.deps)?r.memoizedState=Ka(t,c,n,a):(fe.flags|=e,r.memoizedState=Ka(1|t,c,n,a))}function Gd(e,t){yr(8390656,8,e,t)}function Qd(e,t){Pl(2048,8,e,t)}function Vd(e,t){return Pl(4,2,e,t)}function Xd(e,t){return Pl(4,4,e,t)}function Zd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){n=n!=null?n.concat([e]):null,Pl(4,4,Zd.bind(null,t,e),n)}function Wu(){}function $d(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Yu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Yu(t,a[1]))return a[0];if(a=e(),da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a}function Iu(e,t,n){return n===void 0||(Mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Wh(),fe.lanes|=e,qn|=e,n)}function Fd(e,t,n,a){return St(n,t)?n:Va.current!==null?(e=Iu(e,n,a),St(e,t)||(Fe=!0),e):(Mn&42)===0?(Fe=!0,e.memoizedState=n):(e=Wh(),fe.lanes|=e,qn|=e,t)}function Pd(e,t,n,a,r){var c=Z.p;Z.p=c!==0&&8>c?c:8;var h=k.T,g={};k.T=g,nc(e,!1,t,n);try{var v=r(),O=k.S;if(O!==null&&O(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var L=M1(v,a);Wl(e,t,L,Tt(e))}else Wl(e,t,a,Tt(e))}catch(G){Wl(e,t,{then:function(){},status:"rejected",reason:G},Tt())}finally{Z.p=c,k.T=h}}function k1(){}function ec(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=Wd(e).queue;Pd(e,r,t,ee,n===null?k1:function(){return Id(e),n(a)})}function Wd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Id(e){var t=Wd(e).next.queue;Wl(e,t,{},Tt())}function tc(){return rt(gi)}function eh(){return Ge().memoizedState}function th(){return Ge().memoizedState}function L1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=Dn(n);var a=_n(t,e,n);a!==null&&(zt(a,t,n),Zl(a,t,n)),t={cache:Du()},e.payload=t;return}t=t.return}}function q1(e,t,n){var a=Tt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},xr(e)?ah(t,n):(n=Su(e,t,n,a),n!==null&&(zt(n,e,a),lh(n,t,a)))}function nh(e,t,n){var a=Tt();Wl(e,t,n,a)}function Wl(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(xr(e))ah(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,g=c(h,n);if(r.hasEagerState=!0,r.eagerState=g,St(g,h))return tr(e,t,r,0),Oe===null&&er(),!1}catch{}finally{}if(n=Su(e,t,r,a),n!==null)return zt(n,e,a),lh(n,t,a),!0}return!1}function nc(e,t,n,a){if(a={lane:2,revertLane:Nc(),action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(u(479))}else t=Su(e,n,a,2),t!==null&&zt(t,e,2)}function xr(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function ah(e,t){Xa=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,df(e,n)}}var br={readContext:rt,use:mr,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},ih={readContext:rt,use:mr,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yr(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yr(4194308,4,e,t)},useInsertionEffect:function(e,t){yr(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var a=e();if(da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ht();if(n!==void 0){var r=n(t);if(da){Tn(!0);try{n(t)}finally{Tn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=q1.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,n=nh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wu,useDeferredValue:function(e,t){var n=ht();return Iu(n,e,t)},useTransition:function(){var e=Fu(!1);return e=Pd.bind(null,fe,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,r=ht();if(be){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));(ye&124)!==0||Td(a,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,Gd(Rd.bind(null,a,c,e),[e]),a.flags|=2048,Ka(9,gr(),zd.bind(null,a,c,n,t),null),n},useId:function(){var e=ht(),t=Oe.identifierPrefix;if(be){var n=fn,a=sn;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=N1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:Hd,useActionState:Hd,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return ht().memoizedState=L1.bind(null,fe)}},rh={readContext:rt,use:mr,useCallback:$d,useContext:rt,useEffect:Qd,useImperativeHandle:Kd,useInsertionEffect:Vd,useLayoutEffect:Xd,useMemo:Jd,useReducer:pr,useRef:Yd,useState:function(){return pr(mn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=Ge();return Fd(n,je.memoizedState,e,t)},useTransition:function(){var e=pr(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ad,useId:eh,useHostTransitionStatus:tc,useFormState:kd,useActionState:kd,useOptimistic:function(e,t){var n=Ge();return Dd(n,je,e,t)},useMemoCache:Ku,useCacheRefresh:th},Y1={readContext:rt,use:mr,useCallback:$d,useContext:rt,useEffect:Qd,useImperativeHandle:Kd,useInsertionEffect:Vd,useLayoutEffect:Xd,useMemo:Jd,useReducer:Ju,useRef:Yd,useState:function(){return Ju(mn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=Ge();return je===null?Iu(n,e,t):Fd(n,je.memoizedState,e,t)},useTransition:function(){var e=Ju(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ad,useId:eh,useHostTransitionStatus:tc,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var n=Ge();return je!==null?Dd(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:th},$a=null,Il=0;function vr(e){var t=Il;return Il+=1,$a===null&&($a=[]),yd($a,e,t)}function ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oh(e){var t=e._init;return t(e._payload)}function uh(e){function t(z,j){if(e){var R=z.deletions;R===null?(z.deletions=[j],z.flags|=16):R.push(j)}}function n(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function a(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function r(z,j){return z=cn(z,j),z.index=0,z.sibling=null,z}function c(z,j,R){return z.index=R,e?(R=z.alternate,R!==null?(R=R.index,R<j?(z.flags|=67108866,j):R):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function h(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,j,R,Y){return j===null||j.tag!==6?(j=Eu(R,z.mode,Y),j.return=z,j):(j=r(j,R),j.return=z,j)}function v(z,j,R,Y){var P=R.type;return P===A?L(z,j,R.props.children,Y,R.key):j!==null&&(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===se&&oh(P)===j.type)?(j=r(j,R.props),ei(j,R),j.return=z,j):(j=ar(R.type,R.key,R.props,null,z.mode,Y),ei(j,R),j.return=z,j)}function O(z,j,R,Y){return j===null||j.tag!==4||j.stateNode.containerInfo!==R.containerInfo||j.stateNode.implementation!==R.implementation?(j=ju(R,z.mode,Y),j.return=z,j):(j=r(j,R.children||[]),j.return=z,j)}function L(z,j,R,Y,P){return j===null||j.tag!==7?(j=la(R,z.mode,Y,P),j.return=z,j):(j=r(j,R),j.return=z,j)}function G(z,j,R){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Eu(""+j,z.mode,R),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case T:return R=ar(j.type,j.key,j.props,null,z.mode,R),ei(R,j),R.return=z,R;case B:return j=ju(j,z.mode,R),j.return=z,j;case se:var Y=j._init;return j=Y(j._payload),G(z,j,R)}if(Re(j)||Ce(j))return j=la(j,z.mode,R,null),j.return=z,j;if(typeof j.then=="function")return G(z,vr(j),R);if(j.$$typeof===q)return G(z,or(z,j),R);Sr(z,j)}return null}function C(z,j,R,Y){var P=j!==null?j.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return P!==null?null:g(z,j,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case T:return R.key===P?v(z,j,R,Y):null;case B:return R.key===P?O(z,j,R,Y):null;case se:return P=R._init,R=P(R._payload),C(z,j,R,Y)}if(Re(R)||Ce(R))return P!==null?null:L(z,j,R,Y,null);if(typeof R.then=="function")return C(z,j,vr(R),Y);if(R.$$typeof===q)return C(z,j,or(z,R),Y);Sr(z,R)}return null}function D(z,j,R,Y,P){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return z=z.get(R)||null,g(j,z,""+Y,P);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case T:return z=z.get(Y.key===null?R:Y.key)||null,v(j,z,Y,P);case B:return z=z.get(Y.key===null?R:Y.key)||null,O(j,z,Y,P);case se:var he=Y._init;return Y=he(Y._payload),D(z,j,R,Y,P)}if(Re(Y)||Ce(Y))return z=z.get(R)||null,L(j,z,Y,P,null);if(typeof Y.then=="function")return D(z,j,R,vr(Y),P);if(Y.$$typeof===q)return D(z,j,R,or(j,Y),P);Sr(j,Y)}return null}function ie(z,j,R,Y){for(var P=null,he=null,I=j,le=j=0,We=null;I!==null&&le<R.length;le++){I.index>le?(We=I,I=null):We=I.sibling;var xe=C(z,I,R[le],Y);if(xe===null){I===null&&(I=We);break}e&&I&&xe.alternate===null&&t(z,I),j=c(xe,j,le),he===null?P=xe:he.sibling=xe,he=xe,I=We}if(le===R.length)return n(z,I),be&&ra(z,le),P;if(I===null){for(;le<R.length;le++)I=G(z,R[le],Y),I!==null&&(j=c(I,j,le),he===null?P=I:he.sibling=I,he=I);return be&&ra(z,le),P}for(I=a(I);le<R.length;le++)We=D(I,z,le,R[le],Y),We!==null&&(e&&We.alternate!==null&&I.delete(We.key===null?le:We.key),j=c(We,j,le),he===null?P=We:he.sibling=We,he=We);return e&&I.forEach(function(Jn){return t(z,Jn)}),be&&ra(z,le),P}function ne(z,j,R,Y){if(R==null)throw Error(u(151));for(var P=null,he=null,I=j,le=j=0,We=null,xe=R.next();I!==null&&!xe.done;le++,xe=R.next()){I.index>le?(We=I,I=null):We=I.sibling;var Jn=C(z,I,xe.value,Y);if(Jn===null){I===null&&(I=We);break}e&&I&&Jn.alternate===null&&t(z,I),j=c(Jn,j,le),he===null?P=Jn:he.sibling=Jn,he=Jn,I=We}if(xe.done)return n(z,I),be&&ra(z,le),P;if(I===null){for(;!xe.done;le++,xe=R.next())xe=G(z,xe.value,Y),xe!==null&&(j=c(xe,j,le),he===null?P=xe:he.sibling=xe,he=xe);return be&&ra(z,le),P}for(I=a(I);!xe.done;le++,xe=R.next())xe=D(I,z,le,xe.value,Y),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?le:xe.key),j=c(xe,j,le),he===null?P=xe:he.sibling=xe,he=xe);return e&&I.forEach(function(Gy){return t(z,Gy)}),be&&ra(z,le),P}function Te(z,j,R,Y){if(typeof R=="object"&&R!==null&&R.type===A&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case T:e:{for(var P=R.key;j!==null;){if(j.key===P){if(P=R.type,P===A){if(j.tag===7){n(z,j.sibling),Y=r(j,R.props.children),Y.return=z,z=Y;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===se&&oh(P)===j.type){n(z,j.sibling),Y=r(j,R.props),ei(Y,R),Y.return=z,z=Y;break e}n(z,j);break}else t(z,j);j=j.sibling}R.type===A?(Y=la(R.props.children,z.mode,Y,R.key),Y.return=z,z=Y):(Y=ar(R.type,R.key,R.props,null,z.mode,Y),ei(Y,R),Y.return=z,z=Y)}return h(z);case B:e:{for(P=R.key;j!==null;){if(j.key===P)if(j.tag===4&&j.stateNode.containerInfo===R.containerInfo&&j.stateNode.implementation===R.implementation){n(z,j.sibling),Y=r(j,R.children||[]),Y.return=z,z=Y;break e}else{n(z,j);break}else t(z,j);j=j.sibling}Y=ju(R,z.mode,Y),Y.return=z,z=Y}return h(z);case se:return P=R._init,R=P(R._payload),Te(z,j,R,Y)}if(Re(R))return ie(z,j,R,Y);if(Ce(R)){if(P=Ce(R),typeof P!="function")throw Error(u(150));return R=P.call(R),ne(z,j,R,Y)}if(typeof R.then=="function")return Te(z,j,vr(R),Y);if(R.$$typeof===q)return Te(z,j,or(z,R),Y);Sr(z,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,j!==null&&j.tag===6?(n(z,j.sibling),Y=r(j,R),Y.return=z,z=Y):(n(z,j),Y=Eu(R,z.mode,Y),Y.return=z,z=Y),h(z)):n(z,j)}return function(z,j,R,Y){try{Il=0;var P=Te(z,j,R,Y);return $a=null,P}catch(I){if(I===Vl||I===cr)throw I;var he=wt(29,I,null,z.mode);return he.lanes=Y,he.return=z,he}finally{}}}var Ja=uh(!0),ch=uh(!1),kt=Q(null),Wt=null;function Nn(e){var t=e.alternate;$(Ze,Ze.current&1),$(kt,e),Wt===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(Wt=e)}function sh(e){if(e.tag===22){if($(Ze,Ze.current),$(kt,e),Wt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Wt=e)}}else Un()}function Un(){$(Ze,Ze.current),$(kt,kt.current)}function pn(e){K(kt),Wt===e&&(Wt=null),K(Ze)}var Ze=Q(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Zc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ac(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),r=Dn(a);r.payload=t,n!=null&&(r.callback=n),t=_n(e,r,a),t!==null&&(zt(t,e,a),Zl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),r=Dn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=_n(e,r,a),t!==null&&(zt(t,e,a),Zl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=Dn(n);a.tag=2,t!=null&&(a.callback=t),t=_n(e,a,n),t!==null&&(zt(t,e,n),Zl(t,e,n))}};function fh(e,t,n,a,r,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,h):t.prototype&&t.prototype.isPureReactComponent?!Bl(n,a)||!Bl(r,c):!0}function dh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function ha(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hh(e){Er(e)}function mh(e){console.error(e)}function ph(e){Er(e)}function jr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function gh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ic(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){jr(e,t)},n}function yh(e){return e=Dn(e),e.tag=3,e}function xh(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=a.value;e.payload=function(){return r(c)},e.callback=function(){gh(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){gh(t,n,a),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function G1(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Yl(t,n,r,!0),n=kt.current,n!==null){switch(n.tag){case 13:return Wt===null?Oc():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Dc(e,a,r)),!1;case 22:return n.flags|=65536,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Dc(e,a,r)),!1}throw Error(u(435,n.tag))}return Dc(e,a,r),Oc(),!1}if(be)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==zu&&(e=Error(u(422),{cause:a}),ql(Nt(e,n)))):(a!==zu&&(t=Error(u(423),{cause:a}),ql(Nt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Nt(a,n),r=ic(e.stateNode,a,r),Hu(e,r),ke!==4&&(ke=2)),!1;var c=Error(u(520),{cause:a});if(c=Nt(c,n),oi===null?oi=[c]:oi.push(c),ke!==4&&(ke=2),t===null)return!0;a=Nt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ic(n.stateNode,a,e),Hu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Yn===null||!Yn.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=yh(r),xh(r,e,n,a),Hu(n,r),!1}n=n.return}while(n!==null);return!1}var bh=Error(u(461)),Fe=!1;function et(e,t,n,a){t.child=e===null?ch(t,null,n,a):Ja(t,e.child,n,a)}function vh(e,t,n,a,r){n=n.render;var c=t.ref;if("ref"in a){var h={};for(var g in a)g!=="ref"&&(h[g]=a[g])}else h=a;return sa(t),a=Gu(e,t,n,h,c,r),g=Qu(),e!==null&&!Fe?(Vu(e,t,r),gn(e,t,r)):(be&&g&&Au(t),t.flags|=1,et(e,t,a,r),t.child)}function Sh(e,t,n,a,r){if(e===null){var c=n.type;return typeof c=="function"&&!wu(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,wh(e,t,c,a,r)):(e=ar(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!hc(e,r)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(h,a)&&e.ref===t.ref)return gn(e,t,r)}return t.flags|=1,e=cn(c,a),e.ref=t.ref,e.return=t,t.child=e}function wh(e,t,n,a,r){if(e!==null){var c=e.memoizedProps;if(Bl(c,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=c,hc(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,gn(e,t,r)}return rc(e,t,n,a,r)}function Eh(e,t,n){var a=t.pendingProps,r=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;t.childLanes=c&~a}else t.childLanes=0,t.child=null;return jh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,c!==null?c.cachePool:null),c!==null?wd(t,c):Lu(),sh(t);else return t.lanes=t.childLanes=536870912,jh(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(ur(t,c.cachePool),wd(t,c),Un(),t.memoizedState=null):(e!==null&&ur(t,null),Lu(),Un());return et(e,t,r,n),t.child}function jh(e,t,n,a){var r=Mu();return r=r===null?null:{parent:Xe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&ur(t,null),Lu(),sh(t),e!==null&&Yl(e,t,a,!0),null}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function rc(e,t,n,a,r){return sa(t),n=Gu(e,t,n,a,void 0,r),a=Qu(),e!==null&&!Fe?(Vu(e,t,r),gn(e,t,r)):(be&&a&&Au(t),t.flags|=1,et(e,t,n,r),t.child)}function Ah(e,t,n,a,r,c){return sa(t),t.updateQueue=null,n=jd(t,a,n,r),Ed(e),a=Qu(),e!==null&&!Fe?(Vu(e,t,c),gn(e,t,c)):(be&&a&&Au(t),t.flags|=1,et(e,t,n,c),t.child)}function Th(e,t,n,a,r){if(sa(t),t.stateNode===null){var c=La,h=n.contextType;typeof h=="object"&&h!==null&&(c=rt(h)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},Uu(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?rt(h):La,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ac(t,n,h,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&lc.enqueueReplaceState(c,c.state,null),$l(t,a,c,r),Kl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,v=ha(n,g);c.props=v;var O=c.context,L=n.contextType;h=La,typeof L=="object"&&L!==null&&(h=rt(L));var G=n.getDerivedStateFromProps;L=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||O!==h)&&dh(t,c,a,h),Cn=!1;var C=t.memoizedState;c.state=C,$l(t,a,c,r),Kl(),O=t.memoizedState,g||C!==O||Cn?(typeof G=="function"&&(ac(t,n,G,a),O=t.memoizedState),(v=Cn||fh(t,n,v,a,C,O,h))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),c.props=a,c.state=O,c.context=h,a=v):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Bu(e,t),h=t.memoizedProps,L=ha(n,h),c.props=L,G=t.pendingProps,C=c.context,O=n.contextType,v=La,typeof O=="object"&&O!==null&&(v=rt(O)),g=n.getDerivedStateFromProps,(O=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==G||C!==v)&&dh(t,c,a,v),Cn=!1,C=t.memoizedState,c.state=C,$l(t,a,c,r),Kl();var D=t.memoizedState;h!==G||C!==D||Cn||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof g=="function"&&(ac(t,n,g,a),D=t.memoizedState),(L=Cn||fh(t,n,L,a,C,D,v)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,D,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,D,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),c.props=a,c.state=D,c.context=v,a=L):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Ar(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=Ja(t,e.child,null,r),t.child=Ja(t,null,n,r)):et(e,t,n,r),t.memoizedState=c.state,e=t.child):e=gn(e,t,r),e}function zh(e,t,n,a){return Ll(),t.flags|=256,et(e,t,n,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:md()}}function cc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Rh(e,t,n){var a=t.pendingProps,r=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(r?Nn(t):Un(),be){var g=He,v;if(v=g){e:{for(v=g,g=Pt;v.nodeType!==8;){if(!g){g=null;break e}if(v=Xt(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(t.memoizedState={dehydrated:g,treeContext:ia!==null?{id:sn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},v=wt(18,null,null,0),v.stateNode=g,v.return=t,t.child=v,st=t,He=null,v=!0):v=!1}v||ua(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Zc(g)?t.lanes=32:t.lanes=536870912,null;pn(t)}return g=a.children,a=a.fallback,r?(Un(),r=t.mode,g=Tr({mode:"hidden",children:g},r),a=la(a,r,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,r=t.child,r.memoizedState=uc(n),r.childLanes=cc(e,h,n),t.memoizedState=oc,a):(Nn(t),sc(t,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(c)t.flags&256?(Nn(t),t.flags&=-257,t=fc(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),r=a.fallback,g=t.mode,a=Tr({mode:"visible",children:a.children},g),r=la(r,g,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Ja(t,e.child,null,n),a=t.child,a.memoizedState=uc(n),a.childLanes=cc(e,h,n),t.memoizedState=oc,t=r);else if(Nn(t),Zc(g)){if(h=g.nextSibling&&g.nextSibling.dataset,h)var O=h.dgst;h=O,a=Error(u(419)),a.stack="",a.digest=h,ql({value:a,source:null,stack:null}),t=fc(e,t,n)}else if(Fe||Yl(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=Oe,h!==null&&(a=n&-n,a=(a&42)!==0?1:Ko(a),a=(a&(h.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,ka(e,a),zt(h,e,a),bh;g.data==="$?"||Oc(),t=fc(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,He=Xt(g.nextSibling),st=t,be=!0,oa=null,Pt=!1,e!==null&&(Bt[Ht++]=sn,Bt[Ht++]=fn,Bt[Ht++]=ia,sn=e.id,fn=e.overflow,ia=t),t=sc(t,a.children),t.flags|=4096);return t}return r?(Un(),r=a.fallback,g=t.mode,v=e.child,O=v.sibling,a=cn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,O!==null?r=cn(O,r):(r=la(r,g,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,g=e.child.memoizedState,g===null?g=uc(n):(v=g.cachePool,v!==null?(O=Xe._currentValue,v=v.parent!==O?{parent:O,pool:O}:v):v=md(),g={baseLanes:g.baseLanes|n,cachePool:v}),r.memoizedState=g,r.childLanes=cc(e,h,n),t.memoizedState=oc,a):(Nn(t),n=e.child,e=n.sibling,n=cn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function sc(e,t){return t=Tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Tr(e,t){return e=wt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,t,n){return Ja(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ou(e.return,t,n)}function dc(e,t,n,a,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=r)}function Ch(e,t,n){var a=t.pendingProps,r=a.revealOrder,c=a.tail;if(et(e,t,a.children,n),a=Ze.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch($(Ze,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&wr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),dc(t,!1,r,n,c);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&wr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}dc(t,!0,n,null,c);break;case"together":dc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function Q1(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),On(t,Xe,e.memoizedState.cache),Ll();break;case 27:case 5:Wn(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:On(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rh(e,t,n):(Nn(t),e=gn(e,t,n),e!==null?e.sibling:null);Nn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Yl(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Ch(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(Ze,Ze.current),a)break;return null;case 22:case 23:return t.lanes=0,Eh(e,t,n);case 24:On(t,Xe,e.memoizedState.cache)}return gn(e,t,n)}function Dh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!hc(e,n)&&(t.flags&128)===0)return Fe=!1,Q1(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,be&&(t.flags&1048576)!==0&&od(t,ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")wu(a)?(e=ha(a,e),t.tag=1,t=Th(null,t,a,e,n)):(t.tag=0,t=rc(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===F){t.tag=11,t=vh(null,t,a,e,n);break e}else if(r===J){t.tag=14,t=Sh(null,t,a,e,n);break e}}throw t=at(a)||a,Error(u(306,t,""))}}return t;case 0:return rc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=ha(a,t.pendingProps),Th(e,t,a,r,n);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var c=t.memoizedState;r=c.element,Bu(e,t),$l(t,a,null,n);var h=t.memoizedState;if(a=h.cache,On(t,Xe,a),a!==c.cache&&Cu(t,[Xe],n,!0),Kl(),a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=zh(e,t,a,n);break e}else if(a!==r){r=Nt(Error(u(424)),t),ql(r),t=zh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Xt(e.firstChild),st=t,be=!0,oa=null,Pt=!0,n=ch(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ll(),a===r){t=gn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=Um(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(n=t.type,e=t.pendingProps,a=qr(ae.current).createElement(n),a[it]=t,a[ft]=e,nt(a,n,e),Je(a),t.stateNode=a):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wn(t),e===null&&be&&(a=t.stateNode=_m(t.type,t.pendingProps,ae.current),st=t,Pt=!0,r=He,Vn(t.type)?(Kc=r,He=Xt(a.firstChild)):He=r),et(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((r=a=He)&&(a=yy(a,t.type,t.pendingProps,Pt),a!==null?(t.stateNode=a,st=t,He=Xt(a.firstChild),Pt=!1,r=!0):r=!1),r||ua(t)),Wn(t),r=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,a=c.children,Qc(r,c)?a=null:h!==null&&Qc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=Gu(e,t,U1,null,null,n),gi._currentValue=r),Ar(e,t),et(e,t,a,n),t.child;case 6:return e===null&&be&&((e=n=He)&&(n=xy(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,st=t,He=null,e=!0):e=!1),e||ua(t)),null;case 13:return Rh(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ja(t,null,a,n):et(e,t,a,n),t.child;case 11:return vh(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,On(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,sa(t),r=rt(r),a=a(r),t.flags|=1,et(e,t,a,n),t.child;case 14:return Sh(e,t,t.type,t.pendingProps,n);case 15:return wh(e,t,t.type,t.pendingProps,n);case 19:return Ch(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Tr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=cn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Eh(e,t,n);case 24:return sa(t),a=rt(Xe),e===null?(r=Mu(),r===null&&(r=Oe,c=Du(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:a,cache:r},Uu(t),On(t,Xe,r)):((e.lanes&n)!==0&&(Bu(e,t),$l(t,null,null,n),Kl()),r=e.memoizedState,c=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),On(t,Xe,a)):(a=c.cache,On(t,Xe,a),a!==r.cache&&Cu(t,[Xe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function yn(e){e.flags|=4}function _h(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qm(t)){if(t=kt.current,t!==null&&((ye&4194048)===ye?Wt!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==Wt))throw Xl=Nu,pd;e.flags|=8192}}function zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sf():536870912,e.lanes|=t,Ia|=t)}function ti(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function V1(e,t,n){var a=t.pendingProps;switch(Tu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),hn(Xe),lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kl(t)?yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sd())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(yn(t),n!==null?(Ue(t),_h(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(yn(t),Ue(t),_h(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==a&&yn(t),Ue(t),t.flags&=-16777217),null;case 27:rn(t),n=ae.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ue(t),null}e=te.current,kl(t)?ud(t):(e=_m(r,a,n),t.stateNode=e,yn(t))}return Ue(t),null;case 5:if(rn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ue(t),null}if(e=te.current,kl(t))ud(t);else{switch(r=qr(ae.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[it]=t,e[ft]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(nt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,kl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=st,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Am(e.nodeValue,n)),e||ua(t)}else e=qr(e).createTextNode(a),e[it]=t,t.stateNode=e}return Ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=kl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[it]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(pn(t),t):(pn(t),null)}if(pn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),zr(t,t.updateQueue),Ue(t),null;case 4:return lt(),e===null&&kc(t.stateNode.containerInfo),Ue(t),null;case 10:return hn(t.type),Ue(t),null;case 19:if(K(Ze),r=t.memoizedState,r===null)return Ue(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)ti(r,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=wr(e),c!==null){for(t.flags|=128,ti(r,!1),e=c.updateQueue,t.updateQueue=e,zr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rd(n,e),n=n.sibling;return $(Ze,Ze.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ft()>Cr&&(t.flags|=128,a=!0,ti(r,!1),t.lanes=4194304)}else{if(!a)if(e=wr(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zr(t,e),ti(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!be)return Ue(t),null}else 2*Ft()-r.renderingStartTime>Cr&&n!==536870912&&(t.flags|=128,a=!0,ti(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ft(),t.sibling=null,e=Ze.current,$(Ze,a?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return pn(t),qu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&zr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&K(fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hn(Xe),Ue(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function X1(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(Xe),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rn(t),null;case 13:if(pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Ze),null;case 4:return lt(),null;case 10:return hn(t.type),null;case 22:case 23:return pn(t),qu(),e!==null&&K(fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hn(Xe),null;case 25:return null;default:return null}}function Mh(e,t){switch(Tu(t),t.tag){case 3:hn(Xe),lt();break;case 26:case 27:case 5:rn(t);break;case 4:lt();break;case 13:pn(t);break;case 19:K(Ze);break;case 10:hn(t.type);break;case 22:case 23:pn(t),qu(),e!==null&&K(fa);break;case 24:hn(Xe)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var c=n.create,h=n.inst;a=c(),h.destroy=a}n=n.next}while(n!==r)}}catch(g){ze(t,t.return,g)}}function Bn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){var h=a.inst,g=h.destroy;if(g!==void 0){h.destroy=void 0,r=t;var v=n,O=g;try{O()}catch(L){ze(r,v,L)}}}a=a.next}while(a!==c)}}catch(L){ze(t,t.return,L)}}function Nh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Sd(t,n)}catch(a){ze(e,e.return,a)}}}function Uh(e,t,n){n.props=ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){ze(e,t,r)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Bh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){ze(e,e.return,r)}}function mc(e,t,n){try{var a=e.stateNode;dy(a,e.type,n,t),a[ft]=t}catch(r){ze(e,e.return,r)}}function Hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vn(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lr));else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function kh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);nt(t,a,n),t[it]=e,t[ft]=n}catch(c){ze(e,e.return,c)}}var xn=!1,qe=!1,yc=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Z1(e,t){if(e=e.containerInfo,Yc=Zr,e=Ff(e),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,g=-1,v=-1,O=0,L=0,G=e,C=null;t:for(;;){for(var D;G!==n||r!==0&&G.nodeType!==3||(g=h+r),G!==c||a!==0&&G.nodeType!==3||(v=h+a),G.nodeType===3&&(h+=G.nodeValue.length),(D=G.firstChild)!==null;)C=G,G=D;for(;;){if(G===e)break t;if(C===n&&++O===r&&(g=h),C===c&&++L===a&&(v=h),(D=G.nextSibling)!==null)break;G=C,C=G.parentNode}G=D}n=g===-1||v===-1?null:{start:g,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gc={focusedElem:e,selectionRange:n},Zr=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var ie=ha(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function qh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&ni(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){ze(n,n.return,h)}else{var r=ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ze(n,n.return,h)}}a&64&&Nh(n),a&512&&ai(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Sd(e,t)}catch(h){ze(n,n.return,h)}}break;case 27:t===null&&a&4&&kh(n);case 26:case 5:Hn(e,n),t===null&&a&4&&Bh(n),a&512&&ai(n,n.return);break;case 12:Hn(e,n);break;case 13:Hn(e,n),a&4&&Qh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ty.bind(null,n),by(e,n))));break;case 22:if(a=n.memoizedState!==null||xn,!a){t=t!==null&&t.memoizedState!==null||qe,r=xn;var c=qe;xn=a,(qe=t)&&!c?kn(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),xn=r,qe=c}break;case 30:break;default:Hn(e,n)}}function Yh(e){var t=e.alternate;t!==null&&(e.alternate=null,Yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,mt=!1;function bn(e,t,n){for(n=n.child;n!==null;)Gh(e,t,n),n=n.sibling}function Gh(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 26:qe||It(n,t),bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||It(n,t);var a=Me,r=mt;Vn(n.type)&&(Me=n.stateNode,mt=!1),bn(e,t,n),di(n.stateNode),Me=a,mt=r;break;case 5:qe||It(n,t);case 6:if(a=Me,r=mt,Me=null,bn(e,t,n),Me=a,mt=r,Me!==null)if(mt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(c){ze(n,t,c)}else try{Me.removeChild(n.stateNode)}catch(c){ze(n,t,c)}break;case 18:Me!==null&&(mt?(e=Me,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vi(e)):Cm(Me,n.stateNode));break;case 4:a=Me,r=mt,Me=n.stateNode.containerInfo,mt=!0,bn(e,t,n),Me=a,mt=r;break;case 0:case 11:case 14:case 15:qe||Bn(2,n,t),qe||Bn(4,n,t),bn(e,t,n);break;case 1:qe||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Uh(n,t,a)),bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,bn(e,t,n),qe=a;break;default:bn(e,t,n)}}function Qh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(n){ze(t,t.return,n)}}function K1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lh),t;default:throw Error(u(435,e.tag))}}function xc(e,t){var n=K1(e);t.forEach(function(a){var r=ny.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function Et(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],c=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 27:if(Vn(g.type)){Me=g.stateNode,mt=!1;break e}break;case 5:Me=g.stateNode,mt=!1;break e;case 3:case 4:Me=g.stateNode.containerInfo,mt=!0;break e}g=g.return}if(Me===null)throw Error(u(160));Gh(c,h,r),Me=null,mt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Vh(t,e),t=t.sibling}var Vt=null;function Vh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),jt(e),a&4&&(Bn(3,e,e.return),ni(3,e),Bn(5,e,e.return));break;case 1:Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),a&64&&xn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Vt;if(Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":c=r.getElementsByTagName("title")[0],(!c||c[zl]||c[it]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(a),r.head.insertBefore(c,r.querySelector("head > title"))),nt(c,a,n),c[it]=e,Je(c),a=c;break e;case"link":var h=km("link","href",r).get(a+(n.href||""));if(h){for(var g=0;g<h.length;g++)if(c=h[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(g,1);break t}}c=r.createElement(a),nt(c,a,n),r.head.appendChild(c);break;case"meta":if(h=km("meta","content",r).get(a+(n.content||""))){for(g=0;g<h.length;g++)if(c=h[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(g,1);break t}}c=r.createElement(a),nt(c,a,n),r.head.appendChild(c);break;default:throw Error(u(468,a))}c[it]=e,Je(c),a=c}e.stateNode=a}else Lm(r,e.type,e.stateNode);else e.stateNode=Hm(r,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?Lm(r,e.type,e.stateNode):Hm(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),n!==null&&a&4&&mc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),e.flags&32){r=e.stateNode;try{Da(r,"")}catch(D){ze(e,e.return,D)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,mc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(yc=!0);break;case 6:if(Et(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(D){ze(e,e.return,D)}}break;case 3:if(Qr=null,r=Vt,Vt=Yr(t.containerInfo),Et(t,e),Vt=r,jt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(D){ze(e,e.return,D)}yc&&(yc=!1,Xh(e));break;case 4:a=Vt,Vt=Yr(e.stateNode.containerInfo),Et(t,e),jt(e),Vt=a;break;case 12:Et(t,e),jt(e);break;case 13:Et(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jc=Ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,xc(e,a)));break;case 22:r=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,O=xn,L=qe;if(xn=O||r,qe=L||v,Et(t,e),qe=L,xn=O,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||v||xn||qe||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(c=v.stateNode,r)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{g=v.stateNode;var G=v.memoizedProps.style,C=G!=null&&G.hasOwnProperty("display")?G.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(D){ze(v,v.return,D)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(D){ze(v,v.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,xc(e,n))));break;case 19:Et(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,xc(e,a)));break;case 30:break;case 21:break;default:Et(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Hh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,c=pc(e);Rr(e,c,r);break;case 5:var h=n.stateNode;n.flags&32&&(Da(h,""),n.flags&=-33);var g=pc(e);Rr(e,g,h);break;case 3:case 4:var v=n.stateNode.containerInfo,O=pc(e);gc(e,O,v);break;default:throw Error(u(161))}}catch(L){ze(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qh(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),ma(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Uh(t,t.return,n),ma(t);break;case 27:di(t.stateNode);case 26:case 5:It(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:kn(r,c,n),ni(4,c);break;case 1:if(kn(r,c,n),a=c,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){ze(a,a.return,O)}if(a=c,r=a.updateQueue,r!==null){var g=a.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)vd(v[r],g)}catch(O){ze(a,a.return,O)}}n&&h&64&&Nh(c),ai(c,c.return);break;case 27:kh(c);case 26:case 5:kn(r,c,n),n&&a===null&&h&4&&Bh(c),ai(c,c.return);break;case 12:kn(r,c,n);break;case 13:kn(r,c,n),n&&h&4&&Qh(r,c);break;case 22:c.memoizedState===null&&kn(r,c,n),ai(c,c.return);break;case 30:break;default:kn(r,c,n)}t=t.sibling}}function bc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Gl(n))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zh(e,t,n,a),t=t.sibling}function Zh(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),r&2048&&ni(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(r&2048){en(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,g=c.onPostCommit;typeof g=="function"&&g(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ze(t,t.return,v)}}else en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?en(e,t,n,a):li(e,t):c._visibility&2?en(e,t,n,a):(c._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&bc(h,t);break;case 24:en(e,t,n,a),r&2048&&vc(t.alternate,t);break;default:en(e,t,n,a)}}function Fa(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,h=t,g=n,v=a,O=h.flags;switch(h.tag){case 0:case 11:case 15:Fa(c,h,g,v,r),ni(8,h);break;case 23:break;case 22:var L=h.stateNode;h.memoizedState!==null?L._visibility&2?Fa(c,h,g,v,r):li(c,h):(L._visibility|=2,Fa(c,h,g,v,r)),r&&O&2048&&bc(h.alternate,h);break;case 24:Fa(c,h,g,v,r),r&&O&2048&&vc(h.alternate,h);break;default:Fa(c,h,g,v,r)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:li(n,a),r&2048&&bc(a.alternate,a);break;case 24:li(n,a),r&2048&&vc(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ii=8192;function Pa(e){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)Kh(e),e=e.sibling}function Kh(e){switch(e.tag){case 26:Pa(e),e.flags&ii&&e.memoizedState!==null&&_y(Vt,e.memoizedState,e.memoizedProps);break;case 5:Pa(e);break;case 3:case 4:var t=Vt;Vt=Yr(e.stateNode.containerInfo),Pa(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ii,ii=16777216,Pa(e),ii=t):Pa(e));break;default:Pa(e)}}function $h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Fh(a,e)}$h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jh(e),e=e.sibling}function Jh(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Or(e)):ri(e);break;default:ri(e)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Fh(a,e)}$h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),Or(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Or(t));break;default:Or(t)}e=e.sibling}}function Fh(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pe=a;else e:for(n=e;Pe!==null;){a=Pe;var r=a.sibling,c=a.return;if(Yh(a),a===n){Pe=null;break e}if(r!==null){r.return=c,Pe=r;break e}Pe=c}}}var $1={getCacheForType:function(e){var t=rt(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},J1=typeof WeakMap=="function"?WeakMap:Map,we=0,Oe=null,pe=null,ye=0,Ee=0,At=null,Ln=!1,Wa=!1,Sc=!1,vn=0,ke=0,qn=0,pa=0,wc=0,Lt=0,Ia=0,oi=null,pt=null,Ec=!1,jc=0,Cr=1/0,Dr=null,Yn=null,tt=0,Gn=null,el=null,tl=0,Ac=0,Tc=null,Ph=null,ui=0,zc=null;function Tt(){if((we&2)!==0&&ye!==0)return ye&-ye;if(k.T!==null){var e=Ga;return e!==0?e:Nc()}return hf()}function Wh(){Lt===0&&(Lt=(ye&536870912)===0||be?cf():536870912);var e=kt.current;return e!==null&&(e.flags|=32),Lt}function zt(e,t,n){(e===Oe&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(nl(e,0),Qn(e,ye,Lt,!1)),Tl(e,n),((we&2)===0||e!==Oe)&&(e===Oe&&((we&2)===0&&(pa|=n),ke===4&&Qn(e,ye,Lt,!1)),tn(e))}function Ih(e,t,n){if((we&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Al(e,t),r=a?W1(e,t):Cc(e,t,!0),c=a;do{if(r===0){Wa&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!F1(n)){r=Cc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var g=e;r=oi;var v=g.current.memoizedState.isDehydrated;if(v&&(nl(g,h).flags|=256),h=Cc(g,h,!1),h!==2){if(Sc&&!v){g.errorRecoveryDisabledLanes|=c,pa|=c,r=4;break e}c=pt,pt=r,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}r=h}if(c=!1,r!==2)continue}}if(r===1){nl(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,c=r,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Lt,!Ln);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=jc+300-Ft(),10<r)){if(Qn(a,t,Lt,!Ln),Gi(a,0,!0)!==0)break e;a.timeoutHandle=Rm(em.bind(null,a,n,pt,Dr,Ec,t,Lt,pa,Ia,Ln,c,2,-0,0),r);break e}em(a,n,pt,Dr,Ec,t,Lt,pa,Ia,Ln,c,0,-0,0)}}break}while(!0);tn(e)}function em(e,t,n,a,r,c,h,g,v,O,L,G,C,D){if(e.timeoutHandle=-1,G=t.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(pi={stylesheets:null,count:0,unsuspend:Dy},Kh(t),G=My(),G!==null)){e.cancelPendingCommit=G(om.bind(null,e,t,c,n,a,r,h,g,v,L,1,C,D)),Qn(e,c,h,!O);return}om(e,t,c,n,a,r,h,g,v)}function F1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],c=r.getSnapshot;r=r.value;try{if(!St(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~wc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var c=31-vt(r),h=1<<c;a[c]=-1,r&=~h}n!==0&&ff(e,n,t)}function _r(){return(we&6)===0?(ci(0),!1):!0}function Rc(){if(pe!==null){if(Ee===0)var e=pe.return;else e=pe,dn=ca=null,Xu(e),$a=null,Il=0,e=pe;for(;e!==null;)Mh(e.alternate,e),e=e.return;pe=null}}function nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,my(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rc(),Oe=e,pe=n=cn(e.current,null),ye=t,Ee=0,At=null,Ln=!1,Wa=Al(e,t),Sc=!1,Ia=Lt=wc=pa=qn=ke=0,pt=oi=null,Ec=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-vt(a),c=1<<r;t|=e[r],a&=~c}return vn=t,er(),n}function tm(e,t){fe=null,k.H=br,t===Vl||t===cr?(t=xd(),Ee=3):t===pd?(t=xd(),Ee=4):Ee=t===bh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,pe===null&&(ke=1,jr(e,Nt(t,e.current)))}function nm(){var e=k.H;return k.H=br,e===null?br:e}function am(){var e=k.A;return k.A=$1,e}function Oc(){ke=4,Ln||(ye&4194048)!==ye&&kt.current!==null||(Wa=!0),(qn&134217727)===0&&(pa&134217727)===0||Oe===null||Qn(Oe,ye,Lt,!1)}function Cc(e,t,n){var a=we;we|=2;var r=nm(),c=am();(Oe!==e||ye!==t)&&(Dr=null,nl(e,t)),t=!1;var h=ke;e:do try{if(Ee!==0&&pe!==null){var g=pe,v=At;switch(Ee){case 8:Rc(),h=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var O=Ee;if(Ee=0,At=null,al(e,g,v,O),n&&Wa){h=0;break e}break;default:O=Ee,Ee=0,At=null,al(e,g,v,O)}}P1(),h=ke;break}catch(L){tm(e,L)}while(!0);return t&&e.shellSuspendCounter++,dn=ca=null,we=a,k.H=r,k.A=c,pe===null&&(Oe=null,ye=0,er()),h}function P1(){for(;pe!==null;)lm(pe)}function W1(e,t){var n=we;we|=2;var a=nm(),r=am();Oe!==e||ye!==t?(Dr=null,Cr=Ft()+500,nl(e,t)):Wa=Al(e,t);e:do try{if(Ee!==0&&pe!==null){t=pe;var c=At;t:switch(Ee){case 1:Ee=0,At=null,al(e,t,c,1);break;case 2:case 9:if(gd(c)){Ee=0,At=null,im(t);break}t=function(){Ee!==2&&Ee!==9||Oe!==e||(Ee=7),tn(e)},c.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:gd(c)?(Ee=0,At=null,im(t)):(Ee=0,At=null,al(e,t,c,7));break;case 5:var h=null;switch(pe.tag){case 26:h=pe.memoizedState;case 5:case 27:var g=pe;if(!h||qm(h)){Ee=0,At=null;var v=g.sibling;if(v!==null)pe=v;else{var O=g.return;O!==null?(pe=O,Mr(O)):pe=null}break t}}Ee=0,At=null,al(e,t,c,5);break;case 6:Ee=0,At=null,al(e,t,c,6);break;case 8:Rc(),ke=6;break e;default:throw Error(u(462))}}I1();break}catch(L){tm(e,L)}while(!0);return dn=ca=null,k.H=a,k.A=r,we=n,pe!==null?0:(Oe=null,ye=0,er(),ke)}function I1(){for(;pe!==null&&!Sg();)lm(pe)}function lm(e){var t=Dh(e.alternate,e,vn);e.memoizedProps=e.pendingProps,t===null?Mr(e):pe=t}function im(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ah(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Ah(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Xu(t);default:Mh(n,t),t=pe=rd(t,vn),t=Dh(n,t,vn)}e.memoizedProps=e.pendingProps,t===null?Mr(e):pe=t}function al(e,t,n,a){dn=ca=null,Xu(t),$a=null,Il=0;var r=t.return;try{if(G1(e,r,t,n,ye)){ke=1,jr(e,Nt(n,e.current)),pe=null;return}}catch(c){if(r!==null)throw pe=r,c;ke=1,jr(e,Nt(n,e.current)),pe=null;return}t.flags&32768?(be||a===1?e=!0:Wa||(ye&536870912)!==0?e=!1:(Ln=e=!0,(a===2||a===9||a===3||a===6)&&(a=kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),rm(t,e)):Mr(t)}function Mr(e){var t=e;do{if((t.flags&32768)!==0){rm(t,Ln);return}e=t.return;var n=V1(t.alternate,t,vn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ke===0&&(ke=5)}function rm(e,t){do{var n=X1(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);ke=6,pe=null}function om(e,t,n,a,r,c,h,g,v){e.cancelPendingCommit=null;do Nr();while(tt!==0);if((we&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(c=t.lanes|t.childLanes,c|=vu,Dg(e,n,c,h,g,v),e===Oe&&(pe=Oe=null,ye=0),el=t,Gn=e,tl=n,Ac=c,Tc=r,Ph=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ay(Li,function(){return dm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,r=Z.p,Z.p=2,h=we,we|=4;try{Z1(e,t,n)}finally{we=h,Z.p=r,k.T=a}}tt=1,um(),cm(),sm()}}function um(){if(tt===1){tt=0;var e=Gn,t=el,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var r=we;we|=4;try{Vh(t,e);var c=Gc,h=Ff(e.containerInfo),g=c.focusedElem,v=c.selectionRange;if(h!==g&&g&&g.ownerDocument&&Jf(g.ownerDocument.documentElement,g)){if(v!==null&&pu(g)){var O=v.start,L=v.end;if(L===void 0&&(L=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(L,g.value.length);else{var G=g.ownerDocument||document,C=G&&G.defaultView||window;if(C.getSelection){var D=C.getSelection(),ie=g.textContent.length,ne=Math.min(v.start,ie),Te=v.end===void 0?ne:Math.min(v.end,ie);!D.extend&&ne>Te&&(h=Te,Te=ne,ne=h);var z=$f(g,ne),j=$f(g,Te);if(z&&j&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==j.node||D.focusOffset!==j.offset)){var R=G.createRange();R.setStart(z.node,z.offset),D.removeAllRanges(),ne>Te?(D.addRange(R),D.extend(j.node,j.offset)):(R.setEnd(j.node,j.offset),D.addRange(R))}}}}for(G=[],D=g;D=D.parentNode;)D.nodeType===1&&G.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<G.length;g++){var Y=G[g];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Zr=!!Yc,Gc=Yc=null}finally{we=r,Z.p=a,k.T=n}}e.current=t,tt=2}}function cm(){if(tt===2){tt=0;var e=Gn,t=el,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var r=we;we|=4;try{qh(e,t.alternate,t)}finally{we=r,Z.p=a,k.T=n}}tt=3}}function sm(){if(tt===4||tt===3){tt=0,wg();var e=Gn,t=el,n=tl,a=Ph;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,el=Gn=null,fm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Yn=null),$o(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,r=Z.p,Z.p=2,k.T=null;try{for(var c=e.onRecoverableError,h=0;h<a.length;h++){var g=a[h];c(g.value,{componentStack:g.stack})}}finally{k.T=t,Z.p=r}}(tl&3)!==0&&Nr(),tn(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===zc?ui++:(ui=0,zc=e):ui=0,ci(0)}}function fm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function Nr(e){return um(),cm(),sm(),dm()}function dm(){if(tt!==5)return!1;var e=Gn,t=Ac;Ac=0;var n=$o(tl),a=k.T,r=Z.p;try{Z.p=32>n?32:n,k.T=null,n=Tc,Tc=null;var c=Gn,h=tl;if(tt=0,el=Gn=null,tl=0,(we&6)!==0)throw Error(u(331));var g=we;if(we|=4,Jh(c.current),Zh(c,c.current,h,n),we=g,ci(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(jl,c)}catch{}return!0}finally{Z.p=r,k.T=a,fm(e,t)}}function hm(e,t,n){t=Nt(n,t),t=ic(e.stateNode,t,2),e=_n(e,t,2),e!==null&&(Tl(e,2),tn(e))}function ze(e,t,n){if(e.tag===3)hm(e,e,n);else for(;t!==null;){if(t.tag===3){hm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yn===null||!Yn.has(a))){e=Nt(n,e),n=yh(2),a=_n(t,n,2),a!==null&&(xh(n,a,t,e),Tl(a,2),tn(a));break}}t=t.return}}function Dc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new J1;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Sc=!0,r.add(n),e=ey.bind(null,e,t,n),t.then(e,e))}function ey(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(ye&n)===n&&(ke===4||ke===3&&(ye&62914560)===ye&&300>Ft()-jc?(we&2)===0&&nl(e,0):wc|=n,Ia===ye&&(Ia=0)),tn(e)}function mm(e,t){t===0&&(t=sf()),e=ka(e,t),e!==null&&(Tl(e,t),tn(e))}function ty(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mm(e,n)}function ny(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),mm(e,n)}function ay(e,t){return Vo(e,t)}var Ur=null,ll=null,_c=!1,Br=!1,Mc=!1,ga=0;function tn(e){e!==ll&&e.next===null&&(ll===null?Ur=ll=e:ll=ll.next=e),Br=!0,_c||(_c=!0,iy())}function ci(e,t){if(!Mc&&Br){Mc=!0;do for(var n=!1,a=Ur;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var c=0;else{var h=a.suspendedLanes,g=a.pingedLanes;c=(1<<31-vt(42|e)+1)-1,c&=r&~(h&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,xm(a,c))}else c=ye,c=Gi(a,a===Oe?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||Al(a,c)||(n=!0,xm(a,c));a=a.next}while(n);Mc=!1}}function ly(){pm()}function pm(){Br=_c=!1;var e=0;ga!==0&&(hy()&&(e=ga),ga=0);for(var t=Ft(),n=null,a=Ur;a!==null;){var r=a.next,c=gm(a,t);c===0?(a.next=null,n===null?Ur=r:n.next=r,r===null&&(ll=n)):(n=a,(e!==0||(c&3)!==0)&&(Br=!0)),a=r}ci(e)}function gm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-vt(c),g=1<<h,v=r[h];v===-1?((g&n)===0||(g&a)!==0)&&(r[h]=Cg(g,t)):v<=t&&(e.expiredLanes|=g),c&=~g}if(t=Oe,n=ye,n=Gi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Al(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xo(a),$o(n)){case 2:case 8:n=of;break;case 32:n=Li;break;case 268435456:n=uf;break;default:n=Li}return a=ym.bind(null,e),n=Vo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xo(a),e.callbackPriority=2,e.callbackNode=null,2}function ym(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var a=ye;return a=Gi(e,e===Oe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ih(e,a,t),gm(e,Ft()),e.callbackNode!=null&&e.callbackNode===n?ym.bind(null,e):null)}function xm(e,t){if(Nr())return null;Ih(e,t,!0)}function iy(){py(function(){(we&6)!==0?Vo(rf,ly):pm()})}function Nc(){return ga===0&&(ga=cf()),ga}function bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function vm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ry(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var c=bm((r[ft]||null).action),h=a.submitter;h&&(t=(t=h[ft]||null)?bm(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var g=new Pi("action","action",null,a,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ga!==0){var v=h?vm(r,h):new FormData(r);ec(n,{pending:!0,data:v,method:r.method,action:c},null,v)}}else typeof c=="function"&&(g.preventDefault(),v=h?vm(r,h):new FormData(r),ec(n,{pending:!0,data:v,method:r.method,action:c},c,v))},currentTarget:r}]})}}for(var Uc=0;Uc<bu.length;Uc++){var Bc=bu[Uc],oy=Bc.toLowerCase(),uy=Bc[0].toUpperCase()+Bc.slice(1);Qt(oy,"on"+uy)}Qt(If,"onAnimationEnd"),Qt(ed,"onAnimationIteration"),Qt(td,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(A1,"onTransitionRun"),Qt(T1,"onTransitionStart"),Qt(z1,"onTransitionCancel"),Qt(nd,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var h=a.length-1;0<=h;h--){var g=a[h],v=g.instance,O=g.currentTarget;if(g=g.listener,v!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=O;try{c(r)}catch(L){Er(L)}r.currentTarget=null,c=v}else for(h=0;h<a.length;h++){if(g=a[h],v=g.instance,O=g.currentTarget,g=g.listener,v!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=O;try{c(r)}catch(L){Er(L)}r.currentTarget=null,c=v}}}}function ge(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var a=e+"__bubble";n.has(a)||(wm(t,e,2,!1),n.add(a))}function Hc(e,t,n){var a=0;t&&(a|=4),wm(n,e,a,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[Hr]){e[Hr]=!0,pf.forEach(function(n){n!=="selectionchange"&&(cy.has(n)||Hc(n,!1,e),Hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Hc("selectionchange",!1,t))}}function wm(e,t,n,a){switch(Zm(t)){case 2:var r=By;break;case 8:r=Hy;break;default:r=Wc}n=r.bind(null,t,n,e),r=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Lc(e,t,n,a,r){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var g=a.stateNode.containerInfo;if(g===r)break;if(h===4)for(h=a.return;h!==null;){var v=h.tag;if((v===3||v===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;g!==null;){if(h=Aa(g),h===null)return;if(v=h.tag,v===5||v===6||v===26||v===27){a=c=h;continue e}g=g.parentNode}}a=a.return}Of(function(){var O=c,L=lu(n),G=[];e:{var C=ad.get(e);if(C!==void 0){var D=Pi,ie=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":D=a1;break;case"focusin":ie="focus",D=su;break;case"focusout":ie="blur",D=su;break;case"beforeblur":case"afterblur":D=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=r1;break;case If:case ed:case td:D=$g;break;case nd:D=u1;break;case"scroll":case"scrollend":D=Qg;break;case"wheel":D=s1;break;case"copy":case"cut":case"paste":D=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Nf;break;case"toggle":case"beforetoggle":D=d1}var ne=(t&4)!==0,Te=!ne&&(e==="scroll"||e==="scrollend"),z=ne?C!==null?C+"Capture":null:C;ne=[];for(var j=O,R;j!==null;){var Y=j;if(R=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||R===null||z===null||(Y=Ol(j,z),Y!=null&&ne.push(fi(j,Y,R))),Te)break;j=j.return}0<ne.length&&(C=new D(C,ie,null,n,L),G.push({event:C,listeners:ne}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&n!==au&&(ie=n.relatedTarget||n.fromElement)&&(Aa(ie)||ie[ja]))break e;if((D||C)&&(C=L.window===L?L:(C=L.ownerDocument)?C.defaultView||C.parentWindow:window,D?(ie=n.relatedTarget||n.toElement,D=O,ie=ie?Aa(ie):null,ie!==null&&(Te=d(ie),ne=ie.tag,ie!==Te||ne!==5&&ne!==27&&ne!==6)&&(ie=null)):(D=null,ie=O),D!==ie)){if(ne=_f,Y="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Nf,Y="onPointerLeave",z="onPointerEnter",j="pointer"),Te=D==null?C:Rl(D),R=ie==null?C:Rl(ie),C=new ne(Y,j+"leave",D,n,L),C.target=Te,C.relatedTarget=R,Y=null,Aa(L)===O&&(ne=new ne(z,j+"enter",ie,n,L),ne.target=R,ne.relatedTarget=Te,Y=ne),Te=Y,D&&ie)t:{for(ne=D,z=ie,j=0,R=ne;R;R=il(R))j++;for(R=0,Y=z;Y;Y=il(Y))R++;for(;0<j-R;)ne=il(ne),j--;for(;0<R-j;)z=il(z),R--;for(;j--;){if(ne===z||z!==null&&ne===z.alternate)break t;ne=il(ne),z=il(z)}ne=null}else ne=null;D!==null&&Em(G,C,D,ne,!1),ie!==null&&Te!==null&&Em(G,Te,ie,ne,!0)}}e:{if(C=O?Rl(O):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var P=Gf;else if(qf(C))if(Qf)P=w1;else{P=v1;var he=b1}else D=C.nodeName,!D||D.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?O&&nu(O.elementType)&&(P=Gf):P=S1;if(P&&(P=P(e,O))){Yf(G,P,n,L);break e}he&&he(e,C,O),e==="focusout"&&O&&C.type==="number"&&O.memoizedProps.value!=null&&tu(C,"number",C.value)}switch(he=O?Rl(O):window,e){case"focusin":(qf(he)||he.contentEditable==="true")&&(Ua=he,gu=O,Hl=null);break;case"focusout":Hl=gu=Ua=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Pf(G,n,L);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":Pf(G,n,L)}var I;if(du)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Na?kf(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(Uf&&n.locale!=="ko"&&(Na||le!=="onCompositionStart"?le==="onCompositionEnd"&&Na&&(I=Cf()):(Rn=L,ou="value"in Rn?Rn.value:Rn.textContent,Na=!0)),he=kr(O,le),0<he.length&&(le=new Mf(le,e,null,n,L),G.push({event:le,listeners:he}),I?le.data=I:(I=Lf(n),I!==null&&(le.data=I)))),(I=m1?p1(e,n):g1(e,n))&&(le=kr(O,"onBeforeInput"),0<le.length&&(he=new Mf("onBeforeInput","beforeinput",null,n,L),G.push({event:he,listeners:le}),he.data=I)),ry(G,e,O,n,L)}Sm(G,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kr(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ol(e,n),r!=null&&a.unshift(fi(e,r,c)),r=Ol(e,t),r!=null&&a.push(fi(e,r,c))),e.tag===3)return a;e=e.return}return[]}function il(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Em(e,t,n,a,r){for(var c=t._reactName,h=[];n!==null&&n!==a;){var g=n,v=g.alternate,O=g.stateNode;if(g=g.tag,v!==null&&v===a)break;g!==5&&g!==26&&g!==27||O===null||(v=O,r?(O=Ol(n,c),O!=null&&h.unshift(fi(n,O,v))):r||(O=Ol(n,c),O!=null&&h.push(fi(n,O,v)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var sy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function jm(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(fy,"")}function Am(e,t){return t=jm(t),jm(e)===t}function Lr(){}function Ae(e,t,n,a,r,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Da(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Da(e,""+a);break;case"className":Vi(e,"class",a);break;case"tabIndex":Vi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,n,a);break;case"style":zf(e,a,c);break;case"data":if(t!=="object"){Vi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ki(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ki(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Lr);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ki(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Qi(e,"popover",a);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yg.get(n)||n,Qi(e,n,a))}}function qc(e,t,n,a,r,c){switch(n){case"style":zf(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Da(e,a):(typeof a=="number"||typeof a=="bigint")&&Da(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[ft]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Qi(e,n,a)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,c,h,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var g=c=h=r=null,v=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":r=L;break;case"type":h=L;break;case"checked":v=L;break;case"defaultChecked":O=L;break;case"value":c=L;break;case"defaultValue":g=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ae(e,t,a,L,n,null)}}Ef(e,c,g,v,O,h,r,!1),Xi(e);return;case"select":ge("invalid",e),a=h=c=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":h=g;break;case"multiple":a=g;default:Ae(e,t,r,g,n,null)}t=c,n=h,e.multiple=!!a,t!=null?Ca(e,!!a,t,!1):n!=null&&Ca(e,!!a,n,!0);return;case"textarea":ge("invalid",e),c=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(g=n[h],g!=null))switch(h){case"value":a=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:Ae(e,t,h,g,n,null)}Af(e,a,r,c),Xi(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ae(e,t,v,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)ge(si[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,O,a,n,null)}return;default:if(nu(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&qc(e,t,L,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&Ae(e,t,g,a,n,null))}function dy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,h=null,g=null,v=null,O=null,L=null;for(D in n){var G=n[D];if(n.hasOwnProperty(D)&&G!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=G;default:a.hasOwnProperty(D)||Ae(e,t,D,null,a,G)}}for(var C in a){var D=a[C];if(G=n[C],a.hasOwnProperty(C)&&(D!=null||G!=null))switch(C){case"type":c=D;break;case"name":r=D;break;case"checked":O=D;break;case"defaultChecked":L=D;break;case"value":h=D;break;case"defaultValue":g=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==G&&Ae(e,t,C,D,a,G)}}eu(e,h,g,v,O,L,c,r);return;case"select":D=h=g=C=null;for(c in n)if(v=n[c],n.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":D=v;default:a.hasOwnProperty(c)||Ae(e,t,c,null,a,v)}for(r in a)if(c=a[r],v=n[r],a.hasOwnProperty(r)&&(c!=null||v!=null))switch(r){case"value":C=c;break;case"defaultValue":g=c;break;case"multiple":h=c;default:c!==v&&Ae(e,t,r,c,a,v)}t=g,n=h,a=D,C!=null?Ca(e,!!n,C,!1):!!a!=!!n&&(t!=null?Ca(e,!!n,t,!0):Ca(e,!!n,n?[]:"",!1));return;case"textarea":D=C=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,a,r)}for(h in a)if(r=a[h],c=n[h],a.hasOwnProperty(h)&&(r!=null||c!=null))switch(h){case"value":C=r;break;case"defaultValue":D=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==c&&Ae(e,t,h,r,a,c)}jf(e,C,D);return;case"option":for(var ie in n)if(C=n[ie],n.hasOwnProperty(ie)&&C!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ae(e,t,ie,null,a,C)}for(v in a)if(C=a[v],D=n[v],a.hasOwnProperty(v)&&C!==D&&(C!=null||D!=null))switch(v){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ae(e,t,v,C,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)C=n[ne],n.hasOwnProperty(ne)&&C!=null&&!a.hasOwnProperty(ne)&&Ae(e,t,ne,null,a,C);for(O in a)if(C=a[O],D=n[O],a.hasOwnProperty(O)&&C!==D&&(C!=null||D!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Ae(e,t,O,C,a,D)}return;default:if(nu(t)){for(var Te in n)C=n[Te],n.hasOwnProperty(Te)&&C!==void 0&&!a.hasOwnProperty(Te)&&qc(e,t,Te,void 0,a,C);for(L in a)C=a[L],D=n[L],!a.hasOwnProperty(L)||C===D||C===void 0&&D===void 0||qc(e,t,L,C,a,D);return}}for(var z in n)C=n[z],n.hasOwnProperty(z)&&C!=null&&!a.hasOwnProperty(z)&&Ae(e,t,z,null,a,C);for(G in a)C=a[G],D=n[G],!a.hasOwnProperty(G)||C===D||C==null&&D==null||Ae(e,t,G,C,a,D)}var Yc=null,Gc=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function Tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function hy(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(e){return Om.resolve(null).then(e).catch(gy)}:Rm;function gy(e){setTimeout(function(){throw e})}function Vn(e){return e==="head"}function Cm(e,t){var n=t,a=0,r=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<a&&8>a){n=a;var h=e.ownerDocument;if(n&1&&di(h.documentElement),n&2&&di(h.body),n&4)for(n=h.head,di(n),h=n.firstChild;h;){var g=h.nextSibling,v=h.nodeName;h[zl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=g}}if(r===0){e.removeChild(c),vi(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=c}while(n);vi(t)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xc(n),Fo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yy(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function xy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function by(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Kc=null;function Dm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function _m(e,t,n){switch(t=qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fo(e)}var qt=new Map,Mm=new Set;function Yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=Z.d;Z.d={f:vy,r:Sy,D:wy,C:Ey,L:jy,m:Ay,X:zy,S:Ty,M:Ry};function vy(){var e=Sn.f(),t=_r();return e||t}function Sy(e){var t=Ta(e);t!==null&&t.tag===5&&t.type==="form"?Id(t):Sn.r(e)}var rl=typeof document>"u"?null:document;function Nm(e,t,n){var a=rl;if(a&&typeof t=="string"&&t){var r=Mt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Mm.has(r)||(Mm.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function wy(e){Sn.D(e),Nm("dns-prefetch",e,null)}function Ey(e,t){Sn.C(e,t),Nm("preconnect",e,t)}function jy(e,t,n){Sn.L(e,t,n);var a=rl;if(a&&e&&t){var r='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Mt(n.imageSizes)+'"]')):r+='[href="'+Mt(e)+'"]';var c=r;switch(t){case"style":c=ol(e);break;case"script":c=ul(e)}qt.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(c,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(hi(c))||t==="script"&&a.querySelector(mi(c))||(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function Ay(e,t){Sn.m(e,t);var n=rl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Mt(a)+'"][href="'+Mt(e)+'"]',c=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ul(e)}if(!qt.has(c)&&(e=b({rel:"modulepreload",href:e},t),qt.set(c,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mi(c)))return}a=n.createElement("link"),nt(a,"link",e),Je(a),n.head.appendChild(a)}}}function Ty(e,t,n){Sn.S(e,t,n);var a=rl;if(a&&e){var r=za(a).hoistableStyles,c=ol(e);t=t||"default";var h=r.get(c);if(!h){var g={loading:0,preload:null};if(h=a.querySelector(hi(c)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(c))&&$c(e,n);var v=h=a.createElement("link");Je(v),nt(v,"link",e),v._p=new Promise(function(O,L){v.onload=O,v.onerror=L}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Gr(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:g},r.set(c,h)}}}function zy(e,t){Sn.X(e,t);var n=rl;if(n&&e){var a=za(n).hoistableScripts,r=ul(e),c=a.get(r);c||(c=n.querySelector(mi(r)),c||(e=b({src:e,async:!0},t),(t=qt.get(r))&&Jc(e,t),c=n.createElement("script"),Je(c),nt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function Ry(e,t){Sn.M(e,t);var n=rl;if(n&&e){var a=za(n).hoistableScripts,r=ul(e),c=a.get(r);c||(c=n.querySelector(mi(r)),c||(e=b({src:e,async:!0,type:"module"},t),(t=qt.get(r))&&Jc(e,t),c=n.createElement("script"),Je(c),nt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function Um(e,t,n,a){var r=(r=ae.current)?Yr(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ol(n.href),n=za(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ol(n.href);var c=za(r).hoistableStyles,h=c.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=r.querySelector(hi(e)))&&!c._p&&(h.instance=c,h.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),c||Oy(r,e,n,h.state))),t&&a===null)throw Error(u(528,""));return h}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ul(n),n=za(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ol(e){return'href="'+Mt(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function Bm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Oy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",n),Je(t),e.head.appendChild(t))}function ul(e){return'[src="'+Mt(e)+'"]'}function mi(e){return"script[async]"+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),nt(a,"style",r),Gr(a,n.precedence,e),t.instance=a;case"stylesheet":r=ol(n.href);var c=e.querySelector(hi(r));if(c)return t.state.loading|=4,t.instance=c,Je(c),c;a=Bm(n),(r=qt.get(r))&&$c(a,r),c=(e.ownerDocument||e).createElement("link"),Je(c);var h=c;return h._p=new Promise(function(g,v){h.onload=g,h.onerror=v}),nt(c,"link",a),t.state.loading|=4,Gr(c,n.precedence,e),t.instance=c;case"script":return c=ul(n.src),(r=e.querySelector(mi(c)))?(t.instance=r,Je(r),r):(a=n,(r=qt.get(c))&&(a=b({},n),Jc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),nt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Gr(a,n.precedence,e));return t.instance}function Gr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,c=r,h=0;h<a.length;h++){var g=a[h];if(g.dataset.precedence===t)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qr=null;function km(e,t,n){if(Qr===null){var a=new Map,r=Qr=new Map;r.set(n,a)}else r=Qr,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[zl]||c[it]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var g=a.get(h);g?g.push(c):a.set(h,[c])}}return a}function Lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pi=null;function Dy(){}function _y(e,t,n){if(pi===null)throw Error(u(475));var a=pi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=ol(n.href),c=e.querySelector(hi(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Vr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=c,Je(c);return}c=e.ownerDocument||e,n=Bm(n),(r=qt.get(r))&&$c(n,r),c=c.createElement("link"),Je(c);var h=c;h._p=new Promise(function(g,v){h.onload=g,h.onerror=v}),nt(c,"link",n),t.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Vr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function My(){if(pi===null)throw Error(u(475));var e=pi;return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Vr(){if(this.count--,this.count===0){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(Ny,e),Xr=null,Vr.call(e))}function Ny(e,t){if(!(t.state.loading&4)){var n=Xr.get(e);if(n)var a=n.get(null);else{n=new Map,Xr.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var h=r[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=t.instance,h=r.getAttribute("data-precedence"),c=n.get(h)||a,c===a&&n.set(null,r),n.set(h,r),this.count++,a=Vr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Uy(e,t,n,a,r,c,h,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.hiddenUpdates=Zo(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Ym(e,t,n,a,r,c,h,g,v,O,L,G){return e=new Uy(e,t,n,h,g,v,O,G),t=1,c===!0&&(t|=24),c=wt(3,null,null,t),e.current=c,c.stateNode=e,t=Du(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},Uu(c),e}function Gm(e){return e?(e=La,e):La}function Qm(e,t,n,a,r,c){r=Gm(r),a.context===null?a.context=r:a.pendingContext=r,a=Dn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=_n(e,a,t),n!==null&&(zt(n,e,t),Zl(n,e,t))}function Vm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){Vm(e,t),(e=e.alternate)&&Vm(e,t)}function Xm(e){if(e.tag===13){var t=ka(e,67108864);t!==null&&zt(t,e,67108864),Pc(e,67108864)}}var Zr=!0;function By(e,t,n,a){var r=k.T;k.T=null;var c=Z.p;try{Z.p=2,Wc(e,t,n,a)}finally{Z.p=c,k.T=r}}function Hy(e,t,n,a){var r=k.T;k.T=null;var c=Z.p;try{Z.p=8,Wc(e,t,n,a)}finally{Z.p=c,k.T=r}}function Wc(e,t,n,a){if(Zr){var r=Ic(a);if(r===null)Lc(e,t,a,Kr,n),Km(e,a);else if(Ly(r,e,t,n,a))a.stopPropagation();else if(Km(e,a),t&4&&-1<ky.indexOf(e)){for(;r!==null;){var c=Ta(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=In(c.pendingLanes);if(h!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;h;){var v=1<<31-vt(h);g.entanglements[1]|=v,h&=~v}tn(c),(we&6)===0&&(Cr=Ft()+500,ci(0))}}break;case 13:g=ka(c,2),g!==null&&zt(g,c,2),_r(),Pc(c,2)}if(c=Ic(a),c===null&&Lc(e,t,a,Kr,n),c===r)break;r=c}r!==null&&a.stopPropagation()}else Lc(e,t,a,null,n)}}function Ic(e){return e=lu(e),es(e)}var Kr=null;function es(e){if(Kr=null,e=Aa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kr=e,null}function Zm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Eg()){case rf:return 2;case of:return 8;case Li:case jg:return 32;case uf:return 268435456;default:return 32}default:return 32}}var ts=!1,Xn=null,Zn=null,Kn=null,yi=new Map,xi=new Map,$n=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function bi(e,t,n,a,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Ta(t),t!==null&&Xm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Ly(e,t,n,a,r){switch(t){case"focusin":return Xn=bi(Xn,e,t,n,a,r),!0;case"dragenter":return Zn=bi(Zn,e,t,n,a,r),!0;case"mouseover":return Kn=bi(Kn,e,t,n,a,r),!0;case"pointerover":var c=r.pointerId;return yi.set(c,bi(yi.get(c)||null,e,t,n,a,r)),!0;case"gotpointercapture":return c=r.pointerId,xi.set(c,bi(xi.get(c)||null,e,t,n,a,r)),!0}return!1}function $m(e){var t=Aa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,_g(e.priority,function(){if(n.tag===13){var a=Tt();a=Ko(a);var r=ka(n,a);r!==null&&zt(r,n,a),Pc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ic(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);au=a,n.target.dispatchEvent(a),au=null}else return t=Ta(n),t!==null&&Xm(t),e.blockedOn=n,!1;t.shift()}return!0}function Jm(e,t,n){$r(e)&&n.delete(t)}function qy(){ts=!1,Xn!==null&&$r(Xn)&&(Xn=null),Zn!==null&&$r(Zn)&&(Zn=null),Kn!==null&&$r(Kn)&&(Kn=null),yi.forEach(Jm),xi.forEach(Jm)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,qy)))}var Fr=null;function Fm(e){Fr!==e&&(Fr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Fr===e&&(Fr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(es(a||n)===null)continue;break}var c=Ta(n);c!==null&&(e.splice(t,3),t-=3,ec(c,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function vi(e){function t(v){return Jr(v,e)}Xn!==null&&Jr(Xn,e),Zn!==null&&Jr(Zn,e),Kn!==null&&Jr(Kn,e),yi.forEach(t),xi.forEach(t);for(var n=0;n<$n.length;n++){var a=$n[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)$m(n),n.blockedOn===null&&$n.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],h=r[ft]||null;if(typeof c=="function")h||Fm(n);else if(h){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,h=c[ft]||null)g=h.formAction;else if(es(r)!==null)continue}else g=h.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),Fm(n)}}}function ns(e){this._internalRoot=e}Pr.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();Qm(n,a,e,t,null,null)},Pr.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qm(e.current,2,null,e,null,null),_r(),t[ja]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&$m(e)}};var Pm=i.version;if(Pm!=="19.1.0")throw Error(u(527,Pm,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Yy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{jl=Wr.inject(Yy),bt=Wr}catch{}}return wi.createRoot=function(e,t){if(!s(e))throw Error(u(299));var n=!1,a="",r=hh,c=mh,h=ph,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Ym(e,1,!1,null,null,n,a,r,c,h,g,null),e[ja]=t.current,kc(e),new ns(t)},wi.hydrateRoot=function(e,t,n){if(!s(e))throw Error(u(299));var a=!1,r="",c=hh,h=mh,g=ph,v=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=Ym(e,1,!0,t,n??null,a,r,c,h,g,v,O),t.context=Gm(null),n=t.current,a=Tt(),a=Ko(a),r=Dn(a),r.callback=null,_n(n,r,a),n=a,t.current.lanes=n,Tl(t,n),tn(t),e[ja]=t.current,kc(e),new Pr(t)},wi.version="19.1.0",wi}var op;function Py(){if(op)return is.exports;op=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),is.exports=Fy(),is.exports}var Wy=Py(),gt=function(){return gt=Object.assign||function(i){for(var o,u=1,s=arguments.length;u<s;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},gt.apply(this,arguments)};function Oi(l,i,o){if(o||arguments.length===2)for(var u=0,s=i.length,d;u<s;u++)(d||!(u in i))&&(d||(d=Array.prototype.slice.call(i,0,u)),d[u]=i[u]);return l.concat(d||Array.prototype.slice.call(i))}var De="-ms-",Ri="-moz-",Se="-webkit-",t0="comm",zo="rule",Qs="decl",Iy="@import",n0="@keyframes",ex="@layer",a0=Math.abs,Vs=String.fromCharCode,zs=Object.assign;function tx(l,i){return Ie(l,0)^45?(((i<<2^Ie(l,0))<<2^Ie(l,1))<<2^Ie(l,2))<<2^Ie(l,3):0}function l0(l){return l.trim()}function wn(l,i){return(l=i.exec(l))?l[0]:l}function ce(l,i,o){return l.replace(i,o)}function ro(l,i,o){return l.indexOf(i,o)}function Ie(l,i){return l.charCodeAt(i)|0}function pl(l,i,o){return l.slice(i,o)}function an(l){return l.length}function i0(l){return l.length}function zi(l,i){return i.push(l),l}function nx(l,i){return l.map(i).join("")}function up(l,i){return l.filter(function(o){return!wn(o,i)})}var Ro=1,gl=1,r0=0,Gt=0,Qe=0,vl="";function Oo(l,i,o,u,s,d,m,x){return{value:l,root:i,parent:o,type:u,props:s,children:d,line:Ro,column:gl,length:m,return:"",siblings:x}}function Fn(l,i){return zs(Oo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},i)}function cl(l){for(;l.root;)l=Fn(l.root,{children:[l]});zi(l,l.siblings)}function ax(){return Qe}function lx(){return Qe=Gt>0?Ie(vl,--Gt):0,gl--,Qe===10&&(gl=1,Ro--),Qe}function Zt(){return Qe=Gt<r0?Ie(vl,Gt++):0,gl++,Qe===10&&(gl=1,Ro++),Qe}function ba(){return Ie(vl,Gt)}function oo(){return Gt}function Co(l,i){return pl(vl,l,i)}function Rs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ix(l){return Ro=gl=1,r0=an(vl=l),Gt=0,[]}function rx(l){return vl="",l}function cs(l){return l0(Co(Gt-1,Os(l===91?l+2:l===40?l+1:l)))}function ox(l){for(;(Qe=ba())&&Qe<33;)Zt();return Rs(l)>2||Rs(Qe)>3?"":" "}function ux(l,i){for(;--i&&Zt()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Co(l,oo()+(i<6&&ba()==32&&Zt()==32))}function Os(l){for(;Zt();)switch(Qe){case l:return Gt;case 34:case 39:l!==34&&l!==39&&Os(Qe);break;case 40:l===41&&Os(l);break;case 92:Zt();break}return Gt}function cx(l,i){for(;Zt()&&l+Qe!==57;)if(l+Qe===84&&ba()===47)break;return"/*"+Co(i,Gt-1)+"*"+Vs(l===47?l:Zt())}function sx(l){for(;!Rs(ba());)Zt();return Co(l,Gt)}function fx(l){return rx(uo("",null,null,null,[""],l=ix(l),0,[0],l))}function uo(l,i,o,u,s,d,m,x,y){for(var p=0,b=0,w=m,T=0,B=0,A=0,H=1,_=1,N=1,V=0,q="",F=s,X=d,W=u,J=q;_;)switch(A=V,V=Zt()){case 40:if(A!=108&&Ie(J,w-1)==58){ro(J+=ce(cs(V),"&","&\f"),"&\f",a0(p?x[p-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:J+=cs(V);break;case 9:case 10:case 13:case 32:J+=ox(A);break;case 92:J+=ux(oo()-1,7);continue;case 47:switch(ba()){case 42:case 47:zi(dx(cx(Zt(),oo()),i,o,y),y);break;default:J+="/"}break;case 123*H:x[p++]=an(J)*N;case 125*H:case 59:case 0:switch(V){case 0:case 125:_=0;case 59+b:N==-1&&(J=ce(J,/\f/g,"")),B>0&&an(J)-w&&zi(B>32?sp(J+";",u,o,w-1,y):sp(ce(J," ","")+";",u,o,w-2,y),y);break;case 59:J+=";";default:if(zi(W=cp(J,i,o,p,b,s,x,q,F=[],X=[],w,d),d),V===123)if(b===0)uo(J,i,W,W,F,d,w,x,X);else switch(T===99&&Ie(J,3)===110?100:T){case 100:case 108:case 109:case 115:uo(l,W,W,u&&zi(cp(l,W,W,0,0,s,x,q,s,F=[],w,X),X),s,X,w,x,u?F:X);break;default:uo(J,W,W,W,[""],X,0,x,X)}}p=b=B=0,H=N=1,q=J="",w=m;break;case 58:w=1+an(J),B=A;default:if(H<1){if(V==123)--H;else if(V==125&&H++==0&&lx()==125)continue}switch(J+=Vs(V),V*H){case 38:N=b>0?1:(J+="\f",-1);break;case 44:x[p++]=(an(J)-1)*N,N=1;break;case 64:ba()===45&&(J+=cs(Zt())),T=ba(),b=w=an(q=J+=sx(oo())),V++;break;case 45:A===45&&an(J)==2&&(H=0)}}return d}function cp(l,i,o,u,s,d,m,x,y,p,b,w){for(var T=s-1,B=s===0?d:[""],A=i0(B),H=0,_=0,N=0;H<u;++H)for(var V=0,q=pl(l,T+1,T=a0(_=m[H])),F=l;V<A;++V)(F=l0(_>0?B[V]+" "+q:ce(q,/&\f/g,B[V])))&&(y[N++]=F);return Oo(l,i,o,s===0?zo:x,y,p,b,w)}function dx(l,i,o,u){return Oo(l,i,o,t0,Vs(ax()),pl(l,2,-2),0,u)}function sp(l,i,o,u,s){return Oo(l,i,o,Qs,pl(l,0,u),pl(l,u+1,-1),u,s)}function o0(l,i,o){switch(tx(l,i)){case 5103:return Se+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+l+l;case 4789:return Ri+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+l+Ri+l+De+l+l;case 5936:switch(Ie(l,i+11)){case 114:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Se+l+De+l+l;case 6165:return Se+l+De+"flex-"+l+l;case 5187:return Se+l+ce(l,/(\w+).+(:[^]+)/,Se+"box-$1$2"+De+"flex-$1$2")+l;case 5443:return Se+l+De+"flex-item-"+ce(l,/flex-|-self/g,"")+(wn(l,/flex-|baseline/)?"":De+"grid-row-"+ce(l,/flex-|-self/g,""))+l;case 4675:return Se+l+De+"flex-line-pack"+ce(l,/align-content|flex-|-self/g,"")+l;case 5548:return Se+l+De+ce(l,"shrink","negative")+l;case 5292:return Se+l+De+ce(l,"basis","preferred-size")+l;case 6060:return Se+"box-"+ce(l,"-grow","")+Se+l+De+ce(l,"grow","positive")+l;case 4554:return Se+ce(l,/([^-])(transform)/g,"$1"+Se+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+l+l;case 4200:if(!wn(l,/flex-|baseline/))return De+"grid-column-align"+pl(l,i)+l;break;case 2592:case 3360:return De+ce(l,"template-","")+l;case 4384:case 3616:return o&&o.some(function(u,s){return i=s,wn(u.props,/grid-\w+-end/)})?~ro(l+(o=o[i].value),"span",0)?l:De+ce(l,"-start","")+l+De+"grid-row-span:"+(~ro(o,"span",0)?wn(o,/\d+/):+wn(o,/\d+/)-+wn(l,/\d+/))+";":De+ce(l,"-start","")+l;case 4896:case 4128:return o&&o.some(function(u){return wn(u.props,/grid-\w+-start/)})?l:De+ce(ce(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,Se+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(l)-1-i>6)switch(Ie(l,i+1)){case 109:if(Ie(l,i+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Ri+(Ie(l,i+3)==108?"$3":"$2-$3"))+l;case 115:return~ro(l,"stretch",0)?o0(ce(l,"stretch","fill-available"),i,o)+l:l}break;case 5152:case 5920:return ce(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,s,d,m,x,y,p){return De+s+":"+d+p+(m?De+s+"-span:"+(x?y:+y-+d)+p:"")+l});case 4949:if(Ie(l,i+6)===121)return ce(l,":",":"+Se)+l;break;case 6444:switch(Ie(l,Ie(l,14)===45?18:11)){case 120:return ce(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(Ie(l,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+De+"$2box$3")+l;case 100:return ce(l,":",":"+De)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(l,"scroll-","scroll-snap-")+l}return l}function yo(l,i){for(var o="",u=0;u<l.length;u++)o+=i(l[u],u,l,i)||"";return o}function hx(l,i,o,u){switch(l.type){case ex:if(l.children.length)break;case Iy:case Qs:return l.return=l.return||l.value;case t0:return"";case n0:return l.return=l.value+"{"+yo(l.children,u)+"}";case zo:if(!an(l.value=l.props.join(",")))return""}return an(o=yo(l.children,u))?l.return=l.value+"{"+o+"}":""}function mx(l){var i=i0(l);return function(o,u,s,d){for(var m="",x=0;x<i;x++)m+=l[x](o,u,s,d)||"";return m}}function px(l){return function(i){i.root||(i=i.return)&&l(i)}}function gx(l,i,o,u){if(l.length>-1&&!l.return)switch(l.type){case Qs:l.return=o0(l.value,l.length,o);return;case n0:return yo([Fn(l,{value:ce(l.value,"@","@"+Se)})],u);case zo:if(l.length)return nx(o=l.props,function(s){switch(wn(s,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cl(Fn(l,{props:[ce(s,/:(read-\w+)/,":"+Ri+"$1")]})),cl(Fn(l,{props:[s]})),zs(l,{props:up(o,u)});break;case"::placeholder":cl(Fn(l,{props:[ce(s,/:(plac\w+)/,":"+Se+"input-$1")]})),cl(Fn(l,{props:[ce(s,/:(plac\w+)/,":"+Ri+"$1")]})),cl(Fn(l,{props:[ce(s,/:(plac\w+)/,De+"input-$1")]})),cl(Fn(l,{props:[s]})),zs(l,{props:up(o,u)});break}return""})}}var yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},yl=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",u0="active",c0="data-styled-version",Do="6.1.17",Xs=`/*!sc*/
`,xo=typeof window<"u"&&"HTMLElement"in window,xx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),_o=Object.freeze([]),xl=Object.freeze({});function bx(l,i,o){return o===void 0&&(o=xl),l.theme!==o.theme&&l.theme||i||o.theme}var s0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sx=/(^-|-$)/g;function fp(l){return l.replace(vx,"-").replace(Sx,"")}var wx=/(a)(d)/gi,Ir=52,dp=function(l){return String.fromCharCode(l+(l>25?39:97))};function Cs(l){var i,o="";for(i=Math.abs(l);i>Ir;i=i/Ir|0)o=dp(i%Ir)+o;return(dp(i%Ir)+o).replace(wx,"$1-$2")}var ss,f0=5381,ml=function(l,i){for(var o=i.length;o;)l=33*l^i.charCodeAt(--o);return l},d0=function(l){return ml(f0,l)};function h0(l){return Cs(d0(l)>>>0)}function Ex(l){return l.displayName||l.name||"Component"}function fs(l){return typeof l=="string"&&!0}var m0=typeof Symbol=="function"&&Symbol.for,p0=m0?Symbol.for("react.memo"):60115,jx=m0?Symbol.for("react.forward_ref"):60112,Ax={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zx=((ss={})[jx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ss[p0]=g0,ss);function hp(l){return("type"in(i=l)&&i.type.$$typeof)===p0?g0:"$$typeof"in l?zx[l.$$typeof]:Ax;var i}var Rx=Object.defineProperty,Ox=Object.getOwnPropertyNames,mp=Object.getOwnPropertySymbols,Cx=Object.getOwnPropertyDescriptor,Dx=Object.getPrototypeOf,pp=Object.prototype;function y0(l,i,o){if(typeof i!="string"){if(pp){var u=Dx(i);u&&u!==pp&&y0(l,u,o)}var s=Ox(i);mp&&(s=s.concat(mp(i)));for(var d=hp(l),m=hp(i),x=0;x<s.length;++x){var y=s[x];if(!(y in Tx||o&&o[y]||m&&y in m||d&&y in d)){var p=Cx(i,y);try{Rx(l,y,p)}catch{}}}}return l}function bl(l){return typeof l=="function"}function Zs(l){return typeof l=="object"&&"styledComponentId"in l}function ya(l,i){return l&&i?"".concat(l," ").concat(i):l||i||""}function Ds(l,i){if(l.length===0)return"";for(var o=l[0],u=1;u<l.length;u++)o+=l[u];return o}function Ci(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function _s(l,i,o){if(o===void 0&&(o=!1),!o&&!Ci(l)&&!Array.isArray(l))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)l[u]=_s(l[u],i[u]);else if(Ci(i))for(var u in i)l[u]=_s(l[u],i[u]);return l}function Ks(l,i){Object.defineProperty(l,"toString",{value:i})}function Mi(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var _x=function(){function l(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return l.prototype.indexOfGroup=function(i){for(var o=0,u=0;u<i;u++)o+=this.groupSizes[u];return o},l.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var u=this.groupSizes,s=u.length,d=s;i>=d;)if((d<<=1)<0)throw Mi(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(i+1),y=(m=0,o.length);m<y;m++)this.tag.insertRule(x,o[m])&&(this.groupSizes[i]++,x++)},l.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],u=this.indexOfGroup(i),s=u+o;this.groupSizes[i]=0;for(var d=u;d<s;d++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var u=this.groupSizes[i],s=this.indexOfGroup(i),d=s+u,m=s;m<d;m++)o+="".concat(this.tag.getRule(m)).concat(Xs);return o},l}(),co=new Map,bo=new Map,so=1,eo=function(l){if(co.has(l))return co.get(l);for(;bo.has(so);)so++;var i=so++;return co.set(l,i),bo.set(i,l),i},Mx=function(l,i){so=i+1,co.set(l,i),bo.set(i,l)},Nx="style[".concat(yl,"][").concat(c0,'="').concat(Do,'"]'),Ux=new RegExp("^".concat(yl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bx=function(l,i,o){for(var u,s=o.split(","),d=0,m=s.length;d<m;d++)(u=s[d])&&l.registerName(i,u)},Hx=function(l,i){for(var o,u=((o=i.textContent)!==null&&o!==void 0?o:"").split(Xs),s=[],d=0,m=u.length;d<m;d++){var x=u[d].trim();if(x){var y=x.match(Ux);if(y){var p=0|parseInt(y[1],10),b=y[2];p!==0&&(Mx(b,p),Bx(l,b,y[3]),l.getTag().insertRules(p,s)),s.length=0}else s.push(x)}}},gp=function(l){for(var i=document.querySelectorAll(Nx),o=0,u=i.length;o<u;o++){var s=i[o];s&&s.getAttribute(yl)!==u0&&(Hx(l,s),s.parentNode&&s.parentNode.removeChild(s))}};function kx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var x0=function(l){var i=document.head,o=l||i,u=document.createElement("style"),s=function(x){var y=Array.from(x.querySelectorAll("style[".concat(yl,"]")));return y[y.length-1]}(o),d=s!==void 0?s.nextSibling:null;u.setAttribute(yl,u0),u.setAttribute(c0,Do);var m=kx();return m&&u.setAttribute("nonce",m),o.insertBefore(u,d),u},Lx=function(){function l(i){this.element=x0(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,s=0,d=u.length;s<d;s++){var m=u[s];if(m.ownerNode===o)return m}throw Mi(17)}(this.element),this.length=0}return l.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},l.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},l}(),qx=function(){function l(i){this.element=x0(i),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},l.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},l}(),Yx=function(){function l(i){this.rules=[],this.length=0}return l.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},l.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},l.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},l}(),yp=xo,Gx={isServer:!xo,useCSSOMInjection:!xx},b0=function(){function l(i,o,u){i===void 0&&(i=xl),o===void 0&&(o={});var s=this;this.options=gt(gt({},Gx),i),this.gs=o,this.names=new Map(u),this.server=!!i.isServer,!this.server&&xo&&yp&&(yp=!1,gp(this)),Ks(this,function(){return function(d){for(var m=d.getTag(),x=m.length,y="",p=function(w){var T=function(N){return bo.get(N)}(w);if(T===void 0)return"continue";var B=d.names.get(T),A=m.getGroup(w);if(B===void 0||!B.size||A.length===0)return"continue";var H="".concat(yl,".g").concat(w,'[id="').concat(T,'"]'),_="";B!==void 0&&B.forEach(function(N){N.length>0&&(_+="".concat(N,","))}),y+="".concat(A).concat(H,'{content:"').concat(_,'"}').concat(Xs)},b=0;b<x;b++)p(b);return y}(s)})}return l.registerId=function(i){return eo(i)},l.prototype.rehydrate=function(){!this.server&&xo&&gp(this)},l.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new l(gt(gt({},this.options),i),this.gs,o&&this.names||void 0)},l.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var u=o.useCSSOMInjection,s=o.target;return o.isServer?new Yx(s):u?new Lx(s):new qx(s)}(this.options),new _x(i)));var i},l.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},l.prototype.registerName=function(i,o){if(eo(i),this.names.has(i))this.names.get(i).add(o);else{var u=new Set;u.add(o),this.names.set(i,u)}},l.prototype.insertRules=function(i,o,u){this.registerName(i,o),this.getTag().insertRules(eo(i),u)},l.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},l.prototype.clearRules=function(i){this.getTag().clearGroup(eo(i)),this.clearNames(i)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Qx=/&/g,Vx=/^\s*\/\/.*$/gm;function v0(l,i){return l.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=v0(o.children,i)),o})}function Xx(l){var i,o,u,s=xl,d=s.options,m=d===void 0?xl:d,x=s.plugins,y=x===void 0?_o:x,p=function(T,B,A){return A.startsWith(o)&&A.endsWith(o)&&A.replaceAll(o,"").length>0?".".concat(i):T},b=y.slice();b.push(function(T){T.type===zo&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(Qx,o).replace(u,p))}),m.prefix&&b.push(gx),b.push(hx);var w=function(T,B,A,H){B===void 0&&(B=""),A===void 0&&(A=""),H===void 0&&(H="&"),i=H,o=B,u=new RegExp("\\".concat(o,"\\b"),"g");var _=T.replace(Vx,""),N=fx(A||B?"".concat(A," ").concat(B," { ").concat(_," }"):_);m.namespace&&(N=v0(N,m.namespace));var V=[];return yo(N,mx(b.concat(px(function(q){return V.push(q)})))),V};return w.hash=y.length?y.reduce(function(T,B){return B.name||Mi(15),ml(T,B.name)},f0).toString():"",w}var Zx=new b0,Ms=Xx(),S0=Yt.createContext({shouldForwardProp:void 0,styleSheet:Zx,stylis:Ms});S0.Consumer;Yt.createContext(void 0);function xp(){return M.useContext(S0)}var w0=function(){function l(i,o){var u=this;this.inject=function(s,d){d===void 0&&(d=Ms);var m=u.name+d.hash;s.hasNameForId(u.id,m)||s.insertRules(u.id,m,d(u.rules,m,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,Ks(this,function(){throw Mi(12,String(u.name))})}return l.prototype.getName=function(i){return i===void 0&&(i=Ms),this.name+i.hash},l}(),Kx=function(l){return l>="A"&&l<="Z"};function bp(l){for(var i="",o=0;o<l.length;o++){var u=l[o];if(o===1&&u==="-"&&l[0]==="-")return l;Kx(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var E0=function(l){return l==null||l===!1||l===""},j0=function(l){var i,o,u=[];for(var s in l){var d=l[s];l.hasOwnProperty(s)&&!E0(d)&&(Array.isArray(d)&&d.isCss||bl(d)?u.push("".concat(bp(s),":"),d,";"):Ci(d)?u.push.apply(u,Oi(Oi(["".concat(s," {")],j0(d),!1),["}"],!1)):u.push("".concat(bp(s),": ").concat((i=s,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in yx||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function va(l,i,o,u){if(E0(l))return[];if(Zs(l))return[".".concat(l.styledComponentId)];if(bl(l)){if(!bl(d=l)||d.prototype&&d.prototype.isReactComponent||!i)return[l];var s=l(i);return va(s,i,o,u)}var d;return l instanceof w0?o?(l.inject(o,u),[l.getName(u)]):[l]:Ci(l)?j0(l):Array.isArray(l)?Array.prototype.concat.apply(_o,l.map(function(m){return va(m,i,o,u)})):[l.toString()]}function $x(l){for(var i=0;i<l.length;i+=1){var o=l[i];if(bl(o)&&!Zs(o))return!1}return!0}var Jx=d0(Do),Fx=function(){function l(i,o,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&$x(i),this.componentId=o,this.baseHash=ml(Jx,o),this.baseStyle=u,b0.registerId(o)}return l.prototype.generateAndInjectStyles=function(i,o,u){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))s=ya(s,this.staticRulesId);else{var d=Ds(va(this.rules,i,o,u)),m=Cs(ml(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,m)){var x=u(d,".".concat(m),void 0,this.componentId);o.insertRules(this.componentId,m,x)}s=ya(s,m),this.staticRulesId=m}else{for(var y=ml(this.baseHash,u.hash),p="",b=0;b<this.rules.length;b++){var w=this.rules[b];if(typeof w=="string")p+=w;else if(w){var T=Ds(va(w,i,o,u));y=ml(y,T+b),p+=T}}if(p){var B=Cs(y>>>0);o.hasNameForId(this.componentId,B)||o.insertRules(this.componentId,B,u(p,".".concat(B),void 0,this.componentId)),s=ya(s,B)}}return s},l}(),A0=Yt.createContext(void 0);A0.Consumer;var ds={};function Px(l,i,o){var u=Zs(l),s=l,d=!fs(l),m=i.attrs,x=m===void 0?_o:m,y=i.componentId,p=y===void 0?function(F,X){var W=typeof F!="string"?"sc":fp(F);ds[W]=(ds[W]||0)+1;var J="".concat(W,"-").concat(h0(Do+W+ds[W]));return X?"".concat(X,"-").concat(J):J}(i.displayName,i.parentComponentId):y,b=i.displayName,w=b===void 0?function(F){return fs(F)?"styled.".concat(F):"Styled(".concat(Ex(F),")")}(l):b,T=i.displayName&&i.componentId?"".concat(fp(i.displayName),"-").concat(i.componentId):i.componentId||p,B=u&&s.attrs?s.attrs.concat(x).filter(Boolean):x,A=i.shouldForwardProp;if(u&&s.shouldForwardProp){var H=s.shouldForwardProp;if(i.shouldForwardProp){var _=i.shouldForwardProp;A=function(F,X){return H(F,X)&&_(F,X)}}else A=H}var N=new Fx(o,T,u?s.componentStyle:void 0);function V(F,X){return function(W,J,se){var de=W.attrs,_e=W.componentStyle,Ve=W.defaultProps,Ce=W.foldedComponentIds,ct=W.styledComponentId,at=W.target,Re=Yt.useContext(A0),k=xp(),Z=W.shouldForwardProp||k.shouldForwardProp,ee=bx(J,Re,Ve)||xl,re=function(me,ae,$e){for(var ve,lt=gt(gt({},ae),{className:void 0,theme:$e}),Wn=0;Wn<me.length;Wn+=1){var rn=bl(ve=me[Wn])?ve(lt):ve;for(var Dt in rn)lt[Dt]=Dt==="className"?ya(lt[Dt],rn[Dt]):Dt==="style"?gt(gt({},lt[Dt]),rn[Dt]):rn[Dt]}return ae.className&&(lt.className=ya(lt.className,ae.className)),lt}(de,J,ee),S=re.as||at,Q={};for(var K in re)re[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&re.theme===ee||(K==="forwardedAs"?Q.as=re.forwardedAs:Z&&!Z(K,S)||(Q[K]=re[K]));var $=function(me,ae){var $e=xp(),ve=me.generateAndInjectStyles(ae,$e.styleSheet,$e.stylis);return ve}(_e,re),te=ya(Ce,ct);return $&&(te+=" "+$),re.className&&(te+=" "+re.className),Q[fs(S)&&!s0.has(S)?"class":"className"]=te,se&&(Q.ref=se),M.createElement(S,Q)}(q,F,X)}V.displayName=w;var q=Yt.forwardRef(V);return q.attrs=B,q.componentStyle=N,q.displayName=w,q.shouldForwardProp=A,q.foldedComponentIds=u?ya(s.foldedComponentIds,s.styledComponentId):"",q.styledComponentId=T,q.target=u?s.target:l,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?function(X){for(var W=[],J=1;J<arguments.length;J++)W[J-1]=arguments[J];for(var se=0,de=W;se<de.length;se++)_s(X,de[se],!0);return X}({},s.defaultProps,F):F}}),Ks(q,function(){return".".concat(q.styledComponentId)}),d&&y0(q,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function vp(l,i){for(var o=[l[0]],u=0,s=i.length;u<s;u+=1)o.push(i[u],l[u+1]);return o}var Sp=function(l){return Object.assign(l,{isCss:!0})};function T0(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(bl(l)||Ci(l))return Sp(va(vp(_o,Oi([l],i,!0))));var u=l;return i.length===0&&u.length===1&&typeof u[0]=="string"?va(u):Sp(va(vp(u,i)))}function Ns(l,i,o){if(o===void 0&&(o=xl),!i)throw Mi(1,i);var u=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return l(i,o,T0.apply(void 0,Oi([s],d,!1)))};return u.attrs=function(s){return Ns(l,i,gt(gt({},o),{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},u.withConfig=function(s){return Ns(l,i,gt(gt({},o),s))},u}var z0=function(l){return Ns(Px,l)},E=z0;s0.forEach(function(l){E[l]=z0(l)});function Mo(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var u=Ds(T0.apply(void 0,Oi([l],i,!1))),s=h0(u);return new w0(s,u)}const Wx=E.nav`
  background-color: #1e1e2f;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`,Ix=E.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`,eb=E.div`
  font-size: 1.8rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,tb=E.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({menuOpen:l})=>l?"500px":"0"};
    overflow: hidden;
    background-color: #1e1e2f;
    padding: ${({menuOpen:l})=>l?"1rem 0":"0"};
  }
`,nb=E.li`
  position: relative;

  .dropdown-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #2b2b3d;
    list-style: none;
    padding: 0.5rem 0;
    margin: 0;
    min-width: 200px;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 99;

    li {
      padding: 0.6rem 1.2rem;

      a {
        color: white;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: #3e3e5e;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .dropdown-menu {
      position: static;
    }
  }
`,wp=E.button`
  padding: 0.5rem 1rem;
  background-color: ${({variant:l})=>l==="login"?"#00bcd4":"#4caf50"};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`,ab=()=>{const[l,i]=M.useState(!1),[o,u]=M.useState(!1);return f.jsxs(Wx,{children:[f.jsx("a",{href:"#/ai-smart-class",style:{color:"white",textDecoration:"none"},children:f.jsx(Ix,{children:"AI Smart Class"})}),f.jsx(eb,{onClick:()=>i(!l),children:"☰"}),f.jsxs(tb,{menuOpen:l,children:[f.jsxs(nb,{children:[f.jsx("button",{onClick:()=>u(!o),className:"dropdown-toggle",children:"Choose Feature ▾"}),o&&f.jsxs("ul",{className:"dropdown-menu",children:[f.jsx("li",{children:f.jsx("a",{href:"#/doubt-solver",children:"Doubt Solver"})}),f.jsx("li",{children:f.jsx("a",{href:"#/exam-paper-generator",children:"Exam Paper Generator"})}),f.jsx("li",{children:f.jsx("a",{href:"#/smart-quiz-generator",children:"Smart Quiz Generator"})}),f.jsx("li",{children:f.jsx("a",{href:"#/revision-planner",children:"Revision Planner"})})]})]}),f.jsx("li",{children:f.jsx(wp,{children:"Register"})}),f.jsx("li",{children:f.jsx(wp,{variant:"login",children:"Login"})})]})]})};var Ei={},Ep;function lb(){if(Ep)return Ei;Ep=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=m,Ei.serialize=p;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function m(T,B){const A=new d,H=T.length;if(H<2)return A;const _=(B==null?void 0:B.decode)||b;let N=0;do{const V=T.indexOf("=",N);if(V===-1)break;const q=T.indexOf(";",N),F=q===-1?H:q;if(V>F){N=T.lastIndexOf(";",V-1)+1;continue}const X=x(T,N,V),W=y(T,V,X),J=T.slice(X,W);if(A[J]===void 0){let se=x(T,V+1,F),de=y(T,F,se);const _e=_(T.slice(se,de));A[J]=_e}N=F+1}while(N<H);return A}function x(T,B,A){do{const H=T.charCodeAt(B);if(H!==32&&H!==9)return B}while(++B<A);return A}function y(T,B,A){for(;B>A;){const H=T.charCodeAt(--B);if(H!==32&&H!==9)return B+1}return A}function p(T,B,A){const H=(A==null?void 0:A.encode)||encodeURIComponent;if(!l.test(T))throw new TypeError(`argument name is invalid: ${T}`);const _=H(B);if(!i.test(_))throw new TypeError(`argument val is invalid: ${B}`);let N=T+"="+_;if(!A)return N;if(A.maxAge!==void 0){if(!Number.isInteger(A.maxAge))throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);N+="; Max-Age="+A.maxAge}if(A.domain){if(!o.test(A.domain))throw new TypeError(`option domain is invalid: ${A.domain}`);N+="; Domain="+A.domain}if(A.path){if(!u.test(A.path))throw new TypeError(`option path is invalid: ${A.path}`);N+="; Path="+A.path}if(A.expires){if(!w(A.expires)||!Number.isFinite(A.expires.valueOf()))throw new TypeError(`option expires is invalid: ${A.expires}`);N+="; Expires="+A.expires.toUTCString()}if(A.httpOnly&&(N+="; HttpOnly"),A.secure&&(N+="; Secure"),A.partitioned&&(N+="; Partitioned"),A.priority)switch(typeof A.priority=="string"?A.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${A.priority}`)}if(A.sameSite)switch(typeof A.sameSite=="string"?A.sameSite.toLowerCase():A.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${A.sameSite}`)}return N}function b(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function w(T){return s.call(T)==="[object Date]"}return Ei}lb();var jp="popstate";function ib(l={}){function i(s,d){let{pathname:m="/",search:x="",hash:y=""}=Ea(s.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Us("",{pathname:m,search:x,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){let m=s.document.querySelector("base"),x="";if(m&&m.getAttribute("href")){let y=s.location.href,p=y.indexOf("#");x=p===-1?y:y.slice(0,p)}return x+"#"+(typeof d=="string"?d:Di(d))}function u(s,d){Kt(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return ob(i,o,u,l)}function Be(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Kt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function rb(){return Math.random().toString(36).substring(2,10)}function Ap(l,i){return{usr:l.state,key:l.key,idx:i}}function Us(l,i,o=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Ea(i):i,state:o,key:i&&i.key||u||rb()}}function Di({pathname:l="/",search:i="",hash:o=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(l+=o.charAt(0)==="#"?o:"#"+o),l}function Ea(l){let i={};if(l){let o=l.indexOf("#");o>=0&&(i.hash=l.substring(o),l=l.substring(0,o));let u=l.indexOf("?");u>=0&&(i.search=l.substring(u),l=l.substring(0,u)),l&&(i.pathname=l)}return i}function ob(l,i,o,u={}){let{window:s=document.defaultView,v5Compat:d=!1}=u,m=s.history,x="POP",y=null,p=b();p==null&&(p=0,m.replaceState({...m.state,idx:p},""));function b(){return(m.state||{idx:null}).idx}function w(){x="POP";let _=b(),N=_==null?null:_-p;p=_,y&&y({action:x,location:H.location,delta:N})}function T(_,N){x="PUSH";let V=Us(H.location,_,N);o&&o(V,_),p=b()+1;let q=Ap(V,p),F=H.createHref(V);try{m.pushState(q,"",F)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;s.location.assign(F)}d&&y&&y({action:x,location:H.location,delta:1})}function B(_,N){x="REPLACE";let V=Us(H.location,_,N);o&&o(V,_),p=b();let q=Ap(V,p),F=H.createHref(V);m.replaceState(q,"",F),d&&y&&y({action:x,location:H.location,delta:0})}function A(_){let N=s.location.origin!=="null"?s.location.origin:s.location.href,V=typeof _=="string"?_:Di(_);return V=V.replace(/ $/,"%20"),Be(N,`No window.location.(origin|href) available to create URL for href: ${V}`),new URL(V,N)}let H={get action(){return x},get location(){return l(s,m)},listen(_){if(y)throw new Error("A history only accepts one active listener");return s.addEventListener(jp,w),y=_,()=>{s.removeEventListener(jp,w),y=null}},createHref(_){return i(s,_)},createURL:A,encodeLocation(_){let N=A(_);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:T,replace:B,go(_){return m.go(_)}};return H}function R0(l,i,o="/"){return ub(l,i,o,!1)}function ub(l,i,o,u){let s=typeof i=="string"?Ea(i):i,d=jn(s.pathname||"/",o);if(d==null)return null;let m=O0(l);cb(m);let x=null;for(let y=0;x==null&&y<m.length;++y){let p=vb(d);x=xb(m[y],p,u)}return x}function O0(l,i=[],o=[],u=""){let s=(d,m,x)=>{let y={relativePath:x===void 0?d.path||"":x,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};y.relativePath.startsWith("/")&&(Be(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length));let p=En([u,y.relativePath]),b=o.concat(y);d.children&&d.children.length>0&&(Be(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),O0(d.children,i,b,p)),!(d.path==null&&!d.index)&&i.push({path:p,score:gb(p,d.index),routesMeta:b})};return l.forEach((d,m)=>{var x;if(d.path===""||!((x=d.path)!=null&&x.includes("?")))s(d,m);else for(let y of C0(d.path))s(d,m,y)}),i}function C0(l){let i=l.split("/");if(i.length===0)return[];let[o,...u]=i,s=o.endsWith("?"),d=o.replace(/\?$/,"");if(u.length===0)return s?[d,""]:[d];let m=C0(u.join("/")),x=[];return x.push(...m.map(y=>y===""?d:[d,y].join("/"))),s&&x.push(...m),x.map(y=>l.startsWith("/")&&y===""?"/":y)}function cb(l){l.sort((i,o)=>i.score!==o.score?o.score-i.score:yb(i.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var sb=/^:[\w-]+$/,fb=3,db=2,hb=1,mb=10,pb=-2,Tp=l=>l==="*";function gb(l,i){let o=l.split("/"),u=o.length;return o.some(Tp)&&(u+=pb),i&&(u+=db),o.filter(s=>!Tp(s)).reduce((s,d)=>s+(sb.test(d)?fb:d===""?hb:mb),u)}function yb(l,i){return l.length===i.length&&l.slice(0,-1).every((u,s)=>u===i[s])?l[l.length-1]-i[i.length-1]:0}function xb(l,i,o=!1){let{routesMeta:u}=l,s={},d="/",m=[];for(let x=0;x<u.length;++x){let y=u[x],p=x===u.length-1,b=d==="/"?i:i.slice(d.length)||"/",w=vo({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},b),T=y.route;if(!w&&p&&o&&!u[u.length-1].route.index&&(w=vo({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},b)),!w)return null;Object.assign(s,w.params),m.push({params:s,pathname:En([d,w.pathname]),pathnameBase:jb(En([d,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(d=En([d,w.pathnameBase]))}return m}function vo(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[o,u]=bb(l.path,l.caseSensitive,l.end),s=i.match(o);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:u.reduce((p,{paramName:b,isOptional:w},T)=>{if(b==="*"){let A=x[T]||"";m=d.slice(0,d.length-A.length).replace(/(.)\/+$/,"$1")}const B=x[T];return w&&!B?p[b]=void 0:p[b]=(B||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:m,pattern:l}}function bb(l,i=!1,o=!0){Kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,y)=>(u.push({paramName:x,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),u]}function vb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function jn(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,u=l.charAt(o);return u&&u!=="/"?null:l.slice(o)||"/"}function Sb(l,i="/"){let{pathname:o,search:u="",hash:s=""}=typeof l=="string"?Ea(l):l;return{pathname:o?o.startsWith("/")?o:wb(o,i):i,search:Ab(u),hash:Tb(s)}}function wb(l,i){let o=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function hs(l,i,o,u){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eb(l){return l.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function D0(l){let i=Eb(l);return i.map((o,u)=>u===i.length-1?o.pathname:o.pathnameBase)}function _0(l,i,o,u=!1){let s;typeof l=="string"?s=Ea(l):(s={...l},Be(!s.pathname||!s.pathname.includes("?"),hs("?","pathname","search",s)),Be(!s.pathname||!s.pathname.includes("#"),hs("#","pathname","hash",s)),Be(!s.search||!s.search.includes("#"),hs("#","search","hash",s)));let d=l===""||s.pathname==="",m=d?"/":s.pathname,x;if(m==null)x=o;else{let w=i.length-1;if(!u&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),w-=1;s.pathname=T.join("/")}x=w>=0?i[w]:"/"}let y=Sb(s,x),p=m&&m!=="/"&&m.endsWith("/"),b=(d||m===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(p||b)&&(y.pathname+="/"),y}var En=l=>l.join("/").replace(/\/\/+/g,"/"),jb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ab=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Tb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function zb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var M0=["POST","PUT","PATCH","DELETE"];new Set(M0);var Rb=["GET",...M0];new Set(Rb);var Sl=M.createContext(null);Sl.displayName="DataRouter";var No=M.createContext(null);No.displayName="DataRouterState";var N0=M.createContext({isTransitioning:!1});N0.displayName="ViewTransition";var Ob=M.createContext(new Map);Ob.displayName="Fetchers";var Cb=M.createContext(null);Cb.displayName="Await";var ln=M.createContext(null);ln.displayName="Navigation";var Ni=M.createContext(null);Ni.displayName="Location";var An=M.createContext({outlet:null,matches:[],isDataRoute:!1});An.displayName="Route";var $s=M.createContext(null);$s.displayName="RouteError";function Db(l,{relative:i}={}){Be(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=M.useContext(ln),{hash:s,pathname:d,search:m}=Bi(l,{relative:i}),x=d;return o!=="/"&&(x=d==="/"?o:En([o,d])),u.createHref({pathname:x,search:m,hash:s})}function Ui(){return M.useContext(Ni)!=null}function Pn(){return Be(Ui(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ni).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function B0(l){M.useContext(ln).static||M.useLayoutEffect(l)}function H0(){let{isDataRoute:l}=M.useContext(An);return l?Vb():_b()}function _b(){Be(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(Sl),{basename:i,navigator:o}=M.useContext(ln),{matches:u}=M.useContext(An),{pathname:s}=Pn(),d=JSON.stringify(D0(u)),m=M.useRef(!1);return B0(()=>{m.current=!0}),M.useCallback((y,p={})=>{if(Kt(m.current,U0),!m.current)return;if(typeof y=="number"){o.go(y);return}let b=_0(y,JSON.parse(d),s,p.relative==="path");l==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:En([i,b.pathname])),(p.replace?o.replace:o.push)(b,p.state,p)},[i,o,d,s,l])}M.createContext(null);function Bi(l,{relative:i}={}){let{matches:o}=M.useContext(An),{pathname:u}=Pn(),s=JSON.stringify(D0(o));return M.useMemo(()=>_0(l,JSON.parse(s),u,i==="path"),[l,s,u,i])}function Mb(l,i){return k0(l,i)}function k0(l,i,o,u){var V;Be(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:d}=M.useContext(ln),{matches:m}=M.useContext(An),x=m[m.length-1],y=x?x.params:{},p=x?x.pathname:"/",b=x?x.pathnameBase:"/",w=x&&x.route;{let q=w&&w.path||"";L0(p,!w||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=Pn(),B;if(i){let q=typeof i=="string"?Ea(i):i;Be(b==="/"||((V=q.pathname)==null?void 0:V.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${q.pathname}" was given in the \`location\` prop.`),B=q}else B=T;let A=B.pathname||"/",H=A;if(b!=="/"){let q=b.replace(/^\//,"").split("/");H="/"+A.replace(/^\//,"").split("/").slice(q.length).join("/")}let _=!d&&o&&o.matches&&o.matches.length>0?o.matches:R0(l,{pathname:H});Kt(w||_!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Kt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=kb(_&&_.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:En([b,s.encodeLocation?s.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?b:En([b,s.encodeLocation?s.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),m,o,u);return i&&N?M.createElement(Ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},N):N}function Nb(){let l=Qb(),i=zb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),o=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:d},"ErrorBoundary")," or"," ",M.createElement("code",{style:d},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},i),o?M.createElement("pre",{style:s},o):null,m)}var Ub=M.createElement(Nb,null),Bb=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){console.error("React Router caught the following error during render",l,i)}render(){return this.state.error!==void 0?M.createElement(An.Provider,{value:this.props.routeContext},M.createElement($s.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hb({routeContext:l,match:i,children:o}){let u=M.useContext(Sl);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),M.createElement(An.Provider,{value:l},o)}function kb(l,i=[],o=null,u=null){if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let s=l,d=o==null?void 0:o.errors;if(d!=null){let y=s.findIndex(p=>p.route.id&&(d==null?void 0:d[p.route.id])!==void 0);Be(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let m=!1,x=-1;if(o)for(let y=0;y<s.length;y++){let p=s[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=y),p.route.id){let{loaderData:b,errors:w}=o,T=p.route.loader&&!b.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||T){m=!0,x>=0?s=s.slice(0,x+1):s=[s[0]];break}}}return s.reduceRight((y,p,b)=>{let w,T=!1,B=null,A=null;o&&(w=d&&p.route.id?d[p.route.id]:void 0,B=p.route.errorElement||Ub,m&&(x<0&&b===0?(L0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,A=null):x===b&&(T=!0,A=p.route.hydrateFallbackElement||null)));let H=i.concat(s.slice(0,b+1)),_=()=>{let N;return w?N=B:T?N=A:p.route.Component?N=M.createElement(p.route.Component,null):p.route.element?N=p.route.element:N=y,M.createElement(Hb,{match:p,routeContext:{outlet:y,matches:H,isDataRoute:o!=null},children:N})};return o&&(p.route.ErrorBoundary||p.route.errorElement||b===0)?M.createElement(Bb,{location:o.location,revalidation:o.revalidation,component:B,error:w,children:_(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):_()},null)}function Js(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lb(l){let i=M.useContext(Sl);return Be(i,Js(l)),i}function qb(l){let i=M.useContext(No);return Be(i,Js(l)),i}function Yb(l){let i=M.useContext(An);return Be(i,Js(l)),i}function Fs(l){let i=Yb(l),o=i.matches[i.matches.length-1];return Be(o.route.id,`${l} can only be used on routes that contain a unique "id"`),o.route.id}function Gb(){return Fs("useRouteId")}function Qb(){var u;let l=M.useContext($s),i=qb("useRouteError"),o=Fs("useRouteError");return l!==void 0?l:(u=i.errors)==null?void 0:u[o]}function Vb(){let{router:l}=Lb("useNavigate"),i=Fs("useNavigate"),o=M.useRef(!1);return B0(()=>{o.current=!0}),M.useCallback(async(s,d={})=>{Kt(o.current,U0),o.current&&(typeof s=="number"?l.navigate(s):await l.navigate(s,{fromRouteId:i,...d}))},[l,i])}var zp={};function L0(l,i,o){!i&&!zp[l]&&(zp[l]=!0,Kt(!1,o))}M.memo(Xb);function Xb({routes:l,future:i,state:o}){return k0(l,void 0,o,i)}function Ke(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zb({basename:l="/",children:i=null,location:o,navigationType:u="POP",navigator:s,static:d=!1}){Be(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=l.replace(/^\/*/,"/"),x=M.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof o=="string"&&(o=Ea(o));let{pathname:y="/",search:p="",hash:b="",state:w=null,key:T="default"}=o,B=M.useMemo(()=>{let A=jn(y,m);return A==null?null:{location:{pathname:A,search:p,hash:b,state:w,key:T},navigationType:u}},[m,y,p,b,w,T,u]);return Kt(B!=null,`<Router basename="${m}"> is not able to match the URL "${y}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:M.createElement(ln.Provider,{value:x},M.createElement(Ni.Provider,{children:i,value:B}))}function Kb({children:l,location:i}){return Mb(Bs(l),i)}function Bs(l,i=[]){let o=[];return M.Children.forEach(l,(u,s)=>{if(!M.isValidElement(u))return;let d=[...i,s];if(u.type===M.Fragment){o.push.apply(o,Bs(u.props.children,d));return}Be(u.type===Ke,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||d.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=Bs(u.props.children,d)),o.push(m)}),o}var fo="get",ho="application/x-www-form-urlencoded";function Uo(l){return l!=null&&typeof l.tagName=="string"}function $b(l){return Uo(l)&&l.tagName.toLowerCase()==="button"}function Jb(l){return Uo(l)&&l.tagName.toLowerCase()==="form"}function Fb(l){return Uo(l)&&l.tagName.toLowerCase()==="input"}function Pb(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Wb(l,i){return l.button===0&&(!i||i==="_self")&&!Pb(l)}var to=null;function Ib(){if(to===null)try{new FormData(document.createElement("form"),0),to=!1}catch{to=!0}return to}var ev=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ms(l){return l!=null&&!ev.has(l)?(Kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ho}"`),null):l}function tv(l,i){let o,u,s,d,m;if(Jb(l)){let x=l.getAttribute("action");u=x?jn(x,i):null,o=l.getAttribute("method")||fo,s=ms(l.getAttribute("enctype"))||ho,d=new FormData(l)}else if($b(l)||Fb(l)&&(l.type==="submit"||l.type==="image")){let x=l.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||x.getAttribute("action");if(u=y?jn(y,i):null,o=l.getAttribute("formmethod")||x.getAttribute("method")||fo,s=ms(l.getAttribute("formenctype"))||ms(x.getAttribute("enctype"))||ho,d=new FormData(x,l),!Ib()){let{name:p,type:b,value:w}=l;if(b==="image"){let T=p?`${p}.`:"";d.append(`${T}x`,"0"),d.append(`${T}y`,"0")}else p&&d.append(p,w)}}else{if(Uo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=fo,u=null,s=ho,m=l}return d&&s==="text/plain"&&(m=d,d=void 0),{action:u,method:o.toLowerCase(),encType:s,formData:d,body:m}}function Ps(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}async function nv(l,i){if(l.id in i)return i[l.id];try{let o=await import(l.module);return i[l.id]=o,o}catch(o){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function av(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function lv(l,i,o){let u=await Promise.all(l.map(async s=>{let d=i.routes[s.route.id];if(d){let m=await nv(d,o);return m.links?m.links():[]}return[]}));return uv(u.flat(1).filter(av).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Rp(l,i,o,u,s,d){let m=(y,p)=>o[p]?y.route.id!==o[p].route.id:!0,x=(y,p)=>{var b;return o[p].pathname!==y.pathname||((b=o[p].route.path)==null?void 0:b.endsWith("*"))&&o[p].params["*"]!==y.params["*"]};return d==="assets"?i.filter((y,p)=>m(y,p)||x(y,p)):d==="data"?i.filter((y,p)=>{var w;let b=u.routes[y.route.id];if(!b||!b.hasLoader)return!1;if(m(y,p)||x(y,p))return!0;if(y.route.shouldRevalidate){let T=y.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function iv(l,i,{includeHydrateFallback:o}={}){return rv(l.map(u=>{let s=i.routes[u.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),o&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function rv(l){return[...new Set(l)]}function ov(l){let i={},o=Object.keys(l).sort();for(let u of o)i[u]=l[u];return i}function uv(l,i){let o=new Set;return new Set(i),l.reduce((u,s)=>{let d=JSON.stringify(ov(s));return o.has(d)||(o.add(d),u.push({key:d,link:s})),u},[])}var cv=new Set([100,101,204,205]);function sv(l,i){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname="_root.data":i&&jn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function q0(){let l=M.useContext(Sl);return Ps(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function fv(){let l=M.useContext(No);return Ps(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ws=M.createContext(void 0);Ws.displayName="FrameworkContext";function Y0(){let l=M.useContext(Ws);return Ps(l,"You must render this element inside a <HydratedRouter> element"),l}function dv(l,i){let o=M.useContext(Ws),[u,s]=M.useState(!1),[d,m]=M.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:p,onMouseLeave:b,onTouchStart:w}=i,T=M.useRef(null);M.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let H=N=>{N.forEach(V=>{m(V.isIntersecting)})},_=new IntersectionObserver(H,{threshold:.5});return T.current&&_.observe(T.current),()=>{_.disconnect()}}},[l]),M.useEffect(()=>{if(u){let H=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(H)}}},[u]);let B=()=>{s(!0)},A=()=>{s(!1),m(!1)};return o?l!=="intent"?[d,T,{}]:[d,T,{onFocus:ji(x,B),onBlur:ji(y,A),onMouseEnter:ji(p,B),onMouseLeave:ji(b,A),onTouchStart:ji(w,B)}]:[!1,T,{}]}function ji(l,i){return o=>{l&&l(o),o.defaultPrevented||i(o)}}function hv({page:l,...i}){let{router:o}=q0(),u=M.useMemo(()=>R0(o.routes,l,o.basename),[o.routes,l,o.basename]);return u?M.createElement(pv,{page:l,matches:u,...i}):null}function mv(l){let{manifest:i,routeModules:o}=Y0(),[u,s]=M.useState([]);return M.useEffect(()=>{let d=!1;return lv(l,i,o).then(m=>{d||s(m)}),()=>{d=!0}},[l,i,o]),u}function pv({page:l,matches:i,...o}){let u=Pn(),{manifest:s,routeModules:d}=Y0(),{basename:m}=q0(),{loaderData:x,matches:y}=fv(),p=M.useMemo(()=>Rp(l,i,y,s,u,"data"),[l,i,y,s,u]),b=M.useMemo(()=>Rp(l,i,y,s,u,"assets"),[l,i,y,s,u]),w=M.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let A=new Set,H=!1;if(i.forEach(N=>{var q;let V=s.routes[N.route.id];!V||!V.hasLoader||(!p.some(F=>F.route.id===N.route.id)&&N.route.id in x&&((q=d[N.route.id])!=null&&q.shouldRevalidate)||V.hasClientLoader?H=!0:A.add(N.route.id))}),A.size===0)return[];let _=sv(l,m);return H&&A.size>0&&_.searchParams.set("_routes",i.filter(N=>A.has(N.route.id)).map(N=>N.route.id).join(",")),[_.pathname+_.search]},[m,x,u,s,p,i,l,d]),T=M.useMemo(()=>iv(b,s),[b,s]),B=mv(b);return M.createElement(M.Fragment,null,w.map(A=>M.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),T.map(A=>M.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),B.map(({key:A,link:H})=>M.createElement("link",{key:A,...H})))}function gv(...l){return i=>{l.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var G0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G0&&(window.__reactRouterVersion="7.5.3")}catch{}function yv({basename:l,children:i,window:o}){let u=M.useRef();u.current==null&&(u.current=ib({window:o,v5Compat:!0}));let s=u.current,[d,m]=M.useState({action:s.action,location:s.location}),x=M.useCallback(y=>{M.startTransition(()=>m(y))},[m]);return M.useLayoutEffect(()=>s.listen(x),[s,x]),M.createElement(Zb,{basename:l,children:i,location:d.location,navigationType:d.action,navigator:s})}var Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=M.forwardRef(function({onClick:i,discover:o="render",prefetch:u="none",relative:s,reloadDocument:d,replace:m,state:x,target:y,to:p,preventScrollReset:b,viewTransition:w,...T},B){let{basename:A}=M.useContext(ln),H=typeof p=="string"&&Q0.test(p),_,N=!1;if(typeof p=="string"&&H&&(_=p,G0))try{let de=new URL(window.location.href),_e=p.startsWith("//")?new URL(de.protocol+p):new URL(p),Ve=jn(_e.pathname,A);_e.origin===de.origin&&Ve!=null?p=Ve+_e.search+_e.hash:N=!0}catch{Kt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Db(p,{relative:s}),[q,F,X]=dv(u,T),W=Sv(p,{replace:m,state:x,target:y,preventScrollReset:b,relative:s,viewTransition:w});function J(de){i&&i(de),de.defaultPrevented||W(de)}let se=M.createElement("a",{...T,...X,href:_||V,onClick:N||d?i:J,ref:gv(B,F),target:y,"data-discover":!H&&o==="render"?"true":void 0});return q&&!H?M.createElement(M.Fragment,null,se,M.createElement(hv,{page:V})):se});$t.displayName="Link";var xv=M.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:u="",end:s=!1,style:d,to:m,viewTransition:x,children:y,...p},b){let w=Bi(m,{relative:p.relative}),T=Pn(),B=M.useContext(No),{navigator:A,basename:H}=M.useContext(ln),_=B!=null&&Tv(w)&&x===!0,N=A.encodeLocation?A.encodeLocation(w).pathname:w.pathname,V=T.pathname,q=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(V=V.toLowerCase(),q=q?q.toLowerCase():null,N=N.toLowerCase()),q&&H&&(q=jn(q,H)||q);const F=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let X=V===N||!s&&V.startsWith(N)&&V.charAt(F)==="/",W=q!=null&&(q===N||!s&&q.startsWith(N)&&q.charAt(N.length)==="/"),J={isActive:X,isPending:W,isTransitioning:_},se=X?i:void 0,de;typeof u=="function"?de=u(J):de=[u,X?"active":null,W?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let _e=typeof d=="function"?d(J):d;return M.createElement($t,{...p,"aria-current":se,className:de,ref:b,style:_e,to:m,viewTransition:x},typeof y=="function"?y(J):y)});xv.displayName="NavLink";var bv=M.forwardRef(({discover:l="render",fetcherKey:i,navigate:o,reloadDocument:u,replace:s,state:d,method:m=fo,action:x,onSubmit:y,relative:p,preventScrollReset:b,viewTransition:w,...T},B)=>{let A=jv(),H=Av(x,{relative:p}),_=m.toLowerCase()==="get"?"get":"post",N=typeof x=="string"&&Q0.test(x),V=q=>{if(y&&y(q),q.defaultPrevented)return;q.preventDefault();let F=q.nativeEvent.submitter,X=(F==null?void 0:F.getAttribute("formmethod"))||m;A(F||q.currentTarget,{fetcherKey:i,method:X,navigate:o,replace:s,state:d,relative:p,preventScrollReset:b,viewTransition:w})};return M.createElement("form",{ref:B,method:_,action:H,onSubmit:u?y:V,...T,"data-discover":!N&&l==="render"?"true":void 0})});bv.displayName="Form";function vv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function V0(l){let i=M.useContext(Sl);return Be(i,vv(l)),i}function Sv(l,{target:i,replace:o,state:u,preventScrollReset:s,relative:d,viewTransition:m}={}){let x=H0(),y=Pn(),p=Bi(l,{relative:d});return M.useCallback(b=>{if(Wb(b,i)){b.preventDefault();let w=o!==void 0?o:Di(y)===Di(p);x(l,{replace:w,state:u,preventScrollReset:s,relative:d,viewTransition:m})}},[y,x,p,o,u,i,l,s,d,m])}var wv=0,Ev=()=>`__${String(++wv)}__`;function jv(){let{router:l}=V0("useSubmit"),{basename:i}=M.useContext(ln),o=Gb();return M.useCallback(async(u,s={})=>{let{action:d,method:m,encType:x,formData:y,body:p}=tv(u,i);if(s.navigate===!1){let b=s.fetcherKey||Ev();await l.fetch(b,o,s.action||d,{preventScrollReset:s.preventScrollReset,formData:y,body:p,formMethod:s.method||m,formEncType:s.encType||x,flushSync:s.flushSync})}else await l.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:y,body:p,formMethod:s.method||m,formEncType:s.encType||x,replace:s.replace,state:s.state,fromRouteId:o,flushSync:s.flushSync,viewTransition:s.viewTransition})},[l,i,o])}function Av(l,{relative:i}={}){let{basename:o}=M.useContext(ln),u=M.useContext(An);Be(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),d={...Bi(l||".",{relative:i})},m=Pn();if(l==null){d.search=m.search;let x=new URLSearchParams(d.search),y=x.getAll("index");if(y.some(b=>b==="")){x.delete("index"),y.filter(w=>w).forEach(w=>x.append("index",w));let b=x.toString();d.search=b?`?${b}`:""}}return(!l||l===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:En([o,d.pathname])),Di(d)}function Tv(l,i={}){let o=M.useContext(N0);Be(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=V0("useViewTransitionState"),s=Bi(l,{relative:i.relative});if(!o.isTransitioning)return!1;let d=jn(o.currentLocation.pathname,u)||o.currentLocation.pathname,m=jn(o.nextLocation.pathname,u)||o.nextLocation.pathname;return vo(s.pathname,m)!=null||vo(s.pathname,d)!=null}new TextEncoder;[...cv];function X0(l,i){return function(){return l.apply(i,arguments)}}const{toString:zv}=Object.prototype,{getPrototypeOf:Is}=Object,{iterator:Bo,toStringTag:Z0}=Symbol,Ho=(l=>i=>{const o=zv.call(i);return l[o]||(l[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=l=>(l=l.toLowerCase(),i=>Ho(i)===l),ko=l=>i=>typeof i===l,{isArray:wl}=Array,_i=ko("undefined");function Rv(l){return l!==null&&!_i(l)&&l.constructor!==null&&!_i(l.constructor)&&yt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const K0=Jt("ArrayBuffer");function Ov(l){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(l):i=l&&l.buffer&&K0(l.buffer),i}const Cv=ko("string"),yt=ko("function"),$0=ko("number"),Lo=l=>l!==null&&typeof l=="object",Dv=l=>l===!0||l===!1,mo=l=>{if(Ho(l)!=="object")return!1;const i=Is(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Z0 in l)&&!(Bo in l)},_v=Jt("Date"),Mv=Jt("File"),Nv=Jt("Blob"),Uv=Jt("FileList"),Bv=l=>Lo(l)&&yt(l.pipe),Hv=l=>{let i;return l&&(typeof FormData=="function"&&l instanceof FormData||yt(l.append)&&((i=Ho(l))==="formdata"||i==="object"&&yt(l.toString)&&l.toString()==="[object FormData]"))},kv=Jt("URLSearchParams"),[Lv,qv,Yv,Gv]=["ReadableStream","Request","Response","Headers"].map(Jt),Qv=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(l,i,{allOwnKeys:o=!1}={}){if(l===null||typeof l>"u")return;let u,s;if(typeof l!="object"&&(l=[l]),wl(l))for(u=0,s=l.length;u<s;u++)i.call(null,l[u],u,l);else{const d=o?Object.getOwnPropertyNames(l):Object.keys(l),m=d.length;let x;for(u=0;u<m;u++)x=d[u],i.call(null,l[x],x,l)}}function J0(l,i){i=i.toLowerCase();const o=Object.keys(l);let u=o.length,s;for(;u-- >0;)if(s=o[u],i===s.toLowerCase())return s;return null}const xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,F0=l=>!_i(l)&&l!==xa;function Hs(){const{caseless:l}=F0(this)&&this||{},i={},o=(u,s)=>{const d=l&&J0(i,s)||s;mo(i[d])&&mo(u)?i[d]=Hs(i[d],u):mo(u)?i[d]=Hs({},u):wl(u)?i[d]=u.slice():i[d]=u};for(let u=0,s=arguments.length;u<s;u++)arguments[u]&&Hi(arguments[u],o);return i}const Vv=(l,i,o,{allOwnKeys:u}={})=>(Hi(i,(s,d)=>{o&&yt(s)?l[d]=X0(s,o):l[d]=s},{allOwnKeys:u}),l),Xv=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),Zv=(l,i,o,u)=>{l.prototype=Object.create(i.prototype,u),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:i.prototype}),o&&Object.assign(l.prototype,o)},Kv=(l,i,o,u)=>{let s,d,m;const x={};if(i=i||{},l==null)return i;do{for(s=Object.getOwnPropertyNames(l),d=s.length;d-- >0;)m=s[d],(!u||u(m,l,i))&&!x[m]&&(i[m]=l[m],x[m]=!0);l=o!==!1&&Is(l)}while(l&&(!o||o(l,i))&&l!==Object.prototype);return i},$v=(l,i,o)=>{l=String(l),(o===void 0||o>l.length)&&(o=l.length),o-=i.length;const u=l.indexOf(i,o);return u!==-1&&u===o},Jv=l=>{if(!l)return null;if(wl(l))return l;let i=l.length;if(!$0(i))return null;const o=new Array(i);for(;i-- >0;)o[i]=l[i];return o},Fv=(l=>i=>l&&i instanceof l)(typeof Uint8Array<"u"&&Is(Uint8Array)),Pv=(l,i)=>{const u=(l&&l[Bo]).call(l);let s;for(;(s=u.next())&&!s.done;){const d=s.value;i.call(l,d[0],d[1])}},Wv=(l,i)=>{let o;const u=[];for(;(o=l.exec(i))!==null;)u.push(o);return u},Iv=Jt("HTMLFormElement"),e2=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,s){return u.toUpperCase()+s}),Op=(({hasOwnProperty:l})=>(i,o)=>l.call(i,o))(Object.prototype),t2=Jt("RegExp"),P0=(l,i)=>{const o=Object.getOwnPropertyDescriptors(l),u={};Hi(o,(s,d)=>{let m;(m=i(s,d,l))!==!1&&(u[d]=m||s)}),Object.defineProperties(l,u)},n2=l=>{P0(l,(i,o)=>{if(yt(l)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=l[o];if(yt(u)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},a2=(l,i)=>{const o={},u=s=>{s.forEach(d=>{o[d]=!0})};return wl(l)?u(l):u(String(l).split(i)),o},l2=()=>{},i2=(l,i)=>l!=null&&Number.isFinite(l=+l)?l:i;function r2(l){return!!(l&&yt(l.append)&&l[Z0]==="FormData"&&l[Bo])}const o2=l=>{const i=new Array(10),o=(u,s)=>{if(Lo(u)){if(i.indexOf(u)>=0)return;if(!("toJSON"in u)){i[s]=u;const d=wl(u)?[]:{};return Hi(u,(m,x)=>{const y=o(m,s+1);!_i(y)&&(d[x]=y)}),i[s]=void 0,d}}return u};return o(l,0)},u2=Jt("AsyncFunction"),c2=l=>l&&(Lo(l)||yt(l))&&yt(l.then)&&yt(l.catch),W0=((l,i)=>l?setImmediate:i?((o,u)=>(xa.addEventListener("message",({source:s,data:d})=>{s===xa&&d===o&&u.length&&u.shift()()},!1),s=>{u.push(s),xa.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",yt(xa.postMessage)),s2=typeof queueMicrotask<"u"?queueMicrotask.bind(xa):typeof process<"u"&&process.nextTick||W0,f2=l=>l!=null&&yt(l[Bo]),U={isArray:wl,isArrayBuffer:K0,isBuffer:Rv,isFormData:Hv,isArrayBufferView:Ov,isString:Cv,isNumber:$0,isBoolean:Dv,isObject:Lo,isPlainObject:mo,isReadableStream:Lv,isRequest:qv,isResponse:Yv,isHeaders:Gv,isUndefined:_i,isDate:_v,isFile:Mv,isBlob:Nv,isRegExp:t2,isFunction:yt,isStream:Bv,isURLSearchParams:kv,isTypedArray:Fv,isFileList:Uv,forEach:Hi,merge:Hs,extend:Vv,trim:Qv,stripBOM:Xv,inherits:Zv,toFlatObject:Kv,kindOf:Ho,kindOfTest:Jt,endsWith:$v,toArray:Jv,forEachEntry:Pv,matchAll:Wv,isHTMLForm:Iv,hasOwnProperty:Op,hasOwnProp:Op,reduceDescriptors:P0,freezeMethods:n2,toObjectSet:a2,toCamelCase:e2,noop:l2,toFiniteNumber:i2,findKey:J0,global:xa,isContextDefined:F0,isSpecCompliantForm:r2,toJSONObject:o2,isAsyncFn:u2,isThenable:c2,setImmediate:W0,asap:s2,isIterable:f2};function oe(l,i,o,u,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",i&&(this.code=i),o&&(this.config=o),u&&(this.request=u),s&&(this.response=s,this.status=s.status?s.status:null)}U.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const I0=oe.prototype,eg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{eg[l]={value:l}});Object.defineProperties(oe,eg);Object.defineProperty(I0,"isAxiosError",{value:!0});oe.from=(l,i,o,u,s,d)=>{const m=Object.create(I0);return U.toFlatObject(l,m,function(y){return y!==Error.prototype},x=>x!=="isAxiosError"),oe.call(m,l.message,i,o,u,s),m.cause=l,m.name=l.name,d&&Object.assign(m,d),m};const d2=null;function ks(l){return U.isPlainObject(l)||U.isArray(l)}function tg(l){return U.endsWith(l,"[]")?l.slice(0,-2):l}function Cp(l,i,o){return l?l.concat(i).map(function(s,d){return s=tg(s),!o&&d?"["+s+"]":s}).join(o?".":""):i}function h2(l){return U.isArray(l)&&!l.some(ks)}const m2=U.toFlatObject(U,{},null,function(i){return/^is[A-Z]/.test(i)});function qo(l,i,o){if(!U.isObject(l))throw new TypeError("target must be an object");i=i||new FormData,o=U.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,_){return!U.isUndefined(_[H])});const u=o.metaTokens,s=o.visitor||b,d=o.dots,m=o.indexes,y=(o.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(i);if(!U.isFunction(s))throw new TypeError("visitor must be a function");function p(A){if(A===null)return"";if(U.isDate(A))return A.toISOString();if(!y&&U.isBlob(A))throw new oe("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(A)||U.isTypedArray(A)?y&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function b(A,H,_){let N=A;if(A&&!_&&typeof A=="object"){if(U.endsWith(H,"{}"))H=u?H:H.slice(0,-2),A=JSON.stringify(A);else if(U.isArray(A)&&h2(A)||(U.isFileList(A)||U.endsWith(H,"[]"))&&(N=U.toArray(A)))return H=tg(H),N.forEach(function(q,F){!(U.isUndefined(q)||q===null)&&i.append(m===!0?Cp([H],F,d):m===null?H:H+"[]",p(q))}),!1}return ks(A)?!0:(i.append(Cp(_,H,d),p(A)),!1)}const w=[],T=Object.assign(m2,{defaultVisitor:b,convertValue:p,isVisitable:ks});function B(A,H){if(!U.isUndefined(A)){if(w.indexOf(A)!==-1)throw Error("Circular reference detected in "+H.join("."));w.push(A),U.forEach(A,function(N,V){(!(U.isUndefined(N)||N===null)&&s.call(i,N,U.isString(V)?V.trim():V,H,T))===!0&&B(N,H?H.concat(V):[V])}),w.pop()}}if(!U.isObject(l))throw new TypeError("data must be an object");return B(l),i}function Dp(l){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(u){return i[u]})}function ef(l,i){this._pairs=[],l&&qo(l,this,i)}const ng=ef.prototype;ng.append=function(i,o){this._pairs.push([i,o])};ng.toString=function(i){const o=i?function(u){return i.call(this,u,Dp)}:Dp;return this._pairs.map(function(s){return o(s[0])+"="+o(s[1])},"").join("&")};function p2(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ag(l,i,o){if(!i)return l;const u=o&&o.encode||p2;U.isFunction(o)&&(o={serialize:o});const s=o&&o.serialize;let d;if(s?d=s(i,o):d=U.isURLSearchParams(i)?i.toString():new ef(i,o).toString(u),d){const m=l.indexOf("#");m!==-1&&(l=l.slice(0,m)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class _p{constructor(){this.handlers=[]}use(i,o,u){return this.handlers.push({fulfilled:i,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){U.forEach(this.handlers,function(u){u!==null&&i(u)})}}const lg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},g2=typeof URLSearchParams<"u"?URLSearchParams:ef,y2=typeof FormData<"u"?FormData:null,x2=typeof Blob<"u"?Blob:null,b2={isBrowser:!0,classes:{URLSearchParams:g2,FormData:y2,Blob:x2},protocols:["http","https","file","blob","url","data"]},tf=typeof window<"u"&&typeof document<"u",Ls=typeof navigator=="object"&&navigator||void 0,v2=tf&&(!Ls||["ReactNative","NativeScript","NS"].indexOf(Ls.product)<0),S2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",w2=tf&&window.location.href||"http://localhost",E2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tf,hasStandardBrowserEnv:v2,hasStandardBrowserWebWorkerEnv:S2,navigator:Ls,origin:w2},Symbol.toStringTag,{value:"Module"})),ut={...E2,...b2};function j2(l,i){return qo(l,new ut.classes.URLSearchParams,Object.assign({visitor:function(o,u,s,d){return ut.isNode&&U.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},i))}function A2(l){return U.matchAll(/\w+|\[(\w*)]/g,l).map(i=>i[0]==="[]"?"":i[1]||i[0])}function T2(l){const i={},o=Object.keys(l);let u;const s=o.length;let d;for(u=0;u<s;u++)d=o[u],i[d]=l[d];return i}function ig(l){function i(o,u,s,d){let m=o[d++];if(m==="__proto__")return!0;const x=Number.isFinite(+m),y=d>=o.length;return m=!m&&U.isArray(s)?s.length:m,y?(U.hasOwnProp(s,m)?s[m]=[s[m],u]:s[m]=u,!x):((!s[m]||!U.isObject(s[m]))&&(s[m]=[]),i(o,u,s[m],d)&&U.isArray(s[m])&&(s[m]=T2(s[m])),!x)}if(U.isFormData(l)&&U.isFunction(l.entries)){const o={};return U.forEachEntry(l,(u,s)=>{i(A2(u),s,o,0)}),o}return null}function z2(l,i,o){if(U.isString(l))try{return(i||JSON.parse)(l),U.trim(l)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(l)}const ki={transitional:lg,adapter:["xhr","http","fetch"],transformRequest:[function(i,o){const u=o.getContentType()||"",s=u.indexOf("application/json")>-1,d=U.isObject(i);if(d&&U.isHTMLForm(i)&&(i=new FormData(i)),U.isFormData(i))return s?JSON.stringify(ig(i)):i;if(U.isArrayBuffer(i)||U.isBuffer(i)||U.isStream(i)||U.isFile(i)||U.isBlob(i)||U.isReadableStream(i))return i;if(U.isArrayBufferView(i))return i.buffer;if(U.isURLSearchParams(i))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let x;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return j2(i,this.formSerializer).toString();if((x=U.isFileList(i))||u.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return qo(x?{"files[]":i}:i,y&&new y,this.formSerializer)}}return d||s?(o.setContentType("application/json",!1),z2(i)):i}],transformResponse:[function(i){const o=this.transitional||ki.transitional,u=o&&o.forcedJSONParsing,s=this.responseType==="json";if(U.isResponse(i)||U.isReadableStream(i))return i;if(i&&U.isString(i)&&(u&&!this.responseType||s)){const m=!(o&&o.silentJSONParsing)&&s;try{return JSON.parse(i)}catch(x){if(m)throw x.name==="SyntaxError"?oe.from(x,oe.ERR_BAD_RESPONSE,this,null,this.response):x}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],l=>{ki.headers[l]={}});const R2=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),O2=l=>{const i={};let o,u,s;return l&&l.split(`
`).forEach(function(m){s=m.indexOf(":"),o=m.substring(0,s).trim().toLowerCase(),u=m.substring(s+1).trim(),!(!o||i[o]&&R2[o])&&(o==="set-cookie"?i[o]?i[o].push(u):i[o]=[u]:i[o]=i[o]?i[o]+", "+u:u)}),i},Mp=Symbol("internals");function Ai(l){return l&&String(l).trim().toLowerCase()}function po(l){return l===!1||l==null?l:U.isArray(l)?l.map(po):String(l)}function C2(l){const i=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(l);)i[u[1]]=u[2];return i}const D2=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function ps(l,i,o,u,s){if(U.isFunction(u))return u.call(this,i,o);if(s&&(i=o),!!U.isString(i)){if(U.isString(u))return i.indexOf(u)!==-1;if(U.isRegExp(u))return u.test(i)}}function _2(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,o,u)=>o.toUpperCase()+u)}function M2(l,i){const o=U.toCamelCase(" "+i);["get","set","has"].forEach(u=>{Object.defineProperty(l,u+o,{value:function(s,d,m){return this[u].call(this,i,s,d,m)},configurable:!0})})}let xt=class{constructor(i){i&&this.set(i)}set(i,o,u){const s=this;function d(x,y,p){const b=Ai(y);if(!b)throw new Error("header name must be a non-empty string");const w=U.findKey(s,b);(!w||s[w]===void 0||p===!0||p===void 0&&s[w]!==!1)&&(s[w||y]=po(x))}const m=(x,y)=>U.forEach(x,(p,b)=>d(p,b,y));if(U.isPlainObject(i)||i instanceof this.constructor)m(i,o);else if(U.isString(i)&&(i=i.trim())&&!D2(i))m(O2(i),o);else if(U.isObject(i)&&U.isIterable(i)){let x={},y,p;for(const b of i){if(!U.isArray(b))throw TypeError("Object iterator must return a key-value pair");x[p=b[0]]=(y=x[p])?U.isArray(y)?[...y,b[1]]:[y,b[1]]:b[1]}m(x,o)}else i!=null&&d(o,i,u);return this}get(i,o){if(i=Ai(i),i){const u=U.findKey(this,i);if(u){const s=this[u];if(!o)return s;if(o===!0)return C2(s);if(U.isFunction(o))return o.call(this,s,u);if(U.isRegExp(o))return o.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,o){if(i=Ai(i),i){const u=U.findKey(this,i);return!!(u&&this[u]!==void 0&&(!o||ps(this,this[u],u,o)))}return!1}delete(i,o){const u=this;let s=!1;function d(m){if(m=Ai(m),m){const x=U.findKey(u,m);x&&(!o||ps(u,u[x],x,o))&&(delete u[x],s=!0)}}return U.isArray(i)?i.forEach(d):d(i),s}clear(i){const o=Object.keys(this);let u=o.length,s=!1;for(;u--;){const d=o[u];(!i||ps(this,this[d],d,i,!0))&&(delete this[d],s=!0)}return s}normalize(i){const o=this,u={};return U.forEach(this,(s,d)=>{const m=U.findKey(u,d);if(m){o[m]=po(s),delete o[d];return}const x=i?_2(d):String(d).trim();x!==d&&delete o[d],o[x]=po(s),u[x]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const o=Object.create(null);return U.forEach(this,(u,s)=>{u!=null&&u!==!1&&(o[s]=i&&U.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,o])=>i+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...o){const u=new this(i);return o.forEach(s=>u.set(s)),u}static accessor(i){const u=(this[Mp]=this[Mp]={accessors:{}}).accessors,s=this.prototype;function d(m){const x=Ai(m);u[x]||(M2(s,m),u[x]=!0)}return U.isArray(i)?i.forEach(d):d(i),this}};xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(xt.prototype,({value:l},i)=>{let o=i[0].toUpperCase()+i.slice(1);return{get:()=>l,set(u){this[o]=u}}});U.freezeMethods(xt);function gs(l,i){const o=this||ki,u=i||o,s=xt.from(u.headers);let d=u.data;return U.forEach(l,function(x){d=x.call(o,d,s.normalize(),i?i.status:void 0)}),s.normalize(),d}function rg(l){return!!(l&&l.__CANCEL__)}function El(l,i,o){oe.call(this,l??"canceled",oe.ERR_CANCELED,i,o),this.name="CanceledError"}U.inherits(El,oe,{__CANCEL__:!0});function og(l,i,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?l(o):i(new oe("Request failed with status code "+o.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function N2(l){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return i&&i[1]||""}function U2(l,i){l=l||10;const o=new Array(l),u=new Array(l);let s=0,d=0,m;return i=i!==void 0?i:1e3,function(y){const p=Date.now(),b=u[d];m||(m=p),o[s]=y,u[s]=p;let w=d,T=0;for(;w!==s;)T+=o[w++],w=w%l;if(s=(s+1)%l,s===d&&(d=(d+1)%l),p-m<i)return;const B=b&&p-b;return B?Math.round(T*1e3/B):void 0}}function B2(l,i){let o=0,u=1e3/i,s,d;const m=(p,b=Date.now())=>{o=b,s=null,d&&(clearTimeout(d),d=null),l.apply(null,p)};return[(...p)=>{const b=Date.now(),w=b-o;w>=u?m(p,b):(s=p,d||(d=setTimeout(()=>{d=null,m(s)},u-w)))},()=>s&&m(s)]}const So=(l,i,o=3)=>{let u=0;const s=U2(50,250);return B2(d=>{const m=d.loaded,x=d.lengthComputable?d.total:void 0,y=m-u,p=s(y),b=m<=x;u=m;const w={loaded:m,total:x,progress:x?m/x:void 0,bytes:y,rate:p||void 0,estimated:p&&x&&b?(x-m)/p:void 0,event:d,lengthComputable:x!=null,[i?"download":"upload"]:!0};l(w)},o)},Np=(l,i)=>{const o=l!=null;return[u=>i[0]({lengthComputable:o,total:l,loaded:u}),i[1]]},Up=l=>(...i)=>U.asap(()=>l(...i)),H2=ut.hasStandardBrowserEnv?((l,i)=>o=>(o=new URL(o,ut.origin),l.protocol===o.protocol&&l.host===o.host&&(i||l.port===o.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,k2=ut.hasStandardBrowserEnv?{write(l,i,o,u,s,d){const m=[l+"="+encodeURIComponent(i)];U.isNumber(o)&&m.push("expires="+new Date(o).toGMTString()),U.isString(u)&&m.push("path="+u),U.isString(s)&&m.push("domain="+s),d===!0&&m.push("secure"),document.cookie=m.join("; ")},read(l){const i=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(l){this.write(l,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function L2(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function q2(l,i){return i?l.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):l}function ug(l,i,o){let u=!L2(i);return l&&(u||o==!1)?q2(l,i):i}const Bp=l=>l instanceof xt?{...l}:l;function wa(l,i){i=i||{};const o={};function u(p,b,w,T){return U.isPlainObject(p)&&U.isPlainObject(b)?U.merge.call({caseless:T},p,b):U.isPlainObject(b)?U.merge({},b):U.isArray(b)?b.slice():b}function s(p,b,w,T){if(U.isUndefined(b)){if(!U.isUndefined(p))return u(void 0,p,w,T)}else return u(p,b,w,T)}function d(p,b){if(!U.isUndefined(b))return u(void 0,b)}function m(p,b){if(U.isUndefined(b)){if(!U.isUndefined(p))return u(void 0,p)}else return u(void 0,b)}function x(p,b,w){if(w in i)return u(p,b);if(w in l)return u(void 0,p)}const y={url:d,method:d,data:d,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:x,headers:(p,b,w)=>s(Bp(p),Bp(b),w,!0)};return U.forEach(Object.keys(Object.assign({},l,i)),function(b){const w=y[b]||s,T=w(l[b],i[b],b);U.isUndefined(T)&&w!==x||(o[b]=T)}),o}const cg=l=>{const i=wa({},l);let{data:o,withXSRFToken:u,xsrfHeaderName:s,xsrfCookieName:d,headers:m,auth:x}=i;i.headers=m=xt.from(m),i.url=ag(ug(i.baseURL,i.url,i.allowAbsoluteUrls),l.params,l.paramsSerializer),x&&m.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):"")));let y;if(U.isFormData(o)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((y=m.getContentType())!==!1){const[p,...b]=y?y.split(";").map(w=>w.trim()).filter(Boolean):[];m.setContentType([p||"multipart/form-data",...b].join("; "))}}if(ut.hasStandardBrowserEnv&&(u&&U.isFunction(u)&&(u=u(i)),u||u!==!1&&H2(i.url))){const p=s&&d&&k2.read(d);p&&m.set(s,p)}return i},Y2=typeof XMLHttpRequest<"u",G2=Y2&&function(l){return new Promise(function(o,u){const s=cg(l);let d=s.data;const m=xt.from(s.headers).normalize();let{responseType:x,onUploadProgress:y,onDownloadProgress:p}=s,b,w,T,B,A;function H(){B&&B(),A&&A(),s.cancelToken&&s.cancelToken.unsubscribe(b),s.signal&&s.signal.removeEventListener("abort",b)}let _=new XMLHttpRequest;_.open(s.method.toUpperCase(),s.url,!0),_.timeout=s.timeout;function N(){if(!_)return;const q=xt.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),X={data:!x||x==="text"||x==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:q,config:l,request:_};og(function(J){o(J),H()},function(J){u(J),H()},X),_=null}"onloadend"in _?_.onloadend=N:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(N)},_.onabort=function(){_&&(u(new oe("Request aborted",oe.ECONNABORTED,l,_)),_=null)},_.onerror=function(){u(new oe("Network Error",oe.ERR_NETWORK,l,_)),_=null},_.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const X=s.transitional||lg;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),u(new oe(F,X.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,l,_)),_=null},d===void 0&&m.setContentType(null),"setRequestHeader"in _&&U.forEach(m.toJSON(),function(F,X){_.setRequestHeader(X,F)}),U.isUndefined(s.withCredentials)||(_.withCredentials=!!s.withCredentials),x&&x!=="json"&&(_.responseType=s.responseType),p&&([T,A]=So(p,!0),_.addEventListener("progress",T)),y&&_.upload&&([w,B]=So(y),_.upload.addEventListener("progress",w),_.upload.addEventListener("loadend",B)),(s.cancelToken||s.signal)&&(b=q=>{_&&(u(!q||q.type?new El(null,l,_):q),_.abort(),_=null)},s.cancelToken&&s.cancelToken.subscribe(b),s.signal&&(s.signal.aborted?b():s.signal.addEventListener("abort",b)));const V=N2(s.url);if(V&&ut.protocols.indexOf(V)===-1){u(new oe("Unsupported protocol "+V+":",oe.ERR_BAD_REQUEST,l));return}_.send(d||null)})},Q2=(l,i)=>{const{length:o}=l=l?l.filter(Boolean):[];if(i||o){let u=new AbortController,s;const d=function(p){if(!s){s=!0,x();const b=p instanceof Error?p:this.reason;u.abort(b instanceof oe?b:new El(b instanceof Error?b.message:b))}};let m=i&&setTimeout(()=>{m=null,d(new oe(`timeout ${i} of ms exceeded`,oe.ETIMEDOUT))},i);const x=()=>{l&&(m&&clearTimeout(m),m=null,l.forEach(p=>{p.unsubscribe?p.unsubscribe(d):p.removeEventListener("abort",d)}),l=null)};l.forEach(p=>p.addEventListener("abort",d));const{signal:y}=u;return y.unsubscribe=()=>U.asap(x),y}},V2=function*(l,i){let o=l.byteLength;if(o<i){yield l;return}let u=0,s;for(;u<o;)s=u+i,yield l.slice(u,s),u=s},X2=async function*(l,i){for await(const o of Z2(l))yield*V2(o,i)},Z2=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const i=l.getReader();try{for(;;){const{done:o,value:u}=await i.read();if(o)break;yield u}}finally{await i.cancel()}},Hp=(l,i,o,u)=>{const s=X2(l,i);let d=0,m,x=y=>{m||(m=!0,u&&u(y))};return new ReadableStream({async pull(y){try{const{done:p,value:b}=await s.next();if(p){x(),y.close();return}let w=b.byteLength;if(o){let T=d+=w;o(T)}y.enqueue(new Uint8Array(b))}catch(p){throw x(p),p}},cancel(y){return x(y),s.return()}},{highWaterMark:2})},Yo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",sg=Yo&&typeof ReadableStream=="function",K2=Yo&&(typeof TextEncoder=="function"?(l=>i=>l.encode(i))(new TextEncoder):async l=>new Uint8Array(await new Response(l).arrayBuffer())),fg=(l,...i)=>{try{return!!l(...i)}catch{return!1}},$2=sg&&fg(()=>{let l=!1;const i=new Request(ut.origin,{body:new ReadableStream,method:"POST",get duplex(){return l=!0,"half"}}).headers.has("Content-Type");return l&&!i}),kp=64*1024,qs=sg&&fg(()=>U.isReadableStream(new Response("").body)),wo={stream:qs&&(l=>l.body)};Yo&&(l=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!wo[i]&&(wo[i]=U.isFunction(l[i])?o=>o[i]():(o,u)=>{throw new oe(`Response type '${i}' is not supported`,oe.ERR_NOT_SUPPORT,u)})})})(new Response);const J2=async l=>{if(l==null)return 0;if(U.isBlob(l))return l.size;if(U.isSpecCompliantForm(l))return(await new Request(ut.origin,{method:"POST",body:l}).arrayBuffer()).byteLength;if(U.isArrayBufferView(l)||U.isArrayBuffer(l))return l.byteLength;if(U.isURLSearchParams(l)&&(l=l+""),U.isString(l))return(await K2(l)).byteLength},F2=async(l,i)=>{const o=U.toFiniteNumber(l.getContentLength());return o??J2(i)},P2=Yo&&(async l=>{let{url:i,method:o,data:u,signal:s,cancelToken:d,timeout:m,onDownloadProgress:x,onUploadProgress:y,responseType:p,headers:b,withCredentials:w="same-origin",fetchOptions:T}=cg(l);p=p?(p+"").toLowerCase():"text";let B=Q2([s,d&&d.toAbortSignal()],m),A;const H=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let _;try{if(y&&$2&&o!=="get"&&o!=="head"&&(_=await F2(b,u))!==0){let X=new Request(i,{method:"POST",body:u,duplex:"half"}),W;if(U.isFormData(u)&&(W=X.headers.get("content-type"))&&b.setContentType(W),X.body){const[J,se]=Np(_,So(Up(y)));u=Hp(X.body,kp,J,se)}}U.isString(w)||(w=w?"include":"omit");const N="credentials"in Request.prototype;A=new Request(i,{...T,signal:B,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:u,duplex:"half",credentials:N?w:void 0});let V=await fetch(A);const q=qs&&(p==="stream"||p==="response");if(qs&&(x||q&&H)){const X={};["status","statusText","headers"].forEach(de=>{X[de]=V[de]});const W=U.toFiniteNumber(V.headers.get("content-length")),[J,se]=x&&Np(W,So(Up(x),!0))||[];V=new Response(Hp(V.body,kp,J,()=>{se&&se(),H&&H()}),X)}p=p||"text";let F=await wo[U.findKey(wo,p)||"text"](V,l);return!q&&H&&H(),await new Promise((X,W)=>{og(X,W,{data:F,headers:xt.from(V.headers),status:V.status,statusText:V.statusText,config:l,request:A})})}catch(N){throw H&&H(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,l,A),{cause:N.cause||N}):oe.from(N,N&&N.code,l,A)}}),Ys={http:d2,xhr:G2,fetch:P2};U.forEach(Ys,(l,i)=>{if(l){try{Object.defineProperty(l,"name",{value:i})}catch{}Object.defineProperty(l,"adapterName",{value:i})}});const Lp=l=>`- ${l}`,W2=l=>U.isFunction(l)||l===null||l===!1,dg={getAdapter:l=>{l=U.isArray(l)?l:[l];const{length:i}=l;let o,u;const s={};for(let d=0;d<i;d++){o=l[d];let m;if(u=o,!W2(o)&&(u=Ys[(m=String(o)).toLowerCase()],u===void 0))throw new oe(`Unknown adapter '${m}'`);if(u)break;s[m||"#"+d]=u}if(!u){const d=Object.entries(s).map(([x,y])=>`adapter ${x} `+(y===!1?"is not supported by the environment":"is not available in the build"));let m=i?d.length>1?`since :
`+d.map(Lp).join(`
`):" "+Lp(d[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return u},adapters:Ys};function ys(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new El(null,l)}function qp(l){return ys(l),l.headers=xt.from(l.headers),l.data=gs.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),dg.getAdapter(l.adapter||ki.adapter)(l).then(function(u){return ys(l),u.data=gs.call(l,l.transformResponse,u),u.headers=xt.from(u.headers),u},function(u){return rg(u)||(ys(l),u&&u.response&&(u.response.data=gs.call(l,l.transformResponse,u.response),u.response.headers=xt.from(u.response.headers))),Promise.reject(u)})}const hg="1.9.0",Go={};["object","boolean","number","function","string","symbol"].forEach((l,i)=>{Go[l]=function(u){return typeof u===l||"a"+(i<1?"n ":" ")+l}});const Yp={};Go.transitional=function(i,o,u){function s(d,m){return"[Axios v"+hg+"] Transitional option '"+d+"'"+m+(u?". "+u:"")}return(d,m,x)=>{if(i===!1)throw new oe(s(m," has been removed"+(o?" in "+o:"")),oe.ERR_DEPRECATED);return o&&!Yp[m]&&(Yp[m]=!0,console.warn(s(m," has been deprecated since v"+o+" and will be removed in the near future"))),i?i(d,m,x):!0}};Go.spelling=function(i){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${i}`),!0)};function I2(l,i,o){if(typeof l!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const u=Object.keys(l);let s=u.length;for(;s-- >0;){const d=u[s],m=i[d];if(m){const x=l[d],y=x===void 0||m(x,d,l);if(y!==!0)throw new oe("option "+d+" must be "+y,oe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new oe("Unknown option "+d,oe.ERR_BAD_OPTION)}}const go={assertOptions:I2,validators:Go},nn=go.validators;let Sa=class{constructor(i){this.defaults=i||{},this.interceptors={request:new _p,response:new _p}}async request(i,o){try{return await this._request(i,o)}catch(u){if(u instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const d=s.stack?s.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(i,o){typeof i=="string"?(o=o||{},o.url=i):o=i||{},o=wa(this.defaults,o);const{transitional:u,paramsSerializer:s,headers:d}=o;u!==void 0&&go.assertOptions(u,{silentJSONParsing:nn.transitional(nn.boolean),forcedJSONParsing:nn.transitional(nn.boolean),clarifyTimeoutError:nn.transitional(nn.boolean)},!1),s!=null&&(U.isFunction(s)?o.paramsSerializer={serialize:s}:go.assertOptions(s,{encode:nn.function,serialize:nn.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),go.assertOptions(o,{baseUrl:nn.spelling("baseURL"),withXsrfToken:nn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let m=d&&U.merge(d.common,d[o.method]);d&&U.forEach(["delete","get","head","post","put","patch","common"],A=>{delete d[A]}),o.headers=xt.concat(m,d);const x=[];let y=!0;this.interceptors.request.forEach(function(H){typeof H.runWhen=="function"&&H.runWhen(o)===!1||(y=y&&H.synchronous,x.unshift(H.fulfilled,H.rejected))});const p=[];this.interceptors.response.forEach(function(H){p.push(H.fulfilled,H.rejected)});let b,w=0,T;if(!y){const A=[qp.bind(this),void 0];for(A.unshift.apply(A,x),A.push.apply(A,p),T=A.length,b=Promise.resolve(o);w<T;)b=b.then(A[w++],A[w++]);return b}T=x.length;let B=o;for(w=0;w<T;){const A=x[w++],H=x[w++];try{B=A(B)}catch(_){H.call(this,_);break}}try{b=qp.call(this,B)}catch(A){return Promise.reject(A)}for(w=0,T=p.length;w<T;)b=b.then(p[w++],p[w++]);return b}getUri(i){i=wa(this.defaults,i);const o=ug(i.baseURL,i.url,i.allowAbsoluteUrls);return ag(o,i.params,i.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(i){Sa.prototype[i]=function(o,u){return this.request(wa(u||{},{method:i,url:o,data:(u||{}).data}))}});U.forEach(["post","put","patch"],function(i){function o(u){return function(d,m,x){return this.request(wa(x||{},{method:i,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:m}))}}Sa.prototype[i]=o(),Sa.prototype[i+"Form"]=o(!0)});let e4=class mg{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(s=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](s);u._listeners=null}),this.promise.then=s=>{let d;const m=new Promise(x=>{u.subscribe(x),d=x}).then(s);return m.cancel=function(){u.unsubscribe(d)},m},i(function(d,m,x){u.reason||(u.reason=new El(d,m,x),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const o=this._listeners.indexOf(i);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const i=new AbortController,o=u=>{i.abort(u)};return this.subscribe(o),i.signal.unsubscribe=()=>this.unsubscribe(o),i.signal}static source(){let i;return{token:new mg(function(s){i=s}),cancel:i}}};function t4(l){return function(o){return l.apply(null,o)}}function n4(l){return U.isObject(l)&&l.isAxiosError===!0}const Gs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gs).forEach(([l,i])=>{Gs[i]=l});function pg(l){const i=new Sa(l),o=X0(Sa.prototype.request,i);return U.extend(o,Sa.prototype,i,{allOwnKeys:!0}),U.extend(o,i,null,{allOwnKeys:!0}),o.create=function(s){return pg(wa(l,s))},o}const Ne=pg(ki);Ne.Axios=Sa;Ne.CanceledError=El;Ne.CancelToken=e4;Ne.isCancel=rg;Ne.VERSION=hg;Ne.toFormData=qo;Ne.AxiosError=oe;Ne.Cancel=Ne.CanceledError;Ne.all=function(i){return Promise.all(i)};Ne.spread=t4;Ne.isAxiosError=n4;Ne.mergeConfig=wa;Ne.AxiosHeaders=xt;Ne.formToJSON=l=>ig(U.isHTMLForm(l)?new FormData(l):l);Ne.getAdapter=dg.getAdapter;Ne.HttpStatusCode=Gs;Ne.default=Ne;const{Axios:G5,AxiosError:Q5,CanceledError:V5,isCancel:X5,CancelToken:Z5,VERSION:K5,all:$5,Cancel:J5,isAxiosError:F5,spread:P5,toFormData:W5,AxiosHeaders:I5,HttpStatusCode:e6,formToJSON:t6,getAdapter:n6,mergeConfig:a6}=Ne,Qo="https://ai-smart-class-py-backend.onrender.com",a4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/exam/generate_exam`,{class_num:l,subject:i,total_questions:o})).data.exam_paper}catch(u){throw console.error("Error generating exam paper",u),u}},l4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/revision/generate`,{class_num:l,subject:i,topics:o})).data.revision_notes}catch(u){throw console.error("Error generating revision notes",u),u}},i4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/quiz/generate`,{class_num:l,subject:i,topics:o})).data.quizzes}catch(u){throw console.error("Error generating quiz",u),u}},r4=async l=>{try{return(await Ne.post(`${Qo}/chat/ask`,{question:l})).data.answer}catch(i){throw console.error("Error asking doubt solver",i),i}},o4=E.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1c1c1e;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.8rem;
  }
`,u4=E.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #2e3a59;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,c4=E.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  font-size: 1.1rem;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  resize: vertical;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
   @media (max-width: 480px) {
    width: 90%;
    font-size: 1rem;
  }
`,s4=E.button`
  padding: 0.85rem 2rem;
  font-size: 1.1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease all;
  display: block;
  margin: 0 auto 2rem;
  font-weight: 600;

  &:hover {
    background-color: #256ec1;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }
`,f4=E.div`
  background-color: #f0f4f8;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #d6d8db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #2c3e50;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;
    white-space: pre-line;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`,d4=()=>{const[l,i]=M.useState(""),[o,u]=M.useState(""),[s,d]=M.useState(!1),m=async()=>{if(l.trim()){d(!0),u("");try{const x=await r4(l);u(x)}catch(x){u("⚠️ Error fetching the answer. Please try again.",x)}finally{d(!1)}}};return f.jsxs(o4,{children:[f.jsx(u4,{children:"🧠 Doubt Solver Assistant"}),f.jsx(c4,{placeholder:"Type your doubt here (e.g., Why is the sky blue?)",value:l,onChange:x=>i(x.target.value)}),f.jsx(s4,{onClick:m,children:s?"Processing...":"Get Answer"}),o&&f.jsxs(f4,{children:[f.jsx("h3",{children:"Answer:"}),f.jsx("p",{children:o})]})]})},h4=E.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,m4=E.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
`,p4=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`,xs=E.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
  }
`,g4=E.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`,Gp=E.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,y4=E.div`
  margin-bottom: 1.5rem;

  h4 {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.5rem;
  }

  ol {
    padding-left: 1.2rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`,x4=E.p`
  color: red;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`,b4=E.div`
  margin-top: 2rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,v4=()=>{const[l,i]=M.useState(""),[o,u]=M.useState(""),[s,d]=M.useState(10),[m,x]=M.useState([]),[y,p]=M.useState(""),b=async()=>{try{const T=await a4(l,o,s);T&&Array.isArray(T)?(x(T),p("")):(x([]),p("No exam paper generated."))}catch(T){console.error("Error:",T),x([]),p("Error generating exam paper.")}},w=()=>{const T=m.map(H=>{const _=H.questions.split(`
`).filter(N=>N.trim()!=="").map((N,V)=>`${V+1}. ${N.replace(/^\d+\.\s*/,"")}`).join(`
`);return`${H.difficulty} Questions:
${_}`}).join(`

`),B=new Blob([T],{type:"text/plain"}),A=document.createElement("a");A.href=window.URL.createObjectURL(B),A.download=`Class${l}_${o}_ExamPaper.txt`,A.click()};return f.jsxs(h4,{children:[f.jsx(m4,{children:"📝 Generate Exam Paper"}),f.jsxs(p4,{children:[f.jsx(xs,{type:"number",placeholder:"Class Number",value:l,onChange:T=>i(T.target.value)}),f.jsx(xs,{type:"text",placeholder:"Subject",value:o,onChange:T=>u(T.target.value)}),f.jsx(xs,{type:"number",placeholder:"Total Questions",value:s,onChange:T=>d(T.target.value)})]}),f.jsxs(g4,{children:[f.jsx(Gp,{onClick:b,children:"Generate"}),m.length>0&&f.jsx(Gp,{onClick:w,children:"Download as .txt"})]}),f.jsxs("div",{children:[y&&f.jsx(x4,{children:y}),m.length>0&&f.jsxs(b4,{children:[f.jsx("h3",{children:"Generated Exam Paper:"}),m.map((T,B)=>f.jsxs(y4,{children:[f.jsxs("h4",{children:[T.difficulty," Questions:"]}),f.jsx("ol",{children:T.questions.split(`
`).filter(A=>A.trim()!=="").map((A,H)=>f.jsx("li",{children:A.replace(/^\d+\.\s*/,"")},H))})]},B))]})]})]})},S4=E.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,w4=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`,E4=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`,bs=E.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,j4=E.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,A4=E.div`
  margin-top: 2rem;
`,T4=E.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007bff;
  display: inline-block;
`,z4=E.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem; 
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
`,R4=()=>{const[l,i]=M.useState(""),[o,u]=M.useState(""),[s,d]=M.useState(""),[m,x]=M.useState([]),[y,p]=M.useState(!1),b=async()=>{p(!0);try{const w=await i4(l,o,s.split(","));x(w)}catch(w){x(["❌ Error generating quiz. Please try again."],w)}finally{p(!1)}};return f.jsxs(S4,{children:[f.jsx(w4,{children:"🎯 Smart Quiz Generator"}),f.jsxs(E4,{children:[f.jsx(bs,{type:"number",placeholder:"Class Number",value:l,onChange:w=>i(w.target.value)}),f.jsx(bs,{type:"text",placeholder:"Subject",value:o,onChange:w=>u(w.target.value)}),f.jsx(bs,{type:"text",placeholder:"Topics (comma separated)",value:s,onChange:w=>d(w.target.value)})]}),f.jsx("div",{style:{textAlign:"center",marginBottom:"2rem"},children:f.jsx(j4,{onClick:b,disabled:y,children:y?"Generating...":"Generate Quiz"})}),f.jsxs(A4,{children:[m.length>0&&f.jsx(T4,{children:"Generated Quiz:"}),m.map((w,T)=>f.jsx(z4,{children:w},T))]})]})},O4=()=>f.jsx("div",{children:"PerformanceMetrics PerformanceMetrics"}),C4=()=>f.jsx("div",{children:"GamifiedClassroom GamifiedClassroom"}),D4=()=>f.jsx("div",{children:"MentalHealthSupport"}),_4=()=>f.jsx("div",{children:"SkillProgressTracking SkillProgressTracking"}),M4=()=>f.jsx("div",{children:"AttendanceReport"}),N4=E.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,U4=E.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`,B4=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`,vs=E.input`
  flex: 1 1 250px;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,gg=E.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,H4=E.div`
  margin-top: 2rem;
`,k4=E.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 1rem;
`,L4=E.pre`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`,q4=E(gg)`
  background-color: #28a745;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`,Y4=()=>{const[l,i]=M.useState(""),[o,u]=M.useState(""),[s,d]=M.useState(""),[m,x]=M.useState([]),y=async()=>{try{const b=await l4(l,o,s.split(","));x(b)}catch(b){x(["❌ Error generating revision notes. Please try again."],b)}},p=()=>{const b=new Blob([m.join(`

`)],{type:"text/plain"}),w=document.createElement("a");w.href=window.URL.createObjectURL(b),w.download=`Class${l}_${o}_RevisionNotes.txt`,document.body.appendChild(w),w.click(),document.body.removeChild(w)};return f.jsxs(N4,{children:[f.jsx(U4,{children:"📚 Generate Revision Planner"}),f.jsxs(B4,{children:[f.jsx(vs,{type:"number",placeholder:"Class Number",value:l,onChange:b=>i(b.target.value)}),f.jsx(vs,{type:"text",placeholder:"Subject",value:o,onChange:b=>u(b.target.value)}),f.jsx(vs,{type:"text",placeholder:"Topics (comma separated)",value:s,onChange:b=>d(b.target.value)})]}),f.jsx("div",{style:{textAlign:"center"},children:f.jsx(gg,{onClick:y,children:"Generate"})}),m.length>0&&f.jsxs(H4,{children:[f.jsx(k4,{children:"Revision Notes:"}),f.jsx(L4,{children:m.join(`

`)}),f.jsx("div",{style:{textAlign:"center"},children:f.jsx(q4,{onClick:p,children:"Download as .txt"})})]})]})};var yg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qp=Yt.createContext&&Yt.createContext(yg),G4=["attr","size","title"];function Q4(l,i){if(l==null)return{};var o=V4(l,i),u,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(s=0;s<d.length;s++)u=d[s],!(i.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(l,u)&&(o[u]=l[u])}return o}function V4(l,i){if(l==null)return{};var o={};for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(i.indexOf(u)>=0)continue;o[u]=l[u]}return o}function Eo(){return Eo=Object.assign?Object.assign.bind():function(l){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(l[u]=o[u])}return l},Eo.apply(this,arguments)}function Vp(l,i){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);i&&(u=u.filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable})),o.push.apply(o,u)}return o}function jo(l){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Vp(Object(o),!0).forEach(function(u){X4(l,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):Vp(Object(o)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(o,u))})}return l}function X4(l,i,o){return i=Z4(i),i in l?Object.defineProperty(l,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[i]=o,l}function Z4(l){var i=K4(l,"string");return typeof i=="symbol"?i:i+""}function K4(l,i){if(typeof l!="object"||!l)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var u=o.call(l,i);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(l)}function xg(l){return l&&l.map((i,o)=>Yt.createElement(i.tag,jo({key:o},i.attr),xg(i.child)))}function Ct(l){return i=>Yt.createElement($4,Eo({attr:jo({},l.attr)},i),xg(l.child))}function $4(l){var i=o=>{var{attr:u,size:s,title:d}=l,m=Q4(l,G4),x=s||o.size||"1em",y;return o.className&&(y=o.className),l.className&&(y=(y?y+" ":"")+l.className),Yt.createElement("svg",Eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,m,{className:y,style:jo(jo({color:l.color||o.color},o.style),l.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&Yt.createElement("title",null,d),l.children)};return Qp!==void 0?Yt.createElement(Qp.Consumer,null,o=>i(o)):i(yg)}function J4(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(l)}function nf(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function af(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function F4(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function bg(l){return Ct({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function P4(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(l)}function no(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(l)}function W4(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function I4(l){return Ct({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function vg(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function Ss(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(l)}function e3(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(l)}function t3(l){return Ct({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(l)}const n3=E.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,a3=E.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #4b3c88;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,l3=E.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
`,ao=E.a`
  flex: 1 1 220px;
  max-width: 280px;
  padding: 2rem;
  background-color: #464d77;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2ecc71;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`,i3=E.section`
  background-color: #f4f4f8;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
`,r3=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-column {
    flex: 1;
    min-width: 260px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1rem;
        margin-bottom: 0.8rem;
        line-height: 1.6;
        color: #555;

        a {
          color: #0077cc;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`,o3=E.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;
  justify-content: flex-start;

  a {
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0077cc;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,u3=()=>f.jsxs(n3,{children:[f.jsx(a3,{children:"Explore Our AI-Powered Features"}),f.jsxs(l3,{children:[f.jsx(ao,{href:"#/doubt-solver",children:"Doubt Solving Assistant 🤔"}),f.jsx(ao,{href:"#/exam-paper-generator",children:"Exam Paper Generator 📝"}),f.jsx(ao,{href:"#/smart-quiz-generator",children:"Smart Quiz Generator 🎯"}),f.jsx(ao,{href:"#/revision-planner",children:"Revision Planner 📚"})]}),f.jsx(i3,{children:f.jsxs(r3,{children:[f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"About"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("strong",{children:"AI Smart Class"})," revolutionizes learning with powerful AI tools for students and teachers alike."]}),f.jsx("li",{children:f.jsx("a",{href:"#/about-ai-smart-class",children:"Learn more →"})})]})]}),f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"Contact"}),f.jsxs("ul",{children:[f.jsx("li",{children:"📍 Bailey Road, Patna, Bihar, India"}),f.jsx("li",{children:"📞 +91-9472994483"}),f.jsxs("li",{children:["📧 ",f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]})]})]}),f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"Follow Us"}),f.jsxs(o3,{children:[f.jsx("a",{href:"#","aria-label":"YouTube",target:"_blank",rel:"noopener noreferrer",children:f.jsx(bg,{})}),f.jsx("a",{href:"#","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:f.jsx(nf,{})}),f.jsx("a",{href:"#","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:f.jsx(af,{})})]})]})]})})]}),c3=E.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #333;
  background-color: #f7f9fc;

  img {
    width: 320px;
    max-width: 80%;
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ff4d4d;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }

  a {
    background-color: #0077cc;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005fa3;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;

    img {
      width: 240px;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    img {
      width: 200px;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 1rem;
      padding: 0.5rem 1.2rem;
    }
  }
`,s3=()=>f.jsxs(c3,{children:[f.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2748/2748558.png",alt:"404 Not Found"}),f.jsx("h1",{children:"404 - Page Not Found"}),f.jsx("p",{children:"Oops! The page you're looking for doesn't exist or has been moved."}),f.jsx($t,{to:"#/ai-smart-class",children:"← Go Back to Homepage"})]}),f3=E.footer`
  background-color: #1c1c1e;
  color: #ccc;
  padding: 40px 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 30px 15px;
    font-size: 0.85rem;
  }
`,d3=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`,lo=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4B8DF8;
      text-decoration: underline;
    }
  }
`,h3=E.div`
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: #888;

  a {
    color: #4B8DF8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`,m3=()=>f.jsxs(f3,{children:[f.jsxs(d3,{children:[f.jsxs(lo,{children:[f.jsx("h3",{children:"AI Smart Class"}),f.jsx("a",{href:"#",children:"AI-Teaching"}),f.jsx("a",{href:"#",children:"AI-Learning"}),f.jsx("a",{href:"#",children:"AI-Classes"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Explore"}),f.jsx("a",{href:"#",children:"Our Team"}),f.jsx("a",{href:"#",children:"Join Our Community"}),f.jsx("a",{href:"#",children:"Our Partners"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Follow Us"}),f.jsx("a",{href:"#",children:"Instagram"}),f.jsx("a",{href:"#",children:"YouTube"}),f.jsx("a",{href:"#",children:"LinkedIn"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Contact Us"}),f.jsx("div",{children:"Phone: +91 9472994483"}),f.jsx("div",{children:"Phone: +91 9608049406"}),f.jsxs("div",{children:["Email: ",f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]})]})]}),f.jsxs(h3,{children:[f.jsx("p",{children:"© 2025 AI Smart Class powered by A2Pyramid. All rights reserved."}),f.jsxs("p",{children:[f.jsx("a",{href:"#",children:"Privacy Policy"})," | ",f.jsx("a",{href:"#",children:"Terms and Conditions"})]})]})]}),p3=E.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
  color: #1e1e1e;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`,sl=E.section`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`,g3=E.h2`
  font-size: 3rem;
  color: #1a237e;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,Ti=E.h3`
  font-size: 2rem;
  color: #283593;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,io=E.p`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Xp=E.ul`
  list-style-type: disc;
  padding-left: 25px;
  color: #444;
`,Rt=E.li`
  margin-bottom: 12px;
  font-size: 1.1rem;

  strong {
    color: #1a237e;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,y3=E.div`
  text-align: center;
  margin-top: 60px;
`,x3=E.a`
  display: inline-block;
  padding: 14px 32px;
  background-color: #1a73e8;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0f5bd8;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`,b3=()=>f.jsxs(p3,{children:[f.jsxs(sl,{children:[f.jsx(g3,{children:"About AI Smart Class"}),f.jsx(io,{children:"AI Smart Class is a cutting-edge educational platform designed to revolutionize the learning experience through the integration of artificial intelligence. Our mission is to provide personalized, efficient, and engaging educational tools that cater to the unique needs of each student."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Mission"}),f.jsx(io,{children:"To empower educators and learners by harnessing the power of AI to create a more adaptive, interactive, and effective educational environment."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Vision"}),f.jsx(io,{children:"To be at the forefront of educational innovation, ensuring that every learner has access to tools that support their individual learning journey and foster a lifelong love for learning."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Core Values"}),f.jsxs(Xp,{children:[f.jsxs(Rt,{children:[f.jsx("strong",{children:"Innovation:"})," Continuously integrating the latest AI technologies to enhance learning experiences."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Accessibility:"})," Ensuring that our tools are available and beneficial to all learners, regardless of their background."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Personalization:"})," Adapting educational content to meet the unique needs of each student."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Collaboration:"})," Working closely with educators, students, and institutions to refine and improve our offerings."]})]})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"What We Offer"}),f.jsxs(Xp,{children:[f.jsxs(Rt,{children:[f.jsx("strong",{children:"Doubt Solver:"})," An AI-powered assistant that provides instant answers to student queries, ensuring continuous learning without interruptions."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Exam Paper Generator:"})," Tools that help educators create customized exam papers tailored to their curriculum and student needs."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Smart Quiz Generator:"})," Dynamic quizzes that adapt to student performance, reinforcing learning and identifying areas for improvement."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Performance Metrics:"})," Comprehensive analytics that track student progress, helping educators make informed decisions."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Gamified Classroom:"})," Engaging game-based learning modules that make education fun and interactive."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Mental Health Support:"})," Resources and tools to support the emotional well-being of students, recognizing the importance of mental health in education."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Skill Progress Tracking:"})," Monitoring tools that help students and educators track the development of specific skills over time."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Attendance Report:"})," Efficient tracking of student attendance, ensuring accountability and consistency."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Revision Planner:"})," Personalized study plans that help students organize their revision schedules effectively."]})]})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Team"}),f.jsx(io,{children:"Behind AI Smart Class is a dedicated team of educators, developers, and AI specialists committed to transforming the educational landscape. Our diverse backgrounds and shared passion for learning drive us to create tools that make a real difference in the classroom."})]}),f.jsx(y3,{children:f.jsx(x3,{href:"#",children:"Join Our Community"})})]}),v3=E.section`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(145deg, #f2f4f8, #ffffff);
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,S3=E.div`
  max-width: 1200px;
  margin: 0 auto;
`,w3=E.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
  font-weight: 700;
`,E3=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,j3=E.div`
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`,ws=E.div`
  margin-bottom: 2rem;

  h4 {
    color: #4b8df8;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p, a {
    font-size: 1.05rem;
    color: #333;
    margin: 0.3rem 0;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0077cc;
    }
  }
`,A3=E.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 2rem;
    color: #555;
    transition: transform 0.2s, color 0.3s;

    &:hover {
      color: #0077cc;
      transform: scale(1.15);
    }
  }
`,T3=E.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`,z3=E.span`
  color: #4b8df8;
  font-weight: 600;
`,R3=()=>f.jsx(v3,{children:f.jsxs(S3,{children:[f.jsxs(w3,{children:["Contact ",f.jsx(z3,{children:"AI Smart Class"})]}),f.jsxs(E3,{children:[f.jsxs(j3,{children:[f.jsxs(ws,{children:[f.jsx("h4",{children:"📞 Phone"}),f.jsx("p",{children:"+91 9472994483"}),f.jsx("p",{children:"+91 9608049406"})]}),f.jsxs(ws,{children:[f.jsx("h4",{children:"📧 Email"}),f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]}),f.jsxs(ws,{children:[f.jsx("h4",{children:"🔗 Follow Us"}),f.jsxs(A3,{children:[f.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:f.jsx(nf,{})}),f.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer","aria-label":"YouTube",children:f.jsx(bg,{})}),f.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:f.jsx(af,{})})]})]})]}),f.jsx(T3,{children:f.jsx("iframe",{title:"AI Smart Class Location",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.566606219661!2d85.068942!3d25.612116000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1746647373473!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})});E.header`
  background: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;E.h1`
  font-size: 1.5rem;
`;E.div`
  display: flex;
  gap: 1rem;
`;E($t)`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: linear-gradient(90deg, #00c6ff, #0072ff);
  }
`;E.div`
  position: relative;
  cursor: pointer;
`;E.div`
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  display: ${({open:l})=>l?"block":"none"};
`;E.div`
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 50%;
`;const O3=E.footer`
  background: #222;
  color: white;
  padding: 1rem;
  text-align: center;
`,C3=()=>f.jsx(O3,{children:"© 2025 A2 Pyramid"}),D3=E.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab); /* Professional gradient */
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`,_3=E.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,M3=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Zp=E.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  min-width: 280px;
  max-width: 350px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: teal;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Kp=E.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,$p=E.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #e0e0e0;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    &::before {
      content: '✔';
      margin-right: 8px;
      color: #00d1ff;
    }
  }
`,N3=()=>{const l=H0();return f.jsxs(D3,{children:[f.jsx(_3,{children:f.jsxs(M3,{children:[f.jsxs(Zp,{onClick:()=>l("/edutech"),children:[f.jsx(Kp,{children:"Edutech"}),f.jsxs($p,{children:[f.jsx("li",{children:"AI/ML Training"}),f.jsx("li",{children:"Web Development"}),f.jsx("li",{children:"DevOps"}),f.jsx("li",{children:"QA Engineering"})]})]}),f.jsxs(Zp,{onClick:()=>l("/ai-smart-class"),children:[f.jsx(Kp,{children:"AI Smart Class"}),f.jsxs($p,{children:[f.jsx("li",{children:"AI Assistant Chatbot"}),f.jsx("li",{children:"AI Smart Learning"}),f.jsx("li",{children:"AI Smart Teaching"}),f.jsx("li",{children:"AI Smart Assessment"})]})]})]})}),f.jsx(C3,{})]})};E.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1120px;
  margin: 0 auto;
`;E($t)`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #4a4a4a;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;E($t)`
  font-size: 1rem;
  color: #4a4a4a;
  padding-right: 2.75rem;
  text-decoration: none;

  &:hover {
    color: #3b82f6;
  }
`;E.div`
  position: relative;
  cursor: pointer;
`;E.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 12rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  font-weight: bold;
  font-size: 0.875rem;
  z-index: 50;
`;E($t)`
  padding: 0.5rem;
  display: block;
  color: #374151;
  text-decoration: none;

  &:hover {
    background-color: #f3f4f6;
  }
`;E.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  }

  & input {
    padding-left: 2.5rem;
    padding-right: 3.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 20rem;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 9999px;
    outline: none;
  }

  & button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #2563eb;
    }
  }
`;E.div`
  position: relative;
  display: flex;
  align-items: center;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 1.5rem;
  }
`;E.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 10rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  z-index: 50;

  & a,
  & button {
    padding: 0.75rem;
    display: block;
    text-align: left;
    color: #374151;
    background-color: white;
    text-decoration: none;
    border: none;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;E.div`
  display: block;
  font-size: 2rem;
  color: #4a4a4a;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;const U3=E.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`,B3=E.div`
  max-width: 1200px;
  margin: auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H3=E.a`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #1f2937;

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`,k3=E.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,fl=E.a`
  text-decoration: none;
  color: #374151;
  font-weight: 500;

  &:hover {
    color: #2563EB;
  }
`,L3=E.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,q3=E.input`
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  border: 1px solid #D1D5DB;
  border-radius: 9999px;
  background-color: #F9FAFB;
  width: 16rem;

  &:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
  }
`,Y3=E.button`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2563EB;
  cursor: pointer;
`,G3=E.div`
  display: block;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: #374151;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,Q3=E.div`
  display: ${({open:l})=>l?"flex":"none"};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;

    &:hover {
      color: #2563EB;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`,Ao=()=>{const[l,i]=M.useState(!1),o=()=>{i(s=>!s)},u=()=>{i(!1)};return f.jsxs(U3,{children:[f.jsxs(B3,{children:[f.jsxs(H3,{href:"#/edutech",children:[f.jsx("img",{src:"/img/logo2.png",alt:"Logo"}),"Pyramid"]}),f.jsxs(k3,{children:[f.jsx(fl,{href:"#/edutech",children:"Home"}),f.jsx(fl,{href:"#/edutech/about",children:"About"}),f.jsx(fl,{href:"#/edutech/contact",children:"Contact"}),f.jsxs(L3,{children:[f.jsx(q3,{type:"text",placeholder:"Search"}),f.jsx(Y3,{children:f.jsx(e3,{})})]})]}),f.jsx(G3,{onClick:o,children:l?f.jsx(t3,{}):f.jsx(P4,{})})]}),f.jsxs(Q3,{open:l,children:[f.jsx(fl,{href:"#/edutech",onClick:u,children:"Home"}),f.jsx(fl,{href:"#/edutech/about",onClick:u,children:"About"}),f.jsx(fl,{href:"#/edutech/contact",onClick:u,children:"Contact"})]})]})},lf=Mo`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,V3=E.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  color: #333;
`,X3=E.div`
  background: url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D') no-repeat center/cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${lf} 2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    z-index: 2;
    font-size: 3.5em;
    margin-bottom: 15px;
  }

  p {
    z-index: 2;
    font-size: 1.5em;
  }
`,Es=E.h2`
  font-size: 2.5em;
  text-align: center;
  margin: 60px 0 30px;
  color: #2a5d84;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  animation: ${lf} 1.5s ease-in-out forwards;
`,Z3=E.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  gap: 40px;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${lf} 1.5s ease-in-out forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`,Jp=E.a`
  display: inline-block;
  background: #fff;
  color: white;
  padding: 12px 25px;
  font-size: 1.2em;
  border-radius: 5px 30px 5px;
  text-align: center;
  text-decoration: none;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #004080;
    transform: translateY(-3px);
  }
`,K3=E.div`
  max-width: 600px;

  h2 {
    font-size: 2.5em;
    color: #006f8e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.5em;
    color: #006f8e;
    font-weight: bold;
    margin-top: 20px;
  }

  p {
    font-size: 1.2em;
    color: #555;
    line-height: 1.7;
    margin-bottom: 25px;
    
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.1em;
      margin: 12px 0;
      display: flex;
      align-items: center;
      color: #333;

      svg {
        margin-right: 10px;
        color: #007bff;
        font-size: 1.4em;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: scale(1.1);
      }
    }
  }

  a {
    color: #007bff;
    font-size: 1.2em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border: 2px solid #007bff;
    border-radius: 5px 25px 5px;
    padding: 10px 15px;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-top: 25px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background-color: #007bff;
      color: white;
      transform: translateY(-3px);
    }
  }
`,$3=E.div`
  width: 100%;
  height: 400px;
  margin-top: 100px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,J3=E.div`
  padding: 50px 20px;
  background-color: #f1f1f1;

  .courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .course {
      background-color: #2c3e50;
      color: white;
      padding: 25px;
    //   border-radius: 12px;
      border-radius: 5px 25px 5px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      font-size: 1.3em;
      text-align: center;
      width: 220px;
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }
`,F3=E.div`
  padding: 50px 20px;
  background-color: #e3f2fd;

  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .team-member {
    text-align: center;

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.4em;
      margin: 10px 0;
    }

    p {
      color: #555;
      font-size: 1.1em;
    }
  }
`,P3=E.div`
  background-color: #34495e;
  color: white;
  padding: 50px 20px;
  text-align: center;

  .testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .testimonial {
    background-color: #ecf0f1;
    color: #2c3e50;
    padding: 20px;
    border-radius: 12px;
    max-width: 300px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    position: relative;

    p {
      font-style: italic;
    }

    svg {
      position: absolute;
      top: -10px;
      left: 10px;
      color: #007bff;
      font-size: 1.5em;
    }
  }
`,W3=E.div`
  padding: 20px;
  color: #333;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,js=E.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  img {
    width: 34px;
    height: 34px;
    margin-right: 8px;
  }`,I3=()=>{const l=[{img:"/img/aditya.png",name:"Aditya Apurv",role:"CEO & Founder"},{img:"/img/satish.PNG",name:"Satish Kumar",role:"CTO & Co-Founder"},{img:"/img/keshav.PNG",name:"Keshav Nair",role:"COO & Manager"}];return f.jsxs(V3,{children:[f.jsx(Ao,{}),f.jsx(X3,{children:f.jsx("h1",{style:{fontWeight:"bold"},children:"About Us"})}),f.jsxs(Z3,{children:[f.jsxs(K3,{children:[f.jsx("h2",{children:"Your Trusted EdTech Partner with 3 Years of Expertise"}),f.jsx("p",{children:"With years of experience, our EdTech platform is dedicated to fostering meaningful educational journeys and lifelong learning. We strive to make education accessible, engaging, and impactful through innovative approaches."}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(no,{})," One to One Mentorship"]}),f.jsxs("li",{children:[f.jsx(no,{})," Professional Staff"]}),f.jsxs("li",{children:[f.jsx(no,{})," 24/7 Support"]}),f.jsxs("li",{children:[f.jsx(no,{})," Fair Prices"]})]}),f.jsx("h3",{children:"Call us to ask any questions:"}),f.jsxs("a",{href:"tel:+919472994483",children:[f.jsx(vg,{})," +91 9472994483"]}),f.jsx("h3",{children:"Fill this Google Form to Join"}),f.jsxs("div",{className:"form-buttons",children:[f.jsx(Jp,{href:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Google Form"}),f.jsx(Jp,{href:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Join Now"})]})]}),f.jsx($3,{children:f.jsx("img",{src:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjB0ZWFtJTIwZGlzY3Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",alt:"Team Discussion"})})]}),f.jsx(Es,{children:"Courses We Offer"}),f.jsx(J3,{children:f.jsx("div",{className:"courses",children:["Data Science","MERN Stack","AI/ML","Data Analytics","Quality Assurance","DevOps","Web Development"].map((i,o)=>f.jsx("div",{className:"course",children:i},o))})}),f.jsx(Es,{children:"Professional Staff Ready to Help You Grow"}),f.jsx(F3,{children:f.jsx("div",{className:"team-members",children:l.map((i,o)=>f.jsxs("div",{className:"team-member",children:[f.jsx("img",{src:i.img,alt:i.name}),f.jsx("h3",{children:i.name}),f.jsx("p",{children:i.role})]},o))})}),f.jsx(Es,{children:"What People Say"}),f.jsx(P3,{children:f.jsxs("div",{className:"testimonials",children:[f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"A2 Pyramid mentorship program has been a game-changer for my career. The guidance I received was practical and tailored to my needs, helping me secure a job in just 3 months!"}),f.jsx("h3",{children:"- Ankit"})]}),f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"The course material at A2 Pyramid is up-to-date and comprehensive. I was able to gain hands-on experience that boosted my confidence and skills. Highly recommend!"}),f.jsx("h3",{children:"- Namrata"})]}),f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"As a working professional, the flexible learning options at A2 Pyramid were perfect for me. I was able to balance work and study while gaining valuable insights into my field."}),f.jsx("h3",{children:"Aneesha"})]})]})}),f.jsx(W3,{children:f.jsxs("div",{children:[f.jsx("h4",{style:{fontSize:"2rem",color:"#002D62",fontWeight:"bold",width:"83%",margin:"auto",padding:"10px",borderRadius:"5px"},children:"Social Media"}),f.jsxs(js,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s",alt:"YouTube icon"}),"YouTube"]}),f.jsxs(js,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJhDxqnknL532tb3usCPP13d8PIiuKcUCmQ&s",alt:"Twitter icon"}),"Twitter"]}),f.jsxs(js,{href:"https://www.instagram.com/a2pyramid/",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://img.icons8.com/color/48/000000/instagram-new.png",alt:"Instagram icon"}),"Instagram"]})]})})]})},eS=E.div`
  background-color: #f8f9fa;
  font-family: "Roboto", sans-serif;
`,tS=Mo`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,nS=E.div`
  background: url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D') no-repeat center/cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${tS} 2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    z-index: 2;
    font-size: 3.5em;
    margin-bottom: 15px;
  }

  p {
    z-index: 2;
    font-size: 1.5em;
  }
`,aS=E.div`
  padding: 40px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`,lS=E.div`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  font-size: 1rem;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));
    transform: rotate(45deg);
    z-index: 0;
  }

  h2 {
    z-index: 1;
    position: relative;
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      color: #ffdd57;
    }
  }
  h3 {
    // z-index: 1;
    // position: relative;
    margin-bottom: 10px;
    font-size: 1.6rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    z-index: 1;
    position: relative;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 1.3rem;
      @media (max-width: 768px) {
        font-size: 1rem;
      }

      svg {
        color: #ffdd57;
        font-size: 1rem;
      }
    }
  }

  h3 {
    z-index: 1;
    position: relative;
    margin-top: 20px;
    text-align: center;
  }
`,iS=E.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 30px 0;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease, background 0.4s, box-shadow 0.3s;

    &:hover {
      background: linear-gradient(135deg, #25a6f6, #25a6f6);
      color: #004080;
      transform: scale(1.2);
    }

    svg {
      font-size: 1.5rem;
    }
  }
`,rS=E.form`
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      color: #007bff;
    }
  }

  .form-group {
    margin-bottom: 15px;

    label {
      font-weight: bold;
      margin-bottom: 5px;
      display: inline-block;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px 25px 5px;
    font-size: 1rem;
    width: 150px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }
`,oS=E.div`
  margin-top: 40px;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }
`,uS=E.div`
  padding: 20px;
  color: #333;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,As=E.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  img {
    width: 34px;
    height: 34px;
    margin-right: 8px;
  }`,cS=()=>f.jsxs(eS,{children:[f.jsx(Ao,{}),f.jsx(nS,{children:f.jsx("h1",{style:{fontWeight:"bold"},children:"Contact Us"})}),f.jsxs(aS,{children:[f.jsxs(lS,{children:[f.jsxs("h2",{children:["Contact ",f.jsx("span",{children:f.jsx("u",{children:"Information"})})]}),f.jsx("p",{children:"Have questions or need assistance? We are here to help—reach out anytime!"}),f.jsx("br",{}),f.jsx("hr",{}),f.jsx("br",{}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(I4,{})," ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"},children:"Rukunpura, Tilak Nagar,Bailey Road Patna, Pin:800014"})]}),f.jsx("br",{}),f.jsxs("li",{children:[f.jsx(vg,{})," ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"},children:"+91 9472994483 "})]}),f.jsx("br",{}),f.jsxs("li",{children:[f.jsx(W4,{}),"  ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1rem",fontFamily:"roboto",letterSpacing:"3px"},children:"studypyramid@gmail.com"})]}),f.jsx("br",{})]}),f.jsx("h2",{children:"Follow Us"}),f.jsxs(iS,{children:[f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(J4,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(F4,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(af,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(nf,{})})})]})]}),f.jsxs(rS,{children:[f.jsxs("h2",{children:["Get In ",f.jsx("span",{children:"Touch"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Your Name"}),f.jsx("input",{type:"text",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Your Email Address"}),f.jsx("input",{type:"email",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Subject"}),f.jsx("input",{type:"text",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Message"}),f.jsx("textarea",{rows:"4",required:!0})]}),f.jsx("button",{type:"submit",children:"Send Message"})]})]}),f.jsx(oS,{children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.781657220188!2d85.06637777539542!3d25.612170677446155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1730015108345!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy"})}),f.jsx(uS,{children:f.jsxs("div",{children:[f.jsx("h4",{style:{fontSize:"2rem",color:"#002D62",fontWeight:"bold",width:"83%",margin:"auto",padding:"10px",borderRadius:"5px"},children:"Social Media"}),f.jsxs(As,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s",alt:"YouTube icon"}),"YouTube"]}),f.jsxs(As,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJhDxqnknL532tb3usCPP13d8PIiuKcUCmQ&s",alt:"Twitter icon"}),"Twitter"]}),f.jsxs(As,{href:"https://www.instagram.com/a2pyramid/",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://img.icons8.com/color/48/000000/instagram-new.png",alt:"Instagram icon"}),"Instagram"]})]})})]});var dl={},Fp;function sS(){if(Fp)return dl;Fp=1,Object.defineProperty(dl,"__esModule",{value:!0});var l=e0(),i=To(),o=function(){return o=Object.assign||function(y){for(var p,b=1,w=arguments.length;b<w;b++)for(var T in p=arguments[b])Object.prototype.hasOwnProperty.call(p,T)&&(y[T]=p[T]);return y},o.apply(this,arguments)};function u(y,p){var b,w;switch(p.type){case"TYPE":return o(o({},y),{speed:p.speed,text:(b=p.payload)===null||b===void 0?void 0:b.substring(0,y.text.length+1)});case"DELAY":return o(o({},y),{speed:p.payload});case"DELETE":return o(o({},y),{speed:p.speed,text:(w=p.payload)===null||w===void 0?void 0:w.substring(0,y.text.length-1)});case"COUNT":return o(o({},y),{count:y.count+1});default:return y}}var s=function(y){var p=y.words,b=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,w=y.loop,T=w===void 0?1:w,B=y.typeSpeed,A=B===void 0?80:B,H=y.deleteSpeed,_=H===void 0?50:H,N=y.delaySpeed,V=N===void 0?1500:N,q=y.onLoopDone,F=y.onType,X=y.onDelete,W=y.onDelay,J=i.useReducer(u,{speed:A,text:"",count:0}),se=J[0],de=se.speed,_e=se.text,Ve=se.count,Ce=J[1],ct=i.useRef(0),at=i.useRef(!1),Re=i.useRef(!1),k=i.useRef(!1),Z=i.useRef(!1),ee=i.useCallback(function(){var re=Ve%b.length,S=b[re];Re.current?(Ce({type:"DELETE",payload:S,speed:_}),_e===""&&(Re.current=!1,Ce({type:"COUNT"}))):(Ce({type:"TYPE",payload:S,speed:A}),k.current=!0,_e===S&&(Ce({type:"DELAY",payload:V}),k.current=!1,Z.current=!0,setTimeout(function(){Z.current=!1,Re.current=!0},V),T>0&&(ct.current+=1,ct.current/b.length===T&&(Z.current=!1,at.current=!0)))),k.current&&F&&F(ct.current),Re.current&&X&&X(),Z.current&&W&&W()},[Ve,V,_,T,A,b,_e,F,X,W]);return i.useEffect(function(){var re=setTimeout(ee,de);return at.current&&clearTimeout(re),function(){return clearTimeout(re)}},[ee,de]),i.useEffect(function(){q&&at.current&&q()},[q]),[_e,{isType:k.current,isDelay:Z.current,isDelete:Re.current,isDone:at.current}]},d="styles-module_blinkingCursor__yugAC",m="styles-module_blinking__9VXRT";(function(y,p){p===void 0&&(p={});var b=p.insertAt;if(typeof document<"u"){var w=document.head||document.getElementsByTagName("head")[0],T=document.createElement("style");T.type="text/css",b==="top"&&w.firstChild?w.insertBefore(T,w.firstChild):w.appendChild(T),T.styleSheet?T.styleSheet.cssText=y:T.appendChild(document.createTextNode(y))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var x=i.memo(function(y){var p=y.cursorBlinking,b=p===void 0||p,w=y.cursorStyle,T=w===void 0?"|":w,B=y.cursorColor,A=B===void 0?"inherit":B;return l.jsx("span",o({style:{color:A},className:"".concat(d," ").concat(b?m:"")},{children:T}))});return dl.Cursor=x,dl.Typewriter=function(y){var p=y.words,b=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,w=y.loop,T=w===void 0?1:w,B=y.typeSpeed,A=B===void 0?80:B,H=y.deleteSpeed,_=H===void 0?50:H,N=y.delaySpeed,V=N===void 0?1500:N,q=y.cursor,F=q!==void 0&&q,X=y.cursorStyle,W=X===void 0?"|":X,J=y.cursorColor,se=J===void 0?"inherit":J,de=y.cursorBlinking,_e=de===void 0||de,Ve=y.onLoopDone,Ce=y.onType,ct=y.onDelay,at=y.onDelete,Re=s({words:b,loop:T,typeSpeed:A,deleteSpeed:_,delaySpeed:V,onLoopDone:Ve,onType:Ce,onDelay:ct,onDelete:at})[0];return l.jsxs(l.Fragment,{children:[l.jsx("span",{children:Re}),F&&l.jsx(x,{cursorStyle:W,cursorColor:se,cursorBlinking:_e})]})},dl.useTypewriter=s,dl}var fS=sS();const dS=E.section`
  background-color: #ffffff;
  padding: 3rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 4rem 0;
  }
`,hS=E.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 5rem;
  }
`,mS=E.div`
  max-width: 40rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`,pS=E.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937; /* Tailwind: text-gray-800 */
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`,gS=E.div`
  font-size: 1rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`,yS=E.span`
  font-weight: 700;
  font-size: 1.25rem;
`,xS=E.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #4f46e5; /* Tailwind: text-indigo-600 */
`,bS=E.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`,vS=E($t)`
  background-color: #2563eb; /* Tailwind: bg-blue-600 */
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;

  @media (min-width: 640px) {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #1d4ed8; /* Tailwind: hover:bg-blue-700 */
  }
`,SS=E.div`
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`,wS=E.img`
  width: 12rem;
  height: auto;

  @media (min-width: 640px) {
    width: 15rem;
  }

  @media (min-width: 1024px) {
    width: 18rem;
  }
`,ES=()=>f.jsx(dS,{children:f.jsxs(hS,{children:[f.jsxs(mS,{children:[f.jsx(pS,{children:"Achieve Your Learning Goals"}),f.jsxs(gS,{children:[f.jsx(yS,{children:"Learn "}),f.jsx(xS,{children:f.jsx(fS.Typewriter,{words:["Programming Languages","Web Development","Data Science","Machine Learning","UI/UX Design"],loop:0,cursor:!0,cursorStyle:"|",typeSpeed:100,deleteSpeed:100,delaySpeed:1500})})]}),f.jsx(bS,{children:"Start, advance, or switch your career with a variety of courses, certifications, and degrees from top educators and institutions worldwide."}),f.jsx(vS,{to:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Join For Free"})]}),f.jsx(SS,{children:f.jsx(wS,{src:"/img/hero3.png",alt:"Learning illustration"})})]})});E.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;E.div`
  display: flex;
  margin-right: 1rem;
  gap: 1rem;
`;E.a`
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &.whatsapp {
    background-color: #25D366;
    &:hover {
      background-color: #1ebc5b;
    }
  }

  &.phone {
    background-color: #2563EB;
    &:hover {
      background-color: #1e4ed8;
    }
  }
`;E.div`
  background-color: #2563EB;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e4ed8;
  }

  svg {
    color: white;
    font-size: 20px;
  }
`;const jS=E.section`
  background-color: #f7fafc;
  padding: 2.5rem 0;
`,AS=E.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
  
  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,TS=E.h2`
  font-size: 1.875rem;
  font-weight: 600;
  text-align: center;
  color: #2d3748;
  margin-bottom: 2rem;
  
  a {
    color: #3182ce;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #2b6cb0;
    }
  }
`,zS=E.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`,hl=E.img`
  height: 4rem;
  max-width: 150px;
  width: 100%;
  object-fit: contain;
  
  @media (min-width: 768px) {
    height: 6rem;
  }
`,RS=()=>f.jsx(jS,{children:f.jsxs(AS,{children:[f.jsxs(TS,{children:["We collaborate with"," ",f.jsx("a",{href:"#collaborators",children:"leading companies and institutions"})]}),f.jsxs(zS,{children:[f.jsx(hl,{src:"/img/google.png",alt:"Google"}),f.jsx(hl,{src:"/img/facebook.png",alt:"Facebook"}),f.jsx(hl,{src:"/img/samsung.png",alt:"Samsung"}),f.jsx(hl,{src:"/img/ibm.png",alt:"IBM"}),f.jsx(hl,{src:"/img/amazon.png",alt:"Amazon"}),f.jsx(hl,{src:"/img/microsoft.png",alt:"Microsoft"})]})]})}),OS=E.div`
  text-align: center;
  padding: 40px 20px 10px;

  h2:first-child {
    font-size: 1.2rem;
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
  }

  h2:last-child {
    font-size: 2.5rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`,CS=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 20px 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,DS=E.div`
  background-color: #fff;
  padding: 20px;
  border: 2px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
  }
`,_S=E.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`,MS=E.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 12px;
`,NS=E.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,US=E.p`
  font-size: 1.2rem;
  color: #2ECC71;
  font-weight: bold;
  margin-bottom: 16px;
`,BS=E.button`
  background-color: #1E88E5;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976D2;
  }
`,HS=()=>{const l=[{title:"MERN Stack",description:"Master full-stack development with MongoDB, Express, React, and Node.js for dynamic web apps.",fee:"20,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://wallpapercave.com/wp/wp8903890.jpg"},{title:"Data Analytics",description:"Unlock data insights using Excel, SQL, and Python for impactful, data-driven decision-making.",fee:"20,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://www.purplescape.com/wp-content/uploads/2022/08/Old-Blog-Banners-Purplescape-85.jpg"},{title:"Machine Learning",description:"Learn cutting-edge algorithms and models to develop predictive machine learning applications.",fee:"45,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://thumbs.dreamstime.com/b/machine-deep-learning-algorithms-artificial-intelligence-ai-automation-modern-technology-business-as-concept-134359416.jpg"},{title:"DevOps",description:"Become proficient in CI/CD, Docker, and Kubernetes to automate deployments and boost efficiency.",fee:"35,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://t3.ftcdn.net/jpg/05/12/04/52/360_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg"},{title:"QA Engineering",description:"Master software testing, automation, and quality assurance techniques for delivering bug-free applications.",fee:"25,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://www.shutterstock.com/image-illustration/quality-assurance-software-flow-qa-260nw-2324541683.jpg"}];return f.jsxs(f.Fragment,{children:[f.jsxs(OS,{children:[f.jsx("h2",{children:"Featured Courses and Professional Certificates"}),f.jsx("h2",{children:"Learn with the Best"})]}),f.jsx(CS,{children:l.map((i,o)=>f.jsxs(DS,{children:[f.jsx(_S,{src:i.image,alt:i.title}),f.jsx(MS,{children:i.title}),f.jsx(NS,{children:i.description}),f.jsxs(US,{children:["Course Fee: ",i.fee]}),f.jsx($t,{to:i.link,target:i.target,style:{textDecoration:"none"},children:f.jsx(BS,{children:"Enroll Now"})})]},o))})]})},kS=E.section`
  background-color: #eef2ff; /* Tailwind: bg-indigo-50 */
  padding: 2.5rem 0;
`,LS=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,qS=E.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1f2937; /* Tailwind: text-gray-800 */
  text-align: center;
  margin-bottom: 2rem;
`,YS=E.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
`,GS=E.div`
  min-width: 300px;
  max-width: 20rem;
  flex-shrink: 0;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,QS=E.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,VS=E.p`
  font-size: 0.875rem;
  color: #2563eb; /* Tailwind: text-blue-600 */
  margin-bottom: 0.25rem;
`,XS=E.p`
  font-size: 0.875rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
`,ZS=()=>{const l=[{name:"Rahul Sharma",role:"Full-Stack Developer",feedback:"The courses provided helped me to quickly master the technologies needed to build complex applications. I owe my success to these detailed lessons!"},{name:"Ayush Patel",role:"Data Scientist",feedback:"I found the data science and AI courses extremely helpful. The practical projects truly helped me land my current role!"},{name:"Ankit",role:"Web Developer",feedback:"The web development course was easy to follow and helped me become proficient in building responsive websites."},{name:"Riya jha",role:"Machine Learning Engineer",feedback:"The ML course opened many doors for me in the industry, with strong theoretical and practical concepts."},{name:"Amit Verma",role:"Software Engineer",feedback:"I was able to enhance my coding skills and got placed in a reputed company. Great platform for learning!"},{name:"Roshni Agarwal",role:"UI/UX Designer",feedback:"The design courses gave me in-depth knowledge of UI/UX principles and boosted my confidence as a designer."}],i=[...l,...l,...l,...l,...l,...l];return M.useEffect(()=>{const o=document.getElementById("testimonialCards");let u=setInterval(()=>{o.scrollLeft+=2,o.scrollLeft>=o.scrollWidth/3&&(o.scrollLeft=0)},20);return o.addEventListener("mouseenter",()=>clearInterval(u)),o.addEventListener("mouseleave",()=>{u=setInterval(()=>{o.scrollLeft+=2},20)}),()=>clearInterval(u)},[]),f.jsx(kS,{children:f.jsxs(LS,{children:[f.jsx(qS,{children:"Voices of Success: Our Student's Journey"}),f.jsx(YS,{id:"testimonialCards",children:i.map((o,u)=>f.jsxs(GS,{children:[f.jsx(QS,{children:o.name}),f.jsx(VS,{children:o.role}),f.jsx(XS,{children:o.feedback})]},u))})]})})},KS=Mo`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$S=E.section`
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  padding: 4rem 1rem;
`,JS=E.div`
  max-width: 1280px;
  margin: 0 auto;
`,FS=E.h2`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #64748b;
  margin-bottom: 0.5rem;
`,PS=E.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
  line-height: 1.2;
`,WS=E.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media(min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,IS=E.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${({show:l})=>l?KS:"none"} 0.6s ease forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
`,e5=E.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,t5=E.div`
  padding: 1.5rem;
`,n5=E.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`,a5=E.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4b5563;
`;E.a`
  display: inline-block;
  margin-top: 1rem;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;const l5=()=>{const[l,i]=M.useState(!1);M.useEffect(()=>{const u=()=>{document.getElementById("courses").getBoundingClientRect().top<=window.innerHeight*.8&&i(!0)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const o=[{name:"MERN Stack Development",description:`Master full-stack web development using MongoDB, Express.js, React.js, and Node.js. 
      Learn front-end & back-end programming, build RESTful APIs, handle authentication, and deploy apps.`,image:"/img/webdev.webp"},{name:"Machine Learning / AI",description:"Explore intelligent systems with ML algorithms, deep learning, and real-world dataset applications using tools like Python, TensorFlow, and OpenAI APIs.",image:"/img/AI.webp"},{name:"Data Analytics",description:"Clean, analyze, and visualize data using Excel, SQL, Python, and Tableau. Ideal for beginners wanting to generate insights for businesses.",image:"/img/algo.jpg"},{name:"Data Science",description:"Dive into data wrangling, visualization, and machine learning using Python libraries. Tackle real-world datasets in finance, healthcare, and more.",image:"/img/webdev.webp"},{name:"DevOps",description:"Implement CI/CD pipelines, Docker, Kubernetes, Jenkins, and cloud infrastructure with AWS/Azure to streamline development and deployment.",image:"/img/machine_learning.avif"},{name:"Quality Assurance (QA)",description:"Learn manual and automated testing with tools like Selenium, Postman, and JUnit. Understand bug tracking and real-world test planning.",image:"/img/cloud_comp.webp"}];return f.jsx($S,{id:"courses",children:f.jsxs(JS,{children:[f.jsx(FS,{children:"Dive into expert articles to sharpen your skills."}),f.jsx(PS,{children:"Empower Your Learning"}),f.jsx(WS,{children:o.map((u,s)=>f.jsxs(IS,{show:l,children:[f.jsx(e5,{src:u.image,alt:u.name}),f.jsxs(t5,{children:[f.jsx(n5,{children:u.name}),f.jsx(a5,{children:u.description})]})]},s))})]})})},i5=[{name:"Aditya Apurv",role:"CEO, A2 Pyramid",image:"/img/aditya.png",bio:"Aditya specializes in data analysis and machine learning, guiding students through practical projects in Python and R."},{name:"Satish Kumar",role:"CTO, A2 Pyramid",image:"/img/satish.PNG",bio:"With a keen eye for design, Satish helps students understand the principles of UI/UX and how to create user-friendly applications."},{name:"Keshav Nair",role:"COO, A2 Pyramid",image:"/img/keshav.PNG",bio:"Keshav focuses on teaching the fundamentals of machine learning, from theory to practical implementations in real-world projects."},{name:"Ankit Dwivedi",role:"Full-Stack Developer",image:"/img/ankit.jpg",bio:"Ankit Dwivedi has over 1 year of experience in full-stack development and has worked with various technologies, including React, Node.js, and MongoDB."}],r5=E.section`
  background-color: #eef2ff;
  padding: 2.5rem 1rem;
`,o5=E.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,u5=E.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`,c5=E.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,s5=E.div`
  background-color: #ffffff;
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`,f5=E.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`,Pp=E.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,Wp=E.p`
  font-size: 0.875rem;
  color: #4b5563;
`,d5=Mo`
  from { opacity: 0; }
  to { opacity: 1; }
`,h5=E.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${d5} 0.3s ease;
  z-index: 1000;
`,m5=E.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 28rem;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`,p5=E.button`
  margin-top: 1.5rem;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`,g5=()=>{const[l,i]=M.useState(null),o=s=>i(s),u=()=>i(null);return f.jsx(r5,{children:f.jsxs(o5,{children:[f.jsx(u5,{children:"Meet Our Team"}),f.jsx(c5,{children:i5.map((s,d)=>f.jsxs(s5,{onClick:()=>o(s),children:[f.jsx(f5,{src:s.image,alt:s.name}),f.jsx(Pp,{children:s.name}),f.jsx(Wp,{children:s.role})]},d))}),l&&f.jsx(h5,{onClick:u,children:f.jsxs(m5,{onClick:s=>s.stopPropagation(),children:[f.jsx(Pp,{children:l.name}),f.jsx(Wp,{children:l.role}),f.jsx("p",{style:{marginTop:"1rem",color:"#4b5563"},children:l.bio}),f.jsx(p5,{onClick:u,children:"Close"})]})})]})})},Ip=[{question:"What is the purpose of this platform?",answer:"This platform is designed to help students learn various technologies through comprehensive courses and hands-on projects."},{question:"How can I enroll in a course?",answer:"You can enroll in a course by creating an account and selecting the course you want to take from our catalog."},{question:"What support is available for students?",answer:"We offer 24/7 support through our online chat and email services, as well as community forums for peer assistance."},{question:"Are there any prerequisites for the courses?",answer:"Some courses may have prerequisites, which will be listed in the course description. However, most courses are beginner-friendly."},{question:"Will I receive a certificate after completing a course?",answer:"Yes, upon successful completion of a course, you will receive a certificate that you can share on your LinkedIn profile."},{question:"Can I access course materials after the course ends?",answer:"Yes, all enrolled students will have lifetime access to course materials and updates."},{question:"How do I reset my password?",answer:'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.'},{question:"Is there a refund policy?",answer:"Yes, we have a 30-day money-back guarantee if you are not satisfied with the course."}],y5=E.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`,x5=E.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,b5=E.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`,v5=E.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`,S5=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }

  span {
    font-size: 1.5rem;
    color: #4b5563;
  }
`,w5=E.div`
  padding: 0 1rem 1rem 1rem;
  p {
    color: #4b5563;
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
  }
`,E5=E.button`
  margin-top: 2rem;
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #4338ca;
  }
`,j5=()=>{const[l,i]=M.useState([]),[o,u]=M.useState(!1),s=x=>{i(y=>y.includes(x)?y.filter(p=>p!==x):[...y,x])},d=()=>u(!o),m=o?Ip:Ip.slice(0,3);return f.jsx(y5,{children:f.jsxs(x5,{children:[f.jsx(b5,{children:"Frequently Asked Questions"}),m.map((x,y)=>f.jsxs(v5,{children:[f.jsxs(S5,{onClick:()=>s(y),children:[f.jsx("h3",{children:x.question}),f.jsx("span",{children:l.includes(y)?"−":"+"})]}),l.includes(y)&&f.jsx(w5,{children:f.jsx("p",{children:x.answer})})]},y)),f.jsx(E5,{onClick:d,children:o?"See Less":"See More"})]})})},A5=E.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef2ff;
  padding: 2.5rem 0;
`,T5=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
  }
`,z5=E.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`,R5=E.div`
  flex: 1;
  text-align: center;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
    padding-left: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #4b5563;
    margin-bottom: 1.5rem;
  }
`,O5=E($t)`
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  font-weight: 600;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #6366f1;
  }
`,C5=()=>f.jsx(A5,{children:f.jsxs(T5,{children:[f.jsx(z5,{children:f.jsx("img",{src:"/img/last_img.png",alt:"Join A2 Pyramid"})}),f.jsxs(R5,{children:[f.jsx("h2",{children:"Take the Next Step Toward Your Professional Goals with A2 Pyramid"}),f.jsx("p",{children:"Join now to receive personalized recommendations from the full A2 Pyramid catalog."}),f.jsx(O5,{to:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",style:{textDecoration:"none"},children:"Join for Free"})]})]})});E.footer`
  background-color: #1f2937;
  color: white;
  padding: 2.5rem 0;
`;E.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 2.5rem;
  }
`;E.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  hr {
    border-color: #4b5563;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    .footer-link {
      color: #e5e7eb;
      text-decoration: none;
      &:hover {
        color: #2563eb;
      }
    }
  }
`;E.li`
  display: flex;
  align-items: center;
  space-between: 1rem;
  cursor: pointer;
  &:hover {
    color: #d946ef;
  }
`;E.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.875rem;
  hr {
    border-color: #4b5563;
    margin-bottom: 1rem;
  }
`;const D5=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #ffffff;
  color: #1f2937;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`,_5=E.img`
  margin-top: 0px;
  width: 80%;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`,M5=E.h1`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #16a34a;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`,N5=E.p`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  color: #374151;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`,U5=E.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`,B5=()=>f.jsxs(D5,{children:[f.jsx(_5,{src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000",alt:"error-img"}),f.jsx(M5,{children:"Page not found"}),f.jsx(N5,{children:"The page you are requesting does not exist."}),f.jsx($t,{to:"#/edutech",children:f.jsx(U5,{children:"Go to HomePage"})})]}),Ts=E.button`
  padding: 12px 24px;
  background-color: #4B8DF8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2e6cd1;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`,H5=E.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,k5=({children:l})=>{const o=Pn().pathname,u=o==="/"||o.startsWith("/edutech");return f.jsxs(f.Fragment,{children:[!u&&f.jsxs(f.Fragment,{children:[f.jsx(ab,{}),f.jsxs("main",{style:{padding:"20px"},children:[f.jsx("h1",{children:"Welcome to the AI Smart Class Dashboard 🚀"}),f.jsxs(H5,{children:[f.jsx("a",{href:"#/ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"Home"})}),f.jsx("a",{href:"#/about-ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"About"})}),f.jsx("a",{href:"#/contact-ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"Contact"})})]})]})]}),l,f.jsx(m3,{})]})};function L5(){return f.jsx(yv,{children:f.jsx(k5,{children:f.jsxs(Kb,{children:[f.jsx(Ke,{path:"/",element:f.jsx(N3,{})}),f.jsx(Ke,{path:"/edutech/about",element:f.jsx(I3,{})}),f.jsx(Ke,{path:"/edutech/contact",element:f.jsx(cS,{})}),f.jsx(Ke,{path:"/edutech",element:f.jsxs(f.Fragment,{children:[f.jsx(Ao,{}),f.jsx(ES,{}),f.jsx(RS,{}),f.jsx(HS,{}),f.jsx(ZS,{}),f.jsx(l5,{}),f.jsx(g5,{}),f.jsx(j5,{}),f.jsx(C5,{})]})}),f.jsx(Ke,{path:"/edutech/*",element:f.jsxs(f.Fragment,{children:[f.jsx(Ao,{}),f.jsx(B5,{})]})}),f.jsx(Ke,{path:"/ai-smart-class",element:f.jsx(u3,{})}),f.jsx(Ke,{path:"/about-ai-smart-class",element:f.jsx(b3,{})}),f.jsx(Ke,{path:"/contact-ai-smart-class",element:f.jsx(R3,{})}),f.jsx(Ke,{path:"/doubt-solver",element:f.jsx(d4,{})}),f.jsx(Ke,{path:"/exam-paper-generator",element:f.jsx(v4,{})}),f.jsx(Ke,{path:"/smart-quiz-generator",element:f.jsx(R4,{})}),f.jsx(Ke,{path:"/performance-metrics",element:f.jsx(O4,{})}),f.jsx(Ke,{path:"/gamified-classroom",element:f.jsx(C4,{})}),f.jsx(Ke,{path:"/mental-health-support",element:f.jsx(D4,{})}),f.jsx(Ke,{path:"/skill-progress-tracking",element:f.jsx(_4,{})}),f.jsx(Ke,{path:"/attendance-report",element:f.jsx(M4,{})}),f.jsx(Ke,{path:"/revision-planner",element:f.jsx(Y4,{})}),f.jsx(Ke,{path:"*",element:f.jsx(s3,{})})]})})})}Wy.createRoot(document.getElementById("root")).render(f.jsx(M.StrictMode,{children:f.jsx(L5,{})}));
