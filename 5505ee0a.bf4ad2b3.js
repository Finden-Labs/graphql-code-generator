(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(10),p=(n(0),n(244)),i={id:"typescript-graphql-request",title:"TypeScript GraphQL-Request"},o={id:"plugins/typescript-graphql-request",title:"TypeScript GraphQL-Request",description:"This plugin generates [`graphql-request`](https://www.npmjs.com/package/graphql-request) ready-to-use SDK, which is fully-typed.",source:"@site/docs/plugins/typescript-graphql-request.md",permalink:"/docs/plugins/typescript-graphql-request",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-graphql-request.md",sidebar:"sidebar",previous:{title:"TypeScript Urql",permalink:"/docs/plugins/typescript-urql"},next:{title:"Flow Types",permalink:"/docs/plugins/flow"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Simple Request Middleware",id:"simple-request-middleware",children:[{value:"Examples of Middleware",id:"examples-of-middleware",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This plugin generates ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-request"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-request"))," ready-to-use SDK, which is fully-typed."),Object(p.b)("p",null,Object(p.b)("h2",{parentName:"p"},"Requirements"),Object(p.b)("p",{parentName:"p"},"In order to use this package, please make sure that you have GraphQL operations set as ",Object(p.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(p.b)("p",{parentName:"p"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-codegen-graphql-request-example"}),"You can find a working example with this plugin here")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request\n")),Object(p.b)("p",null,"The, make sure you have ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," plugin and ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-operations")," as well in your configuration:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: https://countries.trevorblades.com/\ndocuments: 'src/graphql/**/*.graphql'\ngenerates:\n  src/sdk.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-graphql-request\n")),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("p",null,"For the given input:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query continents {\n  continents {\n    name\n    countries {\n      ...CountryFields\n    }\n  }\n}\nfragment CountryFields on Country {\n  name\n  currency\n}\n")),Object(p.b)("p",null,"It generates SDK you can import and wrap your ",Object(p.b)("inlineCode",{parentName:"p"},"GraphQLClient")," instance, and get fully-typed SDK based on your operations:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphQLClient } from 'graphql-request';\nimport { getSdk } from './sdk'; // THIS FILE IS THE GENERATED FILE\n\nasync function main() {\n  const client = new GraphQLClient('https://countries.trevorblades.com/');\n  const sdk = getSdk(client);\n  const { continents } = await sdk.continents(); // This is fully typed, based on the query\n\n  console.log(`GraphQL data:`, continents);\n}\n")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"gqlImport (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"gql#graphql-tag"),")"),Object(p.b)("p",{parentName:"p"},"Customize from which module will ",Object(p.b)("inlineCode",{parentName:"p"},"gql")," be imported from. This is useful if you want to use modules other than ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Example: graphql.macro"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Gatsby"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(p.b)("h3",{parentName:"p"},"operationResultSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),Object(p.b)("h3",{parentName:"p"},"dedupeOperationSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(p.b)("h3",{parentName:"p"},"omitOperationSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(p.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(p.b)("h3",{parentName:"p"},"documentMode (",Object(p.b)("inlineCode",{parentName:"h3"},"'graphQLTag' | 'documentNode' | 'documentNodeImportFragments' | 'external'"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"'graphQLTag'"),")"),Object(p.b)("p",{parentName:"p"},"Declares how DocumentNode are created: - ",Object(p.b)("inlineCode",{parentName:"p"},"graphQLTag"),": ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag")," or other modules (check ",Object(p.b)("inlineCode",{parentName:"p"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client - ",Object(p.b)("inlineCode",{parentName:"p"},"documentNode"),": document nodes will be generated as objects when we generate the templates. - ",Object(p.b)("inlineCode",{parentName:"p"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them. - ",Object(p.b)("inlineCode",{parentName:"p"},"external"),": document nodes are imported from an external file. To be used with ",Object(p.b)("inlineCode",{parentName:"p"},"importDocumentNodeExternallyFrom")),Object(p.b)("h3",{parentName:"p"},"importDocumentNodeExternallyFrom (",Object(p.b)("inlineCode",{parentName:"h3"},"string | 'near-operation-file'"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(p.b)("p",{parentName:"p"},"This config should be used if ",Object(p.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(p.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage: - any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag")," in a separate file and export the generated document - 'near-operation-file': This is a special mode that is intended to be used with ",Object(p.b)("inlineCode",{parentName:"p"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(p.b)("inlineCode",{parentName:"p"},".graphql")," files, we make use of webpack loader."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"rawRequest (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"By default the ",Object(p.b)("inlineCode",{parentName:"p"},"request")," method return the ",Object(p.b)("inlineCode",{parentName:"p"},"data")," or ",Object(p.b)("inlineCode",{parentName:"p"},"errors")," key from the response. If you need to access the ",Object(p.b)("inlineCode",{parentName:"p"},"extensions")," key you can use the ",Object(p.b)("inlineCode",{parentName:"p"},"rawRequest")," method."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-graphql-request\n config:\n   rawRequest: true\n"))),Object(p.b)("h2",{id:"simple-request-middleware"},"Simple Request Middleware"),Object(p.b)("p",null,"The generated sdk accepts an optional middleware function to wrap the requests the ",Object(p.b)("inlineCode",{parentName:"p"},"client")," makes."),Object(p.b)("p",null,"This can enable scenarios like request failure retries and logging at the sdk level."),Object(p.b)("p",null,"To use middleware, just pass an ",Object(p.b)("inlineCode",{parentName:"p"},"SdkFunctionWrapper")," as the second argument to\n",Object(p.b)("inlineCode",{parentName:"p"},"getSdk"),"."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"// `SdkFunctionWrapper` is a type we provide. `action` is the `client` request execution generated by this template. The wrapper MUST invoke `action()` and should return the promise returned by `action`, or its resolution.\n\ntype SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;\n")),Object(p.b)("h3",{id:"examples-of-middleware"},"Examples of Middleware"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"This example shows a naive request timing logger.")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"const client = new GraphQLClient('');\nconst clientTimingWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {\n  const startTime = new Date();\n  const result = await action();\n  console.log('request duration (ms)', new Date() - startTime)\n  return result;\n}\n\nconst sdk = getSdk(client, clientTimingWrapper);\n")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"This example uses ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mauricedb/polly-js"}),"polly-js")," to define a failure retry wrapper. (this is the use case for which i originally intended to add this capability)")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"const withRetries: RetryWrapper = <T>(action: () => Promise<T>) =>\n  polly()\n    .handle((err: Error) => {\n      warn('GraphqlClient:NetworkError', err);\n      return err.message.includes('connect ETIMEDOUT');\n    })\n    .waitAndRetry(3)\n    .executeForPromise(info => {\n      if (info.count === 3) {\n        error('GraphqlClient:MaxRetries', null, {\n          ...info,\n          action: action.toString(),\n        });\n      } else if (info.count > 0) {\n        warn('GraphqlClient:RetryingCall', null, {\n          ...info,\n          action: action.toString(),\n        });\n      }\n\n      return action();\n    });\n\nconst sdk = getSdk(client, withRetries);\n")))}s.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||p;return n?r.a.createElement(d,o({ref:t},l,{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);