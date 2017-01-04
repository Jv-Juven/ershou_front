<template>
    <list-header></list-header>
    <list-contain></list-contain>
    <list-footer a="a" b="b" c="c" d="d"></list-footer>
</template>

<script type="text/javascript">
    import ListHeader from "../../components/search-top"
    import ListContain from "./components/market-contain"
    import ListFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                ListHeader,
                ListContain,
                ListFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
