<template>
    <servers-header></servers-header>
    <servers-contain></servers-contain>
</template>

<script type="text/javascript">
    import ServersHeader from "./components/header.vue"
    import ServersContain from "./components/servers-contain"
        export default {
            data() {
                return {}
            },
            components: {

                ServersHeader,
                ServersContain,
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
