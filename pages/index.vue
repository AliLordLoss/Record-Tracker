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
  computed: {},
  methods: {
    start() {
      this.begin = true
    },

    end() {
      this.begin = false
      this.$store.dispatch('clearRecord')
    },
  },
}
</script>
