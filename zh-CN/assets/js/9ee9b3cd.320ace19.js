"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[307227],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"Cluster Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/open-api/fe-http/cluster-action",id:"admin-manual/open-api/fe-http/cluster-action",title:"Cluster Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/cluster-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/cluster-action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/cluster-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Cluster Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Meta Action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/meta-action"},next:{title:"Node Action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/node-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"\u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f",id:"\u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f",level:2},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/cluster/cluster_info/conn_info")),(0,a.yg)("h2",{id:"\u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f"},"\u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/cluster/cluster_info/conn_info")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4 http\u3001mysql \u8fde\u63a5\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n')),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n')))}d.isMDXComponent=!0}}]);