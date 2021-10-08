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
    <p>Copyright © 2021 • Swanine</p>
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
p {
  margin: 0;
  padding-bottom: 10px;
  font-size: 10px;
  text-align: center;
}
</style>
