<template lang="html">
   <div class="goodsinfo">
       <div class="caption">
           <div class="caption-left">
               <span>联系人</span>
           </div>
           <div class="caption-right">
               <textarea placeholder="姓名" v-model="thisSellerName" v-on:keyup="checkName"></textarea>
               <span :style="nameStyle">不能为空，最多10字</span>
           </div>
       </div>
       <div class="price">
           <div class="price-left">
               <span>联系电话</span>
           </div>
           <div class="price-right">
               <input type="text" placeholder="请输入手机号码" v-model="thisSellerNumber" v-on:keyup="checkNumber"></input>
               <span :style="numberStyle">号码长度为11</span>
           </div>
       </div>
       <div class="description">
           <div class="description-left">
               <span>交易地点</span>
               
           </div>
           <div class="description-right">
                 <textarea placeholder="请输入交易地点" v-model="thisSellerSchool" v-on:keyup="checkAddress"></textarea>
                 <span :style="addressStyle">不能为空，最多20字</span>
                <!-- <select class="school">
                    <option>广中医</option>
                    <option>广药</option>
                    <option>华工</option>
                    <option>中大</option>
                    <option>广外</option>
                    <option>广工</option>
                    <option>星海</option>
                    <option>华师</option>
                    <option>广大</option>
                    <option>广美</option>
                </select> -->
           </div>
       </div>
   </div>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        nameStyle:{
                            color:'#55bb22',
                        },
                        numberStyle:{
                            color:'#55bb22',
                        },
                        addressStyle:{
                            color:'#55bb22'
                        },
                        stateOne:false,
                        stateTwo:false,
                        stateThree:false,
                    }
                },
                vuex:{
                    getters:{
                        sellerName:function(state){
                            return state.publish.sellerName;
                        },//该界面联系人的input框，下面类似
                        sellerNumber:function(state){
                            return state.publish.sellerNumber
                        },
                        sellerSchool:function(state){
                            return state.publish.sellerSchool
                        },
                    },
                    actions:{
                        setSellerName:function({dispatch},value){
                            dispatch('SETSELLERNAME',value)
                        },
                        setSellerNumber:function({dispatch},value){
                            dispatch('SETSELLERNUMBER',value)
                        },
                        setSellerSchool:function({dispatch},value){
                            dispatch('SETSELLERSCHOOL',value)
                        },
                        setSellerStateTrue:function({dispatch}){
                            dispatch('SETSELLERSTATETRUE')
                        },
                        setSellerStateFalse:function({dispatch}){
                            dispatch('SETSELLERSTATEFALSE')
                        },
                    },
                },
                computed: {
                    thisSellerName:{
                        get(){
                            return this.sellerName
                        },
                        set(val){
                            this.setSellerName(val)
                        }
                    },
                    thisSellerNumber:{
                        get(){
                            return this.sellerNumber
                        },
                        set(val){
                            this.setSellerNumber(val)
                        }
                    },
                    thisSellerSchool:{
                        get(){
                            return this.sellerSchool
                        },
                        set(val){
                            this.setSellerSchool(val)
                        }
                    }
                },
                // mounted() {},
                methods: {
                    checkName:function(){
                        var reg=/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
                        if (!reg.test(this.sellerName)) {
                            this.nameStyle.color='red';
                            this.statuOne=false;
                            this.setSellerStateFalse();
                        }else{
                            this.nameStyle.color='#55bb22';
                            this.stateOne=true;
                            if (this.stateTwo==true && this.stateThree ==true) {
                                
                                this.setSellerStateTrue();
                            }
                        }
                    },
                    checkNumber:function(){
                        var reg=/^1[3|4|5|8][0-9]\d{8}$/;
                        if (!reg.test(this.sellerNumber)) {
                            this.numberStyle.color='red';
                            this.stateTwo=false;
                            this.setSellerStateFalse();
                        }else{
                            this.numberStyle.color='#55bb22'
                            this.stateTwo=true;
                            if (this.stateOne==true && this.stateThree ==true) {
                                
                                this.setSellerStateTrue();
                            }
                            
                        }
                    },
                    checkAddress:function(){
                        var reg=/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,20})$/;
                        if (!reg.test(this.sellerSchool)) {
                            this.addressStyle.color='red';
                            this.stateThree=false;
                            this.setSellerStateFalse();
                        }else{
                            this.nameStyle.color='#55bb22';

                            this.stateThree=true;
                            if (this.stateTwo==true && this.stateOne ==true) {
                                
                                this.setSellerStateTrue();
                            }
                        }
                    },
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
                font-size: 22px;
                border-right: 1px solid #999;
                &:focus{
                    outline: 0px;
                }
            }
            span{
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
            line-height: 59px;
            input{
                border:none;
                width: 60%;
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
                font-size: 22px;
                border-right: 1px solid #999;
                &:focus{
                    outline: 0px;
                }
            }
            span{
                position: absolute;
            }
        }
    }



</style>

