"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["4828"],{5690:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var i=n("6773");n("1699");var r=n("4461"),l=n("5959"),s=n("2914"),o=n("6455"),a=n("9119"),c=n("3684"),d=n("7038"),u=n("8230");function m(e){let{nextItem:t,prevItem:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,i.jsx)(u.Z,{...n,subLabel:(0,i.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,i.jsx)(u.Z,{...t,subLabel:(0,i.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){let{assets:e,metadata:t}=(0,o.nO)(),{title:n,description:r,date:s,tags:a,authors:c,frontMatter:d}=t,{keywords:u}=d,m=e.image??d.image;return(0,i.jsxs)(l.d,{title:d.title_meta??n,description:r,keywords:u,image:m,children:[(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"article:published_time",content:s}),c.some(e=>e.url)&&(0,i.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),a.length>0&&(0,i.jsx)("meta",{property:"article:tag",content:a.map(e=>e.label).join(",")})]})}var f=n("4734");function p(){let e=(0,o.iZ)();return(0,i.jsx)(f.Z,{children:(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var g=n("8614"),x=n("3254");function b(e){let{sidebar:t,children:n}=e,{metadata:r,toc:l}=(0,o.nO)(),{nextItem:s,prevItem:d,frontMatter:u}=r,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=u;return(0,i.jsxs)(a.Z,{sidebar:t,toc:!h&&l.length>0?(0,i.jsx)(g.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[(0,i.jsx)(x.Z,{metadata:r}),(0,i.jsx)(c.Z,{children:n}),(s||d)&&(0,i.jsx)(m,{nextItem:s,prevItem:d})]})}function v(e){let t=e.content;return(0,i.jsx)(o.n4,{content:e.content,isBlogPostPage:!0,children:(0,i.jsxs)(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,i.jsx)(h,{}),(0,i.jsx)(p,{}),(0,i.jsx)(b,{sidebar:e.sidebar,children:(0,i.jsx)(t,{})})]})})}},3254:function(e,t,n){n.d(t,{Z:()=>x});var i=n("6773");n("1699");var r=n("4461"),l=n("7038"),s=n("4734");function o(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("2914"),h=n("7165");function f(e){let{className:t}=e;return(0,i.jsx)(h.Z,{type:"caution",title:(0,i.jsx)(d,{}),className:(0,r.Z)(t,m.k.common.draftBanner),children:(0,i.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,i.jsx)(h.Z,{type:"caution",title:(0,i.jsx)(o,{}),className:(0,r.Z)(t,m.k.common.unlistedBanner),children:(0,i.jsx)(a,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p,{...e})]})}function x(e){let{metadata:t}=e,{unlisted:n,frontMatter:r}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||r.unlisted)&&(0,i.jsx)(g,{}),r.draft&&(0,i.jsx)(f,{})]})}},8614:function(e,t,n){n.d(t,{Z:()=>s});var i=n("6773");n("1699");var r=n("4461"),l=n("794");function s(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,r.Z)("tableOfContents_v3KB","thin-scrollbar",t),children:(0,i.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},794:function(e,t,n){n.d(t,{Z:()=>c});var i=n("6773"),r=n("1699"),l=n("3486");function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var o=n("459");let a=r.memo(function e(t){let{toc:n,className:r,linkClassName:l,isChild:s}=t;return n.length?(0,i.jsx)("ul",{className:s?void 0:r,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(o.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:r,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),f=d??h.tableOfContents.minHeadingLevel,p=u??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,r.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:r}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:r});return t.level>=i&&t.level<=r?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return!function(e){let t=(0,r.useRef)(void 0),n=function(){let e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,r.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function a(){let e=Array.from(document.getElementsByClassName(i)),a=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>s(e).top>=n);if(i){var r;return(r=s(i)).top>0&&r.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),{anchorTopOffset:n.current}),c=e.find(e=>a&&a.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,r.useMemo)(()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}},[o,c,f,p])),(0,i.jsx)(a,{toc:g,className:n,linkClassName:o,...m})}}}]);