<template>
  <main>
    <nav class="main-nav">
      <ul>
        <li @click="cityClick">
          <span>北京</span>
          <b class="yo-ico">&#xf033;</b>
        </li>
        <li>
          <router-link
            tag="span"
            to="/home/moives/hotmove"
            active-class="active"
            >热映</router-link
          >
          <router-link
            tag="span"
            to="/home/moives/whitmove"
            active-class="active"
            >待映</router-link
          >
        </li>
        <li>
          <b>&#xe65c;</b>
        </li>
      </ul>
    </nav>

    <div class="move-list">
      <van-skeleton title avatar :row="2" 
      avatar-shape="square"
      avatar-size = "60"
      class="vanSkeleton"
      v-for="i in 12"
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
            <router-view :mlist="mlist"></router-view>
          </van-list>
        </van-pull-refresh>
      </van-skeleton>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import { List, PullRefresh, Toast ,Skeleton } from "vant";

Vue.use(List).use(PullRefresh).use(Toast).use(Skeleton );
export default {
  data() {
    return {
      mlist: [],
      loading: false,
      finished: false,
      refreshing: false,
      lodskeleton:true
      // hasMore : false
    };
  },
  created() {
    this.hasMore = false;
    this.limit = 12;
    this.ct = "北京";
    this.offset = 0;
  },
  methods: {
    async _loading() {
      let r = await this.$http.get({
        u: "/mmdb/movie/v2/list/hot.json",
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.ct,
        },
      });
      // console.log(r);
      let {hot, paging: { hasMore }} = r.data.data
      // console.log(this.offset)
      this.mlist = [
        ...this.mlist,
        ...hot
      ];
      this.hasMore = hasMore;
      // console.log(this.hasMore)
      console.log(this.mlist);
    },
    cityClick() {
      this.$router.push("/citytype");
    },
    async onLoad() {
      if (this.refreshing) {
        this.mlist = [];
        this.refreshing = false;
      }
      
      this.offset += this.limit
      await this._loading();
      this.loading = false;
      console.log(this.offset)
      if (!this.hasMore) {
        this.finished = true;
      }
    },
    async onLoad1() {
      this.lodskeleton = true
      if (this.refreshing) {
        this.mlist = [];
        this.refreshing = false;
      }
      
      await this._loading();
      this.loading = false;
      this.lodskeleton = false
      // console.log(this.offset)
      if (!this.hasMore) {
        this.finished = true;
      } 
    },
    onRefresh() {
      setTimeout(() => {
        this.offset = 0
        // 清空列表数据
        this.finished = false;
        

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        Toast('刷新成功')
        this.loading = false;
        this.onLoad1();
      }, 1000);
    },
  },
  async mounted() {
    // axios.get('mmdb/movie/v2/list/hot.json',{
    //     params:{
    //         limit:12,
    //         offset:0,
    //         ct:'北京'
    //     }
    // }).then(response => {
    //   //   console.log(response.data)
    //     console.log(response)
    //   //   console.log(this.mList)
    //     this.mlist = response.data.data.hot
    //     console.log(this.mlist)
    //   //   console.log(this.mList)
    // }).catch(error => {
    //     console.log(error + "数据获取出cuo")
    // })
    // let result = await this.$http.get({
    //   url:'/movie/v2/list/hot.json',
    //   parmas:{
    //     limit:12,
    //     offset:0,
    //     ct:'北京'
    //   }
    // })
    await this._loading();
    this.lodskeleton = false

  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/icon.styl';

main {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .move-list {
    overflow-y: scroll;
  }

  .main-nav {
    ul {
      height: 0.44rem;
      display: flex;
      border1px(0 0 1px 0);

      li:first-child {
        width: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0.15rem;

        span {
          color: #666;
        }
      }

      li:nth-child(2) {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: inline-block;
          width: 0.5rem;
          height: 0.44rem;
          line-height: 0.44rem;
          text-align: center;

          &:first-child {
            margin-right: 0.4rem;
            margin-left: -0.5rem;
          }

          &.active {
            border-bottom: 2px solid #cd4c42;
            color: #cd4c42;
          }
        }
      }

      li:last-child {
        width: 0.4rem;
        border1px(0 0 0 1px);

        b {
          font-family: iconfont-search;
          color: #cd4c42;
          font-size: 0.2rem;
          line-height: 0.44rem;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .move-list {
    overflow-y: scroll;
    .vanSkeleton{
      margin-top 20px
    }
  }
}
</style>
