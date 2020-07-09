<template>
  <div class="box">
   <div class="bot1">
      <div v-if="article.top === true" >
      <button>置顶</button>
      <span>{{article.title}}</span>
      <div v-html="article.content"></div>
    </div>
   </div>
  </div>
</template>item.titile

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      article: {}
    };
  },
  methods: {
    getTodo() {
      let str = `https://cnodejs.org/api/v1/topic/${this.id}`;
      console.log(str);
      axios
        .get(str)
        .then(res => {
          this.article = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getTodo();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box{
  width: 1200px;
  // height: 1600px;
  background: yellow;
  display: flex;
  flex-direction: column;
}
// .bot1{
//   width: 1200px;
//   height: 60px;
//   background: violet;
//   display: flex;
// }
</style>