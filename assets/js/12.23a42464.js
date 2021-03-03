(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{356:function(e,t,a){"use strict";a.r(t);var n=a(25),s=function(e){e.options.__data__block__={mermaid_1a962853:'graph TD\n  app --\x3e fooLib\n  fooLib --\x3e fooUtils\n  app --\x3e componentLib\n\n  subgraph "utils"\n    fooUtils --\x3e styleUtils\n    fooUtils --\x3e dateUtils\n  end\n',mermaid_382ee14b:'graph TD\n  app -. patch .-> appNext["app\'"]\n  fooLib -. minor .-> fooLibNext["fooLib\'"]\n\n  subgraph "current"\n    app --\x3e fooLib\n  end\n\n  subgraph "bumped"\n    appNext --\x3e fooLibNext\n  end\n',mermaid_382ee16b:'graph TD\n  subgraph "utils"\n    fooUtils --\x3e styleUtils\n    fooUtils --\x3e dateUtils\n  end\n\n  subgraph "utils\'"\n    fooUtilsNext[fooUtils\'] --\x3e styleUtilsNext["styleUtils\'"]\n    fooUtilsNext --\x3e dateUtilsNext["dateUtils\'"]\n  end\n\n  fooUtils -. minor .-> fooUtilsNext\n  styleUtils -. minor .-> styleUtilsNext\n  dateUtils -. minor .->dateUtilsNext\n'}},o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bump-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bump-algorithm"}},[e._v("#")]),e._v(" Bump Algorithm")]),e._v(" "),a("p",[e._v("Bumping a single package is a simple task of just looking up a change file for its change type and using semver to bump the version according to what that change type is.")]),e._v(" "),a("p",[e._v("Things get a bit more complicated when we introduce the concepts of version groups and dependent package bumping. For sake of description of this algorithm, we'll can take look at the following graph:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_1a962853",graph:e.$dataBlock.mermaid_1a962853}}),a("h3",{attrs:{id:"dependent-version-bumping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependent-version-bumping"}},[e._v("#")]),e._v(" Dependent Version Bumping")]),e._v(" "),a("p",[e._v("In the above example, the "),a("code",[e._v("app")]),e._v(" package is dependent on "),a("code",[e._v("fooLib")]),e._v(". Let's assume that the developer has created a "),a("code",[e._v("minor")]),e._v(" change inside "),a("code",[e._v("fooLib")]),e._v(". By default, "),a("code",[e._v("beachball")]),e._v(" will also bump "),a("code",[e._v("app")]),e._v(" with a "),a("code",[e._v("patch")]),e._v(" change type, like this:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee14b",graph:e.$dataBlock.mermaid_382ee14b}}),a("p",[e._v("To modify what the dependent package bumped change type would be (e.g. making "),a("code",[e._v("app")]),e._v(" also bump with "),a("code",[e._v("minor")]),e._v(" in the above example), you have to modify the change file to specify this. Here's an example of a change file under "),a("code",[e._v("/changes")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[e._v("{\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "comment": "Upgrading fooLib",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "type": "patch",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "packageName": "fooLib",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "email": "me@me.me",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "commit": "b785112c03f063b71d936ff052470817019267d4",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "date": "2019-06-20T22:54:59.172Z",\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[e._v(' "dependentChangeType": "minor"\n')])]),e._v("}\n")])])]),a("h3",{attrs:{id:"grouped-bumping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouped-bumping"}},[e._v("#")]),e._v(" Grouped Bumping")]),e._v(" "),a("p",[e._v("In the above example, "),a("code",[e._v("fooUtils")]),e._v(", "),a("code",[e._v("styleUtils")]),e._v(", "),a("code",[e._v("dateUtils")]),e._v(" all belong to a "),a("code",[e._v("utils")]),e._v(" group. Whenever one of those packages get bumped, the entire group would get bumped by the same change type. We can illustrate it like so:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee16b",graph:e.$dataBlock.mermaid_382ee16b}}),a("blockquote",[a("p",[e._v("NOTE: the group get bumped together even if it is part of a dependent package bump. In other words, package bumps propagate its changes via dependent package bump as well as group package bumps")])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(o);t.default=o.exports}}]);