let e,t,n,r,a,i,s;var o,l,c,d,h,u=globalThis,f={},p=f={};function g(){throw Error("setTimeout has not been defined")}function m(){throw Error("clearTimeout has not been defined")}function b(e){if(l===setTimeout)return setTimeout(e,0);if((l===g||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:g}catch(e){l=g}try{c="function"==typeof clearTimeout?clearTimeout:m}catch(e){c=m}}();var w=[],y=!1,v=-1;function I(){y&&d&&(y=!1,d.length?w=d.concat(w):v=-1,w.length&&E())}function E(){if(!y){var e=b(I);y=!0;for(var t=w.length;t;){for(d=w,w=[];++v<t;)d&&d[v].run();v=-1,t=w.length}d=null,y=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===m||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function S(e,t){this.fun=e,this.array=t}function C(){}p.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];w.push(new S(e,t)),1!==w.length||y||b(E)},S.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=C,p.addListener=C,p.once=C,p.off=C,p.removeListener=C,p.removeAllListeners=C,p.emit=C,p.prependListener=C,p.prependOnceListener=C,p.listeners=function(e){return[]},p.binding=function(e){throw Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw Error("process.chdir is not supported")},p.umask=function(){return 0};/**
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
 */const _=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:(a<2048?t[n++]=a>>6|192:((64512&a)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128):t[n++]=a>>12|224,t[n++]=a>>6&63|128),t[n++]=63&a|128)}return t},D=function(e){let t=[],n=0,r=0;for(;n<e.length;){let a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{let i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=a>>2,d=(3&a)<<4|s>>4,h=(15&s)<<2|l>>6,u=63&l;o||(u=64,i||(h=64)),r.push(n[c],n[d],n[h],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):D(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0,s=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==s||null==o)throw new A;let l=a<<2|i>>4;if(r.push(l),64!==s){let e=i<<4&240|s>>2;if(r.push(e),64!==o){let e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O=function(e){let t=_(e);return T.encodeByteArray(t,!0)},k=function(e){return O(e).replace(/\./g,"")},M=function(e){try{return T.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},B=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==u)return u;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,L=()=>{if(void 0===f||void 0===f.env)return;let e=void 0;if(e)return JSON.parse(e)},$=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&M(e[1]);return t&&JSON.parse(t)},P=()=>{try{return B()||L()||$()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},j=()=>{var e;return null===(e=P())||void 0===e?void 0:e.config};/**
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
 */class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function F(){try{return"object"==typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(z,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new x(r,s,n)}}const z=/\{\$([^}]+)}/g;function V(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let a of n){if(!r.includes(a))return!1;let n=e[a],i=t[a];if(U(n)&&U(i)){if(!V(n,i))return!1}else if(n!==i)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function U(e){return null!==e&&"object"==typeof e}function W(e,t=1e3,n=2){let r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}/**
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
 */function q(e){return e&&e._delegate?e._delegate:e}class K{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const G="[DEFAULT]";/**
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
 */class J{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new N;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:G})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);let i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===G?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class Z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new J(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const X=[];(o=h||(h={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const Y={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},Q=h.INFO,ee={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},et=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),a=ee[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class en{constructor(e){this.name=e,this._logLevel=Q,this._logHandler=et,this._userLogHandler=null,X.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const er=(e,t)=>t.some(t=>e instanceof t),ea=new WeakMap,ei=new WeakMap,es=new WeakMap,eo=new WeakMap,el=new WeakMap;let ec={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ei.get(e);if("objectStoreNames"===t)return e.objectStoreNames||es.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ed(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ed(n){var r;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(ed(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&ea.set(t,e)}).catch(()=>{}),el.set(t,e),t}(n);if(eo.has(n))return eo.get(n);let a="function"==typeof(r=n)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(eh(this),e),ed(ea.get(this))}:function(...e){return ed(r.apply(eh(this),e))}:function(e,...t){let n=r.call(eh(this),e,...t);return es.set(n,e.sort?e.sort():[e]),ed(n)}:(r instanceof IDBTransaction&&function(e){if(ei.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});ei.set(e,t)}(r),er(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,ec):r;return a!==n&&(eo.set(n,a),el.set(a,n)),a}const eh=e=>el.get(e);function eu(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let s=indexedDB.open(e,t),o=ed(s);return r&&s.addEventListener("upgradeneeded",e=>{r(ed(s.result),e.oldVersion,e.newVersion,ed(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const ef=["get","getKey","getAll","getAllKeys","count"],ep=["put","add","delete","clear"],eg=new Map;function em(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eg.get(t))return eg.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=ep.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||ef.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return eg.set(t,i),i}ec={...s=ec,get:(e,t,n)=>em(e,t)||s.get(e,t,n),has:(e,t)=>!!em(e,t)||s.has(e,t)};/**
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
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ew="@firebase/app",ey="0.10.11",ev=new en("@firebase/app"),eI="[DEFAULT]",eE={[ew]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eS=new Map,eC=new Map,e_=new Map;function eD(e,t){try{e.container.addComponent(t)}catch(n){ev.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eT(e){let t=e.name;if(e_.has(t))return ev.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e_.set(t,e),eS.values()))eD(n,e);for(let t of eC.values())eD(t,e);return!0}function eA(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const eO=new H("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class ek{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eO.create("app-deleted",{appName:this._name})}}function eM(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:eI,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw eO.create("bad-app-name",{appName:String(a)});if(n||(n=j()),!n)throw eO.create("no-options");let i=eS.get(a);if(i){if(V(n,i.options)&&V(r,i.config))return i;throw eO.create("duplicate-app",{appName:a})}let s=new Z(a);for(let e of e_.values())s.addComponent(e);let o=new ek(n,r,s);return eS.set(a,o),o}function eB(e,t,n){var r;let a=null!==(r=eE[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);let i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${a}" with version "${t}":`];i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ev.warn(e.join(" "));return}eT(new K(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}const eL="firebase-heartbeat-store";let e$=null;function eP(){return e$||(e$=eu("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eL)}catch(e){console.warn(e)}}}).catch(e=>{throw eO.create("idb-open",{originalErrorMessage:e.message})})),e$}async function ej(e){try{let t=(await eP()).transaction(eL),n=await t.objectStore(eL).get(eF(e));return await t.done,n}catch(e){if(e instanceof x)ev.warn(e.message);else{let t=eO.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ev.warn(t.message)}}}async function eN(e,t){try{let n=(await eP()).transaction(eL,"readwrite"),r=n.objectStore(eL);await r.put(t,eF(e)),await n.done}catch(e){if(e instanceof x)ev.warn(e.message);else{let t=eO.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ev.warn(t.message)}}}function eF(e){return`${e.name}!${e.options.appId}`}class eR{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eH(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ex();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){ev.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=ex(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let a of e){let e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),ez(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ez(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=k(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return ev.warn(e),""}}}function ex(){return new Date().toISOString().substring(0,10)}class eH{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!F()&&R().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await ej(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eN(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eN(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ez(e){return k(JSON.stringify({version:2,heartbeats:e})).length}eT(new K("platform-logger",e=>new eb(e),"PRIVATE")),eT(new K("heartbeat",e=>new eR(e),"PRIVATE")),eB(ew,ey,""),eB(ew,ey,"esm2017"),eB("fire-js",""),/**
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
 */eB("firebase","10.13.2","app");const eV="@firebase/installations",eU="0.6.9",eW=`w:${eU}`,eq="FIS_v2",eK=new H("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eG(e){return e instanceof x&&e.code.includes("request-failed")}/**
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
 */function eJ({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function eZ(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function eX(e,t){let n=(await t.json()).error;return eK.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function eY({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function eQ(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function e0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=eJ(e),a=eY(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={method:"POST",headers:a,body:JSON.stringify({fid:n,authVersion:eq,appId:e.appId,sdkVersion:eW})},o=await eQ(()=>fetch(r,s));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:eZ(e.authToken)}}throw await eX("Create Installation",o)}/**
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
 */function e1(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const e2=/^[cdef][\w-]{21}$/;/**
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
 */function e6(e){return`${e.appName}!${e.appId}`}/**
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
 */const e3=new Map;function e4(e,t){let n=e6(e);e5(n,t),function(e,t){let n=(!e8&&"BroadcastChannel"in self&&((e8=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{e5(e.data.key,e.data.fid)}),e8);n&&n.postMessage({key:e,fid:t}),0===e3.size&&e8&&(e8.close(),e8=null)}(n,t)}function e5(e,t){let n=e3.get(e);if(n)for(let e of n)e(t)}let e8=null;const e9="firebase-installations-store";let e7=null;function te(){return e7||(e7=eu("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(e9)}})),e7}async function tt(e,t){let n=e6(e),r=(await te()).transaction(e9,"readwrite"),a=r.objectStore(e9),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||e4(e,t.fid),t}async function tn(e){let t=e6(e),n=(await te()).transaction(e9,"readwrite");await n.objectStore(e9).delete(t),await n.done}async function tr(e,t){let n=e6(e),r=(await te()).transaction(e9,"readwrite"),a=r.objectStore(e9),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await r.done,s&&(!i||i.fid!==s.fid)&&e4(e,s.fid),s}/**
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
 */async function ta(e){let t;let n=await tr(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(eK.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ti(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ts(e)}:{installationEntry:t}}(e,tl(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return e2.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ti(e,t){try{let n=await e0(e,t);return tt(e.appConfig,n)}catch(n){throw eG(n)&&409===n.customData.serverCode?await tn(e.appConfig):await tt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ts(e){let t=await to(e.appConfig);for(;1===t.registrationStatus;)await e1(100),t=await to(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await ta(e);return n||t}return t}function to(e){return tr(e,e=>{if(!e)throw eK.create("installation-not-found");return tl(e)})}function tl(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function tc({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${eJ(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){let n=eY(e);return n.append("Authorization",`${eq} ${t}`),n}(e,n),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={method:"POST",headers:a,body:JSON.stringify({installation:{sdkVersion:eW,appId:e.appId}})},o=await eQ(()=>fetch(r,s));if(o.ok)return eZ(await o.json());throw await eX("Generate Auth Token",o)}/**
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
 */async function td(e,t=!1){let n;let r=await tr(e.appConfig,r=>{var a;if(!tp(r))throw eK.create("not-registered");let i=r.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return r;if(1===i.requestStatus)return n=th(e,t),r;{if(!navigator.onLine)throw eK.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=tf(e,t),t}});return n?await n:r.authToken}async function th(e,t){let n=await tu(e.appConfig);for(;1===n.authToken.requestStatus;)await e1(100),n=await tu(e.appConfig);let r=n.authToken;return 0===r.requestStatus?td(e,t):r}function tu(e){return tr(e,e=>{var t;if(!tp(e))throw eK.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tf(e,t){try{let n=await tc(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tt(e.appConfig,r),n}catch(n){if(eG(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tn(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tt(e.appConfig,n)}throw n}}function tp(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function tg(e){let{installationEntry:t,registrationPromise:n}=await ta(e);return n?n.catch(console.error):td(e).catch(console.error),t.fid}/**
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
 */async function tm(e,t=!1){return await tb(e),(await td(e,t)).token}async function tb(e){let{registrationPromise:t}=await ta(e);t&&await t}function tw(e){return eK.create("missing-app-config-values",{valueName:e})}/**
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
 */const ty="installations";eT(new K(ty,e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw tw("App Configuration");if(!e.name)throw tw("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tw(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eA(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),eT(new K("installations-internal",e=>{let t=eA(e.getProvider("app").getImmediate(),ty).getImmediate();return{getId:()=>tg(t),getToken:e=>tm(t,e)}},"PRIVATE")),eB(eV,eU),eB(eV,eU,"esm2017");/**
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
 */const tv="analytics",tI="https://www.googletagmanager.com/gtag/js",tE=new en("@firebase/analytics"),tS=new H("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function tC(e){if(!e.startsWith(tI)){let t=tS.create("invalid-gtag-resource",{gtagURL:e});return tE.warn(t.message),""}return e}function t_(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function tD(e,t,n,r,a,i){let s=r[a];try{if(s)await t[s];else{let e=(await t_(n)).find(e=>e.measurementId===a);e&&await t[e.appId]}}catch(e){tE.error(e)}e("config",a,i)}async function tT(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);let r=await t_(n);for(let n of e){let e=r.find(e=>e.measurementId===n),a=e&&t[e.appId];if(a)i.push(a);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(e){tE.error(e)}}const tA=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function tO(e){var t;let{appId:n,apiKey:r}=e,a={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,a);if(200!==s.status&&304!==s.status){let e="";try{let n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw tS.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function tk(e,t=tA,n){let{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw tS.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw tS.create("no-api-key")}let s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tB;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),tM({appId:r,apiKey:a,measurementId:i},s,o,t)}async function tM(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=tA){var i;let{appId:s,measurementId:o}=e;try{await new Promise((e,n)=>{let a=setTimeout(e,Math.max(t-Date.now(),0));r.addEventListener(()=>{clearTimeout(a),n(tS.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return tE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await tO(e);return a.deleteThrottleMetadata(s),t}catch(c){if(!function(e){if(!(e instanceof x)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(a.deleteThrottleMetadata(s),o)return tE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:o};throw c}let t=503===Number(null===(i=null==c?void 0:c.customData)||void 0===i?void 0:i.httpStatus)?W(n,a.intervalMillis,30):W(n,a.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return a.setThrottleMetadata(s,l),tE.debug(`Calling attemptFetch again in ${t} millis`),tM(e,l,r,a)}}class tB{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tL(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}{let a=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:a}))}}/**
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
 */async function t$(){if(!F())return tE.warn(tS.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await R()}catch(e){return tE.warn(tS.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function tP(e,t,a,i,s,o,l){var c;let d=tk(e);d.then(t=>{a[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tE.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tE.error(e)),t.push(d);let h=t$().then(e=>e?i.getId():void 0),[u,f]=await Promise.all([d,h]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(tI)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var n,r;let a;let i=(n="firebase-js-sdk-policy",r={createScriptURL:tC},window.trustedTypes&&(a=window.trustedTypes.createPolicy(n,r)),a),s=document.createElement("script"),o=`${tI}?l=${e}&id=${t}`;s.src=i?null==i?void 0:i.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}(o,u.measurementId),r&&(s("consent","default",r),r=void 0),s("js",new Date);let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",u.measurementId,p),n&&(s("set",n),n=void 0),u.measurementId}/**
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
 */class tj{constructor(e){this.app=e}_delete(){return delete tN[this.app.options.appId],Promise.resolve()}}let tN={},tF=[];const tR={};let tx="dataLayer",tH=!1;const tz="@firebase/analytics",tV="0.10.8";eT(new K(tv,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=tS.create("invalid-analytics-context",{errorInfo:t});tE.warn(n.message)}}();let r=e.options.appId;if(!r)throw tS.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tS.create("no-api-key")}if(null!=tN[r])throw tS.create("already-exists",{id:r});if(!tH){var s,o;let e,t;e=[],Array.isArray(window[tx])?e=window[tx]:window[tx]=e;let{wrappedGtag:n,gtagCore:r}=(s="gtag",t=function(...e){window[tx].push(arguments)},window[s]&&"function"==typeof window[s]&&(t=window[s]),window[s]=(o=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await tT(o,tN,tF,e,n)}else if("config"===e){let[e,n]=t;await tD(o,tN,tF,tR,e,n)}else if("consent"===e){let[e,n]=t;o("consent",e,n)}else if("get"===e){let[e,n,r]=t;o("get",e,n,r)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){tE.error(e)}}),{gtagCore:t,wrappedGtag:window[s]});i=n,a=r,tH=!0}return tN[r]=tP(e,tF,tR,t,a,tx,n),new tj(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),eT(new K("analytics-internal",function(e){try{let t=e.getProvider(tv).getImmediate();return{logEvent:(e,n,r)=>{var a;return a=t,void(a=q(a),tL(i,tN[a.app.options.appId],e,n,r).catch(e=>tE.error(e)))}}}catch(e){throw tS.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),eB(tz,tV),eB(tz,tV,"esm2017"),function(e=function(e=eI){let t=eS.get(e);if(!t&&e===eI&&j())return eM();if(!t)throw eO.create("no-app",{appName:e});return t}()){let t=eA(e=q(e),tv);t.isInitialized()?t.getImmediate():function(e,t={}){let n=eA(e,tv);if(n.isInitialized()){let e=n.getImmediate();if(V(t,n.getOptions()))return e;throw tS.create("already-initialized")}return n.initialize({options:t})}(e)}(eM({apiKey:"AIzaSyC4jAvfMFmx8f6f6zrMZ6BJMOO-OxhbRd0",authDomain:"aliasghernooruddin-c397a.firebaseapp.com",projectId:"aliasghernooruddin-c397a",storageBucket:"aliasghernooruddin-c397a.appspot.com",messagingSenderId:"531466438893",appId:"1:531466438893:web:b2658dbd84ed96db53a4e4",measurementId:"G-EWDGEK3V33"}));
//# sourceMappingURL=index.980a1e1d.js.map
