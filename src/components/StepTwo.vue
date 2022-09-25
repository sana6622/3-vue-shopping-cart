<template>
  <div class="part ">
    <h3>運送方式</h3>

    <div class="transport-style" id="transprot-style" >
      <div class="transprot transport-form" v-for="transport in transportStyle" :key="transport.id">
        <input  name="transport" type="radio" :value="transport.price" class="transprot" v-model="transportPrice"/>
        <label for="" class="transport">
          <div>
            <p>{{transport.name}}</p>
            <p>{{transport.course}}</p>
          </div>
          <p>{{transport.priceView}}</p>
        </label>
      </div>
    </div>
  </div>
  <!--end of part 2-->
</template>

<script>
export default {
  data () {
    return {
      transportPrice: 0,
      transportStyle: [
        {
          id: 1,
          name: '標準運送',
          course: '約3~7個工作天',
          price: 0,
          priceView: '免費'
        },
        {
          id: 2,
          name: 'DHL貨運',
          course: '48小時內送達',
          price: 500,
          priceView: '$500'
        }
      ]
    }
  },
  methods: {
    emitTransportPrice () {
      this.$emit('emitTransportPrice', this.transportPrice)
      console.log('sent', this.transportPrice)
    }
  },
  watch: {
    transportPrice: {
      handler: function () {
        this.emitTransportPrice()
      },
      deep: true
    }
  }
}
</script>
