<template>
        <search-top></search-top><!-- 搜索页面头部 -->
        <searchhot></searchhot><!-- 搜索热榜 -->
   
   
</template>
<script type="text/javascript">
    import SearchTop from './components/search-top'
    import Searchhot from './components/search-hot'
    
    export default {
        data() {
            return {}
        },
        vuex: {
         
        },
        components: {
           SearchTop,
           Searchhot,
           
        },
       
    }

</script>
<style lang="less" media="screen">
    
</style>
