<style lang="less" media="screen" scoped>
   .top-p{
        margin-top: 34px;
        text-indent: 30px;
        color:#55bb22;
        font-size: 30px;
        width: 100%;
        border-bottom: 1px solid #999;
   }
   .basic-info{
        p{
            margin-top: 34px;
            text-indent: 26px;
            color:#55bb22;
            font-size: 30px;
            width: 100%;
            border-bottom: 1px solid #999;
            span{
                color:#000;
        }
        }
   }
   .detail-info{
        p{
            margin-top: 34px;
            text-indent: 26px;
            color:#55bb22;
            font-size: 30px;
            width: 100%;
            border-bottom: 1px solid #999;
        }
        label{
            span{
                display: inline-block;
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                color:red;
                
            }
            input{
                width: 20px;
                height: 20px;
                
                margin-top: 30px;
                margin-left: 30px;
            }

        }
        

   }
   .change-password{
        div{
            
            width: 100%;
            height: 60px;
            margin-left: 30px;
            color: red;
            font-size: 36px;
            span{
                display: inline-block;
                width: 30%;
            }
            input{
                width: 60%;
                height: 40px;
                font-size: 22px;

                // &:focus{
                //     outline: 0px;
                // }
            }
        }
   }

  
</style>

<template lang="html">
    <p class="top-p">账号：</p>
    <div class="basic-info">
        <p>手机号&nbsp;<span>18813750848</span></p>
        <p>&nbsp;学&nbsp;&nbsp;号&nbsp;<span>2013081008</span></p>
        <p>一卡通&nbsp;<span>20026648</span></p>
    </div>
    <div class="detail-info">
        <p>用户名：one</p>
        <p>&nbsp;密&nbsp;&nbsp;码&nbsp;：******</p>
        <label><input type="checkbox" v-on:checked="" ></input><span>修改密码</span></label>
    </div>
    <div class="change-password" >
        <div ><span>&nbsp;旧&nbsp;密&nbsp;码&nbsp;：</span><input type="text" placeholder="请输入旧密码"></div>
        <div ><span>&nbsp;新&nbsp;密&nbsp;码&nbsp;：</span><input type="text" placeholder="请输入新密码"></div>
        <div ><span>&nbsp;再次输入：</span><input type="text" placeholder="与上面相同"></div>
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
