(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{514:function(s,t,a){"use strict";a.r(t);var e=a(54),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"跨站脚本攻击-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨站脚本攻击-xss"}},[s._v("#")]),s._v(" 跨站脚本攻击(xss)")]),s._v(" "),a("p",[s._v("cross site scripting")]),s._v(" "),a("h2",{attrs:{id:"什么是xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是xss"}},[s._v("#")]),s._v(" 什么是XSS")]),s._v(" "),a("p",[s._v("简单来说，就是在页面中植入恶意代码。")]),s._v(" "),a("p",[s._v("攻击者在web页面恶意插入HTML或script标签，当用户浏览该页面时，恶意代码就会被执行，从而达到攻击的目的。XSS利用的是用户对指定网站的信任。")]),s._v(" "),a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[s._v("#")]),s._v(" 类型")]),s._v(" "),a("h3",{attrs:{id:"_1-反射型xss-非持久"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-反射型xss-非持久"}},[s._v("#")]),s._v(" （1）反射型xss(非持久)")]),s._v(" "),a("p",[s._v("需要欺骗用户自己去点击带有特定参数的XSS代码链接才能触发，一般是欺骗用户点击特定链接来进行恶意攻击，攻击代码就在url当中;")]),s._v(" "),a("p",[s._v("例如，将正常的网页url")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dvwa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vulnerabilities"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xss_r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("index\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("改成下面这般便，可以实现恶意弹窗了")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dvwa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vulnerabilities"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xss_r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("便能实现获取当前用户的cookie，这种攻击结合csrf(跨站请求伪造)，例如通过 XMLHttpRequest与CORS功能将数据发送给攻击方服务器，之后便可以在千里之外模拟用户登录，进而进行恶意操作。")]),s._v(" "),a("h3",{attrs:{id:"_2-存储型xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储型xss"}},[s._v("#")]),s._v(" （2）存储型xss")]),s._v(" "),a("p",[s._v("是指将恶意代码被当做正常数据插入到服务器上的数据库中，当用户正常访问页面的时候，恶意代码从数据库中提取出来并被触发。")]),s._v(" "),a("p",[s._v("这类方法和反射型最大的区别在于其攻击载荷的存储位置不同，反射型XSS的攻击载荷并不存储在服务器上，攻击时需要将链接发送给特定用户，存储型XSS的攻击载荷直接保存在了服务器上，因此很多时候是无差别攻击。")]),s._v(" "),a("p",[s._v("例如一个留言板被黑客利用进行XSS攻击，提交了形如"),a("script",[s._v("alert(“please follow serendipity！”)")]),s._v("的代码，那么所有访问这个留言板的用户都将可能执行这段恶意脚本。")]),s._v(" "),a("p",[s._v("利用存储型XSS可实现劫持访问，盗取访问者cookie或者配合csrf攻击完成恶意请求等攻击。")]),s._v(" "),a("h3",{attrs:{id:"_3-dom-based-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom-based-xss"}},[s._v("#")]),s._v(" （3）DOM based xss")]),s._v(" "),a("p",[s._v("DOM based XSS通过恶意脚本修改页面的DOM节点来发起攻击，是发生在前端的攻击。DOM型XSS的特殊之处在于，用户的输入经过了DOM操作，特别是在innerHTML、ajax中经常出现。")]),s._v(" "),a("p",[s._v("最经典的存储型XSS漏洞是留言板，当用户A在留言板留言一段JS代码"),a("code",[s._v('<script>alert("run javascript");<\/script>')]),s._v(",后端未经过滤直接存储到数据库，当正常用户浏览到他的留言后，这段JS代码就会被执行，可以借此来盗取cookie。")]),s._v(" "),a("p",[s._v("一般的攻击流程大致如下：")]),s._v(" "),a("ul",[a("li",[s._v("攻击者构造出特殊的URL，其中包含恶意代码，例如 "),a("code",[s._v("<script>alert(document.cookie)<\/script>")]),s._v(";")]),s._v(" "),a("li",[s._v("用户打开带有恶意代码的URL;")]),s._v(" "),a("li",[s._v("用户浏览器接受到响应后执行解析，前端JavaScript取出URL中的恶意代码并执行;")]),s._v(" "),a("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，冒充用户行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),a("h2",{attrs:{id:"危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#危害"}},[s._v("#")]),s._v(" 危害")]),s._v(" "),a("ul",[a("li",[s._v("盗取网页浏览中的cookie值，盗用cookie实现无密码登录，盗取用户信息。")]),s._v(" "),a("li",[s._v("劫持访问，实现恶意跳转。")]),s._v(" "),a("li",[s._v("配合CSRF攻击完成恶意请求。")])]),s._v(" "),a("h2",{attrs:{id:"防御方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御方法"}},[s._v("#")]),s._v(" 防御方法")]),s._v(" "),a("ul",[a("li",[s._v("标签过滤，如"),a("code",[s._v("<script>")]),s._v("、"),a("code",[s._v("<img>")]),s._v("、"),a("code",[s._v("<a>")]),s._v("标签等;")]),s._v(" "),a("li",[s._v("编码，对字符< 、>、&、\" 、' 、+、/等进行转义;")]),s._v(" "),a("li",[s._v("cookie防盗，将cookie设置为"),a("strong",[s._v("http-only")]),s._v(",js脚本将无法读取到cookie信息;")]),s._v(" "),a("li",[s._v("纯前端渲染，明确innerText、setAttribute、style，将代码与数据分隔开;")]),s._v(" "),a("li",[s._v("避免不可信的数据拼接到字符串中传递给这些API，如DOM中的内联事件监听器，"),a("code",[s._v("location")]),s._v("、"),a("code",[s._v("onclick")]),s._v("、"),a("code",[s._v("onload")]),s._v("、"),a("code",[s._v("onmouseover")]),s._v("等，"),a("code",[s._v("<a")]),s._v(">标签的"),a("code",[s._v("href")]),s._v("属性，"),a("code",[s._v("JavaScript")]),s._v("的"),a("code",[s._v("eval()")]),s._v("、"),a("code",[s._v("setTimeout()")]),s._v("、"),a("code",[s._v("setInterval()")]),s._v("等，都能把字符串作为代码运行。")]),s._v(" "),a("li",[s._v("充分利用 CSP，\n"),a("ul",[a("li",[s._v("限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；")]),s._v(" "),a("li",[s._v("禁止向第三方域提交数据，这样用户数据也不会外泄；")]),s._v(" "),a("li",[s._v("禁止执行内联脚本和未授权的脚本；")]),s._v(" "),a("li",[s._v("还提供了上报机制，这样可以帮助我们尽快发现有哪些 XSS 攻击，以便尽快修复问题。")])])])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904021308735502#heading-64",target:"_blank",rel:"noopener noreferrer"}},[s._v("详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);