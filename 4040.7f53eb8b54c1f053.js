"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4040],{4040:(P,c,o)=>{o.r(c),o.d(c,{AppCreatorPageModule:()=>m});var u=o(177),g=o(4341),a=o(9465),s=o(9862),e=o(3953),d=o(8882),C=o(2068);const v=[{path:"",component:(()=>{var r;class n{constructor(t,l,p,h){this.orgService=t,this.creatorService=l,this.loadingCtrl=p,this.activatedRoute=h,this.currentOrg=null}ngOnInit(){}ionViewWillEnter(){this.activatedRoute.paramMap.subscribe(t=>{const l=t.get("id");null===l?console.log("Receiving null param:"):this.orgService.getById(l).then(p=>{this.currentOrg=p})})}}return(r=n).\u0275fac=function(t){return new(t||r)(e.rXU(d.P),e.rXU(C.O),e.rXU(a.Xi),e.rXU(s.nX))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-app-creator"]],decls:11,vars:3,consts:[[3,"translucent"],["color","secondary"],["slot","start"],["defaultHref","/org"],[3,"fullscreen"],["collapse","condense"],["size","large"]],template:function(t,l){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content",4)(7,"ion-header",5)(8,"ion-toolbar")(9,"ion-title",6),e.EFF(10,"app-creator"),e.k0s()()()()),2&t&&(e.Y8G("translucent",!0),e.R7$(5),e.SpI("Org: ",null==l.currentOrg?null:l.currentOrg.name,""),e.R7$(),e.Y8G("fullscreen",!0))},dependencies:[a.QW,a.W9,a.eU,a.BC,a.ai,a.el]}),n})()}];let f=(()=>{var r;class n{}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[s.iI.forChild(v),s.iI]}),n})(),m=(()=>{var r;class n{}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[u.MD,g.YN,a.bv,f]}),n})()}}]);