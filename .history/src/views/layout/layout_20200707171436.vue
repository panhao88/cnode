<template>
  <div>
    <div class="box">
      <el-container >
        <el-header >
           <toubu></toubu>
        </el-header>
          <el-container>
            <el-container>
              <el-main>
               <div class="todo">
                 <router-view></router-view>
              </div>
              </el-main>
            </el-container>
            <el-aside>
              <central> fdfd</central>
            </el-aside>
          </el-container>
        <el-footer>
          <bottom>dasdasdasd</bottom>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>

import toubu from "../../components/toubu/toubu";
import central from "../../components/central/central";
import bottom from "../../components/bottom/bottom";
export default {
  data() {
    return {
       
    };
  },
    props: {
     
   },
  components: {
    toubu,
    central,
    bottom
  },
  methods: {
     
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  // background: chocolate;
  display: flex;
  flex-direction: column;
  position: relative;
}
.todo{
  width: 1200px;
  height: 1100px;
  // background: yellow;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 180px;
  
}
</style>