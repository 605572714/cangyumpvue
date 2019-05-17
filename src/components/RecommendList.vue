<template>
  <div>
    <div v-for="item in recommend_list" :key="item.index">
      <!-- 专题推荐 -->
      <div class="content" v-if="item.type==4" @click="godetail(item.type,item.id)">
        <div class="title">本期专题</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
      </div>
      <!-- 臻品推荐 -->
      <div class="content" v-if="item.type==23" @click="godetail(item.type,item.id)">
        <div class="title">臻品推荐</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
      </div>
      <!-- 众团推荐 -->
      <div class="content" v-if="item.type==31" @click="godetail(item.type,item.id)">
        <div class="title">{{item.title}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
      </div>
      <!-- 拼手气推荐 -->
      <div class="content" v-if="item.type==32" @click="godetail(item.type,item.id)">
        <div class="title">{{item.title}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
      </div>
      <!-- 拍卖推荐 -->
      <div class="content" v-if="item.type==11" @click="godetail(item.type,item.id)">
        <div class="title">{{item.title}}·{{item.amount}}件商品</div>
        <div class="time" v-if="item.status==1">开始时间：{{item.end_time}}</div>
        <div class="time" v-else-if="item.status==2">结束时间：{{item.end_time}}</div>
        <div class="time" v-else>结束时间：{{item.end_time}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
        <div class="status" v-if="item.status==1">即将开始</div>
        <div class="status" v-else-if="item.status==2">进行中</div>
        <div class="status gray" v-else>已结束</div>
      </div>
      <!-- 捡漏推荐 -->
      <div class="content" v-if="item.type==14" @click="godetail(item.type,item.id)">
        <div class="title">{{item.title}}·{{item.amount}}件商品</div>
        <div class="time" v-if="item.status==1">开始时间：{{item.end_time}}</div>
        <div class="time" v-else-if="item.status==2">结束时间：{{item.end_time}}</div>
        <div class="time" v-else>结束时间：{{item.end_time}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
        <div class="status" v-if="item.status==1">即将开始</div>
        <div class="status" v-else-if="item.status==2">进行中</div>
        <div class="status gray" v-else>已结束</div>
      </div>
      <!-- 猜价格推荐 -->
      <div class="content" v-if="item.type==17" @click="godetail(item.type,item.id)">
        <div class="title">{{item.title}}·{{item.amount}}件商品</div>
        <div class="time" v-if="item.status==1">开始时间：{{item.end_time}}</div>
        <div class="time" v-else-if="item.status==2">结束时间：{{item.end_time}}</div>
        <div class="time" v-else>结束时间：{{item.end_time}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
        <div class="status" v-if="item.status==1">即将开始</div>
        <div class="status" v-else-if="item.status==2">进行中</div>
        <div class="status gray" v-else>已结束</div>
      </div>
      <!-- 秒杀推荐 -->
      <div class="content" v-if="item.type==21" @click="godetail(item.type,item.c_id)">
        <div class="title">{{item.title}}·{{item.amount}}件商品</div>
        <div class="time" v-if="item.status==1">开始时间：{{item.end_time}}</div>
        <div class="time" v-else-if="item.status==2">结束时间：{{item.end_time}}</div>
        <div class="time" v-else>结束时间：{{item.end_time}}</div>
        <img class="image" :src="host_img+item.headlines" mode="aspectFill">
        <div class="status" v-if="item.status==1">即将开始</div>
        <div class="status" v-else-if="item.status==2">进行中</div>
        <div class="status gray" v-else>已结束</div>
      </div>
    </div>
    <!-- 团购推荐 -->
    <div class="content" v-for="item in prepare" :key="item" @click="goprepare(item.id)">
      <img class="image" :src="host_img+item.pic_url" mode="aspectFill">
      <div class="content_title">{{item.title}}</div>
      <div class="progress">
        <div v-if="item.schedule<100">
          <van-progress :percentage="item.schedule" color="#bc2e2e"/>
        </div>
        <div v-else>
          <van-progress
            :percentage="item.schedule"
            color="linear-gradient(90deg, #d43131, #751c75)"
          />
        </div>
        <div class="price">￥{{item.price_least}}起</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["recommend_list", "prepare"],
  data() {
    return {
      host_img: config.host_img
    };
  },
  onLoad() {},
  methods: {
    godetail(type, id) {
      switch (Number(type)) {
        case 4: //专题
          wx.navigateTo({
            url: "article/seminar?id=" + id
          });
          break;
        case 11: //拍卖
          wx.navigateTo({
            url: "auction/detail?id=" + id
          });
          break;
        case 14: //捡漏
          wx.navigateTo({
            url: "pickup/detail?id=" + id
          });
          break;
        case 17: //猜价格
          wx.navigateTo({
            url: "guess/list?id=" + id
          });
          break;
        case 21: //秒杀
          wx.navigateTo({
            url: "spike/product?id=" + id
          });
          break;
        case 23: //臻品
          wx.navigateTo({
            url: "fakegoods/detail?id=" + id
          });
          break;
        case 31: //众团
          // wx.navigateTo({
          //   url: "fakegoods/detail?id=" + id
          // });
          break;
        case 32: //拼手气
          // wx.navigateTo({
          //   url: "fakegoods/detail?id=" + id
          // });
          break;
      }
    },
    //跳转团购
    goprepare(id) {
      wx.navigateTo({
        url: "prepare/detail?id=" + id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: block;
  width: 690rpx;
  padding: 0 30rpx;
  background: #fff;
  .title {
    text-align: center;
    padding-top: 40rpx;
    font-size: 34rpx;
  }
  .time {
    text-align: center;
    font-size: 24rpx;
    color: #bc2e2e;
  }
  .image {
    width: 690rpx;
    height: 376rpx;
    margin: 30rpx 0;
    border-radius: 8rpx;
  }
  .status {
    display: inline-block;
    font-size: 24rpx;
    width: 120rpx;
    height: 44rpx;
    line-height: 44rpx;
    text-align: center;
    color: #fff;
    background: #bc2e2e;
    position: absolute;
    z-index: 99;
    left: 50rpx;
    margin-top: 30rpx;
  }
  .gray {
    background: lightgray;
    color: #666;
  }
  .content_title {
    font-size: 32rpx;
  }
  .progress {
    margin-top: 20rpx;
    .price {
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      margin-top: 20rpx;
      color: #bc2e2e;
    }
  }
}
</style>
  