(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(13),s=a.n(o),i=(a(92),a(6)),l=a(14),c=a(15),u=a(17),d=a(16);function m(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,o){if(a===n)return;var s=Math.floor((a+n)/2);e(r,a,s,t,o),e(r,s+1,n,t,o),function(e,t,a,n,r,o){var s=t,i=t,l=a+1;for(;i<=a&&l<=n;)o.push([i,l]),o.push([i,l]),r[i]<=r[l]?(o.push([s,r[i]]),e[s++]=r[i++]):(o.push([s,r[l]]),e[s++]=r[l++]);for(;i<=a;)o.push([i,i]),o.push([i,i]),o.push([s,r[i]]),e[s++]=r[i++];for(;l<=n;)o.push([l,l]),o.push([l,l]),o.push([s,r[l]]),e[s++]=r[l++]}(t,a,s,n,r,o)}(e,0,e.length-1,a,t),[t,e]}function h(e){var t=[];return function e(t,a,n,r){if(a<n){var o=function(e,t,a,n){for(var r=e[a],o=t-1,s=t;s<a;s++)if(n.push([s,a]),n.push([s,a]),e[s]<r){o++,n.push([o,e[s]]),n.push([s,e[o]]);var i=e[o];e[o]=e[s],e[s]=i}else n.push([a,r]),n.push([s,e[s]]);n.push([o+1,a]),n.push([o+1,a]),n.push([o+1,e[a]]),n.push([a,e[o+1]]);var l=e[o+1];return e[o+1]=e[a],e[a]=l,o+1}(t,a,n,r);e(t,a,o-1,r),e(t,o+1,n,r)}}(e,0,e.length-1,t),[t,e]}function b(e,t){for(var a=[],n=Math.floor(t/2);n>=0;n-=1)f(e,t,n,a);for(var r=t-1;r>0;r-=1){a.push([0,r]),a.push([r,0]),a.push([0,e[r]]),a.push([r,e[0]]);var o=e[0];e[0]=e[r],e[r]=o,f(e,r,0,a)}return[a,e]}function f(e,t,a,n){var r=a,o=2*a+1,s=2*a+2;if(o<t&&e[o]>e[r]&&(r=o),s<t&&e[s]>e[r]&&(r=s),r!=a){n.push([r,a]),n.push([a,r]),n.push([r,e[a]]),n.push([a,e[r]]);var i=e[a];e[a]=e[r],e[r]=i,f(e,t,r,n)}}a(93);var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={array:[],showmsg:!1,arr_size:100,animation_speed:10,quickSortDisabled:!1,heapSortDisabled:!1,mergeSortDisabled:!1,bubbleSortDisabled:!1,sliderDisabled:!1,resetArrayDisabled:!1,theme:"light"},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),document.body.classList.remove("darkmode")}},{key:"resetArray",value:function(){for(var e=[],t=0;t<this.state.arr_size;t++)e.push(p(1,400));this.setState({array:e}),e.length>=100?this.setState({animation_speed:10}):this.setState({animation_speed:15})}},{key:"disableAll",value:function(){this.setState({quickSortDisabled:!0,heapSortDisabled:!0,mergeSortDisabled:!0,bubbleSortDisabled:!0,sliderDisabled:!0,resetArrayDisabled:!0})}},{key:"enableAll",value:function(){this.setState({quickSortDisabled:!1,heapSortDisabled:!1,mergeSortDisabled:!1,bubbleSortDisabled:!1,sliderDisabled:!1,resetArrayDisabled:!1})}},{key:"mergeSort",value:function(){var e=this;console.log(this.state.animation_speed),this.disableAll();for(var t=m(this.state.array.slice()),a=Object(i.a)(t,2),n=a[0],r=(a[1],function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%3!==2){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=a[l].style,d=t%3===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=r[s];c.height="".concat(l,"px"),u.innerHTML=l,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)}),o=0;o<n.length;o++)r(o)}},{key:"quickSort",value:function(){var e=this;this.disableAll();var t=h(this.state.array.slice()),a=Object(i.a)(t,2),n=a[0];a[1];console.log(this.state.array);for(var r=function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=a[l].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=r[s];c.height="".concat(l,"px"),u.innerHTML=l,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)},o=0;o<n.length;o++)r(o)}},{key:"afterSort",value:function(){}},{key:"heapSort",value:function(){var e=this;this.disableAll();var t=b(this.state.array.slice(),this.state.arr_size),a=Object(i.a)(t,2),n=a[0];a[1];console.log(this.state.array);for(var r=function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=a[l].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=r[s];c.height="".concat(l,"px"),u.innerHTML=l,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)},o=0;o<n.length;o++)r(o)}},{key:"bubbleSort",value:function(){var e=this;this.disableAll(),this.setState({showmsg:!0}),setTimeout((function(){e.setState({showmsg:!1})}),3e3);for(var t=function(e){for(var t=[],a=e.length,n=0;n<a-1;n++)for(var r=0;r<a-n-1;r++)if(t.push([r,r+1]),t.push([r,r+1]),e[r]>e[r+1]){t.push([r,e[r+1]]),t.push([r+1,e[r]]);var o=e[r];e[r]=e[r+1],e[r+1]=o}else t.push([r,e[r]]),t.push([r+1,e[r+1]]);return[t,e]}(this.state.array.slice()),a=Object(i.a)(t,2),n=a[0],r=(a[1],function(t){var a=document.getElementsByClassName("array-bar"),r=document.getElementsByClassName("tooltiptext");if(t%4<2){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=a[l].style,d=t%4===0?"orangered":"#57a18b";setTimeout((function(){c.backgroundColor=d,u.backgroundColor=d}),t*e.state.animation_speed)}else setTimeout((function(){var o=Object(i.a)(n[t],2),s=o[0],l=o[1],c=a[s].style,u=r[s];c.height="".concat(l,"px"),u.innerHTML=l,t==n.length-1&&e.enableAll()}),t*e.state.animation_speed)}),o=0;o<n.length;o++)r(o)}},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],a=p(40,150),n=0;n<a;n++)t.push(p(1,1e3));var r=t.slice().sort((function(e,t){return e-t})),o=h(t.slice()),s=Object(i.a)(o,2),l=(s[0],s[1],m(t.slice())),c=Object(i.a)(l,2),u=(c[0],c[1],b(t.slice(),t.length)),d=Object(i.a)(u,2),f=(d[0],d[1]);0==g(r,f)&&(console.log(t.slice()),console.log(f))}}},{key:"handleSizeChange",value:function(e){var t=this;this.setState({arr_size:e.target.value},(function(){for(var e=[],a=0;a<t.state.arr_size;a++)e.push(p(1,400));t.setState({array:e}),console.log(t.state.arr_size)}))}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container-sort"},r.a.createElement("div",{className:"header-sort"},r.a.createElement("div",null,r.a.createElement("div",{className:"input-range"},r.a.createElement("p",null,r.a.createElement("b",null,"Array Size:")),r.a.createElement("input",{type:"range",min:"5",max:"200","data-toggle":"tooltip","data-placement":"left",title:this.state.arr_size,className:"input-range",disabled:this.state.sliderDisabled,value:this.state.arr_size,onChange:function(t){e.handleSizeChange(t)},id:"slider"})),r.a.createElement("button",{id:"resetArray",className:"btn btn-dark hvr-sweep-to-right",disabled:this.state.resetArrayDisabled,type:"button",onClick:function(){return e.resetArray()}},"New Random List")),r.a.createElement("div",null,r.a.createElement("button",{id:"mergeSort",disabled:this.state.mergeSortDisabled,className:"btn hvr-sweep-to-right",onClick:function(){return e.mergeSort()}},"Merge Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"quickSort",disabled:this.state.quickSortDisabled,className:"btn hvr-sweep-to-right",onClick:function(){return e.quickSort()}},"Quick Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"heapSort",disabled:this.state.heapSortDisabled,className:"btn hvr-sweep-to-right",onClick:function(){return e.heapSort()}},"Heap Sort")),r.a.createElement("div",null,r.a.createElement("button",{id:"bubbleSort",disabled:this.state.bubbleSortDisabled,className:"btn hvr-sweep-to-right",onClick:function(){return e.bubbleSort()}},"Bubble Sort")),r.a.createElement("button",{className:"btn",style:{display:"None"},onClick:function(){return e.testSortingAlgorithms()}},"Test")),r.a.createElement("div",{className:"middle-sort"},r.a.createElement("h1",{style:{fontFamily:"Montserrat, sans-serif",background:"transparent",fontSize:"14px",margin:"0.4em 0"}},"Technologies:",r.a.createElement("span",{className:"txt-rotate","data-period":"1000","data-rotate":'[ " HTML5", " CSS3", " React", " Javascript" ]'})),r.a.createElement("div",{id:"bars",style:{position:"relative",height:"100%"}},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"#57a18b",height:"".concat(e,"px"),width:"5px",margin:"0px 1px",overflow:"hidden"}},r.a.createElement("div",{className:"tooltiptext"},e))}))),r.a.createElement("div",{id:"msg",style:{display:this.state.showmsg?"block":"None",position:"fixed",width:"500px",height:"100px",top:"50%",left:"50%",color:"gray",fontWeight:"bold",backgroundColor:"#fff",textAlign:"center",marginTop:"-100px",marginLeft:"-250px"}},"SPOILERS! BubbleSort is a bit slow --\x3e O(N^2)"))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Sorting Algorithms, Developed with React Framework. Written by Ashkan Bashiri."))))}}]),a}(r.a.Component);function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function g(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}a(94),a(95);var y=a(8),C=a(21);a(96);var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"particles-js"}),r.a.createElement("header",{style:E},r.a.createElement("h1",null,r.a.createElement(y.c,{className:"my-class",to:"/"},"Ashkan's React Application")),r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/sv"},"Sorting-Visualizer"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/covid_summary"},"Covid19-Summary"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/covid19"},"Covid19-Daily"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/leetcode"},"IslandFinder"," "),"|"," ",r.a.createElement(y.c,{className:"my-class",activeClassName:"active-link",to:"/ml"},"DataScience Projects"," ")))},S=(a(101),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Machine Learning Examples"),r.a.createElement("p",null,"Coming Soon ..."))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Machine Learning Algorithms, Developed with React Framework. Written by Ashkan Bashiri."))))}}]),a}(r.a.Component)),D=a(38),N=(a(102),a(29)),w=a(85),O=a(55),j=a.n(O),A=(a(74),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(e){n.setState({selectedCountry:e.value},(function(){var e=n.state.country_data.filter((function(e){return e.country==n.state.selectedCountry})),t={labels:e[0].dates,datasets:[{label:"#Confirmed",fill:!1,lineTension:.5,backgroundColor:"rgba(33,47,61,1)",borderColor:"rgba(33,47,61,1)",borderWidth:1,data:e[0].confirmed.map((function(t,a){return t-e[0].confirmed[a-1]||0}))},{label:"#Deaths",fill:!1,lineTension:.5,backgroundColor:"rgba(205,92,92,1)",borderColor:"rgba(205,92,92,1)",borderWidth:1,data:e[0].deaths.map((function(t,a){return t-e[0].deaths[a-1]||0}))},{label:"#Recovered",fill:!1,lineTension:.5,backgroundColor:"rgba(72,201,176,1)",borderColor:"rgba(72,201,176,1)",borderWidth:1,data:e[0].recovered.map((function(t,a){return t-e[0].recovered[a-1]||0}))}]},a=e[0].dates,r=[{label:"#Confirmed",fill:!1,lineTension:.5,backgroundColor:"rgba(33,47,61,1)",borderColor:"rgba(33,47,61,1)",borderWidth:1,data:e[0].confirmed},{label:"#Deaths",fill:!1,lineTension:.5,backgroundColor:"rgba(205,92,92,1)",borderColor:"rgba(205,92,92,1)",borderWidth:1,data:e[0].deaths},{label:"#Recovered",fill:!1,lineTension:.5,backgroundColor:"rgba(72,201,176,1)",borderColor:"rgba(72,201,176,1)",borderWidth:1,data:e[0].recovered}];n.setState({labels:a,datasets:r,bar_data:t},(function(){n.setState({labels:a,datasets:r,bar_data:t})}))}))},n.handleCountryChange=n.handleCountryChange.bind(Object(D.a)(n)),n.state={isLoading:!1,summary:[],countries:[],country_data:[],labels:[],datasets:[],selectedCountry:"",options:[],bar_data:{}},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){N.a.plugins.register(j.a)}},{key:"componentWillMount",value:function(){N.a.plugins.register(j.a)}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var t=[],a=["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "];fetch("https://api.covid19api.com/all").then((function(e){return e.json()})).then((function(n){var r=[],o=[];n.forEach((function(e){if(r.includes(e.Country)){var n=new Date(e.Date);o.filter((function(t){return t.country===e.Country}))[0].dates.includes(a[n.getMonth()]+n.getDate())?(""!==e.Province&&(o.filter((function(t){return t.country===e.Country}))[0].confirmed[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Confirmed,o.filter((function(t){return t.country===e.Country}))[0].deaths[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Deaths),o.filter((function(t){return t.country===e.Country}))[0].recovered[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Recovered,o.filter((function(t){return t.country===e.Country}))[0].active[o.filter((function(t){return t.country===e.Country}))[0].dates.indexOf(a[n.getMonth()]+n.getDate())]+=e.Active):(o.filter((function(t){return t.country===e.Country}))[0].confirmed.push(e.Confirmed),o.filter((function(t){return t.country===e.Country}))[0].deaths.push(e.Deaths),o.filter((function(t){return t.country===e.Country}))[0].recovered.push(e.Recovered),o.filter((function(t){return t.country===e.Country}))[0].active.push(e.Active),o.filter((function(t){return t.country===e.Country}))[0].dates.push(a[n.getMonth()]+n.getDate()))}else{r.push(e.Country);var s=new Date(e.Date);o.push({country:e.Country,confirmed:[e.Confirmed],deaths:[e.Deaths],recovered:[e.Recovered],active:[e.Active],dates:[a[s.getMonth()]+s.getDate()]}),t.push({value:e.Country,label:e.Country})}})),e.setState({options:t}),e.setState({countries:r}),e.setState({country_data:o}),e.setState({isLoading:!1}),console.log(o)}))}},{key:"rnd_range",value:function(e,t){return Math.random()*(t-e)+e}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("p",null,"Fetching Covid-19 data..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Covid19 Tracker App")),r.a.createElement("p",{className:"label"},"Select a Country (Daily Updates):"),r.a.createElement("div",{className:"selector1"},r.a.createElement(w.a,{onChange:this.handleCountryChange,options:this.state.options,autoFocus:!0})),r.a.createElement("div",{className:"middle"},r.a.createElement(N.b,{data:this.state,options:{maintainAspectRatio:!0,responsive:!0,title:{display:!0,text:"Statistics for "+this.state.selectedCountry,fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{ticks:{autoSkip:!0,maxRotation:0,minRotation:0}}]},pan:{enabled:!0,mode:"xy"},zoom:{sensitivity:.5,drag:!1,enabled:!0,mode:"x"}}}),r.a.createElement("br",null),r.a.createElement(N.b,{ref:this.chartReference,data:this.state.bar_data,options:{maintainAspectRatio:!0,responsive:!0,title:{display:!0,text:"Daily statistics for "+this.state.selectedCountry,fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{ticks:{autoSkip:!0,maxRotation:0,minRotation:0}}]},pan:{enabled:!0,mode:"xy"},zoom:{sensitivity:.5,drag:!1,enabled:!0,mode:"x"}}})),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Covid19 data, Developed with React Framework. Written by Ashkan Bashiri.")))))}}]),a}(r.a.Component)),x=0,R=0,_=[],M=0;function T(e){var t;return t=function(e){var t=0;if(0==(x=e.length))return 0;R=e[0].length;for(var a=0;a<x;a++)for(var n=0;n<R;n++)"1"==e[a][n]&&(B(e,a,n),++t,M+=1);return t}(e),[_,t]}function B(e,t,a){t<0||a<0||t>=x||a>=R||"1"!=e[t][a]||(e[t][a]="0",_.push([t,a,M]),B(e,t+1,a),B(e,t-1,a),B(e,t,a+1),B(e,t,a-1))}a(195);var F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);for(var r=[],o=0;o<10;o++){for(var s=[],i=0;i<20;i++)s.push(Math.floor(2*Math.random()).toString());r.push(s)}return n.state={array:r,animation_speed:50,n_islands:"???",islandFinderDisabled:!1,resetButtonDisabled:!1},n}return Object(c.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"disableResetButton",value:function(){var e=this;this.setState({resetButtonDisabled:!0,islandFinderDisabled:!0},(function(){return e.setState({resetButtonDisabled:!0,islandFinderDisabled:!0})}))}},{key:"enbleResetButton",value:function(){this.setState({resetButtonDisabled:!1,islandFinderDisabled:!1})}},{key:"islandFinder",value:function(){var e=this;this.disableResetButton();for(var t=[],a=0;a<10;a++){for(var n=[],r=0;r<20;r++)n.push(this.state.array[a][r]);t.push(n)}var o=T(t),s=Object(i.a)(o,2),l=s[0],c=s[1];console.log(this.state.array),this.setState({n_islands:c.toString().concat(" Each island is in a different color.")});for(var u=[],d=0;d<c;d++)u.push(this.getRandomColor());for(var m=function(t){var a=document.getElementsByClassName("node"),n=Object(i.a)(l[t],3),r=n[0],o=n[1],s=n[2];setTimeout((function(){a[20*r+o].classList.add("checked"),a[20*r+o].style.backgroundColor=u[s],t==l.length-1&&e.enbleResetButton()}),t*e.state.animation_speed)},h=0;h<l.length;h++)m(h)}},{key:"resetArray",value:function(){for(var e=document.getElementsByClassName("node"),t=[],a=0;a<10;a++){for(var n=[],r=0;r<20;r++)n.push(Math.floor(2*Math.random()).toString()),"1"==n[r]?e[20*a+r].style.backgroundColor="#333":e[20*a+r].style.backgroundColor="#eee",e[20*a+r].classList.remove("checked");t.push(n)}this.setState({array:t,n_islands:"???"})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn hvr-sweep-to-right",onClick:function(){return e.islandFinder()},disabled:this.state.islandFinderDisabled},"Find Islands"),r.a.createElement("button",{className:"btn hvr-sweep-to-right",onClick:function(){return e.resetArray()},disabled:this.state.resetButtonDisabled},"Reset Array")),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},this.state.array.map((function(e,t){return e.map((function(e,t){return r.a.createElement("div",{className:"node",key:t,style:{backgroundColor:"1"==e?"#333 ":"#eee",color:"1"==e?"white":"black"}},r.a.createElement("p",null,r.a.createElement("strong",null,e)))}))}))),r.a.createElement("hr",null),r.a.createElement("h1",null,"Number of Islands : ",this.state.n_islands))}}]),a}(r.a.Component),z=(a(196),a(86)),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={columns:[{label:"Country",field:"name",sort:"asc",width:150},{label:"totalConfirmed",field:"totalConfirmed",sort:"desc",width:100},{label:"newConfirmed",field:"newConfirmed",sort:"desc",width:100},{label:"totalDeaths",field:"totalDeaths",sort:"desc",width:100},{label:"newDeaths",field:"newDeaths",sort:"desc",width:100},{label:"totalRecovered",field:"totalRecovered",sort:"desc",width:100},{label:"newRecovered",field:"newRecovered",sort:"desc",width:100},{label:"lastUpdate",field:"lastUpdate",sort:"desc",width:150}],rows:[]};fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){var n={name:"Global",totalConfirmed:a.Global.TotalConfirmed,newConfirmed:a.Global.NewConfirmed,totalDeaths:a.Global.TotalDeaths,newDeaths:a.Global.NewDeaths,totalRecovered:a.Global.TotalRecovered,newRecovered:a.Global.NewRecovered,lastUpdate:""};t.rows.push(n),a.Countries.forEach((function(e){var a={name:e.Country,totalConfirmed:e.TotalConfirmed,newConfirmed:e.NewConfirmed,totalDeaths:e.TotalDeaths,newDeaths:e.NewDeaths,totalRecovered:e.TotalRecovered,newRecovered:e.NewRecovered,lastUpdate:e.Date};t.rows.push(a)})),e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container-summary"},r.a.createElement("div",{className:"header-summary"},r.a.createElement("h1",null,"Covid19 Summary Table")),r.a.createElement("div",{className:"middle-summary"},r.a.createElement(z.c,{striped:!0,responsive:!0,hover:!0,data:this.state.data})),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Visualizing Covid19 data, Developed with React Framework. Written by Ashkan Bashiri.")))))}}]),a}(r.a.Component);a(218);var W=function(){var e=Object(n.useState)("light"),t=Object(i.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),o=Object(i.a)(a,2);return o[0],o[1],r.a.createElement("div",{className:"App"},r.a.createElement("script",{type:"text/javascript",src:"./particles.js"}),r.a.createElement(y.a,null,r.a.createElement(k,null),r.a.createElement(C.a,{exact:!0,path:"/",component:v}),r.a.createElement(C.a,{path:"/sv",component:v}),r.a.createElement(C.a,{path:"/ml",component:S}),r.a.createElement(C.a,{path:"/covid19",component:A}),r.a.createElement(C.a,{path:"/covid_summary",component:L}),r.a.createElement(C.a,{path:"/leetcode",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(219),a(220);s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a(221)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.fb84731f.chunk.js.map