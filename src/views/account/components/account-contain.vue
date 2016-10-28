<template lang="html">
    <p class="top-p">账号：</p>
    <div class="basic-info">
        <p>手机号：<span>18813750848</span></p>
        <p>学&nbsp;号：<span>2013081008</span></p>
        <p>一卡通：<span>20026648</span></p>
    </div>
    <div class="detail-info">
        <p>用户名：one</p>
        <p>&nbsp;密&nbsp;&nbsp;码&nbsp;：<input type="password" readonly="true" :value="password"></input></p>
        <label><input type="checkbox" v-on:click="modify" ></input><span>修改密码</span></label>
    </div>
    <div class="change-password" v-show='modifyshow'>
        <div class="box"><span>&nbsp;旧&nbsp;密&nbsp;码&nbsp;：</span><input :type="oldtype" v-model="oldpassword" @blur='checkpassword(true,false,false)' @focus="reset(true,false,false)" @keyup="checkontime(true,false,false)"></div>
        <div v-show="old" class="err"><span>{{oldmsg}}</span></div>
        <div class="box"><span>&nbsp;新&nbsp;密&nbsp;码&nbsp;：</span><input :type="text" v-model="newpassword" @blur='checkpassword(false,true,false)' @focus="reset(false,true,false)" @keyup="checkontime(false,true,false)"></div>
        <div v-show="new" class="err"><span>{{newmsg}}</span></div>
        <div class="box"><span>&nbsp;再次输入：</span><input :type="check" v-model="checkword" @blur="checkpassword(false,false,true)" @focus="reset(false,false,true)" @keyup="checkontime(false,false,true)"></div>
        <div v-show="checkshow" class="err"><span>{{checkmsg}}</span></div>
        <div class="button"><input type="button" class="modify-btn" value="确认修改" :disabled="able" :style='style' ></input></div>
    </div>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        modifyshow:false,
                        password:'123456',
                        old:false,
                        oldmsg:'密码不正确',
                        new:false,
                        newmsg:'密码位数大于6小于9',
                        checkshow:false,
                        checkmsg:'两次输入密码不同',
                        oldtype:'text',//旧密码框类型
                        oldpassword:'请输入旧密码',//旧密码框内容
                        text:'text',
                        check:'text',//确认框的类型
                        newpassword:'请输入新密码',
                        checkword:'请确认密码',//确认框的内容
                        able:'disabled',
                        style:{
                            // background:'#999',
                            opacity:'0.3'
                        },
                        



                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                    modify:function(){
                        this.modifyshow=!this.modifyshow;
                    },
                    reset:function(old,newval,check){
                        if (old==false) {
                            if (newval ==true && check ==false ) {
                                this.text='password';
                                if(this.newpassword=='请输入新密码'){
                                    this.newpassword='';
                                }else{
                                    this.newpassword=this.newpassword;
                                }
                            }//newpassword的焦点事件
                            if (newval ==false && check==true) {
                                this.check='password';
                                if (this.checkword=='请确认密码') {
                                    this.checkword='';
                                }else{
                                    this.checkword=this.checkword;
                                }
                            }//确认框的焦点事件
                        }else{
                            this.oldtype='password';
                            if (this.oldpassword=='请输入旧密码') {
                                this.oldpassword='';
                            }
                        }
                    },//reset函数
                    checkpassword:function(old,newval,check){

                        if (old==true) {
                            if (this.oldpassword=='') {
                                this.oldtype='text';
                                this.oldpassword='请输入旧密码'
                            }
                        }else{
                            if (newval==true && check==false) {
                                if (this.newpassword=='') {
                                    this.text='text';
                                    this.newpassword='请输入新密码';
                                    
                                }
                            }//输入新密码框的失去焦点事件
                            if (newval==false && check==true) {
                                if (this.checkword=='') {
                                    this.check='text';
                                    this.checkword='请确认密码';
                                }
                            }
                        }
                    },//check函数
                    checkontime:function(old,newval,check){
                        if (old==true) {
                            if(this.oldpassword.length >= 6 &&this.oldpassword.length<=9){
                                if (this.oldpassword !=this.password) {
                                    this.old=true;
                                    
                                    this.oldmsg="密码不正确"
                                    this.able='disabled';
                                    this.style.opacity='0.3';
                                }else{
                                    this.old=false;
                                    if (this.newpassword!='请输入新密码' && this.new==false &&this.checkshow==false&&this.checkword!='请确认密码') {
                                        
                                        this.able=false;
                                        this.style.opacity='1';
                                }

                                }
                            }else{
                                if (this.oldpassword.length<6 ||this.oldpassword.length>9) {
                                    this.old=true;
                                    this.able='disabled';
                                    this.style.opacity='0.3';
                                    this.oldmsg='密码位数大于6小于9';
                                }
                            }
                        }else{
                            if (newval==true && check==false) {

                                var reg=/^[a-zA-Z0-9_-]{6,9}$/;
                                if (!reg.test(this.newpassword)) {
                                    this.new=true;
                                    this.able='disabled';
                                    this.style.opacity='0.3';
                                    this.newmsg='密码位数大于6小于9';
                                }else{
                                    
                                    if(this.checkword==this.newpassword){
                                        this.new=false;
                                        this.checkshow=false;
                                         if (this.oldpassword!='请输入旧密码' && this.old==false &&this.checkshow==false&&this.checkword!='请确认密码') {
                                        
                                        this.able=false;
                                        this.style.opacity='1';
                                }
                                }else{
                                    if (this.checkword!='请确认密码') {
                                        this.new=true;
                                        this.newmsg='密码不同'
                                        this.able='disabled';
                                        this.style.opacity='0.3'
                                    }else{
                                        this.new=false;
                                    }
                                    
                                    }
                                    
                                    
                                }

                            }//新密码输入框的验证
                            if (newval==false && check==true) {
                                if(this.checkword.length >= 6 &&this.checkword.length<=9){
                                if (this.checkword !=this.newpassword) {
                                    this.checkshow=true;
                                    this.able='disabled';
                                    this.style.opacity='0.3';
                                    this.checkmsg="密码不同"
                                }else{
                                    this.checkshow=false;
                                    this.new=false;
                                     if (this.newpassword!='请输入新密码' && this.new==false &&this.old==false&&this.oldpassword!='请输入密码') {
                                        
                                        this.able=false;
                                        this.style.opacity='1';
                                }

                                }
                            }else{
                                if (this.checkword.length<6 ||this.checkword.length>9) {
                                    this.checkshow=true;
                                    this.able='disabled';
                                    this.style.opacity='0.3';
                                    this.checkmsg='密码位数大于6小于9';
                                }
                            }
                            }
                            
                        }
                    },//checkontime函数

                },
                components: {}
        }

</script>

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
            input{
                width: 40%;
                height: 40px;
                font-size: 22px;
                border:none;
            }
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
        .box{
            
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
        
        .err{
                color:red;
                
                width: 60%;
                height: 50px;
                font-size: 20px;
                margin-left: 30%;
                text-indent: 30px;
        
            }
         
        .button{
            width: 100%;
            margin-left: 0px;
            .modify-btn{
                width: 80%;
                height: 60px;
                background: #55bb22;
                line-height: 60px;
                color: #fff;
                font-size: 30px;
                text-align: center;
                margin: 30px auto;

                display: block;
            }
        }

   }
   

  
</style>

