<template>
  <div v-if="identify_list">
    <div
      class="contianer"
      v-for="item in identify_list"
      :key="item.id"
      @click="godetail"
      :id="item.id"
    >
      <identifyList :identify_list="item" />
      <!-- 评论列表 -->
      <p
        class="hr"
        v-if="item.palm.length>0&&item.comment_list.length>0"
      />
      <div
        class="discuss"
        v-for="(item,id) in item.comment_list"
        :key="item.id"
      >
        <p><span :style="item.user_type==1?'color:#bc2e2e':''">{{item.nickname_comment}}</span><span v-if="item.reply_type==1"> 回复 <span :style="item.user_type==1?'color:#bc2e2e':''">{{item.tonickname}}</span></span>：{{item.comment}}</p><br />
      </div>
      <p
        class="more"
        v-if="item.comment_all>3"
      >查看所有{{item.comment_all}}条评论...</p>
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import identifyList from "@/components/identifyList";
export default {
  components: { identifyList },
  data() {
    return {
      identify_list: [],
      page: 0,
      loading: true
    };
  },
  mounted() {
    this.requestList();
  },
  onHide() {
    // this.identify_list = [];
  },
  methods: {
    async requestList() {
      const identify = await get("identify_list", {
        token: config.token,
        page: this.page
      });
      this.identify_list = this.identify_list.concat(identify.list);
      for (var i = 0; i < this.identify_list.length; i++) {
        var item = this.identify_list[i];
        var str = item.album[0].file_path;
        if (str.indexOf("cangyu9") != -1) {
          this.identify_list[i].haveHead = 1;
        } else {
          this.identify_list[i].haveHead = 0;
        }
      }
      console.log(this.identify_list);
    },
    // 跳转详情
    godetail(e) {
      var id = e.currentTarget.id;
      console.log(id);

      wx.navigateTo({
        url: "detail?id=" + id
      });
    }
  },

  // 下拉刷新方法，与methods方法同级
  async onPullDownRefresh() {
    // to doing..
    // 停止下拉刷新
    this.page = 0;
    this.loading = true;
    this.identify_list = [];
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
.contianer {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
  .hr {
    border-top: 1rpx solid #d9d9d9;
    margin-bottom: 10rpx;
  }
  .discuss {
    font-size: 28rpx;
    margin-top: 20rpx;
    color: #666;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 1; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
  }
  .more {
    // margin: 20rpx 0px;
    margin-top: 20rpx;
    font-size: 28rpx;
    color: #888;
  }
}
</style>
