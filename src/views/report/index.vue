<template>
    <report-header></report-header>
    <!-- 举报界面头部 -->
    <report-contain></report-contain>
    <!-- 举报界面主体 -->
</template>

<script type="text/javascript">
    import ReportHeader from "./components/header.vue"
    import ReportContain from "./components/report-contain"
   
        export default {
            data() {
                return {}
            },
            components: {

                ReportHeader,
                ReportContain,
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
