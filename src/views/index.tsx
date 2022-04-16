import { defineComponent } from 'vue'
import { Navbar, Section } from '../components/index'

export default defineComponent({
  setup() {
    return () => {
      return (
        <main>
          <Navbar></Navbar>
          <Section></Section>
        </main>
      )
    }
  }
})
