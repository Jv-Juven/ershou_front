<template lang="html">
    
    <div class="contain">
        <input type="button" value="活动介绍" class="introduce"></input>
        <div>
            <p>1、义卖活动入口提供给有意举办义卖活动的组织或者有意参与义卖活动的学生
            <p>2、义捐活动入口提供给有意回收物品组织或者有意捐赠物品的学生</p>
            <p>3、请根据自身需求进入<span>不同入口，查看不同活动介绍</span></p>
        </div>
        
        <div class="entrybox">
            <input type="button" value="义卖活动" class="entry left" v-link="{path:'activity'}"></input>
            <input type="button" value="义捐活动" class="entry" v-link="{path:'donation'}"></input>
        </div>
   </div>
   
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        message:'',
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                    // abc:function () {
                    //     // body... 
                    //     this.message=$('.abc').html()
                    // }
                },
                components: {},
                // created: function(){
                //     alert('dddss')
                // },
                // ready:function(){
                //     alert('ddd')
                // }
        }
</script>

<style lang="less" media="screen" scoped>
    .contain{
        margin:220px auto;
        word-break:break-all;
        word-wrap:break-word;
        p{
            margin-left: 30px;
            line-height: 60px;
            font-size: 24px;
            margin-right: 30px;
            span{
                color:red;
            }

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

