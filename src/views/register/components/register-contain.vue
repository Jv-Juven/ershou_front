<template lang="html">
    <section class="container">
        <div class="input-box">
            <span>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input type="text"  id="email"  @keyup="checkEmail" @blur="checkEmail" @focus="resetEmail" v-model='email'></input>
        </div>
        <div v-show='ok' class="err">{{message}}</div>
        <div class="input-box">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input :type="text" @keyup="checkPassword" @blur="checkPassword" @focus="resetPassword" v-model='password'   ></input>
        </div>
        <div v-show='passok' class="err">{{passmessage}}</div>
        <div class="input-box">
            <span>确认密码：</span><input :type="againtype" @keyup="checkAgain" @blur="checkAgain" @focus="resetAgain" v-model="checkword"></input>
        </div>
        <div v-show='again' class="err">{{againmessage}}</div>
        <div class="agree">
            <input type="checkbox" id="agreebox" v-model='agree' @click='changeagree'></input><label for="agreebox">我已阅读并同意</label>
            <a href="#">&lt;&lt;用户服务协议&gt;&gt;</a>
        </div>
        <div class="register-box">
             <input type="button" class="register-btn" value="注册" :disabled="able" :style='style' @click="dad"></input>
            
        </div>
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        email:'请输入邮箱',
                        password:'请输入密码',
                        checkword:'请确认密码',
                        text:'text',
                        againtype:'text',
                        ok:false,
                        passok:false,
                        again:false,
                        passmessage:'密码格式不正确',
                        message:'邮箱格式不正确',
                        againmessage:'密码不同',
                        able:'disabled',
                        same:false,
                        style:{
                            // background:'#999',
                            opacity:'0.3'
                        },
                        agree:true,
                    }
                },
                computed: {},
                // mounted() {},
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
                    resetAgain:function(){
                        this.again=false;
                        this.againtype='password';
                        if(this.checkword=='请确认密码'){
                            this.checkword='';
                        }
                        else{
                            this.checkword=this.checkword;
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
                                if (this.password!='请输入密码' && this.passok==false &&this.same==true &&this.agree==true) {
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
                                this.same=false;
                                this.passok=true;
                                this.able='disabled';
                                this.style.opacity='0.3';
                            }
                            else{
                                this.passok=false;
                                if (this.checkword==this.password) {
                                    this.same=true;
                                   
                                }else{
                                    this.same=false;
                                    this.able='disabled';
                                this.style.opacity='0.3';
                                }
                                 if (this.email!='请输入邮箱' && this.ok==false &&this.same==true &&this.agree==true) {
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
                    checkAgain:function(){
                        
                        if (this.checkword !='') {
                            if (this.checkword!=this.password) {
                                this.same=false;
                                this.again=true;
                                this.able='disabled';
                                this.style.opacity='0.3';
                            }
                            else{
                                this.again=false;
                                this.same=true;
                                if (this.email!='请输入邮箱' && this.ok==false &&this.same==true &&this.agree==true) {
                                this.able=false;
                                this.style.opacity='1';
                        }
                            }
                        }else{
                            this.same=false;
                            this.againtype='text';
                            this.checkword='请输入密码';
                            this.able='disabled';
                                this.style.opacity='0.3';
                        }
                    },
                    changeagree:function(){
                        this.agree=!this.agree;
                        if (this.email!='请输入邮箱' && this.ok==false &&this.same==true &&this.agree==true) {
                                this.able=false;
                                this.style.opacity='1';
                        }else{
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
    .err{
        width: 60%;
        color:red;
        font-size: 20px;
        margin-left: 30%;
        
    }
</style>