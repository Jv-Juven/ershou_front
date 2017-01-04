<template>
    <!-- <activity-header msgone="义卖活动"></activity-header> -->
    <activity-contain></activity-contain>
    <activity-footer a="a" c="c" d="d"></activity-footer>
</template>

<script type="text/javascript">
    //import ActivityHeader from "../../components/header"
    import ActivityContain from "./components/activity-contain"
    import ActivityFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //ActivityHeader,
                ActivityContain,
                ActivityFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
