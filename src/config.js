//配置项

const token = null,
      name = null,
      avatar = null,
      user_id = null,
      mobile_bind=null,
      sign=null;
// const host_url = 'https://app.icangyu.com/icyApi/'
// const host_img = 'https://app.icangyu.com'
const host_url = 'http://testicy.icangyu.com/icyApi/'
const host_img = 'https://testicy.icangyu.com'

const config = {
    token,
    name,
    avatar,
    user_id,
    sign,
    mobile_bind,
    host_url,
    host_img,
    loginUrl: `${host_url}applet_wx_login`
}

export default config