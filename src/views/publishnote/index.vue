<style lang="less" media="screen">

</style>

<template>
    <publish-header></publish-header>
    <!-- 发布帖子头部 -->
    <publish-picture></publish-picture>
    <!-- 发布帖子图片 -->
    <goods-type></goods-type>
    <!-- 发布帖子类型 -->
    <goods-info></goods-info>
    <!-- 发布物品信息 -->
    <seller-info></seller-info>
    <!-- 发布帖子个人信息 -->
    <footer-button></footer-button>
    <!-- 发布帖子尾部按钮 -->
</template>

<script type="text/javascript">
    import PublishHeader from "./components/publish-header"
    import PublishPicture from "./components/publish-picture"
    import GoodsType from "./components/goods-type"
    import GoodsInfo from "./components/goods-info"
    import SellerInfo from "./components/seller-info"
    import FooterButton from "./components/footer-button"
        export default {
            data() {
                return {}
            },
          
            components: {
               PublishHeader,
               PublishPicture,
               GoodsType,
               GoodsInfo,
               SellerInfo,
               FooterButton,
            },
            
        }

</script>


