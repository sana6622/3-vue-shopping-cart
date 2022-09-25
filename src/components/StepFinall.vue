<template>
  <div class="part ">
    <h3>付款資訊</h3>
    <div class="pay-info">
      <div class="pay-form">
        <label for="">持卡人姓名</label>
        <input id="card-name" type="text" placeholder="John Doe" v-model="orderPay.cardName" />
      </div>
      <div class="pay-form">
        <label for="">卡號</label>
        <input id="card-number" type="number" placeholder="1111 2222 3333 4444" v-model="orderPay.cardNumber" />
      </div>
      <div class="pay-form">
        <label for="">有效期限</label>
        <input id="card-date" type="number" placeholder="MM/YY" v-model="orderPay.cardDate"/>
      </div>
      <div class="pay-form">
        <label for="">CVC/CCV</label>
        <input id="card-CVC" type="number" placeholder="123" v-model="orderPay.cardCvc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderPay: {
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCvc: ''
      }
    }
  },
  methods: {
    emitCardInfo () {
      this.$emit('emitCardInfo', this.orderPay)
      console.log('sent', this.orderPay)
    }
  },
  watch: {
    orderPay: {
      handler: function () {
        this.emitCardInfo()
      },
      deep: true
    }
  }
}
</script>
