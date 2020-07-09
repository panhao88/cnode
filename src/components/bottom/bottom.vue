<template>
 <div>
    <!-- <el-card class="box-card" > -->
   <div class="box">
     <div class="bot">
       <div class="box1">RSS | 源码地址</div>
     <div class="box1">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
     <div>
       <img src="../../assets/QQ图片20200707175128.png" alt="" >
     </div>
     <div class="box1">新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</div>
   </div>
     </div>
    <!-- </el-card> -->
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .box{
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .bot{
      position: absolute;
      left: 160px;
    }
    .box1{
      width: 800px;
      height: 40px;
      color: burlywood;
    }
</style>