"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92480],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var i=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return t?i.createElement(f,s(s({ref:n},d),{},{components:t})):i.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},973283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(58168),a=(t(296540),t(15680));const r={title:"Optimizing Table Index Design",language:"en"},s=void 0,o={unversionedId:"query-acceleration/tuning/tuning-plan/optimizing-table-index",id:"version-2.1/query-acceleration/tuning/tuning-plan/optimizing-table-index",title:"Optimizing Table Index Design",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query-acceleration/tuning/tuning-plan/optimizing-table-index.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/optimizing-table-index",permalink:"/docs/query-acceleration/tuning/tuning-plan/optimizing-table-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Optimizing Table Index Design",language:"en"},sidebar:"docs",previous:{title:"Optimizing Table Schema Design",permalink:"/docs/query-acceleration/tuning/tuning-plan/optimizing-table-schema"},next:{title:"Accelerating high-concurrency point queries",permalink:"/docs/query-acceleration/tuning/tuning-plan/accelerating-point-query"}},l={},c=[{value:"Case 1: Optimizing the Order of Key Columns to Leverage Prefix Indexes for Accelerated Queries",id:"case-1-optimizing-the-order-of-key-columns-to-leverage-prefix-indexes-for-accelerated-queries",level:2},{value:"Case 2: Using Inverted Indexes to Accelerate Queries",id:"case-2-using-inverted-indexes-to-accelerate-queries",level:2},{value:"Case 3: Adjusting Field Order to Leverage ZoneMap Index for Data Filtering",id:"case-3-adjusting-field-order-to-leverage-zonemap-index-for-data-filtering",level:2},{value:"Summary",id:"summary",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris currently supports two types of indexes:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Built-in Indexes. These include prefix indexes, ZoneMap indexes, etc.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Secondary Indexes. These include inverted indexes, Bloom filter indexes, N-Gram Bloom filter indexes, and Bitmap indexes, etc."))),(0,a.yg)("p",null,"In the process of business optimization, fully analyzing business characteristics and effectively utilizing indexes can greatly enhance the effectiveness of queries and analyses, thereby achieving the purpose of performance tuning."),(0,a.yg)("p",null,"For a detailed introduction to various indexes, please refer to the ",(0,a.yg)("a",{parentName:"p",href:"../../../table-design/index/index-overview"},"Table Index")," section. This chapter will demonstrate index usage techniques in several typical scenarios from the perspective of actual cases and summarize optimization suggestions for reference in business tuning."),(0,a.yg)("h2",{id:"case-1-optimizing-the-order-of-key-columns-to-leverage-prefix-indexes-for-accelerated-queries"},"Case 1: Optimizing the Order of Key Columns to Leverage Prefix Indexes for Accelerated Queries"),(0,a.yg)("p",null,"In optimizing table schema design, we have introduced how to select appropriate fields as key fields and utilize Doris's key column sorting feature to accelerate queries. This case will further expand on this scenario."),(0,a.yg)("p",null,"Due to Doris's built-in prefix index function, it automatically takes the first 36 bytes of the table's Key as a prefix index when creating the table. When query conditions match the prefix of the prefix index, it can significantly speed up the query. Below is an example of a table definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (\n  `c1` VARCHAR(10) NULL,\n  `c2` VARCHAR(10) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("p",null,"The corresponding business SQL pattern is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select * from t1 where t1.c2 = '1';\nselect * from t1 where t1.c2 in ('1', '2', '3');\n")),(0,a.yg)("p",null,"In the above schema definition, ",(0,a.yg)("inlineCode",{parentName:"p"},"c1")," comes before ",(0,a.yg)("inlineCode",{parentName:"p"},"c2"),". However, the queries use the ",(0,a.yg)("inlineCode",{parentName:"p"},"c2")," field for filtering. In this case, the acceleration function of the prefix index cannot be utilized. To optimize, we can adjust the definition order of ",(0,a.yg)("inlineCode",{parentName:"p"},"c1")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"c2"),", placing the ",(0,a.yg)("inlineCode",{parentName:"p"},"c2")," column in the first field position to leverage the acceleration function of the prefix index."),(0,a.yg)("p",null,"The adjusted schema is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (\n  `c2` VARCHAR(10) NULL,\n  `c1` VARCHAR(10) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c2`)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When defining the schema column order, reference the high-frequency and high-priority columns in business query filtering to fully leverage Doris's prefix index acceleration function.")),(0,a.yg)("h2",{id:"case-2-using-inverted-indexes-to-accelerate-queries"},"Case 2: Using Inverted Indexes to Accelerate Queries"),(0,a.yg)("p",null,"Doris supports inverted indexes as secondary indexes to accelerate business scenarios such as equal value, range, and full-text search of text types. The creation and management of inverted indexes are independent, allowing for convenient business performance optimization without affecting the original table schema and without the need to re-import table data."),(0,a.yg)("p",null,"For typical usage scenarios, syntax, and cases, please refer to the Table Index - Inverted Index section for a detailed introduction, so this chapter will not repeat the explanation."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"For full-text searches of text types and equal value or range queries on string, numeric, and datetime type fields, inverted indexes can be utilized to accelerate queries. Especially in certain situations, such as when the original table structure and key definition are not convenient to optimize, or the cost of re-importing table data is high, inverted indexes provide a flexible acceleration solution to optimize business execution performance.")),(0,a.yg)("h2",{id:"case-3-adjusting-field-order-to-leverage-zonemap-index-for-data-filtering"},"Case 3: Adjusting Field Order to Leverage ZoneMap Index for Data Filtering"),(0,a.yg)("p",null,"The ZoneMap index is a built-in index that maintains statistical information such as Min/Max/Count on column-stored data. When Doris scans the storage layer for data, it can quickly filter out data blocks that do not meet the filtering conditions based on the ZoneMap statistical information (such as Min/Max) of the filtering field, thereby effectively reducing the amount of table scanning."),(0,a.yg)("p",null,"By default, ZoneMap selects the first column of the schema to establish an index. Therefore, by reasonably adjusting the field order, this feature can be fully utilized to accelerate data filtering at the storage layer."),(0,a.yg)("p",null,"Taking the ",(0,a.yg)("inlineCode",{parentName:"p"},"store_sales")," table in the standard test set TPC-DS as an example, its original schema definition is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS store_sales (\n    ss_item_sk bigint not null,\n    ss_ticket_number bigint not null,\n    ss_sold_date_sk bigint,\n    ......\n    ss_net_paid_inc_tax decimalv3(7,2),\n    ss_net_profit decimalv3(7,2)\n)\nDUPLICATE KEY(ss_item_sk, ss_ticket_number)\nDISTRIBUTED BY HASH(ss_item_sk, ss_ticket_number) BUCKETS 32\nPROPERTIES (\n  "replication_num" = "1"\n);\n')),(0,a.yg)("p",null,"An example of a query fragment is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select *\nfrom store_sales, date_dim dt\nwhere dt.d_date_sk = store_sales.ss_sold_date_sk\n      and ss_sold_date_sk between 2450816 and 2451000;\n")),(0,a.yg)("p",null,"To leverage the range filtering condition on the fact table ",(0,a.yg)("inlineCode",{parentName:"p"},"store_sales")," for rapid storage layer filtering, we can consider adjusting the field definition order to use the ZoneMap index. Since ZoneMap is established on the first field by default, we need to adjust the filtering field ",(0,a.yg)("inlineCode",{parentName:"p"},"ss_sold_date_sk")," to the first position in the schema."),(0,a.yg)("p",null,"The adjusted schema is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS store_sales (\n    ss_sold_date_sk bigint,\n    ss_item_sk bigint not null,\n    ss_ticket_number bigint not null,\n    ......\n    ss_net_paid_inc_tax decimalv3(7,2),\n    ss_net_profit decimalv3(7,2)\n)\nDUPLICATE KEY(ss_sold_date_sk, ss_item_sk, ss_ticket_number)\nDISTRIBUTED BY HASH(ss_sold_date_sk, ss_item_sk, ss_ticket_number) BUCKETS 32\nPROPERTIES (\n  "replication_num" = "1"\n);\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Adjust the equal value or range filtering field to the first column of the schema to leverage the ZoneMap index for data block-level filtering. This can accelerate the table scanning process, thereby achieving the purpose of performance tuning.")),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In schema tuning, apart from table-level schema optimization, index optimization also occupies an important position. Doris provides multiple index types, including built-in indexes such as prefix and ZoneMap, as well as secondary indexes such as inverted indexes, which provide strong support for performance acceleration. By reasonably utilizing these indexes, we can significantly improve the speed of business queries and analyses in multiple scenarios, which is of great significance for multi-scenario business queries and analyses."))}p.isMDXComponent=!0}}]);