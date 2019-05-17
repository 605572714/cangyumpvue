<script>
import config from "@/config";
import { showModal, getCheckToken } from "@/util";
export default {
  onLaunch() {
    console.log("小程序启动了");
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("LOGS") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("LOGS", logs);
    const token = wx.getStorageSync("TOKEN");
    const avatar = wx.getStorageSync("AVATAR");
    const mobile_bind = wx.getStorageSync("MOBILE_BIND");
    const name = wx.getStorageSync("NAME");
    const sign = wx.getStorageSync("SIGN");
    const user_id = wx.getStorageSync("USER_ID");

    config.token = token;
    config.avatar = avatar;
    config.mobile_bind = mobile_bind;
    config.name = name;
    config.sign = sign;
    config.user_id = user_id;
  },

  methods: {
  },

  // },
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
