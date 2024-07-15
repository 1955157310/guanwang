<template>
    <div class="main">
        <head1></head1>
        <div class="info">
            <div class="infoItem">
                <div style="color: #73669c;font-weight: 600;border-right: 2px solid #73669c;
  border-image: linear-gradient(to bottom, transparent 20%, #73669c 20%, #73669c 80%, transparent 80%) 1 100%;">股价</div>
                <div style="color: #73669c;font-weight: 600;border-bottom: 2px solid #73669c;border-image: linear-gradient(to left, transparent 15%, #73669c 15%, #73669c 85%, transparent 85%) 1  stretch;">A股 603993.SH</div>
                <div style="color: #73669c;font-weight: 600;border-bottom: 2px solid #73669c;border-image: linear-gradient(to left, transparent 15%, #73669c 15%, #73669c 85%, transparent 85%) 1  stretch;">H股 03993.HK</div>
            </div>
            <div class="infoItem">
                <div style="color: #73669c;font-weight: 600;">公司公告</div>
                <div class="shangjiaosuo" style="color: #73669c;">上交所</div>
                <div style="color: #73669c;">洛阳钼业薪酬委员会工作细则</div>
            </div>
            <div class="infoItem">
                <div style="color: #73669c;">上交所</div>
                <div style="color: #73669c;">洛阳钼业H股市场公告</div>
            </div>
        </div>
        <div class="map">
            <img width="100%" src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/15/444f1079-ba16-431d-89bd-8685da33ef79.png" alt="">
        </div>
        <div class="kechixu">
            <div class="kechixuleft">
                <div class="kechixuText">
                    <div style="color: #73669c;padding-bottom: 5px;">
                        践行高标准可持续发展理念
                    </div>
                    <div style="color: #9fc37f;padding-top: 5px;">
                        实现MSCI ESG AA级评价
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <video
                        src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/5150066b-92f7-4b96-a80e-a5cb7c779b40.mp4"
                        height="300px" controls="controls" style="border: 5px solid #fff;">
                        您的浏览器不支持 video 标签。
                    </video>

                </div>
            </div>
        </div>
        <div class="luxian">
            <div style="width: 50%;">
                <div class="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(item, index) in swiperList" :key="index"
                            :class="{ 'active': currentIndex === index }"
                            :style="{ 'background-image': `url(${item.imgUrl})` }">
                        </div>
                    </div>
                </div>
            </div>
            <div class="luxianright">
                <div>
                    <div class="luxianText">
                        <div style="color: #73669c;padding-bottom: 5px;">
                            清晰的环境治理路线图
                        </div>
                        <div style="color: #9fc37f;padding-top: 5px;">
                            2030碳达峰，2050碳中和
                        </div>
                    </div>
                    <div style="display: flex;flex-direction: row;justify-content: left;padding: 5px 0">
                        <div class="swiper-button-next1" @click="prevSlide"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png"
                                alt=""></div>
                        <div class="swiper-button-prev1" @click="nextSlide"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/c1436202-3c06-4dfe-bfbb-95064e10a5ee.png"
                                alt=""></div>
                    </div>
                    <div style="color: #939298;">
                        {{ currentIndex + 1 }}共{{ swiperList.length }}个
                    </div>
                </div>
            </div>
        </div>
        <div class="fazhan">
            <div class="fazhanleft">
                <div>
                    <div class="fazhanText">
                        <div style="color: #73669c;padding-bottom: 5px;">
                            清晰的环境治理路线图
                        </div>
                        <div style="color: #9fc37f;padding-top: 5px;">
                            2030碳达峰，2050碳中和
                        </div>
                    </div>
                    <div style="display: flex;flex-direction: row;justify-content: left;padding: 5px 0">
                        <div class="swiper-button-next1" @click="prevSlide1"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png"
                                alt=""></div>
                        <div class="swiper-button-prev1" @click="nextSlide1"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/c1436202-3c06-4dfe-bfbb-95064e10a5ee.png"
                                alt=""></div>
                    </div>
                    <div style="color: #939298;">
                        {{ currentIndex1 + 1 }}共{{ swiperList1.length }}个
                    </div>
                </div>
            </div>
            <div style="width: 50%;">
                <div class="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(item, index) in swiperList1" :key="index"
                            :class="{ 'active': currentIndex1 === index }"
                            :style="{ 'background-image': `url(${item.imgUrl})` }">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guanzhi">
            <div style="width: 50%;">
                <div class="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(item, index) in swiperList2" :key="index"
                            :class="{ 'active': currentIndex2 === index }"
                            :style="{ 'background-image': `url(${item.imgUrl})` }">
                        </div>
                    </div>
                </div>
            </div>
            <div class="guanzhiright">
                <div>
                    <div class="guanzhiText">
                        <div style="color: #73669c;padding-bottom: 5px;">
                            清晰的环境治理路线图
                        </div>
                        <div style="color: #9fc37f;padding-top: 5px;">
                            2030碳达峰，2050碳中和
                        </div>
                    </div>
                    <div style="display: flex;flex-direction: row;justify-content: left;padding: 5px 0">
                        <div class="swiper-button-next1" @click="prevSlide2"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png"
                                alt=""></div>
                        <div class="swiper-button-prev1" @click="nextSlide2"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/c1436202-3c06-4dfe-bfbb-95064e10a5ee.png"
                                alt=""></div>
                    </div>
                    <div style="color: #939298;">
                        {{ currentIndex2 + 1 }}共{{ swiperList2.length }}个
                    </div>
                </div>
            </div>
        </div>
        <div class="xinwen">
            <div class="xinwenMain">
                <div class="xinwenTitle">新闻发布</div>
                <div class="xinwenContent">
                    <div class="xinwenletf">
                        <div class="xinwen1" :style="{ backgroundImage: `url(${newsData[currentIndex3].imageUrl})` }">


                        </div>
                        <div style="padding: 10px 0;">{{ newsData[currentIndex3].text }}</div>
                        <div class="xinwen2"
                            :style="{ backgroundImage: `url(${newsData[currentIndex3 + 1].imageUrl})` }">


                        </div>
                        <div style="padding: 10px 0;">{{ newsData[currentIndex3 + 1].text }}</div>
                    </div>
                    <div class="xinwen3">
                        <div class="xinwen3"
                            :style="{ backgroundImage: `url(${newsData[currentIndex3 + 2].imageUrl})` }"></div>
                        <div style="padding: 10px 0;">{{ newsData[currentIndex3 + 2].text }}</div>
                    </div>

                </div>
            </div>
            <div style="width: 80%;display: flex;justify-content: right;">
                <div>
                    <div style="display: flex;flex-direction: row;align-items: center;">
                        <div class="swiper-button-next1" @click="prevNews"><img
                                src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png"
                                alt=""></div>
                        <div>
                            <div class="swiper-button-prev1" @click="nextNews"><img
                                    src="https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/c1436202-3c06-4dfe-bfbb-95064e10a5ee.png"
                                    alt=""></div>
                        </div>
                        <div style="padding-left: 10px;font-size: 22px;color: #73669c;">查看更多</div>
                    </div>
                </div>
            </div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
Vue.use(Swipe);
Vue.use(SwipeItem);
import head1 from "../components/head.vue";
import footer1 from "../components/footer.vue";
export default {
    components: {
        head1,
        footer1,
    },
    data() {
        return {
            currentIndex3: 0,
            currentIndex2: 0,
            currentIndex1: 0,
            currentIndex: 0,
            searchData: '',
            swiper: null,
            newsData: [
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png', text: '新闻1' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/2b774be3-e977-42ec-b65f-334f4cba63f0.jpeg', text: '新闻2' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/c07076dc-49b5-4f3b-97bd-5e6b2decf9bb.jpeg', text: '新闻3' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/737087bc-d4b6-4fd6-b064-2e1d03f368de.jpeg', text: '新闻4' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/2497cebb-2e7f-4b1f-ad85-78d7dfc8e7a1.jpeg', text: '新闻5' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/13/6685123d-dba8-435d-9e51-8691f7229cb6.png', text: '新闻6' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/2497cebb-2e7f-4b1f-ad85-78d7dfc8e7a1.jpeg', text: '新闻7' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/62a85780-3feb-4252-a700-80c54767bff7.png', text: '新闻8' },
                { imageUrl: 'https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/14/2b774be3-e977-42ec-b65f-334f4cba63f0.jpeg', text: '新闻9' },
            ],
            swiperList: [{
                id: 1,
                title: '采集国家二级保护野生植物审批',
                imgUrl: require('@/assets/img/index/huanjing1.jpeg')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/huanjing2.jpeg')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/huanjing3.jpeg')
            }],
            swiperList1: [{
                id: 1,
                title: '采集国家二级保护野生植物审批',
                imgUrl: require('@/assets/img/index/shequ1.jpeg')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/shequ2.jpeg')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/shequ3.jpeg')
            }],
            swiperList2: [{
                id: 1,
                title: '采集国家二级保护野生植物审批',
                imgUrl: require('@/assets/img/index/guanzhi1.png')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/guanzhi2.png')
            }, {
                id: 2,
                title: '农村危房改造',
                imgUrl: require('@/assets/img/index/guanzhi3.jpeg')
            }],
            autoplayInterval: 3000 // 3 seconds
        };
    },
    mounted() {
        this.startAutoplay()
        // this.getSwiper()
    },
    beforeDestroy() {
        this.stopAutoplay()
    },
    methods: {
        startAutoplay() {
            this.autoplayTimer = setInterval(() => {
                this.nextSlide()
            }, this.autoplayInterval)
        },
        stopAutoplay() {
            clearInterval(this.autoplayTimer)
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.swiperList.length
        },
        prevSlide1() {
            this.currentIndex1 = (this.currentIndex1 - 1 + this.swiperList1.length) % this.swiperList1.length
        },
        nextSlide1() {
            this.currentIndex1 = (this.currentIndex1 + 1) % this.swiperList1.length
        },
        prevSlide2() {
            this.currentIndex2 = (this.currentIndex2 - 1 + this.swiperList2.length) % this.swiperList2.length
        },
        nextSlide2() {
            this.currentIndex2 = (this.currentIndex2 + 1) % this.swiperList2.length
        },
        prevNews() {
            this.currentIndex3 = (this.currentIndex3 - 3 + this.newsData.length) % this.newsData.length;
        },
        nextNews() {
            this.currentIndex3 = (this.currentIndex3 + 3) % this.newsData.length;
        },
    }
}
</script>
<style scoped>
.main {
    width: 100%;
    /* background-image: url(https://ctdr.ccmapp.cn/gateway/file/statics/2024/07/13/6b570830-8132-426a-bf11-afaa12ee1820.jpg
); */
    background-repeat: no-repeat;
    background-size: contain;
}

.info {
    width: 100%;
    display: flex;
    justify-content: space-between
}

.info div {
    flex: 1;
}

.map {
    width: 100%;
}

.infoItem {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.infoItem div {
    text-align: center;
    flex-basis: 0;
    flex-grow: 1;
    padding: 5px 0;
}

.kechixu {
    width: 100%;
    padding: 50px 0;
    background-color: #ebe8f3;
    display: flex;
    flex-direction: row;
}

.luxian {
    width: 100%;
    background-color: #ebe8f3;
    display: flex;
    flex-direction: row;
}

.luxianright {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #fff;
}

.fazhan {
    width: 100%;
    background-color: #ebe8f3;
    display: flex;
    flex-direction: row;
}

.fazhanleft {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #ebe8f3;
}

.guanzhi {
    width: 100%;
    background-color: #ebe8f3;
    display: flex;
    flex-direction: row;
}

.guanzhiright {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #ebe8f3;
}

.kechixuleft {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.kechixuText {
    font-weight: 600;
    font-size: 24px;
    border-left: 10px solid #83b552;
    padding-left: 20px;
    border-image: linear-gradient(to bottom, transparent 10%, #4CAF50 10%, #4CAF50 90%, transparent 90%) 1 100%;

}

.luxianText {
    font-weight: 600;
    padding: 5px 0;
    font-size: 24px;
    border-left: 10px solid #83b552;
    padding-left: 20px;
    border-image: linear-gradient(to bottom, transparent 10%, #4CAF50 10%, #4CAF50 90%, transparent 90%) 1 100%;

}

.fazhanText {
    font-weight: 600;
    padding: 5px 0;
    font-size: 24px;
    border-left: 10px solid #83b552;
    padding-left: 20px;
    border-image: linear-gradient(to bottom, transparent 10%, #4CAF50 10%, #4CAF50 90%, transparent 90%) 1 100%;

}

.guanzhiText {
    font-weight: 600;
    padding: 5px 0;
    font-size: 24px;
    border-left: 10px solid #83b552;
    padding-left: 20px;
    border-image: linear-gradient(to bottom, transparent 10%, #4CAF50 10%, #4CAF50 90%, transparent 90%) 1 100%;

}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.swiper-slide {
    position: relative;
    height: 400px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #F7F8FA;
}

.swiper-button-prev1 {
    padding-left: 10px;
}

.swiper-button-next1 {}

.carousel {
    position: relative;
    height: 400px;
    width: 100%;
    overflow: hidden;
}

.carousel-inner {
    position: relative;
    height: 100%;
    width: 100%;
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}

.carousel-item.active {
    opacity: 1;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
}

.carousel-control.prev {
    left: 1rem;
}

.carousel-control.next {
    right: 1rem;
}

.xinwen {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;

}

.xinwenMain {
    width: 70%;
}

.xinwenTitle {
    margin: 50px 0px 20px 10px;
    font-weight: 600;
    font-size: 24px;
    padding-left: 20px;
    border-left: 10px solid #83b552;
    border-image: linear-gradient(to bottom, transparent 10%, #4CAF50 10%, #4CAF50 90%, transparent 90%) 1 100%;
    color: #73669c;
}

.xinwenContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

.xinwenletf {
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.xinwen1 {
    background-size: 100% 100%;
    width: 360px;
    height: 310px;
    /* background-color: #ff0000; */

}

.xinwen2 {
    background-size: 100% 100%;
    width: 360px;
    height: 310px;
    /* background-color: #85d51c; */

}

.xinwen3 {
    background-size: 100% 100%;
    margin-left: 2%;
    width: 700px;
    height: 620px;
    /* background-color: #2e65cc; */
}

</style>