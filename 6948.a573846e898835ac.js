"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6948],{6948:(G,g,c)=>{c.r(g),c.d(g,{CreatorPageModule:()=>A});var p=c(177),u=c(4341),o=c(9465),d=c(9862),h=c(467),C=c(4578),e=c(3953),_=c(2068);function f(n,r){if(1&n&&(e.j41(0,"ion-select-option",15),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(),e.JRh(t.displayName)}}function F(n,r){if(1&n&&(e.j41(0,"li"),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.R7$(),e.JRh(t.account_number)}}function R(n,r){1&n&&(e.j41(0,"ion-card")(1,"h2",16),e.EFF(2,"Panel de Cuentas"),e.k0s(),e.j41(3,"h3",16),e.EFF(4,"No hay cuentas creada..."),e.k0s()())}function k(n,r){if(1&n&&(e.j41(0,"span",27),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.account_type)}}function P(n,r){if(1&n&&(e.j41(0,"span",28),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.account_type)}}function b(n,r){if(1&n&&(e.j41(0,"span",29),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.account_type)}}function v(n,r){if(1&n&&(e.j41(0,"span",30),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.account_type)}}function $(n,r){if(1&n&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.SpI("Type: ",t.account_type,"")}}function j(n,r){if(1&n&&(e.j41(0,"ion-card")(1,"h2",16),e.EFF(2,"Fecha"),e.k0s(),e.j41(3,"ion-item"),e.nrm(4,"ion-icon",17),e.j41(5,"h2"),e.EFF(6),e.k0s(),e.j41(7,"p"),e.EFF(8),e.k0s()(),e.j41(9,"ion-item"),e.nrm(10,"ion-icon",17),e.j41(11,"h2"),e.EFF(12),e.k0s(),e.j41(13,"p")(14,"span",18),e.EFF(15),e.k0s()()(),e.j41(16,"ion-item")(17,"div",19)(18,"ion-label"),e.EFF(19,"Action"),e.k0s(),e.nrm(20,"ion-toggle",20),e.k0s()(),e.j41(21,"ion-item")(22,"span",21),e.DNE(23,k,2,1,"span",22)(24,P,2,1,"span",23)(25,b,2,1,"span",24)(26,v,2,1,"span",25)(27,$,2,1,"span",26),e.k0s()()()),2&n){const t=r.$implicit;e.R7$(6),e.JRh(t.account_number),e.R7$(2),e.SpI("Cuenta #",t.account_number,""),e.R7$(4),e.JRh(t.balance),e.R7$(3),e.JRh(t.account_type),e.R7$(7),e.Y8G("ngSwitch",t.account_type),e.R7$(),e.Y8G("ngSwitchCase","saving"),e.R7$(),e.Y8G("ngSwitchCase","CERRADO"),e.R7$(),e.Y8G("ngSwitchCase","RE-ABIERTO"),e.R7$(),e.Y8G("ngSwitchCase","QR-UPDATED")}}const E=[{path:"",component:(()=>{var n;class r{constructor(a,i){this.creatorService=a,this.loadingCtrl=i,this.nextComponent=C.r,this.buttonsDisabled=!0,this.selectedOrg="",this.applicationName="",this.organizationList=[],this.loadOrganizationList()}ngOnInit(){}get organizations(){return this.organizationList}get accounts(){return this.creatorService.accountList}loadOrganizationList(){var a=this;return(0,h.A)(function*(){var i;a.organizationListLoader=yield a.loadingCtrl.create({message:"Loading Organizations"}),null===(i=a.organizationListLoader)||void 0===i||i.present(),a.creatorService.loadOrganizations().then(l=>{var s;null===(s=a.organizationListLoader)||void 0===s||s.dismiss(),a.organizationList=l.items.map(m=>({id:m.id,displayName:m.name}))})})()}createApplication(){this.validApplicationParams()?(console.log("Valid Parameters !!"),console.log(this.selectedOrg)):alert("You must to specify all the parameters")}validApplicationParams(){let a=!0;return(""==this.selectedOrg||""==this.applicationName)&&(a=!1),a}loadAccounts(){this.creatorService.loadAccounts()}orgNameOnChange(a){this.validateChange()}appNameOnChange(a){this.validateChange()}validateChange(){this.buttonsDisabled=!this.validApplicationParams()}}return(n=r).\u0275fac=function(a){return new(a||n)(e.rXU(_.O),e.rXU(o.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-creator"]],decls:38,vars:10,consts:[[3,"translucent"],["color","secondary"],["slot","start"],[3,"fullscreen"],["color","green","router-direction","forward",3,"component"],["color","primary"],["interface","popover","role","combobox","placeholder","Choose ORG Name",3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["label","Application Name:","placeholder","app-name-format",3,"ngModelChange","keyup","ngModel"],["type","button","expand","block","color","tertiary",3,"click","disabled"],["name","logo-apple","slot","start"],["type","button","expand","block","color","tertiary",3,"click"],[4,"ngFor","ngForOf"],["padding",""],[4,"ngIf"],[3,"value"],["padding","","text-center",""],["name","home","item-start","","large",""],["item-start",""],["ion-button","","icon-start","","clear","","item-end",""],["checked","true","disabled","false"],[3,"ngSwitch"],["class","open-draw",4,"ngSwitchCase"],["class","close-draw",4,"ngSwitchCase"],["class","reopen-draw",4,"ngSwitchCase"],["class","qrudp-draw",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"open-draw"],[1,"close-draw"],[1,"reopen-draw"],[1,"qrudp-draw"]],template:function(a,i){1&a&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button"),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Landing"),e.k0s()()(),e.j41(6,"ion-content",3)(7,"h1"),e.EFF(8,"Landing"),e.k0s(),e.j41(9,"ion-nav-link",4)(10,"ion-button"),e.EFF(11,"Go to Page Home"),e.k0s()(),e.j41(12,"ion-text",5)(13,"h1"),e.EFF(14,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0App Template"),e.k0s()(),e.nrm(15,"br")(16,"br"),e.j41(17,"ion-item")(18,"ion-label"),e.EFF(19,"Organization:"),e.k0s(),e.j41(20,"ion-select",6),e.mxI("ngModelChange",function(s){return e.DH7(i.selectedOrg,s)||(i.selectedOrg=s),s}),e.bIt("ionChange",function(s){return i.orgNameOnChange(s)}),e.DNE(21,f,2,2,"ion-select-option",7),e.k0s()(),e.nrm(22,"br"),e.j41(23,"ion-item")(24,"ion-input",8),e.mxI("ngModelChange",function(s){return e.DH7(i.applicationName,s)||(i.applicationName=s),s}),e.bIt("keyup",function(s){return i.appNameOnChange(s)}),e.k0s()(),e.nrm(25,"br"),e.j41(26,"ion-button",9),e.bIt("click",function(){return i.createApplication()}),e.nrm(27,"ion-icon",10),e.EFF(28," Create Application "),e.k0s(),e.nrm(29,"br"),e.j41(30,"ion-button",11),e.bIt("click",function(){return i.loadAccounts()}),e.nrm(31,"ion-icon",10),e.EFF(32," View Accounts "),e.k0s(),e.j41(33,"ol"),e.DNE(34,F,2,1,"li",12),e.k0s()(),e.j41(35,"ion-content",13),e.DNE(36,R,5,0,"ion-card",14)(37,j,28,9,"ion-card",12),e.k0s()),2&a&&(e.Y8G("translucent",!0),e.R7$(6),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("component",i.nextComponent),e.R7$(11),e.R50("ngModel",i.selectedOrg),e.R7$(),e.Y8G("ngForOf",i.organizations),e.R7$(3),e.R50("ngModel",i.applicationName),e.R7$(2),e.Y8G("disabled",i.buttonsDisabled),e.R7$(8),e.Y8G("ngForOf",i.accounts),e.R7$(2),e.Y8G("ngIf",0==i.accounts.length),e.R7$(),e.Y8G("ngForOf",i.accounts))},dependencies:[p.Sq,p.bT,p.ux,p.e1,p.fG,u.BC,u.vS,o.Jm,o.QW,o.b_,o.W9,o.eU,o.iq,o.$w,o.uz,o.he,o.mN,o.Nm,o.Ip,o.IO,o.BC,o.BY,o.ai,o.hB,o.Je,o.Gw,o.el]}),r})()}];let y=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[d.iI.forChild(E),d.iI]}),r})(),A=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[p.MD,u.YN,o.bv,y]}),r})()}}]);