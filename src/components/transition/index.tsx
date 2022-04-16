import { computed, defineComponent, ref } from 'vue'
import throttle from 'lodash.throttle'
import './style.scss'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const barWrapRef = ref<HTMLDivElement>()
    const store = useStore()
    const currentIndex = computed(() => store.getters.getCurrentIndex)
    const flip = ref(true)

    // 添加bar追加至父节点
    const appendBarItem = (e: WheelEvent) => {
      // 翻转动画 用作测试 需注释
      if (e.deltaY > 0) {
        if (currentIndex.value >= 4) return
        store.commit('setCurrentIndex', currentIndex.value + 1)
        flip.value = false
      } else {
        if (currentIndex.value === 0) return
        store.commit('setCurrentIndex', currentIndex.value - 1)
        flip.value = true
      }
      // e.deltaY < 0 ? (flip.value = true) : (flip.value = false)
      // 循环创建bar并追加至node
      for (let i = 0; i < 26; i++) {
        const barItem = createBarItem()
        barItem.style.left = `${-2300 + i * 130}px`
        let delayCount = +Math.random().toFixed(2) * 0.2
        // let DurationCount = + Math.random().toFixed(2) * 4
        barItem.style.animationDelay = `${delayCount}s`
        // barItem.style.animationDuration = `${DurationCount}s`

        barWrapRef.value?.appendChild(barItem)
        setTimeout(() => {
          barWrapRef.value?.removeChild(barItem)
        }, 1800)
      }
    }

    // 创建bar元素
    const createBarItem = () => {
      const barItem = document.createElement('div')
      barItem.classList.add('bar_item')
      return barItem
    }

    // 节流函数
    const throttleFn = throttle(appendBarItem, 2400, {
      leading: true,
      trailing: false
    })

    // 绑定鼠标滚轮事件
    const showTransition = (e: WheelEvent) => {
      throttleFn(e)
    }
    return () => {
      return (
        <div
          ref={barWrapRef}
          class={[{ flip: flip.value }, 'application']}
          onWheel={showTransition}
        >
          <div class="content">滚动鼠标滚轮</div>
        </div>
      )
    }
  }
})
