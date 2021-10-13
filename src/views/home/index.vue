<template>
<!-- home主页 -->
<div class="_wrapper" ref="wrapperRef">
  <div class="home">
    <page-header v-bind="headerConfig" @darkTheme="changeTheme" @lightTheme="changeTheme"></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>

</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import pageHeader from '@/components/page-header.vue'
import pageFooter from '@/components/page-footer.vue'

import { headerConfig } from './config/header.config'

export default defineComponent({
  name: 'Home',
  setup () {
    // home页wrapperRef 容器
    const wrapperRef = ref<HTMLElement>()
    function changeTheme(q: string) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const d = wrapperRef.value?.setAttribute('data-theme', q)
      // console.log(d, '---' + wrapperRef.value)
    }

    const store = useStore()
    // 页面刷新后无法获取dom元素，添加mounted生命周期重新渲染主题
    onMounted(() => {
      const p = store.state.theme
      changeTheme(p)
    })

    const currentTheme = computed(() => store.state.theme)

    watch(currentTheme, (newValue: string) => {
      console.log(newValue)
      console.log(wrapperRef.value?.setAttribute('data-theme', newValue))
    })

    return {
      changeTheme,
      wrapperRef,
      headerConfig
    }
    /*
    const store = useStore()
    // 获取当前页面主题
    const currentTheme = ref(cache.getCache('theme') ?? 'dark')
    store.commit('changeTheme', currentTheme.value)

    // 根据当前页面主题绑定主题开关按钮状态
    const isChecked = function() {
      const currentTheme: string = cache.getCache('theme')

      if (currentTheme === 'dark' || '') {
        return false
      } else {
        return true
      }
    }
    const themeCheck = ref(isChecked())

    // 监听开关按钮状态 变更当前主题
    watch(themeCheck, (newValue) => {
      switch (newValue) {
        case false:
          cache.setCache('theme', 'dark')
          store.commit('changeTheme', 'dark')
          currentTheme.value = store.state.theme
          break
        case true:
          cache.setCache('theme', 'light')
          store.commit('changeTheme', 'light')
          currentTheme.value = cache.getCache('theme')
          break
      }
    })

    return {
      themeCheck,
      currentTheme
    }
    */
  },
  components: {
    pageHeader,
    pageFooter
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
._wrapper {
  min-height: 100vh;
  height: 100%;
  transition: background-color .3s ease-in-out;
}
.home{
  @include font_color($font_color_dark);

  @media screen and (max-width: 450px) {
    padding: 22px 6px;
  }

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 14px;
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 16px;
  }
  @media screen and (min-width: 401px) and (max-width: 450px) {
    font-size: 18px;
  }
  padding: 42px 20px;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
