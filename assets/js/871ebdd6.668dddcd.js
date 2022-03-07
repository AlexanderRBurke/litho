"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2280],{3905:(e,i,t)=>{t.r(i),t.d(i,{MDXContext:()=>d,MDXProvider:()=>h,mdx:()=>u,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(){return o=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){return function(i){var t=m(i.components);return n.createElement(e,o({},i,{components:t}))}},m=function(e){var i=n.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},h=function(e){var i=m(e.components);return n.createElement(d.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},v=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(t),h=a,v=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return t?n.createElement(v,s(s({ref:i},d),{},{components:t})):n.createElement(v,s({ref:i},d))}));function u(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var s={};for(var r in i)hasOwnProperty.call(i,r)&&(s[r]=i[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},72018:(e,i,t)=>{t.r(i),t.d(i,{frontMatter:()=>s,contentTitle:()=>r,metadata:()=>d,toc:()=>c,default:()=>h});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],s={id:"visibility-handling",title:"Visibility Handling"},r=void 0,d={unversionedId:"mainconcepts/coordinate-state-actions/visibility-handling",id:"mainconcepts/coordinate-state-actions/visibility-handling",isDocsHomePage:!1,title:"Visibility Handling",description:"Litho provides predefined APIs to support a range of use cases where components",source:"@site/../docs/mainconcepts/coordinate-state-actions/visibility-handling.md",sourceDirName:"mainconcepts/coordinate-state-actions",slug:"/mainconcepts/coordinate-state-actions/visibility-handling",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/visibility-handling.md",tags:[],version:"current",frontMatter:{id:"visibility-handling",title:"Visibility Handling"},sidebar:"mainSidebar",previous:{title:"ComponentTree",permalink:"/docs/mainconcepts/coordinate-state-actions/componenttree"},next:{title:"Keys and Component Identity",permalink:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"}},c=[{value:"Types of Visibility Callbacks",id:"types-of-visibility-callbacks",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Java API:",id:"java-api",children:[{value:"Delcaring Visibility Event Callbacks:",id:"delcaring-visibility-event-callbacks",children:[],level:4},{value:"Using Visibility Event handlers:",id:"using-visibility-event-handlers",children:[],level:4}],level:3},{value:"Custom visibility percentage",id:"custom-visibility-percentage",children:[],level:3},{value:"Changing LithoView visibility",id:"changing-lithoview-visibility",children:[{value:"LithoLifecycleProvider API",id:"litholifecycleprovider-api",children:[],level:4},{value:"Listening to a <code>LithoLifecycleProvider</code> state changes",id:"listening-to-a-litholifecycleprovider-state-changes",children:[],level:4},{value:"<code>AOSPLithoLifecycleProvider</code>",id:"aosplitholifecycleprovider",children:[],level:4},{value:"Handling custom state changes: LithoLifecycleProviderDelegate",id:"handling-custom-state-changes-litholifecycleproviderdelegate",children:[],level:4},{value:"Nested ComponentTrees and <code>LithoLifecycleProvider</code>",id:"nested-componenttrees-and-litholifecycleprovider",children:[],level:4},{value:"setVisibilityHint (Deprecated)",id:"setvisibilityhint-deprecated",children:[],level:4}],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2}],m={toc:c};function h(e){var i=e.components,t=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},m,t,{components:i,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Litho provides predefined APIs to support a range of use cases where components\nrequire callbacks when the on-screen position relative to the visible view port changes."),(0,o.mdx)("h2",{id:"types-of-visibility-callbacks"},"Types of Visibility Callbacks"),(0,o.mdx)("p",null,"The framework currently supports six types of Visibility callbacks:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibleEvent.html"},"Visible"),": Invoked when at least one pixel of the Component is visible."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/InvisibleEvent.html"},"Invisible"),": Invoked when the Component no longer has any pixels on the screen."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FocusedVisibleEvent.html"},"Focused Visible"),": Invoked when either the Component occupies at least half of the viewport, or, if the Component is smaller than half the viewport, when it is fully visible."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/UnfocusedVisibleEvent.html"},"Unfocused Visible"),": Invoked when the Component is no longer focused, i.e. it is not fully visible and does not occupy at least half the viewport."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FullImpressionVisibleEvent.html"},"Full Impression Visible Event"),": If the Component is smaller than the viewport, this callback is invoked when the entire Component is visible in the viewport. If the Component is bigger than the viewport, then just covering the viewport won't invoke this callback: it will be invoked when all the edges have passed through the viewport once."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibilityChangedEvent.html"},"Visibility Changed"),": Invoked everytime the bounds of the Component changes.")),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("h3",{id:"java-api"},"Java API:"),(0,o.mdx)("h4",{id:"delcaring-visibility-event-callbacks"},"Delcaring Visibility Event Callbacks:"),(0,o.mdx)("p",null,"Visibility callbacks are declared like all other events in Litho. Please see the documentation for ",(0,o.mdx)("a",{parentName:"p",href:"/docs/codegen/events-for-specs"},"events")," to learn more."),(0,o.mdx)("h4",{id:"using-visibility-event-handlers"},"Using Visibility Event handlers:"),(0,o.mdx)("p",null,"Visibility handlers can be set on any component. Here is a comprehensive example of its usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/events/VisibilityEventExampleSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/events/VisibilityEventExampleSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\nclass VisibilityEventExampleSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Column.create(c)\n        .alignItems(YogaAlign.STRETCH)\n        .child(\n            Text.create(c)\n                .text("This is a layout spec")\n                .visibleHandler(VisibilityEventExample.onTitleVisible(c))\n                .invisibleHandler(VisibilityEventExample.onTitleInvisible(c))\n                .focusedHandler(VisibilityEventExample.onComponentFocused(c, "someStringParam"))\n                .fullImpressionHandler(VisibilityEventExample.onComponentFullImpression(c)))\n        .visibilityChangedHandler(VisibilityEventExample.onComponentVisibilityChanged(c))\n        .build();\n  }\n\n  @OnEvent(VisibleEvent.class)\n  static void onTitleVisible(ComponentContext c) {\n    Log.d("VisibilityEvent", "The title entered the Visible Range");\n  }\n\n  @OnEvent(InvisibleEvent.class)\n  static void onTitleInvisible(ComponentContext c) {\n    Log.d("VisibilityEvent", "The title is no longer visible");\n  }\n\n  @OnEvent(FocusedVisibleEvent.class)\n  static void onComponentFocused(ComponentContext c, @Param String stringParam) {\n    Log.d("VisibilityEvent", "The component is focused with param: " + stringParam);\n  }\n\n  @OnEvent(FullImpressionVisibleEvent.class)\n  static void onComponentFullImpression(ComponentContext c) {\n    Log.d("VisibilityEvent", "The component has logged a full impression");\n  }\n\n  @OnEvent(VisibilityChangedEvent.class)\n  static void onComponentVisibilityChanged(\n      ComponentContext c,\n      @FromEvent int visibleTop,\n      @FromEvent int visibleLeft,\n      @FromEvent int visibleHeight,\n      @FromEvent int visibleWidth,\n      @FromEvent float percentVisibleHeight,\n      @FromEvent float percentVisibleWidth) {\n    Log.d(\n        "VisibilityEvent",\n        "The component\'s visible size is " + visibleHeight + "h" + visibleWidth + "w");\n  }\n}\n')),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"VisibilityChangedEvents should be used with particular care since they will be invoked on every frame while scrolling. No heavy work should be done inside the VisibilityChangedEvents callback. Visible, Invisible, Focused, Unfocused and Full Impression are recommended over VisibilityChanged whenever possible."))),(0,o.mdx)("h3",{id:"custom-visibility-percentage"},"Custom visibility percentage"),(0,o.mdx)("p",null,"By default, ",(0,o.mdx)("inlineCode",{parentName:"p"},"VisibleEvent")," is triggered when at least 1 pixel of the Component is visible. In some cases you may want to listen to custom visibility changes, and perform an action when the Component is only partially visible.\nYou can specify a ratio of the Component width or height for the visibility callback to be dispatched by using ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleHeightRatio")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleWidthRatio")," props when specifying a visibility handler."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n\n    return Column.create(c)\n        .alignItems(YogaAlign.STRETCH)\n        .child(Text.create(c)\n            .text("This is MY layout spec")\n            .visibleHandler(MyLayout.onTitleVisible(c))\n            .visibleHeightRatio(0.8f)\n            .visibleWidthRatio(0.1f)\n        .build();\n}\n')),(0,o.mdx)("p",null,"For the example above, a VisibilityEvent is dispatched when at least 80% of the Component's height and 10% of the Component's width is visible.\nWhen the Component's visible percentage changes to less than 80% of total height, an invisible event will be dispatched.\nIf not specified, the default width or height ratio is 1f."),(0,o.mdx)("h3",{id:"changing-lithoview-visibility"},"Changing LithoView visibility"),(0,o.mdx)("p",null,"There are cases when you need to trigger visibility events on the LithoView components because the UI visibility changed, but the UI did not receive any callback to inform it of this change. An example is when a new activity is added to the back stack, covering the UI. In such cases you need to inform the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," that its visibility status changed, to tell the UI whether it is visible or not. You may want to do this when ",(0,o.mdx)("inlineCode",{parentName:"p"},"Fragment#setUserVisibleHint")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"onResume/onPause")," are called."),(0,o.mdx)("h4",{id:"litholifecycleprovider-api"},"LithoLifecycleProvider API"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," API can inform LithoViews which are registered to listen to lifecycle state changes that their visibility status changed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public interface LithoLifecycleProvider {\n  void moveToLifecycle(LithoLifecycle lithoLifecycle);\n\n  void addListener(LithoLifecycleListener listener);\n}\n")),(0,o.mdx)("p",null,"The following states are valid LithoLifecycleProvider states:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE"),": this state indicates that the lifecycle provider is considered to be not visible on screen. Lifecycle observers can perform operations which are associated with invisibility status. An example of moving to ",(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE")," state is when a fragment goes from ",(0,o.mdx)("inlineCode",{parentName:"li"},"resumed")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"paused")," because the app was backgrounded."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE"),": this state indicates that the lifecycle provider is considered visible on screen. Lifecycle observers can perform operations which are associated with visibility status. An example of moving to ",(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE")," state is when a fragment goes from ",(0,o.mdx)("inlineCode",{parentName:"li"},"paused")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"resumed")," because the app was foregrounded."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DESTROYED"),": this is the final state of a lifecycle provider. Lifecycle observers can perform operations associated with releasing resources. An example of moving to ",(0,o.mdx)("inlineCode",{parentName:"li"},"DESTOYED")," state is when the hosting Activity is destroyed.")),(0,o.mdx)("h4",{id:"listening-to-a-litholifecycleprovider-state-changes"},"Listening to a ",(0,o.mdx)("inlineCode",{parentName:"h4"},"LithoLifecycleProvider")," state changes"),(0,o.mdx)("p",null,"You can register a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," to listen to state changes of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," instance when you create it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"final LithoLifecycleProvider lifecycleProvider;\nfinal LithoView lithoView = LithoView.create(c, component, lithoLifecycleProvider);\n")),(0,o.mdx)("p",null,"These actions will be performed when moving to the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," states:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"InvisibleEvents")," will be dispatched to all Components inside the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LithoView")," which were visible."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"VisibleEvents")," will be dispatched to all Components inside the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LithoView")," which meet the visibility criteria."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DESTROYED"),": The ",(0,o.mdx)("inlineCode",{parentName:"li"},"ComponentTree")," associated with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LithoView")," will be released, ",(0,o.mdx)("inlineCode",{parentName:"li"},"InvisibleEvents")," will be dispatched to all Components which were visible and all content will be unmounted.")),(0,o.mdx)("h4",{id:"aosplitholifecycleprovider"},(0,o.mdx)("inlineCode",{parentName:"h4"},"AOSPLithoLifecycleProvider")),(0,o.mdx)("p",null,"This is an implementation of ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," which has the state tied to that of an AOSP ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/lifecycle#lco"},"LifecycleOwner"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"li"},"ON_PAUSE")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE")," state"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"li"},"ON_RESUME")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE")," state"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"li"},"ON_DESTROY")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"DESTROYED")," state")),(0,o.mdx)("p",null,"You can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," when you want to associate a LithoView's visibility status with the lifecycle of a Fragment, Activity or custom LifecycleOwner, when ",(0,o.mdx)("inlineCode",{parentName:"p"},"resumed")," means the LithoView is on screen and ",(0,o.mdx)("inlineCode",{parentName:"p"},"paused")," means the LithoView is hidden."),(0,o.mdx)("p",null,"Click ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.java#L79"},"here")," to see an example in the litho sample app."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"final AOSPLithoLifecycleProvider lifecycleProvider = new AOSPLithoLifecycleProvider(fragment);\n")),(0,o.mdx)("h4",{id:"handling-custom-state-changes-litholifecycleproviderdelegate"},"Handling custom state changes: LithoLifecycleProviderDelegate"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," covers the most common cases, but there are scenarios where a LifecycleOwner's state doesn't match what we see on screen.\nSuch examples are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Fragments in a ViewPager, where the previous and next visible Fragments are prepared and in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"resumed")," state before they're actually visible. Click ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/lifecycle/ScreenSlidePageFragment.java"},"here")," to see an example in the litho sample app.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Adding a Fragment on top of another Fragment doesn't move the first Fragment to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"paused")," state, and there's no indication that it's no longer visible to the user. Click ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blame/master/sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleFragment.java"},"here")," to see an example in the litho sample app."))),(0,o.mdx)("p",null,"When you need to handle these state changes manually, you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProviderDelegate"),", a generic ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," implementation, to change state when appropriate."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"final LithoLifecycleProviderDelegate lifecycleProvider = new LithoLifecycleProviderDelegate();\nlifecycleProvider.moveToLifecycle(<new LithoLifecycle state>);\n")),(0,o.mdx)("h4",{id:"nested-componenttrees-and-litholifecycleprovider"},"Nested ComponentTrees and ",(0,o.mdx)("inlineCode",{parentName:"h4"},"LithoLifecycleProvider")),(0,o.mdx)("p",null,"The Litho APIs for writing Lists (Sections, VerticalScrollSpec, HorizontalScrollSpec) will create hierarchies of nested ComponentTrees:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"a ComponentTree at the root of the hierarchy, encapsulating the entire list (associated with a root LithoView)"),(0,o.mdx)("li",{parentName:"ul"},"a ComponentTree for each item in the List (associated with a LithoView child of the root LithoView)")),(0,o.mdx)("p",null,"If the root LithoView is subscribed to listen to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider"),", then all nested ComponentTrees/child LithoViews will listen to the outer ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," too and will receive the correct information about visibility/destroyed state."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The section below contains information about deprecated APIs. Please consider using ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," for manually informing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," about visibility changes."))),(0,o.mdx)("h4",{id:"setvisibilityhint-deprecated"},"setVisibilityHint (Deprecated)"),(0,o.mdx)("p",null,"Example usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"LithoView.setVisibilityHint(true); // This will dispatch visible/focused events as necessary on all components inside this LithoView\nLithoView.setVisibilityHint(false); // This will dispatch invisible/unfocused events as necessary on all components inside this LithoView\n")),(0,o.mdx)("p",null,"After calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView.setVisibilityHint(false)"),", the LithoView will consider itself not visible and will ignore any requests to mount until ",(0,o.mdx)("inlineCode",{parentName:"p"},"setVisibilityHint(true)")," is called.\nYou may still unmount the entire LithoView content by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"unmountAll")," if the visibility hint was set to false.\nResetting the visibility hint to true after it was set to false will also trigger a mount pass, in case the visible bounds changed while the LithoView was ignoring mount requests."),(0,o.mdx)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.mdx)("p",null,"If you are not seeing your visibility event fired when you expect it to be, you can take the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Verify that incremental mount is enabled for your Component. It is enabled by default, but if you turned it off, then visibility events will not be fired."),(0,o.mdx)("li",{parentName:"ol"},"Verify that you actually set the event that you defined in your spec on your Component (i.e. by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"visibleHandler(MyLayout.onTitleVisible(c))")," or similar."),(0,o.mdx)("li",{parentName:"ol"},"Visibility handlers are fired in ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-core/src/main/java/com/facebook/litho/MountState.java#L489:L657"},(0,o.mdx)("inlineCode",{parentName:"a"},"MountState.processVisibilityOutputs()")),". You can step through this method and see why the event that you expect to be fired is not being fired.")))}h.isMDXComponent=!0}}]);