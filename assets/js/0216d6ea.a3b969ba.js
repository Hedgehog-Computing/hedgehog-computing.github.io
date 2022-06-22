"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7111],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7350:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},u=void 0,p={unversionedId:"Properties/trace",id:"Properties/trace",title:"trace",description:"trace(input: any | Mat | Tensor)",source:"@site/math/Properties/trace.mdx",sourceDirName:"Properties",slug:"/Properties/trace",permalink:"/math/Properties/trace",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ndim",permalink:"/math/Properties/ndim"},next:{title:"flatten",permalink:"/math/Transformations and creations/flatten"}},s={},l=[{value:"<code>trace(input: any[][] | Mat | Tensor)</code>",id:"traceinput-any--mat--tensor",level:4}],f={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"traceinput-any--mat--tensor"},(0,o.kt)("inlineCode",{parentName:"h4"},"trace(input: any[][] | Mat | Tensor)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Any JavaScript 2d array, Mat, Tensor. Must be 2d and square though."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: number")," - The trace of the matrix."),(0,o.kt)("p",null,"This function returns the trace of the matrix given. Note that the trace is the sum of the diagonal entries of a matrix. It is useful in certain applications and measurements of matrix properties. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/trace_hbook",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);