(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(57),r=a.n(o),u=(a(63),a(14)),c=a(15),l=a(17),s=a(16),m=a(18),p=a(24),d=a.n(p),h=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).emailKeyUp=function(e){a.setState({email:e.target.value})},a.passwordKeyUp=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),d.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).catch(function(e){var t=e.code,a=e.message;alert(t+" : "+a)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Login:"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Email:",i.a.createElement("input",{type:"text",name:"email",onKeyUp:this.emailKeyUp})),i.a.createElement("label",null,"Password:",i.a.createElement("input",{type:"password",name:"password",onKeyUp:this.passwordKeyUp})),i.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),b=a(25),f=d.a.initializeApp({apiKey:"AIzaSyAWaDqjYK6iuFAKa50p_EvyQK_TzyEHRj0",authDomain:"jan19-side.firebaseapp.com",databaseURL:"https://jan19-side.firebaseio.com",projectId:"jan19-side",storageBucket:"jan19-side.appspot.com",messagingSenderId:"1079823639348"}),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).logout=a.logout.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(){f.auth().signOut()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Home"),i.a.createElement("button",{onClick:this.logout},"Logout"))}}]),t}(n.Component),v=(a(120),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={user:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},this.state.user?i.a.createElement(j,null):i.a.createElement(h,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a(122)},63:function(e,t,a){}},[[58,2,1]]]);
//# sourceMappingURL=main.097bba92.chunk.js.map