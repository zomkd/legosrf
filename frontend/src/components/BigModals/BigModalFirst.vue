<template>
  <main class="big-modal-1">
    <div class="modal-1">
      <header class="modal-1-header">
        <div class="close-modal-1-btn" v-on:click="hideModal">
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
        <div class="modal-1-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-1-content">
        <div class="modal-1-content-conteiner">
          <div class="modal-1-content-title">
            Все про цилиндрические светильники "споты" за 50 секунд.
          </div>
          <div class="modal-1-content-video">
            <iframe
              src="https://www.youtube.com/watch?v=cSsrqCHmK-0"
              allow="fullscreen"
              class="youtube-video"
              frameborder="0"
            ></iframe>
          </div>
          <div class="modal-1-content-description">
            Одиночные цилиндрические споты это компактные, узконаправленные
            источники света. <br />Слово
            <strong class="big-modal-strong">спот</strong> переводится как
            «пятно»<br /><br /><br /><strong class="big-modal-strong"
              >Споты</strong
            >
            обеспечивают направленное освещение, образуя в нужном месте пятно
            света. <br />Это очень удобно при расстановке акцентов в
            интерьере.<br />При помощи спотов помещения хорошо зонировать или
            создавать акцентный свет в области рабочих зон, не затрагивая
            остальное пространство. <br /><br />Благодаря своей лаконичности они
            необычайно востребованы у дизайнеров интерьера. <br /><br />Их можно
            использовать как в сухих так и во влажных помещениях, например в
            ванной. <br /><br /><strong class="big-modal-strong">Споты</strong>
            уместно устанавливать: <br />на кухне, над рабочей зоной; <br />в
            обстановке кабинета; <br />в гостиной; <br />в прихожей.&nbsp;
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
  name: "BigModalFirst",
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
.modal-1 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-1-header {
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
.close-modal-1-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-1-header-text {
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
.modal-1-content {
  padding: 95px 0;
  /* position: relative; */
  max-width: 100%;
  /* width: 760px; */
  /* max-height: 1368px; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin-left: 5%;
margin-right: 5%;
}
.modal-1-content-conteiner {
  max-width: 760px;
}
.modal-1-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}
.modal-1-content-video {
  margin-top: 5%;
  max-height: 428px;
  height: 428px;
}
.modal-1-content-description {
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