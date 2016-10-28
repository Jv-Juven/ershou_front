<template lang="html">
    <section>
        <p>请填写以下信息，方便举办方联系您</p>
        <div class="goodsinfo" >
        <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题"  ></textarea>
               <span :style="captionStyle">字数在20字以内</span>
           </div>
        </div>
        <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text"  ></input>
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
        <div class="goodsinfo">
        <div class="caption">
            <div class="caption-left">
                <span>联系人</span>
            </div>
            <div class="caption-right">
               <textarea placeholder="姓名" ></textarea>
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
        <div class="description">
            <div class="description-left">
               <span>交易地点</span>
               
            </div>
            <div class="description-right">
                 <textarea placeholder="请输入交易地点" ></textarea>
                 <span :style="addressStyle">不能为空，最多20字</span>
            </div>
        </div>
    </div>
        <div class="btn">
            <input type="button" value="提交" class="btn btn-left"></input>
            <input type="button" value="重置" class="btn btn-right"></input>
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

<style lang="less" media="screen" scoped>
    section{
        .goodsinfo{
            width: 100%;
            height: 302px;
            border:1px solid #ccc;
            margin-top: 10px;
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
            border-bottom: 1px solid #999;
            .caption-left{
                .left;
                height: 119px;
                border-right: 1px solid #999;
                line-height: 119px;
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
                
                textarea{
                    border:none;
                    width: 50%;
                    height: 113px;
                    line-height: 113px;
                    font-size: 22px;
                    // border-bottom: 1px solid #999;
                    &:focus{
                        outline: 0px;
                    }
                }
                span{
                    clear: both;
                    display: inline-block;
                    font-size: 22px;
                    width: 40%;
                    height: 40px;
                    position: absolute;
                }
            }
        }
        .price{
            width: 100%;
            height: 20%;
            border-bottom: 1px solid #999;
            .price-left{
                .left;
                height: 59px;
                border-right: 1px solid #999;
                line-height: 59px;
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
                    border:none;
                    width: 50%;
                    height: 55px;
                    border-right: 1px solid #999;
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
            height: 40%;
            width: 100%;
            .description-left{
                .left;
                height: 119px;
                line-height: 119px;
                text-align: center;
                border-right: 1px solid #999;
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
                    border:none;
                    width: 50%;
                    height: 110px;
                    line-height: 30px;
                    font-size: 22px;

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
                    position: absolute;
                }
            }
        }
        .btn{
            width: 100%;
            height: 60px;
            margin-top: 30px;
            .btn{
                    width: 130px;
                    height: 40px;
                    background-color: #55bb22;
                    font-size: 22px;
                    color: #fff;
                }
                .btn-left{
                    margin-left: 200px;
                }
                .btn-right{
                    float: right;
                    margin-right: 200px;
                }
        }
    }
</style>

