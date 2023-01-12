"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3569],{3816:function(e,t,a){a.r(t),a.d(t,{Title:function(){return r},_frontmatter:function(){return c},default:function(){return m}});var n=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],r=function(){return(0,l.kt)("span",null,"Lab 4 - Automating Actions ",(0,l.kt)("br",null))},c={},s={Title:r,_frontmatter:c},u=i.Z;function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)(u,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"4.1 - Automate the execution of actions"),(0,l.kt)("p",null,"Though Turbonomic allows you to initiate an action natively from the platform with the click of a button, it is a best practice to automate the execution of these actions."),(0,l.kt)("p",null,"We will now define a policy that enables you to automate the platform-derived actions without having to jump into multiple tools. This significantly enhances operator productivity."),(0,l.kt)("h4",null,"Step 4.1.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Log out and log back in using the following credentials:"),(0,l.kt)("li",{parentName:"ul"},"Username: cocadmin"),(0,l.kt)("li",{parentName:"ul"},"Password: CoC#Rulz!")),(0,l.kt)("h4",null,"Step 4.1.2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click SETTINGS (1) and select Policies (2).")),(0,l.kt)("img",{src:"images/4.1.2.jpg",alt:"Lab4"}),(0,l.kt)("h4",null,"Step 4.1.3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click NEW AUTOMATION POLICY."),(0,l.kt)("li",{parentName:"ul"},"NOTE: If you do not see the NEW AUTOMATION POLICY button, it means that the system is currently running in a restricted read-only mode. In this case, skip Actions 4.1.4-4.1.6 and proceed to the ."),(0,l.kt)("li",{parentName:"ul"},"NOTE: Actions 4.1.4-4.1.6 represent how an automation policy can be configured and put into effect.")),(0,l.kt)("img",{src:"images/4.1.3.jpg",alt:"Lab4"}),(0,l.kt)("h4",null,"Step 4.1.4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select Container Pod.")),(0,l.kt)("img",{src:"images/4.1.4.jpg",alt:"Lab4"}),(0,l.kt)("h4",null,"Step 4.1.5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Give the policy a custom NAME. Then, expand AUTOMATION AND ORCHESTRATION (2) and click ADD ACTION (3) to define how an action is accepted")),(0,l.kt)("img",{src:"images/4.1.5.jpg",alt:"Lab4"}),(0,l.kt)("h4",null,"Step 4.1.6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fill out the Automation and Orchestration panel:"),(0,l.kt)("li",{parentName:"ul"},"Set ACTION TYPE to Move (1)."),(0,l.kt)("li",{parentName:"ul"},"Set ACTION GENERATION to Generate Actions (2)."),(0,l.kt)("li",{parentName:"ul"},"Set ACTION ACCEPTANCE to Automatic (3)."),(0,l.kt)("li",{parentName:"ul"},"IMPORTANT NOTE: Do NOT click Submit, as this is a read-only environment.")),(0,l.kt)("img",{src:"images/4.1.6.jpg",alt:"Lab4"}),(0,l.kt)("p",null,"Once the automation policy is saved, it will go into effect. All configured actions will now be executed automatically."),(0,l.kt)("p",null,"The main benefit and best practice of Turbonomic is to execute the platform-derived actions automatically. The underlying goal is to reduce or remove human intervention and leverage automation to maintain application performance and improve operational efficiency."),(0,l.kt)("p",null,"Although we have demonstrated how actions can be initiated automatically from Turbonomic, typically IT organizations manually execute actions until they are confident that the actions are trustworthy. As the organization’s level of comfort matures over time, actions are executed in an increasingly automated fashion."))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(7294),l=a(8650),i=a.n(l),o=a(5444),r=a(5426),c=a(4311),s=a(5900),u=a.n(s),m=function(e){var t,a=e.title,l=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,l=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||l,r=i.baseUrl,c=i.subDirectory,s=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,r=l.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),c=a===r,s=new RegExp(r+"/?(#.*)?$"),m=l.replace(s,a);return n.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component),k=g,f=a(2881),b=a(6958),N=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},T=function(e){var t=e.pageContext,a=e.children,l=e.location,s=e.Title,u=t.frontmatter,h=void 0===u?{}:u,g=t.relativePagePath,N=t.titleType,T=h.tabs,v=h.title,y=h.theme,w=h.description,A=h.keywords,x=h.date,P=(0,b.Z)().interiorTheme,O=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=O?l.pathname.replace(O,""):l.pathname,S=T?C.split("/").filter(Boolean).slice(-1)[0]||i()(T[0],{lower:!0}):"",I=y||P;return n.createElement(c.Z,{tabs:T,homepage:!1,theme:I,pageTitle:v,pageDescription:w,pageKeywords:A,titleType:N},n.createElement(m,{title:s?n.createElement(s,null):v,label:"label",tabs:T,theme:I}),T&&n.createElement(k,{title:v,slug:C,tabs:T,currentTab:S}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(E,{date:x})),n.createElement(p.Z,{pageContext:t,location:l,slug:C,tabs:T,currentTab:S}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-old-lab-4-mdx-73a5f5153eef501991cc.js.map