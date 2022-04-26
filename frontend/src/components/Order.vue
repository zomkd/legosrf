<template>
  <main class="order">
    <section class="order-block">
      <div class="order-block-img">
        <img class="order-img" src="@/assets/Order/img-1.webp" alt="image-1" />
      </div>
      <div class="order-block-content">
        <div class="order-block-title">Оформите заказ не выходя из дома</div>
        <div class="order-block-text">
          <strong></strong>Наш специалист<strong class="strong-text">
            оперативно приедет</strong
          >
          к вам на адрес со всеми образцами материалов. Вы сразу получите
          <strong class="strong-text">детальный расчет</strong> стоимости работ
          со схемой потолка и спецификацией. Заключить договор можно
          <strong class="strong-text">не выходя из дома</strong>
        </div>
        <div class="order-block-btn">
          <div class="order-block-btn-text" v-on:click="CallModalShow">
            Оставить заявку
          </div>
        </div>
      </div>
    </section>
    <section class="mobile-order-block">
      <div class="mobile-order-block-img">
        <img
          class="mobile-order-img"
          src="@/assets/Order/2.webp"
          alt="image-1"
        />
      </div>
      <div class="mobile-order-block-content">
        <div class="mobile-order-employee-name">Александр - инженер</div>
        <div class="mobile-order-block-title">
          Оформите заказ не выходя из дома
        </div>
        <div class="mobile-order-block-text">
          <strong></strong>Наш специалист<strong class="strong-text">
            оперативно приедет</strong
          >
          к вам на адрес со всеми образцами материалов. Вы сразу получите
          <strong class="strong-text">детальный расчет</strong> стоимости работ
          со схемой потолка и спецификацией. Заключить договор можно
          <strong class="strong-text">не выходя из дома</strong>
        </div>
        <div class="mobile-order-block-btn">
          <div class="mobile-order-block-btn-text" v-on:click="CallModalShow">
            Позвонить 8 (8352) 35-53-40
          </div>
        </div>
      </div>
    </section>
    <div class="callModalShow" v-if="isShow">
      <Modal :isShow="isShow" @hideModal="hideModal"> </Modal>
    </div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Order",
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
.mobile-order-block {
  display: none;
}
.order {
  background-color: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.order-block-img {
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  height: 600px;
  margin-top: 2%;
  margin-right: 2%;
}
.order-block {
  display: flex;
  padding-bottom: 2%;
  margin-right: 2%;
  margin-left: 2%;
}
.order-img {
  display: block;
  width: 100%;
  height: 100%;
}
.order-block-content {
  display: flex;
  flex-direction: column;
  max-width: 560px;
  width: 560px;
  max-height: 560px;
  height: 560px;
  margin-top: 2%;
}
.order-block-title {
  font-size: 42px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

.order-block-text {
  margin-top: 10%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}
.strong-text {
  font-weight: 700;
}

.order-block-btn {
  margin-top: 10%;
  color: #ffffff;
  background-color: #006642;
  max-width: 250px;
  width: 250px;
  max-height: 50px;
  height: 50px;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
}

.order-block-btn-text {
  margin-top: 5%;
}

@media screen and (max-width: 980px) {
  .order-block {
    display: none;
  }
  .order {
    display: flex;
    background-color: #efefef;
  }
  .mobile-order-block {
    background-color: #ffffff;
    margin-top: 20%;
    margin-right: 4%;
    margin-left: 4%;
    min-height: 400px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
  }

  .mobile-order-block-img {
    /* height: 60vh; */
    width: 100%;
    min-height: 209px;
    overflow: hidden;
    margin-bottom: 2em;
  }
  .mobile-order-img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  .mobile-order-employee-name {
    font-size: 10px;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 2.5px;
  }

  .mobile-order-block-content {
    margin-right: 6%;
    margin-left: 6%;
  }
  .mobile-order-block-title {
    font-size: 28px;
    font-weight: 600;
    color: #000;
    margin-top: 5%;
    margin-bottom: 7%;
  }
  .mobile-order-block-text {
    font-weight: 200;
    color: #000;
    font-size: 14px;
    line-height: 1.45;
  }
  .mobile-order-block-btn {
    margin-top: 10%;
    margin-bottom: 7%;
    color: #ffffff;
    background-color: #006642;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 50px;
    height: 50px;
    font-family: "Roboto", Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>