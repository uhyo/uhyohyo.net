!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=7)}([function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return U}),n.d(t,"c",function(){return M});var r={},o=[],i=[];function a(e,t){var n,a,s,l,c=i;for(l=arguments.length;l-- >2;)o.push(arguments[l]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((a=o.pop())&&void 0!==a.pop)for(l=a.length;l--;)o.push(a[l]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&n?c[c.length-1]+=a:c===i?c=[a]:c.push(a),n=s;var u=new function(){};return u.nodeName=e,u.children=c,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(u),u}function s(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(r.debounceRendering||l)(f)}function f(){var e,t=u;for(u=[];e=t.pop();)e._dirty&&z(e)}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function h(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===c.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,a):e.removeEventListener(t,v,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function v(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var g=[],w=0,y=!1,x=!1;function _(){for(var e;e=g.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,r,o,i){w++||(y=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var a=C(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--w||(x=!1,i||_()),a}function C(e,t,n,r,o){var i=e,a=y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),S(e,!0))),i.__preactattr_=!0,i;var s,l,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,c=h(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!r||o._component)?(L(o,c,3,n,r),e=o.base):(i&&!s&&(R(i),e=a=null),o=O(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),L(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,S(a,!1)));return e}(e,t,n,r);if(y="svg"===c||"foreignObject"!==c&&y,c=String(c),(!e||!p(e,c))&&(s=c,(l=y?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),S(e,!0)}var u=i.firstChild,d=i.__preactattr_,f=t.children;if(null==d){d=i.__preactattr_={};for(var v=i.attributes,g=v.length;g--;)d[v[g].name]=v[g].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(e,t,n,r,o){var i,a,s,l,c,u=e.childNodes,d=[],f={},h=0,b=0,v=u.length,g=0,w=t?t.length:0;if(0!==v)for(var y=0;y<v;y++){var x=u[y],_=x.__preactattr_,k=w&&_?x._component?x._component.__key:_.key:null;null!=k?(h++,f[k]=x):(_||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(d[g++]=x)}if(0!==w)for(var y=0;y<w;y++){l=t[y],c=null;var k=l.key;if(null!=k)h&&void 0!==f[k]&&(c=f[k],f[k]=void 0,h--);else if(!c&&b<g)for(i=b;i<g;i++)if(void 0!==d[i]&&(E=a=d[i],O=o,"string"==typeof(j=l)||"number"==typeof j?void 0!==E.splitText:"string"==typeof j.nodeName?!E._componentConstructor&&p(E,j.nodeName):O||E._componentConstructor===j.nodeName)){c=a,d[i]=void 0,i===g-1&&g--,i===b&&b++;break}c=C(c,l,n,r),s=u[y],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?m(s):e.insertBefore(c,s))}var E,j,O;if(h)for(var y in f)void 0!==f[y]&&S(f[y],!1);for(;b<=g;)void 0!==(c=d[g--])&&S(c,!1)}(i,f,n,r,x||null!=d.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||b(e,r,n[r],n[r]=void 0,y);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||b(e,r,n[r],n[r]=t[r],y)}(i,t.attributes,d),y=a,i}function S(e,t){var n=e._component;n?R(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),E(e))}function E(e){for(e=e.lastChild;e;){var t=e.previousSibling;S(e,!0),e=t}}var j={};function O(e,t,n){var r,o=j[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):((r=new U(t,n)).constructor=e,r.render=N),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function N(e,t,n){return this.constructor(e,n)}function L(e,t,n,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?d(e):z(e,1,i)),e.__ref&&e.__ref(e))}function z(e,t,n,o){if(!e._disable){var i,a,l,c=e.props,u=e.state,d=e.context,f=e.prevProps||c,p=e.prevState||u,m=e.prevContext||d,b=e.base,v=e.nextBase,y=b||v,x=e._component,C=!1;if(b&&(e.props=f,e.state=p,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,u,d)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(c,u,d),e.props=c,e.state=u,e.context=d),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){i=e.render(c,u,d),e.getChildContext&&(d=s(s({},d),e.getChildContext()));var E,j,N=i&&i.nodeName;if("function"==typeof N){var U=h(i);(a=x)&&a.constructor===N&&U.key==a.__key?L(a,U,1,d,!1):(E=a,e._component=a=O(N,U,d),a.nextBase=a.nextBase||v,a._parentComponent=e,L(a,U,0,d,!1),z(a,1,n,!0)),j=a.base}else l=y,(E=x)&&(l=e._component=null),(y||1===t)&&(l&&(l._component=null),j=k(l,i,d,n||!b,y&&y.parentNode,!0));if(y&&j!==y&&a!==x){var M=y.parentNode;M&&j!==M&&(M.replaceChild(j,y),E||(y._component=null,S(y,!1)))}if(E&&R(E),e.base=j,j&&!o){for(var I=e,P=e;P=P._parentComponent;)(I=P).base=j;j._component=I,j._componentConstructor=I.constructor}}if(!b||n?g.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,p,m),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);w||o||_()}}function R(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?R(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,m(t),function(e){var t=e.constructor.name;(j[t]||(j[t]=[])).push(e)}(e),E(t)),e.__ref&&e.__ref(null)}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function M(e,t,n){return k(n,e,{},!1,t,!1)}s(U.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=s({},n)),s(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),d(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),z(this,2)},render:function(){}})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,c=0,u=[],d=n(12);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=l||(l=b(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var r=n(0),o=n(4),i=n.n(o);t.a=class extends r.a{render(){const{additionalClass:e,children:t,disabled:n,onClick:o}=this.props;return Object(r.b)("button",{className:i.a.button+(e?` ${e}`:""),disabled:n,onClick:o},t)}}},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";t.a=function({icons:e,width:t,zoom:n}){const r=e.length,o=Math.max(...e.map(e=>e.width))*n,i=Math.max(...e.map(e=>e.height))*n,a=.05*o*n;let s=Math.floor(t/(o+2*a));s<=0&&(s=1,t=o+2*a);const l=(t-s*(o+2*a))/2;return{height:Math.ceil(r/s)*(i+2*a),maxheight:i,maxwidth:o,minareawidth:t,num:s,padding:a,start:l}}},function(e,t,n){"use strict";t.a=class{constructor(e){this.queue=[],this.done=!1,null!=e&&e(this.emit.bind(this),this.end.bind(this),this.emitError.bind(this)).catch(e=>{this.emitError(e)})}emit(e){if(this.done)throw new Error("Cannot add a new value to an ended stream");if(null!=this.waiting){const t=this.waiting;this.waiting=void 0,t({done:!1,value:e})}else this.queue.push(e)}end(){if(this.done=!0,null!=this.waiting){const e=this.waiting;this.waiting=void 0,e({done:!0,value:void 0})}}emitError(e){if(this.err=e,null!=this.waitingErr){const t=this.waitingErr;this.waiting=void 0,t(e)}}[Symbol.asyncIterator](){return this}next(){if(null!=this.err)return Promise.reject(this.err);if(this.queue.length>0){const e=this.queue.pop();return Promise.resolve({done:!1,value:e})}return this.done?Promise.resolve({done:!0,value:void 0}):null!=this.waiting?(console.warn("hi"),Promise.reject(new Error("duplicate next() call"))):new Promise((e,t)=>{this.waiting=e,this.waitingErr=t})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(8),i=(n.n(o),n(9));document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");Object(r.c)(Object(r.b)(i.a,null),e)})},function(e,t,n){"use strict";Symbol?Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")):Symbol={asyncIterator:"______Symbol$asyncIterator"}},function(e,t,n){"use strict";var r=n(0),o=n(10),i=n.n(o),a=n(13),s=n(15),l=n(22),c=n(25),u=n(28),d=n(31),f=n(34),p=n(35),h=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})},m=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator];return t?t.call(e):"function"==typeof __values?__values(e):e[Symbol.iterator]()};t.a=class extends r.a{constructor(e){super(e);const t=document.documentElement.clientWidth<600?.5:1;this.state={icons:[],progress:0,saveLink:null,state:"initial",warning:!0,zoom:t}}render(){const{icons:e,progress:t,saveLink:n,state:o,warning:b,zoom:v}=this.state,g=e=>h(this,void 0,void 0,function*(){this.setState({progress:0,state:"processing"});const t=Object(p.a)(e);try{for(var n,r=m(t);!(n=yield r.next()).done;){const e=yield n.value;null!=e&&("progress"===e.type?this.setState({progress:e.current/e.max,state:"processing"}):"result"===e.type&&this.setState({icons:e.result,state:"result"}))}}catch(e){o={error:e}}finally{try{n&&!n.done&&(i=r.return)&&(yield i.call(r))}finally{if(o)throw o.error}}var o,i});let w;if("result"===o||"saving"===o){const e=e=>{this.setState({zoom:e})};w=Object(r.b)(d.a,{zoom:v,onChange:e})}return Object(r.b)("div",null,b?Object(r.b)(u.a,{onClose:()=>{this.setState({warning:!1})}}):null,"processing"===o||"saving"===o?Object(r.b)(l.a,{value:t,label:"処理中…"}):null,Object(r.b)("div",{className:i.a.tiles},"initial"===o?Object(r.b)(a.a,{label:"ガチャ画像を選択",onSelect:g}):"result"===o?Object(r.b)(a.a,{label:"もう1度ガチャ画像を選択",onSelect:g}):null,"result"===o&&e.length>0?Object(r.b)(c.a,{icons:e,zoom:v,onSaving:e=>h(this,void 0,void 0,function*(){this.setState({progress:0,state:"saving"});try{try{for(var t,n=m(e);!(t=yield n.next()).done;){const e=yield t.value;if(null!=e)if("progress"===e.type)this.setState({progress:e.current/e.max,state:"saving"});else if("end"===e.type){const t=yield Object(f.a)(e.canvas);null!=t?this.setState({saveLink:t,state:"result"}):this.setState({saveLink:null,state:"result"})}}}catch(e){r={error:e}}finally{try{t&&!t.done&&(o=n.return)&&(yield o.call(n))}finally{if(r)throw r.error}}}catch(e){console.error(e),this.setState({saveLink:null,state:"result"})}var r,o})}):null),null!=n?Object(r.b)("p",null,Object(r.b)("a",{href:n,target:"_blank"},"画像をダウンロード")):null,w,"result"===o||"saving"===o?e.length>0?Object(r.b)(s.a,{icons:e,zoom:v}):Object(r.b)("p",null,"ガチャ結果の画像が見つかりませんでした。"):null)}}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n._1qm-miXgCzql3Y-svgbxq {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n}\n",""]),t.locals={tiles:"_1qm-miXgCzql3Y-svgbxq"}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r=n(0),o=n(3);t.a=class extends r.a{render(){const{disabled:e,label:t}=this.props;return Object(r.b)(o.a,{disabled:e,onClick:this.handleClick.bind(this)},t)}handleClick(){const{onSelect:e}=this.props,t=document.createElement("input");t.type="file",t.multiple=!0,t.accept="image/*",t.style.display="none",t.addEventListener("change",()=>{null!=t.files&&e(t.files)},!1),document.body.appendChild(t),t.click()}}},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._34zctl6vkTyEEASND4ab7s {\n  /*\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: available;\n  */\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n\n  font-size: 20px;\n  display: inline-block;\n  border: none;\n  font-weight: bold;\n  text-align: center;\n  margin: 14px;\n  padding: 10px;\n}\n\n.w4d7imcqIsvbD12S2YnNH {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  background-color: #dddddd;\n}\n\n.w4d7imcqIsvbD12S2YnNH:disabled {\n  cursor: default;\n}\n",""]),t.locals={tile:"_34zctl6vkTyEEASND4ab7s",button:"w4d7imcqIsvbD12S2YnNH _34zctl6vkTyEEASND4ab7s"}},function(e,t,n){"use strict";var r=n(0),o=n(16),i=n(5),a=n(17),s=n(20),l=n.n(s);const c=Object(a.a)(class extends r.a{constructor(e){super(e),this.handleClick=(e=>{const{elm:t}=this;null!=t&&(Object(o.b)()?Object(o.a)():Object(o.c)(t))})}render(){const{width:e,icons:t,zoom:n}=this.props,{padding:o,start:a}=Object(i.a)({icons:t,width:e,zoom:n}),s={paddingLeft:`${a}px`,paddingRight:`${a}px`};return Object(r.b)("div",{ref:e=>this.elm=e,className:l.a.wrapper,style:s,onClick:this.handleClick},t.map(e=>{(.1*e.height*n).toFixed(1);const t={margin:`${o}px`};return Object(r.b)("img",{key:String(e.id),style:t,className:l.a.icon,src:e.url,width:n*e.width,height:n*e.height})}))}});t.a=c},function(e,t,n){"use strict";t.b=function(){return null!=document.webkitFullscreenElement||null!=document.mozFullScreenElement||null!=document.fullscreenElement},t.c=function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},t.a=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen&&document.mozCancelFullScreen()}},function(e,t,n){"use strict";t.a=function(e){return class extends r.a{constructor(e){super(e),this.state={height:document.documentElement.clientHeight+20,width:document.documentElement.clientWidth},this.handler=(e=>{this.setState({height:document.documentElement.clientHeight+20,width:document.documentElement.clientWidth})})}render(){const{width:t,height:n}=this.state,o={minHeight:this.state.height,width:this.state.width};return Object(r.b)("div",{className:i.a.screen,style:o},Object(r.b)(e,Object.assign({},this.props,{height:n,width:t})))}componentDidMount(){this.setState({height:document.documentElement.clientHeight+20,width:document.documentElement.clientWidth}),window.addEventListener("resize",this.handler,!1)}componentWillUnmount(){window.removeEventListener("resize",this.handler,!1)}}};var r=n(0),o=n(18),i=n.n(o)},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._3-l2SRObVeo7fHC1cONWcK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n",""]),t.locals={screen:"_3-l2SRObVeo7fHC1cONWcK"}},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._14R_CU6X6SGdLFHZfz0YZu {\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: auto 1 0px;\n          flex: auto 1 0;\n  overflow-x: hidden;\n\n  background-color: #aad7ff;\n  padding-top: 30px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n\nimg.nmNGtazE2fQhSx0K35z5b {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n}\n",""]),t.locals={wrapper:"_14R_CU6X6SGdLFHZfz0YZu",icon:"nmNGtazE2fQhSx0K35z5b"}},function(e,t,n){"use strict";var r=n(0),o=n(23),i=n.n(o),a=n(4),s=n.n(a);t.a=class extends r.a{render(){const{label:e,value:t}=this.props,n=Math.floor(100*t),o=`linear-gradient(to right, #88ee88, #88ee88 ${n}%, transparent ${n}%, transparent), #dddddd`;return Object(r.b)("div",{className:s.a.tile+" "+i.a.progress,style:{background:o}},e)}}},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._3TKWwHc5lQd7LDDvya3xAK {\n  background-color: #dddddd;\n}\n",""]),t.locals={progress:"_3TKWwHc5lQd7LDDvya3xAK"}},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(26);t.a=class extends r.a{render(){return Object(r.b)(o.a,{onClick:()=>{const{icons:e,onSaving:t,zoom:n}=this.props,r=document.documentElement.clientWidth;t(Object(i.a)(this.props.icons,r,n))}},"画像を保存")}}},function(e,t,n){"use strict";t.a=function(e,t,n){const{height:l,maxwidth:c,maxheight:u,minareawidth:d,num:f,padding:p,start:h}=Object(i.a)({icons:e,width:t,zoom:n});return console.log({height:l,maxheight:u,maxwidth:c,minareawidth:d,num:f,padding:p,start:h}),new o.a((t,o,i)=>a(this,void 0,void 0,function*(){const i=window.devicePixelRatio||1,a=document.createElement("canvas");a.width=d*i,a.height=l*i;const m=a.getContext("2d");if(null==m)throw new Error("Cannot get the context.");m.fillStyle=`rgb(${r.a.red}, ${r.a.green}, ${r.a.blue})`,m.fillRect(0,0,a.width,a.height);let b=0,v=0,g=0;for(const r of e){const o=i*(h+p+(c+2*p)*b),a=i*(p+(u+2*p)*v),l=yield s(r.url);m.drawImage(l,o,a,r.width*n*i,r.height*n*i),t({current:g,max:e.length,type:"progress"}),++b>=f&&(b=0,v++),g++}t({canvas:a,type:"end"}),o(),console.log(a)}))};var r=n(27),o=n(6),i=n(5),a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})};function s(e){const t=document.createElement("img");return t.src=e,new Promise((e,n)=>{t.addEventListener("load",()=>{e(t)},!1),t.addEventListener("error",()=>{n(new Error("error while loading image"))},!1)})}},function(e,t,n){"use strict";const r={blue:255,green:215,red:170};t.a=r},function(e,t,n){"use strict";t.a=function({onClose:e}){return Object(r.b)("div",{className:i.a.wrapper},Object(r.b)("ul",null,Object(r.b)("li",null,"複数のスクリーンショットをまとめて選択してください。"),Object(r.b)("li",null,"ガチャ結果ではない画像は無視されます。"),Object(r.b)("li",null,"選択したスクリーンショットが端末から送信されることはありません。"),Object(r.b)("li",null,"動作確認済み環境はPCのChrome, FirefoxとiOS (iPhone6s)です。"),Object(r.b)("li",null,Object(r.b)("strong",null,"生成された画像の利用は自己の責任で行ってください。"))),Object(r.b)("div",null,Object(r.b)(a.a,{additionalClass:i.a.closebutton,onClick:e},"閉じる")))};var r=n(0),o=n(29),i=n.n(o),a=n(3)},function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._25MuDSj7DTICA_h8HRNMlJ {\n  background-color: #ffffdd;\n  margin: 0.8em;\n  padding: 0.3em;\n  font-size: 0.95em;\n}\n\n._31kVCMEQSEfBG2V7xdWypt {\n  background-color: #e0e095;\n  color: #444400;\n}\n",""]),t.locals={wrapper:"_25MuDSj7DTICA_h8HRNMlJ",closebutton:"_31kVCMEQSEfBG2V7xdWypt"}},function(e,t,n){"use strict";var r=n(0),o=n(32),i=n.n(o);t.a=class extends r.a{render(){const{onChange:e,zoom:t}=this.props,n=Math.round(2*Math.log2(t));return Object(r.b)("div",null,Object(r.b)("input",{type:"range",className:i.a.slider,step:1,min:-4,max:4,value:String(n),onInput:t=>{if(null!=e){const n=Number(t.currentTarget.value);e(Math.pow(2,n/2))}}}))}}},function(e,t,n){var r=n(33);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"._3wuzEkS9_bufvnRZppn2wY {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n\n  width: -webkit-fill-available;\n\n  width: -moz-available;\n\n  width: stretch;\n  margin: 14px;\n  border: 1px solid white;\n}\n._3wuzEkS9_bufvnRZppn2wY:focus {\n  outline: none;\n}\n\n._3wuzEkS9_bufvnRZppn2wY::-webkit-slider-runnable-track {\n  background-color: #dddddd;\n  height: 1.2em;\n\n  border: none;\n  border-radius: 0.4em;\n}\n._3wuzEkS9_bufvnRZppn2wY::-moz-range-track {\n  background-color: #dddddd;\n  height: 1.2em;\n\n  border: none;\n  border-radius: 0.4em;\n}\n._3wuzEkS9_bufvnRZppn2wY::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  border: none;\n  width: 2.3em;\n  height: 2.3em;\n  border-radius: 50%;\n  background-color: #4488ff;\n  margin-top: -0.5em;\n}\n._3wuzEkS9_bufvnRZppn2wY::-moz-range-thumb {\n  -moz-appearance: none;\n       appearance: none;\n  border: none;\n  width: 2.3em;\n  height: 2.3em;\n  border-radius: 50%;\n  background-color: #4488ff;\n  margin-top: -0.5em;\n}\n",""]),t.locals={slider:"_3wuzEkS9_bufvnRZppn2wY"}},function(e,t,n){"use strict";t.a=function(e){return r(this,void 0,void 0,function*(){const t=document.createElement("a");if(void 0===t.download)return e.toDataURL("image/png");const n=yield function(e){return null!=e.toBlob?new Promise((t,n)=>{e.toBlob(e=>{if(null==e)return void n(new Error("Could not convert canvas to a Blob"));const r=URL.createObjectURL(e);t(r)},"image/png")}):e.toDataURL?Promise.resolve(e.toDataURL("image/png")):Promise.reject(new Error("cannot convert canvas to URL"))}(e);return t.download="gacha.png",t.target="_blank",t.href=n,t.style.display="none",document.body.appendChild(t),t.click(),null})};var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})}},function(e,t,n){"use strict";t.a=function(e){return new o.a((t,n,o)=>s(this,void 0,void 0,function*(){const o=Array.from(e);o.sort((e,t)=>e.lastModified-t.lastModified);const s=yield Promise.all(o.map(e=>Object(r.a)(e))),c=s.filter(e=>null!=e),u=new a.a,d=[];let f=0;for(const e of c){const n=yield u.run(e);++f<c.length&&t({current:f,max:c.length,type:"progress"});for(const e of n.result){const t=yield Object(i.a)(n.image,e);d.push(Object.assign({url:t},e,{id:l++}))}}t({result:d,type:"result"}),u.terminate(),n()}))};var r=n(36),o=n(6),i=n(37),a=n(38),s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})};let l=1},function(e,t,n){"use strict";t.a=function(e){const t=URL.createObjectURL(e),n=document.createElement("img");return n.src=t,new Promise((e,t)=>{n.addEventListener("load",()=>{e(n)}),n.addEventListener("error",t=>{console.error(t),e(null)})})}},function(e,t,n){"use strict";t.a=function(e,t){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");if(null==r)throw new Error("Canvas Error");return r.drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),new Promise(e=>{if(document.createElement("img"),n.toBlob)n.toBlob(t=>{const n=URL.createObjectURL(t);e(n)},"image/png");else{const t=n.toDataURL("image/png");e(t)}})}},function(e,t,n){"use strict";var r=n(39),o=n.n(r);t.a=class{constructor(){this.worker=new o.a}run(e){const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");if(null==n)throw new Error("Could not get a context");n.drawImage(e,0,0);const r=n.getImageData(0,0,t.width,t.height);return this.worker.postMessage(r,[r.data.buffer]),new Promise((e,n)=>{this.worker.onmessage=(n=>{const r=()=>{};this.worker.onmessage=r,this.worker.onerror=r;const o=n.data,{result:i}=o;e({image:t,result:i})}),this.worker.onerror=n})}terminate(){this.worker.postMessage("end")}}},function(e,t,n){e.exports=function(){return new Worker(n.p+"0e7c97bfca7e7ad5bfcf.worker.js")}}]);