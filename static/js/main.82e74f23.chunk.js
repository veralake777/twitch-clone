(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n(250)},250:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(55),c=n.n(i),s=n(12),o=n(110),u=n(11),l=n(19),m=n(32),p=n(2),d=n(1),h=n(8),f=n(6),b=n(9),v=n(23),E=n.n(v),y=n(39),g=n(111),S=n.n(g).a.create({baseURL:"https://VeraButler.github.io/twitch-clone/#"}),O=function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},j=n(252),k=n(251),I=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).renderInput=function(e){var t=e.input,a=e.label,i=e.meta,c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(i))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(j.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(j.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.a.Component),N=Object(k.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(I),w=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a Stream"),r.a.createElement(N,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),C=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.post("/streams",e);case 2:a=t.sent,n({type:"CREATE_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(w),A=n(59),T=n.n(A),_=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(N,{initialValues:T.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),D=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:O,editStream:function(e,t){return function(){var n=Object(y.a)(E.a.mark(function n(a){var r;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.put("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data});case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(_),R=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},x=n(112),M=n.n(x)()(),U=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui button negative"},"Delete"),r.a.createElement(l.b,{to:"/",className:"ui button"},"Cancel"))}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream with title: ".concat(this.props.stream.title):"Are you sure you want to delete this stream?"}},{key:"render",value:function(){return r.a.createElement(R,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return M.push("/")}})}}]),t}(r.a.Component),L=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:O,deleteStream:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.delete("streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(U),P=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(l.b,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(l.b,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(l.b,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description)))})}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(l.b,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.a.Component),q=Object(s.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(y.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(P),F=n(114),G=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).videoRef=r.a.createRef(),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=F.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){if(!this.props.stream)return r.a.createElement("div",null,"Loading...");var e=this.props.stream,t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),r.a.createElement("h1",null,t),r.a.createElement("h5",null,n))}}]),t}(r.a.Component),H=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:O})(G),B=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"904891345469-d4bnd4ce6nvgqklsh0kpqqeqeuvst1u7.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),V=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(B),J=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(l.b,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(l.b,{to:"/",className:"item"},"All Streams"),r.a.createElement(V,null)))},X=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{history:M},r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:q}),r.a.createElement(m.a,{path:"/streams/new",exact:!0,component:C}),r.a.createElement(m.a,{path:"/streams/edit/:id",exact:!0,component:D}),r.a.createElement(m.a,{path:"/streams/delete/:id",exact:!0,component:L}),r.a.createElement(m.a,{path:"/streams/:id",exact:!0,component:H})))))},Y=n(253),W=n(29),z={isSignedIn:null,userId:null},K=n(38),Q=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(W.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(W.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:Y.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(W.a)({},e,Object(K.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return T.a.omit(e,t.payload);case"FETCH_STREAMS":return Object(W.a)({},e);default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,$=Object(u.e)(Q,Z(Object(u.a)(o.a)));c.a.render(r.a.createElement(s.a,{store:$},r.a.createElement(X,null)),document.querySelector("#root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.82e74f23.chunk.js.map