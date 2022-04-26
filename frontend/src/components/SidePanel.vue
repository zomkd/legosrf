<template>
  <section class="main-panel-1">
    <div class="main-panel-row-1">
      <div class="block-1">
        <div class="block-1-description">
          <div class="block-title">МАКСИМАЛЬНО СЖАТЫЕ СРОКИ</div>
          <div class="block-1-content">
            <strong class="block-1-text">
              Мы стараемся завершить все монтажи за 1 день</strong
            >
            и не утомлять клиентов долгими ожиданиями.
          </div>
        </div>
        <div class="block-1-img">
          <img
            class="main-panel-img"
            src="@/assets/SidePanel/img-1.webp"
            alt="image-1"
          />
        </div>
      </div>

      <div class="block-2">
        <div class="block-2-description">
          <div class="block-title">
            В ЛЕГОС выработана собственная система установки светового
            оборудования
          </div>
          <div class="block-content">Для повышения уровня безопасности</div>
        </div>
        <div class="block-2-img">
          <img
            class="main-panel-img"
            src="@/assets/SidePanel/img-2.webp"
            alt="image-2"
          />
        </div>
      </div>
    </div>
    <div class="main-panel-row-2">
      <div class="block-3">
        <div class="block-3-img">
          <img
            class="main-panel-img"
            src="@/assets/SidePanel/img-3.webp"
            alt="image-3"
          />
        </div>
        <div class="block-3-description">
          <div class="block-title">
            Мы нашли для Вас, пожалуй, лучшие светильники в Росcии. Ecola.
          </div>
          <div class="block-content">
            Светильники Ecola работают дольше обычных.
          </div>
        </div>
      </div>
      <div class="block-4">
        <div class="block-4-img">
          <img
            class="main-panel-img"
            src="@/assets/SidePanel/img-4.webp"
            alt="image-4"
          />
        </div>
        <div class="block-4-description">
          <div class="block-title">Вам не обязательно приезжать в офис</div>
          <div class="block-content">
            Все расчеты и подписания документов можно произвести непосредственно
            на месте с нашими специалистами
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SidePanel",
};
</script>

<style >
.main-panel-1 {
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  width:100%;
}
.main-panel-row-1,
.main-panel-row-2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main-panel-row-1 {
  margin-top: 5%;
  margin-right: 2%;
  margin-left: 2%;
}

.main-panel-row-2 {
  margin-bottom: 5%;
  margin-right: 2%;
  margin-left: 2%;
}
.block-1,
.block-2,
.block-3,
.block-4 {
  max-width: 580px;
  max-height: 530px;
  display: flex;

  flex-direction: row;
  background-color: rgb(255, 255, 255);
}

.block-1,
.block-3,
.block-2,
.block-4 {
  width: 50%;
}

.block-1-description,
.block-2-description,
.block-3-description,
.block-4-description {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.block-2-description,
.block-3-description {
  padding-top: 3%;
}

.block-1-img,
.block-2-img,
.block-3-img,
.block-4-img {
  position: relative;
  width: 100%;
  max-width: 100%;
}
.block-1-img::after,
.block-2-img::after,
.block-3-img::after,
.block-4-img::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border: solid #000;
  right: 0px;
  border-width: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  border-left-color: transparent;
  border-right-color: #fff;
  border-top-color: transparent;
  border-bottom-color: transparent;
  left: inherit;
}

.block-1-img::after,
.block-2-img::after {
  top: 0;
  left: 0;
  border: solid #000;
  right: 0px;
  border-width: 20px;
  top: 50%;
  border-right-color: transparent;
  border-left-color: #fff;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.main-panel-img {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 265px;
  max-height: 265px;
}
.block-1-text {
  font-weight: 700;
}
.block-content {
  font-family: "Roboto", Arial, sans-serif;
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  color: #000;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.55;
}

.block-1-content {
  font-family: "Roboto", Arial, sans-serif;
  margin-top: 40px;
  margin-left: 10%;
  margin-right: 10%;
  color: #000;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.55;
}

.block-title {
  margin-top: 1em;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 20px;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
  line-height: 1.35;
}

@media screen and (max-width: 980px) {
  .main-panel-1{
    display: none;
  }
}
</style>