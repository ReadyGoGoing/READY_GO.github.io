module.exports = {
  title: "Picker Ready Go",
  description: "a blog from Picker",
  base: "/blog/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/images/logo.png",
    searchMaxSuggestions: 10,
    smoothScroll: true,
    // lastUpdated: "更新时间",
    nav: [
      {
        text: "基础梳理",
        link: "/base/",
        items: [
          { text: "HTML", link: "/base/html/" },
          { text: "CSS", link: "/base/css/" },
          { text: "Javascript", link: "/base/javascript/" },
          { text: "浏览器", link: "/base/browser/" },
          { text: "安全", link: "/base/security/" },
          { text: "Interview", link: "/base/interview/" },
        ],
      },
      { text: "Typescript", link: "/typescript/" },
      { text: "手写", link: "/newFunction/" },
      { text: "源码分析", link: "/sourceAnalysis/" },
      { text: "React", link: "/react/" },
      { text: "Git", link: "/git/" },
      {
        text: "脚手架",
        link: "/falsework/",
        items: [
          { text: "Webpack", link: "/falsework/webpack/" },
          { text: "Vite", link: "/falsework/vite/" },
          { text: "Umi", link: "/falsework/umi/" },
        ],
      },
      { text: '设计模式', link: '/designPatterns/' },
      { text: '算法', link: '/algorithm/'},
      { text: "Github", link: "https://github.com/Picker666/blog" },
    ],
    sidebar: {
      "/base/html/": [""],
      "/base/css/": ["", "BFC", "center", "columnsLayout"],
      "/base/javascript/": [
        "",
        "toString",
        "valueOf",
        "equal",
        "copy",
        "promiseAll",
        "allSettled",
        "arrayDeDuplication",
        "newConstructor",
        "setMap",
        "arrayPerformance",
        "prototype",
        "eventLoop",
        "modular",
        "Proxy",
        "Reflect",
        "functionalProgramming"
      ],
      "/base/browser/": [
        "",
        "storage",
        "crossDomain",
        "cache",
        "browserCache",
        "serviceWorker",
        "workbox",
        "httpCode",
        "UDP",
        "TCP",
        "https",
        "httpVersion",
        "renderPrinciple",
        "garbageCollection",
        "garbageCollectionByV8"
      ],
      "/base/security/": ["", 'xss', "CSRF", "SQLInjection", "cookieHold", "clickJacking"],
      "/base/interview/": ["", "scope", "arrayObject", "FEOptimization"],
      "/typescript/": [
        "",
        "tsBase",
        "tsAdvanced1",
        "tsAdvanced2",
        "infer",
        "innerTool",
      ],
      "/sourceAnalysis/": [
        "",
        "reduxThunk",
        "useModal",
        "reselect",
        "useState",
      ],
      "/newFunction/": [
        "",
        "newDeepCopy",
        "newClass",
        "newPromise",
        "promise",
        "debounce",
        "throttle",
        "newBaseFunction",
        "deepCopy",
        "Set",
        "map",
        "instanceof",
        "thousands",
        "loading",
        "loginTimeout",
        "eventEmiter"
      ],
      "/react/": [
        "",
        "lifeCycleNew",
        "lifeCycleChange",
        "setState",
        "super",
        "hoc",
        "middleware",
        "useState",
        "useEffect",
        "useMemo",
        "useCallback",
        "useRef",
        "useLayoutEffect",
        "reactEvent",
        "simpleReducer",
        "diff",
        "fiber",
        "requestIdleCallback"
      ],
      "/git/": ["", "rebase", "mergeOrRebase", "catchUp"],
      "/falsework/webpack/": ["", "start", "buildProcess", "optimization", "AST", "interview"],
      "/falsework/umi/": ["", "NoHistory"],
      "/falsework/vite/": ["", 'principle'],
      "/designPatterns/": [
        '',
        "factoryPattern",
        "abstractFactoryPattern",
        "singletonPattern",
        "builderPattern",
        "prototypePattern",

        "adapterPattern",
        "bridgePattern",
        "filterPattern",
        "compositePattern",
        "decoratorPattern",
        "facadePattern",
        "flyweightPattern",
        "proxyPattern",

        "chainOfResponsibilityPattern",
        "commandPattern",
        "interpreterPattern",
        "iteratorPattern",
        "mediatorPattern",
        "mementoPattern",
        "observerPattern",
        "statePattern",
        "nullObjectPattern",
        "strategyPattern",
        "templatePattern",
        "visitorPattern",

        // "MVCPattern",
        // "businessDelegatePattern",
        // "compositeEntityPattern",
        // "dataAccessObjectPattern",
        // "frontControllerPattern",
        // "interceptingFilterPattern",
        // "serviceLocatorPattern",
        // "transferObjectPattern",
      ],
      '/algorithm/': [
        '',
        'algorithmBase',
        "dataStructure",
        'stackQueue',
        'linkedList',

        'dichotomy',
        'divideVSDynamic',
        'greedyVSBacktracking',

        'sorting',
        'deduplication',
        'maxDuplication',
        'mergeArray',
        'palindrome',
        'fibonacci',
        'shuffle',
        
        'sum'
      ]
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@image": "blog",
      },
    },
  },
};