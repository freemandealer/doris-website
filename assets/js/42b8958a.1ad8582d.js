"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[758348],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>A});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,A=m["".concat(o,".").concat(u)]||m[u]||E[u]||l;return n?r.createElement(A,i(i({ref:t},p),{},{components:n})):r.createElement(A,i({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},842528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"CANCEL-MATERIALIZED-VIEW-TASK",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK",id:"sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK",title:"CANCEL-MATERIALIZED-VIEW-TASK",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK",draft:!1,tags:[],version:"current",frontMatter:{title:"CANCEL-MATERIALIZED-VIEW-TASK",language:"en"},sidebar:"docs",previous:{title:"CLEAN-QUERY-STATS",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS"},next:{title:"PAUSE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW"}},o={},c=[{value:"CANCEL-MATERIALIZED-VIEW-TASK",id:"cancel-materialized-view-task",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function E(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cancel-materialized-view-task"},"CANCEL-MATERIALIZED-VIEW-TASK"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CANCEL MATERIALIZED VIEW TASK"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to cancel the task of materialized views"),(0,a.yg)("p",null,"syntax:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL MATERIALIZED VIEW TASK taskId=INTEGER_VALUE ON mvName=multipartIdentifier\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Cancel the task with id 1 in materialized view mv1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL MATERIALIZED VIEW TASK 1 on mv1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CANCEL, MATERIALIZED, VIEW, TASK\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);