"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){return function(t){var n=d(t.components);return a.createElement(e,r({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=i,f=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(44996),p=n(39960),l=["components"],c={id:"react-native-android",title:"React Native - Manual Android Setup",sidebar_label:"Manual Android Setup"},s=void 0,d={unversionedId:"getting-started/react-native-android",id:"getting-started/react-native-android",title:"React Native - Manual Android Setup",description:"The information within this page is meant for people manually adding Flipper to a React Native 0.62+ app.",source:"@site/../docs/getting-started/react-native-android.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native-android",permalink:"/docs/getting-started/react-native-android",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native-android.mdx",tags:[],version:"current",frontMatter:{id:"react-native-android",title:"React Native - Manual Android Setup",sidebar_label:"Manual Android Setup"},sidebar:"main",previous:{title:"Automatic Setup",permalink:"/docs/getting-started/react-native"},next:{title:"Manual iOS Setup",permalink:"/docs/getting-started/react-native-ios"}},u={},m=[{value:"Dependencies",id:"dependencies",level:2},{value:"Application Setup",id:"application-setup",level:2},{value:"Further Steps",id:"further-steps",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The information within this page is meant for people manually adding Flipper to a React Native 0.62+ app.\nThis should only be necessary if you have an existing app that cannot be upgraded with the ",(0,r.mdx)("a",{parentName:"p",href:"https://reactnative.dev/docs/upgrading"},"React Native Upgrade tool"),".")),(0,r.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,r.mdx)("p",null,"Flipper is distributed via Maven Central: add the dependencies to your ",(0,r.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.mdx)("p",null,"You should also explicitly depend on ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/soloader"},"SoLoader`")," instead of relying on transitive dependency resolution, which is getting deprecated with Gradle 5."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  mavenCentral()\n}\n\ndependencies {\n  debugImplementation('com.facebook.flipper:flipper:0.35.0') {\n    exclude group:'com.facebook.fbjni'\n  }\n\n  debugImplementation('com.facebook.flipper:flipper-network-plugin:0.35.0') {\n    exclude group:'com.facebook.flipper'\n  }\n}\n")),(0,r.mdx)("p",null,"These exclusions are currently necessary to avoid some clashes with FBJNI shared libraries."),(0,r.mdx)("h2",{id:"application-setup"},"Application Setup"),(0,r.mdx)("p",null,"For maximum flexibility, it's recommended you move the Flipper initialization to a separate class that lives in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"debug/")," folder, so that Flipper code never gets referenced in a release build."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import android.content.Context;\nimport com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.android.utils.FlipperUtils;\nimport com.facebook.flipper.core.FlipperClient;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.react.ReactInstanceManager;\nimport okhttp3.OkHttpClient;\n\npublic class ReactNativeFlipper {\n  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {\n    if (FlipperUtils.shouldEnableFlipper(context)) {\n      final FlipperClient client = AndroidFlipperClient.getInstance(context);\n\n      client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"Note that this only enables the Layout Inspector plugin. For details of more plugins, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/6f627f684bb6506a677c9632b2710e4a541690a9/template/android/app/src/debug/java/com/helloworld/ReactNativeFlipper.java"},"React Native template"),"."),(0,r.mdx)("p",null,"In your ",(0,r.mdx)("inlineCode",{parentName:"p"},"Application")," implementation, call the static method using reflection. This gives us a lot of flexibility, but can be quite noisy.\nAlternatively, recreate an empty ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReactNativeFlipper")," class in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"release/")," folder, so you can call into the method directly."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApplication extends Application implements ReactApplication {\n  // ...\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, /* native exopackage */ false);\n    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());\n  }\n\n  /**\n   * Loads Flipper in React Native templates. Call this in the onCreate method with something like\n   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());\n   *\n   * @param context\n   * @param reactInstanceManager\n   */\n  private static void initializeFlipper(\n      Context context, ReactInstanceManager reactInstanceManager) {\n    if (BuildConfig.DEBUG) {\n      try {\n        /*\n         We use reflection here to pick up the class that initializes\n         Flipper, since Flipper library is not available in release mode\n        */\n        Class<?> aClass = Class.forName("com.example.ReactNativeFlipper");\n        aClass\n            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)\n            .invoke(null, context, reactInstanceManager);\n      } catch (ClassNotFoundException e) {\n        e.printStackTrace();\n      } catch (NoSuchMethodException e) {\n        e.printStackTrace();\n      } catch (IllegalAccessException e) {\n        e.printStackTrace();\n      } catch (InvocationTargetException e) {\n        e.printStackTrace();\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"further-steps"},"Further Steps"),(0,r.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, take a look at the ",(0,r.mdx)(p.default,{to:(0,o.default)("/docs/tutorial/react-native"),mdxType:"Link"},"Building a React Native Plugin")," tutorial!"))}g.isMDXComponent=!0}}]);