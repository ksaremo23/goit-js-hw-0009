var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function d(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.value);for(let e=1;e<=a.value;e++)d(e,t).then((({position:e,delay:t})=>{i.Notify.success(`Fullfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=Number(u.value)}));
//# sourceMappingURL=03-promises.19a2e51c.js.map
