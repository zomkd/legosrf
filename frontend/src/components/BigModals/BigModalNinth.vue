<template>
  <main class="big-modal-9">
    <div class="modal-9">
      <header class="modal-9-header">
        <div class="close-modal-9-btn" v-on:click="hideModal">
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
        <div class="modal-9-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-9-content">
        <div class="modal-9-content-conteiner">
          <div class="modal-9-content-title">Матовое полотно MSD</div>
          <div class="modal-9-content-img-1">
            <img
              class="modal-9-1-img"
              src="@/assets/BigModal/modal-9/1.png"
              alt="image-1"
            />
          </div>
          <div class="modal-9-content-description">
            <div class="modal-9-content-description-p1">
              <strong class="big-modal-strong"
                >Матовая пленка "MATTE" MSD</strong
              >
              имеет плотную матовую текстуру. Натяжные потолки, изготовленные и
              нее, не будут отражать свет.<br />
              Визуально она напоминает идеально ровную оштукатуренную
              поверхность
            </div>
          </div>
          <div class="modal-9-content-img-2">
            <img
              class="modal-9-2-img"
              src="@/assets/BigModal/modal-9/2.png"
              alt="image-1"
            />
          </div>
          <div class="modal-9-content-description-p2">
            Визуально она напоминает
            <strong class="big-modal-strong"
              >идеально ровную оштукатуренную поверхность</strong
            ><br />
            Матовая пленка белого цвета придется по вкусу любителям
            классического стиля в интерьере.
            <br />
            Цветные же модели подчеркнут современный дизайн дома.
            <br />
            В нашем каталоге вы можете заказать пленку разных цветов.
          </div>
          <div class="size">
            <strong class="big-modal-strong">Размеры пленки:</strong>
            <div>
              140 см, 200 см, 240 см, 270 см, 320 см, 360 см, 400 см, 450 см,
              500 см
            </div>
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
  name: "BigModalNinth",
  props: ["isShow"],
  data() {
    return {
      open: false,
    };
  },
  created() {
    this.open = this.isShow;
    const body = document.querySelector("body");
    const lampPanel = document.getElementsByClassName("lamp-panel-wrapper")[0]
    body.style.overflow = "hidden";
    lampPanel.style.display = "none";
  },
  methods: {
    hideModal() {
      this.open != this.open;
      const body = document.querySelector("body");
      const lampPanel = document.getElementsByClassName("lamp-panel-wrapper")[0]
      lampPanel.style.display = "flex";
      body.style.overflow = "auto";
      this.$emit("hideModal", false);
    },
  },
};
</script>

<style>
.modal-9 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-9-header {
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
.close-modal-9-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-9-header-text {
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
.modal-9-content {
  padding: 95px 0;
  /* position: relative; */
  max-width: 100%;
  /* width: 760px; */
  /* max-height: 1368px; */
  display: flex;
  /* flex-direction: column; */
  margin-right: 5%;
  margin-left: 5%;
  align-items: center;
  justify-content: center;
}
.modal-9-content-conteiner {
  max-width: 760px;
}
.modal-9-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

.modal-9-content-description,
.size {
  margin-top: 3%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}

.modal-9-content-description-p1 {
  margin-bottom: 2%;
}
.big-modal-strong {
  font-weight: 700;
}

.modal-9-content-img-2,
.modal-9-content-img-3 {
  max-width: 760px;
  max-height: 506px;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.modal-9-1-img,
.modal-9-2-img,
.modal-9-3-img {
  display: block;
  width: 100%;
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
.modal-9-content-description-p2 {
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}
@media screen and (max-width: 540px) {
  .modal-9-header-text {
    font-size: 12px;
  }
  .modal-9-content-title {
    font-size: 24px;

  }
  .modal-9-content-subtitle {
    font-size: 18px;
  }
  .size,.modal-9-content-description,.modal-9-content-description-p2,.modal-9-content-description-p1 {
    font-size: 16px;
    font-weight: 300;
line-height: 1.45;
font-family: "Open Sans", Arial, sans-serif;
  }
}
</style>