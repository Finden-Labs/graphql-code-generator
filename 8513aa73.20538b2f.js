(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(10),a=(n(0),n(244)),c={id:"development-workflow",title:"Development Workflow"},i={id:"getting-started/development-workflow",title:"Development Workflow",description:"The GraphQL Code Generator should be integrated as part of your development workflow.",source:"@site/docs/getting-started/development-workflow.md",permalink:"/docs/getting-started/development-workflow",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/development-workflow.md",sidebar:"sidebar",previous:{title:"Lifecycle Hooks",permalink:"/docs/getting-started/lifecycle-hooks"},next:{title:"Programmatic Usage",permalink:"/docs/getting-started/programmatic-usage"}},p=[{value:"Scripts Integration",id:"scripts-integration",children:[]},{value:"Watch Mode",id:"watch-mode",children:[]},{value:"Monorepo and Yarn Workspaces",id:"monorepo-and-yarn-workspaces",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The GraphQL Code Generator should be integrated as part of your development workflow."),Object(a.b)("h3",{id:"scripts-integration"},"Scripts Integration"),Object(a.b)("p",null,"If you wish to run the codegen before starting your server/app, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"pre")," scripts in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev": "nodemon app.js",\n    "start": "node app.js",\n    "generate": "graphql-codegen",\n    "prestart": "yarn generate",\n    "predev": "yarn generate"\n  }\n}\n')),Object(a.b)("p",null,"This way, the codegen will generate the output according to your configuration before each time you run ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," or ",Object(a.b)("inlineCode",{parentName:"p"},"start")," scripts."),Object(a.b)("p",null,"It's also useful to run the codegen during your continuous integration flow and make sure that you code always compiles with the generated output, this way you can detect breaking changes in your GraphQL schema and GraphQL documents."),Object(a.b)("h3",{id:"watch-mode"},"Watch Mode"),Object(a.b)("p",null,"If you wish to run the codegen in watch mode, you can specify ",Object(a.b)("inlineCode",{parentName:"p"},"--watch")," when running it."),Object(a.b)("p",null,"You can either run it in a separate terminal session, or use tools like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/concurrently"}),Object(a.b)("inlineCode",{parentName:"a"},"concurrently"))," to run two scripts at the same time:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev": "concurrently \\"nodemon app.js\\" \\"yarn generate --watch\\"",\n    "start": "node app.js",\n    "generate": "graphql-codegen",\n    "prestart": "yarn generate"\n  }\n}\n')),Object(a.b)("h3",{id:"monorepo-and-yarn-workspaces"},"Monorepo and Yarn Workspaces"),Object(a.b)("p",null,"If you are using a monorepo structure, with tools such as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/workspaces/"}),"Yarn Workspaces")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"Lerna"),", we recommend to install the codegen in the root of your monorepo."),Object(a.b)("p",null,"If you need to execute the codegen multiple times, note that you can specify multiple fields for ",Object(a.b)("inlineCode",{parentName:"p"},"generates")," field, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: 'server/src/**/*.graphql'\ndocuments: 'client/src/**/*.graphql'\ngenerates:\n  client/src/models.ts:\n    - typescript\n    - typescript-operations\n  server/src/models.ts:\n    - typescript\n    - typescript-resolvers\n")))}l.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,i({ref:t},s,{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);