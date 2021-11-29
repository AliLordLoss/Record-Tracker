<template>
  <v-expand-transition>
    <v-row
      justify="center"
      align="center"
      :class="['round', `${$vuetify.theme.dark ? 'dark' : 'light'}-border`]"
    >
      <v-spacer />
      <v-col cols="12" md="8" xl="4">
        <h2>Round {{ id + 1 }} of {{ roundsCount }}:</h2>
        <br />
        <div class="round-flex">
          <v-select
            v-model="first"
            outlined
            :items="items"
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
            v-model="second"
            outlined
            :items="items"
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
            v-model="third"
            outlined
            :items="items"
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
    </v-row>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    roundsCount: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      first: 0,
      second: 0,
      third: 0,
      items: ['x', 10, 9, 8, 7, 6, 5, 'm'],
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
      if (this.first && this.second && this.third) this.$emit('done')
    },
  },
}
</script>

<style scoped>
.round {
  border-style: dashed;
  border-width: 2px;
  border-radius: 5px;
  margin-bottom: 25px;
}
.dark-border {
  border-color: white;
}
.light-border {
  border-color: black;
}
</style>
