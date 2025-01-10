(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=c(a);fetch(a.href,r)}})();const L="_green_1kwys_1",C={green:L};function g({variant:_,pLine:t,index:c}){return`
 <button 
  class=${C[_]}
  style='padding-inline:${t}'
  data-index=1
  data-action="open-modal" 
  >
    Оставить заявку
  </button>
  `}const x="_actions_ct544_1",B="_actions__btn_ct544_9",m={actions:x,actions__btn:B};function h(){return`
  <div class=${m.actions}>
    <button class=${m.actions__btn}>
      <img src="./icons/favorite.svg" alt="like" />
    </button>
    <button class=${m.actions__btn}>
      <img src="./icons/view.svg" alt="view" />
    </button>
  </div>
  `}const E="_wrapper_8d0vl_1",k="_wrapper__row_8d0vl_7",q="_wrapper__hit_8d0vl_11",D="_wrapper__discount_8d0vl_22",M="_wrapper__daily_8d0vl_33",p={wrapper:E,wrapper__row:k,wrapper__hit:q,wrapper__discount:D,wrapper__daily:M};function $({daily:_,hit:t,discount:c,variant:e}){let a=p.wrapper;return e&&(a+=` ${p[`wrapper__${e}`]}`),`
  <div class='${a}'>
    ${_?`<span class=${p.wrapper__daily}>Товар дня</span>`:""}

    ${t?`<span class=${p.wrapper__hit}>Хит</span>`:""}

    ${c?`<span class=${p.wrapper__discount}>-${c}%</span>`:""}
  </div>
  `}const O="_card_p7h43_1",W="_card__img_p7h43_24",I="_card__header_p7h43_30",z="_card__header__title_p7h43_36",T="_card__header__tags_p7h43_49",U="_card__price_action_p7h43_61",A="_card__price_action__price_p7h43_82",s={card:O,card__img:W,card__header:I,card__header__title:z,card__header__tags:T,card__price_action:U,card__price_action__price:A};function j({title:_,price:t,imageUrl:c,discount:e,hit:a,daily:r}){return`
    <div class=${s.card}>
      <img src=${c} alt="${_}" class=${s.card__img}>

      <div class=${s.card__header}>
        <h3 class=${s.card__header__title}>${_}</h3>

        <div class=${s.card__header__tags}>

          ${$({daily:r,discount:e,hit:a,variant:"row"})}

        </div>
      </div>
        
        ${h()}

      <div class=${s.card__price_action}>  
        <p class=${s.card__price_action__price}>${t}</p>
        ${g({variant:"green",pLine:"20px"})}
      </div>

    </div>
  `}const P="_card_qzb4m_1",F="_card__img_qzb4m_25",S="_card__header_qzb4m_31",H="_card__header__title_qzb4m_37",N="_card__header__tags_qzb4m_50",V="_card__price_action_qzb4m_62",R="_card__price_action__price_qzb4m_83",d={card:P,card__img:F,card__header:S,card__header__title:H,card__header__tags:N,card__price_action:V,card__price_action__price:R};function G({title:_,price:t,imageUrl:c,discount:e,hit:a,daily:r}){return`
    <div class=${d.card}>
      <img src=${c} alt="${_}" class=${d.card__img}>

      <div class=${d.card__header}>
        <h3 class=${d.card__header__title}>${_}</h3>

        <div class=${d.card__header__tags}>

          ${$({daily:r,discount:e,hit:a,variant:"row"})}

        </div>
      </div>
        
        ${h()}

      

      <div class=${d.card__price_action}>  
        <p class=${d.card__price_action__price}>${t}</p>
        ${g({variant:"green",pLine:"20px"})}
      </div>

    </div>
  `}const J="_card_1dr9a_1",K="_card__img_1dr9a_21",Q="_card__tags_1dr9a_37",X="_card__info_1dr9a_42",Y="_card__info__title_1dr9a_45",Z="_card__info__price_1dr9a_59",n={card:J,card__img:K,card__tags:Q,card__info:X,card__info__title:Y,card__info__price:Z};function __({title:_,price:t,imageUrl:c,discount:e,hit:a,daily:r}){return`
    <div class=${n.card}>
      <img src="${c}" alt="${_}" class=${n.card__img}>

      <div class=${n.card__tags}>
        ${$({daily:r,hit:a,discount:e})}
      </div>

        ${h()}

      <div class=${n.card__info}>
        <h3 class=${n.card__info__title}>${_}</h3>

        <p class=${n.card__info__price}>${t}</p>
        
        ${g({variant:"green"})}
      </div>
    </div>
  `}const a_="_wrapper_15959_1",e_="_wrapper__large_cards_15959_20",t_="_wrapper__medium_cards_15959_23",r_="_wrapper__small_cards_15959_37",c_="_wrapper__small_cards__container_15959_46",i_="_wrapper__small_cards__dots_15959_66",o_="_wrapper__small_cards__dots__btn_15959_77",s_="_wrapper__small_cards__dots__btn__active_15959_86",o={wrapper:a_,wrapper__large_cards:e_,wrapper__medium_cards:t_,wrapper__small_cards:r_,wrapper__small_cards__container:c_,wrapper__small_cards__dots:i_,wrapper__small_cards__dots__btn:o_,wrapper__small_cards__dots__btn__active:s_};function d_(){const _=[{title:"Горох в стручках, 1 кг",price:"570 ₽",imageUrl:"./img/peas.png",discount:29,daily:!0},{title:"Голубика лесная, 200 г",price:"140 ₽",imageUrl:"./img/blueberry.png",discount:31,daily:!0},{title:"Морковь мытая, 1 кг",price:"140 ₽",imageUrl:"./img/carrot.png",discount:29,daily:!0},{title:"Попкорн солёный, для СВЧ-печи, 120 г",price:"160 ₽",imageUrl:"./img/popcorn.jpeg",discount:29,daily:!0},{title:"Эскимо с малиной, 150 г",price:"160 ₽",imageUrl:"./img/ice-cream.jpeg",discount:29,daily:!0}];return`
    <div class=${o.wrapper}>

      <div class=${o.wrapper__large_cards}>
        ${j(_[0])}
      </div>

      <div class=${o.wrapper__medium_cards}>
        ${_.slice(1,3).map(G).join("")}
      </div>

      <div class=${o.wrapper__small_cards}>
        <div class=${o.wrapper__small_cards__container} id="smallCardsContainer">

          ${_.slice(3).map(__).join("")}

        </div>

          <div class=${o.wrapper__small_cards__dots} id="sliderDots">

            ${_.slice(3).map((t,c)=>`<button class=${o.wrapper__small_cards__dots__btn} data-index="${c}"/>
              `).join("")}

          </div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("smallCardsContainer"),t=Array.from(document.querySelectorAll("#sliderDots button")),c=()=>{const e=_.scrollLeft,a=_.scrollWidth-_.clientWidth,r=Math.round(e/a*(t.length-1));t.forEach((l,y)=>{l.classList.toggle(o.wrapper__small_cards__dots__btn__active,y===r)})};t.forEach((e,a)=>{e.addEventListener("click",()=>{const r=_.scrollWidth-_.clientWidth;_.scrollLeft=r/(t.length-1)*a})}),_.addEventListener("scroll",c),c()});const n_="_dialog_11a3e_1",l_="_dialog__header_11a3e_14",p_="_dialog__header__title_11a3e_20",m_="_dialog__header__close_11a3e_26",u_="_dialog__form_11a3e_29",g_="_dialog__form__input_11a3e_35",h_="_dialog__form__submit_11a3e_46",$_="_dialog__form__submit__checkbox_11a3e_50",v_="_dialog__form__submit__checkbox__radio_11a3e_55",b_="_dialog__form__submit__checkbox__label_11a3e_74",f_="_dialog__form__submit__button_11a3e_79",i={dialog:n_,dialog__header:l_,dialog__header__title:p_,dialog__header__close:m_,dialog__form:u_,dialog__form__input:g_,dialog__form__submit:h_,dialog__form__submit__checkbox:$_,dialog__form__submit__checkbox__radio:v_,dialog__form__submit__checkbox__label:b_,dialog__form__submit__button:f_};function w_(){return`
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

  `}const y_="_container_vvisl_1",L_="_container__thumbnail_vvisl_20",C_="_container__playBtn_vvisl_28",u={container:y_,container__thumbnail:L_,container__playBtn:C_};function x_(){return`
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
  `}document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("playButton"),t=document.getElementById("videoBlock");_?_.addEventListener("click",()=>{const c="https://www.youtube.com/embed/FQdaUv95mR8?si=CWJIYvT6yVWdGs1X&autoplay=1",e=document.createElement("iframe");e.src=c,e.allow="autoplay; encrypted-media",e.allowFullscreen=!0,_.style.display="none",t.appendChild(e)}):console.error("Play button not found in the DOM.")});document.addEventListener("DOMContentLoaded",()=>{const _=document.getElementById("cardDialog");document.getElementById("closeDialogButton").addEventListener("click",()=>{_.close()}),document.body.addEventListener("click",c=>{const e=c.target.closest("button[data-index]");if(!e)return;e.getAttribute("data-action")==="open-modal"&&_.showModal()})});const v=document.querySelector("#app"),b=document.createElement("div"),f=document.createElement("main"),w=document.createElement("div");b.innerHTML=x_();f.innerHTML=d_();w.innerHTML=w_();v.appendChild(b);v.appendChild(f);v.appendChild(w);
