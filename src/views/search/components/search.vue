<template>
    <div class="swiper-slide single-page">
    
        <search-top></search-top>
        <searchhot></searchhot>
      
    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    import SearchTop from './searchTop'
    import Searchhot from './searchhot'
    
    export default {
        vuex: {
            actions
        },
         components: {
           SearchTop,
           Searchhot,
        },
        ready() {
            // 页面函数队列
             // this.pushFuncs(function(){
             //    console.log("001")
             // })
            this.pushFuncs(() => {
                console.log("001");
            });
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";

</style>
