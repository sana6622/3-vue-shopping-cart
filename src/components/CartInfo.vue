<template>
  <div class="cart">
    <h3>購物籃</h3>
    <div class="cart-item " v-for="(item,index) in cartData" :key="item.id">
      <img :src="item.image" alt="商品照片" />
      <div class="cart-info">

        <div class="cart-des">
          <div class="cart-name">{{item.name}}</div>
          <div class="cart-count">
            <div class="minus" v-on:click="reduceQuantity(index)"></div>
            <div class="number">{{item.quantity}}</div>
            <div class="plus" v-on:click="addQuantity(index)"></div>
          </div>
        </div>
        <div class="cart-price">
          <span>$</span>
          <span class="price">{{item.price*item.quantity}}</span>
        </div>
      </div>
    </div>
    <!--end of cart-item-->

    <div class="fare">
      <p>運費</p>
      <p class="fare-price">{{fare===0?'免費':fare}}</p>
    </div>
    <div class="total">
      <p>小計</p>
      <p class="total-price">{{totalPrice}}</p>
    </div>
  </div>
  <!--end of cart-->
</template>

<script>
export default {
  props: {
    originalCart: {
      type: Array,
      require: true
    },
    fare: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      cartData: this.originalCart
    }
  },
  methods: {
    addQuantity (index) {
      this.cartData[index].quantity++
    },
    reduceQuantity (index) {
      if (this.cartData[index].quantity > 0) {
        this.cartData[index].quantity--
      } else if (this.cartData[index].quantity < 0) {
        this.cartData[index].quantity = 0
      }
    }
  },
  // 小計
  computed: {
    totalPrice () {
      let total = 0
      this.cartData.forEach(item => {
        total += item.quantity * item.price
      })
      return total + this.fare
    }
  }
}
</script>
