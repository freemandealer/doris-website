"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[309333],{15680:(e,a,r)=>{r.d(a,{xA:()=>g,yg:()=>d});var l=r(296540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,l,n=function(e,a){if(null==e)return{};var r,l,n={},t=Object.keys(e);for(l=0;l<t.length;l++)r=t[l],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)r=t[l],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=l.createContext({}),i=function(e){var a=l.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},g=function(e){var a=i(e.components);return l.createElement(o.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||c[m]||t;return r?l.createElement(d,s(s({ref:a},g),{},{components:r})):l.createElement(d,s({ref:a},g))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,s=new Array(t);s[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<t;i++)s[i]=r[i];return l.createElement.apply(null,s)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52312:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>i});var l=r(58168),n=(r(296540),r(15680));const t={title:"\u90e8\u7f72 Doris \u96c6\u7fa4",language:"zh-CN"},s=void 0,p={unversionedId:"install/cluster-deployment/k8s-deploy/install-doris-cluster",id:"version-2.1/install/cluster-deployment/k8s-deploy/install-doris-cluster",title:"\u90e8\u7f72 Doris \u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/cluster-deployment/k8s-deploy/install-doris-cluster.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/install-doris-cluster",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-doris-cluster",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u90e8\u7f72 Doris \u96c6\u7fa4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u914d\u7f6e Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-config-cluster"},next:{title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-access-cluster"}},o={},i=[{value:"\u90e8\u7f72\u96c6\u7fa4",id:"\u90e8\u7f72\u96c6\u7fa4",level:2},{value:"\u4f7f\u7528 Custom Resource \u6587\u4ef6\u90e8\u7f72",id:"\u4f7f\u7528-custom-resource-\u6587\u4ef6\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Helm \u90e8\u7f72",id:"\u4f7f\u7528-helm-\u90e8\u7f72",level:3},{value:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:2},{value:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001",id:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001",level:3},{value:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001",id:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001",level:3}],g={toc:i},u="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(u,(0,l.A)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u5728\u89c4\u5212\u96c6\u7fa4\u62d3\u6251\u540e\uff0c\u53ef\u4ee5\u5728 Kubernetes \u4e2d\u90e8\u7f72 Doris \u96c6\u7fa4\u3002"),(0,n.yg)("h2",{id:"\u90e8\u7f72\u96c6\u7fa4"},"\u90e8\u7f72\u96c6\u7fa4"),(0,n.yg)("h3",{id:"\u4f7f\u7528-custom-resource-\u6587\u4ef6\u90e8\u7f72"},"\u4f7f\u7528 Custom Resource \u6587\u4ef6\u90e8\u7f72"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u90e8\u7f72")),(0,n.yg)("p",null,"\u5728\u7ebf\u90e8\u7f72\u96c6\u7fa4\u9700\u8981\u7ecf\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa namespace\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ${namespace}\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72 Doris \u96c6\u7fa4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u90e8\u7f72")),(0,n.yg)("p",null,"\u79bb\u7ebf\u90e8\u7f72 Doris \u96c6\u7fa4\u9700\u8981\u5728\u6709\u5916\u7f51\u7684\u673a\u5668\u4e0a\u5c06 Doris \u96c6\u7fa4\u7528\u5230\u7684 Docker \u955c\u50cf\uff0c\u4e0a\u4f20\u5230\u6240\u6709\u7684 Node \u8282\u70b9\u4e0a\u3002\u7136\u540e\u4f7f\u7528 Docker Load \u5c06\u955c\u50cf\u5b89\u88c5\u5230\u670d\u52a1\u5668\u4e0a\u3002\u79bb\u7ebf\u90e8\u7f72\u9700\u8981\u7ecf\u5386\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u6240\u9700\u7684\u955c\u50cf"),(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72 Doris \u96c6\u7fa4\u9700\u8981\u4ee5\u4e0b\u955c\u50cf\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"selectdb/doris.fe-ubuntu:2.0.2\nselectdb/doris.be-ubuntu:2.0.2\n")),(0,n.yg)("p",{parentName:"li"},"\u5c06\u955c\u50cf\u4e0b\u8f7d\u5230\u672c\u5730\u540e\u6253\u5305\u6210 tar \u6587\u4ef6"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"## download docker image\ndocker pull selectdb/doris.fe-ubuntu:2.0.2\ndocker pull selectdb/doris.be-ubuntu:2.0.2\n\n## save docker image as a tar package\ndocker save -o doris.fe-ubuntu-v2.0.2.tar selectdb/doris.fe-ubuntu:2.0.2\ndocker save -o doris.be-ubuntu-v2.0.2.tar docker pull selectdb/doris.be-ubuntu:2.0.2\n")),(0,n.yg)("p",{parentName:"li"},"\u5c06 Image Tar \u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u6267\u884c Docker Load \u547d\u4ee4\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"## load docker image\ndocker load -i doris.fe-ubuntu-v2.0.2.tar\ndocker load -i doris.be-ubuntu-v2.0.2.tar\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa namespace\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ${namespace}\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72 Doris \u96c6\u7fa4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")))),(0,n.yg)("h3",{id:"\u4f7f\u7528-helm-\u90e8\u7f72"},"\u4f7f\u7528 Helm \u90e8\u7f72"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u90e8\u7f72")),(0,n.yg)("p",null,"\u5728\u5b89\u88c5\u5f00\u59cb\u524d\uff0c\u9700\u8981\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93\uff0c\u82e5\u5df2\u7ecf\u6dfb\u52a0\u5219\u53ef\u76f4\u63a5\u8fdb\u884c Doris Cluster \u7684\u5b89\u88c5\uff0c\u5426\u5219\u8bf7\u53c2\u8003\u6dfb\u52a0",(0,n.yg)("a",{parentName:"p",href:"./install-operator#%E6%96%B9%E6%A1%88%E4%B8%80%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2-doris-operator"},"\u90e8\u7f72 Doris Operator")," \u65f6 ",(0,n.yg)("strong",{parentName:"p"},"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93")," \u7684\u64cd\u4f5c"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5 Doris Cluster"),(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,n.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris"},"doriscluster"),"\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6b64\u90e8\u7f72\u4ec5\u90e8\u7f72 3 \u4e2a FE \u548c 3 \u4e2a BE \u7ec4\u4ef6\uff0c\u4f7f\u7528\u9ed8\u8ba4 ",(0,n.yg)("inlineCode",{parentName:"p"},"storageClass")," \u5b9e\u73b0 PV \u52a8\u6001\u4f9b\u7ed9\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"helm install doriscluster doris-repo/doris\n")),(0,n.yg)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u8d44\u6e90\u548c\u96c6\u7fa4\u5f62\u6001\uff0c\u8bf7\u6839\u636e ",(0,n.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," \u7684\u5404\u4e2a\u8d44\u6e90\u914d\u7f6e\u7684\u6ce8\u89e3\u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\uff0c\u5e76\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml doriscluster doris-repo/doris\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u9a8c\u8bc1 Doris \u96c6\u7fa4\u5b89\u88c5\u7ed3\u679c"),(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b pod \u90e8\u7f72\u72b6\u6001\u3002\u5f53 ",(0,n.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u7684 Pod \u5904\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,n.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u90e8\u7f72")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4e0b\u8f7d Doris Cluster Chart \u8d44\u6e90"),(0,n.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,n.yg)("inlineCode",{parentName:"p"},"doris-{chart_version}.tgz")," \u5b89\u88c5 Doris Cluster chart\u3002\u5982\u9700\u8981\u4e0b\u8f7d 2.0.6 \u7248\u672c\u7684 Doris \u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://charts.selectdb.com/doris-2.0.6.tgz\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5 Doris \u96c6\u7fa4"),(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"helm install")," \u547d\u4ee4\u53ef\u4ee5\u5b89\u88c5 Doris \u96c6\u7fa4\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"helm install doriscluster doris-1.4.0.tgz\n")),(0,n.yg)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u88c5\u914d ",(0,n.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," \uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml doriscluster doris-1.4.0.tgz\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u9a8c\u8bc1 doris \u96c6\u7fa4\u5b89\u88c5\u7ed3\u679c"),(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b pod \u90e8\u7f72\u72b6\u6001\u3002\u5f53 ",(0,n.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u7684 Pod \u5904\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,n.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")))),(0,n.yg)("h2",{id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,n.yg)("h3",{id:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001"},"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001"),(0,n.yg)("p",null,"\u96c6\u7fa4\u90e8\u7f72\u8d44\u6e90\u4e0b\u53d1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n ${namespace}\n")),(0,n.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-0   1/1     Running   0          20m\ndoriscluster-sample-be-0   1/1     Running   0          19m\n")),(0,n.yg)("p",null,"\u5f53\u6240\u6709 pod \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"STATUS")," \u90fd\u662f ",(0,n.yg)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u4e14 READY \u5217\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"1/1")," \u65f6\uff0c\u8868\u793a\u6574\u4e2a\u96c6\u7fa4\u90e8\u7f72\u6b63\u5e38\u3002"),(0,n.yg)("h3",{id:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001"},"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001"),(0,n.yg)("p",null,"Doris Operator \u4f1a\u6536\u96c6\u96c6\u7fa4\u670d\u52a1\u7684\u72b6\u6001\u663e\u793a\u5230\u4e0b\u53d1\u7684\u8d44\u6e90\u4e2d\u3002Doris Operator \u5b9a\u4e49\u4e86 ",(0,n.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199 ",(0,n.yg)("inlineCode",{parentName:"p"},"dcr"),"\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u7c7b\u578b\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u65f6\u53ef\u7528\u7b80\u5199\u66ff\u4ee3\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get dcr\n")),(0,n.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,n.yg)("p",null,"\u5f53\u914d\u7f6e\u7684\u76f8\u5173\u670d\u52a1\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"STATUS")," \u90fd\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"available")," \u65f6\uff0c\u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u3002"))}c.isMDXComponent=!0}}]);