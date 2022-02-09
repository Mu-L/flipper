"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7718],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5760:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>f});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),u=["components"],s={id:"index",title:"Features"},l=void 0,p={unversionedId:"features/index",id:"features/index",isDocsHomePage:!1,title:"Features",description:"Flipper itself only provides the architectural platform. What makes it useful are the plugins built on top of it: Logs, Layout Inspector and Network Inspector are all plugins. Plugins can be built very specific to your business logic and the use-cases you have in your app. We are shipping Flipper with a couple of built-in all-purpose plugins, but we encourage you to build your own. Each plugin needs to be enabled individually.",source:"@site/../docs/features/index.mdx",sourceDirName:"features",slug:"/features/index",permalink:"/docs/features/index",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/features/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Features"},sidebar:"features",next:{title:"Share Flipper Data",permalink:"/docs/features/share-flipper-data"}},c=[{value:"Build your own plugin",id:"build-your-own-plugin",children:[],level:2}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Flipper itself only provides the architectural platform. What makes it useful are the plugins built on top of it: ",(0,o.mdx)("a",{parentName:"p",href:"/docs/features/plugins/device-logs"},"Logs"),", ",(0,o.mdx)("a",{parentName:"p",href:"/docs/features/plugins/inspector"},"Layout Inspector")," and ",(0,o.mdx)("a",{parentName:"p",href:"/docs/features/plugins/network"},"Network Inspector")," are all plugins. Plugins can be built very specific to your business logic and the use-cases you have in your app. We are shipping Flipper with a couple of built-in all-purpose plugins, but we encourage you to build your own. Each plugin needs to be enabled individually."),(0,o.mdx)("img",{alt:"Plugins",src:(0,a.default)("img/plugins.png")}),(0,o.mdx)("h2",{id:"build-your-own-plugin"},"Build your own plugin"),(0,o.mdx)("p",null,"The Flipper desktop app and the mobile native SDK establish a connection which is used to send data to and from the device. Flipper does not make any restrictions on what kind of data is being sent. This enables a lot of different use-cases where you want to better understand what is going inside your app. For example you can visualize the state of local caches, events happening or trigger actions on your app from the desktop."),(0,o.mdx)("p",null,"If there is no plugin that does exactly what you want, you can build your own plugin, tailored to your needs. A plugin always consists of the native implementation sending and receiving data and the desktop plugin visualizing data. Learn more on how to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tutorial/intro"},"extend Flipper")," and build your own plugin. The native implementations are written in Java, Objective-C, or C++, the desktop UI is written in React."))}f.isMDXComponent=!0}}]);