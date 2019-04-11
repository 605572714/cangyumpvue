<template>
  <div class="container">
    <ul
      v-for="item in list"
      :key="item"
    >
      <li class="detail">
        <div>
          <img
            :src="imgfinish&&!imgerror?host_img+item.headlines:'/static/images/imgfinish.jpg'"
            @load="imgFinish"
            @error="imgError"
          >
          <p>{{item.content}}</p>
        </div>
        <div class="bottom">
          <span :style="item.status==3?'color:#999':''">{{item.text0}}</span><span>{{item.text1}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["history_list"],
  data() {
    return {
      list: null,
      imgfinish: false,
      imgerror: false,
      color: "",
      host_img: config.host_img
    };
  },
  watch: {
    history_list(list) {
      for (var i = 0; i < list.length; i++) {
        var arr = list[i];
        if (arr.status == 1) {
          arr.text0 = "即将开始";
          arr.text1 = "进入拍场";
        } else if (arr.status == 2) {
          arr.text0 = "正在进行";
          arr.text1 = "进入拍场";
        } else if (arr.status == 3) {
          arr.text0 = "已经结束";
          arr.text1 = "拍卖回顾";
          this.color = "#999";
        }
      }
      this.list = list;

      console.log(this.list);
    }
  },
  methods: {
    imgFinish() {
      this.imgfinish = true;
    },
    imgError() {
      this.imgerror = true;
    }
  },
  conputed: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 690rpx;
  height: 100%;
  padding: 0 30rpx;
  background: #fff;
  .detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      position: relative;
      img {
        width: 690rpx;
        height: 380rpx;
        vertical-align: middle;
      }
      p {
        position: absolute;
        width: 670rpx;
        height: 100rpx;
        line-height: 100rpx;
        background: rgba(0, 0, 0, 0.4);
        bottom: 0;
        color: #fff;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0px 10rpx;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 98rpx;
      line-height: 98rpx;
      font-size: 28rpx;
      background: #ededed;
      margin-bottom: 20rpx;
    }
  }
}
</style>
