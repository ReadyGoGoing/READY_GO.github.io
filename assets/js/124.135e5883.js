(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{512:function(t,r,e){"use strict";e.r(r);var n=e(54),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"中间人攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1687472686266307627&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如果在数据传输过程中，中间人劫持到了数据，此时他的确无法得到浏览器生成的密钥X，这个密钥本身被公钥A加密了，只有服务器才有私钥A’解开它，然而中间人却完全不需要拿到私钥A’就能干坏事了。请看：")]),t._v(" "),e("ul",[e("li",[t._v("1、某网站有用于非对称加密的公钥A、私钥A’。")]),t._v(" "),e("li",[t._v("2、浏览器向网站服务器请求，服务器把公钥A明文给传输浏览器。")]),t._v(" "),e("li",[t._v("3、中间人劫持到公钥A，保存下来，把数据包中的公钥A替换成自己伪造的公钥B（它当然也拥有公钥B对应的私钥B’）。")]),t._v(" "),e("li",[t._v("4、浏览器生成一个用于对称加密的密钥X，用公钥B（浏览器无法得知公钥被替换了）加密后传给服务器。")]),t._v(" "),e("li",[t._v("5、中间人劫持后用私钥B’解密得到密钥X，再用公钥A加密后传给服务器。")]),t._v(" "),e("li",[t._v("6、服务器拿到后用私钥A’解密得到密钥X。")])]),t._v(" "),e("p",[t._v("这样在双方都不会发现异常的情况下，中间人通过一套“狸猫换太子”的操作，掉包了服务器传来的公钥，进而得到了密钥X。根本原因是浏览器无法确认收到的公钥是不是网站自己的，因为公钥本身是明文传输的，难道还得对公钥的传输进行加密？这似乎变成鸡生蛋、蛋生鸡的问题了。解法是什么？")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43789231",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);