"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1161],{6227:function(e,A,a){a.r(A),a.d(A,{Title:function(){return l},_frontmatter:function(){return s},default:function(){return m}});var t,n=a(3366),i=(a(7294),a(4983)),r=a(4295),o=["components"],l=function(){return(0,i.kt)("span",null,"Lab 1 - Global view of the applications and their infrastructure dependencies ",(0,i.kt)("br",null))},s={},c=(t="InlineNotification",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={Title:l,_frontmatter:s},u=r.Z;function m(e){var A=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(u,Object.assign({},p,a,{components:A,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"1.1 - Examine the global supply chain"),(0,i.kt)("p",null,"Turbonomic requires configuration and operational performance data to make resource optimization recommendations. The more data the better."),(0,i.kt)("p",null,"The RobotShop application is being observed by Instana. Turbonomic ingests data from Instana and builds a common data model to stitch together a graphical view of the application and its resource dependencies. In the Turbonomic nomenclature, this is called the “supply chain.”"),(0,i.kt)("p",null,"The global supply chain models the dynamic relationship of the managed application and its dependent infrastructure layers."),(0,i.kt)("h4",null,"Step 1.1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log in to the Turbonomic instance and click the On button in the upper left corner.")),(0,i.kt)(c,{mdxType:"InlineNotification"},"NOTE: The next six steps will refer to the graphic below."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAdyhAn//xAAVEAEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAQABBQIpf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAAIDAQAAAAAAAAAAAAAAAAABMUFRcf/aAAgBAQABPyHDLUCswWhS+n//2gAMAwEAAgADAAAAEPsf/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8QqP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQADAQEAAwAAAAAAAAAAAAEAESFBMVFhsf/aAAgBAQABPxANaWThevl2abVjx/YAUci5Uee1HeJnB9E//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab1",title:"Lab1",src:"/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/2e753/1.1.0.jpg",srcSet:["/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/69549/1.1.0.jpg 288w","/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/473e3/1.1.0.jpg 576w","/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/2e753/1.1.0.jpg 1152w","/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/74f4b/1.1.0.jpg 1728w","/Turbo-1-Day-Partner-Workshop/static/0bb9d518c1c11e55cdafb666b53807ab/74f34/1.1.0.jpg 2064w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h4",null,"Step 1.1.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Business Application entity (1)."),(0,i.kt)("li",{parentName:"ul"},"The Business Applications entity shows the business applications of which Turbonomic is aware.")),(0,i.kt)("h4",null,"Step 1.1.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Business Trans#### Step entity (2)."),(0,i.kt)("li",{parentName:"ul"},"The Business Trans#### Step entity shows logical business functions that an end-user would execute (such as a purchase or add-to-cart). Business applications are composed of these business transactions.")),(0,i.kt)("h4",null,"Step 1.1.3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Service entity (3)."),(0,i.kt)("li",{parentName:"ul"},"A service is basically a REST endpoint, and transactions use the services.")),(0,i.kt)("h4",null,"Step 1.1.4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Application Component entity (4)."),(0,i.kt)("li",{parentName:"ul"},"Services are hosted and executed in an application component, such as a Java virtual machine (JVM).")),(0,i.kt)("h4",null,"Step 1.1.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Container entity (5)."),(0,i.kt)("li",{parentName:"ul"},"Application components run on a container platform like Kubernetes.")),(0,i.kt)("h4",null,"Step 1.1.6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hover the cursor over the Virtual Machine entity (6)."),(0,i.kt)("li",{parentName:"ul"},"Application platforms are hosted in virtualized environments like vSphere.")),(0,i.kt)("h2",null,"1.2 - Explore the top business applications view"),(0,i.kt)("p",null,"Turbonomic displays the applications in order of risk."),(0,i.kt)("p",null,"In each of the entities, such as the Business Application entity, the colors that make up the circle reflect the current health of the entities. “Green” is healthy, “yellow” represents efficiency recommendations, and “red” represents performance recommendations.."),(0,i.kt)("h4",null,"Step 1.2.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the Business Application entity.")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd0RFV//xAAWEAADAAAAAAAAAAAAAAAAAAABECD/2gAIAQEAAQUCQj//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAACAwADAAAAAAAAAAAAAAAAASExQRFRcf/aAAgBAQABPyHWbYlzzPYrZqFb9P/aAAwDAQACAAMAAAAQu8//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxBa/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAIDAQEAAAAAAAAAAAAAAREhADFBYYH/2gAIAQEAAT8QAQvc4EGkPFv5kMV8No8w0YtUGtxeOaQjg8M//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab1",title:"Lab1",src:"/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/2e753/1.2.1.jpg",srcSet:["/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/69549/1.2.1.jpg 288w","/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/473e3/1.2.1.jpg 576w","/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/2e753/1.2.1.jpg 1152w","/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/74f4b/1.2.1.jpg 1728w","/Turbo-1-Day-Partner-Workshop/static/bae6c2432e7a31f6fa7ce97f3e3e757b/74f34/1.2.1.jpg 2064w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"We see that there’s an increase in the average response time.\nThe current status indicates that there are some critical performance issues as well as some areas to improve efficiency.\nThe Actions button enables you to take the recommended actions directly from Turbonomic."),(0,i.kt)(c,{mdxType:"InlineNotification"},"NOTE: We won’t click the Actions button at this time."),(0,i.kt)("h4",null,"Step 1.2.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the X in the upper right corner to close the Application: Business Application page.\n",(0,i.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd6EAf/EABYQAAMAAAAAAAAAAAAAAAAAAAAQMf/aAAgBAQABBQJU/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGRAAAwADAAAAAAAAAAAAAAAAAAERMVFh/9oACAEBAAE/IcITuxS+OH//2gAMAwEAAgADAAAAEHgv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EIXL/8QAFhEBAQEAAAAAAAAAAAAAAAAAERAh/9oACAECAQE/EHSf/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIXGB/9oACAEBAAE/EKsbfJUaccgRJqaCf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab1",title:"Lab1",src:"/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/2e753/1.2.2.jpg",srcSet:["/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/69549/1.2.2.jpg 288w","/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/473e3/1.2.2.jpg 576w","/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/2e753/1.2.2.jpg 1152w","/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/74f4b/1.2.2.jpg 1728w","/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/de5bb/1.2.2.jpg 2304w","/Turbo-1-Day-Partner-Workshop/static/a676aaeb8112214e6d83ed34aca0e86a/24f7e/1.2.2.jpg 2854w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))}m.isMDXComponent=!0},4295:function(e,A,a){a.d(A,{Z:function(){return f}});var t=a(7294),n=a(8650),i=a.n(n),r=a(5444),o=a(5426),l=a(4311),s=a(5900),c=a.n(s),p=function(e){var A,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return t.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(A={},A["PageHeader-module--with-tabs--vbQ-W"]=r.length,A["PageHeader-module--dark-mode--WCeH8"]="dark"===n,A))},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12"},t.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var A=e.relativePagePath,a=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,l=i.subDirectory,s=o+"/edit/"+i.branch+l+"/src/pages"+A;return o?t.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},t.createElement("div",{className:"bx--col"},t.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},m=a(4275),d=a(1721),h=function(e){function A(){return e.apply(this,arguments)||this}return(0,d.Z)(A,e),A.prototype.render=function(){var e=this.props,A=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var A,a=i()(e,{lower:!0,strict:!0}),l=a===o,s=new RegExp(o+"/?(#.*)?$"),p=n.replace(s,a);return t.createElement("li",{key:e,className:c()((A={},A["PageTabs-module--selected-item--aBB0K"]=l,A),"PageTabs-module--list-item--024o6")},t.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return t.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},t.createElement("nav",{"aria-label":A},t.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},A}(t.Component),g=h,b=a(2881),E=a(6958),k=a(36),B=function(e){var A=e.date,a=new Date(A);return A?t.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},t.createElement(k.sg,null,t.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var A=e.pageContext,a=e.children,n=e.location,s=e.Title,c=A.frontmatter,d=void 0===c?{}:c,h=A.relativePagePath,k=A.titleType,f=d.tabs,N=d.title,Q=d.theme,y=d.description,j=d.keywords,w=d.date,v=(0,E.Z)().interiorTheme,D=(0,r.useStaticQuery)("2456312558").site.pathPrefix,P=D?n.pathname.replace(D,""):n.pathname,x=f?P.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",T=Q||v;return t.createElement(l.Z,{tabs:f,homepage:!1,theme:T,pageTitle:N,pageDescription:y,pageKeywords:j,titleType:k},t.createElement(p,{title:s?t.createElement(s,null):N,label:"label",tabs:f,theme:T}),f&&t.createElement(g,{title:N,slug:P,tabs:f,currentTab:x}),t.createElement(b.Z,{padded:!0},a,t.createElement(u,{relativePagePath:h}),t.createElement(B,{date:w})),t.createElement(m.Z,{pageContext:A,location:n,slug:P,tabs:f,currentTab:x}),t.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-1-mdx-b28a837e22ba9b900598.js.map