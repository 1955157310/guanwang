<template>
    <div>
        <head1></head1>
        <div class="container">
            <div class="top">
                <div class="navigation">
<img @click="tohome()" width="20px" height="20px" src="@/assets/img/index/home.png" alt=""><span
                        @click="tohome()">首页</span>>职业发展>
                    <div style="color: #73669c;font-weight: 600;">
                        {{ pagename }}
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="menu">
                    <p :class="{ 'active': activeIndex == '人才战略' }" @click="handleClick('人才战略')">人才战略</p>
                    <p :class="{ 'active': activeIndex == '社会招聘' }" @click="handleClick('社会招聘')">社会招聘</p>
                    <p :class="{ 'active': activeIndex == '校园招聘' }" @click="handleClick('校园招聘')">校园招聘</p>
                    <p :class="{ 'active': activeIndex == '欢迎围观' }" @click="handleClick('欢迎围观')">欢迎围观</p>
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
            activeIndex: '人才战略',
            pagename:'人才战略'
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