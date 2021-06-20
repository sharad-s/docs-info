const { description } = require("../../package");

module.exports = {
  title: "Rari Capital",
//  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#42C346" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  themeConfig: {
    repo: "Rari-Capital/docs",
    docsDir: "/",
    nav: [
     { text: "Introduction", link: "/" },
     {
          text: "Products",
          ariaLabel: "Product Menu",
          items: [
              { text: "Earn", link: "/products/earn.md" },
              { text: "Fuse", link: "/products/fuse/readme.md" },
              { text: "Tranches", link: "/products/tranches/" },
              { text: "Pool2", link: "/products/pool2/" },
          ]
      },
      { text: "Ecosystem", link: "/ecosystem/" },
      { text: "Risks", link: "/risks/" },
      { text: "Security", link: "/security/" },  
 {
          text: "Governance",
          ariaLabel: "Governance Menu",
          
        itmes: [
 }
              { text: "Overview", link: "Governance/overview/" },
              { text: "Forums", link: "https://forums.rari.capital/" },
              { text: "Vote", link: "https://vote.rari.capital/" },
        
          ]
      },        
      { text: "Contribute", link: "https://docs.rari.capital/" }
    ],
  
    sidebarDepth: 10,
    sidebar: {
      "/": [""],
      "/products/": [""],
      "/ecosystem/": [""],
      "/risks/": [""]
    },
    smoothScroll: true
  }
};