"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7640],{5680:(e,i,n)=>{n.d(i,{xA:()=>c,yg:()=>g});var r=n(6540);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function p(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=r.createContext({}),l=function(e){var i=r.useContext(d),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},c=function(e){var i=l(e.components);return r.createElement(d.Provider,{value:i},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},y=r.forwardRef((function(e,i){var n=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),y=t,g=s["".concat(d,".").concat(y)]||s[y]||u[y]||a;return n?r.createElement(g,o(o({ref:i},c),{},{components:n})):r.createElement(g,o({ref:i},c))}));function g(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=y;var p={};for(var d in i)hasOwnProperty.call(i,d)&&(p[d]=i[d]);p.originalType=e,p[s]="string"==typeof e?e:t,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9484:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(8168),t=(n(6540),n(5680));const a={},o=void 0,p={unversionedId:"api/interfaces/SubscriptionIOS",id:"api/interfaces/SubscriptionIOS",title:"SubscriptionIOS",description:"react-native-iap / Exports / SubscriptionIOS",source:"@site/docs/api/interfaces/SubscriptionIOS.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SubscriptionIOS",permalink:"/docs/api/interfaces/SubscriptionIOS",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/api/interfaces/SubscriptionIOS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SubscriptionAndroid",permalink:"/docs/api/interfaces/SubscriptionAndroid"},next:{title:"SubscriptionOffer",permalink:"/docs/api/interfaces/SubscriptionOffer"}},d={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"countryCode",id:"countrycode",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"currency",id:"currency",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"discounts",id:"discounts",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"introductoryPrice",id:"introductoryprice",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"introductoryPriceAsAmountIOS",id:"introductorypriceasamountios",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"introductoryPriceNumberOfPeriodsIOS",id:"introductorypricenumberofperiodsios",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"introductoryPricePaymentModeIOS",id:"introductorypricepaymentmodeios",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"introductoryPriceSubscriptionPeriodIOS",id:"introductorypricesubscriptionperiodios",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"localizedPrice",id:"localizedprice",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"originalPrice",id:"originalprice",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"platform",id:"platform",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"price",id:"price",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"productId",id:"productid",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"productIds",id:"productids",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"subscriptionPeriodNumberIOS",id:"subscriptionperiodnumberios",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"subscriptionPeriodUnitIOS",id:"subscriptionperiodunitios",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"title",id:"title",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-18",level:4}],c={toc:l},s="wrapper";function u(e){let{components:i,...n}=e;return(0,t.yg)(s,(0,r.A)({},c,n,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,t.yg)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / SubscriptionIOS"),(0,t.yg)("h1",{id:"interface-subscriptionios"},"Interface: SubscriptionIOS"),(0,t.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},(0,t.yg)("inlineCode",{parentName:"a"},"ProductCommon"))),(0,t.yg)("p",{parentName:"li"},"\u21b3 ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"SubscriptionIOS"))))),(0,t.yg)("h2",{id:"table-of-contents"},"Table of contents"),(0,t.yg)("h3",{id:"properties"},"Properties"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#countrycode"},"countryCode")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#currency"},"currency")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#description"},"description")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#discounts"},"discounts")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#introductoryprice"},"introductoryPrice")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#introductorypriceasamountios"},"introductoryPriceAsAmountIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#introductorypricenumberofperiodsios"},"introductoryPriceNumberOfPeriodsIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#introductorypricepaymentmodeios"},"introductoryPricePaymentModeIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#introductorypricesubscriptionperiodios"},"introductoryPriceSubscriptionPeriodIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#localizedprice"},"localizedPrice")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#originalprice"},"originalPrice")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#platform"},"platform")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#price"},"price")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#productid"},"productId")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#productids"},"productIds")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#subscriptionperiodnumberios"},"subscriptionPeriodNumberIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#subscriptionperiodunitios"},"subscriptionPeriodUnitIOS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#title"},"title")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionIOS#type"},"type"))),(0,t.yg)("h2",{id:"properties-1"},"Properties"),(0,t.yg)("h3",{id:"countrycode"},"countryCode"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"countryCode"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#countrycode"},"countryCode")),(0,t.yg)("h4",{id:"defined-in"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L64"},"types/index.ts:64")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"currency"},"currency"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"currency"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#currency"},"currency")),(0,t.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L61"},"types/index.ts:61")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"description"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#description"},"description")),(0,t.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L59"},"types/index.ts:59")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"discounts"},"discounts"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"discounts"),": ",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Discount"},(0,t.yg)("inlineCode",{parentName:"a"},"Discount")),"[]"),(0,t.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L197"},"types/index.ts:197")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"introductoryprice"},"introductoryPrice"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"introductoryPrice"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L198"},"types/index.ts:198")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"introductorypriceasamountios"},"introductoryPriceAsAmountIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"introductoryPriceAsAmountIOS"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L199"},"types/index.ts:199")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"introductorypricenumberofperiodsios"},"introductoryPriceNumberOfPeriodsIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"introductoryPriceNumberOfPeriodsIOS"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L205"},"types/index.ts:205")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"introductorypricepaymentmodeios"},"introductoryPricePaymentModeIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"introductoryPricePaymentModeIOS"),": ",(0,t.yg)("inlineCode",{parentName:"p"},'""')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"p"},'"FREETRIAL"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"p"},'"PAYASYOUGO"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"p"},'"PAYUPFRONT"')),(0,t.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L200"},"types/index.ts:200")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"introductorypricesubscriptionperiodios"},"introductoryPriceSubscriptionPeriodIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"introductoryPriceSubscriptionPeriodIOS"),": ",(0,t.yg)("a",{parentName:"p",href:"/docs/api/modules#subscriptioniosperiod"},(0,t.yg)("inlineCode",{parentName:"a"},"SubscriptionIosPeriod"))),(0,t.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L206"},"types/index.ts:206")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"localizedprice"},"localizedPrice"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"localizedPrice"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#localizedprice"},"localizedPrice")),(0,t.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L62"},"types/index.ts:62")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"originalprice"},"originalPrice"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"originalPrice"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#originalprice"},"originalPrice")),(0,t.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L63"},"types/index.ts:63")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"platform"},"platform"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"platform"),": ",(0,t.yg)("a",{parentName:"p",href:"/docs/api/enums/SubscriptionPlatform#ios"},(0,t.yg)("inlineCode",{parentName:"a"},"ios"))),(0,t.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L195"},"types/index.ts:195")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"price"},"price"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"price"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#price"},"price")),(0,t.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L60"},"types/index.ts:60")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"productid"},"productId"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"productId"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#productid"},"productId")),(0,t.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L56"},"types/index.ts:56")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"productids"},"productIds"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"productIds"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,t.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#productids"},"productIds")),(0,t.yg)("h4",{id:"defined-in-14"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L57"},"types/index.ts:57")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"subscriptionperiodnumberios"},"subscriptionPeriodNumberIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"subscriptionPeriodNumberIOS"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"defined-in-15"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L208"},"types/index.ts:208")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"subscriptionperiodunitios"},"subscriptionPeriodUnitIOS"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"subscriptionPeriodUnitIOS"),": ",(0,t.yg)("a",{parentName:"p",href:"/docs/api/modules#subscriptioniosperiod"},(0,t.yg)("inlineCode",{parentName:"a"},"SubscriptionIosPeriod"))),(0,t.yg)("h4",{id:"defined-in-16"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L209"},"types/index.ts:209")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"title"},"title"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"title"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#title"},"title")),(0,t.yg)("h4",{id:"defined-in-17"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L58"},"types/index.ts:58")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"type"},"type"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"type"),": ",(0,t.yg)("inlineCode",{parentName:"p"},'"subs"')),(0,t.yg)("h4",{id:"overrides"},"Overrides"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon"},"ProductCommon"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ProductCommon#type"},"type")),(0,t.yg)("h4",{id:"defined-in-18"},"Defined in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/Vittor-Javidan/react-native-iap/blob/0884909/src/types/index.ts#L196"},"types/index.ts:196")))}u.isMDXComponent=!0}}]);