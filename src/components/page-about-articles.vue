<template>
  <div class="nes-container is-rounded is-dark">
    <p>我是<span class="en_lang">Swanine</span>，{{ articleHead }}</p>
    <p>{{ articleBody }}<span class="en_lang">CSS</span>{{ articleBodytail }}</p>
    <p>{{ articleFoot }}<span class="en_lang">github</span>上搜索一款“<span class="en_lang">Super Mario Bros</span>”的游戏源码，因为年代过于久远，再加上其文件本身是<span class="en_lang">nes</span>格式，所以没有找到，阴差阳错下，一个叫做<a href="https://nostalgic-css.github.io/NES.css/"><span class="en_lang">nes.css</span></a>的项目引起了我的注意,这是一个<span class="en_lang">fc</span>游戏、<span class="en_lang">nes</span>风格<span class="en_lang">(8bit)CSS</span>{{ articleFoottail }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    articleHead: String,
    articleBody: String,
    articleBodytail: String,
    articleFoot: String,
    articleFoottail: String
  }
})
</script>

<style scoped lang="scss">
.nes-container {
  p {
    font-size: 20px;
    .en_lang {
      font-size: 16px;
      vertical-align: sub;
    }
  }
}
</style>
