<style lang="less" media="screen">

</style>

<template>
    <mynote-header></mynote-header><!-- 我的帖子头部 -->
    <mynote-record></mynote-record><!-- 我的帖子记录 -->
    <mynote-list></mynote-list><!-- 帖子列表 -->
    <mynote-footer></mynote-footer><!-- 帖子尾部按钮，删除，修改 -->
</template>

<script type="text/javascript">
    import MynoteHeader from "./components/header"
    import MynoteRecord from "./components/record"
    import MynoteList from "./components/record-list"
    import MynoteFooter from "./components/footer-button"
        export default {
            data() {
                return {}
            },
          
            components: {
               MynoteHeader,
               MynoteRecord,
               MynoteList,
               MynoteFooter,
            },
            
        }

</script>


