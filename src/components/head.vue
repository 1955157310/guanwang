<template>
  <div class="headmain">
    <div class="topHead">
      <img src="@/assets/img/index/toplogo.png" alt="" width="30%">
      <div class="search">
        <el-input placeholder="搜索" suffix-icon="el-icon-search
" v-model="searchData">
        </el-input>
      </div>
    </div>
    <div class="menu">
      <div @click="tomodular('/aboutIndex')">关于我们</div>
      <div @click="tomodular('/businessIndex')">公司业务</div>
      <div @click="tomodular('/continuedIndex')">可持续发展</div>
      <div @click="tomodular('/mediaIndex')">投资者关系与媒体</div>
      <div @click="tomodular('/developmentIndex')">职业发展</div>
      <div @click="tomodular('/resourcesIndex')">多媒体资源库</div>
    </div>
    <div style="width: 100%;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="item in swiperList" :key="item.id" class="swiper-slide"
            :style="{ backgroundImage: `url(${item.imgUrl})`, backgroundSize: '100% 100%' }">
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

    </div>
    <div>

    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
export default {
  name: 'head',
  data() {
    return {
      searchData: '',
      swiper: null,
      swiperList: [{
        id: 1,
        title: '采集国家二级保护野生植物审批',
        imgUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/13/6685123d-dba8-435d-9e51-8691f7229cb6.png'
      }, {
        id: 2,
        title: '农村危房改造',
        imgUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/13/6685123d-dba8-435d-9e51-8691f7229cb6.png'
      }]
    };
  },
  mounted() {
    this.getSwiper()
  },
  methods: {
    getSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 无缝
        autoplay: { //自动开始
          delay: 3000, //时间间隔
          disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        paginationClickable: true,

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 窗口变化,重新init,针对F11全屏和放大缩小,必须加
        observer: true,
        observeParents: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 分页器可以点击
        },
      })
    },
    tomodular(path) {
      this.$router.push({
        path:path
      })
    }
  }
}
</script>
<style scoped>
.headmain {
  width: 100%;
}

.topHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5%;
  background-color: #fff;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .el-input__inner {
  border-radius: 20px !important;
}

.menu {
  display: flex;
  flex-direction: row;
  padding: 15px 15%;
  background-color: #4c3a8c;
}

.menu div {
  padding: 0 6% 0 0;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
}

.swiper-slide {
  position: relative;
  height: 558px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #F7F8FA;
}

.swiper-button-prev {
  color: #fff
}

.swiper-button-next {
  color: #fff
}

::v-deep .swiper-pagination-bullet-active {
  background-color: #777777 !important;
}
</style>