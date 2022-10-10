"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3046],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={},s=void 0,c={unversionedId:"Basic Operations/gcd",id:"Basic Operations/gcd",title:"gcd",description:"gcd(dataIn1 number | any[] | Mat) : number | Mat",source:"@site/math/Basic Operations/gcd.mdx",sourceDirName:"Basic Operations",slug:"/Basic Operations/gcd",permalink:"/math/Basic Operations/gcd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"floor",permalink:"/math/Basic Operations/floor"},next:{title:"sum",permalink:"/math/Basic Operations/sum"}},l={},u=[{value:"<code>gcd(dataIn1: number | any[] | Mat, dataIn2: number | any[] | Mat) : number | Mat</code>",id:"gcddatain1-number--any--mat-datain2-number--any--mat--number--mat",level:4},{value:"Description",id:"description",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"gcddatain1-number--any--mat-datain2-number--any--mat--number--mat"},(0,i.kt)("inlineCode",{parentName:"h4"},"gcd(dataIn1: number | any[] | Mat, dataIn2: number | any[] | Mat) : number | Mat")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIn1")," - Note: ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIn1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIn2")," must be the same type ",(0,i.kt)("strong",{parentName:"p"},"unless")," you input a list only. The first input is the first part of the pair of items you want to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of. This function can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of two integers, or two 2-D or 1-D ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Mat")," objects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIn2")," The other part of the pair. Must be identical to the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIn1"),". It is the item to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of, whether its two integers, or two matrices, or two lists. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"number | Mat")," - The greatest common divisor is returned as an ",(0,i.kt)("inlineCode",{parentName:"p"},"integer")," for the cases of 2 integers, or it returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mat")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," in each indice, element-wise. For example, given two 2x2 matrices, it will find the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"a[0][0]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b[0][0]")," and put it into the return matrix indice ",(0,i.kt)("inlineCode",{parentName:"p"},"result[0][0]"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This function is the greatest common divisor function. The greatest common divisor is famous - it is the shared integer between 2 (or more) numbers, such that it divides both of the numbers, and there is no number that can divide them that is larger. I.e. the largest shared divisor. "),(0,i.kt)("p",null,"This function returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of two integers however, if given lists, it will return the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," element-wise of each list indice. If given just a list, it will give the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," of all elements in that list. An example is shown below that may clear this up. For other structures, it also does element-wise computation by index."),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/hbook_`gcd`",width:"100%",height:"500px"}))}d.isMDXComponent=!0}}]);