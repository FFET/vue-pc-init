(function() {
  var s = document.createElement("script");
  s.src = "https://res.wx.qq.com/open/js/jweixin-1.0.0.js";
  var n = document.getElementsByTagName("script")[0];
  n.parentNode.insertBefore(s, n);
  s.onload = () => {
    fetch("https://m.shanghaim.net/fullstack/wechat/wxShare?url=" + location.href, {})
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          wx.config({
            debug: false,
            appId: result.appId,
            timestamp: result.timestamp,
            nonceStr: result.nonceStr,
            signature: result.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "scanQRCode"]
          });

          wx.ready(function() {
            // 在这里调用 API
            var s_title = document.title || "武汉加油", // 分享标题
              s_link = location.href, // 分享链接 目标链接url必须是 JS安全域名下的链接
              s_desc = "武汉加油!!!", //分享描述
              s_imgUrl = "http://jay.shanghaim.net/pic.jpeg"; // 分享图标
            //朋友圈
            wx.onMenuShareTimeline({
              title: s_title, // 分享标题
              link: s_link, // 分享链接
              imgUrl: s_imgUrl, // 分享图标
              desc: s_desc, // 分享描述
              success: function() {
                //用户确认分享后执行的回调函数
              },
              cancel: function() {
                // 用户取消分享后执行的回调函数
              }
            });
            //发送给好友
            wx.onMenuShareAppMessage({
              title: s_title, // 分享标题
              desc: s_desc, // 分享描述
              link: s_link, // 分享链接
              imgUrl: s_imgUrl, // 分享图标
              type: "", // 分享类型,music、video或link，不填默认为link
              dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
              success: function() {},
              cancel: function() {}
            });
          });
        }
      });
  };
})();
