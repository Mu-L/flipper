"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5081],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>f,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20752:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>s,toc:()=>p,default:()=>d});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(44996),c=["components"],l={},u=void 0,s={type:"mdx",permalink:"/docs/plugins/fresco/overview",source:"@site/src/embedded-pages/docs/plugins/fresco/overview.mdx"},p=[{value:"Cache Inspector",id:"cache-inspector",children:[],level:2},{value:"Attribution",id:"attribution",children:[],level:2},{value:"Leak Tracking",id:"leak-tracking",children:[],level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The images plugin allows you to inspect what images were fetched, where they are\ncoming from and selectively clear caches. Currently, the plugin supports\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/fresco/"},"Fresco")," as backend."),(0,o.mdx)("img",{alt:"Images plugin",src:(0,i.default)("img/images-plugin.png")}),(0,o.mdx)("h2",{id:"cache-inspector"},"Cache Inspector"),(0,o.mdx)("p",null,"Images are grouped by the different caching layers they are stored in. The current\nfill rate of the cache is shown and you can choose to selectively clear caches."),(0,o.mdx)("h2",{id:"attribution"},"Attribution"),(0,o.mdx)("p",null,"Images can be annotated with attributes that can help to determine the context in\nwhich an image was loaded and displayed. You can use that information to filter\nby a particular surface or only inspect images that are in the critical path\nof your application, for instance during cold start."),(0,o.mdx)("h2",{id:"leak-tracking"},"Leak Tracking"),(0,o.mdx)("p",null,"Dealing with large resources can require special APIs to be used that circumvent\nusual garbage collection. The plugin allows tracking ",(0,o.mdx)("inlineCode",{parentName:"p"},"CloseableReference"),"s for\nFresco on Android that weren't properly closed, which can help you improve\nthe performance of your app."))}d.isMDXComponent=!0},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var n=r(52263),a=r(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}}}]);