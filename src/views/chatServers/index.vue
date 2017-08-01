<template>
    <!-- <chat-header msgone="联系客服"></chat-header> -->
    <chat-contain></chat-contain>
    <chat-footer a="a" b="b" c="c" d="d"></chat-footer>
</template>

<script type="text/javascript">
    //import ChatHeader from "../../components/header"
    import ChatContain from "./components/chat-contain"
    import ChatFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {
                //ChatHeader,
                ChatContain,
                ChatFooter,
                // ChatContain,
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

<style lang="less" media="screen" scoped>

</style>
