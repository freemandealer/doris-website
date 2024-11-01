"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[758147],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,g=p["".concat(c,".").concat(y)]||p[y]||m[y]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},13598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-CATALOG",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",title:"ALTER-CATALOG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-CATALOG",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-BACKEND",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND"},next:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"}},c={},s=[{value:"ALTER-CATALOG",id:"alter-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-catalog"},"ALTER-CATALOG"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("version",{since:"1.2"},(0,a.yg)("p",null,"ALTER CATALOG")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027\u3002\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,a.yg)("p",null,"1) \u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name RENAME new_catalog_name;\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"internal")," \u662f\u5185\u7f6e\u6570\u636e\u76ee\u5f55\uff0c\u4e0d\u5141\u8bb8\u91cd\u547d\u540d"),(0,a.yg)("li",{parentName:"ul"},"\u5bf9 ",(0,a.yg)("inlineCode",{parentName:"li"},"catalog_name")," \u62e5\u6709 Alter \u6743\u9650\u624d\u5141\u8bb8\u5bf9\u5176\u91cd\u547d\u540d"),(0,a.yg)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55\u540e\uff0c\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528 REVOKE \u548c GRANT \u547d\u4ee4\u4fee\u6539\u76f8\u5e94\u7684\u7528\u6237\u6743\u9650\u3002")),(0,a.yg)("p",null,"2) \u8bbe\u7f6e\u6570\u636e\u76ee\u5f55\u5c5e\u6027"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name SET PROPERTIES ('key1' = 'value1' [, 'key' = 'value2']); \n")),(0,a.yg)("p",null,"\u66f4\u65b0\u6307\u5b9a\u5c5e\u6027\u7684\u503c\u4e3a\u6307\u5b9a\u7684 value\u3002\u5982\u679c SET PROPERTIES \u4ece\u53e5\u4e2d\u7684 key \u5728\u6307\u5b9a catalog \u5c5e\u6027\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u589e\u6b64 key\u3002"),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u6570\u636e\u76ee\u5f55\u7c7b\u578b\uff0c\u5373 ",(0,a.yg)("inlineCode",{parentName:"li"},"type")," \u5c5e\u6027"),(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u5185\u7f6e\u6570\u636e\u76ee\u5f55 ",(0,a.yg)("inlineCode",{parentName:"li"},"internal")," \u7684\u5c5e\u6027")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u76ee\u5f55 ctlg_hive \u91cd\u547d\u540d\u4e3a hive")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG ctlg_hive RENAME hive;\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u66f4\u65b0\u540d\u4e3a hive \u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027 ",(0,a.yg)("inlineCode",{parentName:"li"},"hive.metastore.uris"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"ALTER,CATALOG,RENAME,PROPERTY"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);