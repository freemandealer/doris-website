"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[943122],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},N="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),N=p(t),u=r,y=N["".concat(o,".").concat(u)]||N[u]||m[u]||l;return t?n.createElement(y,i(i({ref:a},c),{},{components:t})):n.createElement(y,i({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[N]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},515289:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const l={title:"DROP-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",title:"DROP-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DROP-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-INDEX",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},next:{title:"DROP-FUNCTION",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION"}},o={},p=[{value:"DROP-MATERIALIZED-VIEW",id:"drop-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},N="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(N,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"drop-materialized-view"},"DROP-MATERIALIZED-VIEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"DROP MATERIALIZED VIEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u7269\u5316\u89c6\u56fe\u3002\u540c\u6b65\u8bed\u6cd5"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"IF EXISTS:\n\u5982\u679c\u7269\u5316\u89c6\u56fe\u4e0d\u5b58\u5728\uff0c\u4e0d\u8981\u629b\u51fa\u9519\u8bef\u3002\u5982\u679c\u4e0d\u58f0\u660e\u6b64\u5173\u952e\u5b57\uff0c\u7269\u5316\u89c6\u56fe\u4e0d\u5b58\u5728\u5219\u62a5\u9519\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"mv_name:\n\u5f85\u5220\u9664\u7684\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002\u5fc5\u586b\u9879\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"table_name:\n\u5f85\u5220\u9664\u7684\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u8868\u540d\u3002\u5fc5\u586b\u9879\u3002"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u8868\u7ed3\u6784\u4e3a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc all_type_table all;\n+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n|                |       |          |      |       |         |       |\n| k1_sumk2       | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | SUM   |\n+----------------+-------+----------+------+-------+---------+-------+\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u8868 all_type_table \u7684\u540d\u4e3a k1_sumk2 \u7684\u7269\u5316\u89c6\u56fe"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_sumk2 on all_type_table;\n")),(0,r.yg)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u88ab\u5220\u9664\u540e\u7684\u8868\u7ed3\u6784"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u8868 all_type_table \u4e2d\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n")),(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u8bf7\u6c42\u76f4\u63a5\u62a5\u9519")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u8868 all_type_table \u4e2d\u7684\u7269\u5316\u89c6\u56fe k1_k2\uff0c\u4e0d\u5b58\u5728\u4e0d\u62a5\u9519\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec) \n")),(0,r.yg)("p",{parentName:"li"}," \u5b58\u5728\u5219\u5220\u9664\uff0c\u4e0d\u5b58\u5728\u5219\u4e0d\u62a5\u9519\u3002"))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DROP, MATERIALIZED, VIEW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);