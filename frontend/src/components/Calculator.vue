<template>
  <main class="calculator">
    <div class="calculator-title">
      <div class="calculator-title-block">
        Рассчитайте стоимость за 1 минуту
      </div>
    </div>
    <div class="calculator-block">
      <h1 class="calculator-title-mobile-block">
        Калькулятор натяжного потолка ЛЕГОС:
      </h1>
      <div class="calculator-1-2-steps">
        <div class="calculator-1-step">
          <div class="calculator-1-step-title">1. Укажите общую площадь</div>
          <div class="calculator-1-step-mobile-title">
            2. Укажите общую площадь
          </div>
          <div class="calculator-1-step-range">
            <vue-slider
              :min="min"
              v-model="value"
              :marks="marks"
              labelStyle="{background-color: #eee}"
            />
          </div>
        </div>
        <div class="calculator-2-step">
          <div class="calculator-2-step-title">2. Выберите тип помещения:</div>
          <div class="calculator-2-step-mobile-title">
            1. Расчет стоимости потолка, выберите тип помещения:
          </div>
          <div class="calculator-2-step-photos">
            <div class="calculator-2-step-photos-row-1">
              <div class="calculator-2-step-photos-1">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-1.webp"
                  alt="image-1"
                />
                <div class="calculator-2-step-photos-name">Зал</div>
              </div>

              <div class="calculator-2-step-photos-2">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-2.webp"
                  alt="image-2"
                />
                <div class="calculator-2-step-photos-name">Спальня</div>
              </div>
              <div class="calculator-2-step-photos-3">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-3.webp"
                  alt="image-3"
                />
                <div class="calculator-2-step-photos-name">Кухня</div>
              </div>
              <div class="calculator-2-step-photos-4">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-4.webp"
                  alt="image-4"
                />
                <div class="calculator-2-step-photos-name">Ванная и туалет</div>
              </div>
            </div>
            <div class="calculator-2-step-photos-row-2">
              <div class="calculator-mobile-2-step-photos-4">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-4.webp"
                  alt="image-4"
                />
                <div class="calculator-2-step-photos-name">Ванная и туалет</div>
              </div>
              <div class="calculator-2-step-photos-5">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-5.webp"
                  alt="image-5"
                />
                <div class="calculator-2-step-photos-name">Прихожая</div>
              </div>
              <div class="calculator-2-step-photos-6">
                <input type="checkbox" />
                <span class="checkmark-step"></span>
                <img
                  class="calculator-img"
                  src="@/assets/Calculator/img-6.webp"
                  alt="image-6"
                />
                <div class="calculator-2-step-photos-balcon-name">Балкон</div>
                <div class="calculator-2-step-mobile-photos-name">Другое</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calculator-3-step">
        <div class="calculator-3-step-mobile-price">
          <div class="calculator-3-step-price-text">Цена по акции:</div>
          <div class="calculator-3-step-price-text-price">
            {{ getPrice }} руб.*
          </div>
          <div class="calculator-3-step-mobile-price-text-price">
            {{ getMobilePrice }} руб.*
          </div>
        </div>
        <div class="calculator-3-step-price-mobile-info">
          Потолок + установка
        </div>
        <div class="calculator-3-step-title">
          3. Выберите дополнительные <br />услуги
        </div>
        <div class="calculator-3-step-checkbox">
          <div class="calculator-3-step-checkbox-list">
            <label class="calculator-3-step-checkbox-container"
              >Только люстра
              <input @click="addFirstCheckPrice" type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="calculator-3-step-checkbox-container"
              >Установка светильников 4-8 шт
              <input @click="addSecondCheckPrice" type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="calculator-3-step-checkbox-container"
              >Установка световых линий
              <input @click="addThirdCheckPrice" type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="calculator-3-step-checkbox-container"
              >Потолочная гардина для штор
              <input @click="addFourthCheckPrice" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="calculator-3-step-price">
          <div class="calculator-3-step-price-text">Цена по акции:</div>
          <div class="calculator-3-step-price-text-price">
            {{ getPrice }} руб.*
          </div>
        </div>
        <div class="calculator-3-step-price-info">Потолок + установка</div>
        <div class="calculator-3-step-mobile-info">
          *Данный расчет является предварительным. Точную стоимость уточняйте у
          менеджеров. Минимальная стоимость договора 8900 руб.
        </div>
        <div class="calculator-3-step-phone">
          <div class="calculator-3-step-phone-text">Ваш номер телефона</div>
          <VuePhoneNumberInput default-country-code="RU" v-model="phone">
          </VuePhoneNumberInput>
        </div>
        <div class="calculator-3-step-btn">
          <div class="calculator-3-step-btn-text">ОСТАВИТЬ ЗАЯВКУ</div>
        </div>
        <div class="calculator-3-step-info">
          *Данный расчет является предварительным. Точную стоимость уточняйте у
          менеджеров. Минимальная стоимость договора 8900 руб.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  name: "Calculator",
  components: {
    VueSlider,
    VuePhoneNumberInput,
  },
  data() {
    return {
      value: 1,
      price: 299,
      mobilePrice: 199,
      marks: [1, 100],
      min: 1,
      phone: "",
      isFristCheck: false,
      isSecondCheck: false,
      isThirdCheck: false,
      isFourthCheck: false,
    };
  },
  methods: {
    addFirstCheckPrice() {
      const firstCheckPrice = 450;
      this.isFristCheck = !this.isFristCheck;
      if (this.isFristCheck) {
        this.mobilePrice = this.mobilePrice + firstCheckPrice;
      } else {
        this.mobilePrice = this.mobilePrice - firstCheckPrice;
      }
    },
    addSecondCheckPrice() {
      const secondCheckPrice = 2000;
      this.isSecondCheck = !this.isSecondCheck;
      if (this.isSecondCheck) {
        this.mobilePrice = this.mobilePrice + secondCheckPrice;
      } else {
        this.mobilePrice = this.mobilePrice - secondCheckPrice;
      }
    },
    addThirdCheckPrice() {
      const thirdCheckPrice = 5000;
      this.isThirdCheck = !this.isThirdCheck;
      if (this.isThirdCheck) {
        this.mobilePrice = this.mobilePrice + thirdCheckPrice;
      } else {
        this.mobilePrice = this.mobilePrice - thirdCheckPrice;
      }
    },

    addFourthCheckPrice() {
      const fourthCheckPrice = 1000;
      this.isFourthCheck = !this.isFourthCheck;
      if (this.isFourthCheck) {
        this.mobilePrice = this.mobilePrice + fourthCheckPrice;
      } else {
        this.mobilePrice = this.mobilePrice - fourthCheckPrice;
      }
    },
  },
  computed: {
    getPrice() {
      return this.price * this.value;
    },
    getMobilePrice() {
      const price = 199;
      let mobileValue = this.value - 1;
      return this.mobilePrice + price * mobileValue;
    },
  },
};
</script>

<style>
.calculator {
  margin-top: 0.8%;
  margin-bottom: 5%;
}
.calculator-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculator-block {
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  justify-content: center;
  margin-right: 3%;
  margin-left: 3%;
}

.calculator-title-block {
  color: #000000;
  font-size: 22px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 600;
}
.calculator-1-2-steps {
  display: flex;
  flex-direction: column;
  margin-right: 7%;
}

.calculator-3-step {
  display: flex;
  flex-direction: column;
}
.calculator-1-step-title,
.calculator-2-step-title,
.calculator-3-step-title {
  color: #000;
  font-weight: 700;
  font-family: "Arial";
  font-size: 18px;
  padding-bottom: 5px;
}

.calculator-1-step-range {
  width: 100%;
  padding-top: 8%;
  margin-bottom: 5%;
}
.calculator-2-step-photos {
  display: flex;
  flex-direction: column;
}
.calculator-2-step-photos-row-1 {
  display: flex;
  margin-top: 3%;
}
.calculator-2-step-photos-row-2 {
  display: flex;
}
.calculator-2-step-photos-1,
.calculator-2-step-photos-2,
.calculator-2-step-photos-3,
.calculator-2-step-photos-4,
.calculator-2-step-photos-5,
.calculator-2-step-photos-6 {
  max-width: 126.25px;
  min-width: 126.25px;
  max-height: 126.25px;
  height: 126.25px;
  width: 126.25px;
  margin-right: 2%;
  margin-bottom: 7%;
  cursor: pointer;
  position: relative;
}
.calculator-2-step-photos-1 .checkmark-step::after,
.calculator-2-step-photos-2 .checkmark-step::after,
.calculator-2-step-photos-3 .checkmark-step::after,
.calculator-2-step-photos-4 .checkmark-step::after,
.calculator-mobile-2-step-photos-4 .checkmark-step::after,
.calculator-2-step-photos-5 .checkmark-step::after,
.calculator-2-step-photos-6 .checkmark-step::after {
  background-image: url("../assets/Calculator/download.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-color: #005e38;
  content: " ";
  color: #fff;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -7px;
  left: -7px;
  transition: all 0.2s ease-in;
}

.calculator-2-step-photos-name,.calculator-2-step-photos-balcon-name {
  line-height: 1.1;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 300;
  font-size: 14px;
  margin-top: 5px;
}

.calculator-2-step-photos-1 input,
.calculator-2-step-photos-2 input,
.calculator-2-step-photos-3 input,
.calculator-2-step-photos-4 input,
.calculator-mobile-2-step-photos-4 input,
.calculator-2-step-photos-5 input,
.calculator-2-step-photos-6 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.checkmark-step {
  display: block;
  /* outline: 2px solid #007049; */
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
}
.checkmark-step:after {
  content: "";
  position: absolute;
  display: none;
}

.calculator-2-step-photos-1 input:checked ~ .checkmark-step:after,
.calculator-2-step-photos-2 input:checked ~ .checkmark-step:after,
.calculator-2-step-photos-3 input:checked ~ .checkmark-step:after,
.calculator-mobile-2-step-photos-4 input:checked ~ .checkmark-step:after,
.calculator-2-step-photos-5 input:checked ~ .checkmark-step:after,
.calculator-2-step-photos-6 input:checked ~ .checkmark-step:after {
  display: block;
}

.calculator-img {
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 100%;
}

/* 3 step */
.calculator-3-step-checkbox-list {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
}
.calculator-3-step-checkbox-container {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-width: 0 2px 2px 0;
  border-color: #007049;
}

/* Hide the browser's default checkbox */
.calculator-3-step-checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  display: block;
  outline: 2px solid #007049;
  position: absolute;
  top: 3px;
  left: 0;
  height: 15px;
  width: 15px;
  /* background-color: #eee; */
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.calculator-3-step-checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
.calculator-3-step-checkbox-container input:checked ~ .checkmark {
  background-color: #fff;
}

.calculator-3-step-checkbox-container .checkmark:after {
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid #007049;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.calculator-3-step-price {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000000;
  font-size: 20px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 500;
  margin-top: 7%;
  width: 345.6px;
  left: 620px;
  top: 283px;
  height: 42px;
  border-radius: 10px;
  background-color: #ffff00;
}
.calculator-3-step-price-text-price {
  margin-right: 10%;
}

.calculator-3-step-price-info {
  color: #000000;
  font-size: 14px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-left: 45%;
}
.calculator-3-step-btn:hover {
  background-color: #005e38;
}

.calculator-3-step-btn {
  top: 450px;
  left: 810px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  background-color: #005e38;
  color: #ffffff;
  font-size: 14px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 600;
  border-width: 1px;
  border-radius: 5px;
  background-color: #198c5e;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}
.calculator-3-step-info {
  margin-top: 4%;
  margin-left: 2%;
  color: #525252;
  font-size: 10px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 400;
  top: 530px;
  left: 820px;
  width: 300px;
}
.vue-slider-process {
  background-color: #005e38;
}
.vue-slider-dot-handle,
.vue-slider:hover .vue-slider-process {
  background-color: #005e38;
}

.vue-slider-dot-handle {
  border: none;
}
.vue-slider-mark-step {
  display: none;
}
.vue-slider-dot-tooltip-text {
  color: #fff;
}
.calculator-3-step-phone {
  margin-top: 2%;
  margin-bottom: 2%;
}

.calculator-3-step-phone-text {
  color: #000;
  font-family: Arial;
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 1.55;
}
/* mobile */
.calculator-title-mobile-block,
.calculator-2-step-mobile-title,
.calculator-1-step-mobile-title,
.calculator-3-step-mobile-price,
.calculator-3-step-price-mobile-info,
.calculator-3-step-mobile-info {
  display: none;
}
.calculator-mobile-2-step-photos-4,.calculator-2-step-mobile-photos-name {
  display: none;
}
@media screen and (max-width: 980px) {
  .calculator-3-step-price-text-price,.calculator-2-step-photos-balcon-name {
    display: none;
  }
  .calculator-3-step-mobile-price-text-price {
    display: block;
    margin-right: 10%;
  }
  .calculator-2-step-mobile-photos-name {
    display: block;
  }
  
  .calculator-1-step-range {
    padding-left: 2%;
  }
  .calculator-title-block,
  .calculator-2-step-title,
  .calculator-1-step-title,
  .calculator-3-step-price,
  .calculator-3-step-price-info,
  .calculator-3-step-info {
    display: none;
  }
  .calculator-title-mobile-block {
    display: block;
    line-height: 1.17;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 600;
    color: #000;
    font-size: 34px;
    text-align: left;
    max-width: 615px;
    width: 100%;
  }
  .calculator {
    margin-bottom: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .calculator-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 615px;
  }
  .calculator-1-2-steps {
    flex-direction: column-reverse;
    margin-top: 5%;
    margin-right: 0;
  }
  .calculator-2-step-mobile-title,
  .calculator-1-step-mobile-title {
    display: block;
    color: #000;
    font-weight: 700;
    font-family: "Arial";
    font-size: 21px;
  }
  /* .calculator-3-step {
    width: 660px;
  } */
  .calculator-3-step-mobile-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    font-size: 20px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    font-weight: 500;
    margin-top: 7%;
    max-width: 615px;
    width: 100%;
    left: 620px;
    top: 283px;
    height: 42px;
    border-radius: 10px;
    background-color: #ffcc00;
  }
  .calculator-3-step-price-text {
    margin-left: 5%;
  }
  .calculator-3-step-price-mobile-info {
    display: block;
    color: #000000;
    font-size: 14px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-left: 65%;
    margin-bottom: 1%;
  }
  .calculator-3-step-mobile-info {
    display: block;
    margin-top: 4%;
    color: #525252;
    font-size: 10px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.55;
    font-weight: 400;
    width: 100%;
    max-width: 615px;
  }
  .calculator-3-step-btn {
    width: 100%;
    max-width: 615px;
  }
  .calculator-3-step-phone {
    width: 100%;
    max-width: 615px;
  }
  .calculator-3-step-btn-text {
    font-size: 18px;
  }
}
@media screen and (max-width: 570px) {
  .calculator-3-step-mobile-price {
    font-weight: 700;
  }
  .calculator-2-step-photos-4 {
    display: none;
  }
  .calculator-title-mobile-block {
    margin-left: 4%;
  }
  .calculator-1-2-steps {
    margin-left: 4%;
    margin-right: 4%;
  }
  .calculator-2-step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  .calculator-2-step-mobile-title {
    max-width: 428px;
  }
  .calculator-mobile-2-step-photos-4 {
    display: block;
    max-width: 103px;
    min-width: 103px;
    max-height: 103px;
    height: 103px;
    width: 103px;
    margin-right: 2%;
    margin-bottom: 7%;
    cursor: pointer;
    position: relative;
  }
  .calculator-2-step-photos-1,
  .calculator-2-step-photos-2,
  .calculator-2-step-photos-3,
  .calculator-2-step-photos-4,
  .calculator-2-step-photos-5,
  .calculator-2-step-photos-6 {
    max-width: 103px;
    min-width: 103px;
    max-height: 103px;
    height: 103px;
    width: 103px;
  }
  .calculator-2-step {
    margin-bottom: 7%;
  }
  .calculator-3-step {
    margin-left: 4%;
    margin-right: 4%;
  }
  .calculator-3-step-price-mobile-info {
    width: 160px;
    margin-left: 50%;
  }
  .calculator-2-step-photos-row-1 {
    margin-bottom: 3%;
  }
  .calculator-3-step-btn-text {
    font-size: 14px;
  }
}
</style>
