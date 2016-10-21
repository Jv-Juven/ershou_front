<template>
    <title-header></title-header>
    <!-- 首页头部 -->
    <index-search></index-search>
    <!-- 首页搜索框 -->
    <index-container></index-container>
    <!-- 首页主题功能部分 -->
</template>

<script type="text/javascript">
    import TitleHeader from "./components/header.vue"
    import IndexSearch from "./components/index-search"
    import IndexContainer from "./components/index-container"
        export default {
            data() {
                return {}
            },
            components: {

                TitleHeader,
                IndexSearch,
                IndexContainer,
            },
            route: {
                data() {
                   console.log("router--->data");
                }
            },
            ready() {
                // let resource = this.$resource("/basic/basic/getCity");
                // resource.get().then((res) => {
                //     console.log(res);
                // }, (res) => {
                //     throw res
                // });
            }
        }

</script>

<style lang="less" media="screen">

</style>
