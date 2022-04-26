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
          <div class="call-modal-img">
            <img
              class="call-modal-img-1"
              src="@/assets/CallModal/img-1.webp"
              alt="img-1"
            />
          </div>
          <div class="call-modal-content">
            <div class="call-modal-title">Оставьте заявку</div>
            <div class="call-modal-description">
              Мы вам перезвоним и проконсультируем по всем вопросам.
            </div>
            <div class="call-modal-mobile-title">Оставьте ваш номер</div>
            <div class="call-modal-mobile-description">
              Мы вам перезвоним и проконсультируем. По телефону вопросы решаются
              быстрее
            </div>
            <!-- <div > -->
              <form v-if="!isSuccess" ref="form" class="call-modal-active" @submit.prevent="sendEmail">
                <div class="call-modal-form">
                  <div class="call-modal-form-text">
                    <input
                      type="text"
                      class="call-modal-form-input"
                      placeholder="Ваш номер телефона"
                      name="message"
                    />
                  </div>
                </div>
                <div class="call-modal-btn">
                  <button type="submit" class="modal-btn-1">Отправить</button>
                </div>
              </form>
              <div v-if="isSuccess" class="success-email">
                Спасибо! Мы скоро Вам перезвоним
            </div>
          </div>
        </template>
      </vue-modaltor>
    </div>
  </main>
</template>


<script>
import emailjs from "emailjs-com";
export default {
  name: "Modal",
  props: ["isShow"],
  data() {
    return {
      open: false,
      isSuccess: false,
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
    sendEmail() {
        emailjs.sendForm(
          "service_p8m20xr",
          "template_ghqcdx5",
          this.$refs.form,
          "MXeizNJv0hfdlvjve"
        ).then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        this.isSuccess = true
      // Reset form field

    },
  },
};
</script>

<style>
.call-modal-mobile-title,
.call-modal-mobile-description {
  display: none;
}
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
.call-modal-img {
  /* max-width: 460px;
  width: 460px;
  max-height: 250px; */
}
.call-modal-img-1 {
  display: block;
  width: 100%;
  height: 100%;
}
.modaltor__panel {
  max-width: 460px;
  width: 460px;
}
.modaltor__content {
  width: 100%;
  height: 100%;
  /* max-width: 460px;
  width: 460px;
  height: 500px;
  max-height: 500px; */
}

.call-modal-content {
  margin: 7%;
}

.call-modal-title {
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
  font-size: 36px;
  line-height: 1.23;
}

.call-modal-description {
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
  font-size: 16px;
  line-height: 1.55;
  margin-top: 15px;
  margin-bottom: 24px;
}

.call-modal-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  color: #000000;
  border: 0px solid #000000;
  border-radius: 5px;
  background-color: #e6e6e6;
}
.call-modal-form-input {
  width: 80%;
  margin-left: 5%;
  background-color: #e6e6e6;
  color: #000000;
  border: 0px solid #000000;
  font-size: 16px;
  line-height: 1.33;
  border: none;
}
.call-modal-active {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 58px;
}
.modal-btn-1 {
  color: #ffffff;
  border: 1px solid #ff5e00;
  background-color: #ff5e00;
  border-radius: 5px;
  border-radius: 5px;
  border-radius: 5px;
  max-height: 58px;
  height: 58px;
  text-align: center;
  font-size: 16px;

  width: 143px;
  font-weight: 700;
}
.success-email {
  font-family: 'Open Sans',Arial,sans-serif;
background: #62C584;
padding: 20px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
}
@media screen and (max-width: 980px) {

  .modal-btn-1 {
    background-color: #007550;
    border: 1px solid #007550;
  }
}
@media screen and (max-width: 560px) {
    .call-modal-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 7% 0 7% 0;
  }
  .call-modal-title,
  .call-modal-description {
    display: none;
  }
  .call-modal-mobile-title,
  .call-modal-mobile-description {
    display: block;
    text-align: center;
  }
  .call-modal-mobile-title {
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 600;
    color: #000;
    font-size: 28px;
    line-height: 1.23;
  }
  .call-modal-mobile-description {
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    font-size: 12px;
    line-height: 1.55;
    margin-top: 15px;
    margin-bottom: 24px;
  }
  .call-modal-active {
    flex-direction: column;
    justify-content: center;
  }
  .call-modal-active {
    height: 100%;
    width: 100%;
    margin-left: 10%;
    padding-right: 10%;
  }
  .call-modal-form {
    width: 100%;
    display: flex;
    margin-bottom: 4%;
    height: 50px;
  }
  .call-modal-btn {
    width: 100%;
    display: flex;
  }
  .modal-btn-1 {
    width: 100%;
  }
}
</style>