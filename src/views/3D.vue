<template>
  <div>
    <div class="swiper-container">
      <swiper ref="sw" :options="options">
        <swiper-slide v-for="item in images" :key="item.id">
          <img :src="item.idView" class="h3" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            images:[
                {id:1,idView:'https://img2.baidu.com/it/u=651394931,1157744610&fm=26&fmt=auto&gp=0.jpg'},
                 {id:2,idView:'https://img2.baidu.com/it/u=2161683558,3491397777&fm=26&fmt=auto&gp=0.jpg'},
                  {id:3,idView:'https://img2.baidu.com/it/u=3645128799,2315731107&fm=26&fmt=auto&gp=0.jpg'},
                   {id:4,idView:'https://img0.baidu.com/it/u=3583217857,2590731132&fm=26&fmt=auto&gp=0.jpg'}
            ],
            options:{
                loop:true,//无缝
                autoplay:{
                    delay:1000
                },
                pagination: '.swiper-pagination',
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflow: {
                 rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
                }
            }
        }
    }
}
</script>
<style scoped>
    body {
        background: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;

    }
    .h3 {
  width: 300px;
  height: 300px;
}
    </style>