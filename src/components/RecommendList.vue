<template>
  <div>
    <div
      v-for="item in recommend_list"
      :key="item.index"
    >
      <!-- 专题推荐 -->
      <div
        class="content"
        v-if="item.type==4"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">本期专题</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
      </div>
      <!-- 臻品推荐 -->
      <div
        class="content"
        v-if="item.type==23"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">臻品推荐</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
      </div>
      <!-- 众团推荐 -->
      <div
        class="content"
        v-if="item.type==31"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
      </div>
      <!-- 拼手气推荐 -->
      <div
        class="content"
        v-if="item.type==32"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
      </div>
      <!-- 拍卖推荐 -->
      <div
        class="content"
        v-if="item.type==11"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}·{{item.amount}}件商品</div>
        <div
          class="time"
          v-if="item.status==1"
        >开始时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else-if="item.status==2"
        >结束时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else
        >结束时间：{{item.end_time}}</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
        <div
          class="status"
          v-if="item.status==1"
        >即将开始</div>
        <div
          class="status"
          v-else-if="item.status==2"
        >进行中</div>
        <div
          class="status gray"
          v-else
        >已结束</div>
      </div>
      <!-- 捡漏推荐 -->
      <div
        class="content"
        v-if="item.type==14"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}</div>
        <div
          class="time"
          v-if="item.status==1"
        >开始时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else-if="item.status==2"
        >结束时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else
        >结束时间：{{item.end_time}}</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
        <div
          class="status"
          v-if="item.status==1"
        >即将开始</div>
        <div
          class="status"
          v-else-if="item.status==2"
        >进行中</div>
        <div
          class="status gray"
          v-else
        >已结束</div>
      </div>
      <!-- 猜价格推荐 -->
      <div
        class="content"
        v-if="item.type==17"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}</div>
        <div
          class="time"
          v-if="item.status==1"
        >开始时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else-if="item.status==2"
        >结束时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else
        >结束时间：{{item.end_time}}</div>
        <image
          :class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
        <div
          class="status"
          v-if="item.status==1"
        >即将开始</div>
        <div
          class="status"
          v-else-if="item.status==2"
        >进行中</div>
        <div
          class="status gray"
          v-else
        >已结束</div>
      </div>
      <!-- 秒杀推荐 -->
      <div
        class="content"
        v-if="item.type==21"
        @click="godetail(item.type,item.id)"
      >
        <div class="title">{{item.title}}</div>
        <div
          class="time"
          v-if="item.status==1"
        >开始时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else-if="item.status==2"
        >结束时间：{{item.end_time}}</div>
        <div
          class="time"
          v-else
        >结束时间：{{item.end_time}}</div>
        <image
          class="image"
          :src="host_img+item.headlines"
          mode='aspectFill'
        />
        <div
          class="status"
          v-if="item.status==1"
        >即将开始</div>
        <div
          class="status"
          v-else-if="item.status==2"
        >进行中</div>
        <div
          class="status gray"
          v-else
        >已结束</div>
      </div>
    </div>
    <!-- 团购推荐 -->
    <div
      class="content"
      v-if="prepare"
      @click="godetail(prepare.type,prepare.id)"
    >
      <div class="title">本期团购</div>
      <image
        class="image"
        :src="host_img+prepare.pic_url"
        mode='aspectFill'
      />
      <div class="content_title">{{prepare.title}}</div>
      <div class="progress">
        <div v-if="prepare.schedule<100">
          <van-progress
            :percentage="prepare.schedule"
            color=#bc2e2e
          />
        </div>
        <div v-else>
          <van-progress
            :percentage="prepare.schedule"
            color="linear-gradient(90deg, #d43131, #751c75)"
          />
        </div>
        <div class="price">￥{{prepare.price_least}}起</div>
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
  onLoad() {
    console.log(this);
  },
  methods: {
    godetail(type, id) {
      if (type == 4) {
        this.$router.push({ path: "article/articleDetail?id=" + id });
      } else if (type == 8) {
        this.$router.push({ path: "auction/detail?id=" + id });
      } else if (type == 13) {
        this.$router.push({ path: "prepare/detail?id=" + id });
      } else if (type == 14) {
        this.$router.push({ path: "pickup/detail?id=" + id });
      } else if (type == 15) {
        this.$router.push({ path: "article/seminar?id=" + id });
      } else if (type == 18) {
        this.$router.push({ path: "guess/detail?id=" + id });
      } else if (type == 20) {
        this.$router.push({ path: "fakegoods/detail?id=" + id });
      } else if (type == 22) {
        this.$router.push({ path: "spike/detail?id=" + id });
      } else if (type == 32) {
        this.$router.push({ path: "pinshouqi/detail?id=" + id });
      }
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
    background: #f4f4f4;
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
  