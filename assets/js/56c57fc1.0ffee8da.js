"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[764673],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=i(r),p=a,d=f["".concat(c,".").concat(p)]||f[p]||g[p]||o;return r?t.createElement(d,s(s({ref:n},u),{},{components:r})):t.createElement(d,s({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},874198:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const o={title:"FOREACH",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/foreach",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/foreach",title:"FOREACH",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/foreach.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/foreach",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/foreach",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FOREACH",language:"en"},sidebar:"docs",previous:{title:"ARRAY_AGG",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/array-agg"},next:{title:"MAP_AGG",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/map-agg"}},c={},i=[{value:"FOREACH",id:"foreach",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},f="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(f,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"foreach"},"FOREACH"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION_FOREACH(arg...)"),"\nConverts an aggregate function for tables into an aggregate function for arrays that aggregates the corresponding array items and returns an array of results. For example, sum_foreach for the arrays ","[1, 2]",", ","[3, 4, 5]","and","[6, 7]","returns the result ","[10, 13, 5]"," after adding together the corresponding array items."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql [test]>select a , s from db;\n+-----------+---------------+\n| a         | s             |\n+-----------+---------------+\n| [1, 2, 3] | ["ab", "123"] |\n| [20]      | ["cd"]        |\n| [100]     | ["efg"]       |\n| NULL      | NULL          |\n| [null, 2] | [null, "c"]   |\n+-----------+---------------+\n\nmysql [test]>select sum_foreach(a) from db;\n+----------------+\n| sum_foreach(a) |\n+----------------+\n| [121, 4, 3]    |\n+----------------+\n\nmysql [test]>select count_foreach(s) from db;\n+------------------+\n| count_foreach(s) |\n+------------------+\n| [3, 2]           |\n+------------------+\n\nmysql [test]>select array_agg_foreach(a) from db;\n+-----------------------------------+\n| array_agg_foreach(a)              |\n+-----------------------------------+\n| [[1, 20, 100, null], [2, 2], [3]] |\n+-----------------------------------+\n\nmysql [test]>select map_agg_foreach(a,a) from db;\n+---------------------------------------+\n| map_agg_foreach(a, a)                 |\n+---------------------------------------+\n| [{1:1, 20:20, 100:100}, {2:2}, {3:3}] |\n+---------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"FOREACH"))}g.isMDXComponent=!0}}]);