<template>
  <div class="divbox3">
    <div class="left">
      <div>
        <h3 class="dianming">太平洋影城LUXE（富力广场店）</h3>
        <p class="dizhi">青羊区顺城大街289号富力广场7楼</p>
        <div class="tubiao">
            <div class="tui">退</div>
            <div class="tui">改签</div>
            <div class="tui">杜比全景声厅</div>
            <div class="tui">LUXE巨幕厅</div>
        </div>
      </div>
      <div class="km">
        <p>800m</p>
      </div>
      
    </div>
    <div class="left">
      <div>
        <h3 class="dianming">亚贸兴汇影城</h3>
        <p class="dizhi">武昌区武珞路628号武商亚贸广场6楼（地铁2号线宝通寺站B出口）</p>
        <div class="tubiao">
            <div class="tui">退</div>
            <div class="tui">改签</div>
            <div class="tui">杜比全景声厅</div>
            <div class="tui">LUXE巨幕厅</div>
        </div>
      </div>
      <div class="km">
        <p>800m</p>
      </div>
      
    </div>
    <div class="left">
      <div>
        <h3 class="dianming">唐阁影城（黄陂店）</h3>
        <p class="dizhi">黄陂区百锦40号隆汇国贸中心四层</p>
        <div class="tubiao">
            <div class="tui">退</div>
            <div class="tui">改签</div>
            <div class="tui">杜比全景声厅</div>
            <div class="tui">LUXE巨幕厅</div>
        </div>
      </div>
      <div class="km">
        <p>800m</p>
      </div>
      
    </div>
    <div class="left">
      <div>
        <h3 class="dianming">春天国际影城（武湖店）</h3>
        <p class="dizhi">黄陂区汉口北大道口百尚购物中心三楼（苏宁电器楼上）</p>
        <div class="tubiao">
            <div class="tui">退</div>
            <div class="tui">改签</div>
            <div class="tui">杜比全景声厅</div>
            <div class="tui">LUXE巨幕厅</div>
        </div>
      </div>
      <div class="km">
        <p>800m</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider } from 'vant';

Vue.use(Divider);
export default {};
</script>

<style lang="stylus" scope>
.divbox3 {
  display: flex;
  align-items center
  margin-top 5px
  height 100%
  flex-direction column
  .left {
    width: 92%;
    display flex
    justify-content space-between
    padding-bottom 10px
    .km{
        text-align center
        line-height 41px
    }
    .dianming{
        font-size 16px
        margin-top 10px
    }
    .dizhi{
        font-size 14px
        margin-top 3px
    }
    .tubiao{
        display flex
        font-size 5px
        color #589daf
        margin-top 5px
        .tui{
            border 1px solid #589daf
            margin-right 5px
            margin-top 5px
            padding 0px 4px 0px 4px
        }
    }
  }
}
</style>
