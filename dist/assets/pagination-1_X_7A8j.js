import{r as j,j as l}from"./index-PgkcB_MP.js";import{c as h}from"./index-OFSkRISh.js";const x="...",f=(s,a)=>{let t=a-s+1;return Array.from({length:t},(r,n)=>n+s)},N=({totalCount:s,pageSize:a,siblingCount:t=1,currentPage:r})=>j.useMemo(()=>{const e=Math.ceil(s/a);if(t+5>=e)return f(1,e);const i=Math.max(r-t,1),d=Math.min(r+t,e),c=i>2,g=d<e-2,o=1,P=e;if(!c&&g){let m=3+2*t;return[...f(1,m),x,e]}if(c&&!g){let m=3+2*t,p=f(e-m+1,e);return[o,x,...p]}if(c&&g){let m=f(i,d);return[o,x,...m,x,P]}},[s,a,t,r]),R="...",I=s=>{const{onPageChange:a,totalCount:t,siblingCount:r=1,currentPage:n,pageSize:e,className:u}=s,i=N({currentPage:n,totalCount:t,siblingCount:r,pageSize:e});if(n===0||i.length<2)return null;const d=()=>{a(n+1)},c=()=>{a(n-1)};let g=i[i.length-1];return l.jsxs("ul",{className:h("pagination-container",{[u]:u}),children:[l.jsx("li",{className:h("pagination-item",{disabled:n===1}),onClick:c,children:l.jsx("div",{className:"arrow left"})}),i.map(o=>o===R?l.jsx("li",{className:"pagination-item dots",children:"…"}):l.jsx("li",{className:h("pagination-item",{selected:o===n}),onClick:()=>a(o),children:o})),l.jsx("li",{className:h("pagination-item",{disabled:n===g}),onClick:d,children:l.jsx("div",{className:"arrow right"})})]})},D=I;export{D as P};
