<template>
  <div>
    <header id="header">
      <a class="a1" href="#">&lt;</a>
      <p class="header-p">省钱控-最新优惠</p>
      <a class="a2">
        <img src="../assets/header_app.png" />
      </a>
    </header>

    <div id="content">
      <ul>
        <li v-for="item in product" :key="item.productId" @click="handleClick(item.productId)">
          <div href="#" class="aa">
            <div class="content-img" v-html="item.productImg2">{{item.productImg2}}</div>
            <div class="content-word" style="color='red'">
              {{item.productName}}
              <div class="word-bottom">
                <div class="bottom-left">{{item.productFrom}}|{{item.productTime}}</div>
                <div class="bottom-right">{{item.productComCount}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <section id="footer">
      <section>
        <a href>更多优惠信息&gt;&gt;</a>
      </section>
      <div class="rank">
        <span>品牌排行</span>
        <span>
          <a href>
            <img src="../assets/more.png" alt />
          </a>
        </span>
      </div>
      <ul>
        <a href>
          <li>登录</li>
        </a>
        <a href>
          <li>注册</li>
        </a>
        <a href>
          <li>返回顶部</li>
        </a>
      </ul>
      <div class="foot">
        <p class="p1">
          <span class="span1">手机APP下载</span>
          <span class="span2">慢慢买手机版</span>
          <span class="span3">--掌上比价平台</span>
        </p>
        <p class="p2">m.manmanbuy.com</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            htmll:"",
            product:[]
        }
    },
mounted(){
    axios.get('http://chst.vip:1234/api/getmoneyctrl')
    .then(res=>{
      console.log(res.data.result);
     /*  this.product = res.data.result */
      //懒加载
        this.product = res.data.result.splice(0,6)
        window.onscroll =  ()=> {
          let scrollHeight = document.documentElement.scrollHeight
        let scrollTop = document.documentElement.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let threshold_value = scrollHeight - (scrollTop + clientHeight)
        console.log(threshold_value);
        if (threshold_value <= 100) {
          if(!res.data.result.length){
            return
          }else{
            let newProduct = res.data.result.splice(0, 1)
            //console.log(this.product);
            //console.log(newProduct);
            this.product = this.product.concat(newProduct)
          }
        }
    };
    }).catch(err=>{
      console.log(err);
    })
},
methods:{
    handleClick(productId){
        this.$router.push({path:"/Goods",query: {productId: productId}});
    }
}
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

html,
body {
  font-family: "微软雅黑", sans-serif;
}

#header {
  display: flex;
  height: 3.75rem;
  background: #ff841d;

  .a1 {
    display: inline-block;
    padding: 1.25rem 0 0 1.25rem;
    text-decoration: none;
    color: white;
  }

  p {
    display: inline-block;
    font: 1.375rem/ 3.75rem "";
    color: white;
    margin: 0 auto;
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.625rem 0.625rem 0 0;
  }
}

#content {
  ul {
    li {
      height: 6.25rem;
      margin: 1.25rem 0.5rem;

      .aa {
        display: flex;
        height: 6.25rem;
        .content-img {
          width: 6.25rem;
          height: 6.25rem;
          ::v-deep img {
            width: 6.25rem;
            height: 6.25rem;
            padding-right: 0.625rem;
          }
        }

        .content-word {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: rgb(51, 51, 51);
          flex-wrap: wrap;

          .word-bottom {
            display: flex;
            justify-content: space-between;
            font-size: 0.8125rem;
            color: rgb(102, 102, 102);
            padding-bottom: 0.9375rem;
          }
        }
      }
    }
  }
}

#footer {
  background: rgb(239, 239, 239);

  section {
    padding: 0.625rem;

    a {
      text-decoration: none;
      color: #666;
      display: block;
      font-size: 0.8125rem;
      line-height: 1.875rem;
      border-radius: 0.3125rem;
      text-align: center;
      border: 0.0625rem solid #ddd;
      background-image: linear-gradient(#fff, #f4f4f4);
    }
  }

  .rank {
    background: #ff841d;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.625rem;
    margin-top: 0.625rem;

    span:nth-of-type(1) {
      font-size: 1.125rem;
      line-height: 2.5rem;
      color: white;
    }

    img {
      width: 1.25rem;
      height: 1.25rem;
      padding-top: 0.3125rem;
    }
  }

  ul {
    display: flex;
    padding: 0;

    a {
      flex: 1;

      li {
        list-style: none;
        text-align: center;
        color: grey;
        font: 0.875rem / 1.875rem "";
        border: 0.0625rem solid #ccc;
      }
    }
  }

  #page {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 0.625rem;

    .prev {
      border: 0.0625rem solid #ccc;
      width: 5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      border-radius: 0.3125rem;
      background-image: linear-gradient(to bottom, #fff, #f4f4f4);
    }

    .pages {
      height: 2.5rem;
      width: 5.625rem;
      border: 0.0625rem solid #cccccc;
      padding-left: 1.5625rem;
    }

    .next {
      border: 0.0625rem solid #ccc;
      width: 5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      border-radius: 0.3125rem;
      background-image: linear-gradient(to bottom, #fff, #f4f4f4);
    }
  }

  .foot {
    height: 3.125rem;

    .p1 {
      padding-top: 0.625rem;
      font-size: 0.625rem;
      text-align: center;

      span {
        color: rgb(110, 110, 110);
      }
    }

    .p2 {
      font-size: 0.5rem;
      text-align: center;
      color: rgb(110, 110, 110);
    }
  }
}
</style>