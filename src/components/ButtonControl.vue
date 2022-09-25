<template>
  <div class="btn" id="btn-select">
    <button
      type="button"
      class="btn-previous"
      v-show="stepper !== 1"
      @click.prevent="preStep"
    >
      ← 上一步
    </button>
    <button type="button" class="btn-next" @click.prevent="nextStep">
      {{ nextButton }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stepper: 1,
      nextButton: '下一步 →'
    }
  },
  methods: {
    nextStep () {
      if (this.stepper === 3) {
        this.stepper = 3
      } else {
        this.stepper++
      }
    },
    preStep () {
      if (this.stepper !== 1) {
        this.stepper--
      } else {
        this.stepper = 1
      }
    },
    // stepper 傳父層
    controlStepNum () {
      this.$emit('controlStepNum', this.stepper)
    }
  },

  // 監聽stepper
  watch: {
    stepper: {
      handler: function () {
        if (this.stepper === 3) {
          this.nextButton = '結帳'
        } else {
          this.nextButton = '下一步 →'
        }
        this.controlStepNum()
      },
      deep: true
    }
  }
}
</script>
