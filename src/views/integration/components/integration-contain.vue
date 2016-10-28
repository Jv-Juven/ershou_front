<template lang="html">
    <section class="container">
        <div class="remain">剩余积分<span>{{remaining}}</span></div>
        <div @click='change'>
            <input type="checkbox" id="recharge" class="recharge"></input>
            <label for="recharge" class="rechargeword" @click='change'>充值<span>(比例：100积分10元)</span>
            </label>
        </div>
        <div class="hiddendiv" v-show='hidden'>
            <input type="radio" name="number" class="hidden" id="fifty" checked="checked"></input>
            <label for="fifty">50分</label>
            <input type="radio" name="number" class="hidden" id="hundred"></input>
            <label for="hundred">100分</label><input type="radio" name="number" class="hidden" id="twohundred"></input>
            <label for="twohundred">200分</label>
            <input type="radio" name="number" class="hidden" id="fivehundred"></input>
            <label for="fivehundred">500分</label>
            <div class="random">
                <input type="text" ></input><span>(请输入0-1000的整数)</span>
            </div>
        <div>
            <input type="button" class="recharge-btn" value="充值" :disabled="able" :style='style' ></input>
        </div>
        </div>
        
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        remaining:300,
                        hidden:false,
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                    change:function(){
                        
                        this.hidden=!this.hidden;
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
    .remain{
        font-size: 30px;
        span{
            margin-left: 20px;
            display: inline-block;
            color: red;
            width: 180px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border:1px solid #999;

        }
        margin-bottom: 30px;
    }
    .recharge{
        width: 30px;
        height: 30px;

    }
    .rechargeword{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        margin-bottom: -100px;
        font-size: 30px;
       span{
            color:red;
            font-size: 20px;
       }
    }
    .hiddendiv{
        margin-top: 50px;
        .hidden{
             position: absolute;
            z-index: -1;
            display: none;
        }
        label{
            display: inline-block;
            width: 21%;
            height: 40px;
            border:1px solid #55bb22;
            text-align: center;
            line-height: 40px;
            color: #55bb22;
            margin: 0px;
        }
        input[type=radio]:checked +label{
        background-color: #55bb22;
        color: #fff;
    }
    }
    .random{
        margin-top: 50px;
        input{
            width: 20%;
            height: 40px;
            font-size: 20px;
            border:2px solid #999;
        }
        span{
            margin-left: 10px;
            color: red;
            font-size: 20px;
        }
    }
    .recharge-btn{
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

</style>

