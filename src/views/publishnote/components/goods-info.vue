<template lang="html">
   <div class="goodsinfo" v-show='checkone'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题" v-model="thisCaption"  v-on:keyup="checkCaption"></textarea>
               <span :style="captionStyle">字数在20字以内</span>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text" v-model="thisPrice" v-on:keyup="checkPrice"></input>
               <span >元(<span :style="priceStyle">请输入大于0的数字</span>)</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入描述内容" v-model="thisDescription" v-on:keyup="checkDescription" ></textarea>
               <span :style="descriptionStyle">描述字数大于0小于80</span>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checktwo'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="希望购买商品的标题" v-model="thisCaption" v-on:keyup="checkCaption"></textarea>
                <span :style="captionStyle">字数在20字以内</span>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="可以接受价格范围" v-model="thisPrice" v-on:keyup="checkPrice"></input>
               <span >元(<span :style="priceStyle">请输入大于0的数字</span>)</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="希望购买商品的描述" v-model="thisDescription" v-on:keyup="checkDescription"></textarea>
               <span :style="descriptionStyle">描述字数大于0小于80</span>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkthree'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
                <textarea placeholder="帖子标题" v-model="thisCaption" v-on:keyup="checkCaption"></textarea>
                <span :style="captionStyle">字数在20字以内</span>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text"  v-model="thisPrice" v-on:keyup="checkPrice"></input>
               <span>分(<span :style="priceStyle">请输入大于0的数字</span>)</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入描述内容" v-model="thisDescription"v-on:keyup="checkDescription" v-on:keyup="checkDescription"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkfour'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
                <textarea placeholder="帖子标题" v-model="thisCaption" v-on:keyup="checkCaption"></textarea>
                <span :style="captionStyle">字数在20字以内</span>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入能接受花费积分数量" v-model="thisPrice" v-on:keyup="checkPrice"></input>
               <span>分(<span :style="priceStyle">请输入大于0的数字</span>)</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入希望购买商品描述" v-model="thisDescription" v-on:keyup="checkDescription"></textarea>
               <span :style="descriptionStyle">描述字数大于0小于80</span>
           </div>
       </div>
   </div>
</template>

<script type="text/javascript">

        export default {
            data() {
                    return {
                        //caption,price,description信息填写错误，动态改变提示文字的颜色
                      captionStyle:{
                        color:'#55bb22',
                      },
                      priceStyle:{
                        color:'#55bb22'
                      },
                      descriptionStyle:{
                        color:'#55bb22'
                      },
                     
                    }
                },
                vuex:{
                    getters:{
                        //返回v-show的值以及各状态值
                    checkone:function(state){
                        return state.publish.checkone
                    },
                    checktwo:function(state){
                        return state.publish.checktwo
                    },
                    checkthree:function(state){
                        return state.publish.checkthree
                    },
                    checkfour:function(state){
                        return state.publish.checkfour
                    },
                    caption:function(state){
                      return state.publish.caption
                    },
                    price:function(state){
                      return state.publish.price
                    },
                    description:function(state){
                      return state.publish.description
                    },
                    // sellerState:function(state){
                    //     return state.publish.sellerState;
                    // }
                    stateOne:function(state){
                        return state.publish.goodsStateOne
                    },
                    stateTwo:function(state){
                        return state.publish.goodsStateTwo
                    },
                    stateThree:function(state){
                        return state.publish.goodsStateThree
                    },

                },
                actions:{
                    //因为vuex不能直接使用v-model，所以把input的输入绑定到computed的set()，然后调用actions
                  setCaption:function({dispatch},value){
                    dispatch('SETCAPTION',value)
                  },
                  setPrice:function({dispatch},value){
                    dispatch('SETPRICE',value)
                  },
                  setDescription:function({dispatch},value){
                    dispatch('SETDESCRIPTION',value)
                  },
                  setGoodsStateTrue:function({dispatch}){
                    dispatch('SETGOODSSTATETRUE')
                  },
                  setGoodsStateFalse:function({dispatch}){
                    dispatch('SETGOODSSTATEFALSE')
                  },
                  setStateOneTrue:function({dispatch}){
                    dispatch('SETSTATEONETRUE')
                  },
                  setStateOneFalse:function({dispatch}){
                    dispatch('SETSTATEONEFALSE')
                  },
                  setStateTwoTrue:function({dispatch}){
                    dispatch('SETSTATETWOTRUE')
                  },
                  setStateTwoFalse:function({dispatch}){
                    dispatch('SETSTATETWOFALSE')
                  },
                  setStateThreeTrue:function({dispatch}){
                    dispatch('SETSTATETHREETRUE')
                  },
                  setStateThreeFalse:function({dispatch}){
                    dispatch('SETSTATETHREEFALSE')
                  },
                },
                },
                computed: {
                    //因为vuex不能直接使用v-model，所以把input的输入绑定到computed的set()，然后调用actions
                  thisCaption:{
                    get(){
                      return this.caption;
                    },
                    set(val){
                      this.setCaption(val);
                    },
                  },
                  thisPrice:{
                    get(){
                      return this.price;
                    },
                    set(val){
                      this.setPrice(val);
                    },
                  },
                  thisDescription:{
                    get(){
                      return this.description;
                    },
                    set(val){
                      this.setDescription(val);
                    },
                  },
                },
                // mounted() {},
                methods: {
                  checkCaption:function(){
                    if (this.thisCaption.length>=20 || this.thisCaption.length<=0) {
                        //caption信息填写错误，此状态为false，并且设置goosstate为false
                        this.captionStyle.color='red';
                        this.setStateOneFalse();
                        this.setGoodsStateFalse();
                        
                    }else{
                        //caption信息填写正确，此状态为true，并且设置goosstate为true
                        this.captionStyle.color='#55bb22';
                        this.setStateOneTrue();
                        if (this.stateTwo==true && this.stateThree ==true ) {
                            this.setGoodsStateTrue();
                        }
                    }
                  },
                  checkPrice:function(){
                    var reg=/^\d{1,10}$/;
                    if (!reg.test(this.thisPrice) || this.thisPrice==0) {
                      this.priceStyle.color='red';
                      this.setStateTwoFalse();
                      this.setGoodsStateFalse();
                    }else{
                        this.priceStyle.color='#55bb22';
                       this.setStateTwoTrue();
                       if (this.stateOne==true && this.stateThree ==true ) {
                            this.setGoodsStateTrue();
                        }
                    }
                  },
                  checkDescription:function(){
                    if (this.thisDescription.length>=80 || this.thisDescription.length<1) {
                      this.descriptionStyle.color='red';
                      this.setStateThreeFalse();
                      this.setGoodsStateFalse();
                    }else{
                      this.descriptionStyle.color='#55bb22';
                      this.setStateThreeTrue();
                      if (this.stateTwo==true && this.stateOne ==true ) {
                            this.setGoodsStateTrue();
                        }
                    }
                  }
                },
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



</style>

