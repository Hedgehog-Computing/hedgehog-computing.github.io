"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3637],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2397:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:4},p="Regular Expressions",l={unversionedId:"Expressions & Operators/Regular Expression",id:"Expressions & Operators/Regular Expression",title:"Regular Expressions",description:"RegExp is a powerful object that matches text to a pattern.",source:"@site/Hedgehog-Script/2. Expressions & Operators/Regular Expression.mdx",sourceDirName:"2. Expressions & Operators",slug:"/Expressions & Operators/Regular Expression",permalink:"/Hedgehog-Script/Expressions & Operators/Regular Expression",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"null",permalink:"/Hedgehog-Script/Expressions & Operators/Null"},next:{title:"Expressions & Operators",permalink:"/Hedgehog-Script/Expressions & Operators/Expressions & Operators"}},c={},m=[{value:"Character classes and Anchors",id:"character-classes-and-anchors",level:3}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regular-expressions"},"Regular Expressions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," is a powerful ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," that matches text to a pattern."),(0,i.kt)("p",null,"There are two ways to create said ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1) Literal notation - pattern and/or options enclosed by ",(0,i.kt)("inlineCode",{parentName:"p"},"/ /"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2) Constructor - take in a string or literal and option flags as parameters "))),(0,i.kt)("p",null,"The following 3 expressions create the same exact regular expression object:"),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/regexp_hbook",width:"100%",height:"400px"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The 'i' is one of many flags, specifically for making the search case-insensitive."))),(0,i.kt)("p",null,"Let's breakdown the regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"/ab+c/"),": "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"+")," after b means to match at least one 'b'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"'a' and 'c' are simply the beginning and end of the pattern"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"'abc' matches, as well as 'abbbc'. 'ababc' does not")))),(0,i.kt)("p",null,"A great example is ",(0,i.kt)("inlineCode",{parentName:"p"},"/be+/"),":  'bee', 'bent', 'bear' are all matches."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"character-classes-and-anchors"},"Character classes and Anchors"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"character class")," matches any one set of characters. "),(0,i.kt)("p",null,"Here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"[ae]"),' matches the "a" in "based", and "e" in "lane"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"[^ae]")," matches anything ",(0,i.kt)("strong",{parentName:"p"},"not"),' in the character class - "r", "g", "n" are matched in "green"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"[A-P]")," matches any character in the range A through P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\\w"),' matches any word character - "V", "e", "2", "0", ',(0,i.kt)("strong",{parentName:"p"},'not "."'),' in "Ve2.0"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Anchors")," cause a match to succeed or fail based on the ",(0,i.kt)("strong",{parentName:"p"},"current position in the string"),"."),(0,i.kt)("p",null,"They don't cause advancement through the string or consume characters."),(0,i.kt)("p",null,"Here's a few examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$")," match must occur at the end ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\\A")," match must occur at the start of the string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\\b")," match must occur on a boundary between a word character and a non-word character"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," can be an extremely powerful tool, but it may be complicated at first. "),(0,i.kt)("p",{parentName:"div"},"If you wish to learn more about"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If you wish to learn more about character classes, anchors, and regular expressions in general, visit: ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"RegExp - MDN"),". ")))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);