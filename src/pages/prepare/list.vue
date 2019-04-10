<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <van-tabs swipeable>
      <van-tab title="团购">
        <prepareList :prepare_list="prepare_list" />
      </van-tab>
      <van-tab title="众团">
        <groupList :group_list="group_list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { get } from "@/util";
import prepareList from "@/components/prepareList";
import groupList from "@/components/groupList";

export default {
  components: {
    prepareList,
    groupList
  },
  data() {
    return {
      index: 0,
      loading: true,
      prepare_list: [],
      group_list: [],
      price: "",
      imgfinish: false,
      page: 0
    };
  },
  onLoad() {
    this.requestList();
  },
  methods: {
    async requestList() {
      //团购列表
      const prepare_list = await get("prepare_list", {
        page: this.page
      });
      this.prepare_list = this.prepare_list.concat(prepare_list.list);
      // console.log("list");
      // console.log(this.prepare_list);
      // 众团列表
      const group_list = await get("group_list", {
        page: this.page
      });
      this.group_list = this.group_list.concat(group_list.list);
      // console.log("list");
      // console.log(this.group_list);
      this.loading = false;
    }
  },

  // 下拉刷新方法，与methods方法同级
  async onPullDownRefresh() {
    // to doing..
    // 停止下拉刷新
    this.page = 0;
    this.loading = true;
    this.prepare_list = [];
    this.group_list = [];
    this.requestList();
    wx.stopPullDownRefresh();
  },

  // 上拉加载，拉到底部触发
  onReachBottom() {
    // 到这底部在这里需要做什么事情
    this.loading = true;
    this.page += 10;
    this.requestList();
  }
};
</script>

<style lang="scss" scoped>
</style>
