"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9501],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pC:()=>MDXContext,NF:()=>withMDXComponents,ah:()=>useMDXComponents,Zo:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./storybook/stories/docs/components/readme.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_wordpress_components_README_md_raw__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/README.md?raw");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Introduction"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:_wordpress_components_README_md_raw__WEBPACK_IMPORTED_MODULE_3__})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./packages/components/README.md?raw":module=>{module.exports="# Component Reference\n\nThis package includes a library of generic WordPress components to be used for creating common UI elements shared between screens and features of the WordPress dashboard.\n\n## Installation\n\n```bash\nnpm install @wordpress/components --save\n```\n\n_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._\n\n## Usage\n\nWithin Gutenberg, these components can be accessed by importing from the `components` root directory:\n\n```jsx\n/**\n * WordPress dependencies\n */\nimport { Button } from '@wordpress/components';\n\nexport default function MyButton() {\n\treturn <Button>Click Me!</Button>;\n}\n```\n\nMany components include CSS to add styles, which you will need to load in order for them to appear correctly. Within WordPress, add the `wp-components` stylesheet as a dependency of your plugin's stylesheet. See [wp_enqueue_style documentation](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters) for how to specify dependencies.\n\nIn non-WordPress projects, link to the `build-style/style.css` file directly, it is located at `node_modules/@wordpress/components/build-style/style.css`.\n\n### Popovers and Tooltips\n\n_If you're using [`Popover`](/packages/components/src/popover/README.md) or [`Tooltip`](/packages/components/src/tooltip/README.md) components outside of the editor, make sure they are rendered within a `SlotFillProvider` and with a `Popover.Slot` somewhere up the element tree._\n\nBy default, the `Popover` component will render within an extra element appended to the body of the document.\n\nIf you want to precisely contol where the popovers render, you will need to use the `Popover.Slot` component.\n\nA `Popover` is also used as the underlying mechanism to display `Tooltip` components.\nSo the same considerations should be applied to them.\n\nThe following example illustrates how you can wrap a component using a\n`Popover` and have those popovers render to a single location in the DOM.\n\n```jsx\n/**\n * External dependencies\n */\nimport { Popover, SlotFillProvider } from '@wordpress/components';\n\n/**\n * Internal dependencies\n */\nimport { MyComponentWithPopover } from './my-component';\n\nconst Example = () => {\n\t<SlotFillProvider>\n\t\t<MyComponentWithPopover />\n\t\t<Popover.Slot />\n\t</SlotFillProvider>\n};\n```\n\n## Docs & examples\n\nYou can browse the components docs and examples at [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/)\n\n## Contributing to this package\n\nThis is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.\n\nTo find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).\n\nThis package also has its own [contributing information](https://github.com/WordPress/gutenberg/tree/HEAD/packages/components/CONTRIBUTING.md) where you can find additional details.\n\n<br /><br /><p align=\"center\"><img src=\"https://s.w.org/style/images/codeispoetry.png?1\" alt=\"Code is Poetry.\" /></p>\n"}}]);