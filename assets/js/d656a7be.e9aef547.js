"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66175],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=d(a),m=r,u=y["".concat(p,".").concat(m)]||y[m]||s[m]||l;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},814764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(58168),r=(a(296540),a(15680));const l={title:"SAP HANA",language:"en"},i=void 0,o={unversionedId:"lakehouse/database/sap-hana",id:"version-2.1/lakehouse/database/sap-hana",title:"SAP HANA",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/database/sap-hana.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/sap-hana",permalink:"/docs/lakehouse/database/sap-hana",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SAP HANA",language:"en"},sidebar:"docs",previous:{title:"ClickHouse",permalink:"/docs/lakehouse/database/clickhouse"},next:{title:"OceanBase",permalink:"/docs/lakehouse/database/oceanbase"}},p={},d=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to SAP HANA",id:"connect-to-sap-hana",level:2},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"SAP HANA to Doris type mapping",id:"sap-hana-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3}],g={toc:d},y="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connection to the SAP HANA database through the standard JDBC interface. This document describes how to configure a SAP HANA database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to the SAP HANA database you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SAP HANA 2.0 or higher.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for SAP HANA database, you can download the latest or specified version of SAP HANA JDBC driver from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"},"Maven repository")," . ",(0,r.yg)("strong",{parentName:"p"},"It is recommended to use ngdbc version 2.4.51 or above. "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and the SAP HANA server, default port is 30015."))),(0,r.yg)("h2",{id:"connect-to-sap-hana"},"Connect to SAP HANA"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG saphana PROPERTIES (\n    "type"="jdbc",\n    "user"="USERNAME",\n    "password"="PASSWORD",\n    "jdbc_url" = "jdbc:sap://Hostname:Port/?optionalparameters",\n    "driver_url" = "ngdbc-2.4.51.jar",\n    "driver_class" = "com.sap.db.jdbc.Driver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the JDBC URL formats and parameters supported by the SAP HANA JDBC driver, see ",(0,r.yg)("a",{parentName:"p",href:"https://help.sap.com/docs/"},"SAP HANA"),".")),(0,r.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,r.yg)("p",null,'When mapping SAP HANA, Doris\' Database corresponds to a Schema under the specified DataBase ("DATABASE" in the ',(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," parameter) in SAP HANA. The Table under Doris' Database corresponds to the Tables under Schema in SAP HANA. That is, the mapping relationship is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"SAP HANA"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,r.yg)("h3",{id:"sap-hana-to-doris-type-mapping"},"SAP HANA to Doris type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SAP HANA Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTERGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLDECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL/STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Which type will be selected based on the (precision, scale) of the Doris DECIMAL field")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SECONDDATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NVARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ALPHANUM"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHORTTEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,r.yg)("p",null,"When executing a query like ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing inaccuracies. Necessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."),(0,r.yg)("h3",{id:"row-limit"},"Row limit"),(0,r.yg)("p",null,"If you have the limit keyword in the query, Doris will push the limit down to the SAP HANA database to reduce the amount of data transfer."),(0,r.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,r.yg)("p",null,'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to SAP HANA to avoid conflicts between the field names and table names and SAP HANA internal keywords.'))}s.isMDXComponent=!0}}]);