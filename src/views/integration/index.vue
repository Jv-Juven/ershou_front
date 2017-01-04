<template>
    <!--  <integration-header msgone="我的积分"></integration-header> -->
     <!-- 积分界面头部 -->
     <integration-contain></integration-contain>
     <!-- 积分界面主体部分 -->
     <integration-footer a="a" b="b" c="c" d="d"></integration-footer>
</template>

<script type="text/javascript">
    //import IntegrationHeader from "../../components/header"
    import IntegrationContain from "./components/integration-contain"
    import IntegrationFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
          
            components: {
                //IntegrationHeader,
                IntegrationContain,
                IntegrationFooter,
            },
            
        }

</script>

<style lang="less" media="screen">

</style>



