"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1361,6908],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>l,withMDXComponents:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){return function(r){var t=l(r.components);return n.createElement(e,i({},r,{components:t}))}},l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74588:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>l,default:()=>d});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),a=t(44996),s=["components"],c={},p=void 0,u={type:"mdx",permalink:"/docs/plugins/preferences/overview",source:"@site/src/embedded-pages/docs/plugins/preferences/overview.mdx"},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Easily inspect and modify the data contained within your app's shared preferences."),(0,i.mdx)("img",{alt:"Shared Preferences Plugin",src:(0,a.default)("img/shared-preferences.png")}),(0,i.mdx)("p",null,"All changes to the given shared preference file will automatically appear in Flipper. You may also edit the values in Flipper and have them synced to your device. This can be done by clicking on the value of the specific key you wish to edit, editing the value and then pressing enter."))}d.isMDXComponent=!0},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>o})},44996:(e,r,t)=>{t.r(r),t.d(r,{useBaseUrlUtils:()=>i,default:()=>a});var n=t(52263),o=t(13919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,p=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(s)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return p?e+u:u}(i,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},84490:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>l,default:()=>d});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),a=t(74588),s=["components"],c={id:"preferences",title:"Shared Preferences Viewer Plugin",sidebar_label:"Shared Preferences Viewer",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/shared_preferences/docs/overview.mdx"},p=void 0,u={unversionedId:"features/plugins/preferences",id:"features/plugins/preferences",isDocsHomePage:!1,title:"Shared Preferences Viewer Plugin",description:"\u2192 See setup instructions for the Shared Preferences Viewer plugin",source:"@site/../docs/features/plugins/preferences.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/preferences",permalink:"/docs/features/plugins/preferences",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/shared_preferences/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"preferences",title:"Shared Preferences Viewer Plugin",sidebar_label:"Shared Preferences Viewer",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/shared_preferences/docs/overview.mdx"},sidebar:"features",previous:{title:"Network",permalink:"/docs/features/plugins/network"},next:{title:"Sandbox",permalink:"/docs/features/plugins/sandbox"}},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"\u2192 ",(0,i.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/preferences"},"See setup instructions for the Shared Preferences Viewer plugin")),(0,i.mdx)(a.default,{mdxType:"Article"}))}d.isMDXComponent=!0}}]);