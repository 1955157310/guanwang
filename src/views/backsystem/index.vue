<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="系统名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="登陆注册页面背景图">
                <el-input v-model="form.name1"></el-input>
            </el-form-item>
            <el-form-item label="系统主页背景图">
                <el-input v-model="form.name2"></el-input>
            </el-form-item>
            <el-form-item label="数据刷新时间">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '数据中心',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>