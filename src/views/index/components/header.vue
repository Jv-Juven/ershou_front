<template lang="html">
	<!-- Swiper 的窗口  -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../../static/image/indexfloat/1.jpg"></div>
            <div class="swiper-slide"><img src="../../../../static/image/indexfloat/2.jpg"></div>
            <div class="swiper-slide"><img src="../../../../static/image/indexfloat/3.jpg"></div>
            <div class="swiper-slide"><img src="../../../../static/image/indexfloat/4.jpg"></div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
        <!-- 如果需要滚动条 -->
      <!--   <div class="swiper-scrollbar"></div> -->
    </div>


</template>

<script>
    import Swiper from "swiper"
    export default {
        data() {
                return {}
            },
            computed: {},
            mounted() {},
            methods: {},
            components: {},
            ready() {
                var swiper = new Swiper('.swiper-container',{
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    autoplay : 3000,  //自动播放
                    // 如果需要滚动条
                    //scrollbar: '.swiper-scrollbar',
                });
            // let _this = this;
            // // 计算当前所有页面的总数
            // console.log("getters:", this.pageCallFuncs);
            // 初始化Swiper
            // let bodySwiper = new Swiper(".swiper-body", {
            //     // Optional parameters
            //     direction: 'vertical',
            //     loop: true,
            //     initialSlide: 0,
            //     speed: 300,
            //     spaceBetween: 30,
            //     // 回调函数
            //     onSlideChangeEnd(swiper) {
            //         util.exec(this, swiper, _this);
            //     },
            //     onInit(swiper) {
            //         if (!this.loop) {
            //             // 只有slides不循环的情况下执行
            //             util.exec(this, swiper, _this);
            //         }
            //     },
            // });
        }
    }

</script>

<style lang="less">
    @import "~swiper/src/less/swiper.less";
	.swiper-container {
        width: 750px;
        height: 410px;
        // margin: 20px auto;
    }
    img{
        height: 100%;
        width: 100%;
    }
    // .swiper-slide{
    //     height:400px;
    // }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
	
</style>

