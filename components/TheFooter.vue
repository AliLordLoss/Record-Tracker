<template>
  <v-footer absolute app>
    <h5 class="footer-text">
      Copyright
      <span
        :style="`font-size: ${size}px`"
        @touchstart.prevent="touchStart"
        @touchend.prevent="touchEnd"
      >
        &copy;
      </span>
      2021 Ghanat Inc. All rights reserved.
    </h5>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      size: 20,
      interval: undefined,
    }
  },
  methods: {
    touchStart() {
      if (!this.$store.state.passwordFound && !this.interval) {
        this.interval = setInterval(() => {
          if (this.size >= 30) {
            clearInterval(this.interval)
            this.$emit('overlay')
            this.interval = undefined
            return
          }
          this.size += 0.5
        }, 200)
      }
    },

    touchEnd() {
      clearInterval(this.interval)
      this.interval = undefined
      this.size = 20
    },
  },
}
</script>

<style scoped>
.footer-text {
  cursor: default;
  margin: auto;
  display: flex;
  align-items: center;
}
</style>