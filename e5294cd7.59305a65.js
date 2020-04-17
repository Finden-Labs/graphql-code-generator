(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(10),o=(n(0),n(244)),l={},c={id:"generated-config/flow",title:"flow",description:"### useFlowExactObjects (`boolean`, default value: `true`)",source:"@site/docs/generated-config/flow.md",permalink:"/docs/generated-config/flow",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/flow.md"},u=[{value:"useFlowExactObjects (<code>boolean</code>, default value: <code>true</code>)",id:"useflowexactobjects-boolean-default-value-true",children:[]},{value:"useFlowReadOnlyTypes (<code>boolean</code>, default value: <code>false</code>)",id:"useflowreadonlytypes-boolean-default-value-false",children:[]}],i={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"useflowexactobjects-boolean-default-value-true"},"useFlowExactObjects (",Object(o.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(o.b)("p",null,"Generates Flow types as Exact types."),Object(o.b)("h4",{id:"usage-example"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowExactObjects: false\n")),Object(o.b)("h3",{id:"useflowreadonlytypes-boolean-default-value-false"},"useFlowReadOnlyTypes (",Object(o.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(o.b)("p",null,"Generates read-only Flow types"),Object(o.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowReadOnlyTypes: true\n")))}s.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,c({ref:t},i,{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);