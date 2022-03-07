"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5171],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){return function(t){var n=s(t.components);return a.createElement(e,r({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(n),p=o,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>r,default:()=>l});var a=n(52263),o=n(13919);function r(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,l=r.forcePrependBaseUrl,i=void 0!==l&&l,m=r.absolute,d=void 0!==m&&m;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(i)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+c:c}(r,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(87462),o=n(67294),r=n(72389),l=n(79443);const i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var m=n(83039),d=n(86010);const c="tabItem_1uMI";function s(e){var t,n,a,r=e.lazy,l=e.block,s=e.defaultValue,p=e.values,u=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),x=(0,m.duplicates)(v,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(t=null!=s?s:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),b=g.tabGroupChoices,w=g.setTabGroupChoices,C=(0,o.useState)(y),N=C[0],T=C[1],k=[],O=(0,m.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=u){var j=b[u];null!=j&&j!==N&&v.some((function(e){return e.value===j}))&&T(j)}var S=function(e){var t=e.currentTarget,n=k.indexOf(t),a=v[n].value;a!==N&&(O(t),T(a),null!=u&&w(u,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=k.indexOf(e.currentTarget)+1;n=k[a]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.currentTarget)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("tabs",{"tabs--block":l},h)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,d.default)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,r.default)();return o.createElement(s,(0,a.Z)({key:String(t)},e))}},27749:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>f});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(55064),i=n(58215),m=n(44996),d=["components"],c={id:"layout-specs",title:"Layout Specs"},s=void 0,p={unversionedId:"codegen/layout-specs",id:"codegen/layout-specs",isDocsHomePage:!1,title:"Layout Specs",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/codegen/layout-specs.mdx",sourceDirName:"codegen",slug:"/codegen/layout-specs",permalink:"/docs/codegen/layout-specs",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/layout-specs.mdx",tags:[],version:"current",frontMatter:{id:"layout-specs",title:"Layout Specs"},sidebar:"mainSidebar",previous:{title:"Interactions",permalink:"/docs/kotlin/testing-actions"},next:{title:"Mount Specs",permalink:"/docs/codegen/mount-specs"}},u=[],h={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),(0,r.mdx)(l.default,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"layout spec")," is the logical equivalent of a composite view on Android. It simply groups existing components together in an immutable layout tree."),(0,r.mdx)("p",null,"Implementing a layout spec is very simple: you only need to write one method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," which returns an immutable tree of ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Component.html"},"Component")," objects."),(0,r.mdx)("p",null,"Let's start with a simple example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop int color,\n      @Prop String title) {\n      return Row.create(c)\n          .alignItems(CENTER)\n          .child(\n              SolidColor.create(c)\n                  .colorRes(color)\n                  .widthDip(40)\n                  .heightDip(40))\n          .child(\n              Text.create(c)\n                  .text(title)\n                  .textSizeRes(R.dimen.my_text_size)\n                  .flexGrow(1f))\n          .build();\n  }\n}\n")),(0,r.mdx)("p",null,"As you can see, layout spec classes use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotation."),(0,r.mdx)("p",null,"The method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," must have ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentContext.html"},"ComponentContext")," as its first argument followed by a list of arguments annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop"),". The annotation processor will validate this and other invariants in the API at build time."),(0,r.mdx)("p",null,"In the example above, the layout tree has a root ",(0,r.mdx)("em",{parentName:"p"},"Container")," with two children stacked horizontally (",(0,r.mdx)("inlineCode",{parentName:"p"},"Row.create"),") and vertically centered (",(0,r.mdx)("inlineCode",{parentName:"p"},"Align.CENTER"),")."),(0,r.mdx)("p",null,"The first child is a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/SolidColor.html"},"SolidColor")," component that takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorRes")," prop and has a 40dp width and height."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"SolidColor.create(c)\n    .colorRes(color)\n    .width(40)\n    .height(40)\n")),(0,r.mdx)("p",null,"The second child is a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Text.html"},"Text")," component that takes a prop named ",(0,r.mdx)("inlineCode",{parentName:"p"},"text")," and fills the remaining horizontal space available in ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyComponent")," by using ",(0,r.mdx)("inlineCode",{parentName:"p"},"grow(1f)")," (equivalent to Android's ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutWeight")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"). The text size is defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"my_text_size")," dimension resource."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Text.create(c)\n    .text(title)\n    .textSizeRes(R.dimen.my_text_size)\n    .grow(1f)\n")),(0,r.mdx)("img",{src:(0,m.default)("/images/flow-chart-v0.23.1-layout-spec.svg"),alt:"Layout Spec lifecycle flowchart",className:"white-background"}),(0,r.mdx)("p",null,"You can check the full ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga")," documentation to see all the layout features that the framework exposes.")),(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"layout spec")," is the logical equivalent of a composite view on Android. It simply groups existing components together in an immutable layout tree."),(0,r.mdx)("p",null,"Implementing a layout spec is very simple: you only need to write one method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," which returns an immutable tree of ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Component.html"},"Component")," objects."),(0,r.mdx)("p",null,"Let's start with a simple example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@LayoutSpec\nobject MyComponentSpec {\n\n  @OnCreateLayout\n  fun onCreateLayout(\n      c: ComponentContext,\n      @Prop image: String,\n      @Prop(optional = true) imageAspectRatio: Float): Component =\n      Row.create(c)\n          .alignItems(CENTER)\n          .child(\n              SolidColor.create(c)\n                  .colorRes(color)\n                  .widthDip(40)\n                  .heightDip(40))\n          .child(\n              Text.create(c)\n                  .text(title)\n                  .textSizeRes(R.dimen.my_text_size)\n                  .flexGrow(1f))\n          .build()\n}\n")),(0,r.mdx)("p",null,"As you can see, layout spec classes use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotation."),(0,r.mdx)("p",null,"The method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," must have ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentContext.html"},"ComponentContext")," as its first argument followed by a list of arguments annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop"),". The annotation processor will validate this and other invariants in the API at build time."),(0,r.mdx)("p",null,"In the example above, the layout tree has a root ",(0,r.mdx)("em",{parentName:"p"},"Container")," with two children stacked horizontally (",(0,r.mdx)("inlineCode",{parentName:"p"},"Row.create"),") and vertically centered (",(0,r.mdx)("inlineCode",{parentName:"p"},"Align.CENTER"),")."),(0,r.mdx)("p",null,"The first child is a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/SolidColor.html"},"SolidColor")," component that takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorRes")," prop and has a 40dp width and height."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"SolidColor.create(c)\n    .colorRes(color)\n    .width(40)\n    .height(40)\n")),(0,r.mdx)("p",null,"The second child is a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Text.html"},"Text")," component that takes a prop named ",(0,r.mdx)("inlineCode",{parentName:"p"},"text")," and fills the remaining horizontal space available in ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyComponent")," by using ",(0,r.mdx)("inlineCode",{parentName:"p"},"grow(1f)")," (equivalent to Android's ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutWeight")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"). The text size is defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"my_text_size")," dimension resource."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"Text.create(c)\n    .text(title)\n    .textSizeRes(R.dimen.my_text_size)\n    .grow(1f)\n")),(0,r.mdx)("img",{src:(0,m.default)("/images/flow-chart-v0.23.1-layout-spec.svg"),alt:"Layout Spec lifecycle flowchart",className:"white-background"}),(0,r.mdx)("p",null,"You can check the full ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga")," documentation to see all the layout features that the framework exposes."))))}f.isMDXComponent=!0}}]);