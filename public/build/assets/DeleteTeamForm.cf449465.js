import{_ as p}from"./ActionSection.ea8f8e7e.js";import{J as u}from"./ConfirmationModal.ec407d80.js";import{J as g}from"./DangerButton.907994f8.js";import{J as h}from"./SecondaryButton.0ec6e63e.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";import{l as o,o as D,g as y,b as e,d as r,a as s,n as C,i as n}from"./app.d8e74fa3.js";import"./SectionCardTitle.4a036087.js";import"./Modal.36144344.js";/* empty css                                              */const J={props:["team"],components:{JetActionSection:p,JetConfirmationModal:u,JetDangerButton:g,JetSecondaryButton:h},data(){return{confirmingTeamDeletion:!1,deleting:!1,form:this.$inertia.form()}},methods:{confirmTeamDeletion(){this.confirmingTeamDeletion=!0},deleteTeam(){this.form.delete(route("teams.destroy",this.team),{errorBag:"deleteTeam"})}}},b=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),w={class:"mt-5"},x=n(" Delete Team "),B=n(" Delete Team "),k=n(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),v=n(" Cancel "),j=n(" Delete Team ");function A(S,a,M,N,t,i){const m=o("JetDangerButton"),l=o("jet-secondary-button"),c=o("jet-danger-button"),d=o("JetConfirmationModal"),_=o("JetActionSection");return D(),y(_,{title:"Delete Team",description:"Permanently delete this team."},{content:e(()=>[b,r("div",w,[s(m,{onClick:i.confirmTeamDeletion},{default:e(()=>[x]),_:1},8,["onClick"])]),s(d,{show:t.confirmingTeamDeletion,onClose:a[1]||(a[1]=f=>t.confirmingTeamDeletion=!1)},{title:e(()=>[B]),content:e(()=>[k]),footer:e(()=>[s(l,{onClick:a[0]||(a[0]=f=>t.confirmingTeamDeletion=!1)},{default:e(()=>[v]),_:1}),s(c,{class:C(["ml-2",{"opacity-25":t.form.processing}]),onClick:i.deleteTeam,disabled:t.form.processing},{default:e(()=>[j]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}const H=T(J,[["render",A]]);export{H as default};