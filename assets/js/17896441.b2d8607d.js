"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[918],{3985:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var n=a(7294),l=a(6010),s=a(3783),i=a(5999),o=a(9960);const r=function(e){const{navLink:t,next:a}=e;return n.createElement(o.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};const c=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r,{navLink:a,next:!0})))};var d=a(2263),m=a(907),u=a(3810);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.Z)(),{pluginId:i}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,u.J)(i),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,m.Jo)(i),v=null!=r?r:(p=c).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:c.label,to:v.path,onClick:()=>o(c.name)})))}function E(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var N=a(1217);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(3117),Z=a(102);const U="iconEdit_2_ui",C=["className"];const T=function(e){let{className:t}=e,a=(0,Z.Z)(e,C);return n.createElement("svg",(0,L.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const y="tag_1Okp",A="tagRegular_3MiF",M="tagWithCount_1HU1";const H=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(o.Z,{href:t,className:(0,l.Z)(y,{[A]:!s,[M]:s})},a,s&&n.createElement("span",null,s))},x="tags_2ga9",B="tag_11ep";function O(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:B},n.createElement(H,{name:t,permalink:a}))}))))}const S="lastUpdated_13-_";function D(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(O,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function F(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:c}=a,d=c.length>0,m=!!(s||i||r);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(D,{tags:c}),m&&n.createElement(V,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:o})):null}const I=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function R(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(R,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function z(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o}=e,r=(0,Z.Z)(e,I);const c=(0,u.LU)(),d=null!=i?i:c.tableOfContents.minHeadingLevel,m=null!=o?o:c.tableOfContents.maxHeadingLevel,v=(0,u.DA)({toc:t,minHeadingLevel:d,maxHeadingLevel:m}),g=(0,n.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:m}}),[l,s,d,m]);return(0,u.Si)(g),n.createElement(R,(0,L.Z)({toc:v,className:a,linkClassName:l},r))}const P="tableOfContents_35-E",W=["className"];const q=function(e){let{className:t}=e,a=(0,Z.Z)(e,W);return n.createElement("div",{className:(0,l.Z)(P,"thin-scrollbar",t)},n.createElement(z,(0,L.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},J="tocCollapsible_1PrD",Y="tocCollapsibleButton_2O1e",j="tocCollapsibleContent_2Ydz",G="tocCollapsibleExpanded_3GYr";function K(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(J,{[G]:!r},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Y),onClick:c},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:j,collapsed:r},n.createElement(z,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})))}var Q=a(9649);const X="docItemContainer_33ec",$="docItemCol_3FnS",ee="tocMobile_3Hoh";function te(e){const{content:t}=e,{metadata:a,frontMatter:i}=t,{image:o,keywords:r,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:g}=i,{description:h,title:p}=a,f=!d&&void 0===t.contentTitle,k=(0,s.Z)(),_=!m&&t.toc&&t.toc.length>0,L=_&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(N.Z,{title:p,description:h,keywords:r,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[$]:!m})},n.createElement(E,null),n.createElement("div",{className:X},n.createElement("article",null,n.createElement(b,null),_&&n.createElement(K,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g,className:(0,l.Z)(u.kM.docs.docTocMobile,ee)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},f&&n.createElement(Q.N,null,p),n.createElement(t,null)),n.createElement(F,e)),n.createElement(c,{previous:a.previous,next:a.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g,className:u.kM.docs.docTocDesktop}))))}},9649:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(102),l=a(3117),s=a(7294),i=a(6010),o=a(5999),r=a(3810);const c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=e=>{let t=Object.assign({},e);return s.createElement("header",null,s.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=e=>{return"h1"===e?u:(t=e,e=>{let{id:a}=e,u=(0,n.Z)(e,m);const{navbar:{hideOnScroll:v}}=(0,r.LU)();return a?s.createElement(t,(0,l.Z)({},u,{className:(0,i.Z)("anchor",{[d]:v,[c]:!v}),id:a}),u.children,s.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):s.createElement(t,u)});var t}}}]);