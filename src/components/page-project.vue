<template>
  <div class="project-list">
    <div class="nes-container is-dark with-title" @click="locationPage(pageHref.SManagement)">
      <p>SWAN-Management</p>
      <p><span class="cn-text">基于</span>Vue3、Vuex、VueRouter、ElementPlus、TypeScript<span class="cn-text">等后台系统解决方案</span></p>
    </div>

    <div class="nes-container is-dark with-title" @click="locationPage(pageHref.SPlayer)">
      <p>SWAN-Player</p>
      <p>Vue3+Vuex，web-app<span class="cn-text">音乐播放器，云音乐后端接口🎶🎵</span></p>
    </div>

    <div class="nes-container is-dark with-title" @click="locationPage(pageHref.SCss)">
      <p>SWAN-CSS</p>
      <p><span class="cn-text">一些有趣的<span class="en-text">css</span>效果</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { locationPage } from '@/hooks/location'

export default defineComponent({
  setup() {
    enum pageHref {
      SManagement = 'https://github.com/swanine/vue-ts-cms',
      SPlayer = 'https://github.com/swanine/swanine-music',
      SCss = 'https://github.com/swanine/swan-css'
    }
    return {
      locationPage,
      pageHref
    }
  }
})
</script>

<style scoped lang="scss">
@keyframes breathe {
  to {
    transform: scale(1.03);
  }
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 16px;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    gap: 8px;
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    gap: 8px;
  }

  @media screen and (min-width: 401px) and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    gap: 8px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    gap: 8px;
  }
  .nes-container {
    @media screen and (min-width: 401px) and (max-width: 450px) {
      font-size: 20px;
    }
    &:hover {
      cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer;
      animation-name: breathe;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .cn-text {
      font-size: 25px;
      vertical-align: bottom;
      @media screen and (min-width: 320px) and (max-width: 374px) {
        font-size: 18px;
      }

      @media screen and (min-width: 375px) and (max-width: 400px) {
        font-size: 21px;
      }

      @media screen and (min-width: 401px) and (max-width: 450px) {
        font-size: 23px;
      }
    }
    .en-text {
      font-size: 18px;
      vertical-align: bottom;
      @media screen and (min-width: 320px) and (max-width: 374px) {
        font-size: 18px;
      }
    }
  }
}
</style>
