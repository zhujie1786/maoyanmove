<template>
  <div class="move-list2">
   <van-skeleton title avatar :row="2" 
      avatar-shape="square"
      avatar-size = "60"
      class="vanSkeleton"
      v-for="i in 12"
      :key="'a' + i"
      :loading="lodskeleton"
      />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <div class="waptab">
          <p class="title">近期最受期待</p>
          <div class="fixBox">
            <div v-for="mv in imgComing" class="img_box">
              <a href="">
                <div class="imgs">
                  <img
                    :src="mv.img | wh('192.270')"
                    height="115px"
                    width="85px"
                    :alt="mv.nm"
                  />
                  <div
                    class="toggle-wish"
                    data-wishst="0"
                    data-movieid="1320283"
                  >
                    <span>
                      <img
                        src="./../../../imgs/jfk8hx5zcw6g2yg2doa74ccndcq3wkpy.png"
                        alt=""
                        class="spanbox"
                      />
                    </span>
                  </div>
                </div>
                <h5 class="hbox">{{ mv.nm }}</h5>
                <p class="pbox">{{ mv.comingTitle }}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="fgx"></div>

        <MovieListComing :moveComing="moveComing"></MovieListComing>
      </van-list>
    </van-pull-refresh>
    </van-skeleton>
  </div>
</template>

<script>
import MovieListComing from "@/components/MovieListComing.vue";
import axios from "axios";
import Vue from "vue";
import { List, PullRefresh, Toast, Skeleton } from "vant";
import {mapState } from 'vuex'

Vue.use(List).use(PullRefresh).use(Toast).use(Skeleton);
export default {
  data() {
    return {
      moveComing: [],
      imgComing: [],
      loading: false,
      finished: false,
      refreshing: false,
      lodskeleton: true,
    };
  },
  created() {
    this.limit = 12;
    this.offset = 0;
    this.hasMore = false;
  },
  computed:{
    ...mapState(['city'])
  },
  components: {
    MovieListComing,
  },
  async mounted() {
    await this._loading();
    await this._imgsLoading()
    this.lodskeleton = false

    // let r = await this.$http.get({
    //   u: "/mmdb/movie/v1/list/wish/order/coming.json",
    //   params: {
    //     limit: 12,
    //     offset: 0,
    //     ct: "北京",
    //   },
    // });
    // this.moveComing = r.data.data.coming;

    // console.log(this.moveComing);
    // axios.get('/mmdb/movie/v1/list/wish/order/coming.json',{
    //     params:{
    //         limit:12,
    //         offset:0,
    //         ct:'北京'
    //     }
    // }).then(response => {
    //   //   console.log(response.data)
    //     console.log(response)
    //   //   console.log(this.mList)
    //   //   console.log(this.mList)
    // }).catch(error => {
    //     console.log(error + "数据获取出cuo")
    // })
  },
  methods: {
    async _imgsLoading(){
      let rouslt = await this.$http.get({
      u: "/ajax/mostExpected",
      params: {
        ci: 1,
        limit: 30,
        offset: 0,
        token: 0,
      },
    });
    let { coming } = rouslt.data;
    this.imgComing = coming;
    },
    async _loading() {
      let r = await this.$http.get({
        u: "/mmdb/movie/v1/list/wish/order/coming.json",
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.city.name,
        },
      });
      let {
        coming,
        paging: { hasMore },
      } = r.data.data;
      this.moveComing = [...this.moveComing, ...coming];
      this.hasMore = hasMore;
    },

    async onLoad() {
      if (this.refreshing) {
        this.moveComing = [];
        this.refreshing = false;
      }

      this.offset += this.limit;
      await this._loading();
      this.loading = false;

      console.log(this.offset);
      if (!this.hasMore) {
        this.finished = true;
      }
    },
    onLoad1() {
      if (this.refreshing) {
        this.moveComing = [];
        this.imgComing = []
        this.refreshing = false;
      }
      if(this._loading()&&this._imgsLoading()){
        this.loading = false;
        this.lodskeleton = false      
      }
      
      
    },
    onRefresh() {
      setTimeout(() => {
        // 清空列表数据
        this.finished = false;
        this.offset = 0;
        
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
@import '~@/assets/stylus/ellipsis.styl'
.vanSkeleton
  margin-top 20px
  
.waptab {
  padding: 12px 0 12px 15px;
  margin-bottom: 15px;
  height: 205px;

  .title {
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }

  .fixBox {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 350px;

    .img_box {
      margin-right: 10px;

      .imgs {
        margin-bottom: 6px;
        position: relative;

        .toggle-wish {
          width: 28px;
          height: 30px;
          line-height: 28px;
          background: rgba(61, 63, 71, 0.4);
          text-align: center;
          border-bottom-right-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
          
          .spanbox {
            width: 10px;
            height: 10px;
          }
        }
      }

      .hbox {
        font-size: 13px;
        color: #222;
        margin-bottom: 3px;
        width: 100%;
        ellipsis()
      }

      .pbox {
        font-size: 12px;
        color: #999;
        ellipsis()
      }
    }
  }
}

.fgx {
  width: 100%;
  height: 10px;
  background-color: rgb(245, 245, 245);
  margin-bottom: 15px;
}
</style>
