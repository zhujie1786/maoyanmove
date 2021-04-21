<template>
  <div class="move-list1">
    <van-skeleton title avatar :row="2" 
      avatar-shape="square"
      avatar-size = "60"
      class="vanSkeleton"
      v-for="i in 12" :key="'a' + i"
      :loading="lodskeleton"
      />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check = "false"
      >
        <MoveList :mlist="mlist"></MoveList>
      </van-list>
    </van-pull-refresh>
    </van-skeleton>
  </div>
</template>

<script>
import MoveList from "@/components/MovieList.vue";
import Vue from "vue";
import { List, PullRefresh, Toast ,Skeleton } from "vant";
import {mapState } from 'vuex'

Vue.use(List).use(PullRefresh).use(Toast).use(Skeleton );
export default {
  data() {
    return {
      mlist: [],
      refreshing: false,
      loading: false,
      finished: false,
      lodskeleton:true
    };
  },
  computed:{
    ...mapState(['city'])
  },
  created() {
    this.limit = 12
    this.offset = 0
    this.hasMore = false
  },
  components: {
    MoveList,
  },
  async mounted() {
    await this._loading();
    this.lodskeleton = false
  },

  methods: {
    async _loading() {
      let r = await this.$http.get({
        u: "/mmdb/movie/v2/list/hot.json",
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.city.name,
        },
      });
      let {hot,paging:{hasMore}} = r.data.data
      this.mlist = [
        ...this.mlist,
        ...hot
      ]
      this.hasMore = hasMore
    },
    async onLoad(){
       if (this.refreshing) {
          this.mlist = [];
          this.refreshing = false;
        }

        this.offset += this.limit
        await this._loading();
        this.loading = false;

        console.log(this.offset);
        if (!this.hasMore) {
          this.finished = true;
        }

        
    },
    onLoad1() {
      this.lodskeleton = true
      if (this.refreshing) {
        this.mlist = [];
        this.refreshing = false;
      }
      console.log(this.lodskeleton)
      this._loading();
      this.loading = false;
      this.lodskeleton = false
    },
    onRefresh() {
      setTimeout(() => {
        // 清空列表数据
        this.finished = false;
        this.offset = 0
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        Toast("刷新成功");
        this.loading = true;
        this.onLoad1();
      }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped>
.move-list 
  overflow-y: scroll;
  .vanSkeleton
    margin-top 20px
</style>
