(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=e.dataset.email,n=e.textContent;navigator.clipboard.writeText(t).then(()=>{e.textContent=`Copied!`,e.classList.add(`copied`),setTimeout(()=>{e.textContent=n,e.classList.remove(`copied`)},2e3)}).catch(()=>{let r=document.createElement(`textarea`);r.value=t,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select(),document.execCommand(`copy`),document.body.removeChild(r),e.textContent=`Copied!`,e.classList.add(`copied`),setTimeout(()=>{e.textContent=n,e.classList.remove(`copied`)},2e3)})}function t(){window.scrollTo({top:0,behavior:`smooth`}),setTimeout(()=>{let e=document.querySelector(`.email-copy-btn`),t=document.querySelector(`.hero-links a[href*="linkedin"]`);if(!document.getElementById(`blinkStyle`)){let e=document.createElement(`style`);e.id=`blinkStyle`,e.textContent=`
          @keyframes contactBlink {
            0%,100% { opacity:1; transform:scale(1); box-shadow:none; }
            50% { opacity:0.25; transform:scale(1.06); box-shadow:0 0 18px rgba(0,200,240,0.6); }
          }
          .contact-blink {
            animation: contactBlink 0.55s ease-in-out 6;
          }
        `,document.head.appendChild(e)}[e,t].forEach(e=>{e&&(e.classList.remove(`contact-blink`),e.offsetWidth,e.classList.add(`contact-blink`),e.addEventListener(`animationend`,()=>e.classList.remove(`contact-blink`),{once:!0}))})},900)}var n=document.getElementById(`themeToggle`),r=document.getElementById(`themeIcon`),i=document.getElementById(`themeLabel`);a(localStorage.getItem(`theme`)||`dark`),n.addEventListener(`click`,()=>{a((document.documentElement.getAttribute(`data-theme`)||`dark`)===`dark`?`light`:`dark`)});function a(e){document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`theme`,e),e===`light`?(r.textContent=`🌙`,i.textContent=`Dark`):(r.textContent=`☀️`,i.textContent=`Light`)}var o=document.getElementById(`navToggle`),s=document.getElementById(`navDrawer`),c=document.getElementById(`navBackdrop`);function l(){o.classList.add(`open`),s.classList.add(`open`),c.classList.add(`open`),document.body.style.overflow=`hidden`}function u(){o.classList.remove(`open`),s.classList.remove(`open`),c.classList.remove(`open`),document.body.style.overflow=``}o.addEventListener(`click`,()=>{s.classList.contains(`open`)?u():l()}),c.addEventListener(`click`,u),document.querySelectorAll(`.drawer-item`).forEach(e=>{e.addEventListener(`click`,u)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&u()});var d=document.createElement(`div`);d.id=`cursorGlow`,d.style.cssText=`
    position:fixed; width:320px; height:320px; border-radius:50%;
    background:radial-gradient(circle, rgba(0,200,240,0.06) 0%, transparent 70%);
    pointer-events:none; z-index:9999; transform:translate(-50%,-50%);
    transition:opacity 0.3s; opacity:0;
  `,document.body.appendChild(d),document.addEventListener(`mousemove`,e=>{d.style.left=e.clientX+`px`,d.style.top=e.clientY+`px`,d.style.opacity=`1`}),document.addEventListener(`mouseleave`,()=>{d.style.opacity=`0`});var f=document.createElement(`style`);f.textContent=`
    .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }
    .reveal-left { opacity:0; transform:translateX(-32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal-left.visible { opacity:1; transform:translateX(0); }
    .reveal-right { opacity:0; transform:translateX(32px); transition:opacity 0.65s ease, transform 0.65s ease; }
    .reveal-right.visible { opacity:1; transform:translateX(0); }
    .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity 0.55s ease, transform 0.55s ease; }
    .reveal-scale.visible { opacity:1; transform:scale(1); }

    /* Active nav link */
    .nav-links a.active { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }

    /* Skill pill hover */
    .skill-pill {
      cursor: default;
      transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
    }
    .skill-pill:hover {
      background: var(--accent-dim) !important;
      color: var(--accent) !important;
      border-color: var(--accent) !important;
      transform: translateY(-2px);
    }

    /* Honor card lift - PREMIUM SMOOTH TRANSITION */
    .honor-card { 
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                  box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                  border-color 0.4s ease,
                  background 0.4s ease; 
    }
    .honor-card:hover { 
      transform: translateY(-8px) scale(1.015); 
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 192, 64, 0.12);
      border-color: var(--gold) !important;
      background: var(--surface2);
    }

    /* Exp item hover shadow */
    .exp-item { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease, border-color 0.4s ease; }
    .exp-item:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--accent) !important; }

    /* Conf item hover */
    .conf-item { transition: all 0.3s ease; }
    .conf-item:hover { background: var(--surface2) !important; border-color: var(--accent) !important; transform: translateX(4px); }

    /* Cert badge hover */
    a.cert-badge { transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); }
    a.cert-badge:hover { transform: translateY(-3px) scale(1.02); box-shadow: var(--shadow-sm); }


    /* Rec card lift */
    .rec-card { transition: border-color 0.3s, transform 0.25s, box-shadow 0.25s; }
    .rec-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: var(--accent) !important; }

    /* Stat number pop */
    .stat-num { transition: color 0.2s, transform 0.2s; cursor: default; }
    .stat-num:hover { transform: scale(1.1); }

    /* Back to top */
    #backToTop {
      position: fixed; bottom: 2rem; right: 2rem; z-index: 800;
      width: 42px; height: 42px; border-radius: 50%;
      background: var(--surface2); border: 1px solid var(--border-strong);
      color: var(--muted-light); font-size: 1rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transform: translateY(14px);
      transition: opacity 0.3s, transform 0.3s, background 0.2s, color 0.2s, border-color 0.2s;
      pointer-events: none; font-family: 'DM Mono', monospace;
      box-shadow: var(--shadow-sm);
    }
    #backToTop.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
    #backToTop:hover { background: var(--accent); color: var(--bg); border-color: var(--accent); box-shadow: 0 0 20px rgba(0,200,240,0.35); }

    /* Reading progress bar */
    #readProgress {
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    z-index: 1001;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    width: 0%;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(0, 200, 240, 0.5);
  }

    /* Reset delays once visible so hover is snappy */
    .visible { transition-delay: 0s !important; }

    /* Card tilt effect */
    .tiltable { transform-style: preserve-3d; }

    /* Stagger delays for honor cards (entrance only) */
    .honors-grid .honor-card:nth-child(1) { transition-delay: 0s; }
    .honors-grid .honor-card:nth-child(2) { transition-delay: 0.07s; }
    .honors-grid .honor-card:nth-child(3) { transition-delay: 0.14s; }
    .honors-grid .honor-card:nth-child(4) { transition-delay: 0.21s; }
    .honors-grid .honor-card:nth-child(5) { transition-delay: 0.28s; }
    .honors-grid .honor-card:nth-child(6) { transition-delay: 0.35s; }
    .honors-grid .honor-card:nth-child(7) { transition-delay: 0.42s; }
    .honors-grid .honor-card:nth-child(8) { transition-delay: 0.49s; }


    /* Lang card hover */
    .lang-card { transition: border-color 0.2s, box-shadow 0.2s; }
    .lang-card:hover { border-color: var(--accent) !important; box-shadow: var(--shadow-sm); }

    /* Network item hover */
    .network-item { transition: border-color 0.2s, box-shadow 0.2s; }
    .network-item:hover { border-color: var(--accent3) !important; box-shadow: var(--shadow-sm); }

    /* Edu item hover */
    .edu-item { transition: border-color 0.2s, box-shadow 0.2s; }
    .edu-item:hover { border-color: var(--accent) !important; box-shadow: var(--shadow-sm); }

    /* Skill category hover */
    .skill-category { transition: border-color 0.2s, box-shadow 0.2s; }
    .skill-category:hover { border-color: var(--accent2) !important; box-shadow: var(--shadow-sm); }
  `,document.head.appendChild(f);var p=document.createElement(`div`);p.id=`readProgress`,p.style.width=`0%`,document.body.prepend(p);function m(){let e=window.scrollY||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(t<=0){p.style.width=`0%`;return}let n=Math.min(e/t*100,100);p.style.width=n+`%`}window.addEventListener(`load`,()=>{window.scrollTo(0,0),m()}),window.addEventListener(`scroll`,m,{passive:!0}),window.addEventListener(`resize`,m,{passive:!0});var h=document.createElement(`button`);h.id=`backToTop`,h.innerHTML=`↑`,h.title=`Back to top`,document.body.appendChild(h),h.addEventListener(`click`,()=>window.scrollTo({top:0,behavior:`smooth`})),window.addEventListener(`scroll`,()=>{h.classList.toggle(`visible`,window.scrollY>400)},{passive:!0}),document.querySelectorAll(`.exp-item`).forEach((e,t)=>{e.classList.add(`reveal`),e.style.transitionDelay=t*.1+`s`}),document.querySelectorAll(`.honor-card`).forEach((e,t)=>{e.classList.add(`reveal-scale`),e.style.transitionDelay=t*.07+`s`}),document.querySelectorAll(`.project-card`).forEach((e,t)=>{e.classList.add(`reveal`,t%2==0?`reveal-left`:`reveal-right`),e.style.transitionDelay=t*.12+`s`}),document.querySelectorAll(`.cert-group`).forEach((e,t)=>{e.classList.add(`reveal`),e.style.transitionDelay=t*.08+`s`}),document.querySelectorAll(`.skill-category`).forEach((e,t)=>{e.classList.add(`reveal-scale`),e.style.transitionDelay=t*.06+`s`}),document.querySelectorAll(`.edu-item`).forEach((e,t)=>{e.classList.add(`reveal-left`),e.style.transitionDelay=t*.1+`s`}),document.querySelectorAll(`.conf-item`).forEach((e,t)=>{e.classList.add(`reveal`),e.style.transitionDelay=t*.07+`s`}),document.querySelectorAll(`.network-item`).forEach((e,t)=>{e.classList.add(`reveal-left`),e.style.transitionDelay=t*.1+`s`}),document.querySelectorAll(`.rec-card`).forEach((e,t)=>{e.classList.add(`reveal-scale`),e.style.transitionDelay=t*.1+`s`}),document.querySelectorAll(`.pub-card`).forEach(e=>e.classList.add(`reveal`)),document.querySelectorAll(`.research-card`).forEach(e=>e.classList.add(`reveal`)),document.querySelectorAll(`h2.section-title`).forEach(e=>e.classList.add(`reveal`)),document.querySelectorAll(`.lang-card`).forEach((e,t)=>{e.classList.add(`reveal-scale`),e.style.transitionDelay=t*.08+`s`});var g=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),g.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(`.reveal, .reveal-left, .reveal-right, .reveal-scale`).forEach(e=>{g.observe(e)});function _(e,t,n=1600){let r=performance.now(),i=e.dataset.suffix||``,a=t%1!=0;function o(s){let c=s-r,l=Math.min(c/n,1),u=(1-(1-l)**3)*t;e.textContent=(a?u.toFixed(1):Math.round(u))+i,l<1?requestAnimationFrame(o):e.textContent=(a?t.toFixed(1):t)+i}requestAnimationFrame(o)}var v=document.querySelectorAll(`.stat-num`),y=!1,b=new IntersectionObserver(e=>{if(e[0].isIntersecting&&!y){y=!0;let e=(new Date-new Date(`2022-08-22`))/(1e3*60*60*24*365.25),t=parseFloat(e.toFixed(1));[{el:v[0],val:t,suffix:`+`},{el:v[1],val:40,suffix:`%`},{el:v[2],val:1,suffix:`st`},{el:v[3],val:5,suffix:`th`}].forEach(e=>{e.el&&(e.el.dataset.suffix=e.suffix,_(e.el,e.val,1600))})}},{threshold:.5});if(v.length>0){let e=v[0].closest(`.hero-stats`)||v[0];b.observe(e)}var x=document.querySelectorAll(`section[id]`),S=document.querySelectorAll(`.nav-links a.nav-item, .nav-drawer a.drawer-item`),C=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(S.forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`a[href="#${e.target.id}"]`).forEach(e=>e.classList.add(`active`)))})},{rootMargin:`-40% 0px -55% 0px`});x.forEach(e=>C.observe(e)),document.querySelectorAll(`.project-card`).forEach(e=>{e.classList.add(`tiltable`),e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.transform=`perspective(600px) rotateY(${r*8}deg) rotateX(${-i*8}deg) translateY(-4px)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})}),document.querySelectorAll(`.skill-pill`).forEach(e=>{e.addEventListener(`click`,t=>{let n=document.createElement(`span`);e.getBoundingClientRect(),n.style.cssText=`
        position:fixed; border-radius:50%;
        background:rgba(0,200,240,0.22);
        width:0; height:0;
        left:${t.clientX}px; top:${t.clientY}px;
        transform:translate(-50%,-50%) scale(0);
        animation:rippleOut 0.5s ease forwards;
        pointer-events:none; z-index:9998;
      `,document.body.appendChild(n);let r=document.createElement(`style`);r.textContent=`@keyframes rippleOut { to { width:80px; height:80px; opacity:0; transform:translate(-50%,-50%) scale(1); } }`,document.head.appendChild(r),setTimeout(()=>{n.remove()},600)})}),document.querySelectorAll(`.cert-group-issuer`).forEach(e=>{e.style.cursor=`default`});var w=document.querySelector(`.hero-glow`),T=document.querySelector(`.hero-grid-bg`);window.addEventListener(`scroll`,()=>{let e=window.scrollY;w&&(w.style.transform=`translateY(${e*.25}px)`),T&&(T.style.transform=`translateY(${e*.1}px)`)},{passive:!0});var E=document.getElementById(`emailCopyBtn`);E&&E.addEventListener(`click`,function(){e(this)});var D=document.getElementById(`contactMeBtn`);D&&D.addEventListener(`click`,function(){t()});var O=document.getElementById(`footerYear`);O&&(O.textContent=new Date().getFullYear());