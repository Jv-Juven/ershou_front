<style lang="less" media="screen" scoped>
    .footer-btn{
        width: 100%;
        height: 60px;
        margin-top: 30px;
    }
    .btn{
        width: 130px;
        height: 40px;
        background-color: #55bb22;
        font-size: 22px;
        color: #fff;
    }
    .btn-left{
        margin-left: 200px;
    }
    .btn-right{
        float: right;
        margin-right: 200px;
    }
</style>

<template lang="html">
   <footer class="footer-btn">
       <input type="button" value="发布" class="btn btn-left"></input>
       <input type="button" value="重置" class="btn btn-right"></input>
   </footer>
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
