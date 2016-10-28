<template lang="html">
    <section>
        <p>您的帖子已成功发布<a href="#">点击查看</a></p>
        <div class="btn">
            <input type="button" class="btn btn-left" value="去市场逛逛" v-link="{path:'market'}"></input>
            <input type="button" class="btn btn-right" value="首页" v-link="{path:'index'}"></input>
        </div>
    </section>
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
    section{
        p{
            font-size: 30px;
            line-height: 60px;
            margin:100px;
            a{
                // text-decoration: none;
                color:red;
                font-size: 36px;
                margin-left: 10px;
            }
        }
        .btn{
            width: 100%;
            height: 60px;
            // margin-top: 30px;
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
        }
    }
</style>

