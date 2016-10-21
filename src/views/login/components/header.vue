<template lang="html">
   <header class="publish-header">
       <span class="header-left">&lt;</span>
       <span class="header-right">登录</span>
       <input type="button" value="注册" class="register-btn"></input>
   </header>
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
    .register-btn{
        width: 120px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        background-color: #55bb22;
        border:2px solid #fff;
        border-radius: 5px;
        font-size: 30px;
        float: right;
        margin-right: 30px;
        margin-top: 30px;
    
    }
    .register-btn:hover{
        cursor: pointer;
    }
    .register-btn:focus{
        outline:2px solid #55bb22;
    }
</style>

