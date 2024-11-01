"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[855710],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(o,".").concat(f)]||y[f]||p[f]||i;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[y]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},332:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const i={title:"ARRAY_SIZE",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-size",id:"version-3.0/sql-manual/sql-functions/array-functions/array-size",title:"ARRAY_SIZE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-size.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-size",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-size",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_SIZE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_SUM",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-sum"},next:{title:"ARRAY_REMOVE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-remove"}},o={},c=[{value:"array_size (size, cardinality)",id:"array_size-size-cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_size-size-cardinality"},"array_size (size, cardinality)"),(0,a.yg)("p",null,"array_size (size, cardinality)"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"BIGINT size(ARRAY<T> arr)\nBIGINT array_size(ARRAY<T> arr) \nBIGINT cardinality(ARRAY<T> arr)\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u5143\u7d20\u6570\u91cf\uff0c\u5982\u679c\u8f93\u5165\u6570\u7ec4\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select k1,k2,size(k2) from array_test;\n+------+-----------+------------+\n| k1   | k2        | size(`k2`) |\n+------+-----------+------------+\n|    1 | [1, 2, 3] |          3 |\n|    2 | []        |          0 |\n|    3 | NULL      |       NULL |\n+------+-----------+------------+\n\nmysql> select k1,k2,array_size(k2) from array_test;\n+------+-----------+------------------+\n| k1   | k2        | array_size(`k2`) |\n+------+-----------+------------------+\n|    1 | [1, 2, 3] |                3 |\n|    2 | []        |                0 |\n|    3 | NULL      |             NULL |\n+------+-----------+------------------+\n\nmysql> select k1,k2,cardinality(k2) from array_test;\n+------+-----------+-------------------+\n| k1   | k2        | cardinality(`k2`) |\n+------+-----------+-------------------+\n|    1 | [1, 2, 3] |                 3 |\n|    2 | []        |                 0 |\n|    3 | NULL      |              NULL |\n+------+-----------+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY_SIZE, SIZE, CARDINALITY"))}p.isMDXComponent=!0}}]);