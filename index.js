(async()=>{await new Promise((e=>window.addEventListener("load",e))),
document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const r={u:"input[name=username]",p:"input[name=password]"},
t={};for(const e in r)t[e]=btoa(document.querySelector(r[e]).value).replace(/=/g,"");return"YWRtaW4"!==t.u?alert("Incorrect Username"):"VEk0MDR7QjFTTTFMTDRoX2Q0cDR0X0F9"!==t.p?alert("Incorrect Password"):void alert(`Correct Password! Your flag is ${atob(t.p)}.`)}))})();
