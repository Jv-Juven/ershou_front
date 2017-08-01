<template>
        <search-top></search-top>
        <!-- 搜索界面头部 -->
        <search-hot></search-hot>
        <!-- 搜索界面热门搜索 -->
        <search-footer a="a" b="b" c="c" d="d"></search-footer>
   
</template>
<script type="text/javascript">
    import SearchTop from '../../components/search-top'
    import SearchHot from './components/search-hot'
    import SearchFooter from "../../components/allfooter"
    export default {
        data() {
            return {}
        },
        vuex: {
         
        },
        components: {
           SearchTop,
           SearchHot,
           SearchFooter,
           
        },
       
    }

</script>
<style lang="less" media="screen">
    
</style>
