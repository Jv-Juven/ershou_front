<template lang="html">
    <!-- <div style="clear:both;"> </div> -->
    <ul>
        <li v-for="item in items" >
        <a href="#">
            <img :src="item.src">
            <span class="word">{{item.text}}</span>
            <span class="arrow">&gt;</span>
        </li>
        </a>
        
    </ul>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        items:[
                            {src:'./static/image/market/phone.jpg',text:'手机'},
                            {src:'./static/image/market/electrical.jpg',text:'家电'},
                            {src:'./static/image/market/parts.jpg',text:'配件'},
                            {src:'./static/image/market/sport.jpg',text:'运动'},
                            {src:'./static/image/market/camera.jpg',text:'相机'},
                            {src:'./static/image/market/accessory.jpg',text:'饰品'},
                            {src:'./static/image/market/books.jpg',text:'书籍'},
                            {src:'./static/image/market/other.jpg',text:'其他'},

                        ],
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                   
                },
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
    ul{
        list-style: none;
        clear: both;
        li{
            height: 100px;
            line-height: 100px;

            border-bottom: 1px solid #999;
            position: relative;
            color:#55bb22;
            a{
                display: inline-block;
                width: 100%;
                height: 100px;
                color:#000;
            }
            img{
                height: 35px;
                width: 35px;
                margin-left: 50px;
                margin-top: 32.5px;
            }
            .word{
                position: absolute;
                left:100px;
                font-weight: bold;
                // display: inline-block;
                // width: 80px;
                // height: 40px;
                // line-height: 40px;
                // margin-top: -30px;
            }
            .arrow{
                clear: both;
                position: absolute;
                right: 50px;
            }
        }
    }

</style>

