
          window.__NEXT_REGISTER_PAGE('/profile', function() {
            var comp = module.exports=webpackJsonp([4],{802:function(e,t,l){e.exports=l(803)},803:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(10),u=n(a),r=l(4),d=n(r),i=l(5),o=n(i),f=l(11),c=n(f),s=l(12),p=n(s),v=l(2),m=n(v),h=(l(21),l(53)),_=n(h),g=l(54),E=n(g),I=l(55),y=n(I),k=l(804),P=n(k),M=function(e){function t(e){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return m.default.createElement(y.default,null,m.default.createElement(P.default,null))}}],[{key:"getInitialProps",value:function(e){var t=e.store,l=e.isServer;e.pathname,e.query;return l?{}:t.getState()}}]),t}(m.default.Component);t.default=(0,_.default)(E.default)(M)},804:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(10),u=n(a),r=l(4),d=n(r),i=l(11),o=n(i),f=l(5),c=n(f),s=l(12),p=n(s),v=l(37),m=n(v),h=l(2),_=n(h),g=l(36),E=n(g),I=l(128),y=l(805),k=n(y),P=(0,m.default)(["\n\n"],["\n\n"]),M=E.default.div(P),S=function(e){function t(e){return(0,d.default)(this,t),(0,o.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,c.default)(t,null,[{key:"getInitialProps",value:function(e){var t=e.store;return e.isServer?{}:t.getState()}}]),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.profile;return _.default.createElement(M,{id:"profile"},this.props.loggedIn?_.default.createElement("div",null,_.default.createElement("div",null,_.default.createElement("h1",null,"ReduxProfile"),_.default.createElement("div",null,"user_id (auth0): "+e.user_id),_.default.createElement("div",null,"clientID:"+e.clientID),_.default.createElement("div",null,"created_at"+e.created_at),_.default.createElement("div",null,"email: "+e.email),_.default.createElement("div",null,"email_verified: "+e.email_verified),_.default.createElement("div",null,"graphcoolId: "+e.graphcoolId),_.default.createElement("div",null,"name: "+e.name),_.default.createElement("div",null,"nickname: "+e.nickname)),_.default.createElement(k.default,{graphcoolId:this.props.profile.graphcoolId})):"Please log in to view profile")}}]),t}(_.default.Component),b=function(e){return{loggedIn:e.loggedIn,profile:e.profile}};t.default=(0,I.connect)(b,null)(S)},805:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(10),u=n(a),r=l(4),d=n(r),i=l(11),o=n(i),f=l(5),c=n(f),s=l(12),p=n(s),v=l(2),m=n(v),h=(l(21),l(62)),_=l(63),g=function(e){function t(e){return(0,d.default)(this,t),(0,o.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,c.default)(t,null,[{key:"getInitialProps",value:function(e){var t=e.store;return e.isServer?{}:t.getState()}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.data.refetch()}},{key:"render",value:function(){for(;this.props.data.loading||!this.props.data.allUsers;)return"loading";var e=this.props.data.allUsers[0],t=e.auth0UserId,l=e.name,n=e.email,a=e.id;return m.default.createElement("div",null,m.default.createElement("h1",null,"GraphcoolProfile"),m.default.createElement("div",null,"auth0Id: "+t),m.default.createElement("div",null,"name: "+l),m.default.createElement("div",null,"email: "+n),m.default.createElement("div",null,"graphcoolId: "+a))}}]),t}(m.default.Component),E=(0,h.graphql)(_.GetUserByGraphcoolIdQuery,{options:function(e){return{variables:{id:e.graphcoolId||"undefined"}}}})(g);t.default=function(e){return m.default.createElement(E,{graphcoolId:e.graphcoolId})}}},[802]);
            return { page: comp.default }
          })
        