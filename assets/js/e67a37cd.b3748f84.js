"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[420633],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var r=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},537006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),l=(n(296540),n(15680));const a={title:"LOCALTIME,LOCALTIMESTAMP",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/localtime",id:"sql-manual/sql-functions/date-time-functions/localtime",title:"LOCALTIME,LOCALTIMESTAMP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/localtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/localtime",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/localtime",draft:!1,tags:[],version:"current",frontMatter:{title:"LOCALTIME,LOCALTIMESTAMP",language:"en"},sidebar:"docs",previous:{title:"CURRENT_TIMESTAMP",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/current-timestamp"},next:{title:"NOW",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/now"}},c={},s=[{value:"localtime,localtimestamp",id:"localtimelocaltimestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"localtimelocaltimestamp"},"localtime,localtimestamp"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"DATETIME localtime()"),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"DATETIME localtimestamp()")),(0,l.yg)("p",null,"Get the current time and return it in Datetime type."),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select localtime();\n+---------------------+\n| localtime()         |\n+---------------------+\n| 2022-09-22 17:30:23 |\n+---------------------+\n\nmysql> select localtimestamp();\n+---------------------+\n| localtimestamp()    |\n+---------------------+\n| 2022-09-22 17:30:29 |\n+---------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"localtime,localtimestamp\n")))}p.isMDXComponent=!0}}]);