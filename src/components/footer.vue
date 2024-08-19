<template>
  <div style="background-color: #ebe8f3;width: 100%;display: flex;flex-direction: row;">
    <div class="leftcontent"> </div>
    <div class="maincontent">
      <div class="logo">
        <img width="10%"
          src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/15/4fa4cd79-68bb-43f5-bbda-1143ac11d7d2.png" alt="">
      </div>
      <div class="menu">
        <div>
          <p>关于我们</p>
          <p>关于我们</p>
          <p>企业文化</p>
          <p>致投资者信函</p>
          <p>公司治理</p>
          <p>组织架构</p>
          <p>董事和监事</p>
          <p>发展日历</p>
          <p>廉政举报</p>
        </div>
        <div>
          <p>公司业务</p>
          <p>中国-钼钨</p>
          <p>刚果（金）-铜钴</p>
          <p>巴西-铌磷</p>
          <p>埃珂森</p>
          <p>钼</p>
          <p>钨</p>
          <p>铜</p>
          <p>钴</p>
          <p>铌</p>
          <p>磷</p>
        </div>
        <div>
          <p>可持续发展</p>
          <p>我们的方法</p>
          <p>健康与安全</p>
          <p>环境与生态</p>
          <p>多元包容的工作环境</p>
          <p>共创繁荣的社区</p>
          <p>负责任供应链</p>
          <p>政策与报告</p>
          <p>投诉与建议</p>
        </div>
        <div>
          <p>投资者关系与媒体</p>
          <p>业绩与报告</p>
          <p>公司公告</p>
          <p>行情走势</p>
          <p>新闻发布</p>
          <p>媒体聚焦</p>
          <p>投资者联络</p>
          <p>品牌资料</p>
          <p>全球动态</p>
        </div>
        <div>
          <p>职业发展</p>
          <p>人才战略</p>
          <p>社会招聘</p>
          <p>校园招聘</p>
          <p>欢迎围观</p>
        </div>
        <div>
          <p>多媒体资源库</p>
        </div>
      </div>
      <div class="wenjian">
        <div style="display: flex;flex-direction: row;">
          <div style="padding-right: 100px;"><img style="padding-right: 5px;" src="@/assets/img/index/star.png" alt="">2023年环境、社会及管制报告<img style="padding-left: 5px" src="@/assets/img/index/xiazai.png" alt=""></div>
          <div><img style="padding-right: 5px;" src="@/assets/img/index/star.png" alt="">2022年TFM环境，社会及管制报告<img style="padding-left: 5px" src="@/assets/img/index/xiazai.png" alt=""></div>
        </div>
        <div style="padding: 10px 0;">
          <img style="padding-right: 5px;" src="@/assets/img/index/star.png" alt="">碳中和路线图及行动方案<img style="padding-left: 5px" src="@/assets/img/index/xiazai.png" alt="">
        </div>
        <div class="lianxi">
          <div class="alllianxi">
            <div><img style="padding: 5px;" src="@/assets/img/index/phone.png" alt=""> 86 379 68658029</div>
            <div><img style="padding: 5px;" src="@/assets/img/index/dianhua.png" alt=""> 86 379 68658030</div>
            <div><img style="padding: 5px;" src="@/assets/img/index/email.png" alt=""> 603993@cmoc.com</div>
            <div><img style="padding: 5px;" src="@/assets/img/index/zhaopin.png" alt=""> chenchao@cmoc.com(招聘 专用)</div>
            <div><img style="padding: 5px;" src="@/assets/img/index/weizhi.png" alt=""> 中国河南省洛阳市栾川县城东新区画眉山路伊河以北</div>
          </div>
          <div>
            <img style="padding-right: 50px;"src="@/assets/img/index/qcode_cmoc.png" alt="">
            <img style="padding-right: 10px;" src="@/assets/img/index/qcode_lmqf.png" alt="">
          </div>
        </div>
        <div style="padding: 40px 0 0px 7px;">
          Copyright 2024 洛钼集团版权所有 All Rights Reserved.
        </div>
      </div>
    </div>
    <div class="rightcontent"> </div>
  </div>
</template>
<script>
export default {
  name: 'footer',
}
</script>
<style scoped>
.lianxi{
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 10px; */
}
.alllianxi{
  display: flex;
  flex-direction: column;
  color: rgb(119, 119, 119);
  font-size: 13px;
}
.alllianxi div{
  flex: 1;
}
.lianxi div div{
  display: flex;
  align-items: center;
}
.wenjian{
  width: 100%;
  padding: 40px 10px;
  color: rgb(119, 119, 119);
  font-size: 13px;
}
.leftcontent {
  width: 15%
}

.maincontent {
  width: 70%;
}

.rightcontent {
  width: 15%;
}

.logo {
  width: 100%;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid #aaaaaa;
}

.menu {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.menu div {
  border-bottom: 2px solid #9ecc66;
  /* text-align: center; */
  /* border-image: linear-gradient(to right, transparent 0%, #9ecc66 0%, #9ecc66 80%, transparent 0%) 1 stretch; */
}
.menu div p:first-child {
  font-weight: 600;
  color: rgb(77, 77, 77);
  font-size: 16px;
}
.menu div p{
  font-size: 14px;
  color: rgb(115, 115, 115);
}
</style>