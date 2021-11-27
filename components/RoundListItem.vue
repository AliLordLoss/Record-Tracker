<template>
  <div>
    <v-row align="center">
      <v-spacer />
      <v-col cols="12" md="8" xl="4">
        <h2>Round {{ id + 1 }}:</h2>
        <br />
        <div class="round-flex">
          <v-select
            outlined
            :items="items"
            v-model="first"
            :class="[
              first === 'm'
                ? ''
                : first !== 0
                ? first <= 6
                  ? 'my-blue'
                  : first <= 8
                  ? 'my-red'
                  : 'my-yellow'
                : '',
              'my-score',
            ]"
            @change="scoreChanged"
          ></v-select>
          <v-select
            outlined
            :items="items"
            v-model="second"
            :class="[
              second === 'm'
                ? ''
                : second !== 0
                ? second <= 6
                  ? 'my-blue'
                  : second <= 8
                  ? 'my-red'
                  : 'my-yellow'
                : '',
              'my-score',
            ]"
            @change="scoreChanged"
          ></v-select>
          <v-select
            outlined
            :items="items"
            v-model="third"
            :class="[
              third === 'm'
                ? ''
                : third !== 0
                ? third <= 6
                  ? 'my-blue'
                  : third <= 8
                  ? 'my-red'
                  : 'my-yellow'
                : '',
              'my-score',
            ]"
            @change="scoreChanged"
          ></v-select>
        </div>
      </v-col>
      <v-col cols="2">
        <h1>= {{ score }}</h1>
      </v-col>
      <v-spacer />
    </v-row>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      first: 0,
      second: 0,
      third: 0,
      items: ['m', 5, 6, 7, 8, 9, 10, 'x'],
    }
  },
  computed: {
    score() {
      const first =
        this.first === 'x' ? 10 : this.first === 'm' ? 0 : this.first
      const second =
        this.second === 'x' ? 10 : this.second === 'm' ? 0 : this.second
      const third =
        this.third === 'x' ? 10 : this.third === 'm' ? 0 : this.third

      return first + second + third
    },
  },
  methods: {
    scoreChanged() {
      this.$store.dispatch('setRoundScore', {
        roundId: this.id,
        score: this.score,
      })
    },
  },
}
</script>
