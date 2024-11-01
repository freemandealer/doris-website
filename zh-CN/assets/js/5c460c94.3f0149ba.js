"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[371241],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>d});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=n,d=c["".concat(l,".").concat(m)]||c[m]||y[m]||i;return t?r.createElement(d,o(o({ref:a},g),{},{components:t})):r.createElement(d,o({ref:a},g))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},439478:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const i={title:"DataGrip",language:"zh-CN"},o=void 0,p={unversionedId:"ecosystem/bi/datagrip",id:"version-2.0/ecosystem/bi/datagrip",title:"DataGrip",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/bi/datagrip.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/datagrip",permalink:"/zh-CN/docs/2.0/ecosystem/bi/datagrip",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DataGrip",language:"zh-CN"},sidebar:"ecosystem",previous:{title:"DBeaver",permalink:"/zh-CN/docs/2.0/ecosystem/bi/dbeaver"},next:{title:"FineBI",permalink:"/zh-CN/docs/2.0/ecosystem/bi/finebi"}},l={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u6dfb\u52a0\u6570\u636e\u6e90",id:"\u6dfb\u52a0\u6570\u636e\u6e90",level:2},{value:"\u529f\u80fd\u652f\u6301",id:"\u529f\u80fd\u652f\u6301",level:2}],g={toc:s},c="wrapper";function y(e){let{components:a,...i}=e;return(0,n.yg)(c,(0,r.A)({},g,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"DataGrip \u662f JetBrains \u51fa\u54c1\u7684\u9002\u7528\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c NoSQL \u6570\u636e\u5e93\u7684\u5f3a\u5927\u8de8\u5e73\u53f0\u6570\u636e\u5e93\u5de5\u5177\u3002"),(0,n.yg)("p",null,"Apache Doris \u9ad8\u5ea6\u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u53ef\u4ee5\u4f7f\u7528 DataGrip \u7684 MySQL \u6570\u636e\u6e90\u8fde\u63a5 Apache Doris\uff0c\u5e76\u67e5\u8be2 internal catalog \u548c external catalog \u4e2d\u7684\u6570\u636e\u3002"),(0,n.yg)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.yg)("p",null,"\u5df2\u5b89\u88c5 DataGrip\n\u53ef\u4ee5\u8bbf\u95ee ",(0,n.yg)("a",{parentName:"p",href:"http://www.jetbrains.com/datagrip/"},"www.jetbrains.com/datagrip/")," \u4e0b\u8f7d\u5b89\u88c5 DataGrip"),(0,n.yg)("h2",{id:"\u6dfb\u52a0\u6570\u636e\u6e90"},"\u6dfb\u52a0\u6570\u636e\u6e90"),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"\u5f53\u524d\u9a8c\u8bc1\u4f7f\u7528 DataGrip 2023.3.4 \u7248\u672c")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u542f\u52a8 DataGrip")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728 DataGrip \u7a97\u53e3\u5de6\u4e0a\u89d2\u5355\u51fb\u52a0\u53f7 (",(0,n.yg)("strong",{parentName:"p"},"+"),") \u56fe\u6807\uff0c\u9009\u62e9 MySQL \u6570\u636e\u6e90"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u6dfb\u52a0\u6570\u636e\u6e90",src:t(560883).A,width:"1280",height:"850"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u914d\u7f6e Doris \u8fde\u63a5"),(0,n.yg)("p",{parentName:"li"},"\u5728 Data Sources and Drivers \u7a97\u53e3\u7684 General \u6807\u7b7e\u9875\uff0c\u914d\u7f6e\u4ee5\u4e0b\u8fde\u63a5\u4fe1\u606f\uff1a"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Host\uff1aDoris \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Port\uff1aDoris \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 9030\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Database\uff1aDoris \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"User\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 admin\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Password\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"),(0,n.yg)("admonition",{parentName:"li",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Database \u53ef\u4ee5\u7528\u4e8e\u533a\u522b internal catalog \u548c external catalog\uff0c\u5982\u4ec5\u586b\u5199 Database \u540d\u79f0\uff0c\u5219\u5f53\u524d\u6570\u636e\u6e90\u9ed8\u8ba4\u8fde\u63a5 internal catalog\uff0c\u5982\u586b\u5199\u683c\u5f0f\u4e3a catalog.db\uff0c\u5219\u5f53\u524d\u6570\u636e\u6e90\u9ed8\u8ba4\u8fde\u63a5 Database \u4e2d\u6240\u586b\u5199\u7684 catalog\uff0cDataGrip \u4e2d\u5c55\u793a\u7684\u5e93\u8868\u4e5f\u4e3a\u6240\u8fde\u63a5 catalog \u4e2d\u7684\u5e93\u8868\uff0c\u4ee5\u6b64\u53ef\u4ee5\u4f7f\u7528 DataGrip \u7684 MySQL \u6570\u636e\u6e90\u6765\u521b\u5efa\u591a\u4e2a Doris \u6570\u636e\u6e90\u6765\u7ba1\u7406 Doris \u4e2d\u4e0d\u540c\u7684 Catalog\u3002")),(0,n.yg)("admonition",{parentName:"li",title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"\u901a\u8fc7 catalog.db \u7684 Database \u5f62\u5f0f\u6765\u7ba1\u7406\u8fde\u63a5 Doris \u7684 external catalog \u9700\u8981 Doris \u7248\u672c\u5728 2.1.0 \u53ca\u4ee5\u4e0a"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"internal catalog"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u8fde\u63a5 internal catalog",src:t(386392).A,width:"1280",height:"1081"}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"external catalog"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u8fde\u63a5 external catalog",src:t(871009).A,width:"1280",height:"1081"})))),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6d4b\u8bd5\u6570\u636e\u6e90\u8fde\u63a5"),(0,n.yg)("p",{parentName:"li"}," \u5728\u586b\u5199\u5b8c\u8fde\u63a5\u4fe1\u606f\u540e\uff0c\u5355\u51fb\u5de6\u4e0b\u89d2 Test Connection \u9a8c\u8bc1\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u7684\u51c6\u786e\u6027\u3002DBeaver \u8fd4\u56de\u5982\u4e0b\u5bf9\u5f39\u7a97\u5219\u6d4b\u8bd5\u8fde\u63a5\u6210\u529f\u3002\u7136\u540e\u5355\u51fb\u53f3\u4e0b\u89d2 OK \u5b8c\u6210\u8fde\u63a5\u914d\u7f6e\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u6d4b\u8bd5\u8fde\u63a5",src:t(518542).A,width:"1280",height:"1081"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8fde\u63a5\u6570\u636e\u5e93"),(0,n.yg)("p",{parentName:"li"}," \u6570\u636e\u5e93\u8fde\u63a5\u5efa\u7acb\u4ee5\u540e\uff0c\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bfc\u822a\u770b\u5230\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 DataGrip \u8fde\u63a5\u5e76\u7ba1\u7406\u6570\u636e\u5e93\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u5efa\u7acb\u8fde\u63a5",src:t(177911).A,width:"1280",height:"850"})))),(0,n.yg)("h2",{id:"\u529f\u80fd\u652f\u6301"},"\u529f\u80fd\u652f\u6301"),(0,n.yg)("p",null,"\u57fa\u672c\u652f\u6301\u5927\u90e8\u5206\u53ef\u89c6\u5316\u67e5\u770b\u64cd\u4f5c\uff0c\u4ee5\u53ca SQL \u63a7\u5236\u53f0\u7f16\u5199 SQL \u64cd\u4f5c Doris\uff0c\u4e0d\u652f\u6301\u6216\u672a\u7ecf\u9a8c\u8bc1\u5404\u79cd\u521b\u5efa\u5e93\u8868\u3001schema change\u3001\u589e\u5220\u6539\u6570\u636e\u64cd\u4f5c\u3002"))}y.isMDXComponent=!0},560883:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/datagrip1-f19b9e109f1c1eac95c64c5bcc212d13.png"},386392:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/datagrip2-f3ff2e8b80db98c58649088293cd77b5.png"},871009:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/datagrip3-e58d5f50d57af98ecbc959e1879e11b5.png"},518542:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/datagrip4-d396b9987726e0ad47636f4f629a148a.png"},177911:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/datagrip5-7414328ecc98a654c737cd21134d5e60.png"}}]);