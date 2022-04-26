<template>
  <main class="big-modal-2">
    <div class="modal-2">
      <header class="modal-2-header">
        <div class="close-modal-2-btn" v-on:click="hideModal">
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
        <div class="modal-2-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-2-content">
        <div class="modal-2-content-conteiner">
          <div class="modal-2-content-title">ЧТО ТАКОЕ БЕСЩЕЛЕВОЙ ПОТОЛОК?</div>
          <div class="modal-2-content-video">
            <iframe
              src="https://www.youtube.com/watch?v=em3AMspqAfs&feature=emb_logo"
              allow="fullscreen"
              class="youtube-video"
              frameborder="0"
            ></iframe>
          </div>
          <div class="modal-2-content-description">
            Классические натяжные потолки устанавливаются с обязательной
            установкой маскировочной ленты (вставки) по периметру потолка.
            <br />БЕСЩЕЛЕВАЯ система ШТОК позволяет устанавливать потолок без
            этого элемента. <br /> Главным отличием системы ШТОК является
            запатентованная форма крепления. Которая позволяет создавать
            идеально прямой стык потолка к стене под углом 90% <br /><br />Эта
            система конечно требует идеально ровных стен. Надо иметь это ввиду.
            <br />Обычная система крепления вам простит небольшие искривления
            стен. В данном же случае к качеству стен самые высочайшие
            требования. Будут видны любые недочёты. <br /><br />Итоговый вид
            бесщелевого потолка превосходен. Он безусловно стоит затраченных
            усилий и является находкой для дизайнеров интерьера
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
  name: "BigModalSecond",
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
.modal-2 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-2-header {
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
.close-modal-2-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-2-header-text {
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
.modal-2-content {
  padding: 95px 0;
 
  max-width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
}
.modal-2-content-conteiner {
  max-width: 760px;
}
.modal-2-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}
.modal-2-content-video {
  margin-top: 5%;
  max-height: 428px;
  height: 428px;
}
.modal-2-content-description {
  margin-top: 3%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
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
</style>