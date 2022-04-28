<template>
  <main class="mobile-guarantee">
    <div class="mobile-guarantee-img" v-on:click="CallModalShow">
      <img
        class="mobile-guarantee-icon"
        src="@/assets/Mobile/Guarantee/1.webp"
        alt="guarantee"
      />
    </div>
    <div class="mobile-guarantee-line">
      <div class="mobile-guarantee-line-wrapper">
        <hr class="guarantee-line" />
      </div>
      <div class="mobile-guarantee-line-arrow">
        <div class="mobile-guarantee-line-arrow-wrapper" field="title">
          »<br />
        </div>
      </div>
    </div>
    <a href="tel:+78352355045" style="text-decoration: none">
      <div class="mobile-guarantee-btn">
        <a class="mobile-guarantee-btn-text" href="tel:+78352355045"
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
    <div class="callModalShow" v-if="isShow">
      <Modal :isShow="isShow" @hideModal="hideModal"> </Modal>
    </div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Guarantee",
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
.mobile-guarantee {
  display: none;
}
@media screen and (max-width: 980px) {
  .mobile-guarantee-line {
    position: relative;
    height: 60px;
    margin-bottom: 5%;
  }
  .mobile-guarantee-line-arrow {
    text-align: center;
    width: 100%;
  }
  .mobile-guarantee-line-arrow-wrapper {
    text-align: center;
    font-family: "Georgia";
    background-color: #fff;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    overflow: hidden;
    white-space: nowrap;
    line-height: 60px;
    z-index: 2;
    position: relative;
    -webkit-border-radius: 50%;
    font-size: 60px;
  }
  .mobile-guarantee-line-wrapper {
    width: 100%;
    position: absolute;
  }
  .guarantee-line {
    height: 1px;
    background-color: #000;
    border: none;
    opacity: 0.2;
    text-align: center;
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    padding: 0;
    margin-top: 34px;
    margin-left: auto;
    margin-right: auto;
  }
  .mobile-guarantee {
    display: block;
  }
  .mobile-guarantee-img {
    max-width: 980px;
    width: 100%;
    cursor: pointer;
  }
  .mobile-guarantee-icon {
    width: 100%;
    height: 100%;
  }

  .guarantee-line {
    height: 1px;
    background-color: #000;
    border: none;
    opacity: 0.2;
  }
  .mobile-guarantee-btn {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #008057;
    padding: 30px 60px;
    font-size: 18px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    cursor: pointer;
    font-weight: 700;
    border-width: 1px;
    border-radius: 5px;
    margin-bottom: 3%;
  }
  .mobile-guarantee-btn:after {
    content: "";
    position: absolute;
    height: 350%;
    width: 200%;
    top: 0;
    left: -100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    z-index: 20;
    -webkit-animation-name: ripple;
    animation-name: ripple;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  .mobile-guarantee-btn:active:after {
    transform: scale(0, 0);
    opacity: 0.4;
    transition: 0s;
    animation-name: ripple;
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .mobile-guarantee-btn-text {
    font-size: 28px;
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-guarantee-arrow {
    width: 15px;
    height: 20px;
    display: block;
    margin-left: 3px;
  }
  @-webkit-keyframes ripple {
    20% {
      opacity: 0;
      -webkit-transform: scale(2.5);
      transform: scale(2.5);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(2.5);
      transform: scale(2.5);
    }
  }
  @keyframes ripple {
    20% {
      opacity: 0;
      -webkit-transform: scale(2.5);
      transform: scale(2.5);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(2.5);
      transform: scale(2.5);
    }
  }
  @media screen and (max-width: 560px) {
    .mobile-guarantee-btn {
      font-size: 16px;
      height: 70px;
    }
    .mobile-guarantee-btn-text {
      font-size: 16px;
    }
  }
}
</style>



