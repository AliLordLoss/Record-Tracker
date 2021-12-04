<template>
  <div class="box">
    <div>Round {{ id }} of {{ $store.state.qualy.roundsCount }}</div>
    <v-row justify="center" align="center">
      <v-col v-for="(arrow, index) in arrows" :key="index" cols="4">
        <v-select
          v-model="arrows[index]"
          :items="scores"
          :class="[
            'my-score',
            arrows[index] == 'x' || arrows[index] > 8
              ? 'my-yellow'
              : arrows[index] > 6
              ? 'my-red'
              : arrows[index] > 4
              ? 'my-blue'
              : arrows[index] > 2
              ? 'my-black'
              : arrows[index] > 0
              ? 'my-white'
              : '',
          ]"
          @change="scoreChanged(index)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import faceScores from '~/static/faceScores.json'

export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      arrows: [...this.$store.state.qualy.roundScores[this.id - 1]],
      scores: faceScores[this.$store.state.qualy.faceType],
    }
  },
  methods: {
    scoreChanged(i) {
      this.$store.dispatch('setScore', {
        round: this.id - 1,
        arrow: i,
        score: this.arrows[i],
      })

      if (!this.arrows.includes(0)) this.$emit('done')

      if (this.arrows[i] === 'x') this.$emit('good-job')
    },
  },
}
</script>
