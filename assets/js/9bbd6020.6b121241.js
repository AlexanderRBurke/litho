"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9088],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),d=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=o,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13919:(e,n,t)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>o})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>r});var a=t(52263),o=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,m=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(s)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return m?e+d:d}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},60656:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>u});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(44996),s=["components"],l={id:"transition-basics",title:"Animation basics"},m=void 0,d={unversionedId:"animations/transition-basics",id:"animations/transition-basics",isDocsHomePage:!1,title:"Animation basics",description:"Introduction",source:"@site/../docs/animations/transition-basics.mdx",sourceDirName:"animations",slug:"/animations/transition-basics",permalink:"/docs/animations/transition-basics",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-basics.mdx",tags:[],version:"current",frontMatter:{id:"transition-basics",title:"Animation basics"},sidebar:"mainSidebar",previous:{title:"Triggering events with Handles",permalink:"/docs/codegen/trigger-events"},next:{title:"Types of Transitions",permalink:"/docs/animations/transition-types"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Bounds Transitions",id:"bounds-transitions",children:[],level:2},{value:"Transitions",id:"transitions",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"introduction"},"Introduction"),(0,i.mdx)("p",null,"Within Litho, UI updates are performed by changing state or props on the Component Tree, instead of mutating the views directly.\nThe animation framework adds transitions to components that are triggered when regenerating a tree."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"It's important to avoid accessing the underlying view to add animations as these values will probably not be preserved."))),(0,i.mdx)("p",null,"Transitions can be used to animate view properties when they change between layouts, which is due to a state update or new props from the parent.\nWhen changes to a tree occur due to a new state, these changes happen immediately."),(0,i.mdx)("p",null,"The following code and animation show a simple Component that renders a yellow square then aligns it to either the right or left edge of screen based on value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@State boolean toRight"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SimpleAllLayoutTransitionComponentSpec.java start=start end=no_animation",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SimpleAllLayoutTransitionComponentSpec.java",start:"start",end:"no_animation"},"@LayoutSpec\npublic class SimpleAllLayoutTransitionComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .clickHandler(SimpleAllLayoutTransitionComponent.onClickEvent(c))\n        .child(SolidColor.create(c).color(YELLOW).widthDip(80).heightDip(80))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    SimpleAllLayoutTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n")),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics1.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"When the value of the state changes, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," is re-rendered, which makes the square appear to 'jump' from its previous position to the new one.\nThe following section shows how to replace this 'jump' with a transition animation."),(0,i.mdx)("h2",{id:"bounds-transitions"},"Bounds Transitions"),(0,i.mdx)("p",null,"To add bounds animations to all transitioning components between tree changes, use the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SimpleAllLayoutTransitionComponentSpec.java start=no_animation end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SimpleAllLayoutTransitionComponentSpec.java",start:"no_animation",end:"end"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.allLayout();\n}\n")),(0,i.mdx)("p",null,"Returning ",(0,i.mdx)("a",{parentName:"p",href:"https://staticdocs.thefacebook.com/litho/javadoc/com/facebook/litho/Transition.html#allLayout--"},(0,i.mdx)("inlineCode",{parentName:"a"},"Transition.allLayout()"))," creates a Transition that automatically animates any changes to position, width, or height, as shown in the following animation."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics2.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"This method only works when changing the bounds of a component.  It does not work with:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Other properties"),", including scale, alpha, and rotation."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Components")," being added or removed.")),(0,i.mdx)("h2",{id:"transitions"},"Transitions"),(0,i.mdx)("p",null,"For greater control over the transitions, you can use the following APIs:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"@OnCreateTransition"))," method - you need to add a method annotated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateTransition")," to your Spec, which is used to define the transition animations. It should return a ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html"},"Transition")," where its first argument should always be of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentContext"),". As with other lifecycle methods in a Spec, it could also have ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop")," and  ",(0,i.mdx)("inlineCode",{parentName:"li"},"StateValue"),"-type arguments."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"Transition"))," - a description of the Component/Property (mandatory) and how (optional) you want to animate it. Instead of using a Constructor to create ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition")," instances, you'll use one of the provided ",(0,i.mdx)("inlineCode",{parentName:"li"},"Builder"),"s."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"transitionKey"))," - an identifier that you'd normally assign to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," that you want to animate.  The key is then used when defining ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"AnimatedProperties"))," - used to target the property of a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," that should be animated when its value changes.")),(0,i.mdx)("p",null,"The following sample shows the APIs in use:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/AlphaTransitionComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/AlphaTransitionComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class AlphaTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isHalfAlpha) {\n    return Column.create(c)\n        .clickHandler(AlphaTransitionComponent.onClickEvent(c))\n        .child(\n            Row.create(c)\n                .backgroundColor(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .alpha(isHalfAlpha ? 0.5f : 1.0f)\n                .transitionKey(SQUARE_KEY))\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AlphaTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> isHalfAlpha) {\n    isHalfAlpha.set(!isHalfAlpha.get());\n  }\n}\n')),(0,i.mdx)("p",null,"In the above code:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"On ",(0,i.mdx)("em",{parentName:"li"},"line 16"),", a ",(0,i.mdx)("inlineCode",{parentName:"li"},"transitionKey")," is assigned to the component using the ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html#transitionKey-java.lang.String-"},"Component.Builder#transitionKey")," method.")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"In ",(0,i.mdx)("em",{parentName:"li"},"lines 22-24"),", a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition")," is created using ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String-"},"Transition.create()")," that takes a ",(0,i.mdx)("inlineCode",{parentName:"li"},"transitionKey")," and then specifies the property of the component using the ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionUnitsBuilder.html#animate-com.facebook.litho.animation.AnimatedProperty-"},".animate()")," method, which takes an ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/animation/AnimatedProperties.html"},"AnimatedProperty"),".")),(0,i.mdx)("p",null,"Both of these methods take a ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String...-"},"variable number of arguments"),", which means multiple ",(0,i.mdx)("inlineCode",{parentName:"p"},"Transition"),"s may be expressed as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'private static final String SQUARE_KEY = "square";\nprivate static final String OVAL_KEY = "oval";\nprivate static final String ANOTHER_SHAPE = "another_shape";\n\n...\n\n@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY, OVAL_KEY, ANOTHER_SHAPE)\n        .animate(AnimatedProperties.X, AnimatedProperties.Y);\n}\n')),(0,i.mdx)("p",null,"The following animation shows the AlphaTransitionComponentSpec in action."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics3.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"The transitions animations API supports three ",(0,i.mdx)("a",{parentName:"p",href:"/docs/animations/transition-types"},"types of transitions"),": ",(0,i.mdx)("strong",{parentName:"p"},"Change"),", ",(0,i.mdx)("strong",{parentName:"p"},"Appear")," and ",(0,i.mdx)("strong",{parentName:"p"},"Disappear"),", which work differently depending on how the tree changes between states. The example in this page uses a Change transition."))}u.isMDXComponent=!0}}]);