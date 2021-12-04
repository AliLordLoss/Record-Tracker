export const state = () => ({
  qualy: {
    roundsCount: 12,
    arrowsPerRound: 3,
    distance: 30,
    roundScores: new Array(12).fill(new Array(3).fill(0)),
    faceType: 30,
    x: 0,
    10: 0,
  },
  showScore: true,
  shooting: false,

  arminLover: false,
  passwordFound: false,
})

export const getters = {
  score: state => state.qualy.roundScores.reduce((acc, item) => acc + item.reduce((acc2, item2) => acc2 + (item2 === 'x' ? 10 : item2 === 'm' ? 0 : item2), 0), 0),
}

export const actions = {
  clearRecord({ commit }) {
    commit('CLEAR')
  },

  setQualy({ commit }, { qualy }) {
    commit('SET_QUALY', { qualy })
  },

  setScore({ commit }, { round, arrow, score }) {
    commit('SET_SCORE', { round, arrow, score })
  },

  showArmin({ commit }) {
    commit('I_LOVE_ARMIN')
  },

  hideArmin({ commit }) {
    commit('I_DONT_LOVE_ARMIN')
  },

  passwordFound({ commit }) {
    commit('PASSWORD_FOUND')
  },

  setShowScore({ commit }, { showScore }) {
    commit('SET_SHOW_SCORE', { showScore })
  },

  setShooting({ commit }, { shooting }) {
    commit('SET_SHOOTING', { shooting })
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
      roundScores: new Array(Number(qualy.roundsCount)).fill(null).map(() => new Array(Number(qualy.arrowsPerRound)).fill(0)),
      x: 0,
      10: 0,
    }
  },

  SET_SCORE(state, { round, arrow, score }) {
    if (score === 'x' || score === 10)
      this._vm.$set(state.qualy, score, state.qualy[score] + 1)

    const s = state.qualy.roundScores[round][arrow]
    if (s === 'x' || s === 10)
      this._vm.$set(state.qualy, s, state.qualy[s] - 1)

    this._vm.$set(state.qualy.roundScores[round], arrow, score)
  },

  I_LOVE_ARMIN(state) {
    state.arminLover = true
  },

  I_DONT_LOVE_ARMIN(state) {
    state.arminLover = false
  },

  PASSWORD_FOUND(state) {
    state.passwordFound = true
  },

  SET_SHOW_SCORE(state, { showScore }) {
    state.showScore = showScore
  },

  SET_SHOOTING(state, { shooting }) {
    state.shooting = shooting
  },
}
