
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([1],{381:function(e,t,n){e.exports=n(382)},382:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(21),u=r(s),i=n(9),o=r(i),l=n(10),a=r(l),c=n(22),d=r(c),h=n(23),f=r(h),_=n(6),p=r(_),m=n(383),v=r(m),y=function(e){function t(){return(0,o.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return p.default.createElement("html",null,p.default.createElement(m.Head,null,p.default.createElement("title",null,"Awesome Potatoes"),p.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),p.default.createElement("script",{src:"https://cdn.auth0.com/js/lock/10.5/lock.min.js"})),p.default.createElement("body",{className:"custom_class"},this.props.customValue,p.default.createElement(m.Main,null),p.default.createElement(m.NextScript,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks}}}]),t}(v.default);t.default=y},383:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return t?"/"===e?"/index.js":e+"/index.js":e}Object.defineProperty(t,"__esModule",{value:!0}),t.NextScript=t.Main=t.Head=void 0;var u=n(100),i=r(u),o=n(21),l=r(o),a=n(9),c=r(a),d=n(10),h=r(d),f=n(22),_=r(f),p=n(23),m=r(p),v=n(6),y=r(v),S=n(1),k=r(S),g=n(384),x=r(g),E=n(385),C=r(E),P=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,h.default)(t,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return y.default.createElement("html",null,y.default.createElement(T,null),y.default.createElement("body",null,y.default.createElement(j,null),y.default.createElement(R,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,C.default)()}}}]),t}(v.Component);P.childContextTypes={_documentProps:k.default.any},t.default=P;var T=t.Head=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,h.default)(t,[{key:"getChunkPreloadLink",value:function(e){var t=this.context._documentProps.__NEXT_DATA__,n=t.buildStats,r=t.assetPrefix,s=t.buildId,u=n?n[e].hash:s;return y.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+u+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,s=n.buildId;return t.map(function(e){return y.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+s+"/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,t=e.head,n=e.styles,r=e.__NEXT_DATA__,u=r.pathname,i=r.buildId,o=r.assetPrefix,l=r.nextExport,a=s(u,l);return y.default.createElement("head",this.props,y.default.createElement("link",{rel:"preload",href:o+"/_next/"+i+"/page"+a,as:"script"}),y.default.createElement("link",{rel:"preload",href:o+"/_next/"+i+"/page/_error/index.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),(t||[]).map(function(e,t){return y.default.cloneElement(e,{key:t})}),n||null,this.props.children)}}]),t}(v.Component);T.contextTypes={_documentProps:k.default.any};var j=t.Main=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.context._documentProps,t=e.html,n=e.errorHtml,r=this.props.className;return y.default.createElement("div",{className:r},y.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}}),y.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(v.Component);j.propTypes={className:k.default.string},j.contextTypes={_documentProps:k.default.any};var R=t.NextScript=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,h.default)(t,[{key:"getChunkScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.context._documentProps.__NEXT_DATA__,r=n.buildStats,s=n.assetPrefix,u=n.buildId,o=r?r[e].hash:u;return y.default.createElement("script",(0,i.default)({key:e,type:"text/javascript",src:s+"/_next/"+o+"/"+e},t))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,s=n.buildId;return y.default.createElement("div",null,t.map(function(e){return y.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:r+"/_next/"+s+"/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,t=e.staticMarkup,n=e.__NEXT_DATA__,r=e.chunks,u=n.pathname,i=n.nextExport,o=n.buildId,l=n.assetPrefix,a=s(u,i);return n.chunks=r,y.default.createElement("div",null,t?null:y.default.createElement("script",{dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,x.default)(n)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),y.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+u,type:"text/javascript",src:l+"/_next/"+o+"/page"+a}),y.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:l+"/_next/"+o+"/page/_error/index.js"}),t?null:this.getDynamicChunks(),t?null:this.getScripts())}}]),t}(v.Component);R.contextTypes={_documentProps:k.default.any}},384:function(e,t,n){"use strict";function r(e){return u[e]}function s(e){return o[e]}var u={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},i=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(i,r)};var o={"\u2028":"\\u2028","\u2029":"\\u2029"},l=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(l,s)}},385:function(e,t,n){e.exports=n(386)},386:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=(0,h.flush)(),t=[],n=!0,r=!1,s=void 0;try{for(var u,i=(0,a.default)(e);!(n=(u=i.next()).done);n=!0){var l=(0,o.default)(u.value,2),c=l[0],f=l[1];t.push(d.default.createElement("style",{id:"__"+c,key:"__"+c,dangerouslySetInnerHTML:{__html:f}}))}}catch(e){r=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}return t}function u(){var e=(0,h.flush)(),t="",n=!0,r=!1,s=void 0;try{for(var u,i=(0,a.default)(e);!(n=(u=i.next()).done);n=!0){var l=(0,o.default)(u.value,2);t+='<style id="__'+l[0]+'">'+l[1]+"</style>"}}catch(e){r=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}return t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(99),o=r(i),l=n(128),a=r(l);t.default=s,t.flushToHTML=u;var c=n(6),d=r(c),h=n(387)},387:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=x.cssRules();return x.flush(),new i.default(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(388),i=r(u),o=n(99),l=r(o),a=n(21),c=r(a),d=n(9),h=r(d),f=n(10),_=r(f),p=n(22),m=r(p),v=n(23),y=r(v);t.flush=s;var S=n(6),k=n(394),g=r(k),x=new g.default,E=function(e){function t(){return(0,h.default)(this,t),(0,m.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,_.default)(t,[{key:"componentWillMount",value:function(){x.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){x.update(this.props,e)}},{key:"componentWillUnmount",value:function(){x.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=(0,l.default)(e,2),n=t[0],r=t[1];return x.computeId(n,r)}).join(" ")}}]),t}(S.Component);t.default=E},388:function(e,t,n){e.exports={default:n(389),__esModule:!0}},389:function(e,t,n){n(97),n(50),n(58),n(390),n(391),n(392),n(393),e.exports=n(8).Map},390:function(e,t,n){"use strict";var r=n(211),s=n(148);e.exports=n(212)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(s(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(s(this,"Map"),0===e?0:e,t)}},r,!0)},391:function(e,t,n){var r=n(15);r(r.P+r.R,"Map",{toJSON:n(213)("Map")})},392:function(e,t,n){n(214)("Map")},393:function(e,t,n){n(215)("Map")},394:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(395),i=r(u),o=n(9),l=r(o),a=n(10),c=r(a),d=n(398),h=r(d),f=n(399),_=r(f),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,u=void 0!==s&&s,i=t.isBrowser,o=void 0===i?"undefined"!=typeof window:i;(0,l.default)(this,e),this._sheet=r||new _.default({name:"styled-jsx",optimizeForSpeed:u}),this._sheet.inject(),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,c.default)(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,i.default)(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)return void(this._instancesCounts[r]+=1);var u=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});u.length>0&&(this._indices[r]=u,this._instancesCounts[r]=1)}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e),r=n.styleId;if(s(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var u=this._fromServer&&this._fromServer[r];u?(u.parentNode.removeChild(u),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?(0,i.default)(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat((0,i.default)(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),s=t+r;return e[s]||(e[s]="jsx-"+(0,h.default)(t+"-"+r)),e[s]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=p},395:function(e,t,n){e.exports={default:n(396),__esModule:!0}},396:function(e,t,n){n(397),e.exports=n(8).Object.keys},397:function(e,t,n){var r=n(61),s=n(77);n(145)("keys",function(){return function(e){return s(r(e))}})},398:function(e,t){e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},399:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),i=r(u),o=n(10),l=r(o),a=e.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,o=void 0===u?a:u,l=t.isBrowser,d=void 0===l?"undefined"!=typeof window:l;(0,i.default)(this,e),s(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",s("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,l.default)(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(c(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];s(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(!this._isBrowser)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(c(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var u=document.head||document.getElementsByTagName("head")[0];return n?u.insertBefore(r,n):u.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();t.default=d}).call(t,n(52))}},[381]);
            return { page: comp.default }
          })
        