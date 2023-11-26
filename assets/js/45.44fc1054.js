(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{433:function(t,_,s){"use strict";s.r(_);var v=s(54),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-及-tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-及-tls"}},[t._v("#")]),t._v(" HTTP 及 TLS")]),t._v(" "),s("h2",{attrs:{id:"http-请求中的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-请求中的内容"}},[t._v("#")]),t._v(" HTTP 请求中的内容")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/book/6844733763675488269/section/6844733763792928782",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/book/6844733763675488269/section/6844733763792928782"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),s("p",[t._v("HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密。")]),t._v(" "),s("p",[t._v("TLS 协议位于"),s("strong",[t._v("传输层之上")]),t._v("，"),s("strong",[t._v("应用层之下")]),t._v("。首次进行 TLS 协议传输需要两个 RTT ，接下来可以通过 Session Resumption 减少到一个 RTT。")]),t._v(" "),s("p",[t._v("在 TLS 中使用了两种加密技术，分别为："),s("strong",[t._v("对称加密")]),t._v("和"),s("strong",[t._v("非对称加密")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),s("p",[t._v("对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。")]),t._v(" "),s("p",[t._v("这种加密方式固然很好，但是问题就在于如何让双方知道秘钥。因为传输数据都是走的网络，如果将秘钥通过网络的方式传递的话，一旦秘钥被截获就没有加密的意义的。")]),t._v(" "),s("h3",{attrs:{id:"非对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),s("p",[t._v("有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。")]),t._v(" "),s("p",[t._v("这种加密方式就可以完美解决对称加密存在的问题。假设现在两端需要使用对称加密，那么在这之前，可以先使用非对称加密交换秘钥。")]),t._v(" "),s("p",[t._v("简单流程如下：首先服务端将公钥公布出去，那么客户端也就知道公钥了。接下来客户端创建一个秘钥，然后通过公钥加密并发送给服务端，服务端接收到密文以后通过私钥解密出正确的秘钥，这时候两端就都知道秘钥是什么了。")]),t._v(" "),s("p",[t._v("TLS 握手过程如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/base/https1.awebp",alt:"TLS 握手过程"}})]),t._v(" "),s("p",[t._v("客户端发送一个随机值以及需要的协议和加密方式。")]),t._v(" "),s("p",[t._v("服务端收到客户端的随机值，自己也产生一个随机值，并根据客户端需求的协议和加密方式来使用对应的方式，并且发送自己的证书（如果需要验证客户端证书需要说明）")]),t._v(" "),s("p",[t._v("客户端收到服务端的证书并验证是否有效，验证通过会再生成一个随机值，通过服务端证书的公钥去加密这个随机值并发送给服务端，如果服务端需要验证客户端证书的话会附带证书")]),t._v(" "),s("p",[t._v("服务端收到加密过的随机值并使用私钥解密获得第三个随机值，这时候两端都拥有了三个随机值，可以通过这三个随机值按照之前约定的加密方式生成密钥，接下来的通信就可以通过该密钥来加密解密")]),t._v(" "),s("p",[t._v("通过以上步骤可知，在 TLS 握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信。")]),t._v(" "),s("p",[t._v("PS：以上说明的都是 TLS 1.2 协议的握手情况，在 1.3 协议中，首次建立连接只需要一个 RTT，后面恢复连接不需要 RTT 了。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("总结一下内容：")]),t._v(" "),s("p",[t._v("HTTP 经常考到的内容包括：请求方法、首部的作用以及状态码的含义\nTLS 中经常考到的内容包括：两种加密方式以及握手的流程")])])}),[],!1,null,null,null);_.default=a.exports}}]);