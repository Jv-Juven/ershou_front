<style lang="less" media="screen" scoped>
    .goods-picture{
        width: 100%;
        height: 200px;
        background-color: #F7F7F7;

    }
    .size{
        width: 175px;
        height: 175px;
    }
    .photo{
        .size;
        float: left;
        margin-top: 12.5px;
        margin-left: 15px;
        margin-right: 15px;
    }
    .other-picture{
        .size;
        float: left;
        border:1px solid red;
        margin-top: 12.5px;
    }
</style>

<template lang="html">
   <section class="goods-picture">
       <img src="../../../../static/image/photo.png" class="photo">
       <div class="other-picture"></div>
       <div class="other-picture"></div>
       <div class="other-picture"></div>
   </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {}
                },
                computed: {},
                // mounted() {},
                methods: {},
                components: {}
        }

</script>
