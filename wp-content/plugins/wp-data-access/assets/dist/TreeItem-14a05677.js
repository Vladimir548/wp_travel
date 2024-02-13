import{a as ae,g as ue,_ as m,b as j,c as fe,e as _}from"./identifier-91e83c3b.js";import{r as N,j as w}from"./main.js";import{b as pe,d as Re,e as M,s as K,u as ge,c as be}from"./iconBase-acf0401f.js";import{o as Ne,u as ve,k as De,l as ke}from"./index.esm-d52ea482.js";import{C as xe}from"./Collapse-746eff24.js";function Oe(e){return ae("MuiTreeView",e)}ue("MuiTreeView",["root"]);const he={instance:null,multiSelect:!1,disabledItemsFocusable:!1,treeId:void 0,icons:{defaultCollapseIcon:null,defaultExpandIcon:null,defaultParentIcon:null,defaultEndIcon:null}},Ie=N.createContext(he),Fe=(e,t)=>{const o=N.useRef({}),[l,r]=N.useState(()=>{const b={};return e.forEach(s=>{s.models&&Object.entries(s.models).forEach(([p,c])=>{o.current[p]={controlledProp:c.controlledProp,defaultProp:c.defaultProp,isControlled:t[c.controlledProp]!==void 0},b[p]=t[c.defaultProp]})}),b});return Object.fromEntries(Object.entries(o.current).map(([b,s])=>{const p=s.isControlled?t[s.controlledProp]:l[b];return[b,{value:p,setValue:c=>{s.isControlled||r(f=>m({},f,{[b]:c}))}}]}))};class $e{constructor(){this.maxListeners=20,this.warnOnce=!1,this.events={}}on(t,o,l={}){let r=this.events[t];r||(r={highPriority:new Map,regular:new Map},this.events[t]=r),l.isFirst?r.highPriority.set(o,!0):r.regular.set(o,!0)}removeListener(t,o){this.events[t]&&(this.events[t].regular.delete(o),this.events[t].highPriority.delete(o))}removeAllListeners(){this.events={}}emit(t,...o){const l=this.events[t];if(!l)return;const r=Array.from(l.highPriority.keys()),d=Array.from(l.regular.keys());for(let b=r.length-1;b>=0;b-=1){const s=r[b];l.highPriority.has(s)&&s.apply(this,o)}for(let b=0;b<d.length;b+=1){const s=d[b];l.regular.has(s)&&s.apply(this,o)}}once(t,o){const l=this;this.on(t,function r(...d){l.removeListener(t,r),o.apply(l,d)})}}const J=(e,t)=>{const o=e.getNode(t),l=e.getNavigableChildrenIds(o.parentId),r=l.indexOf(t);if(r===0)return o.parentId;let d=l[r-1];for(;e.isNodeExpanded(d)&&e.getNavigableChildrenIds(d).length>0;)d=e.getNavigableChildrenIds(d).pop();return d},V=(e,t)=>{if(e.isNodeExpanded(t)&&e.getNavigableChildrenIds(t).length>0)return e.getNavigableChildrenIds(t)[0];let o=e.getNode(t);for(;o!=null;){const l=e.getNavigableChildrenIds(o.parentId),r=l[l.indexOf(o.id)+1];if(r)return r;o=e.getNode(o.parentId)}return null},Q=e=>{let t=e.getNavigableChildrenIds(null).pop();for(;e.isNodeExpanded(t);)t=e.getNavigableChildrenIds(t).pop();return t},Y=e=>e.getNavigableChildrenIds(null)[0],F=(e,t)=>{Object.assign(e,t)},Ve=e=>e.isPropagationStopped!==void 0,Me=({instance:e})=>{const[t]=N.useState(()=>new $e),o=N.useCallback((...r)=>{const[d,b,s={}]=r;s.defaultMuiPrevented=!1,!(Ve(s)&&s.isPropagationStopped())&&t.emit(d,b,s)},[t]),l=N.useCallback((r,d)=>(t.on(r,d),()=>{t.removeListener(r,d)}),[t]);F(e,{$$publishEvent:o,$$subscribeEvent:l})},Ae=[Me],Le=e=>{const t=[...Ae,...e.plugins],o=t.reduce((n,i)=>i.getDefaultizedParams?i.getDefaultizedParams(n):n,e),l=Fe(t,o),d=N.useRef({}).current,b=N.useRef(null),s=pe(b,e.rootRef),[p,c]=N.useState(()=>{const n={};return t.forEach(i=>{i.getInitialState&&Object.assign(n,i.getInitialState(o))}),n}),f=[];let u=he;const h=n=>{const i=n({instance:d,params:o,state:p,setState:c,rootRef:b,models:l})||{};i.getRootProps&&f.push(i.getRootProps),i.contextValue&&(u=i.contextValue)};return t.forEach(h),{getRootProps:(n={})=>{const i=m({role:"tree",tabIndex:0},n,{ref:s});return f.forEach(g=>{Object.assign(i,g(n))}),i},rootRef:s,contextValue:u}},_e=["element"];function je(e,t){for(let o=0;o<e.length;o+=1)if(t(e[o]))return o;return-1}function Ke(e,t){let o=0,l=e.length-1;for(;o<=l;){const r=Math.floor((o+l)/2);if(e[r].element===t)return r;e[r].element.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?l=r-1:o=r+1}return o}const Se=N.createContext({});function Ue(e){const t=N.useRef(null);return N.useEffect(()=>{t.current=e},[e]),t.current}const se=()=>{};function Be(e){const[,t]=N.useState(),{registerDescendant:o=se,unregisterDescendant:l=se,descendants:r=[],parentId:d=null}=N.useContext(Se),b=je(r,c=>c.element===e.element),s=Ue(r),p=r.some((c,f)=>s&&s[f]&&s[f].element!==c.element);return Re(()=>{if(e.element)return o(m({},e,{index:b})),()=>{l(e.element)};t({})},[o,l,b,p,e]),{parentId:d,index:b}}function Ce(e){const{children:t,id:o}=e,[l,r]=N.useState([]),d=N.useCallback(p=>{let{element:c}=p,f=j(p,_e);r(u=>{if(u.length===0)return[m({},f,{element:c,index:0})];const h=Ke(u,c);let a;if(u[h]&&u[h].element===c)a=u;else{const n=m({},f,{element:c,index:h});a=u.slice(),a.splice(h,0,n)}return a.forEach((n,i)=>{n.index=i}),a})},[]),b=N.useCallback(p=>{r(c=>c.filter(f=>p!==f.element))},[]),s=N.useMemo(()=>({descendants:l,registerDescendant:d,unregisterDescendant:b,parentId:o}),[l,d,b,o]);return w.jsx(Se.Provider,{value:s,children:t})}function ze(e){const{value:t,children:o}=e;return w.jsx(Ie.Provider,{value:t,children:w.jsx(Ce,{children:o})})}const He=(e,t,o)=>{e.$$publishEvent(t,o)},We=({instance:e,params:t})=>{const o=N.useRef({}),l=N.useCallback(c=>o.current[c],[]),r=N.useCallback(c=>{o.current[c.id]=c},[]),d=N.useCallback(c=>{const f=m({},o.current);delete f[c],o.current=f,He(e,"removeNode",{id:c})},[e]),b=N.useCallback(c=>{if(c==null)return!1;let f=e.getNode(c);if(!f)return!1;if(f.disabled)return!0;for(;f.parentId!=null;)if(f=e.getNode(f.parentId),f.disabled)return!0;return!1},[e]),s=M(c=>Object.values(o.current).filter(f=>f.parentId===c).sort((f,u)=>f.index-u.index).map(f=>f.id));F(e,{getNode:l,updateNode:r,removeNode:d,getChildrenIds:s,getNavigableChildrenIds:c=>{let f=e.getChildrenIds(c);return t.disabledItemsFocusable||(f=f.filter(u=>!e.isNodeDisabled(u))),f},isNodeDisabled:b})},Z=({instance:e,params:t,models:o})=>{const l=N.useCallback(s=>Array.isArray(o.expanded.value)?o.expanded.value.indexOf(s)!==-1:!1,[o.expanded.value]),r=N.useCallback(s=>{var p;return!!((p=e.getNode(s))!=null&&p.expandable)},[e]),d=M((s,p)=>{if(p==null)return;let c;o.expanded.value.indexOf(p)!==-1?c=o.expanded.value.filter(f=>f!==p):c=[p].concat(o.expanded.value),t.onNodeToggle&&t.onNodeToggle(s,c),o.expanded.setValue(c)});F(e,{isNodeExpanded:l,isNodeExpandable:r,toggleNodeExpansion:d,expandAllSiblings:(s,p)=>{const c=e.getNode(p),u=e.getChildrenIds(c.parentId).filter(a=>e.isNodeExpandable(a)&&!e.isNodeExpanded(a)),h=o.expanded.value.concat(u);u.length>0&&(o.expanded.setValue(h),t.onNodeToggle&&t.onNodeToggle(s,h))}})};Z.models={expanded:{controlledProp:"expanded",defaultProp:"defaultExpanded"}};const Ge=[];Z.getDefaultizedParams=e=>{var t;return m({},e,{defaultExpanded:(t=e.defaultExpanded)!=null?t:Ge})};const Xe=(e,t,o)=>{if(t===o)return[t,o];const l=e.getNode(t),r=e.getNode(o);if(l.parentId===r.id||r.parentId===l.id)return r.parentId===l.id?[l.id,r.id]:[r.id,l.id];const d=[l.id],b=[r.id];let s=l.parentId,p=r.parentId,c=b.indexOf(s)!==-1,f=d.indexOf(p)!==-1,u=!0,h=!0;for(;!f&&!c;)u&&(d.push(s),c=b.indexOf(s)!==-1,u=s!==null,!c&&u&&(s=e.getNode(s).parentId)),h&&!c&&(b.push(p),f=d.indexOf(p)!==-1,h=p!==null,!f&&h&&(p=e.getNode(p).parentId));const a=c?s:p,n=e.getChildrenIds(a),i=d[d.indexOf(a)-1],g=b[b.indexOf(a)-1];return n.indexOf(i)<n.indexOf(g)?[t,o]:[o,t]},ee=({instance:e,params:t,models:o})=>{const l=N.useRef(null),r=N.useRef(!1),d=N.useRef([]),b=n=>Array.isArray(o.selected.value)?o.selected.value.indexOf(n)!==-1:o.selected.value===n,s=(n,i,g=!1)=>{if(!t.disableSelection){if(g){if(Array.isArray(o.selected.value)){let x;o.selected.value.indexOf(i)!==-1?x=o.selected.value.filter(I=>I!==i):x=[i].concat(o.selected.value),t.onNodeSelect&&t.onNodeSelect(n,x),o.selected.setValue(x)}}else{const x=t.multiSelect?[i]:i;t.onNodeSelect&&t.onNodeSelect(n,x),o.selected.setValue(x)}l.current=i,r.current=!1,d.current=[]}},p=(n,i)=>{const[g,x]=Xe(e,n,i),I=[g];let S=g;for(;S!==x;)S=V(e,S),I.push(S);return I},c=(n,i)=>{let g=o.selected.value.slice();const{start:x,next:I,current:S}=i;!I||!S||(d.current.indexOf(S)===-1&&(d.current=[]),r.current?d.current.indexOf(I)!==-1?(g=g.filter(C=>C===x||C!==S),d.current=d.current.filter(C=>C===x||C!==S)):(g.push(I),d.current.push(I)):(g.push(I),d.current.push(S,I)),t.onNodeSelect&&t.onNodeSelect(n,g),o.selected.setValue(g))},f=(n,i)=>{let g=o.selected.value.slice();const{start:x,end:I}=i;r.current&&(g=g.filter(E=>d.current.indexOf(E)===-1));let S=p(x,I);S=S.filter(E=>!e.isNodeDisabled(E)),d.current=S;let C=g.concat(S);C=C.filter((E,R)=>C.indexOf(E)===R),t.onNodeSelect&&t.onNodeSelect(n,C),o.selected.setValue(C)};return F(e,{isNodeSelected:b,selectNode:s,selectRange:(n,i,g=!1)=>{if(t.disableSelection)return;const{start:x=l.current,end:I,current:S}=i;g?c(n,{start:x,next:I,current:S}):x!=null&&I!=null&&f(n,{start:x,end:I}),r.current=!0},rangeSelectToLast:(n,i)=>{l.current||(l.current=i);const g=r.current?l.current:i;e.selectRange(n,{start:g,end:Q(e)})},rangeSelectToFirst:(n,i)=>{l.current||(l.current=i);const g=r.current?l.current:i;e.selectRange(n,{start:g,end:Y(e)})}}),{getRootProps:()=>({"aria-multiselectable":t.multiSelect})}};ee.models={selected:{controlledProp:"selected",defaultProp:"defaultSelected"}};const qe=[];ee.getDefaultizedParams=e=>{var t,o,l;return m({},e,{disableSelection:(t=e.disableSelection)!=null?t:!1,multiSelect:(o=e.multiSelect)!=null?o:!1,defaultSelected:(l=e.defaultSelected)!=null?l:e.multiSelect?qe:null})};const ie=1e3;class Je{constructor(t=ie){this.timeouts=new Map,this.cleanupTimeout=ie,this.cleanupTimeout=t}register(t,o,l){this.timeouts||(this.timeouts=new Map);const r=setTimeout(()=>{typeof o=="function"&&o(),this.timeouts.delete(l.cleanupToken)},this.cleanupTimeout);this.timeouts.set(l.cleanupToken,r)}unregister(t){const o=this.timeouts.get(t.cleanupToken);o&&(this.timeouts.delete(t.cleanupToken),clearTimeout(o))}reset(){this.timeouts&&(this.timeouts.forEach((t,o)=>{this.unregister({cleanupToken:o})}),this.timeouts=void 0)}}class Qe{constructor(){this.registry=new FinalizationRegistry(t=>{typeof t=="function"&&t()})}register(t,o,l){this.registry.register(t,o,l)}unregister(t){this.registry.unregister(t)}reset(){}}class Ye{}function Ze(e){let t=0;return function(l,r,d){e.registry===null&&(e.registry=typeof FinalizationRegistry<"u"?new Qe:new Je);const[b]=N.useState(new Ye),s=N.useRef(null),p=N.useRef();p.current=d;const c=N.useRef(null);if(!s.current&&p.current){const f=(u,h)=>{if(!h.defaultMuiPrevented){var a;(a=p.current)==null||a.call(p,u,h)}};s.current=l.$$subscribeEvent(r,f),t+=1,c.current={cleanupToken:t},e.registry.register(b,()=>{var u;(u=s.current)==null||u.call(s),s.current=null,c.current=null},c.current)}else!p.current&&s.current&&(s.current(),s.current=null,c.current&&(e.registry.unregister(c.current),c.current=null));N.useEffect(()=>{if(!s.current&&p.current){const f=(u,h)=>{if(!h.defaultMuiPrevented){var a;(a=p.current)==null||a.call(p,u,h)}};s.current=l.$$subscribeEvent(r,f)}return c.current&&e.registry&&(e.registry.unregister(c.current),c.current=null),()=>{var f;(f=s.current)==null||f.call(s),s.current=null}},[l,r])}}const et={registry:null},tt=Ze(et),te=({instance:e,params:t,state:o,setState:l,models:r,rootRef:d})=>{const b=M(a=>{const n=typeof a=="function"?a(o.focusedNodeId):a;l(i=>m({},i,{focusedNodeId:n}))}),s=N.useCallback(a=>o.focusedNodeId===a,[o.focusedNodeId]),p=M((a,n)=>{n&&(b(n),t.onNodeFocus&&t.onNodeFocus(a,n))});F(e,{isNodeFocused:s,focusNode:p}),tt(e,"removeNode",({id:a})=>{b(n=>n===a&&d.current===Ne(d.current).activeElement?e.getChildrenIds(null)[0]:n)});const c=a=>n=>{var i;if((i=a.onFocus)==null||i.call(a,n),n.target===n.currentTarget){const g=I=>{const S=e.getNode(I);return S&&(S.parentId==null||e.isNodeExpanded(S.parentId))};let x;Array.isArray(r.selected.value)?x=r.selected.value.find(g):r.selected.value!=null&&g(r.selected.value)&&(x=r.selected.value),x==null&&(x=e.getNavigableChildrenIds(null)[0]),e.focusNode(n,x)}},f=a=>n=>{var i;(i=a.onBlur)==null||i.call(a,n),b(null)},u=e.getNode(o.focusedNodeId),h=u?u.idAttribute:null;return{getRootProps:a=>({onFocus:c(a),onBlur:f(a),"aria-activedescendant":h??void 0})}};te.getInitialState=()=>({focusedNodeId:null});te.getDefaultizedParams=e=>{var t;return m({},e,{disabledItemsFocusable:(t=e.disabledItemsFocusable)!=null?t:!1})};function ot(e){return e&&e.length===1&&e.match(/\S/)}function ce(e,t,o){for(let l=t;l<e.length;l+=1)if(o===e[l])return l;return-1}const nt=({instance:e,params:t,state:o})=>{const r=ve().direction==="rtl",d=N.useRef({}),b=M((a,n)=>(d.current[a]=n,()=>{const i=m({},d.current);delete i[a],d.current=i}));F(e,{mapFirstChar:b});const s=a=>(o.focusedNodeId!=null&&e.isNodeExpandable(o.focusedNodeId)&&(e.isNodeExpanded(o.focusedNodeId)?e.focusNode(a,V(e,o.focusedNodeId)):e.isNodeDisabled(o.focusedNodeId)||e.toggleNodeExpansion(a,o.focusedNodeId)),!0),p=a=>{if(o.focusedNodeId==null)return!1;if(e.isNodeExpanded(o.focusedNodeId)&&!e.isNodeDisabled(o.focusedNodeId))return e.toggleNodeExpansion(a,o.focusedNodeId),!0;const n=e.getNode(o.focusedNodeId).parentId;return n?(e.focusNode(a,n),!0):!1},c=(a,n,i)=>{let g,x;const I=i.toLowerCase(),S=[],C=[];Object.keys(d.current).forEach(E=>{const R=e.getNode(E),T=R.parentId?e.isNodeExpanded(R.parentId):!0,k=t.disabledItemsFocusable?!1:e.isNodeDisabled(E);T&&!k&&(S.push(E),C.push(d.current[E]))}),g=S.indexOf(n)+1,g>=S.length&&(g=0),x=ce(C,g,I),x===-1&&(x=ce(C,0,I)),x>-1&&e.focusNode(a,S[x])},f=(a,n)=>{e.isNodeDisabled(V(e,n))||e.selectRange(a,{end:V(e,n),current:n},!0)},u=(a,n)=>{e.isNodeDisabled(J(e,n))||e.selectRange(a,{end:J(e,n),current:n},!0)},h=a=>n=>{var i;(i=a.onKeyDown)==null||i.call(a,n);let g=!1;const x=n.key;if(n.altKey||n.currentTarget!==n.target||o.focusedNodeId==null)return;const I=n.ctrlKey||n.metaKey;switch(x){case" ":!t.disableSelection&&!e.isNodeDisabled(o.focusedNodeId)&&(g=!0,t.multiSelect&&n.shiftKey?e.selectRange(n,{end:o.focusedNodeId}):t.multiSelect?e.selectNode(n,o.focusedNodeId,!0):e.selectNode(n,o.focusedNodeId)),n.stopPropagation();break;case"Enter":e.isNodeDisabled(o.focusedNodeId)||(e.isNodeExpandable(o.focusedNodeId)?(e.toggleNodeExpansion(n,o.focusedNodeId),g=!0):t.disableSelection||(g=!0,t.multiSelect?e.selectNode(n,o.focusedNodeId,!0):e.selectNode(n,o.focusedNodeId))),n.stopPropagation();break;case"ArrowDown":t.multiSelect&&n.shiftKey&&!t.disableSelection&&f(n,o.focusedNodeId),e.focusNode(n,V(e,o.focusedNodeId)),g=!0;break;case"ArrowUp":t.multiSelect&&n.shiftKey&&!t.disableSelection&&u(n,o.focusedNodeId),e.focusNode(n,J(e,o.focusedNodeId)),g=!0;break;case"ArrowRight":r?g=p(n):g=s(n);break;case"ArrowLeft":r?g=s(n):g=p(n);break;case"Home":t.multiSelect&&I&&n.shiftKey&&!t.disableSelection&&!e.isNodeDisabled(o.focusedNodeId)&&e.rangeSelectToFirst(n,o.focusedNodeId),e.focusNode(n,Y(e)),g=!0;break;case"End":t.multiSelect&&I&&n.shiftKey&&!t.disableSelection&&!e.isNodeDisabled(o.focusedNodeId)&&e.rangeSelectToLast(n,o.focusedNodeId),e.focusNode(n,Q(e)),g=!0;break;default:x==="*"?(e.expandAllSiblings(n,o.focusedNodeId),g=!0):t.multiSelect&&I&&x.toLowerCase()==="a"&&!t.disableSelection?(e.selectRange(n,{start:Y(e),end:Q(e)}),g=!0):!I&&!n.shiftKey&&ot(x)&&(c(n,o.focusedNodeId,x),g=!0)}g&&(n.preventDefault(),n.stopPropagation())};return{getRootProps:a=>({onKeyDown:h(a)})}},lt=({instance:e,params:t})=>{const o=De(t.id);return{getRootProps:()=>({id:o}),contextValue:{treeId:o,instance:e,multiSelect:t.multiSelect,disabledItemsFocusable:t.disabledItemsFocusable,icons:{defaultCollapseIcon:t.defaultCollapseIcon,defaultEndIcon:t.defaultEndIcon,defaultExpandIcon:t.defaultExpandIcon,defaultParentIcon:t.defaultParentIcon}}}},rt=[We,Z,ee,te,nt,lt],st=["disabledItemsFocusable","expanded","defaultExpanded","onNodeToggle","onNodeFocus","disableSelection","defaultSelected","selected","multiSelect","onNodeSelect","id","defaultCollapseIcon","defaultEndIcon","defaultExpandIcon","defaultParentIcon","children"],it=e=>{const{classes:t}=e;return be({root:["root"]},Oe,t)},de=K("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0}),Ct=N.forwardRef(function(t,o){const l=ge({props:t,name:"MuiTreeView"}),r=l,d=l,{disabledItemsFocusable:b,expanded:s,defaultExpanded:p,onNodeToggle:c,onNodeFocus:f,disableSelection:u,defaultSelected:h,selected:a,multiSelect:n,onNodeSelect:i,id:g,defaultCollapseIcon:x,defaultEndIcon:I,defaultExpandIcon:S,defaultParentIcon:C,children:E}=d,R=j(d,st),{getRootProps:T,contextValue:k}=Le({disabledItemsFocusable:b,expanded:s,defaultExpanded:p,onNodeToggle:c,onNodeFocus:f,disableSelection:u,defaultSelected:h,selected:a,multiSelect:n,onNodeSelect:i,id:g,defaultCollapseIcon:x,defaultEndIcon:I,defaultExpandIcon:S,defaultParentIcon:C,plugins:rt,rootRef:o}),y=it(l),O=ke({elementType:de,externalSlotProps:{},externalForwardedProps:R,className:y.root,getSlotProps:T,ownerState:r});return w.jsx(ze,{value:k,children:w.jsx(de,m({},O,{children:E}))})}),Ee=()=>N.useContext(Ie);function ct(e){const{instance:t,multiSelect:o}=Ee(),l=t?t.isNodeExpandable(e):!1,r=t?t.isNodeExpanded(e):!1,d=t?t.isNodeFocused(e):!1,b=t?t.isNodeSelected(e):!1,s=t?t.isNodeDisabled(e):!1;return{disabled:s,expanded:r,selected:b,focused:d,handleExpansion:u=>{if(t&&!s){d||t.focusNode(u,e);const h=o&&(u.shiftKey||u.ctrlKey||u.metaKey);l&&!(h&&t.isNodeExpanded(e))&&t.toggleNodeExpansion(u,e)}},handleSelection:u=>{t&&!s&&(d||t.focusNode(u,e),o&&(u.shiftKey||u.ctrlKey||u.metaKey)?u.shiftKey?t.selectRange(u,{end:e}):t.selectNode(u,e,!0):t.selectNode(u,e))},preventSelection:u=>{(u.shiftKey||u.ctrlKey||u.metaKey||s)&&u.preventDefault()}}}const dt=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],ye=N.forwardRef(function(t,o){const{classes:l,className:r,displayIcon:d,expansionIcon:b,icon:s,label:p,nodeId:c,onClick:f,onMouseDown:u}=t,h=j(t,dt),{disabled:a,expanded:n,selected:i,focused:g,handleExpansion:x,handleSelection:I,preventSelection:S}=ct(c),C=s||b||d,E=T=>{S(T),u&&u(T)},R=T=>{x(T),I(T),f&&f(T)};return w.jsxs("div",m({},h,{className:fe(r,l.root,n&&l.expanded,i&&l.selected,g&&l.focused,a&&l.disabled),onClick:R,onMouseDown:E,ref:o,children:[w.jsx("div",{className:l.iconContainer,children:C}),w.jsx("div",{className:l.label,children:p})]}))});function at(e){return ae("MuiTreeItem",e)}const D=ue("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"]),ut=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],ft=e=>{const{classes:t}=e;return be({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},at,t)},pt=K("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),gt=K(ye,{name:"MuiTreeItem",slot:"Content",overridesResolver:(e,t)=>[t.content,t.iconContainer&&{[`& .${D.iconContainer}`]:t.iconContainer},t.label&&{[`& .${D.label}`]:t.label}]})(({theme:e})=>({padding:"0 8px",width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${D.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${D.focused}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${D.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`& .${D.iconContainer}`]:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${D.label}`]:m({paddingLeft:4,width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},e.typography.body1)})),bt=K(xe,{name:"MuiTreeItem",slot:"Group",overridesResolver:(e,t)=>t.group})({margin:0,padding:0,marginLeft:17}),Et=N.forwardRef(function(t,o){const l=ge({props:t,name:"MuiTreeItem"}),{children:r,className:d,collapseIcon:b,ContentComponent:s=ye,ContentProps:p,endIcon:c,expandIcon:f,disabled:u,icon:h,id:a,label:n,nodeId:i,onClick:g,onMouseDown:x,TransitionComponent:I=xe,TransitionProps:S}=l,C=j(l,ut),{icons:E,multiSelect:R,disabledItemsFocusable:T,treeId:k,instance:y}=Ee();let O;a!=null?O=a:k&&i&&(O=`${k}-${i}`);const[oe,me]=N.useState(null),ne=N.useRef(null),Te=pe(me,o),we=N.useMemo(()=>({element:oe,id:i}),[i,oe]),{index:U,parentId:le}=Be(we),$=!!(Array.isArray(r)?r.length:r),A=y?y.isNodeExpanded(i):!1,re=y?y.isNodeFocused(i):!1,B=y?y.isNodeSelected(i):!1,z=y?y.isNodeDisabled(i):!1,H=m({},l,{expanded:A,focused:re,selected:B,disabled:z}),v=ft(H);let W,G;$&&(A?G=b||E.defaultCollapseIcon:G=f||E.defaultExpandIcon),$?W=E.defaultParentIcon:W=c||E.defaultEndIcon,N.useEffect(()=>{if(y&&U!==-1)return y.updateNode({id:i,idAttribute:O,index:U,parentId:le,expandable:$,disabled:u}),()=>y.removeNode(i)},[y,le,U,i,$,u,O]),N.useEffect(()=>{if(y&&n){var P,L;return y.mapFirstChar(i,((P=(L=ne.current)==null?void 0:L.textContent)!=null?P:"").substring(0,1).toLowerCase())}},[y,i,n]);let X;R?X=B:B&&(X=!0);function Pe(P){if(P.target===P.currentTarget){let q;typeof P.target.getRootNode=="function"?q=P.target.getRootNode():q=Ne(P.target),q.getElementById(k).focus({preventScroll:!0})}const L=!T&&z;y&&!re&&P.currentTarget===P.target&&!L&&y.focusNode(P,i)}return w.jsxs(pt,m({className:fe(v.root,d),role:"treeitem","aria-expanded":$?A:void 0,"aria-selected":X,"aria-disabled":z||void 0,id:O,tabIndex:-1},C,{ownerState:H,onFocus:Pe,ref:Te,children:[w.jsx(gt,m({as:s,ref:ne,classes:{root:v.content,expanded:v.expanded,selected:v.selected,focused:v.focused,disabled:v.disabled,iconContainer:v.iconContainer,label:v.label},label:n,nodeId:i,onClick:g,onMouseDown:x,icon:h,expansionIcon:G,displayIcon:W,ownerState:H},p)),r&&w.jsx(Ce,{id:i,children:w.jsx(bt,m({as:I,unmountOnExit:!0,className:v.group,in:A,component:"ul",role:"group"},S,{children:r}))})]}))});export{Ct as T,Et as a};
