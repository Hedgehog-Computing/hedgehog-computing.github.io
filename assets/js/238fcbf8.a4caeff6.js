"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4657],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s=void 0,p={unversionedId:"Decompositions/QR",id:"Decompositions/QR",title:"QR",description:"QR(matrix any[]",source:"@site/math/Decompositions/QR.mdx",sourceDirName:"Decompositions",slug:"/Decompositions/QR",permalink:"/math/Decompositions/QR",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"smooth",permalink:"/math/Data/smooth"},next:{title:"cholesky",permalink:"/math/Decompositions/cholesky"}},u={},m=[{value:"<code>QR(matrix: any[] | Mat) : any[]</code>",id:"qrmatrix-any--mat--any",level:4}],l={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"qrmatrix-any--mat--any"},(0,a.kt)("inlineCode",{parentName:"h4"},"QR(matrix: any[] | Mat) : any[]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"param")," ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix")," - The matrix to be decomposed using the QR method. Needs to be a square matrix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"any[]")," - An object holding the matrices ",(0,a.kt)("inlineCode",{parentName:"p"},"Q")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),". Access them via ",(0,a.kt)("inlineCode",{parentName:"p"},"{result}.Q")),(0,a.kt)("p",null,"This function decomposes a square matrix using the QR method, where Q is an orthogonal matrix and R is an upper triangular matrix. Note that an orthogonal matrix is one where the rows and columns are orthonormal vectors which is satisfied by Q^TxQ = QxQ^T = I, where I is identity). Knowing when one decomposition is better than the other is key to saving time and being efficient with data."),(0,a.kt)("iframe",{src:"https://hlab.app/s/docs/QR_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);