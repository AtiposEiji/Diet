import{C as r,D as p,E as a,P as i,R as m,V as s,X as d,Z as l,k as n}from"./chunk-OQA24X2C.js";var c=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-NAGWD6WU.js").then(o=>o.DashboardComponent)},{path:"season/:seasonId",loadComponent:()=>import("./chunk-COVMBT7T.js").then(o=>o.SeasonComponent)},{path:"season/:seasonId/day/:dayId",loadComponent:()=>import("./chunk-YKBNGR2S.js").then(o=>o.DayComponent)},{path:"calculator/:idFood",loadComponent:()=>import("./chunk-2RX34DLN.js").then(o=>o.CalculatorComponent)}];var f={providers:[m({eventCoalescing:!0}),l(c)]};var u=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n({type:t,selectors:[["app-root"]],standalone:!0,features:[i],decls:2,vars:0,consts:[[1,"main"]],template:function(e,h){e&1&&(r(0,"main",0),a(1,"router-outlet"),p())},dependencies:[d]});let o=t;return o})();s(u,f).catch(o=>console.error(o));