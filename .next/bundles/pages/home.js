
          window.__NEXT_REGISTER_PAGE('/home', function() {
            var comp = module.exports=webpackJsonp([6],{119:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=u(l),a=(n(19),n(56)),i=n(57),o=n(120),d=u(o),f=function(e){var t=e.data.allMovies;return r.default.createElement("div",{id:"cards"},t?t.map(function(e){return r.default.createElement(d.default,{movie:e,key:e.id})}):"Loading movie data . . .")},c=(0,a.graphql)(i.AllMoviesQuery,{options:{pollInterval:500}})(f);t.default=function(){return r.default.createElement(c,null)}},120:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(12),r=u(l),a=n(6),i=u(a),o=n(13),d=u(o),f=n(7),c=u(f),s=n(14),v=u(s),p=n(0),h=u(p),m=(n(19),n(30)),_=n(69),g=u(_),y=n(107),M=n(121),k=u(M),b=function(e){function t(e){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e))}return(0,v.default)(t,e),(0,c.default)(t,null,[{key:"getInitialProps",value:function(e){var t=e.store;return e.isServer?{}:t.getState()}}]),(0,c.default)(t,[{key:"handleClick",value:function(){this.props.movie.id;this.props.selectMovie(this.props.movie.id)}},{key:"render",value:function(){var e=this.props.movie,t=e.name,n=e.description,u=e.likes,l=e.id,r=u.length;return h.default.createElement(k.default,null,h.default.createElement("div",{className:"card"},h.default.createElement(g.default,{href:"/movie?id="+l},h.default.createElement("h3",{className:"hover",onClick:this.handleClick.bind(this)},t||"No title")),h.default.createElement("p",null,"Likes: ",r),h.default.createElement("p",null,"Summary: ",n)))}}]),t}(h.default.Component),E=function(e){return{selectedMovieId:e.selectedMovieId}},C=function(e){return{selectMovie:function(t){return e((0,y.selectMovie)(t))}}};t.default=(0,m.connect)(E,C)(b)},121:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(26),r=u(l),a=n(25),i=u(a),o=(0,r.default)(["\n  .card {\n    background-color: lightgrey;\n    margin: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: 'Cabin', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n"],["\n  .card {\n    background-color: lightgrey;\n    margin: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: 'Cabin', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n"]);t.default=i.default.div(o)},808:function(e,t,n){e.exports=n(809)},809:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(12),r=u(l),a=n(6),i=u(a),o=n(7),d=u(o),f=n(13),c=u(f),s=n(14),v=u(s),p=n(0),h=u(p),m=(n(19),n(64)),_=u(m),g=n(67),y=u(g),M=n(68),k=u(M),b=n(810),E=u(b),C=function(e){function t(e){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e))}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return h.default.createElement(k.default,null,h.default.createElement(E.default,null))}}],[{key:"getInitialProps",value:function(e){var t=e.store,n=e.isServer;e.pathname,e.query;return n?{}:t.getState()}}]),t}(h.default.Component);t.default=(0,_.default)(y.default)(C)},810:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(26),r=u(l),a=n(0),i=u(a),o=n(69),d=(u(o),n(25)),f=u(d),c=n(119),s=u(c),v=(0,r.default)(["\n\n"],["\n\n"]),p=f.default.div(v);t.default=function(){return i.default.createElement(p,{id:"home"},i.default.createElement(s.default,null))}}},[808]);
            return { page: comp.default }
          })
        