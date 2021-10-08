<template>
  <header>
    <div class="page-header">
      <div class="header-left">
        <router-link to="/home">
          <img src="~@/assets/image/swanine01.jpg">
          <!-- <button type="button" class="nes-btn is-primary">Primary</button> -->
        </router-link>
      </div>
      <!-- navbar -->
      <nav class="header-right">
        <div class="scroll">
          <a href="http://swanine.xyz/blog">Blog</a>
          <template v-for="navItem in navData" :key="navItem.name">
            <router-link :to="navItem.herf">
              <text class="nes-text nes-pointer" :class="navItem.type">{{navItem.name}}</text>
            </router-link>
          </template>
        </div>

        <label class="theme-switch">
          <button type="button" class="nes-btn" @click="changeCheck">
            <i class="nes-icon is-large star nes-pointer" :class="theme"></i>
            <input v-model="themeCheck" type="checkbox" class="nes-checkbox"/>
          </button>
        </label>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import cache from '@/utils/cache'

export default defineComponent({
  emits: ['darkTheme', 'lightTheme'],
  props: {
    navData: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const store = useStore()

    // 获取当前页面主题
    const currentTheme = ref(cache.getCache('theme') ?? 'dark')
    store.commit('changeTheme', currentTheme.value)

    // 根据当前页面主题绑定主题开关按钮状态
    const isChecked = function() {
      const currentThemeCache: string = store.state.theme

      if (currentThemeCache === 'dark' || '') {
        return false
      } else {
        return true
      }
    }
    const themeCheck = ref(isChecked())

    function changeCheck() {
      themeCheck.value = !themeCheck.value
    }

    // 页面主题按钮样式class
    const isTransparent = function () {
      if (currentTheme.value === 'dark') {
        return ''
      } else {
        return 'is-transparent'
      }
    }
    const theme = ref(isTransparent())

    // 监听开关按钮状态 变更当前主题
    watch(themeCheck, (newValue) => {
      switch (newValue) {
        case false:
          cache.setCache('theme', 'dark') // 保存主题至本地存储
          store.commit('changeTheme', 'dark') // 保存主题至store.state
          theme.value = '' // 更改主题按钮样式class
          currentTheme.value = store.state.theme // 获取store.state保存的主题
          emit('darkTheme', currentTheme.value) // 向父组件传递更改主题事件和主题参数
          break
        case true:
          cache.setCache('theme', 'light')
          store.commit('changeTheme', 'light')
          theme.value = 'is-transparent'
          currentTheme.value = cache.getCache('theme')
          emit('lightTheme', currentTheme.value)
          break
      }
    }, {
      immediate: true
    })

    return {
      themeCheck,
      currentTheme,
      theme,
      changeCheck
    }
  }
})
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  overflow: hidden;
  @media screen and (min-width: 320px) and (max-width:374px) {
    flex-direction: column;
    gap: 12px;
    .header-right {
      font-size: 20px;
      .scroll {
        gap: 16px !important;
        height: 33px;
        width: 280px;
        overflow-x: scroll;
        a:nth-child(1) {
          padding-left: 33%;
        }
      }
      .theme-switch {
        display: none;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    flex-direction: column;
    gap: 12px;
    .header-right {
      font-size: 22px;
      .scroll {
        gap: 16px !important;
        height: 33px;
        width: 280px;
        overflow-x: scroll;
        a:nth-child(1) {
          padding-left: 33%;
        }
      }
      .theme-switch {
        display: none;
      }
    }
  }

  @media screen and (min-width: 401px) and (max-width: 450px) {
    flex-direction: column;
    gap: 12px;
    .header-right {
      font-size: 24px;
      .scroll {
        gap: 16px !important;
        height: 33px;
        width: 280px;
        overflow-x: scroll;
        a:nth-child(1) {
          padding-left: 33%;
        }
      }
      .theme-switch {
        display: none;
      }
    }
  }
  .header-left {
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 50px;
    }
  }
  .header-right {
    display: flex;
    gap: 36px;
    .scroll {
      display: flex;
      align-items: center;
      gap: 36px;
    }
    .theme-switch {
      margin: 0;
      .nes-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        .nes-icon.is-large.star {
        margin: 0;
        padding: 0;
        transform: scale(1);
        }
        .nes-checkbox {
          display: none;
        }
      }
    }
  }
}
</style>
