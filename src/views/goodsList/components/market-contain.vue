<template lang="html">

    <ul>
        <li v-for="item in items" >
        <a v-link="{path:'/look?'}">
            <img  :src="item.src">
            <div class="right">
                <div class="title">{{item.title}}<span class="time">{{item.time}}</span></div>
                <div class="price">{{item.price}}</div>
                <div class="address">{{item.address}}</div>
            </div>
            
            <!-- <span class="arrow">&gt;</span> -->
        </li>
        </a>
        
    </ul>
    <div class="page">
        <a href="#">首页</a>
        <a href="#">上一页</a>
        <a href="#">下一页</a>
        <a href="#">尾页</a>
    </div>
    <div class="tianchong"></div>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        items:[
                            {src:'../../../../static/image/phone/iphone5.png',title:'手机',time:'2017-1-3',price:'1500',address:'广中医'},
                            {src:'../../../../static/image/phone/iphone4.png',title:'家电',time:'2017-1-3',price:'1500',address:'广中医'},
                            {src:'../../../../static/image/phone/iphone4.png',title:'配件',time:'2017-1-3',price:'1500',address:'广中医'},
                            {src:'../../../../static/image/phone/iphone4.png',title:'运动',time:'2017-1-3',price:'1500',address:'广中医'},
                            {src:'../../../../static/image/phone/iphone4.png',title:'相机',time:'2017-1-3',price:'1500',address:'广中医'},
                            {src:'../../../../static/image/phone/iphone5.png',title:'饰品',time:'2017-1-3',price:'1500',address:'广中医'},

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
        li{
            height: 150px;
            // line-height: 80px;

            border-bottom: 1px solid #999;
            position: relative;
            color:#55bb22;
            // clear: both;
            a{
                display: inline-block;
                width: 100%;
                height: 80px;
                color:#000;
            }
            img{
                height: 120px;
                width: 120px;
                margin-left: 15px;
                margin-top: 15px;
                float: left;
            }
            .right{
                width: 75%;
                margin-top: 15px;
                float: left;
                margin-left: 30px;
                font-size: 26px;
                .title{
                    width: 100%;
                    span{
                        float: right;
                        color:red;
                        margin-right: 20px;
                    }
                }
                .price{
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .page{
        width: 60%;
        margin: 20px auto;
        // float: left;
        a{
            text-decoration: none;
            display: inline-block;
            width: 90px;
            height: 40px;
            text-align: center;
            color: #55bb22;
            &:active{
                color:red;
            }
        }
    }
    .tianchong{
            height: 100px;
        }
</style>

