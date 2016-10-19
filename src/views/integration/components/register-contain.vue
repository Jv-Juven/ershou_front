<style lang="less" media="screen" scoped>
    .container{
        width: 80%;
        height: 300px;
        magin:30px auto;
        
    }
    .input-box{
        margin-top: 20px;
        span{
            display: inline-block;
            width: 30%;
            height: 60px;
            font-size: 30px;
            color:#55bb22;
            text-indent: 30px;
        }
        input{

            width: 60%;
            height: 60px;
            font-size: 26px;
            border:none;
            border-bottom: 1px solid #ccc;
            &:focus{
                outline: 0px;
            }
        }
    }
    .agree{
        margin-left: 30px;
        input{
            width: 20px;
            height: 20px;
        }
        label{
            font-size: 20px;
            

        }
        a{
            
            text-decoration: none;
            color:red;
            &:hover{
                color:blue;
            }
        }
    }
    .register-box{
            .register-btn{
            width: 100%;
            height: 60px;
            background: #55bb22;
            line-height: 60px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            margin: 30px auto;
            display: block;
        }
            .left{
                display: inline-block;
                width: 40%;
                height: 30px;
                line-height: 30px;
                font-size: 22px;
                margin-left: 10px;
            }
            .right{
                display: inline-block;
                
                height: 30px;
                line-height: 30px;
                font-size: 22px;
                float: right;
                margin-right: 10px;

            }

    }
</style>

<template lang="html">
    <section class="container">
        <div class="input-box">
            <span>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input type="text" placeholder="请输入邮箱"></input>
        </div>
        <div class="input-box">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input type="text" placeholder="请输入6至9位密码" maxlength="9" minlength="6"></input>
        </div>
        <div class="input-box">
            <span>确认密码：</span><input type="text" placeholder="请输入6至9位密码" maxlength="9" minlength="6"></input>
        </div>
        <div class="agree">
            <input type="checkbox" id="agreebox"></input><label for="agreebox">我已阅读并同意</label>
            <a href="#">&lt;&lt;用户服务协议&gt;&gt;</a>
        </div>
        <div class="register-box">
            <input type="button" class="register-btn" value="注册"></input>
            
        </div>
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
