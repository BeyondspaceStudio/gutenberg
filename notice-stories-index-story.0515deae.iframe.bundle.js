"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9189],{"./packages/a11y/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>speak});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");function addContainer(ariaLive="polite"){const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body}=document;return body&&body.appendChild(container),container}let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/components/src/notice/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/element/build-module/serialize.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/element/build-module/raw-html.js"),_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/a11y/build-module/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/icons/build-module/library/close.js"),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function getDefaultPoliteness(status){switch(status){case"success":case"warning":case"info":return"polite";default:return"assertive"}}function Notice({className,status="info",children,spokenMessage=children,onRemove=noop,isDismissible=!0,actions=[],politeness=getDefaultPoliteness(status),__unstableHTML,onDismiss=noop}){!function useSpokenMessage(message,politeness){const spokenMessage="string"==typeof message?message:(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.ZP)(message);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)((()=>{spokenMessage&&(0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.D)(spokenMessage,politeness)}),[spokenMessage,politeness])}(spokenMessage,politeness);const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-notice","is-"+status,{"is-dismissible":isDismissible});__unstableHTML&&"string"==typeof children&&(children=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Z,{children}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classes,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"components-notice__content",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"components-notice__actions",children:actions.map((({className:buttonCustomClasses,label,isPrimary,variant,noDefaultClasses=!1,onClick,url},index)=>{let computedVariant=variant;return"primary"===variant||noDefaultClasses||(computedVariant=url?"link":"secondary"),void 0===computedVariant&&isPrimary&&(computedVariant="primary"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{href:url,variant:computedVariant,onClick:url?void 0:onClick,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-notice__action",buttonCustomClasses),children:label},index)}))})]}),isDismissible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{className:"components-notice__dismiss",icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__.Z,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dismiss this notice"),onClick:event=>{event?.preventDefault?.(),onDismiss(),onRemove()},showTooltip:!1})]})}Notice.displayName="Notice";const __WEBPACK_DEFAULT_EXPORT__=Notice;try{Notice.displayName="Notice",Notice.__docgenInfo={description:'`Notice` is a component used to communicate feedback to the user.\n\n```jsx\nimport { Notice } from `@wordpress/components`;\n\nconst MyNotice = () => (\n  <Notice status="error">An unknown error occurred.</Notice>\n);\n```',displayName:"Notice",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The displayed message of a notice. Also used as the spoken message for\nassistive technology, unless `spokenMessage` is provided as an alternative message.",name:"children",required:!0,type:{name:"ReactNode"}},spokenMessage:{defaultValue:{value:"`children`"},description:"Used to provide a custom spoken message in place of the `children` default.",name:"spokenMessage",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"info"},description:"Determines the color of the notice: `warning` (yellow),\n`success` (green), `error` (red), or `'info'`.\nBy default `'info'` will be blue, but if there is a parent Theme component\nwith an accent color prop, the notice will take on that color instead.",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"info"'}]}},onRemove:{defaultValue:{value:"() => {}"},description:"Function called when dismissing the notice",name:"onRemove",required:!1,type:{name:"() => void"}},politeness:{defaultValue:{value:"getDefaultPoliteness( status )"},description:"A politeness level for the notice's spoken message. Should be provided as\none of the valid options for an `aria-live` attribute value.\n\nA value of `'assertive'` is to be used for important, and usually\ntime-sensitive, information. It will interrupt anything else the screen\nreader is announcing in that moment.\nA value of `'polite'` is to be used for advisory information. It should\nnot interrupt what the screen reader is announcing in that moment\n(the \"speech queue\") or interrupt the current task.\n\nNote that this value should be considered a suggestion; assistive\ntechnologies may override it based on internal heuristics.\n@see https://www.w3.org/TR/wai-aria-1.1/#aria-live",name:"politeness",required:!1,type:{name:"enum",value:[{value:'"assertive"'},{value:'"polite"'}]}},isDismissible:{defaultValue:{value:"true"},description:"Whether the notice should be dismissible or not",name:"isDismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:{value:"() => {}"},description:"A deprecated alternative to `onRemove`. This prop is kept for\ncompatibilty reasons but should be avoided.",name:"onDismiss",required:!1,type:{name:"() => void"}},actions:{defaultValue:{value:"[]"},description:"An array of action objects. Each member object should contain:\n\n- `label`: `string` containing the text of the button/link\n- `url`: `string` OR `onClick`: `( event: SyntheticEvent ) => void` to specify\n   what the action does.\n- `className`: `string` (optional) to add custom classes to the button styles.\n- `noDefaultClasses`: `boolean` (optional) A value of `true` will remove all\n   default styling.\n- `variant`: `'primary' | 'secondary' | 'link'` (optional) You can denote a\n   primary button action for a notice by passing a value of `primary`.\n\nThe default appearance of an action button is inferred based on whether\n`url` or `onClick` are provided, rendering the button as a link if\nappropriate. If both props are provided, `url` takes precedence, and the\naction button will render as an anchor tag.",name:"actions",required:!1,type:{name:"NoticeAction[]"}},__unstableHTML:{defaultValue:null,description:"Determines whether or not the message should be parsed as custom HTML\ninstead of a string.",name:"__unstableHTML",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/notice/index.tsx#Notice"]={docgenInfo:Notice.__docgenInfo,name:"Notice",path:"packages/components/src/notice/index.tsx#Notice"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/notice/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoticeListSubcomponent:()=>NoticeListSubcomponent,WithActions:()=>WithActions,WithCustomSpokenMessage:()=>WithCustomSpokenMessage,WithJSXChildren:()=>WithJSXChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),src_notice=__webpack_require__("./packages/components/src/notice/index.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function NoticeList({notices,onRemove=noop,className,children}){return className=classnames_default()("components-notice-list",className),(0,jsx_runtime.jsxs)("div",{className,children:[children,[...notices].reverse().map((notice=>{const{content,...restNotice}=notice;return(0,react.createElement)(src_notice.Z,{...restNotice,key:notice.id,onRemove:(id=notice.id,()=>onRemove(id))},notice.content);var id}))]})}NoticeList.displayName="NoticeList";const list=NoticeList;try{NoticeList.displayName="NoticeList",NoticeList.__docgenInfo={description:"`NoticeList` is a component used to render a collection of notices.\n\n```jsx\nimport { Notice, NoticeList } from `@wordpress/components`;\n\nconst MyNoticeList = () => {\nconst [ notices, setNotices ] = useState( [\n\t{\n\t\tid: 'second-notice',\n\t\tcontent: 'second notice content',\n\t},\n\t{\n\t\tid: 'fist-notice',\n\t\tcontent: 'first notice content',\n\t},\n] );\n\nconst removeNotice = ( id ) => {\n\tsetNotices( notices.filter( ( notice ) => notice.id !== id ) );\n};\n\nreturn <NoticeList notices={ notices } onRemove={ removeNotice } />;\n};\n```",displayName:"NoticeList",props:{notices:{defaultValue:null,description:"Array of notices to render.",name:"notices",required:!0,type:{name:'(Omit<NoticeProps, "children"> & { id: string; content: string; })[]'}},onRemove:{defaultValue:{value:"() => {}"},description:"Function called when a notice should be removed / dismissed.",name:"onRemove",required:!1,type:{name:"(id: string) => void"}},children:{defaultValue:null,description:"Children to be rendered inside the notice list.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/notice/list.tsx#NoticeList"]={docgenInfo:NoticeList.__docgenInfo,name:"NoticeList",path:"packages/components/src/notice/list.tsx#NoticeList"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Components/Notice",component:src_notice.Z,subcomponents:{NoticeList:list},parameters:{sourceLink:"packages/components/src/notice",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=props=>(0,jsx_runtime.jsx)(src_notice.Z,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"This is a notice."};const WithCustomSpokenMessage=Template.bind({});WithCustomSpokenMessage.args={...Default.args,politeness:"assertive",spokenMessage:"This is a notice with a custom spoken message"};const WithJSXChildren=Template.bind({});WithJSXChildren.args={...Default.args,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{children:["JSX elements can be helpful",(0,jsx_runtime.jsx)("strong",{children:" if you need to format"})," the notice output."]}),(0,jsx_runtime.jsx)("code",{children:"note: in the interest of consistency, this should not be overused!"})]})};const WithActions=Template.bind({});WithActions.args={...Default.args,actions:[{label:"Click me!",onClick:()=>{},variant:"primary"},{label:"Or click me instead!",onClick:()=>{}},{label:"Or visit a link for more info",url:"https://wordpress.org",variant:"link"}]};const NoticeListSubcomponent=()=>{const exampleNotices=[{id:"second-notice",content:"second notice content"},{id:"first-notice",content:"first notice content"}],[notices,setNotices]=(0,react.useState)(exampleNotices);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(list,{notices,onRemove:id=>{setNotices(notices.filter((notice=>notice.id!==id)))}}),(0,jsx_runtime.jsx)(src_button.ZP,{variant:"primary",onClick:()=>{setNotices(exampleNotices)},children:"Reset Notices"})]})};NoticeListSubcomponent.storyName="NoticeList Subcomponent",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...Default.parameters?.docs?.source}}},WithCustomSpokenMessage.parameters={...WithCustomSpokenMessage.parameters,docs:{...WithCustomSpokenMessage.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithCustomSpokenMessage.parameters?.docs?.source}}},WithJSXChildren.parameters={...WithJSXChildren.parameters,docs:{...WithJSXChildren.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithJSXChildren.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithActions.parameters?.docs?.source}}},NoticeListSubcomponent.parameters={...NoticeListSubcomponent.parameters,docs:{...NoticeListSubcomponent.parameters?.docs,source:{originalSource:"() => {\n  const exampleNotices = [{\n    id: 'second-notice',\n    content: 'second notice content'\n  }, {\n    id: 'first-notice',\n    content: 'first notice content'\n  }];\n  const [notices, setNotices] = useState(exampleNotices);\n  const removeNotice = (id: NoticeListProps['notices'][number]['id']) => {\n    setNotices(notices.filter(notice => notice.id !== id));\n  };\n  const resetNotices = () => {\n    setNotices(exampleNotices);\n  };\n  return <>\n            <NoticeList notices={notices} onRemove={removeNotice} />\n            <Button variant={'primary'} onClick={resetNotices}>\n                Reset Notices\n            </Button>\n        </>;\n}",...NoticeListSubcomponent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomSpokenMessage","WithJSXChildren","WithActions","NoticeListSubcomponent"]}}]);