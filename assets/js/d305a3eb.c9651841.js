"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[758232],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},347494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),i=(a(296540),a(15680));const r={title:"INSERT-OVERWRITE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",id:"version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",title:"INSERT-OVERWRITE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"INSERT-OVERWRITE",language:"en"},sidebar:"docs",previous:{title:"CANCEL-EXPORT",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},next:{title:"ANALYZE",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE"}},s={},p=[{value:"INSERT OVERWRITE",id:"insert-overwrite",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"For Auto Partition Table",id:"for-auto-partition-table",level:4},{value:"Example",id:"example",level:3},{value:"Overwrite Table",id:"overwrite-table",level:4},{value:"Overwrite Table Partition",id:"overwrite-table-partition",level:4},{value:"Overwrite Auto Detect Partition",id:"overwrite-auto-detect-partition",level:4},{value:"Keywords",id:"keywords",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"insert-overwrite"},"INSERT OVERWRITE"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"INSERT OVERWRITE"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"The function of this statement is to overwrite a table or some partitions of a table"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table table_name\n    [ PARTITION (p1, ... | *) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,i.yg)("p",null," Parameters"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"table_name: the destination table to overwrite. This table must exist. It can be of the form ",(0,i.yg)("inlineCode",{parentName:"p"},"db_name.table_name")),(0,i.yg)("p",{parentName:"blockquote"},"partitions: the table partitions that needs to be overwritten. The following two formats are supported"),(0,i.yg)("blockquote",{parentName:"blockquote"},(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"partition names. must be one of the existing partitions in ",(0,i.yg)("inlineCode",{parentName:"li"},"table_name")," separated by a comma"),(0,i.yg)("li",{parentName:"ol"},"asterisk(*)\u3002Enable ",(0,i.yg)("a",{parentName:"li",href:"#overwrite-auto-detect-partition"},"auto-detect-partition"),". The write operation will automatically detect the partitions involved in the data and overwrite those partitions. This format is supported since Apache Doris 2.1.3 version."))),(0,i.yg)("p",{parentName:"blockquote"},"label: specify a label for the Insert task"),(0,i.yg)("p",{parentName:"blockquote"},"column_name: the specified destination column must be one of the existing columns in ",(0,i.yg)("inlineCode",{parentName:"p"},"table_name")),(0,i.yg)("p",{parentName:"blockquote"},"expression: the corresponding expression that needs to be assigned to a column"),(0,i.yg)("p",{parentName:"blockquote"},"DEFAULT: let the column use the default value"),(0,i.yg)("p",{parentName:"blockquote"},"query: a common query, the result of the query will overwrite the target."),(0,i.yg)("p",{parentName:"blockquote"},"hint: some indicator used to indicate the execution behavior of ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT"),". You can choose one of this values: ",(0,i.yg)("inlineCode",{parentName:"p"},"/*+ STREAMING */"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"/*+ SHUFFLE */")," or `/",(0,i.yg)("em",{parentName:"p"},"+ NOSHUFFLE "),"/."),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"STREAMING: At present, it has no practical effect and is only reserved for compatibility with previous versions. (In the previous version, adding this hint would return a label, but now it defaults to returning a label)"),(0,i.yg)("li",{parentName:"ol"},"SHUFFLE: When the target table is a partition table, enabling this hint will do repartiiton."),(0,i.yg)("li",{parentName:"ol"},"NOSHUFFLE: Even if the target table is a partition table, repartiiton will not be performed, but some other operations will be performed to ensure that the data is correctly dropped into each partition."))),(0,i.yg)("p",null,"Notice:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"In the current version, the session variable ",(0,i.yg)("inlineCode",{parentName:"li"},"enable_insert_strict")," is set to ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," by default. If some data that does not conform to the format of the target table is filtered out during the execution of the ",(0,i.yg)("inlineCode",{parentName:"li"},"INSERT OVERWRITE")," statement, such as when overwriting a partition and not all partition conditions are satisfied, overwriting the target table will fail."),(0,i.yg)("li",{parentName:"ol"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"INSERT OVERWRITE")," statement first creates a new table, inserts the data to be overwritten into the new table, and then atomically replaces the old table with the new table and modifies its name. Therefore, during the process of overwriting the table, the data in the old table can still be accessed normally until the overwriting is completed.")),(0,i.yg)("h4",{id:"for-auto-partition-table"},"For Auto Partition Table"),(0,i.yg)("p",null,"If the target table of the INSERT OVERWRITE is an autopartitioned table, the behaviour is controlled by the ",(0,i.yg)("a",{parentName:"p",href:"../../../../query/query-variables/variables#variable"},"Session Variable"),"  ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_auto_create_when_overwrite")," controls the behaviour as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"If PARTITION is not specified (overwrite the whole table), when ",(0,i.yg)("inlineCode",{parentName:"li"},"enable_auto_create_when_overwrite")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),", the table is overwritten and partitions are created according to the table's auto-partitioning rules for data that does not have a corresponding partition, and those datas is admit. If ",(0,i.yg)("inlineCode",{parentName:"li"},"enable_auto_create_when_overwrite")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),", data for which no partition is found will accumulate error rows until it fails."),(0,i.yg)("li",{parentName:"ol"},"If an overwrite PARTITION is specified, the AUTO PARTITION table behaves as a normal partitioned table during this process, and data that does not satisfy the conditions of an existing partition is filtered instead of creating a new partition."),(0,i.yg)("li",{parentName:"ol"},"If you specify PARTITION as ",(0,i.yg)("inlineCode",{parentName:"li"},"partition(*)")," (auto detect partition and overwrite), when ",(0,i.yg)("inlineCode",{parentName:"li"},"enable_auto_create_when_overwrite")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),", for the data that have corresponding partitions in the table, overwrite their corresponding partitions, and leave the other existing partitions unchanged. At the same time, for data without corresponding partitions, create partitions according to the table's auto-partitioning rules, and accommodate the data without corresponding partitions. If ",(0,i.yg)("inlineCode",{parentName:"li"},"enable_auto_create_when_overwrite")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),", data for which no partition is found will accumulate error rows until it fails.")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"enable_auto_create_when_overwrite")," was introduced since 2.1.6. In versions without ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_auto_create_when_overwrite"),", the behaviour is as if the variable had a value of ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("p",null,"Examples are shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> create table auto_list(\n    ->              k0 varchar null\n    ->          )\n    ->          auto partition by list (k0)\n    ->          (\n    ->              PARTITION p1 values in (("Beijing"), ("BEIJING")),\n    ->              PARTITION p2 values in (("Shanghai"), ("SHANGHAI")),\n    ->              PARTITION p3 values in (("xxx"), ("XXX")),\n    ->              PARTITION p4 values in (("list"), ("LIST")),\n    ->              PARTITION p5 values in (("1234567"), ("7654321"))\n    ->          )\n    ->          DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    ->          properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.14 sec)\n\nmysql> insert into auto_list values ("Beijing"),("Shanghai"),("xxx"),("list"),("1234567");\nQuery OK, 5 rows affected (0.22 sec)\n\nmysql> insert overwrite table auto_list partition(*) values ("BEIJING"), ("new1");\nQuery OK, 2 rows affected (0.28 sec)\n\nmysql> select * from auto_list;\n+----------+ --- p1 is overwritten, new1 gets the new partition, and the other partitions remain unchanged.\n| k0       |\n+----------+\n| 1234567  |\n| BEIJING  |\n| list     |\n| xxx      |\n| new1     |\n| Shanghai |\n+----------+\n6 rows in set (0.48 sec)\n\nmysql> insert overwrite table auto_list values ("SHANGHAI"), ("new2");\nQuery OK, 2 rows affected (0.17 sec)\n\nmysql> select * from auto_list;\n+----------+ --- The whole table is overwritten, and new2 gets the new partition.\n| k0       |\n+----------+\n| new2     |\n| SHANGHAI |\n+----------+\n2 rows in set (0.15 sec)\n')),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("p",null,"Assuming there is a table named ",(0,i.yg)("inlineCode",{parentName:"p"},"test"),". The table contains two columns ",(0,i.yg)("inlineCode",{parentName:"p"},"c1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"c2"),", and two partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"p1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"p2")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS test (\n  `c1` int NOT NULL DEFAULT "1",\n  `c2` int NOT NULL DEFAULT "4"\n) ENGINE=OLAP\nUNIQUE KEY(`c1`)\nPARTITION BY LIST (`c1`)\n(\nPARTITION p1 VALUES IN ("1","2","3"),\nPARTITION p2 VALUES IN ("4","5","6")\n)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 3\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "in_memory" = "false",\n  "storage_format" = "V2"\n);\n')),(0,i.yg)("h4",{id:"overwrite-table"},"Overwrite Table"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table using the form of ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"// Single-row overwrite.\nINSERT OVERWRITE table test VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1);\n// Multi-row overwrite.\nINSERT OVERWRITE table test VALUES (1, 2), (3, 2 + 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1), (3);\n")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The first and second statements have the same effect. If the target column is not specified during overwriting, the column order in the table will be used as the default target column. After the overwrite is successful, there is only one row of data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table."),(0,i.yg)("li",{parentName:"ul"},"The third and fourth statements have the same effect. The unspecified column ",(0,i.yg)("inlineCode",{parentName:"li"},"c2")," will be overwritten with the default value 4. After the overwrite is successful, there is only one row of data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table."),(0,i.yg)("li",{parentName:"ul"},"The fifth and sixth statements have the same effect. Expressions (such as ",(0,i.yg)("inlineCode",{parentName:"li"},"2+2"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"2*2"),") can be used in the statement. The result of the expression will be computed during the execution of the statement and then overwritten into the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table. After the overwrite is successful, there are two rows of data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table."),(0,i.yg)("li",{parentName:"ul"},"The seventh and eighth statements have the same effect. The unspecified column ",(0,i.yg)("inlineCode",{parentName:"li"},"c2")," will be overwritten with the default value 4. After the overwrite is successful, there are two rows of data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table.")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table in the form of a query statement. The data format of the ",(0,i.yg)("inlineCode",{parentName:"p"},"test2")," table and the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table must be consistent. If they are not consistent, implicit data type conversion will be triggered."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test SELECT * FROM test2;\nINSERT OVERWRITE table test (c1, c2) SELECT * from test2;\n")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The first and second statements have the same effect. The purpose of these statements is to take data from the ",(0,i.yg)("inlineCode",{parentName:"li"},"test2")," table and overwrite the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table with the taken data. After the overwrite is successful, the data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table will be consistent with the data in the ",(0,i.yg)("inlineCode",{parentName:"li"},"test2")," table.")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table and specify a label."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test WITH LABEL `label1` SELECT * FROM test2;\nINSERT OVERWRITE table test WITH LABEL `label2` (c1, c2) SELECT * from test2;\n")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Users can use the ",(0,i.yg)("inlineCode",{parentName:"li"},"SHOW LOAD;")," command to check the status of the job imported by this ",(0,i.yg)("inlineCode",{parentName:"li"},"label"),". It should be noted that the label is unique.")),(0,i.yg)("h4",{id:"overwrite-table-partition"},"Overwrite Table Partition"),(0,i.yg)("p",null,"When using INSERT OVERWRITE to rewrite partitions, we actually encapsulate the following three steps into a single transaction and execute it. If it fails halfway through, the operations that have been performed will be rolled back:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Assuming that partition ",(0,i.yg)("inlineCode",{parentName:"li"},"p1")," is specified to be rewritten, first create an empty temporary partition ",(0,i.yg)("inlineCode",{parentName:"li"},"pTMP")," with the same structure as the target partition to be rewritten."),(0,i.yg)("li",{parentName:"ol"},"Write data to ",(0,i.yg)("inlineCode",{parentName:"li"},"pTMP"),"."),(0,i.yg)("li",{parentName:"ol"},"replace ",(0,i.yg)("inlineCode",{parentName:"li"},"p1")," with the ",(0,i.yg)("inlineCode",{parentName:"li"},"pTMP")," atom")),(0,i.yg)("p",null,"The following is examples:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"P1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"P2")," of the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table using the form of ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"// Single-row overwrite.\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1);\n// Multi-row overwrite.\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2), (4, 2 + 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2), (4, 2 * 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT), (4, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1), (4);\n")),(0,i.yg)("p",{parentName:"li"},"Unlike overwriting an entire table, the above statements are overwriting partitions in the table. Partitions can be overwritten one at a time or multiple partitions can be overwritten at once. It should be noted that only data that satisfies the corresponding partition filtering condition can be overwritten successfully. If there is data in the overwritten data that does not satisfy any of the partitions, the overwrite will fail. An example of a failure is shown below."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) VALUES (7, 2);\n")),(0,i.yg)("p",{parentName:"li"},"The data overwritten by the above statements (",(0,i.yg)("inlineCode",{parentName:"p"},"c1=7"),") does not satisfy the conditions of partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"P1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"P2"),", so the overwrite will fail.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"P1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"P2")," of the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table in the form of a query statement. The data format of the ",(0,i.yg)("inlineCode",{parentName:"p"},"test2")," table and the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table must be consistent. If they are not consistent, implicit data type conversion will be triggered."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) SELECT * from test2;\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Overwrite partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"P1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"P2")," of the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table and specify a label."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label3` SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label4` (c1, c2) SELECT * from test2;\n")))),(0,i.yg)("h4",{id:"overwrite-auto-detect-partition"},"Overwrite Auto Detect Partition"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"This feature is available since version 2.1.3.")),(0,i.yg)("p",null,"When the PARTITION clause specified by the INSERT OVERWRITE command is ",(0,i.yg)("inlineCode",{parentName:"p"},"PARTITION(*)"),", this overwrite will automatically detect the partition where the data is located. Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> create table test(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p10 values less than (10),\n    -> PARTITION p100 values less than (100),\n    -> PARTITION pMAX values less than (maxvalue)\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> insert into test values (1), (2), (15), (100), (200);\nQuery OK, 5 rows affected (0.29 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    1 |\n|    2 |\n|   15 |\n|  100 |\n|  200 |\n+------+\n5 rows in set (0.23 sec)\n\nmysql> insert overwrite table test partition(*) values (3), (1234);\nQuery OK, 2 rows affected (0.24 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    3 |\n|   15 |\n| 1234 |\n+------+\n3 rows in set (0.20 sec)\n')),(0,i.yg)("p",null,"As you can see, all data in partitions ",(0,i.yg)("inlineCode",{parentName:"p"},"p10")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"pMAX"),", where data 3 and 1234 are located, are overwritten, while partition ",(0,i.yg)("inlineCode",{parentName:"p"},"p100")," remains unchanged. This operation can be interpreted as syntactic sugar for specifying a specific partition to be overwritten by the PARTITION clause during an INSERT OVERWRITE operation, which is implemented in the same way as ",(0,i.yg)("a",{parentName:"p",href:"#overwrite-table-partition"},"specify a partition to overwrite"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"PARTITION(*)")," syntax eliminates the need to manually fill in all the partition names when overwriting a large number of partitions."),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"INSERT OVERWRITE, OVERWRITE, AUTO DETECT\n")))}u.isMDXComponent=!0}}]);