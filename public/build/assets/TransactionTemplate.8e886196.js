import{o as s,c as n,d as l,C as h,F as b,h as g,n as i,t as u,k as f,e as w,K as _,f as m,g as $,r as C,s as D,q as T,a as k,b as v,m as O}from"./app.ed3e752b.js";import{f as x}from"./formatMoney.228f3112.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";import{f as B}from"./index.58d4bda5.js";import{p as A}from"./index.48295fb6.js";import{N as E}from"./NumberHider.72930275.js";const M={name:"IcSharpSyncAlt"},N={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1em",height:"1em",viewBox:"0 0 24 24"},j=l("path",{fill:"currentColor",d:"m18 12l4-4l-4-4v3H3v2h15zM6 12l-4 4l4 4v-3h15v-2H6z"},null,-1),I=[j];function z(e,r,o,d,a,c){return s(),n("svg",N,I)}const H=S(M,[["render",z]]),P=[{label:"Date",name:"date",width:200,render(e){return B(A(e.date),"dd MMM, yyyy")}},{label:"Payee",name:"payee",width:400,class:"w-full",render(e){var r;return((r=e.payee)==null?void 0:r.name)||h("div",{class:"flex justify-between items-center text-body-1"},[h("div",`Transfer: ${e.category.name}`),h(H,{class:"fa fa-right-left"})])}},{label:"Category",name:"transactionCategory",render(e){var r;return(r=e.transactionCategory)==null?void 0:r.name}},{label:"Description",name:"description",width:300},{label:"Amount",name:"total",render(e){return console.log(e),x(e.total,e.currency_code)}},{label:"",name:"actions",width:300,type:"custom"}],W={props:{col:{type:Object},data:{type:Object}},setup(e,{slots:r}){return()=>{var o;return h("div",(o=e.col)==null?void 0:o.render(e.data))}}},R=["data"],V={class:"px-2 py-4 font-bold text-left text-body border-b border-gray-200"},q={key:0},F={key:0},L=["colspan"],K={key:3},G={key:1},J={key:0},Q=["colspan"],U=["colspan"],X={class:"py-5 text-center text-base-200 w-full"},Y=["colspan"],Z={__name:"CustomTable",props:{cols:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},tableData:{type:Array},config:{type:Object,default(){return{}}},showPrepend:{type:Boolean,default:!1},showAppend:{type:Boolean,default:!1},emptyText:{type:String,default:"No data found"},hideEmptyText:{type:Boolean,default:!1}},setup(e){const r=({row:o})=>o.headerClass;return(o,d)=>(s(),n("table",{class:"table-fixed",style:{width:"100%"},data:e.tableData,"header-cell-class-name":r,onSortChange:d[0]||(d[0]=a=>o.$emit("sort",a)),onRowClick:d[1]||(d[1]=a=>o.$emit("row-click",a))},[l("thead",null,[l("tr",V,[(s(!0),n(b,null,g(e.cols,a=>(s(),n("th",{key:a.name,class:i(["px-2 py-4",[a.headerClass]])},u(a.label),3))),128))])]),e.tableData.length?(s(),n("tbody",q,[e.showPrepend?(s(),n("tr",F,[l("td",{colspan:e.cols.length},[f(o.$slots,"prepend")],8,L)])):w("",!0),(s(!0),n(b,null,g(e.tableData,(a,c)=>(s(),n("tr",{key:`data-row-${c}`,class:i(["text-body",{"bg-base-lvl-2":c%2}])},[(s(!0),n(b,null,g(e.cols,t=>(s(),n("td",{key:t.name,class:"h-full align-baseline",style:_({width:t.width,maxWidth:t.maxWidth})},[l("div",{class:i(["flex flex-col w-full h-full px-2 py-1 text-left",t.class])},[f(o.$slots,t.name,{scope:{row:a,value:a[t.name],col:t,field:t.name,$index:c}},()=>[t.type=="calc"?(s(),n("div",{key:0,class:i(t.class)},u(t.formula(a)),3)):t.type=="money"?(s(),n("div",{key:1,class:i(t.class)},u(m(x)(a[t.name])),3)):t.render?(s(),$(m(W),{key:2,class:i(t.class),col:t,data:a},null,8,["class","col","data"])):(s(),n("div",K,u(a[t.name]),1))])],2)],4))),128))],2))),128))])):(s(),n("tbody",G,[e.showAppend?(s(),n("tr",J,[l("td",{colspan:e.cols.length},[f(o.$slots,"append")],8,Q)])):w("",!0),l("tr",null,[l("td",{colspan:e.cols.length,class:"flex flex-col w-full"},[e.hideEmptyText?w("",!0):f(o.$slots,"empty",{key:0},()=>[l("div",X,u(e.emptyText),1)])],8,U)])])),l("tfoot",null,[l("tr",null,[l("td",{colspan:e.cols.length},[f(o.$slots,"append")],8,Y)])])],40,R))}},ee={class:"pb-20 mt-5"},te=l("button",{class:"hover:bg-base-lvl-3 px-2"},[l("i",{class:"fa fa-ellipsis-v"})],-1),de={__name:"TransactionTemplate",props:{transactions:{type:Array,default:()=>[]},serverSearchOptions:{type:Object,default:()=>({})},title:{type:String,default:"s"}},setup(e){const r=C(!1),o=D({recurrence:!1,automatic:!1,transactionData:null}),d=t=>{o.transactionData=t,r.value=!0},a=T(()=>[{name:"edit",label:"Edit"},{name:"removed",label:"Remove"}].filter(y=>!y.hide)),c=t=>{emit(t)};return(t,y)=>(s(),n("div",ee,[k(Z,{cols:m(P),"show-prepend":!0,"table-data":e.transactions,onEdit:d},{total:v(({scope:{row:p}})=>[l("div",{class:i(["font-bold",{"text-red-400":p.direction=="WITHDRAW","text-green-500":p.direction=="DEPOSIT"}])},u(m(x)(p.total,p.currency_code)),3)]),actions:v(({scope:{row:p}})=>[l("div",null,[k(m(E),{trigger:"click","key-field":"name",options:m(a),"on-select":c,onClick:y[0]||(y[0]=O(()=>{},["stop"]))},{default:v(()=>[te]),_:1},8,["options"])])]),_:1},8,["cols","table-data"])]))}};export{de as _};