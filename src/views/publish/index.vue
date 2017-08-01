<template>
    <!-- <participator-header msgone="信息登记"></participator-header> -->
    <publish-contain></publish-contain>
    <participator-footer a="true" b="true" c="true" d="true"></participator-footer>
</template>

<script type="text/javascript">
    // import ParticipatorHeader from "../../components/header"
    import PublishContain from "./components/publish-contain"
    import ParticipatorFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ParticipatorHeader,
                PublishContain,
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
