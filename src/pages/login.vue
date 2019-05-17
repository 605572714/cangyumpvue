<template>
  <div>
      <img src="/static/images/logo.png">
      <button
        class="button"
        custom-class="button"
        open-type="getUserInfo"
        lang="zh_CN"
        @getuserinfo="login"
      >点击登录</button>
  </div>
</template>

<script>
import config from "@/config";
import { show, showSuccess, showLoading, get, showModal } from "@/util";
export default {
  data() {
    return {};
  },
  onLoad() {
    console.log("登录页面");
    wx.setNavigationBarTitle({
      title: "登录页面"
    });
  },
  methods: {
    login() {
      var self = this;
      wx.login({
        success: res => {
          self.code = res.code;
          wx.getUserInfo({
            success: function(res) {
              showLoading("登录中");
              self.loginsuccess(res);
            },
            fail: function(res) {
              showModal("登录失败", "请登录以获取更多权限");
            },
            complete: function() {}
          });
        },
        fail: function() {},
        complete: function() {}
      });
    },
    async loginsuccess(res) {
      const login = await get("applet_wx_login", {
        appid: "wx8f46b59fc07d588c",
        appsecret: "19317a00f32eddaa9fd70d3105928336",
        code: this.code,
        encryptedData: res.encryptedData,
        iv: res.iv
      });
      console.log(login);
      this.name = res.userInfo.nickName;
      this.avatar = res.userInfo.avatarUrl;
      this.token = login.token;
      if (this.token) {
        wx.hideLoading();
        wx.setStorageSync("USERINFO", res.userInfo);
        wx.setStorageSync("MANE", login.nickname);
        wx.setStorageSync("AVATAR", config.host_img + login.avatar);
        wx.setStorageSync("TOKEN", login.token);
        wx.setStorageSync("MOBILE_BIND", login.mobile_bind);
        wx.setStorageSync("USER_ID", login.user_id);
      }
      if (login.mobile_bind != "y") {
        wx.redirectTo({
          url: "/pages/getPhone"
        });
        return;
      }
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss">
page {
  background: #fff;
  margin: 0 auto;
  img {
    width: 160rpx;
    height: 160rpx;
    margin: 300rpx 295rpx;
  }
  .button {
    width: 670rpx;
    margin-top: -200rpx;
    background: #bc2e2e;
    margin-left: 40rpx;
    color: #fff;
    border-radius: 6rpx;
  }
}
</style>
