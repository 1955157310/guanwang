<template>
    <div>
        <head1></head1>
        <div class="container">
            <div class="top">
                <div class="navigation">
<img @click="tohome()" width="20px" height="20px" src="@/assets/img/index/home.png" alt=""><span
                        @click="tohome()">首页</span>>可持续发展>
                    <div style="color: #73669c;font-weight: 600;">
                        {{ pagename }}
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="menu">
                    <p :class="{ 'active': activeIndex == '我们的方法' }" @click="handleClick('我们的方法')">我们的方法</p>
                    <p :class="{ 'active': activeIndex == '健康与安全' }" @click="handleClick('健康与安全')">健康与安全</p>
                    <p :class="{ 'active': activeIndex == '环境与生态' }" @click="handleClick('环境与生态')">环境与生态</p>
                    <p :class="{ 'active': activeIndex == '组织架构' }" @click="handleClick('组织架构')">组织架构</p>
                    <p :class="{ 'active': activeIndex == '董事和监事' }" @click="handleClick('董事和监事')">董事和监事</p>
                    <p :class="{ 'active': activeIndex == '多元包容的工作环境' }" @click="handleClick('多元包容的工作环境')">多元包容的工作环境</p>
                    <p :class="{ 'active': activeIndex == '共创繁荣的社区' }" @click="handleClick('共创繁荣的社区')">共创繁荣的社区</p>
                    <p :class="{ 'active': activeIndex == '负责任供应链' }" @click="handleClick('负责任供应链')">负责任供应链</p>
                    <p :class="{ 'active': activeIndex == '政策与报告' }" @click="handleClick('政策与报告')">政策与报告</p>
                    <p :class="{ 'active': activeIndex == '投诉与建议' }" @click="handleClick('投诉与建议')">投诉与建议</p>
                </div>
                <div class="content"></div>
            </div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import head1 from "../../components/head.vue";
import footer1 from "../../components/footer.vue";
export default {
    components: {
        head1,
        footer1,
    },
    data() {
        return {
            activeIndex: '我们的方法',
            pagename:'我们的方法'
        }
    },
    methods: {
        tohome() {
            this.$router.push({
                path: '/'
            })
        },
        handleClick(index) {
            this.activeIndex = index;
            this.pagename = index
        }
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
}

.navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 10% 15px 0;
    font-size: 13px;
}

.main {
    width: 70%;
    /* padding: 10px 0; */
    border-left: 1px solid #e4e4e4;
    display: flex;
    flex-direction: row;
}

.menu p {
    padding-left: 10px;
    color: #6a6a6a;
    font-size: 13px;
}
.active {
  font-weight: 600;
  color: #73669c !important;
  border-left: 5px solid #83b552;
}
</style>