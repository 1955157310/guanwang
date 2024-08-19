<template>
    <div>
        <head1></head1>
        <div class="container">
            <div class="top">
                <div class="navigation">
<img @click="tohome()" width="20px" height="20px" src="@/assets/img/index/home.png" alt=""><span
                        @click="tohome()">首页</span>>公司业务>
                    <div style="color: #73669c;font-weight: 600;">
                        {{ pagename }}
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="menu">
                    <p :class="{ 'active': activeIndex == '中国-钼钨' }" @click="handleClick('中国-钼钨')">中国-钼钨</p>
                    <p :class="{ 'active': activeIndex == '刚果（金）-铜钴' }" @click="handleClick('刚果（金）-铜钴')">刚果（金）-铜钴</p>
                    <p :class="{ 'active': activeIndex == '巴西-铌磷' }" @click="handleClick('巴西-铌磷')">巴西-铌磷</p>
                    <p :class="{ 'active': activeIndex == '埃珂森' }" @click="handleClick('埃珂森')">埃珂森</p>
                    <p :class="{ 'active': activeIndex == '钼' }" @click="handleClick('钼')">钼</p>
                    <p :class="{ 'active': activeIndex == '铜' }" @click="handleClick('铜')">铜</p>
                    <p :class="{ 'active': activeIndex == '钴' }" @click="handleClick('钴')">钴</p>
                    <p :class="{ 'active': activeIndex == '铌' }" @click="handleClick('铌')">铌</p>
                    <p :class="{ 'active': activeIndex == '磷' }" @click="handleClick('磷')">磷</p>
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
            activeIndex: '中国-钼钨',
            pagename:'中国-钼钨'
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