<template lang="html">
   <div class="goodstype">
       <span class="type-left">TYPE</span>
       <input type="radio"  name="type" id="transfer" class="hidden" checked="checked"></input><label for="transfer" class="choose" @click='choose(1)'>个人转让</label>
       <input type="radio"  name="type" id="selfshop" class="hidden"></input><label for="selfshop" class="choose" @click='choose(2)'>个人求购</label>
       <input type="radio"  name="type" id="publictransfer" class="hidden"></input><label for="publictransfer" class="choose" @click='choose(3)'>公益转让</label>
       <input type="radio"  name="type" id="publicshop" class="hidden"></input><label for="publicshop" class="choose" @click='choose(4)'>公益淘宝</label>
      
   
   </div>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {}
                },
                vuex:{
                    actions:{
                        choose:function({dispatch},amount){
                        dispatch('CHOOSE',amount);
                        //通过选择radio触发不同事件
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
    .goodstype{
        width: 100%;
        height: 40px;
        // border:1px solid red;
        margin-bottom: 20px;
        font-size: 0;
        .type-left{
        display: block;
        float: left;
        width: 13%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #55bb22;
        font-size: 20px;
        border:1px solid #55bb22;
    }
        .hidden{
            position: absolute;
            z-index: -1;
            display: none;
        }
        .choose{
            display: inline-block;
            width: 21%;
            height: 40px;
            border:1px solid #55bb22;
            text-align: center;
            line-height: 40px;
            font-size: 22px;
            color: #55bb22;
            margin: 0px;
        }
        input[type=radio]:checked +label{
            background-color: #55bb22;
            color: #fff;
        }
    }
    


</style>

