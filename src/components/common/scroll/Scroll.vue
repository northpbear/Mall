<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)

  export default {
    name: "Scroll",
    data() {
      return {
        scroll,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },

      page: {
        type: Number,
        default() {
          return 1;
        }
      },
      activeTitle: {
        type: String,
        default() {
          return null;
        }
      },
      pullup: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      click: {
        type: Boolean,
        default: true
      },
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      backToTop(x, y, time=1000){
        this.scroll.scrollTo(x, y, time)
      },
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          pullUpLoad: true,
          click: true,
          tap: true
        })

        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos);
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd', this.activeTitle, this.page)
            }
          })
        }

        // // 是否派发顶部下拉事件，用于下拉刷新
        // if (this.pulldown) {
        //   this.scroll.on('touchend', (pos) => {
        //     // 下拉动作
        //     if (pos.y > 50) {
        //       this.$emit('pulldown')
        //     }
        //   })
        // }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-bottom: 44px;
    position: relative;
  }
</style>
