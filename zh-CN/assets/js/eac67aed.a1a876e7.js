"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[252705],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,y=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},421188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(58168),a=(r(296540),r(15680));const i={title:"user_privileges",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/user_privileges",id:"version-2.1/admin-manual/system-tables/information_schema/user_privileges",title:"user_privileges",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/information_schema/user_privileges.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/user_privileges",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/user_privileges",draft:!1,tags:[],version:"2.1",frontMatter:{title:"user_privileges",language:"zh-CN"},sidebar:"docs",previous:{title:"triggers",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/triggers"},next:{title:"views",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/views"}},s={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],p={toc:m},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u67e5\u770b\u7528\u6237\u8d4b\u6743\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,a.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"GRANTEE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"varchar(81)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u88ab\u6388\u6743\u7528\u6237")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"TABLE_CATALOG"),(0,a.yg)("td",{parentName:"tr",align:"left"},"varchar(512)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u6c38\u8fdc\u4e3a def")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"PRIVILEGE_TYPE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u6743\u9650\u7c7b\u578b")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"IS_GRANTABLE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u7ed9\u5176\u4ed6\u7528\u6237\u6388\u6743")))))}g.isMDXComponent=!0}}]);