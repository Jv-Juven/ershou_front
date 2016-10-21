<template lang="html">
    <from class="container">
        <div class="input-box">
            <span>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input type="text"  id="email"  @keyup="checkEmail" @blur="checkEmail" @focus="resetEmail" v-model='email'></input>
        </div>
        <div v-show='ok' class="err">{{message}}</div>
        <div class="input-box">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input :type="text" @keyup="checkPassword" @blur="checkPassword" @focus="resetPassword" v-model='password' ></input>
        </div>
        <div v-show='passok' class="err">{{passmessage}}</div>
        <div class="login-box">
            <input type="button" class="login-btn" value="登录" :disabled="able" :style='style' @click="dad"></input>
            <a href="#" class="left">手机快捷登录</a>
            <a href="#" class="right">忘记密码</a>
        </div>
    </from>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                email:'请输入邮箱',

                password:'请输入密码',
                message:'邮箱格式不正确',
                text:'text',
                ok:false,
                passok:false,
                passmessage:'密码格式不正确',
                able:'disabled',
                style:{
                    // background:'#999',
                    opacity:'0.3'
                }
            }
        },
        computed: {},

        methods: {
            resetEmail:function(){
                this.ok=false;
                if(this.email=='请输入邮箱'){
                    this.email='';
                }
                else{
                    this.email=this.email;
                }
            },
            resetPassword:function(){
                this.passok=false;
                this.text='password';
                if(this.password=='请输入密码'){
                    this.password='';
                }
                else{
                    this.password=this.password;
                }
            },
            checkEmail:function(){
                var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (this.email !='') {
                    if (!myreg.test(this.email)) {
                        this.ok=true;
                        this.able='disabled';
                        this.style.opacity='0.3';
                    }
                    else{
                        this.ok=false;
                        if (this.password!='请输入密码' && this.passok==false) {
                        this.able=false;
                        this.style.opacity='1';
                }
                    }
                }else{
                    this.email='请输入邮箱'
                    this.able='disabled';
                        this.style.opacity='0.3';
                }

            },
            checkPassword:function(){
                var reg=/^[a-zA-Z0-9_-]{6,9}$/;
                if (this.password !='') {
                    if (!reg.test(this.password)) {
                        this.passok=true;
                        this.able='disabled';
                        this.style.opacity='0.3';
                    }
                    else{
                        this.passok=false;
                        if (this.email!='请输入邮箱' && this.ok==false) {
                        this.able=false;
                        this.style.opacity='1';
                }
                    }
                }else{
                    this.text='text';
                    this.password='请输入密码';
                    this.able='disabled';
                    this.style.opacity='0.3';
                }
            },
            dad:function(){
                alert(this.email)
            }
        },
        components: {}
    }

</script>

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
    .login-box{
            .login-btn{
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
            a{
                color:blue;
                text-decoration: none;
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
    .err{
        width: 60%;
        color:red;
        font-size: 20px;
        margin-left: 30%;
        cursor: pointer;
    }

</style>
