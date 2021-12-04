<template>
  <v-container>
    <RecordRounds v-if="begin" @end="end" @report="showReport" />
    <ReportScores v-else-if="report" @end="end" />
    <RecordForm v-else @submit="start" />
  </v-container>
</template>

<script>
import ReportScores from '~/components/ReportScores.vue'
export default {
  components: { ReportScores },
  data() {
    return {
      begin: false,
      report: false,
    }
  },
  methods: {
    start() {
      this.begin = true
      this.$store.dispatch('setShooting', { shooting: true })
    },

    end() {
      this.$store.dispatch('clearRecord')
      this.$store.dispatch('setShooting', { shooting: false })
      this.report = false
      this.begin = false
    },

    showReport() {
      this.$store.dispatch('setShooting', { shooting: false })
      this.report = true
      this.begin = false
    },
  },
}
</script>
