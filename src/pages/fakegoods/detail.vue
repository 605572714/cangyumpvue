<template>
  <div
    class="page"
    v-if="list"
  >
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <div class="wxparse">
      <wxParse :content="content" />
    </div>
    <!-- 市场估价 -->
    <div
      class="price"
      v-if="list.price_des"
    >
      <p class="left">市场估价:</p>
      <div class="right">
        <div
          v-for="list in list.price_des"
          :key="list.index"
        >
          <div>{{list.title}}估价<span>￥{{list.value}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 品质/服务 -->
    <div>
      <Quality :quality_list="quality_list" />
    </div>
    <button
      class="button"
      open-type="contact"
      :send-message-title="list.share_content"
      show-message-card="true"
      hover-class='none'
    >购买咨询</button>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import wxParse from "mpvue-wxparse";
import Quality from "@/components/Quality";
export default {
  components: {
    wxParse,
    Quality
  },
  data() {
    return {
      content: "<div>CSDN: mossbaoo</div>",
      quality_list: "",
      loading: true,
      list: "",
      id: ""
    };
  },
  onLoad(options) {
    Object.assign(this.$data, this.$options.data());
    //   获取传入id
    console.log(options);
    this.id = options.id;
    this.request();
  },
  methods: {
    //   请求数据
    async request() {
      const list = await get("fakeGoods_details", {
        token: config.token,
        id: this.id
      });
      this.list = list.list;
      this.content = this.list.content;
      this.quality_list = this.list.attributes;
      this.loading = false;
      console.log(this.list);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.page {
  margin-bottom: 98rpx;
  .wxparse {
    background: #fff;
    padding: 0px 30rpx 20rpx;
  }
  .price {
    width: 100%;
    margin: 20rpx 0px;
    padding: 30rpx;
    background: #fff;
    display: flex;
    flex-direction: row;
    .left {
      width: 20%;
      font-size: 30rpx;
    }
    .right {
      display: flex;
      flex-direction: column;
      font-size: 30rpx;
      color: #808080;
      span {
        padding-left: 20rpx;
        color: #bc2e2e;
        float: right;
      }
    }
  }
  .content {
    padding: 40rpx 30rpx;
    background: #fff;
  }
  .button {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 98rpx;
    background: #bc2e2e;
    border-radius: 0;
    color: #fff;
  }
}
</style>
