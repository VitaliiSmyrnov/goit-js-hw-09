var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");function n(e,t){return new Promise(((r,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();let t=Number(e.currentTarget.delay.value);const r=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value);if(t<=0||r<=0||o<=0)i.Notify.failure("values must be positive");else for(let e=1;e<=o;e+=1)n(e,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=r}));
//# sourceMappingURL=03-promises.d7aa3fc5.js.map