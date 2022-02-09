"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5670],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(t),u=i,f=s["".concat(o,".").concat(u)]||s[u]||c[u]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56077:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>g});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],l={id:"dev-setup",title:"Development Setup"},d=void 0,p={unversionedId:"extending/dev-setup",id:"extending/dev-setup",isDocsHomePage:!1,title:"Development Setup",description:"IDE",source:"@site/../docs/extending/dev-setup.mdx",sourceDirName:"extending",slug:"/extending/dev-setup",permalink:"/docs/extending/dev-setup",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/dev-setup.mdx",tags:[],version:"current",frontMatter:{id:"dev-setup",title:"Development Setup"},sidebar:"extending",previous:{title:"Publishing",permalink:"/docs/tutorial/js-publishing"},next:{title:"Dynamically Loading Plugins",permalink:"/docs/extending/loading-custom-plugins"}},s=[{value:"IDE",id:"ide",children:[{value:"TypeScript",id:"typescript",children:[],level:3},{value:"Android (Java)",id:"android-java",children:[],level:3}],level:2},{value:"Running Flipper from source (recommended)",id:"running-flipper-from-source-recommended",children:[{value:"Startup options",id:"startup-options",children:[],level:3}],level:2},{value:"Guidelines for writing TypeScript",id:"guidelines-for-writing-typescript",children:[],level:2},{value:"Submitting a diff / PR",id:"submitting-a-diff--pr",children:[],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},u=m("OssOnly"),c=m("FbInternalOnly"),f={toc:s};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"ide"},"IDE"),(0,a.mdx)(u,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"When developing Flipper plugins we recommend the following IDEs:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"TypeScript (for Flipper Desktop (plugins)): Visual Studio Code"),(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},'Install the "ESLint" (dbaeumer.vscode-eslint) extension from marketplace to enable linting'),(0,a.mdx)("li",{parentName:"ol"},'Install the "Prettier" (esbenp.prettier-vscode) extension to enable automatic code-formatting'),(0,a.mdx)("li",{parentName:"ol"},"If for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Android Studio (for Android plugins)")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"XCode (for iOS plugins)")))),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("h3",{id:"typescript"},"TypeScript"),(0,a.mdx)("p",null,'Flipper Desktop is written in TypeScript.\nUsing our internal "VSCode @ FB" as IDE is strongly recommended (',(0,a.mdx)("inlineCode",{parentName:"p"},"code-fb"),")."),(0,a.mdx)("p",null,"Make sure to install and enable extensions ",(0,a.mdx)("inlineCode",{parentName:"p"},"[FB-Internal] ESLint Diagnostics")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"[FB-Internal] Prettier"),".\nIf for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."),(0,a.mdx)("h3",{id:"android-java"},"Android (Java)"),(0,a.mdx)("p",null,"IntelliJ is the recommended platform. Focussing on a flipper-enabled app should include the flipper modules as expected."),(0,a.mdx)("p",null,"If you don't have an fbsource checkout (e.g. Whatsapp Team), you can open Android Studio and import project: ",(0,a.mdx)("inlineCode",{parentName:"p"},"fbsource/xplat/sonar")),(0,a.mdx)("p",null,"If you're having gradle (or other) problems, make sure you're on the latest Android Studio version.")),(0,a.mdx)("h2",{id:"running-flipper-from-source-recommended"},"Running Flipper from source (recommended)"),(0,a.mdx)("p",null,"When developing Flipper plugins we strongly recommend to run from Flipper itself from source as well, as this yields several benefits:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Automatic transpilation and bundling of loaded plugins: ES6, TypeScript, JSX."),(0,a.mdx)("li",{parentName:"ul"},"Automatic refresh after code changes."),(0,a.mdx)("li",{parentName:"ul"},"React and Redux Dev Tools."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/extending/debugging"},"Debugging")," using Chrome Dev Tools or Visual Studio Code."),(0,a.mdx)("li",{parentName:"ul"},"Additional debug information like React warnings and performance metrics.")),(0,a.mdx)("p",null,"Prerequisites for Flipper development build:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"node \u2265 14"),(0,a.mdx)("li",{parentName:"ul"},"yarn \u2265 1.5"),(0,a.mdx)("li",{parentName:"ul"},"git"),(0,a.mdx)("li",{parentName:"ul"},"watchman")),(0,a.mdx)("p",null,"To run Flipper Desktop from source:"),(0,a.mdx)(u,{mdxType:"OssOnly"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"git clone https://github.com/facebook/flipper.git\ncd flipper/desktop\nyarn\nyarn start\n")),(0,a.mdx)("p",null,"Tip: start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh.")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Note: All these steps must be run on a local machine (e.g. laptop) and development cannot be done on a Dev Server or OnDemand as Flipper is a desktop application."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"fbclone fbsource --sparse tools/scm/sparse/xplat/flipper-js\ncd ~/fbsource/xplat/sonar/desktop\nyarn\nyarn start\n")),(0,a.mdx)("p",null,"A note on sparse profiles: We have a minimal profile for working with the Flipper JavaScript\nfiles in ",(0,a.mdx)("inlineCode",{parentName:"p"},"fbsource")," for plugin developers. This will drastically reduce the size of your checkout, but\nwon't include the files necessary to, for instance, build and work on mobile apps."),(0,a.mdx)("p",null,"If you have an existing sparse checkout, you can add the Flipper profile with"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"hg sparse enable tools/scm/sparse/xplat/flipper-js\n")),(0,a.mdx)("p",null,"Tip: start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh."),(0,a.mdx)("p",null,"Tip: start wih ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start --public-build")," to preview changes for public builds."),(0,a.mdx)("p",null,"Use VSCode to hack on Flipper.\nTo make sure ESLint and Prettier are applied correctly, make sure to open either ",(0,a.mdx)("inlineCode",{parentName:"p"},"sonar")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"sonar/desktop")," as workspace folder in VSCode: ",(0,a.mdx)("inlineCode",{parentName:"p"},"code-fb ~/fbsource/xplat/sonar"),".")),(0,a.mdx)("h3",{id:"startup-options"},"Startup options"),(0,a.mdx)("p",null,"You can use several options to customise development build instance. They can be provided as command-line args or environment variables.\nYou can check all of them by executing ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start --help"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'yarn start [args]\n\nOptions:\n  --embedded-plugins    Enables embedding of plugins into Flipper bundle. If it\n                        disabled then only installed plugins are loaded. The\n                        flag is enabled by default. Env var\n                        FLIPPER_NO_EMBEDDED_PLUGINS is equivalent to the\n                        command-line option "--no-embedded-plugins".   [boolean]\n  --fast-refresh        Enable Fast Refresh - quick reload of UI component\n                        changes without restarting Flipper. The flag is disabled\n                        by default. Env var FLIPPER_FAST_REFRESH is equivalent\n                        to the command-line option "--fast-refresh".   [boolean]\n  --plugin-auto-update  [FB-internal only] Enable plugin auto-updates. The flag\n                        is disabled by default in dev mode. Env var\n                        FLIPPER_NO_PLUGIN_AUTO_UPDATE is equivalent to the\n                        command-line option "--no-plugin-auto-update"  [boolean]\n  --enabled-plugins     Load only specified plugins and skip loading rest. This\n                        is useful when you are developing only one or few\n                        plugins. Plugins to load can be specified as a\n                        comma-separated list with either plugin id or name used\n                        as identifier, e.g. "--enabled-plugins\n                        network,inspector". The flag is not provided by default\n                        which means that all plugins loaded.             [array]\n  --open-dev-tools      Open Dev Tools window on startup. The flag is disabled\n                        by default. Env var FLIPPER_OPEN_DEV_TOOLS is equivalent\n                        to the command-line option "--open-dev-tools". If\n                        "FLIPPER_UPDATE_DEV_TOOLS=true" is set additionally,\n                        Flipper will try to update the dev tools from the play\n                        store.                                         [boolean]\n  --dev-server-port     Dev server port. 3000 by default. Env var "PORT=3001" is\n                        equivalent to the command-line option "--dev-server-port\n                        3001".                          [number] [default: 3000]\n  --version             Show version number                            [boolean]\n  --help                Show help                                      [boolean]\n')),(0,a.mdx)("p",null,"You can also create file ",(0,a.mdx)("inlineCode",{parentName:"p"},".env")," in ",(0,a.mdx)("inlineCode",{parentName:"p"},"desktop")," subfolder and specify any environment variables to load them automatically on ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start")," so you don't need to pass command-line args every time, e.g.:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"FLIPPER_FAST_REFRESH=true\nFLIPPER_OPEN_DEV_TOOLS=true\nFLIPPER_ENABLED_PLUGINS=flipper-messages,network,inspector\n")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"To start Flipper against a specific OnDemand instance, set FB_ONDEMAND flag, e.g: ",(0,a.mdx)("inlineCode",{parentName:"p"},"FB_ONDEMAND=34435.od yarn start"))),(0,a.mdx)("h2",{id:"guidelines-for-writing-typescript"},"Guidelines for writing TypeScript"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install 3rd party type definitions as dev dependency (e.g. ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn add @types/lodash --dev"),")")),(0,a.mdx)("h2",{id:"submitting-a-diff--pr"},"Submitting a diff / PR"),(0,a.mdx)("p",null,"Make sure your new functionality is covered with tests, and run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn test")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn test --watch")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"desktop/")," directory to verify that they pass."),(0,a.mdx)("p",null,"See the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/testing"},"testing")," page for more details on writing and running test."),(0,a.mdx)("p",null,"To make sure you don't get any lint/formatting errors, run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn lint")," before submitting your diff. Some errors (especially formatting errors can be auto-fixed by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn fix")))}g.isMDXComponent=!0}}]);