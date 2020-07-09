<template>
 <div class="wonima">
<div class="wocao">
   <div class="wato">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="haha">注册</el-button>
    <el-button type="primary" @click="hehe">登录</el-button>
  </el-form-item>
</el-form>
 </div>
 </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         ruleForm:{
           username:'',
           password:''
         },
         rules:{
           username:[
             {
               required:true,message:'用户名不能为空',trigger:'blur'
             },
             {
               min:2,max:10,message:'用户名在2~10位之间',trigger:'blur'
             }
           ],
           password:[
                          {
               required:true,message:'密码不能为空',trigger:'blur'
             },
             {
               min:6,max:15,message:'密码在6~15位之间',trigger:'blur'
             }
           ]
         }
     }
     },
   components: {
       login(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
   },
   methods: {
     haha(){
       let uese = {
         username: this.username,
         password: this.password
       }
       localStorage.setItem('user',JSON.stringify(user))
     },
     hehe(){

     }
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
    .wonima{
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wocao{
        width: 600px;
        height: 300px;
        background: bisque;
        display: flex;
    }
    .wato{
        width: 500px;
        height: 250px;
        display: flex;
        align-items: center;
    }
</style>