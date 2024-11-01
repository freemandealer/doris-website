"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[721334],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},615522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(58168),i=(n(296540),n(15680));const a={title:"BITMAP_REMOVE",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-remove",id:"sql-manual/sql-functions/bitmap-functions/bitmap-remove",title:"BITMAP_REMOVE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-remove.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-remove",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-remove",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_REMOVE",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_TO_BASE64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-to-base64"},next:{title:"BITAND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitwise-functions/bitand"}},s={},p=[{value:"bitmap_remove",id:"bitmap_remove",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_remove"},"bitmap_remove"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_REMOVE(BITMAP bitmap, BIGINT input)")),(0,i.yg)("p",null,"\u4eceBitmap\u5217\u4e2d\u5220\u9664\u6307\u5b9a\u7684\u503c\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql [(none)]>select bitmap_to_string(bitmap_remove(bitmap_from_string('1, 2, 3'), 3)) res; \n+------+\n| res  |\n+------+\n| 1,2  |\n+------+\n\nmysql [(none)]>select bitmap_to_string(bitmap_remove(bitmap_from_string('1, 2, 3'), null)) res;\n+------+\n| res  |\n+------+\n| NULL |\n+------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_REMOVE,BITMAP\n")))}m.isMDXComponent=!0}}]);