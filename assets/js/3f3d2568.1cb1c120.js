"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3541,1339],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16695:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>f,toc:()=>m});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=r(44996),i=r(39960),u=r(74866),p=r(85162),s=["components"],c={},d=void 0,f={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx",description:"To use the Network plugin, you need to add the plugin to your Flipper client instance.",frontMatter:{}},m=[{value:"Android",id:"android",level:2},{value:"OkHttp Integration",id:"okhttp-integration",level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",level:3},{value:"iOS",id:"ios",level:2},{value:"Protobuf + Retrofit Setup",id:"protobuf--retrofit-setup",level:2},{value:"Gradle Dependencies",id:"gradle-dependencies",level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",level:3}],b={toc:m};function g(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"To use the ",(0,a.mdx)(i.default,{to:(0,l.default)("/docs/features/plugins/network"),mdxType:"Link"},"Network plugin"),", you need to add the plugin to your Flipper client instance."),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact, as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.256.0'\n}\n")),(0,a.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to the client:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,a.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,a.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack, as shown in the following snippet:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,a.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,a.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,a.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,a.mdx)("p",null,"Then call ",(0,a.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,a.mdx)("h2",{id:"ios"},"iOS"),(0,a.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Initialize the plugin in the following way by updating AppDelegate.m:"),(0,a.mdx)(u.default,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(p.default,{value:"objc",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n"))),(0,a.mdx)(p.default,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n")))),(0,a.mdx)("h2",{id:"protobuf--retrofit-setup"},"Protobuf + Retrofit Setup"),(0,a.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,a.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, as shown in the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n\n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,a.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,a.mdx)("p",null,"If you have a Retrofit service interface ",(0,a.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types then at the time you create your implementation, call the plugin with your ",(0,a.mdx)("inlineCode",{parentName:"p"},"baseURL")," and service class, as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}g.isMDXComponent=!0},85162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),o=r(86010);const a="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.default)(a,l),hidden:r},t)}},74866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(83117),o=r(67294),a=r(86010),l=r(12466),i=r(76775),u=r(91980),p=r(67392),s=r(50012);function c(e){return function(e){var t,r;return null!=(t=null==(r=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,a=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function b(e){var t,r,n,a,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,p=e.groupId,c=d(e),b=(0,o.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:c})})),g=b[0],v=b[1],h=m({queryString:u,groupId:p}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,s.Nk)(t),n=r[0],a=r[1],[n,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),x=k[0],N=k[1],P=function(){var e=null!=y?y:x;return f({value:e,tabValues:c})?e:null}();return(0,o.useLayoutEffect)((function(){P&&v(P)}),[P]),{selectedValue:g,selectValue:(0,o.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),N(e)}),[w,N,c]),tabValues:c}}var g=r(72389);const v="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,p=e.tabValues,s=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=s.indexOf(t),n=p[r].value;n!==i&&(c(t),u(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,o=s.indexOf(e.currentTarget)+1;r=null!=(n=s[o])?n:s[0];break;case"ArrowLeft":var a,l=s.indexOf(e.currentTarget)-1;r=null!=(a=s[l])?a:s[s.length-1]}null==(t=r)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":r},t)},p.map((function(e){var t=e.value,r=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},l,{className:(0,a.default)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function w(e){var t=e.lazy,r=e.children,n=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=a.find((function(e){return e.props.value===n}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=b(e);return o.createElement("div",{className:(0,a.default)("tabs-container",v)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function x(e){var t=(0,g.default)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},98945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=r(16695),i=["components"],u={id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},p=void 0,s={unversionedId:"setup/plugins/network",id:"setup/plugins/network",title:"Network Plugin Setup",description:"",source:"@site/../docs/setup/plugins/network.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/network",permalink:"/docs/setup/plugins/network",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},sidebar:"main",previous:{title:"Navigation",permalink:"/docs/setup/plugins/navigation"},next:{title:"Shared Preferences Viewer",permalink:"/docs/setup/plugins/preferences"}},c={},d=[],f={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.default,{mdxType:"Article"}))}m.isMDXComponent=!0}}]);