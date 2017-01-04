<template lang="html">
    <!-- <div style="clear:both;"> </div> -->
    <ul>
        <li v-for="item in items"  index="{{item.namevalue}}">
        <a   @click="skip" >
            <img :src="item.src">
            <span class="word" >{{item.text}}</span>
            <span class="arrow">&gt;</span>
        </li>
        </a>

    </ul>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        abc:'ddd',
                        items:[
                            {src:'./static/image/market/phone.jpg',text:'手机',namevalue:'phone'},
                            {src:'./static/image/market/electrical.jpg',text:'家电',namevalue:'phone'},
                            {src:'./static/image/market/parts.jpg',text:'配件',namevalue:'phone'},
                            {src:'./static/image/market/sport.jpg',text:'运动',namevalue:'phone'},
                            {src:'./static/image/market/camera.jpg',text:'相机',namevalue:'phone'},
                            {src:'./static/image/market/accessory.jpg',text:'饰品',namevalue:'phone'},
                            {src:'./static/image/market/books.jpg',text:'书籍',namevalue:'book'},
                            {src:'./static/image/market/other.jpg',text:'其他',namevalue:'phone'},

                        ],
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                   skip:function(){
                        //console.log(this)//获取的是el
                        //console.log(event.currentTarget)//获取的是点击的节点
                        var value=event.currentTarget.parentNode.getAttribute('index');
                        var url="/goodslist?value="+value;
                        this.$router.go(url)
                        // var value=this.attr('index');
                        // alert(value)

                   }
                },
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
ul {
    list-style: none;
    li {
        height: 80px;
        line-height: 80px;

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
                font-size: 30px;
                // display: inline-block;
                // width: 80px;
                // height: 40px;
                // line-height: 40px;
                // margin-top: -30px;
            }
            .arrow{
                clear: both;
                position: absolute;
                font-size: 40px;
                font-weight: bold;
                right: 50px;
            }


    }
}
</style>
