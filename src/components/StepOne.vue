<template>
  <div class="part">
    <h3>寄送地址</h3>
    <div class="information">
      <div class="form-row">
        <label for="">稱謂</label>
        <div class="select-wrap" >
          <select v-model="orderInfo.gender" name="gender" id="gender"  >
            <option value="" disabled selected>請選擇</option>
            <option v-for="(genderSelect,index) in genderSelects" :key="index" :value="genderSelect" >{{genderSelect}}</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <label for="">姓名</label>
        <input id="name" type="text" placeholder="請輸入姓名"  v-model="orderInfo.name"/>
      </div>
      <div class="form-row">
        <label for="">電話</label>
        <input id="name" type="number" placeholder="請輸入行動電話" v-model="orderInfo.tel" />
      </div>
      <div class="form-row">
        <label for="">Email</label>
        <input id="name" type="text" placeholder="請輸入Email" v-model="orderInfo.email"/>
      </div>
      <div class="form-row">
        <label for="">縣市</label>
        <div class="select-wrap">
          <select name="a-type" id="a-location" required v-model="orderInfo.location">
            <option value="" disabled selected>請選擇縣市</option>
            <option  v-for="(locationSelect,index) in locationSelects" :key="index" :value="locationSelect">{{locationSelect}}</option>
            <option value="">新北市</option>
            <option value="">桃園市</option>
            <option value="">台中市</option>
            <option value="">台南市</option>
            <option value="">高雄市</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <label for="">地址</label>
        <input id="name" type="text" placeholder="請輸入地址"  v-model="orderInfo.address"/>
      </div>
    </div>
  </div>
  <!--end of part 1-->

</template>

<script>
export default {
  data () {
    return {
      orderInfo: {
        gender: '',
        name: '',
        tel: '',
        email: '',
        location: '',
        address: ''
      },
      genderSelects: ['先生', '小姐'],
      locationSelects: ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣', '基隆市', '新竹市', '嘉義市']
    }
  },
  methods: {
    emitOrderInfo () {
      this.$emit('emitInfo', this.orderInfo)
    }
  },
  watch: {
    orderInfo: {
      handler: function () {
        this.emitOrderInfo()
      },
      deep: true
    }
  }
}
</script>
