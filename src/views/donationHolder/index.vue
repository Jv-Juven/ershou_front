<template>
    <!-- <holder-header msgone="认证信息"></holder-header> -->
    <holder-contain></holder-contain>
    <holder-footer a="a" b="b" c="c" d="d"></holder-footer>
</template>

<script type="text/javascript">
    //import HolderHeader from "../../components/header"
    import HolderContain from "./components/holder-contain"
    import HolderFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //HolderHeader,
                HolderContain,
                HolderFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
