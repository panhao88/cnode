<template>
 <div>
 
   <!-- <el-card class="box-card" >   -->
      <div class="box">
        <div class="box1"></div>
        <div class="box2">
          <img src="../../assets/QQ图片20200707171938.png" alt="">
          <img src="../../assets/QQ图片20200707171846.png" alt="">
          <img src="../../assets/QQ图片20200707171912.png" alt="">
        </div>
        <div class="box3">
          <div class="didi">无人回复的话题</div>
          <div class="didi">分享一个基于投票机制的社区</div>
          <div class="didi">Vue 项目推荐，Github 过万 Star</div>
          <div class="didi">支持markdown语法的思维导图和大纲工具-MarkMind</div>
          <div class="didi">CNodejs每日新闻(2020-07-06)</div>
          <div class="didi">找一个能用的 mac rdp lib 库</div>
        </div>
        <div class="box4">
          <img src="../../assets/QQ图片20200707174134.png" alt="">
        </div>
        <div class="box5">
          <div>友情社区</div>
          <div><img src="../../assets/QQ图片20200707174355.png" alt=""></div>
        </div>
        <div class="box6">
          <img src="../../assets/QQ图片20200707174359.png" alt="">
        </div>
        
      </div>
  
  <!-- </el-card> -->
 </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

.box{
  width: 218px;
  height: 1100px;
  // border: solid 1px black;
  // position: absolute;
  // right: 240px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
 
}
.box1{
  width: 218px;
  height: 87px;
  background: firebrick;
}
.box2{
  width: 218px;
  height: 180px;
  // background: forestgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.box3{
  width: 218px;
  height: 160px;
  // background: blue;
    display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-around;

}
.didi{
  width:180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box4{
  width: 218px;
  height: 256px;
  // background: blueviolet;
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.box5{
  width: 218px;
  height: 160px;
  // background: cadetblue;
   display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: space-around;
}
.box6{
  width:218px;
  height:215px;
  // background: yellow;
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
 
</style>