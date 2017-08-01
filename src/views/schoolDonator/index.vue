<template>
    <!-- <setting-header msgone="个人设置"></setting-header> -->

    <!-- 个人设置头部 -->
    <setting-contain></setting-contain>
    <!-- 个人设置主体 -->
    <setting-footer a="a" b="b" c="c"></setting-footer>
    <!-- 底部 -->
</template>

<script type="text/javascript">
     //import SettingHeader from "../../components/header"
    import SettingContain from "./components/setting-contain"
    import SettingFooter from "../../components/allfooter"
    export default {
        data() {
            return {}
        },
      
        components: {
            //SettingHeader,
            SettingContain,
            SettingFooter,
        },
        
    }

</script>

<style lang="less" media="screen" scoped>

</style>


