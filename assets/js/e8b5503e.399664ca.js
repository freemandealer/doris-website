"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[130928],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,y=u["".concat(o,".").concat(d)]||u[d]||f[d]||l;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},793004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const l={title:"SPLIT_PART",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split-part",id:"version-3.0/sql-manual/sql-functions/string-functions/split-part",title:"SPLIT_PART",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/split-part.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split-part",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/split-part",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SPLIT_PART",language:"en"},sidebar:"docs",previous:{title:"STRRIGHT",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/strright"},next:{title:"SPLIT_BY_STRING",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/split-by-string"}},o={},p=[{value:"split_part",id:"split_part",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"split_part"},"split_part"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)")),(0,i.yg)("p",null,"Returns the specified partition by splitting the string according to the delimiter. If field is positive, splitting and counting from the beginning of content, otherwise from the ending."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"delimiter")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"field")," parameter should be constant."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019\u5e747\u67088\u53f7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5e747\u67088\u53f7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5e747                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -1);\n+--------------------------------------+\n| split_part('prefix_string', '_', -1) |\n+--------------------------------------+\n| string                               |\n+--------------------------------------+\n\n\nmysql> select split_part(\"prefix_string\", \"_\", -2);\n+--------------------------------------+\n| split_part('prefix_string', '_', -2) |\n+--------------------------------------+\n| prefix                               |\n+--------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -1);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -1) |\n+----------------------------------------+\n| 234                                    |\n+----------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -2);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -2) |\n+----------------------------------------+\n| 123#                                   |\n+----------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SPLIT_PART,SPLIT,PART\n")))}f.isMDXComponent=!0}}]);