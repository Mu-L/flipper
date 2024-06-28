"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6033],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){return function(t){var n=c(t.components);return r.createElement(e,a({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31879:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(44996),l=n(39960),p=n(74866),u=n(85162),s=["components"],c={},d=void 0,m={type:"mdx",permalink:"/docs/plugins/inspector/setup",source:"@site/src/embedded-pages/docs/plugins/inspector/setup.mdx",description:"To use the Layout Inspector plugin, you need to add the plugin to your Flipper client instance.",frontMatter:{}},f=[{value:"Android",id:"android",level:2},{value:"Standard Android view only",id:"standard-android-view-only",level:3},{value:"With Litho Support",id:"with-litho-support",level:3},{value:"Blocking fullscreen views (Android only)",id:"blocking-fullscreen-views-android-only",level:3},{value:"Blocking empty view groups (Android only)",id:"blocking-empty-view-groups-android-only",level:3},{value:"iOS",id:"ios",level:2},{value:"Standard UIView Only",id:"standard-uiview-only",level:3},{value:"With ComponentKit Support",id:"with-componentkit-support",level:3}],h={toc:f};function v(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"To use the ",(0,a.mdx)(l.default,{to:(0,o.default)("/docs/features/plugins/inspector"),mdxType:"Link"},"Layout Inspector plugin"),", you need to add the plugin to your Flipper client instance."),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("h3",{id:"standard-android-view-only"},"Standard Android view only"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,a.mdx)("h3",{id:"with-litho-support"},"With Litho Support"),(0,a.mdx)("p",null,"Litho support is provided via an optional plugin."),(0,a.mdx)("p",null,"You also need to compile in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"litho-annotations")," package, as Flipper reflects on them at runtime. So ensure to not just include them as ",(0,a.mdx)("inlineCode",{parentName:"p"},"compileOnly")," in your gradle configuration:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-litho-plugin:0.256.0'\n  debugImplementation 'com.facebook.litho:litho-annotations:0.19.0'\n  // ...\n}\n")),(0,a.mdx)("p",null,"If you want to enable Litho support in the layout inspector, you need to augment the descriptor with Litho-specific settings and add some addition dependencies."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.litho.config.ComponentsConfiguration;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.flipper.plugins.litho.LithoFlipperDescriptors;\n\n// Instead of hard-coding this setting, it's a good practice to tie\n// this to a BuildConfig flag, that you only enable for debug builds\n// of your application.\nComponentsConfiguration.isDebugModeEnabled = true;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n// This adds Litho capabilities to the layout inspector.\nLithoFlipperDescriptors.add(descriptorMapping);\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,a.mdx)("h3",{id:"blocking-fullscreen-views-android-only"},"Blocking fullscreen views (Android only)"),(0,a.mdx)("p",null,"There is an issue that if you have a view that occupies a big part of the screen but draws nothing, and its Z-position is higher than your main content, then selecting view/component through the Layout Inspector doesn't function as you intended. This is because it always hits that transparent view, therefore, you need to manually navigate to the view you need: this is time-consuming and should not be necessary."),(0,a.mdx)("p",null,"Add the following tag to your view to skip it from Flipper's view picker. The view is still shown in the layout hierarchy but is selected while using the view picker:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"view.setTag(R.id.flipper_skip_view_traversal, true);\n")),(0,a.mdx)("h3",{id:"blocking-empty-view-groups-android-only"},"Blocking empty view groups (Android only)"),(0,a.mdx)("p",null,"If you have a ViewGroup that only occasionally has visible children, you may find it helpful to block its traversal when it's empty or has no visible children. For example, you might have a FragmentContainerView that currently has no visible fragment."),(0,a.mdx)("p",null,"Add the following tag to your view group to skip it from Flipper's view picker only when it has zero children, or none of its children are currently visible. The views will still be shown in the layout hierarchy, but they will not be selected while using the view picker."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"viewGroup.setTag(R.id.flipper_skip_empty_view_group_traversal, true);\n")),(0,a.mdx)("h2",{id:"ios"},"iOS"),(0,a.mdx)("h3",{id:"standard-uiview-only"},"Standard UIView Only"),(0,a.mdx)("p",null,"To debug layout using Flipper, add the following pod:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Once you have added the pod, initialise the plugin and add it to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," as follows."),(0,a.mdx)(p.default,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(u.default,{value:"ios",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n\nSKDescriptorMapper *mapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:context.application withDescriptorMapper:mapper]];\n"))),(0,a.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))),(0,a.mdx)("h3",{id:"with-componentkit-support"},"With ComponentKit Support"),(0,a.mdx)("p",null,"If you want to enable ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/componentkit"},"ComponentKit support")," in the Layout Inspector, you need to add ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitLayoutComponentKitSupport")," to your Podfile:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Once you have added the pod you will then need to augment the descriptor with Componentkit-specific settings as shown below."),(0,a.mdx)(p.default,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(u.default,{value:"ios",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n\nSKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n[client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                           withDescriptorMapper: layoutDescriptorMapper]];\n"))),(0,a.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nFlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))))}v.isMDXComponent=!0},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),i=n(86010);const a="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.default)(a,o),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(83117),i=n(67294),a=n(86010),o=n(12466),l=n(76775),p=n(91980),u=n(67392),s=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,p._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function h(e){var t,n,r,a,o=e.defaultValue,l=e.queryString,p=void 0!==l&&l,u=e.groupId,c=d(e),h=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:c})})),v=h[0],g=h[1],y=f({queryString:p,groupId:u}),b=y[0],w=y[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,s.Nk)(t),r=n[0],a=n[1],[r,(0,i.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=x[0],D=x[1],N=function(){var e=null!=b?b:k;return m({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:v,selectValue:(0,i.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),D(e)}),[w,D,c]),tabValues:c}}var v=n(72389);const g="tabList__CuJ",y="tabItem_LNqP";function b(e){var t=e.className,n=e.block,l=e.selectedValue,p=e.selectValue,u=e.tabValues,s=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==l&&(c(t),p(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,i=s.indexOf(e.currentTarget)+1;n=null!=(r=s[i])?r:s[0];break;case"ArrowLeft":var a,o=s.indexOf(e.currentTarget)-1;n=null!=(a=s[o])?a:s[s.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},o,{className:(0,a.default)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=a.find((function(e){return e.props.value===r}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function x(e){var t=h(e);return i.createElement("div",{className:(0,a.default)("tabs-container",g)},i.createElement(b,(0,r.Z)({},e,t)),i.createElement(w,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.default)();return i.createElement(x,(0,r.Z)({key:String(t)},e))}}}]);