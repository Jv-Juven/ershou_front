<template>
   <section>
       <p>TO:<span>{{serversOne}}</span></p>
       <div class="chatbox">
           <p>消息一{{dateOne}}</p>
           <p>消息二{{dateTwo}}</p>
       </div>
       <input class="sendMessage"></input><input type="button" value="发送" class="send-btn"></input>
   </section>
    
</template>

<script type="text/javascript">
    export default {
            data() {
                return {
                    serversOne:'广中医'
                }
            },
            components: {

                
            },
            route: {
               
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen" scoped>
    section{
        p{
            color:#55bb22;
            font-size: 36px;
            margin-left: 30px;
            margin-top: 50px;
            span{
            color:red;
            font-size: 26px;
        }
        }
        .chatbox{
            height: 600px;
            border:1px solid #999;
        }
        .sendMessage{
            height: 60px;
            width: 80%;
            border:1px solid #999;
            float: left;
            margin-top: 20px;
            border-radius: 15px;
            margin-left: 7px;
            margin-right: 7px;
        }
        .send-btn{
            width: 125px;
            height: 62px;
            font-size: 26px;
            margin-top: 19px;
            background: #55bb22;
            color:#fff;
            border-radius: 15px;
        }
    }
</style>
