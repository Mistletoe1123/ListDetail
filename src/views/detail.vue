<template>
  <div>{{ newArr.name }}:{{ newArr.desc }}</div>
</template>

<script>
export default {
    data(){
        return{
             newArr: {},
            intro:[
                {id:1,name:'西瓜',desc:"我是西瓜"},
                {id:2,name:'苹果',desc:"我是苹果"},
                {id:3,name:'鸭梨',desc:"我是鸭梨"},
            ]
        }
    },
    created(){
        console.log(this.$route);
        let id = this.$route.query.id;
        let target = this.intro.find((item) => item.id == id);
        this.newArr = target
    }
}
</script>

<style>
</style>