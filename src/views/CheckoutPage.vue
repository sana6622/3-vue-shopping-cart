<template>
  <div class="container">
    <h2>結帳</h2>
    <div class="main">
      <!--左邊結帳區-->
      <div class="checkout">
        <StepControl :stepper="stepper"> </StepControl>
        <!--步驟1-->
        <StepOne v-if="stepper===1" v-on:emitInfo="getOrderInfo"></StepOne>
        <!--步驟2-->
        <StepTwo v-else-if="stepper===2" v-on:emitTransportPrice="getTransportPrice"></StepTwo>
        <!--步驟3-->
        <StepFinall v-else-if="stepper===3" v-on:emitCardInfo="getCardInfo"></StepFinall>
      </div>

     <!--右邊購物車-->
     <CartInfo :original-cart="cartData" :fare="fare"></CartInfo>

     <!--button-->
     <ButtonControl v-on:controlStepNum="getStepNum"></ButtonControl>
    </div>
  </div>
</template>

<script>
import StepControl from './../components/StepControl.vue'
import StepOne from './../components/StepOne.vue'
import StepTwo from './../components/StepTwo.vue'
import StepFinall from './../components/StepFinall.vue'
import CartInfo from './../components/CartInfo.vue'
import ButtonControl from './../components/ButtonControl.vue'

const dummyData = {
  cartData: [
    {
      id: 1,
      name: '破壞補釘修身牛仔褲',
      image: 'https://github.com/sana6622/3-shoppingCard/blob/main/img/Block.jpg?raw=true',
      price: 3999,
      quantity: 1
    },
    {
      id: 2,
      name: '刷色直筒年仔褲',
      image: 'https://github.com/sana6622/3-shoppingCard/blob/main/img/Block2.jpg?raw=true',
      price: 1999,
      quantity: 1
    }
  ]
}

export default {
  name: 'checkoutPage',
  components: {
    StepControl,
    StepOne,
    StepTwo,
    StepFinall,
    CartInfo,
    ButtonControl
  },
  data () {
    return {
      checkoutInfo: [],
      fare: 0,
      creditCard: [],
      cartData: {
        id: 0,
        name: '',
        image: '',
        price: 0,
        quantity: 1
      },
      stepper: 1
    }
  },
  created () {
    this.fetchCart()
  },
  methods: {
    fetchCart () {
      this.cartData = dummyData.cartData
    },
    // 取得stepper數字，作為切換step使用
    getStepNum (num) {
      this.stepper = num
    },
    // step 1傳入資料
    getOrderInfo (data) {
      this.checkoutInfo = data
    },
    // step 2傳入資料
    getTransportPrice (price) {
      this.fare = price
    },

    // step 3 傳入資料
    getCardInfo (data) {
      this.creditCard = data
    }
  }

}
</script>
