<template>
    <section>
        <p>{{server.name}}<span>客服联系方式</span></p>
        <div class="chatbox">
           <p>QQ:<span>{{server.qq}}</span></p>
           <p>email:<span>{{server.email}}</span></p>
           <p>phone:<span>{{server.phone}}</span></p>
        </div>
        <div class="new"><span>请填写以下信息，客服会尽快联系你</span></div>
        <div class="caption">
            <div class="caption-left">
                <span>联系人</span>
            </div>
            <div class="caption-right">
               <input placeholder="姓名" />
               <!-- <span :style="nameStyle">不能为空，最多10字</span> -->
            </div>
        </div>
        <div class="price">
           <div class="price-left">
               <span>联系电话</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入手机号码" ></input>
               <!-- <span :style="numberStyle">请符合手机号码格式</span> -->
           </div>
        </div>
        <div class="caption">
            <div class="caption-left">
               <span>问题描述：</span>
               
            </div>
            <div class="caption-right">
                 <textarea placeholder="请填写问题"></textarea>
                 <!-- <span :style="addressStyle">不能为空</span> -->
            </div>
        </div>
       <input type="button" value="留言" class="send-btn"></input>
       <input type="button" name="reset" value="重置" class="reset-btn">
    </section>
    
</template>

<script type="text/javascript">
    export default {
            data() {
                return {
                    server:{
                        // name:'广中医',
                        // qq:'357448012',
                        // email:'357448012@qq.com',
                        // phone:'1881888888888',
                    },
                }
            },
            components: {

                
            },
            route: {
               
            },
            ready() {
                var server=this.$route.query.server;
                if(server==1){
                    this.server={
                        name:'广中医',
                        qq:'357448012',
                        email:'357448012@qq.com',
                        phone:'1881888888888',
                    }
                }else if(server==2){
                    this.server={
                        name:'广药',
                        qq:'357448012',
                        email:'357448012@qq.com',
                        phone:'1881888888888',
                    }
                }else if(server==3){
                    this.server={
                        name:'华工',
                        qq:'357448012',
                        email:'357448012@qq.com',
                        phone:'1881888888888',
                    }
                }else if(server==4){
                    this.server={
                        name:'中大',
                        qq:'357448012',
                        email:'357448012@qq.com',
                        phone:'1881888888888',
                    }
                }
                // console.log(server)
               
            },
        }
</script>

<style lang="less" media="screen" scoped>
    section{
        p{
            color:#55bb22;
            font-size: 36px;
            margin-left: 30px;
            margin-top: 20px;
            color:#55bb22;
            span{
            margin-left: 20px;
            color:#000;
            font-size: 26px;
        }
        }
        .chatbox{
            height: 200px;
            // border:1px solid #999;
        }
        // .sendMessage{
        //     height: 60px;
        //     width: 80%;
        //     border:1px solid #999;
        //     float: left;
        //     margin-top: 20px;
        //     border-radius: 15px;
        //     margin-left: 7px;
        //     margin-right: 7px;
        // }
        .send-btn{
            width: 125px;
            height: 62px;
            font-size: 26px;
            margin-top: 30px;
            background: #55bb22;
            color:#fff;
            border-radius: 15px;
            margin-left: 200px;
        }
        .reset-btn{
            width: 125px;
            height: 62px;
            font-size: 26px;
            margin-top: 30px;
            margin-left: 50px;
            background: #55bb22;
            color:#fff;
            border-radius: 15px;
        }
        .new{
            margin-top: 30px;
            height: 70px;
            background-color: #eee;
            line-height: 70px;
            margin-bottom: 25px;
            span{
                font-size: 30px;
                margin-left: 20px;
            }
        }
        .caption{
            width: 100%;
            height: 120px;
            // border-bottom: 1px solid #999;
            .caption-left{
                .left;
                height: 120px;
                // border-right: 1px solid #999;
                line-height: 120px;
                text-align: center;
                span{
                    font-size: 26px;
                    color: #55bb22;
                }
            }
            .caption-right{
                .right;
                height: 120px;
                line-height: 120px;
                
                input{
                    // border:none;
                    width: 55%;
                    height: 50px;
                    line-height: 50px;
                    font-size: 22px;
                    border: 2px solid #55bb22;
                    &:focus{
                        outline: 0px;
                    }
                }
                textarea{
                    margin-top: 20px;
                    height: 80px;
                    width: 55%;
                    font-size: 22px;
                    border: 2px solid #55bb22;
                }
                span{
                    clear: both;
                    // display: inline-block;
                    // font-size: 22px;
                    // width: 40%;
                    // height: 40px;
                    // position: absolute;
                    color: #55bb22;
                }
            }
        }
        .left{
            width: 20%;
            float: left;

        

        }
        .right{
            width: 79%;
            
            float: left;
            
        }
        .price{
            // margin-top: 10px;
            width: 100%;
            height: 100px;
            line-height: 100px;
            // margin-top: 10px;
            // border-bottom: 1px solid #999;
            .price-left{
                .left;
                height: 100px;
                // border-right: 1px solid #999;
                line-height: 100px;
                text-align: center;
                span{
                    font-size: 26px;
                    color: #55bb22;
                }
            }
            .price-right{
                .right;
                height: 59px;
                input{
                    // border:none;
                    width: 55%;
                    height: 55px;
                    border: 2px solid #55bb22;
                    font-size: 22px;
                    &:focus{
                        outline: 0px;
                    }
                }
                span{
                    color:#55bb22;
                }
            }
        }
    }
</style>
