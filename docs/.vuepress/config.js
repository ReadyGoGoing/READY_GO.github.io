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
          { text: "Performance", link: "/base/performance/" },
        ],
      },
      { text: "Typescript", link: "/typescript/" },
      { text: "ThreeJS", link: "/threeJS/"},
      { text: "手写", link: "/newFunction/" },
      { text: "源码分析", link: "/sourceAnalysis/" },
      { text: "React", link: "/react/" },
      { text: "Git", link: "/git/" },
      {
        text: "前端工程化",
        link: "/engineering/",
        items: [
          { text: "Common", link: "/engineering/common/" },
          { text: "Pack", link: "/engineering/pack/" },
          { text: "Webpack", link: "/engineering/webpack/" },
          { text: "Vite", link: "/engineering/vite/" },
          { text: "Umi", link: "/engineering/umi/" },
        ],
      },
      { text: "设计模式", link: "/designPatterns/" },
      { text: "算法", link: "/algorithm/" },
      { text: "前端之外", link: "/outside/", items: [
          { text: "JAVA", link: "https://github.com/Picker666/javaSummary" },
          { text: "PYTHON", link: "/outside/python/" },
        ]
      },
      { text: "Github", link: "https://github.com/Picker666/blog" },
    ],
    sidebar: {
      "/base/html/": ["", "deferAsync"],
      "/base/css/": [
        "",
        'selectorWeight',
        "BFC",
        "flexBox",
        "flexItemSetting",
        "grid",
        "center",
        "columnsLayout",
        "hide",
        "clip",
        "pseudo",
        "triangle"
      ],
      "/base/javascript/": [
        "",
        "ECMAScript",
        "scope",
        "closure",
        "toString",
        "valueOf",
        "equal",
        "copy",
        "promiseAll",
        "allSettled",
        "promiseAsync",
        "arrayDeDuplication",
        "newConstructor",
        "setMap",
        "arrayPerformance",
        "prototype",
        "inherit",
        "eventLoop",
        "Proxy",
        "Reflect",
        "functionalProgramming",
        "generator",
        "eventModel",
        "onLoadReady",
        "ajax",
        "imageLazyLoading"
      ],
      "/base/browser/": [
        "",
        "workingPrinciple",
        "storage",
        "crossDomain",
        "tokenSession",
        "dnsPrefetch",
        "browserCache",
        "cache",
        "serviceWorker",
        "workbox",
        "httpCode",
        "HSTS",
        "UDP",
        "TCP",
        "https",
        "http&https",
        "httpVersion",
        "getPost",
        "renderPrinciple",
        "urlToRender",
        "garbageCollection",
        "garbageCollectionByV8",
        "whiteScreen",
      ],
      "/base/security/": [
        "",
        "xss",
        "CSRF",
        "SQLInjection",
        "cookieHold",
        "clickJacking",
        "logical"
      ],
      "/base/interview/": [
        "",
        "scope",
        "questionAnswer",
        "arrayObject",
        "FEOptimization",
        "collections",
        "upload"
      ],
      "/base/performance/":[
        "",
        "RAIL",
        "WebPageTest",
        "lighthouse",
        "renderOptimizetion"
      ],
      "/typescript/": [
        "",
        "tsBase",
        "tsAdvanced1",
        "tsAdvanced2",
        "infer",
        "innerTool",
        "practice"
      ],
      "/threeJS/": [""],
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
        "deepCopy",
        "newClass",
        "newPromise",
        "promise",
        "debounce",
        "throttle",
        "newBaseFunction",
        "Set",
        "map",
        "instanceof",
        "thousands",
        "loading",
        "loginTimeout",
        "eventEmiter",
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
        "virtualDom",
        "fiber",
        "diff",
        "requestIdleCallback",
        "loadable",
        "lazy",
        "loadableComponent",
        "componentControlled",
        "react18"
      ],
      "/git/": [
        "",
        "flow",
        "commitRules",
        "branchMerge",
        "rebase",
        "mergeOrRebase",
        "catchUp",
      ],
      "/engineering/common/": ["", "standard", "modulesHistory", "packTool", "Helmet", "firstPageOp", "packageManage"],
      "/engineering/pack/": ["", "modular", "AST", "runtime"],
      "/engineering/webpack/": [
        "",
        "start",
        "buildProcess",
        "optimization",
        "loaderAndPlugin",
        "AST",
        "HMR",
        "dynamicImport",
        "externals",
        "interview",
        "dynamicImportPrinciple"
      ],
      "/engineering/umi/": ["", "route", "dynamicImport", "NoHistory"],
      "/engineering/vite/": ["", "principle"],
      "/designPatterns/": [
        "",
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
      "/algorithm/": [
        "",
        "algorithmBase",
        "dataStructure",
        "stackQueue",
        "linkedList",

        "linkedListFunc",
        "dichotomy",
        "divideVSDynamic",
        "greedyVSBacktracking",

        "sorting",
        "deduplication",
        "maxDuplication",
        "mergeArray",
        "palindrome",
        "fibonacci",
        "shuffle",

        "sum",
        "dynamicProgram1",
        "dynamicProgram2",
        "dynamicProgram3"
      ],
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