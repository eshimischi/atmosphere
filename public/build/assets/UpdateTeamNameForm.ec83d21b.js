import{J as c}from"./ActionMessage.1be9544e.js";import{J as p}from"./FormSection.8b3c92b9.js";import{u as d,o as u,g as f,N as l,b as o,a as s,f as a,i as n}from"./app.d8e74fa3.js";import{Z as _}from"./atmosphere-ui.87ba2c0a.js";import y from"./TeamForm.b6213a84.js";import{av as T,as as S}from"./naiveui.0ad5ca37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionCardTitle.4a036087.js";/* empty css                                              */import"./LogerInput.c4e88f46.js";const g=n(" Saved. "),N=n(" Save "),Z={__name:"UpdateTeamNameForm",props:["team","permissions"],setup(t){const m=t,e=d(T(m.team));function i(){e.transform(r=>(r.primary_currency_code=r.primary_currency_code.code||r.primary_currency_code,S(r))).put(route("teams.update",m.team),{errorBag:"updateTeamName",preserveScroll:!0})}return(r,h)=>(u(),f(p,{onSubmitted:i,title:"Team Name",description:"The team's name and owner information."},l({form:o(()=>[s(y,{class:"col-span-6 sm:col-span-4",currencies:[],timezones:[],"form-data":a(e)},null,8,["form-data"])]),_:2},[t.permissions.canUpdateTeam?{name:"actions",fn:o(()=>[s(c,{on:a(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[g]),_:1},8,["on"]),s(a(_),{type:"primary","is-loading":a(e).processing,disabled:a(e).processing},{default:o(()=>[N]),_:1},8,["is-loading","disabled"])])}:void 0]),1024))}};export{Z as default};