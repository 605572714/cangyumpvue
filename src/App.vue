<script>
import config from "@/config";
import { showModal } from "@/util";
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    console.log("小程序启动了");
    if (!config.token) {
      wx.switchTab({
        url: "pages/personal"
      });
      showModal("", "请登录获取更多权限");
    }
  },
  /**
   * 页面下拉触顶事件的处理函数
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {}
};
</script>

<style>
page {
  background: #f7f7f7;
}
</style>
