import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  watchEffect
} from 'vue'
import { useStore } from 'vuex'
import './style.scss'

export default defineComponent({
  setup() {
    const store = useStore()
    const sceneNavRef = ref<HTMLDivElement>()
    const pageIndex = computed(() => store.getters.getPageIndex) // 进度条, 用于hover展示的index
    const currentIndex = computed(() => store.getters.getCurrentIndex) // 当前页, 当前的index
    const focusingClass = ref(`focusing-scene${currentIndex.value}`) // 颜色class
    const widthScale = ref(0) // 均分的宽度
    const translateX = ref(-180) // 移动距离
    const skewX = ref(0) // 果冻效果系数
    const scale = ref([0, 0]) // 放大倍数

    onMounted(() => {
      // 均分进度条宽度
      const sceneNavDiv = sceneNavRef.value!
      widthScale.value = sceneNavDiv.clientWidth / 4
    })

    // 鼠标移动
    const bindClass = (e: MouseEvent) => {
      const transOrigin = e.clientX - 240

      // 位移效果
      if (transOrigin - translateX.value > 0) {
        const timer = setInterval(() => {
          translateX.value += 10
          // 放大 清除位移增长
          if (translateX.value > transOrigin) {
            scale.value = [1.7, 1.7]
            clearInterval(timer)
          }
        }, 1)
      } else if (transOrigin - translateX.value < 0) {
        const timer = setInterval(() => {
          translateX.value -= 10

          if (translateX.value < transOrigin) {
            scale.value = [1.7, 1.7]
            clearInterval(timer)
          }
        }, 1)
      }

      // 果冻效果
      if (e.movementX < 0) {
        const timer = setInterval(() => {
          skewX.value += 0.2
          if (skewX.value > 40) {
            clearInterval(timer)
          }
        }, 20)
      } else if (e.movementX > 0) {
        const timer = setInterval(() => {
          skewX.value -= 0.2
          if (skewX.value < -40) {
            clearInterval(timer)
          }
        }, 20)
      }

      // 进度条均分页面index
      if (e.clientX < widthScale.value) {
        store.commit('setPageIndex', 1)
      } else if (e.clientX < 2 * widthScale.value) {
        store.commit('setPageIndex', 2)
      } else if (e.clientX < 3 * widthScale.value) {
        store.commit('setPageIndex', 3)
      } else {
        store.commit('setPageIndex', 4)
      }

      // hover进度条背景色
      watchEffect(() => {
        focusingClass.value = `focusing-scene${pageIndex.value}`
      })
    }

    // 进度条颜色与位置随当前页面index变更
    watch(currentIndex, (newVal) => {
      focusingClass.value = `focusing-scene${newVal}`
      translateX.value = widthScale.value * (newVal - 1) - 180
    })

    // 鼠标离去
    const leaveEvent = () => {
      focusingClass.value = `focusing-scene${currentIndex.value}`
      // 进度条位置回退至当前页index
      translateX.value = widthScale.value * (currentIndex.value - 1) - 180

      setTimeout(() => {
        scale.value = [0, 0]
      }, 100)

      // 果冻回弹
      const timer = setInterval(() => {
        if (skewX.value > 0) {
          skewX.value -= 1
          skewX.value < 0 && clearInterval(timer)
        } else if (skewX.value < 0) {
          skewX.value += 1
          skewX.value > 0 && clearInterval(timer)
        }
      }, 10)
    }

    return () => {
      return (
        <div class="navigation-wrapper">
          <div
            ref={sceneNavRef}
            class={['scene-navigation', focusingClass.value]}
            onMousemove={bindClass}
            onMouseleave={leaveEvent}
          >
            <div class="progress-bar">
              <div class="cursor-container">
                <div
                  class="cursor"
                  style={{ transform: `translateX(${translateX.value}px)` }}
                >
                  <div
                    class="cursor-wave"
                    style={{ transform: `skewX(${skewX.value}deg)` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 481 29"
                      fill="none"
                      style="transform: translate(0px, 0px);"
                    >
                      <path
                        d="M0 17.2666C240 17.2666 214.224 0.266602 240 0.266602C265.777 0.266602 240.001 17.2666 480.001 17.2666V29.2666H0V17.2666Z"
                        class="customColor"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 960 120"
                      class="focused"
                      style={{ transform: `scale(${scale.value})` }}
                    >
                      <path
                        d="M0,120c114,0,154-27,240-60C330.2,25.39,383.39,0,480,0S622,26,720,60c92.24,32,142.37,60,240,60Z"
                        class="customColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
