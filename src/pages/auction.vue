<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <div class="page">
      <van-tabs swipeable>
        <van-tab title="拍卖">
          <img
            class="head_img"
            src="/static/images/fen.png"
          >
          <p class="head_time">距离结束还有</p>
          <p class="head_title">{{auction_header.screenings_des}}·{{auction_header.total}}件商品</p>
          <ruleList
            :rule="auction_header.rule"
            :type="0"
          />
          <productList :product_list="auction_list" />
          <div class="bottom">历史拍卖
            <img
              class="bottom_icon"
              src="/static/images/arrow.png"
              alt=""
            >
          </div>
        </van-tab>
        <van-tab title="捡漏">
          <img
            class="head_img"
            src="/static/images/fen.png"
          >
          <p class="head_time">距离结束还有</p>
          <p class="head_title">{{pickup_header.screenings_des}}·{{pickup_header.total}}件商品</p>
          <ruleList
            :rule="pickup_header.rule"
            :type="1"
          />
          <productList :product_list="pickup_list" />
          <div class="bottom">历史捡漏
            <img
              class="bottom_icon"
              src="/static/images/arrow.png"
              alt=""
            >
          </div>
        </van-tab>
        <van-tab title="猜价">
          <img
            class="head_img"
            src="/static/images/fen.png"
          >
          <p class="head_time">距离结束还有</p>
          <p class="head_title">{{guess_header.screenings_des}}·{{guess_header.total}}件商品</p>
          <ruleList
            :rule="guess_header.rule"
            :type="2"
          />
          <productList :product_list="guess_list" />
          <div class="bottom">历史猜价
            <img
              class="bottom_icon"
              src="/static/images/arrow.png"
              alt=""
            >
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>

</template>

<script>
import config from "@/config";
import { get, showTime } from "@/util";
import productList from "@/components/productList";
import ruleList from "@/components/ruleList";
export default {
  components: { productList, ruleList },
  data() {
    return {
      index: 0,
      loading: true,
      clock: 0,
      timeStamp: 0,
      targetTime: 0,
      auction: [],
      auction_list: [],
      auction_header: [],
      pickup: [],
      pickup_list: [],
      pickup_header: [],
      guess: [],
      guess_list: [],
      guess_header: []
    };
  },
  mounted() {
    this.productList();
  },
  methods: {
    async productList() {
      //   拍卖
      const auction = await get("AuctionIndex", {
        token: config.token
      });
      this.auction_list = auction.list;
      this.auction_header = auction.header;
      this.auction_header.rule = "拍卖";
      console.log("拍卖列表");
      console.log(this.auction_list);

      //   捡漏
      const pickup = await get("pick_up_list", {
        token: config.token
      });
      this.pickup_list = pickup.list;
      this.pickup_header = pickup.header;
      this.pickup_header.rule = "捡漏";
      console.log("捡漏列表");
      console.log(this.pickup_list);

      //   猜价
      const guess = await get("guess_list", {
        token: config.token
      });
      this.guess_list = guess.list;
      this.guess_header = guess.header;
      this.guess_header.rule = "猜价";
      console.log("猜价列表");
      console.log(this.guess_list);
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
}
.head_img {
  width: 690rpx;
  height: 116rpx;
  margin: 40rpx 30rpx 0px;
}
.head_time {
  position: absolute;
  top: 62rpx;
  font-size: 36rpx;
  color: #666;
  text-align: center;
  width: 750rpx;
}
.head_title {
  width: 100%;
  margin-top: 10rpx;
  font-size: 32rpx;
  text-align: center;
}
.head_rule {
  width: 300rpx;
  text-align: center;
  margin: 20rpx auto 40rpx;
  border-radius: 50px;
  border: 0.5px solid #bc2e2e;
  color: #bc2e2e;
  font-size: 24rpx;
  height: 50rpx;
  line-height: 50rpx;
  .rule_icon {
    width: 18rpx;
    height: 18rpx;
  }
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 630rpx;
  border: 1rpx solid #d9d9d9;
  margin-left: 30rpx;
  margin-bottom: 20rpx;
  border-radius: 8rpx;
  padding: 20rpx 30rpx;
  font-size: 32rpx;
  .bottom_icon {
    width: 30rpx;
    height: 30rpx;
  }
}
</style>

