/* empty css                      */import{a as n}from"./assets/vendor-CR7N1gwd.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();n.defaults.baseURL="https://dummyjson.com/recipes";async function l(){const{data:r}=await n();return console.log(r),r}const u={recipesList:document.querySelector(".recipes-list")};function p(r){const i=r.map(({name:s,image:c,cuisine:e,difficulty:t,cookTimeMinutes:o})=>`
        <li class="recipes-list-item">
        <img src="${c}" alt="${s}">
        <div>
          <p>${s}</p>
          <p>Cuisine: ${e}</p>
          <p>Difficulty: ${t}</p>
          <p>Cook Time: ${o}</p>
        </div>
      </li>`).join("");u.recipesList.insertAdjacentHTML("beforeend",i)}l().then(({recipes:r})=>{p(r)});
//# sourceMappingURL=commonHelpers.js.map
