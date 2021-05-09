(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},152:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(48),r=n.n(a),o=(n(148),n(30)),s=(n(149),n(150),n(180)),l=n(181),j=n(175),d=n(132),b=n(131),u=[],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return JSON.parse(localStorage.getItem("localCart"))||e},O=function(e,t){switch(t.type){case"ADD_TO_CART":return[].concat(Object(b.a)(e),[Object(d.a)({},t.item)]);case"REMOVE_FROM_CART":return e.filter((function(e){return e!==t.item}));case"CLEAR_CART":return localStorage.removeItem("localCart"),u;default:return e}},x=n(5),m=Object(c.createContext)(),g=function(e){var t=e.children,n=Object(c.useReducer)(O,[],h),i=Object(o.a)(n,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){localStorage.setItem("localCart",JSON.stringify(a))}),[a]),Object(x.jsx)(m.Provider,{value:{cart:a,dispatch:r},children:t})},f=n(178),v=n(74),p=(n(152),function(e){var t=e.toggle;return Object(x.jsxs)(s.a,{columns:2,className:"header",children:[Object(x.jsx)(s.a.Column,{floated:"left",children:Object(x.jsx)("img",{src:"shoppies-logo.png",alt:"logo",className:"logo"})}),Object(x.jsx)(s.a.Column,{floated:"right",children:Object(x.jsx)("div",{children:Object(x.jsxs)(f.a,{icon:!0,labelPosition:"right",animated:"vertical",floated:"right",size:"large",onClick:function(e,n){t()},style:{backgroundColor:"#084c44",color:"white",padding:"10px"},children:["Your Nominations",Object(x.jsx)(v.a,{name:"heart"})]})})})]})}),C=n(174),y=n(177),k=n(176),N=(n(159),function(e){var t=e.movies,n=e.toggle,i=Object(c.useContext)(m),a=i.cart,r=i.dispatch,s=Object(c.useState)(!1),l=Object(o.a)(s,2),j=l[0],d=l[1],b=Object(c.useState)(),u=Object(o.a)(b,2),h=u[0],O=u[1];return Object(x.jsxs)("div",{children:[t.length>0?Object(x.jsxs)("p",{children:["Showing the top ",t.length," results"]}):null,Object(x.jsx)(y.a.Group,{centered:"true",className:"movies",children:t.map((function(e){var t=a.filter((function(t){return t.Title===e.Title})).length>0;return Object(x.jsxs)(y.a,{style:{width:"200px"},children:["N/A"===e.Poster?Object(x.jsx)("div",{className:"poster-not-found",children:"Poster not found"}):Object(x.jsx)("img",{src:e.Poster,className:"poster"}),Object(x.jsxs)(y.a.Content,{children:[Object(x.jsx)(y.a.Header,{children:e.Title}),Object(x.jsx)(y.a.Meta,{children:Object(x.jsx)("span",{className:"date",children:e.Year})}),Object(x.jsx)(y.a.Description,{children:e.Plot})]}),Object(x.jsxs)(f.a,{animated:"vertical",disabled:t,onClick:function(){return function(e){if(4==a.length)O("You have successfully nominated 5 movies."),d(!0);else if(a.length>=5)return O("You have nominated 5 movies already! If you'd like to add another, please remove an existing one."),void d(!0);r({type:"ADD_TO_CART",item:e})}(e)},style:{backgroundColor:"#084c44",color:"white"},children:[Object(x.jsx)(f.a.Content,{hidden:!0,children:"Nominate"}),t?Object(x.jsx)(f.a.Content,{visible:!0,children:"Nominated"}):Object(x.jsx)(f.a.Content,{visible:!0,children:Object(x.jsx)(v.a,{name:"heart"})})]})]})}))}),Object(x.jsxs)(k.a,{size:"small",open:j,onClose:function(){return d(!1)},children:[Object(x.jsx)(k.a.Header,{children:"Your 5 movies have been nominated!"}),Object(x.jsx)(k.a.Content,{children:h}),Object(x.jsxs)(k.a.Actions,{children:[Object(x.jsx)(f.a,{onClick:function(){return d(!1)},children:"Close"}),Object(x.jsx)(f.a,{onClick:function(){d(!1),n()},children:"View Nominations"})]})]})]})}),S=(n(160),function(e){var t=e.toggle,n=Object(c.useState)(!1),i=Object(o.a)(n,2),a=i[0],r=i[1],s=Object(c.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1],b=Object(c.useState)(""),u=Object(o.a)(b,2),h=u[0],O=u[1];return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("h1",{children:"Find your favourite movies to nominate"}),Object(x.jsx)(C.a,{onSubmit:function(e){e.preventDefault(),r(!0),fetch("https://www.omdbapi.com/?s=".concat(h,"&type=movie&apikey=91b0581c")).then((function(e){return e.json()})).then((function(e){d(e.Search),r(!1)}))},loading:a,className:"searchbar",children:Object(x.jsx)(C.a.Input,{action:Object(x.jsx)(f.a,{color:"teal",icon:"search",type:"submit",style:{backgroundColor:"#084c44"}}),actionPosition:"right",placeholder:"Search for a Movie...",value:h,onChange:function(e){O(e.target.value)},size:"large"})}),Object(x.jsx)("br",{}),j?Object(x.jsx)(N,{movies:j,toggle:t}):Object(x.jsx)("div",{children:"Sorry! No results were found."})]})}),w=function(){var e=Object(c.useContext)(m),t=e.cart,n=e.dispatch;return Object(x.jsx)(y.a.Group,{centered:!0,children:t.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsxs)(y.a,{style:{width:"200px",backgroundColor:"#fcfcec"},children:[Object(x.jsxs)(y.a.Content,{children:[Object(x.jsx)(y.a.Header,{children:e.Title}),Object(x.jsx)(y.a.Meta,{children:Object(x.jsx)("span",{className:"date",children:e.Year})})]}),Object(x.jsxs)(f.a,{animated:"vertical",onClick:function(){return n({type:"REMOVE_FROM_CART",item:e})},style:{backgroundColor:"#e6e6d5"},children:[Object(x.jsx)(f.a.Content,{hidden:!0,children:"Remove"}),Object(x.jsx)(f.a.Content,{visible:!0,children:Object(x.jsx)(v.a,{name:"trash"})})]})]})]})}))})},R=n(173),A=function(e){var t=e.toggle,n=Object(c.useContext)(m),i=n.cart,a=n.dispatch;return Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a,{icon:!0,onClick:t,size:"huge",style:{backgroundColor:"inherit",margin:"20px"},children:Object(x.jsx)(v.a,{name:"x"})}),Object(x.jsx)(R.a,{}),Object(x.jsx)(f.a,{disabled:0==i.length,onClick:function(e){a({type:"CLEAR_CART"})},style:{width:"200px",backgroundColor:"#fcfcec"},children:"Clear All Nominations"}),Object(x.jsx)(R.a,{}),Object(x.jsx)(w,{})]})};var T=function(){var e=Object(c.useContext)(m),t=(e.cart,e.dispatch,Object(c.useState)(!1)),n=Object(o.a)(t,2),i=n[0],a=n[1];function r(){a(!i)}return Object(x.jsx)("div",{children:Object(x.jsx)(s.a,{columns:1,children:Object(x.jsx)(s.a.Column,{children:Object(x.jsxs)(l.a.Pushable,{children:[Object(x.jsx)(l.a,{as:j.a,animation:"overlay",direction:"right",icon:"labeled",inverted:!0,onHide:function(){return a(!1)},vertical:!0,visible:i,width:"large",style:{backgroundColor:"#084c44"},children:Object(x.jsx)(A,{toggle:r})}),Object(x.jsx)(l.a.Pusher,{dimmed:i,children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(s.a,{children:Object(x.jsxs)(s.a.Column,{children:[Object(x.jsx)(s.a.Row,{children:Object(x.jsx)(p,{toggle:r})}),Object(x.jsx)(s.a.Row,{children:Object(x.jsx)(S,{toggle:r})})]})})})})]})})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(161);r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(g,{children:Object(x.jsx)(T,{})})}),document.getElementById("root")),P()}},[[162,1,2]]]);
//# sourceMappingURL=main.10b37f5b.chunk.js.map