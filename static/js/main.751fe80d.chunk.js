(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(56)},56:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),c=t.n(r),s=t(16),i=t(17),o=t(20),m=t(18),u=t(12),h=t(21),E=t(67),d=t(65),p=t(57),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={file:null},t.fileReader=new FileReader,t.handleFileChosen=t.handleFileChosen.bind(Object(u.a)(t)),t.handleFileRead=t.handleFileRead.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleFileRead",value:function(e){var a=this.props.onData;a&&a(e.currentTarget.result)}},{key:"handleFileChosen",value:function(e){if(e){var a=new FileReader;a.onloadend=this.handleFileRead,a.readAsText(e)}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Upload crash report ",l.a.createElement(p.a,{color:"info"},"Beta")),l.a.createElement("br",null),l.a.createElement("input",{type:"file",id:"crashlog-input",className:"input-file",onChange:function(a){return e.handleFileChosen(a.target.files[0])}}))}}]),a}(l.a.PureComponent),v={CRASH_REPORT:"---- Minecraft Crash Report ----",SYSTEM_DETAILS:"-- System Details --"},b={RANDOM_MESSAGE:1,TIME:3,DESCRIPTION:4,ERROR_STACK_TRACE:6},g=/\/\/ (.*)/;var O=t(58),y=t(59),R=t(60),C=t(61),S=t(62),k=t(63),N=t(64),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(u.a)(t)),t.state={isOpen:!1},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(y.a,{onClick:this.toggle}),l.a.createElement(R.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(C.a,null,l.a.createElement(S.a,null,l.a.createElement(k.a,{onClick:this.props.onNew,color:"success"},"New crashlog ",l.a.createElement("i",{className:"ml-2 fas fa-plus"})))),l.a.createElement(C.a,{className:"ml-auto",navbar:!0},l.a.createElement(S.a,null,l.a.createElement(N.a,{href:"https://github.com/antoinegag/mc-crash-analyzer"},l.a.createElement("i",{className:"fab fa-github mr-2"}),"GitHub"))))))}}]),a}(l.a.Component),T=t(35),w=t(31),M=t(66);var A=function(e){var a=e.tooltip,t=Object(T.a)(e,["tooltip"]),n=Object(w.uniqueId)("infobubble-");return l.a.createElement("span",t,l.a.createElement("i",{id:n,className:"fas fa-question-circle"}),l.a.createElement(M.a,{placement:"top",target:n},a))};function D(e){var a=e.data;return l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("i",{className:"fas fa-bug pr-2"}),"Error information"),l.a.createElement("p",null,a.description),l.a.createElement("div",{className:"pb-3"},l.a.createElement("h4",null,"Error"),l.a.createElement("code",null,a.error)),l.a.createElement("div",null,l.a.createElement("h4",null,"Possible cause"),l.a.createElement("p",null,a.possibleCause)),l.a.createElement("div",null,l.a.createElement("h4",null,"Location"),l.a.createElement("p",null,"This is where the error happened, if you recognize a mod name, it is probably at fault."),l.a.createElement("code",null,a.stackHead)))}function _(e){var a=e.details;return l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("i",{className:"fas fa-microchip pr-2"}),"System details"),l.a.createElement("h4",null,"Minecraft version"),l.a.createElement("p",null,a.minecraftVersion),l.a.createElement("h4",null,"Java version"),l.a.createElement("p",null,a.javaVersion,l.a.createElement(A,{tooltip:"Make sure to have a compatible Java version (typically Java 8)",className:"pl-2"})),l.a.createElement("h4",null,"Operating system"),l.a.createElement("p",null,a.operatingSystem),l.a.createElement("h4",null,"Memory"),l.a.createElement("p",null,"Used: ",a.memory.used),l.a.createElement("p",null,"Available: ",a.memory.available),l.a.createElement("p",null,"Max: ",a.memory.max))}var F=function(e){var a=e.data;return l.a.createElement("div",{className:"pt-5"},l.a.createElement("h1",null,"Crash report"),l.a.createElement("p",{className:"lead"},a.time),l.a.createElement("span",{className:"text-muted"},a.randomMessage),l.a.createElement("hr",{className:"my-3"}),l.a.createElement(D,{data:a}),l.a.createElement("hr",{className:"my-3"}),l.a.createElement(_,{details:a.systemDetails}),l.a.createElement("hr",{className:"my-3"}),l.a.createElement("h2",null,"Full stack trace"),l.a.createElement("p",{className:"lead"},"Data for developers"),l.a.createElement("pre",null,l.a.createElement("code",null,a.fullStackTrace)))},I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={data:null},t.handleCrashLogUpload=t.handleCrashLogUpload.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleCrashLogUpload",value:function(e){var a=function(e){var a=e.split("\n");if(a.length<1||a[0]!==v.CRASH_REPORT)throw new Error("Invalid crashlog");var t=0,n={};n.randomMessage=a[b.RANDOM_MESSAGE].match(g)[1],n.time=a[b.TIME].match(/Time: (.*)/)[1],n.description=a[b.DESCRIPTION].match(/Description: (.*)/)[1],t=b.ERROR_STACK_TRACE,n.error=a[t],n.possibleCause=n.error.match("OutOfMemoryError")?"Ran out of RAM, allocate more memory to Minecraft":"Unknown",t++,n.stackHead=a[t],n.errorClassPath=n.stackHead.match(/at (.*?)\(/)[1];do{t++}while(""!==a[t]);for(n.fullStackTrace=a.slice(b.ERROR_STACK_TRACE,t).join("\n");a[t]!==v.SYSTEM_DETAILS;)t++;var l={minecraftVersion:a[t+=2].match(/Minecraft Version: (.*)/)[1],operatingSystem:a[t+1].match(/Operating System: (.*)/)[1],javaVersion:a[t+2].match(/Java Version: (.*)/)[1]},r=a[t+=4].match(/Memory: (.*?) \/ (.*?)up to (.*)/);return l.memory={used:r[1],available:r[2],max:r[3]},n.systemDetails=l,n}(e);this.setState({data:a})}},{key:"render",value:function(){var e=this,a=this.state.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{onNew:function(){return e.setState({data:null})}}),l.a.createElement(E.a,{color:"info"},"This is a beta version, please reports all issues"," ",l.a.createElement("a",{className:"alert-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/antoinegag/mc-crash-analyzer/issues"},"here")),l.a.createElement(d.a,null,a?l.a.createElement(F,{data:a}):l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement(f,{onData:this.handleCrashLogUpload}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(55);c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.751fe80d.chunk.js.map