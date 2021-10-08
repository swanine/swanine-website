<template>
  <div class="title">
    <h1>{{ titleName }}</h1>
    <!-- coin -->
    <div class="icon" :class="{ bounce: bounceClass }" @click="bounce">
      <i
      v-if="showIcon"
      class="nes-icon is-large"
      :class="iconName"
    ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const bounceClass = ref(false)
    const store = useStore()
    const currentTheme = computed(() => store.state.theme)

    const bounce = () => {
      bounceClass.value = true
      switch (currentTheme.value) {
        case 'dark':
          store.commit('changeTheme', 'light')
          break
        case 'light':
          store.commit('changeTheme', 'dark')
          break
      }
      setTimeout(() => {
        bounceClass.value = false
      }, 1201)
    }
    return { bounce, bounceClass }
  },
  props: {
    showIcon: {
      type: Boolean,
      default: true
    },
    titleName: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default: 'coin'
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

@keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -60px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -24px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -8px, 0) scaleY(1.02);
  }
}
.title {
  display: flex;
  gap: 10px;
  position: relative;
  h1 {
    @include title_color($title_color_dark);
    margin: 0;
    font-size: 3rem;
    @media screen and (max-width: 450px) {
      margin-left: 8px;
    }

    @media screen and (min-width: 320px) and (max-width: 374px) {
      font-size: 1.9rem;
    }

    @media screen and (min-width: 375px) and (max-width: 400px) {
      font-size: 2.3rem;
    }

    @media screen and (min-width: 401px) and (max-width: 450px) {
      font-size: 2.7rem;
    }
    transition: color 0.5s ease-in-out;
    text-shadow: 3px 3px 0px #F178B6, -2px -2px 0px #00FFF0;
  }
  .icon {
    position: relative;
    width: 64px;
    height: 64px;
    z-index: 999;
    @media screen and (min-width: 320px) and (max-width: 374px) {
      width: 44px;
      height: 44px;
      .nes-icon.is-large {
        transform: scale(3);
        top: 12px;
        left: 20px;
      }
    }

    @media screen and (min-width: 375px) and (max-width: 400px) {
      width: 44px;
      height: 44px;
      .nes-icon.is-large {
        transform: scale(3.4);
        top: 14px;
        left: 20px;
      }
    }

    @media screen and (min-width: 414px) and (max-width: 450px) {
      width: 44px;
      height: 44px;
      .nes-icon.is-large {
        top: 16px;
        left: 20px;
      }
    }
  }
  .nes-icon.is-large {
    top: 5px;
    margin: 0;
    user-select: none;
    transform-style: preserve-3d;
    transform-origin: center;
    position: absolute;
    top: 20px;
    left: 26px;
    z-index: 1;
  }
  .bounce {
    animation: bounce 1.2s;
  }
}
</style>
