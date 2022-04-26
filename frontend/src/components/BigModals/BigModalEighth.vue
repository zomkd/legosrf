<template>
  <main class="big-modal-8">
    <div class="modal-8">
      <header class="modal-8-header">
        <div class="close-modal-8-btn" v-on:click="hideModal">
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
        <div class="modal-8-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-8-content">
        <div class="modal-8-content-conteiner">
          <div class="modal-8-content-title">Сатиновое полотно MSD</div>
          <div class="modal-8-content-img-1">
            <img
              class="modal-8-1-img"
              src="@/assets/BigModal/modal-8/1.png"
              alt="image-1"
            />
          </div>
          <div class="modal-8-content-description">
            <div class="modal-8-content-description-p1">
              <strong class="big-modal-strong"
                >Такой материал имитирует структуру и свойства сатиновой
                (шелковой) ткани.</strong
              >
            </div>
            <br />
            Почему натяжные конструкции из сатиновой пленки
            <strong class="big-modal-strong">"SATIN" MSD</strong> так популярны?
            Ответ кроется в характеристиках материала:
            <div class="ol-1">
              1. Красивая шелковая структура, которая эффектно смотрится как в
              однотонном исполнении, так и после печати рисунка.
            </div>
            <div class="ol-2">
              2. Нежный блеск, достигаемый за счет необычного сочетания
              матовости и легкого блеска.
            </div>
            <div class="ol-3">
              3. Шелковистая текстура, позволяющая воплотить оригинальные
              дизайнерские задумки.
            </div>
            <br />
            Сатиновая пленка, которую можно купить у нас, на протяжении
            десятилетий будет сохранять форму и эстетичность.
          </div>
          <div class="modal-8-content-img-2">
            <img
              class="modal-8-2-img"
              src="@/assets/BigModal/modal-8/2.png"
              alt="image-1"
            />
          </div>
          <div class="size">
          <strong class="big-modal-strong">Размеры пленки:</strong>
          <div>140 см, 200 см, 240 см, 270 см, 320 см, 360 см, 400 см, 450 см, 500 см</div>
          </div>
          <div class="end-icon">
            <img
              class="end-icon-1-img"
              src="@/assets/BigModal/1.webp"
              alt="image-1"
            />
            <div class="end-text">LumFer</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "BigModalEighth",
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
.modal-8 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-8-header {
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
.close-modal-8-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-8-header-text {
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
.modal-8-content {
  padding: 95px 0;
  /* position: relative; */
  max-width: 100%;
  /* width: 760px; */
  /* max-height: 1368px; */
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
}
.modal-8-content-conteiner {
  max-width: 760px;
}
.modal-8-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

.modal-8-content-description,
.size {
  margin-top: 3%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}

.modal-8-content-description-p1 {
  margin-bottom: 2%;
}
.big-modal-strong {
  font-weight: 700;
}

.modal-8-content-img-2,
.modal-8-content-img-3 {
  max-width: 760px;
  max-height: 506px;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.modal-8-1-img,
.modal-8-2-img,
.modal-8-3-img {
  width: 100%;
  display: block;
  height: 100%;
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
  .modal-8-header-text {
    font-size: 12px;
  }
  .modal-8-content-title {
    font-size: 24px;

  }
  .modal-8-content-subtitle {
    font-size: 18px;
  }
  .modal-8-content-description,.size {
    font-size: 16px;
    font-weight: 300;
line-height: 1.45;
font-family: "Open Sans", Arial, sans-serif;
  }
}
</style>