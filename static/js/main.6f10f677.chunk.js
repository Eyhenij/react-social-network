(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,s){e.exports={contacts__page:"contacts_contacts__page__3ZpEu",community__item:"contacts_community__item__wsYvw",item__description:"contacts_item__description__2T5NL",item__name:"contacts_item__name__2oLLK",avatarCapture:"contacts_avatarCapture__2LqI6",selectedPage:"contacts_selectedPage__3cNYI",pageNumber:"contacts_pageNumber__3rD0M"}},19:function(e,t,s){e.exports={menu:"header_menu__3XOvN",item:"header_item__2ourn",item_active:"header_item_active__3ligU",loginBlock:"header_loginBlock__V4w1S",list:"header_list__1Zbdx"}},20:function(e,t,s){e.exports={community:"messages_community__RuPoA",community__item:"messages_community__item__2AHpz",messages:"messages_messages__2wORp",avatarCapture:"messages_avatarCapture__N5HYT",item__name:"messages_item__name__2umqE",active:"messages_active__31G_i"}},25:function(e,t,s){e.exports={page:"App_page___ohDJ",page__header:"App_page__header__nlZ3U",page__sidebar:"App_page__sidebar__FqZcm",page__profile:"App_page__profile__1vtlW",page__content:"App_page__content__2I6tP"}},26:function(e,t,s){e.exports={profile__img:"profileinfo_profile__img__1zLdn",profileInfo:"profileinfo_profileInfo__2PLL0",photos__small:"profileinfo_photos__small__1Bzcl",photos__large:"profileinfo_photos__large__2C_Q_"}},27:function(e,t,s){e.exports={post__item:"myPosts_post__item__ow4aV",post__text:"myPosts_post__text__2gKSY",button:"myPosts_button__E0RLG"}},29:function(e,t,s){e.exports={list__item:"listItem_list__item__3Xi_g",item__description:"listItem_item__description__1P_0y",item__input:"listItem_item__input__1Bgc4"}},35:function(e,t,s){e.exports={profile:"profile_profile__1lJO8",profile__posts:"profile_profile__posts__1a1PD"}},46:function(e,t,s){e.exports={item:"news_item__2u6gy"}},47:function(e,t,s){e.exports={item:"settings_item__3PIdc"}},54:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},7:function(e,t,s){e.exports={sidebar:"sidebar_sidebar__1FYwt",item:"sidebar_item__1GsmI",active:"sidebar_active__9ZPYm"}},83:function(e,t,s){e.exports={ld:"preloader_ld__2xUg0","ldio-jz13tm5oo6k":"preloader_ldio-jz13tm5oo6k__1FTYq",loading:"preloader_loading__2n_Lh"}},84:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),i=s.n(n),r=s(28),c=s.n(r),o=(s(54),s(23)),l=s(22),d=s(2),u="ADD-MESSAGE",p="UPDATE-NEW-MESSAGE-TEXT",j={arrMessages:[{id:0,message:"Hi! How are you?"},{id:1,message:"Hello"},{id:2,message:"What are you doing?"},{id:3,message:"How is your study?"}],newMessageText:"",arrCommunity:[{id:1,name:"Max",avatar:"https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"},{id:2,name:"Olga",avatar:"https://cdn1.iconfinder.com/data/icons/users-avatars-2/128/girl_avatar_4-512.png"},{id:3,name:"Peter",avatar:"https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/02-512.png"},{id:4,name:"John",avatar:"https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var s={id:e.arrMessages.length,message:e.newMessageText};return Object(d.a)(Object(d.a)({},e),{},{arrMessages:[].concat(Object(l.a)(e.arrMessages),[s]),newMessageText:""});case p:return Object(d.a)(Object(d.a)({},e),{},{newMessageText:t.updateMessage});default:return e}},_={headerItems:["item1","item2","item3","item4"]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},b={sidebarItems:["item1","item2","item3","item4"]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e},O="ADD-TASK",f="UPDATE-NEW-TASK-TEXT",x={arrListData:[{id:0,description:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d",completed:!1},{id:1,description:"\u041f\u043e\u043c\u044b\u0442\u044c \u043a\u043e\u0442\u0430",completed:!1},{id:2,description:"\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",completed:!1},{id:3,description:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e",completed:!1},{id:4,description:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c 100 \u043b\u0435\u043a\u0446\u0438\u0439 \u043f\u043e react",completed:!1}],newTaskText:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var s={id:e.arrListData.length,description:e.newTaskText,completed:!1};return Object(d.a)(Object(d.a)({},e),{},{arrListData:[].concat(Object(l.a)(e.arrListData),[s]),newTaskText:""});case f:return Object(d.a)(Object(d.a)({},e),{},{newTaskText:t.updateTask});default:return e}},P="SHOW-MORE",w="FOLLOW",T="UNFOLLOW",N="SET-USERS",C="SET-CURRENT-PAGE",y="SET-TOTAL-USERS-COUNT",k="TOGGLE-IS-FETCHING",U={arrUsers:[],pageSize:7,totalUsersCount:null,currentPage:1,isFetching:!0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{arrUsers:e.arrUsers.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case T:return Object(d.a)(Object(d.a)({},e),{},{arrUsers:e.arrUsers.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case N:return Object(d.a)(Object(d.a)({},e),{},{arrUsers:t.users});case P:return e;case C:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case y:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});default:return e}},A="SET-USER-PROFILE",E="ADD-POST",I="UPDATE-NEW-POST-TEXT",M={arrPosts:[{id:0,likesCounte:15,post:"Hi! How are you?"},{id:1,likesCounte:12,post:"This is my first post"},{id:2,likesCounte:9,post:"blablabla"},{id:3,likesCounte:33,post:"ahhrrrr"}],newPostText:"",profile:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var s={id:e.arrPosts.length,likesCounte:0,post:e.newPostText};return Object(d.a)(Object(d.a)({},e),{},{arrPosts:[].concat(Object(l.a)(e.arrPosts),[s]),newPostText:""});case I:return Object(d.a)(Object(d.a)({},e),{},{newPostText:t.postText});case A:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});default:return e}},F="SET-USER-DATA",L={userId:null,login:null,email:null,isAuth:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.newData),{},{isAuth:!0});default:return e}},R=Object(o.b)({profilePage:D,messagesPage:m,headerItems:h,sidebarItems:g,tasksPage:v,contactsPage:S,auth:z}),G=Object(o.c)(R);window.store=G;var H=G,Y=s(25),K=s.n(Y),W=s(7),J=s.n(W),q=s(5),B=function(){return Object(a.jsxs)("div",{className:J.a.sidebar,children:[Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/profile",children:"Profile"})}),Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/contacts",children:"Contacts"})}),Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/messages",children:"Messages"})}),Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/tasks",children:"Tasks"})}),Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/news",children:"News"})}),Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{className:J.a.item,activeClassName:J.a.active,to:"/settings",children:"Settings"})})]})},X=s(46),Z=s.n(X),Q=function(){return Object(a.jsx)("div",{className:Z.a.item,children:"There are my news"})},V=s(47),$=s.n(V),ee=function(){return Object(a.jsx)("div",{className:$.a.item,children:"There are my Settings"})},te=s(4),se=s(14),ae=s(15),ne=s(17),ie=s(16),re=s(11),ce=s(20),oe=s.n(ce),le=s.p+"static/media/avatar.21d32664.webp",de=function(e){return Object(a.jsxs)("div",{className:oe.a.community,children:[Object(a.jsx)("div",{className:oe.a.community__item,children:e.messagesPage.arrCommunity.map((function(e){return Object(a.jsx)("span",{children:Object(a.jsx)("div",{children:Object(a.jsxs)(q.b,{className:oe.a.item__name,activeClassName:oe.a.active,to:"/messages/".concat(e.id),children:[Object(a.jsx)("img",{className:oe.a.avatarCapture,src:null!=e.avatar?e.avatar:le,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),e.name]})})},e.id)}))}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:oe.a.messages,children:e.messagesPage.arrMessages.map((function(e){return Object(a.jsx)("div",{children:e.message},e.id)}))}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{value:e.messagesPage.newMessageText,placeholder:"please, enter your message",onChange:function(t){e.updateNewMessageText(t.target.value)}})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return e.addMessage()},children:"Send message"})})]})]})},ue=function(e){Object(ne.a)(s,e);var t=Object(ie.a)(s);function s(e){return Object(se.a)(this,s),t.call(this,e)}return Object(ae.a)(s,[{key:"render",value:function(){return Object(a.jsx)(de,{messagesPage:this.props.messagesPage,addMessage:this.props.addMessage,updateNewMessageText:this.props.updateNewMessageText})}}]),s}(i.a.Component),pe=Object(re.b)((function(e){return{messagesPage:e.messagesPage}}),{addMessage:function(){return{type:u}},updateNewMessageText:function(e){return{type:p,updateMessage:e}}})(ue),je=(s(64),s(65),s(29)),me=s.n(je),_e=function(e){return Object(a.jsxs)("div",{className:me.a.list__item,children:[Object(a.jsx)("div",{className:me.a.item__description,children:e.description}),Object(a.jsx)("div",{className:me.a.item__input,children:Object(a.jsx)("input",{type:"checkbox",defaultChecked:e.completed})})]})},he=function(e){var t=e.arrListData.map((function(e){return Object(a.jsx)(_e,{description:e.description,completed:e.completed},e.id)}));return Object(a.jsx)("div",{children:t})},be=function(e){return Object(a.jsxs)("div",{className:"list",children:[Object(a.jsx)("div",{className:"list__item",children:Object(a.jsx)(he,{arrListData:e.tasksPage.arrListData})}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{value:e.tasksPage.newTaskText,placeholder:"please, enter your message",onChange:function(t){var s=t.target.value;e.updateNewTaskText(s)}})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){e.addTask()},children:"Add task"})})]})},ge=Object(re.b)((function(e){return{tasksPage:e.tasksPage}}),(function(e){return{addTask:function(){e({type:O})},updateNewTaskText:function(t){e(function(e){return{type:f,updateTask:e}}(t))}}}))(be),Oe=s(13),fe=(s(83),s.p+"static/media/loading.b5e6e4d8.svg"),xe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:fe,alt:"loading"})})},ve=s(18),Pe=s.n(ve),we=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(a.jsxs)("div",{className:Pe.a.contacts__page,children:[Object(a.jsx)("div",{children:s.map((function(t){return Object(a.jsx)("span",{onClick:function(){return e.onPageChanged(t)},className:e.currentPage===t?Pe.a.selectedPage:Pe.a.pageNumber,children:t})}))}),e.arrUsers.map((function(t){return Object(a.jsxs)("div",{className:Pe.a.community__item,children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(q.b,{to:"/profile/".concat(t.id),children:Object(a.jsx)("img",{className:Pe.a.avatarCapture,src:null!=t.photos.small?t.photos.small:le,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})})}),Object(a.jsx)("div",{children:t.followed?Object(a.jsx)("button",{onClick:function(){Oe.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{withCredentials:!0,headers:{"API-KEY":"b18ec17b-1437-4ed0-a09c-9d0b79b953c9"}}).then((function(s){0==s.data.resultCode&&e.unFollow(t.id)}))},children:"Unfollow"}):Object(a.jsx)("button",{onClick:function(){Oe.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{},{withCredentials:!0,headers:{"API-KEY":"b18ec17b-1437-4ed0-a09c-9d0b79b953c9"}}).then((function(s){0==s.data.resultCode&&e.follow(t.id)}))},children:"Follow"})})]}),Object(a.jsxs)("span",{className:Pe.a.item__description,children:[Object(a.jsx)("div",{className:Pe.a.item__name,children:t.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:t.status}),Object(a.jsxs)("p",{children:["id:",t.id]})]})]})]},t.id)}))]})},Te=function(e){Object(ne.a)(s,e);var t=Object(ie.a)(s);function s(e){var a;return Object(se.a)(this,s),(a=t.call(this,e)).onPageChanged=function(e){a.props.setCurrentPage(e),a.props.toggleIsFetching(!0),Oe.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(a.props.pageSize),{withCredentials:!0}).then((function(e){a.props.toggleIsFetching(!1),a.props.setUsers(e.data.items)}))},a}return Object(ae.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),Oe.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize),{withCredentials:!0}).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:this.props.isFetching?Object(a.jsx)(xe,{}):null}),Object(a.jsx)(we,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,arrUsers:this.props.arrUsers,onPageChanged:this.onPageChanged,follow:this.props.follow,unFollow:this.props.unFollow})]})}}]),s}(i.a.Component),Ne=Object(re.b)((function(e){return{arrUsers:e.contactsPage.arrUsers,pageSize:e.contactsPage.pageSize,totalUsersCount:e.contactsPage.totalUsersCount,currentPage:e.contactsPage.currentPage,isFetching:e.contactsPage.isFetching}}),{showContacts:function(){return{type:P}},follow:function(e){return{type:w,userId:e}},unFollow:function(e){return{type:T,userId:e}},setUsers:function(e){return{type:N,users:e}},setCurrentPage:function(e){return{type:C,currentPage:e}},setTotalUsersCount:function(e){return{type:y,totalUsersCount:e}},toggleIsFetching:function(e){return{type:k,isFetching:e}}})(Te),Ce=s(35),ye=s.n(Ce),ke=s(26),Ue=s.n(ke),Se=function(e){return e.profile?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:Ue.a.profileInfo,children:[Object(a.jsx)("img",{className:Ue.a.photos__small,src:e.profile.photos.small?e.profile.photos.small:le,alt:"photos.small"}),e.profile.fullName]}),Object(a.jsxs)("div",{className:Ue.a.profileInfo,children:[Object(a.jsx)("img",{className:Ue.a.photos__large,src:e.profile.photos.large,alt:"photos.large"}),"contacts: ",e.profile.contacts.github]})]}):Object(a.jsx)(xe,{})},Ae=s(27),Ee=s.n(Ae),Ie=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{value:e.newPostText,placeholder:"please, enter your message",onChange:function(t){e.updateNewPostText(t.target.value)}})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:Ee.a.button,onClick:function(){return e.addPost()},children:"Add post"})}),Object(a.jsx)("div",{children:e.arrPosts.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:Ee.a.post__item,children:[Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrsa7JI0Kur9LTDnCQ-N3ctRlKSJ9zzbOFw&usqp=CAU",alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(a.jsx)("span",{className:Ee.a.post__text,children:e.post})]}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{className:Ee.a.button,name:"like",children:"Like (".concat(e.likesCounte,")")})})]},e.id)}))})]})},Me=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:ye.a.profile,children:Object(a.jsx)(Se,{profile:e.profile})}),Object(a.jsx)("div",{className:ye.a.profile__posts,children:Object(a.jsx)(Ie,{newPostText:e.newPostText,arrPosts:e.arrPosts,addPost:e.addPost,updateNewPostText:e.updateNewPostText})})]})},De=function(e){Object(ne.a)(s,e);var t=Object(ie.a)(s);function s(e){return Object(se.a)(this,s),t.call(this,e)}return Object(ae.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t||(t=2),Oe.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Me,{newPostText:this.props.newPostText,arrPosts:this.props.arrPosts,profile:this.props.profile,addPost:this.props.addPost,updateNewPostText:this.props.updateNewPostText})})}}]),s}(i.a.Component),Fe=Object(te.e)(De),Le=Object(re.b)((function(e){return{arrPosts:e.profilePage.arrPosts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),{addPost:function(){return{type:E}},updateNewPostText:function(e){return{type:I,postText:e}},setUserProfile:function(e){return{type:A,profile:e}}})(Fe),ze=s(19),Re=s.n(ze),Ge=function(e){return Object(a.jsxs)("div",{className:Re.a.menu,children:[Object(a.jsxs)("div",{className:Re.a.list,children:[Object(a.jsx)("a",{className:Re.a.item,href:"#",children:"Title 1"}),Object(a.jsx)("a",{className:Re.a.item,href:"#",children:"Title 2"}),Object(a.jsx)("a",{className:Re.a.item,href:"#",children:"Title 3"}),Object(a.jsx)("a",{className:Re.a.item,href:"#",children:"Title 4"})]}),Object(a.jsx)("div",{className:Re.a.loginBlock,children:e.isAuth?e.login:Object(a.jsx)(q.b,{to:"/login",children:"Login"})})]})},He=function(e){Object(ne.a)(s,e);var t=Object(ie.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ae.a)(s,[{key:"componentDidMount",value:function(){var e=this;Oe.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.email,i=s.login;e.props.setAuthUserData(a,n,i)}}))}},{key:"render",value:function(){return Object(a.jsx)(Ge,Object(d.a)({},this.props))}}]),s}(i.a.Component),Ye=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e,t,s){return{type:F,newData:{userId:e,email:t,login:s}}}})(He),Ke=function(){return Object(a.jsxs)("div",{className:K.a.page,children:[Object(a.jsx)("div",{className:K.a.page__header,children:Object(a.jsx)(Ye,{})}),Object(a.jsx)("div",{className:K.a.page__sidebar,children:Object(a.jsx)(B,{})}),Object(a.jsxs)("div",{className:K.a.page__content,children:[Object(a.jsx)(te.a,{path:"/profile/:id?",render:function(){return Object(a.jsx)(Le,{})}}),Object(a.jsx)(te.a,{path:"/contacts",render:function(){return Object(a.jsx)(Ne,{})}}),Object(a.jsx)(te.a,{path:"/messages",render:function(){return Object(a.jsx)(pe,{})}}),Object(a.jsx)(te.a,{path:"/tasks",render:function(){return Object(a.jsx)(ge,{})}}),Object(a.jsx)(te.a,{path:"/news",render:function(){return Object(a.jsx)(Q,{})}}),Object(a.jsx)(te.a,{path:"/settings",render:function(){return Object(a.jsx)(ee,{})}})]})]})};c.a.render(Object(a.jsx)(q.a,{children:Object(a.jsx)(re.a,{store:H,children:Object(a.jsx)(Ke,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.6f10f677.chunk.js.map