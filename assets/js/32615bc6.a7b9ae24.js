"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80749],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},480105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(296540),r(15680));const a={title:"Model Overview",language:"en"},i=void 0,s={unversionedId:"table-design/data-model/overview",id:"version-2.1/table-design/data-model/overview",title:"Model Overview",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/data-model/overview.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/overview",permalink:"/docs/table-design/data-model/overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Model Overview",language:"en"},sidebar:"docs",previous:{title:"Remote Storage",permalink:"/docs/table-design/tiered-storage/remote-storage"},next:{title:"Duplicate Key Model",permalink:"/docs/table-design/data-model/duplicate"}},l={},c=[{value:"Basic Concepts",id:"basic-concepts",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This topic introduces the data models in Doris from a logical perspective so you can make better use of Doris in different business scenarios."),(0,o.yg)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,o.yg)("p",null,"This document mainly describes the data model of Doris from a logical perspective, aiming to assist users in better utilizing Doris for different scenarios."),(0,o.yg)("p",null,"In Doris, data is logically represented in the form of tables. A table comprises Rows and Columns. Row represents a single data entry from the user. This row contains a set of related values that represent different attributes or fields, which are defined by the columns (Column) of the table."),(0,o.yg)("p",null,"Columns can be broadly categorized into two types: Key and Value. From a business perspective, Key and Value can correspond to dimension columns and metric columns, respectively. In Doris, the Key columns are those specified in the table creation statement. The columns that follow the keywords ",(0,o.yg)("inlineCode",{parentName:"p"},"unique key"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"aggregate key"),", or ",(0,o.yg)("inlineCode",{parentName:"p"},"duplicate key")," in the table creation statement are considered Key columns, while the remaining columns are Value columns."),(0,o.yg)("p",null,"The data models in Doris are primarily classified into three types:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Duplicate: This data model allows for storing duplicate rows based on the specified key columns. It is suitable for scenarios where preserving all the original data records is essential."),(0,o.yg)("li",{parentName:"ul"},"Unique: In this data model, each row is uniquely identified by the combination of values in the key columns. This ensures that no duplicate rows exist for a given set of key values."),(0,o.yg)("li",{parentName:"ul"},"Aggregate: This model enables the aggregation of data based on the key columns. It is commonly used for scenarios where summary or aggregated information, such as totals or averages, is required.")))}p.isMDXComponent=!0}}]);