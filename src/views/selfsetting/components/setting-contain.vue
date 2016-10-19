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

<template lang="html">
   <ul>
       <li><a href="#">我的账号<span>&gt;</span></a></li>
       <li><a href="#">我的积分<span>&gt;</span></a></li>
       <li><a href="#">浏览历史<span>&gt;</span></a></li>
       <li><a href="#">管理帖子<span>&gt;</span></a></li>
       <li><a href="#">收到留言<span>&gt;</span></a></li>
       <li><a href="#">成交单<span>&gt;</span></a></li>
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
