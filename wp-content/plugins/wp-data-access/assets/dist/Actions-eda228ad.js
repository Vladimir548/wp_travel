import{l as g,C as d,aS as U,W as e,aV as v,a8 as R}from"./main.js";import{R as f}from"./index.esm-d52ea482.js";var l=(t=>(t.TABLE="table",t.FORM="form",t.THEME="theme",t))(l||{});const A=(t,n,i,u,a)=>{g.debug(t,n,i,u),f(d.appUrlGet,{dbs:t,tbl:n,key:i,media:u},function(c){var o;if(g.debug(c),((o=c==null?void 0:c.data)==null?void 0:o.length)===1){a(c);return}a(null)})},h=(t,n,i,u)=>{g.debug(t,n,i),f(d.appUrlInsert,{dbs:t,tbl:n,val:i},function(a){if(g.debug(a),a!=null&&a.data){u(a);return}u(null)})},r=(t,n,i,u,a)=>{g.debug(t,n,i,u),f(d.appUrlUpdate,{dbs:t,tbl:n,key:i,val:u},function(c){if(g.debug(c),c!=null&&c.data){a(c);return}a(null)})},B=(t,n,i,u)=>{g.debug(t,n,i),f(d.appUrlDelete,{dbs:t,tbl:n,key:i},function(a){if(g.debug(a),a!=null&&a.data){u(a);return}u(null)})},E=(t,n,i,u)=>{g.debug(t,n,i),f(d.appUrlSettings,{action:"explorer_settings",dbs:t,tbl:n,settings:i},function(a){g.debug(a),u(a)})},S=(t,n,i,u,a,c)=>{g.debug(t,n,i,u,a),f(d.appUrlSettings,{action:"admin_settings",dbs:i,tbl:u,settings:{scope:t,target:n,data:a}},function(o){g.debug(o),c(o)})},T=(t,n,i,u,a)=>{const{state:c,...o}=U(e.getState(),t);S(n,l.TABLE,i,u,o,a)},w=(t,n,i,u,a)=>{const{data:c,...o}=v(e.getState(),t);S(n,l.FORM,i,u,o,a)},C=(t,n,i,u,a)=>{const{...c}=R(e.getState(),t);S(n,l.THEME,i,u,c,a)},F=(t,n,i,u)=>{f(d.appUrlLov,{action:"table_lov",dbs:t,tbl:n,col:i},function(a){g.debug(a),u(a)})},I=(t,n,i,u)=>{g.debug(t,n,i),f(d.appUrlActionRename,{dbs:t,from_tbl:n,to_tbl:i},function(a){if(g.debug(a),a){u(a);return}u(null)})},M=(t,n,i,u,a,c)=>{g.debug(t,n,i,u,a),f(d.appUrlActionCopy,{from_dbs:t,to_dbs:n,from_tbl:i,to_tbl:u,copy_data:a},function(o){if(g.debug(o),o){c(o);return}c(null)})},x=(t,n,i)=>{g.debug(t,n),f(d.appUrlActionTruncate,{dbs:t,tbl:n},function(u){if(g.debug(u),u){i(u);return}i(null)})},L=(t,n,i)=>{g.debug(t,n),f(d.appUrlActionDrop,{dbs:t,tbl:n},function(u){if(g.debug(u),u){i(u);return}i(null)})};export{l as T,S as a,M as b,I as c,x as d,L as e,E as f,T as g,C as h,h as i,w as j,B as k,F as l,A as s,r as u};
