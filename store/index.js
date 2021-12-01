export const state = () => ({
  qualy: {
    roundsCount: 12,
    arrowsPerRound: 3,
    distance: 30,
    roundScores: new Array(12).fill(new Array(3).fill(0)),
    faceType: 30
  }
})

export const getters = {
  score: state => state.qualy.roundScores.reduce((acc, item) => acc + item.reduce((acc2, item2) => acc2 + item2, 0), 0)
}

export const actions = {
  clearRecord({ commit }) {
    commit('CLEAR')
  },

  setQualy({ commit }, { qualy }) {
    commit('SET_QUALY', { qualy })
  },
}

export const mutations = {
  CLEAR(state) {
    state.qualy = {
      roundsCount: 12,
      arrowsPerRound: 3,
      distance: 30,
      roundScores: new Array(12).fill(new Array(3).fill(0)),
      faceType: 30
    }
  },

  SET_QUALY(state, { qualy }) {
    state.qualy = {
      ...qualy,
      roundScores: new Array(Number(qualy.roundsCount)).fill(new Array(Number(qualy.arrowsPerRound)).fill(0)),
    }
  },
}
