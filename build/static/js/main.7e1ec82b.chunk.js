(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},18:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),c=t.n(u),o=t(2),i=(t(18),function(e){var n=e.person,t=e.handleClick;return r.a.createElement("p",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"poista"))}),l=function(e){var n=e.handleChange;return r.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{onChange:n}))},m=function(e){var n=e.handleNameChange,t=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{onChange:n})," ",r.a.createElement("br",null),"numero: ",r.a.createElement("input",{onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=function(e){return e.persons},s=function(e){var n=e.message,t=e.statusColor,a={margin:"10px 0",backgroundColor:"".concat(t),borderRadius:"10px",padding:"10px",color:"white",fontSize:"18px"};return r.a.createElement("div",null,r.a.createElement("p",{style:a},n))},d=t(3),h=t.n(d),p="/api/persons",b=function(){return h.a.get(p).then(function(e){return e.data})},E=function(e){return h.a.post(p,e).then(function(e){return e.data})},g=function(e){h.a.delete("".concat(p,"/").concat(e))},v=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then(function(e){return e.data})},C=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(o.a)(c,2),h=d[0],p=d[1],C=Object(a.useState)(""),j=Object(o.a)(C,2),k=j[0],w=j[1],O=Object(a.useState)(""),S=Object(o.a)(O,2),x=S[0],y=S[1],N=Object(a.useState)(""),G=Object(o.a)(N,2),H=G[0],F=G[1],J=Object(a.useState)("white"),P=Object(o.a)(J,2),U=P[0],z=P[1];Object(a.useEffect)(function(){b().then(function(e){return u(e)})},[]);var B=t.filter(function(e){return e.name.toUpperCase().includes(x.toUpperCase())}),D=function(){return setTimeout(function(){F(null),z("white")},3e3)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(s,{message:H,statusColor:U}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:h,number:k};t.map(function(e){return e.name}).includes(h)?window.confirm("".concat(h," on jo luettelossa, korvataanko vanhan numero uudella?"))&&v(t.find(function(e){return e.name===h}).id,n).then(function(e){u(t.map(function(n){return n.name!==h?n:e})),F("Henkil\xf6n ".concat(h," puhelinnumero vaihdettu: ").concat(e.number)),z("lightGreen"),D()}).catch(function(e){F("Henkil\xf6 ".concat(h," oli jo poistettu")),z("red"),u(t.filter(function(e){return e.name!==h})),D()}):E(n).then(function(e){u(t.concat(e)),F("Henkil\xf6 ".concat(h," lis\xe4ttiin")),z("lightGreen"),D()})}},r.a.createElement(l,{handleChange:function(e){return y(e.target.value)}}),r.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),r.a.createElement(m,{handleNameChange:function(e){return p(e.target.value)},handleNumberChange:function(e){return w(e.target.value)}})),r.a.createElement("h3",null,"Numerot"),r.a.createElement(f,{persons:B.map(function(e){return r.a.createElement(i,{key:e.id,person:e,handleClick:(n=e.id,function(){var e=t.find(function(e){return e.id===n}).name;if(window.confirm("Poistetaanko ".concat(e))){g(n);var a=t.filter(function(e){return e.id!==n});u(a),F("".concat(e," poistettiin")),z("lightGreen"),D()}})});var n})}))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7e1ec82b.chunk.js.map