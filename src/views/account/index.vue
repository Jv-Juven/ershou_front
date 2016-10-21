<template>
     <account-header></account-header>
     <!-- 个人账户头部 -->
     <account-contain></account-contain>
     <!-- 个人账户信息主体 -->
</template>

<script type="text/javascript">
     import AccountHeader from "./components/header"
     import AccountContain from "./components/account-contain"
        export default {
            data() {
                return {}
            },
          
            components: {
                AccountHeader,
                AccountContain,
            },
            
        }

</script>

<style lang="less" media="screen">

</style>


