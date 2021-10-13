<template>
  <main class="overview">
    <page-title v-bind="titleConfig"></page-title>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTitle from '@/components/page-title.vue'
import { titleConfig } from './config/title.config'

export default defineComponent({
  setup() {
    return {
      titleConfig
    }
  },
  components: {
    pageTitle
  }
})
</script>
