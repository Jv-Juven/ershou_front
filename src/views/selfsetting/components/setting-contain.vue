<template lang="html">
    <ul>
       <li><a v-link="{path:'account'}">我的账号<span>&gt;</span></a></li>
       <!-- <li><a v-link="{path:'integration'}">我的积分<span>&gt;</span></a></li> -->
       <!-- <li><a v-link="{path:'history'}">浏览历史<span>&gt;</span></a></li> -->
       <!-- <li><a v-link="{path:'collector'}">我的收藏<span>&gt;</span></a></li> -->
       <li><a v-link="{path:'mynote'}">我的帖子<span>&gt;</span></a></li>
       <!-- 包括义卖活动跟义捐活动的帖子 -->
       <li><a v-link="{path:'mymessage'}">我的建议<span>&gt;</span></a></li>
       <!-- <li><a >我的活动<span>&gt;</span></a></li> -->
       <!-- <li><a v-link="{path:'index'}">成交单<span>&gt;</span></a></li> -->
    </ul>
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
    ul{
        width: 100%;
        li{
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #999;
            list-style: none;
            a{
                display: block;
                width: 100%;
                height: 80px;
                font-size: 28px;
                text-indent: 30px;
                color: #55bb22;
                text-decoration: none;
                span{
                float: right;
                font-size: 28px;
                margin-right: 30px;
            }
            }

        }
    }
</style>

