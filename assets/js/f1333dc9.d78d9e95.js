"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,c=u["".concat(s,".").concat(m)]||u[m]||k[m]||r;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,l={unversionedId:"api/interfaces/IapIosSk2.IosModulePropsSk2",id:"api/interfaces/IapIosSk2.IosModulePropsSk2",title:"IapIosSk2.IosModulePropsSk2",description:"react-native-iap / Exports / IapIosSk2 / IosModulePropsSk2",source:"@site/docs/api/interfaces/IapIosSk2.IosModulePropsSk2.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IapIosSk2.IosModulePropsSk2",permalink:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/interfaces/IapIosSk2.IosModulePropsSk2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IapIos.IosModuleProps",permalink:"/docs/api/interfaces/IapIos.IosModuleProps"},next:{title:"IosModuleProps",permalink:"/docs/api/interfaces/IosModuleProps"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:"buyProduct",id:"buyproduct",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"buyPromotedProduct",id:"buypromotedproduct",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"clearProducts",id:"clearproducts",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"clearTransaction",id:"cleartransaction",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"disable",id:"disable",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"finishTransaction",id:"finishtransaction",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"getAvailableItems",id:"getavailableitems",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"getItems",id:"getitems",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"getPendingTransactions",id:"getpendingtransactions",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"presentCodeRedemptionSheet",id:"presentcoderedemptionsheet",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"promotedProduct",id:"promotedproduct",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"Methods",id:"methods-1",level:2},{value:"addListener",id:"addlistener",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"currentEntitlement",id:"currententitlement",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"endConnection",id:"endconnection",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"initConnection",id:"initconnection",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"isAvailable",id:"isavailable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"isEligibleForIntroOffer",id:"iseligibleforintrooffer",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"latestTransaction",id:"latesttransaction",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"removeListeners",id:"removelisteners",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"subscriptionStatus",id:"subscriptionstatus",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"sync",id:"sync",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-20",level:4}],p={toc:d};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/IapIosSk2"},"IapIosSk2")," / IosModulePropsSk2"),(0,i.kt)("h1",{id:"interface-iosmodulepropssk2"},"Interface: IosModulePropsSk2"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/IapIosSk2"},"IapIosSk2"),".IosModulePropsSk2"),(0,i.kt)("p",null,"Common interface for all native modules (iOS \u2014 AppStore, Android \u2014 PlayStore and Amazon)."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},(0,i.kt)("inlineCode",{parentName:"a"},"NativeModuleProps"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IosModulePropsSk2"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#buyproduct"},"buyProduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#buypromotedproduct"},"buyPromotedProduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#clearproducts"},"clearProducts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#cleartransaction"},"clearTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#disable"},"disable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#finishtransaction"},"finishTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#getavailableitems"},"getAvailableItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#getitems"},"getItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#getpendingtransactions"},"getPendingTransactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#presentcoderedemptionsheet"},"presentCodeRedemptionSheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#promotedproduct"},"promotedProduct"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#addlistener"},"addListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#currententitlement"},"currentEntitlement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#endconnection"},"endConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#initconnection"},"initConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#isavailable"},"isAvailable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#iseligibleforintrooffer"},"isEligibleForIntroOffer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#latesttransaction"},"latestTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#removelisteners"},"removeListeners")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#subscriptionstatus"},"subscriptionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2#sync"},"sync"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"buyproduct"},"buyProduct"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buyProduct"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/IapIosSk2#buyproduct"},(0,i.kt)("inlineCode",{parentName:"a"},"BuyProduct"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L47"},"modules/iosSk2.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buypromotedproduct"},"buyPromotedProduct"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buyPromotedProduct"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"buyPromotedProduct")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L51"},"modules/iosSk2.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clearproducts"},"clearProducts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"clearProducts"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"clearProducts")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L49"},"modules/iosSk2.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cleartransaction"},"clearTransaction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"clearTransaction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"clearTransaction")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L48"},"modules/iosSk2.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"disable"},"disable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"disable"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L55"},"modules/iosSk2.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"finishtransaction"},"finishTransaction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"finishTransaction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"finishTransaction")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L52"},"modules/iosSk2.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getavailableitems"},"getAvailableItems"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getAvailableItems"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"getAvailableItems")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L46"},"modules/iosSk2.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getitems"},"getItems"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getItems"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"getItems")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L45"},"modules/iosSk2.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpendingtransactions"},"getPendingTransactions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getPendingTransactions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"getPendingTransactions")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L53"},"modules/iosSk2.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"presentcoderedemptionsheet"},"presentCodeRedemptionSheet"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"presentCodeRedemptionSheet"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"presentCodeRedemptionSheet")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L54"},"modules/iosSk2.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"promotedproduct"},"promotedProduct"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"promotedProduct"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"promotedProduct")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L50"},"modules/iosSk2.ts:50")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"addlistener"},"addListener"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addListener"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"eventType"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"addListener for NativeEventEmitter"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#addlistener"},"addListener")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/common.ts#L12"},"modules/common.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"currententitlement"},"currentEntitlement"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"currentEntitlement"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sku")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L41"},"modules/iosSk2.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endconnection"},"endConnection"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"endConnection"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Required method to end the payment provider connection"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#endconnection"},"endConnection")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/common.ts#L9"},"modules/common.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initconnection"},"initConnection"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initConnection"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Required method to start a payment provider connection"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#initconnection"},"initConnection")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/common.ts#L6"},"modules/common.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isavailable"},"isAvailable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isAvailable"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L39"},"modules/iosSk2.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iseligibleforintrooffer"},"isEligibleForIntroOffer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isEligibleForIntroOffer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"groupID"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"groupID")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),">"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L43"},"modules/iosSk2.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"latesttransaction"},"latestTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"latestTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sku")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L40"},"modules/iosSk2.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removelisteners"},"removeListeners"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeListeners"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"count"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"removeListeners for NativeEventEmitter"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#removelisteners"},"removeListeners")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/common.ts#L15"},"modules/common.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscriptionstatus"},"subscriptionStatus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"subscriptionStatus"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ProductStatus"),"[]",">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sku")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ProductStatus"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L42"},"modules/iosSk2.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sync"},"sync"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sync"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/7892850/src/modules/iosSk2.ts#L44"},"modules/iosSk2.ts:44")))}k.isMDXComponent=!0}}]);