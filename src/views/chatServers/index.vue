<template>
    <chat-header></chat-header>
    <chat-contain></chat-contain>
</template>

<script type="text/javascript">
    import ChatHeader from "./components/header"
    import ChatContain from "./components/chat-contain"
        export default {
            data() {
                return {}
            },
            components: {
                ChatHeader,
                ChatContain,
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
