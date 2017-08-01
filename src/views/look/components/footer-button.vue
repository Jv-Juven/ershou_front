<template lang="html">
    <footer>
        <input type="button" value="留言"></input>
        <input type="button" value="收藏"></input>
        <input type="button" value="举报" v-link="{path:'report'}"></input>
        
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

<style lang="less" media="screen" scoped>
    footer{
        font-size: 0px;
        input{
            width: 130px;
            height: 40px;
            background: #55bb22;
            color:#fff;
            font-size: 26px;
            margin-left: 90px;
            margin-top: 80px;
        }
    }
    
</style>

