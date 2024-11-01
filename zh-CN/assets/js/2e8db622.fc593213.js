"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[868904],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(a),m=r,u=y["".concat(p,".").concat(m)]||y[m]||g[m]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"\u8fdc\u7a0b\u5b58\u50a8",language:"zh-CN"},o=void 0,i={unversionedId:"table-design/tiered-storage/remote-storage",id:"version-3.0/table-design/tiered-storage/remote-storage",title:"\u8fdc\u7a0b\u5b58\u50a8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/tiered-storage/remote-storage.md",sourceDirName:"table-design/tiered-storage",slug:"/table-design/tiered-storage/remote-storage",permalink:"/zh-CN/docs/3.0/table-design/tiered-storage/remote-storage",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u8fdc\u7a0b\u5b58\u50a8",language:"zh-CN"},sidebar:"docs",previous:{title:"SSD \u548c HDD \u5c42\u7ea7\u5b58\u50a8",permalink:"/zh-CN/docs/3.0/table-design/tiered-storage/diff-disk-medium-migration"},next:{title:"\u6a21\u578b\u6982\u8ff0",permalink:"/zh-CN/docs/3.0/table-design/data-model/overview"}},p={},c=[{value:"\u9700\u6c42\u573a\u666f",id:"\u9700\u6c42\u573a\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"Storage policy \u7684\u4f7f\u7528",id:"storage-policy-\u7684\u4f7f\u7528",level:2},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:3},{value:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f",id:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f",level:2},{value:"\u51b7\u6570\u636e\u7684 cache",id:"\u51b7\u6570\u636e\u7684-cache",level:2},{value:"\u51b7\u6570\u636e\u7684 Compaction",id:"\u51b7\u6570\u636e\u7684-compaction",level:2},{value:"\u51b7\u6570\u636e\u7684 Schema Change",id:"\u51b7\u6570\u636e\u7684-schema-change",level:2},{value:"\u51b7\u6570\u636e\u7684\u5783\u573e\u56de\u6536",id:"\u51b7\u6570\u636e\u7684\u5783\u573e\u56de\u6536",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:c},y="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u9700\u6c42\u573a\u666f"},"\u9700\u6c42\u573a\u666f"),(0,r.yg)("p",null,"\u672a\u6765\u4e00\u4e2a\u5f88\u5927\u7684\u4f7f\u7528\u573a\u666f\u662f\u7c7b\u4f3c\u4e8e ES \u65e5\u5fd7\u5b58\u50a8\uff0c\u65e5\u5fd7\u573a\u666f\u4e0b\u6570\u636e\u4f1a\u6309\u7167\u65e5\u671f\u6765\u5207\u5272\u6570\u636e\uff0c\u5f88\u591a\u6570\u636e\u662f\u51b7\u6570\u636e\uff0c\u67e5\u8be2\u5f88\u5c11\uff0c\u9700\u8981\u964d\u4f4e\u8fd9\u7c7b\u6570\u636e\u7684\u5b58\u50a8\u6210\u672c\u3002\u4ece\u8282\u7ea6\u5b58\u50a8\u6210\u672c\u89d2\u5ea6\u8003\u8651\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5404\u4e91\u5382\u5546\u666e\u901a\u4e91\u76d8\u7684\u4ef7\u683c\u90fd\u6bd4\u5bf9\u8c61\u5b58\u50a8\u8d35")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 Doris \u96c6\u7fa4\u5b9e\u9645\u7ebf\u4e0a\u4f7f\u7528\u4e2d\uff0c\u666e\u901a\u4e91\u76d8\u7684\u5229\u7528\u7387\u65e0\u6cd5\u8fbe\u5230 100%")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e91\u76d8\u4e0d\u662f\u6309\u9700\u4ed8\u8d39\uff0c\u800c\u5bf9\u8c61\u5b58\u50a8\u53ef\u4ee5\u505a\u5230\u6309\u9700\u4ed8\u8d39")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u57fa\u4e8e\u666e\u901a\u4e91\u76d8\u505a\u9ad8\u53ef\u7528\uff0c\u9700\u8981\u5b9e\u73b0\u591a\u526f\u672c\uff0c\u67d0\u526f\u672c\u5f02\u5e38\u8981\u505a\u526f\u672c\u8fc1\u79fb\u3002\u800c\u5c06\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\u5219\u4e0d\u5b58\u5728\u6b64\u7c7b\u95ee\u9898\uff0c\u56e0\u4e3a\u5bf9\u8c61\u5b58\u50a8\u662f\u5171\u4eab\u7684\u3002"))),(0,r.yg)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.yg)("p",null,"\u5728 Partition \u7ea7\u522b\u4e0a\u8bbe\u7f6e Freeze time\uff0c\u8868\u793a\u591a\u4e45\u8fd9\u4e2a Partition \u4f1a\u88ab Freeze\uff0c\u5e76\u4e14\u5b9a\u4e49 Freeze \u4e4b\u540e\u5b58\u50a8\u7684 Remote storage \u7684\u4f4d\u7f6e\u3002\u5728 BE \u4e0a daemon \u7ebf\u7a0b\u4f1a\u5468\u671f\u6027\u7684\u5224\u65ad\u8868\u662f\u5426\u9700\u8981 freeze\uff0c\u82e5 freeze \u540e\u4f1a\u5c06\u6570\u636e\u4e0a\u4f20\u5230\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u548c HDFS \u4e0a\u3002"),(0,r.yg)("p",null,"\u51b7\u70ed\u5206\u5c42\u652f\u6301\u6240\u6709 Doris \u529f\u80fd\uff0c\u53ea\u662f\u628a\u90e8\u5206\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u4ee5\u8282\u7701\u6210\u672c\uff0c\u4e0d\u727a\u7272\u529f\u80fd\u3002\u56e0\u6b64\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u51b7\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u7528\u6237\u65e0\u9700\u62c5\u5fc3\u6570\u636e\u4e00\u81f4\u6027\u548c\u6570\u636e\u5b89\u5168\u6027\u95ee\u9898")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7075\u6d3b\u7684 Freeze \u7b56\u7565\uff0c\u51b7\u5374\u8fdc\u7a0b\u5b58\u50a8 Property \u53ef\u4ee5\u5e94\u7528\u5230\u8868\u548c Partition \u7ea7\u522b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7528\u6237\u67e5\u8be2\u6570\u636e\uff0c\u65e0\u9700\u5173\u6ce8\u6570\u636e\u5206\u5e03\u4f4d\u7f6e\uff0c\u82e5\u6570\u636e\u4e0d\u5728\u672c\u5730\uff0c\u4f1a\u62c9\u53d6\u5bf9\u8c61\u4e0a\u7684\u6570\u636e\uff0c\u5e76 cache \u5230 BE \u672c\u5730")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u526f\u672c clone \u4f18\u5316\uff0c\u82e5\u5b58\u50a8\u6570\u636e\u5728\u5bf9\u8c61\u4e0a\uff0c\u5219\u526f\u672c clone \u7684\u65f6\u5019\u4e0d\u7528\u53bb\u62c9\u53d6\u5b58\u50a8\u6570\u636e\u5230\u672c\u5730")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fdc\u7a0b\u5bf9\u8c61\u7a7a\u95f4\u56de\u6536 recycler\uff0c\u82e5\u8868\u3001\u5206\u533a\u88ab\u5220\u9664\uff0c\u6216\u8005\u51b7\u70ed\u5206\u5c42\u8fc7\u7a0b\u4e2d\u5f02\u5e38\u60c5\u51b5\u4ea7\u751f\u7684\u7a7a\u95f4\u6d6a\u8d39\uff0c\u5219\u4f1a\u6709 recycler \u7ebf\u7a0b\u5468\u671f\u6027\u7684\u56de\u6536\uff0c\u8282\u7ea6\u5b58\u50a8\u8d44\u6e90")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"cache \u4f18\u5316\uff0c\u5c06\u8bbf\u95ee\u8fc7\u7684\u51b7\u6570\u636e cache \u5230 BE \u672c\u5730\uff0c\u8fbe\u5230\u975e\u51b7\u70ed\u5206\u5c42\u7684\u67e5\u8be2\u6027\u80fd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE \u7ebf\u7a0b\u6c60\u4f18\u5316\uff0c\u533a\u5206\u6570\u636e\u6765\u6e90\u662f\u672c\u5730\u8fd8\u662f\u5bf9\u8c61\u5b58\u50a8\uff0c\u9632\u6b62\u8bfb\u53d6\u5bf9\u8c61\u5ef6\u65f6\u5f71\u54cd\u67e5\u8be2\u6027\u80fd"))),(0,r.yg)("h2",{id:"storage-policy-\u7684\u4f7f\u7528"},"Storage policy \u7684\u4f7f\u7528"),(0,r.yg)("p",null,"\u5b58\u50a8\u7b56\u7565\u662f\u4f7f\u7528\u51b7\u70ed\u5206\u5c42\u529f\u80fd\u7684\u5165\u53e3\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u5efa\u8868\u6216\u4f7f\u7528 Doris \u8fc7\u7a0b\u4e2d\uff0c\u7ed9\u8868\u6216\u5206\u533a\u5173\u8054\u4e0a Storage policy\uff0c\u5373\u53ef\u4ee5\u4f7f\u7528\u51b7\u70ed\u5206\u5c42\u7684\u529f\u80fd\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u521b\u5efa S3 RESOURCE \u7684\u65f6\u5019\uff0c\u4f1a\u8fdb\u884c S3 \u8fdc\u7aef\u7684\u94fe\u63a5\u6821\u9a8c\uff0c\u4ee5\u4fdd\u8bc1 RESOURCE \u521b\u5efa\u7684\u6b63\u786e\u3002")),(0,r.yg)("p",null,"\u4e0b\u9762\u6f14\u793a\u5982\u4f55\u521b\u5efa S3 RESOURCE\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n\nCREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,r.yg)("p",null,"\u4ee5\u53ca\u5982\u4f55\u521b\u5efa HDFS RESOURCE\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n        "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n\n    CREATE STORAGE POLICY test_policy PROPERTIES (\n        "storage_resource" = "remote_hdfs",\n        "cooldown_ttl" = "300"\n    )\n\n    CREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n    )\n    UNIQUE KEY(k1)\n    DISTRIBUTED BY HASH (k1) BUCKETS 3\n    PROPERTIES(\n    "storage_policy" = "test_policy"\n    );\n')),(0,r.yg)("p",null,"\u6216\u8005\u5bf9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u8868\uff0c\u5173\u8054 Storage policy"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n')),(0,r.yg)("p",null,"\u6216\u8005\u5bf9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 partition\uff0c\u5173\u8054 Storage policy"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5982\u679c\u7528\u6237\u5728\u5efa\u8868\u65f6\u7ed9\u6574\u5f20 Table \u548c\u90e8\u5206 Partition \u6307\u5b9a\u4e86\u4e0d\u540c\u7684 Storage Policy\uff0cPartition \u8bbe\u7f6e\u7684 Storage policy \u4f1a\u88ab\u65e0\u89c6\uff0c\u6574\u5f20\u8868\u7684\u6240\u6709 Partition \u90fd\u4f1a\u4f7f\u7528 table \u7684 Policy. \u5982\u679c\u60a8\u9700\u8981\u8ba9\u67d0\u4e2a Partition \u7684 Policy \u548c\u522b\u7684\u4e0d\u540c\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4e0a\u6587\u4e2d\u5bf9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 Partition\uff0c\u5173\u8054 Storage policy \u7684\u65b9\u5f0f\u4fee\u6539\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 Docs \u76ee\u5f55\u4e0b",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE"},"RESOURCE"),"\u3001 ",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY"},"POLICY"),"\u3001 ",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"),"\u3001 ",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE"),"\u7b49\u6587\u6863\uff0c\u91cc\u9762\u6709\u8be6\u7ec6\u4ecb\u7ecd\u3002")),(0,r.yg)("h3",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5355\u8868\u6216\u5355 Partition \u53ea\u80fd\u5173\u8054\u4e00\u4e2a Storage policy\uff0c\u5173\u8054\u540e\u4e0d\u80fd Drop \u6389 Storage policy\uff0c\u9700\u8981\u5148\u89e3\u9664\u4e8c\u8005\u7684\u5173\u8054\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Storage policy \u5173\u8054\u7684\u5bf9\u8c61\u4fe1\u606f\u4e0d\u652f\u6301\u4fee\u6539\u6570\u636e\u5b58\u50a8 path \u7684\u4fe1\u606f\uff0c\u6bd4\u5982 bucket\u3001endpoint\u3001root_path \u7b49\u4fe1\u606f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Storage policy \u652f\u6301\u521b\u5efa \u548c\u4fee\u6539\u548c\u652f\u6301\u5220\u9664\uff0c\u5220\u9664\u524d\u9700\u8981\u5148\u4fdd\u8bc1\u6ca1\u6709\u8868\u5f15\u7528\u6b64 Storage policy\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Unique \u6a21\u578b\u5728\u5f00\u542f Merge-on-Write \u7279\u6027\u65f6\uff0c\u4e0d\u652f\u6301\u8bbe\u7f6e Storage policy\u3002"))),(0,r.yg)("h2",{id:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f"},"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f"),(0,r.yg)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7 show proc '/backends'\u53ef\u4ee5\u67e5\u770b\u5230\u6bcf\u4e2a BE \u4e0a\u4f20\u5230\u5bf9\u8c61\u7684\u5927\u5c0f\uff0cRemoteUsedCapacity \u9879\uff0c\u6b64\u65b9\u5f0f\u7565\u6709\u5ef6\u8fdf\u3002"),(0,r.yg)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7 show tablets from tableName \u53ef\u4ee5\u67e5\u770b\u5230\u8868\u7684\u6bcf\u4e2a tablet \u5360\u7528\u7684\u5bf9\u8c61\u5927\u5c0f\uff0cRemoteDataSize \u9879\u3002"),(0,r.yg)("h2",{id:"\u51b7\u6570\u636e\u7684-cache"},"\u51b7\u6570\u636e\u7684 cache"),(0,r.yg)("p",null,"\u4e0a\u6587\u63d0\u5230\u51b7\u6570\u636e\u4e3a\u4e86\u4f18\u5316\u67e5\u8be2\u7684\u6027\u80fd\u548c\u5bf9\u8c61\u5b58\u50a8\u8d44\u6e90\u8282\u7701\uff0c\u5f15\u5165\u4e86 cache \u7684\u6982\u5ff5\u3002\u5728\u51b7\u5374\u540e\u9996\u6b21\u547d\u4e2d\uff0cDoris \u4f1a\u5c06\u5df2\u7ecf\u51b7\u5374\u7684\u6570\u636e\u53c8\u91cd\u65b0\u52a0\u8f7d\u5230 BE \u7684\u672c\u5730\u78c1\u76d8\uff0ccache \u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"cache \u5b9e\u9645\u5b58\u50a8\u4e8e BE \u78c1\u76d8\uff0c\u4e0d\u5360\u7528\u5185\u5b58\u7a7a\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"cache \u53ef\u4ee5\u9650\u5236\u81a8\u80c0\uff0c\u901a\u8fc7 LRU \u8fdb\u884c\u6570\u636e\u7684\u6e05\u7406")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"cache \u7684\u5b9e\u73b0\u548c\u8054\u90a6\u67e5\u8be2 Catalog \u7684 cache \u662f\u540c\u4e00\u5957\u5b9e\u73b0\uff0c\u6587\u6863\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"../lakehouse/filecache"},"\u6b64\u5904")))),(0,r.yg)("h2",{id:"\u51b7\u6570\u636e\u7684-compaction"},"\u51b7\u6570\u636e\u7684 Compaction"),(0,r.yg)("p",null,"\u51b7\u6570\u636e\u4f20\u5165\u7684\u65f6\u95f4\u662f\u6570\u636e rowset \u6587\u4ef6\u5199\u5165\u672c\u5730\u78c1\u76d8\u65f6\u523b\u8d77\uff0c\u52a0\u4e0a\u51b7\u5374\u65f6\u95f4\u3002\u7531\u4e8e\u6570\u636e\u5e76\u4e0d\u662f\u4e00\u6b21\u6027\u5199\u5165\u548c\u51b7\u5374\u7684\uff0c\u56e0\u6b64\u907f\u514d\u5728\u5bf9\u8c61\u5b58\u50a8\u5185\u7684\u5c0f\u6587\u4ef6\u95ee\u9898\uff0cDoris \u4e5f\u4f1a\u8fdb\u884c\u51b7\u6570\u636e\u7684 Compaction\u3002\u4f46\u662f\uff0c\u51b7\u6570\u636e\u7684 Compaction \u7684\u9891\u6b21\u548c\u8d44\u6e90\u5360\u7528\u7684\u4f18\u5148\u7ea7\u5e76\u4e0d\u662f\u5f88\u9ad8\uff0c\u4e5f\u63a8\u8350\u672c\u5730\u70ed\u6570\u636e compaction \u540e\u518d\u6267\u884c\u51b7\u5374\u3002\u5177\u4f53\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b BE \u53c2\u6570\u8c03\u6574\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE \u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"cold_data_compaction_thread_num"),"\u53ef\u4ee5\u8bbe\u7f6e\u6267\u884c\u51b7\u6570\u636e\u7684 Compaction \u7684\u5e76\u53d1\uff0c\u9ed8\u8ba4\u662f 2\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE \u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"cold_data_compaction_interval_sec"),"\u53ef\u4ee5\u8bbe\u7f6e\u6267\u884c\u51b7\u6570\u636e\u7684 Compaction \u7684\u65f6\u95f4\u95f4\u9694\uff0c\u9ed8\u8ba4\u662f 1800\uff0c\u5355\u4f4d\uff1a\u79d2\uff0c\u5373\u534a\u4e2a\u5c0f\u65f6\u3002\u3002"))),(0,r.yg)("h2",{id:"\u51b7\u6570\u636e\u7684-schema-change"},"\u51b7\u6570\u636e\u7684 Schema Change"),(0,r.yg)("p",null,"\u6570\u636e\u51b7\u5374\u540e\u652f\u6301 Schema Change \u7c7b\u578b\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u589e\u52a0\u3001\u5220\u9664\u5217")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u5217\u7c7b\u578b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8c03\u6574\u5217\u987a\u5e8f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u589e\u52a0\u3001\u4fee\u6539\u7d22\u5f15"))),(0,r.yg)("h2",{id:"\u51b7\u6570\u636e\u7684\u5783\u573e\u56de\u6536"},"\u51b7\u6570\u636e\u7684\u5783\u573e\u56de\u6536"),(0,r.yg)("p",null,"\u51b7\u6570\u636e\u7684\u5783\u573e\u6570\u636e\u662f\u6307\u6ca1\u6709\u88ab\u4efb\u4f55 Replica \u4f7f\u7528\u7684\u6570\u636e\uff0c\u5bf9\u8c61\u5b58\u50a8\u4e0a\u53ef\u80fd\u4f1a\u6709\u5982\u4e0b\u60c5\u51b5\u4ea7\u751f\u7684\u5783\u573e\u6570\u636e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0a\u4f20 rowset \u5931\u8d25\u4f46\u662f\u6709\u90e8\u5206 segment \u4e0a\u4f20\u6210\u529f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"FE \u91cd\u65b0\u9009 CooldownReplica \u540e\uff0c\u65b0\u65e7 CooldownReplica \u7684 rowset version \u4e0d\u4e00\u81f4\uff0cFollowerReplica \u90fd\u53bb\u540c\u6b65\u65b0 CooldownReplica \u7684 CooldownMeta\uff0c\u65e7 CooldownReplica \u4e2d version \u4e0d\u4e00\u81f4\u7684 rowset \u6ca1\u6709 Replica \u4f7f\u7528\u6210\u4e3a\u5783\u573e\u6570\u636e\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u51b7\u6570\u636e Compaction \u540e\uff0c\u5408\u5e76\u524d\u7684 rowset \u56e0\u4e3a\u8fd8\u53ef\u80fd\u88ab\u5176\u4ed6 Replica \u4f7f\u7528\u4e0d\u80fd\u7acb\u5373\u5220\u9664\uff0c\u4f46\u662f\u6700\u7ec8 FollowerReplica \u90fd\u4f7f\u7528\u4e86\u6700\u65b0\u7684\u5408\u5e76\u540e\u7684 rowset\uff0c\u5408\u5e76\u524d\u7684 rowset \u6210\u4e3a\u5783\u573e\u6570\u636e\u3002"))),(0,r.yg)("p",null,"\u53e6\u5916\uff0c\u5bf9\u8c61\u4e0a\u7684\u5783\u573e\u6570\u636e\u5e76\u4e0d\u4f1a\u7acb\u5373\u6e05\u7406\u6389\u3002BE \u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"remove_unused_remote_files_interval_sec"),"\u53ef\u4ee5\u8bbe\u7f6e\u51b7\u6570\u636e\u7684\u5783\u573e\u56de\u6536\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u9ed8\u8ba4\u662f 21600\uff0c\u5355\u4f4d\uff1a\u79d2\uff0c\u5373 6 \u4e2a\u5c0f\u65f6\u3002"),(0,r.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e00\u4e9b\u8fdc\u7aef\u5360\u7528\u6307\u6807\u66f4\u65b0\u83b7\u53d6\u4e0d\u591f\u5b8c\u5584")),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null."))),(0,r.yg)("p",null,"S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf (\u5982\uff1aminio) \u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u6ca1\u652f\u6301 virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 use_path_style \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u65b9\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n')))}g.isMDXComponent=!0}}]);