<template lang="html">
    <section>
        <div class="title">
            <p>收到留言:</p>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userOne}}</span>
            <span class="messgae">{{dataOne}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="title">
            <p>发出留言:</p>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
        <div class="chatter">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{userTwo}}</span>
            <span class="messgae">{{dataTwo}}</span>
        </div>
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        userOne:'357448012@qq.com',
                        dataOne:'该商品最低价位多少呢？',
                        userTwo:'123456@qq.com',
                        dataTwo:'什么时候有空交易？'
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
    section{
        .title{
            color: #55bb22;
            font-weight: bold;
            font-size: 28px;
            height: 60px;
            line-height: 60px;
            margin-left: 30px;
        }
        .chatter{
            height: 120px;
            border-bottom: 1px solid #ccc;
            position: relative;
            
            img{
                height: 100px;
                width: 100px;
                border-radius: 50%;
                margin-left: 30px;
                margin-top: 10px;
                
            }
            //  p{
            //     position: absolute;
            //     left: 160px;
            //     top: 25px;
            // }
            .username{
               position: absolute;
               top: 25px;
               left: 160px;
            }
            span{
                font-size: 26px;
                color:#55bb22;
                position: absolute;
                bottom: 25px;
                left: 160px;
            }
        }
    }

</style>

