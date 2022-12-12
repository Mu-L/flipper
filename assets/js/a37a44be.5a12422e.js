"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6190,6033],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>s});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),s=function(e){return function(t){var n=d(t.components);return i.createElement(e,r({},t,{components:n}))}},d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=o,f=s["".concat(a,".").concat(c)]||s[c]||m[c]||r;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31879:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=n(44996),l=n(39960),p=n(65488),u=n(85162),s=["components"],d={},c=void 0,m={type:"mdx",permalink:"/docs/plugins/inspector/setup",source:"@site/src/embedded-pages/docs/plugins/inspector/setup.mdx",description:"To use the Layout Inspector plugin, you need to add the plugin to your Flipper client instance.",frontMatter:{}},f=[{value:"Android",id:"android",level:2},{value:"Standard Android view only",id:"standard-android-view-only",level:3},{value:"With Litho Support",id:"with-litho-support",level:3},{value:"Blocking fullscreen views (Android only)",id:"blocking-fullscreen-views-android-only",level:3},{value:"Blocking empty view groups (Android only)",id:"blocking-empty-view-groups-android-only",level:3},{value:"iOS",id:"ios",level:2},{value:"Standard UIView Only",id:"standard-uiview-only",level:3},{value:"With ComponentKit Support",id:"with-componentkit-support",level:3}],h={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"To use the ",(0,r.mdx)(l.default,{to:(0,a.default)("/docs/features/plugins/inspector"),mdxType:"Link"},"Layout Inspector plugin"),", you need to add the plugin to your Flipper client instance."),(0,r.mdx)("h2",{id:"android"},"Android"),(0,r.mdx)("h3",{id:"standard-android-view-only"},"Standard Android view only"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,r.mdx)("h3",{id:"with-litho-support"},"With Litho Support"),(0,r.mdx)("p",null,"Litho support is provided via an optional plugin."),(0,r.mdx)("p",null,"You also need to compile in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"litho-annotations")," package, as Flipper reflects on them at runtime. So ensure to not just include them as ",(0,r.mdx)("inlineCode",{parentName:"p"},"compileOnly")," in your gradle configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-litho-plugin:0.176.0'\n  debugImplementation 'com.facebook.litho:litho-annotations:0.19.0'\n  // ...\n}\n")),(0,r.mdx)("p",null,"If you want to enable Litho support in the layout inspector, you need to augment the descriptor with Litho-specific settings and add some addition dependencies."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.litho.config.ComponentsConfiguration;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.flipper.plugins.litho.LithoFlipperDescriptors;\n\n// Instead of hard-coding this setting, it's a good practice to tie\n// this to a BuildConfig flag, that you only enable for debug builds\n// of your application.\nComponentsConfiguration.isDebugModeEnabled = true;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n// This adds Litho capabilities to the layout inspector.\nLithoFlipperDescriptors.add(descriptorMapping);\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,r.mdx)("h3",{id:"blocking-fullscreen-views-android-only"},"Blocking fullscreen views (Android only)"),(0,r.mdx)("p",null,"There is an issue that if you have a view that occupies a big part of the screen but draws nothing, and its Z-position is higher than your main content, then selecting view/component through the Layout Inspector doesn't function as you intended. This is because it always hits that transparent view, therefore, you need to manually navigate to the view you need: this is time-consuming and should not be necessary."),(0,r.mdx)("p",null,"Add the following tag to your view to skip it from Flipper's view picker. The view is still shown in the layout hierarchy but is selected while using the view picker:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"view.setTag(R.id.flipper_skip_view_traversal, true);\n")),(0,r.mdx)("h3",{id:"blocking-empty-view-groups-android-only"},"Blocking empty view groups (Android only)"),(0,r.mdx)("p",null,"If you have a ViewGroup that only occasionally has visible children, you may find it helpful to block its traversal when it's empty or has no visible children. For example, you might have a FragmentContainerView that currently has no visible fragment."),(0,r.mdx)("p",null,"Add the following tag to your view group to skip it from Flipper's view picker only when it has zero children, or none of its children are currently visible. The views will still be shown in the layout hierarchy, but they will not be selected while using the view picker."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"viewGroup.setTag(R.id.flipper_skip_empty_view_group_traversal, true);\n")),(0,r.mdx)("h2",{id:"ios"},"iOS"),(0,r.mdx)("h3",{id:"standard-uiview-only"},"Standard UIView Only"),(0,r.mdx)("p",null,"To debug layout using Flipper, add the following pod:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version\n")),(0,r.mdx)("p",null,"Once you have added the pod, initialise the plugin and add it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," as follows."),(0,r.mdx)(p.default,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,r.mdx)(u.default,{value:"ios",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n\nSKDescriptorMapper *mapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:context.application withDescriptorMapper:mapper]];\n"))),(0,r.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))),(0,r.mdx)("h3",{id:"with-componentkit-support"},"With ComponentKit Support"),(0,r.mdx)("p",null,"If you want to enable ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/componentkit"},"ComponentKit support")," in the Layout Inspector, you need to add ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitLayoutComponentKitSupport")," to your Podfile:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version\n")),(0,r.mdx)("p",null,"Once you have added the pod you will then need to augment the descriptor with Componentkit-specific settings as shown below."),(0,r.mdx)(p.default,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,r.mdx)(u.default,{value:"ios",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n\nSKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n[client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                           withDescriptorMapper: layoutDescriptorMapper]];\n"))),(0,r.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nFlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))))}g.isMDXComponent=!0},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(67294),o=n(86010);const r="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",className:(0,o.default)(r,a),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(83117),o=n(67294),r=n(86010),a=n(72389),l=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,a=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),k=x.tabGroupChoices,D=x.setTabGroupChoices,N=(0,o.useState)(w),T=N[0],M=N[1],O=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var L=k[h];null!=L&&L!==T&&v.some((function(e){return e.value===L}))&&M(L)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),i=v[n].value;i!==T&&(C(t),M(i),null!=h&&D(h,String(i)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,o=O.indexOf(e.currentTarget)+1;n=null!=(i=O[o])?i:O[0];break;case"ArrowLeft":var r,a=O.indexOf(e.currentTarget)-1;n=null!=(r=O[a])?r:O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.default)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},g)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:P,onClick:P},a,{className:(0,r.default)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),a?(0,o.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,a.default)();return o.createElement(c,(0,i.Z)({key:String(t)},e))}},79207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=n(31879),l=["components"],p={id:"inspector",title:"Layout Plugin Setup",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/layout/docs/setup.mdx"},u=void 0,s={unversionedId:"setup/plugins/inspector",id:"setup/plugins/inspector",title:"Layout Plugin Setup",description:"",source:"@site/../docs/setup/plugins/inspector.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/inspector",permalink:"/docs/setup/plugins/inspector",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/layout/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"inspector",title:"Layout Plugin Setup",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/layout/docs/setup.mdx"},sidebar:"main",previous:{title:"Images",permalink:"/docs/setup/plugins/fresco"},next:{title:"LeakCanary",permalink:"/docs/setup/plugins/leak-canary"}},d={},c=[],m={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);