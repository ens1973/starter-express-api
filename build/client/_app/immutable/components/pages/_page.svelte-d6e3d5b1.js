import{L as F,M as tt,S as X,i as Y,s as Z,k as v,B as G,a as I,q as P,l as g,m as _,C as j,h as f,c as $,r as U,n,p as W,b as q,F as a,N as z,u as J,A as H,O as et,G as st,v as at,P as rt,w as nt,D as ot,x as lt,f as ct,t as it,y as ut}from"../../chunks/index-3a3eeba4.js";import{w as dt}from"../../chunks/index-7a1d0fb0.js";function Q(t){return Object.prototype.toString.call(t)==="[object Date]"}function V(t,s,e,r){if(typeof e=="number"||Q(e)){const o=r-e,l=(e-s)/(t.dt||1/60),i=t.opts.stiffness*o,c=t.opts.damping*l,m=(i-c)*t.inv_mass,d=(l+m)*t.dt;return Math.abs(d)<t.opts.precision&&Math.abs(o)<t.opts.precision?r:(t.settled=!1,Q(e)?new Date(e.getTime()+d):e+d)}else{if(Array.isArray(e))return e.map((o,l)=>V(t,s[l],e[l],r[l]));if(typeof e=="object"){const o={};for(const l in e)o[l]=V(t,s[l],e[l],r[l]);return o}else throw new Error(`Cannot spring ${typeof e} values`)}}function ft(t,s={}){const e=dt(t),{stiffness:r=.15,damping:o=.8,precision:l=.01}=s;let i,c,m,d=t,k=t,S=1,M=0,w=!1;function O(h,p={}){k=h;const T=m={};if(t==null||p.hard||b.stiffness>=1&&b.damping>=1)return w=!0,i=F(),d=h,e.set(t=k),Promise.resolve();if(p.soft){const E=p.soft===!0?.5:+p.soft;M=1/(E*60),S=0}return c||(i=F(),w=!1,c=tt(E=>{if(w)return w=!1,c=null,!1;S=Math.min(S+M,1);const x={inv_mass:S,opts:b,settled:!0,dt:(E-i)*60/1e3},y=V(x,d,t,k);return i=E,d=t,e.set(t=y),x.settled&&(c=null),!x.settled})),new Promise(E=>{c.promise.then(()=>{T===m&&E()})})}const b={set:O,update:(h,p)=>O(h(k,t),p),subscribe:e.subscribe,stiffness:r,damping:o,precision:l};return b}function pt(t){let s,e,r,o,l,i,c,m,d=Math.floor(t[1]+1)+"",k,S,M,w=Math.floor(t[1])+"",O,b,h,p,T,E,x;return{c(){s=v("div"),e=v("button"),r=G("svg"),o=G("path"),l=I(),i=v("div"),c=v("div"),m=v("strong"),k=P(d),S=I(),M=v("strong"),O=P(w),b=I(),h=v("button"),p=G("svg"),T=G("path"),this.h()},l(y){s=g(y,"DIV",{class:!0});var u=_(s);e=g(u,"BUTTON",{"aria-label":!0,class:!0});var C=_(e);r=j(C,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=_(r);o=j(B,"path",{d:!0,class:!0}),_(o).forEach(f),B.forEach(f),C.forEach(f),l=$(u),i=g(u,"DIV",{class:!0});var N=_(i);c=g(N,"DIV",{class:!0,style:!0});var R=_(c);m=g(R,"STRONG",{class:!0,"aria-hidden":!0});var D=_(m);k=U(D,d),D.forEach(f),S=$(R),M=g(R,"STRONG",{class:!0});var L=_(M);O=U(L,w),L.forEach(f),R.forEach(f),N.forEach(f),b=$(u),h=g(u,"BUTTON",{"aria-label":!0,class:!0});var A=_(h);p=j(A,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=_(p);T=j(K,"path",{d:!0,class:!0}),_(T).forEach(f),K.forEach(f),A.forEach(f),u.forEach(f),this.h()},h(){n(o,"d","M0,0.5 L1,0.5"),n(o,"class","svelte-y96mxt"),n(r,"aria-hidden","true"),n(r,"viewBox","0 0 1 1"),n(r,"class","svelte-y96mxt"),n(e,"aria-label","Decrease the counter by one"),n(e,"class","svelte-y96mxt"),n(m,"class","hidden svelte-y96mxt"),n(m,"aria-hidden","true"),n(M,"class","svelte-y96mxt"),n(c,"class","counter-digits svelte-y96mxt"),W(c,"transform","translate(0, "+100*t[2]+"%)"),n(i,"class","counter-viewport svelte-y96mxt"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-y96mxt"),n(p,"aria-hidden","true"),n(p,"viewBox","0 0 1 1"),n(p,"class","svelte-y96mxt"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-y96mxt"),n(s,"class","counter svelte-y96mxt")},m(y,u){q(y,s,u),a(s,e),a(e,r),a(r,o),a(s,l),a(s,i),a(i,c),a(c,m),a(m,k),a(c,S),a(c,M),a(M,O),a(s,b),a(s,h),a(h,p),a(p,T),E||(x=[z(e,"click",t[4]),z(h,"click",t[5])],E=!0)},p(y,[u]){u&2&&d!==(d=Math.floor(y[1]+1)+"")&&J(k,d),u&2&&w!==(w=Math.floor(y[1])+"")&&J(O,w),u&4&&W(c,"transform","translate(0, "+100*y[2]+"%)")},i:H,o:H,d(y){y&&f(s),E=!1,et(x)}}}function mt(t,s){return(t%s+s)%s}function ht(t,s,e){let r,o,l=0;const i=ft();st(t,i,d=>e(1,o=d));const c=()=>e(0,l-=1),m=()=>e(0,l+=1);return t.$$.update=()=>{t.$$.dirty&1&&i.set(l),t.$$.dirty&2&&e(2,r=mt(o,1))},[l,o,r,i,c,m]}class _t extends X{constructor(s){super(),Y(this,s,ht,pt,Z,{})}}const vt=""+new URL("../../assets/svelte-welcome-c18bcf5a.webp",import.meta.url).href,gt=""+new URL("../../assets/svelte-welcome-6c300099.png",import.meta.url).href;function yt(t){let s,e,r,o,l,i,c,m,d,k,S,M,w,O,b,h,p,T,E,x,y;return x=new _t({}),{c(){s=v("meta"),e=I(),r=v("section"),o=v("h1"),l=v("span"),i=v("picture"),c=v("source"),m=I(),d=v("img"),S=P(`

		to your new`),M=v("br"),w=P("SvelteKit app"),O=I(),b=v("h2"),h=P("try editing "),p=v("strong"),T=P("src/routes/+page.svelte"),E=I(),at(x.$$.fragment),this.h()},l(u){const C=rt('[data-svelte="svelte-t32ptj"]',document.head);s=g(C,"META",{name:!0,content:!0}),C.forEach(f),e=$(u),r=g(u,"SECTION",{class:!0});var B=_(r);o=g(B,"H1",{class:!0});var N=_(o);l=g(N,"SPAN",{class:!0});var R=_(l);i=g(R,"PICTURE",{});var D=_(i);c=g(D,"SOURCE",{srcset:!0,type:!0}),m=$(D),d=g(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(f),R.forEach(f),S=U(N,`

		to your new`),M=g(N,"BR",{}),w=U(N,"SvelteKit app"),N.forEach(f),O=$(B),b=g(B,"H2",{});var L=_(b);h=U(L,"try editing "),p=g(L,"STRONG",{});var A=_(p);T=U(A,"src/routes/+page.svelte"),A.forEach(f),L.forEach(f),E=$(B),nt(x.$$.fragment,B),B.forEach(f),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(c,"srcset",vt),n(c,"type","image/webp"),ot(d.src,k=gt)||n(d,"src",k),n(d,"alt","Welcome"),n(d,"class","svelte-19xx0bt"),n(l,"class","welcome svelte-19xx0bt"),n(o,"class","svelte-19xx0bt"),n(r,"class","svelte-19xx0bt")},m(u,C){a(document.head,s),q(u,e,C),q(u,r,C),a(r,o),a(o,l),a(l,i),a(i,c),a(i,m),a(i,d),a(o,S),a(o,M),a(o,w),a(r,O),a(r,b),a(b,h),a(b,p),a(p,T),a(r,E),lt(x,r,null),y=!0},p:H,i(u){y||(ct(x.$$.fragment,u),y=!0)},o(u){it(x.$$.fragment,u),y=!1},d(u){f(s),u&&f(e),u&&f(r),ut(x)}}}class Et extends X{constructor(s){super(),Y(this,s,null,yt,Z,{})}}export{Et as default};
