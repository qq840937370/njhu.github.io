webpackJsonp([5],{"0JLk":function(t,e){},Jl68:function(t,e){},bfy8:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l("aozt"),n=l.n(i),r={name:"articlecell",props:["article"],data:function(){return{msg:"articlecell!"}},created:function(){},mounted:function(){console.log(this.$route),console.log(this.$route.query),console.log(this.$router)},methods:{}},s={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"articel-cell-wrapper"},[l("router-link",{staticClass:"focus",attrs:{to:{path:"/articledetail",query:{mdFileUrl:t.article.mdFileUrl}},target:"_blank"}},[l("img",{attrs:{src:t.article.image,alt:""}})]),t._v(" "),l("div",{staticClass:"sub-content"},[l("header",[l("h2",[l("router-link",{staticClass:"h2-title",attrs:{to:{path:"/articledetail",query:{mdFileUrl:t.article.mdFileUrl}},target:"_blank",title:t.article.title}},[t._v("\n          "+t._s(t.article.title)+"\n        ")])],1)]),t._v(" "),l("p",{staticClass:"meta"},[l("time",[t._v(t._s(t.article.time))])]),t._v(" "),l("p",{staticClass:"note"},[t._v("\n      "+t._s(t.article.subTitle)+"\n    ")])])],1)},staticRenderFns:[]};var a={name:"homecontentlist",data:function(){return{msg:"homecontentlist!",articleList:void 0}},components:{"article-cell":l("Z0/y")(r,s,!1,function(t){l("Jl68")},null,null).exports},created:function(){var t=this;n.a.get("https://raw.githubusercontent.com/NJHu/njhu.github.io/master/files/articleList.json").then(function(e){console.log(e.data),t.articleList=e.data}).catch(function(t){console.log(t),alert("网络错误，不能访问, 跨域访问, 浏览器需要设置")})},mounted:function(){console.log(this.$route),console.log(this.$route.query),console.log(this.$router),console.log(n.a)},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-content-list-wrapper"},[this.articleList?e("div",this._l(this.articleList,function(t){return e("article-cell",{key:t.title,attrs:{article:t}})})):this._e()])},staticRenderFns:[]};var o=l("Z0/y")(a,c,!1,function(t){l("0JLk")},null,null);e.default=o.exports}});
//# sourceMappingURL=5.95dbb7e5f50949c8b026.js.map