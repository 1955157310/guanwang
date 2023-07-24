<template>
  <div class="module-box">
    <!-- 一行二等分 -->
    <div style="width: 30%;">
      <dv-decoration-10 style="width:100%;height:5px;" />
    </div>
    <div style="width: 40%">
      <!-- 三等分 -->
      <div class="d-flex">
        <dv-decoration-8 style="height:50px;" />
        <dv-decoration-11 style="height:50px;color: white;">数据中心</dv-decoration-11>
        <dv-decoration-8 :reverse="true" style="height:50px;" />
      </div>
    </div>
    <div style="width: 30%">
      <dv-decoration-10 style="width:100%;height:5px;transform:rotateY(180deg)" />
    </div>
  </div>
</template>
<style>
.module-box{
  display: flex;
}
.d-flex{
  display: flex;
}

</style>
