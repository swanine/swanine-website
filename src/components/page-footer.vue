<template>
  <footer>
    <div class="icon-list">
      <a href="https://twitter.com/swanine3">
        <!-- twitter -->
        <i class="nes-icon twitter is-large"></i>
      </a>

      <a href="https://www.instagram.com/swanines_09/">
        <!-- instagram -->
        <i class="nes-icon instagram is-large"></i>
      </a>

      <a href="https://github.com/swanine">
        <!-- github -->
        <i class="nes-icon github is-large"></i>
      </a>
    </div>
    <div class="footer-tag">
      <p>Copyright © 2021 • Swanine</p>
      <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2021011456号</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.icon-list {
  display: flex;
  justify-content: center;
  gap: 34px;
  height: 50px;
  .nes-icon {
    margin: 0;
    transform: scale(2.2);
  }
}

.footer-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 10px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media screen and (min-width: 320px) and (max-width:450px) {
    flex-direction: column;
    align-items: center;
  }
}
p {
  margin: 0;
  font-size: 10px;
}
</style>
