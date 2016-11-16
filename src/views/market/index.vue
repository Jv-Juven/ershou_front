<template>
    <market-header msgone="二手市场"></market-header>
    <market-contain></market-contain>
</template>

<script type="text/javascript">
    import MarketHeader from "../../components/header"
    import MarketContain from "./components/market-contain"
        export default {
            data() {
                return {}
            },
            components: {

                MarketHeader,
                MarketContain,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
