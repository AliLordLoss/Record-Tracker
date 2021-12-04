<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed app>
      <div class="theme-chooser">
        <v-icon> mdi-weather-{{ dark ? 'sunny' : 'night' }} </v-icon>
        <v-switch v-model="dark" @change="toggleTheme"></v-switch>
      </div>
      <div class="theme-chooser">
        <v-radio-group v-model="color" @change="changeColor">
          <v-radio label="blue" value="blue"> </v-radio>
          <v-radio label="purple" value="purple"> </v-radio>
          <v-radio label="green" value="green"> </v-radio>
        </v-radio-group>
      </div>
      <div v-if="$store.state.shooting" class="theme-chooser">
        <div style="max-width: 100px; text-align: center">
          show scores while shooting:
        </div>
        <v-switch v-model="score" @change="toggleScore"></v-switch>
      </div>
      <div v-if="$store.state.passwordFound" class="theme-chooser">
        <v-icon style="color: red">
          mdi-heart{{ show ? '' : '-broken' }}
        </v-icon>
        <v-switch v-model="show" @change="toggleArmin"></v-switch>
      </div>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  data() {
    return {
      drawer: false,
      dark: true,
      color: 'blue',
      show: false,
      score: true,
    }
  },
  mounted() {
    this.loadTheme()
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.dark
      this.saveTheme()
    },
    changeColor() {
      this.$vuetify.theme.themes.dark.primary = colors[this.color].darken2
      this.$vuetify.theme.themes.light.primary = colors[this.color].darken2
      this.saveTheme()
    },
    saveTheme() {
      localStorage.setItem(
        'theme',
        JSON.stringify({ dark: this.dark, color: this.color, show: this.show })
      )
    },
    loadTheme() {
      const { color, dark, show } = localStorage.getItem('theme')
        ? JSON.parse(localStorage.getItem('theme'))
        : { dark: true, color: 'blue', show: false }

      this.color = color
      this.dark = dark
      this.show = show

      this.toggleArmin()
    },
    toggleArmin() {
      if (this.show) {
        this.$store.dispatch('showArmin')
      } else {
        this.$store.dispatch('hideArmin')
      }
      this.saveTheme()
    },
    toggleScore() {
      this.$store.dispatch('setShowScore', { showScore: this.score })
    },
  },
}
</script>

<style scoped>
.theme-chooser {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>