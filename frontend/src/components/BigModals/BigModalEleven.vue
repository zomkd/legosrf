<template>
  <main class="big-modal-11">
    <div class="modal-11">
      <header class="modal-11-header">
        <div class="close-modal-11-btn" v-on:click="hideModal">
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L10 10L1 19" stroke="#000000" stroke-width="2"></path>
          </svg>
        </div>
        <div class="modal-11-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-11-content">
        <div class="modal-11-content-conteiner">
          <div class="modal-11-content-title">
            Как определить, что фирма устанавливает MSD?
          </div>
          <div class="modal-11-content-img-1">
            <img
              class="modal-11-1-img"
              src="@/assets/BigModal/modal-11/1.jpg"
              alt="image-1"
            />
          </div>
          <div class="modal-11-content-description">
            С апреля 2017 завод начал печатать маркировки на пленке.<br /><br />В
            апреле завод приобрел на тестирование лазерный принтер для нанесения
            маркировки на пленку. Тесты показали, что лазерное нанесение
            логотипа не повреждает полотно и идеально подходит для маркировки.
            Первыми маркировались пленки Классик МСД.<br />Поскольку лазер был
            пока приобретен один, а работало на полную мощность все шесть
            производственных линеек, из шести рулонов маркированным получался
            только один.<br />В июне завод приобрел еще 2 принтера. Таким
            образом, маркированными выходили три из шести рулонов. Печатать
            логотип стали на всех линейках пленки ПВХ MSD.<br />При закупке
            полотна с завода никто из покупателей не может знать, какой рулон
            ему достанется - маркированный или нет.<br /><br />Вы можете
            попробовать узнать у фирмы установщика потолков, есть ли в наличии
            пленка с маркировкой.<br />Отсутствие маркировки на пленке еще не
            доказывает ее поддельность.
          </div>

          <div class="end-icon">
            <img
              class="end-icon-1-img"
              src="@/assets/BigModal/1.webp"
              alt="image-1"
            />
            <div class="end-text">Gregory Willson</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "BigModalEleven",
  props: ["isShow"],
  data() {
    return {
      open: false,
    };
  },
  created() {
    this.open = this.isShow;
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  },
  methods: {
    hideModal() {
      this.open != this.open;
      const body = document.querySelector("body");
      body.style.overflow = "auto";
      this.$emit("hideModal", false);
    },
  },
};
</script>

<style>
.modal-11 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-11-header {
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}
.close-modal-11-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-11-header-text {
  display: inline-block;
  opacity: 0.8;
  font-weight: 600;
  color: #000000;
  line-height: 1.3;
  font-size: 14px;
  max-width: 80%;
  cursor: pointer;
}

/* content */
.modal-11-content {
  padding: 95px 0;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  margin-left: 5%;
}
.modal-11-content-conteiner {
  max-width: 760px;
}
.modal-11-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
  margin-bottom: 5%;
}

.modal-11-content-description,
.size {
  margin-top: 3%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}
.modal-11-content-img-1 {
  max-width: 760px;
  max-height: 426px;
  width: 100%;
  height: 100%;
}

.modal-11-1-img {
  display: block;
  width: 100%;
  height: 100%;
}

.big-modal-strong {
  font-weight: 700;
}

.end-icon {
  display: flex;
  margin-top: 5%;
  align-content: center;
}
.end-text {
  margin-left: 2%;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
  font-size: 14px;
  line-height: 1.55;
}
@media screen and (max-width: 540px) {
  .modal-11-header-text {
    font-size: 12px;
  }
  .modal-11-content-title {
    font-size: 24px;

  }
  .modal-11-content-subtitle {
    font-size: 18px;
  }
  .modal-11-content-description {
    font-size: 16px;
    font-weight: 300;
line-height: 1.45;
font-family: "Open Sans", Arial, sans-serif;
  }
}
</style>