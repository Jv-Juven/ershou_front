<style lang="less" media="screen">

</style>

<template>
    <title-header></title-header>
    <!-- 首页头部 -->
    <indexsearch></indexsearch>
    <!-- 首页搜索框 -->
    <indexcontainer></indexcontainer>
    <!-- 首页主题功能部分 -->
</template>

<script type="text/javascript">
    import TitleHeader from "./components/header.vue"
    import Indexsearch from "./components/index-search"
    import Indexcontainer from "./components/index-container"
        export default {
            data() {
                return {}
            },
          
            components: {
               
                TitleHeader,
                Indexsearch,
                Indexcontainer,
            },
            
        }

</script>


