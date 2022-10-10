"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3898],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},192:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:5},l="Browser Requirements",c={unversionedId:"Browser Requirements",id:"Browser Requirements",title:"Browser Requirements",description:"We support the latest versions of Chrome, Safari, Microsft Edge, Brave and any browsers with a Chromium-based core. Firefox is not supported at this time. But before you start, make sure you have the latest version of your browser.",source:"@site/Hedgehog-Lab/Browser Requirements.mdx",sourceDirName:".",slug:"/Browser Requirements",permalink:"/Hedgehog-Lab/Browser Requirements",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"The Environment",permalink:"/Hedgehog-Lab/The Environment"},next:{title:"The Programming Language",permalink:"/Hedgehog-Lab/Programming Language"}},u={},p=[{value:"GPU Acceleration",id:"gpu-acceleration",level:3},{value:"Local Storage and Cookies",id:"local-storage-and-cookies",level:3}],f={toc:p};function m(e){var r=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browser-requirements"},"Browser Requirements"),(0,a.kt)("p",null,"We support the latest versions of ",(0,a.kt)("strong",{parentName:"p"},"Chrome"),", ",(0,a.kt)("strong",{parentName:"p"},"Safari"),", ",(0,a.kt)("strong",{parentName:"p"},"Microsft Edge"),", ",(0,a.kt)("strong",{parentName:"p"},"Brave")," and any browsers with a ",(0,a.kt)("strong",{parentName:"p"},"Chromium"),"-based core. Firefox is not supported at this time. But before you start, make sure you have the latest version of your browser."),(0,a.kt)("h3",{id:"gpu-acceleration"},"GPU Acceleration"),(0,a.kt)("p",null,"Make sure WebGL and/or WebGL2 is enabled in your browser. You can check this by going to ",(0,a.kt)("a",{parentName:"p",href:"https://webglreport.com/"},"https://webglreport.com/"),". If WebGL is not enabled, you will see a red warning. If WebGL is enabled, you will see a green checkmark."),(0,a.kt)("p",null,"Also you can check the performance of following benchmark script. If the benchmark of GPU is faster than CPU, WebGL is enabled."),(0,a.kt)("hr",null),(0,a.kt)("iframe",{src:"https://hlab.app/s/docs/gpu_acceleration_demo_1",width:"100%",height:"300px"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If not enabled, please enable it. If you are using Chrome, you can enable it by going to ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://flags/#ignore-gpu-blacklist")," and enable the flag. If you are using Safari, you can enable it by going to ",(0,a.kt)("inlineCode",{parentName:"p"},"Safari > Preferences > Advanced > Show Develop menu in menu bar")," and enable ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGL 2.0"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebGL Config",src:t(9352).Z,width:"1128",height:"192"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"local-storage-and-cookies"},"Local Storage and Cookies"),(0,a.kt)("p",null,"Make sure your browser allows local storage and cookies. You can check this by going to ",(0,a.kt)("a",{parentName:"p",href:"https://browserleaks.com/localstorage"},"https://browserleaks.com/localstorage"),". If local storage and cookies are not enabled, you will see a red warning. If local storage and cookies are enabled, you will see a green checkmark."))}m.isMDXComponent=!0},9352:function(e,r,t){r.Z=t.p+"assets/images/browser_requirements_webgl-48555562f3b34b73a22ec624021bc0d6.jpg"}}]);