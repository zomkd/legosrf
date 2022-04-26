<template>
  <main class="ceiling-legos">
    <div class="ceiling-legos-wrapper">
    <div class="ceiling-legos-title">
      <h1 class="ceiling-legos-text">
        Потолки ЛЕГОС в интерьере (Чебоксары)
      </h1>
    </div>
    <div class="ceiling-legos-block-1">
      <div class="main-ceiling-legos-photo">
        <img
          class="main-ceiling-legos-img"
          :src="images[currentSrc]"
          alt="image-1"
        />
      </div>
      <div class="ceiling-legos-photos">
        <div class="ceiling-legos-photo-1">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/1.jpeg"
            alt="image-1"
            @click="currentSrc = 0"
          />
        </div>
        <div class="ceiling-legos-photo-2">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/2.jpg"
            @click="currentSrc = 1"
            alt="image-1"
          />
        </div>
        <div class="ceiling-legos-photo-3">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/3.jpeg"
            alt="image-1"
            @click="currentSrc = 2"
          />
        </div>
        <div class="ceiling-legos-photo-4">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/4.jpg"
            alt="image-1"
            @click="currentSrc = 3"
          />
        </div>
        <div class="ceiling-legos-photo-5">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/5.jpg"
            alt="image-1"
            @click="currentSrc = 4"
          />
        </div>
        <div class="ceiling-legos-photo-6">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/6.jpg"
            alt="image-1"
            @click="currentSrc = 5"
          />
        </div>
        <div class="ceiling-legos-photo-7">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/7.jpeg"
            alt="image-1"
            @click="currentSrc = 6"
          />
        </div>
        <div class="ceiling-legos-photo-8">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/8.jpg"
            alt="image-1"
            @click="currentSrc = 7"
          />
        </div>
      </div>
    </div>

    <div class="ceiling-legos-block-2">
      <div class="main-ceiling-legos-photo">
        <img
          class="main-ceiling-legos-img"
          :src="images[currentSrcSecond]"
          alt="image-1"
        />
      </div>
      <div class="ceiling-legos-photos">
        <div class="ceiling-legos-photo-1">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/7.jpeg"
            alt="image-1"
            @click="currentSrcSecond = 6"
          />
        </div>
        <div class="ceiling-legos-photo-2">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/3.jpeg"
            @click="currentSrcSecond = 2"
            alt="image-1"
          />
        </div>
        <div class="ceiling-legos-photo-3">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/2.jpg"
            alt="image-1"
            @click="currentSrcSecond = 1"
          />
        </div>
        <div class="ceiling-legos-photo-4">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/4.jpg"
            alt="image-1"
            @click="currentSrcSecond = 3"
          />
        </div>
        <div class="ceiling-legos-photo-5">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/5.jpg"
            alt="image-1"
            @click="currentSrcSecond = 4"
          />
        </div>
        <div class="ceiling-legos-photo-6">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/6.jpg"
            alt="image-1"
            @click="currentSrcSecond = 5"
          />
        </div>
        <div class="ceiling-legos-photo-7">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/8.jpg"
            alt="image-1"
            @click="currentSrcSecond = 7"
          />
        </div>
        <div class="ceiling-legos-photo-8">
          <img
            class="ceiling-legos-img"
            src="@/assets/Mobile/CeilingLegos/1.jpeg"
            alt="image-1"
            @click="currentSrcSecond = 0"
          />
        </div>
      </div>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "СeilingLegos",
  data() {
    return {
      images: [
        require("@/assets/Mobile/CeilingLegos/1.jpeg"),

        require("@/assets/Mobile/CeilingLegos/2.jpg"),

        require("@/assets/Mobile/CeilingLegos/3.jpeg"),
        require("@/assets/Mobile/CeilingLegos/4.jpg"),
        require("@/assets/Mobile/CeilingLegos/5.jpg"),
        require("@/assets/Mobile/CeilingLegos/6.jpg"),
        require("@/assets/Mobile/CeilingLegos/7.jpeg"),
        require("@/assets/Mobile/CeilingLegos/8.jpg"),
      ],
      currentSrc: 0,
      currentSrcSecond: 6,
    };
  },
};
</script>

<style>
.ceiling-legos {
  display:none;
}
@media screen and (max-width: 980px) {
  .ceiling-legos {
    display: block;
  }
  .ceiling-legos-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 3%;
    margin-left: 3%;
    margin-bottom: 5%;
    margin-top: 5%;
  }
  .ceiling-legos-title {
    margin-bottom: 3%;
  }
  .ceiling-legos-text {
    font-family: "Arial";
    font-size: 24px;
    line-height: 1.17;
    font-weight: 600;
    color: #000;
  }
  .ceiling-legos-block-1,.ceiling-legos-block-2 {
    display: flex;
    flex-direction: column;
    margin-bottom: 8%;
  }
  .main-ceiling-legos-photo {
    max-width: 600px;
max-height: 450px;
  }
  .main-ceiling-legos-img {
    width: 100%;
height: 100%;
  }
  .ceiling-legos-photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .ceiling-legos-photo-1,
  .ceiling-legos-photo-2,
  .ceiling-legos-photo-3,
  .ceiling-legos-photo-4,
  .ceiling-legos-photo-5,
  .ceiling-legos-photo-6,
  .ceiling-legos-photo-7,
  .ceiling-legos-photo-8 {
    max-width: 59px;
    max-height: 50px;
    height: 50px;
    width: 100%;
    margin-right: 5px;
    margin-top: 5px;
    cursor: pointer;
    transition: opacity ease-in-out .5s;
  }
  .ceiling-legos-img:hover {
    background-color:oldlace;
    opacity: 0.3;
  }
  .ceiling-legos-img {
    width: 100%;
    height: 100%;
  }
}
</style>