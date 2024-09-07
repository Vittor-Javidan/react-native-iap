"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6999],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(8168),r=a(6540),o=a(53),i=a(3104),l=a(6347),s=a(7485),u=a(1682),p=a(9466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var f=a(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function A(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function w(e){const t=(0,f.A)();return r.createElement(A,(0,n.A)({key:String(t)},e))}},8663:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(6540);function r(e){let{className:t="adfit",style:a,unit:r,height:o,width:i}=e;return(0,n.useEffect)((()=>{let e=document.createElement("ins"),a=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",a.async="true",a.type="text/javascript",a.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",i.toString()),e.setAttribute("data-ad-height",o.toString()),e.setAttribute("data-ad-unit",r.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(a)}),[]),n.createElement("div",{style:a},n.createElement("div",{className:t}))}},1748:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),r=a(8663);function o(){return n.createElement(r.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},8109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(8168),r=(a(6540),a(5680)),o=a(1470),i=a(9365),l=a(1748);const s={title:"Amazon IAP",sidebar_label:"Amazon IAP",sidebar_position:7},u=void 0,p={unversionedId:"guides/amazon-iap",id:"guides/amazon-iap",title:"Amazon IAP",description:"The guide assumes that react-native-iap is implemented in your app and works with the Play Store without issues. Here are the additional steps to configure Amazon IAP.",source:"@site/docs/guides/amazon-iap.mdx",sourceDirName:"guides",slug:"/guides/amazon-iap",permalink:"/docs/guides/amazon-iap",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/guides/amazon-iap.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Amazon IAP",sidebar_label:"Amazon IAP",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Receipts",permalink:"/docs/guides/receipts"},next:{title:"Troubleshooting",permalink:"/docs/guides/troubleshooting"}},c={},d=[{value:"Add In-App Items for your app",id:"add-in-app-items-for-your-app",level:3},{value:"App configuration",id:"app-configuration",level:3},{value:"Testing in development",id:"testing-in-development",level:2},{value:"Server Validation",id:"server-validation",level:2},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Caveats",id:"caveats",level:2}],m={toc:d},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{mdxType:"AdFitTopFixed"}),(0,r.yg)("h1",{id:"amazon-iap"},"Amazon IAP"),(0,r.yg)("p",null,"The guide assumes that ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-iap")," is implemented in your app and works with the Play Store without issues. Here are the additional steps to configure Amazon IAP."),(0,r.yg)("h3",{id:"add-in-app-items-for-your-app"},"Add In-App Items for your app"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Create "In-App Items" using Amazon Developer portal for your app. Amazon put up detailed instructions at ',(0,r.yg)("a",{parentName:"p",href:"https://developer.amazon.com/docs/in-app-purchasing/iap-create-and-submit-iap-items.html"},"https://developer.amazon.com/docs/in-app-purchasing/iap-create-and-submit-iap-items.html"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add this a call to ",(0,r.yg)("inlineCode",{parentName:"p"},"RNIapActivityListener.registerActivity(this);")," inside your ",(0,r.yg)("inlineCode",{parentName:"p"},"MainActivity"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"onCreate")," method. This is a necessary step only when using Amazon, but adding it will not affect negatively your Google Play Android builds. E.g.:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nimport com.dooboolab.rniap.RNIapActivityListener;\n...\npublic class MainActivity extends ReactActivity {\n    ...\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        //Needed for Amazon IAP\n        RNIapActivityListener.registerActivity(this);\n    }\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Add new ",(0,r.yg)("inlineCode",{parentName:"li"},"SKU")," strings to your ",(0,r.yg)("inlineCode",{parentName:"li"},"Iap.getProducts")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"Iap.getSubscriptions")," calls.")),(0,r.yg)("h3",{id:"app-configuration"},"App configuration"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The current version of Amazon IAP SDK does not play well with R8 optimization. (",(0,r.yg)("a",{parentName:"li",href:"https://developer.amazon.com/docs/in-app-purchasing/iap-obfuscate-the-code.html"},"https://developer.amazon.com/docs/in-app-purchasing/iap-obfuscate-the-code.html"),").")),(0,r.yg)("p",null,"Add the code below in ",(0,r.yg)("inlineCode",{parentName:"p"},"android/app/proguard-rules.pro"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},"+ -dontwarn com.amazon.**\n+ -keep class com.amazon.** {*;}\n+ -keepattributes *Annotation*\n")),(0,r.yg)("h2",{id:"testing-in-development"},"Testing in development"),(0,r.yg)("p",null,"To run the example app, with the amazon provider, run:"),(0,r.yg)(o.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm run android:amazon\n"))),(0,r.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn android:amazon\n"))),(0,r.yg)(i.A,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm run android:amazon\n")))),(0,r.yg)("p",null,"Amazon offers the ",(0,r.yg)("inlineCode",{parentName:"p"},"App Tester")," tool to make In-App purchases testing easier. More information can be found ",(0,r.yg)("a",{parentName:"p",href:"https://developer.amazon.com/docs/in-app-purchasing/iap-app-tester-user-guide.html"},"here"),"."),(0,r.yg)("h2",{id:"server-validation"},"Server Validation"),(0,r.yg)("p",null,"Amazon IAP API supports validation of In-App purchases on a remote server side. More information can be found ",(0,r.yg)("a",{parentName:"p",href:"https://developer.amazon.com/docs/in-app-purchasing/iap-rvs-for-android-apps.html"},"here"),"."),(0,r.yg)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.yg)("p",null,"When fetching subscriptions from Amazon, make sure to use children ",(0,r.yg)("inlineCode",{parentName:"p"},"SKUs")," (so SKUs for specific period ex. monthly or annually), do not use parent subscription ",(0,r.yg)("inlineCode",{parentName:"p"},"SKUs"),"!"),(0,r.yg)("h2",{id:"caveats"},"Caveats"),(0,r.yg)("p",null,"Amazon does not return decimal price & currency. Only localized price as a string (ex. 11.22$), see this ",(0,r.yg)("a",{parentName:"p",href:"https://forums.developer.amazon.com/answers/234257/view.html"},"page"),"."),(0,r.yg)("p",null,"The package will try its best to parse the string into decimal price. If the package cannot parse the price, it will be 0. Currency is detected based on users Amazon marketplace."))}y.isMDXComponent=!0}}]);