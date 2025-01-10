(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(a){if(a.ep)return;a.ep=!0;const t=c(a);fetch(a.href,t)}})();const x="_green_8a3ou_1",L={green:x};function g({variant:_,pLine:e,index:c}){return`
 <button 
  class=${L[_]}
  style='padding-inline:${e}'
  data-index=1
  >
    Оставить заявку
  </button>
  `}const k="_actions_ct544_1",C="_actions__btn_ct544_9",m={actions:k,actions__btn:C};function h(){return`
  <div class=${m.actions}>
    <button class=${m.actions__btn}>
      <img src="./icons/favorite.svg" alt="like" />
    </button>
    <button class=${m.actions__btn}>
      <img src="./icons/view.svg" alt="view" />
    </button>
  </div>
  `}const B="_wrapper_8d0vl_1",E="_wrapper__row_8d0vl_7",q="_wrapper__hit_8d0vl_11",D="_wrapper__discount_8d0vl_22",j="_wrapper__daily_8d0vl_33",p={wrapper:B,wrapper__row:E,wrapper__hit:q,wrapper__discount:D,wrapper__daily:j};function $({daily:_,hit:e,discount:c,variant:r}){let a=p.wrapper;return r&&(a+=` ${p[`wrapper__${r}`]}`),`
  <div class='${a}'>
    ${_?`<span class=${p.wrapper__daily}>Товар дня</span>`:""}

    ${e?`<span class=${p.wrapper__hit}>Хит</span>`:""}

    ${c?`<span class=${p.wrapper__discount}>-${c}%</span>`:""}
  </div>
  `}const M="_card_1c82q_1",O="_card__img_1c82q_24",W="_card__header_1c82q_30",I="_card__header__title_1c82q_36",T="_card__header__tags_1c82q_48",U="_card__price_action_1c82q_60",A="_card__price_action__price_1c82q_81",d={card:M,card__img:O,card__header:W,card__header__title:I,card__header__tags:T,card__price_action:U,card__price_action__price:A};function P({title:_,price:e,imageUrl:c,discount:r,hit:a,daily:t}){return`
    <div class=${d.card}>
      <img src=${c} alt="${_}" class=${d.card__img}>

      <div class=${d.card__header}>
        <h3 class=${d.card__header__title}>${_}</h3>

        <div class=${d.card__header__tags}>

          ${$({daily:t,discount:r,hit:a,variant:"row"})}

        </div>
      </div>
        
        ${h()}

      <div class=${d.card__price_action}>  
        <p class=${d.card__price_action__price}>${e}</p>
        ${g({variant:"green",pLine:"20px"})}
      </div>

    </div>
  `}const F="_card_hjkx9_1",S="_card__img_hjkx9_25",z="_card__header_hjkx9_31",H="_card__header__title_hjkx9_37",N="_card__header__tags_hjkx9_49",V="_card__price_action_hjkx9_61",R="_card__price_action__price_hjkx9_82",s={card:F,card__img:S,card__header:z,card__header__title:H,card__header__tags:N,card__price_action:V,card__price_action__price:R};function G({title:_,price:e,imageUrl:c,discount:r,hit:a,daily:t}){return`
    <div class=${s.card}>
      <img src=${c} alt="${_}" class=${s.card__img}>

      <div class=${s.card__header}>
        <h3 class=${s.card__header__title}>${_}</h3>

        <div class=${s.card__header__tags}>

          ${$({daily:t,discount:r,hit:a,variant:"row"})}

        </div>
      </div>
        
        ${h()}

      

      <div class=${s.card__price_action}>  
        <p class=${s.card__price_action__price}>${e}</p>
        ${g({variant:"green",pLine:"20px"})}
      </div>

    </div>
  `}const J="_card_1dr9a_1",K="_card__img_1dr9a_21",Q="_card__tags_1dr9a_37",X="_card__info_1dr9a_42",Y="_card__info__title_1dr9a_45",Z="_card__info__price_1dr9a_59",n={card:J,card__img:K,card__tags:Q,card__info:X,card__info__title:Y,card__info__price:Z};function __({title:_,price:e,imageUrl:c,discount:r,hit:a,daily:t}){return`
    <div class=${n.card}>
      <img src="${c}" alt="${_}" class=${n.card__img}>

      <div class=${n.card__tags}>
        ${$({daily:t,hit:a,discount:r})}
      </div>

        ${h()}

      <div class=${n.card__info}>
        <h3 class=${n.card__info__title}>${_}</h3>

        <p class=${n.card__info__price}>${e}</p>
        
        ${g({variant:"green"})}
      </div>
    </div>
  `}const a_="_wrapper_15959_1",e_="_wrapper__large_cards_15959_20",r_="_wrapper__medium_cards_15959_23",t_="_wrapper__small_cards_15959_37",c_="_wrapper__small_cards__container_15959_46",i_="_wrapper__small_cards__dots_15959_66",o_="_wrapper__small_cards__dots__btn_15959_77",d_="_wrapper__small_cards__dots__btn__active_15959_86",o={wrapper:a_,wrapper__large_cards:e_,wrapper__medium_cards:r_,wrapper__small_cards:t_,wrapper__small_cards__container:c_,wrapper__small_cards__dots:i_,wrapper__small_cards__dots__btn:o_,wrapper__small_cards__dots__btn__active:d_};function s_(){const _=[{title:"Горох в стручках, 1 кг",price:"570 ₽",imageUrl:"./img/peas.png",discount:29,daily:!0},{title:"Голубика лесная, 200 г",price:"140 ₽",imageUrl:"./img/blueberry.png",discount:31,daily:!0},{title:"Морковь мытая, 1 кг",price:"140 ₽",imageUrl:"./img/carrot.png",discount:29,daily:!0},{title:"Попкорн солёный, для СВЧ-печи, 120 г",price:"160 ₽",imageUrl:"./img/popcorn.jpeg",discount:29,daily:!0},{title:"Эскимо с малиной, 150 г",price:"160 ₽",imageUrl:"./img/ice-cream.jpeg",discount:29,daily:!0}];return`
    <div class=${o.wrapper}>

      <div class=${o.wrapper__large_cards}>
        ${P(_[0])}
      </div>

      <div class=${o.wrapper__medium_cards}>
        ${_.slice(1,3).map(G).join("")}
      </div>

      <div class=${o.wrapper__small_cards}>
        <div class=${o.wrapper__small_cards__container} id="smallCardsContainer">

          ${_.slice(3).map(__).join("")}

        </div>

          <div class=${o.wrapper__small_cards__dots} id="sliderDots">

            ${_.slice(3).map((e,c)=>`<button class=${o.wrapper__small_cards__dots__btn} data-index="${c}"/>
              `).join("")}

          </div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("smallCardsContainer"),e=Array.from(document.querySelectorAll("#sliderDots button")),c=()=>{const r=_.scrollLeft,a=_.scrollWidth-_.clientWidth,t=Math.round(r/a*(e.length-1));e.forEach((l,y)=>{l.classList.toggle(o.wrapper__small_cards__dots__btn__active,y===t)})};e.forEach((r,a)=>{r.addEventListener("click",()=>{const t=_.scrollWidth-_.clientWidth;_.scrollLeft=t/(e.length-1)*a})}),_.addEventListener("scroll",c),c()});const n_="_dialog_11a3e_1",l_="_dialog__header_11a3e_14",p_="_dialog__header__title_11a3e_20",m_="_dialog__header__close_11a3e_26",u_="_dialog__form_11a3e_29",g_="_dialog__form__input_11a3e_35",h_="_dialog__form__submit_11a3e_46",$_="_dialog__form__submit__checkbox_11a3e_50",v_="_dialog__form__submit__checkbox__radio_11a3e_55",f_="_dialog__form__submit__checkbox__label_11a3e_74",b_="_dialog__form__submit__button_11a3e_79",i={dialog:n_,dialog__header:l_,dialog__header__title:p_,dialog__header__close:m_,dialog__form:u_,dialog__form__input:g_,dialog__form__submit:h_,dialog__form__submit__checkbox:$_,dialog__form__submit__checkbox__radio:v_,dialog__form__submit__checkbox__label:f_,dialog__form__submit__button:b_};function w_(){return`
    <dialog class=${i.dialog} id="cardDialog">
      <div class=${i.dialog__header}>
        <h2 class=${i.dialog__header__title}>Оставьте заявку</h2>
        <button class=${i.dialog__header__close} id="closeDialogButton">
        <img src="./icons/close.svg" alt="close" />
        </button>
    </div>

    <form class=${i.dialog__form} id="requestForm">
      <input
        class=${i.dialog__form__input} 
        type="text"
        id="name"
        name="name" 
        placeholder="Ваше имя*" 
        required />

      <input 
        class=${i.dialog__form__input} 
        type="text"
        id="phone"
        name="phone"
        placeholder="Номер телефона*"
        required />

        <div class=${i.dialog__form__submit}>
          <div class=${i.dialog__form__submit__checkbox}>
            <input
              class=${i.dialog__form__submit__checkbox__radio}
              type="checkbox"
              id="agreement" 
              name="agreement"
              required />

            <label
              class=${i.dialog__form__submit__checkbox__label}
              for="agreement"
              >
              Я соглашаюсь на обработку персональных данных
              </label>
          </div>

          <button class=${i.dialog__form__submit__button} type="submit">Отправить</button>
      </div>

      </form>
    </dialog>

  `}const y_="_container_1owxz_1",x_="_container__thumbnail_1owxz_20",L_="_container__playBtn_1owxz_28",u={container:y_,container__thumbnail:x_,container__playBtn:L_};function k_(){return`
  <div class=${u.container} >
    <div id="videoBlock" style='position:relative'>
      <img 
        src="img/video-thumbnail.png" 
        alt="Video Thumbnail" 
        class=${u.container__thumbnail}
        id="videoThumbnail" 
      />
    </div>
    <button class=${u.container__playBtn} id="playButton">
    Смотреть видео
    <img src="./icons/play.svg" alt="play"/>
    </button>
  </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("playButton"),e=document.getElementById("videoBlock");_?_.addEventListener("click",()=>{const c="https://www.youtube.com/embed/FQdaUv95mR8?si=CWJIYvT6yVWdGs1X&autoplay=1",r=document.createElement("iframe");r.src=c,r.allow="autoplay; encrypted-media",r.allowFullscreen=!0,_.style.display="none",e.appendChild(r)}):console.error("Play button not found in the DOM.")});document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("cardDialog");document.getElementById("closeDialogButton").addEventListener("click",()=>{_.close()}),document.body.addEventListener("click",c=>{c.target.closest("button[data-index]")&&_.showModal()})});const v=document.querySelector("#app"),f=document.createElement("div"),b=document.createElement("main"),w=document.createElement("div");f.innerHTML=k_();b.innerHTML=s_();w.innerHTML=w_();v.appendChild(f);v.appendChild(b);v.appendChild(w);
