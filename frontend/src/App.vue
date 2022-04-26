<template>
  <div id="app">
    <Navbar></Navbar>
    <LegosMainNav></LegosMainNav>
    <Main></Main>
    <SidePanel></SidePanel>
        <Calculator> </Calculator>
        <Guarantee></Guarantee>
    <StretchCeiling></StretchCeiling>
    <CeilingLegos></CeilingLegos>
    <LampMobile></LampMobile>
    <LampPanel></LampPanel>
    <MontageLegos></MontageLegos>
    <MSD></MSD>
    <Comments></Comments>
    <LegosInst></LegosInst>
    <Order></Order>
    <Accordion> </Accordion>
    <PriceList></PriceList>
    <div class="legos-main-nav-2">
    <LegosMainNav></LegosMainNav>
    </div>
    <Map> </Map>
    <Footer> </Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LegosMainNav from '@/components/LegosMainNav.vue'
import Main from '@/components/Main.vue'
import SidePanel from '@/components/SidePanel.vue'
import StretchCeiling from '@/components/StretchCeiling.vue'
import LampPanel from '@/components/LampPanel.vue'
import LegosInst from '@/components/LegosInst.vue'
import Order from '@/components/Order.vue'
import PriceList from '@/components/PriceList.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'
import Accordion from '@/components/Accordion.vue'
import Calculator from '@/components/Calculator.vue'
import Guarantee from './components/Mobile/Guarantee.vue'
import CeilingLegos from './components/Mobile/СeilingLegos.vue'
import LampMobile from './components/Mobile/LampMobile.vue'
import MontageLegos from './components/Mobile/MontageLegos.vue'
import MSD from './components/Mobile/MSD.vue'
import Comments from './components/Mobile/Comments.vue'


export default {
  name: 'App',
  components : {
    Navbar,
    LegosMainNav,
    Main,
    SidePanel,
    StretchCeiling,
    LampPanel,
    LegosInst,
    Order,
    PriceList,
    Footer,
    Map,
    Accordion,
    Calculator,
    Guarantee,
    CeilingLegos,
    LampMobile,
    MontageLegos,
    MSD,
    Comments,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Open Sans', Arial,sans-serif;
  font-size: 14px;
  color: #000000;
  overflow: hidden;
}
.legos-main-nav-2 {
  margin-top: 3%;
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom: 3%;
}
</style>
