<template>
    <look-header></look-header>
    <look-contain></look-contain>
    <look-footer></look-footer>
</template>

<script type="text/javascript">
    import LookHeader from "./components/header.vue"
    import LookContain from "./components/look-contain"
    import LookFooter from "./components/footer-button"
        export default {
            data() {
                return {}
            },
            components: {

                LookHeader,
                LookContain,
                LookFooter,
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
