import{S as Ce,f as ce,ag as Ne,g as Ie,c as R,l as C,b as T,p as X,n as ue,z as pe,ah as ke,P as fe,i as re,ai as he,v as V,_ as Ke,$ as De,a0 as ze,aj as G,a3 as le,ak as $e,al as _e,am as Oe,an as Te,X as Ae,m as ae,k as O,s as Be,ao as Fe,F as ne,x as F,ap as Le,aq as He,ar as ve}from"./naiveui.0ad5ca37.js";import{r as L,x as me,z,C as d,q as b,y as ie,p as H,B as W,T as je,F as Me,Y as D}from"./app.d8e74fa3.js";import{c as We}from"./AppLayout.9d561a06.js";function Ee(e){return o=>{o?e.value=o.$el:e.value=null}}function Ue(e,o,i){if(!o)return e;const r=L(e.value);let t=null;return me(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}const qe=z({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ve={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},Ge=e=>{const{primaryColor:o,textColor2:i,dividerColor:r,hoverColor:t,popoverColor:n,invertedColor:s,borderRadius:c,fontSizeSmall:p,fontSizeMedium:w,fontSizeLarge:y,fontSizeHuge:S,heightSmall:N,heightMedium:P,heightLarge:I,heightHuge:$,textColor3:g,opacityDisabled:k}=e;return Object.assign(Object.assign({},Ve),{optionHeightSmall:N,optionHeightMedium:P,optionHeightLarge:I,optionHeightHuge:$,borderRadius:c,fontSizeSmall:p,fontSizeMedium:w,fontSizeLarge:y,fontSizeHuge:S,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:n,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:t,optionColorActive:Ie(o,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:k})},Xe=Ce({name:"Dropdown",common:ce,peers:{Popover:Ne},self:Ge}),Ze=Xe,be=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ye=e=>{const{textColorBase:o,opacity1:i,opacity2:r,opacity3:t,opacity4:n,opacity5:s}=e;return{color:o,opacity1Depth:i,opacity2Depth:r,opacity3Depth:t,opacity4Depth:n,opacity5Depth:s}},Je={name:"Icon",common:ce,self:Ye},Qe=Je,eo=R("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[C("color-transition",{transition:"color .3s var(--n-bezier)"}),C("depth",{color:"var(--n-color)"},[T("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),T("svg",{height:"1em",width:"1em"})]),oo=Object.assign(Object.assign({},X.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),no=z({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:oo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=ue(e),r=X("Icon","-icon",eo,Qe,e,o),t=b(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:p}=r.value;if(s!==void 0){const{color:w,[`opacity${s}Depth`]:y}=p;return{"--n-bezier":c,"--n-color":w,"--n-opacity":y}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=i?pe("icon",b(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:o,mergedStyle:b(()=>{const{size:s,color:c}=e;return{fontSize:ke(s),color:c}}),cssVars:i?void 0:t,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:r,component:t,onRender:n,themeClass:s}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&fe("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),d("i",ie(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:i,[`${r}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?d(t):this.$slots)}}),de=re("n-dropdown-menu"),Z=re("n-dropdown"),se=re("n-dropdown-option");function te(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function to(e){return e.type==="group"}function ge(e){return e.type==="divider"}function ro(e){return e.type==="render"}const ye=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(Z),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:s,animatedRef:c,mergedShowRef:p,renderLabelRef:w,renderIconRef:y,labelFieldRef:S,childrenFieldRef:N,renderOptionRef:P,nodePropsRef:I,menuPropsRef:$}=o,g=H(se,null),k=H(de),E=H(he),Y=b(()=>e.tmNode.rawNode),U=b(()=>{const{value:a}=N;return te(e.tmNode.rawNode,a)}),J=b(()=>{const{disabled:a}=e.tmNode;return a}),Q=b(()=>{if(!U.value)return!1;const{key:a,disabled:m}=e.tmNode;if(m)return!1;const{value:K}=i,{value:A}=r,{value:oe}=t,{value:B}=n;return K!==null?B.includes(a):A!==null?B.includes(a)&&B[B.length-1]!==a:oe!==null?B.includes(a):!1}),ee=b(()=>r.value===null&&!c.value),q=Ue(Q,300,ee),j=b(()=>!!(g!=null&&g.enteringSubmenuRef.value)),M=L(!1);W(se,{enteringSubmenuRef:M});function _(){M.value=!0}function l(){M.value=!1}function v(){const{parentKey:a,tmNode:m}=e;m.disabled||!p.value||(t.value=a,r.value=null,i.value=m.key)}function f(){const{tmNode:a}=e;a.disabled||!p.value||i.value!==a.key&&v()}function u(a){if(e.tmNode.disabled||!p.value)return;const{relatedTarget:m}=a;m&&!le({target:m},"dropdownOption")&&!le({target:m},"scrollbarRail")&&(i.value=null)}function x(){const{value:a}=U,{tmNode:m}=e;!p.value||!a&&!m.disabled&&(o.doSelect(m.key,m.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:w,renderIcon:y,siblingHasIcon:k.showIconRef,siblingHasSubmenu:k.hasSubmenuRef,menuProps:$,popoverBody:E,animated:c,mergedShowSubmenu:b(()=>q.value&&!j.value),rawNode:Y,hasSubmenu:U,pending:V(()=>{const{value:a}=n,{key:m}=e.tmNode;return a.includes(m)}),childActive:V(()=>{const{value:a}=s,{key:m}=e.tmNode,K=a.findIndex(A=>m===A);return K===-1?!1:K<a.length-1}),active:V(()=>{const{value:a}=s,{key:m}=e.tmNode,K=a.findIndex(A=>m===A);return K===-1?!1:K===a.length-1}),mergedDisabled:J,renderOption:P,nodeProps:I,handleClick:x,handleMouseMove:f,handleMouseEnter:v,handleMouseLeave:u,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:s,siblingHasSubmenu:c,renderLabel:p,renderIcon:w,renderOption:y,nodeProps:S,props:N,scrollable:P}=this;let I=null;if(t){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=d(we,Object.assign({},E,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=S==null?void 0:S(r),k=d("div",Object.assign({class:[`${n}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),d("div",ie($,N),[d("div",{class:[`${n}-dropdown-option-body__prefix`,s&&`${n}-dropdown-option-body__prefix--show-icon`]},[w?w(r):G(r.icon)]),d("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},p?p(r):G((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(no,null,{default:()=>d(qe,null)}):null)]),this.hasSubmenu?d(Ke,null,{default:()=>[d(De,null,{default:()=>d("div",{class:`${n}-dropdown-offset-container`},d(ze,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${n}-dropdown-menu-wrapper`},i?d(je,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return y?y({node:k,option:r}):k}}),io=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(de),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=H(Z);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:s}=this,{rawNode:c}=this.tmNode,p=d("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(c)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},G(c.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):G((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:p,option:c}):p}}),lo=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return d(Me,null,d(io,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>ge(t.rawNode)?d(be,{clsPrefix:i,key:t.key}):t.isGroup?(fe("dropdown","`group` node is not allowed to be put in `group` node."),null):d(ye,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})))}}),ao=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),we=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=H(Z);W(de,{showIconRef:b(()=>{const t=o.value;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:p})=>t?t(p):p.icon);const{rawNode:c}=n;return t?t(c):c.icon})}),hasSubmenuRef:b(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:p})=>te(p,t));const{rawNode:c}=n;return te(c,t)})})});const r=L(null);return W($e,null),W(_e,null),W(he,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return ro(n)?d(ao,{tmNode:t,key:t.key}):ge(n)?d(be,{clsPrefix:o,key:t.key}):to(n)?d(lo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):d(ye,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return d("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(Te,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Oe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),so=R("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ae(),R("dropdown-option",`
 position: relative;
 `,[T("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[T("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),R("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[T("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[C("pending",{color:"var(--n-option-text-color-hover)"},[O("prefix, suffix",{color:"var(--n-option-text-color-hover)"}),T("&::before","background-color: var(--n-option-color-hover);")]),C("active",{color:"var(--n-option-text-color-active)"},[O("prefix, suffix",{color:"var(--n-option-text-color-active)"}),T("&::before","background-color: var(--n-option-color-active);")]),C("child-active",{color:"var(--n-option-text-color-child-active)"},[O("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})])]),C("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),C("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[O("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[C("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),O("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[C("show-icon",{width:"var(--n-option-icon-prefix-width)"}),R("icon",{fontSize:"var(--n-option-icon-size)"})]),O("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),O("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[C("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),R("icon",{fontSize:"var(--n-option-icon-size)"})]),R("dropdown-menu","pointer-events: all;")]),R("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),R("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),R("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),T(">",[R("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),C("scrollable",[O("content",`
 padding: var(--n-padding);
 `)])]),co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},uo=Object.keys(ve),po=Object.assign(Object.assign(Object.assign({},ve),co),X.props),mo=z({name:"Dropdown",inheritAttrs:!1,props:po,setup(e){const o=L(!1),i=Be(D(e,"show"),o),r=b(()=>{const{keyField:l,childrenField:v}=e;return Fe(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[v]}})}),t=b(()=>r.value.treeNodes),n=L(null),s=L(null),c=L(null),p=b(()=>{var l,v,f;return(f=(v=(l=n.value)!==null&&l!==void 0?l:s.value)!==null&&v!==void 0?v:c.value)!==null&&f!==void 0?f:null}),w=b(()=>r.value.getPath(p.value).keyPath),y=b(()=>r.value.getPath(e.value).keyPath),S=V(()=>e.keyboard&&i.value);We({keydown:{ArrowUp:{prevent:!0,handler:J},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:Q},ArrowLeft:{prevent:!0,handler:Y},Escape:E},keyup:{Enter:ee}},S);const{mergedClsPrefixRef:N,inlineThemeDisabled:P}=ue(e),I=X("Dropdown","-dropdown",so,Ze,e,N);W(Z,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:w,activeKeyPathRef:y,animatedRef:D(e,"animated"),mergedShowRef:i,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:$,doUpdateShow:g}),me(i,l=>{!e.animated&&!l&&k()});function $(l,v){const{onSelect:f}=e;f&&ne(f,l,v)}function g(l){const{"onUpdate:show":v,onUpdateShow:f}=e;v&&ne(v,l),f&&ne(f,l),o.value=l}function k(){n.value=null,s.value=null,c.value=null}function E(){g(!1)}function Y(){j("left")}function U(){j("right")}function J(){j("up")}function Q(){j("down")}function ee(){const l=q();l!=null&&l.isLeaf&&($(l.key,l.rawNode),g(!1))}function q(){var l;const{value:v}=r,{value:f}=p;return!v||f===null?null:(l=v.getNode(f))!==null&&l!==void 0?l:null}function j(l){const{value:v}=p,{value:{getFirstAvailableNode:f}}=r;let u=null;if(v===null){const x=f();x!==null&&(u=x.key)}else{const x=q();if(x){let a;switch(l){case"down":a=x.getNext();break;case"up":a=x.getPrev();break;case"right":a=x.getChild();break;case"left":a=x.getParent();break}a&&(u=a.key)}}u!==null&&(n.value=null,s.value=u)}const M=b(()=>{const{size:l,inverted:v}=e,{common:{cubicBezierEaseInOut:f},self:u}=I.value,{padding:x,dividerColor:a,borderRadius:m,optionOpacityDisabled:K,[F("optionIconSuffixWidth",l)]:A,[F("optionSuffixWidth",l)]:oe,[F("optionIconPrefixWidth",l)]:B,[F("optionPrefixWidth",l)]:xe,[F("fontSize",l)]:Se,[F("optionHeight",l)]:Pe,[F("optionIconSize",l)]:Re}=u,h={"--n-bezier":f,"--n-font-size":Se,"--n-padding":x,"--n-border-radius":m,"--n-option-height":Pe,"--n-option-prefix-width":xe,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Re,"--n-divider-color":a,"--n-option-opacity-disabled":K};return v?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),_=P?pe("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),M,e):void 0;return{mergedClsPrefix:N,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{!e.animated||k()},doUpdateShow:g,cssVars:P?void 0:M,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(r,t,n,s,c)=>{var p;const{mergedClsPrefix:w,menuProps:y}=this;(p=this.onRender)===null||p===void 0||p.call(this);const S=(y==null?void 0:y(void 0,this.tmNodes.map(P=>P.rawNode)))||{},N={ref:Ee(t),class:[r,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:c};return d(we,ie(this.$attrs,N,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(He,Object.assign({},Le(this.$props,uo),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{mo as N};