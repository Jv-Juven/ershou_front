<template>
    <div class="seller-info">
        <p>联系人：<span>黄某某</span></p>
        <p>电话：<span>18888888888</span></p>
        <p>交易地址：<span>广中医</span></p>
    </div>
</template>

<script type="text/javascript">
    
        export default {
            data() {
                return {}
            },
            components: {

                
            },
            route: {
                data() {
                   console.log("router--->data");
                }
            },
            ready() {
               
            }
        }

</script>

<style lang="less" media="screen">
    .seller-info{
        height: 300px;
        border:1px solid #999;
        margin-top: 80px;
        p{
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            
            margin-left: 20px;
            span{
                font-weight: bold;
                margin-left: 30px;
            }
        }
    }
</style>
