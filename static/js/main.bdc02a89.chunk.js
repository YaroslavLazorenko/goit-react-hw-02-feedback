(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={title:"Statistics_title__3xDPN",description:"Statistics_description__1_Fhk",value:"Statistics_value__3WtUL"}},,,,,,function(e,t,n){e.exports={title:"FeedbackOptions_title__3flIz",button:"FeedbackOptions_button__3eDiP"}},,,function(e,t,n){e.exports={description:"Notification_description__1L_Lt"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),o=(n(16),n(10)),r=n(3),l=n(4),u=n(6),d=n(5),b=(n(17),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(b.jsx)("section",{children:e})}}]),n}(a.Component),p=j,h=n(8),O=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:O.a.title,children:"Please leave feedback"}),t.map((function(e){return Object(b.jsx)("button",{className:O.a.button,onClick:function(){n(e)},children:e},e)}))]})}}]),n}(a.Component),v=f,x=n(11),m=n.n(x),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(b.jsx)("p",{className:m.a.description,children:e})}}]),n}(a.Component),g=k,N=n(2),_=n.n(N),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:_.a.title,children:"Statistics"}),Object(b.jsxs)("p",{className:_.a.description,children:["Good:",Object(b.jsx)("span",{className:_.a.value,children:t})]}),Object(b.jsxs)("p",{className:_.a.description,children:["Neutral:",Object(b.jsx)("span",{className:_.a.value,children:n})]}),Object(b.jsxs)("p",{className:_.a.description,children:["Bad:",Object(b.jsx)("span",{className:_.a.value,children:a})]}),Object(b.jsxs)("p",{className:_.a.description,children:["Total:",Object(b.jsx)("span",{className:_.a.value,children:c})]}),!isNaN(s)&&Object(b.jsxs)("p",{className:_.a.description,children:["Positive feedback:",Object(b.jsxs)("span",{className:_.a.value,children:[s,"%"]})]})]})}}]),n}(a.Component),y=F,P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t.toLowerCase(),e[t.toLowerCase()]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(p,{children:[Object(b.jsx)("h1",{children:"Welcome to feedback statistics application!"}),Object(b.jsx)(v,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.onLeaveFeedback}),0===this.countTotalFeedback()?Object(b.jsx)(g,{message:"There is no feedback"}):Object(b.jsx)(y,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})})}}]),n}(a.Component),C=P,L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),L()}],[[19,1,2]]]);
//# sourceMappingURL=main.bdc02a89.chunk.js.map