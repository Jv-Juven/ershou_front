<template lang="html">
    <div class="servers">
        <span>广中医客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>广外客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>广药客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>华工客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>中大客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>华师客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>星海客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>广美客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>广大客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
    </div>
    <div class="servers">
        <span>广工客服</span>
        <input type="button" value="留言" v-link="{path:'chatserver'}"></input>
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
        height: 80px;
        line-height: 80px;
        span{
            color:#55bb22;
            font-size: 26px;
            margin-left: 30px;
        }
        input{
            float: right;
            width: 80px;
            height: 40px;
            margin-right: 30px;
            font-size: 26px;
            background: #55bb22;
            color:#fff;
            margin-top: 20px;
        }
    }
</style>

