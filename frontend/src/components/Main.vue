<template>
  <main class="legos-main">
    <div class="legos-description">
      <div class="legos-content">
        <div class="content">
          <header class="header">Основано в 2008 году</header>
          <p class="description">
            История ЛЕГОС<sup class="reg">&reg;</sup> берет свое начало
            с&nbsp;производства стеклопакетов и установки ПВХ окон
            с&nbsp;2008&nbsp;года. С&nbsp;2016 года торговая марка ЛЕГОС<sup
              class="reg"
              >&reg;</sup
            >
            объединила под собой услуги по&nbsp;изготовлению и&nbsp;установке
            окон, натяжных потолков и&nbsp;дверей.
          </p>
        </div>

        <div class="legos-description__img-cont">
          <img
            class="legos-description__img"
            src="@/assets/Main/description/doors.webp"
            alt="Doors"
          />

          <img
            class="legos-description__img"
            src="@/assets/Main/description/windows.webp"
            alt="Windows"
          />
        </div>
      </div>
    </div>

    <div class="legos-carousel">
      <div class="mobile-carousel" v-on:click="CallModalShow">
        <img
              class="main-swiper__img"
              src="@/assets/Main/carousel/slide-mobile.webp"
              alt=""
            />
      </div>
      <swiper class="main-swiper" :options="swiperOptions">
        <div class="swiper-slide">
          <div class="main-swiper__img-cont">
            <img
              class="main-swiper__img"
              src="@/assets/Main/carousel/slide-1.webp"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="main-swiper__img-cont">
            <img
              class="main-swiper__img"
              src="@/assets/Main/carousel/slide-2.webp"
              alt=""
            />
          </div>
        </div>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
     <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: 'Main',
  components: {
    Modal,
  },
  data() {
    return {
      isShow: false,
      swiperOptions: {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    CallModalShow() {
      this.isShow = !this.isShow;
    },
    hideModal(data) {
      this.isShow = data
    },
  },
}
</script>

<style>
.legos-main {
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
}

.legos-description {
  display: flex;
  position: relative;
  width: 25%;
  height: 470px;
  flex-direction: column;
}

.legos-description::before {
  content: '';
  display: block;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
}

.legos-description__img-cont {
  height: 50%;
}

.legos-description__img {
  width: 100%;
  height: 50%;
  display: block;
  object-fit: cover;
  object-position: left center;
}

.content {
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
}

.description {
  width: 250px;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #000000;
  font-size: 14px;
  font-family: 'Open Sans', Arial, sans-serif;
  line-height: 1.55;
  font-weight: 500;
}

.header {
  align-content: center;
  color: #000000;
  font-size: 23px;
  font-family: 'Open Sans', Arial, sans-serif;
  line-height: 1.15;
  font-weight: 600;
  opacity: 0.9;
}

.legos-carousel {
  width: 75%;
  height: 470px;
}

.main-swiper {
  height: 100%;
}

.main-swiper__img-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-swiper__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-swiper .swiper-button-next,
.main-swiper .swiper-button-prev {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #eeeeee;
}

.main-swiper .swiper-button-next::after,
.main-swiper .swiper-button-prev::after {
  color: #000;
}
.mobile-carousel {
  display: none;
}
@media screen and (max-width: 980px) {
  .legos-description,.main-swiper{
    display: none;
  }
  .legos-carousel {
    width: 100%;
    height: 100%;
  }
  .mobile-carousel {
    display: block;
    cursor: pointer;
  }
}
</style>
