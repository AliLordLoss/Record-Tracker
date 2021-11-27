export const state = () => ({
  rounds: 12,
  roundScores: new Array(12).fill(0)
})

export const getters = {
  score: state => state.roundScores.reduce((acc, item) => acc + item, 0)
}

export const actions = {
  beginRecording({ commit }, { rounds }) {
    commit('SET_ROUNDS', { rounds })
  },

  setRoundScore({ commit }, { roundId, score }) {
    commit('SET_ROUND_SCORE', { roundId, score })
  },

  clearRecord({ commit }) {
    commit('CLEAR_STATE')
  }
}

export const mutations = {
  SET_ROUNDS(state, { rounds }) {
    state.rounds = rounds
    state.roundScores = new Array(rounds).fill(0)
  },

  SET_ROUND_SCORE(state, { roundId, score }) {
    this._vm.$set(state.roundScores, roundId, score)
  },

  CLEAR_STATE(state) {
    state.rounds = 12
    state.roundScores = new Array(12).fill(0)
  }
}
