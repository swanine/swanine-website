<template>
  <section>
    <div class="nes-container is-rounded is-dark">
      <p>{{sectionText}}</p>
      <p>I am {{name}}{{sectionAbout}}</p>
      <p>I am interested in Web frontend and design and am currently learning about related technologies such as TypeScript.
        I plan to make a very interesting color and gradient application for painting
      </p>
      <p>Outside of programming, I enjoy drawing, skiing, chili and Hearthstone.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    sectionText: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'Swanine'
    },
    sectionAbout: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
section {
  @include font_color($font_color_dark);
  transition: color .4s ease-in-out;
  margin-top: 16px;
  line-height: 1.7;
  & p:nth-child(2) {
    position: relative;
  }
  p {
    margin-bottom: 22px;
  }
}
</style>
