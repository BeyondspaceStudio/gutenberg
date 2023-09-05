(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4770],{"./packages/block-editor/src/components/dimensions-tool/width-height-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>WidthHeightTool});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/unit-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SingleColumnToolsPanelItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{target:"ef8pe3d0"})({name:"957xgf",styles:"grid-column:span 1"});function WidthHeightTool({panelId,value={},onChange=()=>{},units,isShownByDefault=!0}){var _value$width,_value$height;const width="auto"===value.width?"":null!==(_value$width=value.width)&&void 0!==_value$width?_value$width:"",height="auto"===value.height?"":null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:"",onDimensionChange=dimension=>nextDimension=>{const nextValue={...value};nextDimension?nextValue[dimension]=nextDimension:delete nextValue[dimension],onChange(nextValue)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),isShownByDefault,hasValue:()=>""!==width,onDeselect:onDimensionChange("width"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:width,onChange:onDimensionChange("width"),size:"__unstable-large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),isShownByDefault,hasValue:()=>""!==height,onDeselect:onDimensionChange("height"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:height,onChange:onDimensionChange("height"),size:"__unstable-large"})})]})}WidthHeightTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {WidthHeightToolProps} props The component props.\n\n@return {import('@wordpress/element').WPElement} The width and height tool.",methods:[],displayName:"WidthHeightTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/components/build-module/panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>panel});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const panel_header=function PanelHeader({label,children}){return(0,react.createElement)("div",{className:"components-panel__header"},label&&(0,react.createElement)("h2",null,label),children)};const panel=(0,react.forwardRef)((function UnforwardedPanel({header,className,children},ref){const classNames=classnames_default()(className,"components-panel");return(0,react.createElement)("div",{className:classNames,ref},header&&(0,react.createElement)(panel_header,{label:header}),children)}))},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/block-editor/src/components/dimensions-tool/stories/width-height-tool.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/panel/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),_width_height_tool__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/width-height-tool.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"BlockEditor (Private APIs)/DimensionsTool/WidthHeightTool",component:_width_height_tool__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}},parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool"}},EMPTY_OBJECT={},Default=({panelId,onChange:onChangeProp,...props})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(EMPTY_OBJECT);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Width & Height",panelId,resetAll:()=>{setValue(EMPTY_OBJECT),onChangeProp(EMPTY_OBJECT)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_width_height_tool__WEBPACK_IMPORTED_MODULE_1__.Z,{panelId,onChange:nextValue=>{setValue(nextValue),onChangeProp(nextValue)},value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [value, setValue] = useState(EMPTY_OBJECT);\n  const resetAll = () => {\n    setValue(EMPTY_OBJECT);\n    onChangeProp(EMPTY_OBJECT);\n  };\n  return <Panel>\n            <ToolsPanel label="Width & Height" panelId={panelId} resetAll={resetAll}>\n                <WidthHeightTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChangeProp(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}}}]);