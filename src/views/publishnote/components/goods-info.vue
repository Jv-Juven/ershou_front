<template lang="html">
   <div class="goodsinfo" v-show='checkone'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入大于0的数字"></input>
               <span>元</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入描述内容"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checktwo'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="希望购买商品的标题"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="可以接受价格范围"></input>
               <span>元</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="希望购买商品的描述"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkthree'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入大于0的数字"></input>
               <span>分</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入描述内容"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkfour'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入能接受花费积分数量"></input>
               <span>分</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入希望购买商品描述"></textarea>
           </div>
       </div>
   </div>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {}
                },
                vuex:{
                    getters:{
                    checkone:function(state){
                        return state.checkone
                    },
                    checktwo:function(state){
                        return state.checktwo
                    },
                    checkthree:function(state){
                        return state.checkthree
                    },
                    checkfour:function(state){
                        return state.checkfour
                    },
                },
                },
                computed: {},
                // mounted() {},
                methods: {},
                components: {}
        }

</script>

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
                width: 90%;
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

