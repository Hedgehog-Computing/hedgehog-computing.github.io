"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2886],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1767:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},p=void 0,c={unversionedId:"Transformations and creations/transpose",id:"Transformations and creations/transpose",title:"transpose",description:"transpose(input: Array)",source:"@site/math/Transformations and creations/transpose.mdx",sourceDirName:"Transformations and creations",slug:"/Transformations and creations/transpose",permalink:"/math/Transformations and creations/transpose",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inv",permalink:"/math/Transformations and creations/inv"}},u={},l=[{value:"<code>transpose(input: Array)</code>",id:"transposeinput-array",level:4}],f={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"transposeinput-array"},(0,o.kt)("inlineCode",{parentName:"h4"},"transpose(input: Array)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," A matrix to transpose. Should be square."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: Array")," - A matrix that is the transpose of ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),". Note to do a transpose one must have a square matrix (2d)"),(0,o.kt)("p",null,"This function simply gives the transpose of the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," matrix, which should be a two-dimensional, square matrix: (recall a transpose is the rows and columns switched)"),(0,o.kt)("iframe",{src:""},'width="100%" height="500px"'))}m.isMDXComponent=!0}}]);