<template>
    <div>

        <h1>分区2</h1>
        <!-- <button @click="query"></button> -->
        {{ msg }}
    </div>
</template>
<style>
</style>
<script>
export default {
    name: 'Children2',
    props: {},
    components: {},
    data() {
        return {
            msg: ''
        }
    },
   methods:{
  /*         query:function(){
            this.msg=this.$route.query.users
            console.log(this.msg)  
         
        }   */
     },  
     mounted(){
        this.msg=this.$route.query.users;
            console.log(this.msg)
     }


}
</script>