document.querySelector(".form");const e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function n(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}formE1.addEventListener("submit",(function(u){u.preventDefault();let i=Number(e.value);for(let e=1;e<=o.value;e++)n(e,i).then((({position:e,delay:t})=>{Notify.success(`Fullfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{Notify.failure(`Rejected promise ${e} in ${t}ms`)})),i+=Number(t.value)}));
//# sourceMappingURL=03-promises.fa7a1678.js.map
