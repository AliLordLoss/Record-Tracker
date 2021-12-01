<template>
  <v-form>
    <br />
    <v-row>
      <h1>Welcome!</h1>
    </v-row>
    <v-row>
      <h3>Please select an option below:</h3>
    </v-row>
    <br />
    <hr />
    <v-row align="center" justify="center">
      <v-radio-group v-model="config">
        <v-radio
          v-for="item in Object.keys(standards)"
          :key="item"
          :label="`standard ${item}m`"
          :value="item"
        ></v-radio>

        <v-radio label="custom" value="custom"></v-radio>
      </v-radio-group>
    </v-row>
    <v-expand-transition>
      <div v-if="config == 'custom'" class="box">
        <div class="box">
          <v-row justify="center" align="center">
            <v-col cols="4" class="center-text"> Distance: </v-col>
            <v-col cols="4"
              ><v-text-field
                ref="distance"
                v-model="qualy.distance"
                :rules="[validateDistance]"
              ></v-text-field
            ></v-col>
          </v-row>
        </div>
        <div class="box">
          <br />
          <v-row justify="center">
            <v-col cols="11" class="center-text">
              Select how many rounds you want to shoot:
            </v-col>
          </v-row>
          <br />
          <br />
          <v-row>
            <v-col cols="12">
              <v-slider
                v-model="qualy.roundsCount"
                thumb-color="blue"
                thumb-label="always"
                min="1"
                max="30"
              ></v-slider>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="11" class="center-text">
              or enter a number yourself (between 1 and 30):
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="4">
              <v-text-field v-model="qualy.roundsCount"></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="box">
          <br />
          <v-row justify="center">
            <v-col cols="11" class="center-text">
              How many arrows do you shoot each round?
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="4">
              <v-text-field v-model="qualy.arrowsPerRound"></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="box">
          <br />
          <v-row justify="center">
            <v-col cols="11" class="center-text">
              What kind of face are you using?
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="6">
              <v-select
                v-model="qualy.faceType"
                :items="[
                  { text: '18m face', value: '18' },
                  { text: '30m face', value: '30' },
                  { text: '70m face', value: '70' },
                ]"
              />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-expand-transition>
    <v-row>
      <v-spacer />
      <v-col>
        <v-btn color="success" @click="start"> let's shoot! </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      config: '18',
      qualy: {
        roundsCount: '12',
        distance: '30',
        arrowsPerRound: '3',
        faceType: '30',
      },
      standards: {
        18: {
          roundsCount: '10',
          distance: '18',
          arrowsPerRound: '3',
          faceType: '18',
        },
        30: {
          roundsCount: '12',
          distance: '30',
          arrowsPerRound: '3',
          faceType: '30',
        },
        50: {
          roundsCount: '6',
          distance: '50',
          arrowsPerRound: '6',
          faceType: '30',
        },
        70: {
          roundsCount: '6',
          distance: '70',
          arrowsPerRound: '6',
          faceType: '70',
        },
      },
    }
  },
  methods: {
    validateDistance(dist) {
      return isNaN(dist) || isNaN(parseFloat(dist))
        ? 'must be a number'
        : dist > 70 || dist <= 0
        ? 'between 1 and 70'
        : true
    },
    start() {
      if (this.config !== 'custom') this.qualy = this.standards[this.config]
      if (this.validateDistance(this.qualy.distance) !== true) {
        this.$vuetify.goTo(this.$refs.distance)
        return
      }
      this.$store.dispatch('setQualy', { qualy: this.qualy })
      this.$emit('submit')
    },
  },
}
</script>

<style>
.box {
  border-style: dashed;
  border-width: 2px;
  border-radius: 5px;
  margin: 15px 0 15px 0;
  padding: 0 15px 0 15px;
}
.center-text {
  text-align: center;
}
</style>