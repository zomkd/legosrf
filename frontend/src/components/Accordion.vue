<template>
  <main class="accordion">
    <div class="accordion-block">
      <AccordionMenu :contents="contents"></AccordionMenu>
    </div>
  </main>
</template>

<script>
import { AccordionMenu } from "vue-accordion-menu";
export default {
  name: "Accordion",
  components: {
    AccordionMenu,
  },
  data() {
    return {
      contents: [
        {
          title: "Какой выбрать потолок: ПВХ или тканевый?",
          msg: "Натяжной потолок из ПВХ практичнее в эксплуатации и уходе, но тканевый потолок имеет более глубокую матовость, за счет чего потолок имеет максимальную схожесть с гипсокартоновым. #Натяжные потолки ЛЕГОС Чебоксары",
        },
        {
          title: "Насколько опустится натяжной потолок?",
          msg: "В большинстве случаев опущение натяжного потолка от базового составит 4 см. На высоту отступа влияет: система крепления потолка, высота встраиваемых светильников, наличие каких-либо коммуникаций #Натяжные потолки ЛЕГОС Чебоксары",
        },
        {
          title: "Может ли световая линия заменить люстру?",
          msg: "Да, это возможно. Люстра и светодиодные линии являются источником общего света. Но есть разные вариации профилей и нужно использовать мощную светодиодную ленту. Так же рекомендуется совмещать общий свет с акцентным и функциональным светом для создания более комфортной световой среды #Натяжные потолки ЛЕГОС Чебоксары",
        },
        {
          title: "Что сначала: плитка или потолок?",
          msg: "Плитка должна быть положена до установки натяжного потолка. Монтаж крепёжного багета производится непосредственно на плитку. Если вас интересуют детали, Вас с радостью проконсультирует наш старший инженер Герман Васильев. Оставляйте заявку и мы к вам перезвоним #Натяжные потолки ЛЕГОС Чебоксары",
        },
        {
          title: "Какие сроки монтажа натяжного потолка?",
          msg: "Монтаж натяжного потолка в среднем занимает 2-3 часа. Срок изготовления потолка по размерам заказчика занимает 1 день, но бывают задержки из-за сезонной нагрузки #Натяжные потолки ЛЕГОС Чебоксары",
        },
        {
          title: "Можно ли делать натяжной потолок на балконе?",
          msg: "Да, можно. Но если на балконе температура будет ниже 0, то настоятельно рекомендуем выбрать тканевое полотно #Натяжные потолки ЛЕГОС Чебоксары",
        },
      ],
    };
  },
};
</script>

<style>
.accordion {
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
align-items: center;
align-content: center;
}
.accordion-block {
  margin: 5% 2% 2% 5%;
max-width: 900px;
}

.faq-description[data-v-2b9a1942] {
  font-size: 24px;
  line-height: 1.35;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 600;
  color: #000;
  width: 100%;
  letter-spacing: 0;
  border-top: 1px solid #eee;
  padding-left: 0px;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  cursor: pointer;
}
.faq-description .faq-number[data-v-2b9a1942] {
  display: none;
}
.faq-content[data-v-2b9a1942] {
  padding: 0;
  margin-bottom: 5%;
}

.faq-question.open .faq-description span:last-child[data-v-2b9a1942] {
  transform: rotate(-45deg);
}

.faq-question.open[data-v-2b9a1942] {
  background-color: #e0e0e0;
  font-size: 16px;
  line-height: 1.55;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
  margin-bottom: 20px;
}

.faq-description span[data-v-2b9a1942]:last-child {
  color: #313030;
  font-weight: 150;
}

@media screen and (max-width: 980px) {
  .accordion-block {
  margin-top: 5%;
 margin-left: 4%;
margin-right: 4%;
max-width: 900px;
}
  .faq-description[data-v-2b9a1942] {
    font-size: 20px;
  }
}
</style>