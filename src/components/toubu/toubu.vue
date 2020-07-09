<template>
  <div>
    <!-- <el-card class="box-card"> -->
    <div class="box12">
      <div class="box1a">
        <div class="box1b">
          <div class="box2">
            <img src="../../assets/QQ图片20200607203124.png" alt />
          </div>
          <div class="box3">
            <img src="../../assets/SOU SUO.svg" alt="" class="sou" >
            <input type="text"  class="inp"  placeholder=" 请输入内容" text-align:center>
          </div>
        </div>
        <div class="box4">
          <div>首页</div>
          <div>新手入门</div>
          <div>API</div>
          <div>关于</div>
          <div>注册</div>
          <div>登录</div>
        </div>
      </div>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
 
.box12{
  width: 100%;
  height: 50px;
  background: #444444;
  // position: relative;
  display: flex;
  justify-content:center; 
  
}
.box1a {
  width: 1220px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: space-between;
  // background: gray;
  
}
.box1b {
  width: 400px;
  height: 50px;
  // background: yellow;
  position: relative;
  display: flex;

}
.box2 {
  width: 50px;
  height: 50px;
  // background: red;
  display: flex;
  align-items: center;
}
.box2:hover{
  cursor: pointer;
  // color: aqua;
}
.box3 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 150px;
}
.sou{
  position: absolute;
  left: 5px;
}
.inp{
  width: 175px;
  height: 24px;
  padding-left: 20px;
  border-radius: 24px;
  outline: none;
}
.box4 {
  // background: tan;
  position: absolute;
  right: 0px;
  width: 360px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
}
.box4:hover{
  cursor: pointer;
}
</style>