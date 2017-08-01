<template>
    <!-- 我的帖子头部 -->
    <!-- <mynote-header></mynote-header> -->
    <!-- 我的帖子记录 -->
    <mynote-record></mynote-record>
    <!-- 我的帖子列表 -->
    <mynote-list></mynote-list>
    <mynote-btn></mynote-btn>
    <!-- 我的帖子尾部 -->
    <mynote-footer a="a" b="b" c="c" d="d"></mynote-footer>
</template>

<script type="text/javascript">
    //import MynoteHeader from "./components/header"
    import MynoteRecord from "./components/record"
    import MynoteList from "./components/record-list"
    import MynoteBtn from "./components/footer-button"
    import MynoteFooter from "../../components/allfooter"
        export default {
            data() {
                return {}
            },
            components: {
               //MynoteHeader,
               MynoteRecord,
               MynoteList,
               MynoteBtn,
               MynoteFooter,
            },
        }
</script>

<style lang="less" media="screen">

</style>

