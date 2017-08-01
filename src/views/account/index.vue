<template>
     <!-- <account-header msgone="账号信息"></account-header> -->
     <!-- 个人账户头部 -->
     <account-contain></account-contain>
     <!-- 个人账户信息主体 -->
     <account-footer a="a" b="b" c="c" d="d"></account-footer>
</template>

<script type="text/javascript">
     //import AccountHeader from "./components/header"
     //import AccountHeader from "../../components/header"
     import AccountContain from "./components/account-contain"
     import AccountFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
          
            components: {
                //AccountHeader,
                AccountContain,
                AccountFooter,
            },
            
        }

</script>

<style lang="less" media="screen">

</style>


