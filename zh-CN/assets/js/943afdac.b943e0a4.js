"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[272066],{15680:(n,e,t)=>{t.d(e,{xA:()=>s,yg:()=>f});var l=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},u=Object.keys(n);for(l=0;l<u.length;l++)t=u[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(l=0;l<u.length;l++)t=u[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=l.createContext({}),i=function(n){var e=l.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=i(n.components);return l.createElement(c.Provider,{value:e},n.children)},p="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,u=n.originalType,c=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),p=i(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||y[m]||u;return t?l.createElement(f,a(a({ref:e},s),{},{components:t})):l.createElement(f,a({ref:e},s))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var u=t.length,a=new Array(u);a[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[p]="string"==typeof n?n:r,a[1]=o;for(var i=2;i<u;i++)a[i]=t[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},857248:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>u,metadata:()=>o,toc:()=>i});var l=t(58168),r=(t(296540),t(15680));const u={title:"COUNT_BY_ENUM",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/count-by-enum",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/count-by-enum",title:"COUNT_BY_ENUM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/count-by-enum.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/count-by-enum",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/count-by-enum",draft:!1,tags:[],version:"3.0",frontMatter:{title:"COUNT_BY_ENUM",language:"zh-CN"},sidebar:"docs",previous:{title:"COUNT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/count"},next:{title:"APPROX_COUNT_DISTINCT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"}},c={},i=[{value:"COUNT_BY_ENUM",id:"count_by_enum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:i},p="wrapper";function y(n){let{components:e,...t}=n;return(0,r.yg)(p,(0,l.A)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"count_by_enum"},"COUNT_BY_ENUM"),(0,r.yg)("p",null,"COUNT_BY_ENUM"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"count_by_enum(expr1, expr2, ... , exprN);")),(0,r.yg)("p",null,"\u5c06\u5217\u4e2d\u6570\u636e\u770b\u4f5c\u679a\u4e3e\u503c\uff0c\u7edf\u8ba1\u6bcf\u4e2a\u679a\u4e3e\u503c\u7684\u4e2a\u6570\u3002\u8fd4\u56de\u5404\u4e2a\u5217\u679a\u4e3e\u503c\u7684\u4e2a\u6570\uff0c\u4ee5\u53ca\u975e null \u503c\u7684\u4e2a\u6570\u4e0e null \u503c\u7684\u4e2a\u6570\u3002"),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"expr1")," \u2014 \u81f3\u5c11\u586b\u5199\u4e00\u4e2a\u8f93\u5165\u3002\u503c\u4e3a\u5b57\u7b26\u4e32\uff08STRING\uff09\u7c7b\u578b\u7684\u5217\u3002"),(0,r.yg)("h5",{id:"returned-value"},"Returned value"),(0,r.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a JSONArray \u5b57\u7b26\u4e32\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[{\n    "cbe": {\n        "F": 100,\n        "M": 99\n    },\n    "notnull": 199,\n    "null": 1,\n    "all": 200\n}, {\n    "cbe": {\n        "20": 10,\n        "30": 5,\n        "35": 1\n    },\n    "notnull": 16,\n    "null": 184,\n    "all": 200\n}, {\n    "cbe": {\n        "\u5317\u4eac": 10,\n        "\u4e0a\u6d77": 9,\n        "\u5e7f\u5dde": 20,\n        "\u6df1\u5733": 30\n    },\n    "notnull": 69,\n    "null": 131,\n    "all": 200\n}]\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a JSON array \u5b57\u7b26\u4e32\uff0c\u5185\u90e8\u5bf9\u8c61\u7684\u987a\u5e8f\u662f\u8f93\u5165\u53c2\u6570\u7684\u987a\u5e8f\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"cbe\uff1a\u6839\u636e\u679a\u4e3e\u503c\u7edf\u8ba1\u975e null \u503c\u7684\u7edf\u8ba1\u7ed3\u679c"),(0,r.yg)("li",{parentName:"ul"},"notnull\uff1a\u975e null \u7684\u4e2a\u6570"),(0,r.yg)("li",{parentName:"ul"},"null\uff1anull \u503c\u4e2a\u6570"),(0,r.yg)("li",{parentName:"ul"},"all\uff1a\u603b\u6570\uff0c\u5305\u62ec null \u503c\u4e0e\u975e null \u503c")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE IF EXISTS count_by_enum_test;\n\nCREATE TABLE count_by_enum_test(\n                `id` varchar(1024) NULL,\n                `f1` text REPLACE_IF_NOT_NULL NULL,\n                `f2` text REPLACE_IF_NOT_NULL NULL,\n                `f3` text REPLACE_IF_NOT_NULL NULL\n                )\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    "replication_num" = "1"\n); \n\nINSERT into count_by_enum_test (id, f1, f2, f3) values\n                                        (1, "F", "10", "\u5317\u4eac"),\n                                        (2, "F", "20", "\u5317\u4eac"),\n                                        (3, "M", NULL, "\u4e0a\u6d77"),\n                                        (4, "M", NULL, "\u4e0a\u6d77"),\n                                        (5, "M", NULL, "\u5e7f\u5dde");\n\nSELECT * from count_by_enum_test;\n\n+------+------+------+--------+\n| id   | f1   | f2   | f3     |\n+------+------+------+--------+\n| 2    | F    | 20   | \u5317\u4eac   |\n| 3    | M    | NULL | \u4e0a\u6d77   |\n| 4    | M    | NULL | \u4e0a\u6d77   |\n| 5    | M    | NULL | \u5e7f\u5dde   |\n| 1    | F    | 10   | \u5317\u4eac   |\n+------+------+------+--------+\n\nselect count_by_enum(f1) from count_by_enum_test;\n\n+------------------------------------------------------+\n| count_by_enum(`f1`)                                  |\n+------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------+\n\nselect count_by_enum(f2) from count_by_enum_test;\n\n+--------------------------------------------------------+\n| count_by_enum(`f2`)                                    |\n+--------------------------------------------------------+\n| [{"cbe":{"10":1,"20":1},"notnull":2,"null":3,"all":5}] |\n+--------------------------------------------------------+\n\nselect count_by_enum(f1,f2,f3) from count_by_enum_test;\n\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| count_by_enum(`f1`, `f2`, `f3`)                                                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5},{"cbe":{"20":1,"10":1},"notnull":2,"null":3,"all":5},{"cbe":{"\u5e7f\u5dde":1,"\u4e0a\u6d77":2,"\u5317\u4eac":2},"notnull":5,"null":0,"all":5}]       |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"COUNT_BY_ENUM"))}y.isMDXComponent=!0}}]);