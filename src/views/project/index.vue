<template>
  <main class="overview">
    <page-title v-bind="titleConfig"></page-title>
    <page-project></page-project>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTitle from '@/components/page-title.vue'
import { titleConfig } from './config/title.config'

import pageProject from '@/components/page-project.vue'

export default defineComponent({
  setup() {
    return {
      titleConfig
    }
  },
  components: {
    pageTitle,
    pageProject
  }
})
</script>
