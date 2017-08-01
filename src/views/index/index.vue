<template>
    <index-search></index-search>
    <index-header></index-header>
    <!-- 首页头部 -->
    <!-- <index-nav></index-nav> -->
    <!-- <index-search></index-search> -->
    <!-- 首页搜索框 -->
    <index-container></index-container>
    <!-- 首页主题功能部分 -->
    <index-list></index-list>
    <index-footer b="true" c="true" d="true"></index-footer>

</template>

<script type="text/javascript">
    import IndexHeader from "./components/header"
    //import IndexNav from "./components/index-nav"
    import IndexSearch from "../../components/search-top"
    import IndexContainer from "./components/index-container"
    import IndexFooter from "../../components/allfooter"
    import IndexList from "./components/goodsList.vue"
        export default {
            data() {
                return {}
            },
            components: {

                IndexHeader,
                //IndexNav,
                IndexSearch,
                IndexContainer,
                IndexFooter,
                IndexList,
            },
            route: {
                data() {
                   // console.log("router--->data");
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
