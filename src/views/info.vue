<template>
    <div>
  <h1> {{ name }}</h1>
  <h1> {{ age }}</h1>
  <h1> {{ sex }}</h1>
    </div>
</template>
<style>

</style>
<script>

export default {
    name:'',
    props:['name','sex','age'],
    components:{},

    data() {
        return {

        }
    },
    methods: {


    }
}
</script>   