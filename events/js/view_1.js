(()=>{"use strict";function e(t,n){const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(4===s.readyState){if(s.status>=200&&s.status<300){const e=JSON.parse(s.responseText);return t.onSuccess(e)}return n?e(t,n-1):t.onError()}},s.open("GET",t.url),s.send()}function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Array.prototype.forEach.call(document.querySelectorAll(".wp-block-newspack-blocks-homepage-articles.has-more-button"),(function(n){const s=n.querySelector("[data-next]");if(!s)return;const o=n.querySelector("[data-posts]"),r=s.getAttribute("data-infinite-scroll");window.newspackBlocksIsFetching=window.newspackBlocksIsFetching||!1,window.newspackBlocksFetchQueue=window.newspackBlocksFetchQueue||[];let c=!1,i=!1;const a=()=>{i||(i=!0,u())},u=()=>{if(c)return!1;n.classList.remove("is-error"),n.classList.add("is-loading");const t=s.getAttribute("data-next")+"&exclude_ids="+function(){const e=document.querySelectorAll("[class^='wp-block-newspack-blocks'] [data-post-id]"),t=Array.from(e).map((e=>e.getAttribute("data-post-id")));return t.push(document.querySelector("div[data-current-post-id]").getAttribute("data-current-post-id")),[...new Set(t)]}().join(",");if(window.newspackBlocksIsFetching)return window.newspackBlocksFetchQueue.push(u),!1;window.newspackBlocksIsFetching=!0,e({url:t,onSuccess:l,onError:d},3)};function l(e){if(!function(e){let n=!1;return e&&t(e,"items")&&Array.isArray(e.items)&&t(e,"next")&&"string"==typeof e.next&&(n=!0,!e.items.length||t(e.items[0],"html")&&"string"==typeof e.items[0].html||(n=!1)),n}(e))return d();if(e.items.length){const t=e.items.map((e=>e.html)).join("");o.insertAdjacentHTML("beforeend",t)}e.next&&s.setAttribute("data-next",e.next),e.items.length&&e.next||(c=!0,n.classList.remove("has-more-button")),w()}function d(){n.classList.add("is-error"),w()}function w(){window.newspackBlocksIsFetching=!1,n.classList.remove("is-loading"),window.newspackBlocksFetchQueue.length&&window.newspackBlocksFetchQueue.shift()(),i=!1}s.addEventListener("click",a),r&&new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&a()}))}),{root:null,rootMargin:"0px",threshold:1}).observe(s)}))})();