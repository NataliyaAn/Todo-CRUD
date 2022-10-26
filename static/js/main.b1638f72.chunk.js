(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(1),c=n.n(a),o=(n(19),n(20),n(21),n(2)),i=n.n(o),s=n(5),u=n(6),l=n(3),d=n(4),f=n.n(d),p="https://mate.academy/students-api";function b(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:t};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(p+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var h,m=function(e){return j(e)},O=function(e,t){return j(e,"POST",t)},v=function(e,t){return j(e,"PATCH",t)},x=function(e){return j(e,"DELETE")},g=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users?email=".concat(t));case 2:return n=e.sent,e.abrupt("return",n[0]||null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.name,e.abrupt("return",O("/users",{email:n,name:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(0),N=function(e){var t=e.onLogin,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),p=d[0],b=d[1],j=Object(a.useState)(!1),h=Object(l.a)(j,2),m=h[0],O=h[1],v=Object(a.useState)(!1),x=Object(l.a)(v,2),N=x[0],T=x[1],E=Object(a.useState)(""),S=Object(l.a)(E,2),w=S[0],C=S[1],_=function(e){localStorage.setItem("user",JSON.stringify(e)),t(e)};Object(a.useEffect)((function(){var e=localStorage.getItem("user");if(e)try{var n=JSON.parse(e);t(n)}catch(r){}}),[]);var F=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c);case 2:(t=e.sent)?_(t):O(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(""),T(!0),e.prev=3,!m){e.next=9;break}return e.next=7,y({name:p,email:c}).then(_);case 7:e.next=11;break;case 9:return e.next=11,F();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),C("Something went wrtong");case 16:return e.prev=16,T(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("form",{onSubmit:L,className:"box mt-5",children:[Object(k.jsx)("h1",{className:"title is-3",children:m?"You need to register":"Log in to open todos"}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"user-email",children:"Email"}),Object(k.jsxs)("div",{className:f()("control has-icons-left",{"is-loading":N}),children:[Object(k.jsx)("input",{type:"email",id:"user-email",className:f()("input",{"is-danger":!m&&w}),placeholder:"Enter your email",disabled:N||m,value:c,required:!0,onChange:function(e){return o(e.target.value)}}),Object(k.jsx)("span",{className:"icon is-small is-left",children:Object(k.jsx)("i",{className:"fas fa-envelope"})})]}),!m&&w&&Object(k.jsx)("p",{className:"help is-danger",children:w})]}),m&&Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"user-name",children:"Your Name"}),Object(k.jsxs)("div",{className:f()("control has-icons-left",{"is-loading":N}),children:[Object(k.jsx)("input",{type:"text",id:"user-name",className:f()("input",{"is-danger":m&&w}),placeholder:"Enter your name",required:!0,minLength:4,disabled:N,value:p,onChange:function(e){return b(e.target.value)}}),Object(k.jsx)("span",{className:"icon is-small is-left",children:Object(k.jsx)("i",{className:"fas fa-user"})})]}),m&&w&&Object(k.jsx)("p",{className:"help is-danger",children:w})]}),Object(k.jsx)("div",{className:"field",children:Object(k.jsx)("button",{type:"submit",className:f()("button is-primary",{"is-loading":N}),children:m?"Register":"Login"})})]})},T=c.a.createContext(null),E=function(e){var t=e.children,n=Object(a.useState)(null),r=Object(l.a)(n,2),c=r[0],o=r[1];return c?Object(k.jsx)(T.Provider,{value:c,children:t}):Object(k.jsx)(N,{onLogin:o})},S=function(e){var t=e.isError,n=e.setError,r=e.messageError;return t&&setTimeout((function(){n(!1)}),3e3),Object(k.jsxs)("div",{"data-cy":"ErrorNotification",className:f()("notification","is-danger","is-light","has-text-weight-normal",{hidden:!t}),children:[Object(k.jsx)("button",{"data-cy":"HideErrorButton","aria-label":"close message error",type:"button",className:"delete",onClick:function(){return n(!1)}}),r]})};!function(e){e.all="all",e.completed="completed",e.active="active"}(h||(h={}));var w,C,_=function(e){var t=e.sortFilter,n=e.handleChangeSortFilter;return Object(k.jsxs)("nav",{className:"filter","data-cy":"Filter",children:[Object(k.jsx)("a",{"data-cy":"FilterLinkAll",href:"#/",className:f()("filter__link",{selected:t===h.all}),onClick:function(){return n(h.all)},children:"All"}),Object(k.jsx)("a",{"data-cy":"FilterLinkActive",href:"#/active",className:f()("filter__link",{selected:t===h.active}),onClick:function(){return n(h.active)},children:"Active"}),Object(k.jsx)("a",{"data-cy":"FilterLinkCompleted",href:"#/completed",className:f()("filter__link",{selected:t===h.completed}),onClick:function(){return n(h.completed)},children:"Completed"})]})},F=function(e){var t=e.todo,n=e.handleUpdate,r=e.wantChangeTitle,c=e.setWantChangeTitle,o=e.changeTodoTitle,i=e.setChangeTitle,s=e.handleKeyChangeTitle,u=e.handleRemoveTodo,l=e.activeTodoId,d=Object(a.useRef)(null);Object(a.useEffect)((function(){d.current&&d.current.focus()}),[r]);return Object(k.jsxs)("div",{"data-cy":"Todo",className:f()("todo",{completed:t.completed}),children:[Object(k.jsx)("label",{className:"todo__status-label",htmlFor:"todo-status",children:Object(k.jsx)("input",{id:"todo-status","data-cy":"TodoStatus",type:"checkbox",className:"todo__status",checked:t.completed,onChange:function(){return n(t)}})}),r===t.id?Object(k.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(k.jsx)("input",{"data-cy":"ChangeTodoField",type:"text",ref:d,className:"todoapp__new-todo todoapp__new-todo--change",placeholder:"Empty title will be removed",value:o,onChange:function(){var e;return i((null===(e=d.current)||void 0===e?void 0:e.value)||"")},onBlur:function(){c(-1)},onKeyDown:function(e){return s(e,t)}})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{"data-cy":"TodoTitle",className:"todo__title",onDoubleClick:function(){c(t.id),i(t.title)},children:t.title}),Object(k.jsx)("button",{type:"button",className:"todo__remove","data-cy":"TodoDeleteButton",onClick:function(){return u(t.id)},children:"\xd7"})]}),Object(k.jsxs)("div",{"data-cy":"TodoLoader",className:f()("modal","overlay",{"is-active":l.includes(t.id)}),children:[Object(k.jsx)("div",{className:" modal-background has-background-white-ter"}),Object(k.jsx)("div",{className:"loader"})]})]},t.id)},L=function(e){var t=e.handleSubmit,n=e.newTodoTitle,r=e.setTitle,c=Object(a.useRef)(null);return Object(k.jsx)("form",{onSubmit:t,children:Object(k.jsx)("input",{"data-cy":"NewTodoField",type:"text",ref:c,className:"todoapp__new-todo",placeholder:"What needs to be done?",value:n,onChange:function(){var e;return r((null===(e=c.current)||void 0===e?void 0:e.value)||"")}})})},U=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.title,a=t.completed,e.abrupt("return",O("/todos",{userId:n,title:r,completed:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.id;return x("/todos/".concat(t))},W=function(e,t){return v("/todos/".concat(e),t)};!function(e){e.Enter="Enter",e.Escape="Escape"}(w||(w={})),function(e){e.ErrorServerOnStart="Todos from server were not gotten",e.ErrorEmptyTitle="Title can't be empty",e.ErrorServerWhileAdd="Unable to add a todo",e.ErrorServerWhileDelete="Unable to delete a todo",e.ErrorServerWhileUpdate="Unable to change a todo"}(C||(C={}));var D=function(){var e=Object(a.useContext)(T),t=Object(a.useRef)(null),n=Object(a.useState)([]),r=Object(l.a)(n,2),c=r[0],o=r[1],d=Object(a.useState)(h.all),p=Object(l.a)(d,2),b=p[0],j=p[1],O=Object(a.useState)(Object(u.a)(c)),v=Object(l.a)(O,2),x=v[0],g=v[1],y=Object(a.useState)(Object(u.a)(c).filter((function(e){return e.completed}))),N=Object(l.a)(y,2),E=N[0],D=N[1],A=Object(a.useState)(-1),R=Object(l.a)(A,2),B=R[0],J=R[1],P=Object(a.useState)(!1),K=Object(l.a)(P,2),q=K[0],H=K[1],M=Object(a.useState)(""),Y=Object(l.a)(M,2),G=Y[0],z=Y[1],Q=Object(a.useState)(""),V=Object(l.a)(Q,2),X=V[0],Z=V[1],$=Object(a.useState)(""),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],re=Object(a.useState)([0]),ae=Object(l.a)(re,2),ce=ae[0],oe=ae[1];Object(a.useEffect)((function(){var n;t.current&&t.current.focus(),e&&(n=e.id,m("/todos?userId=".concat(n))).then((function(e){o(e)})).catch((function(){H(!0),z(C.ErrorServerOnStart)}))}),[]),Object(a.useMemo)((function(){g((function(){return c.filter((function(e){switch(b){case h.active:return!e.completed;case h.completed:return e.completed;default:return!0}}))}))}),[c,b]),Object(a.useMemo)((function(){D((function(){return c.filter((function(e){return e.completed}))}))}),[c]);var ie=function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e){t.next=3;break}return t.abrupt("return");case 3:if(0!==X.trim().length){t.next=7;break}return H(!0),z(C.ErrorEmptyTitle),t.abrupt("return");case 7:return g((function(t){return[].concat(Object(u.a)(t),[{id:0,userId:e.id,title:X,completed:!1}])})),t.prev=8,t.next=11,U({userId:e.id,title:X,completed:!1});case 11:r=t.sent,o((function(e){return[].concat(Object(u.a)(e),[r])})),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),H(!0),z("Unable to add a todo");case 19:return t.prev=19,g((function(e){return e.filter((function(e){return 0!==e.id}))})),t.finish(19);case 22:Z("");case 23:case"end":return t.stop()}}),t,null,[[8,15,19,22]])})));return function(e){return t.apply(this,arguments)}}(),se=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe((function(e){return[].concat(Object(u.a)(e),[t])})),e.prev=1,e.next=4,I({id:t});case 4:o((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),H(!0),z(C.ErrorServerWhileDelete);case 11:return e.prev=11,oe((function(e){return e.filter((function(e){return e!==t}))})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,7,11,14]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,oe((function(e){return[].concat(Object(u.a)(e),[t.id])})),e.next=6,W(t.id,{completed:!t.completed});case 6:o((function(e){return Object(u.a)(e).map((function(e){return e.id===t.id&&(e.completed=!e.completed),e}))})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),H(!0),z(C.ErrorServerWhileUpdate);case 13:return e.prev=13,oe((function(e){return e.filter((function(e){return e!==t.id}))})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(s.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(te.length>0&&0===te.trim().length)){e.next=4;break}return H(!0),z("Title can't be empty"),e.abrupt("return");case 4:e.t0=t.key,e.next=e.t0===w.Enter?7:e.t0===w.Escape?27:30;break;case 7:if(""!==te){e.next=10;break}return se(n.id),e.abrupt("return");case 10:return e.prev=10,oe((function(e){return[].concat(Object(u.a)(e),[n.id])})),e.next=14,W(n.id,{title:te});case 14:o((function(e){return Object(u.a)(e).map((function(e){return e.id===n.id&&(e.title=te),e}))})),e.next=21;break;case 17:e.prev=17,e.t1=e.catch(10),H(!0),z(C.ErrorServerWhileUpdate);case 21:return e.prev=21,oe((function(e){return e.filter((function(e){return e!==n.id}))})),J(-1),ne(""),e.finish(21);case 26:return e.abrupt("break",31);case 27:return J(-1),ne(""),e.abrupt("break",31);case 30:return e.abrupt("break",31);case 31:case"end":return e.stop()}}),e,null,[[10,17,21,26]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"todoapp",children:[Object(k.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(k.jsxs)("div",{className:"todoapp__content",children:[Object(k.jsxs)("header",{className:"todoapp__header",children:[c.length>0&&Object(k.jsx)("button",{"data-cy":"ToggleAllButton",type:"button",className:f()("todoapp__toggle-all",{active:E.length===c.length}),onClick:function(){c.forEach(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,oe((function(e){return[].concat(Object(u.a)(e),[t.id])})),e.next=4,W(t.id,{completed:E.length!==c.length});case 4:o((function(e){return Object(u.a)(e).map((function(e){var t=E.length!==c.length;return e.completed=t,e}))})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),H(!0),z(C.ErrorServerWhileUpdate);case 11:return e.prev=11,oe((function(e){return e.filter((function(e){return e!==t.id}))})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(t){return e.apply(this,arguments)}}())}}),Object(k.jsx)(L,{handleSubmit:ie,newTodoTitle:X,setTitle:Z})]}),c.length>0&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("section",{className:"todoapp__main","data-cy":"TodoList",children:x.map((function(e){return Object(k.jsx)(F,{todo:e,handleUpdate:ue,wantChangeTitle:B,setWantChangeTitle:J,changeTodoTitle:te,setChangeTitle:ne,handleKeyChangeTitle:le,handleRemoveTodo:se,activeTodoId:ce},e.id)}))}),Object(k.jsxs)("footer",{className:"todoapp__footer","data-cy":"Footer",children:[Object(k.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(c.length-E.length," items left")}),Object(k.jsx)(_,{sortFilter:b,handleChangeSortFilter:function(e){b!==e&&j(e)}}),E.length>0&&Object(k.jsx)("button",{"data-cy":"ClearCompletedButton",type:"button",className:"todoapp__clear-completed",onClick:function(){E.forEach((function(e){return se(e.id)}))},children:"Clear completed"})]})]})]}),Object(k.jsx)(S,{isError:q,setError:H,messageError:G})]})},A=function(){return Object(k.jsx)(E,{children:Object(k.jsx)(D,{})})};Object(r.createRoot)(document.getElementById("root")).render(Object(k.jsx)(A,{}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b1638f72.chunk.js.map