

 <style>
#dv-full-screen-container{
  background-image: url(../assets/img/pageBg.png); 
  margin-right: 0%;
  
   
}
.content{
   width: 100%;
   height: 100%;
 
}
</style>
<template>
   <div class="content bg" style="width: 100%;">
      <dv-full-screen-container style="margin-right: 0px;">
         <ModuleTitle />
         <ModuleMain />
         <ModuleThird />
      </dv-full-screen-container>
   </div>
</template>
 
<script>
import ModuleTitle from './ModuleTitle.vue'
import ModuleMain from './ModuleMain.vue'
import ModuleThird from './ModuleThird.vue'

export default {
   name: 'HomeView',
   components: {
      ModuleTitle,
      ModuleMain,
      ModuleThird
   },
   data() {
      return {

      }
   }
}
</script> 

 
 