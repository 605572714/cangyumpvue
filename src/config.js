//配置项

const token = wx.getStorageSync("token");
const name = wx.getStorageSync("name");
const avatar = wx.getStorageSync("avatar");
const user_id = wx.getStorageSync("user_id");
const host_url = 'https://app.icangyu.com/icyApi/'
const host_img = 'https://app.icangyu.com'
// const host_url = 'https://testapp.icangyu.com/icyApi/'
// const host_img = 'https://testapp.icangyu.com'

const config = {
    token,
    name,
    avatar,
    user_id,
    host_url,
    host_img,
    loginUrl: `${host_url}applet_wx_login`
}

export default config