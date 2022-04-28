<template>
  <main class="montage-legos">
    <div class="lamp-mobile-wrapper">
      <div class="lamp-mobile-title">
        <h1 class="lamp-mobile-title-text" field="title" style="">
          Почему монтаж ЛЕГОС "безопасный" ?
          <br />
        </h1>
      </div>
      <div class="lamp-mobile-content">
        - Так например мы не используем провода сечением менее 1,5 квадрата на
        светильники.
        <br />
        - Используем только клеммы WAGO для надежного соединения проводов.
        <br />
        - Используем исключительно специальные ПВХ платформы для установки люстр
        и светильников.
      </div>
    </div>
    <div class="lamp-mobile-photo">
      <img
        class="lamp-mobile-img"
        src="@/assets/Mobile/MontageLegos/1.webp"
        alt=""
      />
    </div>

    <div class="montage-legos-price-list-block">
      <div class="montage-legos-product-1" >
        <div class="montage-legos-product-1-img" v-on:click="CallModalShow">
          <img
            class="montage-legos-product-img"
            src="@/assets/PriceList/img-1.webp"
            alt="image-1"
          />
        </div>
        <div class="montage-legos-product-1-description">
          Используем безопасный провод ШВВП 2 х 1,5 квадрата
        </div>
        <div class="montage-legos-product-1-btn" v-on:click="CallModalShow">
          <div class="montage-legos-product-1-btn-text">Провода</div>
        </div>
      </div>
      <div class="montage-legos-product-2" >
        <div class="montage-legos-product-2-img" v-on:click="CallModalShow">
          <img
            class="montage-legos-product-img"
            src="@/assets/PriceList/img-2.webp"
            alt="image-2"
          />
        </div>
        <div class="montage-legos-product-2-description">
          Используем клеммы WAGO на все соединения. Надёжно!
        </div>
        <div class="montage-legos-product-2-btn" v-on:click="CallModalShow">
          <div class="montage-legos-product-2-btn-text">КЛЕММЫ</div>
        </div>
      </div>
      <div class="montage-legos-product-3" >
        <div class="montage-legos-product-3-img" v-on:click="CallModalShow">
          <img
            class="montage-legos-product-img"
            src="@/assets/PriceList/img-3.webp"
            alt="image-3"
          />
        </div>
        <div class="montage-legos-product-3-description">
          Используем ПВХ платформу "LegosStrong" под люстру
        </div>
        <div class="montage-legos-product-3-btn" v-on:click="CallModalShow">
          <div class="montage-legos-product-3-btn-text">
            Платформы под люстру
          </div>
        </div>
      </div>
      <div class="montage-legos-product-4" >
        <div class="montage-legos-product-4-img" v-on:click="CallModalShow">
          <img
            class="montage-legos-product-img"
            src="@/assets/PriceList/img-4.webp"
            alt="image-4"
          />
        </div>
        <div class="montage-legos-product-4-description">
          Платформа под светильник LegosPower
        </div>
        <div class="montage-legos-product-4-btn" v-on:click="CallModalShow">
          <div class="montage-legos-product-4-btn-text">
            Платформы под светильник
          </div>
        </div>
      </div>
    </div>
    <div class="lamp-mobile-btn" v-on:click="CallModalShow">
      <a class="lamp-mobile-btn-text"
        >Оставть заявку
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
    <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "MontageLegos",
   components: {
    Modal,
  },
  data() {
    return {
      isShow: false,
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
};
</script>

<style>
.montage-legos {
  display: none;
}

@media screen and (max-width: 980px) {
  .montage-legos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 5%;
  }
  .montage-legos-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 615px;
  }
  .montage-legos-price-list-block {
    max-width: 615px;
    margin-bottom: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    margin: 0 1em 1em;
  }
  .montage-legos-product-1-description,
  .montage-legos-product-2-description,
  .montage-legos-product-3-description,
  .montage-legos-product-4-description {
    margin-top: 4%;
  }
  .montage-legos-product-1,
  .montage-legos-product-2,
  .montage-legos-product-3,
  .montage-legos-product-4 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  .montage-legos-product-1-img,
  .montage-legos-product-2-img,
  .montage-legos-product-3-img,
  .montage-legos-product-4-img {
    width: 100%;
    /* width: 280px; */
    max-height: 172px;
  }
  /* .montage-legos-price-list-row-2 {
    margin-top: 7%;
    margin-bottom: 3%;
  } */
  .montage-legos-product-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
  }
  .montage-legos-product-1-description,
  .montage-legos-product-2-description,
  .montage-legos-product-3-description,
  .montage-legos-product-4-description {
    font-weight: 700;
    line-height: 1.35;
    font-size: 14px;
    font-family: "Roboto", Arial, sans-serif;
    color: #000;
  }
  .montage-legos-product-1-btn,
  .montage-legos-product-2-btn,
  .montage-legos-product-3-btn,
  .montage-legos-product-4-btn {
    margin-top: 5%;
    align-self: flex-start;
    border-radius: 5px;
    font-family: "Roboto", Arial, sans-serif;
    height: 35px;
    color: #ffffff;
    background-color: #00915e;
    font-weight: 700;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .montage-legos-product-1-btn-text,
  .montage-legos-product-2-btn-text,
  .montage-legos-product-3-btn-text,
  .montage-legos-product-4-btn-text {
    padding: 2em;
  }
}
@media screen and (max-width: 670px) {
  .montage-legos-product-1-btn,
  .montage-legos-product-2-btn,
  .montage-legos-product-3-btn,
  .montage-legos-product-4-btn {
    width: 100%;
    align-items: center;
  }
}
</style>