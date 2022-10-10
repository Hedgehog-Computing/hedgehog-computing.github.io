"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4638],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8804:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:2},l="Parameters",p={unversionedId:"Functions/Parameters",id:"Functions/Parameters",title:"Parameters",description:"Parameters are named variables, passed into a function, and are used to import the arguments into functions.",source:"@site/Hedgehog-Script/6. Functions/Parameters.mdx",sourceDirName:"6. Functions",slug:"/Functions/Parameters",permalink:"/Hedgehog-Script/Functions/Parameters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"`arguments` object",permalink:"/Hedgehog-Script/Functions/Arguments Object"},next:{title:"Method Definitions",permalink:"/Hedgehog-Script/Functions/Method definitions"}},m={},u=[{value:"Default Parameters",id:"default-parameters",level:3},{value:"Rest Parameters",id:"rest-parameters",level:3}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Parameters are named variables, passed into a function, and are used to ",(0,i.kt)("strong",{parentName:"p"},"import")," the arguments into functions. "),(0,i.kt)("p",null,"Effectively, arguments are ",(0,i.kt)("strong",{parentName:"p"},"realized")," parameters through a function call."),(0,i.kt)("p",null,"An example:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/paramex1_hbook",width:"100%",height:"500px"}),(0,i.kt)("p",null,"Here are some key differences between parameters and arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Function parameters are the names listed in the function's definitions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function arguments are the actual values passed to the function. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arguments are set to the values of the parameters supplied. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," object exists but there is no equivalent for parameters."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The fundamental, basic idea of parameters are that they are unrealized arguments."),(0,i.kt)("p",{parentName:"div"},"Arguments can't exist without parameters."))),(0,i.kt)("p",null,"Parameters have two versions but we will only discuss one, as the second is not good practice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input parameters (pass values into functions)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default-parameters"},"Default Parameters"),(0,i.kt)("p",null,"What happens if a user doesn't fill all parameters? What if you ",(0,i.kt)("strong",{parentName:"p"},"want")," it to be ",(0,i.kt)("em",{parentName:"p"},"variable")," in size?"),(0,i.kt)("p",null,"That is when default parameters come into play:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the function definition, just add ",(0,i.kt)("inlineCode",{parentName:"p"},"=value")," as a suffix to a parameter and you have a default parameter!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This means that if none is provided, the parameter will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," from above."))),(0,i.kt)("p",null,"Here's an example:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/defaultparamex1_hbook",width:"100%",height:"300px"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rest-parameters"},"Rest Parameters"),(0,i.kt)("p",null,"What's the difference between a ",(0,i.kt)("strong",{parentName:"p"},"default parameter")," and a ",(0,i.kt)("strong",{parentName:"p"},"rest parameter"),"?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Default parameters")," allow named parameters to be initialized with default values"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used when certain parameters are optional (so if they don't put one in it becomes the default value)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rest parameters")," allow an indefinite, probably unnamed, amount of arguments as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It creates certain flexibility in function definitions.")))),(0,i.kt)("p",null,"The following is an example of the differences:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/paramex2_hbook",width:"100%",height:"600px"}),(0,i.kt)("p",null,"As previously mentioned, the rest parameter syntax allows a function to accept an indefinite number of arguments as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")),(0,i.kt)("p",null,"It also allows quite a bit of flexibility in function definitions. Here is another example:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/params_hbook",width:"100%",height:"500px"}),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,"One can also mix normal ",(0,i.kt)("strong",{parentName:"p"},"and")," default parameters with rest parameters, for the most flexible function definitions:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/paramex4_hbook",width:"100%",height:"400px"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only one rest parameter is allowed in a function, and it must be the last parameter in the definition."),(0,i.kt)("p",{parentName:"div"},"Also, one can access the length of restParams easily: ",(0,i.kt)("inlineCode",{parentName:"p"},"{restParamName}.length;")))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);