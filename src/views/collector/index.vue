<template>
    <collector-header></collector-header>
    <collector-list></collector-list>
</template>

<script type="text/javascript">
    import CollectorHeader from "./components/header.vue"
    import CollectorList from "./components/collector-list"
        export default {
            data() {
                return {}
            },
            components: {

                CollectorHeader,
                CollectorList,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
