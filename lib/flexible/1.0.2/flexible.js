"use strict";!function(e,t){var i=0,a=e.document,r=a.documentElement,n=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),l=0,m=0,s=t.flexible||(t.flexible={}),d=function(){var t=r.getBoundingClientRect().width;t/l>540&&(t=540*l);var i=t/10;r.style.fontSize=i+"px",s.rem=e.rem=i};if(n){console.warn("将根据已有的meta标签来设置缩放比例");var c=n.getAttribute("content").match(/initial-scale=([\d\.]+)/);c&&(m=parseFloat(c[1]),l=parseInt(1/m,10))}else if(o){var p=o.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),f=p.match(/maximum\-dpr=([\d\.]+)/);u&&(l=parseFloat(u[1]),m=parseFloat((1/l).toFixed(2))),f&&(l=parseFloat(f[1]),m=parseFloat((1/l).toFixed(2)))}}if(!m&&!l){var h=e.navigator.userAgent,v=!!h.match(/android/gi)||!!h.match(/iphone/gi),x=!!h.match(/iphone/gi),b=v&&!!h.match(/OS 9_3/),g=e.devicePixelRatio;l=v&&x&&!b?g>=3&&(!l||l>=3)?3:g>=2&&(!l||l>=2)?2:1:1,m=1/l}if(r.setAttribute("data-dpr",l)||!n)if(n=a.createElement("meta"),n.setAttribute("name","viewport")||n.setAttribute("content","initial-scale="+m+", maximum-scale="+m+", minimum-scale="+m+", user-scalable=no")||r.firstElementChild)r.firstElementChild.appendChild(n);else{var w=a.createElement("div");w.appendChild(n),a.write(w.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(d,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(d,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*l+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*l+"px"},!1),d(),s.dpr=e.dpr=l,s.refreshRem=d,s.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)?t+"px":t},s.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)?t+"rem":t}}(window,window.lib||(window.lib={}));