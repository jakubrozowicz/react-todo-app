(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=(a(15),a(6)),o=a(1),s=a(2),u=a(4),d=a(3),m=a(5),h=(a(17),a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={value:"",date:a.minDate,checked:!1},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleValue=function(e){a.setState({value:e.target.value})},a.handleClick=function(){var e=a.state,t=e.value,n=e.date,l=e.checked;t.length>2?(a.props.add(t,l,n),a.setState({value:"",date:a.minDate,checked:!1})):alert("Zadanie musi zawiera\u0107 co najmniej 3 znaki")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.date,n=e.checked,c=1*this.minDate.slice(0,4)+1;return c+="-12-31",l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form"},l.a.createElement("h2",null,"Dodaj zadanie do zrobienia:"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Dodaj zadanie",value:t,onChange:this.handleValue}),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",checked:n,id:"important",onChange:this.handleCheckbox}),l.a.createElement("label",{htmlFor:"important"},"Priorytet"))),l.a.createElement("label",{htmlFor:"date"},"Do kiedy zrobi\u0107"),l.a.createElement("input",{type:"date",id:"date",value:a,min:a,max:c,onChange:this.handleDate}),l.a.createElement("button",{onClick:this.handleClick,className:"btnAddTask"},"Dodaj zadanie")))}}]),t}(n.Component)),k=(a(21),a(23),function(e){var t=e.task,a=t.text,n=t.date,c=t.id,r=t.active,i=t.important,o=t.finishDate;if(r)return l.a.createElement("div",{className:"task"},l.a.createElement("p",null,l.a.createElement("strong",{style:i?{color:"red"}:null},a)," - zrobi\u0107 do: ",n,l.a.createElement("button",{onClick:function(){return e.change(c)},className:"taskBtn taskBtnCheck"},"\u2713"),l.a.createElement("button",{onClick:function(){return e.delete(c)},className:"taskBtn taskBtnDelete"},"\u2715")));var s=new Date(o).toLocaleString();return l.a.createElement("div",{className:"task"},l.a.createElement("p",null,l.a.createElement("strong",null,a),l.a.createElement("em",null," - (zrobi\u0107 do: ",n,")"),l.a.createElement("br",null),"Data i godzina wykonania: ",l.a.createElement("span",null,s),l.a.createElement("button",{onClick:function(){return e.delete(c)},className:"taskBtn taskBtnDelete"},"\u2715")))}),v=function(e){var t=e.tasks.filter(function(e){return!0===e.active}),a=e.tasks.filter(function(e){return!0!==e.active}),n=t.map(function(t){return l.a.createElement(k,{key:t.id,task:t,change:e.change,delete:e.delete})}),c=a.map(function(t){return l.a.createElement(k,{key:t.id,task:t,change:e.change,delete:e.delete})});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tasksActive"},l.a.createElement("h2",null,"Zadania do zrobienia:"),l.a.createElement("div",null,n.length<1?l.a.createElement("span",{className:"emptyTasks"},"Brak zada\u0144 do wykonania"):n)),l.a.createElement("div",{className:"tasksDone"},l.a.createElement("h2",null,"Zadania wykonane: ",l.a.createElement("em",null,"(",c.length,")")),l.a.createElement("div",null,c)))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).counter=0,a.state={tasks:[]},a.handleDelete=function(e){var t=Object(i.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.handleChangeStatus=function(e){var t=Object(i.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var l={id:a.counter,text:e,date:n,important:t,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[l])}}),!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"TODO APP"),l.a.createElement(h,{add:this.addTask}),l.a.createElement(v,{tasks:this.state.tasks,change:this.handleChangeStatus,delete:this.handleDelete}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.1a411b54.chunk.js.map