(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{637:function(t,e,n){"use strict";n.r(e);var s=n(54),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"useeffect用法汇总"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect用法汇总"}},[t._v("#")]),t._v(" useEffect用法汇总")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("下面将通过与类组件生命周期对比的方式说明"),n("code",[t._v("useEffect()")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),n("p",[n("code",[t._v("useEffect()")]),t._v(" 本身是一个函数，由 React 框架提供，在函数组件内部调用即可。")]),t._v(" "),n("p",[t._v("可以认为"),n("code",[t._v("useEffect")]),t._v("的作用是替代类组件中的一些声明周期（"),n("code",[t._v("componentDidMount")]),t._v(", "),n("code",[t._v("componentWillUnmount")]),t._v(", "),n("code",[t._v("componentWillUpdate")]),t._v(", "),n("code",[t._v("componentDidUpdate")]),t._v("）")]),t._v(" "),n("p",[t._v("我们希望组件加载以后，网页标题"),n("code",[t._v("document.title")]),t._v("会随之改变。那么，改变网页标题这个操作，就是组件的副效应，必须通过"),n("code",[t._v("useEffect()")]),t._v("来实现。")]),t._v(" "),n("h3",{attrs:{id:"react-hook两大守则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-hook两大守则"}},[t._v("#")]),t._v(" React hook两大守则")]),t._v(" "),n("ul",[n("li",[t._v("只能在外层"),n("code",[t._v("scope")]),t._v("使用")]),t._v(" "),n("li",[t._v("只能在 "),n("code",[t._v("function component")]),t._v(" 或 "),n("code",[t._v("custom hook")]),t._v(" 中使用。")])]),t._v(" "),n("h3",{attrs:{id:"useeffect基本語法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect基本語法"}},[t._v("#")]),t._v(" useEffect基本語法")]),t._v(" "),n("p",[t._v("useEffect接收两个参数，第一个是一个函式，定义 "),n("code",[t._v("componentDidMount")]),t._v(" 或 "),n("code",[t._v("componentDidUpdate")]),t._v(" 要做什么事，此函式的返回值要是一个函式，表示 "),n("code",[t._v("componentWillUnmount")]),t._v(" 或者 "),n("code",[t._v("componentWillUpdate")]),t._v(" 要做什么事。第二个是一个 "),n("code",[t._v("array")]),t._v("，数组对应的变量被修改是，"),n("code",[t._v("useEffect")]),t._v(" 要重新被触发。这个类组件的"),n("code",[t._v("componentDidUpdate")]),t._v("和"),n("code",[t._v("prevState!=this.state")]),t._v("类似。")]),t._v(" "),n("h2",{attrs:{id:"useeffect-第二个参数为-空数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-第二个参数为-空数组"}},[t._v("#")]),t._v(" "),n("code",[t._v("useEffect")]),t._v(" 第二个参数为 "),n("code",[t._v("[]")]),t._v(" 空数组")]),t._v(" "),n("p",[t._v("第二个参数为 "),n("code",[t._v("[]")]),t._v(" 空数组(不是省略)，代表除了第一次以外，接下来每次re-render，都不会执行useEffect，所以就等同于componentDidMount。")]),t._v(" "),n("p",[t._v("此时，第一个参数的 "),n("code",[t._v("return")]),t._v(" 方法，\n会在组件销毁的时候执行，相当于类组件的 "),n("code",[t._v("componentWillUnmount")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 下面是 componentDidMount */")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面是 componentDidMount */")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 下面是 componentWillUnmount */")]),t._v("\n      \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面是 componentWillUnmount */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"useeffect第二个参数为非空数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect第二个参数为非空数组"}},[t._v("#")]),t._v(" "),n("code",[t._v("useEffect")]),t._v("第二个参数为"),n("strong",[t._v("非空数组")])]),t._v(" "),n("p",[t._v("此时，\n第一次"),n("code",[t._v("render")]),t._v("会执行"),n("code",[t._v("effect")]),t._v("  -- "),n("code",[t._v("componentDidMount")]),t._v("\n每次依赖项 "),n("code",[t._v("dependencies")]),t._v(" 发生改变的时候也会执行"),n("code",[t._v("effect")]),t._v(" -- "),n("code",[t._v("componentDidUpdate")])]),t._v(" "),n("p",[t._v("第一个参数的 "),n("code",[t._v("return")]),t._v(" 方法\n会在组件"),n("code",[t._v("re-render")]),t._v("前执行，相当于类组件的 "),n("code",[t._v("componentWillUpdate")]),t._v("；\n会在组件销毁的时候执行， 相当于类组件的 "),n("code",[t._v("componentWillUnmount")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 下面是 componentDidMount 和  componentDidUpdate */")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面是 componentDidMount 和  componentDidUpdate */")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 下面是 componentWillUnmount */")]),t._v("\n      \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面是 componentWillUnmount */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"useeffect-省略第二个参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-省略第二个参数"}},[t._v("#")]),t._v(" "),n("code",[t._v("useEffect")]),t._v(" 省略第二个参数")]),t._v(" "),n("p",[t._v("此时，\n第一次"),n("code",[t._v("render")]),t._v("会执行"),n("code",[t._v("effect")]),t._v("  -- "),n("code",[t._v("componentDidMount")]),t._v("\n每次 "),n("code",[t._v("render")]),t._v(" 的时候也会执行"),n("code",[t._v("effect")]),t._v(" -- "),n("code",[t._v("componentDidUpdate")])]),t._v(" "),n("p",[t._v("第一个参数的 "),n("code",[t._v("return")]),t._v(" 方法，\n会在组件"),n("code",[t._v("re-render")]),t._v("前执行，相当于类组件的 "),n("code",[t._v("componentWillUpdate")]),t._v("；\n会在组件销毁的时候执行， 相当于类组件的 "),n("code",[t._v("componentWillUnmount")]),t._v("。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("不建议这么使用，由于每次 "),n("code",[t._v("render")]),t._v(" 都会触发 "),n("code",[t._v("useEffect")]),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"useeffect的其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect的其他"}},[t._v("#")]),t._v(" useEffect的其他")]),t._v(" "),n("p",[t._v("可以有多个 "),n("code",[t._v("useEffect")]),t._v("存在同一"),n("code",[t._v("function component")]),t._v("和"),n("code",[t._v("custom hook")]),t._v("中，所以我们可以针对不同的情况去使用不同的"),n("code",[t._v("useEffect")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"表格总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表格总结"}},[t._v("#")]),t._v(" 表格总结")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("code",[t._v("useEffect")]),t._v(" 第二个参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("code",[t._v("useEffect")]),t._v("第一个参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("code",[t._v("useEffect")]),t._v("第一个参数的"),n("code",[t._v("return")]),t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("[]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("componentDidMount")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("componentWillUnmount")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("[dependencies]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("code",[t._v("componentDidMount")])]),t._v(" 和 "),n("code",[t._v("dependencies")]),t._v(" 触发的 "),n("code",[t._v("componentDidUpdate")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("dependencies")]),t._v(" 触发的 "),n("code",[t._v("componentWillUpdate")]),t._v(" 和 "),n("code",[t._v("componentWillUnmount")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("undefined")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("code",[t._v("componentDidMount")])]),t._v(" 和 所有更新触发的 "),n("code",[t._v("componentDidUpdate")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("所有更新触发的 "),n("code",[t._v("componentWillUpdate")]),t._v(" 和 "),n("code",[t._v("componentWillUnmount")])])])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://jishuin.proginn.com/p/763bfbd5b44f",target:"_blank",rel:"noopener noreferrer"}},[t._v("useEffect 源码"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);