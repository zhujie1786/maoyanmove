<template>
  <div class="body_css">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="定位" class="body_css_last1_city"
        >定位城市</van-index-anchor
      >
      <div class="body_css_last1_text">
        <div
          class="body_css_last1_text_div"
          style="border-width: 1px; border-style: solid; border-color: #e6e6e6"
        >
          定位失败，请点击重试
        </div>
      </div>

      <van-index-anchor index="最近" class="body_css_last1_city"
        >最近访问城市</van-index-anchor
      >
      <div class="body_css_last1_text">
        <div
          class="body_css_last2_text_div"
          style="border-width: 1px; border-style: solid; border-color: #e6e6e6"
          @click="cityClick(newest||chengdu)"
        >
          <div v-if="newest === ''">{{chengdu.name}}</div>
          <div v-if="newest !== ''">{{newest.name}}</div>
        </div>
      </div>

      <van-index-anchor index="热门" class="body_css_last1_city"
        >热门城市</van-index-anchor
      >
      <div class="body_css_last6_text">
        <div
          class="body_css_last6_text_div"
          style="border-width: 1px; border-style: solid; border-color: #e6e6e6"
          v-for="(item, index) in citysArray.hotCities" :key="index"
          @click="cityClick(item)"
        >
          {{item.name}}
        </div>
      </div>

      <div v-for="(city, key) in citysArray.cities">
        <van-index-anchor index="热门" class="body_css_last1_city" :index="key">{{key}}</van-index-anchor>
        <div class="body_css_last3_text" v-for="cities in city"  @click="cityClick(cities)">
            <div class="body_css_last3_text_div" style="border-bottom: 1px solid #c8c7cc">
            {{cities.name}}
            </div>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor } from "vant";
import {mapActions} from 'vuex'

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
  data() {
    return {
      indexList: ["定位", "最近", "热门"],
      citysArray:{},
      newest:'',
      chengdu:{
        id: 8,
        spell: "chengdu",
        name: "成都"
      }
    };
  },
  async mounted() {
      let citys = await this.$http.get({
          u:'/cities.json'
      })
      this.citysArray = citys.data

      this.indexList = [
          ...this.indexList,
          ...Object.keys(citys.data.cities)
      ]
  },
  methods: {
      cityClick(city){
          this.chengeClick(city)
          this.newest = city
          this.$router.back()
      },
      ...mapActions(['chengeClick'])
  },
};
</script>

<style lang='stylus' scoped>
.body_css {
  background: #ebebeb;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;

  .body_css_last6_text {
    height: 100%;
    background: #f5f5f5;
    display: flex;
    // align-items: center;
    padding-left: 15px;
    padding-bottom 10px
    width 100%
    flex-wrap: wrap;
    .body_css_last6_text_div{
      width: 95px;
      height: 33px;
      background: #fff;
      text-align: center;
      line-height: 33px;
      border-radius: 3px;
      margin-right 6%
      margin-top 15px
    }
  }

  .body_css_last1_city {
    font-size: 14px;
    height: 29.6px;
    line-height: 29.6px;
  }

  .body_css_last1_text {
    height: 56px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    padding-left: 15px;
    width 100%
    
    .body_css_last1_text_div {
      width: 182px;
      height: 33px;
      background: #fff;
      text-align: center;
      line-height: 33px;
      border-radius: 3px;
    }

    .body_css_last2_text_div {
      width: 95px;
      height: 33px;
      background: #fff;
      text-align: center;
      line-height: 33px;
      border-radius: 3px;
      
    }
    
  }

  .body_css_last3_text {
    background: #f5f5f5;
    display: flex;
    padding-left 15px

    .body_css_last3_text_div {
      width: 313.4px;
      height: 45px;
      line-height: 45px;
    }
  }
}
</style>
