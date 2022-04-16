import { createStore } from 'vuex'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      pageIndex: 1,
      currentIndex: 1
    }
  },
  mutations: {
    setPageIndex(state, val: number) {
      state.pageIndex = val
    },
    setCurrentIndex(state, val: number) {
      state.currentIndex = val
    }
  },
  getters: {
    getPageIndex(state) {
      return state.pageIndex
    },
    getCurrentIndex(state) {
      return state.currentIndex
    }
  }
})

export default store
