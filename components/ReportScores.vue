<template>
  <div class="report" :style="`color: ${$vuetify.theme.themes.dark.primary}`">
    <div v-for="(round, i) in $store.state.qualy.roundScores" :key="i">
      <div class="report-round">
        round <span class="round-num">{{ i + 1 }}</span
        >:
        <strong style="font-size: 20px" v-for="(score, j) in round" :key="j"
          ><span
            :class="[
              `report-${
                score === 'x' || score > 8
                  ? 'yellow'
                  : score > 6
                  ? 'red'
                  : score > 4
                  ? 'blue'
                  : score > 2
                  ? 'white'
                  : score > 0
                  ? 'black'
                  : 'miss'
              }`,
              `report-score-${$vuetify.theme.dark ? 'dark' : 'light'}`,
            ]"
            >{{ score }}</span
          >
        </strong>
        ={{
          round.reduce(
            (acc, s) => acc + (s === 'x' ? 10 : s === 'm' ? 0 : s),
            0
          )
        }}
      </div>
      <hr />
    </div>
    <h2 style="text-align: center">
      score: {{ $store.getters.score }} out of
      {{
        $store.state.qualy.roundsCount * $store.state.qualy.arrowsPerRound * 10
      }}
    </h2>
    <h3 class="banner">
      X + 10: {{ $store.state.qualy.x + $store.state.qualy[10] }}, X:
      {{ $store.state.qualy.x }}, 10: {{ $store.state.qualy[10] }}
    </h3>

    <v-btn color="primary" @click="getConfirm"> quit </v-btn>

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

<style>
.report {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
}
.round-num {
  text-decoration: underline;
}
.report-round {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>