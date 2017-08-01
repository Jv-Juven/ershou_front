<template lang="html">
    
    <div class="contain">
        <input type="button" value="活动介绍" class="introduce"></input>
        <div>
            <p>1、义捐活动全时段开放。
            <p>2、收集方可以点击收集方入口,进行资料认证,待认证成功后,该平台将为收集方提供捐赠方的信息。</p>
            <p>3、捐赠方点击参与方入口,进行资料填写,比如捐赠物品信息填写，以及学校宿舍号填写。</p>
            <p>4、收集方过多时，以顺序方式，以所需物品类型，获得不同捐赠方的信息。</p>
        </div>
        
        <div class="entrybox">
            <input type="button" value="收集方入口" class="entry left" v-link="{path:'schooldonation'}"></input>
            <input type="button" value="捐赠方入口" class="entry" v-link="{path:'schooldonator'}"></input>
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
        margin:80px auto;
        word-break:break-all;
        word-wrap:break-word;
        p{
            margin-left: 30px;
            margin-right: 30px;
            line-height: 60px;
            font-size: 24px;

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
            width: 620px;
            margin: 20px auto;
            font-size: 0px;
        }
        .entry{
            width: 200px;
            height: 80px;
            font-size: 30px;
            color:#fff;
            background: orange;
            border-radius: 20px;
            margin-top: 20px;
            box-shadow: 1px 1px 1px #ccc;
        }
        .left{
            margin-left: 60px;
            margin-right: 100px;
        }
    }
</style>

