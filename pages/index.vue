<template>
  <v-container>
    <RecordRounds v-if="begin" @end="end" />
    <RecordForm v-else @submit="start" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      begin: false,
    }
  },
  methods: {
    start() {
      this.begin = true
    },

    end() {
      this.$store.dispatch('clearRecord')
      this.begin = false
    },
  },
}
</script>
