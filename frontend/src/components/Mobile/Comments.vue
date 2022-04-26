<template>
  <main class="comments">
    <div class="comments-photo">
      <img
        class="comments-img"
        src="@/assets/Mobile/Comments/1.webp"
        alt="image-2"
      />
      <div class="comments-img-text">ОТЗЫВЫ</div>
    </div>
    <div class="comments-videos">
      <div class="comments-video-1">
        <iframe
          src="//youtube.com/embed/wX0WQXI23JI?rel=0&fmt=18&html5=1&showinfo=0"
          allow="fullscreen"
          class="youtube-video"
          frameborder="0"
        ></iframe>
      </div>
      <div class="comments-video-2">
        <iframe
          src="//youtube.com/embed/YTpKGNQaQB4?rel=0&fmt=18&html5=1&showinfo=0"
          allow="fullscreen"
          class="youtube-video"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style>
.comments {
  display: none;
}

@media screen and (max-width: 980px) {
  .comments {
    display: flex;
    flex-direction: column;
    background-color: #ededed;
    padding-bottom: 3%;
  }

  .comments-img-text {
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .comments-photo {
          max-height: 200px;
    min-height: 180px;
    position: relative;
    margin-bottom: 5%;
  }
  .comments-img {
      width: 100%;
      height: 100%;
  }
  .comments-videos {
      display: flex;
      flex-direction: column;
    margin-right: 4%;
    margin-left: 5%;
  }
  .comments-video-1 {
      width: 100%;
      margin-bottom: 3%;
  }
}
</style>