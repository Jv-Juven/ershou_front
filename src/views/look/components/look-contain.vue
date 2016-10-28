<template lang="html">
   <section class="goods-picture">
       <img src="../../../../static/image/phone/iphone6s.png" class="photo">
       <div class="other-picture"></div>
       <div class="other-picture"></div>
       <div class="other-picture"></div>
   </section>
   <div class="caption">
       <span>山地车转让</span>
       <span class="date">2016-10-25</span>
   </div>
   <div class="price">
       <span>800元</span>
   </div>
   <div class="description">
       <span>山地车八成新，因现在在外实习，闲置，所以转让</span>
   </div>
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
        width: 750px;
        height: 200px;
        margin:50px auto;
        background-color: #F7F7F7;
        border-bottom:1px solid #999;

    }
    .size{
        width: 175px;
        height: 175px;
    }
    .photo{
        .size;
        float: left;
        margin-top: 12.5px;
        margin-left: 8px;
        
    }
    .other-picture{
        .size;
        float: left;
        border:1px solid red;
        margin-top: 12.5px;
        margin-left: 8px;
    }
    .caption{
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        margin-top: 80px;
        margin-left: 20px;
        border-bottom: 1px solid #999;
        .date{
            float: right;
            margin-right: 20px;
            color:red;
            font-size: 22px;
        }
    }
    .price{
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
        color: red;
        // border-bottom: 1px solid #999;
    }
    .description{
        height: 80px;
        font-size: 24px;
        margin-left: 20px;
        border-bottom: 1px solid #999;
    }
</style>

