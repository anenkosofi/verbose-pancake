window.addEventListener("load",(function(){document.body.style.overflow="hidden";const e=document.querySelector(".loader");setTimeout((function(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}),5e3)}));const e=document.querySelector(".backdrop"),t=document.querySelector(".modal");let n=null,o=null;function i(){n=setTimeout((function(){t.insertAdjacentHTML("beforeend",'<p class="modal__description">Are you still here?</p>\n    <button type="button" class="primary-button modal__button">Confirm</button>'),e.classList.remove("is-hidden"),document.body.style.overflow="hidden";document.querySelector(".modal__button").addEventListener("click",s),o=setTimeout((()=>{window.close()}),1e4)}),6e4)}function s(){clearTimeout(o),clearTimeout(n),e.classList.add("is-hidden"),t.innerHTML="",document.body.style.overflow="visible",i()}document.addEventListener("mousemove",(function(){clearTimeout(n),i()})),document.addEventListener("keydown",(function(){clearTimeout(timconfirmTimerer),i()})),i();const r=document.querySelector(".header__progress");window.addEventListener("scroll",(function(){const e=window.innerHeight,t=document.body.clientHeight,n=window.scrollY/(t-e)*100;r.style.width=`${n}%`}));const c=document.querySelector(".service__filters-list"),a=document.querySelector(".service__list");function l(){return fetch("https://64be73b75ee688b6250c6d71.mockapi.io/design").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function d(e){const t=new Map;for(const n of e)t.set(n.category,n);return Array.from(t.values())}function u(e){const t=e.map((({title:e,description:t})=>`<li class="service__item">\n        <div class="service__content">\n          <h3 class="service__post-heading">${e}</h3>\n          <p class="service__description">\n            ${t}\n          </p>\n        </div>\n      </li>`)).join("");a.innerHTML=t}c.addEventListener("click",(function(e){const t=e.target.closest("li");if(!t)return;if(t)if(t.classList.contains("service__filters-item_active"))t.classList.contains("service__filters-item_active")&&(Array.from(c.children).forEach((e=>e.classList.remove("service__filters-item_active"))),l().then((e=>{t.classList.remove("service__filters-item_active"),c.children[0].classList.add("service__filters-item_active");u(d(e))})).catch((e=>console.log(e))));else{Array.from(c.children).forEach((e=>e.classList.remove("service__filters-item_active")));const e=t.dataset.id.toLowerCase();t.classList.add("service__filters-item_active"),"all"!==e?function(e){return fetch(`https://64be73b75ee688b6250c6d71.mockapi.io/design?category=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}(e).then((e=>u(e))).catch((e=>console.log(e))):l().then((e=>{u(d(e))})).catch((e=>console.log(e)))}})),l().then((e=>{!function(e){const t=[...new Set(e.map((({category:e})=>e)))].map((e=>`<li class="service__filters-item" data-id="${e}">\n          ${e}\n        </li>`)).join("");c.insertAdjacentHTML("beforeend",t)}(e),u(d(e))})).catch((e=>console.log(e))),new Swiper(".testimonials__comments",{loop:!0,spaceBetween:180,grabCursor:!0,slidesPerView:2,navigation:{nextEl:".testimonials__button_right",prevEl:".testimonials__button_left"}});const m=document.querySelector(".sign-up__form"),f=document.querySelector(".backdrop"),_=document.querySelector(".modal"),v=document.querySelector("#name-error"),h=document.querySelector("#surname-error"),y=document.querySelector("#email-error"),p=/^[A-Z][a-zA-Z]*$/,w=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,g="Name must start with an uppercase letter and contain only Latin letters and no spaces",b="Surname must start with an uppercase letter and contain only Latin letters and no spaces",L={name:"",surname:"",email:""};m.addEventListener("input",(function(e){const t=e.target,n=t.name,o=t.value;L[n]=o,function(e,t){const n=document.querySelector(`#${e}-error`);let o="";t.length?"name"!==e||p.test(t)?"surname"!==e||p.test(t)?"email"!==e||w.test(t)||(o="Invalid email format."):o=b:o=g:o="This field is required";n.textContent=o}(n,o)})),m.addEventListener("submit",(function(e){e.preventDefault();const t={name:"",surname:"",email:""},n=L.name,o=L.surname,i=L.email,s=n.length&&p.test(n),r=o.length&&p.test(o),c=i.length&&w.test(i);t.name=s?"":g,t.surname=r?"":b,t.email=c?"":"Invalid email format.";s&&r&&c?(localStorage.setItem("formValues",JSON.stringify(L)),e.target.reset(),"Sigma"===L.name&&function(){const e=function(){const e=new Date,t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getFullYear();return`${n}.${t}.${o}`}(),t=`<h1 class="modal__heading">Hello, ${L.name}!</h1>\n    <p class="modal__description">Today ${e}, for users with your name, there's a 120% discount when placing an order!</p>`;_.insertAdjacentHTML("beforeend",t),document.body.style.overflow="hidden",f.classList.remove("is-hidden"),setTimeout((()=>{f.classList.add("is-hidden"),document.body.style.overflow="visible",_.innerHTML=""}),5e3)}()):(v.textContent=t.name,h.textContent=t.surname,y.textContent=t.email)}));const S=document.querySelector("#time"),T=(new Date).getFullYear();S.innerHTML=T;
//# sourceMappingURL=index.f742da4c.js.map
