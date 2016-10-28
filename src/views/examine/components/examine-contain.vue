<template lang="html">
    <section>
        <p>您的消息已提交，我们的工作人员会尽快联系您，请耐心等候!如有疑问，可联系<a v-link="{path:'server'}">客服</a></p>
        <div class="btn">
            <input type="button" class="btn btn-left" value="去逛逛" v-link="{path:'market'}"></input>
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

