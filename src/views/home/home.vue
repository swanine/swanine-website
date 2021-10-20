<template>
  <main class="overview">
    <page-title v-bind="titleConfig"></page-title>
    <page-section v-bind="sectionConfig"></page-section>
    <progress class="nes-progress is-pattern" value="100" max="100"></progress>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTitle from '@/components/page-title.vue'
import pageSection from '@/components/page-section.vue'
import { sectionConfig } from './config/section.config'
import { titleConfig } from './config/title.config'

export default defineComponent({
  setup() {
    return {
      sectionConfig,
      titleConfig
    }
  },
  components: {
    pageSection,
    pageTitle
  }
})
</script>

<style lang="scss">
.overview {
  padding: 10px 0 22px;
  .nes-progress {
    margin: 16px 0;
    height: 17px;
  }
}
</style>
