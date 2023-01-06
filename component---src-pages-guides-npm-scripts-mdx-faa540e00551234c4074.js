"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5668],{4432:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n,l=a(3366),r=(a(7294),a(4983)),i=a(4295),s=["components"],o={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={_frontmatter:o},u=i.Z;function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"title: npm scripts\ndescription:\nOverview of scripts used to run and build sites using the Carbon Gatsby theme"),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Sites built with the Carbon Gatsby theme starter come ready to go with some\nhelpful npm scripts. You can run these commands by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn [command]")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run [command]"))),(0,r.kt)("h2",null,"Clean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clean")," - this is used to clean gatsby’s cache and public directory. It\nshould be used sparingly, only when you’re experiencing weird errors or\ncaching issues.")),(0,r.kt)("h2",null,"Develop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dev")," - this is your primary for starting up your gatsby site for\ndevelopment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dev:clean")," - this is provided as a convenience; it first runs ",(0,r.kt)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"))),(0,r.kt)("h2",null,"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build")," - this is what you’ll use to bundle your site. Gatsby will minimize\nyour images and create a static, blazing fast site in your ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"serve")," - this can be run to serve the bundle locally after running ",(0,r.kt)("inlineCode",{parentName:"li"},"build"),".\nIt can be used to debug locally if any issues are encountered durring build."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build:clean")," - this is a provided as a convenience, it first runs ",(0,r.kt)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,r.kt)("inlineCode",{parentName:"li"},"build"))))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),l=a(8650),r=a.n(l),i=a(5444),s=a(5426),o=a(4311),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,l=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||l,s=r.baseUrl,o=r.subDirectory,c=s+"/edit/"+r.branch+o+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),b=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,s=l.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===s,c=new RegExp(s+"/?(#.*)?$"),u=l.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component),h=g,k=a(2881),v=a(6958),y=a(36),f=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,m=t.frontmatter,b=void 0===m?{}:m,g=t.relativePagePath,y=t.titleType,N=b.tabs,E=b.title,w=b.theme,x=b.description,P=b.keywords,C=b.date,T=(0,v.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,Z=D?l.pathname.replace(D,""):l.pathname,B=N?Z.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",G=w||T;return n.createElement(o.Z,{tabs:N,homepage:!1,theme:G,pageTitle:E,pageDescription:x,pageKeywords:P,titleType:y},n.createElement(u,{title:c?n.createElement(c,null):E,label:"label",tabs:N,theme:G}),N&&n.createElement(h,{title:E,slug:Z,tabs:N,currentTab:B}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(f,{date:C})),n.createElement(p.Z,{pageContext:t,location:l,slug:Z,tabs:N,currentTab:B}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-npm-scripts-mdx-faa540e00551234c4074.js.map