<template>
  <main class="lamp-mobile">
    <div class="lamp-mobile-title">
      <h1 class="lamp-mobile-title-text" field="title" style="">
        Мы нашли для вас пожалуй лучшие светильники в России. Ecola
        <br /><span style="font-size: 16px"
          ><span
            data-redactor-style="color: rgb(91, 89, 89);"
            style="color: rgb(91, 89, 89)"
            ><strong class="big-modal-strong"
              >И даем на них гарантию</strong
            ></span
          >
        </span>
      </h1>
    </div>
    <div class="lamp-mobile-content">
      Мы работает только с фирменными светильниками, в которых применяются
      дорогие микроэлементы. Такие светильники работают в 2 раза дольше обычных.
      Благодаря оптовой закупке напрямую от крупнейших поставщиков из России, мы
      можем делать цену ниже магазинной до 20%
    </div>
    <div class="lamp-mobile-photo" v-on:click="CallModalShow">
      <img
        class="lamp-mobile-img"
        src="@/assets/Mobile/LampMobile/1.webp"
        alt="image-1"
      />
    </div>

    <a
      href="https://легос.рф/svet_catalog?roistat_visit=124493"
      style="width: 100%; text-decoration: none"
    >
      <div class="lamp-mobile-btn">
        <a class="lamp-mobile-btn-text"
          >Светильники
          <svg
            class="lamp-mobile-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g class="nc-icon-wrapper" fill="#ffffff">
              <polygon
                fill="#ffffff"
                points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
              ></polygon>
            </g>
          </svg>
        </a>
      </div>
    </a>

    <div class="lamp-mobile-title">
      <h1 class="lamp-mobile-title-text" field="title" style="">
        Смотреть идеи освещения в бесплатном каталоге ЛЕГОС
        <br /><span style="font-size: 16px"
          ><span
            data-redactor-style="color: rgb(91, 89, 89);"
            style="color: rgb(91, 89, 89)"
            ><strong class="big-modal-strong"
              >Для комнат от 9 до 16 кв.м.</strong
            ></span
          >
        </span>
      </h1>
    </div>
    <div class="lamp-mobile-content">
      В каталоге мы представили примеры: трекового освещения, светильников spot,
      световых линий, контурной подсветки и др. Примеры освещения для ванной
      комнаты. Примеры освещения для гостиной.
    </div>
    <div class="lamp-mobile-photo" v-on:click="CallModalShow">
      <img
        class="lamp-mobile-img"
        src="@/assets/Mobile/LampMobile/2.webp"
        alt="image-2"
      />
    </div>
    <a href="https://www.легос.рф/catalog1?roistat_visit=124493" style="width: 100%; text-decoration: none">
      <div class="lamp-mobile-btn">
        <a class="lamp-mobile-btn-text"
          >Каталог идей освещения
          <svg
            class="lamp-mobile-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g class="nc-icon-wrapper" fill="#ffffff">
              <polygon
                fill="#ffffff"
                points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
              ></polygon>
            </g>
          </svg>
        </a>
      </div>
    </a>
    <div class="callModalShow" v-if="isShow">
      <Modal :isShow="isShow" @hideModal="hideModal"> </Modal>
    </div>
    <div class="lamp-mobile-title">
      <h1 class="lamp-mobile-title-text" field="title" style="">
        КАК ПРАВИЛЬНО РАССТАВИТЬ СВЕТИЛЬНИКИ? СОВЕТЫ ПО РАЗМЕЩЕНИЮ
        <br />
      </h1>
    </div>
    <div class="lamp-mobile-content">
      Избегайте одного источника света Исключите слепящий эффект и прямой
      зрительный контакт со светильниками...
    </div>
    <section class="mobile-lamp-video">
      <div class="lamp-video">
        <iframe
          src="https://www.youtube.com/embed/JDh64DHaHKY?autoplay=0&amp;loop=0&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=black&amp;iv_load_policy=3&amp;theme=dark&amp;wmode=transparent&amp;origin=https://www.xn--c1adrop.xn--p1ai"
          allow="fullscreen"
          class="youtube-video"
          frameborder="0"
        ></iframe>
      </div>
    </section>
    <div class="lamp-mobile-content">
      Можно использовать как классическое освещение люстрами так и удобные
      специальные светильники для создания равномерной световой среды. А так же
      функциональный свет, для освещения зон, в которых мы готовим, работаем ,
      читаем или ужинаем.
    </div>
    <div class="lamp-mobile-btn" v-on:click="CallModalShow">
      <a class="lamp-mobile-btn-text"
        >Оставить заявку
        <svg
          class="lamp-mobile-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g class="nc-icon-wrapper" fill="#ffffff">
            <polygon
              fill="#ffffff"
              points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
            ></polygon>
          </g>
        </svg>
      </a>
    </div>
    
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "LampMobile",
  components: {
    Modal,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    CallModalShow() {
      this.isShow = !this.isShow;
    },
    hideModal(data) {
      this.isShow = data;
    },
  },
};
</script>

<style>
.lamp-mobile {
  display: none;
}

@media screen and (max-width: 980px) {
  .lamp-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .lamp-mobile-title,
  .lamp-mobile-content {
    max-width: 620px;
    /* width:100%; */
    font-size: 14px;
    font-weight: 300;
    font-weight: 300;
    margin-left: 3%;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 615px;
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 2%;
  }

  .lamp-mobile-photo {
    max-width: 980px;
    display: block;
    width: 100%;
    margin-bottom: 3%;
    cursor: pointer;
  }
  .lamp-mobile-img {
    width: 100%;
    height: 100%;
  }
  .lamp-mobile-content {
    margin-bottom: 3%;
    line-height: 1.55;
    margin-top: 2%;
  }
  .lamp-mobile-btn {
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #008057;
    padding: 30px 60px;
    font-size: 18px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    cursor: pointer;
    font-weight: 700;
    border-width: 1px;
    border-radius: 5px;
    margin-bottom: 7%;
  }
  .lamp-mobile-btn::after {
    content: "";
    position: absolute;
    height: 350%;
    width: 200%;
    top: 0;
    left: -100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    z-index: 20;
    -webkit-animation-name: ripple;
    animation-name: ripple;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  .lamp-mobile-btn-text {
    font-size: 28px;
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lamp-mobile-arrow {
    width: 15px;
    height: 20px;
    display: block;
    margin-left: 3px;
  }
  .mobile-lamp-video {
    /* display: flex;
    flex-direction: row; */
    width: 100%;
    max-width: 980px;
    /* height: 100%; */
    margin-right: 2%;
    margin-left: 2%;
    /* justify-content: center; */
  }
  .lamp-video {
    max-height: 800px;
    /* width: 100%; */
    margin-bottom: 1%;
  }
}

@media screen and (max-width: 560px) {
  .lamp-mobile-btn {
    font-size: 16px;
    height: 70px;
  }
  .lamp-mobile-btn-text {
    font-size: 16px;
  }
}
</style>