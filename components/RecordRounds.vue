<template>
  <div>
    <div v-for="(r, index) in $store.state.qualy.roundScores" :key="index">
      <v-scroll-x-transition mode="out-in" hide-on-leave>
        <RoundListItem
          v-show="round === index + 1"
          :id="index + 1"
          @done="nextRound"
          @good-job="goodJob = true"
        />
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
    <v-expand-transition>
      <div v-if="$store.state.showScore">
        <v-row
          justify="center"
          :style="`color: ${$vuetify.theme.themes.dark.primary}`"
        >
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
        <v-row
          justify="center"
          :style="`color: ${$vuetify.theme.themes.dark.primary}`"
        >
          <v-col cols="11">
            <h2 class="banner">
              X + 10: {{ $store.state.qualy.x + $store.state.qualy[10] }}
            </h2>
          </v-col>
        </v-row>
        <br />
        <hr />
        <br />
        <v-row
          justify="center"
          :style="`color: ${$vuetify.theme.themes.dark.primary}`"
        >
          <v-col cols="11">
            <h2 class="banner">
              X: {{ $store.state.qualy.x }}, 10: {{ $store.state.qualy[10] }}
            </h2>
          </v-col>
        </v-row>
        <br />
        <hr />
        <br />
      </div>
    </v-expand-transition>

    <v-row justify="space-around" align="center">
      <v-btn color="warning" @click="getQuitConfirm"> quit </v-btn>
      <v-btn color="primary" @click="getReportConfirm"> finsih </v-btn>
    </v-row>

    <v-dialog v-model="quit" persistent>
      <v-card>
        <v-card-title> Are you sure? </v-card-title>
        <v-card-text> You will lose all your records! </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="startAnew"> yes </v-btn>
          <v-btn color="green darken-1" text @click="closeQuitDialog">
            no
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="report" persistent>
      <v-card>
        <v-card-title> Are you sure? </v-card-title>
        <v-card-text>
          You can't edit your scores after you get your report!
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="getReport"> yes </v-btn>
          <v-btn color="green darken-1" text @click="closeReportDialog">
            no
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="goodJob" :timeout="5000" color="primary">
      <h2>Good Fucking Job!</h2>
    </v-snackbar>
    <v-snackbar v-model="roundFinish" :timeout="5000" dir="rtl" color="primary">
      <h2>خسته نباشی دلاور :)</h2>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 1,
      quit: false,
      report: false,
      goodJob: false,
      roundFinish: false,
    }
  },
  methods: {
    getQuitConfirm() {
      this.quit = true
    },

    startAnew() {
      this.quit = false
      this.$emit('end')
    },

    closeQuitDialog() {
      this.quit = false
    },

    getReportConfirm() {
      this.report = true
    },

    getReport() {
      this.report = false
      this.$emit('report')
    },

    closeReportDialog() {
      this.report = false
    },

    nextRound() {
      this.roundFinish = true
      const temp =
        this.round === Number(this.$store.state.qualy.roundsCount)
          ? this.round
          : this.round + 1
      setTimeout(() => {
        this.round = temp
      }, 1000)
    },
  },
}
</script>

<style scoped>
.banner {
  text-align: center;
}
.score {
  text-decoration: underline;
}
</style>
