(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(a,e,t){"use strict";t.r(e);var s=t(25),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[a._v("#")]),a._v(" "),t("code",[a._v("check")])]),a._v(" "),t("p",[a._v("It is useful to enforce that "),t("a",{attrs:{href:"./change-files"}},[a._v("change files")]),a._v(" are checked in for each PR before they enter the target branch. In this way, all changes are captured and would affect semver appropriately. To check to make sure all changes are captured in change files, simply run:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ beachball check\n")])])]),t("p",[a._v("This command also checks for various types of misconfigurations that would result in problems when attempting to publish.")]),a._v(" "),t("h3",{attrs:{id:"where-should-check-be-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-should-check-be-run"}},[a._v("#")]),a._v(" Where Should Check Be Run?")]),a._v(" "),t("h4",{attrs:{id:"as-a-step-in-the-pr-review-gate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-a-step-in-the-pr-review-gate"}},[a._v("#")]),a._v(" As a step in the PR review gate")]),a._v(" "),t("p",[a._v("For example, in Travis CI:")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" node_js\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("node_js")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'10'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" yarn\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# where 'check' is defined in package.json as 'beachball check'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" yarn check\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" yarn build\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" yarn test\n")])])]),t("h4",{attrs:{id:"as-git-hook-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-git-hook-optional"}},[a._v("#")]),a._v(" As git hook (optional)")]),a._v(" "),t("p",[a._v("For a reference of git hooks, take a look at "),t("a",{attrs:{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",target:"_blank",rel:"noopener noreferrer"}},[a._v("this documentation"),t("OutboundLink")],1),a._v(". It is recommended to place this hook as a pre-push.")])])}),[],!1,null,null,null);e.default=n.exports}}]);