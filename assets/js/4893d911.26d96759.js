"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4616],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4088:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l="Tensor",p={unversionedId:"Matrix and Tensor/Tensor",id:"Matrix and Tensor/Tensor",title:"Tensor",description:"Tensor is a multi-dimensional array with a uniform type. In Hedgehog Lab, tensor is only used to store data. There are not any operations on tensor supported in Hedgehog Lab.",source:"@site/Hedgehog-Script/5. Matrix and Tensor/Tensor.mdx",sourceDirName:"5. Matrix and Tensor",slug:"/Matrix and Tensor/Tensor",permalink:"/Hedgehog-Script/Matrix and Tensor/Tensor",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Matrix",permalink:"/Hedgehog-Script/Matrix and Tensor/Matrix"},next:{title:"`arguments` object",permalink:"/Hedgehog-Script/Functions/Arguments Object"}},u={},c=[{value:"Create a tensor",id:"create-a-tensor",level:3},{value:"Member variables and methods",id:"member-variables-and-methods",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tensor"},"Tensor"),(0,a.kt)("p",null,"Tensor is a multi-dimensional array with a uniform type. In Hedgehog Lab, tensor is only used to store data. There are not any operations on tensor supported in Hedgehog Lab. "),(0,a.kt)("h3",{id:"create-a-tensor"},"Create a tensor"),(0,a.kt)("p",null,"You can create a tensor by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tensor(n_dim_array)")," constructor or ",(0,a.kt)("inlineCode",{parentName:"p"},"tensor")," wrapper function. Both of them take an n-dimensional array as input. "),(0,a.kt)("h3",{id:"member-variables-and-methods"},"Member variables and methods"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"val: any[]"),": The value of the tensor. It is a n-dimensional array."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ndim: number"),": The number of dimensions of the tensor."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shape: number[]"),": The shape of the tensor."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dimensions(): number[]"),": Return the shape of the tensor."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toString(): string"),": Return the string representation of the tensor, for example, a three-dimensional tensor will be serialized as a string in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[[[1, 2], \n[3, 4]], \n[[5, 6], \n[7, 8]]]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toStringDenseMode"),": Return the string representation of the tensor in dense mode, for example, a three-dimensional tensor will be serialized as a string in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clone(): Tensor"),": Return a copy of the tensor."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copy( A: Tensor ): Tensor"),": Copy the value of tensor ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to the tensor."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zerosAsShape( shape: number[] ): Tensor"),": Return a tensor with the same shape as the input shape, and all elements are zeros."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zeros( d1: number, d2: number, ...dn: number ): Tensor"),": Return a tensor with the input shape, and all elements are zeros."),(0,a.kt)("iframe",{src:"https://hlab.app/s/docs/tensor_demo_mat_reference",width:"100%",height:"400px"}))}m.isMDXComponent=!0}}]);