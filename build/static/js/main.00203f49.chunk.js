(this["webpackJsonptask-tracker-app"]=this["webpackJsonptask-tracker-app"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s=t(0),d=t(25),b=t.n(d),u=t(2),l=t(3),j=Object(l.a)(r||(r=Object(u.a)(['\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    background-color: background-color: rgba(241, 237, 237, 0.815);\n  \n  }\n  \n  .container {\n    max-width: 500px;\n    margin: 30px auto;\n    overflow: auto;\n    min-height: 300px;\n    font-family: "Trirong", serif;\n    padding: 30px;\n    border-radius: 5px;\n    background-color: rgba(241, 237, 237, 0.815);\n    background-color: darkorange;\n    box-shadow: 2px 3px 9px 3px rgba(33,108,6,0.78);\n  }\n\n']))),p=t(30),x=t(16),h=t(12),f=t.n(h),O=t(18),g=t(9),m=t(10),k=t(4),v=l.b.div(c||(c=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    margin-left: 6px;\n    margin-right: -6px;\n"]))),y=Object(l.c)(a||(a=Object(u.a)(["\n0% {\n    opacity: 0;\n    color: red;\n}\n100% {\n    opacity: 1;\n    color: cream;\n}\n"]))),w=l.b.h1(o||(o=Object(u.a)(["\nanimation: 5s "," ease-in-out;\ncolor: green; \n"])),y),T=t(1);function A(n){var e=n.title,t=n.showTask,r=n.showAdd,c=Object(k.e)();return Object(T.jsxs)(v,{children:[Object(T.jsxs)(w,{children:[" ",e," "]}),"/"===c.pathname&&Object(T.jsx)(N,{text:r?"Close":"Add",color:r?"red":"green",onClick:t})]})}A.defaultProps={title:"Task Tracker"};var C,S,E,z=l.b.button(i||(i=Object(u.a)(["\n    display: inline-block;\n    background: ",";\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    margin: 5px;\n    border-radius: 5.5px;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 15px;\n    font-family: inherit;\n"])),(function(n){var e=n.color;return e||"#000"}));function N(n){var e=n.text,t=n.color,r=n.onClick;return Object(T.jsx)(z,{color:t,onClick:r,children:e})}function P(n){var e=n.tasks,t=n.delTask,r=n.toggleReminder;return Object(T.jsx)(T.Fragment,{children:e.map((function(n){return Object(T.jsx)(U,{task:n,delTask:t,toggleReminder:r},n.id)}))})}N.defaultProps={color:"blue"};var R,D,J,L,B,F,I,M=l.b.div(C||(C=Object(u.a)(["\n        border-left: ",";\n        max-width: 100%;\n        background: #f4f4f4;\n        margin: 5px;\n        padding: 10px 20px;\n        box-shadow: 1px 2px 2px 0px rgba(124,207,23,0.75);\n        border-radius: 5px;\n        \n        &:hover {\n          cursor: pointer;\n        }\n "])),(function(n){return n.reminder?"5px solid green":""})),V=l.b.h3(S||(S=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  "]))),G=l.b.p(E||(E=Object(u.a)(["\n"]))),K=t(29);function U(n){var e=n.task,t=n.delTask,r=n.toggleReminder,c=Object(s.useState)(!1),a=Object(g.a)(c,2),o=a[0],i=a[1],d=o&&Object(T.jsx)(K.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return t(e.id)}}),b=e.text,u=e.day;return Object(T.jsxs)(M,{onDoubleClick:function(){return r(e.id)},reminder:"".concat(e.reminder?"reminder":""),children:[Object(T.jsxs)(V,{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[b," ",d]}),Object(T.jsx)(G,{children:u})]})}var W,q=l.b.form(R||(R=Object(u.a)(["\n margin-bottom: 40px;\n"]))),H=l.b.div(D||(D=Object(u.a)(["\nmax-width: 500px;\nmargin: 20px 0;\n"]))),Q=l.b.label(J||(J=Object(u.a)(["\ndisplay: block;\nmargin-left:5px;\n"]))),X=l.b.input(L||(L=Object(u.a)(["\nwidth: 100%;\nheight: 40px;\nmargin: 5px;\npadding: 3px 7px;\nfont-size: 17px;\nborder-radius: 7px;\n"]))),Y=l.b.input(B||(B=Object(u.a)(["\n width: 15px;\n height: 15px;\n border-radius: 5px;\n"]))),Z=Object(l.b)(H)(F||(F=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),$=l.b.input(I||(I=Object(u.a)(["\n  display: block;\n  width: 100%;\n\n  display: inline-block;\n  background: #000;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: inherit;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    transform: scale(0.98);\n    background-color: green;\n  }\n"])));function _(n){var e=n.addTask,t=Object(s.useState)(""),r=Object(g.a)(t,2),c=r[0],a=r[1],o=Object(s.useState)(""),i=Object(g.a)(o,2),d=i[0],b=i[1],u=Object(s.useState)(!1),l=Object(g.a)(u,2),j=l[0],p=l[1];return Object(T.jsxs)(q,{onSubmit:function(n){n.preventDefault(),c?(e({text:c,day:d,reminder:j}),a(""),b(""),p(!1)):alert("Please enter a task")},children:[Object(T.jsxs)(H,{children:[Object(T.jsx)(Q,{children:"Task"}),Object(T.jsx)(X,{type:"text",placeholder:"Add task",value:c,onChange:function(n){return a(n.target.value)}})]}),Object(T.jsxs)(H,{children:[Object(T.jsx)(Q,{children:"Day and Time"}),Object(T.jsx)(X,{type:"text",placeholder:"Add day & time",value:d,onChange:function(n){return b(n.target.value)}})]}),Object(T.jsxs)(Z,{children:[Object(T.jsx)(Q,{children:"Set Reminder"}),Object(T.jsx)(Y,{type:"checkbox",checked:j,value:j,onChange:function(n){return p(n.currentTarget.checked)}})]}),Object(T.jsx)($,{type:"submit",value:"Add Task"})]})}var nn,en=l.b.div(W||(W=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 40px 6px 0;\n    font-size: 16px;\n    font-weight: bold;\n    color: green;\n\n    .about {\n        text-decoration: none;\n        color: green;\n    }\n"])));function tn(){return Object(T.jsxs)(en,{children:[Object(T.jsx)("p",{children:"Copyright \xa9 2021"}),Object(T.jsx)(m.b,{to:"/about",className:"about",children:"About"})]})}var rn=l.b.div(nn||(nn=Object(u.a)(["\n    margin: 40px 6px 0;\n    text-decoration: none;\n"])));function cn(){return Object(T.jsxs)(rn,{children:[Object(T.jsx)("h4",{children:"Version 1.0.1"}),Object(T.jsx)(m.b,{to:"/",children:"Go back"})]})}var an=function(){var n=Object(s.useState)(!1),e=Object(g.a)(n,2),t=e[0],r=e[1],c=Object(s.useState)([]),a=Object(g.a)(c,2),o=a[0],i=a[1];Object(s.useEffect)((function(){fetch("http://localhost:7000/tasks").then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]);var d=function(){var n=Object(O.a)(f.a.mark((function n(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:7000/tasks/".concat(e),{method:"DELETE"});case 2:t=o.filter((function(n){return n.id!==e})),i(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=Object(O.a)(f.a.mark((function n(e){var t,r,c,a,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:7000/tasks/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,c=Object(x.a)(Object(x.a)({},r),{},{reminder:!r.reminder}),n.next=9,fetch("http://localhost:7000/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 9:return a=n.sent,n.next=12,a.json();case 12:s=n.sent,i(o.map((function(n){return n.id===e?Object(x.a)(Object(x.a)({},n),{},{reminder:s.reminder}):n})));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=Object(O.a)(f.a.mark((function n(e){var t,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:7000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,i([].concat(Object(p.a)(o),[r]));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(T.jsx)(m.a,{children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(A,{showTask:function(){r(!t)},showAdd:t}),Object(T.jsxs)(k.a,{path:"/",exact:!0,children:[t&&Object(T.jsx)(_,{addTask:u}),o.length>0?Object(T.jsx)(P,{tasks:o,delTask:d,toggleReminder:b}):Object(T.jsx)("h3",{style:{textAlign:"center",marginTop:"80px",color:"green",fontWeight:900},children:"NO TASK AVAILABLE"})]}),Object(T.jsx)(k.a,{path:"/about",children:Object(T.jsx)(cn,{})}),Object(T.jsx)(tn,{})]})})};b.a.render(Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j,{}),Object(T.jsx)(an,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.00203f49.chunk.js.map