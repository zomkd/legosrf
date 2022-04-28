<template>
  <nav class="navbar">
    <section class="nav-road">
      <section class="container-list">
        <ul class="road-list">
          <li class="lamp">
            <a class="step-name">СВЕТИЛЬНИК </a>
            <span class="road-arrow">→</span>
          </li>
          <li class="window-balcony">
            <a
              class="step-name"
              href="https://oknacheb.ru/?roistat_visit=121911"
            >
              ОКНА И БАЛКОНЫ переход...
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section class="green-line">
      <section class="location">
        <div class="city">
          <img
            class="green-line-icon"
            src="@/assets/Navbar/green-line/flag.svg"
            alt="Flag"
          />
          <div class="city-name">Чебоксары</div>
        </div>
        <div class="address">
          Выставочный зал в ТЦ "ДОМ МОД" 5 этаж, с 10:00 - 18:00, без выходных
        </div>
      </section>
      <section class="services">
        <div class="sheep">
          <picture
            ><img
              class="green-line-icon"
              src="@/assets/Navbar/green-line/sheep.svg"
              alt="Sheep"
          /></picture>
          <div class="sheep-name">Доставка</div>
        </div>
        <div class="payment">
          <picture
            ><img
              class="green-line-icon"
              src="@/assets/Navbar/green-line/pay.svg"
              alt="Payment"
          /></picture>
          <div class="payment-name">Оплата</div>
        </div>
        <div class="contacts">
          <picture
            ><img
              class="green-line-icon"
              src="@/assets/Navbar/green-line/contacts.svg"
              alt="Contacts"
          /></picture>
          <div class="contacts-name">Контакты</div>
        </div>
      </section>
      <section class="mobile-nav">
        <div class="mobile-logo">
          <a href="https://zomkd.github.io/legosrf/">
            <img
              class="mobile-logo-icon"
              src="@/assets/Navbar/green-line/1.png"
              alt="Flag"
            />
          </a>
        </div>
        <a class="mobile-call" href="tel:+78352355045">
          <img
            class="mobile-call-icon"
            src="@/assets/Navbar/green-line/2.webp"
            alt="Flag"
          />
        </a>
      </section>
    </section>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style>
/* white line*/
.container-list {
  padding: 0;
  width: 100%;
}
ul {
  margin: 0;
  padding-left: 28%;
  padding-top: 15px;
  padding-bottom: 15px;
  list-style-type: none;
}

.step-name {
  display: inline;
  text-decoration: none;
  color: #000000;
  padding-right: 10px;
  padding-left: 10px;
}

li {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 16px;
  display: inline;
  white-space: nowrap;
}

li a {
  font-weight: 300;
  display: block;
  transition-property: color, opacity;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease-in-out, ease-in-out;
  transition-delay: 0s, 0s;
}

li a:hover {
  color: darkgrey;
}

span {
  font-weight: 300;
  color: #7dad93;
}
/* green line*/
.green-line {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20px;
  background-color: #00662e;
  font-family: "Roboto", Arial, sans-serif;
}
.location {
  display: flex;
  justify-content: center;
  width: 60%;
  color: #ebffeb;
  line-height: 1.05;
  font-weight: 500;
  border-color: transparent;
  border-style: solid;
}
.services {
  display: flex;
  width: 40%;
  justify-content: center;
  color: #ebffeb;
  line-height: 1.05;
  font-weight: 500;
  border-color: transparent;
  border-style: solid;
}

.address {
  font-size: 13px;
  font-weight: 400;
  padding-left: 6em;
}
.city,
.sheep,
.payment,
.contacts {
  display: flex;
}

.sheep,
.payment,
.contacts {
  margin-right: 6em;
}
.green-line-icon {
  width: 1em;
  height: 1em;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

/* mobile  */
.mobile-nav,
.mobile-logo,
.mobile-call {
  display: none;
}

@media screen and (max-width: 980px) {
  .green-line {
    display: block;
    height: 60px;
    background-color: #004220;
  }
  .road-list {
    padding-left: 5%;
  }
  li {
    font-size: 14px;
  }
  .location,
  .services {
    display: none;
  }
  .mobile-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 100%;
  }
  .mobile-logo,
  .mobile-call {
    display: block;
    cursor: pointer;
  }
  .mobile-logo {
    display: block;
    max-width: 306px;
  }
  .mobile-logo-icon {
    width: 80%;
  }
  .mobile-call-icon {
    width: 40px;
  }
}
</style>
