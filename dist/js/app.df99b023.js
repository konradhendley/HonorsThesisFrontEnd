(function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],b=0,O=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&O.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(O.length)O.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var i=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d71":function(t,e,n){"use strict";n("6e7b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container-fluid"},a={class:"row justify-content-center"},o={class:"col-md-10 col-lg-7"};function l(t,e,n,l,s,u){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",c,[Object(r["g"])("div",a,[Object(r["g"])("div",o,[Object(r["i"])(b)])])])],64)}var s=function(t){return Object(r["u"])("data-v-4ccc7d66"),t=t(),Object(r["s"])(),t},u={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Shoes.com"),O=s((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),j={class:"collapse navbar-collapse",id:"navbarNav"},d={class:"navbar-nav ms-auto"},p={class:"nav-item"},g=Object(r["h"])("Shoes"),f={class:"nav-item"},h=Object(r["h"])("My Account"),m={class:"nav-item"},v=s((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={class:"nav-item"},w=s((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"},"Signup",-1)})),S=s((function(){return Object(r["g"])("li",{class:"nav-item"},[Object(r["g"])("button",{class:"btn btn-warning"},"Logout")],-1)}));function k(t,e){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",u,[Object(r["g"])("div",i,[Object(r["i"])(n,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),O,Object(r["g"])("div",j,[Object(r["g"])("ul",d,[Object(r["g"])("li",p,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"shoes"},{default:Object(r["E"])((function(){return[g]})),_:1})]),Object(r["g"])("li",f,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"account"},{default:Object(r["E"])((function(){return[h]})),_:1})]),Object(r["g"])("li",m,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"login"},{default:Object(r["E"])((function(){return[v]})),_:1})]),Object(r["g"])("li",y,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"signup"},{default:Object(r["E"])((function(){return[w]})),_:1})]),S])])])])}n("1d71");var E=n("6b0d"),A=n.n(E);const x={},N=A()(x,[["render",k],["__scopeId","data-v-4ccc7d66"]]);var _=N,U={name:"App",components:{"my-header":_},created:function(){this.$store.dispatch("getShoes")}};n("b1c6");const P=A()(U,[["render",l]]);var $=P,F=n("bc3a"),I=n.n(F),C=n("6c02"),M=Object(r["g"])("h1",null,"Home",-1),q=[M];function T(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,q)}var D={};const L=A()(D,[["render",T]]);var V=L,B=Object(r["g"])("h1",null,"Login",-1),R={key:0,class:"alert alert-success"},z={class:"mb-3"},G=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),J={class:"mb-3"},K=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),H=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[B,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",R,"Thanks for signing up, please log in now.")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",z,[G,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.email=t})},null,512),[[r["C"],a.email]])]),Object(r["g"])("div",J,[K,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),H,a.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," invalid credentials ")):Object(r["e"])("",!0),a.loginError?(Object(r["r"])(),Object(r["f"])("p",W," could not log you in, please try again later")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};I.a.post("/member/login",e).then((function(e){console.log("the response",e),t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){console.log("error in memebr/login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=A()(Y,[["render",X]]);var tt=Z,et=(n("b0c0"),{class:"card"}),nt={class:"card-body"},rt={class:"text-primary"},ct=Object(r["g"])("br",null,null,-1),at=Object(r["h"])("Type: "),ot=Object(r["g"])("br",null,null,-1),lt=Object(r["h"])("Size: "),st=Object(r["g"])("br",null,null,-1),ut=Object(r["h"])("Average price:"),it=Object(r["g"])("br",null,null,-1),bt=Object(r["g"])("br",null,null,-1),Ot=Object(r["g"])("button",{class:"btn btn-success"},"Add a Rating",-1),jt=Object(r["g"])("button",{class:"btn btn-outline-success"},"Sign in to Add a Rating",-1);function dt(t,e,n,c,a,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",et,[Object(r["g"])("div",nt,[Object(r["g"])("h2",rt,Object(r["A"])(o.shoe.name),1),ct,Object(r["g"])("p",null,[at,ot,Object(r["g"])("strong",null,Object(r["A"])(o.shoe.type),1)]),Object(r["g"])("p",null,[lt,st,Object(r["g"])("strong",null,Object(r["A"])(o.shoe.size),1)]),Object(r["g"])("p",null,[ut,it,Object(r["g"])("strong",null,Object(r["A"])(o.formattedPrice),1)])])]),bt,o.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/shoes/".concat(this.$route.params.pk,"/rating")},{default:Object(r["E"])((function(){return[Ot]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[jt]})),_:1}))])}n("7db0"),n("d3b7");var pt={computed:{shoe:function(){var t=this,e=this.$store.state.shoes,n=e.find((function(e){return e.shoeID==t.$route.params.pk}));return n},formattedPrice:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.shoe.cost)},auth:function(){return this.$store.state.token}}};const gt=A()(pt,[["render",dt]]);var ft=gt,ht=Object(r["g"])("h1",null,"Shoes",-1),mt=Object(r["g"])("hr",null,null,-1),vt={class:"table"},yt=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Shoe"),Object(r["g"])("th",null,"Style"),Object(r["g"])("th",null,"Cost"),Object(r["g"])("th")],-1),wt=Object(r["g"])("button",{class:"btn btn-primary"}," Details",-1),St=Object(r["g"])("tr",null,null,-1),kt=Object(r["g"])("tr",null,null,-1);function Et(t,e,n,c,a,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ht,mt,Object(r["g"])("table",vt,[yt,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.theShoes,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.shoeID},[Object(r["g"])("th",null,Object(r["A"])(t.name),1),Object(r["g"])("th",null,Object(r["A"])(t.type),1),Object(r["g"])("th",null,"$"+Object(r["A"])(t.cost),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/shoes/".concat(t.shoeID)},{default:Object(r["E"])((function(){return[wt]})),_:2},1032,["to"])])])})),128)),St,kt])])])}var At={computed:{theShoes:function(){return this.$store.state.shoes}}};const xt=A()(At,[["render",Et]]);var Nt=xt,_t=Object(r["g"])("h1",null,"Not Found",-1),Ut=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),Pt=[_t,Ut];function $t(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,Pt)}var Ft={};const It=A()(Ft,[["render",$t]]);var Ct=It,Mt=Object(r["g"])("h1",null,"Create a Review",-1),qt=[Mt];function Tt(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,qt)}var Dt={};const Lt=A()(Dt,[["render",Tt]]);var Vt=Lt,Bt=Object(r["g"])("h1",null,"Signup",-1),Rt={class:"mb-3"},zt=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Gt={class:"mb-3"},Jt=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Kt={class:"mb-3"},Ht=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),Qt={key:0,class:"text-danger"},Wt={class:"mb-3"},Xt=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Yt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Zt={id:"error-signup",class:"text-danger"};function te(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[Bt,Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",Rt,[zt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.firstName=t})},null,512),[[r["C"],a.firstName]])]),Object(r["g"])("div",Gt,[Jt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.lastName=t})},null,512),[[r["C"],a.lastName]])]),Object(r["g"])("div",Kt,[Ht,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.email=t})},null,512),[[r["C"],a.email]]),a.dupEmail?(Object(r["r"])(),Object(r["f"])("small",Qt,"please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",Wt,[Xt,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),Yt,Object(r["g"])("p",Zt,Object(r["A"])(a.errorMessage),1)],32)])}var ee={data:function(){return{firstName:"",lastName:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password};I.a.post("/member",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="cannot sign you up, please try again later"}))}}};const ne=A()(ee,[["render",te]]);var re=ne,ce=Object(r["g"])("h1",null,"Account",-1),ae=Object(r["g"])("hr",null,null,-1),oe={key:0,class:"text-danger"},le={key:1,class:"table"},se=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Review"),Object(r["g"])("th",null,"Score"),Object(r["g"])("th",null,"Shoe")],-1),ue=Object(r["g"])("tr",null,null,-1),ie=Object(r["g"])("tr",null,null,-1);function be(t,e,n,c,a,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ce,ae,Object(r["g"])("h3",null,Object(r["A"])(o.firstName)+"'s ratings",1),a.accountError?(Object(r["r"])(),Object(r["f"])("p",oe,"Cannot get your account information, please try again later.")):Object(r["e"])("",!0),a.ratingsByUser?(Object(r["r"])(),Object(r["f"])("table",le,[se,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.ratingsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.postID},[Object(r["g"])("th",null,Object(r["A"])(t.review),1),Object(r["g"])("th",null,Object(r["A"])(t.score),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/shoes/".concat(t.shoeFK)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(t.shoeFK),1)]})),_:2},1032,["to"])])])})),128)),ue,ie])])):Object(r["e"])("",!0)])}var Oe={data:function(){return{ratingsByUser:null,accountError:!1}},computed:{firstName:function(){return this.$store.state.user.firstName}},created:function(){var t=this;I.a.get("/ratings/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("here is the response",e),t.ratingsByUser=e.data})).catch((function(){t.accountError=!0}))}};const je=A()(Oe,[["render",be]]);var de=je,pe=Object(C["a"])({history:Object(C["b"])(),routes:[{path:"/",component:V},{path:"/account",component:de},{path:"/login",component:tt},{path:"/shoes",component:Nt},{path:"/shoes/:pk",component:ft,children:[{path:"rating",component:Vt}]},{path:"/signup",component:re},{path:"/invalidroute(.*)",component:Ct}]}),ge=pe,fe=n("5502"),he=Object(fe["a"])({state:{token:null,user:null,shoes:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeShoes:function(t,e){t.shoes=e}},actions:{getShoes:function(t){var e=t.commit;I.a.get("/shoes").then((function(t){console.log("response in /movies",t),e("storeShoes",t.data)}))}}});I.a.defaults.baseURL="https://cis410-fa21-hender.azurewebsites.net";var me=Object(r["c"])($);me.use(ge),me.use(he),me.mount("#app")},"6e7b":function(t,e,n){},b1c6:function(t,e,n){"use strict";n("c55a")},c55a:function(t,e,n){}});
//# sourceMappingURL=app.df99b023.js.map