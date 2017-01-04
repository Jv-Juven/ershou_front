<template lang="html">
    <section>
        <p class="time">{{userOne}}</p>
        <p class="school">{{dataOne}}</p>
        <div class="new"><span>建议如下</span></div>
        <p class="content">{{suggestion}}</p>
        <div class="button">
            <input type="button" name="chat" value="补充建议" v-link="{path:'/server'}">
            <input type="button" name="look" value="去逛逛" class="look" v-link="{path:'/index'}">
        </div>
        <div class="footer"></div>
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        userOne:'2017-1-3',
                        dataOne:'您对广中医客服留言',
                        suggestion:'该平台宣传还不到位，不过整体上很符合大学城的使用'
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
        .time,.school{
            margin-top: 20px;
            margin-left: 20px;
            font-size: 30px;
            color:#55bb22;
        }
        .new{
            margin-top: 30px;
            height: 70px;
            background-color: #eee;
            line-height: 70px;
            margin-bottom: 5px;
            span{
                font-size: 30px;
                margin-left: 20px;
            }
        }
        .content{
            margin-left: 20px;
            font-size: 30px;
            margin-right: 20px;
            line-height: 50px;
        }
        .button{
            width: 80%;
            margin: 50px auto;
            input{
                width: 200px;
                height: 50px;
                font-size: 30px;
                background-color: #55bb22;
                border-radius: 5px;
                color:#fff;
                margin-left: 50px;
            }
            // .look{
            //     margin-right: 0px;
            // }
        }
        .footer{
            height: 100px;
        }
    }

</style>

