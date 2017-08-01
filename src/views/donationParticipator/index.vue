<template>
    <!-- <participator-header msgone="信息登记"></participator-header> -->
    <participator-contain></participator-contain>
    <participator-footer a="true" b="true" c="true" d="true"></participator-footer>
</template>

<script type="text/javascript">
    // import ParticipatorHeader from "../../components/header"
    import ParticipatorContain from "./components/participator-contain"
    import ParticipatorFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ParticipatorHeader,
                ParticipatorContain,
                ParticipatorFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
