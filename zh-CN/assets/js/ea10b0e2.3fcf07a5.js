"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98965],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var o=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,a=function(e,r){if(null==e)return{};var n,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},_=o.forwardRef((function(e,r){var n=e.components,a=e.mdxType,t=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),_=a,d=p["".concat(s,".").concat(_)]||p[_]||m[_]||t;return n?o.createElement(d,l(l({ref:r},u),{},{components:n})):o.createElement(d,l({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var t=n.length,l=new Array(t);l[0]=_;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<t;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}_.displayName="MDXCreateElement"},673594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=n(58168),a=(n(296540),n(15680));const t={title:"\u4f7f\u7528Workload Group\u7ba1\u7406\u672c\u5730IO",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/resource-admin/use-workload-local-io-limit",id:"version-2.1/admin-manual/resource-admin/use-workload-local-io-limit",title:"\u4f7f\u7528Workload Group\u7ba1\u7406\u672c\u5730IO",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/resource-admin/use-workload-local-io-limit.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/use-workload-local-io-limit",permalink:"/zh-CN/docs/admin-manual/resource-admin/use-workload-local-io-limit",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u4f7f\u7528Workload Group\u7ba1\u7406\u672c\u5730IO",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528Workload Group\u7ba1\u7406CPU\u8d44\u6e90",permalink:"/zh-CN/docs/admin-manual/resource-admin/use-workload-cpu-limit"},next:{title:"\u4f7f\u7528Workload Group\u7ba1\u7406\u8fdc\u7a0bIO",permalink:"/zh-CN/docs/admin-manual/resource-admin/use-workload-remote-io-limit"}},s={},c=[{value:"\u6d4b\u8bd5\u672c\u5730IO\u786c\u9650",id:"\u6d4b\u8bd5\u672c\u5730io\u786c\u9650",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:3},{value:"\u4e0d\u5f00\u542fIO\u786c\u9650\u6d4b\u8bd5",id:"\u4e0d\u5f00\u542fio\u786c\u9650\u6d4b\u8bd5",level:3},{value:"\u5f00\u542fIO\u786c\u9650\u540e\u6d4b\u8bd5",id:"\u5f00\u542fio\u786c\u9650\u540e\u6d4b\u8bd5",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,o.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"OLAP \u7cfb\u7edf\u5728\u505aETL\u6216\u8005\u5927\u7684Adhoc \u67e5\u8be2\u65f6\uff0c\u9700\u8981\u8bfb\u53d6\u5927\u91cf\u7684\u6570\u636e\uff0cDoris \u4e3a\u4e86\u52a0\u901f\u6570\u636e\u5206\u6790\u8fc7\u7a0b\uff0c\u5185\u90e8\u4f1a\u4f7f\u7528\u591a\u7ebf\u7a0b\u5e76\u884c\u7684\u65b9\u5f0f\u5bf9\u591a\u4e2a\u78c1\u76d8\u6587\u4ef6\u626b\u63cf\uff0c\u4f1a\u4ea7\u751f\u5de8\u5927\u7684\u78c1\u76d8IO\uff0c\u5c31\u4f1a\u5bf9\u5176\u4ed6\u7684\u67e5\u8be2\uff08\u6bd4\u5982\u62a5\u8868\u5206\u6790\uff09\u4ea7\u751f\u5f71\u54cd\u3002\n\u53ef\u4ee5\u901a\u8fc7Workload Group \u5bf9\u79bb\u7ebf\u7684ETL\u6570\u636e\u5904\u7406\u548c\u5728\u7ebf\u7684\u62a5\u8868\u67e5\u8be2\u505a\u5206\u7ec4\uff0c\u9650\u5236\u79bb\u7ebf\u6570\u636e\u5904\u7406IO\u5e26\u5bbd\u7684\u65b9\u5f0f\uff0c\u964d\u4f4e\u5b83\u5bf9\u5728\u7ebf\u62a5\u8868\u5206\u6790\u7684\u5f71\u54cd\u3002"),(0,a.yg)("h2",{id:"\u6d4b\u8bd5\u672c\u5730io\u786c\u9650"},"\u6d4b\u8bd5\u672c\u5730IO\u786c\u9650"),(0,a.yg)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,a.yg)("p",null,"1FE,1BE, \u914d\u7f6e\u4e3a96\u6838\u3002"),(0,a.yg)("p",null,"\u6d4b\u8bd5\u6570\u636e\u96c6\u4e3aclickbench\u3002"),(0,a.yg)("h3",{id:"\u4e0d\u5f00\u542fio\u786c\u9650\u6d4b\u8bd5"},"\u4e0d\u5f00\u542fIO\u786c\u9650\u6d4b\u8bd5"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5173\u95ed\u7f13\u5b58\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// \u6e05\u7a7a\u64cd\u4f5c\u7cfb\u7edf\u7f13\u5b58\nsync; echo 3 > /proc/sys/vm/drop_caches\n\n// \u7981\u7528BE\u7684page cache\ndisable_storage_page_cache = true\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5bf9clickbench\u7684\u8868\u6267\u884c\u5168\u8868\u626b\u63cf\uff0c\u6267\u884c\u5355\u5e76\u53d1\u67e5\u8be2\u5373\u53ef\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set dry_run_query = true;\nselect * from hits.hits;\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u901a\u8fc7Doris\u7684\u5185\u8868\u67e5\u770b\u5f53\u524dGroup\u7684\u6700\u5927\u541e\u5410\u4e3a3GB\u6bcf\u79d2\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 1146.6208400726318 |\n+--------------------+\n1 row in set (0.03 sec)\n\nmysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 3496.2762966156006 |\n+--------------------+\n1 row in set (0.04 sec)\n\nmysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 2192.7690029144287 |\n+--------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528pidstat\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0bIO\uff0c\u56fe\u4e2d\u7b2c\u4e00\u5217\u662f\u8fdb\u7a0bid\uff0c\u7b2c\u4e8c\u5217\u662f\u8bfbIO\u7684\u541e\u5410\uff08\u5355\u4f4d\u662fkb/s\uff09\u3002\u53ef\u4ee5\u770b\u5230\u4e0d\u9650\u5236IO\u65f6\uff0c\u6700\u5927\u541e\u5410\u4e3a2G\u6bcf\u79d2\u3002")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"use workload group io",src:n(911543).A,width:"814",height:"1080"})),(0,a.yg)("h3",{id:"\u5f00\u542fio\u786c\u9650\u540e\u6d4b\u8bd5"},"\u5f00\u542fIO\u786c\u9650\u540e\u6d4b\u8bd5"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5173\u95ed\u7f13\u5b58\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// \u6e05\u7a7a\u64cd\u4f5c\u7cfb\u7edf\u7f13\u5b58\nsync; echo 3 > /proc/sys/vm/drop_caches\n\n// \u7981\u7528BE\u7684page cache\ndisable_storage_page_cache = true\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539Workload Group\u7684\u914d\u7f6e\uff0c\u9650\u5236\u6bcf\u79d2\u6700\u5927\u541e\u5410\u4e3a100M\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// \u9650\u5236\u5f53\u524dGroup\u7684\u8bfb\u541e\u5410\u4e3a\u6bcf\u79d2100M\nalter workload group g2 properties('read_bytes_per_second'='104857600');\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528Doris\u7cfb\u7edf\u8868\u67e5\u770bWorkload Group\u7684\u6700\u5927IO\u541e\u5410\u4e3a\u6bcf\u79d298M\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 97.94296646118164  |\n+--------------------+\n1 row in set (0.03 sec)\n\nmysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 98.37584781646729  |\n+--------------------+\n1 row in set (0.04 sec)\n\nmysql [information_schema]>select LOCAL_SCAN_BYTES_PER_SECOND / 1024 / 1024 as mb_per_sec from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+--------------------+\n| mb_per_sec         |\n+--------------------+\n| 98.06641292572021  |\n+--------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528pid\u5de5\u5177\u67e5\u770b\u8fdb\u7a0b\u6700\u5927IO\u541e\u5410\u4e3a\u6bcf\u79d2131M\u3002")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"use workload group io",src:n(627260).A,width:"808",height:"676"})),(0,a.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u7cfb\u7edf\u8868\u4e2d\u7684LOCAL_SCAN_BYTES_PER_SECOND\u5b57\u6bb5\u4ee3\u8868\u7684\u662f\u5f53\u524dWorkload Group\u5728\u8fdb\u7a0b\u7c92\u5ea6\u7684\u7edf\u8ba1\u6c47\u603b\u503c\uff0c\u6bd4\u5982\u914d\u7f6e\u4e8612\u4e2a\u6587\u4ef6\u8def\u5f84\uff0c\u90a3\u4e48LOCAL_SCAN_BYTES_PER_SECOND\u5c31\u662f\u8fd912\u4e2a\u6587\u4ef6\u8def\u5f84IO\u7684\u6700\u5927\u503c\uff0c\u5982\u679c\u671f\u671b\u67e5\u770b\u6bcf\u4e2a\u6587\u4ef6\u8def\u5f84\u5206\u522b\u7684IO\u541e\u5410\uff0c\u53ef\u4ee5\u5728grafana\u4e0a\u6216\u8005BE\u7684bvar\u76d1\u63a7\u67e5\u770b\u660e\u7ec6\u7684\u503c\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u7531\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u548cDoris\u7684Page Cache\u7684\u5b58\u5728\uff0c\u901a\u8fc7linux\u7684IO\u76d1\u63a7\u811a\u672c\u770b\u5230\u7684IO\u901a\u5e38\u8981\u6bd4\u7cfb\u7edf\u8868\u770b\u5230\u7684\u8981\u5c0f\u3002")))}m.isMDXComponent=!0},911543:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/use_wg_io_1-15b5d3e97f7ccf7f914eef0e6bf55cd4.png"},627260:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/use_wg_io_2-2202fea206c596a3879c6660ada71037.png"}}]);