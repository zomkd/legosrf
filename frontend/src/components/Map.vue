<template>
  <main class="map">
    <div class="map-mobile-block">
      <div class="map-mobile-btn">
        <div class="map-mobile-btn-text" v-on:click="CallModalShow">
          <a class="map-mobile-btn-text-href" href="tel:+78352355047" >ПОЗВОНИТЬ</a>
        </div>
      </div>
      <div class="map-mobile-number"> <a class="map-mobile-btn-number-href" href="tel:+78352355047" >8 (8352) 35-53-40 </a></div>
      <div class="map-mobile-btn-questions" v-on:click="CallModalShow">
        <div class="map-mobile-btn-questions-text" >
          ОСТАЛИСЬ ВОПРОСЫ ?
        </div>
      </div>
      <div class="map-mobile-confidential"> <a class="map-mobile-confidential-href" href="https://www.легос.рф/politik?roistat_visit=124493">Политика конфиденциальности </a></div>
      <div class="map-yandex-rate">
        <iframe
          src="https://yandex.ru/sprav/widget/rating-badge/133527191228"
          width="150"
          height="50"
          frameborder="0"
        ></iframe>
      </div>
      <div class="map-mobile-title">
        <div class="map-mobile-title-text">
          Ждем Вас в нашем офисе.
          <strong>
            <strong>Торговый центр</strong> ДОМ МОД. Офис 512, 5 этаж <br />
          </strong>
        </div>
      </div>
    </div>
    <div class="map-title">
      <div class="map-title-text">
        Ждем Вас в нашем офисе.
        <strong>
          <strong>Торговый центр</strong> ДОМ МОД. Офис 512, 5 этаж <br />
        </strong>
      </div>
    </div>
    <section class="map-block">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0dd31bd5448d51153fdc044f88c8c6fc8a92ee47b7460d4af879a1546c9a0f7d&amp;source=constructor"
        width="1160"
        height="240"
        frameborder="0"
      ></iframe>
    </section>
    <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Map",
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
.map-mobile-block {
  display: none;
}
.map-title {
  font-family: "Arial";
  font-size: 20px;
  line-height: 1.17;
  font-weight: 600;
  color: #000;
  margin-left: 28%;
  margin-top: 15px;
  margin-bottom: 1%;
}
.map-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
}

@media screen and (max-width: 980px) {
  .map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  .map-mobile-btn-text-href {
    text-decoration: none;
    color: #ffffff;
  }
  .map-mobile-btn-number-href,.map-mobile-confidential-href {
    text-decoration: none;
    color: #000;
  }
  .map-mobile-block {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
  .map-mobile-btn,
  .map-mobile-btn-questions {
    color: #ffffff;
    background-color: #008264;
    display: flex;
    justify-content: center;
    width: 70%;
    align-items: center;
    max-height: 80px;
    height: 75px;
    font-family: "Roboto", Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
  }
  .map-mobile-btn {
    margin-top: 10%;
    width: 60%;
    min-width: 204px;
  }
  .map-mobile-btn-questions {
    min-width: 302px;
  }
  .map-mobile-number {
    display: block;
    color: #054d1d;
    line-height: 60px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .map-mobile-confidential {
    min-width: 302px;
    font-size: 14px;
    text-align: center;
    color: #054d1d;
    font-weight: 700;
    margin-top: 10%;
    margin-bottom: 5%;
    cursor: pointer;
  }
  .map-yandex-rate {
    margin-top: 10%;
    margin-bottom: 5%;
  }
  .map-mobile-title {
    align-self: center;
    width: 100%;
    min-width: 330px;
    font-size: 18px;
    margin-bottom: 2%;
  }
  .map-title {
    display: none;
  }
  /* .map-block {
  } */
}
</style>