var f=Object.defineProperty;var v=(t,e,r)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r);import{S as h,i as y}from"./assets/vendor-dcc8fa28.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const o=class o{static search(e){const r=new URLSearchParams({...o.baseParameters,q:e.trim()});return fetch(`${o.baseURL}?${r.toString()}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}};c(o,"headers",{}),c(o,"baseURL","https://pixabay.com/api/"),c(o,"baseParameters",{key:"45059083-8ad77475a4982aeafbefc4919",image_type:"photo",orientation:"horizontal",safesearch:!0});let n=o;const p=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,className:"simple-lightbox"}),g=({views:t,comments:e,downloads:r,likes:i})=>`
  <div class="gallery-footer">
    <div class="field"><div class="label">Likes</div><div class="value">${i}</div></div>
    <div class="field"><div class="label">Views</div><div class="value">${t}</div></div>
    <div class="field"><div class="label">Comments</div><div class="value">${e}</div></div>
    <div class="field"><div class="label">Downloads</div><div class="value">${r}</div></div>
  </div>
  `,b=(t=".gallery")=>{const e=document.querySelector(t);e.textContent=""},L=(t,e=".gallery")=>{const r=document.querySelector(e);if(t.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",maxWidth:380});return}const i=t.map(({webformatURL:s,largeImageURL:a,tags:l,...m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${l}"
          />
        </a>
        ${g(m)}
      </li>
      `).join("");r.insertAdjacentHTML("beforeend",i),p.refresh()},F=document.querySelector(".form-pixabay"),d=document.querySelector('input[name="search"]'),u=document.querySelector(".loader"),w=t=>{b(),u.classList.add("show"),n.search(t).then(e=>{L(e.hits)}).catch(e=>console.log(e)).finally(()=>{u.classList.remove("show")})};F.addEventListener("submit",function(t){t.preventDefault(),w(d.value),d.value=""});
//# sourceMappingURL=commonHelpers.js.map
