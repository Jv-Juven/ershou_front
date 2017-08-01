<template lang="html">
    <div class="servers">
        <span>广中医客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=1'}"></input>
    </div>
    <div class="servers">
        <span>广药客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=2'}"></input>
    </div>
    <div class="servers">
        <span>华工客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=3'}"></input>
    </div>
    <div class="servers">
        <span>中大客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=4'}"></input>
    </div>
    <div class="servers">
        <span>星海客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=5'}"></input>
    </div>
    <div class="servers">
        <span>广美客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=6'}"></input>
    </div>
    <div class="servers">
        <span>华师客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=7'}"></input>
    </div>
    <div class="servers">
        <span>广大客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=8'}"></input>
    </div>
    <div class="servers">
        <span>广工客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=9'}"></input>
    </div>
    <div class="servers">
        <span>广外客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver?server=10'}"></input>
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
    .servers{
        clear: both;
        height: 80px;
        line-height: 80px;
        span{
            color:#000;
            font-size: 36px;
            margin-left: 50px;
            font-weight: bold;
        }
        input{
            float: right;
            width: 80px;
            height: 40px;
            border-radius: 5px;
            margin-right: 40px;
            font-size: 26px;
            background: #55bb22;
            color:#fff;
            margin-top: 20px;
        }
    }
</style>

