
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([4],{120:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=l(r),a=(n(27),n(54)),o=n(55),i=n(121),d=l(i),f=function(e){var t=e.data.allMovies;return u.default.createElement("div",{id:"cards"},t?t.map(function(e){return u.default.createElement(d.default,{movie:e,key:e.id})}):"Loading movie data . . .")},c=(0,a.graphql)(o.AllMoviesQuery,{options:{pollInterval:500}})(f);t.default=function(){return u.default.createElement(c,null)}},121:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=l(r),a=n(4),o=l(a),i=n(7),d=l(i),f=n(5),c=l(f),s=n(8),v=l(s),h=n(0),p=l(h),m=(n(27),n(30)),g=n(67),_=l(g),b=n(83),k=n(122),E=l(k),M=function(e){function t(e){return(0,o.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,v.default)(t,e),(0,c.default)(t,null,[{key:"getInitialProps",value:function(e){var t=e.store;return e.isServer?{}:t.getState()}}]),(0,c.default)(t,[{key:"handleClick",value:function(){this.props.movie.id;this.props.selectMovie(this.props.movie.id)}},{key:"render",value:function(){var e=this.props.movie,t=e.name,n=e.description,l=e.likes,r=e.id,u=l.length;return p.default.createElement(E.default,null,p.default.createElement("div",{className:"card"},p.default.createElement(_.default,{href:"/movie?id="+r},p.default.createElement("h3",{className:"hover",onClick:this.handleClick.bind(this)},t||"No title")),p.default.createElement("p",null,"Likes: ",u),p.default.createElement("p",null,"Summary: ",n)))}}]),t}(p.default.Component),y=function(e){return{selectedMovieId:e.selectedMovieId}},x=function(e){return{selectMovie:function(t){return e((0,b.selectMovie)(t))}}};t.default=(0,m.connect)(y,x)(M)},122:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),u=l(r),a=n(20),o=l(a),i=(0,u.default)(["\n  .card {\n    background-color: lightgrey;\n    margin: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: 'Cabin', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n"],["\n  .card {\n    background-color: lightgrey;\n    margin: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: 'Cabin', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n"]);t.default=o.default.div(i)},852:function(e,t,n){e.exports=n(853)},853:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=l(r),a=n(4),o=l(a),i=n(5),d=l(i),f=n(7),c=l(f),s=n(8),v=l(s),h=n(0),p=l(h),m=n(62),g=l(m),_=n(64),b=l(_),k=n(65),E=l(k),M=n(854),y=l(M),x=function(e){function t(e){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return p.default.createElement("div",{id:"container"},p.default.createElement(E.default,null,p.default.createElement(y.default,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.store;return e.isServer?{}:t.getState()}}]),t}(p.default.Component);t.default=(0,g.default)(b.default)(x)},854:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),u=l(r),a=n(0),o=l(a),i=n(67),d=l(i),f=n(20),c=l(f),s=n(120),v=l(s),h=(0,u.default)(["\n  #banner {\n    background-color: blue;\n    color: white;\n    height: 500px;\n  }\n"],["\n  #banner {\n    background-color: blue;\n    color: white;\n    height: 500px;\n  }\n"]),p=c.default.div(h);t.default=function(){return o.default.createElement(p,{id:"index"},o.default.createElement("div",{id:"banner"},"Welcome to Awesome Potatoes"),o.default.createElement(d.default,{prefetch:!0,href:"/home"},o.default.createElement("a",null,"Click here for the Best Movie Reviews")),o.default.createElement("h1",null,"Now trending"),o.default.createElement(v.default,null))}}},[852]);
            return { page: comp.default }
          })
        