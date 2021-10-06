import { createStore } from 'vuex'
import cache from '@/utils/cache'
// import { IRootState } from './type'

export default createStore({
  state: {
    theme: ''
  },
  mutations: {
    changeTheme(state, theme) {
      state.theme = theme
      cache.setCache('theme', theme)
    }
  }
})
