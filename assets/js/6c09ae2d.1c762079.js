"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[245491],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},903044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"TRUNCATE-TABLE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/TRUNCATE-TABLE",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/TRUNCATE-TABLE",title:"TRUNCATE-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/TRUNCATE-TABLE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/TRUNCATE-TABLE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/TRUNCATE-TABLE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TRUNCATE-TABLE",language:"en"},sidebar:"docs",previous:{title:"DROP-SQL-BLOCK-RULE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"},next:{title:"DROP-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW"}},s={},p=[{value:"TRUNCATE-TABLE",id:"truncate-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"truncate-table"},"TRUNCATE-TABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"TRUNCATE TABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to clear the data of the specified table and partition\ngrammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The statement clears the data, but leaves the table or partition."),(0,r.yg)("li",{parentName:"ul"},"Unlike DELETE, this statement can only clear the specified table or partition as a whole, and cannot add filter conditions."),(0,r.yg)("li",{parentName:"ul"},"Unlike DELETE, using this method to clear data will not affect query performance."),(0,r.yg)("li",{parentName:"ul"},"The data deleted by this operation cannot be recovered."),(0,r.yg)("li",{parentName:"ul"},"When using this command, the table status needs to be NORMAL, that is, operations such as SCHEMA CHANGE are not allowed."),(0,r.yg)("li",{parentName:"ul"},"This command may cause the ongoing load to fail")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clear the table tbl under example_db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE example_db.tbl;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Empty p1 and p2 partitions of table tbl"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE tbl PARTITION(p1, p2);\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," TRUNCATE, TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);