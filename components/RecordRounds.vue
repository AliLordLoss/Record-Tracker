<template>
  <div>
    <RoundListItem v-for="round in rounds" :key="round" :id="round" />
    <br />
    <v-row justify="center">
      <v-btn color="teal" @click="calcScore">calculate score</v-btn>
    </v-row>
    <v-row v-if="showScore" justify="center" align="center">
      <h1 class="banner">
        You scored <span class="score">{{ score }}</span> out of
        {{ 30 * this.$store.state.rounds }}
      </h1>
    </v-row>
    <br />
    <br />
    <v-row justify="center">
      <v-btn color="warning" @click="getConfirm">start a new record</v-btn>
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
      showScore: false,
      score: 0,
      dialog: false,
    }
  },
  computed: {
    rounds() {
      return [...Array(this.$store.state.rounds).keys()]
    },
  },
  methods: {
    calcScore() {
      this.showScore = true
      this.score = this.$store.getters.score
    },

    getConfirm() {
      this.dialog = true
    },

    startAnew() {
      this.dialog = false
      this.$store.dispatch('clearRecord')
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
