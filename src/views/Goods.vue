<template>
  <div>
    <header id="header">
      <p class="a1" @click="jump">&lt;</p>
      <p class="header-p">省钱控-最新优惠</p>
      <a class="a2" href>
        <img src="../assets/header_app.png" />
      </a>
    </header>

    <div id="content">
      <div class="info">
        <div class="title">
          <h4>{{goods.productName}}</h4>
        </div>
        <div class="other">
          <span>{{goods.productFrom}} | {{goods.productTime}}</span>
          <span>{{goods.productTips}}</span>
        </div>
        <div class="word">
          <p>
            <span v-html="goods.productImg2"></span>
            <span v-text="goods.productInfo"></span>
            <span v-text="goods.productInfo1"></span>
            <span v-text="goods.productInfo2"></span>
          </p>
        </div>
        <div class="image" v-html="goods.productImgSm"></div>
        <div class="city" v-html="goods.productCity"></div>
      </div>
    </div>

    <div id="comment" v-html="goods.productComment"></div>

    <div class="buy">
      <a href>前往购买</a>
    </div>
    <div class="ma">
      <img src="../assets/mmbweixin2.png" alt />
    </div>
    <div class="text">
      <textarea name id cols="30" rows="10"></textarea>
      <div class="discuss">
        <a href>提交评论</a>
      </div>
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
            goods:{}
        }
    },
    methods:{
      jump(){
        this.$router.go(-1)
      }
    },
mounted(){
      let productid = this.$route.query.productId;
      console.log(productid);
      axios.get("http://chst.vip:1234/api/getmoneyctrlproduct", {
        params: {
          productid
        }
      }).then(res => {
        console.log(res);
        this.goods = res.data.result[0];
      })
},
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
    /* padding: 1.25rem 0 0 1.25rem; */
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
  .info {
    border-bottom: 1px solid #ccc;
    margin: 0.625rem 0.5rem;
    padding-top: 0.3125rem;

    .title {
      h4 {
        font-size: 1.25rem;
        line-height: 1.25rem;
        text-align: left;
        color: #333;
        font-weight: 900;
        margin: 1.25rem 0;
      }
    }

    .other {
      margin-top: 0.625rem;
      padding-left: 15px;
      color: #999;

      span:nth-of-type(1) {
        float: left;
        margin-right: 1.25rem;
      }

      span:nth-of-type(2) {
        margin-left: 0.9375rem;
      }
    }

    .word {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
      margin: 0.625rem 0;

      p {
        font-size: 1.125rem;
        ::v-deep img {
          width: 12.5rem;
          float: right;
        }
      }
    }

    .image {
      display: flex;
      justify-content: center;
      ::v-deep img {
        display: block;
        width: 18.75rem;
        height: 18.75rem;
      }
    }

    .city {
      display: flex;
      justify-content: center;
      #disstorck {
        li {
          text-align: center;
          line-height: 2.75rem;
          background: rgb(244, 244, 244);
          width: 9.375rem;
          height: 2.75rem;
          border: 0.0625rem solid #999;
          span {
            float: left;
            width: 6.25rem;
            margin-left: 1.25rem;
            color: black;
            text-align: center;
            strong {
              margin-left: 0.3125rem;
              float: right;
              color: red;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
}

.buy {
  margin: 0.625rem 0;

  a {
    display: block;
    width: 80%;
    height: 2.125rem;
    text-align: center;
    margin: 0 auto;
    background: #ff9000;
    color: white;
    line-height: 2.125rem;
    border-radius: 0.625rem;
    font-weight: 900;
  }
}

.ma {
  img {
    width: 90%;
    padding: 1.25rem;
    margin-top: 0.625rem;
  }
}

.text {
  textarea {
    width: 89%;
    padding: 0.625rem;
    height: 6.25rem;
    border: 1px solid #ccc;
    margin-left: 0.625rem;
  }

  .discuss {
    height: 3.125rem;
    width: 100%;
    margin: 0 auto;
    background: #ccc;
    position: relative;
    margin-bottom: 1.875rem;

    a {
      display: block;
      width: 7.5rem;
      height: 3.4375rem;
      line-height: 3.4375rem;
      background: #ff9000;
      color: white;
      text-align: center;
      position: absolute;
      right: 0rem;
      top: -0.1875rem;
    }
  }
}

#comment {
  .text {
    font-size: 0.8125rem;
    .name {
      margin-top: 0.1875rem;
    }
    .text-bottom {
      margin: 0.3125rem 0;
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