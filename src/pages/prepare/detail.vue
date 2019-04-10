<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <div v-if="list">
      <img
        class="top_img"
        v-if="!imgfinish"
        src="/static/images/imgfinish.jpg"
      >
      <img
        :class="!imgfinish?'no_img':'top_img'"
        :src="host_img+list.pic_url"
        @load="imgFinish"
      >
      <div class="top">
        <p class="status">已结束</p>
        <h1 class="title">{{list.title}}</h1>
        <p class="content">{{list.content}}</p>
        <van-progress
          :percentage="list.schedule"
          :color="list.schedule<100?'#bc2e2e':'linear-gradient(90deg, #d43131, #751c75)'"
        />
      </div>
      <div class="support">
        <div class="support_content">
          <p class="support_top">支持人数</p>
          <p class="support_bottom">{{list.support}}人</p>
        </div>
        <div class="support_content">
          <p class="support_top">已团金额</p>
          <p class="support_bottom">￥{{list.total_price}}</p>
        </div>
        <div class="support_content">
          <p class="support_top">剩余时间</p>
          <p class="support_bottom">{{time}}</p>
        </div>
      </div>
      <van-tabs
        active="active"
        sticky
      >
        <van-tab title="项目详情">
          <div class="wxparse">
            <wxParse :content="article" />
          </div>
        </van-tab>
        <van-tab title="项目进展">{{item}}</van-tab>
      </van-tabs>
    </div>
    <div class="bottom">
      <button
        class="bottom_left"
        open-type="contact"
        bindtap='supportAction'
        :send-message-title="list.title"
        show-message-card="true"
        hover-class='none'
      >
        <img
          class="bottom_img"
          src="/static/images/kefu.png"
          alt=""
        >
        <p class="bottom_text">客服</p>
      </button>
      <div class="bottom_right">
        <p
          v-if="list.type==1"
          @click="godetail"
        >去支持￥{{list.price_least}}起</p>
        <p v-else-if="list.type==2">制作中</p>
        <p v-else-if="list.type==3">发货中</p>
        <p v-else>查看支持项</p>
      </div>
    </div>
  </div>

</template>

<script>
import { get, getTime } from "@/util";
import config from "@/config";
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      article: "<div>CSDN: mossbaoo</div>",
      host_img: config.host_img,
      imgfinish: false,
      loading: true,
      time: "",
      list: ""
    };
  },
  methods: {
    async requestList() {
      // 项目
      const list = await get("prepare_details", {
        id: this.id
      });
      console.log(list[0]);
      this.list = list[0];
      this.article = list[0].details;
      if (
        "number" == typeof this.list.time &&
        this.list.type == 1 &&
        this.list.time >= 0
      ) {
        this.time = getTime(list[0].time);
      } else {
        this.time = this.list.time;
      }
      // 进展
      const item = await get("prepare_progress_list", {
        id: this.id
      });
      this.item = item.list;
      console.log(this.item);
    },
    imgFinish() {
      this.imgfinish = true;
      this.loading = false;
    },
    godetail() {
      wx.navigateTo({
        url:
          "support?id=" +
          this.list.c_id +
          "&image=" +
          this.list.pic_url +
          "&type=" +
          this.list.type
      });
    }
  },
  onLoad(options) {
    this.id = options.id;
    this.requestList();
  }
};
</script>

<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.no_img {
  width: 0px;
  height: 0px;
}
.top_img {
  width: 750rpx;
  height: 376rpx;
}
.top {
  background: #fff;
  width: 690rpx;
  padding: 30rpx;
  .status {
    width: 142rpx;
    height: 60rpx;
    line-height: 60rpx;
    background-color: #d56546;
    text-align: center;
    color: #fff;
    font-size: 30rpx;
    margin-bottom: 20rpx;
  }
  .title {
    font-size: 36rpx;
    padding-bottom: 20rpx;
  }
  .content {
    font-size: 28rpx;
    color: #666;
    padding-bottom: 20rpx;
  }
}
.support {
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-around;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  .support_content {
    text-align: center;
    .support_top {
      font-size: 24rpx;
      padding-bottom: 10rpx;
    }
    .support_bottom {
      font-size: 36rpx;
    }
  }
}
.wxparse {
  background: #fff;
  padding: 20rpx;
  padding-bottom: 98rpx;
}
.bottom {
  width: 100%;
  height: 98rpx;
  background: #bc2e2e;
  position: fixed;
  bottom: 0px;
  .bottom_left {
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    font-size: 30rpx;
    color: #777;
    .bottom_img {
      width: 33rpx;
      height: 33rpx;
      margin-right: 10rpx;
    }
  }
  .bottom_right {
    text-align: center;
    line-height: 98rpx;
    color: #fff;
    font-size: 30rpx;
  }
}
button::after {
  border: none;
  border-radius: 0;
}
</style>
