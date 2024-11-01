"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[193587],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>T});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,T=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?a.createElement(T,o(o({ref:t},c),{},{components:n})):a.createElement(T,o({ref:t},c))}));function T(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},948482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const i={title:"QUANTILE_STATE",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-data-types/aggregate/QUANTILE-STATE",id:"version-2.1/sql-manual/sql-data-types/aggregate/QUANTILE-STATE",title:"QUANTILE_STATE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-data-types/aggregate/QUANTILE-STATE.md",sourceDirName:"sql-manual/sql-data-types/aggregate",slug:"/sql-manual/sql-data-types/aggregate/QUANTILE-STATE",permalink:"/docs/sql-manual/sql-data-types/aggregate/QUANTILE-STATE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"QUANTILE_STATE",language:"en"},sidebar:"docs",previous:{title:"BITMAP",permalink:"/docs/sql-manual/sql-data-types/aggregate/BITMAP"},next:{title:"AGG_STATE",permalink:"/docs/sql-manual/sql-data-types/aggregate/AGG-STATE"}},s={},u=[{value:"QUANTILE_STATE",id:"quantile_state",level:2},{value:"description",id:"description",level:3},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"quantile_state"},"QUANTILE_STATE"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"QUANTILE_STATE"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"In 2.0, we support the ",(0,r.yg)("a",{parentName:"strong",href:"AGG_STATE.md"},"agg_state")," function, and it is recommended to use agg_state quantile_union(quantile_state not null) instead of this type.")),(0,r.yg)("p",null,"QUANTILE_STATE cannot be used as a key column. The columns of the HLL type can be used in Aggregate tables, Duplicate tables and Unique tables. When used in an Aggregate table, the aggregation type is HLL_UNION when building table."),(0,r.yg)("p",null,"The user does not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\nAnd the QUANTILE_STATE column can only be queried or used through the supporting QUANTILE_PERCENT, QUANTILE_UNION and TO_QUANTILE_STATE functions.",(0,r.yg)("br",{parentName:"p"}),"\n","QUANTILE_STATE is a type for calculating the approximate value of quantiles. Different values with the same key are pre-aggregated during loading process. When the number of aggregated values does not exceed 2048, all data are recorded in detail. When the number of aggregated values is greater than 2048, ","[TDigest]"," is used. (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf"},"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf"),") algorithm to aggregate (cluster) the data and save the centroid points after clustering."),(0,r.yg)("p",null,"related functions:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"QUANTILE_UNION(QUANTILE_STATE):\n  \n  This function is an aggregation function, which is used to aggregate the intermediate results of different quantile calculations. The result returned by this function is still QUANTILE_STATE\n\n\nTO_QUANTILE_STATE(DOUBLE raw_data [,FLOAT compression]):\n   \n   This function converts a numeric type to a QUANTILE_STATE type\n   The compression parameter is optional and can be set in the range [2048, 10000]. \n   The larger the value, the higher the precision of quantile approximation calculations, the greater the memory consumption, and the longer the calculation time.\n   An unspecified or set value for the compression parameter is outside the range [2048, 10000], run with the default value of 2048\n\nQUANTILE_PERCENT(QUANTILE_STATE, percent):\n   This function converts the intermediate result variable (QUANTILE_STATE) of the quantile calculation into a specific quantile value\n")),(0,r.yg)("h3",{id:"notice"},"notice"),(0,r.yg)("p",null,"Now QUANTILE_STATE can only used in Aggregate Model Tables. We should turn on the switch for the QUANTILE_STATE types feature with the following command before use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ mysql-client > admin set frontend config("enable_quantile_state_type"="true");\n')),(0,r.yg)("p",null,"In this way the config will be reset after the FE process restarts. For permanent setting, you can add config\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"enable_quantile_state_type=true"),"\xa0inside fe.conf."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select QUANTILE_PERCENT(QUANTILE_UNION(v1), 0.5) from test_table group by k1, k2, k3;\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")))}p.isMDXComponent=!0}}]);