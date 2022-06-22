"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2081],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,y=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4455:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={},p=void 0,s={unversionedId:"Properties/is_triu",id:"Properties/is_triu",title:"is_triu",description:"is_triu(input: any)",source:"@site/math/Properties/is_triu.mdx",sourceDirName:"Properties",slug:"/Properties/is_triu",permalink:"/math/Properties/is_triu",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"is_tril",permalink:"/math/Properties/is_tril"},next:{title:"ndim",permalink:"/math/Properties/ndim"}},l={},c=[{value:"<code>is_triu(input: any[][])</code>",id:"is_triuinput-any",level:4}],f={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"is_triuinput-any"},(0,o.kt)("inlineCode",{parentName:"h4"},"is_triu(input: any[][])")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Any matrix, two-dimensional and square, to test if it's an upper triangular or not"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: boolean")," - True if it is upper triangular (recall upper triangular means everything ",(0,o.kt)("strong",{parentName:"p"},"below")," the diagonal is zero), false otherwise."),(0,o.kt)("p",null,"This function tests if a square 2d matrix is upper triangular or not. Simply look at the diagonal and see if theres any entry below the diagonal that is non zero. If there is, it is not upper triangular. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/is_triu_hbook",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);