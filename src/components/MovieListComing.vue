<template>
  <ul>
    <li v-for="mv in moveComing">
      <div>
        <img :src="mv.img | wh('192.270')" :alt="mv.nm">
      </div>
      <div>
        <h1>{{mv.nm}}<MovieVersion :ver="mv.ver"/></h1>
        <p v-if="mv.showst===4 || mv.showst===1" class="sc">{{mv.wish}}<span>想看</span></p>
        <!-- <p v-if="mv.showst===4&&mv.sc===0.0" class="sc">{{mv.wish}}<span>人喜欢</span></p> -->
        <p v-if="mv.showst===4 || mv.showst===1"><span>类型：</span>{{mv.cat}}</p>
        <!-- <p>{{mv.cat}}</p> -->
        
        <p>{{mv.desc}}</p>
        <div v-if="mv.showst===3&&mv.boxInfo!=='喵，即将上映'">{{mv.boxInfo}} </div>
        <div v-if="mv.showst===3&&mv.boxInfo==='喵，即将上映'">{{mv.showTimeInfo}} </div>
        <div v-if="mv.showst===3&&!mv.showTimeInfo" >{{mv.showInfo}} </div>
        <div v-if="mv.showst===4">{{mv.showTimeInfo}} </div>
      </div>
      <MovieButton :mv="mv"/>
    </li>
  </ul>
</template>

<script>
import MovieVersion from './MovieVersion'
import MovieButton from './MovieButton'

export default {
  props:['moveComing'],
  components: {
    MovieButton,
    MovieVersion
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/border.styl'
@import '~@/assets/stylus/ellipsis.styl'

ul
  padding-left .12rem
  li
    height 1.14rem
    display flex
    padding .12rem .12rem .12rem 0
    border1px(0 0 1px 0)
    > div:first-child
      width .76rem
      img
        width .64rem
        height .9rem

    > div:nth-child(2)
      flex 1
      h1
        display flex
        align-items center
        font-size .16rem
        font-weight 100
        ellipsis()
      
      .sc
        font-size .16rem
        color #f3ad00
        
        
      > p
        line-height .22rem
        color #666
        ellipsis()
          
      div
        line-height .22rem
        color #999
        ellipsis()

    &:last-child
      border1px(0)
</style>