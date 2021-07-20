<template>
  <div>
    <div>蜡笔小新</div>
    <button @click="get">get</button>
    <button @click="post">post</button>
    <button @click="config">config</button>
    <img :src="lb1" alt />
  </div>
</template>

<script>
import lb1 from "assets/lb1.jpg"
import axios from "axios"
export default {
data(){
  return {
    lb1
  }
},
methods:{
  get(){
    axios.get('api/data/index.json',
    {
      params:{
        name:'dd'
      },
      headers:{
        'getheader':'qfqfqfqfqf'
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  post(){
    axios.post('/users/login',
    {
      username:'lbw',
      password:'555'
      },{
       headers:{
        'postheader':'lalallalalala'//Request Headers
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  config(){
    axios({
      url:"/users/login",//请求地址
      method:"post",//请求方式
      data:{//post参数
        username:'lbw',
      password:'555'
      },
     /*  params:{//get参数
        name:'dengdeng'
      }, */
      timeout:2000,//超时时间，超时进入catch
      headers:{'axios':'axios1111'},
      withCredentials:true,//值为true将客户端的凭证自动携带到服务端,比如cookie
      responseType:'json'//响应数据类型 blob二进制数据 stream
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
}
</script>

<style>
</style>
