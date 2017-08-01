<template lang="html">
    <section class="goods-picture">
        <a href="javascript:;" class="file">
        <input type="file" name="" id="">
        </a>
        <!-- <input type="file" name="pic" id="pic" accept="image/*" class="upload-input" /> -->
        <!--  <img src="../../../../static/image/photo.png" class="photo"> -->
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

<style lang="less" media="screen" scoped>
    .goods-picture{
        width: 100%;
        height: 200px;
        background-color: #F7F7F7;

    }
    // .upload-input{
    //     background-image: url(../../../../static/image/photo.png) no-repeat;
    //     display: block;
    //     float: left;
    //     width: 175px;
    //     height: 175px;
    // }
    .file {
        position: relative;
        display: block;
        
        border: 1px solid #99D3F5;
        
        // padding: 4px 12px;
        float: left;
        width: 175px;
        height: 175px;
        overflow: hidden;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
        float: left;
        margin-top: 12.5px;
        margin-left: 15px;
        margin-right: 15px;
        background-size: 175px 175px;
        background-image: url(../../../../static/image/photo.png) ;
    }
    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }
    .file:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
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

