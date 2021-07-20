<template>
  <div>
    <div class="container">
      <swiper ref="sw" :options="options">
        <swiper-slide v-for="(item,index) in images" :key="index">
          <img :src="item" class="h3" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script> 
import lb1 from '../assets/lb1.jpg'
import lb2 from '../assets/lb2.jpg'
import lb3 from '../assets/lb3.jpg'
import lb4 from '../assets/lb4.jpg'
export default {
    data(){
        return{
            images:[lb1,lb2,lb3,lb4],
            options:{
                loop:true,//无缝
                autoplay:{
                    delay:1000
                },
            navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
            },
                effect: 'cube',//特效
                grabCursor: true,
                pagination:{//指示器
                    el:'.swiper-pagination'
                },
                cube: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
            }
        }
    }
}
</script>
<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 300px;
  height: 300px;
  padding-top: 50px;
  padding-bottom: 50px;
  /* left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px; */
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px !important;
  height: 300px !important;
}
.h3 {
  width: 300px;
  height: 300px;
}
.container {
  width: 300px;
  height: 300px;
  /* 左边 */
  margin: 0 auto;
}

/* .swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  left: 42% !important;
} */
/* .swiper-button-next{
    left: 60% !important;
} */
</style>