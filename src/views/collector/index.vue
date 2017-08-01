<template>
<!--     <collector-header msgone="我的收藏"></collector-header> -->
    <collector-list></collector-list>
    <collect-footer a="a" b="b" c="c" d="d"></collect-footer>
</template>

<script type="text/javascript">
    //import CollectorHeader from "../../components/header"
    import CollectorList from "./components/collector-list"
    import CollectFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //CollectorHeader,
                CollectorList,
                CollectFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
