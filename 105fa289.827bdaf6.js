(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(10),r=(n(0),n(244)),i={},l={id:"generated-config/client-side-base-visitor",title:"client-side-base-visitor",description:"### gqlImport (`string`, default value: `gql#graphql-tag`)",source:"@site/docs/generated-config/client-side-base-visitor.md",permalink:"/docs/generated-config/client-side-base-visitor",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/client-side-base-visitor.md"},d=[{value:"gqlImport (<code>string</code>, default value: <code>gql#graphql-tag</code>)",id:"gqlimport-string-default-value-gqlgraphql-tag",children:[]},{value:"operationResultSuffix (<code>string</code>, default value: <code>&quot;&quot;</code>)",id:"operationresultsuffix-string-default-value-",children:[]},{value:"dedupeOperationSuffix (<code>boolean</code>, default value: <code>false</code>)",id:"dedupeoperationsuffix-boolean-default-value-false",children:[]},{value:"omitOperationSuffix (<code>boolean</code>, default value: <code>false</code>)",id:"omitoperationsuffix-boolean-default-value-false",children:[]},{value:"documentMode (<code>&#39;graphQLTag&#39; | &#39;documentNode&#39; | &#39;documentNodeImportFragments&#39; | &#39;external&#39;</code>, default value: <code>&#39;graphQLTag&#39;</code>)",id:"documentmode-graphqltag--documentnode--documentnodeimportfragments--external-default-value-graphqltag",children:[]},{value:"importDocumentNodeExternallyFrom (<code>string | &#39;near-operation-file&#39;</code>, default value: <code>&#39;&#39;</code>)",id:"importdocumentnodeexternallyfrom-string--near-operation-file-default-value-",children:[]}],c={rightToc:d};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"gqlimport-string-default-value-gqlgraphql-tag"},"gqlImport (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"gql#graphql-tag"),")"),Object(r.b)("p",null,"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," be imported from. This is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(r.b)("h4",{id:"usage-example-graphqlmacro"},"Usage Example: graphql.macro"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(r.b)("h4",{id:"usage-example-gatsby"},"Usage Example: Gatsby"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(r.b)("h3",{id:"operationresultsuffix-string-default-value-"},"operationResultSuffix (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(r.b)("p",null,"Adds a suffix to generated operation result type names"),Object(r.b)("h3",{id:"dedupeoperationsuffix-boolean-default-value-false"},"dedupeOperationSuffix (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",null,"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(r.b)("h3",{id:"omitoperationsuffix-boolean-default-value-false"},"omitOperationSuffix (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",null,"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(r.b)("h3",{id:"documentmode-graphqltag--documentnode--documentnodeimportfragments--external-default-value-graphqltag"},"documentMode (",Object(r.b)("inlineCode",{parentName:"h3"},"'graphQLTag' | 'documentNode' | 'documentNodeImportFragments' | 'external'"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"'graphQLTag'"),")"),Object(r.b)("p",null,"Declares how DocumentNode are created: - ",Object(r.b)("inlineCode",{parentName:"p"},"graphQLTag"),": ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag")," or other modules (check ",Object(r.b)("inlineCode",{parentName:"p"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client - ",Object(r.b)("inlineCode",{parentName:"p"},"documentNode"),": document nodes will be generated as objects when we generate the templates. - ",Object(r.b)("inlineCode",{parentName:"p"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them. - ",Object(r.b)("inlineCode",{parentName:"p"},"external"),": document nodes are imported from an external file. To be used with ",Object(r.b)("inlineCode",{parentName:"p"},"importDocumentNodeExternallyFrom")),Object(r.b)("h3",{id:"importdocumentnodeexternallyfrom-string--near-operation-file-default-value-"},"importDocumentNodeExternallyFrom (",Object(r.b)("inlineCode",{parentName:"h3"},"string | 'near-operation-file'"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(r.b)("p",null,"This config should be used if ",Object(r.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(r.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage: - any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag")," in a separate file and export the generated document - 'near-operation-file': This is a special mode that is intended to be used with ",Object(r.b)("inlineCode",{parentName:"p"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," files, we make use of webpack loader."),Object(r.b)("h4",{id:"usage-example"},"Usage Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")))}u.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,s=p["".concat(i,".").concat(b)]||p[b]||m[b]||r;return n?o.a.createElement(s,l({ref:t},c,{components:n})):o.a.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);