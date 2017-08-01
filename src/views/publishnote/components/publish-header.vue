<template lang="html">
   <header class="publish-header">
       <span class="header-left" v-on:click="back()">&lt;</span>
       <span class="header-right">发布信息</span>
       <div  class="index"><img src="../../../../static/image/home.png" class="index-picture" v-link="{path:'index'}"></div>
   </header>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {}
                },
                computed: {},
                // mounted() {},
                methods: {
                    back:function(){
                    window.history.go(-1)
                    }
                },
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
    .publish-header{
        height: 120px;
        width: 100%;
        background-color: #55bb22;
        line-height: 120px;
        overflow: hidden;
        position: relative;
    }
    .font{
        color: #fff;
        font-size: 55px;
    }
    .header-left{
        .font;
        margin-left: 40px;
        float: left;
        font-size: 70px;

    }
    .header-right{
        .font;
        display: block;
        width: 300px;
        height: 60px;
       
        position: absolute;
        left: 50%;
        margin-left: -150px;
        
        text-align: center;
        
        
    }
    .index{

        float: right;
        margin-right: 35px;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
</style>

