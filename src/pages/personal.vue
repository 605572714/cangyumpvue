<template>
  <div>
    <div class="top">
      <img
        class="background"
        src="/static/images/personal.png"
      >
      <div class="personal">
        <img
          class="avatar"
          v-if="token"
          :src="avatar"
        >
        <img
          class="avatar"
          v-else
          src="/static/images/avatar.png"
        >
        <div
          class="text"
          v-if="token"
        >
          <van-button
            size="small"
            custom-class="button"
          >{{name}}
          </van-button>
          <p class="content">爱藏玉爱生活</p>
        </div>
        <div
          class="text"
          v-else
        >
          <van-button
            size="small"
            custom-class="button"
            open-type="getUserInfo"
            lang="zh_CN"
            @getuserinfo="login"
          >点击登录
          </van-button>
          <p class="content">登录享有更多特权</p>
        </div>
      </div>
    </div>
    <personalDetail />
  </div>
</template>

<script>
import config from "@/config";
import personalDetail from "@/components/personalDetail";
import { showSuccess, showLoading, get, showModal } from "@/util";
export default {
  components: {
    personalDetail
  },
  data() {
    return {
      name: config.name,
      avatar: config.avatar,
      token: config.token,
      user_id: config.user_id
    };
  },
  onLoad() {
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
      console.log(login)
      this.name = res.userInfo.nickName;
      this.avatar = res.userInfo.avatarUrl;
      this.token = login.token;
      if (this.token) {
        wx.hideLoading();
      }
      wx.setStorageSync("USERINFO", res.userInfo);
      wx.setStorageSync("MANE", login.nickname);
      wx.setStorageSync("AVATAR", config.host_img+login.avatar);
      wx.setStorageSync("TOKEN", login.token);
      wx.setStorageSync("MOBILE_BIND", login.mobile_bind);
      wx.setStorageSync("USER_ID", login.user_id);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 750rpx;
  height: 280rpx;
  position: relative;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .personal {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 70rpx 30rpx;
    .avatar {
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      margin-right: 10rpx;
    }
    .text {
      display: flex;
      flex-direction: column;
      padding: 20rpx 10rpx;
    }

    .content {
      padding-left: 20rpx;
      font-size: 28rpx;
      color: #fff;
    }
  }
}
</style>
<style>
.button {
  background: none !important;
  border: none !important;
  font-size: 36rpx !important;
  color: #fff !important;
}
</style>
