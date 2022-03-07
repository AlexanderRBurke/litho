"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5213],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),p=function(e){return function(n){var t=s(n.components);return a.createElement(e,r({},n,{components:t}))}},s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},53903:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"events-for-specs",title:"Events for Specs"},c=void 0,d={unversionedId:"codegen/events-for-specs",id:"codegen/events-for-specs",isDocsHomePage:!1,title:"Events for Specs",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/codegen/events-for-specs.md",sourceDirName:"codegen",slug:"/codegen/events-for-specs",permalink:"/docs/codegen/events-for-specs",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/events-for-specs.md",tags:[],version:"current",frontMatter:{id:"events-for-specs",title:"Events for Specs"},sidebar:"mainSidebar",previous:{title:"State in Specs",permalink:"/docs/codegen/state-for-specs"},next:{title:"Triggering events with Handles",permalink:"/docs/codegen/trigger-events"}},p=[{value:"Callbacks",id:"callbacks",children:[],level:2}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),(0,r.mdx)("p",null,"The framework provides a general-purpose API to connect components through events. Events are declared as a POJO with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Event")," annotation. By convention we suffix Event class names with ",(0,r.mdx)("em",{parentName:"p"},"Event"),". Event declarations may not be inner classes of your ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutSpec")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountSpec"),". This is by design as specs are supposed to be a private concept and events can be used across multiple components."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@Event\npublic class ColorChangedEvent {\n  public int color;\n}\n")),(0,r.mdx)("p",null,"In this example we will assume we have a component called ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent"),". To indicate that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," can dispatch a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent")," our ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponentSpec")," must be annotated with that information. This is done with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events")," parameter of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotations. A component may be annotated to dispatch multiple events."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec(events = { ColorChangedEvent.class })\nclass ColorComponentSpec {\n  ...\n  @OnCreateLayout\n  static Component onCreateLayout(\n      Context c,\n      @Prop int color) {\n    ...\n    EventHandler handler = ColorComponent.getColorChangedEventHandler(c);\n    if (handler != null) {\n      ColorComponent.dispatchColorChangedEvent(\n          handler,\n          color);\n    }\n    ...\n  }\n}\n")),(0,r.mdx)("p",null,"For an event of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"FooEvent"),", this will auto-generate a matching ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method and an event identifier that will used by event callbacks."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method takes an ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/EventHandler.html"},"EventHandler")," as the first argument followed by the list of attributes defined in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Event")," class. An ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," is essentially a generic listener interface to connect components through events. The convention is to have an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," prop for each event exposed by your component."),(0,r.mdx)("p",null,"In the example above, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorChangedHandler")," as prop and dispatches the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent")," to it with the generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchColorChangedEvent()")," method."),(0,r.mdx)("h2",{id:"callbacks"},"Callbacks"),(0,r.mdx)("p",null,"In order to handle events dispatched by other components, you'll need an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," instance and a matching callback."),(0,r.mdx)("p",null,"You can create ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," instances by using your generated component's corresponding event handler factory method. This method will have the same name as your event callback method."),(0,r.mdx)("p",null,"You define the event callback using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," annotation. ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," takes one argument: the event class. The first parameter of a method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," has to be a ComponentContext that the framework will populate for you."),(0,r.mdx)("p",null,"For example, here's how a component would define a handler for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent")," declared above:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String someColor) {\n\n    return Column.create(c)\n        ...\n        .child(\n            ColorComponent.create(c)\n                .color(someColor)\n                .colorChangedHandler(MyComponent.onColorChanged(c)))\n        ...\n        .build();\n\n  }\n\n  @OnEvent(ColorChangedEvent.class)\n  static void onColorChanged(\n      ComponentContext c,\n      @FromEvent int color,\n      @Prop String someProp) {\n    Log.d("MyComponent", "Color changed: " + color);\n  }\n}\n')),(0,r.mdx)("p",null,"Using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Param")," annotation on one or more of the parameters of the callback method you can define dynamic event parameters. This is useful if you would like to define a callback for a certain type of event e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"onAvatarClicked()")," but would like to know what avatar was clicked. The avatar parameter in this case would be passed to the event handler factory method."),(0,r.mdx)("p",null,"As you can see, ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," callbacks have access to all component props just like the other spec methods."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass FacePileComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop Uri[] faces) {\n    Component.Builder builder = Column.create(c);\n    for (Uri face : faces) {\n      builder.child(\n          FrescoImage.create(c)\n              .uri(face)\n              .clickHandler(FacePileComponent.onFaceClicked(c, face)));\n    }\n\n    return builder.build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onFaceClicked(\n      ComponentContext c,\n      @Param Uri face) {\n    Log.d("FacePileComponent", "Face clicked: " + face);\n  }\n}\n')))}m.isMDXComponent=!0}}]);