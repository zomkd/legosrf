<template>
  <main class="big-modal-6">
    <div class="modal-6">
      <header class="modal-6-header">
        <div class="close-modal-6-btn" v-on:click="hideModal">
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
        <div class="modal-6-header-text">
          НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ
        </div>
      </header>
      <div class="modal-6-content">
        <div class="modal-6-content-conteiner">
          <div class="modal-6-content-title">НИША LUMFER</div>
          <div class="modal-6-content-img-1">
            <img
              class="modal-6-1-img"
              src="@/assets/BigModal/modal-6/1.png"
              alt="image-1"
            />
          </div>
          <div class="modal-6-content-subtitle">
            <h3>НОВЫЙ УРОВЕНЬ В ДИЗАЙНЕ НАТЯЖНЫХ ПОТОЛКОВ</h3>
          </div>
          <div class="modal-6-content-description">
            <div class="modal-6-content-description-p1">
              <p>
                <strong class="big-modal-strong">LumFer</strong> – принципиально
                новый подход в световом дизайне интерьера. Немецкие инженеры и
                дизайнеры разработали интегрированные в натяжной потолок системы
                освещения, отвечающие самым высоким европейским стандартам и
                последним трендам дизайна.
                <br />
              </p>
            </div>
            <br />
            НИША LUMFER
            <br />
            Белая и черная.
            <br />
            <br />
            Компактные интегрированные в натяжной потолок ниши для фиксации в
            них светильников открывают совершенно новые возможности не только в
            организации интерьерного освещения, но и в световом зонировании
            пространства.
          </div>
          <div class="modal-6-content-img-2">
            <img
              class="modal-6-2-img"
              src="@/assets/BigModal/modal-6/2.jpg"
              alt="image-1"
            />
          </div>
          <div class="modal-6-content-img-3">
            <img
              class="modal-6-3-img"
              src="@/assets/BigModal/modal-6/3.jpg"
              alt="image-1"
            />
          </div>
          <div class="modal-6-content-img-4">
            <img
              class="modal-6-4-img"
              src="@/assets/BigModal/modal-6/4.jpg"
              alt="image-1"
            />
          </div>
          <div class="modal-6-content-img-5">
            <img
              class="modal-6-5-img"
              src="@/assets/BigModal/modal-6/5.jpg"
              alt="image-1"
            />
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
  name: "BigModalSixth",
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
.modal-6 {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
.modal-6-header {
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
.close-modal-6-btn {
  position: absolute;
  left: 20px;
  transform: rotate(180deg);
  right: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.modal-6-header-text {
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
.modal-6-content {
  padding: 95px 0;
  /* position: relative; */
  max-width: 100%;
   margin-left: 5%;
  margin-right: 5%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
}
.modal-6-content-conteiner {
  max-width: 760px;
}
.modal-6-content-title {
  display: flex;
  align-items: center;
  font-size: 36px;
  line-height: 1.23;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}
.modal-6-content-img-1 {
  margin-top: 5%;
  /* max-height: 428px;
  height: 428px; */
}

.modal-6-content-subtitle {
  padding-top: 8%;
  text-align: center;
  margin: 0;
  font-size: 24px;
  line-height: 1.3;
  font-family: "Open Sans", Arial, sans-serif;
  color: #000;
}
.modal-6-content-description {
  margin-top: 3%;
  font-size: 20px;
  line-height: 1.55;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}

.modal-6-content-description-p1 {
  text-align: center;
  margin-bottom: 2%;
}
.big-modal-strong {
  font-weight: 700;
}

.modal-6-content-img-2,
.modal-6-content-img-3,
.modal-6-content-img-4,
.modal-6-content-img-5 {
  max-width: 760px;
  max-height: 506px;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.modal-6-1-img,
.modal-6-2-img,
.modal-6-3-img,
.modal-6-4-img,
.modal-6-5-img {
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
@media screen and (max-width: 540px) {
  .modal-6-header-text {
    font-size: 12px;
  }
  .modal-6-content-title {
    font-size: 24px;

  }
  .modal-6-content-subtitle {
    font-size: 18px;
  }
  .modal-6-content-description,.modal-6-content-description-p1 {
    font-size: 16px;
    font-weight: 300;
line-height: 1.45;
font-family: "Open Sans", Arial, sans-serif;
  }
}
</style>