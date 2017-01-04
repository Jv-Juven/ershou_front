<template>
    <!-- <report-header msgone="举报"></report-header> -->
    <!-- 举报界面头部 -->
    <report-contain></report-contain>
    <!-- 举报界面主体 -->
    <report-footer a="a" b="b" c="c" d="d"></report-footer>
</template>

<script type="text/javascript">
    //import ReportHeader from "../../components/header"
    import ReportContain from "./components/report-contain"
    import ReportFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ReportHeader,
                ReportContain,
                ReportFooter,
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
