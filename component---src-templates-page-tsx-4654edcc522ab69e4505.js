(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var r=n(0),a=n(154),i=n(151),o=n(157);t.default=function(e){var t=e.data;return r.createElement(o.a,null,r.createElement(a.a,null,r.createElement(i.a,null,r.createElement("h1",null,t.markdownRemark.frontmatter.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}))))};var c="1366676620"},148:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return l});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},l={header:60}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(147),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(153),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(32);n.d(t,"parsePath",function(){return u.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){"use strict";var r=n(0),a=n(149),i=n(148),o=n(152),c=Object(a.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.f.lg),"em;");t.a=function(e){var t=e.children,n=e.className;return r.createElement(c,{className:n},t)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(148),a=function(e){return e/r.c.fontSize.regular}},153:function(e,t,n){var r;e.exports=(r=n(156))&&r.default||r},154:function(e,t,n){"use strict";var r=n(0),a=n(149),i=n(148),o=Object(a.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");t.a=function(e){var t=e.children,n=e.className;return r.createElement(o,{className:n},t)}},155:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-starter-typescript-plus",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},156:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},157:function(e,t,n){"use strict";var r=n(155),a=n(0),i=n(158),o=n.n(i),c=n(150),l=(n(159),n(77)),s=n(148),d=n(152);Object(l.injectGlobal)("html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}html{font-size:",s.c.fontSize.regular,"px !important;line-height:",s.c.lineHeight.regular," !important;}body{width:100%;overflow-x:hidden;overflow-y:scroll;font-family:",s.d.sansSerif,";color:",s.b.black,";background-color:",s.b.white,";-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a{color:",s.b.brand,";text-decoration:none;&:hover,&:focus{text-decoration:underline;}}img{max-width:100%;object-fit:contain;position:relative;}figure{margin:2rem 0;}figcaption{font-size:80%;}th{text-align:left;}tbody{tr{&:nth-child(odd){td{}tr{}}}}h1,h2,h3,h4,h5,h6{margin-top:1.414rem;margin-bottom:.5rem;color:",s.b.black,";font-weight:600;line-height:",s.c.lineHeight.heading,";text-rendering:optimizeLegibility;}h1{margin-top:0;font-size:",s.c.headingSizes.h1,"rem;}h2{font-size:",s.c.headingSizes.h2,"rem;}h3{font-size:",s.c.headingSizes.h3,"rem;}h4,h5,h6{font-size:",s.c.headingSizes.h4,"rem;}p{margin-top:0;margin-bottom:1rem;}strong{color:",s.b.black,";}ul,ol,dl{margin-top:0;margin-bottom:1rem;}dt{font-weight:bold;}dd{margin-bottom:.5rem;}hr{position:relative;margin:1.5rem 0;border:0;border-top:1px solid ",s.b.ui.light,";}blockquote{margin:.8rem 0;padding:.5rem 1rem;border-left:.25rem solid ",s.b.ui.light,";color:",s.b.gray.calm,";p{&:last-child{margin-bottom:0;}}@media (min-width:",Object(d.a)(s.a.md),"em){padding-right:5rem;padding-left:1.25rem;}}");var u=n(149),m=n(160),f=n(151),h=Object(u.a)("header",{target:"e14yya1q0"})("height:",s.e.header,"px;padding:0 ",s.c.containerPadding,"rem;background-color:",s.b.brand,";color:",Object(m.a)(.5,s.b.white),";"),g=Object(u.a)(f.a,{target:"e14yya1q1"})("display:flex;flex-direction:row;align-items:center;height:100%;"),b=Object(u.a)(c.Link,{target:"e14yya1q2"})("color:",s.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),p=function(e){var t=e.title;return a.createElement(h,null,a.createElement(g,null,a.createElement(b,{to:"/"},t)))},y=Object(u.a)("div",{target:"e17su9850"})("display:flex;flex-direction:column;min-height:100vh;"),v=function(e){var t=e.children,n=e.className;return a.createElement(y,{className:n},t)},w=Object(u.a)("main",{target:"e1qy7fsr0"})("display:flex;flex-direction:column;flex:1;"),x=function(e){var t=e.children,n=e.className;return a.createElement(w,{className:n},t)};t.a=function(e){var t=e.children;return a.createElement(c.StaticQuery,{query:"991718019",render:function(e){return a.createElement(v,null,a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"gatsbyjs, gatsby, javascript, sample, something"}]}),a.createElement(p,{title:e.site.siteMetadata.title}),a.createElement(x,null,t))},data:r})}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-4654edcc522ab69e4505.js.map