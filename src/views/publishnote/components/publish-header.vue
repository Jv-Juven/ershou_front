<template lang="html">
   <header class="publish-header">
       <span class="header-left">&lt;</span>
       <span class="header-right">发布信息</span>
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
        margin: 0px auto;
        text-align: center;
        
    }
</style>

