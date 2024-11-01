"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[814284],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},458475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-ENCRYPT-KEY",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY",id:"sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY",title:"SHOW-ENCRYPT-KEY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ENCRYPT-KEY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-EXPORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-EXPORT"},next:{title:"SHOW-FUNCTIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS"}},i={},c=[{value:"SHOW-ENCRYPT-KEY",id:"show-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-encrypt-key"},"SHOW-ENCRYPT-KEY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW ENCRYPTKEYS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49\u7684\u5bc6\u94a5\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93\u3002"),(0,a.yg)("p",null,"\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n")),(0,a.yg)("p",null,"\u53c2\u6570"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"db"),": \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u5b57\n",(0,a.yg)("inlineCode",{parentName:"p"},"key_pattern"),": \u7528\u6765\u8fc7\u6ee4\u5bc6\u94a5\u540d\u79f0\u7684\u53c2\u6570")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'   mysql> SHOW ENCRYPTKEYS;\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n\n   mysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, ENCRYPT, KEY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);