<template>
  <div class="movelist1">
    <van-nav-bar
      title="电影详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="van-nav-bar-css"
    />
    <div class="main-css">
      <div class="divkuai">
        <div class="imgs">
          <img
            :src="listArray.img | wh('192.270')"
            :alt="listArray.nm"
            width="95px"
            height="130px"
          />
        </div>
        <div class="div-css1">
          <div class="div1">
            <p class="div1-name1">{{ listArray.nm }}</p>
            <p class="div1-name2">{{ listArray.enm }}</p>
          </div>

          <div class="div2">
            <p class="div2-name1">{{ listArray.cat }}</p>
            <p class="div2-name2">{{ listArray.pubDesc }}</p>
          </div>
          <div class="div3">
            <div class="box1" style="background: #9b9181" @click="xiangkan"><p>想看</p></div>
            <div class="box2" style="background: #9b9181" @click="kanguo"><p>看过</p></div>
          </div>
          <!-- <p>{{mv.cat}}</p> -->
        </div>
      </div>

      <div class="jianjiebox">
        <div class="jianjie">简介</div>
        <div class="xiangxi">{{ listArray.dra }}</div>
      </div>
      <div class="juzhao">
        <div v-for="(item, index) in listArray.photos" :key="index">
          <a href="">
            <div class="imgs1">
              <img
                :src="item | wh('192.270')"
                height="80px"
                width="135px"
                alt="mv.nm"
                class="imgs111"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <van-goods-action class="last-css">
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
        class="button-css"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Toast,
  NavBar,
  GoodsActionButton,
  GoodsAction,
  GoodsActionIcon,
} from "vant";
Vue.use(Toast)
  .use(NavBar)
  .use(GoodsActionButton)
  .use(GoodsAction)
  .use(GoodsActionIcon)
export default {
  props: ["listId"],
  data() {
    return {
      listArray: [],
      imgsArray: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickButton() {
      Toast("购买失败！");
    },
    xiangkan(){
        Toast("你不想看！")
    },
    kanguo(){
        Toast("你没看过！")
    }
  },
  async mounted() {
    let r = await this.$http.get({
      u: "/ajax/detailmovie",
      params: {
        movieId: this.listId,
      },
    });
    this.listArray = r.data.detailMovie;
    console.log(this.listId);
    console.log(this.listArray);
  },
};
</script>


<style lang="stylus" scope>
@import '~@/assets/stylus/ellipsis.styl';

.movelist1 {
  display: flex;
  flex-direction: column;
  height: 100%;

  .van-nav-bar .van-icon {
    color: #fff;
  }

  .van-nav-bar__text {
    color: #fff;
  }

  .van-nav-bar__title {
    color: #fff;
  }

  .van-nav-bar-css {
    width: 100%;
    background: #cd4c42;
  }

  .main-css {
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background: rgb(102, 86, 62);
    overflow-y: scroll;
    height: 571px;

    .divkuai {
      display: flex;
      padding: 30px 0px 0px 30px;
      margin-bottom: 30px;

      .imgs {
        height: 100%;
        margin-right: 10px;
      }

      .div1 {
        margin-bottom: 8px;

        .div1-name1 {
          font-size: 20px;
          color: #fff;
          ellipsis();
        }

        .div1-name2 {
          font-size: 10px;
          color: rgb(194, 187, 178);
        }
      }
    }

    .div-css1 {
      height: 100%;
      width: 100%;

      .div2 {
        margin-bottom: 10px;

        .div2-name1 {
          font-size: 10px;
          color: rgb(194, 187, 178);
        }

        .div2-name2 {
          font-size: 10px;
          color: rgb(194, 187, 178);
        }
      }

      .div3 {
        display: flex;
        width: 100%;

        .box1 {
          width: 100px;
          height: 30px;
          margin-right: 20px;
          border-radius: 5%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        .box2 {
          width: 100px;
          height: 30px;
          border-radius: 5%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  .jianjiebox {
    padding: 0px 0px 0px 30px;
    width: 94%;
    display: flex;
    flex-direction: column;

    .jianjie {
      color: #fff;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .xiangxi {
      ellipsis2();
      color: #fff;
    }
  }
}

.button-css {
  flex: 1;
  width: 365px;
  background: rgb(254, 75, 93);
}

.last-css {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.juzhao {
  display: flex;
  margin: 20px 0px 0px 30px;
  flex-direction: row;
  width: 88%;
  overflow: scroll;

  .imgs111 {
    border-radius: 7%;
  }

  .imgs1 {
    margin-right: 15px;
  }
}
</style>
