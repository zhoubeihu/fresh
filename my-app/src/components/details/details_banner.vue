<template>
    <div>
        <div class="swiper-container">
	<div class="swiper-wrapper">
		<div v-for='el in arrItem' class="swiper-slide">
			<img class="img" :src="el.imgUrl">
		</div>
	</div>
	<!-- 如果需要分页器 -->
	<div class="swiper-pagination"></div>
</div>

    </div>
</template>
<script>
import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.css'
export default {
        mounted:function(){
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    data(){
        return {
                arrItem:[
                        {
                                name:'swiperSlide5',
                                imgUrl:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'
                        },
                        {
                                name:'swiperSlide1',
                                imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
                        },
                        {
                                name:'swiperSlide51',
                                imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
                        },
                        {
                                name:'swiperSlide1111115',
                                imgUrl:'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
                        }
                ]
        }
    },
}
</script>
<style scoped>
 .img{
     width:100%;
     height: 6rem;
 }   
</style>