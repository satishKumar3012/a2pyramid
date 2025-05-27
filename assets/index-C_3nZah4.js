(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();function Vy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var as={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function Xy(){if(Im)return Si;Im=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var x in s)x!=="key"&&(d[x]=s[x])}else d=s;return s=d.ref,{$$typeof:l,type:u,key:m,ref:s!==void 0?s:null,props:d}}return Si.Fragment=i,Si.jsx=o,Si.jsxs=o,Si}var ep;function n0(){return ep||(ep=1,as.exports=Xy()),as.exports}var f=n0(),ls={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Zy(){if(tp)return ue;tp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),E=Symbol.iterator;function j(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function N(w,Q,K){this.props=w,this.context=Q,this.refs=M,this.updater=K||H}N.prototype.isReactComponent={},N.prototype.setState=function(w,Q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Q,"setState")},N.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function B(){}B.prototype=N.prototype;function Y(w,Q,K){this.props=w,this.context=Q,this.refs=M,this.updater=K||H}var V=Y.prototype=new B;V.constructor=Y,T(V,N.prototype),V.isPureReactComponent=!0;var F=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function J(w,Q,K,$,te,me){return K=me.ref,{$$typeof:l,type:w,key:Q,ref:K!==void 0?K:null,props:me}}function se(w,Q){return J(w.type,Q,void 0,void 0,void 0,w.props)}function de(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function _e(w){var Q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(K){return Q[K]})}var Xe=/\/+/g;function Ce(w,Q){return typeof w=="object"&&w!==null&&w.key!=null?_e(""+w.key):Q.toString(36)}function ct(){}function at(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ct,ct):(w.status="pending",w.then(function(Q){w.status==="pending"&&(w.status="fulfilled",w.value=Q)},function(Q){w.status==="pending"&&(w.status="rejected",w.reason=Q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Re(w,Q,K,$,te){var me=typeof w;(me==="undefined"||me==="boolean")&&(w=null);var ae=!1;if(w===null)ae=!0;else switch(me){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(w.$$typeof){case l:case i:ae=!0;break;case b:return ae=w._init,Re(ae(w._payload),Q,K,$,te)}}if(ae)return te=te(w),ae=$===""?"."+Ce(w,0):$,F(te)?(K="",ae!=null&&(K=ae.replace(Xe,"$&/")+"/"),Re(te,Q,K,"",function(lt){return lt})):te!=null&&(de(te)&&(te=se(te,K+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace(Xe,"$&/")+"/")+ae)),Q.push(te)),1;ae=0;var $e=$===""?".":$+":";if(F(w))for(var ve=0;ve<w.length;ve++)$=w[ve],me=$e+Ce($,ve),ae+=Re($,Q,K,me,te);else if(ve=j(w),typeof ve=="function")for(w=ve.call(w),ve=0;!($=w.next()).done;)$=$.value,me=$e+Ce($,ve++),ae+=Re($,Q,K,me,te);else if(me==="object"){if(typeof w.then=="function")return Re(at(w),Q,K,$,te);throw Q=String(w),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ae}function k(w,Q,K){if(w==null)return w;var $=[],te=0;return Re(w,$,"","",function(me){return Q.call(K,me,te++)}),$}function Z(w){if(w._status===-1){var Q=w._result;Q=Q(),Q.then(function(K){(w._status===0||w._status===-1)&&(w._status=1,w._result=K)},function(K){(w._status===0||w._status===-1)&&(w._status=2,w._result=K)}),w._status===-1&&(w._status=0,w._result=Q)}if(w._status===1)return w._result.default;throw w._result}var ee=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function re(){}return ue.Children={map:k,forEach:function(w,Q,K){k(w,function(){Q.apply(this,arguments)},K)},count:function(w){var Q=0;return k(w,function(){Q++}),Q},toArray:function(w){return k(w,function(Q){return Q})||[]},only:function(w){if(!de(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ue.Component=N,ue.Fragment=o,ue.Profiler=s,ue.PureComponent=Y,ue.StrictMode=u,ue.Suspense=g,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ue.__COMPILER_RUNTIME={__proto__:null,c:function(w){return X.H.useMemoCache(w)}},ue.cache=function(w){return function(){return w.apply(null,arguments)}},ue.cloneElement=function(w,Q,K){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var $=T({},w.props),te=w.key,me=void 0;if(Q!=null)for(ae in Q.ref!==void 0&&(me=void 0),Q.key!==void 0&&(te=""+Q.key),Q)!W.call(Q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Q.ref===void 0||($[ae]=Q[ae]);var ae=arguments.length-2;if(ae===1)$.children=K;else if(1<ae){for(var $e=Array(ae),ve=0;ve<ae;ve++)$e[ve]=arguments[ve+2];$.children=$e}return J(w.type,te,void 0,void 0,me,$)},ue.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},ue.createElement=function(w,Q,K){var $,te={},me=null;if(Q!=null)for($ in Q.key!==void 0&&(me=""+Q.key),Q)W.call(Q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(te[$]=Q[$]);var ae=arguments.length-2;if(ae===1)te.children=K;else if(1<ae){for(var $e=Array(ae),ve=0;ve<ae;ve++)$e[ve]=arguments[ve+2];te.children=$e}if(w&&w.defaultProps)for($ in ae=w.defaultProps,ae)te[$]===void 0&&(te[$]=ae[$]);return J(w,me,void 0,void 0,null,te)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(w){return{$$typeof:x,render:w}},ue.isValidElement=de,ue.lazy=function(w){return{$$typeof:b,_payload:{_status:-1,_result:w},_init:Z}},ue.memo=function(w,Q){return{$$typeof:p,type:w,compare:Q===void 0?null:Q}},ue.startTransition=function(w){var Q=X.T,K={};X.T=K;try{var $=w(),te=X.S;te!==null&&te(K,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(re,ee)}catch(me){ee(me)}finally{X.T=Q}},ue.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ue.use=function(w){return X.H.use(w)},ue.useActionState=function(w,Q,K){return X.H.useActionState(w,Q,K)},ue.useCallback=function(w,Q){return X.H.useCallback(w,Q)},ue.useContext=function(w){return X.H.useContext(w)},ue.useDebugValue=function(){},ue.useDeferredValue=function(w,Q){return X.H.useDeferredValue(w,Q)},ue.useEffect=function(w,Q,K){var $=X.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(w,Q)},ue.useId=function(){return X.H.useId()},ue.useImperativeHandle=function(w,Q,K){return X.H.useImperativeHandle(w,Q,K)},ue.useInsertionEffect=function(w,Q){return X.H.useInsertionEffect(w,Q)},ue.useLayoutEffect=function(w,Q){return X.H.useLayoutEffect(w,Q)},ue.useMemo=function(w,Q){return X.H.useMemo(w,Q)},ue.useOptimistic=function(w,Q){return X.H.useOptimistic(w,Q)},ue.useReducer=function(w,Q,K){return X.H.useReducer(w,Q,K)},ue.useRef=function(w){return X.H.useRef(w)},ue.useState=function(w){return X.H.useState(w)},ue.useSyncExternalStore=function(w,Q,K){return X.H.useSyncExternalStore(w,Q,K)},ue.useTransition=function(){return X.H.useTransition()},ue.version="19.1.0",ue}var np;function To(){return np||(np=1,ls.exports=Zy()),ls.exports}var _=To();const Yt=Vy(_);var is={exports:{}},wi={},rs={exports:{}},os={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Ky(){return ap||(ap=1,function(l){function i(k,Z){var ee=k.length;k.push(Z);e:for(;0<ee;){var re=ee-1>>>1,w=k[re];if(0<s(w,Z))k[re]=Z,k[ee]=w,ee=re;else break e}}function o(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var Z=k[0],ee=k.pop();if(ee!==Z){k[0]=ee;e:for(var re=0,w=k.length,Q=w>>>1;re<Q;){var K=2*(re+1)-1,$=k[K],te=K+1,me=k[te];if(0>s($,ee))te<w&&0>s(me,$)?(k[re]=me,k[te]=ee,re=te):(k[re]=$,k[K]=ee,re=K);else if(te<w&&0>s(me,ee))k[re]=me,k[te]=ee,re=te;else break e}}return Z}function s(k,Z){var ee=k.sortIndex-Z.sortIndex;return ee!==0?ee:k.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var m=Date,x=m.now();l.unstable_now=function(){return m.now()-x}}var g=[],p=[],b=1,E=null,j=3,H=!1,T=!1,M=!1,N=!1,B=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var Z=o(p);Z!==null;){if(Z.callback===null)u(p);else if(Z.startTime<=k)u(p),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=o(p)}}function X(k){if(M=!1,F(k),!T)if(o(g)!==null)T=!0,W||(W=!0,Ce());else{var Z=o(p);Z!==null&&Re(X,Z.startTime-k)}}var W=!1,J=-1,se=5,de=-1;function _e(){return N?!0:!(l.unstable_now()-de<se)}function Xe(){if(N=!1,W){var k=l.unstable_now();de=k;var Z=!0;try{e:{T=!1,M&&(M=!1,Y(J),J=-1),H=!0;var ee=j;try{t:{for(F(k),E=o(g);E!==null&&!(E.expirationTime>k&&_e());){var re=E.callback;if(typeof re=="function"){E.callback=null,j=E.priorityLevel;var w=re(E.expirationTime<=k);if(k=l.unstable_now(),typeof w=="function"){E.callback=w,F(k),Z=!0;break t}E===o(g)&&u(g),F(k)}else u(g);E=o(g)}if(E!==null)Z=!0;else{var Q=o(p);Q!==null&&Re(X,Q.startTime-k),Z=!1}}break e}finally{E=null,j=ee,H=!1}Z=void 0}}finally{Z?Ce():W=!1}}}var Ce;if(typeof V=="function")Ce=function(){V(Xe)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=Xe,Ce=function(){at.postMessage(null)}}else Ce=function(){B(Xe,0)};function Re(k,Z){J=B(function(){k(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(k){switch(j){case 1:case 2:case 3:var Z=3;break;default:Z=j}var ee=j;j=Z;try{return k()}finally{j=ee}},l.unstable_requestPaint=function(){N=!0},l.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=j;j=k;try{return Z()}finally{j=ee}},l.unstable_scheduleCallback=function(k,Z,ee){var re=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,k){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ee+w,k={id:b++,callback:Z,priorityLevel:k,startTime:ee,expirationTime:w,sortIndex:-1},ee>re?(k.sortIndex=ee,i(p,k),o(g)===null&&k===o(p)&&(M?(Y(J),J=-1):M=!0,Re(X,ee-re))):(k.sortIndex=w,i(g,k),T||H||(T=!0,W||(W=!0,Ce()))),k},l.unstable_shouldYield=_e,l.unstable_wrapCallback=function(k){var Z=j;return function(){var ee=j;j=Z;try{return k.apply(this,arguments)}finally{j=ee}}}}(os)),os}var lp;function $y(){return lp||(lp=1,rs.exports=Ky()),rs.exports}var us={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Jy(){if(ip)return ot;ip=1;var l=To();function i(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(g,p,b){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:E==null?null:""+E,children:g,containerInfo:p,implementation:b}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ot.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return d(g,p,null,b)},ot.flushSync=function(g){var p=m.T,b=u.p;try{if(m.T=null,u.p=2,g)return g()}finally{m.T=p,u.p=b,u.d.f()}},ot.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(g,p))},ot.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},ot.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,E=x(b,p.crossOrigin),j=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?u.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:j,fetchPriority:H}):b==="script"&&u.d.X(g,{crossOrigin:E,integrity:j,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ot.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=x(p.as,p.crossOrigin);u.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(g)},ot.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,E=x(b,p.crossOrigin);u.d.L(g,b,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ot.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=x(p.as,p.crossOrigin);u.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(g)},ot.requestFormReset=function(g){u.d.r(g)},ot.unstable_batchedUpdates=function(g,p){return g(p)},ot.useFormState=function(g,p,b){return m.H.useFormState(g,p,b)},ot.useFormStatus=function(){return m.H.useHostTransitionStatus()},ot.version="19.1.0",ot}var rp;function Fy(){if(rp)return us.exports;rp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),us.exports=Jy(),us.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function Py(){if(op)return wi;op=1;var l=$y(),i=To(),o=Fy();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return x(r),e;if(c===a)return x(r),t;c=c.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=c;else{for(var h=!1,y=r.child;y;){if(y===n){h=!0,n=r,a=c;break}if(y===a){h=!0,a=r,n=c;break}y=y.sibling}if(!h){for(y=c.child;y;){if(y===n){h=!0,n=c,a=r;break}if(y===a){h=!0,a=c,n=r;break}y=y.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,E=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case N:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case V:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Re=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},re=[],w=-1;function Q(e){return{current:e}}function K(e){0>w||(e.current=re[w],re[w]=null,w--)}function $(e,t){w++,re[w]=e.current,e.current=t}var te=Q(null),me=Q(null),ae=Q(null),$e=Q(null);function ve(e,t){switch($(ae,t),$(me,e),$(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zm(t),e=Rm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(te),$(te,e)}function lt(){K(te),K(me),K(ae)}function Wn(e){e.memoizedState!==null&&$($e,e);var t=te.current,n=Rm(t,e.type);t!==n&&($(me,e),$(te,n))}function rn(e){me.current===e&&(K(te),K(me)),$e.current===e&&(K($e),gi._currentValue=ee)}var Dt=Object.prototype.hasOwnProperty,Vo=l.unstable_scheduleCallback,Xo=l.unstable_cancelCallback,wg=l.unstable_shouldYield,Eg=l.unstable_requestPaint,Ft=l.unstable_now,jg=l.unstable_getCurrentPriorityLevel,of=l.unstable_ImmediatePriority,uf=l.unstable_UserBlockingPriority,Li=l.unstable_NormalPriority,Ag=l.unstable_LowPriority,cf=l.unstable_IdlePriority,Tg=l.log,zg=l.unstable_setDisableYieldValue,jl=null,bt=null;function Tn(e){if(typeof Tg=="function"&&zg(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(jl,e)}catch{}}var vt=Math.clz32?Math.clz32:Cg,Rg=Math.log,Og=Math.LN2;function Cg(e){return e>>>=0,e===0?32:31-(Rg(e)/Og|0)|0}var qi=256,Yi=4194304;function In(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?r=In(a):(h&=y,h!==0?r=In(h):n||(n=y&~e,n!==0&&(r=In(n))))):(y=a&~c,y!==0?r=In(y):h!==0?r=In(h):n||(n=a&~e,n!==0&&(r=In(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(){var e=qi;return qi<<=1,(qi&4194048)===0&&(qi=256),e}function ff(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _g(e,t,n,a,r,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,v=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var L=31-vt(n),G=1<<L;y[L]=0,v[L]=-1;var C=O[L];if(C!==null)for(O[L]=null,L=0;L<C.length;L++){var D=C[L];D!==null&&(D.lane&=-536870913)}n&=~G}a!==0&&df(e,a,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function df(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function hf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Km(e.type))}function Mg(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var zn=Math.random().toString(36).slice(2),it="__reactFiber$"+zn,ft="__reactProps$"+zn,ja="__reactContainer$"+zn,Jo="__reactEvents$"+zn,Ng="__reactListeners$"+zn,Ug="__reactHandles$"+zn,pf="__reactResources$"+zn,zl="__reactMarker$"+zn;function Fo(e){delete e[it],delete e[ft],delete e[Jo],delete e[Ng],delete e[Ug]}function Aa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ja]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_m(e);e!==null;){if(n=e[it])return n;e=_m(e)}return t}e=n,n=e.parentNode}return null}function Ta(e){if(e=e[it]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function za(e){var t=e[pf];return t||(t=e[pf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[zl]=!0}var gf=new Set,yf={};function ea(e,t){Ra(e,t),Ra(e+"Capture",t)}function Ra(e,t){for(yf[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var Bg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xf={},bf={};function Hg(e){return Dt.call(bf,e)?!0:Dt.call(xf,e)?!1:Bg.test(e)?bf[e]=!0:(xf[e]=!0,!1)}function Qi(e,t,n){if(Hg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function on(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Po,vf;function Oa(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||"",vf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Po+e+vf}var Wo=!1;function Io(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(D){var C=D}Reflect.construct(e,[],G)}else{try{G.call()}catch(D){C=D}e.call(G.prototype)}}else{try{throw Error()}catch(D){C=D}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(D){if(D&&C&&typeof D.stack=="string")return[D.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),h=c[0],y=c[1];if(h&&y){var v=h.split(`
`),O=y.split(`
`);for(r=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(a===v.length||r===O.length)for(a=v.length-1,r=O.length-1;1<=a&&0<=r&&v[a]!==O[r];)r--;for(;1<=a&&0<=r;a--,r--)if(v[a]!==O[r]){if(a!==1||r!==1)do if(a--,r--,0>r||v[a]!==O[r]){var L=`
`+v[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=r);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Oa(n):""}function kg(e){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return Io(e.type,!1);case 11:return Io(e.type.render,!1);case 1:return Io(e.type,!0);case 31:return Oa("Activity");default:return""}}function Sf(e){try{var t="";do t+=kg(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lg(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=Lg(e))}function Ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=wf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qg=/[\n"\\]/g;function Mt(e){return e.replace(qg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,n,a,r,c,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?tu(e,h,_t(t)):n!=null?tu(e,h,_t(n)):a!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+_t(y):e.removeAttribute("name")}function jf(e,t,n,a,r,c,h,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+_t(n):"",t=t!=null?""+_t(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=y?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function tu(e,t,n){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ca(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Af(e,t,n){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_t(n):""}function Tf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Re(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=_t(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Yg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Rf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&zf(e,r,a)}else for(var c in t)t.hasOwnProperty(c)&&zf(e,c,t[c])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return Qg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Ma=null;function Of(e){var t=Ta(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[ft]||null;if(!r)throw Error(u(90));eu(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ef(a)}break e;case"textarea":Af(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ca(e,!!n.multiple,t,!1)}}}var iu=!1;function Cf(e,t,n){if(iu)return e(t,n);iu=!0;try{var a=e(t);return a}finally{if(iu=!1,(_a!==null||Ma!==null)&&(_r(),_a&&(t=_a,e=Ma,Ma=_a=null,Of(t),e)))for(t=0;t<e.length;t++)Of(e[t])}}function Ol(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ft]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(un)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{ru=!1}var Rn=null,ou=null,$i=null;function Df(){if($i)return $i;var e,t=ou,n=t.length,a,r="value"in Rn?Rn.value:Rn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===r[c-a];a++);return $i=r.slice(e,1<a?1-a:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function _f(){return!1}function dt(e){function t(n,a,r,c,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fi:_f,this.isPropagationStopped=_f,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=dt(ta),Dl=b({},ta,{view:0,detail:0}),Vg=dt(Dl),uu,cu,_l,Wi=b({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(uu=e.screenX-_l.screenX,cu=e.screenY-_l.screenY):cu=uu=0,_l=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),Mf=dt(Wi),Xg=b({},Wi,{dataTransfer:0}),Zg=dt(Xg),Kg=b({},Dl,{relatedTarget:0}),su=dt(Kg),$g=b({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=dt($g),Fg=b({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pg=dt(Fg),Wg=b({},ta,{data:0}),Nf=dt(Wg),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t1[e])?!!t[e]:!1}function fu(){return n1}var a1=b({},Dl,{key:function(e){if(e.key){var t=Ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=dt(a1),i1=b({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=dt(i1),r1=b({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),o1=dt(r1),u1=b({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=dt(u1),s1=b({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=dt(s1),d1=b({},ta,{newState:0,oldState:0}),h1=dt(d1),m1=[9,13,27,32],du=un&&"CompositionEvent"in window,Ml=null;un&&"documentMode"in document&&(Ml=document.documentMode);var p1=un&&"TextEvent"in window&&!Ml,Bf=un&&(!du||Ml&&8<Ml&&11>=Ml),Hf=" ",kf=!1;function Lf(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function g1(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(kf=!0,Hf);case"textInput":return e=t.data,e===Hf&&kf?null:e;default:return null}}function y1(e,t){if(Na)return e==="compositionend"||!du&&Lf(e,t)?(e=Df(),$i=ou=Rn=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x1[e.type]:t==="textarea"}function Gf(e,t,n,a){_a?Ma?Ma.push(a):Ma=[a]:_a=a,t=kr(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Nl=null,Ul=null;function b1(e){wm(e,0)}function Ii(e){var t=Rl(e);if(Ef(t))return e}function Qf(e,t){if(e==="change")return t}var Vf=!1;if(un){var hu;if(un){var mu="oninput"in document;if(!mu){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),mu=typeof Xf.oninput=="function"}hu=mu}else hu=!1;Vf=hu&&(!document.documentMode||9<document.documentMode)}function Zf(){Nl&&(Nl.detachEvent("onpropertychange",Kf),Ul=Nl=null)}function Kf(e){if(e.propertyName==="value"&&Ii(Ul)){var t=[];Gf(t,Ul,e,lu(e)),Cf(b1,t)}}function v1(e,t,n){e==="focusin"?(Zf(),Nl=t,Ul=n,Nl.attachEvent("onpropertychange",Kf)):e==="focusout"&&Zf()}function S1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(Ul)}function w1(e,t){if(e==="click")return Ii(t)}function E1(e,t){if(e==="input"||e==="change")return Ii(t)}function j1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:j1;function Bl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Dt.call(t,r)||!St(e[r],t[r]))return!1}return!0}function $f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jf(e,t){var n=$f(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function Ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=un&&"documentMode"in document&&11>=document.documentMode,Ua=null,gu=null,Hl=null,yu=!1;function Wf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||Ua==null||Ua!==Zi(a)||(a=Ua,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&Bl(Hl,a)||(Hl=a,a=kr(gu,"onSelect"),0<a.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ua)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},xu={},If={};un&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function aa(e){if(xu[e])return xu[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in If)return xu[e]=t[n];return e}var ed=aa("animationend"),td=aa("animationiteration"),nd=aa("animationstart"),T1=aa("transitionrun"),z1=aa("transitionstart"),R1=aa("transitioncancel"),ad=aa("transitionend"),ld=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Qt(e,t){ld.set(e,t),ea(t,[e])}var id=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=id.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Sf(t)},id.set(e,t),t)}return{value:e,source:t,stack:Sf(t)}}var Ut=[],Ha=0,vu=0;function er(){for(var e=Ha,t=vu=Ha=0;t<e;){var n=Ut[t];Ut[t++]=null;var a=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}c!==0&&rd(n,r,c)}}function tr(e,t,n,a){Ut[Ha++]=e,Ut[Ha++]=t,Ut[Ha++]=n,Ut[Ha++]=a,vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Su(e,t,n,a){return tr(e,t,n,a),nr(e)}function ka(e,t){return tr(e,null,null,t),nr(e)}function rd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-vt(n),e=c.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),c):null}function nr(e){if(50<ui)throw ui=0,zc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function O1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,a){return new O1(e,t,n,a)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function od(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ar(e,t,n,a,r,c){var h=0;if(a=e,typeof e=="function")wu(e)&&(h=1);else if(typeof e=="string")h=Dy(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=wt(31,n,t,r),e.elementType=de,e.lanes=c,e;case T:return la(n.children,r,c,t);case M:h=8,r|=24;break;case N:return e=wt(12,n,t,r|2),e.elementType=N,e.lanes=c,e;case X:return e=wt(13,n,t,r),e.elementType=X,e.lanes=c,e;case W:return e=wt(19,n,t,r),e.elementType=W,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case V:h=10;break e;case Y:h=9;break e;case F:h=11;break e;case J:h=14;break e;case se:h=16,a=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=wt(h,n,t,r),t.elementType=e,t.type=a,t.lanes=c,t}function la(e,t,n,a){return e=wt(7,e,a,t),e.lanes=n,e}function Eu(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ju(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qa=[],Ya=0,lr=null,ir=0,Bt=[],Ht=0,ia=null,sn=1,fn="";function ra(e,t){qa[Ya++]=ir,qa[Ya++]=lr,lr=e,ir=t}function ud(e,t,n){Bt[Ht++]=sn,Bt[Ht++]=fn,Bt[Ht++]=ia,ia=e;var a=sn;e=fn;var r=32-vt(a)-1;a&=~(1<<r),n+=1;var c=32-vt(t)+r;if(30<c){var h=r-r%5;c=(a&(1<<h)-1).toString(32),a>>=h,r-=h,sn=1<<32-vt(t)+r|n<<r|a,fn=c+e}else sn=1<<c|n<<r|a,fn=e}function Au(e){e.return!==null&&(ra(e,1),ud(e,1,0))}function Tu(e){for(;e===lr;)lr=qa[--Ya],qa[Ya]=null,ir=qa[--Ya],qa[Ya]=null;for(;e===ia;)ia=Bt[--Ht],Bt[Ht]=null,fn=Bt[--Ht],Bt[Ht]=null,sn=Bt[--Ht],Bt[Ht]=null}var st=null,He=null,be=!1,oa=null,Pt=!1,zu=Error(u(519));function ua(e){var t=Error(u(418,""));throw ql(Nt(t,e)),zu}function cd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[it]=e,t[ft]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<si.length;n++)ge(si[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),jf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xi(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Tf(t,a.value,a.defaultValue,a.children),Xi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Tm(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=Lr),t=!0):t=!1,t||ua(e)}function sd(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:st=st.return}}function kl(e){if(e!==st)return!1;if(!be)return sd(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qc(e.type,e.memoizedProps)),n=!n),n&&He&&ua(e),sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,Vn(e.type)?(e=Kc,Kc=null,He=e):He=t):He=st?Xt(e.stateNode.nextSibling):null;return!0}function Ll(){He=st=null,be=!1}function fd(){var e=oa;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),oa=null),e}function ql(e){oa===null?oa=[e]:oa.push(e)}var Ru=Q(null),ca=null,dn=null;function On(e,t,n){$(Ru,t._currentValue),t._currentValue=n}function hn(e){e._currentValue=Ru.current,K(Ru)}function Ou(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Cu(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var h=r.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=r;for(var v=0;v<t.length;v++)if(y.context===t[v]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Ou(c.return,n,e),a||(h=null);break e}c=y.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(u(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Ou(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function Yl(e,t,n,a){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var y=r.type;St(r.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(r===$e.current){if(h=r.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}r=r.return}e!==null&&Cu(t,e,n,a),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){ca=e,dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return dd(ca,e)}function or(e,t){return ca===null&&sa(e),dd(e,t)}function dd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dn===null){if(e===null)throw Error(u(308));dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dn=dn.next=t;return n}var C1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},D1=l.unstable_scheduleCallback,_1=l.unstable_NormalPriority,Ze={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new C1,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&D1(_1,function(){e.controller.abort()})}var Ql=null,_u=0,Ga=0,Qa=null;function M1(e,t){if(Ql===null){var n=Ql=[];_u=0,Ga=Nc(),Qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return _u++,t.then(hd,hd),t}function hd(){if(--_u===0&&Ql!==null){Qa!==null&&(Qa.status="fulfilled");var e=Ql;Ql=null,Ga=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function N1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var md=k.S;k.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&M1(e,t),md!==null&&md(e,t)};var fa=Q(null);function Mu(){var e=fa.current;return e!==null?e:Oe.pooledCache}function ur(e,t){t===null?$(fa,fa.current):$(fa,t.pool)}function pd(){var e=Mu();return e===null?null:{parent:Ze._currentValue,pool:e}}var Vl=Error(u(460)),gd=Error(u(474)),cr=Error(u(542)),Nu={then:function(){}};function yd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(){}function xd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sr,sr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vd(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vd(e),e}throw Xl=t,Vl}}var Xl=null;function bd(){if(Xl===null)throw Error(u(459));var e=Xl;return Xl=null,e}function vd(e){if(e===Vl||e===cr)throw Error(u(483))}var Cn=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(we&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=nr(e),rd(e,null,n),t}return tr(e,a,t,n),nr(e)}function Zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,hf(e,n)}}function Hu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ku=!1;function Kl(){if(ku){var e=Qa;if(e!==null)throw e}}function $l(e,t,n,a){ku=!1;var r=e.updateQueue;Cn=!1;var c=r.firstBaseUpdate,h=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var v=y,O=v.next;v.next=null,h===null?c=O:h.next=O,h=v;var L=e.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==h&&(y===null?L.firstBaseUpdate=O:y.next=O,L.lastBaseUpdate=v))}if(c!==null){var G=r.baseState;h=0,L=O=v=null,y=c;do{var C=y.lane&-536870913,D=C!==y.lane;if(D?(ye&C)===C:(a&C)===C){C!==0&&C===Ga&&(ku=!0),L!==null&&(L=L.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ie=e,ne=y;C=t;var Te=n;switch(ne.tag){case 1:if(ie=ne.payload,typeof ie=="function"){G=ie.call(Te,G,C);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ne.payload,C=typeof ie=="function"?ie.call(Te,G,C):ie,C==null)break e;G=b({},G,C);break e;case 2:Cn=!0}}C=y.callback,C!==null&&(e.flags|=64,D&&(e.flags|=8192),D=r.callbacks,D===null?r.callbacks=[C]:D.push(C))}else D={lane:C,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(O=L=D,v=G):L=L.next=D,h|=C;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;D=y,y=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null}}while(!0);L===null&&(v=G),r.baseState=v,r.firstBaseUpdate=O,r.lastBaseUpdate=L,c===null&&(r.shared.lanes=0),qn|=h,e.lanes=h,e.memoizedState=G}}function Sd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function wd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Sd(n[e],t)}var Va=Q(null),fr=Q(0);function Ed(e,t){e=vn,$(fr,e),$(Va,t),vn=e|t.baseLanes}function Lu(){$(fr,vn),$(Va,Va.current)}function qu(){vn=fr.current,K(Va),K(fr)}var Mn=0,fe=null,je=null,Ye=null,dr=!1,Xa=!1,da=!1,hr=0,Jl=0,Za=null,U1=0;function Le(){throw Error(u(321))}function Yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Gu(e,t,n,a,r,c){return Mn=c,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?rh:oh,da=!1,c=n(a,r),da=!1,Xa&&(c=Ad(t,n,a,r)),jd(e),c}function jd(e){k.H=br;var t=je!==null&&je.next!==null;if(Mn=0,Ye=je=fe=null,dr=!1,Jl=0,Za=null,t)throw Error(u(300));e===null||Fe||(e=e.dependencies,e!==null&&rr(e)&&(Fe=!0))}function Ad(e,t,n,a){fe=e;var r=0;do{if(Xa&&(Za=null),Jl=0,Xa=!1,25<=r)throw Error(u(301));if(r+=1,Ye=je=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}k.H=G1,c=t(n,a)}while(Xa);return c}function B1(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(fe.flags|=1024),t}function Qu(){var e=hr!==0;return hr=0,e}function Vu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xu(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}Mn=0,Ye=je=fe=null,Xa=!1,Jl=hr=0,Za=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ye===null?fe.memoizedState:Ye.next;if(t!==null)Ye=t,je=e;else{if(e===null)throw fe.alternate===null?Error(u(467)):Error(u(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Jl;return Jl+=1,Za===null&&(Za=[]),e=xd(Za,e,t),t=fe,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?rh:oh),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===V)return rt(e)}throw Error(u(438,String(e)))}function Ku(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zu(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=_e;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function pr(e){var t=Ge();return $u(t,je,e)}function $u(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,c=a.pending;if(c!==null){if(r!==null){var h=r.next;r.next=c.next,c.next=h}t.baseQueue=r=c,a.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var y=h=null,v=null,O=t,L=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(ye&G)===G:(Mn&G)===G){var C=O.revertLane;if(C===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===Ga&&(L=!0);else if((Mn&C)===C){O=O.next,C===Ga&&(L=!0);continue}else G={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(y=v=G,h=c):v=v.next=G,fe.lanes|=C,qn|=C;G=O.action,da&&n(c,G),c=O.hasEagerState?O.eagerState:n(c,G)}else C={lane:G,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(y=v=C,h=c):v=v.next=C,fe.lanes|=G,qn|=G;O=O.next}while(O!==null&&O!==t);if(v===null?h=c:v.next=y,!St(c,e.memoizedState)&&(Fe=!0,L&&(n=Qa,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=v,a.lastRenderedState=c}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ju(e){var t=Ge(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do c=e(c,h.action),h=h.next;while(h!==r);St(c,t.memoizedState)||(Fe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Td(e,t,n){var a=fe,r=Ge(),c=be;if(c){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!St((je||r).memoizedState,n);h&&(r.memoizedState=n,Fe=!0),r=r.queue;var y=Od.bind(null,a,r,e);if(Pl(2048,8,y,[e]),r.getSnapshot!==t||h||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ka(9,gr(),Rd.bind(null,a,r,n,t),null),Oe===null)throw Error(u(349));c||(Mn&124)!==0||zd(a,t,n)}return n}function zd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Zu(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,a){t.value=n,t.getSnapshot=a,Cd(t)&&Dd(e)}function Od(e,t,n){return n(function(){Cd(t)&&Dd(e)})}function Cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Dd(e){var t=ka(e,2);t!==null&&zt(t,e,2)}function Fu(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),da){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function _d(e,t,n,a){return e.baseState=n,$u(e,je,typeof a=="function"?a:mn)}function H1(e,t,n,a,r){if(xr(e))throw Error(u(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};k.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,Md(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Md(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var c=k.T,h={};k.T=h;try{var y=n(r,a),v=k.S;v!==null&&v(h,y),Nd(e,t,y)}catch(O){Pu(e,t,O)}finally{k.T=c}}else try{c=n(r,a),Nd(e,t,c)}catch(O){Pu(e,t,O)}}function Nd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ud(e,t,a)},function(a){return Pu(e,t,a)}):Ud(e,t,n)}function Ud(e,t,n){t.status="fulfilled",t.value=n,Bd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Md(e,n)))}function Pu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Bd(t),t=t.next;while(t!==a)}e.action=null}function Bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hd(e,t){return t}function kd(e,t){if(be){var n=Oe.formState;if(n!==null){e:{var a=fe;if(be){if(He){t:{for(var r=He,c=Pt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Xt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){He=Xt(r.nextSibling),a=r.data==="F!";break e}}ua(a)}a=!1}a&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:t},n.queue=a,n=ah.bind(null,fe,a),a.dispatch=n,a=Fu(!1),c=nc.bind(null,fe,!1,a.queue),a=ht(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=H1.bind(null,fe,r,c,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ld(e){var t=Ge();return qd(t,je,e)}function qd(e,t,n){if(t=$u(e,t,Hd)[0],e=pr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fl(t)}catch(h){throw h===Vl?cr:h}else a=t;t=Ge();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,Ka(9,gr(),k1.bind(null,r,n),null)),[a,c,e]}function k1(e,t){e.action=t}function Yd(e){var t=Ge(),n=je;if(n!==null)return qd(t,n,e);Ge(),t=t.memoizedState,n=Ge();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Zu(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gr(){return{destroy:void 0,resource:void 0}}function Gd(){return Ge().memoizedState}function yr(e,t,n,a){var r=ht();a=a===void 0?null:a,fe.flags|=e,r.memoizedState=Ka(1|t,gr(),n,a)}function Pl(e,t,n,a){var r=Ge();a=a===void 0?null:a;var c=r.memoizedState.inst;je!==null&&a!==null&&Yu(a,je.memoizedState.deps)?r.memoizedState=Ka(t,c,n,a):(fe.flags|=e,r.memoizedState=Ka(1|t,c,n,a))}function Qd(e,t){yr(8390656,8,e,t)}function Vd(e,t){Pl(2048,8,e,t)}function Xd(e,t){return Pl(4,2,e,t)}function Zd(e,t){return Pl(4,4,e,t)}function Kd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){n=n!=null?n.concat([e]):null,Pl(4,4,Kd.bind(null,t,e),n)}function Wu(){}function Jd(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Yu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Yu(t,a[1]))return a[0];if(a=e(),da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a}function Iu(e,t,n){return n===void 0||(Mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ih(),fe.lanes|=e,qn|=e,n)}function Pd(e,t,n,a){return St(n,t)?n:Va.current!==null?(e=Iu(e,n,a),St(e,t)||(Fe=!0),e):(Mn&42)===0?(Fe=!0,e.memoizedState=n):(e=Ih(),fe.lanes|=e,qn|=e,t)}function Wd(e,t,n,a,r){var c=Z.p;Z.p=c!==0&&8>c?c:8;var h=k.T,y={};k.T=y,nc(e,!1,t,n);try{var v=r(),O=k.S;if(O!==null&&O(y,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var L=N1(v,a);Wl(e,t,L,Tt(e))}else Wl(e,t,a,Tt(e))}catch(G){Wl(e,t,{then:function(){},status:"rejected",reason:G},Tt())}finally{Z.p=c,k.T=h}}function L1(){}function ec(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=Id(e).queue;Wd(e,r,t,ee,n===null?L1:function(){return eh(e),n(a)})}function Id(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function eh(e){var t=Id(e).next.queue;Wl(e,t,{},Tt())}function tc(){return rt(gi)}function th(){return Ge().memoizedState}function nh(){return Ge().memoizedState}function q1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=Dn(n);var a=_n(t,e,n);a!==null&&(zt(a,t,n),Zl(a,t,n)),t={cache:Du()},e.payload=t;return}t=t.return}}function Y1(e,t,n){var a=Tt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},xr(e)?lh(t,n):(n=Su(e,t,n,a),n!==null&&(zt(n,e,a),ih(n,t,a)))}function ah(e,t,n){var a=Tt();Wl(e,t,n,a)}function Wl(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(xr(e))lh(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,y=c(h,n);if(r.hasEagerState=!0,r.eagerState=y,St(y,h))return tr(e,t,r,0),Oe===null&&er(),!1}catch{}finally{}if(n=Su(e,t,r,a),n!==null)return zt(n,e,a),ih(n,t,a),!0}return!1}function nc(e,t,n,a){if(a={lane:2,revertLane:Nc(),action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(u(479))}else t=Su(e,n,a,2),t!==null&&zt(t,e,2)}function xr(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function lh(e,t){Xa=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ih(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,hf(e,n)}}var br={readContext:rt,use:mr,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},rh={readContext:rt,use:mr,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Qd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yr(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yr(4194308,4,e,t)},useInsertionEffect:function(e,t){yr(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var a=e();if(da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ht();if(n!==void 0){var r=n(t);if(da){Tn(!0);try{n(t)}finally{Tn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Y1.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,n=ah.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wu,useDeferredValue:function(e,t){var n=ht();return Iu(n,e,t)},useTransition:function(){var e=Fu(!1);return e=Wd.bind(null,fe,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,r=ht();if(be){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));(ye&124)!==0||zd(a,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,Qd(Od.bind(null,a,c,e),[e]),a.flags|=2048,Ka(9,gr(),Rd.bind(null,a,c,n,t),null),n},useId:function(){var e=ht(),t=Oe.identifierPrefix;if(be){var n=fn,a=sn;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=U1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:kd,useActionState:kd,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return ht().memoizedState=q1.bind(null,fe)}},oh={readContext:rt,use:mr,useCallback:Jd,useContext:rt,useEffect:Vd,useImperativeHandle:$d,useInsertionEffect:Xd,useLayoutEffect:Zd,useMemo:Fd,useReducer:pr,useRef:Gd,useState:function(){return pr(mn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=Ge();return Pd(n,je.memoizedState,e,t)},useTransition:function(){var e=pr(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Td,useId:th,useHostTransitionStatus:tc,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,t){var n=Ge();return _d(n,je,e,t)},useMemoCache:Ku,useCacheRefresh:nh},G1={readContext:rt,use:mr,useCallback:Jd,useContext:rt,useEffect:Vd,useImperativeHandle:$d,useInsertionEffect:Xd,useLayoutEffect:Zd,useMemo:Fd,useReducer:Ju,useRef:Gd,useState:function(){return Ju(mn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=Ge();return je===null?Iu(n,e,t):Pd(n,je.memoizedState,e,t)},useTransition:function(){var e=Ju(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Td,useId:th,useHostTransitionStatus:tc,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,t){var n=Ge();return je!==null?_d(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:nh},$a=null,Il=0;function vr(e){var t=Il;return Il+=1,$a===null&&($a=[]),xd($a,e,t)}function ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===E?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uh(e){var t=e._init;return t(e._payload)}function ch(e){function t(z,A){if(e){var R=z.deletions;R===null?(z.deletions=[A],z.flags|=16):R.push(A)}}function n(z,A){if(!e)return null;for(;A!==null;)t(z,A),A=A.sibling;return null}function a(z){for(var A=new Map;z!==null;)z.key!==null?A.set(z.key,z):A.set(z.index,z),z=z.sibling;return A}function r(z,A){return z=cn(z,A),z.index=0,z.sibling=null,z}function c(z,A,R){return z.index=R,e?(R=z.alternate,R!==null?(R=R.index,R<A?(z.flags|=67108866,A):R):(z.flags|=67108866,A)):(z.flags|=1048576,A)}function h(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function y(z,A,R,q){return A===null||A.tag!==6?(A=Eu(R,z.mode,q),A.return=z,A):(A=r(A,R),A.return=z,A)}function v(z,A,R,q){var P=R.type;return P===T?L(z,A,R.props.children,q,R.key):A!==null&&(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===se&&uh(P)===A.type)?(A=r(A,R.props),ei(A,R),A.return=z,A):(A=ar(R.type,R.key,R.props,null,z.mode,q),ei(A,R),A.return=z,A)}function O(z,A,R,q){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=ju(R,z.mode,q),A.return=z,A):(A=r(A,R.children||[]),A.return=z,A)}function L(z,A,R,q,P){return A===null||A.tag!==7?(A=la(R,z.mode,q,P),A.return=z,A):(A=r(A,R),A.return=z,A)}function G(z,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Eu(""+A,z.mode,R),A.return=z,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case j:return R=ar(A.type,A.key,A.props,null,z.mode,R),ei(R,A),R.return=z,R;case H:return A=ju(A,z.mode,R),A.return=z,A;case se:var q=A._init;return A=q(A._payload),G(z,A,R)}if(Re(A)||Ce(A))return A=la(A,z.mode,R,null),A.return=z,A;if(typeof A.then=="function")return G(z,vr(A),R);if(A.$$typeof===V)return G(z,or(z,A),R);Sr(z,A)}return null}function C(z,A,R,q){var P=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return P!==null?null:y(z,A,""+R,q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return R.key===P?v(z,A,R,q):null;case H:return R.key===P?O(z,A,R,q):null;case se:return P=R._init,R=P(R._payload),C(z,A,R,q)}if(Re(R)||Ce(R))return P!==null?null:L(z,A,R,q,null);if(typeof R.then=="function")return C(z,A,vr(R),q);if(R.$$typeof===V)return C(z,A,or(z,R),q);Sr(z,R)}return null}function D(z,A,R,q,P){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(R)||null,y(A,z,""+q,P);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case j:return z=z.get(q.key===null?R:q.key)||null,v(A,z,q,P);case H:return z=z.get(q.key===null?R:q.key)||null,O(A,z,q,P);case se:var he=q._init;return q=he(q._payload),D(z,A,R,q,P)}if(Re(q)||Ce(q))return z=z.get(R)||null,L(A,z,q,P,null);if(typeof q.then=="function")return D(z,A,R,vr(q),P);if(q.$$typeof===V)return D(z,A,R,or(A,q),P);Sr(A,q)}return null}function ie(z,A,R,q){for(var P=null,he=null,I=A,le=A=0,We=null;I!==null&&le<R.length;le++){I.index>le?(We=I,I=null):We=I.sibling;var xe=C(z,I,R[le],q);if(xe===null){I===null&&(I=We);break}e&&I&&xe.alternate===null&&t(z,I),A=c(xe,A,le),he===null?P=xe:he.sibling=xe,he=xe,I=We}if(le===R.length)return n(z,I),be&&ra(z,le),P;if(I===null){for(;le<R.length;le++)I=G(z,R[le],q),I!==null&&(A=c(I,A,le),he===null?P=I:he.sibling=I,he=I);return be&&ra(z,le),P}for(I=a(I);le<R.length;le++)We=D(I,z,le,R[le],q),We!==null&&(e&&We.alternate!==null&&I.delete(We.key===null?le:We.key),A=c(We,A,le),he===null?P=We:he.sibling=We,he=We);return e&&I.forEach(function(Jn){return t(z,Jn)}),be&&ra(z,le),P}function ne(z,A,R,q){if(R==null)throw Error(u(151));for(var P=null,he=null,I=A,le=A=0,We=null,xe=R.next();I!==null&&!xe.done;le++,xe=R.next()){I.index>le?(We=I,I=null):We=I.sibling;var Jn=C(z,I,xe.value,q);if(Jn===null){I===null&&(I=We);break}e&&I&&Jn.alternate===null&&t(z,I),A=c(Jn,A,le),he===null?P=Jn:he.sibling=Jn,he=Jn,I=We}if(xe.done)return n(z,I),be&&ra(z,le),P;if(I===null){for(;!xe.done;le++,xe=R.next())xe=G(z,xe.value,q),xe!==null&&(A=c(xe,A,le),he===null?P=xe:he.sibling=xe,he=xe);return be&&ra(z,le),P}for(I=a(I);!xe.done;le++,xe=R.next())xe=D(I,z,le,xe.value,q),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?le:xe.key),A=c(xe,A,le),he===null?P=xe:he.sibling=xe,he=xe);return e&&I.forEach(function(Qy){return t(z,Qy)}),be&&ra(z,le),P}function Te(z,A,R,q){if(typeof R=="object"&&R!==null&&R.type===T&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case j:e:{for(var P=R.key;A!==null;){if(A.key===P){if(P=R.type,P===T){if(A.tag===7){n(z,A.sibling),q=r(A,R.props.children),q.return=z,z=q;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===se&&uh(P)===A.type){n(z,A.sibling),q=r(A,R.props),ei(q,R),q.return=z,z=q;break e}n(z,A);break}else t(z,A);A=A.sibling}R.type===T?(q=la(R.props.children,z.mode,q,R.key),q.return=z,z=q):(q=ar(R.type,R.key,R.props,null,z.mode,q),ei(q,R),q.return=z,z=q)}return h(z);case H:e:{for(P=R.key;A!==null;){if(A.key===P)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){n(z,A.sibling),q=r(A,R.children||[]),q.return=z,z=q;break e}else{n(z,A);break}else t(z,A);A=A.sibling}q=ju(R,z.mode,q),q.return=z,z=q}return h(z);case se:return P=R._init,R=P(R._payload),Te(z,A,R,q)}if(Re(R))return ie(z,A,R,q);if(Ce(R)){if(P=Ce(R),typeof P!="function")throw Error(u(150));return R=P.call(R),ne(z,A,R,q)}if(typeof R.then=="function")return Te(z,A,vr(R),q);if(R.$$typeof===V)return Te(z,A,or(z,R),q);Sr(z,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(n(z,A.sibling),q=r(A,R),q.return=z,z=q):(n(z,A),q=Eu(R,z.mode,q),q.return=z,z=q),h(z)):n(z,A)}return function(z,A,R,q){try{Il=0;var P=Te(z,A,R,q);return $a=null,P}catch(I){if(I===Vl||I===cr)throw I;var he=wt(29,I,null,z.mode);return he.lanes=q,he.return=z,he}finally{}}}var Ja=ch(!0),sh=ch(!1),kt=Q(null),Wt=null;function Nn(e){var t=e.alternate;$(Ke,Ke.current&1),$(kt,e),Wt===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(Wt=e)}function fh(e){if(e.tag===22){if($(Ke,Ke.current),$(kt,e),Wt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Wt=e)}}else Un()}function Un(){$(Ke,Ke.current),$(kt,kt.current)}function pn(e){K(kt),Wt===e&&(Wt=null),K(Ke)}var Ke=Q(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Zc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ac(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),r=Dn(a);r.payload=t,n!=null&&(r.callback=n),t=_n(e,r,a),t!==null&&(zt(t,e,a),Zl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),r=Dn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=_n(e,r,a),t!==null&&(zt(t,e,a),Zl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=Dn(n);a.tag=2,t!=null&&(a.callback=t),t=_n(e,a,n),t!==null&&(zt(t,e,n),Zl(t,e,n))}};function dh(e,t,n,a,r,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,h):t.prototype&&t.prototype.isPureReactComponent?!Bl(n,a)||!Bl(r,c):!0}function hh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function ha(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mh(e){Er(e)}function ph(e){console.error(e)}function gh(e){Er(e)}function jr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function yh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ic(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){jr(e,t)},n}function xh(e){return e=Dn(e),e.tag=3,e}function bh(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=a.value;e.payload=function(){return r(c)},e.callback=function(){yh(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){yh(t,n,a),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Q1(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Yl(t,n,r,!0),n=kt.current,n!==null){switch(n.tag){case 13:return Wt===null?Oc():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Dc(e,a,r)),!1;case 22:return n.flags|=65536,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Dc(e,a,r)),!1}throw Error(u(435,n.tag))}return Dc(e,a,r),Oc(),!1}if(be)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==zu&&(e=Error(u(422),{cause:a}),ql(Nt(e,n)))):(a!==zu&&(t=Error(u(423),{cause:a}),ql(Nt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Nt(a,n),r=ic(e.stateNode,a,r),Hu(e,r),ke!==4&&(ke=2)),!1;var c=Error(u(520),{cause:a});if(c=Nt(c,n),oi===null?oi=[c]:oi.push(c),ke!==4&&(ke=2),t===null)return!0;a=Nt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ic(n.stateNode,a,e),Hu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Yn===null||!Yn.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=xh(r),bh(r,e,n,a),Hu(n,r),!1}n=n.return}while(n!==null);return!1}var vh=Error(u(461)),Fe=!1;function et(e,t,n,a){t.child=e===null?sh(t,null,n,a):Ja(t,e.child,n,a)}function Sh(e,t,n,a,r){n=n.render;var c=t.ref;if("ref"in a){var h={};for(var y in a)y!=="ref"&&(h[y]=a[y])}else h=a;return sa(t),a=Gu(e,t,n,h,c,r),y=Qu(),e!==null&&!Fe?(Vu(e,t,r),gn(e,t,r)):(be&&y&&Au(t),t.flags|=1,et(e,t,a,r),t.child)}function wh(e,t,n,a,r){if(e===null){var c=n.type;return typeof c=="function"&&!wu(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Eh(e,t,c,a,r)):(e=ar(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!hc(e,r)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(h,a)&&e.ref===t.ref)return gn(e,t,r)}return t.flags|=1,e=cn(c,a),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,n,a,r){if(e!==null){var c=e.memoizedProps;if(Bl(c,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=c,hc(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,gn(e,t,r)}return rc(e,t,n,a,r)}function jh(e,t,n){var a=t.pendingProps,r=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;t.childLanes=c&~a}else t.childLanes=0,t.child=null;return Ah(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,c!==null?c.cachePool:null),c!==null?Ed(t,c):Lu(),fh(t);else return t.lanes=t.childLanes=536870912,Ah(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(ur(t,c.cachePool),Ed(t,c),Un(),t.memoizedState=null):(e!==null&&ur(t,null),Lu(),Un());return et(e,t,r,n),t.child}function Ah(e,t,n,a){var r=Mu();return r=r===null?null:{parent:Ze._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&ur(t,null),Lu(),fh(t),e!==null&&Yl(e,t,a,!0),null}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function rc(e,t,n,a,r){return sa(t),n=Gu(e,t,n,a,void 0,r),a=Qu(),e!==null&&!Fe?(Vu(e,t,r),gn(e,t,r)):(be&&a&&Au(t),t.flags|=1,et(e,t,n,r),t.child)}function Th(e,t,n,a,r,c){return sa(t),t.updateQueue=null,n=Ad(t,a,n,r),jd(e),a=Qu(),e!==null&&!Fe?(Vu(e,t,c),gn(e,t,c)):(be&&a&&Au(t),t.flags|=1,et(e,t,n,c),t.child)}function zh(e,t,n,a,r){if(sa(t),t.stateNode===null){var c=La,h=n.contextType;typeof h=="object"&&h!==null&&(c=rt(h)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},Uu(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?rt(h):La,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ac(t,n,h,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&lc.enqueueReplaceState(c,c.state,null),$l(t,a,c,r),Kl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,v=ha(n,y);c.props=v;var O=c.context,L=n.contextType;h=La,typeof L=="object"&&L!==null&&(h=rt(L));var G=n.getDerivedStateFromProps;L=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||O!==h)&&hh(t,c,a,h),Cn=!1;var C=t.memoizedState;c.state=C,$l(t,a,c,r),Kl(),O=t.memoizedState,y||C!==O||Cn?(typeof G=="function"&&(ac(t,n,G,a),O=t.memoizedState),(v=Cn||dh(t,n,v,a,C,O,h))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),c.props=a,c.state=O,c.context=h,a=v):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Bu(e,t),h=t.memoizedProps,L=ha(n,h),c.props=L,G=t.pendingProps,C=c.context,O=n.contextType,v=La,typeof O=="object"&&O!==null&&(v=rt(O)),y=n.getDerivedStateFromProps,(O=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==G||C!==v)&&hh(t,c,a,v),Cn=!1,C=t.memoizedState,c.state=C,$l(t,a,c,r),Kl();var D=t.memoizedState;h!==G||C!==D||Cn||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof y=="function"&&(ac(t,n,y,a),D=t.memoizedState),(L=Cn||dh(t,n,L,a,C,D,v)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,D,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,D,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),c.props=a,c.state=D,c.context=v,a=L):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Ar(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=Ja(t,e.child,null,r),t.child=Ja(t,null,n,r)):et(e,t,n,r),t.memoizedState=c.state,e=t.child):e=gn(e,t,r),e}function Rh(e,t,n,a){return Ll(),t.flags|=256,et(e,t,n,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:pd()}}function cc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Oh(e,t,n){var a=t.pendingProps,r=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(r?Nn(t):Un(),be){var y=He,v;if(v=y){e:{for(v=y,y=Pt;v.nodeType!==8;){if(!y){y=null;break e}if(v=Xt(v.nextSibling),v===null){y=null;break e}}y=v}y!==null?(t.memoizedState={dehydrated:y,treeContext:ia!==null?{id:sn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},v=wt(18,null,null,0),v.stateNode=y,v.return=t,t.child=v,st=t,He=null,v=!0):v=!1}v||ua(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Zc(y)?t.lanes=32:t.lanes=536870912,null;pn(t)}return y=a.children,a=a.fallback,r?(Un(),r=t.mode,y=Tr({mode:"hidden",children:y},r),a=la(a,r,n,null),y.return=t,a.return=t,y.sibling=a,t.child=y,r=t.child,r.memoizedState=uc(n),r.childLanes=cc(e,h,n),t.memoizedState=oc,a):(Nn(t),sc(t,y))}if(v=e.memoizedState,v!==null&&(y=v.dehydrated,y!==null)){if(c)t.flags&256?(Nn(t),t.flags&=-257,t=fc(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),r=a.fallback,y=t.mode,a=Tr({mode:"visible",children:a.children},y),r=la(r,y,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Ja(t,e.child,null,n),a=t.child,a.memoizedState=uc(n),a.childLanes=cc(e,h,n),t.memoizedState=oc,t=r);else if(Nn(t),Zc(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var O=h.dgst;h=O,a=Error(u(419)),a.stack="",a.digest=h,ql({value:a,source:null,stack:null}),t=fc(e,t,n)}else if(Fe||Yl(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=Oe,h!==null&&(a=n&-n,a=(a&42)!==0?1:Ko(a),a=(a&(h.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,ka(e,a),zt(h,e,a),vh;y.data==="$?"||Oc(),t=fc(e,t,n)}else y.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,He=Xt(y.nextSibling),st=t,be=!0,oa=null,Pt=!1,e!==null&&(Bt[Ht++]=sn,Bt[Ht++]=fn,Bt[Ht++]=ia,sn=e.id,fn=e.overflow,ia=t),t=sc(t,a.children),t.flags|=4096);return t}return r?(Un(),r=a.fallback,y=t.mode,v=e.child,O=v.sibling,a=cn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,O!==null?r=cn(O,r):(r=la(r,y,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,y=e.child.memoizedState,y===null?y=uc(n):(v=y.cachePool,v!==null?(O=Ze._currentValue,v=v.parent!==O?{parent:O,pool:O}:v):v=pd(),y={baseLanes:y.baseLanes|n,cachePool:v}),r.memoizedState=y,r.childLanes=cc(e,h,n),t.memoizedState=oc,a):(Nn(t),n=e.child,e=n.sibling,n=cn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function sc(e,t){return t=Tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Tr(e,t){return e=wt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,t,n){return Ja(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ch(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ou(e.return,t,n)}function dc(e,t,n,a,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=r)}function Dh(e,t,n){var a=t.pendingProps,r=a.revealOrder,c=a.tail;if(et(e,t,a.children,n),a=Ke.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ch(e,n,t);else if(e.tag===19)Ch(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch($(Ke,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&wr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),dc(t,!1,r,n,c);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&wr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}dc(t,!0,n,null,c);break;case"together":dc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function V1(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),On(t,Ze,e.memoizedState.cache),Ll();break;case 27:case 5:Wn(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:On(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Oh(e,t,n):(Nn(t),e=gn(e,t,n),e!==null?e.sibling:null);Nn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Yl(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Dh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(Ke,Ke.current),a)break;return null;case 22:case 23:return t.lanes=0,jh(e,t,n);case 24:On(t,Ze,e.memoizedState.cache)}return gn(e,t,n)}function _h(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!hc(e,n)&&(t.flags&128)===0)return Fe=!1,V1(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,be&&(t.flags&1048576)!==0&&ud(t,ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")wu(a)?(e=ha(a,e),t.tag=1,t=zh(null,t,a,e,n)):(t.tag=0,t=rc(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===F){t.tag=11,t=Sh(null,t,a,e,n);break e}else if(r===J){t.tag=14,t=wh(null,t,a,e,n);break e}}throw t=at(a)||a,Error(u(306,t,""))}}return t;case 0:return rc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=ha(a,t.pendingProps),zh(e,t,a,r,n);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var c=t.memoizedState;r=c.element,Bu(e,t),$l(t,a,null,n);var h=t.memoizedState;if(a=h.cache,On(t,Ze,a),a!==c.cache&&Cu(t,[Ze],n,!0),Kl(),a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Rh(e,t,a,n);break e}else if(a!==r){r=Nt(Error(u(424)),t),ql(r),t=Rh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Xt(e.firstChild),st=t,be=!0,oa=null,Pt=!0,n=sh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ll(),a===r){t=gn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=Bm(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(n=t.type,e=t.pendingProps,a=qr(ae.current).createElement(n),a[it]=t,a[ft]=e,nt(a,n,e),Je(a),t.stateNode=a):t.memoizedState=Bm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wn(t),e===null&&be&&(a=t.stateNode=Mm(t.type,t.pendingProps,ae.current),st=t,Pt=!0,r=He,Vn(t.type)?(Kc=r,He=Xt(a.firstChild)):He=r),et(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((r=a=He)&&(a=xy(a,t.type,t.pendingProps,Pt),a!==null?(t.stateNode=a,st=t,He=Xt(a.firstChild),Pt=!1,r=!0):r=!1),r||ua(t)),Wn(t),r=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,a=c.children,Qc(r,c)?a=null:h!==null&&Qc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=Gu(e,t,B1,null,null,n),gi._currentValue=r),Ar(e,t),et(e,t,a,n),t.child;case 6:return e===null&&be&&((e=n=He)&&(n=by(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,st=t,He=null,e=!0):e=!1),e||ua(t)),null;case 13:return Oh(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ja(t,null,a,n):et(e,t,a,n),t.child;case 11:return Sh(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,On(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,sa(t),r=rt(r),a=a(r),t.flags|=1,et(e,t,a,n),t.child;case 14:return wh(e,t,t.type,t.pendingProps,n);case 15:return Eh(e,t,t.type,t.pendingProps,n);case 19:return Dh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Tr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=cn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return jh(e,t,n);case 24:return sa(t),a=rt(Ze),e===null?(r=Mu(),r===null&&(r=Oe,c=Du(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:a,cache:r},Uu(t),On(t,Ze,r)):((e.lanes&n)!==0&&(Bu(e,t),$l(t,null,null,n),Kl()),r=e.memoizedState,c=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),On(t,Ze,a)):(a=c.cache,On(t,Ze,a),a!==r.cache&&Cu(t,[Ze],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function yn(e){e.flags|=4}function Mh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(t=kt.current,t!==null&&((ye&4194048)===ye?Wt!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==Wt))throw Xl=Nu,gd;e.flags|=8192}}function zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ff():536870912,e.lanes|=t,Ia|=t)}function ti(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function X1(e,t,n){var a=t.pendingProps;switch(Tu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),hn(Ze),lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kl(t)?yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fd())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(yn(t),n!==null?(Ue(t),Mh(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(yn(t),Ue(t),Mh(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==a&&yn(t),Ue(t),t.flags&=-16777217),null;case 27:rn(t),n=ae.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ue(t),null}e=te.current,kl(t)?cd(t):(e=Mm(r,a,n),t.stateNode=e,yn(t))}return Ue(t),null;case 5:if(rn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ue(t),null}if(e=te.current,kl(t))cd(t);else{switch(r=qr(ae.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[it]=t,e[ft]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(nt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,kl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=st,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Tm(e.nodeValue,n)),e||ua(t)}else e=qr(e).createTextNode(a),e[it]=t,t.stateNode=e}return Ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=kl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[it]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=fd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(pn(t),t):(pn(t),null)}if(pn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),zr(t,t.updateQueue),Ue(t),null;case 4:return lt(),e===null&&kc(t.stateNode.containerInfo),Ue(t),null;case 10:return hn(t.type),Ue(t),null;case 19:if(K(Ke),r=t.memoizedState,r===null)return Ue(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)ti(r,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=wr(e),c!==null){for(t.flags|=128,ti(r,!1),e=c.updateQueue,t.updateQueue=e,zr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)od(n,e),n=n.sibling;return $(Ke,Ke.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ft()>Cr&&(t.flags|=128,a=!0,ti(r,!1),t.lanes=4194304)}else{if(!a)if(e=wr(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zr(t,e),ti(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!be)return Ue(t),null}else 2*Ft()-r.renderingStartTime>Cr&&n!==536870912&&(t.flags|=128,a=!0,ti(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ft(),t.sibling=null,e=Ke.current,$(Ke,a?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return pn(t),qu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&zr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&K(fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hn(Ze),Ue(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Z1(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(Ze),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rn(t),null;case 13:if(pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Ke),null;case 4:return lt(),null;case 10:return hn(t.type),null;case 22:case 23:return pn(t),qu(),e!==null&&K(fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hn(Ze),null;case 25:return null;default:return null}}function Nh(e,t){switch(Tu(t),t.tag){case 3:hn(Ze),lt();break;case 26:case 27:case 5:rn(t);break;case 4:lt();break;case 13:pn(t);break;case 19:K(Ke);break;case 10:hn(t.type);break;case 22:case 23:pn(t),qu(),e!==null&&K(fa);break;case 24:hn(Ze)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var c=n.create,h=n.inst;a=c(),h.destroy=a}n=n.next}while(n!==r)}}catch(y){ze(t,t.return,y)}}function Bn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){var h=a.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,r=t;var v=n,O=y;try{O()}catch(L){ze(r,v,L)}}}a=a.next}while(a!==c)}}catch(L){ze(t,t.return,L)}}function Uh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wd(t,n)}catch(a){ze(e,e.return,a)}}}function Bh(e,t,n){n.props=ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){ze(e,t,r)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Hh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){ze(e,e.return,r)}}function mc(e,t,n){try{var a=e.stateNode;hy(a,e.type,n,t),a[ft]=t}catch(r){ze(e,e.return,r)}}function kh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vn(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lr));else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Lh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);nt(t,a,n),t[it]=e,t[ft]=n}catch(c){ze(e,e.return,c)}}var xn=!1,qe=!1,yc=!1,qh=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function K1(e,t){if(e=e.containerInfo,Yc=Zr,e=Pf(e),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,y=-1,v=-1,O=0,L=0,G=e,C=null;t:for(;;){for(var D;G!==n||r!==0&&G.nodeType!==3||(y=h+r),G!==c||a!==0&&G.nodeType!==3||(v=h+a),G.nodeType===3&&(h+=G.nodeValue.length),(D=G.firstChild)!==null;)C=G,G=D;for(;;){if(G===e)break t;if(C===n&&++O===r&&(y=h),C===c&&++L===a&&(v=h),(D=G.nextSibling)!==null)break;G=C,C=G.parentNode}G=D}n=y===-1||v===-1?null:{start:y,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gc={focusedElem:e,selectionRange:n},Zr=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var ie=ha(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function Yh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&ni(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){ze(n,n.return,h)}else{var r=ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ze(n,n.return,h)}}a&64&&Uh(n),a&512&&ai(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wd(e,t)}catch(h){ze(n,n.return,h)}}break;case 27:t===null&&a&4&&Lh(n);case 26:case 5:Hn(e,n),t===null&&a&4&&Hh(n),a&512&&ai(n,n.return);break;case 12:Hn(e,n);break;case 13:Hn(e,n),a&4&&Vh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ny.bind(null,n),vy(e,n))));break;case 22:if(a=n.memoizedState!==null||xn,!a){t=t!==null&&t.memoizedState!==null||qe,r=xn;var c=qe;xn=a,(qe=t)&&!c?kn(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),xn=r,qe=c}break;case 30:break;default:Hn(e,n)}}function Gh(e){var t=e.alternate;t!==null&&(e.alternate=null,Gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,mt=!1;function bn(e,t,n){for(n=n.child;n!==null;)Qh(e,t,n),n=n.sibling}function Qh(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 26:qe||It(n,t),bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||It(n,t);var a=Me,r=mt;Vn(n.type)&&(Me=n.stateNode,mt=!1),bn(e,t,n),di(n.stateNode),Me=a,mt=r;break;case 5:qe||It(n,t);case 6:if(a=Me,r=mt,Me=null,bn(e,t,n),Me=a,mt=r,Me!==null)if(mt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(c){ze(n,t,c)}else try{Me.removeChild(n.stateNode)}catch(c){ze(n,t,c)}break;case 18:Me!==null&&(mt?(e=Me,Dm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vi(e)):Dm(Me,n.stateNode));break;case 4:a=Me,r=mt,Me=n.stateNode.containerInfo,mt=!0,bn(e,t,n),Me=a,mt=r;break;case 0:case 11:case 14:case 15:qe||Bn(2,n,t),qe||Bn(4,n,t),bn(e,t,n);break;case 1:qe||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Bh(n,t,a)),bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,bn(e,t,n),qe=a;break;default:bn(e,t,n)}}function Vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(n){ze(t,t.return,n)}}function $1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qh),t;default:throw Error(u(435,e.tag))}}function xc(e,t){var n=$1(e);t.forEach(function(a){var r=ay.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function Et(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],c=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(Vn(y.type)){Me=y.stateNode,mt=!1;break e}break;case 5:Me=y.stateNode,mt=!1;break e;case 3:case 4:Me=y.stateNode.containerInfo,mt=!0;break e}y=y.return}if(Me===null)throw Error(u(160));Qh(c,h,r),Me=null,mt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Xh(t,e),t=t.sibling}var Vt=null;function Xh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),jt(e),a&4&&(Bn(3,e,e.return),ni(3,e),Bn(5,e,e.return));break;case 1:Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),a&64&&xn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Vt;if(Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":c=r.getElementsByTagName("title")[0],(!c||c[zl]||c[it]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(a),r.head.insertBefore(c,r.querySelector("head > title"))),nt(c,a,n),c[it]=e,Je(c),a=c;break e;case"link":var h=Lm("link","href",r).get(a+(n.href||""));if(h){for(var y=0;y<h.length;y++)if(c=h[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(y,1);break t}}c=r.createElement(a),nt(c,a,n),r.head.appendChild(c);break;case"meta":if(h=Lm("meta","content",r).get(a+(n.content||""))){for(y=0;y<h.length;y++)if(c=h[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(y,1);break t}}c=r.createElement(a),nt(c,a,n),r.head.appendChild(c);break;default:throw Error(u(468,a))}c[it]=e,Je(c),a=c}e.stateNode=a}else qm(r,e.type,e.stateNode);else e.stateNode=km(r,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?qm(r,e.type,e.stateNode):km(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),n!==null&&a&4&&mc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),jt(e),a&512&&(qe||n===null||It(n,n.return)),e.flags&32){r=e.stateNode;try{Da(r,"")}catch(D){ze(e,e.return,D)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,mc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(yc=!0);break;case 6:if(Et(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(D){ze(e,e.return,D)}}break;case 3:if(Qr=null,r=Vt,Vt=Yr(t.containerInfo),Et(t,e),Vt=r,jt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(D){ze(e,e.return,D)}yc&&(yc=!1,Zh(e));break;case 4:a=Vt,Vt=Yr(e.stateNode.containerInfo),Et(t,e),jt(e),Vt=a;break;case 12:Et(t,e),jt(e);break;case 13:Et(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jc=Ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,xc(e,a)));break;case 22:r=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,O=xn,L=qe;if(xn=O||r,qe=L||v,Et(t,e),qe=L,xn=O,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||v||xn||qe||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(c=v.stateNode,r)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=v.stateNode;var G=v.memoizedProps.style,C=G!=null&&G.hasOwnProperty("display")?G.display:null;y.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(D){ze(v,v.return,D)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(D){ze(v,v.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,xc(e,n))));break;case 19:Et(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,xc(e,a)));break;case 30:break;case 21:break;default:Et(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(kh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,c=pc(e);Rr(e,c,r);break;case 5:var h=n.stateNode;n.flags&32&&(Da(h,""),n.flags&=-33);var y=pc(e);Rr(e,y,h);break;case 3:case 4:var v=n.stateNode.containerInfo,O=pc(e);gc(e,O,v);break;default:throw Error(u(161))}}catch(L){ze(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yh(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),ma(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Bh(t,t.return,n),ma(t);break;case 27:di(t.stateNode);case 26:case 5:It(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:kn(r,c,n),ni(4,c);break;case 1:if(kn(r,c,n),a=c,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){ze(a,a.return,O)}if(a=c,r=a.updateQueue,r!==null){var y=a.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)Sd(v[r],y)}catch(O){ze(a,a.return,O)}}n&&h&64&&Uh(c),ai(c,c.return);break;case 27:Lh(c);case 26:case 5:kn(r,c,n),n&&a===null&&h&4&&Hh(c),ai(c,c.return);break;case 12:kn(r,c,n);break;case 13:kn(r,c,n),n&&h&4&&Vh(r,c);break;case 22:c.memoizedState===null&&kn(r,c,n),ai(c,c.return);break;case 30:break;default:kn(r,c,n)}t=t.sibling}}function bc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Gl(n))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kh(e,t,n,a),t=t.sibling}function Kh(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),r&2048&&ni(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(r&2048){en(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,y=c.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ze(t,t.return,v)}}else en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?en(e,t,n,a):li(e,t):c._visibility&2?en(e,t,n,a):(c._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&bc(h,t);break;case 24:en(e,t,n,a),r&2048&&vc(t.alternate,t);break;default:en(e,t,n,a)}}function Fa(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,h=t,y=n,v=a,O=h.flags;switch(h.tag){case 0:case 11:case 15:Fa(c,h,y,v,r),ni(8,h);break;case 23:break;case 22:var L=h.stateNode;h.memoizedState!==null?L._visibility&2?Fa(c,h,y,v,r):li(c,h):(L._visibility|=2,Fa(c,h,y,v,r)),r&&O&2048&&bc(h.alternate,h);break;case 24:Fa(c,h,y,v,r),r&&O&2048&&vc(h.alternate,h);break;default:Fa(c,h,y,v,r)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:li(n,a),r&2048&&bc(a.alternate,a);break;case 24:li(n,a),r&2048&&vc(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ii=8192;function Pa(e){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)$h(e),e=e.sibling}function $h(e){switch(e.tag){case 26:Pa(e),e.flags&ii&&e.memoizedState!==null&&My(Vt,e.memoizedState,e.memoizedProps);break;case 5:Pa(e);break;case 3:case 4:var t=Vt;Vt=Yr(e.stateNode.containerInfo),Pa(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ii,ii=16777216,Pa(e),ii=t):Pa(e));break;default:Pa(e)}}function Jh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Ph(a,e)}Jh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fh(e),e=e.sibling}function Fh(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Or(e)):ri(e);break;default:ri(e)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Ph(a,e)}Jh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),Or(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Or(t));break;default:Or(t)}e=e.sibling}}function Ph(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pe=a;else e:for(n=e;Pe!==null;){a=Pe;var r=a.sibling,c=a.return;if(Gh(a),a===n){Pe=null;break e}if(r!==null){r.return=c,Pe=r;break e}Pe=c}}}var J1={getCacheForType:function(e){var t=rt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},F1=typeof WeakMap=="function"?WeakMap:Map,we=0,Oe=null,pe=null,ye=0,Ee=0,At=null,Ln=!1,Wa=!1,Sc=!1,vn=0,ke=0,qn=0,pa=0,wc=0,Lt=0,Ia=0,oi=null,pt=null,Ec=!1,jc=0,Cr=1/0,Dr=null,Yn=null,tt=0,Gn=null,el=null,tl=0,Ac=0,Tc=null,Wh=null,ui=0,zc=null;function Tt(){if((we&2)!==0&&ye!==0)return ye&-ye;if(k.T!==null){var e=Ga;return e!==0?e:Nc()}return mf()}function Ih(){Lt===0&&(Lt=(ye&536870912)===0||be?sf():536870912);var e=kt.current;return e!==null&&(e.flags|=32),Lt}function zt(e,t,n){(e===Oe&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(nl(e,0),Qn(e,ye,Lt,!1)),Tl(e,n),((we&2)===0||e!==Oe)&&(e===Oe&&((we&2)===0&&(pa|=n),ke===4&&Qn(e,ye,Lt,!1)),tn(e))}function em(e,t,n){if((we&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Al(e,t),r=a?I1(e,t):Cc(e,t,!0),c=a;do{if(r===0){Wa&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!P1(n)){r=Cc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;r=oi;var v=y.current.memoizedState.isDehydrated;if(v&&(nl(y,h).flags|=256),h=Cc(y,h,!1),h!==2){if(Sc&&!v){y.errorRecoveryDisabledLanes|=c,pa|=c,r=4;break e}c=pt,pt=r,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}r=h}if(c=!1,r!==2)continue}}if(r===1){nl(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,c=r,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Lt,!Ln);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=jc+300-Ft(),10<r)){if(Qn(a,t,Lt,!Ln),Gi(a,0,!0)!==0)break e;a.timeoutHandle=Om(tm.bind(null,a,n,pt,Dr,Ec,t,Lt,pa,Ia,Ln,c,2,-0,0),r);break e}tm(a,n,pt,Dr,Ec,t,Lt,pa,Ia,Ln,c,0,-0,0)}}break}while(!0);tn(e)}function tm(e,t,n,a,r,c,h,y,v,O,L,G,C,D){if(e.timeoutHandle=-1,G=t.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(pi={stylesheets:null,count:0,unsuspend:_y},$h(t),G=Ny(),G!==null)){e.cancelPendingCommit=G(um.bind(null,e,t,c,n,a,r,h,y,v,L,1,C,D)),Qn(e,c,h,!O);return}um(e,t,c,n,a,r,h,y,v)}function P1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],c=r.getSnapshot;r=r.value;try{if(!St(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~wc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var c=31-vt(r),h=1<<c;a[c]=-1,r&=~h}n!==0&&df(e,n,t)}function _r(){return(we&6)===0?(ci(0),!1):!0}function Rc(){if(pe!==null){if(Ee===0)var e=pe.return;else e=pe,dn=ca=null,Xu(e),$a=null,Il=0,e=pe;for(;e!==null;)Nh(e.alternate,e),e=e.return;pe=null}}function nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,py(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rc(),Oe=e,pe=n=cn(e.current,null),ye=t,Ee=0,At=null,Ln=!1,Wa=Al(e,t),Sc=!1,Ia=Lt=wc=pa=qn=ke=0,pt=oi=null,Ec=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-vt(a),c=1<<r;t|=e[r],a&=~c}return vn=t,er(),n}function nm(e,t){fe=null,k.H=br,t===Vl||t===cr?(t=bd(),Ee=3):t===gd?(t=bd(),Ee=4):Ee=t===vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,pe===null&&(ke=1,jr(e,Nt(t,e.current)))}function am(){var e=k.H;return k.H=br,e===null?br:e}function lm(){var e=k.A;return k.A=J1,e}function Oc(){ke=4,Ln||(ye&4194048)!==ye&&kt.current!==null||(Wa=!0),(qn&134217727)===0&&(pa&134217727)===0||Oe===null||Qn(Oe,ye,Lt,!1)}function Cc(e,t,n){var a=we;we|=2;var r=am(),c=lm();(Oe!==e||ye!==t)&&(Dr=null,nl(e,t)),t=!1;var h=ke;e:do try{if(Ee!==0&&pe!==null){var y=pe,v=At;switch(Ee){case 8:Rc(),h=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var O=Ee;if(Ee=0,At=null,al(e,y,v,O),n&&Wa){h=0;break e}break;default:O=Ee,Ee=0,At=null,al(e,y,v,O)}}W1(),h=ke;break}catch(L){nm(e,L)}while(!0);return t&&e.shellSuspendCounter++,dn=ca=null,we=a,k.H=r,k.A=c,pe===null&&(Oe=null,ye=0,er()),h}function W1(){for(;pe!==null;)im(pe)}function I1(e,t){var n=we;we|=2;var a=am(),r=lm();Oe!==e||ye!==t?(Dr=null,Cr=Ft()+500,nl(e,t)):Wa=Al(e,t);e:do try{if(Ee!==0&&pe!==null){t=pe;var c=At;t:switch(Ee){case 1:Ee=0,At=null,al(e,t,c,1);break;case 2:case 9:if(yd(c)){Ee=0,At=null,rm(t);break}t=function(){Ee!==2&&Ee!==9||Oe!==e||(Ee=7),tn(e)},c.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:yd(c)?(Ee=0,At=null,rm(t)):(Ee=0,At=null,al(e,t,c,7));break;case 5:var h=null;switch(pe.tag){case 26:h=pe.memoizedState;case 5:case 27:var y=pe;if(!h||Ym(h)){Ee=0,At=null;var v=y.sibling;if(v!==null)pe=v;else{var O=y.return;O!==null?(pe=O,Mr(O)):pe=null}break t}}Ee=0,At=null,al(e,t,c,5);break;case 6:Ee=0,At=null,al(e,t,c,6);break;case 8:Rc(),ke=6;break e;default:throw Error(u(462))}}ey();break}catch(L){nm(e,L)}while(!0);return dn=ca=null,k.H=a,k.A=r,we=n,pe!==null?0:(Oe=null,ye=0,er(),ke)}function ey(){for(;pe!==null&&!wg();)im(pe)}function im(e){var t=_h(e.alternate,e,vn);e.memoizedProps=e.pendingProps,t===null?Mr(e):pe=t}function rm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Th(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Th(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Xu(t);default:Nh(n,t),t=pe=od(t,vn),t=_h(n,t,vn)}e.memoizedProps=e.pendingProps,t===null?Mr(e):pe=t}function al(e,t,n,a){dn=ca=null,Xu(t),$a=null,Il=0;var r=t.return;try{if(Q1(e,r,t,n,ye)){ke=1,jr(e,Nt(n,e.current)),pe=null;return}}catch(c){if(r!==null)throw pe=r,c;ke=1,jr(e,Nt(n,e.current)),pe=null;return}t.flags&32768?(be||a===1?e=!0:Wa||(ye&536870912)!==0?e=!1:(Ln=e=!0,(a===2||a===9||a===3||a===6)&&(a=kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),om(t,e)):Mr(t)}function Mr(e){var t=e;do{if((t.flags&32768)!==0){om(t,Ln);return}e=t.return;var n=X1(t.alternate,t,vn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ke===0&&(ke=5)}function om(e,t){do{var n=Z1(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);ke=6,pe=null}function um(e,t,n,a,r,c,h,y,v){e.cancelPendingCommit=null;do Nr();while(tt!==0);if((we&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(c=t.lanes|t.childLanes,c|=vu,_g(e,n,c,h,y,v),e===Oe&&(pe=Oe=null,ye=0),el=t,Gn=e,tl=n,Ac=c,Tc=r,Wh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ly(Li,function(){return hm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,r=Z.p,Z.p=2,h=we,we|=4;try{K1(e,t,n)}finally{we=h,Z.p=r,k.T=a}}tt=1,cm(),sm(),fm()}}function cm(){if(tt===1){tt=0;var e=Gn,t=el,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var r=we;we|=4;try{Xh(t,e);var c=Gc,h=Pf(e.containerInfo),y=c.focusedElem,v=c.selectionRange;if(h!==y&&y&&y.ownerDocument&&Ff(y.ownerDocument.documentElement,y)){if(v!==null&&pu(y)){var O=v.start,L=v.end;if(L===void 0&&(L=O),"selectionStart"in y)y.selectionStart=O,y.selectionEnd=Math.min(L,y.value.length);else{var G=y.ownerDocument||document,C=G&&G.defaultView||window;if(C.getSelection){var D=C.getSelection(),ie=y.textContent.length,ne=Math.min(v.start,ie),Te=v.end===void 0?ne:Math.min(v.end,ie);!D.extend&&ne>Te&&(h=Te,Te=ne,ne=h);var z=Jf(y,ne),A=Jf(y,Te);if(z&&A&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==A.node||D.focusOffset!==A.offset)){var R=G.createRange();R.setStart(z.node,z.offset),D.removeAllRanges(),ne>Te?(D.addRange(R),D.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),D.addRange(R))}}}}for(G=[],D=y;D=D.parentNode;)D.nodeType===1&&G.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<G.length;y++){var q=G[y];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Zr=!!Yc,Gc=Yc=null}finally{we=r,Z.p=a,k.T=n}}e.current=t,tt=2}}function sm(){if(tt===2){tt=0;var e=Gn,t=el,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var r=we;we|=4;try{Yh(e,t.alternate,t)}finally{we=r,Z.p=a,k.T=n}}tt=3}}function fm(){if(tt===4||tt===3){tt=0,Eg();var e=Gn,t=el,n=tl,a=Wh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,el=Gn=null,dm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Yn=null),$o(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,r=Z.p,Z.p=2,k.T=null;try{for(var c=e.onRecoverableError,h=0;h<a.length;h++){var y=a[h];c(y.value,{componentStack:y.stack})}}finally{k.T=t,Z.p=r}}(tl&3)!==0&&Nr(),tn(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===zc?ui++:(ui=0,zc=e):ui=0,ci(0)}}function dm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function Nr(e){return cm(),sm(),fm(),hm()}function hm(){if(tt!==5)return!1;var e=Gn,t=Ac;Ac=0;var n=$o(tl),a=k.T,r=Z.p;try{Z.p=32>n?32:n,k.T=null,n=Tc,Tc=null;var c=Gn,h=tl;if(tt=0,el=Gn=null,tl=0,(we&6)!==0)throw Error(u(331));var y=we;if(we|=4,Fh(c.current),Kh(c,c.current,h,n),we=y,ci(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(jl,c)}catch{}return!0}finally{Z.p=r,k.T=a,dm(e,t)}}function mm(e,t,n){t=Nt(n,t),t=ic(e.stateNode,t,2),e=_n(e,t,2),e!==null&&(Tl(e,2),tn(e))}function ze(e,t,n){if(e.tag===3)mm(e,e,n);else for(;t!==null;){if(t.tag===3){mm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yn===null||!Yn.has(a))){e=Nt(n,e),n=xh(2),a=_n(t,n,2),a!==null&&(bh(n,a,t,e),Tl(a,2),tn(a));break}}t=t.return}}function Dc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new F1;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Sc=!0,r.add(n),e=ty.bind(null,e,t,n),t.then(e,e))}function ty(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(ye&n)===n&&(ke===4||ke===3&&(ye&62914560)===ye&&300>Ft()-jc?(we&2)===0&&nl(e,0):wc|=n,Ia===ye&&(Ia=0)),tn(e)}function pm(e,t){t===0&&(t=ff()),e=ka(e,t),e!==null&&(Tl(e,t),tn(e))}function ny(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function ay(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),pm(e,n)}function ly(e,t){return Vo(e,t)}var Ur=null,ll=null,_c=!1,Br=!1,Mc=!1,ga=0;function tn(e){e!==ll&&e.next===null&&(ll===null?Ur=ll=e:ll=ll.next=e),Br=!0,_c||(_c=!0,ry())}function ci(e,t){if(!Mc&&Br){Mc=!0;do for(var n=!1,a=Ur;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var c=0;else{var h=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-vt(42|e)+1)-1,c&=r&~(h&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,bm(a,c))}else c=ye,c=Gi(a,a===Oe?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||Al(a,c)||(n=!0,bm(a,c));a=a.next}while(n);Mc=!1}}function iy(){gm()}function gm(){Br=_c=!1;var e=0;ga!==0&&(my()&&(e=ga),ga=0);for(var t=Ft(),n=null,a=Ur;a!==null;){var r=a.next,c=ym(a,t);c===0?(a.next=null,n===null?Ur=r:n.next=r,r===null&&(ll=n)):(n=a,(e!==0||(c&3)!==0)&&(Br=!0)),a=r}ci(e)}function ym(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-vt(c),y=1<<h,v=r[h];v===-1?((y&n)===0||(y&a)!==0)&&(r[h]=Dg(y,t)):v<=t&&(e.expiredLanes|=y),c&=~y}if(t=Oe,n=ye,n=Gi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Al(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xo(a),$o(n)){case 2:case 8:n=uf;break;case 32:n=Li;break;case 268435456:n=cf;break;default:n=Li}return a=xm.bind(null,e),n=Vo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xo(a),e.callbackPriority=2,e.callbackNode=null,2}function xm(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var a=ye;return a=Gi(e,e===Oe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(em(e,a,t),ym(e,Ft()),e.callbackNode!=null&&e.callbackNode===n?xm.bind(null,e):null)}function bm(e,t){if(Nr())return null;em(e,t,!0)}function ry(){gy(function(){(we&6)!==0?Vo(of,iy):gm()})}function Nc(){return ga===0&&(ga=sf()),ga}function vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function Sm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function oy(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var c=vm((r[ft]||null).action),h=a.submitter;h&&(t=(t=h[ft]||null)?vm(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var y=new Pi("action","action",null,a,r);e.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ga!==0){var v=h?Sm(r,h):new FormData(r);ec(n,{pending:!0,data:v,method:r.method,action:c},null,v)}}else typeof c=="function"&&(y.preventDefault(),v=h?Sm(r,h):new FormData(r),ec(n,{pending:!0,data:v,method:r.method,action:c},c,v))},currentTarget:r}]})}}for(var Uc=0;Uc<bu.length;Uc++){var Bc=bu[Uc],uy=Bc.toLowerCase(),cy=Bc[0].toUpperCase()+Bc.slice(1);Qt(uy,"on"+cy)}Qt(ed,"onAnimationEnd"),Qt(td,"onAnimationIteration"),Qt(nd,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(T1,"onTransitionRun"),Qt(z1,"onTransitionStart"),Qt(R1,"onTransitionCancel"),Qt(ad,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function wm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var h=a.length-1;0<=h;h--){var y=a[h],v=y.instance,O=y.currentTarget;if(y=y.listener,v!==c&&r.isPropagationStopped())break e;c=y,r.currentTarget=O;try{c(r)}catch(L){Er(L)}r.currentTarget=null,c=v}else for(h=0;h<a.length;h++){if(y=a[h],v=y.instance,O=y.currentTarget,y=y.listener,v!==c&&r.isPropagationStopped())break e;c=y,r.currentTarget=O;try{c(r)}catch(L){Er(L)}r.currentTarget=null,c=v}}}}function ge(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var a=e+"__bubble";n.has(a)||(Em(t,e,2,!1),n.add(a))}function Hc(e,t,n){var a=0;t&&(a|=4),Em(n,e,a,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[Hr]){e[Hr]=!0,gf.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||Hc(n,!1,e),Hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Hc("selectionchange",!1,t))}}function Em(e,t,n,a){switch(Km(t)){case 2:var r=Hy;break;case 8:r=ky;break;default:r=Wc}n=r.bind(null,t,n,e),r=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Lc(e,t,n,a,r){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var y=a.stateNode.containerInfo;if(y===r)break;if(h===4)for(h=a.return;h!==null;){var v=h.tag;if((v===3||v===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;y!==null;){if(h=Aa(y),h===null)return;if(v=h.tag,v===5||v===6||v===26||v===27){a=c=h;continue e}y=y.parentNode}}a=a.return}Cf(function(){var O=c,L=lu(n),G=[];e:{var C=ld.get(e);if(C!==void 0){var D=Pi,ie=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":D=l1;break;case"focusin":ie="focus",D=su;break;case"focusout":ie="blur",D=su;break;case"beforeblur":case"afterblur":D=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=o1;break;case ed:case td:case nd:D=Jg;break;case ad:D=c1;break;case"scroll":case"scrollend":D=Vg;break;case"wheel":D=f1;break;case"copy":case"cut":case"paste":D=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Uf;break;case"toggle":case"beforetoggle":D=h1}var ne=(t&4)!==0,Te=!ne&&(e==="scroll"||e==="scrollend"),z=ne?C!==null?C+"Capture":null:C;ne=[];for(var A=O,R;A!==null;){var q=A;if(R=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||R===null||z===null||(q=Ol(A,z),q!=null&&ne.push(fi(A,q,R))),Te)break;A=A.return}0<ne.length&&(C=new D(C,ie,null,n,L),G.push({event:C,listeners:ne}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&n!==au&&(ie=n.relatedTarget||n.fromElement)&&(Aa(ie)||ie[ja]))break e;if((D||C)&&(C=L.window===L?L:(C=L.ownerDocument)?C.defaultView||C.parentWindow:window,D?(ie=n.relatedTarget||n.toElement,D=O,ie=ie?Aa(ie):null,ie!==null&&(Te=d(ie),ne=ie.tag,ie!==Te||ne!==5&&ne!==27&&ne!==6)&&(ie=null)):(D=null,ie=O),D!==ie)){if(ne=Mf,q="onMouseLeave",z="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Uf,q="onPointerLeave",z="onPointerEnter",A="pointer"),Te=D==null?C:Rl(D),R=ie==null?C:Rl(ie),C=new ne(q,A+"leave",D,n,L),C.target=Te,C.relatedTarget=R,q=null,Aa(L)===O&&(ne=new ne(z,A+"enter",ie,n,L),ne.target=R,ne.relatedTarget=Te,q=ne),Te=q,D&&ie)t:{for(ne=D,z=ie,A=0,R=ne;R;R=il(R))A++;for(R=0,q=z;q;q=il(q))R++;for(;0<A-R;)ne=il(ne),A--;for(;0<R-A;)z=il(z),R--;for(;A--;){if(ne===z||z!==null&&ne===z.alternate)break t;ne=il(ne),z=il(z)}ne=null}else ne=null;D!==null&&jm(G,C,D,ne,!1),ie!==null&&Te!==null&&jm(G,Te,ie,ne,!0)}}e:{if(C=O?Rl(O):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var P=Qf;else if(Yf(C))if(Vf)P=E1;else{P=S1;var he=v1}else D=C.nodeName,!D||D.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?O&&nu(O.elementType)&&(P=Qf):P=w1;if(P&&(P=P(e,O))){Gf(G,P,n,L);break e}he&&he(e,C,O),e==="focusout"&&O&&C.type==="number"&&O.memoizedProps.value!=null&&tu(C,"number",C.value)}switch(he=O?Rl(O):window,e){case"focusin":(Yf(he)||he.contentEditable==="true")&&(Ua=he,gu=O,Hl=null);break;case"focusout":Hl=gu=Ua=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Wf(G,n,L);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":Wf(G,n,L)}var I;if(du)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Na?Lf(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(Bf&&n.locale!=="ko"&&(Na||le!=="onCompositionStart"?le==="onCompositionEnd"&&Na&&(I=Df()):(Rn=L,ou="value"in Rn?Rn.value:Rn.textContent,Na=!0)),he=kr(O,le),0<he.length&&(le=new Nf(le,e,null,n,L),G.push({event:le,listeners:he}),I?le.data=I:(I=qf(n),I!==null&&(le.data=I)))),(I=p1?g1(e,n):y1(e,n))&&(le=kr(O,"onBeforeInput"),0<le.length&&(he=new Nf("onBeforeInput","beforeinput",null,n,L),G.push({event:he,listeners:le}),he.data=I)),oy(G,e,O,n,L)}wm(G,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kr(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ol(e,n),r!=null&&a.unshift(fi(e,r,c)),r=Ol(e,t),r!=null&&a.push(fi(e,r,c))),e.tag===3)return a;e=e.return}return[]}function il(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jm(e,t,n,a,r){for(var c=t._reactName,h=[];n!==null&&n!==a;){var y=n,v=y.alternate,O=y.stateNode;if(y=y.tag,v!==null&&v===a)break;y!==5&&y!==26&&y!==27||O===null||(v=O,r?(O=Ol(n,c),O!=null&&h.unshift(fi(n,O,v))):r||(O=Ol(n,c),O!=null&&h.push(fi(n,O,v)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var fy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Am(e){return(typeof e=="string"?e:""+e).replace(fy,`
`).replace(dy,"")}function Tm(e,t){return t=Am(t),Am(e)===t}function Lr(){}function Ae(e,t,n,a,r,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Da(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Da(e,""+a);break;case"className":Vi(e,"class",a);break;case"tabIndex":Vi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,n,a);break;case"style":Rf(e,a,c);break;case"data":if(t!=="object"){Vi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ki(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ki(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Lr);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ki(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Qi(e,"popover",a);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gg.get(n)||n,Qi(e,n,a))}}function qc(e,t,n,a,r,c){switch(n){case"style":Rf(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Da(e,a):(typeof a=="number"||typeof a=="bigint")&&Da(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[ft]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Qi(e,n,a)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,c,h,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var y=c=h=r=null,v=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":r=L;break;case"type":h=L;break;case"checked":v=L;break;case"defaultChecked":O=L;break;case"value":c=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ae(e,t,a,L,n,null)}}jf(e,c,y,v,O,h,r,!1),Xi(e);return;case"select":ge("invalid",e),a=h=c=null;for(r in n)if(n.hasOwnProperty(r)&&(y=n[r],y!=null))switch(r){case"value":c=y;break;case"defaultValue":h=y;break;case"multiple":a=y;default:Ae(e,t,r,y,n,null)}t=c,n=h,e.multiple=!!a,t!=null?Ca(e,!!a,t,!1):n!=null&&Ca(e,!!a,n,!0);return;case"textarea":ge("invalid",e),c=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":a=y;break;case"defaultValue":r=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(91));break;default:Ae(e,t,h,y,n,null)}Tf(e,a,r,c),Xi(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ae(e,t,v,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)ge(si[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,O,a,n,null)}return;default:if(nu(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&qc(e,t,L,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Ae(e,t,y,a,n,null))}function hy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,h=null,y=null,v=null,O=null,L=null;for(D in n){var G=n[D];if(n.hasOwnProperty(D)&&G!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=G;default:a.hasOwnProperty(D)||Ae(e,t,D,null,a,G)}}for(var C in a){var D=a[C];if(G=n[C],a.hasOwnProperty(C)&&(D!=null||G!=null))switch(C){case"type":c=D;break;case"name":r=D;break;case"checked":O=D;break;case"defaultChecked":L=D;break;case"value":h=D;break;case"defaultValue":y=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==G&&Ae(e,t,C,D,a,G)}}eu(e,h,y,v,O,L,c,r);return;case"select":D=h=y=C=null;for(c in n)if(v=n[c],n.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":D=v;default:a.hasOwnProperty(c)||Ae(e,t,c,null,a,v)}for(r in a)if(c=a[r],v=n[r],a.hasOwnProperty(r)&&(c!=null||v!=null))switch(r){case"value":C=c;break;case"defaultValue":y=c;break;case"multiple":h=c;default:c!==v&&Ae(e,t,r,c,a,v)}t=y,n=h,a=D,C!=null?Ca(e,!!n,C,!1):!!a!=!!n&&(t!=null?Ca(e,!!n,t,!0):Ca(e,!!n,n?[]:"",!1));return;case"textarea":D=C=null;for(y in n)if(r=n[y],n.hasOwnProperty(y)&&r!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ae(e,t,y,null,a,r)}for(h in a)if(r=a[h],c=n[h],a.hasOwnProperty(h)&&(r!=null||c!=null))switch(h){case"value":C=r;break;case"defaultValue":D=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==c&&Ae(e,t,h,r,a,c)}Af(e,C,D);return;case"option":for(var ie in n)if(C=n[ie],n.hasOwnProperty(ie)&&C!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ae(e,t,ie,null,a,C)}for(v in a)if(C=a[v],D=n[v],a.hasOwnProperty(v)&&C!==D&&(C!=null||D!=null))switch(v){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ae(e,t,v,C,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)C=n[ne],n.hasOwnProperty(ne)&&C!=null&&!a.hasOwnProperty(ne)&&Ae(e,t,ne,null,a,C);for(O in a)if(C=a[O],D=n[O],a.hasOwnProperty(O)&&C!==D&&(C!=null||D!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Ae(e,t,O,C,a,D)}return;default:if(nu(t)){for(var Te in n)C=n[Te],n.hasOwnProperty(Te)&&C!==void 0&&!a.hasOwnProperty(Te)&&qc(e,t,Te,void 0,a,C);for(L in a)C=a[L],D=n[L],!a.hasOwnProperty(L)||C===D||C===void 0&&D===void 0||qc(e,t,L,C,a,D);return}}for(var z in n)C=n[z],n.hasOwnProperty(z)&&C!=null&&!a.hasOwnProperty(z)&&Ae(e,t,z,null,a,C);for(G in a)C=a[G],D=n[G],!a.hasOwnProperty(G)||C===D||C==null&&D==null||Ae(e,t,G,C,a,D)}var Yc=null,Gc=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function zm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function my(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var Om=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(e){return Cm.resolve(null).then(e).catch(yy)}:Om;function yy(e){setTimeout(function(){throw e})}function Vn(e){return e==="head"}function Dm(e,t){var n=t,a=0,r=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<a&&8>a){n=a;var h=e.ownerDocument;if(n&1&&di(h.documentElement),n&2&&di(h.body),n&4)for(n=h.head,di(n),h=n.firstChild;h;){var y=h.nextSibling,v=h.nodeName;h[zl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=y}}if(r===0){e.removeChild(c),vi(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=c}while(n);vi(t)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xc(n),Fo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xy(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function by(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function vy(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Kc=null;function _m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Mm(e,t,n){switch(t=qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fo(e)}var qt=new Map,Nm=new Set;function Yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=Z.d;Z.d={f:Sy,r:wy,D:Ey,C:jy,L:Ay,m:Ty,X:Ry,S:zy,M:Oy};function Sy(){var e=Sn.f(),t=_r();return e||t}function wy(e){var t=Ta(e);t!==null&&t.tag===5&&t.type==="form"?eh(t):Sn.r(e)}var rl=typeof document>"u"?null:document;function Um(e,t,n){var a=rl;if(a&&typeof t=="string"&&t){var r=Mt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Nm.has(r)||(Nm.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function Ey(e){Sn.D(e),Um("dns-prefetch",e,null)}function jy(e,t){Sn.C(e,t),Um("preconnect",e,t)}function Ay(e,t,n){Sn.L(e,t,n);var a=rl;if(a&&e&&t){var r='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Mt(n.imageSizes)+'"]')):r+='[href="'+Mt(e)+'"]';var c=r;switch(t){case"style":c=ol(e);break;case"script":c=ul(e)}qt.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(c,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(hi(c))||t==="script"&&a.querySelector(mi(c))||(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function Ty(e,t){Sn.m(e,t);var n=rl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Mt(a)+'"][href="'+Mt(e)+'"]',c=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ul(e)}if(!qt.has(c)&&(e=b({rel:"modulepreload",href:e},t),qt.set(c,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mi(c)))return}a=n.createElement("link"),nt(a,"link",e),Je(a),n.head.appendChild(a)}}}function zy(e,t,n){Sn.S(e,t,n);var a=rl;if(a&&e){var r=za(a).hoistableStyles,c=ol(e);t=t||"default";var h=r.get(c);if(!h){var y={loading:0,preload:null};if(h=a.querySelector(hi(c)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(c))&&$c(e,n);var v=h=a.createElement("link");Je(v),nt(v,"link",e),v._p=new Promise(function(O,L){v.onload=O,v.onerror=L}),v.addEventListener("load",function(){y.loading|=1}),v.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Gr(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:y},r.set(c,h)}}}function Ry(e,t){Sn.X(e,t);var n=rl;if(n&&e){var a=za(n).hoistableScripts,r=ul(e),c=a.get(r);c||(c=n.querySelector(mi(r)),c||(e=b({src:e,async:!0},t),(t=qt.get(r))&&Jc(e,t),c=n.createElement("script"),Je(c),nt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function Oy(e,t){Sn.M(e,t);var n=rl;if(n&&e){var a=za(n).hoistableScripts,r=ul(e),c=a.get(r);c||(c=n.querySelector(mi(r)),c||(e=b({src:e,async:!0,type:"module"},t),(t=qt.get(r))&&Jc(e,t),c=n.createElement("script"),Je(c),nt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function Bm(e,t,n,a){var r=(r=ae.current)?Yr(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ol(n.href),n=za(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ol(n.href);var c=za(r).hoistableStyles,h=c.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=r.querySelector(hi(e)))&&!c._p&&(h.instance=c,h.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),c||Cy(r,e,n,h.state))),t&&a===null)throw Error(u(528,""));return h}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ul(n),n=za(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ol(e){return'href="'+Mt(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function Hm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Cy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",n),Je(t),e.head.appendChild(t))}function ul(e){return'[src="'+Mt(e)+'"]'}function mi(e){return"script[async]"+e}function km(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),nt(a,"style",r),Gr(a,n.precedence,e),t.instance=a;case"stylesheet":r=ol(n.href);var c=e.querySelector(hi(r));if(c)return t.state.loading|=4,t.instance=c,Je(c),c;a=Hm(n),(r=qt.get(r))&&$c(a,r),c=(e.ownerDocument||e).createElement("link"),Je(c);var h=c;return h._p=new Promise(function(y,v){h.onload=y,h.onerror=v}),nt(c,"link",a),t.state.loading|=4,Gr(c,n.precedence,e),t.instance=c;case"script":return c=ul(n.src),(r=e.querySelector(mi(c)))?(t.instance=r,Je(r),r):(a=n,(r=qt.get(c))&&(a=b({},n),Jc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),nt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Gr(a,n.precedence,e));return t.instance}function Gr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,c=r,h=0;h<a.length;h++){var y=a[h];if(y.dataset.precedence===t)c=y;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qr=null;function Lm(e,t,n){if(Qr===null){var a=new Map,r=Qr=new Map;r.set(n,a)}else r=Qr,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[zl]||c[it]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var y=a.get(h);y?y.push(c):a.set(h,[c])}}return a}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Dy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ym(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pi=null;function _y(){}function My(e,t,n){if(pi===null)throw Error(u(475));var a=pi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=ol(n.href),c=e.querySelector(hi(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Vr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=c,Je(c);return}c=e.ownerDocument||e,n=Hm(n),(r=qt.get(r))&&$c(n,r),c=c.createElement("link"),Je(c);var h=c;h._p=new Promise(function(y,v){h.onload=y,h.onerror=v}),nt(c,"link",n),t.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Vr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ny(){if(pi===null)throw Error(u(475));var e=pi;return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Vr(){if(this.count--,this.count===0){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(Uy,e),Xr=null,Vr.call(e))}function Uy(e,t){if(!(t.state.loading&4)){var n=Xr.get(e);if(n)var a=n.get(null);else{n=new Map,Xr.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var h=r[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=t.instance,h=r.getAttribute("data-precedence"),c=n.get(h)||a,c===a&&n.set(null,r),n.set(h,r),this.count++,a=Vr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:V,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function By(e,t,n,a,r,c,h,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.hiddenUpdates=Zo(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Gm(e,t,n,a,r,c,h,y,v,O,L,G){return e=new By(e,t,n,h,y,v,O,G),t=1,c===!0&&(t|=24),c=wt(3,null,null,t),e.current=c,c.stateNode=e,t=Du(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},Uu(c),e}function Qm(e){return e?(e=La,e):La}function Vm(e,t,n,a,r,c){r=Qm(r),a.context===null?a.context=r:a.pendingContext=r,a=Dn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=_n(e,a,t),n!==null&&(zt(n,e,t),Zl(n,e,t))}function Xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){Xm(e,t),(e=e.alternate)&&Xm(e,t)}function Zm(e){if(e.tag===13){var t=ka(e,67108864);t!==null&&zt(t,e,67108864),Pc(e,67108864)}}var Zr=!0;function Hy(e,t,n,a){var r=k.T;k.T=null;var c=Z.p;try{Z.p=2,Wc(e,t,n,a)}finally{Z.p=c,k.T=r}}function ky(e,t,n,a){var r=k.T;k.T=null;var c=Z.p;try{Z.p=8,Wc(e,t,n,a)}finally{Z.p=c,k.T=r}}function Wc(e,t,n,a){if(Zr){var r=Ic(a);if(r===null)Lc(e,t,a,Kr,n),$m(e,a);else if(qy(r,e,t,n,a))a.stopPropagation();else if($m(e,a),t&4&&-1<Ly.indexOf(e)){for(;r!==null;){var c=Ta(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=In(c.pendingLanes);if(h!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var v=1<<31-vt(h);y.entanglements[1]|=v,h&=~v}tn(c),(we&6)===0&&(Cr=Ft()+500,ci(0))}}break;case 13:y=ka(c,2),y!==null&&zt(y,c,2),_r(),Pc(c,2)}if(c=Ic(a),c===null&&Lc(e,t,a,Kr,n),c===r)break;r=c}r!==null&&a.stopPropagation()}else Lc(e,t,a,null,n)}}function Ic(e){return e=lu(e),es(e)}var Kr=null;function es(e){if(Kr=null,e=Aa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kr=e,null}function Km(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jg()){case of:return 2;case uf:return 8;case Li:case Ag:return 32;case cf:return 268435456;default:return 32}default:return 32}}var ts=!1,Xn=null,Zn=null,Kn=null,yi=new Map,xi=new Map,$n=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $m(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function bi(e,t,n,a,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Ta(t),t!==null&&Zm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function qy(e,t,n,a,r){switch(t){case"focusin":return Xn=bi(Xn,e,t,n,a,r),!0;case"dragenter":return Zn=bi(Zn,e,t,n,a,r),!0;case"mouseover":return Kn=bi(Kn,e,t,n,a,r),!0;case"pointerover":var c=r.pointerId;return yi.set(c,bi(yi.get(c)||null,e,t,n,a,r)),!0;case"gotpointercapture":return c=r.pointerId,xi.set(c,bi(xi.get(c)||null,e,t,n,a,r)),!0}return!1}function Jm(e){var t=Aa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Mg(e.priority,function(){if(n.tag===13){var a=Tt();a=Ko(a);var r=ka(n,a);r!==null&&zt(r,n,a),Pc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ic(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);au=a,n.target.dispatchEvent(a),au=null}else return t=Ta(n),t!==null&&Zm(t),e.blockedOn=n,!1;t.shift()}return!0}function Fm(e,t,n){$r(e)&&n.delete(t)}function Yy(){ts=!1,Xn!==null&&$r(Xn)&&(Xn=null),Zn!==null&&$r(Zn)&&(Zn=null),Kn!==null&&$r(Kn)&&(Kn=null),yi.forEach(Fm),xi.forEach(Fm)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Yy)))}var Fr=null;function Pm(e){Fr!==e&&(Fr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Fr===e&&(Fr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(es(a||n)===null)continue;break}var c=Ta(n);c!==null&&(e.splice(t,3),t-=3,ec(c,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function vi(e){function t(v){return Jr(v,e)}Xn!==null&&Jr(Xn,e),Zn!==null&&Jr(Zn,e),Kn!==null&&Jr(Kn,e),yi.forEach(t),xi.forEach(t);for(var n=0;n<$n.length;n++){var a=$n[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&$n.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],h=r[ft]||null;if(typeof c=="function")h||Pm(n);else if(h){var y=null;if(c&&c.hasAttribute("formAction")){if(r=c,h=c[ft]||null)y=h.formAction;else if(es(r)!==null)continue}else y=h.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),Pm(n)}}}function ns(e){this._internalRoot=e}Pr.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();Vm(n,a,e,t,null,null)},Pr.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vm(e.current,2,null,e,null,null),_r(),t[ja]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&Jm(e)}};var Wm=i.version;if(Wm!=="19.1.0")throw Error(u(527,Wm,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Gy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{jl=Wr.inject(Gy),bt=Wr}catch{}}return wi.createRoot=function(e,t){if(!s(e))throw Error(u(299));var n=!1,a="",r=mh,c=ph,h=gh,y=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Gm(e,1,!1,null,null,n,a,r,c,h,y,null),e[ja]=t.current,kc(e),new ns(t)},wi.hydrateRoot=function(e,t,n){if(!s(e))throw Error(u(299));var a=!1,r="",c=mh,h=ph,y=gh,v=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=Gm(e,1,!0,t,n??null,a,r,c,h,y,v,O),t.context=Qm(null),n=t.current,a=Tt(),a=Ko(a),r=Dn(a),r.callback=null,_n(n,r,a),n=a,t.current.lanes=n,Tl(t,n),tn(t),e[ja]=t.current,kc(e),new Pr(t)},wi.version="19.1.0",wi}var up;function Wy(){if(up)return is.exports;up=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),is.exports=Py(),is.exports}var Iy=Wy(),gt=function(){return gt=Object.assign||function(i){for(var o,u=1,s=arguments.length;u<s;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},gt.apply(this,arguments)};function Oi(l,i,o){if(o||arguments.length===2)for(var u=0,s=i.length,d;u<s;u++)(d||!(u in i))&&(d||(d=Array.prototype.slice.call(i,0,u)),d[u]=i[u]);return l.concat(d||Array.prototype.slice.call(i))}var De="-ms-",Ri="-moz-",Se="-webkit-",a0="comm",zo="rule",Qs="decl",ex="@import",l0="@keyframes",tx="@layer",i0=Math.abs,Vs=String.fromCharCode,zs=Object.assign;function nx(l,i){return Ie(l,0)^45?(((i<<2^Ie(l,0))<<2^Ie(l,1))<<2^Ie(l,2))<<2^Ie(l,3):0}function r0(l){return l.trim()}function wn(l,i){return(l=i.exec(l))?l[0]:l}function ce(l,i,o){return l.replace(i,o)}function ro(l,i,o){return l.indexOf(i,o)}function Ie(l,i){return l.charCodeAt(i)|0}function pl(l,i,o){return l.slice(i,o)}function an(l){return l.length}function o0(l){return l.length}function zi(l,i){return i.push(l),l}function ax(l,i){return l.map(i).join("")}function cp(l,i){return l.filter(function(o){return!wn(o,i)})}var Ro=1,gl=1,u0=0,Gt=0,Ve=0,vl="";function Oo(l,i,o,u,s,d,m,x){return{value:l,root:i,parent:o,type:u,props:s,children:d,line:Ro,column:gl,length:m,return:"",siblings:x}}function Fn(l,i){return zs(Oo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},i)}function cl(l){for(;l.root;)l=Fn(l.root,{children:[l]});zi(l,l.siblings)}function lx(){return Ve}function ix(){return Ve=Gt>0?Ie(vl,--Gt):0,gl--,Ve===10&&(gl=1,Ro--),Ve}function Zt(){return Ve=Gt<u0?Ie(vl,Gt++):0,gl++,Ve===10&&(gl=1,Ro++),Ve}function ba(){return Ie(vl,Gt)}function oo(){return Gt}function Co(l,i){return pl(vl,l,i)}function Rs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rx(l){return Ro=gl=1,u0=an(vl=l),Gt=0,[]}function ox(l){return vl="",l}function cs(l){return r0(Co(Gt-1,Os(l===91?l+2:l===40?l+1:l)))}function ux(l){for(;(Ve=ba())&&Ve<33;)Zt();return Rs(l)>2||Rs(Ve)>3?"":" "}function cx(l,i){for(;--i&&Zt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return Co(l,oo()+(i<6&&ba()==32&&Zt()==32))}function Os(l){for(;Zt();)switch(Ve){case l:return Gt;case 34:case 39:l!==34&&l!==39&&Os(Ve);break;case 40:l===41&&Os(l);break;case 92:Zt();break}return Gt}function sx(l,i){for(;Zt()&&l+Ve!==57;)if(l+Ve===84&&ba()===47)break;return"/*"+Co(i,Gt-1)+"*"+Vs(l===47?l:Zt())}function fx(l){for(;!Rs(ba());)Zt();return Co(l,Gt)}function dx(l){return ox(uo("",null,null,null,[""],l=rx(l),0,[0],l))}function uo(l,i,o,u,s,d,m,x,g){for(var p=0,b=0,E=m,j=0,H=0,T=0,M=1,N=1,B=1,Y=0,V="",F=s,X=d,W=u,J=V;N;)switch(T=Y,Y=Zt()){case 40:if(T!=108&&Ie(J,E-1)==58){ro(J+=ce(cs(Y),"&","&\f"),"&\f",i0(p?x[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:J+=cs(Y);break;case 9:case 10:case 13:case 32:J+=ux(T);break;case 92:J+=cx(oo()-1,7);continue;case 47:switch(ba()){case 42:case 47:zi(hx(sx(Zt(),oo()),i,o,g),g);break;default:J+="/"}break;case 123*M:x[p++]=an(J)*B;case 125*M:case 59:case 0:switch(Y){case 0:case 125:N=0;case 59+b:B==-1&&(J=ce(J,/\f/g,"")),H>0&&an(J)-E&&zi(H>32?fp(J+";",u,o,E-1,g):fp(ce(J," ","")+";",u,o,E-2,g),g);break;case 59:J+=";";default:if(zi(W=sp(J,i,o,p,b,s,x,V,F=[],X=[],E,d),d),Y===123)if(b===0)uo(J,i,W,W,F,d,E,x,X);else switch(j===99&&Ie(J,3)===110?100:j){case 100:case 108:case 109:case 115:uo(l,W,W,u&&zi(sp(l,W,W,0,0,s,x,V,s,F=[],E,X),X),s,X,E,x,u?F:X);break;default:uo(J,W,W,W,[""],X,0,x,X)}}p=b=H=0,M=B=1,V=J="",E=m;break;case 58:E=1+an(J),H=T;default:if(M<1){if(Y==123)--M;else if(Y==125&&M++==0&&ix()==125)continue}switch(J+=Vs(Y),Y*M){case 38:B=b>0?1:(J+="\f",-1);break;case 44:x[p++]=(an(J)-1)*B,B=1;break;case 64:ba()===45&&(J+=cs(Zt())),j=ba(),b=E=an(V=J+=fx(oo())),Y++;break;case 45:T===45&&an(J)==2&&(M=0)}}return d}function sp(l,i,o,u,s,d,m,x,g,p,b,E){for(var j=s-1,H=s===0?d:[""],T=o0(H),M=0,N=0,B=0;M<u;++M)for(var Y=0,V=pl(l,j+1,j=i0(N=m[M])),F=l;Y<T;++Y)(F=r0(N>0?H[Y]+" "+V:ce(V,/&\f/g,H[Y])))&&(g[B++]=F);return Oo(l,i,o,s===0?zo:x,g,p,b,E)}function hx(l,i,o,u){return Oo(l,i,o,a0,Vs(lx()),pl(l,2,-2),0,u)}function fp(l,i,o,u,s){return Oo(l,i,o,Qs,pl(l,0,u),pl(l,u+1,-1),u,s)}function c0(l,i,o){switch(nx(l,i)){case 5103:return Se+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+l+l;case 4789:return Ri+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+l+Ri+l+De+l+l;case 5936:switch(Ie(l,i+11)){case 114:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Se+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Se+l+De+l+l;case 6165:return Se+l+De+"flex-"+l+l;case 5187:return Se+l+ce(l,/(\w+).+(:[^]+)/,Se+"box-$1$2"+De+"flex-$1$2")+l;case 5443:return Se+l+De+"flex-item-"+ce(l,/flex-|-self/g,"")+(wn(l,/flex-|baseline/)?"":De+"grid-row-"+ce(l,/flex-|-self/g,""))+l;case 4675:return Se+l+De+"flex-line-pack"+ce(l,/align-content|flex-|-self/g,"")+l;case 5548:return Se+l+De+ce(l,"shrink","negative")+l;case 5292:return Se+l+De+ce(l,"basis","preferred-size")+l;case 6060:return Se+"box-"+ce(l,"-grow","")+Se+l+De+ce(l,"grow","positive")+l;case 4554:return Se+ce(l,/([^-])(transform)/g,"$1"+Se+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+l+l;case 4200:if(!wn(l,/flex-|baseline/))return De+"grid-column-align"+pl(l,i)+l;break;case 2592:case 3360:return De+ce(l,"template-","")+l;case 4384:case 3616:return o&&o.some(function(u,s){return i=s,wn(u.props,/grid-\w+-end/)})?~ro(l+(o=o[i].value),"span",0)?l:De+ce(l,"-start","")+l+De+"grid-row-span:"+(~ro(o,"span",0)?wn(o,/\d+/):+wn(o,/\d+/)-+wn(l,/\d+/))+";":De+ce(l,"-start","")+l;case 4896:case 4128:return o&&o.some(function(u){return wn(u.props,/grid-\w+-start/)})?l:De+ce(ce(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,Se+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(l)-1-i>6)switch(Ie(l,i+1)){case 109:if(Ie(l,i+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Ri+(Ie(l,i+3)==108?"$3":"$2-$3"))+l;case 115:return~ro(l,"stretch",0)?c0(ce(l,"stretch","fill-available"),i,o)+l:l}break;case 5152:case 5920:return ce(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,s,d,m,x,g,p){return De+s+":"+d+p+(m?De+s+"-span:"+(x?g:+g-+d)+p:"")+l});case 4949:if(Ie(l,i+6)===121)return ce(l,":",":"+Se)+l;break;case 6444:switch(Ie(l,Ie(l,14)===45?18:11)){case 120:return ce(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(Ie(l,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+De+"$2box$3")+l;case 100:return ce(l,":",":"+De)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(l,"scroll-","scroll-snap-")+l}return l}function yo(l,i){for(var o="",u=0;u<l.length;u++)o+=i(l[u],u,l,i)||"";return o}function mx(l,i,o,u){switch(l.type){case tx:if(l.children.length)break;case ex:case Qs:return l.return=l.return||l.value;case a0:return"";case l0:return l.return=l.value+"{"+yo(l.children,u)+"}";case zo:if(!an(l.value=l.props.join(",")))return""}return an(o=yo(l.children,u))?l.return=l.value+"{"+o+"}":""}function px(l){var i=o0(l);return function(o,u,s,d){for(var m="",x=0;x<i;x++)m+=l[x](o,u,s,d)||"";return m}}function gx(l){return function(i){i.root||(i=i.return)&&l(i)}}function yx(l,i,o,u){if(l.length>-1&&!l.return)switch(l.type){case Qs:l.return=c0(l.value,l.length,o);return;case l0:return yo([Fn(l,{value:ce(l.value,"@","@"+Se)})],u);case zo:if(l.length)return ax(o=l.props,function(s){switch(wn(s,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cl(Fn(l,{props:[ce(s,/:(read-\w+)/,":"+Ri+"$1")]})),cl(Fn(l,{props:[s]})),zs(l,{props:cp(o,u)});break;case"::placeholder":cl(Fn(l,{props:[ce(s,/:(plac\w+)/,":"+Se+"input-$1")]})),cl(Fn(l,{props:[ce(s,/:(plac\w+)/,":"+Ri+"$1")]})),cl(Fn(l,{props:[ce(s,/:(plac\w+)/,De+"input-$1")]})),cl(Fn(l,{props:[s]})),zs(l,{props:cp(o,u)});break}return""})}}var xx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},yl=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",s0="active",f0="data-styled-version",Do="6.1.18",Xs=`/*!sc*/
`,xo=typeof window<"u"&&typeof document<"u",bx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),_o=Object.freeze([]),xl=Object.freeze({});function vx(l,i,o){return o===void 0&&(o=xl),l.theme!==o.theme&&l.theme||i||o.theme}var d0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wx=/(^-|-$)/g;function dp(l){return l.replace(Sx,"-").replace(wx,"")}var Ex=/(a)(d)/gi,Ir=52,hp=function(l){return String.fromCharCode(l+(l>25?39:97))};function Cs(l){var i,o="";for(i=Math.abs(l);i>Ir;i=i/Ir|0)o=hp(i%Ir)+o;return(hp(i%Ir)+o).replace(Ex,"$1-$2")}var ss,h0=5381,ml=function(l,i){for(var o=i.length;o;)l=33*l^i.charCodeAt(--o);return l},m0=function(l){return ml(h0,l)};function p0(l){return Cs(m0(l)>>>0)}function jx(l){return l.displayName||l.name||"Component"}function fs(l){return typeof l=="string"&&!0}var g0=typeof Symbol=="function"&&Symbol.for,y0=g0?Symbol.for("react.memo"):60115,Ax=g0?Symbol.for("react.forward_ref"):60112,Tx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rx=((ss={})[Ax]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ss[y0]=x0,ss);function mp(l){return("type"in(i=l)&&i.type.$$typeof)===y0?x0:"$$typeof"in l?Rx[l.$$typeof]:Tx;var i}var Ox=Object.defineProperty,Cx=Object.getOwnPropertyNames,pp=Object.getOwnPropertySymbols,Dx=Object.getOwnPropertyDescriptor,_x=Object.getPrototypeOf,gp=Object.prototype;function b0(l,i,o){if(typeof i!="string"){if(gp){var u=_x(i);u&&u!==gp&&b0(l,u,o)}var s=Cx(i);pp&&(s=s.concat(pp(i)));for(var d=mp(l),m=mp(i),x=0;x<s.length;++x){var g=s[x];if(!(g in zx||o&&o[g]||m&&g in m||d&&g in d)){var p=Dx(i,g);try{Ox(l,g,p)}catch{}}}}return l}function bl(l){return typeof l=="function"}function Zs(l){return typeof l=="object"&&"styledComponentId"in l}function ya(l,i){return l&&i?"".concat(l," ").concat(i):l||i||""}function Ds(l,i){if(l.length===0)return"";for(var o=l[0],u=1;u<l.length;u++)o+=l[u];return o}function Ci(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function _s(l,i,o){if(o===void 0&&(o=!1),!o&&!Ci(l)&&!Array.isArray(l))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)l[u]=_s(l[u],i[u]);else if(Ci(i))for(var u in i)l[u]=_s(l[u],i[u]);return l}function Ks(l,i){Object.defineProperty(l,"toString",{value:i})}function Mi(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Mx=function(){function l(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return l.prototype.indexOfGroup=function(i){for(var o=0,u=0;u<i;u++)o+=this.groupSizes[u];return o},l.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var u=this.groupSizes,s=u.length,d=s;i>=d;)if((d<<=1)<0)throw Mi(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(i+1),g=(m=0,o.length);m<g;m++)this.tag.insertRule(x,o[m])&&(this.groupSizes[i]++,x++)},l.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],u=this.indexOfGroup(i),s=u+o;this.groupSizes[i]=0;for(var d=u;d<s;d++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var u=this.groupSizes[i],s=this.indexOfGroup(i),d=s+u,m=s;m<d;m++)o+="".concat(this.tag.getRule(m)).concat(Xs);return o},l}(),co=new Map,bo=new Map,so=1,eo=function(l){if(co.has(l))return co.get(l);for(;bo.has(so);)so++;var i=so++;return co.set(l,i),bo.set(i,l),i},Nx=function(l,i){so=i+1,co.set(l,i),bo.set(i,l)},Ux="style[".concat(yl,"][").concat(f0,'="').concat(Do,'"]'),Bx=new RegExp("^".concat(yl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Hx=function(l,i,o){for(var u,s=o.split(","),d=0,m=s.length;d<m;d++)(u=s[d])&&l.registerName(i,u)},kx=function(l,i){for(var o,u=((o=i.textContent)!==null&&o!==void 0?o:"").split(Xs),s=[],d=0,m=u.length;d<m;d++){var x=u[d].trim();if(x){var g=x.match(Bx);if(g){var p=0|parseInt(g[1],10),b=g[2];p!==0&&(Nx(b,p),Hx(l,b,g[3]),l.getTag().insertRules(p,s)),s.length=0}else s.push(x)}}},yp=function(l){for(var i=document.querySelectorAll(Ux),o=0,u=i.length;o<u;o++){var s=i[o];s&&s.getAttribute(yl)!==s0&&(kx(l,s),s.parentNode&&s.parentNode.removeChild(s))}};function Lx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var v0=function(l){var i=document.head,o=l||i,u=document.createElement("style"),s=function(x){var g=Array.from(x.querySelectorAll("style[".concat(yl,"]")));return g[g.length-1]}(o),d=s!==void 0?s.nextSibling:null;u.setAttribute(yl,s0),u.setAttribute(f0,Do);var m=Lx();return m&&u.setAttribute("nonce",m),o.insertBefore(u,d),u},qx=function(){function l(i){this.element=v0(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,s=0,d=u.length;s<d;s++){var m=u[s];if(m.ownerNode===o)return m}throw Mi(17)}(this.element),this.length=0}return l.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},l.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},l}(),Yx=function(){function l(i){this.element=v0(i),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},l.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},l}(),Gx=function(){function l(i){this.rules=[],this.length=0}return l.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},l.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},l.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},l}(),xp=xo,Qx={isServer:!xo,useCSSOMInjection:!bx},S0=function(){function l(i,o,u){i===void 0&&(i=xl),o===void 0&&(o={});var s=this;this.options=gt(gt({},Qx),i),this.gs=o,this.names=new Map(u),this.server=!!i.isServer,!this.server&&xo&&xp&&(xp=!1,yp(this)),Ks(this,function(){return function(d){for(var m=d.getTag(),x=m.length,g="",p=function(E){var j=function(B){return bo.get(B)}(E);if(j===void 0)return"continue";var H=d.names.get(j),T=m.getGroup(E);if(H===void 0||!H.size||T.length===0)return"continue";var M="".concat(yl,".g").concat(E,'[id="').concat(j,'"]'),N="";H!==void 0&&H.forEach(function(B){B.length>0&&(N+="".concat(B,","))}),g+="".concat(T).concat(M,'{content:"').concat(N,'"}').concat(Xs)},b=0;b<x;b++)p(b);return g}(s)})}return l.registerId=function(i){return eo(i)},l.prototype.rehydrate=function(){!this.server&&xo&&yp(this)},l.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new l(gt(gt({},this.options),i),this.gs,o&&this.names||void 0)},l.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var u=o.useCSSOMInjection,s=o.target;return o.isServer?new Gx(s):u?new qx(s):new Yx(s)}(this.options),new Mx(i)));var i},l.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},l.prototype.registerName=function(i,o){if(eo(i),this.names.has(i))this.names.get(i).add(o);else{var u=new Set;u.add(o),this.names.set(i,u)}},l.prototype.insertRules=function(i,o,u){this.registerName(i,o),this.getTag().insertRules(eo(i),u)},l.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},l.prototype.clearRules=function(i){this.getTag().clearGroup(eo(i)),this.clearNames(i)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Vx=/&/g,Xx=/^\s*\/\/.*$/gm;function w0(l,i){return l.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=w0(o.children,i)),o})}function Zx(l){var i,o,u,s=xl,d=s.options,m=d===void 0?xl:d,x=s.plugins,g=x===void 0?_o:x,p=function(j,H,T){return T.startsWith(o)&&T.endsWith(o)&&T.replaceAll(o,"").length>0?".".concat(i):j},b=g.slice();b.push(function(j){j.type===zo&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(Vx,o).replace(u,p))}),m.prefix&&b.push(yx),b.push(mx);var E=function(j,H,T,M){H===void 0&&(H=""),T===void 0&&(T=""),M===void 0&&(M="&"),i=M,o=H,u=new RegExp("\\".concat(o,"\\b"),"g");var N=j.replace(Xx,""),B=dx(T||H?"".concat(T," ").concat(H," { ").concat(N," }"):N);m.namespace&&(B=w0(B,m.namespace));var Y=[];return yo(B,px(b.concat(gx(function(V){return Y.push(V)})))),Y};return E.hash=g.length?g.reduce(function(j,H){return H.name||Mi(15),ml(j,H.name)},h0).toString():"",E}var Kx=new S0,Ms=Zx(),E0=Yt.createContext({shouldForwardProp:void 0,styleSheet:Kx,stylis:Ms});E0.Consumer;Yt.createContext(void 0);function bp(){return _.useContext(E0)}var j0=function(){function l(i,o){var u=this;this.inject=function(s,d){d===void 0&&(d=Ms);var m=u.name+d.hash;s.hasNameForId(u.id,m)||s.insertRules(u.id,m,d(u.rules,m,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,Ks(this,function(){throw Mi(12,String(u.name))})}return l.prototype.getName=function(i){return i===void 0&&(i=Ms),this.name+i.hash},l}(),$x=function(l){return l>="A"&&l<="Z"};function vp(l){for(var i="",o=0;o<l.length;o++){var u=l[o];if(o===1&&u==="-"&&l[0]==="-")return l;$x(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var A0=function(l){return l==null||l===!1||l===""},T0=function(l){var i,o,u=[];for(var s in l){var d=l[s];l.hasOwnProperty(s)&&!A0(d)&&(Array.isArray(d)&&d.isCss||bl(d)?u.push("".concat(vp(s),":"),d,";"):Ci(d)?u.push.apply(u,Oi(Oi(["".concat(s," {")],T0(d),!1),["}"],!1)):u.push("".concat(vp(s),": ").concat((i=s,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in xx||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function va(l,i,o,u){if(A0(l))return[];if(Zs(l))return[".".concat(l.styledComponentId)];if(bl(l)){if(!bl(d=l)||d.prototype&&d.prototype.isReactComponent||!i)return[l];var s=l(i);return va(s,i,o,u)}var d;return l instanceof j0?o?(l.inject(o,u),[l.getName(u)]):[l]:Ci(l)?T0(l):Array.isArray(l)?Array.prototype.concat.apply(_o,l.map(function(m){return va(m,i,o,u)})):[l.toString()]}function Jx(l){for(var i=0;i<l.length;i+=1){var o=l[i];if(bl(o)&&!Zs(o))return!1}return!0}var Fx=m0(Do),Px=function(){function l(i,o,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Jx(i),this.componentId=o,this.baseHash=ml(Fx,o),this.baseStyle=u,S0.registerId(o)}return l.prototype.generateAndInjectStyles=function(i,o,u){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))s=ya(s,this.staticRulesId);else{var d=Ds(va(this.rules,i,o,u)),m=Cs(ml(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,m)){var x=u(d,".".concat(m),void 0,this.componentId);o.insertRules(this.componentId,m,x)}s=ya(s,m),this.staticRulesId=m}else{for(var g=ml(this.baseHash,u.hash),p="",b=0;b<this.rules.length;b++){var E=this.rules[b];if(typeof E=="string")p+=E;else if(E){var j=Ds(va(E,i,o,u));g=ml(g,j+b),p+=j}}if(p){var H=Cs(g>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,u(p,".".concat(H),void 0,this.componentId)),s=ya(s,H)}}return s},l}(),z0=Yt.createContext(void 0);z0.Consumer;var ds={};function Wx(l,i,o){var u=Zs(l),s=l,d=!fs(l),m=i.attrs,x=m===void 0?_o:m,g=i.componentId,p=g===void 0?function(F,X){var W=typeof F!="string"?"sc":dp(F);ds[W]=(ds[W]||0)+1;var J="".concat(W,"-").concat(p0(Do+W+ds[W]));return X?"".concat(X,"-").concat(J):J}(i.displayName,i.parentComponentId):g,b=i.displayName,E=b===void 0?function(F){return fs(F)?"styled.".concat(F):"Styled(".concat(jx(F),")")}(l):b,j=i.displayName&&i.componentId?"".concat(dp(i.displayName),"-").concat(i.componentId):i.componentId||p,H=u&&s.attrs?s.attrs.concat(x).filter(Boolean):x,T=i.shouldForwardProp;if(u&&s.shouldForwardProp){var M=s.shouldForwardProp;if(i.shouldForwardProp){var N=i.shouldForwardProp;T=function(F,X){return M(F,X)&&N(F,X)}}else T=M}var B=new Px(o,j,u?s.componentStyle:void 0);function Y(F,X){return function(W,J,se){var de=W.attrs,_e=W.componentStyle,Xe=W.defaultProps,Ce=W.foldedComponentIds,ct=W.styledComponentId,at=W.target,Re=Yt.useContext(z0),k=bp(),Z=W.shouldForwardProp||k.shouldForwardProp,ee=vx(J,Re,Xe)||xl,re=function(me,ae,$e){for(var ve,lt=gt(gt({},ae),{className:void 0,theme:$e}),Wn=0;Wn<me.length;Wn+=1){var rn=bl(ve=me[Wn])?ve(lt):ve;for(var Dt in rn)lt[Dt]=Dt==="className"?ya(lt[Dt],rn[Dt]):Dt==="style"?gt(gt({},lt[Dt]),rn[Dt]):rn[Dt]}return ae.className&&(lt.className=ya(lt.className,ae.className)),lt}(de,J,ee),w=re.as||at,Q={};for(var K in re)re[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&re.theme===ee||(K==="forwardedAs"?Q.as=re.forwardedAs:Z&&!Z(K,w)||(Q[K]=re[K]));var $=function(me,ae){var $e=bp(),ve=me.generateAndInjectStyles(ae,$e.styleSheet,$e.stylis);return ve}(_e,re),te=ya(Ce,ct);return $&&(te+=" "+$),re.className&&(te+=" "+re.className),Q[fs(w)&&!d0.has(w)?"class":"className"]=te,se&&(Q.ref=se),_.createElement(w,Q)}(V,F,X)}Y.displayName=E;var V=Yt.forwardRef(Y);return V.attrs=H,V.componentStyle=B,V.displayName=E,V.shouldForwardProp=T,V.foldedComponentIds=u?ya(s.foldedComponentIds,s.styledComponentId):"",V.styledComponentId=j,V.target=u?s.target:l,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?function(X){for(var W=[],J=1;J<arguments.length;J++)W[J-1]=arguments[J];for(var se=0,de=W;se<de.length;se++)_s(X,de[se],!0);return X}({},s.defaultProps,F):F}}),Ks(V,function(){return".".concat(V.styledComponentId)}),d&&b0(V,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Sp(l,i){for(var o=[l[0]],u=0,s=i.length;u<s;u+=1)o.push(i[u],l[u+1]);return o}var wp=function(l){return Object.assign(l,{isCss:!0})};function R0(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(bl(l)||Ci(l))return wp(va(Sp(_o,Oi([l],i,!0))));var u=l;return i.length===0&&u.length===1&&typeof u[0]=="string"?va(u):wp(va(Sp(u,i)))}function Ns(l,i,o){if(o===void 0&&(o=xl),!i)throw Mi(1,i);var u=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return l(i,o,R0.apply(void 0,Oi([s],d,!1)))};return u.attrs=function(s){return Ns(l,i,gt(gt({},o),{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},u.withConfig=function(s){return Ns(l,i,gt(gt({},o),s))},u}var O0=function(l){return Ns(Wx,l)},S=O0;d0.forEach(function(l){S[l]=O0(l)});function Mo(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var u=Ds(R0.apply(void 0,Oi([l],i,!1))),s=p0(u);return new j0(s,u)}const Ix=S.nav`
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
`,eb=S.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`,tb=S.div`
  font-size: 1.8rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,nb=S.ul`
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
`,ab=S.li`
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
`,Ep=S.button`
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
`,lb=()=>{const[l,i]=_.useState(!1),[o,u]=_.useState(!1);return f.jsxs(Ix,{children:[f.jsx("a",{href:"#/ai-smart-class",style:{color:"white",textDecoration:"none"},children:f.jsx(eb,{children:"AI Smart Class"})}),f.jsx(tb,{onClick:()=>i(!l),children:"☰"}),f.jsxs(nb,{menuOpen:l,children:[f.jsxs(ab,{children:[f.jsx("button",{onClick:()=>u(!o),className:"dropdown-toggle",children:"Choose Feature ▾"}),o&&f.jsxs("ul",{className:"dropdown-menu",children:[f.jsx("li",{children:f.jsx("a",{href:"#/doubt-solver",children:"Doubt Solver"})}),f.jsx("li",{children:f.jsx("a",{href:"#/exam-paper-generator",children:"Exam Paper Generator"})}),f.jsx("li",{children:f.jsx("a",{href:"#/smart-quiz-generator",children:"Smart Quiz Generator"})}),f.jsx("li",{children:f.jsx("a",{href:"#/revision-planner",children:"Revision Planner"})})]})]}),f.jsx("li",{children:f.jsx(Ep,{children:"Register"})}),f.jsx("li",{children:f.jsx(Ep,{variant:"login",children:"Login"})})]})]})};var Ei={},jp;function ib(){if(jp)return Ei;jp=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=m,Ei.serialize=p;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function m(j,H){const T=new d,M=j.length;if(M<2)return T;const N=(H==null?void 0:H.decode)||b;let B=0;do{const Y=j.indexOf("=",B);if(Y===-1)break;const V=j.indexOf(";",B),F=V===-1?M:V;if(Y>F){B=j.lastIndexOf(";",Y-1)+1;continue}const X=x(j,B,Y),W=g(j,Y,X),J=j.slice(X,W);if(T[J]===void 0){let se=x(j,Y+1,F),de=g(j,F,se);const _e=N(j.slice(se,de));T[J]=_e}B=F+1}while(B<M);return T}function x(j,H,T){do{const M=j.charCodeAt(H);if(M!==32&&M!==9)return H}while(++H<T);return T}function g(j,H,T){for(;H>T;){const M=j.charCodeAt(--H);if(M!==32&&M!==9)return H+1}return T}function p(j,H,T){const M=(T==null?void 0:T.encode)||encodeURIComponent;if(!l.test(j))throw new TypeError(`argument name is invalid: ${j}`);const N=M(H);if(!i.test(N))throw new TypeError(`argument val is invalid: ${H}`);let B=j+"="+N;if(!T)return B;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);B+="; Max-Age="+T.maxAge}if(T.domain){if(!o.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);B+="; Domain="+T.domain}if(T.path){if(!u.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);B+="; Path="+T.path}if(T.expires){if(!E(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);B+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(B+="; HttpOnly"),T.secure&&(B+="; Secure"),T.partitioned&&(B+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return B}function b(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function E(j){return s.call(j)==="[object Date]"}return Ei}ib();var Ap="popstate";function rb(l={}){function i(s,d){let{pathname:m="/",search:x="",hash:g=""}=Ea(s.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Us("",{pathname:m,search:x,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){let m=s.document.querySelector("base"),x="";if(m&&m.getAttribute("href")){let g=s.location.href,p=g.indexOf("#");x=p===-1?g:g.slice(0,p)}return x+"#"+(typeof d=="string"?d:Di(d))}function u(s,d){Kt(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return ub(i,o,u,l)}function Be(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Kt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function Tp(l,i){return{usr:l.state,key:l.key,idx:i}}function Us(l,i,o=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Ea(i):i,state:o,key:i&&i.key||u||ob()}}function Di({pathname:l="/",search:i="",hash:o=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(l+=o.charAt(0)==="#"?o:"#"+o),l}function Ea(l){let i={};if(l){let o=l.indexOf("#");o>=0&&(i.hash=l.substring(o),l=l.substring(0,o));let u=l.indexOf("?");u>=0&&(i.search=l.substring(u),l=l.substring(0,u)),l&&(i.pathname=l)}return i}function ub(l,i,o,u={}){let{window:s=document.defaultView,v5Compat:d=!1}=u,m=s.history,x="POP",g=null,p=b();p==null&&(p=0,m.replaceState({...m.state,idx:p},""));function b(){return(m.state||{idx:null}).idx}function E(){x="POP";let N=b(),B=N==null?null:N-p;p=N,g&&g({action:x,location:M.location,delta:B})}function j(N,B){x="PUSH";let Y=Us(M.location,N,B);o&&o(Y,N),p=b()+1;let V=Tp(Y,p),F=M.createHref(Y);try{m.pushState(V,"",F)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;s.location.assign(F)}d&&g&&g({action:x,location:M.location,delta:1})}function H(N,B){x="REPLACE";let Y=Us(M.location,N,B);o&&o(Y,N),p=b();let V=Tp(Y,p),F=M.createHref(Y);m.replaceState(V,"",F),d&&g&&g({action:x,location:M.location,delta:0})}function T(N){return cb(N)}let M={get action(){return x},get location(){return l(s,m)},listen(N){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(Ap,E),g=N,()=>{s.removeEventListener(Ap,E),g=null}},createHref(N){return i(s,N)},createURL:T,encodeLocation(N){let B=T(N);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:j,replace:H,go(N){return m.go(N)}};return M}function cb(l,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Be(o,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Di(l);return u=u.replace(/ $/,"%20"),!i&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function C0(l,i,o="/"){return sb(l,i,o,!1)}function sb(l,i,o,u){let s=typeof i=="string"?Ea(i):i,d=jn(s.pathname||"/",o);if(d==null)return null;let m=D0(l);fb(m);let x=null;for(let g=0;x==null&&g<m.length;++g){let p=wb(d);x=vb(m[g],p,u)}return x}function D0(l,i=[],o=[],u=""){let s=(d,m,x)=>{let g={relativePath:x===void 0?d.path||"":x,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};g.relativePath.startsWith("/")&&(Be(g.relativePath.startsWith(u),`Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(u.length));let p=En([u,g.relativePath]),b=o.concat(g);d.children&&d.children.length>0&&(Be(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),D0(d.children,i,b,p)),!(d.path==null&&!d.index)&&i.push({path:p,score:xb(p,d.index),routesMeta:b})};return l.forEach((d,m)=>{var x;if(d.path===""||!((x=d.path)!=null&&x.includes("?")))s(d,m);else for(let g of _0(d.path))s(d,m,g)}),i}function _0(l){let i=l.split("/");if(i.length===0)return[];let[o,...u]=i,s=o.endsWith("?"),d=o.replace(/\?$/,"");if(u.length===0)return s?[d,""]:[d];let m=_0(u.join("/")),x=[];return x.push(...m.map(g=>g===""?d:[d,g].join("/"))),s&&x.push(...m),x.map(g=>l.startsWith("/")&&g===""?"/":g)}function fb(l){l.sort((i,o)=>i.score!==o.score?o.score-i.score:bb(i.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var db=/^:[\w-]+$/,hb=3,mb=2,pb=1,gb=10,yb=-2,zp=l=>l==="*";function xb(l,i){let o=l.split("/"),u=o.length;return o.some(zp)&&(u+=yb),i&&(u+=mb),o.filter(s=>!zp(s)).reduce((s,d)=>s+(db.test(d)?hb:d===""?pb:gb),u)}function bb(l,i){return l.length===i.length&&l.slice(0,-1).every((u,s)=>u===i[s])?l[l.length-1]-i[i.length-1]:0}function vb(l,i,o=!1){let{routesMeta:u}=l,s={},d="/",m=[];for(let x=0;x<u.length;++x){let g=u[x],p=x===u.length-1,b=d==="/"?i:i.slice(d.length)||"/",E=vo({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},b),j=g.route;if(!E&&p&&o&&!u[u.length-1].route.index&&(E=vo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!E)return null;Object.assign(s,E.params),m.push({params:s,pathname:En([d,E.pathname]),pathnameBase:Tb(En([d,E.pathnameBase])),route:j}),E.pathnameBase!=="/"&&(d=En([d,E.pathnameBase]))}return m}function vo(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[o,u]=Sb(l.path,l.caseSensitive,l.end),s=i.match(o);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:u.reduce((p,{paramName:b,isOptional:E},j)=>{if(b==="*"){let T=x[j]||"";m=d.slice(0,d.length-T.length).replace(/(.)\/+$/,"$1")}const H=x[j];return E&&!H?p[b]=void 0:p[b]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:m,pattern:l}}function Sb(l,i=!1,o=!0){Kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,g)=>(u.push({paramName:x,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),u]}function wb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function jn(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,u=l.charAt(o);return u&&u!=="/"?null:l.slice(o)||"/"}function Eb(l,i="/"){let{pathname:o,search:u="",hash:s=""}=typeof l=="string"?Ea(l):l;return{pathname:o?o.startsWith("/")?o:jb(o,i):i,search:zb(u),hash:Rb(s)}}function jb(l,i){let o=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function hs(l,i,o,u){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ab(l){return l.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function M0(l){let i=Ab(l);return i.map((o,u)=>u===i.length-1?o.pathname:o.pathnameBase)}function N0(l,i,o,u=!1){let s;typeof l=="string"?s=Ea(l):(s={...l},Be(!s.pathname||!s.pathname.includes("?"),hs("?","pathname","search",s)),Be(!s.pathname||!s.pathname.includes("#"),hs("#","pathname","hash",s)),Be(!s.search||!s.search.includes("#"),hs("#","search","hash",s)));let d=l===""||s.pathname==="",m=d?"/":s.pathname,x;if(m==null)x=o;else{let E=i.length-1;if(!u&&m.startsWith("..")){let j=m.split("/");for(;j[0]==="..";)j.shift(),E-=1;s.pathname=j.join("/")}x=E>=0?i[E]:"/"}let g=Eb(s,x),p=m&&m!=="/"&&m.endsWith("/"),b=(d||m===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(p||b)&&(g.pathname+="/"),g}var En=l=>l.join("/").replace(/\/\/+/g,"/"),Tb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Rb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Ob(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var U0=["POST","PUT","PATCH","DELETE"];new Set(U0);var Cb=["GET",...U0];new Set(Cb);var Sl=_.createContext(null);Sl.displayName="DataRouter";var No=_.createContext(null);No.displayName="DataRouterState";var B0=_.createContext({isTransitioning:!1});B0.displayName="ViewTransition";var Db=_.createContext(new Map);Db.displayName="Fetchers";var _b=_.createContext(null);_b.displayName="Await";var ln=_.createContext(null);ln.displayName="Navigation";var Ni=_.createContext(null);Ni.displayName="Location";var An=_.createContext({outlet:null,matches:[],isDataRoute:!1});An.displayName="Route";var $s=_.createContext(null);$s.displayName="RouteError";function Mb(l,{relative:i}={}){Be(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=_.useContext(ln),{hash:s,pathname:d,search:m}=Bi(l,{relative:i}),x=d;return o!=="/"&&(x=d==="/"?o:En([o,d])),u.createHref({pathname:x,search:m,hash:s})}function Ui(){return _.useContext(Ni)!=null}function Pn(){return Be(Ui(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ni).location}var H0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(l){_.useContext(ln).static||_.useLayoutEffect(l)}function Js(){let{isDataRoute:l}=_.useContext(An);return l?Zb():Nb()}function Nb(){Be(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let l=_.useContext(Sl),{basename:i,navigator:o}=_.useContext(ln),{matches:u}=_.useContext(An),{pathname:s}=Pn(),d=JSON.stringify(M0(u)),m=_.useRef(!1);return k0(()=>{m.current=!0}),_.useCallback((g,p={})=>{if(Kt(m.current,H0),!m.current)return;if(typeof g=="number"){o.go(g);return}let b=N0(g,JSON.parse(d),s,p.relative==="path");l==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:En([i,b.pathname])),(p.replace?o.replace:o.push)(b,p.state,p)},[i,o,d,s,l])}_.createContext(null);function Bi(l,{relative:i}={}){let{matches:o}=_.useContext(An),{pathname:u}=Pn(),s=JSON.stringify(M0(o));return _.useMemo(()=>N0(l,JSON.parse(s),u,i==="path"),[l,s,u,i])}function Ub(l,i){return L0(l,i)}function L0(l,i,o,u){var B;Be(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=_.useContext(ln),{matches:d}=_.useContext(An),m=d[d.length-1],x=m?m.params:{},g=m?m.pathname:"/",p=m?m.pathnameBase:"/",b=m&&m.route;{let Y=b&&b.path||"";q0(g,!b||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let E=Pn(),j;if(i){let Y=typeof i=="string"?Ea(i):i;Be(p==="/"||((B=Y.pathname)==null?void 0:B.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),j=Y}else j=E;let H=j.pathname||"/",T=H;if(p!=="/"){let Y=p.replace(/^\//,"").split("/");T="/"+H.replace(/^\//,"").split("/").slice(Y.length).join("/")}let M=C0(l,{pathname:T});Kt(b||M!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Kt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=qb(M&&M.map(Y=>Object.assign({},Y,{params:Object.assign({},x,Y.params),pathname:En([p,s.encodeLocation?s.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?p:En([p,s.encodeLocation?s.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),d,o,u);return i&&N?_.createElement(Ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},N):N}function Bb(){let l=Xb(),i=Ob(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),o=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:d},"ErrorBoundary")," or"," ",_.createElement("code",{style:d},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},i),o?_.createElement("pre",{style:s},o):null,m)}var Hb=_.createElement(Bb,null),kb=class extends _.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){console.error("React Router caught the following error during render",l,i)}render(){return this.state.error!==void 0?_.createElement(An.Provider,{value:this.props.routeContext},_.createElement($s.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Lb({routeContext:l,match:i,children:o}){let u=_.useContext(Sl);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),_.createElement(An.Provider,{value:l},o)}function qb(l,i=[],o=null,u=null){if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let s=l,d=o==null?void 0:o.errors;if(d!=null){let g=s.findIndex(p=>p.route.id&&(d==null?void 0:d[p.route.id])!==void 0);Be(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,g+1))}let m=!1,x=-1;if(o)for(let g=0;g<s.length;g++){let p=s[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=g),p.route.id){let{loaderData:b,errors:E}=o,j=p.route.loader&&!b.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||j){m=!0,x>=0?s=s.slice(0,x+1):s=[s[0]];break}}}return s.reduceRight((g,p,b)=>{let E,j=!1,H=null,T=null;o&&(E=d&&p.route.id?d[p.route.id]:void 0,H=p.route.errorElement||Hb,m&&(x<0&&b===0?(q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):x===b&&(j=!0,T=p.route.hydrateFallbackElement||null)));let M=i.concat(s.slice(0,b+1)),N=()=>{let B;return E?B=H:j?B=T:p.route.Component?B=_.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=g,_.createElement(Lb,{match:p,routeContext:{outlet:g,matches:M,isDataRoute:o!=null},children:B})};return o&&(p.route.ErrorBoundary||p.route.errorElement||b===0)?_.createElement(kb,{location:o.location,revalidation:o.revalidation,component:H,error:E,children:N(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):N()},null)}function Fs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yb(l){let i=_.useContext(Sl);return Be(i,Fs(l)),i}function Gb(l){let i=_.useContext(No);return Be(i,Fs(l)),i}function Qb(l){let i=_.useContext(An);return Be(i,Fs(l)),i}function Ps(l){let i=Qb(l),o=i.matches[i.matches.length-1];return Be(o.route.id,`${l} can only be used on routes that contain a unique "id"`),o.route.id}function Vb(){return Ps("useRouteId")}function Xb(){var u;let l=_.useContext($s),i=Gb("useRouteError"),o=Ps("useRouteError");return l!==void 0?l:(u=i.errors)==null?void 0:u[o]}function Zb(){let{router:l}=Yb("useNavigate"),i=Ps("useNavigate"),o=_.useRef(!1);return k0(()=>{o.current=!0}),_.useCallback(async(s,d={})=>{Kt(o.current,H0),o.current&&(typeof s=="number"?l.navigate(s):await l.navigate(s,{fromRouteId:i,...d}))},[l,i])}var Rp={};function q0(l,i,o){!i&&!Rp[l]&&(Rp[l]=!0,Kt(!1,o))}_.memo(Kb);function Kb({routes:l,future:i,state:o}){return L0(l,void 0,o,i)}function Qe(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $b({basename:l="/",children:i=null,location:o,navigationType:u="POP",navigator:s,static:d=!1}){Be(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=l.replace(/^\/*/,"/"),x=_.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof o=="string"&&(o=Ea(o));let{pathname:g="/",search:p="",hash:b="",state:E=null,key:j="default"}=o,H=_.useMemo(()=>{let T=jn(g,m);return T==null?null:{location:{pathname:T,search:p,hash:b,state:E,key:j},navigationType:u}},[m,g,p,b,E,j,u]);return Kt(H!=null,`<Router basename="${m}"> is not able to match the URL "${g}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:_.createElement(ln.Provider,{value:x},_.createElement(Ni.Provider,{children:i,value:H}))}function Jb({children:l,location:i}){return Ub(Bs(l),i)}function Bs(l,i=[]){let o=[];return _.Children.forEach(l,(u,s)=>{if(!_.isValidElement(u))return;let d=[...i,s];if(u.type===_.Fragment){o.push.apply(o,Bs(u.props.children,d));return}Be(u.type===Qe,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||d.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=Bs(u.props.children,d)),o.push(m)}),o}var fo="get",ho="application/x-www-form-urlencoded";function Uo(l){return l!=null&&typeof l.tagName=="string"}function Fb(l){return Uo(l)&&l.tagName.toLowerCase()==="button"}function Pb(l){return Uo(l)&&l.tagName.toLowerCase()==="form"}function Wb(l){return Uo(l)&&l.tagName.toLowerCase()==="input"}function Ib(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ev(l,i){return l.button===0&&(!i||i==="_self")&&!Ib(l)}var to=null;function tv(){if(to===null)try{new FormData(document.createElement("form"),0),to=!1}catch{to=!0}return to}var nv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ms(l){return l!=null&&!nv.has(l)?(Kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ho}"`),null):l}function av(l,i){let o,u,s,d,m;if(Pb(l)){let x=l.getAttribute("action");u=x?jn(x,i):null,o=l.getAttribute("method")||fo,s=ms(l.getAttribute("enctype"))||ho,d=new FormData(l)}else if(Fb(l)||Wb(l)&&(l.type==="submit"||l.type==="image")){let x=l.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||x.getAttribute("action");if(u=g?jn(g,i):null,o=l.getAttribute("formmethod")||x.getAttribute("method")||fo,s=ms(l.getAttribute("formenctype"))||ms(x.getAttribute("enctype"))||ho,d=new FormData(x,l),!tv()){let{name:p,type:b,value:E}=l;if(b==="image"){let j=p?`${p}.`:"";d.append(`${j}x`,"0"),d.append(`${j}y`,"0")}else p&&d.append(p,E)}}else{if(Uo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=fo,u=null,s=ho,m=l}return d&&s==="text/plain"&&(m=d,d=void 0),{action:u,method:o.toLowerCase(),encType:s,formData:d,body:m}}function Ws(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}async function lv(l,i){if(l.id in i)return i[l.id];try{let o=await import(l.module);return i[l.id]=o,o}catch(o){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function rv(l,i,o){let u=await Promise.all(l.map(async s=>{let d=i.routes[s.route.id];if(d){let m=await lv(d,o);return m.links?m.links():[]}return[]}));return sv(u.flat(1).filter(iv).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Op(l,i,o,u,s,d){let m=(g,p)=>o[p]?g.route.id!==o[p].route.id:!0,x=(g,p)=>{var b;return o[p].pathname!==g.pathname||((b=o[p].route.path)==null?void 0:b.endsWith("*"))&&o[p].params["*"]!==g.params["*"]};return d==="assets"?i.filter((g,p)=>m(g,p)||x(g,p)):d==="data"?i.filter((g,p)=>{var E;let b=u.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(m(g,p)||x(g,p))return!0;if(g.route.shouldRevalidate){let j=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=o[0])==null?void 0:E.params)||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function ov(l,i,{includeHydrateFallback:o}={}){return uv(l.map(u=>{let s=i.routes[u.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),o&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function uv(l){return[...new Set(l)]}function cv(l){let i={},o=Object.keys(l).sort();for(let u of o)i[u]=l[u];return i}function sv(l,i){let o=new Set;return new Set(i),l.reduce((u,s)=>{let d=JSON.stringify(cv(s));return o.has(d)||(o.add(d),u.push({key:d,link:s})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fv=new Set([100,101,204,205]);function dv(l,i){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname="_root.data":i&&jn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Y0(){let l=_.useContext(Sl);return Ws(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function hv(){let l=_.useContext(No);return Ws(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Is=_.createContext(void 0);Is.displayName="FrameworkContext";function G0(){let l=_.useContext(Is);return Ws(l,"You must render this element inside a <HydratedRouter> element"),l}function mv(l,i){let o=_.useContext(Is),[u,s]=_.useState(!1),[d,m]=_.useState(!1),{onFocus:x,onBlur:g,onMouseEnter:p,onMouseLeave:b,onTouchStart:E}=i,j=_.useRef(null);_.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let M=B=>{B.forEach(Y=>{m(Y.isIntersecting)})},N=new IntersectionObserver(M,{threshold:.5});return j.current&&N.observe(j.current),()=>{N.disconnect()}}},[l]),_.useEffect(()=>{if(u){let M=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(M)}}},[u]);let H=()=>{s(!0)},T=()=>{s(!1),m(!1)};return o?l!=="intent"?[d,j,{}]:[d,j,{onFocus:ji(x,H),onBlur:ji(g,T),onMouseEnter:ji(p,H),onMouseLeave:ji(b,T),onTouchStart:ji(E,H)}]:[!1,j,{}]}function ji(l,i){return o=>{l&&l(o),o.defaultPrevented||i(o)}}function pv({page:l,...i}){let{router:o}=Y0(),u=_.useMemo(()=>C0(o.routes,l,o.basename),[o.routes,l,o.basename]);return u?_.createElement(yv,{page:l,matches:u,...i}):null}function gv(l){let{manifest:i,routeModules:o}=G0(),[u,s]=_.useState([]);return _.useEffect(()=>{let d=!1;return rv(l,i,o).then(m=>{d||s(m)}),()=>{d=!0}},[l,i,o]),u}function yv({page:l,matches:i,...o}){let u=Pn(),{manifest:s,routeModules:d}=G0(),{basename:m}=Y0(),{loaderData:x,matches:g}=hv(),p=_.useMemo(()=>Op(l,i,g,s,u,"data"),[l,i,g,s,u]),b=_.useMemo(()=>Op(l,i,g,s,u,"assets"),[l,i,g,s,u]),E=_.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let T=new Set,M=!1;if(i.forEach(B=>{var V;let Y=s.routes[B.route.id];!Y||!Y.hasLoader||(!p.some(F=>F.route.id===B.route.id)&&B.route.id in x&&((V=d[B.route.id])!=null&&V.shouldRevalidate)||Y.hasClientLoader?M=!0:T.add(B.route.id))}),T.size===0)return[];let N=dv(l,m);return M&&T.size>0&&N.searchParams.set("_routes",i.filter(B=>T.has(B.route.id)).map(B=>B.route.id).join(",")),[N.pathname+N.search]},[m,x,u,s,p,i,l,d]),j=_.useMemo(()=>ov(b,s),[b,s]),H=gv(b);return _.createElement(_.Fragment,null,E.map(T=>_.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),j.map(T=>_.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),H.map(({key:T,link:M})=>_.createElement("link",{key:T,...M})))}function xv(...l){return i=>{l.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q0&&(window.__reactRouterVersion="7.6.1")}catch{}function bv({basename:l,children:i,window:o}){let u=_.useRef();u.current==null&&(u.current=rb({window:o,v5Compat:!0}));let s=u.current,[d,m]=_.useState({action:s.action,location:s.location}),x=_.useCallback(g=>{_.startTransition(()=>m(g))},[m]);return _.useLayoutEffect(()=>s.listen(x),[s,x]),_.createElement($b,{basename:l,children:i,location:d.location,navigationType:d.action,navigator:s})}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=_.forwardRef(function({onClick:i,discover:o="render",prefetch:u="none",relative:s,reloadDocument:d,replace:m,state:x,target:g,to:p,preventScrollReset:b,viewTransition:E,...j},H){let{basename:T}=_.useContext(ln),M=typeof p=="string"&&V0.test(p),N,B=!1;if(typeof p=="string"&&M&&(N=p,Q0))try{let de=new URL(window.location.href),_e=p.startsWith("//")?new URL(de.protocol+p):new URL(p),Xe=jn(_e.pathname,T);_e.origin===de.origin&&Xe!=null?p=Xe+_e.search+_e.hash:B=!0}catch{Kt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=Mb(p,{relative:s}),[V,F,X]=mv(u,j),W=Ev(p,{replace:m,state:x,target:g,preventScrollReset:b,relative:s,viewTransition:E});function J(de){i&&i(de),de.defaultPrevented||W(de)}let se=_.createElement("a",{...j,...X,href:N||Y,onClick:B||d?i:J,ref:xv(H,F),target:g,"data-discover":!M&&o==="render"?"true":void 0});return V&&!M?_.createElement(_.Fragment,null,se,_.createElement(pv,{page:Y})):se});$t.displayName="Link";var vv=_.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:u="",end:s=!1,style:d,to:m,viewTransition:x,children:g,...p},b){let E=Bi(m,{relative:p.relative}),j=Pn(),H=_.useContext(No),{navigator:T,basename:M}=_.useContext(ln),N=H!=null&&Rv(E)&&x===!0,B=T.encodeLocation?T.encodeLocation(E).pathname:E.pathname,Y=j.pathname,V=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(Y=Y.toLowerCase(),V=V?V.toLowerCase():null,B=B.toLowerCase()),V&&M&&(V=jn(V,M)||V);const F=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let X=Y===B||!s&&Y.startsWith(B)&&Y.charAt(F)==="/",W=V!=null&&(V===B||!s&&V.startsWith(B)&&V.charAt(B.length)==="/"),J={isActive:X,isPending:W,isTransitioning:N},se=X?i:void 0,de;typeof u=="function"?de=u(J):de=[u,X?"active":null,W?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let _e=typeof d=="function"?d(J):d;return _.createElement($t,{...p,"aria-current":se,className:de,ref:b,style:_e,to:m,viewTransition:x},typeof g=="function"?g(J):g)});vv.displayName="NavLink";var Sv=_.forwardRef(({discover:l="render",fetcherKey:i,navigate:o,reloadDocument:u,replace:s,state:d,method:m=fo,action:x,onSubmit:g,relative:p,preventScrollReset:b,viewTransition:E,...j},H)=>{let T=Tv(),M=zv(x,{relative:p}),N=m.toLowerCase()==="get"?"get":"post",B=typeof x=="string"&&V0.test(x),Y=V=>{if(g&&g(V),V.defaultPrevented)return;V.preventDefault();let F=V.nativeEvent.submitter,X=(F==null?void 0:F.getAttribute("formmethod"))||m;T(F||V.currentTarget,{fetcherKey:i,method:X,navigate:o,replace:s,state:d,relative:p,preventScrollReset:b,viewTransition:E})};return _.createElement("form",{ref:H,method:N,action:M,onSubmit:u?g:Y,...j,"data-discover":!B&&l==="render"?"true":void 0})});Sv.displayName="Form";function wv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(l){let i=_.useContext(Sl);return Be(i,wv(l)),i}function Ev(l,{target:i,replace:o,state:u,preventScrollReset:s,relative:d,viewTransition:m}={}){let x=Js(),g=Pn(),p=Bi(l,{relative:d});return _.useCallback(b=>{if(ev(b,i)){b.preventDefault();let E=o!==void 0?o:Di(g)===Di(p);x(l,{replace:E,state:u,preventScrollReset:s,relative:d,viewTransition:m})}},[g,x,p,o,u,i,l,s,d,m])}var jv=0,Av=()=>`__${String(++jv)}__`;function Tv(){let{router:l}=X0("useSubmit"),{basename:i}=_.useContext(ln),o=Vb();return _.useCallback(async(u,s={})=>{let{action:d,method:m,encType:x,formData:g,body:p}=av(u,i);if(s.navigate===!1){let b=s.fetcherKey||Av();await l.fetch(b,o,s.action||d,{preventScrollReset:s.preventScrollReset,formData:g,body:p,formMethod:s.method||m,formEncType:s.encType||x,flushSync:s.flushSync})}else await l.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:g,body:p,formMethod:s.method||m,formEncType:s.encType||x,replace:s.replace,state:s.state,fromRouteId:o,flushSync:s.flushSync,viewTransition:s.viewTransition})},[l,i,o])}function zv(l,{relative:i}={}){let{basename:o}=_.useContext(ln),u=_.useContext(An);Be(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),d={...Bi(l||".",{relative:i})},m=Pn();if(l==null){d.search=m.search;let x=new URLSearchParams(d.search),g=x.getAll("index");if(g.some(b=>b==="")){x.delete("index"),g.filter(E=>E).forEach(E=>x.append("index",E));let b=x.toString();d.search=b?`?${b}`:""}}return(!l||l===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:En([o,d.pathname])),Di(d)}function Rv(l,i={}){let o=_.useContext(B0);Be(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=X0("useViewTransitionState"),s=Bi(l,{relative:i.relative});if(!o.isTransitioning)return!1;let d=jn(o.currentLocation.pathname,u)||o.currentLocation.pathname,m=jn(o.nextLocation.pathname,u)||o.nextLocation.pathname;return vo(s.pathname,m)!=null||vo(s.pathname,d)!=null}[...fv];function Z0(l,i){return function(){return l.apply(i,arguments)}}const{toString:Ov}=Object.prototype,{getPrototypeOf:ef}=Object,{iterator:Bo,toStringTag:K0}=Symbol,Ho=(l=>i=>{const o=Ov.call(i);return l[o]||(l[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=l=>(l=l.toLowerCase(),i=>Ho(i)===l),ko=l=>i=>typeof i===l,{isArray:wl}=Array,_i=ko("undefined");function Cv(l){return l!==null&&!_i(l)&&l.constructor!==null&&!_i(l.constructor)&&yt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const $0=Jt("ArrayBuffer");function Dv(l){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(l):i=l&&l.buffer&&$0(l.buffer),i}const _v=ko("string"),yt=ko("function"),J0=ko("number"),Lo=l=>l!==null&&typeof l=="object",Mv=l=>l===!0||l===!1,mo=l=>{if(Ho(l)!=="object")return!1;const i=ef(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(K0 in l)&&!(Bo in l)},Nv=Jt("Date"),Uv=Jt("File"),Bv=Jt("Blob"),Hv=Jt("FileList"),kv=l=>Lo(l)&&yt(l.pipe),Lv=l=>{let i;return l&&(typeof FormData=="function"&&l instanceof FormData||yt(l.append)&&((i=Ho(l))==="formdata"||i==="object"&&yt(l.toString)&&l.toString()==="[object FormData]"))},qv=Jt("URLSearchParams"),[Yv,Gv,Qv,Vv]=["ReadableStream","Request","Response","Headers"].map(Jt),Xv=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(l,i,{allOwnKeys:o=!1}={}){if(l===null||typeof l>"u")return;let u,s;if(typeof l!="object"&&(l=[l]),wl(l))for(u=0,s=l.length;u<s;u++)i.call(null,l[u],u,l);else{const d=o?Object.getOwnPropertyNames(l):Object.keys(l),m=d.length;let x;for(u=0;u<m;u++)x=d[u],i.call(null,l[x],x,l)}}function F0(l,i){i=i.toLowerCase();const o=Object.keys(l);let u=o.length,s;for(;u-- >0;)if(s=o[u],i===s.toLowerCase())return s;return null}const xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,P0=l=>!_i(l)&&l!==xa;function Hs(){const{caseless:l}=P0(this)&&this||{},i={},o=(u,s)=>{const d=l&&F0(i,s)||s;mo(i[d])&&mo(u)?i[d]=Hs(i[d],u):mo(u)?i[d]=Hs({},u):wl(u)?i[d]=u.slice():i[d]=u};for(let u=0,s=arguments.length;u<s;u++)arguments[u]&&Hi(arguments[u],o);return i}const Zv=(l,i,o,{allOwnKeys:u}={})=>(Hi(i,(s,d)=>{o&&yt(s)?l[d]=Z0(s,o):l[d]=s},{allOwnKeys:u}),l),Kv=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),$v=(l,i,o,u)=>{l.prototype=Object.create(i.prototype,u),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:i.prototype}),o&&Object.assign(l.prototype,o)},Jv=(l,i,o,u)=>{let s,d,m;const x={};if(i=i||{},l==null)return i;do{for(s=Object.getOwnPropertyNames(l),d=s.length;d-- >0;)m=s[d],(!u||u(m,l,i))&&!x[m]&&(i[m]=l[m],x[m]=!0);l=o!==!1&&ef(l)}while(l&&(!o||o(l,i))&&l!==Object.prototype);return i},Fv=(l,i,o)=>{l=String(l),(o===void 0||o>l.length)&&(o=l.length),o-=i.length;const u=l.indexOf(i,o);return u!==-1&&u===o},Pv=l=>{if(!l)return null;if(wl(l))return l;let i=l.length;if(!J0(i))return null;const o=new Array(i);for(;i-- >0;)o[i]=l[i];return o},Wv=(l=>i=>l&&i instanceof l)(typeof Uint8Array<"u"&&ef(Uint8Array)),Iv=(l,i)=>{const u=(l&&l[Bo]).call(l);let s;for(;(s=u.next())&&!s.done;){const d=s.value;i.call(l,d[0],d[1])}},e2=(l,i)=>{let o;const u=[];for(;(o=l.exec(i))!==null;)u.push(o);return u},t2=Jt("HTMLFormElement"),n2=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,s){return u.toUpperCase()+s}),Cp=(({hasOwnProperty:l})=>(i,o)=>l.call(i,o))(Object.prototype),a2=Jt("RegExp"),W0=(l,i)=>{const o=Object.getOwnPropertyDescriptors(l),u={};Hi(o,(s,d)=>{let m;(m=i(s,d,l))!==!1&&(u[d]=m||s)}),Object.defineProperties(l,u)},l2=l=>{W0(l,(i,o)=>{if(yt(l)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=l[o];if(yt(u)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},i2=(l,i)=>{const o={},u=s=>{s.forEach(d=>{o[d]=!0})};return wl(l)?u(l):u(String(l).split(i)),o},r2=()=>{},o2=(l,i)=>l!=null&&Number.isFinite(l=+l)?l:i;function u2(l){return!!(l&&yt(l.append)&&l[K0]==="FormData"&&l[Bo])}const c2=l=>{const i=new Array(10),o=(u,s)=>{if(Lo(u)){if(i.indexOf(u)>=0)return;if(!("toJSON"in u)){i[s]=u;const d=wl(u)?[]:{};return Hi(u,(m,x)=>{const g=o(m,s+1);!_i(g)&&(d[x]=g)}),i[s]=void 0,d}}return u};return o(l,0)},s2=Jt("AsyncFunction"),f2=l=>l&&(Lo(l)||yt(l))&&yt(l.then)&&yt(l.catch),I0=((l,i)=>l?setImmediate:i?((o,u)=>(xa.addEventListener("message",({source:s,data:d})=>{s===xa&&d===o&&u.length&&u.shift()()},!1),s=>{u.push(s),xa.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",yt(xa.postMessage)),d2=typeof queueMicrotask<"u"?queueMicrotask.bind(xa):typeof process<"u"&&process.nextTick||I0,h2=l=>l!=null&&yt(l[Bo]),U={isArray:wl,isArrayBuffer:$0,isBuffer:Cv,isFormData:Lv,isArrayBufferView:Dv,isString:_v,isNumber:J0,isBoolean:Mv,isObject:Lo,isPlainObject:mo,isReadableStream:Yv,isRequest:Gv,isResponse:Qv,isHeaders:Vv,isUndefined:_i,isDate:Nv,isFile:Uv,isBlob:Bv,isRegExp:a2,isFunction:yt,isStream:kv,isURLSearchParams:qv,isTypedArray:Wv,isFileList:Hv,forEach:Hi,merge:Hs,extend:Zv,trim:Xv,stripBOM:Kv,inherits:$v,toFlatObject:Jv,kindOf:Ho,kindOfTest:Jt,endsWith:Fv,toArray:Pv,forEachEntry:Iv,matchAll:e2,isHTMLForm:t2,hasOwnProperty:Cp,hasOwnProp:Cp,reduceDescriptors:W0,freezeMethods:l2,toObjectSet:i2,toCamelCase:n2,noop:r2,toFiniteNumber:o2,findKey:F0,global:xa,isContextDefined:P0,isSpecCompliantForm:u2,toJSONObject:c2,isAsyncFn:s2,isThenable:f2,setImmediate:I0,asap:d2,isIterable:h2};function oe(l,i,o,u,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",i&&(this.code=i),o&&(this.config=o),u&&(this.request=u),s&&(this.response=s,this.status=s.status?s.status:null)}U.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const eg=oe.prototype,tg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{tg[l]={value:l}});Object.defineProperties(oe,tg);Object.defineProperty(eg,"isAxiosError",{value:!0});oe.from=(l,i,o,u,s,d)=>{const m=Object.create(eg);return U.toFlatObject(l,m,function(g){return g!==Error.prototype},x=>x!=="isAxiosError"),oe.call(m,l.message,i,o,u,s),m.cause=l,m.name=l.name,d&&Object.assign(m,d),m};const m2=null;function ks(l){return U.isPlainObject(l)||U.isArray(l)}function ng(l){return U.endsWith(l,"[]")?l.slice(0,-2):l}function Dp(l,i,o){return l?l.concat(i).map(function(s,d){return s=ng(s),!o&&d?"["+s+"]":s}).join(o?".":""):i}function p2(l){return U.isArray(l)&&!l.some(ks)}const g2=U.toFlatObject(U,{},null,function(i){return/^is[A-Z]/.test(i)});function qo(l,i,o){if(!U.isObject(l))throw new TypeError("target must be an object");i=i||new FormData,o=U.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,N){return!U.isUndefined(N[M])});const u=o.metaTokens,s=o.visitor||b,d=o.dots,m=o.indexes,g=(o.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(i);if(!U.isFunction(s))throw new TypeError("visitor must be a function");function p(T){if(T===null)return"";if(U.isDate(T))return T.toISOString();if(!g&&U.isBlob(T))throw new oe("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(T)||U.isTypedArray(T)?g&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function b(T,M,N){let B=T;if(T&&!N&&typeof T=="object"){if(U.endsWith(M,"{}"))M=u?M:M.slice(0,-2),T=JSON.stringify(T);else if(U.isArray(T)&&p2(T)||(U.isFileList(T)||U.endsWith(M,"[]"))&&(B=U.toArray(T)))return M=ng(M),B.forEach(function(V,F){!(U.isUndefined(V)||V===null)&&i.append(m===!0?Dp([M],F,d):m===null?M:M+"[]",p(V))}),!1}return ks(T)?!0:(i.append(Dp(N,M,d),p(T)),!1)}const E=[],j=Object.assign(g2,{defaultVisitor:b,convertValue:p,isVisitable:ks});function H(T,M){if(!U.isUndefined(T)){if(E.indexOf(T)!==-1)throw Error("Circular reference detected in "+M.join("."));E.push(T),U.forEach(T,function(B,Y){(!(U.isUndefined(B)||B===null)&&s.call(i,B,U.isString(Y)?Y.trim():Y,M,j))===!0&&H(B,M?M.concat(Y):[Y])}),E.pop()}}if(!U.isObject(l))throw new TypeError("data must be an object");return H(l),i}function _p(l){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(u){return i[u]})}function tf(l,i){this._pairs=[],l&&qo(l,this,i)}const ag=tf.prototype;ag.append=function(i,o){this._pairs.push([i,o])};ag.toString=function(i){const o=i?function(u){return i.call(this,u,_p)}:_p;return this._pairs.map(function(s){return o(s[0])+"="+o(s[1])},"").join("&")};function y2(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lg(l,i,o){if(!i)return l;const u=o&&o.encode||y2;U.isFunction(o)&&(o={serialize:o});const s=o&&o.serialize;let d;if(s?d=s(i,o):d=U.isURLSearchParams(i)?i.toString():new tf(i,o).toString(u),d){const m=l.indexOf("#");m!==-1&&(l=l.slice(0,m)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class Mp{constructor(){this.handlers=[]}use(i,o,u){return this.handlers.push({fulfilled:i,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){U.forEach(this.handlers,function(u){u!==null&&i(u)})}}const ig={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x2=typeof URLSearchParams<"u"?URLSearchParams:tf,b2=typeof FormData<"u"?FormData:null,v2=typeof Blob<"u"?Blob:null,S2={isBrowser:!0,classes:{URLSearchParams:x2,FormData:b2,Blob:v2},protocols:["http","https","file","blob","url","data"]},nf=typeof window<"u"&&typeof document<"u",Ls=typeof navigator=="object"&&navigator||void 0,w2=nf&&(!Ls||["ReactNative","NativeScript","NS"].indexOf(Ls.product)<0),E2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",j2=nf&&window.location.href||"http://localhost",A2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nf,hasStandardBrowserEnv:w2,hasStandardBrowserWebWorkerEnv:E2,navigator:Ls,origin:j2},Symbol.toStringTag,{value:"Module"})),ut={...A2,...S2};function T2(l,i){return qo(l,new ut.classes.URLSearchParams,Object.assign({visitor:function(o,u,s,d){return ut.isNode&&U.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},i))}function z2(l){return U.matchAll(/\w+|\[(\w*)]/g,l).map(i=>i[0]==="[]"?"":i[1]||i[0])}function R2(l){const i={},o=Object.keys(l);let u;const s=o.length;let d;for(u=0;u<s;u++)d=o[u],i[d]=l[d];return i}function rg(l){function i(o,u,s,d){let m=o[d++];if(m==="__proto__")return!0;const x=Number.isFinite(+m),g=d>=o.length;return m=!m&&U.isArray(s)?s.length:m,g?(U.hasOwnProp(s,m)?s[m]=[s[m],u]:s[m]=u,!x):((!s[m]||!U.isObject(s[m]))&&(s[m]=[]),i(o,u,s[m],d)&&U.isArray(s[m])&&(s[m]=R2(s[m])),!x)}if(U.isFormData(l)&&U.isFunction(l.entries)){const o={};return U.forEachEntry(l,(u,s)=>{i(z2(u),s,o,0)}),o}return null}function O2(l,i,o){if(U.isString(l))try{return(i||JSON.parse)(l),U.trim(l)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(l)}const ki={transitional:ig,adapter:["xhr","http","fetch"],transformRequest:[function(i,o){const u=o.getContentType()||"",s=u.indexOf("application/json")>-1,d=U.isObject(i);if(d&&U.isHTMLForm(i)&&(i=new FormData(i)),U.isFormData(i))return s?JSON.stringify(rg(i)):i;if(U.isArrayBuffer(i)||U.isBuffer(i)||U.isStream(i)||U.isFile(i)||U.isBlob(i)||U.isReadableStream(i))return i;if(U.isArrayBufferView(i))return i.buffer;if(U.isURLSearchParams(i))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let x;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return T2(i,this.formSerializer).toString();if((x=U.isFileList(i))||u.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return qo(x?{"files[]":i}:i,g&&new g,this.formSerializer)}}return d||s?(o.setContentType("application/json",!1),O2(i)):i}],transformResponse:[function(i){const o=this.transitional||ki.transitional,u=o&&o.forcedJSONParsing,s=this.responseType==="json";if(U.isResponse(i)||U.isReadableStream(i))return i;if(i&&U.isString(i)&&(u&&!this.responseType||s)){const m=!(o&&o.silentJSONParsing)&&s;try{return JSON.parse(i)}catch(x){if(m)throw x.name==="SyntaxError"?oe.from(x,oe.ERR_BAD_RESPONSE,this,null,this.response):x}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],l=>{ki.headers[l]={}});const C2=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),D2=l=>{const i={};let o,u,s;return l&&l.split(`
`).forEach(function(m){s=m.indexOf(":"),o=m.substring(0,s).trim().toLowerCase(),u=m.substring(s+1).trim(),!(!o||i[o]&&C2[o])&&(o==="set-cookie"?i[o]?i[o].push(u):i[o]=[u]:i[o]=i[o]?i[o]+", "+u:u)}),i},Np=Symbol("internals");function Ai(l){return l&&String(l).trim().toLowerCase()}function po(l){return l===!1||l==null?l:U.isArray(l)?l.map(po):String(l)}function _2(l){const i=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(l);)i[u[1]]=u[2];return i}const M2=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function ps(l,i,o,u,s){if(U.isFunction(u))return u.call(this,i,o);if(s&&(i=o),!!U.isString(i)){if(U.isString(u))return i.indexOf(u)!==-1;if(U.isRegExp(u))return u.test(i)}}function N2(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,o,u)=>o.toUpperCase()+u)}function U2(l,i){const o=U.toCamelCase(" "+i);["get","set","has"].forEach(u=>{Object.defineProperty(l,u+o,{value:function(s,d,m){return this[u].call(this,i,s,d,m)},configurable:!0})})}let xt=class{constructor(i){i&&this.set(i)}set(i,o,u){const s=this;function d(x,g,p){const b=Ai(g);if(!b)throw new Error("header name must be a non-empty string");const E=U.findKey(s,b);(!E||s[E]===void 0||p===!0||p===void 0&&s[E]!==!1)&&(s[E||g]=po(x))}const m=(x,g)=>U.forEach(x,(p,b)=>d(p,b,g));if(U.isPlainObject(i)||i instanceof this.constructor)m(i,o);else if(U.isString(i)&&(i=i.trim())&&!M2(i))m(D2(i),o);else if(U.isObject(i)&&U.isIterable(i)){let x={},g,p;for(const b of i){if(!U.isArray(b))throw TypeError("Object iterator must return a key-value pair");x[p=b[0]]=(g=x[p])?U.isArray(g)?[...g,b[1]]:[g,b[1]]:b[1]}m(x,o)}else i!=null&&d(o,i,u);return this}get(i,o){if(i=Ai(i),i){const u=U.findKey(this,i);if(u){const s=this[u];if(!o)return s;if(o===!0)return _2(s);if(U.isFunction(o))return o.call(this,s,u);if(U.isRegExp(o))return o.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,o){if(i=Ai(i),i){const u=U.findKey(this,i);return!!(u&&this[u]!==void 0&&(!o||ps(this,this[u],u,o)))}return!1}delete(i,o){const u=this;let s=!1;function d(m){if(m=Ai(m),m){const x=U.findKey(u,m);x&&(!o||ps(u,u[x],x,o))&&(delete u[x],s=!0)}}return U.isArray(i)?i.forEach(d):d(i),s}clear(i){const o=Object.keys(this);let u=o.length,s=!1;for(;u--;){const d=o[u];(!i||ps(this,this[d],d,i,!0))&&(delete this[d],s=!0)}return s}normalize(i){const o=this,u={};return U.forEach(this,(s,d)=>{const m=U.findKey(u,d);if(m){o[m]=po(s),delete o[d];return}const x=i?N2(d):String(d).trim();x!==d&&delete o[d],o[x]=po(s),u[x]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const o=Object.create(null);return U.forEach(this,(u,s)=>{u!=null&&u!==!1&&(o[s]=i&&U.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,o])=>i+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...o){const u=new this(i);return o.forEach(s=>u.set(s)),u}static accessor(i){const u=(this[Np]=this[Np]={accessors:{}}).accessors,s=this.prototype;function d(m){const x=Ai(m);u[x]||(U2(s,m),u[x]=!0)}return U.isArray(i)?i.forEach(d):d(i),this}};xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(xt.prototype,({value:l},i)=>{let o=i[0].toUpperCase()+i.slice(1);return{get:()=>l,set(u){this[o]=u}}});U.freezeMethods(xt);function gs(l,i){const o=this||ki,u=i||o,s=xt.from(u.headers);let d=u.data;return U.forEach(l,function(x){d=x.call(o,d,s.normalize(),i?i.status:void 0)}),s.normalize(),d}function og(l){return!!(l&&l.__CANCEL__)}function El(l,i,o){oe.call(this,l??"canceled",oe.ERR_CANCELED,i,o),this.name="CanceledError"}U.inherits(El,oe,{__CANCEL__:!0});function ug(l,i,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?l(o):i(new oe("Request failed with status code "+o.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function B2(l){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return i&&i[1]||""}function H2(l,i){l=l||10;const o=new Array(l),u=new Array(l);let s=0,d=0,m;return i=i!==void 0?i:1e3,function(g){const p=Date.now(),b=u[d];m||(m=p),o[s]=g,u[s]=p;let E=d,j=0;for(;E!==s;)j+=o[E++],E=E%l;if(s=(s+1)%l,s===d&&(d=(d+1)%l),p-m<i)return;const H=b&&p-b;return H?Math.round(j*1e3/H):void 0}}function k2(l,i){let o=0,u=1e3/i,s,d;const m=(p,b=Date.now())=>{o=b,s=null,d&&(clearTimeout(d),d=null),l.apply(null,p)};return[(...p)=>{const b=Date.now(),E=b-o;E>=u?m(p,b):(s=p,d||(d=setTimeout(()=>{d=null,m(s)},u-E)))},()=>s&&m(s)]}const So=(l,i,o=3)=>{let u=0;const s=H2(50,250);return k2(d=>{const m=d.loaded,x=d.lengthComputable?d.total:void 0,g=m-u,p=s(g),b=m<=x;u=m;const E={loaded:m,total:x,progress:x?m/x:void 0,bytes:g,rate:p||void 0,estimated:p&&x&&b?(x-m)/p:void 0,event:d,lengthComputable:x!=null,[i?"download":"upload"]:!0};l(E)},o)},Up=(l,i)=>{const o=l!=null;return[u=>i[0]({lengthComputable:o,total:l,loaded:u}),i[1]]},Bp=l=>(...i)=>U.asap(()=>l(...i)),L2=ut.hasStandardBrowserEnv?((l,i)=>o=>(o=new URL(o,ut.origin),l.protocol===o.protocol&&l.host===o.host&&(i||l.port===o.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,q2=ut.hasStandardBrowserEnv?{write(l,i,o,u,s,d){const m=[l+"="+encodeURIComponent(i)];U.isNumber(o)&&m.push("expires="+new Date(o).toGMTString()),U.isString(u)&&m.push("path="+u),U.isString(s)&&m.push("domain="+s),d===!0&&m.push("secure"),document.cookie=m.join("; ")},read(l){const i=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(l){this.write(l,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Y2(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function G2(l,i){return i?l.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):l}function cg(l,i,o){let u=!Y2(i);return l&&(u||o==!1)?G2(l,i):i}const Hp=l=>l instanceof xt?{...l}:l;function wa(l,i){i=i||{};const o={};function u(p,b,E,j){return U.isPlainObject(p)&&U.isPlainObject(b)?U.merge.call({caseless:j},p,b):U.isPlainObject(b)?U.merge({},b):U.isArray(b)?b.slice():b}function s(p,b,E,j){if(U.isUndefined(b)){if(!U.isUndefined(p))return u(void 0,p,E,j)}else return u(p,b,E,j)}function d(p,b){if(!U.isUndefined(b))return u(void 0,b)}function m(p,b){if(U.isUndefined(b)){if(!U.isUndefined(p))return u(void 0,p)}else return u(void 0,b)}function x(p,b,E){if(E in i)return u(p,b);if(E in l)return u(void 0,p)}const g={url:d,method:d,data:d,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:x,headers:(p,b,E)=>s(Hp(p),Hp(b),E,!0)};return U.forEach(Object.keys(Object.assign({},l,i)),function(b){const E=g[b]||s,j=E(l[b],i[b],b);U.isUndefined(j)&&E!==x||(o[b]=j)}),o}const sg=l=>{const i=wa({},l);let{data:o,withXSRFToken:u,xsrfHeaderName:s,xsrfCookieName:d,headers:m,auth:x}=i;i.headers=m=xt.from(m),i.url=lg(cg(i.baseURL,i.url,i.allowAbsoluteUrls),l.params,l.paramsSerializer),x&&m.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):"")));let g;if(U.isFormData(o)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((g=m.getContentType())!==!1){const[p,...b]=g?g.split(";").map(E=>E.trim()).filter(Boolean):[];m.setContentType([p||"multipart/form-data",...b].join("; "))}}if(ut.hasStandardBrowserEnv&&(u&&U.isFunction(u)&&(u=u(i)),u||u!==!1&&L2(i.url))){const p=s&&d&&q2.read(d);p&&m.set(s,p)}return i},Q2=typeof XMLHttpRequest<"u",V2=Q2&&function(l){return new Promise(function(o,u){const s=sg(l);let d=s.data;const m=xt.from(s.headers).normalize();let{responseType:x,onUploadProgress:g,onDownloadProgress:p}=s,b,E,j,H,T;function M(){H&&H(),T&&T(),s.cancelToken&&s.cancelToken.unsubscribe(b),s.signal&&s.signal.removeEventListener("abort",b)}let N=new XMLHttpRequest;N.open(s.method.toUpperCase(),s.url,!0),N.timeout=s.timeout;function B(){if(!N)return;const V=xt.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),X={data:!x||x==="text"||x==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:V,config:l,request:N};ug(function(J){o(J),M()},function(J){u(J),M()},X),N=null}"onloadend"in N?N.onloadend=B:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(B)},N.onabort=function(){N&&(u(new oe("Request aborted",oe.ECONNABORTED,l,N)),N=null)},N.onerror=function(){u(new oe("Network Error",oe.ERR_NETWORK,l,N)),N=null},N.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const X=s.transitional||ig;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),u(new oe(F,X.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,l,N)),N=null},d===void 0&&m.setContentType(null),"setRequestHeader"in N&&U.forEach(m.toJSON(),function(F,X){N.setRequestHeader(X,F)}),U.isUndefined(s.withCredentials)||(N.withCredentials=!!s.withCredentials),x&&x!=="json"&&(N.responseType=s.responseType),p&&([j,T]=So(p,!0),N.addEventListener("progress",j)),g&&N.upload&&([E,H]=So(g),N.upload.addEventListener("progress",E),N.upload.addEventListener("loadend",H)),(s.cancelToken||s.signal)&&(b=V=>{N&&(u(!V||V.type?new El(null,l,N):V),N.abort(),N=null)},s.cancelToken&&s.cancelToken.subscribe(b),s.signal&&(s.signal.aborted?b():s.signal.addEventListener("abort",b)));const Y=B2(s.url);if(Y&&ut.protocols.indexOf(Y)===-1){u(new oe("Unsupported protocol "+Y+":",oe.ERR_BAD_REQUEST,l));return}N.send(d||null)})},X2=(l,i)=>{const{length:o}=l=l?l.filter(Boolean):[];if(i||o){let u=new AbortController,s;const d=function(p){if(!s){s=!0,x();const b=p instanceof Error?p:this.reason;u.abort(b instanceof oe?b:new El(b instanceof Error?b.message:b))}};let m=i&&setTimeout(()=>{m=null,d(new oe(`timeout ${i} of ms exceeded`,oe.ETIMEDOUT))},i);const x=()=>{l&&(m&&clearTimeout(m),m=null,l.forEach(p=>{p.unsubscribe?p.unsubscribe(d):p.removeEventListener("abort",d)}),l=null)};l.forEach(p=>p.addEventListener("abort",d));const{signal:g}=u;return g.unsubscribe=()=>U.asap(x),g}},Z2=function*(l,i){let o=l.byteLength;if(o<i){yield l;return}let u=0,s;for(;u<o;)s=u+i,yield l.slice(u,s),u=s},K2=async function*(l,i){for await(const o of $2(l))yield*Z2(o,i)},$2=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const i=l.getReader();try{for(;;){const{done:o,value:u}=await i.read();if(o)break;yield u}}finally{await i.cancel()}},kp=(l,i,o,u)=>{const s=K2(l,i);let d=0,m,x=g=>{m||(m=!0,u&&u(g))};return new ReadableStream({async pull(g){try{const{done:p,value:b}=await s.next();if(p){x(),g.close();return}let E=b.byteLength;if(o){let j=d+=E;o(j)}g.enqueue(new Uint8Array(b))}catch(p){throw x(p),p}},cancel(g){return x(g),s.return()}},{highWaterMark:2})},Yo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",fg=Yo&&typeof ReadableStream=="function",J2=Yo&&(typeof TextEncoder=="function"?(l=>i=>l.encode(i))(new TextEncoder):async l=>new Uint8Array(await new Response(l).arrayBuffer())),dg=(l,...i)=>{try{return!!l(...i)}catch{return!1}},F2=fg&&dg(()=>{let l=!1;const i=new Request(ut.origin,{body:new ReadableStream,method:"POST",get duplex(){return l=!0,"half"}}).headers.has("Content-Type");return l&&!i}),Lp=64*1024,qs=fg&&dg(()=>U.isReadableStream(new Response("").body)),wo={stream:qs&&(l=>l.body)};Yo&&(l=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!wo[i]&&(wo[i]=U.isFunction(l[i])?o=>o[i]():(o,u)=>{throw new oe(`Response type '${i}' is not supported`,oe.ERR_NOT_SUPPORT,u)})})})(new Response);const P2=async l=>{if(l==null)return 0;if(U.isBlob(l))return l.size;if(U.isSpecCompliantForm(l))return(await new Request(ut.origin,{method:"POST",body:l}).arrayBuffer()).byteLength;if(U.isArrayBufferView(l)||U.isArrayBuffer(l))return l.byteLength;if(U.isURLSearchParams(l)&&(l=l+""),U.isString(l))return(await J2(l)).byteLength},W2=async(l,i)=>{const o=U.toFiniteNumber(l.getContentLength());return o??P2(i)},I2=Yo&&(async l=>{let{url:i,method:o,data:u,signal:s,cancelToken:d,timeout:m,onDownloadProgress:x,onUploadProgress:g,responseType:p,headers:b,withCredentials:E="same-origin",fetchOptions:j}=sg(l);p=p?(p+"").toLowerCase():"text";let H=X2([s,d&&d.toAbortSignal()],m),T;const M=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let N;try{if(g&&F2&&o!=="get"&&o!=="head"&&(N=await W2(b,u))!==0){let X=new Request(i,{method:"POST",body:u,duplex:"half"}),W;if(U.isFormData(u)&&(W=X.headers.get("content-type"))&&b.setContentType(W),X.body){const[J,se]=Up(N,So(Bp(g)));u=kp(X.body,Lp,J,se)}}U.isString(E)||(E=E?"include":"omit");const B="credentials"in Request.prototype;T=new Request(i,{...j,signal:H,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:u,duplex:"half",credentials:B?E:void 0});let Y=await fetch(T);const V=qs&&(p==="stream"||p==="response");if(qs&&(x||V&&M)){const X={};["status","statusText","headers"].forEach(de=>{X[de]=Y[de]});const W=U.toFiniteNumber(Y.headers.get("content-length")),[J,se]=x&&Up(W,So(Bp(x),!0))||[];Y=new Response(kp(Y.body,Lp,J,()=>{se&&se(),M&&M()}),X)}p=p||"text";let F=await wo[U.findKey(wo,p)||"text"](Y,l);return!V&&M&&M(),await new Promise((X,W)=>{ug(X,W,{data:F,headers:xt.from(Y.headers),status:Y.status,statusText:Y.statusText,config:l,request:T})})}catch(B){throw M&&M(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,l,T),{cause:B.cause||B}):oe.from(B,B&&B.code,l,T)}}),Ys={http:m2,xhr:V2,fetch:I2};U.forEach(Ys,(l,i)=>{if(l){try{Object.defineProperty(l,"name",{value:i})}catch{}Object.defineProperty(l,"adapterName",{value:i})}});const qp=l=>`- ${l}`,e4=l=>U.isFunction(l)||l===null||l===!1,hg={getAdapter:l=>{l=U.isArray(l)?l:[l];const{length:i}=l;let o,u;const s={};for(let d=0;d<i;d++){o=l[d];let m;if(u=o,!e4(o)&&(u=Ys[(m=String(o)).toLowerCase()],u===void 0))throw new oe(`Unknown adapter '${m}'`);if(u)break;s[m||"#"+d]=u}if(!u){const d=Object.entries(s).map(([x,g])=>`adapter ${x} `+(g===!1?"is not supported by the environment":"is not available in the build"));let m=i?d.length>1?`since :
`+d.map(qp).join(`
`):" "+qp(d[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return u},adapters:Ys};function ys(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new El(null,l)}function Yp(l){return ys(l),l.headers=xt.from(l.headers),l.data=gs.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),hg.getAdapter(l.adapter||ki.adapter)(l).then(function(u){return ys(l),u.data=gs.call(l,l.transformResponse,u),u.headers=xt.from(u.headers),u},function(u){return og(u)||(ys(l),u&&u.response&&(u.response.data=gs.call(l,l.transformResponse,u.response),u.response.headers=xt.from(u.response.headers))),Promise.reject(u)})}const mg="1.9.0",Go={};["object","boolean","number","function","string","symbol"].forEach((l,i)=>{Go[l]=function(u){return typeof u===l||"a"+(i<1?"n ":" ")+l}});const Gp={};Go.transitional=function(i,o,u){function s(d,m){return"[Axios v"+mg+"] Transitional option '"+d+"'"+m+(u?". "+u:"")}return(d,m,x)=>{if(i===!1)throw new oe(s(m," has been removed"+(o?" in "+o:"")),oe.ERR_DEPRECATED);return o&&!Gp[m]&&(Gp[m]=!0,console.warn(s(m," has been deprecated since v"+o+" and will be removed in the near future"))),i?i(d,m,x):!0}};Go.spelling=function(i){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${i}`),!0)};function t4(l,i,o){if(typeof l!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const u=Object.keys(l);let s=u.length;for(;s-- >0;){const d=u[s],m=i[d];if(m){const x=l[d],g=x===void 0||m(x,d,l);if(g!==!0)throw new oe("option "+d+" must be "+g,oe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new oe("Unknown option "+d,oe.ERR_BAD_OPTION)}}const go={assertOptions:t4,validators:Go},nn=go.validators;let Sa=class{constructor(i){this.defaults=i||{},this.interceptors={request:new Mp,response:new Mp}}async request(i,o){try{return await this._request(i,o)}catch(u){if(u instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const d=s.stack?s.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(i,o){typeof i=="string"?(o=o||{},o.url=i):o=i||{},o=wa(this.defaults,o);const{transitional:u,paramsSerializer:s,headers:d}=o;u!==void 0&&go.assertOptions(u,{silentJSONParsing:nn.transitional(nn.boolean),forcedJSONParsing:nn.transitional(nn.boolean),clarifyTimeoutError:nn.transitional(nn.boolean)},!1),s!=null&&(U.isFunction(s)?o.paramsSerializer={serialize:s}:go.assertOptions(s,{encode:nn.function,serialize:nn.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),go.assertOptions(o,{baseUrl:nn.spelling("baseURL"),withXsrfToken:nn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let m=d&&U.merge(d.common,d[o.method]);d&&U.forEach(["delete","get","head","post","put","patch","common"],T=>{delete d[T]}),o.headers=xt.concat(m,d);const x=[];let g=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(o)===!1||(g=g&&M.synchronous,x.unshift(M.fulfilled,M.rejected))});const p=[];this.interceptors.response.forEach(function(M){p.push(M.fulfilled,M.rejected)});let b,E=0,j;if(!g){const T=[Yp.bind(this),void 0];for(T.unshift.apply(T,x),T.push.apply(T,p),j=T.length,b=Promise.resolve(o);E<j;)b=b.then(T[E++],T[E++]);return b}j=x.length;let H=o;for(E=0;E<j;){const T=x[E++],M=x[E++];try{H=T(H)}catch(N){M.call(this,N);break}}try{b=Yp.call(this,H)}catch(T){return Promise.reject(T)}for(E=0,j=p.length;E<j;)b=b.then(p[E++],p[E++]);return b}getUri(i){i=wa(this.defaults,i);const o=cg(i.baseURL,i.url,i.allowAbsoluteUrls);return lg(o,i.params,i.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(i){Sa.prototype[i]=function(o,u){return this.request(wa(u||{},{method:i,url:o,data:(u||{}).data}))}});U.forEach(["post","put","patch"],function(i){function o(u){return function(d,m,x){return this.request(wa(x||{},{method:i,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:m}))}}Sa.prototype[i]=o(),Sa.prototype[i+"Form"]=o(!0)});let n4=class pg{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(s=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](s);u._listeners=null}),this.promise.then=s=>{let d;const m=new Promise(x=>{u.subscribe(x),d=x}).then(s);return m.cancel=function(){u.unsubscribe(d)},m},i(function(d,m,x){u.reason||(u.reason=new El(d,m,x),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const o=this._listeners.indexOf(i);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const i=new AbortController,o=u=>{i.abort(u)};return this.subscribe(o),i.signal.unsubscribe=()=>this.unsubscribe(o),i.signal}static source(){let i;return{token:new pg(function(s){i=s}),cancel:i}}};function a4(l){return function(o){return l.apply(null,o)}}function l4(l){return U.isObject(l)&&l.isAxiosError===!0}const Gs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gs).forEach(([l,i])=>{Gs[i]=l});function gg(l){const i=new Sa(l),o=Z0(Sa.prototype.request,i);return U.extend(o,Sa.prototype,i,{allOwnKeys:!0}),U.extend(o,i,null,{allOwnKeys:!0}),o.create=function(s){return gg(wa(l,s))},o}const Ne=gg(ki);Ne.Axios=Sa;Ne.CanceledError=El;Ne.CancelToken=n4;Ne.isCancel=og;Ne.VERSION=mg;Ne.toFormData=qo;Ne.AxiosError=oe;Ne.Cancel=Ne.CanceledError;Ne.all=function(i){return Promise.all(i)};Ne.spread=a4;Ne.isAxiosError=l4;Ne.mergeConfig=wa;Ne.AxiosHeaders=xt;Ne.formToJSON=l=>rg(U.isHTMLForm(l)?new FormData(l):l);Ne.getAdapter=hg.getAdapter;Ne.HttpStatusCode=Gs;Ne.default=Ne;const{Axios:P5,AxiosError:W5,CanceledError:I5,isCancel:ew,CancelToken:tw,VERSION:nw,all:aw,Cancel:lw,isAxiosError:iw,spread:rw,toFormData:ow,AxiosHeaders:uw,HttpStatusCode:cw,formToJSON:sw,getAdapter:fw,mergeConfig:dw}=Ne,Qo="https://ai-smart-class-py-backend.onrender.com",i4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/exam/generate_exam`,{class_num:l,subject:i,total_questions:o})).data.exam_paper}catch(u){throw console.error("Error generating exam paper",u),u}},r4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/revision/generate`,{class_num:l,subject:i,topics:o})).data.revision_notes}catch(u){throw console.error("Error generating revision notes",u),u}},o4=async(l,i,o)=>{try{return(await Ne.post(`${Qo}/quiz/generate`,{class_num:l,subject:i,topics:o})).data.quizzes}catch(u){throw console.error("Error generating quiz",u),u}},u4=async l=>{try{return(await Ne.post(`${Qo}/chat/ask`,{question:l})).data.answer}catch(i){throw console.error("Error asking doubt solver",i),i}},c4=S.div`
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
`,s4=S.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #2e3a59;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,f4=S.textarea`
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
`,d4=S.button`
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
`,h4=S.div`
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
`,m4=()=>{const[l,i]=_.useState(""),[o,u]=_.useState(""),[s,d]=_.useState(!1),m=async()=>{if(l.trim()){d(!0),u("");try{const x=await u4(l);u(x)}catch(x){u("⚠️ Error fetching the answer. Please try again.",x)}finally{d(!1)}}};return f.jsxs(c4,{children:[f.jsx(s4,{children:"🧠 Doubt Solver Assistant"}),f.jsx(f4,{placeholder:"Type your doubt here (e.g., Why is the sky blue?)",value:l,onChange:x=>i(x.target.value)}),f.jsx(d4,{onClick:m,children:s?"Processing...":"Get Answer"}),o&&f.jsxs(h4,{children:[f.jsx("h3",{children:"Answer:"}),f.jsx("p",{children:o})]})]})},p4=S.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,g4=S.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
`,y4=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`,xs=S.input`
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
`,x4=S.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`,Qp=S.button`
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
`,b4=S.div`
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
`,v4=S.p`
  color: red;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`,S4=S.div`
  margin-top: 2rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,w4=()=>{const[l,i]=_.useState(""),[o,u]=_.useState(""),[s,d]=_.useState(10),[m,x]=_.useState([]),[g,p]=_.useState(""),b=async()=>{try{const j=await i4(l,o,s);j&&Array.isArray(j)?(x(j),p("")):(x([]),p("No exam paper generated."))}catch(j){console.error("Error:",j),x([]),p("Error generating exam paper.")}},E=()=>{const j=m.map(M=>{const N=M.questions.split(`
`).filter(B=>B.trim()!=="").map((B,Y)=>`${Y+1}. ${B.replace(/^\d+\.\s*/,"")}`).join(`
`);return`${M.difficulty} Questions:
${N}`}).join(`

`),H=new Blob([j],{type:"text/plain"}),T=document.createElement("a");T.href=window.URL.createObjectURL(H),T.download=`Class${l}_${o}_ExamPaper.txt`,T.click()};return f.jsxs(p4,{children:[f.jsx(g4,{children:"📝 Generate Exam Paper"}),f.jsxs(y4,{children:[f.jsx(xs,{type:"number",placeholder:"Class Number",value:l,onChange:j=>i(j.target.value)}),f.jsx(xs,{type:"text",placeholder:"Subject",value:o,onChange:j=>u(j.target.value)}),f.jsx(xs,{type:"number",placeholder:"Total Questions",value:s,onChange:j=>d(j.target.value)})]}),f.jsxs(x4,{children:[f.jsx(Qp,{onClick:b,children:"Generate"}),m.length>0&&f.jsx(Qp,{onClick:E,children:"Download as .txt"})]}),f.jsxs("div",{children:[g&&f.jsx(v4,{children:g}),m.length>0&&f.jsxs(S4,{children:[f.jsx("h3",{children:"Generated Exam Paper:"}),m.map((j,H)=>f.jsxs(b4,{children:[f.jsxs("h4",{children:[j.difficulty," Questions:"]}),f.jsx("ol",{children:j.questions.split(`
`).filter(T=>T.trim()!=="").map((T,M)=>f.jsx("li",{children:T.replace(/^\d+\.\s*/,"")},M))})]},H))]})]})]})},E4=S.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,j4=S.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`,A4=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`,bs=S.input`
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
`,T4=S.button`
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
`,z4=S.div`
  margin-top: 2rem;
`,R4=S.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007bff;
  display: inline-block;
`,O4=S.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
<<<<<<< HEAD
  padding: 1rem; 
=======
  padding: 1rem;
>>>>>>> 2c7af2c (Initial commit)
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
`,C4=()=>{const[l,i]=_.useState(""),[o,u]=_.useState(""),[s,d]=_.useState(""),[m,x]=_.useState([]),[g,p]=_.useState(!1),b=async()=>{p(!0);try{const E=await o4(l,o,s.split(","));x(E)}catch(E){x(["❌ Error generating quiz. Please try again."],E)}finally{p(!1)}};return f.jsxs(E4,{children:[f.jsx(j4,{children:"🎯 Smart Quiz Generator"}),f.jsxs(A4,{children:[f.jsx(bs,{type:"number",placeholder:"Class Number",value:l,onChange:E=>i(E.target.value)}),f.jsx(bs,{type:"text",placeholder:"Subject",value:o,onChange:E=>u(E.target.value)}),f.jsx(bs,{type:"text",placeholder:"Topics (comma separated)",value:s,onChange:E=>d(E.target.value)})]}),f.jsx("div",{style:{textAlign:"center",marginBottom:"2rem"},children:f.jsx(T4,{onClick:b,disabled:g,children:g?"Generating...":"Generate Quiz"})}),f.jsxs(z4,{children:[m.length>0&&f.jsx(R4,{children:"Generated Quiz:"}),m.map((E,j)=>f.jsx(O4,{children:E},j))]})]})},D4=()=>f.jsx("div",{children:"PerformanceMetrics PerformanceMetrics"}),_4=()=>f.jsx("div",{children:"GamifiedClassroom GamifiedClassroom"}),M4=()=>f.jsx("div",{children:"MentalHealthSupport"}),N4=()=>f.jsx("div",{children:"SkillProgressTracking SkillProgressTracking"}),U4=()=>f.jsx("div",{children:"AttendanceReport"}),B4=S.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,H4=S.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`,k4=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`,vs=S.input`
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
`,yg=S.button`
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
`,L4=S.div`
  margin-top: 2rem;
`,q4=S.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 1rem;
`,Y4=S.pre`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`,G4=S(yg)`
  background-color: #28a745;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`,Q4=()=>{const[l,i]=_.useState(""),[o,u]=_.useState(""),[s,d]=_.useState(""),[m,x]=_.useState([]),g=async()=>{try{const b=await r4(l,o,s.split(","));x(b)}catch(b){x(["❌ Error generating revision notes. Please try again."],b)}},p=()=>{const b=new Blob([m.join(`

`)],{type:"text/plain"}),E=document.createElement("a");E.href=window.URL.createObjectURL(b),E.download=`Class${l}_${o}_RevisionNotes.txt`,document.body.appendChild(E),E.click(),document.body.removeChild(E)};return f.jsxs(B4,{children:[f.jsx(H4,{children:"📚 Generate Revision Planner"}),f.jsxs(k4,{children:[f.jsx(vs,{type:"number",placeholder:"Class Number",value:l,onChange:b=>i(b.target.value)}),f.jsx(vs,{type:"text",placeholder:"Subject",value:o,onChange:b=>u(b.target.value)}),f.jsx(vs,{type:"text",placeholder:"Topics (comma separated)",value:s,onChange:b=>d(b.target.value)})]}),f.jsx("div",{style:{textAlign:"center"},children:f.jsx(yg,{onClick:g,children:"Generate"})}),m.length>0&&f.jsxs(L4,{children:[f.jsx(q4,{children:"Revision Notes:"}),f.jsx(Y4,{children:m.join(`

`)}),f.jsx("div",{style:{textAlign:"center"},children:f.jsx(G4,{onClick:p,children:"Download as .txt"})})]})]})};var xg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vp=Yt.createContext&&Yt.createContext(xg),V4=["attr","size","title"];function X4(l,i){if(l==null)return{};var o=Z4(l,i),u,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(s=0;s<d.length;s++)u=d[s],!(i.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(l,u)&&(o[u]=l[u])}return o}function Z4(l,i){if(l==null)return{};var o={};for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(i.indexOf(u)>=0)continue;o[u]=l[u]}return o}function Eo(){return Eo=Object.assign?Object.assign.bind():function(l){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(l[u]=o[u])}return l},Eo.apply(this,arguments)}function Xp(l,i){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);i&&(u=u.filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable})),o.push.apply(o,u)}return o}function jo(l){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Xp(Object(o),!0).forEach(function(u){K4(l,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):Xp(Object(o)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(o,u))})}return l}function K4(l,i,o){return i=$4(i),i in l?Object.defineProperty(l,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[i]=o,l}function $4(l){var i=J4(l,"string");return typeof i=="symbol"?i:i+""}function J4(l,i){if(typeof l!="object"||!l)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var u=o.call(l,i);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(l)}function bg(l){return l&&l.map((i,o)=>Yt.createElement(i.tag,jo({key:o},i.attr),bg(i.child)))}function Ct(l){return i=>Yt.createElement(F4,Eo({attr:jo({},l.attr)},i),bg(l.child))}function F4(l){var i=o=>{var{attr:u,size:s,title:d}=l,m=X4(l,V4),x=s||o.size||"1em",g;return o.className&&(g=o.className),l.className&&(g=(g?g+" ":"")+l.className),Yt.createElement("svg",Eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,m,{className:g,style:jo(jo({color:l.color||o.color},o.style),l.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&Yt.createElement("title",null,d),l.children)};return Vp!==void 0?Yt.createElement(Vp.Consumer,null,o=>i(o)):i(xg)}function P4(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(l)}function af(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function lf(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function W4(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function vg(l){return Ct({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function I4(l){return Ct({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(l)}function no(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(l)}function e3(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function t3(l){return Ct({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function Sg(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function Ss(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(l)}function n3(l){return Ct({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(l)}function a3(l){return Ct({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(l)}const l3=S.main`
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
`,i3=S.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #4b3c88;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,r3=S.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
`,ao=S.a`
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
`,o3=S.section`
  background-color: #f4f4f8;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
`,u3=S.div`
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
`,c3=S.div`
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
`,s3=()=>f.jsxs(l3,{children:[f.jsx(i3,{children:"Explore Our AI-Powered Features"}),f.jsxs(r3,{children:[f.jsx(ao,{href:"#/doubt-solver",children:"Doubt Solving Assistant 🤔"}),f.jsx(ao,{href:"#/exam-paper-generator",children:"Exam Paper Generator 📝"}),f.jsx(ao,{href:"#/smart-quiz-generator",children:"Smart Quiz Generator 🎯"}),f.jsx(ao,{href:"#/revision-planner",children:"Revision Planner 📚"})]}),f.jsx(o3,{children:f.jsxs(u3,{children:[f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"About"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("strong",{children:"AI Smart Class"})," revolutionizes learning with powerful AI tools for students and teachers alike."]}),f.jsx("li",{children:f.jsx("a",{href:"#/about-ai-smart-class",children:"Learn more →"})})]})]}),f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"Contact"}),f.jsxs("ul",{children:[f.jsx("li",{children:"📍 Bailey Road, Patna, Bihar, India"}),f.jsx("li",{children:"📞 +91-9472994483"}),f.jsxs("li",{children:["📧 ",f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]})]})]}),f.jsxs("div",{className:"info-column",children:[f.jsx("h3",{children:"Follow Us"}),f.jsxs(c3,{children:[f.jsx("a",{href:"#","aria-label":"YouTube",target:"_blank",rel:"noopener noreferrer",children:f.jsx(vg,{})}),f.jsx("a",{href:"#","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:f.jsx(af,{})}),f.jsx("a",{href:"#","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:f.jsx(lf,{})})]})]})]})})]}),f3=S.div`
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
`,d3=()=>f.jsxs(f3,{children:[f.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2748/2748558.png",alt:"404 Not Found"}),f.jsx("h1",{children:"404 - Page Not Found"}),f.jsx("p",{children:"Oops! The page you're looking for doesn't exist or has been moved."}),f.jsx($t,{to:"#/ai-smart-class",children:"← Go Back to Homepage"})]}),h3=S.footer`
  background-color: #1c1c1e;
  color: #ccc;
  padding: 40px 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 30px 15px;
    font-size: 0.85rem;
  }
`,m3=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`,lo=S.div`
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
`,p3=S.div`
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
`,g3=()=>f.jsxs(h3,{children:[f.jsxs(m3,{children:[f.jsxs(lo,{children:[f.jsx("h3",{children:"AI Smart Class"}),f.jsx("a",{href:"#",children:"AI-Teaching"}),f.jsx("a",{href:"#",children:"AI-Learning"}),f.jsx("a",{href:"#",children:"AI-Classes"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Explore"}),f.jsx("a",{href:"#",children:"Our Team"}),f.jsx("a",{href:"#",children:"Join Our Community"}),f.jsx("a",{href:"#",children:"Our Partners"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Follow Us"}),f.jsx("a",{href:"#",children:"Instagram"}),f.jsx("a",{href:"#",children:"YouTube"}),f.jsx("a",{href:"#",children:"LinkedIn"})]}),f.jsxs(lo,{children:[f.jsx("h3",{children:"Contact Us"}),f.jsx("div",{children:"Phone: +91 9472994483"}),f.jsx("div",{children:"Phone: +91 9608049406"}),f.jsxs("div",{children:["Email: ",f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]})]})]}),f.jsxs(p3,{children:[f.jsx("p",{children:"© 2025 AI Smart Class powered by A2Pyramid. All rights reserved."}),f.jsxs("p",{children:[f.jsx("a",{href:"#",children:"Privacy Policy"})," | ",f.jsx("a",{href:"#",children:"Terms and Conditions"})]})]})]}),y3=S.div`
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
`,sl=S.section`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`,x3=S.h2`
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
`,Ti=S.h3`
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
`,io=S.p`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Zp=S.ul`
  list-style-type: disc;
  padding-left: 25px;
  color: #444;
`,Rt=S.li`
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
`,b3=S.div`
  text-align: center;
  margin-top: 60px;
`,v3=S.a`
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
`,S3=()=>f.jsxs(y3,{children:[f.jsxs(sl,{children:[f.jsx(x3,{children:"About AI Smart Class"}),f.jsx(io,{children:"AI Smart Class is a cutting-edge educational platform designed to revolutionize the learning experience through the integration of artificial intelligence. Our mission is to provide personalized, efficient, and engaging educational tools that cater to the unique needs of each student."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Mission"}),f.jsx(io,{children:"To empower educators and learners by harnessing the power of AI to create a more adaptive, interactive, and effective educational environment."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Vision"}),f.jsx(io,{children:"To be at the forefront of educational innovation, ensuring that every learner has access to tools that support their individual learning journey and foster a lifelong love for learning."})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Core Values"}),f.jsxs(Zp,{children:[f.jsxs(Rt,{children:[f.jsx("strong",{children:"Innovation:"})," Continuously integrating the latest AI technologies to enhance learning experiences."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Accessibility:"})," Ensuring that our tools are available and beneficial to all learners, regardless of their background."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Personalization:"})," Adapting educational content to meet the unique needs of each student."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Collaboration:"})," Working closely with educators, students, and institutions to refine and improve our offerings."]})]})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"What We Offer"}),f.jsxs(Zp,{children:[f.jsxs(Rt,{children:[f.jsx("strong",{children:"Doubt Solver:"})," An AI-powered assistant that provides instant answers to student queries, ensuring continuous learning without interruptions."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Exam Paper Generator:"})," Tools that help educators create customized exam papers tailored to their curriculum and student needs."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Smart Quiz Generator:"})," Dynamic quizzes that adapt to student performance, reinforcing learning and identifying areas for improvement."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Performance Metrics:"})," Comprehensive analytics that track student progress, helping educators make informed decisions."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Gamified Classroom:"})," Engaging game-based learning modules that make education fun and interactive."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Mental Health Support:"})," Resources and tools to support the emotional well-being of students, recognizing the importance of mental health in education."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Skill Progress Tracking:"})," Monitoring tools that help students and educators track the development of specific skills over time."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Attendance Report:"})," Efficient tracking of student attendance, ensuring accountability and consistency."]}),f.jsxs(Rt,{children:[f.jsx("strong",{children:"Revision Planner:"})," Personalized study plans that help students organize their revision schedules effectively."]})]})]}),f.jsxs(sl,{children:[f.jsx(Ti,{children:"Our Team"}),f.jsx(io,{children:"Behind AI Smart Class is a dedicated team of educators, developers, and AI specialists committed to transforming the educational landscape. Our diverse backgrounds and shared passion for learning drive us to create tools that make a real difference in the classroom."})]}),f.jsx(b3,{children:f.jsx(v3,{href:"#",children:"Join Our Community"})})]}),w3=S.section`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(145deg, #f2f4f8, #ffffff);
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,E3=S.div`
  max-width: 1200px;
  margin: 0 auto;
`,j3=S.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
  font-weight: 700;
`,A3=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,T3=S.div`
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`,ws=S.div`
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
`,z3=S.div`
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
`,R3=S.div`
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
`,O3=S.span`
  color: #4b8df8;
  font-weight: 600;
`,C3=()=>f.jsx(w3,{children:f.jsxs(E3,{children:[f.jsxs(j3,{children:["Contact ",f.jsx(O3,{children:"AI Smart Class"})]}),f.jsxs(A3,{children:[f.jsxs(T3,{children:[f.jsxs(ws,{children:[f.jsx("h4",{children:"📞 Phone"}),f.jsx("p",{children:"+91 9472994483"}),f.jsx("p",{children:"+91 9608049406"})]}),f.jsxs(ws,{children:[f.jsx("h4",{children:"📧 Email"}),f.jsx("a",{href:"mailto:studypyramid@gmail.com",children:"studypyramid@gmail.com"})]}),f.jsxs(ws,{children:[f.jsx("h4",{children:"🔗 Follow Us"}),f.jsxs(z3,{children:[f.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:f.jsx(af,{})}),f.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer","aria-label":"YouTube",children:f.jsx(vg,{})}),f.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:f.jsx(lf,{})})]})]})]}),f.jsx(R3,{children:f.jsx("iframe",{title:"AI Smart Class Location",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.566606219661!2d85.068942!3d25.612116000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1746647373473!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})});S.header`
  background: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;S.h1`
  font-size: 1.5rem;
`;S.div`
  display: flex;
  gap: 1rem;
`;S($t)`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: linear-gradient(90deg, #00c6ff, #0072ff);
  }
`;S.div`
  position: relative;
  cursor: pointer;
`;S.div`
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  display: ${({open:l})=>l?"block":"none"};
`;S.div`
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 50%;
`;const D3=S.footer`
  background: #222;
  color: white;
  padding: 1rem;
  text-align: center;
`,_3=()=>f.jsx(D3,{children:"© 2025 A2 Pyramid"}),M3=S.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab); /* Professional gradient */
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`,N3=S.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,U3=S.div`
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
`,Kp=S.div`
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
`,$p=S.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Jp=S.ul`
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
`,B3=()=>{const l=Js();return f.jsxs(M3,{children:[f.jsx(N3,{children:f.jsxs(U3,{children:[f.jsxs(Kp,{onClick:()=>l("/edutech"),children:[f.jsx($p,{children:"Edutech"}),f.jsxs(Jp,{children:[f.jsx("li",{children:"AI/ML Training"}),f.jsx("li",{children:"Web Development"}),f.jsx("li",{children:"DevOps"}),f.jsx("li",{children:"QA Engineering"})]})]}),f.jsxs(Kp,{onClick:()=>l("/ai-smart-login"),children:[f.jsx($p,{children:"AI Smart Class"}),f.jsxs(Jp,{children:[f.jsx("li",{children:"AI Assistant Chatbot"}),f.jsx("li",{children:"AI Smart Learning"}),f.jsx("li",{children:"AI Smart Teaching"}),f.jsx("li",{children:"AI Smart Assessment"})]})]})]})}),f.jsx(_3,{})]})};S.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1120px;
  margin: 0 auto;
`;S($t)`
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
`;S($t)`
  font-size: 1rem;
  color: #4a4a4a;
  padding-right: 2.75rem;
  text-decoration: none;

  &:hover {
    color: #3b82f6;
  }
`;S.div`
  position: relative;
  cursor: pointer;
`;S.div`
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
`;S($t)`
  padding: 0.5rem;
  display: block;
  color: #374151;
  text-decoration: none;

  &:hover {
    background-color: #f3f4f6;
  }
`;S.div`
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
`;S.div`
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
`;S.div`
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
`;S.div`
  display: block;
  font-size: 2rem;
  color: #4a4a4a;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;const H3=S.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`,k3=S.div`
  max-width: 1200px;
  margin: auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L3=S.a`
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
`,q3=S.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,fl=S.a`
  text-decoration: none;
  color: #374151;
  font-weight: 500;

  &:hover {
    color: #2563EB;
  }
`,Y3=S.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,G3=S.input`
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
`,Q3=S.button`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2563EB;
  cursor: pointer;
`,V3=S.div`
  display: block;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: #374151;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,X3=S.div`
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
`,Ao=()=>{const[l,i]=_.useState(!1),o=()=>{i(s=>!s)},u=()=>{i(!1)};return f.jsxs(H3,{children:[f.jsxs(k3,{children:[f.jsxs(L3,{href:"#/edutech",children:[f.jsx("img",{src:"/img/logo2.png",alt:"Logo"}),"Pyramid"]}),f.jsxs(q3,{children:[f.jsx(fl,{href:"#/edutech",children:"Home"}),f.jsx(fl,{href:"#/edutech/about",children:"About"}),f.jsx(fl,{href:"#/edutech/contact",children:"Contact"}),f.jsxs(Y3,{children:[f.jsx(G3,{type:"text",placeholder:"Search"}),f.jsx(Q3,{children:f.jsx(n3,{})})]})]}),f.jsx(V3,{onClick:o,children:l?f.jsx(a3,{}):f.jsx(I4,{})})]}),f.jsxs(X3,{open:l,children:[f.jsx(fl,{href:"#/edutech",onClick:u,children:"Home"}),f.jsx(fl,{href:"#/edutech/about",onClick:u,children:"About"}),f.jsx(fl,{href:"#/edutech/contact",onClick:u,children:"Contact"})]})]})},rf=Mo`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Z3=S.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  color: #333;
`,K3=S.div`
  background: url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D') no-repeat center/cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${rf} 2s ease-in-out;

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
`,Es=S.h2`
  font-size: 2.5em;
  text-align: center;
  margin: 60px 0 30px;
  color: #2a5d84;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  animation: ${rf} 1.5s ease-in-out forwards;
`,$3=S.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  gap: 40px;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${rf} 1.5s ease-in-out forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`,Fp=S.a`
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
`,J3=S.div`
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
`,F3=S.div`
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
`,P3=S.div`
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
`,W3=S.div`
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
`,I3=S.div`
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
`,eS=S.div`
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
`,js=S.a`
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
  }`,tS=()=>{const l=[{img:"/img/aditya.png",name:"Aditya Apurv",role:"CEO & Founder"},{img:"/img/satish.PNG",name:"Satish Kumar",role:"CTO & Co-Founder"},{img:"/img/keshav.PNG",name:"Keshav Nair",role:"COO & Manager"}];return f.jsxs(Z3,{children:[f.jsx(Ao,{}),f.jsx(K3,{children:f.jsx("h1",{style:{fontWeight:"bold"},children:"About Us"})}),f.jsxs($3,{children:[f.jsxs(J3,{children:[f.jsx("h2",{children:"Your Trusted EdTech Partner with 3 Years of Expertise"}),f.jsx("p",{children:"With years of experience, our EdTech platform is dedicated to fostering meaningful educational journeys and lifelong learning. We strive to make education accessible, engaging, and impactful through innovative approaches."}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(no,{})," One to One Mentorship"]}),f.jsxs("li",{children:[f.jsx(no,{})," Professional Staff"]}),f.jsxs("li",{children:[f.jsx(no,{})," 24/7 Support"]}),f.jsxs("li",{children:[f.jsx(no,{})," Fair Prices"]})]}),f.jsx("h3",{children:"Call us to ask any questions:"}),f.jsxs("a",{href:"tel:+919472994483",children:[f.jsx(Sg,{})," +91 9472994483"]}),f.jsx("h3",{children:"Fill this Google Form to Join"}),f.jsxs("div",{className:"form-buttons",children:[f.jsx(Fp,{href:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Google Form"}),f.jsx(Fp,{href:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Join Now"})]})]}),f.jsx(F3,{children:f.jsx("img",{src:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjB0ZWFtJTIwZGlzY3Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",alt:"Team Discussion"})})]}),f.jsx(Es,{children:"Courses We Offer"}),f.jsx(P3,{children:f.jsx("div",{className:"courses",children:["Data Science","MERN Stack","AI/ML","Data Analytics","Quality Assurance","DevOps","Web Development"].map((i,o)=>f.jsx("div",{className:"course",children:i},o))})}),f.jsx(Es,{children:"Professional Staff Ready to Help You Grow"}),f.jsx(W3,{children:f.jsx("div",{className:"team-members",children:l.map((i,o)=>f.jsxs("div",{className:"team-member",children:[f.jsx("img",{src:i.img,alt:i.name}),f.jsx("h3",{children:i.name}),f.jsx("p",{children:i.role})]},o))})}),f.jsx(Es,{children:"What People Say"}),f.jsx(I3,{children:f.jsxs("div",{className:"testimonials",children:[f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"A2 Pyramid mentorship program has been a game-changer for my career. The guidance I received was practical and tailored to my needs, helping me secure a job in just 3 months!"}),f.jsx("h3",{children:"- Ankit"})]}),f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"The course material at A2 Pyramid is up-to-date and comprehensive. I was able to gain hands-on experience that boosted my confidence and skills. Highly recommend!"}),f.jsx("h3",{children:"- Namrata"})]}),f.jsxs("div",{className:"testimonial",children:[f.jsx(Ss,{}),f.jsx("p",{children:"As a working professional, the flexible learning options at A2 Pyramid were perfect for me. I was able to balance work and study while gaining valuable insights into my field."}),f.jsx("h3",{children:"Aneesha"})]})]})}),f.jsx(eS,{children:f.jsxs("div",{children:[f.jsx("h4",{style:{fontSize:"2rem",color:"#002D62",fontWeight:"bold",width:"83%",margin:"auto",padding:"10px",borderRadius:"5px"},children:"Social Media"}),f.jsxs(js,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s",alt:"YouTube icon"}),"YouTube"]}),f.jsxs(js,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJhDxqnknL532tb3usCPP13d8PIiuKcUCmQ&s",alt:"Twitter icon"}),"Twitter"]}),f.jsxs(js,{href:"https://www.instagram.com/a2pyramid/",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://img.icons8.com/color/48/000000/instagram-new.png",alt:"Instagram icon"}),"Instagram"]})]})})]})},nS=S.div`
  background-color: #f8f9fa;
  font-family: "Roboto", sans-serif;
`,aS=Mo`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,lS=S.div`
  background: url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D') no-repeat center/cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${aS} 2s ease-in-out;

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
`,iS=S.div`
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
`,rS=S.div`
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
`,oS=S.ul`
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
`,uS=S.form`
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
`,cS=S.div`
  margin-top: 40px;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }
`,sS=S.div`
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
`,As=S.a`
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
  }`,fS=()=>f.jsxs(nS,{children:[f.jsx(Ao,{}),f.jsx(lS,{children:f.jsx("h1",{style:{fontWeight:"bold"},children:"Contact Us"})}),f.jsxs(iS,{children:[f.jsxs(rS,{children:[f.jsxs("h2",{children:["Contact ",f.jsx("span",{children:f.jsx("u",{children:"Information"})})]}),f.jsx("p",{children:"Have questions or need assistance? We are here to help—reach out anytime!"}),f.jsx("br",{}),f.jsx("hr",{}),f.jsx("br",{}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(t3,{})," ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"},children:"Rukunpura, Tilak Nagar,Bailey Road Patna, Pin:800014"})]}),f.jsx("br",{}),f.jsxs("li",{children:[f.jsx(Sg,{})," ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem",fontFamily:"roboto",letterSpacing:"2px"},children:"+91 9472994483 "})]}),f.jsx("br",{}),f.jsxs("li",{children:[f.jsx(e3,{}),"  ",f.jsx("span",{style:{fontWeight:"bold",fontSize:"1rem",fontFamily:"roboto",letterSpacing:"3px"},children:"studypyramid@gmail.com"})]}),f.jsx("br",{})]}),f.jsx("h2",{children:"Follow Us"}),f.jsxs(oS,{children:[f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(P4,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(W4,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(lf,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:f.jsx(af,{})})})]})]}),f.jsxs(uS,{children:[f.jsxs("h2",{children:["Get In ",f.jsx("span",{children:"Touch"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Your Name"}),f.jsx("input",{type:"text",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Your Email Address"}),f.jsx("input",{type:"email",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Subject"}),f.jsx("input",{type:"text",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Message"}),f.jsx("textarea",{rows:"4",required:!0})]}),f.jsx("button",{type:"submit",children:"Send Message"})]})]}),f.jsx(cS,{children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.781657220188!2d85.06637777539542!3d25.612170677446155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1730015108345!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy"})}),f.jsx(sS,{children:f.jsxs("div",{children:[f.jsx("h4",{style:{fontSize:"2rem",color:"#002D62",fontWeight:"bold",width:"83%",margin:"auto",padding:"10px",borderRadius:"5px"},children:"Social Media"}),f.jsxs(As,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s",alt:"YouTube icon"}),"YouTube"]}),f.jsxs(As,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJhDxqnknL532tb3usCPP13d8PIiuKcUCmQ&s",alt:"Twitter icon"}),"Twitter"]}),f.jsxs(As,{href:"https://www.instagram.com/a2pyramid/",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:"https://img.icons8.com/color/48/000000/instagram-new.png",alt:"Instagram icon"}),"Instagram"]})]})})]}),dS=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 2rem;
`,hS=S.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`,mS=S.img`
  display: block;
  margin: 0 auto 1.5rem auto;
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`,pS=S.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c5364;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Pp=S.input`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #2c5364;
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
  }
`,gS=S.button`
  width: 100%;
  background-color: #2c5364;
  color: white;
  padding: 0.85rem 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #203a43;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
  }
`,yS=S.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,xS=()=>{const[l,i]=_.useState(""),[o,u]=_.useState(""),[s,d]=_.useState(""),m=Js(),x=g=>{g.preventDefault(),l==="Ady@a2pyramid"&&o==="water@a2py"?(d(""),console.log("Login successful"),m("/ai-smart-class")):d("Invalid credentials. Please try again.")};return f.jsx(dS,{children:f.jsxs(hS,{children:[f.jsx(mS,{src:"/ai-smart-class-logo.PNG",alt:"AI Smart Class Logo"}),f.jsx(pS,{children:"Ai-Smart-Class Login"}),f.jsxs("form",{onSubmit:x,children:[f.jsx(Pp,{type:"text",placeholder:"Username",value:l,onChange:g=>i(g.target.value),required:!0}),f.jsx(Pp,{type:"password",placeholder:"Password",value:o,onChange:g=>u(g.target.value),required:!0}),f.jsx(gS,{type:"submit",children:"Login"})]}),f.jsx("br",{}),s&&f.jsx(yS,{children:s})]})})};var dl={},Wp;function bS(){if(Wp)return dl;Wp=1,Object.defineProperty(dl,"__esModule",{value:!0});var l=n0(),i=To(),o=function(){return o=Object.assign||function(g){for(var p,b=1,E=arguments.length;b<E;b++)for(var j in p=arguments[b])Object.prototype.hasOwnProperty.call(p,j)&&(g[j]=p[j]);return g},o.apply(this,arguments)};function u(g,p){var b,E;switch(p.type){case"TYPE":return o(o({},g),{speed:p.speed,text:(b=p.payload)===null||b===void 0?void 0:b.substring(0,g.text.length+1)});case"DELAY":return o(o({},g),{speed:p.payload});case"DELETE":return o(o({},g),{speed:p.speed,text:(E=p.payload)===null||E===void 0?void 0:E.substring(0,g.text.length-1)});case"COUNT":return o(o({},g),{count:g.count+1});default:return g}}var s=function(g){var p=g.words,b=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,E=g.loop,j=E===void 0?1:E,H=g.typeSpeed,T=H===void 0?80:H,M=g.deleteSpeed,N=M===void 0?50:M,B=g.delaySpeed,Y=B===void 0?1500:B,V=g.onLoopDone,F=g.onType,X=g.onDelete,W=g.onDelay,J=i.useReducer(u,{speed:T,text:"",count:0}),se=J[0],de=se.speed,_e=se.text,Xe=se.count,Ce=J[1],ct=i.useRef(0),at=i.useRef(!1),Re=i.useRef(!1),k=i.useRef(!1),Z=i.useRef(!1),ee=i.useCallback(function(){var re=Xe%b.length,w=b[re];Re.current?(Ce({type:"DELETE",payload:w,speed:N}),_e===""&&(Re.current=!1,Ce({type:"COUNT"}))):(Ce({type:"TYPE",payload:w,speed:T}),k.current=!0,_e===w&&(Ce({type:"DELAY",payload:Y}),k.current=!1,Z.current=!0,setTimeout(function(){Z.current=!1,Re.current=!0},Y),j>0&&(ct.current+=1,ct.current/b.length===j&&(Z.current=!1,at.current=!0)))),k.current&&F&&F(ct.current),Re.current&&X&&X(),Z.current&&W&&W()},[Xe,Y,N,j,T,b,_e,F,X,W]);return i.useEffect(function(){var re=setTimeout(ee,de);return at.current&&clearTimeout(re),function(){return clearTimeout(re)}},[ee,de]),i.useEffect(function(){V&&at.current&&V()},[V]),[_e,{isType:k.current,isDelay:Z.current,isDelete:Re.current,isDone:at.current}]},d="styles-module_blinkingCursor__yugAC",m="styles-module_blinking__9VXRT";(function(g,p){p===void 0&&(p={});var b=p.insertAt;if(typeof document<"u"){var E=document.head||document.getElementsByTagName("head")[0],j=document.createElement("style");j.type="text/css",b==="top"&&E.firstChild?E.insertBefore(j,E.firstChild):E.appendChild(j),j.styleSheet?j.styleSheet.cssText=g:j.appendChild(document.createTextNode(g))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var x=i.memo(function(g){var p=g.cursorBlinking,b=p===void 0||p,E=g.cursorStyle,j=E===void 0?"|":E,H=g.cursorColor,T=H===void 0?"inherit":H;return l.jsx("span",o({style:{color:T},className:"".concat(d," ").concat(b?m:"")},{children:j}))});return dl.Cursor=x,dl.Typewriter=function(g){var p=g.words,b=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,E=g.loop,j=E===void 0?1:E,H=g.typeSpeed,T=H===void 0?80:H,M=g.deleteSpeed,N=M===void 0?50:M,B=g.delaySpeed,Y=B===void 0?1500:B,V=g.cursor,F=V!==void 0&&V,X=g.cursorStyle,W=X===void 0?"|":X,J=g.cursorColor,se=J===void 0?"inherit":J,de=g.cursorBlinking,_e=de===void 0||de,Xe=g.onLoopDone,Ce=g.onType,ct=g.onDelay,at=g.onDelete,Re=s({words:b,loop:j,typeSpeed:T,deleteSpeed:N,delaySpeed:Y,onLoopDone:Xe,onType:Ce,onDelay:ct,onDelete:at})[0];return l.jsxs(l.Fragment,{children:[l.jsx("span",{children:Re}),F&&l.jsx(x,{cursorStyle:W,cursorColor:se,cursorBlinking:_e})]})},dl.useTypewriter=s,dl}var vS=bS();const SS=S.section`
  background-color: #ffffff;
  padding: 3rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 4rem 0;
  }
`,wS=S.div`
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
`,ES=S.div`
  max-width: 40rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`,jS=S.h1`
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
`,AS=S.div`
  font-size: 1rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`,TS=S.span`
  font-weight: 700;
  font-size: 1.25rem;
`,zS=S.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #4f46e5; /* Tailwind: text-indigo-600 */
`,RS=S.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`,OS=S($t)`
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
`,CS=S.div`
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`,DS=S.img`
  width: 12rem;
  height: auto;

  @media (min-width: 640px) {
    width: 15rem;
  }

  @media (min-width: 1024px) {
    width: 18rem;
  }
`,_S=()=>f.jsx(SS,{children:f.jsxs(wS,{children:[f.jsxs(ES,{children:[f.jsx(jS,{children:"Achieve Your Learning Goals"}),f.jsxs(AS,{children:[f.jsx(TS,{children:"Learn "}),f.jsx(zS,{children:f.jsx(vS.Typewriter,{words:["Programming Languages","Web Development","Data Science","Machine Learning","UI/UX Design"],loop:0,cursor:!0,cursorStyle:"|",typeSpeed:100,deleteSpeed:100,delaySpeed:1500})})]}),f.jsx(RS,{children:"Start, advance, or switch your career with a variety of courses, certifications, and degrees from top educators and institutions worldwide."}),f.jsx(OS,{to:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",children:"Join For Free"})]}),f.jsx(CS,{children:f.jsx(DS,{src:"/img/hero3.png",alt:"Learning illustration"})})]})});S.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;S.div`
  display: flex;
  margin-right: 1rem;
  gap: 1rem;
`;S.a`
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
`;S.div`
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
`;const MS=S.section`
  background-color: #f7fafc;
  padding: 2.5rem 0;
`,NS=S.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
  
  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,US=S.h2`
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
`,BS=S.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`,hl=S.img`
  height: 4rem;
  max-width: 150px;
  width: 100%;
  object-fit: contain;
  
  @media (min-width: 768px) {
    height: 6rem;
  }
`,HS=()=>f.jsx(MS,{children:f.jsxs(NS,{children:[f.jsxs(US,{children:["We collaborate with"," ",f.jsx("a",{href:"#collaborators",children:"leading companies and institutions"})]}),f.jsxs(BS,{children:[f.jsx(hl,{src:"/img/google.png",alt:"Google"}),f.jsx(hl,{src:"/img/facebook.png",alt:"Facebook"}),f.jsx(hl,{src:"/img/samsung.png",alt:"Samsung"}),f.jsx(hl,{src:"/img/ibm.png",alt:"IBM"}),f.jsx(hl,{src:"/img/amazon.png",alt:"Amazon"}),f.jsx(hl,{src:"/img/microsoft.png",alt:"Microsoft"})]})]})}),kS=S.div`
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
`,LS=S.div`
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
`,qS=S.div`
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
`,YS=S.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`,GS=S.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 12px;
`,QS=S.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,VS=S.p`
  font-size: 1.2rem;
  color: #2ECC71;
  font-weight: bold;
  margin-bottom: 16px;
`,XS=S.button`
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
`,ZS=()=>{const l=[{title:"MERN Stack",description:"Master full-stack development with MongoDB, Express, React, and Node.js for dynamic web apps.",fee:"20,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://wallpapercave.com/wp/wp8903890.jpg"},{title:"Data Analytics",description:"Unlock data insights using Excel, SQL, and Python for impactful, data-driven decision-making.",fee:"20,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://www.purplescape.com/wp-content/uploads/2022/08/Old-Blog-Banners-Purplescape-85.jpg"},{title:"Machine Learning",description:"Learn cutting-edge algorithms and models to develop predictive machine learning applications.",fee:"45,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://thumbs.dreamstime.com/b/machine-deep-learning-algorithms-artificial-intelligence-ai-automation-modern-technology-business-as-concept-134359416.jpg"},{title:"DevOps",description:"Become proficient in CI/CD, Docker, and Kubernetes to automate deployments and boost efficiency.",fee:"35,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://t3.ftcdn.net/jpg/05/12/04/52/360_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg"},{title:"QA Engineering",description:"Master software testing, automation, and quality assurance techniques for delivering bug-free applications.",fee:"25,000/-",link:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",image:"https://www.shutterstock.com/image-illustration/quality-assurance-software-flow-qa-260nw-2324541683.jpg"}];return f.jsxs(f.Fragment,{children:[f.jsxs(kS,{children:[f.jsx("h2",{children:"Featured Courses and Professional Certificates"}),f.jsx("h2",{children:"Learn with the Best"})]}),f.jsx(LS,{children:l.map((i,o)=>f.jsxs(qS,{children:[f.jsx(YS,{src:i.image,alt:i.title}),f.jsx(GS,{children:i.title}),f.jsx(QS,{children:i.description}),f.jsxs(VS,{children:["Course Fee: ",i.fee]}),f.jsx($t,{to:i.link,target:i.target,style:{textDecoration:"none"},children:f.jsx(XS,{children:"Enroll Now"})})]},o))})]})},KS=S.section`
  background-color: #eef2ff; /* Tailwind: bg-indigo-50 */
  padding: 2.5rem 0;
`,$S=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,JS=S.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1f2937; /* Tailwind: text-gray-800 */
  text-align: center;
  margin-bottom: 2rem;
`,FS=S.div`
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
`,PS=S.div`
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
`,WS=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,IS=S.p`
  font-size: 0.875rem;
  color: #2563eb; /* Tailwind: text-blue-600 */
  margin-bottom: 0.25rem;
`,e5=S.p`
  font-size: 0.875rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
`,t5=()=>{const l=[{name:"Rahul Sharma",role:"Full-Stack Developer",feedback:"The courses provided helped me to quickly master the technologies needed to build complex applications. I owe my success to these detailed lessons!"},{name:"Ayush Patel",role:"Data Scientist",feedback:"I found the data science and AI courses extremely helpful. The practical projects truly helped me land my current role!"},{name:"Ankit",role:"Web Developer",feedback:"The web development course was easy to follow and helped me become proficient in building responsive websites."},{name:"Riya jha",role:"Machine Learning Engineer",feedback:"The ML course opened many doors for me in the industry, with strong theoretical and practical concepts."},{name:"Amit Verma",role:"Software Engineer",feedback:"I was able to enhance my coding skills and got placed in a reputed company. Great platform for learning!"},{name:"Roshni Agarwal",role:"UI/UX Designer",feedback:"The design courses gave me in-depth knowledge of UI/UX principles and boosted my confidence as a designer."}],i=[...l,...l,...l,...l,...l,...l];return _.useEffect(()=>{const o=document.getElementById("testimonialCards");let u=setInterval(()=>{o.scrollLeft+=2,o.scrollLeft>=o.scrollWidth/3&&(o.scrollLeft=0)},20);return o.addEventListener("mouseenter",()=>clearInterval(u)),o.addEventListener("mouseleave",()=>{u=setInterval(()=>{o.scrollLeft+=2},20)}),()=>clearInterval(u)},[]),f.jsx(KS,{children:f.jsxs($S,{children:[f.jsx(JS,{children:"Voices of Success: Our Student's Journey"}),f.jsx(FS,{id:"testimonialCards",children:i.map((o,u)=>f.jsxs(PS,{children:[f.jsx(WS,{children:o.name}),f.jsx(IS,{children:o.role}),f.jsx(e5,{children:o.feedback})]},u))})]})})},n5=Mo`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,a5=S.section`
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  padding: 4rem 1rem;
`,l5=S.div`
  max-width: 1280px;
  margin: 0 auto;
`,i5=S.h2`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #64748b;
  margin-bottom: 0.5rem;
`,r5=S.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
  line-height: 1.2;
`,o5=S.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media(min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,u5=S.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${({show:l})=>l?n5:"none"} 0.6s ease forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
`,c5=S.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,s5=S.div`
  padding: 1.5rem;
`,f5=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`,d5=S.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4b5563;
`;S.a`
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
`;const h5=()=>{const[l,i]=_.useState(!1);_.useEffect(()=>{const u=()=>{document.getElementById("courses").getBoundingClientRect().top<=window.innerHeight*.8&&i(!0)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const o=[{name:"MERN Stack Development",description:`Master full-stack web development using MongoDB, Express.js, React.js, and Node.js. 
      Learn front-end & back-end programming, build RESTful APIs, handle authentication, and deploy apps.`,image:"/img/webdev.webp"},{name:"Machine Learning / AI",description:"Explore intelligent systems with ML algorithms, deep learning, and real-world dataset applications using tools like Python, TensorFlow, and OpenAI APIs.",image:"/img/AI.webp"},{name:"Data Analytics",description:"Clean, analyze, and visualize data using Excel, SQL, Python, and Tableau. Ideal for beginners wanting to generate insights for businesses.",image:"/img/algo.jpg"},{name:"Data Science",description:"Dive into data wrangling, visualization, and machine learning using Python libraries. Tackle real-world datasets in finance, healthcare, and more.",image:"/img/webdev.webp"},{name:"DevOps",description:"Implement CI/CD pipelines, Docker, Kubernetes, Jenkins, and cloud infrastructure with AWS/Azure to streamline development and deployment.",image:"/img/machine_learning.avif"},{name:"Quality Assurance (QA)",description:"Learn manual and automated testing with tools like Selenium, Postman, and JUnit. Understand bug tracking and real-world test planning.",image:"/img/cloud_comp.webp"}];return f.jsx(a5,{id:"courses",children:f.jsxs(l5,{children:[f.jsx(i5,{children:"Dive into expert articles to sharpen your skills."}),f.jsx(r5,{children:"Empower Your Learning"}),f.jsx(o5,{children:o.map((u,s)=>f.jsxs(u5,{show:l,children:[f.jsx(c5,{src:u.image,alt:u.name}),f.jsxs(s5,{children:[f.jsx(f5,{children:u.name}),f.jsx(d5,{children:u.description})]})]},s))})]})})},m5=[{name:"Aditya Apurv",role:"CEO, A2 Pyramid",image:"/img/aditya.png",bio:"Aditya specializes in data analysis and machine learning, guiding students through practical projects in Python and R."},{name:"Satish Kumar",role:"CTO, A2 Pyramid",image:"/img/satish.PNG",bio:"With a keen eye for design, Satish helps students understand the principles of UI/UX and how to create user-friendly applications."},{name:"Keshav Nair",role:"COO, A2 Pyramid",image:"/img/keshav.PNG",bio:"Keshav focuses on teaching the fundamentals of machine learning, from theory to practical implementations in real-world projects."},{name:"Ankit Dwivedi",role:"Full-Stack Developer",image:"/img/ankit.jpg",bio:"Ankit Dwivedi has over 1 year of experience in full-stack development and has worked with various technologies, including React, Node.js, and MongoDB."}],p5=S.section`
  background-color: #eef2ff;
  padding: 2.5rem 1rem;
`,g5=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,y5=S.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`,x5=S.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,b5=S.div`
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
`,v5=S.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`,Ip=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,e0=S.p`
  font-size: 0.875rem;
  color: #4b5563;
`,S5=Mo`
  from { opacity: 0; }
  to { opacity: 1; }
`,w5=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${S5} 0.3s ease;
  z-index: 1000;
`,E5=S.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 28rem;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`,j5=S.button`
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
`,A5=()=>{const[l,i]=_.useState(null),o=s=>i(s),u=()=>i(null);return f.jsx(p5,{children:f.jsxs(g5,{children:[f.jsx(y5,{children:"Meet Our Team"}),f.jsx(x5,{children:m5.map((s,d)=>f.jsxs(b5,{onClick:()=>o(s),children:[f.jsx(v5,{src:s.image,alt:s.name}),f.jsx(Ip,{children:s.name}),f.jsx(e0,{children:s.role})]},d))}),l&&f.jsx(w5,{onClick:u,children:f.jsxs(E5,{onClick:s=>s.stopPropagation(),children:[f.jsx(Ip,{children:l.name}),f.jsx(e0,{children:l.role}),f.jsx("p",{style:{marginTop:"1rem",color:"#4b5563"},children:l.bio}),f.jsx(j5,{onClick:u,children:"Close"})]})})]})})},t0=[{question:"What is the purpose of this platform?",answer:"This platform is designed to help students learn various technologies through comprehensive courses and hands-on projects."},{question:"How can I enroll in a course?",answer:"You can enroll in a course by creating an account and selecting the course you want to take from our catalog."},{question:"What support is available for students?",answer:"We offer 24/7 support through our online chat and email services, as well as community forums for peer assistance."},{question:"Are there any prerequisites for the courses?",answer:"Some courses may have prerequisites, which will be listed in the course description. However, most courses are beginner-friendly."},{question:"Will I receive a certificate after completing a course?",answer:"Yes, upon successful completion of a course, you will receive a certificate that you can share on your LinkedIn profile."},{question:"Can I access course materials after the course ends?",answer:"Yes, all enrolled students will have lifetime access to course materials and updates."},{question:"How do I reset my password?",answer:'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.'},{question:"Is there a refund policy?",answer:"Yes, we have a 30-day money-back guarantee if you are not satisfied with the course."}],T5=S.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`,z5=S.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`,R5=S.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`,O5=S.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`,C5=S.div`
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
`,D5=S.div`
  padding: 0 1rem 1rem 1rem;
  p {
    color: #4b5563;
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
  }
`,_5=S.button`
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
`,M5=()=>{const[l,i]=_.useState([]),[o,u]=_.useState(!1),s=x=>{i(g=>g.includes(x)?g.filter(p=>p!==x):[...g,x])},d=()=>u(!o),m=o?t0:t0.slice(0,3);return f.jsx(T5,{children:f.jsxs(z5,{children:[f.jsx(R5,{children:"Frequently Asked Questions"}),m.map((x,g)=>f.jsxs(O5,{children:[f.jsxs(C5,{onClick:()=>s(g),children:[f.jsx("h3",{children:x.question}),f.jsx("span",{children:l.includes(g)?"−":"+"})]}),l.includes(g)&&f.jsx(D5,{children:f.jsx("p",{children:x.answer})})]},g)),f.jsx(_5,{onClick:d,children:o?"See Less":"See More"})]})})},N5=S.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef2ff;
  padding: 2.5rem 0;
`,U5=S.div`
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
`,B5=S.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`,H5=S.div`
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
`,k5=S($t)`
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
`,L5=()=>f.jsx(N5,{children:f.jsxs(U5,{children:[f.jsx(B5,{children:f.jsx("img",{src:"/img/last_img.png",alt:"Join A2 Pyramid"})}),f.jsxs(H5,{children:[f.jsx("h2",{children:"Take the Next Step Toward Your Professional Goals with A2 Pyramid"}),f.jsx("p",{children:"Join now to receive personalized recommendations from the full A2 Pyramid catalog."}),f.jsx(k5,{to:"https://forms.gle/P7sDPc4fsMcr2DJV7",target:"_blank",style:{textDecoration:"none"},children:"Join for Free"})]})]})});S.footer`
  background-color: #1f2937;
  color: white;
  padding: 2.5rem 0;
`;S.div`
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
`;S.div`
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
`;S.li`
  display: flex;
  align-items: center;
  space-between: 1rem;
  cursor: pointer;
  &:hover {
    color: #d946ef;
  }
`;S.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.875rem;
  hr {
    border-color: #4b5563;
    margin-bottom: 1rem;
  }
`;const q5=S.div`
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
`,Y5=S.img`
  margin-top: 0px;
  width: 80%;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`,G5=S.h1`
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
`,Q5=S.p`
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
`,V5=S.button`
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
`,X5=()=>f.jsxs(q5,{children:[f.jsx(Y5,{src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000",alt:"error-img"}),f.jsx(G5,{children:"Page not found"}),f.jsx(Q5,{children:"The page you are requesting does not exist."}),f.jsx($t,{to:"#/edutech",children:f.jsx(V5,{children:"Go to HomePage"})})]}),Ts=S.button`
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
`,Z5=S.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,K5=({children:l})=>{const o=Pn().pathname,u=o==="/"||o.startsWith("/edutech")||o==="/ai-smart-login";return f.jsxs(f.Fragment,{children:[!u&&f.jsxs(f.Fragment,{children:[f.jsx(lb,{}),f.jsxs("main",{style:{padding:"20px"},children:[f.jsx("h1",{children:"Welcome to the AI Smart Class Dashboard 🚀"}),f.jsxs(Z5,{children:[f.jsx("a",{href:"#/ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"Home"})}),f.jsx("a",{href:"#/about-ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"About"})}),f.jsx("a",{href:"#/contact-ai-smart-class",style:{textDecoration:"none"},children:f.jsx(Ts,{children:"Contact"})})]})]})]}),l,f.jsx(g3,{})]})};function $5(){return f.jsx(bv,{children:f.jsx(K5,{children:f.jsxs(Jb,{children:[f.jsx(Qe,{path:"/",element:f.jsx(B3,{})}),f.jsx(Qe,{path:"/edutech/about",element:f.jsx(tS,{})}),f.jsx(Qe,{path:"/edutech/contact",element:f.jsx(fS,{})}),f.jsx(Qe,{path:"/edutech",element:f.jsxs(f.Fragment,{children:[f.jsx(Ao,{}),f.jsx(_S,{}),f.jsx(HS,{}),f.jsx(ZS,{}),f.jsx(t5,{}),f.jsx(h5,{}),f.jsx(A5,{}),f.jsx(M5,{}),f.jsx(L5,{})]})}),f.jsx(Qe,{path:"/edutech/*",element:f.jsxs(f.Fragment,{children:[f.jsx(Ao,{}),f.jsx(X5,{})]})}),f.jsx(Qe,{path:"/ai-smart-class",element:f.jsx(s3,{})}),f.jsx(Qe,{path:"/about-ai-smart-class",element:f.jsx(S3,{})}),f.jsx(Qe,{path:"/contact-ai-smart-class",element:f.jsx(C3,{})}),f.jsx(Qe,{path:"/doubt-solver",element:f.jsx(m4,{})}),f.jsx(Qe,{path:"/exam-paper-generator",element:f.jsx(w4,{})}),f.jsx(Qe,{path:"/smart-quiz-generator",element:f.jsx(C4,{})}),f.jsx(Qe,{path:"/performance-metrics",element:f.jsx(D4,{})}),f.jsx(Qe,{path:"/gamified-classroom",element:f.jsx(_4,{})}),f.jsx(Qe,{path:"/mental-health-support",element:f.jsx(M4,{})}),f.jsx(Qe,{path:"/skill-progress-tracking",element:f.jsx(N4,{})}),f.jsx(Qe,{path:"/attendance-report",element:f.jsx(U4,{})}),f.jsx(Qe,{path:"/revision-planner",element:f.jsx(Q4,{})}),f.jsx(Qe,{path:"/ai-smart-login",element:f.jsx(xS,{})}),f.jsx(Qe,{path:"*",element:f.jsx(d3,{})})]})})})}Iy.createRoot(document.getElementById("root")).render(f.jsx(_.StrictMode,{children:f.jsx($5,{})}));
