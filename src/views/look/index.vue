<template>
    <look-header></look-header>
    <look-contain></look-contain>
    <look-footer></look-footer>
    <look-seller></look-seller>
</template>

<script type="text/javascript">
    import LookHeader from "./components/header.vue"
    import LookContain from "./components/look-contain"
    import LookFooter from "./components/footer-button"
    import LookSeller from "./components/look-seller"
        export default {
            data() {
                return {}
            },
            components: {

                LookHeader,
                LookContain,
                LookFooter,
                LookSeller,
            },
            route: {
                data() {
                   console.log("router--->data");
                }
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen">

</style>
