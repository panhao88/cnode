<template>
  <div class="box">
    <span><div v-if="article.top === true">
      <button>置顶</button>
      <span>{{article.title}}</span>
    </div></span>
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
          console.log(res.data.data);
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
</style>