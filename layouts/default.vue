<template>
  <v-app>
    <TheNavbar ref="navbar" />
    <v-main
      :class="
        $store.state.arminLover
          ? `my-${$vuetify.theme.dark ? 'dark' : 'light'}-app`
          : ''
      "
    >
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter @overlay="overlay = true" />
    <v-overlay :absolute="true" opacity="0.9" :value="overlay">
      <div class="overlay">
        <v-text-field
          v-model="password"
          label="say my name"
          outlined
          @input="checkPassword"
        ></v-text-field>
        <v-expand-transition>
          <h2 v-if="godDamnRight">you're god damn right</h2>
        </v-expand-transition>
        <br />
        <v-btn color="error" @click="overlay = false"> go back </v-btn>
      </div>
    </v-overlay>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      password: '',
      godDamnRight: false,
    }
  },
  mounted() {
    const armin = JSON.parse(localStorage.getItem('passwordFound'))
    if (armin) {
      this.$store.dispatch('passwordFound')
    }
  },
  methods: {
    checkPassword() {
      if (this.password.toLowerCase() === 'armin') {
        this.godDamnRight = true
        setTimeout(() => {
          this.overlay = false
          this.$store.dispatch('showArmin')
          this.$store.dispatch('passwordFound')
          localStorage.setItem('passwordFound', true)
          const theme = localStorage.getItem('theme')
            ? JSON.parse(localStorage.getItem('theme'))
            : { dark: true, color: 'blue' }
          localStorage.setItem(
            'theme',
            JSON.stringify({ ...theme, show: true })
          )
          this.$refs.navbar.loadTheme()
        }, 2000)
      }
    },
  },
}
</script>

<style scoped>
.overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>