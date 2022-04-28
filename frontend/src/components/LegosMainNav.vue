<template>
  <main>
    <section class="logo">
      <div class="legos">
        <div class="legos-logo-img">
          <img
            class="legos-logo"
            src="@/assets/Navbar/logo/legos-logo.webp"
            alt="Legos"
          />
        </div>
        <div class="legos-text">
          <div class="text">Натяжные потолки и <br />световое оборудование</div>
        </div>
      </div>
      <div class="legos-actions">
        <div class="actions">
          <a class="action" href="tel:+78352355045" v-on:click="CallModalShow" >Вызывать замерщика</a>
          <a class="action" v-on:click="CallModalShow">Отзывы</a>
          <a class="action" v-on:click="CallModalShow">Цены</a>
        </div>
        <div class="marks">
          <div class="phone-mark">
            <div class="mark-img-block">
              <img
                class="mark-img"
                src="@/assets/Navbar/logo/mark.svg"
                alt="Legos"
              />
            </div>
            <div class="phone-work">
              <a class="phone" v-on:click="CallModalShow">8 (8352) 35-50-45</a>
              <div class="work-time">до 21:00 без выходных</div>
            </div>
          </div>
          <div class="address-mark">
            <div class="mark-img-block">
              <img
                class="mark-img"
                src="@/assets/Navbar/logo/mark.svg"
                alt="Legos"
              />
            </div>
            <div class="place-and-address">
              <div class="place">ДОМ МОД 5 этаж</div>
              <div class="place-address">К. Воробьевых, 20</div>
            </div>
          </div>
          <div class="leave-application" v-on:click="CallModalShow">
            <a class="leave-application-btn">Оставить заявку</a>
          </div>
        </div>
      </div>
    </section>
    <div class="callModalShow" v-if="isShow"><Modal :isShow="isShow" @hideModal="hideModal"> </Modal></div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "LegosMainNav",
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
      this.isShow = data
    },
  },
};
</script>

<style>
.logo {
  display: flex;
  margin-top: 1.2%;
  margin-bottom: 1%;
}

.legos {
  display: flex;
  width: 39%;
  margin-left: 2em;
}

.legos-text {
  margin-left: 2em;
  display: flex;
  width: 200px;
}

.legos-text .text {
  align-self: flex-end;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 15px;
  padding-bottom: 2px;
  line-height: 1.15;
  font-weight: 100;
}
.legos-logo-img {
  width: 200px;
  display: flex;
  align-self: center;
  justify-content: center;
}
.legos-logo {
  display: block;
}
.legos-actions {
  display: flex;
  width: 100%;
}
.actions {
  
  margin-left: 16%;
  width: 30%;
  display: flex;
  align-self: center;
  font-size: 14px;
  font-family: "Roboto", Arial, sans-serif;
  flex-direction: column;
  line-height: 1.4;
  font-weight: 500;
}
.action {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
}

.marks {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1%;
}
.mark-img-block {
  max-width: 50px;
  width: 50px;
  max-height: 50px;
  height: 50px;
}
.mark-img {
  width: 100%;
  height: 100%;
  color: #858585;
  display: block;
}

.phone-mark,
.address-mark {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 5%;
}
.phone {
  color: #000000;
  font-size: 15px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.15;
  font-weight: 600;
  cursor: pointer;
}

.work-time,
.place-address {
  color: #858585;
  font-size: 12px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.15;
  font-weight: 500;
}
.place {
  color: #858585;
  font-size: 12px;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 1.15;
  font-weight: 600;
}

.leave-application {
  line-height: 1.55;
  width: 11em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  font-weight: 600;
  border-width: 1px;
  border-radius: 30px;
  text-align: center;
  background-color: #ff0000;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  cursor: pointer;
}

.leave-application-btn {
  color: #ffffff;
  font-size: 14px;
  font-family: "Arial", Arial, sans-serif;
}

@media screen and (max-width: 980px) {
  .logo {
    display: none;
  }
}
</style>