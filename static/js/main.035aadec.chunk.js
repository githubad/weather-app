(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},52:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(7),u=a(3),i=a(29),s=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);var m=a(4),h=a(5),p=a(8),d=a(6),f=a(9),b=a(30),E=a.n(b),v="https://api.openweathermap.org/data/2.5/forecast?appid=".concat("6f6010ab4f2af6f2280bc441a6070872"),y="FETCH_WEATHER";function g(e){var t="".concat(v,"&q=").concat(e,",us"),a=E.a.get(t).then(function(e){return e}).catch(function(e){return e.response});return console.log("Request:",a),{type:y,payload:a}}var j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onInputChange=function(e){return a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.fetchWeather(a.state.term),a.setState({term:""})},a.state={term:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"input-group"},r.a.createElement("input",{placeholder:"Get a five-day forecast in your favorite cities of United States.",className:"form-control",onChange:this.onInputChange,value:this.state.term}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit")))}}]),t}(n.Component);var O=Object(o.b)(null,function(e){return Object(u.b)({fetchWeather:g},e)})(j),w=a(10),k=a.n(w),S=a(12),C=function(e){return r.a.createElement("div",null,r.a.createElement(S.Sparklines,{height:80,width:80,data:e.data},r.a.createElement(S.SparklinesLine,{color:e.color}),r.a.createElement(S.SparklinesReferenceLine,{type:"avg"})),r.a.createElement("div",null,(t=e.data,k.a.round(k.a.sum(t)/t.length))," ",e.units));var t},W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={term:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"renderWeather",value:function(e){if("404"!==e.cod){var t=e.city.name,a=k.a.map(e.list.map(function(e){return e.main.temp}),function(e){return e-273}),n=e.list.map(function(e){return e.main.pressure}),c=e.list.map(function(e){return e.main.humidity});return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(C,{data:a,color:"orange",units:"C"})),r.a.createElement("td",null,r.a.createElement(C,{data:n,color:"gray",units:"hPa"})),r.a.createElement("td",null,r.a.createElement(C,{data:c,color:"green",units:"%"})))}return r.a.createElement("p",null,"Please enter a valid state within US")}},{key:"render",value:function(){return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Temprature(C)"),r.a.createElement("th",null,"Pressure (hPa)"),r.a.createElement("th",null,"Humidity(%)"))),r.a.createElement("tbody",null,this.props.weather.map(this.renderWeather)))}}]),t}(n.Component);var N=Object(o.b)(function(e){return{weather:e.weather}})(W),P=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(N,null))}}]),t}(n.Component),F=a(31),H=Object(u.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[t.payload.data].concat(Object(F.a)(e));default:return e}}}),I=Object(u.a)(s.a)(u.d);l.a.render(r.a.createElement(o.a,{store:I(H)},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.035aadec.chunk.js.map