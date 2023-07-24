<style>

</style>
<template>
   <div>
      <el-table :data="tableData" height="380" border style="width: 100%">
         <el-table-column prop="date" label="入学日期" width="180" >
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.date }}</span>
               <el-input type="text" :placeholder="scope.row.date" v-model="scope.row.date" v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="name" label="姓名" width="180">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.name }}</span>
               <el-input type="text" :placeholder="scope.row.name" v-model="scope.row.name" v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="address" label="家庭住址">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.address }}</span>
               <el-input type="text" :placeholder="scope.row.address" v-model="scope.row.address"
                  v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="xueyuan" label="学院">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.xueyuan }}</span>
               <el-input type="text" :placeholder="scope.row.xueyuan" v-model="scope.row.xueyuan"
                  v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="zhuanyebanji" label="专业班级">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.zhuanyebanji }}</span>
               <el-input type="text" :placeholder="scope.row.zhuanyebanji" v-model="scope.row.zhuanyebanji"
                  v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="phone" label="联系电话">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.phone }}</span>
               <el-input type="text" :placeholder="scope.row.phone" v-model="scope.row.phone" v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column prop="id" label="学号">
            <template slot-scope="scope">
               <span v-show="scope.row.isShow">{{ scope.row.id }}</span>
               <el-input type="text" :placeholder="scope.row.id" v-model="scope.row.id" v-show="!scope.row.isShow" />
            </template>
         </el-table-column>
         <el-table-column label="操作">
            <template slot-scope="scope">
               <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-show="scope.row.isShow">编辑</el-button>
               <el-button @click="hold(scope.$index, scope.row)" size="mini" v-show="!scope.row.isShow">保存</el-button>
               <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
         </el-table-column>

      </el-table>
      <div @click="addLine()" style="cursor: pointer; color: #409eff">
         添加学生信息
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         tableData: [
             /* {
            date: '',
            name: '',
            address: '',
            xueyuan: '',
            zhuanyebanji: '',
            phone: '',
            id:'',
            isShow: true
         },  */
         ],
         a:1

      }
   },

   mounted() {
      this.show()
      //this.a=a;
   },
   methods: {
      /* 编辑 */
      show(){
         for (var a=1;JSON.parse(localStorage.getItem('Data'+a)!=null);a++){
          this.tableData.push(JSON.parse(localStorage.getItem('Data'+a)))
      }
      },
      handleEdit(index, row) {
         console.log(index, row);
         row.isShow.value = false;
      },
      
      /* 保存 */
      hold(index, row) {
         row.isShow = true;   
         let indexes = index + 1;
         window.localStorage.setItem('Data' + indexes, JSON.stringify(this.tableData[index]))
         console.log(this.tableData);
      },
      /* 删除 */
      handleDelete(index, row) {
         console.log(index, row);
         this.tableData.splice(index, 1);
         window.localStorage.removeItem('Data' + index)
      },
      /* 添加新的一行 (默认是可编辑状态)*/
      addLine() {
         let obj = {
            date: '',
            name: '',
            address: '',
            xueyuan: '',
            zhuanyebanji: '',
            phone: '',
            id: '',
            isShow: false,
         };
         this.tableData.push(obj);
      },
   },
};



</script>
