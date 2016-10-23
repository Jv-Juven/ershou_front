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
               <textarea placeholder="请输入描述内容" v-model="thisDescription" v-on:keyup="checkDescription" wrap="wrap"></textarea>
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
               <textarea placeholder="希望购买商品的标题" v-model="thisCaption"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>价格</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="可以接受价格范围" v-model="thisPrice"></input>
               <span>元</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="希望购买商品的描述" v-model="thisDescription"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkthree'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题" v-model="thisCaption"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text"  v-model="thisPrice"></input>
               <span>分</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入描述内容" v-model="thisDescription"></textarea>
           </div>
       </div>
   </div>

   <div class="goodsinfo" v-show='checkfour'>
       <div class="caption">
           <div class="caption-left">
               <span>标题</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="帖子标题" v-model="thisCaption"></textarea>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>积分</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入能接受花费积分数量" v-model="thisPrice"></input>
               <span>分</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>描述(选填)</span>
               
           </div>
           <div class="description-right">
               <textarea placeholder="请输入希望购买商品描述" v-model="thisDescription"></textarea>
           </div>
       </div>
   </div>
</template>

<script type="text/javascript">
// import {setCaption} from "../../../vuex/actions"
        export default {
            data() {
                    return {
                      captionStyle:{
                        color:'#55bb22',
                      },
                      priceStyle:{
                        color:'#55bb22'
                      },
                      descriptionStyle:{
                        color:'#55bb22'
                      },
                      stateOne:false,//数据填写正确就为true，三个输入框，三个状态
                      stateTwo:false,
                      stateThree:false,
                    }
                },
                vuex:{
                    getters:{
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
                    sellerState:function(state){
                        return state.publish.sellerState;
                    }
                },
                actions:{
                  setCaption:function({dispatch},value){
                    dispatch('SETCAPTION',value)
                    // ({dispatch},value) =>dispatch('SETCAPTION',value)
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
                },
                },
                computed: {
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
                        this.captionStyle.color='red';
                        this.stateOne=false;
                        
                        this.setGoodsStateFalse();
                        
                    }else{
                        this.captionStyle.color='#55bb22';
                        this.stateOne=true;
                        if (this.stateTwo==true && this.stateThree ==true && this.sellerState==true) {
                            this.setGoodsStateTrue();
                        }
                    }
                  },
                  checkPrice:function(){
                    var reg=/^\d{1,10}$/;
                    if (!reg.test(this.thisPrice)) {
                      this.priceStyle.color='red';
                      this.stateTwo=false;
                      this.setGoodsStateFalse();
                    }else{
                        this.priceStyle.color='#55bb22';
                       this.stateTwo=true;
                       if (this.stateOne==true && this.stateThree ==true) {
                            this.setGoodsStateTrue();
                        }
                    }
                  },
                  checkDescription:function(){
                    if (this.thisDescription.length>=80 || this.thisDescription.length<1) {
                      this.descriptionStyle.color='red';
                      this.stateThree=false;
                      this.setGoodsStateFalse();
                    }else{
                      this.descriptionStyle.color='#55bb22';
                      this.stateThree=true;
                      if (this.stateTwo==true && this.stateOne ==true) {
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
                width: 60%;
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
                width: 30%;
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
                width: 20%;
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
                width: 60%;
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

