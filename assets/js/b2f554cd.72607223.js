"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Flipper 2021 Roadmap Update","metadata":{"permalink":"/blog/2021/10/14/roadmap","source":"@site/blog/2021-10-14-roadmap.md","title":"Flipper 2021 Roadmap Update","description":"What is next for Flipper?","date":"2021-10-14T00:00:00.000Z","formattedDate":"October 14, 2021","tags":[{"label":"flipper","permalink":"/blog/tags/flipper"},{"label":"react-native","permalink":"/blog/tags/react-native"}],"readingTime":3.425,"truncated":true,"authors":[{"name":"Michel Weststrate","title":"Facebook Engineer, working on Flipper","url":"https://github.com/mweststrate","imageURL":"https://avatars.githubusercontent.com/u/1820292?s=400&u=dd67df7c370110b3d4b5a22247cc08f73389bcaf&v=4"}]},"content":"Over the last year, the Flipper adoption in the open source community has doubled, and for many React Native developers Flipper has become the default debugging tool.\\nAs the community continues to grow, we believe it\u2019s important to share updates about our plans. \\n\\n\x3c!--truncate--\x3e\\n\\n## A short look back\\n\\nDuring the first half of 2021, we have introduced support for connecting to physical iOS devices by leveraging [idb](https://fbidb.io/).\\nWe have also introduced the [Sandy plugin architecture](https://fbflipper.com/docs/extending/sandy-migration), which simplifies the creation of plugins and provides a richer set of UI components by adopting [Ant Design](https://ant.design/components/overview/).\\nThe new architecture is strongly typed, easily unit testable and allows us to [process and render data much faster](https://youtu.be/WCs09c1B1Lk), which has (at Facebook at least) significantly increased the up-time of Flipper.\\nThe underlying mechanism has been open sourced as the [`flipper-data-source`](https://www.npmjs.com/package/flipper-data-source) package.\\nAnd last but not least, we introduced dark mode support.\\n\\n## What is ahead?\\n\\nOur focus for Flipper for Q4 2021 is to remove friction and make it easier to onboard new targets. \\nThis is because, in many instances, Flipper isn\'t used just to debug mobile apps, but also to debug many of our other products, such as native and Electron-based desktop applications, and devices like Oculus, Portal or feature phones.\\n\\nLooking ahead, we plan to:\\n\\n* **Move away from RSocket**. RSocket is a protocol that served us well for encrypted communication between Flipper and clients. However, especially in the React Native world, the dependencies it brings has been a continuous source of build issues with any new iOS update. We are now testing internally a version of Flipper that uses secured WebSocket connections instead. The resulting simplified dependency chain should prevent a lot of current and future build issues.\\n* **Introduce a headless Flipper version**. The Flipper team is currently investing in decoupling all network, OS and device interaction logic from the Flipper front end. This will make it possible to run Flipper as a headless service, and embed the UI in any web-based stack. By default Flipper will remain an Electron app, but this change introduces a lot of new possibilities: It will be possible to run Flipper headless on CI systems to collect data during test runs. It will be possible to embed the Flipper UI inside IDEs to reduce context switching. To achieve this, the Flipper code base will be split into many smaller packages.\\n* **Improve the Flipper marketplace**. We are working on an improved Flipper plugin marketplace, to help promote plugins, and create a better understanding of what plugins do, and how they are supported.\\n* **Create a reference WebSocket implementation**. For Native mobile apps and React Native, there are standard packages to register plugins and connect to the Flipper desktop application. Although several WebSocket implementations exist to do the same for web apps, we don\'t have a standardized SDK and example project for integrating web applications with Flipper. By changing this we\'ll hope to make it easy for front-end engineers to leverage Flipper.\\n* **Add support for React Native Windows**. \'nough said.\\n\\n## Flipper needs you!\\n\\nFlipper is maintained by a small team at Facebook, yet serving over a hundred plugins and dozens of different targets. Our team\'s goal is to support Flipper as a plugin-based platform for which we maintain the infrastructure.\\nWe don\'t typically invest in individual plugins, but we do love plugin improvements. For example, the support for mocking network requests (on Android) was entirely contributed by the community (thanks [James Harmon](https://github.com/bizzguy)!). As was Protobuf support (thanks [Harold Martin](https://github.com/hbmartin)!).\\n\\nFor that reason, we\'ve marked many requests in the issue tracker as [PR Welcome](https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22).\\nContributing changes should be as simple as cloning the [repository](https://github.com/facebook/flipper) and running `yarn && yarn start` in the `desktop/` folder.\\n\\nInvesting in debugging tools, both generic ones or just for specific apps, will benefit iteration speed.\\nAnd we hope Flipper will make it as hassle free as possible to create your debugging tools.\\nFor an overview of Flipper for React Native, and why and how to build your own plugins, we recommend checking out the [Flipper: The Extensible DevTool Platform for React Native](https://youtu.be/WltZTn3ODW4) talk.\\n\\nHappy debugging!"}]}')}}]);