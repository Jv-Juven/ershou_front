<template>
    <!-- <examine-header></examine-header> -->
    <examine-contain></examine-contain>
    <examine-footer a="true" b="b" c="c" d="d"></examine-footer>
</template>

<script type="text/javascript">
    //import ExamineHeader from "./components/header"
    import ExamineContain from "./components/examine-contain"
    import ExamineFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ExamineHeader,
                ExamineContain,
                ExamineFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
