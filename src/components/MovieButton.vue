<template>
  <div class="container">
    <div v-if="mv.showst===3">
      购票
    </div>
    <div v-if="mv.showst===4" class="pre-sale">预售</div>
    <div v-if="mv.showst===1" class="pre-sale-yello">想看</div>
  </div>
</template>

<script>
export default {
  props:['mv']
}
</script>

<style lang='stylus' scoped>
// p
//     position absolute
//     top 0
//     font-size .18rem
//     width 1.5rem
//     text-align right
//     span
//       font-size .12rem
//       transform scale(0.8)
.container
  position relative
  display flex
  flex-direction column
  align-items flex-end
  justify-content center
  width .6rem
  color #f3ad00
  > div
    width .46rem
    height .28rem
    background #dd5042
    border-radius .04rem
    color #fff
    text-align center
    line-height .28rem
    // margin-top .2rem
    &.pre-sale
      background #69afe5
    &.pre-sale-yello
      background #FFCC33
</style>