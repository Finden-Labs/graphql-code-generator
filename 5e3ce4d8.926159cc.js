(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),r=a(10),p=(a(0),a(244)),o={id:"typescript-resolvers",title:"TypeScript Resolvers"},i={id:"plugins/typescript-resolvers",title:"TypeScript Resolvers",description:"This plugin generates types for resolve functions. ",source:"@site/docs/plugins/typescript-resolvers.md",permalink:"/docs/plugins/typescript-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-resolvers.md",sidebar:"sidebar",previous:{title:"TypeScript 1.0 Compatibility",permalink:"/docs/plugins/typescript-compatibility"},next:{title:"TypeScript GraphQL Files Modules",permalink:"/docs/plugins/typescript-graphql-files-modules"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"Intergration with Apollo-Server",id:"intergration-with-apollo-server",children:[]},{value:"Plugin Customization",id:"plugin-customization",children:[]},{value:"Mappers - overwrite parents and resolved values",id:"mappers---overwrite-parents-and-resolved-values",children:[]},{value:"Custom Context Type",id:"custom-context-type",children:[]}],s={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This plugin generates types for resolve functions. "),Object(p.b)("p",null,"You can use this plugin as-is to generate simple resolvers signature based on your GraphQL types, or you can change it's behaviour be providing custom model types (",Object(p.b)("inlineCode",{parentName:"p"},"mappers"),")."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-resolvers\n")),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("p",null,"Run ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-codegen")," as usual:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.json\ngenerates:\n  ./src/resolvers-types.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(p.b)("p",null,"Import the types from the generated file and use in the resolver:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { QueryResolvers } from './resolvers-types';\n\nexport const resolvers: QueryResolvers = {\n  myQuery: (root, args, context) => {},\n};\n")),Object(p.b)("p",null,"This will make the resolver fully typed and compatible with typescript compiler, including the handler's arguments and return value."),Object(p.b)("p",null,"Generated resolvers can be passed directly into ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-tools"}),"graphql-tools")," ",Object(p.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," function."),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"addUnderscoreToArgsType (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),")"),Object(p.b)("p",{parentName:"p"},"Adds ",Object(p.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(p.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(p.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(p.b)("h3",{parentName:"p"},"contextType (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Use this configuration to set a custom type for your ",Object(p.b)("inlineCode",{parentName:"p"},"context"),", and it will effect all the resolvers, without the need to override it using generics each time. If you wish to use an external type and import it from another file, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"add")," plugin and add the required ",Object(p.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," syntax."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom Context Type"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: MyContext\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom Context Type"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),Object(p.b)("h3",{parentName:"p"},"fieldContextTypes (",Object(p.b)("inlineCode",{parentName:"h3"},"string array"),")"),Object(p.b)("p",{parentName:"p"},"Use this to set a custom type for a specific field ",Object(p.b)("inlineCode",{parentName:"p"},"context"),". It will only affect the targeted resolvers. You can either use ",Object(p.b)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",Object(p.b)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom Field Context Types"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),Object(p.b)("h3",{parentName:"p"},"rootValueType (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Use this configuration to set a custom type for the ",Object(p.b)("inlineCode",{parentName:"p"},"rootValue"),", and it will effect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time. If you wish to use an external type and import it from another file, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"add")," plugin and add the required ",Object(p.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom RootValue Type"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: MyRootValue\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom RootValue Type"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),Object(p.b)("h3",{parentName:"p"},"mapperTypeSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Adds a suffix to the imported names to prevent name clashes."),Object(p.b)("h3",{parentName:"p"},"mappers (",Object(p.b)("inlineCode",{parentName:"h3"},"Object"),")"),Object(p.b)("p",{parentName:"p"},"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from your resolvers. You can use both ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," and ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom Context Type"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),Object(p.b)("h3",{parentName:"p"},"defaultMapper (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to set the default mapper when it's not being override by ",Object(p.b)("inlineCode",{parentName:"p"},"mappers")," or generics. You can specify a type name, or specify a string in ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," format. The defualt value of mappers it the TypeScript type generated by ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," package."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Replace with any"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: any\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Custom Base Object"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Wrap default types with Partial"),Object(p.b)("p",{parentName:"p"},'You can also specify a custom wrapper for the original type, without overring the original generated types, use "T" to specify the identifier. (for flow, use ',Object(p.b)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Allow deep partial with ",Object(p.b)("inlineCode",{parentName:"h4"},"utility-types")),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),Object(p.b)("h3",{parentName:"p"},"avoidOptionals (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(p.b)("inlineCode",{parentName:"p"},"?"),"), so all field resolvers must be implemented in order to avoid compilation errors."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),Object(p.b)("h3",{parentName:"p"},"showUnusedMappers (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(p.b)("p",{parentName:"p"},"Warns about unused mappers."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),Object(p.b)("h3",{parentName:"p"},"enumValues (",Object(p.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(p.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema, supported in this plugin because of the need for integeration with ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," package. See documentation under ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),Object(p.b)("h3",{parentName:"p"},"resolverTypeWrapperSignature (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"Promise | T"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override ",Object(p.b)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),Object(p.b)("h3",{parentName:"p"},"federation (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Supports Apollo Federation"),Object(p.b)("h3",{parentName:"p"},"enumPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(p.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Disable enum prefixes"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(p.b)("h3",{parentName:"p"},"optionalResolveType (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Sets the ",Object(p.b)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),Object(p.b)("h3",{parentName:"p"},"immutableTypes (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Generates immutable types by adding ",Object(p.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(p.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),".")),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"useIndexSignature (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Adds an index signature to any generates resolver."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   useIndexSignature: true\n")),Object(p.b)("h3",{parentName:"p"},"noSchemaStitching (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Disables Schema Stitching support"),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"The default behavior will be reversed in the next major release. Support for Schema Stitching will be disabled by default.")),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   noSchemaStitching: true\n")),Object(p.b)("h3",{parentName:"p"},"wrapFieldDefinitions (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(p.b)("p",{parentName:"p"},"Set to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(p.b)("inlineCode",{parentName:"p"},"FieldWrapper"),". This is useful to allow return types such as Promises and functions. Needed for compatibility with ",Object(p.b)("inlineCode",{parentName:"p"},"federation: true")," when"),Object(p.b)("h4",{parentName:"p"},"Usage Example: Enable wrapping fields"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: false\n")),Object(p.b)("h3",{parentName:"p"},"customResolveInfo (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'"graphql#GraphQLResolveInfo"'),")"),Object(p.b)("p",{parentName:"p"},"You can provide your custom GraphQLResolveInfo instead of the default one from graphql-js"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolveInfo: ./my-types#MyResolveInfo\n")),Object(p.b)("h3",{parentName:"p"},"customResolverFn (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'"(parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) = Promise | TResult"'),")"),Object(p.b)("p",{parentName:"p"},"You can provide your custom ResolveFn instead the default. It has to be a type that uses the generics TResult, TParent, TContext, TArgs"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: ./my-types#MyResolveFn\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - add: \"import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';\"\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: |\n     (\n       parent: TParent,\n       args: TArgs,\n       context: TContext,\n       info: GraphQLResolveInfo & { graphile: GraphileHelpers<TParent> }\n     ) => Promise<TResult> | TResult;\n"))),Object(p.b)("h2",{id:"how-it-works"},"How It Works"),Object(p.b)("p",null,"This plugin generated TypeScript resolvers signature based on your GraphQL schema.  It creates a default TypeScript resolvers signature, according to your GraphQL schema:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  allUsers: [User]\n  userById(id: Int!): User\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n}\n")),Object(p.b)("p",null,"Given the schema above, the output should be the following:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface QueryResolvers<ContextType = any, ParentType = Query> {\n  allUsers?: Resolver<Array<Maybe<User>>, ParentType, ContextType>;\n  userById?: Resolver<Maybe<User>, ParentType, ContextType, QueryUserByIdArgs>;\n}\n\nexport interface UserResolvers<ContextType = any, ParentType = User> {\n  id?: Resolver<number, ParentType, ContextType>;\n  name?: Resolver<string, ParentType, ContextType>;\n  email?: Resolver<string, ParentType, ContextType>;\n}\n\nexport type Resolvers<ContextType = any> = {\n  Query?: QueryResolvers<ContextType>;\n  User?: UserResolvers<ContextType>;\n};\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"You'll get a ",Object(p.b)("inlineCode",{parentName:"p"},"TypeResolver")," per each type/union/interface, and also a root ",Object(p.b)("inlineCode",{parentName:"p"},"Resolvers")," type that points to all resolvers.")),Object(p.b)("p",null,"Let's talk what you get by default in each resolver function signature:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"an object that its parent resolved, we call it Parent."),Object(p.b)("li",{parentName:"ul"},"a value that resolver returns"),Object(p.b)("li",{parentName:"ul"},"arguments"),Object(p.b)("li",{parentName:"ul"},"a context")),Object(p.b)("p",null,"By default, the context is just an empty object ",Object(p.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(p.b)("p",null,"Arguments are generated based on schema, so you don't have to think about them.\nTypes of a parent and a returned value are pretty interesting. Given the example schema:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  allUsers: [User]\n  userById(id: Int!): User\n}\n\ntype Profile {\n  bio: String\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n  profile: Profile\n}\n")),Object(p.b)("p",null,"By default:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"all fields in ",Object(p.b)("inlineCode",{parentName:"li"},"Profile")," expects to get a ",Object(p.b)("inlineCode",{parentName:"li"},"Profile")," typed object as a parent"),Object(p.b)("li",{parentName:"ul"},"fields in ",Object(p.b)("inlineCode",{parentName:"li"},"User")," receives a ",Object(p.b)("inlineCode",{parentName:"li"},"User")," as a parent"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"User.profile")," returns ",Object(p.b)("inlineCode",{parentName:"li"},"Profile")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"Query.userById")," expects to returns ",Object(p.b)("inlineCode",{parentName:"li"},"User")," typed object")),Object(p.b)("p",null,"This behavior might fit well with how your resolvers look like but in some cases you want to tweak it a bit."),Object(p.b)("h2",{id:"intergration-with-apollo-server"},"Intergration with Apollo-Server"),Object(p.b)("p",null,"If you are using Apollo Server with TypeScript, note that you need to set ",Object(p.b)("inlineCode",{parentName:"p"},"useIndexSignature: true")," in your config, in order to add a compatible index signature (",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/issues/1133#issuecomment-456812621"}),"more info"),")."),Object(p.b)("p",null,"If you wish to have an easy start, and have the ability to use resolvers chaining without models types, you can also add to your config ",Object(p.b)("inlineCode",{parentName:"p"},"defaultMapper: Partial<{T}>"),". This will allow you to return partial typse in your resolvers."),Object(p.b)("h2",{id:"plugin-customization"},"Plugin Customization"),Object(p.b)("p",null,"The generated resolver's signature type can be overridden or modified by taking advantage of the generic deceleration feature."),Object(p.b)("h2",{id:"mappers---overwrite-parents-and-resolved-values"},"Mappers - overwrite parents and resolved values"),Object(p.b)("p",null,"Remember the example we showed you, when the GraphQL type ",Object(p.b)("inlineCode",{parentName:"p"},"User")," expects to be resolved by ",Object(p.b)("inlineCode",{parentName:"p"},"User")," typed object? What if an object returned by ",Object(p.b)("inlineCode",{parentName:"p"},"Query.userById")," has ",Object(p.b)("inlineCode",{parentName:"p"},"_id")," property instead of ",Object(p.b)("inlineCode",{parentName:"p"},"id"),". It breaks the default behavior. Thats' why we implemented mappers."),Object(p.b)("p",null,"The idea behind Mappers is to map a TypeScript model interface to a GraphQL Type so you overwrite that default generated code, because always there is a difference between what GraphQL exposes and how you data is structured internally."),Object(p.b)("p",null,"The default implementation of ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-resolvers")," plugin is using the GraphQL base types generated by ",Object(p.b)("inlineCode",{parentName:"p"},"typeascript")," plugin, and expect this as return value. We can't guess how your data is structured, and we don't attempt to, we just provide default types based on your schema."),Object(p.b)("p",null,"You should use ",Object(p.b)("inlineCode",{parentName:"p"},"mappers")," to map the GraphQL types and your actual model types in order to tell the codegen to use your types instead of the default ones."),Object(p.b)("p",null,"So let's define one. This is what ",Object(p.b)("inlineCode",{parentName:"p"},"Query.userById")," passes on to the ",Object(p.b)("inlineCode",{parentName:"p"},"User")," type:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// src/types.ts\n\nexport interface UserModel {\n  _id: string;\n  name: string;\n  email: string;\n  profile: {\n    bio: text;\n  };\n}\n")),Object(p.b)("p",null,"This is how to map that interface with the according type:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\ngenerates:\n  path/to/file.ts:\n    config:\n      mappers:\n        User: ./types#UserModel\n    plugins:\n      - typescript-resolvers\n")),Object(p.b)("p",null,"Inside of ",Object(p.b)("inlineCode",{parentName:"p"},"config.mappers")," we wired the ",Object(p.b)("inlineCode",{parentName:"p"},"User")," with ",Object(p.b)("inlineCode",{parentName:"p"},"UserModel")," from ",Object(p.b)("inlineCode",{parentName:"p"},"./types.ts"),". You can also define the interface inside of the config file or even use ",Object(p.b)("inlineCode",{parentName:"p"},"any")," and other primitive types."),Object(p.b)("p",null,"By creating a mapper for ",Object(p.b)("inlineCode",{parentName:"p"},"User:UserModel")," you basically telling the codegen that ",Object(p.b)("inlineCode",{parentName:"p"},"UserModel")," is the actual value that we expect to use, instead of the default structure, and then your implementation of resolver could be type-checked and use your own types. (a complete explaintation could be found ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/issues/1219#issuecomment-549244957"}),"here"),")"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"By typing ",Object(p.b)("inlineCode",{parentName:"p"},"./types#UserModel")," we tell codegen to create an import statement that includes ",Object(p.b)("inlineCode",{parentName:"p"},"UserModel")," and gets it from ",Object(p.b)("inlineCode",{parentName:"p"},"./types")," module\nRemember! The path have to be relative to the generated file.")),Object(p.b)("p",null,"Every other, not mapped type follows the default convention, so in order to overwrite it you can use the ",Object(p.b)("inlineCode",{parentName:"p"},"defaultMapper")," option:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\ngenerates:\n  path/to/file.ts:\n    config:\n      defaultMapper: any\n      mappers:\n        User: ./types#UserModel\n    plugins:\n      - typescript-resolvers\n")),Object(p.b)("p",null,"Given the above config, every other type then ",Object(p.b)("inlineCode",{parentName:"p"},"User")," will have ",Object(p.b)("inlineCode",{parentName:"p"},"any")," as its parent and resolved value. We don't recommend to do it but it might be very helpful when you try to slowly map all types."),Object(p.b)("h2",{id:"custom-context-type"},"Custom Context Type"),Object(p.b)("p",null,"If you wish to use a custom type for your GraphQL context, yet you don't want to specify it each and every time you declare your resolvers, you can do it in the config file:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\ngenerates:\n  path/to/file.ts:\n    config:\n      contextType: ./context#MyContext\n    plugins:\n      - typescript-resolvers\n")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface MyContext {\n  authToken: string;\n}\n")),Object(p.b)("p",null,"The config above will make every resolver to have ",Object(p.b)("inlineCode",{parentName:"p"},"MyContext")," as a context type."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { QueryResolvers } from './resolvers-types';\n\nexport const resolvers: QueryResolvers = {\n  myQuery: (root, args, context) => {\n    const { authToken } = context;\n    // ...\n  },\n};\n")),Object(p.b)("p",null,"Field resolvers will be modfied as well."))}c.isMDXComponent=!0},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||p;return a?r.a.createElement(d,i({ref:t},s,{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);