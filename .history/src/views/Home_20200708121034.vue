<template>
  <div>
    <div class="box1">
      <div>
        <button>全部</button>
      </div>
      <div>精华</div>
      <div>分享</div>
      <div>问答</div>
      <div>招聘</div>
      <div>客户端测试</div>
    </div>
   <div>
      <table class="table table-bordered">
        <!-- 截取开始的下标 后面是结束的下标
        下标从0开始:用当前的页数 - 1 ,再乘以当前条数.
        第二个参数,再用页数乘以当前条数 -->
      <tr v-for="(item,index) in arr.slice((currentPage - 1) * pageSize, currentPage*pageSize) " :key="index"  class="bordera">
        <td>
          <img :src="item.author.avatar_url" alt class="img" />
        </td>

        <td class="img1">{{item.reply_count}} / {{item.visit_count}}</td>
        <td class="img2">
          <div v-if="item.top"><button>置顶  </button></div>
         <div v-else>
            <div v-if="item.tab ==='share'">分享</div>
          <div v-else>问答</div>
         </div>
        </td>
        <td class="tit" @click ='goto(item)'>{{item.title}}</td>
       <div class="img3">
          <td v-if="item.day && item.day < 30">{{item.day}}天前</td>
          <td v-if="item.day && item.day >= 30">{{item.day % 30}}月前</td>
           <td v-if="item.hour && item.hour > 1 && item.hour < 24">{{item.hour % }}月前</td>
       </div>
      </tr>
    </table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="arr.length"> 
      <!-- total总数 -->
    </el-pagination>
   </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      currentPage:1,//当前页数,默认是第一页开始
      pageSize:10,//默认一页多少条

    };
  },
  methods: {
    getData() {
      axios
        .get(" https://cnodejs.org/api/v1/topics")
        .then(res => {
          res.data.data.map(item => {
            item.time = dayjs (item.last_reply_at).valueOf() //valueof dayjs自带的方法
            let now = Date.now()
            this.$set(item, 'second', Math.ceil((now - item.time) / 1000))
            this.$set(item, 'mins', Math.ceil((now - item.time) / 1000 / 60))
            this.$set(item, 'hour', Math.ceil((now - item.time) / 1000 / 60))
            this.$set(item, 'day', Math.ceil((now - item.time) / 1000 / 60 / 60 /24))
          })
          if (res.data.success === true) {
            this.arr = res.data.data;
          }
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
     
    },
    //当前条数改变的时候
    handleSizeChange(val){
      this.pageSize = val
    },
    //当前页数改变的时候
    handleCurrentChange(val){
        this.currentPage = val
    },
       goto(item){
          this.$router.push({name:'Details',query: {id:item.id}})
        }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  width: 500px;
  height: 50px;
  // background: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  color: yellowgreen;
}
.img {
  width: 40px;
  height: 40px;
  display: flex;
}
.img1{
  position: absolute;
  left: 50px;
}
.img2{
  position: absolute;
  left: 160px;
}
.bordera{
  width: 800px;
  height: 40px;
  // background: red;
  display: flex;
  position: relative;
  
}
.tit{
  position: absolute;
  left: 220px;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img3{
  position: absolute;
  right: 0px;
}
</style>