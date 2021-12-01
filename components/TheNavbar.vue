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
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.dark
    },
    changeColor() {
      this.$vuetify.theme.themes.dark.primary = colors[this.color].darken2
      this.$vuetify.theme.themes.light.primary = colors[this.color].darken2
    },
  },
}
</script>

<style scoped>
.theme-chooser {
  display: flex;
  justify-content: center;
}
</style>