(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__r0Zp5",roundedInput:"ContactForm_roundedInput__2fVTS",btnForm:"ContactForm_btnForm__Eook3"}},15:function(t,e,n){t.exports={contactItem:"ContactElem_contactItem__2_Spf",btnItem:"ContactElem_btnItem__13hAt"}},19:function(t,e,n){t.exports={filterInput:"ContactFilter_filterInput__3upps",filterInputBox:"ContactFilter_filterInputBox__1T2QP"}},30:function(t,e,n){t.exports={container:"Container_container__21FG7"}},41:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(13),u=n.n(o),s=n(5),i=n(16),b=n(2),l=n(4),d=n(6),j=n(7),f=Object(b.b)("contactsFilter"),m=Object(b.c)("",Object(j.a)({},f,(function(t,e){return e.payload}))),O=Object(b.b)("contacts/fetchContactRequest"),h=Object(b.b)("contacts/fetchContactSuccess"),p=Object(b.b)("contacts/fetchContactError"),x=Object(b.b)("contacts/addContactRequest"),C=Object(b.b)("contacts/addContactSuccess"),v=Object(b.b)("contacts/addContactError"),_=Object(b.b)("contacts/contactDeleteRequest"),I=Object(b.b)("contacts/contactDeleteSuccess"),g=Object(b.b)("contacts/contactDeleteError"),F=Object(b.c)([],(c={},Object(j.a)(c,h,(function(t,e){return e.payload})),Object(j.a)(c,C,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(j.a)(c,I,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),y=Object(i.a)(Object(b.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),k=Object(l.b)({contacts:F,filter:m}),N=Object(b.a)({reducer:k,middleware:y,devTools:!1}),w=(n(41),n(30)),S=n.n(w),A=n(1),E=function(t){var e=t.children;return Object(A.jsx)("div",{className:S.a.container,children:e})},D=n(15),q=n.n(D),z=function(t){var e=t.name,n=t.number,c=t.onContactDelete;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("p",{children:[e,": ",n]}),Object(A.jsx)("button",{className:q.a.btnItem,type:"button",onClick:c,children:"Delete"})]})},B=n(9),R=n.n(B);R.a.defaults.baseURL="https://61ec322ef3011500174d20fc.mockapi.io";var T=function(t,e){return function(n){var c={name:t,number:e};return n(x()),R.a.post("/contacts",c).then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(v(t))}))}},Z=function(){return function(t){return t(O()),R.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}},J=function(t){return function(e){return e(_()),R.a.delete("/contacts/".concat(t)).then((function(){return e(I(t))})).catch((function(t){return e(g(t))}))}},L=function(t){return t.contacts},P=function(t){var e=t.contacts,n=t.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},M=function(){var t=Object(s.b)(),e=Object(s.c)(P);return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("ul",{children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(A.jsx)("li",{className:q.a.contactItem,children:Object(A.jsx)(z,{name:c,number:a,onContactDelete:function(){!function(e){t(J(e))}(n)}})},n)}))})})},G=n(20),Q=n(10),U=n.n(Q);var V=function(){var t=Object(a.useState)(""),e=Object(G.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(G.a)(r,2),u=o[0],i=o[1],b=Object(s.c)(L),l=Object(s.b)(),d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}};return Object(a.useEffect)((function(){l(Z())}),[]),Object(A.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),b.find((function(t){return t.name===n})))return alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"),b;l(T(n,u)),c(""),i("")},className:U.a.form,children:[Object(A.jsx)("label",{children:Object(A.jsx)("input",{className:U.a.roundedInput,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name:",required:!0,onChange:d})}),Object(A.jsx)("label",{children:Object(A.jsx)("input",{className:U.a.roundedInput,type:"tel",value:u,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Tel:",required:!0,onChange:d})}),Object(A.jsx)("button",{type:"submit",className:U.a.btnForm,children:"Add contact"})]})},$=n(19),H=n.n($),K=function(){var t=Object(s.b)();return Object(A.jsx)("label",{className:H.a.filterInputBox,children:Object(A.jsx)("input",{className:H.a.filterInput,placeholder:"Find contacts by name",type:"text",onChange:function(e){return n=e.target.value,t(f(n));var n}})})};var W=function(){return Object(A.jsxs)(E,{children:[Object(A.jsx)("h1",{children:"Phoneboock"}),Object(A.jsx)(V,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(K,{}),Object(A.jsx)(M,{})]})};u.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:N,children:Object(A.jsx)(W,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.6556cdd6.chunk.js.map