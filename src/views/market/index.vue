<template>
    <!-- <market-header msgone="二手市场"></market-header> -->
    <market-search></market-search>
    <market-contain></market-contain>
    <market-footer a="a" b="b" d="d"></market-footer>
</template>

<script type="text/javascript">
    //import MarketHeader from "../../components/header"
    import MarketSearch from "../../components/search-top"
    import MarketContain from "./components/market-contain"
    import MarketFooter from "../../components/allfooter.vue"
        export default {
            data() {
                return {}
            },
            components: {

               // MarketHeader,
                MarketSearch,
                MarketContain,
                MarketFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
