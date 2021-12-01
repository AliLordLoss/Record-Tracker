<template>
  <div>
    <div v-for="(r, index) in $store.state.qualy.roundScores" :key="index">
      <v-scroll-x-transition mode="out-in" hide-on-leave>
        <RoundListItem v-show="round === index + 1" :id="index + 1" />
      </v-scroll-x-transition>
    </div>

    <v-pagination
      v-model="round"
      :length="Number($store.state.qualy.roundsCount)"
      circle
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    />

    <br />
    <hr />
    <br />
    <v-row justify="center">
      <v-col cols="11">
        <h2 class="banner">
          Your score is
          <span class="score">{{ $store.getters.score }}</span> out of
          {{
            $store.state.qualy.roundsCount *
            $store.state.qualy.arrowsPerRound *
            10
          }}!
        </h2>
      </v-col>
    </v-row>
    <br />
    <hr />
    <br />
    <v-row justify="center">
      <v-col cols="11">
        <h2 class="banner">
          X + 10: {{ $store.state.qualy.x + $store.state.qualy[10] }}
        </h2>
      </v-col>
    </v-row>
    <br />
    <hr />
    <br />
    <v-row justify="center">
      <v-col cols="11">
        <h2 class="banner">10: {{ $store.state.qualy[10] }}</h2>
      </v-col>
    </v-row>
    <br />
    <hr />
    <br />

    <v-row justify="center" align="center">
      <v-btn color="info" @click="dialog = true"> back </v-btn>
    </v-row>

    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title> Are you sure? </v-card-title>
        <v-card-text> You will lose all your records! </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="startAnew">yes</v-btn>
          <v-btn color="green darken-1" text @click="closeDialog">no</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 1,
      dialog: false,
    }
  },
  methods: {
    getConfirm() {
      this.dialog = true
    },

    startAnew() {
      this.dialog = false
      this.$emit('end')
    },

    closeDialog() {
      this.dialog = false
    },
  },
}
</script>

<style scoped>
.banner {
  text-align: center;
  color: seagreen;
}
.score {
  text-decoration: underline;
}
</style>
