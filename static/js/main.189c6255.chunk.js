(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{100:function(e,t,a){},193:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(13),l=a.n(o),s=(a(90),a(7)),i=a(17),c=a(18),u=a(20),d=a(19);function m(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,o){if(a===n)return;var l=Math.floor((a+n)/2);e(r,a,l,t,o),e(r,l+1,n,t,o),function(e,t,a,n,r,o){var l=t,s=t,i=a+1;for(;s<=a&&i<=n;)o.push([s,i]),o.push([s,i]),r[s]<=r[i]?(o.push([l,r[s]]),e[l++]=r[s++]):(o.push([l,r[i]]),e[l++]=r[i++]);for(;s<=a;)o.push([s,s]),o.push([s,s]),o.push([l,r[s]]),e[l++]=r[s++];for(;i<=n;)o.push([i,i]),o.push([i,i]),o.push([l,r[i]]),e[l++]=r[i++]}(t,a,l,n,r,o)}(e,0,e.length-1,a,t),[t,e]}function h(e){var t=[];return function e(t,a,n,r){if(a<n){var o=function(e,t,a,n){for(var r=e[a],o=t-1,l=t;l<a;l++)if(n.push([l,a]),n.push([l,a]),e[l]<r){o++,n.push([o,e[l]]),n.push([l,e[o]]);var s=e[o];e[o]=e[l],e[l]=s}else n.push([a,r]),n.push([l,e[l]]);n.push([o+1,a]),n.push([o+1,a]),n.push([o+1,e[a]]),n.push([a,e[o+1]]);var i=e[o+1];return e[o+1]=e[a],e[a]=i,o+1}(t,a,n,r);e(t,a,o-1,r),e(t,o+1,n,r)}}(e,0,e.length-1,t),[t,e]}function b(e,t){for(var a=[],n=Math.floor(t/2);n>=0;n-=1)f(e,t,n,a);for(var r=t-1;r>0;r-=1){a.push([0,r]),a.push([r,0]),a.push([0,e[r]]),a.push([r,e[0]]);var o=e[0];e[0]=e[r],e[r]=o,f(e,r,0,a)}return[a,e]}function f(e,t,a,n){var r=a,o=2*a+1,l=2*a+2;if(o<t&&e[o]>e[r]&&(r=o),l<t&&e[l]>e[r]&&(r=l),r!=a){n.push([r,a]),n.push([a,r]),n.push([r,e[a]]),n.push([a,e[r]]);var s=e[a];e[a]=e[r],e[r]=s,f(e,t,r,n)}}a(91);var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={array:[],showmsg:!1,arr_size:100,animation_speed:10,quickSortDisabled:!1,heapSortDisabled:!1,mergeSortDisabled:!1,bubbleSortDisabled:!1,sliderDisabled:!1,resetArrayDisabled:!1,theme:"light"},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),document.body.classList.remove("darkmode")}},{key:"resetArray",value:function(){for(var e=[],t=0;t<this.state.arr_size;t++)e.push(p(1,400));this.setState({array:e}),e.length>=100?this.setState({animation_speed:10}):this.setState({animation_speed:15})}},{key:"disableAll",value:function(){this.setState({quickSortDisabled:!0,heapSortDisabled:!0,mergeSortDisabled:!0,bubbleSortDisabled:!0,sliderDisabled:!0,resetArrayDisabled:!0})}},{key:"enableAll",value:function(){this.setState({quickSortDisabled:!1,heapSortDisabled:!1,mergeSortDisabled:!1,bubbleSortDisabled:!1,sliderDisabled:!1,resetArrayDisabled:!1})}},{key:"mergeSort",value:function(){var e=this;console.log(this.state.animation_speed),this.disableAll();for(var t=m(this.state.array.slice()),a=Object(s.a)(t,2),n=a[0],r=(a[1],function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%3!==2){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=a[i].style,d=t%3===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=r[l];c.height="".concat(i,"px"),u.innerHTML=i,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)}),o=0;o<n.length;o++)r(o)}},{key:"quickSort",value:function(){var e=this;this.disableAll();var t=h(this.state.array.slice()),a=Object(s.a)(t,2),n=a[0];a[1];console.log(this.state.array);for(var r=function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=a[i].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=r[l];c.height="".concat(i,"px"),u.innerHTML=i,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)},o=0;o<n.length;o++)r(o)}},{key:"afterSort",value:function(){}},{key:"heapSort",value:function(){var e=this;this.disableAll();var t=b(this.state.array.slice(),this.state.arr_size),a=Object(s.a)(t,2),n=a[0];a[1];console.log(this.state.array);for(var r=function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=a[i].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=r[l];c.height="".concat(i,"px"),u.innerHTML=i,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)},o=0;o<n.length;o++)r(o)}},{key:"bubbleSort",value:function(){var e=this;this.disableAll(),this.setState({showmsg:!0}),setTimeout((function(){e.setState({showmsg:!1})}),3e3);for(var t=function(e){for(var t=[],a=e.length,n=0;n<a-1;n++)for(var r=0;r<a-n-1;r++)if(t.push([r,r+1]),t.push([r,r+1]),e[r]>e[r+1]){t.push([r,e[r+1]]),t.push([r+1,e[r]]);var o=e[r];e[r]=e[r+1],e[r+1]=o}else t.push([r,e[r]]),t.push([r+1,e[r+1]]);return[t,e]}(this.state.array.slice()),a=Object(s.a)(t,2),n=a[0],r=(a[1],function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=a[i].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(s.a)(n[t],2),l=o[0],i=o[1],c=a[l].style,u=r[l];c.height="".concat(i,"px"),u.innerHTML=i,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)}),o=0;o<n.length;o++)r(o)}},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],a=p(40,150),n=0;n<a;n++)t.push(p(1,1e3));var r=t.slice().sort((function(e,t){return e-t})),o=h(t.slice()),l=Object(s.a)(o,2),i=(l[0],l[1],m(t.slice())),c=Object(s.a)(i,2),u=(c[0],c[1],b(t.slice(),t.length)),d=Object(s.a)(u,2),f=(d[0],d[1]);0==g(r,f)&&(console.log(t.slice()),console.log(f))}}},{key:"handleSizeChange",value:function(e){var t=this;this.setState({arr_size:e.target.value},(function(){for(var e=[],a=0;a<t.state.arr_size;a++)e.push(p(1,400));t.setState({array:e}),console.log(t.state.arr_size)}))}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container-sort"},r.a.createElement("div",{className:"header-sort"},r.a.createElement("div",null,r.a.createElement("div",{className:"input-range"},r.a.createElement("p",null,r.a.createElement("b",null,"Array Size: ")),r.a.createElement("input",{type:"range",min:"5",max:"200","data-toggle":"tooltip","data-placement":"left",title:this.state.arr_size,className:"input-range",disabled:this.state.sliderDisabled,value:this.state.arr_size,onChange:function(t){e.handleSizeChange(t)},id:"slider"})),r.a.createElement("button",{id:"resetArray",className:"btn btn-dark",disabled:this.state.resetArrayDisabled,type:"button",onClick:function(){return e.resetArray()}},"New Random List")),r.a.createElement("div",null,r.a.createElement("button",{id:"mergeSort",disabled:this.state.mergeSortDisabled,className:"btn btn-info",onClick:function(){return e.mergeSort()}},"Merge Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"quickSort",disabled:this.state.quickSortDisabled,className:"btn btn-info",onClick:function(){return e.quickSort()}},"Quick Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"heapSort",disabled:this.state.heapSortDisabled,className:"btn btn-info",onClick:function(){return e.heapSort()}},"Heap Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"bubbleSort",disabled:this.state.bubbleSortDisabled,className:"btn btn-info",onClick:function(){return e.bubbleSort()}},"Bubble Sort")),r.a.createElement("button",{className:"btn btn-warning",style:{display:"None"},onClick:function(){return e.testSortingAlgorithms()}},"Test")),r.a.createElement("div",{className:"middle-sort"},r.a.createElement("h1",{style:{fontFamily:"Montserrat, sans-serif",background:"transparent",margin:"0.4em 0"}},"Technologies:",r.a.createElement("span",{className:"txt-rotate","data-period":"1000","data-rotate":'[ " HTML5", " CSS3", " React", " Javascript" ]'})),r.a.createElement("div",{id:"bars",style:{position:"relative",height:"100%"}},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"#57a18b",height:"".concat(e,"px"),width:"5px",margin:"0px 1px",overflow:"hidden"}},r.a.createElement("div",{className:"tooltiptext"},e))}))),r.a.createElement("div",{id:"msg",style:{display:this.state.showmsg?"block":"None",position:"fixed",width:"500px",height:"100px",top:"50%",left:"50%",color:"gray",fontWeight:"bold",backgroundColor:"#fff",textAlign:"center",marginTop:"-100px",marginLeft:"-250px"}},"SPOILERS! BubbleSort is a bit slow --\x3e O(N^2)"))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Sorting Algorithms, Developed with React Framework. Written by Ashkan Bashiri."))))}}]),a}(r.a.Component);function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function g(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}a(92),a(93);var y=a(9),C=a(21);a(94);var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"particles-js"}),r.a.createElement("script",{src:"particles.js"}),r.a.createElement("header",{style:E},r.a.createElement("h1",null,r.a.createElement(y.c,{className:"my-class",to:"/"},"Ashkan's React Application")),r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/sv"},"Sorting-Visualizer"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/covid19"},"Covid19-Tracker"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/covid_summary"},"Covid Summary"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/ml"},"DataScience Projects"," ")))},k=(a(99),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Machine Learning Examples"),r.a.createElement("p",null,"Coming Soon ..."))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Machine Learning Algorithms, Developed with React Framework. Written by Ashkan Bashiri."))))}}]),a}(r.a.Component)),D=a(28),w=(a(100),a(77)),N=a(83),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(e){n.setState({selectedCountry:e.value},(function(){console.log(n.state.country_data),console.log(n.state.selectedCountry);var e=n.state.country_data.filter((function(e){return e.country==n.state.selectedCountry}));console.log(e);var t=e[0].dates;console.log(t);var a=[{label:"#Confirmed",fill:!1,lineTension:.5,backgroundColor:"rgba(33,47,61,1)",borderColor:"rgba(33,47,61,1)",borderWidth:1,data:e[0].confirmed},{label:"#Deaths",fill:!1,lineTension:.5,backgroundColor:"rgba(205,92,92,1)",borderColor:"rgba(205,92,92,1)",borderWidth:1,data:e[0].deaths},{label:"#Recovered",fill:!1,lineTension:.5,backgroundColor:"rgba(72,201,176,1)",borderColor:"rgba(72,201,176,1)",borderWidth:1,data:e[0].recovered}];n.setState({labels:t,datasets:a},(function(){n.setState({labels:t,datasets:a})}))}))},n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n.handleCountryChange=n.handleCountryChange.bind(Object(D.a)(n)),n.state={summary:[],countries:[],country_data:[],labels:[],datasets:[],selectedCountry:"",options:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[],a=["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "];fetch("https://api.covid19api.com/all").then((function(e){return e.json()})).then((function(n){var r=[],o=[];n.forEach((function(e){if(r.includes(e.Country)){var n=new Date(e.Date);o.filter((function(t){return t.country===e.Country}))[0].dates.includes(a[n.getMonth()]+n.getDate())?(o.filter((function(t){return t.country===e.Country}))[0].confirmed[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Confirmed,o.filter((function(t){return t.country===e.Country}))[0].deaths[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Deaths,o.filter((function(t){return t.country===e.Country}))[0].recovered[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Recovered,o.filter((function(t){return t.country===e.Country}))[0].active[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Active):(o.filter((function(t){return t.country===e.Country}))[0].confirmed.push(e.Confirmed),o.filter((function(t){return t.country===e.Country}))[0].deaths.push(e.Deaths),o.filter((function(t){return t.country===e.Country}))[0].recovered.push(e.Recovered),o.filter((function(t){return t.country===e.Country}))[0].active.push(e.Active),o.filter((function(t){return t.country===e.Country}))[0].dates.push(a[n.getMonth()]+n.getDate()))}else{r.push(e.Country);var l=new Date(e.Date);o.push({country:e.Country,confirmed:[e.Confirmed],deaths:[e.Deaths],recovered:[e.Recovered],active:[e.Active],dates:[a[l.getMonth()]+l.getDate()]}),t.push({value:e.Country,label:e.Country})}})),e.setState({options:t}),e.setState({countries:r}),e.setState({country_data:o})}))}},{key:"rnd_range",value:function(e,t){return Math.random()*(t-e)+e}},{key:"handleSubmit",value:function(){var e=this,t=this.state.countries[Math.floor(this.rnd_range(0,this.state.countries.length))-1];this.setState({selectedCountry:t},(function(){console.log(e.state.selectedCountry);var t=e.state.country_data.filter((function(t){return t.country==e.state.selectedCountry})),a=t[0].dates;console.log(a);var n=[{label:"#Confirmed",fill:!1,lineTension:.5,backgroundColor:"rgba(33,47,61,1)",borderColor:"rgba(33,47,61,1)",borderWidth:1,data:t[0].confirmed},{label:"#Deaths",fill:!1,lineTension:.5,backgroundColor:"rgba(205,92,92,1)",borderColor:"rgba(205,92,92,1)",borderWidth:1,data:t[0].deaths},{label:"#Recovered",fill:!1,lineTension:.5,backgroundColor:"rgba(72,201,176,1)",borderColor:"rgba(72,201,176,1)",borderWidth:1,data:t[0].recovered}];e.setState({labels:a,datasets:n},(function(){e.setState({labels:a,datasets:n})}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Covid19 Tracker App")),r.a.createElement("p",{className:"label"},"Select a Country (Daily Updates):"),r.a.createElement("div",{className:"selector1"},r.a.createElement(N.a,{onChange:this.handleCountryChange,options:this.state.options,autoFocus:!0})),r.a.createElement("div",{className:"middle"},r.a.createElement(w.a,{data:this.state,options:{maintainAspectRatio:!0,responsive:!0,title:{display:!0,text:"Daily statistics for "+this.state.selectedCountry,fontSize:20},legend:{display:!0,position:"right"}}})),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Covid19 data, Developed with React Framework. Written by Ashkan Bashiri.")))))}}]),a}(r.a.Component),O=(a(193),a(84)),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={columns:[{label:"country",field:"name",sort:"asc",width:150},{label:"totalConfirmed",field:"totalConfirmed",sort:"desc",width:150},{label:"newConfirmed",field:"newConfirmed",sort:"desc",width:150},{label:"totalDeaths",field:"totalDeaths",sort:"desc",width:150},{label:"newDeaths",field:"newDeaths",sort:"desc",width:150},{label:"totalRecovered",field:"totalRecovered",sort:"desc",width:150},{label:"newRecovered",field:"newRecovered",sort:"desc",width:150},{label:"lastUpdate",field:"lastUpdate",sort:"desc",width:150}],rows:[]};fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){var n={name:"Global",totalConfirmed:a.Global.TotalConfirmed,newConfirmed:a.Global.NewConfirmed,totalDeaths:a.Global.TotalDeaths,newDeaths:a.Global.NewDeaths,totalRecovered:a.Global.TotalRecovered,newRecovered:a.Global.NewRecovered,lastUpdate:""};t.rows.push(n),a.Countries.forEach((function(e){var a={name:e.Country,totalConfirmed:e.TotalConfirmed,newConfirmed:e.NewConfirmed,totalDeaths:e.TotalDeaths,newDeaths:e.NewDeaths,totalRecovered:e.TotalRecovered,newRecovered:e.NewRecovered,lastUpdate:e.Date};t.rows.push(a)})),e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Covid19 Summary Table")),r.a.createElement("div",{className:"middle"},r.a.createElement(O.c,{style:{overflow:"none !important"},striped:!0,bordered:!0,hover:!0,data:this.state.data}))))}}]),a}(r.a.Component);a(215);var x=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),o=Object(s.a)(a,2);return o[0],o[1],r.a.createElement("div",{className:"App"},r.a.createElement("script",{type:"text/javascript",src:"./particles.js"}),r.a.createElement(y.a,null,r.a.createElement(S,null),r.a.createElement(C.a,{exact:!0,path:"/",component:v}),r.a.createElement(C.a,{path:"/sv",component:v}),r.a.createElement(C.a,{path:"/ml",component:k}),r.a.createElement(C.a,{path:"/covid19",component:j}),r.a.createElement(C.a,{path:"/covid_summary",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(216),a(217);l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports=a(218)},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.189c6255.chunk.js.map