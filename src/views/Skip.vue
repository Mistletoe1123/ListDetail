<template>
  <div>
    <ul>
      <li v-for="item in fruit" :key="item.id" @click="handleClick(item.id)">{{item.name}}||</li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
       return{
            fruit:[
            {id:1,name:'西瓜'},
            {id:2,name:'苹果'},
            {id:3,name:'鸭梨'},
        ]
       }
    },
    methods:{
        handleClick(id){
        //console.log(this.$router);
        this.$router.push({
        path: "/detail",//就是浏览器中的地址
        query: {
          id: id,
        },
      });

        },
        mounted () {
             console.log(this.$route);
        }
    }
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  display: flex;
}
</style>