<template>
  <div>
    <main class="lamp-panel">
      <section class="lamp-panel-wrapper">
        <div class="lamp-panel-block-1" v-on:click="CallBigModalFirstShow">
          <div class="lamp-panel-block-1-conent">
            <div class="lamp-panel-block-1-title">
              Все про цилиндрические светильники "споты" за 50 секунд.
            </div>
            <div class="lamp-panel-block-1-text">
              Споты обеспечивают направленное освещение, образуя в нужном месте
              пятно света
            </div>
          </div>
          <div class="lamp-panel-block-1-img">
            <img
              class="lamp-panel-block-1-img-1"
              src="@/assets/LampPanel/img-1.jpg"
              alt="image-1"
            />
          </div>
        </div>
        <div class="lamp-panel-block-2" v-on:click="CallBigModalFourthShow">
          <div class="lamp-panel-block-2-conent">
            <div class="lamp-panel-block-2-title">НИША LUMFER 80</div>
            <div class="lamp-panel-block-2-text">
              ЛЕГОС представляет принципиально новый подход в световом дизайне
              интерьера
            </div>
          </div>
          <div class="lamp-panel-block-2-img">
            <img
              class="lamp-panel-block-2-img-2"
              src="@/assets/LampPanel/img-2.webp"
              alt="image-2"
            />
          </div>
        </div>
        <div class="lamp-panel-block-3" v-on:click="CallBigModalFifthShow">
          <div class="lamp-panel-block-3-conent">
            <div class="lamp-panel-block-3-title">«ПАРЯЩИЕ» ЛИНИИ LUMFER</div>
            <div class="lamp-panel-block-3-text">
              ЛЕГОС представляет принципиально новый подход в световом дизайне
              интерьера
            </div>
          </div>
          <div class="lamp-panel-block-3-img">
            <img
              class="lamp-panel-block-3-img-3"
              src="@/assets/LampPanel/img-3.webp"
              alt="image-3"
            />
          </div>
        </div>
        <div class="lamp-panel-block-4" v-on:click="CallBigModalSixthShow">
          <div class="lamp-panel-block-4-conent">
            <div class="lamp-panel-block-4-title">НИША LUMFER</div>
            <div class="lamp-panel-block-4-text">
              ЛЕГОС представляет принципиально новый подход в световом дизайне
              интерьера
            </div>
          </div>
          <div class="lamp-panel-block-4-img">
            <img
              class="lamp-panel-block-4-img"
              src="@/assets/LampPanel/img-4.webp"
              alt="image-4"
            />
          </div>
        </div>
        <div class="lamp-panel-block-5" v-on:click="CallBigModalSeventhShow">
          <div class="lamp-panel-block-5-conent">
            <div class="lamp-panel-block-5-title">TRACK 30 LUMFER</div>
            <div class="lamp-panel-block-5-text">
              ЛЕГОС представляет принципиально новый подход в световом дизайне
              интерьера
            </div>
          </div>
          <div class="lamp-panel-block-5-img">
            <img
              class="lamp-panel-block-5-img-5"
              src="@/assets/LampPanel/img-5.webp"
              alt="image-5"
            />
          </div>
        </div>
        <div class="lamp-panel-block-6" v-on:click="CallBigModalEighthShow">
          <div class="lamp-panel-block-6-conent">
            <div class="lamp-panel-block-6-title">Сатиновое полотно MSD</div>
            <div class="lamp-panel-block-6-text">
              Такой материал имитирует структуру и свойства сатиновой (шелковой)
              ткани.
            </div>
          </div>
          <div class="lamp-panel-block-6-img">
            <img
              class="lamp-panel-block-6-img-6"
              src="@/assets/LampPanel/img-6.webp"
              alt="image-6"
            />
          </div>
        </div>
        <div class="lamp-panel-block-7" v-on:click="CallBigModalNinthShow">
          <div class="lamp-panel-block-7-conent">
            <div class="lamp-panel-block-7-title">Матовое полотно MSD</div>
            <div class="lamp-panel-block-7-text">
              Визуально она напоминает идеально ровную оштукатуренную
              поверхность
            </div>
          </div>
          <div class="lamp-panel-block-7-img">
            <img
              class="lamp-panel-block-7-img-7"
              src="@/assets/LampPanel/img-7.webp"
              alt="image-7"
            />
          </div>
        </div>
        <div class="lamp-panel-block-8" v-on:click="CallBigModalTenShow">
          <div class="lamp-panel-block-8-conent">
            <div class="lamp-panel-block-8-title">Лаковое полотно MSD</div>
            <div class="lamp-panel-block-8-text">
              Зеркальная поверхность. Великолепно смотрится в интерьерах
            </div>
          </div>
          <div class="lamp-panel-block-8-img">
            <img
              class="lamp-panel-block-8-img-8"
              src="@/assets/LampPanel/img-8.webp"
              alt="image-8"
            />
          </div>
        </div>
        <div class="lamp-panel-block-9" v-on:click="CallBigModalElevenShow">
          <div class="lamp-panel-block-9-conent">
            <div class="lamp-panel-block-9-title">
              Как определить, что фирма устанавливает MSD?
            </div>
          </div>
          <div class="lamp-panel-block-9-img">
            <img
              class="lamp-panel-block-9-img-9"
              src="@/assets/LampPanel/img-9.webp"
              alt="image-9"
            />
          </div>
        </div>
      </section>
      
      <div class="callBigModalShow" v-if="isFirstShow">
        <BigModalFirst :isShow="isFirstShow" @hideModal="hideModal">
        </BigModalFirst>
      </div>
      <div class="callBigModalShow" v-if="isSecondShow">
        <BigModalSecond :isShow="isSecondShow" @hideModal="hideModal">
        </BigModalSecond>
      </div>
      <div class="callBigModalShow" v-if="isThirdShow">
        <BigModalThird :isShow="isThirdShow" @hideModal="hideModal">
        </BigModalThird>
      </div>
      <div class="callBigModalShow" v-if="isFourthShow">
        <BigModalFourth :isShow="isFourthShow" @hideModal="hideModal">
        </BigModalFourth>
      </div>
      <div class="callBigModalShow" v-if="isFifthShow">
        <BigModalFifth :isShow="isFifthShow" @hideModal="hideModal">
        </BigModalFifth>
      </div>
      <div class="callBigModalShow" v-if="isSixthShow">
        <BigModalSixth :isShow="isSixthShow" @hideModal="hideModal">
        </BigModalSixth>
      </div>
      <div class="callBigModalShow" v-if="isSeventhShow">
        <BigModalSeventh :isShow="isSeventhShow" @hideModal="hideModal">
        </BigModalSeventh>
      </div>
      <div class="callBigModalShow" v-if="isEighthShow">
        <BigModalEighth :isShow="isEighthShow" @hideModal="hideModal">
        </BigModalEighth>
      </div>
      <div class="callBigModalShow" v-if="isNinthShow">
        <BigModalNinth :isShow="isNinthShow" @hideModal="hideModal">
        </BigModalNinth>
      </div>
      <div class="callBigModalShow" v-if="isTenShow">
        <BigModalTen :isShow="isTenShow" @hideModal="hideModal"> </BigModalTen>
      </div>
      <div class="callBigModalShow" v-if="isElevenShow">
        <BigModalEleven :isShow="isElevenShow" @hideModal="hideModal">
        </BigModalEleven>
      </div>
    </main>
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
    <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </div>
</template>

<script>
import BigModalFirst from "@/components/BigModals/BigModalFirst.vue";
import BigModalSecond from "@/components/BigModals/BigModalSecond.vue";
import BigModalThird from "@/components/BigModals/BigModalThird.vue";
import BigModalFourth from "@/components/BigModals/BigModalFourth.vue";
import BigModalFifth from "@/components/BigModals/BigModalFifth.vue";
import BigModalSixth from "@/components/BigModals/BigModalSixth.vue";
import BigModalSeventh from "@/components/BigModals/BigModalSeventh.vue";
import BigModalEighth from "@/components/BigModals/BigModalEighth.vue";
import BigModalNinth from "@/components/BigModals/BigModalNinth.vue";
import BigModalTen from "@/components/BigModals/BigModalTen.vue";
import BigModalEleven from "@/components/BigModals/BigModalEleven.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "LampPanel",
  components: {
    BigModalFirst,
    BigModalSecond,
    BigModalThird,
    BigModalFourth,
    BigModalFifth,
    BigModalSixth,
    BigModalSeventh,
    BigModalEighth,
    BigModalNinth,
    BigModalTen,
    BigModalEleven,
     Modal,
  },
  data() {
    return {
      isShow: false,
      isFirstShow: false,
      isSecondShow: false,
      isThirdShow: false,
      isFourthShow: false,
      isFifthShow: false,
      isSixthShow: false,
      isSeventhShow: false,
      isEighthShow: false,
      isNinthShow: false,
      isTenShow: false,
      isElevenShow: false,
    };
  },
  methods: {
    CallModalShow() {
      this.isShow = !this.isShow;
    },

    CallBigModalFirstShow() {
      this.isFirstShow = !this.isFirstShow;
    },
    CallBigModalSecondShow() {
      this.isSecondShow = !this.isSecondShow;
    },
    CallBigModalThirdShow() {
      this.isThirdShow = !this.isThirdShow;
    },
    CallBigModalFourthShow() {
      this.isFourthShow = !this.isFourthShow;
    },
    CallBigModalFifthShow() {
      this.isFifthShow = !this.isFifthShow;
    },
    CallBigModalSixthShow() {
      this.isSixthShow = !this.isSixthShow;
    },
    CallBigModalSeventhShow() {
      this.isSeventhShow = !this.isSeventhShow;
    },
    CallBigModalEighthShow() {
      this.isEighthShow = !this.isEighthShow;
    },
    CallBigModalNinthShow() {
      this.isNinthShow = !this.isNinthShow;
    },
    CallBigModalTenShow() {
      this.isTenShow = !this.isTenShow;
    },
    CallBigModalElevenShow() {
      this.isElevenShow = !this.isElevenShow;
    },
    hideModal(data) {
      this.isFirstShow = data;
      this.isSecondShow = data;
      this.isThirdShow = data;
      this.isFourthShow = data;
      this.isFifthShow = data;
      this.isSixthShow = data;
      this.isSeventhShow = data;
      this.isEighthShow = data;
      this.isNinthShow = data;
      this.isTenShow = data;
      this.isElevenShow = data;
      this.isShow = data

    },
  },
};
</script>

<style>
.lamp-mobile-btn {
  display: none;
}
/* .lamp-panel {
  background-color: #f0f0f0;
} */
.lamp-panel {
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.lamp-panel-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5%;
  margin: 5% 2% 5% 2%;
  max-width: 1160px;
  width: 1160px;
  height: 1160px;
}
.lamp-panel-row-1,
.lamp-panel-row-2,
.lamp-panel-row-3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 2%;
  margin-left: 2%;
}
.lamp-panel-row-1-block,
.lamp-panel-row-2-block,
.lamp-panel-row-3-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1160px;
  width: 1160px;
  max-height: 345px;
  height: 345px;
  margin-bottom: 1%;
  margin-top: 5%;
  margin-right: 1%;
}
.lamp-panel-row-3-block {
  height: 246.6px;
  margin-bottom: 2%;
}
.lamp-panel-row-3-block {
  margin-top: 1%;
}
.lamp-panel-block-1,
.lamp-panel-block-2,
.lamp-panel-block-3,
.lamp-panel-block-4,
.lamp-panel-block-5,
.lamp-panel-block-6,
.lamp-panel-block-7,
.lamp-panel-block-8,
.lamp-panel-block-9 {
  max-width: 260px;
  width: 100%;
  height: 100%;
  /* max-height: 328.6px; */
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 1%;
}
.lamp-panel-block-9 {
  height: 246.6px;
  margin-right: 0;
}
.lamp-panel-block-1-img,
.lamp-panel-block-2-img,
.lamp-panel-block-3-img,
.lamp-panel-block-4-img,
.lamp-panel-block-5-img,
.lamp-panel-block-6-img,
.lamp-panel-block-7-img,
.lamp-panel-block-8-img {
  max-width: 260px;
  width: 100%;
}
.lamp-panel-block-9-img {
  max-width: 231px;
  width: 100%;
}
.lamp-panel-block-1-img-1,
.lamp-panel-block-2-img-2,
.lamp-panel-block-3-img-3,
.lamp-panel-block-4-img-4,
.lamp-panel-block-5-img-5,
.lamp-panel-block-6-img-6,
.lamp-panel-block-7-img-7,
.lamp-panel-block-8-img-8,
.lamp-panel-block-9-img-9 {
  width: 100%;
  display: block;
  height: 100%;
}

.lamp-panel-block-1-title,
.lamp-panel-block-2-title,
.lamp-panel-block-3-title,
.lamp-panel-block-4-title,
.lamp-panel-block-5-title,
.lamp-panel-block-6-title,
.lamp-panel-block-7-title,
.lamp-panel-block-8-title,
.lamp-panel-block-9-title {
  font-size: 20px;
  line-height: 1.35;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

.lamp-panel-block-1-text,
.lamp-panel-block-2-text,
.lamp-panel-block-3-text,
.lamp-panel-block-4-text,
.lamp-panel-block-5-text,
.lamp-panel-block-6-text,
.lamp-panel-block-7-text,
.lamp-panel-block-8-text,
.lamp-panel-block-9-text {
  margin-top: 3%;
  line-height: 1.55;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
}

@media screen and (max-width: 980px) {
  .lamp-mobile-btn {
    display: flex;
    cursor: pointer;
  }
  .lamp-panel-wrapper {
    display: flex;
    margin-left: 3%;
    width: 100%;
    height: 450px;
  }
  .lamp-panel {
    display: flex;
    overflow-x: auto;
    height: 580px;
    justify-content: space-between;
  }

  .lamp-panel-row-1-block,
  .lamp-panel-row-2-block,
  .lamp-panel-row-3-block {
    max-height: 418px;
    padding-left: 1%;
    margin-bottom: 1%;
    margin-top: 5%;
    height: 100%;
    width: 100%;
  }
  .lamp-panel-block-1,
  .lamp-panel-block-2,
  .lamp-panel-block-3,
  .lamp-panel-block-4,
  .lamp-panel-block-5,
  .lamp-panel-block-6,
  .lamp-panel-block-7,
  .lamp-panel-block-8,
  .lamp-panel-block-9 {
    padding-right: 2%;
    height: 418px;
    min-width: 320px;
    width: 100%;
  }
  .lamp-panel-row-1-block,
  .lamp-panel-row-2-block,
  .lamp-panel-row-3-block {
    max-width: 1400px;
  }

  .lamp-panel-row-3-block {
    margin-top: 18%;
  }
  .lamp-panel-block-1-img,
  .lamp-panel-block-2-img,
  .lamp-panel-block-3-img,
  .lamp-panel-block-4-img,
  .lamp-panel-block-5-img,
  .lamp-panel-block-6-img,
  .lamp-panel-block-7-img,
  .lamp-panel-block-8-img,
  .lamp-panel-block-9-img {
    max-width: 100%;
    width: 100%;
  }
  .lamp-panel-block-9 {
    max-width: 350px;
    max-height: 418px;
    height: 418px;
  }
}
</style>