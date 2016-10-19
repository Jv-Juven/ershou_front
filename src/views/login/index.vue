<style lang="less" media="screen">

</style>

<template>
     <login-header></login-header>
     <!-- 登录界面头部 -->
     <login-contain></login-contain>
     <!-- 登录界面主体部分 -->
</template>

<script type="text/javascript">
     import LoginHeader from "./components/header"
     import LoginContain from "./components/login-contain"
        export default {
            data() {
                return {}
            },
          
            components: {
                LoginHeader,
                LoginContain,
                
            },
            
        }

</script>


