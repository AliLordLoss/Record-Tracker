<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed app>
      <div class="theme-chooser">
        <v-icon> mdi-weather-{{ dark ? 'sunny' : 'night' }} </v-icon>
        <v-switch v-model="dark" @click="toggleTheme"></v-switch>
      </div>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      dark: true,
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.dark
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