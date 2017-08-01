<template lang="html">
    <section>
        <div class="title">
            <p>我的建议:</p>
        </div>
        <div class="chatter" v-for="item in items" @click="skip" index="{{item.messageNum}}">
            <img src="../../../../static/image/headpicture.png">
           <!--  <p class="user">用户：</p> -->
            <span class="username">{{item.userOne}}</span>
            <span class="messgae">{{item.dataOne}}</span>
        </div>
        
        <div class="footer"></div>
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        items:[
                        {userOne:'2017-1-3',dataOne:'您对华工客服留言',messageNum:'1'},
                        {userOne:'2017-1-3',dataOne:'您对广中医客服留言',messageNum:'2'}
                        ],
                        
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                   skip:function () {
                       // console.log(event.currentTarget)
                       var messageNum=event.currentTarget.getAttribute('index');
                       var url='/mymessagedetail?messageNum='+messageNum;
                       this.$router.go(url)
                   }
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
            margin-top: 30px;
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
        .footer{
            height: 100px;
        }
    }

</style>

