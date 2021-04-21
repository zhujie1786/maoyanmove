<template>
  <div class="div1">
    <header>猫眼电影</header>
    <router-view></router-view>
    <nav class="footer-nav">
      <van-tabbar
        v-model="active"
        active-color="#cd4c42"
        inactive-color="#666"
        route
      >
        <van-tabbar-item to="/home/moives/hotmove">
          <span>电影</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="move" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/cinema">
          <span>影院</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="cinema" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/isme">
          <span>我的</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="isme" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </nav>
    <!-- <nav class="footer-nav">
      <ul>
        <router-link to="/home/moives"  tag="li" active-class="active">
          <b>&#xe8ae;</b>
          <span>电影</span>
        </router-link>
        <router-link to="/home/cinema" tag="li" active-class="active">
          <b>&#xe8c0;</b>
          <span>影院</span>
        </router-link>
        <router-link to="/home/isme" tag="li" active-class="active">
          <b class="last-b">&#xe60e;</b>
          <span>我的</span>
        </router-link>
      </ul>
    </nav> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Tabbar, TabbarItem } from "vant";
import Movies from "@/views/homes/movies/moives.vue";

Vue.use(Icon).use(Tabbar).use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Movies,
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/icon.styl';

.div1 {
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    background: #cd4c42;
    height: 0.44rem;
    font-size: 0.16rem;
    color: #fff;
    font-weight: bold;
    line-height: 0.44rem;
    text-align: center;

    &::before {
      content: '\e8c0';
      font-family: iconfont-nav;
    }

    &::after {
      content: '\e8c0';
      font-family: iconfont-nav;
    }
  }

  .footer-nav {
    height: 0.44rem;
    // border1px(1px 0 0 0);
  }
}
</style>
