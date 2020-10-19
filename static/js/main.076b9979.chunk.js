(this["webpackJsonpneha-suthar-project-five"]=this["webpackJsonpneha-suthar-project-five"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=a(14),i=a(4),s=a(5),m=a(8),d=a(7),u=a(16),h=a.n(u);a(29);h.a.initializeApp({apiKey:"AIzaSyDU0kFCtN-ggzhzrn8rltvhMD3aAS-DtP4",authDomain:"react-firebase-project5.firebaseapp.com",databaseURL:"https://react-firebase-project5.firebaseio.com",projectId:"react-firebase-project5",storageBucket:"react-firebase-project5.appspot.com",messagingSenderId:"755864469537",appId:"1:755864469537:web:e40fed3c5570eb9ffa6360"});var p=h.a,E=a(9),y=a(23),f=a(3),v=a(2),b=r.a.memo((function(e){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navBar wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"penDown",r.a.createElement(v.a,{icon:"feather-alt",size:"1x"}))),r.a.createElement("ul",{className:"clearfix navItem"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){e.action("home")}},"home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){e.action("compose")}},"compose")))))})),g=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("div",{className:"noteTitle clearfix"},r.a.createElement("h2",null,e.displayContent.title.substring(0,40)),r.a.createElement("h3",null,e.displayContent.date)),r.a.createElement("div",{className:"noteContent"},r.a.createElement("p",null,e.displayContent.content.substring(0,45)),r.a.createElement("div",{className:"noteContentButton"},r.a.createElement("button",{onClick:function(){e.deleteEntry(e.id)},"aria-label":"button to delete the selected note entry"},r.a.createElement(v.a,{icon:"trash-alt"})),r.a.createElement("button",{onClick:function(){e.expandEntry(e.id)},"aria-label":"button to expand the selected note entry to read more"},r.a.createElement(v.a,{icon:"expand-alt"})))))},C=a(6),D=a(10),N=a(13),x=a.n(N),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).changeHandler=function(t){var a=e.state.dairyEntry;e.setState({dairyEntry:Object(D.a)(Object(D.a)({},a),{},Object(C.a)({},t.target.name,t.target.value))})},e.state={dairyEntry:{date:x()().format("YYYY-MM-DD"),title:"",content:""}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"createNote",action:"submit",onSubmit:function(t){e.props.submitHandler(t,e.state.dairyEntry)}},r.a.createElement("div",{className:"noteTitleHeader"},r.a.createElement("label",{htmlFor:"title",className:"visuallyHidden"},"Enter title for the entry"),r.a.createElement("input",{id:"title",type:"text",name:"title",value:this.state.dairyEntry.title,placeholder:"Title",maxLength:"40",onChange:this.changeHandler}),r.a.createElement("label",{htmlFor:"date",className:"visuallyHidden"},"Select date for the entry"),r.a.createElement("input",{id:"date",type:"date",name:"date",value:this.state.dairyEntry.date,onChange:this.changeHandler})),r.a.createElement("div",{className:"noteTextArea"},r.a.createElement("label",{htmlFor:"content",className:"visuallyHidden"},"Enter content for the entry"),r.a.createElement("textarea",{id:"content",name:"content",value:this.state.dairyEntry.content,placeholder:"How you feeling today ?",onChange:this.changeHandler,required:!0})),r.a.createElement("div",{className:"noteComposeButton","aria-label":"submit button to save the  note entry"},r.a.createElement("button",{type:"submit"},r.a.createElement(v.a,{icon:"plus-circle"})))))}}]),a}(n.Component),k=r.a.memo((function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Copyright \u24d2 ",e)))})),O=function(e){var t=e.recordInFocus.dairyContent,a=t.content,n=t.title,o=t.date;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"expandNoteContainer"},r.a.createElement("div",{className:"expandNoteeHeader"},r.a.createElement("h2",null,n),r.a.createElement("h3",null,o)),r.a.createElement("div",{className:"expandNoteContent"},r.a.createElement("p",null,a)),r.a.createElement("div",{className:"noteComposeButton"},r.a.createElement("button",{onClick:e.closeExpandedNote,"aria-label":"button to close the current note and to go back to home page"},r.a.createElement(v.a,{icon:"times-circle"})),r.a.createElement("button",{onClick:function(){e.deleteEntry(e.recordInFocus.key)},"aria-label":"button to delete the note entry"},r.a.createElement(v.a,{icon:"trash-alt"})))))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.resetSelection=function(t){t.preventDefault(),e.setState({year:"year",month:"month",day:"day"})},e.state={year:"year",month:"month",day:"day"},e}return Object(s.a)(a,[{key:"createYearArray",value:function(){for(var e=[],t=(new Date).getFullYear(),a=0;a<=10;a++)e.push(t-a);return e}},{key:"createDayArray",value:function(e){for(var t=[],a=1;a<=e;a++)t.push(a);return t}},{key:"render",value:function(){var e=this,t=this.createYearArray(),a=x.a.monthsShort(),n=new Date(this.state.year,this.state.month,0).getDate(),o=this.createDayArray(n);return r.a.createElement("div",{className:"homePageFilterFormContainer"},r.a.createElement("form",{className:"dateFilterForm"},r.a.createElement("div",{className:"filterOptionContainer"},r.a.createElement("div",{className:"filterYearSelection"},r.a.createElement("select",{onChange:this.onChange,value:this.state.year,name:"year"},r.a.createElement("option",{value:"year"},"year"),t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",{className:"filterMonthSelection"},r.a.createElement("select",{onChange:this.onChange,value:this.state.month,name:"month"},r.a.createElement("option",{value:"month"},"month"),a.map((function(e,t){return r.a.createElement("option",{key:t,value:t+1},e)})))),r.a.createElement("div",{className:"filterDaySelection"},r.a.createElement("select",{onChange:this.onChange,value:this.state.day,name:"day"},r.a.createElement("option",{value:"day"},"day"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:t+1},e)}))))),r.a.createElement("div",{className:"filterButtonContainer"},r.a.createElement("div",{className:"filterButton"},r.a.createElement("button",{onClick:function(t){e.props.filterData(t,{filter:Object(D.a)({},e.state)})}},"Go")),r.a.createElement("div",{className:"resetButton"},r.a.createElement("button",{onClick:function(t){e.resetSelection(t),e.props.filterData(t,{filter:{year:"year",month:"month",day:"day"}})}},"reset")))))}}]),a}(n.Component),S=r.a.memo((function(e){return r.a.createElement("div",{className:"navButtonContainer"},r.a.createElement("button",{disabled:e.startCounter,className:"navBtn",onClick:e.updateCounter,name:"prev","aria-label":"click on button to go to previous page"},"\xab"),r.a.createElement("button",{disabled:e.endCounter,className:"navBtn",onClick:e.updateCounter,name:"next","aria-label":"click on button to go to next page"},"\xbb"))}));a(36);E.b.add(y.a,f.d,f.h,f.c,f.f,f.e,f.a,f.b,f.g);var H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).setActiveTab=function(t){e.setState({showCompose:"compose"===t,showHome:"home"===t,showExpand:!1,recordCounter:0})},e.submitHandler=function(t,a){t.preventDefault(),p.database().ref().push(a),e.setState({showCompose:!1,showHome:!0,showExpand:!1})},e.deleteEntry=function(t){p.database().ref().child(t).remove(),e.setState({showHome:!0,showExpand:!1})},e.expandEntry=function(t){var a=Object(c.a)(e.state.dairyData).filter((function(e){return e.key===t}));e.setState({showHome:!1,showExpand:!0,recordInFocus:a[0]})},e.filterData=function(t,a){t.preventDefault();var n="year"===a.filter.year?"all":"",r="month"===a.filter.month?"all":"",o="day"===a.filter.day?"all":"",l=Object(c.a)(e.state.dairyData),i=[];"all"===n&&"all"===r&&"all"===o?e.setState({filteredDairyData:l,recordCounter:0}):(i=l.filter((function(e){return"all"===n||parseInt(new Date(e.dairyContent.date).getFullYear())===parseInt(a.filter.year)})).filter((function(e){return"all"===r||parseInt(new Date(e.dairyContent.date).getMonth()+1)===parseInt(a.filter.month)})).filter((function(e){return"all"===o||parseInt(new Date(e.dairyContent.date).getDate()+1)===parseInt(a.filter.day)})),e.setState({filteredDairyData:i}))},e.updateCounter=function(t){var a=e.state.recordCounter;"prev"===t.target.name&&a>0?a-=e.state.maxRecordOnPage:"next"===t.target.name&&a+e.state.maxRecordOnPage<e.state.filteredDairyData.length&&(a+=e.state.maxRecordOnPage),e.setState({recordCounter:a})},e.getNextRecords=function(t){var a=e.state.filteredDairyData.length>e.state.recordCounter+e.state.maxRecordOnPage?e.state.recordCounter+e.state.maxRecordOnPage:e.state.filteredDairyData.length;return t.slice(e.state.recordCounter,a)},e.closeExpandedNote=function(){e.setState({showHome:!0,showExpand:!1})},e.getDatabaseData=function(){p.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)if(a.hasOwnProperty(r)){var o=a[r];n.push({key:r,dairyContent:o})}e.setState({dairyData:n,filteredDairyData:n})}))},e.state={dairyData:[],filteredDairyData:[],showCompose:!1,showHome:!0,showExpand:!1,recordInFocus:{},recordCounter:0,maxRecordOnPage:8},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getDatabaseData()}},{key:"render",value:function(){var e=this,t=this.getNextRecords(Object(c.a)(this.state.filteredDairyData));return r.a.createElement("div",{className:"App"},r.a.createElement(b,{action:this.setActiveTab}),r.a.createElement("main",null,this.state.showHome&&r.a.createElement("section",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"homePageDiaryContent"},this.state.dairyData.length>0&&r.a.createElement(j,{filterData:this.filterData}),r.a.createElement("div",{className:"homePage"},t.map((function(t){return r.a.createElement(g,{key:t.key,displayContent:t.dairyContent,deleteEntry:e.deleteEntry,id:t.key,expandEntry:e.expandEntry})}))),this.state.filteredDairyData.length>this.state.maxRecordOnPage&&r.a.createElement(S,{updateCounter:this.updateCounter,startCounter:this.state.recordCounter<1,endCounter:this.state.recordCounter+this.state.maxRecordOnPage>this.state.filteredDairyData.length})))),r.a.createElement("section",null,r.a.createElement("div",{className:"composePage"},this.state.showCompose&&r.a.createElement(w,{submitHandler:this.submitHandler}))),r.a.createElement("section",null,r.a.createElement("div",{className:"expandPage"},this.state.showExpand&&r.a.createElement(O,{recordInFocus:this.state.recordInFocus,closeExpandedNote:this.closeExpandedNote,deleteEntry:this.deleteEntry})))),r.a.createElement(k,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.076b9979.chunk.js.map