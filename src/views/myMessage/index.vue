<template>
    <!-- <message-header msgone="我的留言"></message-header> -->
    <message-contain></message-contain>
    <message-footer a="a" b="b" c="c" d="d"></message-footer>
</template>

<script type="text/javascript">
    //import MessageHeader from "../../components/header"
    import MessageContain from "./components/message-contain"
    import MessageFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {

                //MessageHeader,
                MessageContain,
                MessageFooter,
            },
            route: {
                
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>

</style>
