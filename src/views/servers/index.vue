<template>
    <!-- <servers-header msgone="客服"></servers-header> -->
    <servers-contain></servers-contain>
    <search-footer a="a" b="b" c="c" d="d"></search-footer>
</template>

<script type="text/javascript">
    // import ServersHeader from "../../components/header"
    import ServersContain from "./components/servers-contain"
    import SearchFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ServersHeader,
                ServersContain,
                SearchFooter,
            },
            route: {
                // data() {
                //    console.log("router--->data");
                // }
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen">

</style>
