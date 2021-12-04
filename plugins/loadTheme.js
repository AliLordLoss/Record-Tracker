import colors from 'vuetify/es5/util/colors'

export default ({ $vuetify }) => {
  const theme = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme'))
    : { dark: true, color: 'blue' }

  $vuetify.theme.themes.dark.primary = colors[theme.color].darken2
  $vuetify.theme.themes.light.primary = colors[theme.color].darken2
  $vuetify.theme.dark = theme.dark
}