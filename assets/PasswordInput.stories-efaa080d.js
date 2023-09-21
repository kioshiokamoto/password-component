import{r as p}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var y={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=p,S=Symbol.for("react.element"),$=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,E=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,u){var s,l={},c=null,i=null;u!==void 0&&(c=""+u),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)k.call(t,s)&&!L.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:S,type:e,key:c,ref:i,props:l,_owner:E.current}}h.Fragment=$;h.jsx=P;h.jsxs=P;y.exports=h;var r=y.exports;const O=e=>{switch(e){case"hasNoConsecutiveLetter":return"Has no consecutive letters";case"hasNumber":return"Has a number 0-9";case"hasSpecialChar":return"Has a special char !@#$%^&*()_+.";case"hasUpperCase":return"Has an uppercase letter";default:return"Rule"}},U=(e,t)=>{switch(t){case"hasNoConsecutiveLetter":return!/(.)\1/.test(e)&&e.length>1;case"hasNumber":return/[0-9]/.test(e);case"hasSpecialChar":return/[^A-Za-z0-9]/g.test(e);case"hasUpperCase":return/[A-Z]/.test(e);default:return!1}},V=()=>({hasNoConsecutiveLetter:!1,hasNumber:!1,hasSpecialChar:!1,hasUpperCase:!1,isValid:!0}),o=(e,t)=>`${e?`${e}__${t}`:""}`;const T=""+new URL("valid.png",import.meta.url).href,q=""+new URL("invalid.png",import.meta.url).href,M=""+new URL("view.png",import.meta.url).href,D=""+new URL("hide.png",import.meta.url).href,g=e=>{const{toggleMask:t=!0}=e??{},{options:u}=e,{parentClassName:s}=e,[l,c]=p.useState(""),[i,N]=p.useState(!1),_=p.useMemo(()=>[...new Set(u)],[u]),x=p.useMemo(()=>{const a=V();return _.forEach(n=>{const d=U(l,n);a[n]=d,a.isValid=d&&a.isValid}),a},[_,l]),C=()=>_.map(a=>{const n=x[a];return r.jsxs("div",{className:"PasswordInput__rule",children:[r.jsx("img",{className:`PasswordInput__status ${o(s,"status")}`,src:n?T:q,alt:n?"valid":"invalid"}),r.jsx("span",{children:O(a)})]},a)}),I=()=>{N(!i)},b=a=>{const n=a.target.value,d=n.replace(/\s/g,"");console.log({cleanedValue:d,value:n}),c(a.target.value)},j=a=>{a.key===" "&&a.preventDefault()};return r.jsxs("div",{className:`PasswordInput__container ${o(s,"container")}`,children:[r.jsxs("div",{className:`PasswordInput__input-wrapper  ${o(s,"input-wrapper")} `,children:[r.jsx("input",{...e,type:i?"text":"password",onChange:b,onKeyDown:j,className:`PasswordInput__input ${o(s,"input")}`,placeholder:"Password","aria-description":"Password input"}),t?r.jsx("div",{onClick:I,className:`PasswordInput__visibility ${o(s,"visibility")}`,children:i?r.jsx("img",{className:`PasswordInput__toggle ${o(s,"toggle")}`,src:D}):r.jsx("img",{className:`PasswordInput__toggle ${o(s,"toggle")}`,src:M})}):null]}),r.jsx("div",{className:`PasswordInput__rule-wrapper ${o(s,"rule-wrapper")}`,children:C()})]})};try{g.displayName="PasswordInput",g.__docgenInfo={description:"",displayName:"PasswordInput",props:{toggleMask:{defaultValue:null,description:"",name:"toggleMask",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"PasswordRulesEnum[]"}},parentClassName:{defaultValue:null,description:"",name:"parentClassName",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Example/PasswordInput",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{toggleMask:{defaultValue:!0,description:"Show toggle password mask button",type:{name:"boolean",required:!1}},parentClassName:{description:"Class name to modify every element of the component. You need to add css to file",type:{name:"string",required:!1}},options:{description:"Password rules to validate"}}},m={args:{options:["hasNumber","hasNoConsecutiveLetter","hasUpperCase","hasSpecialChar"]}};var f,w,v;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: ["hasNumber", "hasNoConsecutiveLetter", "hasUpperCase", "hasSpecialChar"]
  }
}`,...(v=(w=m.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const Y=["Principal"];export{m as Principal,Y as __namedExportsOrder,A as default};
//# sourceMappingURL=PasswordInput.stories-efaa080d.js.map
