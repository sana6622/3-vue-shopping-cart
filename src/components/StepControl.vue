<template>
  <div class="step-panel">

    <div class="step" :class="{active:stepper===1,checked:stepper>=2}">
      <div class="step-circle" ></div>
      <span class="step-des">寄送地址</span>
    </div>

    <div class="step " :class="{active:stepper===2,checked:stepper===3}">
      <div class="step-circle"></div>
      <span class="step-des">運送方式</span>
    </div>

    <!--<div class="step-line"></div>-->

    <div class="step " :class="{active:stepper===3}">
      <div class="step-circle"></div>
      <span class="step-des">付款資訊</span>
    </div>

    <div class="step-line1 "  :class="{active:stepper>=1}"></div>
    <div class="step-line2 "  :class="{active:stepper>=2}"></div>

  </div>
</template>

<script>
export default {
  props: {
    stepper: {
      type: Number,
      require: true
    }
  }

}
</script>
