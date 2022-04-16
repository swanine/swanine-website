import { defineComponent } from 'vue'
import DivTransition from '../transition/index'
import ProgressBar from '../progress-bar/index'

export default defineComponent({
  setup() {
    return () => {
      return (
        <section>
          <DivTransition></DivTransition>
          <ProgressBar></ProgressBar>
        </section>
      )
    }
  }
})
