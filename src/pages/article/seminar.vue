<template>
  <div>
    <img
      :src="host_img+head.pic_article"
      class="head_img"
    >
    <div class="head">
      <div class="head_title">{{head.title}}</div>
      <p class="head_content">{{head.summary}}</p>
    </div>
    <div
      class="detail"
      v-for="item in list"
      :key="item"
    >
      <div v-if="item.title" class="label">{{item.title}}</div>
      <corpusList :corpus_list="list[index].article_list" />
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import corpusList from "@/components/corpusList";
export default {
  components: {
    corpusList
  },
  data() {
    return {
      list: [],
      head: "",
      host_img: config.host_img
    };
  },
  onLoad(options) {
    Object.assign(this.$data, this.$options.data());
    this.id = options.id;
    this.requestList();
  },
  methods: {
    async requestList() {
      const head = await get("special_article_header", {
        id: this.id
      });
      this.head = head;
      console.log(this.head);
      const list = await get("special_article_list", {
        id: this.id
      });
      this.list = list.list;
      this.article_list = this.list[0].article_list;
      console.log(this.list);
    }
  }
};
</script>

<style lang="scss">
.head_img {
  width: 750rpx;
  height: 360rpx;
  background: #f4f4f4;
}
.head {
  width: 690rpx;
  padding: 30rpx;
  background: #fff;
  .head_title {
    font-style: 32rpx;
    color: #333;
  }
  .head_content {
    font-size: 28rpx;
    color: #666;
  }
}
.detail {
  background: #ffff;
  padding-bottom: 20rpx;
  .label {
    height: 100rpx;
    background: #f7f7f7;
    width: 690rpx;
    line-height: 100rpx;
    font-size: 32rpx;
    color: #666;
    padding: 0px 30rpx;
    margin-bottom: 20rpx;
  }
}
</style>

