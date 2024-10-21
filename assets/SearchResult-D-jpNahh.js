import{u as M,h as se,i as te,j as Y,k as ae,P as le,t as re,l as ue,m as F,n as x,p as ie,w as z,q as t,v as oe,R as j,x as ne,y as ce,z as ve,C as pe,A as he,B as de,D as ye,E as me,F as ge,G as fe,H as He,I,J as _,K as Re,L as q,M as ke}from"./app-DsmM2ODs.js";const we=["/","/demo.html","/example.html","/single.html","/tagwithoutTitle.html","/zh.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",g=M(Qe,[]),xe=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,f=M(qe,[]),Se=()=>{const a=U>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ce=a=>{const l=pe(),r=Y(),S=he(),i=F(0),k=x(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:C}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:L=h=>h,splitWord:D,suggestionsFilter:T,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(h=>L(h,R,r.value,S.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},q.searchDelay-q.suggestDelay);z([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{C()})}),{isSearching:k,results:d}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),S=Y(),i=ae(le),{enabled:k,addQueryHistory:d,queryHistory:y,removeQueryHistory:C}=xe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:L}=Se(),D=k||H,T=re(a,"queries"),{results:m,isSearching:h}=Ce(T),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),O=x(()=>D&&(y.value.length>0||c.value.length>0)),b=x(()=>m.value.length>0),A=x(()=>m.value[v.value]||null),B=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<A.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},E=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,Q=""]=He(s)?s[S.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",E([o,...n,Q])))}return e.display.map(s=>t("div",E(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>E(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=A.value.contents[p.value];d(a.queries.join(" ")),R(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),z([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!b.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?t(oe,{hint:i.value.searching}):b.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=Q&&p.value===ee;return t(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{d(a.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:D?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
