(this["webpackJsonpcontext-app"]=this["webpackJsonpcontext-app"]||[]).push([[0],{28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),s=a.n(c),r=a(17),i=Object(n.createContext)(null),l=a(1),b=function(){var e=Object(n.useContext)(i),t=e.Userstate,a=e.setUserstate;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"AboutScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(l.jsx)("button",{className:"btn btn-warning",onClick:function(){a({})},children:"Logout"})]})},j=function(){var e=Object(n.useContext)(i).setUserstate;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"LoginScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){e({id:1,nombre:"Jonathan",apellido:"Castillo",email:"JCastillo@gmail.com"})},children:"Login"})]})},o=function(){var e=Object(n.useContext)(i).Userstate;return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"HomeScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("pre",{children:JSON.stringify(e,null,3)})]})},x=a(7),d=a(2),O=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(x.b,{className:"navbar-brand",to:"/",children:"useContext"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(x.b,{exact:!0,activeClassName:"Active",className:"nav-link active","aria-current":"page",to:"/",children:"Home"}),Object(l.jsx)(x.b,{exact:!0,activeClassName:"Active",className:"nav-link",to:"/about",children:"About"}),Object(l.jsx)(x.b,{exact:!0,activeClassName:"Active",className:"nav-link",to:"/login",children:"Login"})]})})]})})},u=function(){return Object(l.jsxs)(x.a,{children:[Object(l.jsx)(O,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{exact:!0,path:"/",component:o}),Object(l.jsx)(d.b,{exact:!0,path:"/about",component:b}),Object(l.jsx)(d.b,{exact:!0,path:"/login",component:j}),Object(l.jsx)(d.a,{to:"/"})]})})]})},v=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(l.jsx)("div",{children:Object(l.jsx)(i.Provider,{value:{Userstate:a,setUserstate:c},children:Object(l.jsx)(u,{})})})},h=document.querySelector("#root");s.a.render(Object(l.jsx)(v,{}),h)}},[[28,1,2]]]);
//# sourceMappingURL=main.caf67710.chunk.js.map