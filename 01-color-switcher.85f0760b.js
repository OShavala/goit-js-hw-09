const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o;function n(){document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.onclick=function(){o=setInterval(n,1e3),t.disabled=!0,e.disabled=!1},e.onclick=function(){clearInterval(o),t.disabled=!1,e.disabled=!0};
//# sourceMappingURL=01-color-switcher.85f0760b.js.map
