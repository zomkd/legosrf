<template>
  <main class="main-panel-3">
    <section class="stretch-ceiling">
      <div class="stretch-ceiling-title"><h3>МОНТАЖ НАТЯЖНОГО ПОТОЛКА</h3></div>
      <div class="stretch-ceiling-video">
        <div class="video-1">
          <iframe
            src="https://www.youtube.com/embed/Qq1gMNYEvmA?autoplay=0&amp;loop=0&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=black&amp;iv_load_policy=3&amp;theme=dark&amp;wmode=transparent&amp;origin=https://www.xn--c1adrop.xn--p1ai&amp;mute=1"
            allow="fullscreen"
            class="youtube-video"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div class="stretch-ceiling-mobile-text">
        <strong class="big-modal-strong"
          >Мы устанавливаем более 2500 кв метров потолка ежемесячно.</strong
        >
        <br />
        Выполняем сложные и нестандартные объекты в жилых и коммерческих
        помещениях, торговых площадках и помещениях с большой высотой.
        <br />
        <br />
        <strong class="big-modal-strong"
          >У нас работают собственные профессиональные бригады и специалисты по
          замеру с опытом монтажа более 5 лет.</strong
        >
      </div>
      <section class="stretch-ceiling-content-1">
        <div class="stretch-ceiling-content-block-1" v-on:click="CallModalShow">
          <div class="stretch-ceiling-block-1">
            <img
              class="stretch-ceiling-block-1-img"
              src="@/assets/StretchCeiling/contentBlock1/img-1.webp"
              alt="image-1"
            />
          </div>
        </div>
      </section>
      
      <section class="stretch-ceiling-content-2">
        <div class="wrapper-stretch-ceiling-content">
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-1"
              src="@/assets/StretchCeiling/contentBlock2/img-1.webp"
              alt="image-1"
            />
          </div>
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-2"
              src="@/assets/StretchCeiling/contentBlock2/img-2.webp"
              alt="image-2"
            />
          </div>
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-3"
              src="@/assets/StretchCeiling/contentBlock2/img-3.webp"
              alt="image-3"
            />
          </div>
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-4"
              src="@/assets/StretchCeiling/contentBlock2/img-4.webp"
              alt="image-4"
            />
          </div>
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-5"
              src="@/assets/StretchCeiling/contentBlock2/img-5.webp"
              alt="image-5"
            />
          </div>
          <div class="stretch-ceiling-block-2-img">
            <img
              class="stretch-ceiling-block-2-img-6"
              src="@/assets/StretchCeiling/contentBlock2/img-6.webp"
              alt="image-6"
            />
          </div>
        </div>
      </section>
      <section class="stretch-ceiling-video-2">
        <div class="video-1">
          <iframe
            src="https://www.youtube.com/embed/JDh64DHaHKY?autoplay=0&amp;loop=0&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=black&amp;iv_load_policy=3&amp;theme=dark&amp;wmode=transparent&amp;origin=https://www.xn--c1adrop.xn--p1ai"
            allow="fullscreen"
            class="youtube-video"
            frameborder="0"
          ></iframe>
        </div>
      </section>
      <div class="mobile-stretchCeiling-btn" v-on:click="CallModalShow">
        <a class="mobile-stretchCeiling-btn-text" 
          >Оставить заявку</a
        >
        <svg
          class="mobile-guarantee-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          height="40%"
        >
          <g class="nc-icon-wrapper" fill="#ffffff">
            <polygon
              fill="#ffffff"
              points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
            ></polygon>
          </g>
        </svg>
      </div>
    </section>
     <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "StretchCeiling",
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
.main-panel-2 {
  background-color: rgb(255, 255, 255);
}
/* video-1 */
.stretch-ceiling {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.stretch-ceiling-title {
  color: #005746;
  font-size: 28px;
  line-height: 1.17;
  font-weight: 400;
  margin: 0;
  padding-left: 28%;
  padding-top: 15px;
  padding-bottom: 15px;
}
.stretch-ceiling-video,
.stretch-ceiling-video-2 {
  display: flex;
  flex-direction: row;
  margin-right: 2%;
  margin-left: 2%;
  justify-content: center;
}
.video-1 {
  max-width: 1160px;
  width: 1160px;
  height: 652px;
  max-height: 652px;
  margin-bottom: 1%;
}
.youtube-video {
  display: block;
  width: 100%;
  height: 100%;
}
/* block 1*/
.stretch-ceiling-content-block-1 {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
}
.stretch-ceiling-block-1 {
  max-width: 1160px;
  width: 1160px;
  /* height: 652px;
  max-height: 652px; */
  margin-right: 2%;
  margin-left: 2%;
}
.stretch-ceiling-block-1-img {
  display: block;
  width: 100%;
  height: 100%;
}
/* block 2 */
.stretch-ceiling-content-2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 238, 238);

}

.wrapper-stretch-ceiling-content {
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
  margin: 5% 2% 5% 2%;
}

.stretch-ceiling-content-block-row-2 {
  margin-bottom: 3%;
}
.stretch-ceiling-block-2-img {
  max-width: 383px;
  max-height: 280px;
}
.stretch-ceiling-block-2-img-1,
.stretch-ceiling-block-2-img-2,
.stretch-ceiling-block-2-img-3,
.stretch-ceiling-block-2-img-4,
.stretch-ceiling-block-2-img-5,
.stretch-ceiling-block-2-img-6 {
  display: block;
  width: 100%;
  height: 100%;
}
/* mobile */
.stretch-ceiling-mobile-text,
.mobile-stretchCeiling-btn {
  display: none;
}
@media screen and (max-width: 980px) {
  .stretch-ceiling-video,
  .stretch-ceiling-block-1 {
    margin-left: 0%;
    margin-right: 0%;
    max-width: 980px;
    width: 100%;
  }
  .stretch-ceiling-video-2,
  .stretch-ceiling-content-2 {
    display: none;
  }
  .stretch-ceiling {
    align-items: center;
  }
  .stretch-ceiling-title {
    font-size: 20px;
    padding-top: 4px;
    padding-bottom: 20px;
    padding-left: 0;
    margin-left: 5%;
  }
  .stretch-ceiling-mobile-text {
    font-size: 14px;
    color: #666666;
    font-weight: 300;
    line-height: 1.55;
    margin-bottom: 4%;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 4%;
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 615px;
  }
  .mobile-stretchCeiling-btn {
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #008057;
    padding: 30px 60px;
    font-size: 26px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    cursor: pointer;
    font-weight: 700;
    border-width: 1px;
    border-radius: 5px;
    margin-top: 3%;
  }
  .mobile-stretchCeiling-btn-text {
    text-decoration: none;
    color: #ffffff;
  }
  .mobile-stretchCeiling-btn:after {
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
  .video-1,
  .lamp-video,
  .comments-video-1,
  .comments-video-2 {
    width: 100%;
    height: 60vh;
  }
  @media screen and (max-width: 560px) {
    .mobile-stretchCeiling-btn {
      font-size: 16px;
      height: 70px;
    }
    .video-1,
    .lamp-video,
    .comments-video-1,
    .comments-video-2 {
      width: 100%;
      height: 35vh;
    }
    .youtube-video {
      height: 35vh;
    }
  }
}
@media screen and (max-width: 440px) {
  .video-1,
  .lamp-video,
  .comments-video-1,
  .comments-video-2 {
    width: 100%;
    height: 25vh;
  }
  .youtube-video {
    height: 25vh;
  }
}
</style>

