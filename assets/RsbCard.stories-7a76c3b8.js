import{r as H}from"./index-76fb7be0.js";import{g as U}from"./_commonjsHelpers-de833af9.js";var $={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=H,J=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,K=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function D(t,a,o){var e,s={},r=null,l=null;o!==void 0&&(r=""+o),a.key!==void 0&&(r=""+a.key),a.ref!==void 0&&(l=a.ref);for(e in a)G.call(a,e)&&!Q.hasOwnProperty(e)&&(s[e]=a[e]);if(t&&t.defaultProps)for(e in a=t.defaultProps,a)s[e]===void 0&&(s[e]=a[e]);return{$$typeof:J,type:t,key:r,ref:l,props:s,_owner:K.current}}b.Fragment=Y;b.jsx=D;b.jsxs=D;$.exports=b;var v=$.exports;const oe=v.Fragment,y=v.jsx,W=v.jsxs;var L={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var a={}.hasOwnProperty;function o(){for(var e=[],s=0;s<arguments.length;s++){var r=arguments[s];if(r){var l=typeof r;if(l==="string"||l==="number")e.push(r);else if(Array.isArray(r)){if(r.length){var f=o.apply(null,r);f&&e.push(f)}}else if(l==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var h in r)a.call(r,h)&&r[h]&&e.push(h)}}}return e.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o})()})(L);var X=L.exports;const Z=U(X);const g=({borderRadius:t="md",borderColor:a="black",shadow:o="md",shadowOpacity:e=.5,backgroundColor:s="white",image:r,outlined:l=!1,onClick:f,dark:h=!1,children:A})=>{const M=Z("rsb-card",`rsb-card--border-${t}`,`rsb-card--border-color-${a}`,`rsb-card--shadow-${o}`,`rsb-card--shadow-opacity-${e}`,`rsb-card--background-${s}`,{"rsb-card--dark":h},{"rsb-card--outlined":l},{"rsb-card--clickable":f});return W("div",{className:M,onClick:f,children:[r&&y("img",{src:r,alt:"Placeholder"}),A]})};try{g.displayName="RsbCard",g.__docgenInfo={description:"",displayName:"RsbCard",props:{borderRadius:{defaultValue:{value:"md"},description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderColor:{defaultValue:{value:"black"},description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"red"'},{value:'"white"'},{value:'"black"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"light-grey"'},{value:'"yellow"'}]}},shadow:{defaultValue:{value:"md"},description:"",name:"shadow",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},shadowOpacity:{defaultValue:{value:"0.5"},description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},backgroundColor:{defaultValue:{value:"white"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"red"'},{value:'"white"'},{value:'"black"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"light-grey"'},{value:'"yellow"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Components/Card",component:g,argTypes:{title:{table:{disable:!0}},content:{table:{disable:!0}},backgroundColor:{control:{type:"select",options:["blue","green","red","white","black","grey","dark-grey","light-grey","yellow"]},description:"Background color for the card"},borderRadius:{control:{type:"select",options:["xs","sm","md","lg","xl"]},description:"Border radius for the card",defaultValue:"md"},borderColor:{control:{type:"select",options:["blue","green","red","white","black","grey","dark-grey","light-grey","yellow"]},defaultValue:"light-grey",description:"Border color for the card"},shadow:{control:"text",description:"Shadow for the card"},shadowOpacity:{control:"number",description:"Shadow opacity for the card"},image:{control:"text",description:"Image for the card",defaultValue:""},outlined:{control:"boolean",description:"Outline style for the card",defaultValue:!0},dark:{control:"boolean",description:"Dark mode for the card (changes text to white)",defaultValue:!1}}},p=(t,a)=>e=>W(g,{...e,children:[t&&y("h2",{children:t}),a&&y("p",{children:a})]}),d=p("Default Card","This is the default card.");d.args={backgroundColor:"white",borderRadius:"md",borderColor:"light-grey",shadow:"md",shadowOpacity:.5,image:"https://placekitten.com/300/120",outlined:!0,dark:!1};const c=p("Filled Card","This is a filled card.");c.args={outlined:!1};const i=p("Outlined Card","This is an outlined card.");i.args={outlined:!0};const n=p("Card with Image","This card has an image.");n.args={image:"https://placekitten.com/400/200"};const u=p("Card with Custom Background","This card has a custom background color.");u.args={backgroundColor:"blue"};const m=p("Clickable Card","This card is clickable.");m.args={onClick:()=>console.log("Card clicked!")};var C,k,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"TemplateFactory('Default Card', 'This is the default card.')",...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,x,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:"TemplateFactory('Filled Card', 'This is a filled card.')",...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var O,S,F;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"TemplateFactory('Outlined Card', 'This is an outlined card.')",...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var R,j,V;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:"TemplateFactory('Card with Image', 'This card has an image.')",...(V=(j=n.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,q,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:"TemplateFactory('Card with Custom Background', 'This card has a custom background color.')",...(P=(q=u.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var I,N,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"TemplateFactory('Clickable Card', 'This card is clickable.')",...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const re=["Playground","Filled","Outlined","WithImage","WithCustomBackground","Clickable"],se=Object.freeze(Object.defineProperty({__proto__:null,Clickable:m,Filled:c,Outlined:i,Playground:d,WithCustomBackground:u,WithImage:n,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{se as C,oe as F,i as O,d as P,n as W,W as a,c as b,u as c,m as d,y as j};
//# sourceMappingURL=RsbCard.stories-7a76c3b8.js.map