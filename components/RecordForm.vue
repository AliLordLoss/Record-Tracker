<template>
  <v-form>
    <br />
    <v-row>
      <v-col cols="12">
        <v-slider
          v-model="rounds"
          label="Rounds"
          thumb-color="blue"
          thumb-label="always"
          min="1"
          max="20"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col>
        <v-btn color="success" @click="start"> start shooting! </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      rounds: 12,
    }
  },
  methods: {
    start() {
      this.$store.dispatch('beginRecording', { rounds: this.rounds })
      this.$emit('submit')
    },
  },
}
</script>

<style>
</style>