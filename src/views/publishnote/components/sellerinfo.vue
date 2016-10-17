<style lang="less" media="screen" scoped>
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
            textarea{
                border:none;
                width: 100%;
                height: 113px;
                font-size: 22px;
                // border-bottom: 1px solid #999;
                &:focus{
                    outline: 0px;
                }
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
                width: 100%;
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
            textarea{
                border:none;
                width: 100%;
                height: 110px;
                font-size: 22px;
                // border-bottom: 1px solid #999;
                &:focus{
                    outline: 0px;
                }
            }
        }
    }



</style>

<template lang="html">
   <div class="goodsinfo">
       <div class="caption">
           <div class="caption-left">
               <span>联系人</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="姓名"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>联系电话</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入手机号码"></input>
              
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>学校</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入所在学校"></textarea>
           </div>
       </div>
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
