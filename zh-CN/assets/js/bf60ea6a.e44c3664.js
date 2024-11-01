"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[496232],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>m});var l=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=l.createContext({}),o=function(e){var a=l.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=o(e.components);return l.createElement(p.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=o(n),u=t,m=y["".concat(p,".").concat(u)]||y[u]||g[u]||r;return n?l.createElement(m,i(i({ref:a},s),{},{components:n})):l.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c[y]="string"==typeof e?e:t,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},279188:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=n(58168),t=(n(296540),n(15680));const r={title:"\u67e5\u8be2\u7f13\u5b58",language:"zh-CN"},i=void 0,c={unversionedId:"query-acceleration/sql-cache-manual",id:"version-2.1/query-acceleration/sql-cache-manual",title:"\u67e5\u8be2\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/sql-cache-manual.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/sql-cache-manual",permalink:"/zh-CN/docs/query-acceleration/sql-cache-manual",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u67e5\u8be2\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/query-acceleration/materialized-view/async-materialized-view/faq"},next:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",permalink:"/zh-CN/docs/query-acceleration/high-concurrent-point-query"}},p={},o=[{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"BE \u5b9e\u73b0\u539f\u7406",id:"be-\u5b9e\u73b0\u539f\u7406",level:3},{value:"FE \u5b9e\u73b0\u539f\u7406",id:"fe-\u5b9e\u73b0\u539f\u7406",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5f00\u542f\u548c\u5173\u95ed SQL Cache",id:"\u5f00\u542f\u548c\u5173\u95ed-sql-cache",level:3},{value:"\u68c0\u67e5\u67e5\u8be2\u662f\u5426\u547d\u4e2d SQL Cache",id:"\u68c0\u67e5\u67e5\u8be2\u662f\u5426\u547d\u4e2d-sql-cache",level:3},{value:"\u7edf\u8ba1\u7f13\u5b58\u7684\u6307\u6807",id:"\u7edf\u8ba1\u7f13\u5b58\u7684\u6307\u6807",level:3},{value:"FE \u5185\u5b58\u63a7\u5236",id:"fe-\u5185\u5b58\u63a7\u5236",level:3},{value:"BE \u5185\u5b58\u63a7\u5236",id:"be-\u5185\u5b58\u63a7\u5236",level:3},{value:"\u6392\u67e5\u7f13\u5b58\u5931\u6548\u539f\u56e0",id:"\u6392\u67e5\u7f13\u5b58\u5931\u6548\u539f\u56e0",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u975e\u786e\u5b9a\u51fd\u6570",id:"\u975e\u786e\u5b9a\u51fd\u6570",level:3}],s={toc:o},y="wrapper";function g(e){let{components:a,...n}=e;return(0,t.yg)(y,(0,l.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u6982\u5ff5\u4ecb\u7ecd"},"\u6982\u5ff5\u4ecb\u7ecd"),(0,t.yg)("p",null,"SQL Cache \u662f Doris \u63d0\u4f9b\u7684\u4e00\u79cd\u67e5\u8be2\u4f18\u5316\u673a\u5236\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002\u5b83\u901a\u8fc7\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u6765\u51cf\u5c11\u91cd\u590d\u8ba1\u7b97\uff0c\u9002\u7528\u4e8e\u6570\u636e\u66f4\u65b0\u9891\u7387\u8f83\u4f4e\u7684\u573a\u666f\u3002"),(0,t.yg)("p",null,"SQL Cache \u57fa\u4e8e\u4ee5\u4e0b\u5173\u952e\u56e0\u7d20\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"SQL \u6587\u672c")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u89c6\u56fe\u5b9a\u4e49")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8868\u548c\u5206\u533a\u7684\u7248\u672c")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u7528\u6237\u53d8\u91cf\u548c\u7ed3\u679c\u503c")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u975e\u786e\u5b9a\u51fd\u6570\u548c\u7ed3\u679c\u503c")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u884c\u7b56\u7565\u5b9a\u4e49")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6570\u636e\u8131\u654f\u5b9a\u4e49"))),(0,t.yg)("p",null,"\u4ee5\u4e0a\u56e0\u7d20\u7684\u7ec4\u5408\u552f\u4e00\u786e\u5b9a\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u96c6\u3002\u5982\u679c\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u53d1\u751f\u53d8\u5316\uff0c\u4f8b\u5982 SQL \u53d8\u5316\u3001\u67e5\u8be2\u5b57\u6bb5\u6216\u6761\u4ef6\u4e0d\u540c\u6216\u8005\u6570\u636e\u66f4\u65b0\u540e\u7248\u672c\u53d8\u5316\uff0c\u7f13\u5b58\u5c06\u4e0d\u4f1a\u547d\u4e2d\u3002"),(0,t.yg)("p",null,"\u5bf9\u4e8e\u6d89\u53ca\u591a\u8868 Join \u7684\u67e5\u8be2\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u8868\u66f4\u65b0\u4e86\uff0c\u5206\u533a ID \u6216\u7248\u672c\u53f7\u5c31\u4f1a\u4e0d\u540c\uff0c\u5bfc\u81f4\u7f13\u5b58\u65e0\u6cd5\u547d\u4e2d\u3002"),(0,t.yg)("p",null,"SQL Cache \u975e\u5e38\u9002\u5408 T+1 \u66f4\u65b0\u573a\u666f\u3002\u6570\u636e\u5728\u51cc\u6668\u66f4\u65b0\uff0c\u7b2c\u4e00\u6b21\u67e5\u8be2\u4ece BE \u83b7\u53d6\u7ed3\u679c\u5e76\u653e\u5165\u7f13\u5b58\uff0c\u540e\u7eed\u76f8\u540c\u6027\u8d28\u7684\u67e5\u8be2\u5219\u76f4\u63a5\u4ece\u7f13\u5b58\u83b7\u53d6\u7ed3\u679c\u3002\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528 SQL Cache\uff0c\u4f46\u53ef\u80fd\u4f1a\u9762\u4e34\u8f83\u4f4e\u7684\u7f13\u5b58\u547d\u4e2d\u7387\u3002"),(0,t.yg)("p",null,"\u76ee\u524d\uff0cSQL Cache \u652f\u6301 OlapTable \u5185\u90e8\u8868\u548c Hive \u5916\u90e8\u8868\u3002"),(0,t.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,t.yg)("h3",{id:"be-\u5b9e\u73b0\u539f\u7406"},"BE \u5b9e\u73b0\u539f\u7406"),(0,t.yg)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cSQL Cache \u7684\u7ed3\u679c\u4f1a\u901a\u8fc7\u4e00\u81f4\u6027\u54c8\u5e0c\u65b9\u6cd5\u9009\u62e9\u4e00\u4e2a BE\uff0c\u5e76\u5c06\u5176\u5b58\u653e\u5728\u8be5 BE \u7684\u5185\u5b58\u4e2d\u3002\u8fd9\u4e9b\u7ed3\u679c\u4ee5 HashMap \u7684\u7ed3\u6784\u8fdb\u884c\u5b58\u50a8\u3002\u5f53\u8bfb\u5199 Cache \u7684\u8bf7\u6c42\u5230\u6765\u65f6\uff0c\u7cfb\u7edf\u4f1a\u4f7f\u7528 SQL \u5b57\u7b26\u4e32\u7b49\u5143\u6570\u636e\u4fe1\u606f\u7684\u6458\u8981\u4f5c\u4e3a Key\uff0c\u4ece HashMap \u4e2d\u5feb\u901f\u68c0\u7d22\u7ed3\u679c\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,t.yg)("h3",{id:"fe-\u5b9e\u73b0\u539f\u7406"},"FE \u5b9e\u73b0\u539f\u7406"),(0,t.yg)("p",null,"\u5f53 FE \u63a5\u6536\u5230\u67e5\u8be2\u8bf7\u6c42\u65f6\uff0c\u5b83\u9996\u5148\u4f1a\u5728\u5185\u5b58\u4e2d\u5229\u7528 SQL \u5b57\u7b26\u4e32\u8fdb\u884c\u67e5\u627e\uff0c\u5224\u65ad\u4e4b\u524d\u662f\u5426\u6267\u884c\u8fc7\u76f8\u540c\u7684\u67e5\u8be2\uff0c\u5e76\u5c1d\u8bd5\u83b7\u53d6\u8be5\u67e5\u8be2\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u67e5\u8be2\u6240\u6d89\u53ca\u8868\u7684\u7248\u672c\u4ee5\u53ca\u5206\u533a\u7684\u7248\u672c\u3002"),(0,t.yg)("p",null,"\u82e5\u8fd9\u4e9b\u5143\u6570\u636e\u4fe1\u606f\u4fdd\u6301\u4e0d\u53d8\uff0c\u5219\u8bf4\u660e\u76f8\u5e94\u8868\u7684\u6570\u636e\u672a\u53d1\u751f\u53d8\u66f4\uff0c\u56e0\u6b64\u53ef\u4ee5\u91cd\u590d\u5229\u7528\u4e4b\u524d\u7684 SQL Cache\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cFE \u80fd\u591f\u8df3\u8fc7 SQL \u89e3\u6790\u4f18\u5316\u6d41\u7a0b\uff0c\u76f4\u63a5\u4f9d\u636e\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5\u5b9a\u4f4d\u5230\u5bf9\u5e94\u7684 BE\uff0c\u5e76\u5c1d\u8bd5\u4ece\u4e2d\u68c0\u7d22\u67e5\u8be2\u7ed3\u679c\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u82e5\u76ee\u6807 BE \u4e2d\u5b58\u6709\u8be5\u67e5\u8be2\u7ed3\u679c\u7684\u7f13\u5b58\uff0cFE \u4fbf\u80fd\u8fc5\u901f\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u53cd\u4e4b\uff0c\u82e5 BE \u4e2d\u672a\u627e\u5230\u5bf9\u5e94\u7684\u7ed3\u679c\u7f13\u5b58\uff0cFE \u5219\u9700\u6267\u884c\u5b8c\u6574\u7684 SQL \u89e3\u6790\u4e0e\u4f18\u5316\u6d41\u7a0b\uff0c\u968f\u540e\u5c06\u67e5\u8be2\u8ba1\u5212\u4f20\u9001\u81f3 BE \u8fdb\u884c\u8ba1\u7b97\u5904\u7406\u3002"))),(0,t.yg)("p",null,"\u5f53 BE \u5c06\u8ba1\u7b97\u7ed3\u679c\u8fd4\u56de\u7ed9 FE \u540e\uff0cFE \u4f1a \u8d1f\u8d23\u5c06\u8fd9\u4e9b\u7ed3\u679c\u5b58\u50a8\u81f3\u5bf9\u5e94\u7684 BE \u4e2d\uff0c\u5e76\u5728\u5176\u5185\u5b58\u4e2d\u8bb0\u5f55\u6b64\u6b21\u67e5\u8be2\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u5728\u540e\u7eed\u63a5\u6536\u5230\u76f8\u540c\u67e5\u8be2\u65f6\uff0cFE \u80fd\u591f\u76f4\u63a5\u4ece BE \u4e2d\u83b7\u53d6\u7ed3\u679c\uff0c\u4ece\u800c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"),(0,t.yg)("p",null,"\u6b64\u5916\uff0c\u5982\u679c SQL \u4f18\u5316\u9636\u6bb5\u5224\u65ad\u51fa\u67e5\u8be2\u7ed3\u679c\u4ec5\u5305\u542b 0 \u884c\u6216 1 \u884c\u6570\u636e\uff0cFE \u4f1a\u9009\u62e9\u5c06\u8fd9\u4e9b\u7ed3\u679c\u4fdd\u5b58\u5728\u5176\u5185\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u66f4\u5feb\u901f\u5730\u54cd\u5e94\u672a\u6765\u53ef\u80fd\u7684\u76f8\u540c\u67e5\u8be2\u3002"),(0,t.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,t.yg)("h3",{id:"\u5f00\u542f\u548c\u5173\u95ed-sql-cache"},"\u5f00\u542f\u548c\u5173\u95ed SQL Cache"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u5728\u5f53\u524d Session \u6253\u5f00 SQL Cache, \u9ed8\u8ba4\u662f\u5173\u95ed\u72b6\u6001\nset enable_sql_cache=true;\n-- \u5728\u5f53\u524d Session \u5173\u95ed SQL Cache\nset enable_sql_cache=false;\n\n-- \u5168\u5c40\u6253\u5f00 SQL Cache, \u9ed8\u8ba4\u662f\u5173\u95ed\u72b6\u6001\nset global enable_sql_cache=true;\n-- \u5168\u5c40\u5173\u95ed SQL Cache\nset global enable_sql_cache=false;\n")),(0,t.yg)("h3",{id:"\u68c0\u67e5\u67e5\u8be2\u662f\u5426\u547d\u4e2d-sql-cache"},"\u68c0\u67e5\u67e5\u8be2\u662f\u5426\u547d\u4e2d SQL Cache"),(0,t.yg)("p",null,"\u5728 Doris 2.1.3 \u7248\u672c\u53ca\u5176\u540e\u7eed\u7248\u672c\u4e2d\uff0c\u7528\u6237\u80fd\u591f\u901a\u8fc7\u6267\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"explain plan"),"\u8bed\u53e5\u68c0\u67e5\u5f53\u524d\u67e5\u8be2\u662f\u5426\u80fd\u591f\u6210\u529f\u547d\u4e2d SQL Cache\u3002"),(0,t.yg)("p",null,"\u5982\u793a\u4f8b\u6240\u793a\uff0c\u5f53\u67e5\u8be2\u8ba1\u5212\u6811\u4e2d\u51fa\u73b0",(0,t.yg)("inlineCode",{parentName:"p"},"LogicalSqlCache"),"\u6216",(0,t.yg)("inlineCode",{parentName:"p"},"PhysicalSqlCache"),"\u8282\u70b9\u65f6\uff0c\u5373\u8868\u660e\u67e5\u8be2\u5df2\u547d\u4e2d SQL Cache\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"> explain plan select * from t2;\n\n+------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                            |\n+------------------------------------------------------------------------------------------------------------+\n| ========== PARSED PLAN (time: 28ms) ==========                                                             |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== ANALYZED PLAN  ==========                                                                       |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== REWRITTEN PLAN  ==========                                                                      |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== OPTIMIZED PLAN  ==========                                                                      |\n| PhysicalSqlCache[3] ( queryId=711dea740e4746e6-8bc11afe08f6542c, backend=192.168.126.3:9051, rowCount=12 ) |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n+------------------------------------------------------------------------------------------------------------+\n")),(0,t.yg)("p",null,"\u5bf9\u4e8e Doris 2.1.3 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u7528\u6237\u5219\u9700\u8981\u901a\u8fc7\u67e5\u770b Profile \u4fe1\u606f\u6765\u786e\u8ba4\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86 SQL Cache\u3002\u5728 Profile \u4fe1\u606f\u4e2d\uff0c\u82e5 ",(0,t.yg)("inlineCode",{parentName:"p"},"Is Cached:")," \u8fd9\u4e00\u5b57\u6bb5\u663e\u793a\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Yes"),"\uff0c\u5219\u4ee3\u8868\u8be5\u67e5\u8be2\u5df2\u6210\u529f\u547d\u4e2d SQL Cache\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"Execution  Summary:\n      -  Parse  SQL  Time:  18ms\n      -  Nereids  Analysis  Time:  N/A\n      -  Nereids  Rewrite  Time:  N/A\n      -  Nereids  Optimize  Time:  N/A\n      -  Nereids  Translate  Time:  N/A\n      -  Workload  Group:  normal\n      -  Analysis  Time:  N/A\n      -  Wait  and  Fetch  Result  Time:  N/A\n      -  Fetch  Result  Time:  0ms\n      -  Write  Result  Time:  0ms\n      -  Doris  Version:  915138e801\n      -  Is  Nereids:  Yes\n      -  Is  Cached:  Yes\n      -  Total  Instances  Num:  0\n      -  Instances  Num  Per  BE:  \n      -  Parallel  Fragment  Exec  Instance  Num:  1\n      -  Trace  ID:  \n      -  Transaction  Commit  Time:  N/A\n      -  Nereids  Distribute  Time:  N/A\n")),(0,t.yg)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u5747\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u6709\u6548\u7684\u624b\u6bb5\u6765\u9a8c\u8bc1\u67e5\u8be2\u662f\u5426\u5229\u7528\u4e86 SQL Cache\uff0c\u4ece\u800c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8bc4\u4f30\u67e5\u8be2\u6027\u80fd\u5e76\u4f18\u5316\u67e5\u8be2\u7b56\u7565\u3002"),(0,t.yg)("h3",{id:"\u7edf\u8ba1\u7f13\u5b58\u7684\u6307\u6807"},"\u7edf\u8ba1\u7f13\u5b58\u7684\u6307\u6807"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u5728 FE \u7684 HTTP \u63a5\u53e3")," ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"http://${FE_IP}:${FE_HTTP_PORT}/metrics"))," ",(0,t.yg)("strong",{parentName:"p"},"\u4f1a\u8fd4\u56de\u4e24\u4e2a\u76f8\u5173\u6307\u6807\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Plain"},'# \u4ee3\u8868\u5df2\u7ecf\u628a 1 \u4e2a SQL \u5199\u5165\u5230\u7f13\u5b58\u4e2d\ndoris_fe_cache_added{type="sql"} 1\n\n# \u4ee3\u8868\u547d\u4e2d\u4e86\u4e24\u6b21 SQL Cache\ndoris_fe_cache_hit{type="sql"} 2\n')),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u6307\u6807\u7edf\u8ba1\u7684\u662f\u547d\u4e2d\u6b21\u6570\uff0c\u53ea\u589e\u4e0d\u51cf\uff0c\u5f53 FE \u91cd\u542f\u540e\u4ece 0 \u5f00\u59cb\u7edf\u8ba1\u3002")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. \u5728 BE \u7684 HTTP \u63a5\u53e3")," ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"http://${BE_IP}:${BE_HTTP_PORT}/metrics"))," ",(0,t.yg)("strong",{parentName:"p"},"\u4f1a\u8fd4\u56de\u76f8\u5173\u4fe1\u606f\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u4ee3\u8868\u5f53\u524d BE \u7684\u5185\u5b58\u4e2d\u5b58\u5728 1205 \u4e2a Cache\ndoris_be_query_cache_sql_total_count 1205\n\n# \u5f53\u524d\u6240\u6709 Cache \u5360\u7528 BE \u5185\u5b58 44k\ndoris_be_query_cache_memory_total_byte 44101\n")),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u4e0d\u540c\u7684 Cache \u53ef\u80fd\u4f1a\u5b58\u653e\u5230\u4e0d\u540c\u7684 BE \u4e2d\uff0c\u56e0\u6b64\u9700\u6536\u96c6\u6240\u6709 BE \u7684 Metrics \u624d\u80fd\u5f97\u5230\u5b8c\u6574\u4fe1\u606f\u3002")),(0,t.yg)("h3",{id:"fe-\u5185\u5b58\u63a7\u5236"},"FE \u5185\u5b58\u63a7\u5236"),(0,t.yg)("p",null,"\u5728 FE \u4e2d\uff0cCache \u7684\u5143\u6570\u636e\u4fe1\u606f\u88ab\u8bbe\u7f6e\u4e3a\u5f31\u5f15\u7528\u3002\u5f53 FE \u5185\u5b58\u4e0d\u8db3\u65f6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u91ca\u653e\u6700\u8fd1\u6700\u4e45\u672a\u4f7f\u7528\u7684 Cache \u5143\u6570\u636e\u3002\u6b64\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b SQL \u8bed\u53e5\uff0c\u8fdb\u4e00\u6b65\u9650\u5236 FE \u5185\u5b58\u7684\u4f7f\u7528\u91cf\u3002\u6b64\u914d\u7f6e\u5b9e\u65f6\u751f\u6548\uff0c\u4e14\u6bcf\u4e2a FE \u90fd\u9700\u8981\u8fdb\u884c\u914d\u7f6e\u3002\u82e5\u9700\u6301\u4e45\u5316\u914d\u7f6e\uff0c\u5219\u9700\u5c06\u5176\u4fdd\u5b58\u5728 fe.conf \u6587\u4ef6\u4e2d\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u6700\u591a\u5b58\u653e 100 \u4e2a Cache \u5143\u6570\u636e\uff0c\u8d85\u8fc7\u65f6\u81ea\u52a8\u91ca\u653e\u6700\u8fd1\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u6570\u636e\u3002\u9ed8\u8ba4\u503c\u4e3a 100\u3002  \nADMIN SET FRONTEND CONFIG ('sql_cache_manage_num'='100');  \n  \n-- \u5f53 300 \u79d2\u672a\u8bbf\u95ee\u8be5 Cache \u5143\u6570\u636e\u540e\uff0c\u81ea\u52a8\u8fdb\u884c\u91ca\u653e\u3002\u9ed8\u8ba4\u503c\u4e3a 300\u3002  \nADMIN SET FRONTEND CONFIG ('expire_sql_cache_in_fe_second'='300');\n")),(0,t.yg)("h3",{id:"be-\u5185\u5b58\u63a7\u5236"},"BE \u5185\u5b58\u63a7\u5236"),(0,t.yg)("p",null,"\u5728 be.conf \u6587\u4ef6\u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\u66f4\u6539\uff0c\u91cd\u542f BE \u540e\u751f\u6548\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u5f53 Cache \u7684\u5185\u5b58\u7a7a\u95f4\u8d85\u8fc7 query_cache_max_size_mb + query_cache_elasticity_size_mb \u65f6\uff0c  \n-- \u91ca\u653e\u6700\u8fd1\u6700\u4e45\u672a\u4f7f\u7528\u7684 Cache\uff0c\u76f4\u81f3\u5360\u7528\u5185\u5b58\u4f4e\u4e8e query_cache_max_size_mb\u3002  \nquery_cache_max_size_mb = 256  \nquery_cache_elasticity_size_mb = 128\n")),(0,t.yg)("p",null,"\u53e6\u5916\u8fd8\u53ef\u4ee5\u5728 FE \u4e2d\u914d\u7f6e\uff0c\u5f53\u7ed3\u679c\u884c\u6570\u6216\u5927\u5c0f\u8d85\u8fc7\u67d0\u4e2a\u9608\u503c\u65f6\uff0c\u4e0d\u521b\u5efa SQL Cache\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u9ed8\u8ba4\u8d85\u8fc7 3000 \u884c\u7ed3\u679c\u65f6\uff0c\u4e0d\u521b\u5efa SQL Cache\u3002  \nADMIN SET FRONTEND CONFIG ('cache_result_max_row_count'='3000');  \n  \n-- \u9ed8\u8ba4\u8d85\u8fc7 30M \u65f6\uff0c\u4e0d\u521b\u5efa SQL Cache\u3002  \nADMIN SET FRONTEND CONFIG ('cache_result_max_data_size'='31457280');\n")),(0,t.yg)("h3",{id:"\u6392\u67e5\u7f13\u5b58\u5931\u6548\u539f\u56e0"},"\u6392\u67e5\u7f13\u5b58\u5931\u6548\u539f\u56e0"),(0,t.yg)("p",null,"\u7f13\u5b58\u5931\u6548\u539f\u56e0\u4e00\u822c\u5305\u62ec\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8868/\u89c6\u56fe\u7684\u7ed3\u6784\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4f8b\u5982\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"drop table"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"replace table"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"alter table")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"alter view")," \u7b49\u64cd\u4f5c\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8868\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4f8b\u5982\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"insert"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"delete"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"update")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"truncate")," \u7b49\u64cd\u4f5c\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u7528\u6237\u6743\u9650\u88ab\u79fb\u9664\uff0c\u4f8b\u5982\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"revoke")," \u64cd\u4f5c\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4e86\u975e\u786e\u5b9a\u51fd\u6570\uff0c\u5e76\u4e14\u51fd\u6570\u7684\u8bc4\u4f30\u503c\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4f8b\u5982\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"select random()"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4e86\u53d8\u91cf\uff0c\u5e76\u4e14\u53d8\u91cf\u7684\u503c\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4f8b\u5982\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"select * from tbl where dt = @dt_var"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Row Policy \u6216 Data Masking \u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4f8b\u5982\u8bbe\u7f6e\u4e86\u7528\u6237\u5bf9\u67d0\u4e9b\u8868\u7684\u90e8\u5206\u6570\u636e\u4e0d\u53ef\u89c1\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u7ed3\u679c\u884c\u6570\u8d85\u8fc7\u4e86 FE \u914d\u7f6e\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cache_result_max_row_count"),"\uff0c\u9ed8\u8ba4\u503c\u4e3a 3000 \u884c\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u7ed3\u679c\u5927\u5c0f\u8d85\u8fc7\u4e86 FE \u914d\u7f6e\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cache_result_max_data_size"),"\uff0c\u9ed8\u8ba4\u503c\u4e3a 30MB\u3002"))),(0,t.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,t.yg)("h3",{id:"\u975e\u786e\u5b9a\u51fd\u6570"},"\u975e\u786e\u5b9a\u51fd\u6570"),(0,t.yg)("p",null,"\u975e\u786e\u5b9a\u51fd\u6570\u662f\u6307\u5176\u8fd0\u7b97\u7ed3\u679c\u4e0e\u8f93\u5165\u53c2\u6570\u4e4b\u95f4\u65e0\u6cd5\u5f62\u6210\u56fa\u5b9a\u5173\u7cfb\u7684\u51fd\u6570\u3002"),(0,t.yg)("p",null,"\u4ee5\u5e38\u89c1\u51fd\u6570 ",(0,t.yg)("inlineCode",{parentName:"p"},"select now()")," \u4e3a\u4f8b\uff0c\u5b83\u8fd4\u56de\u5f53\u524d\u7684\u65e5\u671f\u4e0e\u65f6\u95f4\u3002\u7531\u4e8e\u8be5\u51fd\u6570\u5728\u4e0d\u540c\u65f6\u95f4\u6267\u884c\u65f6\u4f1a\u8fd4\u56de\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u56e0\u6b64\u5176\u8fd4\u56de\u503c\u662f\u52a8\u6001\u53d8\u5316\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"now")," \u51fd\u6570\u8fd4\u56de\u7684\u662f\u79d2\u7ea7\u522b\u7684\u65f6\u95f4\uff0c\u6240\u4ee5\u5728\u540c\u4e00\u79d2\u5185\u53ef\u4ee5\u590d\u7528\u4e4b\u524d\u7684 SQL Cache\uff1b\u4f46\u4e0b\u4e00\u79d2\u4e4b\u540e\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u521b\u5efa SQL Cache\u3002"),(0,t.yg)("p",null,"\u4e3a\u4e86\u4f18\u5316\u7f13\u5b58\u5229\u7528\u7387\uff0c\u5efa\u8bae\u5c06\u8fd9\u79cd\u7ec6\u7c92\u5ea6\u7684\u65f6\u95f4\u8f6c\u4e3a\u7c97\u7c92\u5ea6\u7684\u65f6\u95f4\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"select * from tbl where dt=date(now())"),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u540c\u4e00\u5929\u7684\u67e5\u8be2\u90fd\u53ef\u4ee5\u5229\u7528\u5230 SQL Cache\u3002"),(0,t.yg)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"random()")," \u51fd\u6570\u5219\u5f88\u96be\u5229\u7528\u5230 Cache\uff0c\u56e0\u4e3a\u5b83\u6bcf\u6b21\u8fd0\u7b97\u7684\u7ed3\u679c\u90fd\u662f\u4e0d\u540c\u7684\u3002\u56e0\u6b64\uff0c\u5e94\u5c3d\u91cf\u907f\u514d\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u8fd9\u7c7b\u975e\u786e\u5b9a\u51fd\u6570\u3002"))}g.isMDXComponent=!0}}]);