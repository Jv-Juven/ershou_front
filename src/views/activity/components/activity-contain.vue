<template lang="html">
    
    <div class="contain">
        <input type="button" value="活动介绍" class="introduce"></input>
        <div>
            <p>1、义卖活动指义卖方举办的义卖活动，在为卖家卖出去商品的同时，收取百分之30的费用，而这费用全额捐给公益基金会。</p>
            <p>2、举办方可以点击举办方入口，进行资料认证，待认证成功后，该平台将为举办方提供参与方的信息。</p>
            <p>3、参与方点击参与方入口，进行资料填写，比如商品信息填写，以及学校宿舍号填写，</p>
            <p>4、没有举办方提供资料认证的情况下，参与方入口关闭</p>
            <p>5、举办方只对本学校学生进行上门登记义卖物品，外校学生可送至指定地点(如无卖出，也将需参与方到指定地点取回)，外校学生可以在义卖开放日过来购买所需物品</p>
        </div>
        
        <div class="entrybox">
            <input type="button" value="举办方入口" class="entry" v-link="{path:'holder'}"></input>
            <input type="button" value="参与方入口" class="entry" v-link="{path:'participator'}"></input>
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

<style lang="less" media="screen" scoped>
    .contain{
        margin:20px auto;
        p{
            text-indent: 30px;
            line-height: 50px;
        }
        .introduce{
            height: 60px;
            width: 300px;
            background: #55bb22;
            display: block;
            color:#fff;
            margin:0px auto;
            font-size: 30px;
            border-radius: 20px;
            margin-bottom: 20px;
        }
        .entrybox{
            // font-size: 0px;
            width: 420px;
            margin: 20px auto;
        }
        .entry{
            width: 200px;
            height: 60px;
            font-size: 26px;
            color:#fff;
            background: orange;
            border-radius: 20px;
            margin-top: 20px;
            box-shadow: 1px 1px 1px #ccc;
        }
    }
</style>

