<template lang="html">
   <header class="publish-header">
       <span class="header-left" v-on:click="back()">&lt;</span>
       <span class="header-right">个人设置</span>
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
                        window.history.go(-1);
                    },
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

    }
    .header-right{
        .font;
        display: block;
        width: 300px;
        height: 60px;
        line-height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        margin-top: -30px;
        text-align: center;

        
    }
    // .search-btn{
    //     width: 120px;
    //     height: 60px;
    //     line-height: 60px;
    //     color: #fff;
    //     background-color: #55bb22;
    //     border:2px solid #fff;
    //     border-radius: 5px;
    //     font-size: 30px;
    //     float: right;
    //     margin-right: 30px;
    //     margin-top: 30px;
    
    // }
    // .search-btn:hover{
    //     cursor: pointer;
    // }
    // .search-btn:focus{
    //     outline:2px solid #55bb22;
    // }
    .index{
        float: right;
        margin-right: 50px;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
</style>

