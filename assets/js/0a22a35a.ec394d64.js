"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8307],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,y=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,u={unversionedId:"Linear Equation Systems/lsolve",id:"Linear Equation Systems/lsolve",title:"lsolve",description:"lsolve(A any[] | Mat) : any[]",source:"@site/math/Linear Equation Systems/lsolve.mdx",sourceDirName:"Linear Equation Systems",slug:"/Linear Equation Systems/lsolve",permalink:"/math/Linear Equation Systems/lsolve",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lup",permalink:"/math/Decompositions/lup"},next:{title:"lusolve",permalink:"/math/Linear Equation Systems/lusolve"}},s={},c=[{value:"<code>lsolve(A: any[] | Mat, b: any[] | Mat) : any[]</code>",id:"lsolvea-any--mat-b-any--mat--any",level:4}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"lsolvea-any--mat-b-any--mat--any"},(0,o.kt)("inlineCode",{parentName:"h4"},"lsolve(A: any[] | Mat, b: any[] | Mat) : any[]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," - The 'A' part of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ax=b"),". A 2-D matrix, specifically a ",(0,o.kt)("strong",{parentName:"p"},"lower triangular")," one. See ",(0,o.kt)("inlineCode",{parentName:"p"},"lusolve")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"usolve")," for variants."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," - The 'b' part of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ax=b"),". A 1-D matrix, must be a column vector specifically. ",(0,o.kt)("inlineCode",{parentName:"p"},"[ [1], [2], [3]]")," for example."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"any[]")," - The column vector representing the solution to the equation ",(0,o.kt)("inlineCode",{parentName:"p"},"Ax=b"),", or the part, ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),". "),(0,o.kt)("p",null,"This function finds the answer to the equation ",(0,o.kt)("inlineCode",{parentName:"p"},"Ax=b"),", or the linear equation system where ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is a column vector of the different variables. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/lsolve_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);