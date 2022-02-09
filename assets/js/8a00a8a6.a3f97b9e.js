"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4457],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,f=u["".concat(a,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},67438:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>h});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),l=["components"],s={id:"js-setup",title:"Building a Desktop Plugin",sidebar_label:"Desktop Plugin - Setup"},p=void 0,u={unversionedId:"tutorial/js-setup",id:"tutorial/js-setup",isDocsHomePage:!1,title:"Building a Desktop Plugin",description:"Now that we have the native side covered, let's display the data we're sending",source:"@site/../docs/tutorial/js-setup.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-setup",permalink:"/docs/tutorial/js-setup",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-setup.mdx",tags:[],version:"current",frontMatter:{id:"js-setup",title:"Building a Desktop Plugin",sidebar_label:"Desktop Plugin - Setup"},sidebar:"extending",previous:{title:"Building a JavaScript (browser) Plugin",permalink:"/docs/tutorial/javascript"},next:{title:"Desktop Plugin - Table",permalink:"/docs/tutorial/js-table"}},d=[{value:"Scaffolding a new Desktop plugin",id:"scaffolding-a-new-desktop-plugin",children:[],level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},m=c("FbInternalOnly"),f=c("OssOnly"),g={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Now that we have the native side covered, let's display the data we're sending\non the desktop side. "),(0,o.mdx)("img",{alt:"Custom cards UI for our sea mammals plugin",src:(0,a.default)("img/js-custom.png")}),(0,o.mdx)(m,{mdxType:"FbInternalOnly"},"[FB-Only] After scaffolding and starting Flipper from source, no further steps are needed to setup the desktop plugin."),(0,o.mdx)(f,{mdxType:"OssOnly"},(0,o.mdx)("h2",{id:"scaffolding-a-new-desktop-plugin"},"Scaffolding a new Desktop plugin"),(0,o.mdx)("p",null,"A new Flipper Desktop plugin can be scaffolded by running ",(0,o.mdx)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," in the directory where you want to store the plugin sources (Don't run this command inside the Flipper repository itself!).\nBefore running this command, make sure Flipper is closed."),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/FlipperPlugins\ncd ~/FlipperPlugins\nnpx flipper-pkg init\n")),(0,o.mdx)("p",null,"Add the directory to the Flipper watch folder if asked. In this tutorial we will be creating a ",(0,o.mdx)("inlineCode",{parentName:"p"},"client")," plugin. ",(0,o.mdx)("inlineCode",{parentName:"p"},"device")," plugins are only used when creating plugins that ",(0,o.mdx)("em",{parentName:"p"},"don't")," connect to a specific application and are pretty rare."),(0,o.mdx)("p",null,'The tool will ask you to provide "id" and "title" for your plugin. Use "sea-mammals" as "id" and "Sea Mammals" as "title". After that the tool will create two files in the directory: ',(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/index.tsx"),"."),(0,o.mdx)("p",null,"After the process has finished, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn watch")," in the generated directory to start compiling the plugin on the fly. "),(0,o.mdx)("p",null,"Now that our package has been set up, we are ready to build a UI for our plugin. Either by using a standardized table-based plugin, or by creating a custom UI.")),(0,o.mdx)("p",null,"For more background on the generated files and overal plugin structure, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/extending/desktop-plugin-structure"},"Plugin Structure")," page."))}h.isMDXComponent=!0}}]);