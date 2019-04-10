//工具函数库
import config from './config'

export function get(url, data) {
    return request(url, 'GET', data)
}

export function post(url, data) {
    return request(url, 'POST', data)
}

function request(url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method,
            url: config.host_url + url,
            success: function (res) {
                // success
                if (res.data.result == 100) {
                    resolve(res.data.data)
                } else {
                    reject(res.data)
                }
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    })
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success',
        mask: true

    })
}

export function showModal(title, content) {
    wx.showModal({
        title,
        content,
        mask: true

    })

}

export function showLoading(text) {
    wx.showLoading({
        title: text,
        icon: 'loading',
        mask: true
    })
}

export function getTime(time) {
    if (time > 86400) {
        var theTime = parseInt(time); // 秒
        var theTime1 = 0; // 分
        theTime1 = parseInt(theTime / 86400);
        result = parseInt(theTime1) + "天";
        return result;
    } else {
        var theTime = parseInt(time); // 秒
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = "" + parseInt(theTime);
        if (theTime1 > 0) {
            result = "" + parseInt(theTime1) + ":" + result;
        }
        if (theTime2 > 0) {
            result = "" + parseInt(theTime2) + ":" + result;
        }
        return result;

    }
}
export function showTime(bb) {
    var day = parseInt(bb / 86400);
    var time = parseInt((bb - (day * 86400)) / 3600);
    var min = parseInt((bb - (time * 3600 + day * 86400)) / 60)
    var sinTime = time * 3600 + min * 60 + day * 86400
    var sin1 = parseInt((bb - sinTime))
    var thisTime = addEge(day) + "天" + addEge(time) + ":" + addEge(min) + ":" + addEge(sin1);
    bb <= 0 ? thisTime = "0天00:00:00" : thisTime;
    return thisTime;
}
/**
 * 点击放大图片
 */
export function previewImage(imgs, head, index) {
    var newUrl = [];
    var imgUrl = imgs;
    for (var i = 0; i < imgUrl.length; i++) {
        if (head == 0) {
            newUrl.push(config.host_img + imgUrl[i].file_path);
        } else {
            newUrl.push(imgUrl[i].file_path);
        }
    }
    wx.previewImage({
        urls: newUrl,
        current: newUrl[index]
    });
}

function addEge(a) {
    return a < 10 ? a = "0" + a : a = a
}