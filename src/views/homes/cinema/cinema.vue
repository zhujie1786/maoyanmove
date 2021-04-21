<template>
  <div class="divbox">
    <van-dropdown-menu class="van-dropdown-menu__bar">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <CinemaList></CinemaList>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
import CinemaList from './cinemaList.vue'

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全城", value: 0 },
        { text: "只有全城", value: 1 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "只有默认", value: "b" }
      ],
    };
  },
  components:{
      CinemaList
  }
};
</script>

<style lang='stylus' scope>
.divbox
  display flex
  flex-direction column
  height 100%
  .van-dropdown-menu__bar
    width 100%
    height 40px
</style>
