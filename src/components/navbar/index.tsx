import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  setup() {
    return () => {
      return (
        <header class="navbar-wrap">
          <div class="navbar">
            <div class="logo-wrap">
              <a href="#">Swanine</a>
            </div>
            <div class="menu-wrap">
              <nav class="menu-cantainer"></nav>
              <button class="menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </header>
      )
    }
  }
})
