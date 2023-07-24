<template>
    <div>
        <button id="test" @click="test">获取教师信息</button>
        <input id="text" v-model="value" type="text" value="请输入评价教师id">
        <button @click="pushMsg">点击填写评价</button>
        <button @click="pro"></button>

        <el-table :data="users" height="380" border style="width: 100%">
            <el-table-column prop="id" label="id" width="180">
                <span v-for="id in id">{{ id }}</span>
            </el-table-column>
            <el-table-column prop="username" label="username" width="180">
                <span v-for="username in username">{{ username }}</span>
            </el-table-column>
            <el-table-column prop="type" label="type" width="180">
                <span v-for="type in type">{{ type }}</span>
            </el-table-column>
            <el-table-column prop="email" label="email" width="180">
                <span v-for="email in email">{{ email }}</span>
            </el-table-column>
            <el-table-column prop="create_time" label="create_time" width="180">
                <span v-for="create_time in create_time">{{ create_time }}</span>
            </el-table-column>
            <el-table-column prop="role_name" label="role_name" width="180">
                <span v-for="role_name in role_name">{{ role_name }}</span>
            </el-table-column>
        </el-table>

    </div>
</template>
<style>
td {
    width: 200px;
    height: 50px;
    list-style-type: none;
}
</style>
<script>
//import axios from 'axios'


export default {
    name: 'Children1',
    props: {},
    data() {
        return {
            users: [{
                id: '',
                username: '',
                type: '',
                email: '',
                create_time: '',
                role_name: ''
            }],
            childNum: 5,
            value:''
        }
    },
    methods: {
        test: function () {
            this.$axios.get('./1.json').then(res => {
                // console.log(res.data);
                // console.log(res.data.data.users[1].mobile);
                // this.mobile=JSON.parse(res.data.users)
                //console.log(res.data.users)
                this.users = res.data.users
                console.log(this.mobile[0])
                //回调地狱
                /* return this.$axios.get('./2.json').then(res=>{
                return this.$axios.get('./2.json').then(res=>{
                return this.$axios.get('./2.json').then(res=>{                   
                })
                })  
                }) */
            })

        },
        pro: function () {
            let p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                  //  console.log(this.value);

                }, 100);

            })
            p.then(() => {
                console.log('ok');

            }, () => {
                console.log('no');

            })
        },
         pushMsg() {
            // 通过事件总线发送消息
            //eventBus.$emit('pushMsg',this.childNum++)
            this.$router.push({
                name: 'file2',
                query: {
                    users: this.users[this.value-1]
                } 
            })

        } 
    },

}
</script>   