<template>
  <main class="price-list">
    <section class="price-list-row">
      <div class="price-list-block">
        <div class="product-1">
          <div class="product-1-img" v-on:click="CallModalShow">
            <img
              class="product-img"
              src="@/assets/PriceList/img-1.webp"
              alt="image-1"
            />
          </div>
          <div class="product-1-description">
            Используем безопасный провод ШВВП 2 х 1,5 квадрата
          </div>
          <div class="product-1-btn" v-on:click="CallModalShow">
            <div class="product-1-btn-text">Провода</div>
          </div>
        </div>
        <div class="product-2" >
          <div class="product-2-img" v-on:click="CallModalShow">
            <img
              class="product-img"
              src="@/assets/PriceList/img-2.webp"
              alt="image-2"
            />
          </div>
          <div class="product-2-description">
            Используем клеммы WAGO на все соединения. Надёжно!
          </div>
          <div class="product-2-btn" v-on:click="CallModalShow">
            <div class="product-2-btn-text" >КЛЕММЫ</div>
          </div>
        </div>
        <div class="product-3" >
          <div class="product-3-img" v-on:click="CallModalShow">
            <img
              class="product-img"
              src="@/assets/PriceList/img-3.webp"
              alt="image-3"
            />
          </div>
          <div class="product-3-description">
            Используем ПВХ платформу "LegosStrong" под люстру
          </div>
          <div class="product-3-btn" v-on:click="CallModalShow">
            <div class="product-3-btn-text">Платформы под люстру</div>
          </div>
        </div>
        <div class="product-4" >
          <div class="product-4-img" v-on:click="CallModalShow">
            <img
              class="product-img"
              src="@/assets/PriceList/img-4.webp"
              alt="image-4"
            />
          </div>
          <div class="product-4-description">
            Платформа под светильник LegosPower
          </div>
          <div class="product-4-btn" v-on:click="CallModalShow">
            <div class="product-4-btn-text">Платформы под светильник</div>
          </div>
        </div>
      </div>
    </section>
    <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "PriceList",
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
      this.isShow = data
    },
  },
};
</script>

<style>
.price-list-row {
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
.price-list-block {
  display: flex;
  max-width: 1160px;
  width: 100%;
      margin-right: 2%;
    margin-left: 2%;
  /* height: 652px; */
  /* max-height: 652px; */
  /* justify-content: center; */
}
.product-1,
.product-2,
.product-3,
.product-4 {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.product-1-description,
.product-2-description,
.product-3-description,
.product-4-description {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.35;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

.product-1-btn,
.product-2-btn,
.product-3-btn,
.product-4-btn {
  margin-top: 5%;
  border-radius: 5px;
  font-family: "Roboto", Arial, sans-serif;
  text-align: center;
  height: 35px;
  color: #ffffff;
  background-color: #00915e;
  font-weight: 700;
  font-size: 13px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.product-1-btn,
.product-2-btn {
  max-width: 90px;
}
.product-3-btn {
  max-width: 180px;
}
.product-4-btn {
  max-width: 210px;
}
/* .product-1-btn-text,
.product-2-btn-text {
  padding: 8%;
}
.product-3-btn-text,
.product-4-btn-text {
    padding: 8%;
} */
.product-1-img,.product-2-img,.product-3-img,.product-4-img {
  width: 100%;
  height: 100%;
  max-width: 260px;
  max-height: 160px;

}
.product-img {
  display: block;
  width:100%;
  height: 100%;
}

@media screen and (max-width: 980px){
  .price-list {
    display: none;
  }
}
</style>