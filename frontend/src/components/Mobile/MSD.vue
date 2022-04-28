<template>
  <main class="MSD">
    <div class="msd-title">
      <h3 class="msd-title-text">РАБОТАЕМ ИСКЛЮЧИТЕЛЬНО С МАТЕРИАЛОМ "MSD"</h3>
    </div>
    <div class="lamp-mobile-photo" v-on:click="CallModalShow">
        <img
              class="lamp-mobile-img"
              src="@/assets/Mobile/MSD/1.jpg"
              alt="image-1"
            />
    </div>
    <div class="lamp-mobile-content">
      <div class="msd-content">
        <strong class="big-modal-strong"> Мы работаем исключительно с продукцией завода MSD, на данный момент крупнейшего производителя и поставщика всех европейских рынков. </strong>
        <br>
        <br class="big-modal-strong">
        Данный завод поставляет продукцию в европу по заказу немецкой компании Pongs, что говорит о самых высоких стандартах качества выпускаемой продукции. 
        <strong class="big-modal-strong">MSD не содержит мела и фтолата. Безопасен для аллергиков.</strong>
      </div>
    </div>
    <a  href="tel:+78352355045" style="text-decoration:none; width:100%">
    <div class="mobile-guarantee-btn">
      <a class="mobile-guarantee-btn-text"
        >Позвонить 8 (8352) 35-50-45
        <svg
          class="mobile-guarantee-arrow"
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

    <div class="msd-title">
      <h3 class="msd-title-text">МАКСИМАЛЬНО СЖАТЫЕ СРОКИ</h3>
    </div>
    <div class="lamp-mobile-photo" v-on:click="CallModalShow">
        <img
              class="lamp-mobile-img"
              src="@/assets/Mobile/MSD/2.webp"
              alt="image-2"
            />
    </div>
    <div class="lamp-mobile-content">
      <div class="msd-content">
        <strong class="big-modal-strong">Мы стараемся завершить все монтажи за 1 день и не утомлять клиентов долгими ожиданиями.<br></strong>
        <br>
        Большая часть потолков устанавливается нашими специалистами за несколько часов с минимумом пыли и грязи.
        <br>
        Заказ оформляется в большинстве случаев прямо на дому. Вам не обязательно приезжать в офис. 
        <br>
        <strong class="big-modal-strong">Все расчеты и подписания документов можно произвести непосредственно на месте с нашими специалистами</strong>
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
  name: "MSD",
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
.MSD {
  display: none;
}

@media screen and (max-width: 980px) {
  .MSD {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .msd-title {
      color: #005746;
      font-size: 24px;
      font-family: 'Roboto',Arial,sans-serif;
font-weight: 600;
      line-height: 1.17;
      text-align: left;
      padding-left: 20px;
      padding-bottom: 14px;
padding-right: 20px;
  }
  .msd-content {
    color: #666666;
  }
  .lamp-mobile-content {
      margin-bottom: 5%;
  }

}
</style>