<template>
  <div class="container">
    <h1>学生信息管理系统</h1>

    <!-- 添加学生表单 -->
    <el-form v-model="addForm" ref="addForm" label-width="100px" class="add-form">
      <el-form-item label="姓名">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model.number="addForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="addForm.gender">
          <el-radio :label="'男'">男</el-radio>
          <el-radio :label="'女'">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="addForm.grade"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="addForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addStudent">添加学生</el-button>
        <el-button @click="resetAddForm">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 查询学生表单 -->
<!--     <el-form :model="searchForm" ref="searchForm" label-width="100px" class="search-form">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model.number="searchForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="searchForm.gender">
          <el-radio :label="'男'">男</el-radio>
          <el-radio :label="'女'">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="searchForm.grade"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="searchForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchStudent">查询学生</el-button>
        <el-button @click="resetSearchForm">重置</el-button>
      </el-form-item>
    </el-form> -->

    <!-- 学生信息表格 -->
    <el-table :data="students" style="width: 100%">
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
               <span>{{ scope.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="grade" label="年级"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editStudent(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteStudent(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      students: [],
      addForm: {
        name: "",
        age: "",
        gender: "",
        grade: "",
        address: "",
      },
      searchForm: {
        name: "",
        age: "",
        gender: "",
        grade: "",
        address: "",
      },
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    // 添加学生
    async addStudent() {
      console.log(this.addForm);
      try {
        await axios.post("http://localhost:3000/students", this.addForm);
        console.log(this.addForm);
        this.message.success("添加成功");
        this.resetAddForm();
        this.getStudents();
      } catch (error) {
        this.message.error("添加失败");
        console.log(error);
      }
    },// 重置添加学生表单
    resetAddForm() {
      this.$refs.addForm.resetFields();
    },

  /*   // 查询学生
    async searchStudent() {
      this.currentPage = 1;
      this.getStudents();
    },

    // 重置查询学生表单
    resetSearchForm() {
      this.searchForm = {
        name: "",
        age: "",
        gender: "",
        grade: "",
        address: "",
      };
      this.currentPage = 1;
      this.getStudents();
    }, */
    // 编辑学生
    async editStudent(index, row) {
      try {
        await axios.put(`http://localhost:3000/students/${row.id}`, row);
        this.$message.success("编辑成功");
        this.getStudents();
      } catch (error) {
        this.$message.error("编辑失败");
        console.log(error);
      }
    },

    // 删除学生
    async deleteStudent(index, row) {
      try {
        await axios.delete(`http://localhost:3000/students/${row.id}`);
        this.$message.success("删除成功");
        this.getStudents();
      } catch (error) {
        this.$message.error("删除失败");
        console.log(error);
      }
    },

    // 获取学生列表
    async getStudents() {
      const { name, age, gender, grade, address } = this.searchForm;
      const { currentPage, pageSize } = this;
      try {
        const response = await axios.get("http://localhost:3000/students", {
          params: {
            name,
            age,
            gender,
            grade,
            address,
            page: currentPage,
            size: pageSize,
          },
        });
        const { data, total } = response.data;
        console.log(response.data)
        this.students = data;
        this.total = total;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getStudents();
  },
};
</script>

<style>
.container {
  padding: 30px;
}

.add-form,
.search-form {
  margin-bottom: 20px;
}
</style>





