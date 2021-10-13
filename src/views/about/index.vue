<template>
  <main class="overview">
    <page-title v-bind="titleConfig"></page-title>
    <section>
      <page-about-aside v-bind="articles"></page-about-aside>
      <page-about></page-about>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTitle from '@/components/page-title.vue'
import { titleConfig } from './config/title.config'
import pageAboutAside from '@/components/page-about-articles.vue'
import pageAbout from '@/components/page-about.vue'
import { articles } from './config/articles.config'

export default defineComponent({
  setup() {
    return {
      titleConfig,
      articles
    }
  },
  components: {
    pageTitle,
    pageAbout,
    pageAboutAside
  }
})
</script>

<style lang="scss" scoped>
section {
  margin-top: 16px;
}
</style>
