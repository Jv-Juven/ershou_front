<style lang="less" media="screen">

</style>

<template>
    <publish-header></publish-header>
    <publish-picture></publish-picture>
    <goods-type></goods-type>
    <goods-info></goods-info>
    <seller-info></seller-info>
    <footer-button></footer-button>
</template>

<script type="text/javascript">
    import PublishHeader from "./components/publishheader"
    import PublishPicture from "./components/publishpicture"
    import GoodsType from "./components/goodstype"
    import GoodsInfo from "./components/goodsinfo"
    import SellerInfo from "./components/sellerinfo"
    import FooterButton from "./components/footerbutton.vue"
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


