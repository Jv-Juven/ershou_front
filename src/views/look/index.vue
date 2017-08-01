<template>
    <!-- <look-header msgone="详细信息"></look-header> -->
    <look-contain></look-contain>
    <look-footer></look-footer>
    <look-seller></look-seller>
    <look-footer a="a" b="b" c="c" d="d"></look-footer>
</template>

<script type="text/javascript">
    //import LookHeader from "../../components/header"
    import LookContain from "./components/look-contain"
    import LookFooterBtn from "./components/footer-button"
    import LookSeller from "./components/look-seller"
    import LookFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //LookHeader,
                LookContain,
                LookFooterBtn,
                LookSeller,
                LookFooter,
            },
            route: {
                data() {
                   // console.log("router--->data");
                }
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen">

</style>
