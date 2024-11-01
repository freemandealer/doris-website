"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[104416],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(s,".").concat(f)]||y[f]||u[f]||l;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},772746:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"arrays_overlap",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/arrays_overlap",id:"version-1.2/sql-manual/sql-functions/array-functions/arrays_overlap",title:"arrays_overlap",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/arrays_overlap.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/arrays_overlap",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/arrays_overlap",draft:!1,tags:[],version:"1.2",frontMatter:{title:"arrays_overlap",language:"en"},sidebar:"docs",previous:{title:"array_first_index",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_first_index"},next:{title:"array_apply",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_apply"}},s={},c=[{value:"arrays_overlap",id:"arrays_overlap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},y="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"arrays_overlap"},"arrays_overlap"),(0,a.yg)("p",null,"arrays_overlap"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BOOLEAN arrays_overlap(ARRAY<T> left, ARRAY<T> right)")),(0,a.yg)("p",null,"Check if there is any common element for left and right array. Return below values:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1    - if any common element inside left and right array;\n0    - if no common element inside left and right array;\nNULL - when left or right array is NULL; OR any element inside left and right array is NULL;\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select c_left,c_right,arrays_overlap(c_left,c_right) from array_test;\n+--------------+-----------+-------------------------------------+\n| c_left       | c_right   | arrays_overlap(`c_left`, `c_right`) |\n+--------------+-----------+-------------------------------------+\n| [1, 2, 3]    | [3, 4, 5] |                                   1 |\n| [1, 2, 3]    | [5, 6]    |                                   0 |\n| [1, 2, NULL] | [1]       |                                NULL |\n| NULL         | [1, 2]    |                                NULL |\n| [1, 2, 3]    | [1, 2]    |                                   1 |\n+--------------+-----------+-------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ARRAYS,OVERLAP,ARRAYS_OVERLAP"))}u.isMDXComponent=!0}}]);