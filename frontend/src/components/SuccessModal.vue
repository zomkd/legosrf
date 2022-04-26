<template>
  <main>
    <div>
      <vue-modaltor
        :visible="open"
        @hideModal="hideModal"
        :bg-overlay="'rgba(0,0,0,.7)'"
        bg-panel="'#fff'"
      >
        <template #body>
          <div class="call-success-modal-content">
              <svg width="50" height="50" fill="#62C584">
                <path
                  d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"
                ></path>
                <path
                  d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"
                ></path>
              </svg>
            <div class="call-success-modal-description">
              Спасибо! Данные успешно отправлены.
            </div>
          </div>
        </template>
      </vue-modaltor>
    </div>
  </main>
</template>


<script>

export default {
  name: "SuccessModal",
  props: ["isShow"],
  data() {
    return {
      open: false,
    };
  },
  created() {
    this.open = this.isShow;
  },
  methods: {
    hideModal() {
      this.open != this.open;
      this.isSuccess = false;
      this.$emit("hideModal", false);
    },
  },
};
</script>

<style>
.modaltor__close {
  position: fixed;
  right: 20px;
  top: 20px;
  width: 23px;
  height: 23px;
  cursor: pointer;
  color: #fff;
  z-index: 999;
}
.modaltor__panel {
  max-width: 400px;
  width: 400px;
}
.modaltor__content {
  width: 100%;
  height: 100%;
}

.call-success-modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 260px;
    box-sizing: border-box;
border-radius: 5px;
}

.call-success-modal-description {
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
  font-size: 18px;
  line-height: 1.55;
  margin-top: 15px;
  margin-bottom: 24px;
}

@media screen and (max-width: 560px) {
  .call-success-modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    box-sizing: border-box;
border-radius: 5px;
  }
    .call-success-modal-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
    align-items: center;
    text-align: center;
    }
}
</style>