<template lang="html">
    <section>
        <h2>欢迎进入<span>{{school}}</span>义卖专场</h2>
        <p class="holder"><a v-link="{path:'schoolparticipator'}">外校入口</a></p>
        <p class="holder"><a v-link="{path:'schoolholder'}">举办方入口</a></p>
        <div class="new"><span>填写信息（请填写以下信息，方便举办方联系您）</span></div>
       <!--  <form method="POST">
            <span class="caption">标题：</span>
            <input type="text" name="caption" placeholder="qinsgh"  />
            <input type="submit" name="submit" value="提交">
        </form> -->
        <div class="goodsinfo" >
            <div class="caption">
                <div class="caption-left">
                    <span>联系人</span>
                </div>
                <div class="caption-right">
                   <input placeholder="姓名" ></input>
                   <span :style="nameStyle">不能为空，最多10字</span>
                </div>
            </div>
            <div class="price">
               <div class="price-left">
                   <span>联系电话</span>
               </div>
               <div class="price-right">
                   <input type="text" placeholder="请输入手机号码" ></input>
                   <span :style="numberStyle">请符合手机号码格式</span>
               </div>
            </div>
            <div class="caption">
                <div class="caption-left">
                   <span>宿舍号</span>
                   
                </div>
                <div class="caption-right">
                     <input placeholder="请输入宿舍号" ></input>
                     <span :style="addressStyle">不能为空</span>
                </div>
            </div>
            <div class="caption">
               <div class="caption-left">
                   <span>标题</span>
               </div>
               <div class="caption-right">
                   <input type="text" placeholder="帖子标题"  >
                   <span :style="captionStyle">字数在8字以内</span>
               </div>
            </div>
            <div class="price">
               <div class="price-left">
                   <span>价格</span>
               </div>
               <div class="price-right">
                   <input type="text"  />
                   <span >元(<span :style="priceStyle">请输入大于0的数字</span>)</span>
               </div>
            </div>
            <div class="description">
               <div class="description-left">
                   <span>描述(选填)</span>
                   
               </div>
               <div class="description-right">
                   <textarea placeholder="请输入描述内容" ></textarea>
                   <span :style="descriptionStyle">描述字数大于0小于80</span>
               </div>
            </div>
        </div>
        <div class="btn">
            <input type="button" value="提交" class="btn btn-left"></input>
            <input type="button" value="重置" class="btn btn-right"></input>
        </div>
        <div class="tianchong"></div>
    </section>
    
   
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        school:'广州中医药大学',
                    }
                },
                computed: {},
                // mounted() {},
                methods: {},
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
    section{
        margin-top: 40px;
        a{
            text-decoration: none;
        }
        h2{
            font-size: 36px;
            margin-left: 20px;
            margin-bottom: 10px;
            span{
                color:#55bb22;
                font-size: 36px;
            }
            a{
                // display: inline-block;
                // height: 30px;
                // width: 160px;
                // background-color: #55bb22;
                color:red;
                font-size: 24px;
            }
        }
        .holder{
            margin-top: 20px;
        }
        .holder a{
            font-size: 30px;
            margin-left: 20px;
            // margin-top: 10px;
            color: red;
            text-decoration: underline;

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
        // form{
        //     height: 600px;
        //     // background-color: #eee;
        //     input{
        //         background-color: #bbffbb;
        //     }
        // }
        // .goodsinfo{
        //     background-color: #55bb22;
        // }
        .goodsinfo{
            width: 100%;
            height: 730px;
            // border:1px solid #ccc;
            // margin-top: 10px;
        }
        .left{
            width: 20%;
            float: left;

        

        }
        .right{
            width: 79%;
            
            float: left;
            
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
                    width: 50%;
                    height: 50px;
                    line-height: 50px;
                    font-size: 22px;
                    border: 2px solid #55bb22;
                    &:focus{
                        outline: 0px;
                    }
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
                    width: 50%;
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
        .description{
            margin-top: 10px;
            height: 120px;
            line-height: 120px;
            width: 100%;
            .description-left{
                .left;
                height: 119px;
                line-height: 119px;
                text-align: center;
                
                span{
                     font-size: 26px;
                    color: #55bb22;
                }
            }
            .description-right{
                .right;
                height: 120px;
                line-height: 120px;
                textarea{
                    // border:none;
                    width: 50%;
                    height: 80px;
                    line-height: 30px;
                    font-size: 22px;
                    border: 2px solid #55bb22;
                    // border-bottom: 1px solid #999;
                    &:focus{
                        outline: 0px;
                    }
                }
                span{
                    // clear: both;
                    // display: inline-block;
                    // font-size: 22px;
                    // width: 30%;
                    // height: 40px;
                    color: #55bb22;
                    position: absolute;
                }
            }
        }
        .btn{
            width: 100%;
            height: 60px;
            // margin-top: 30px;
            .btn{
                    width: 230px;
                    height: 60px;
                    background-color: #55bb22;
                    font-size: 32px;
                    color: #fff;
                }
                .btn-left{
                    margin-left: 100px;
                }
                .btn-right{
                    float: right;
                    margin-right: 100px;
                }
        }
        .tianchong{
            height: 100px;
        }
    }
</style>

