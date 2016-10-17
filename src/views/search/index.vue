<template>
        <search-top></search-top><!-- 搜索界面头部 -->
        <searchhot></searchhot><!-- 搜索界面热门搜索 -->
   
   
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
