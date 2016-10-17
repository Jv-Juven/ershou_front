<style lang="less" media="screen" scoped>
   .top-p{
        margin-top: 34px;
        text-indent: 30px;
        color:#55bb22;
        font-size: 30px;
        width: 100%;
        border-bottom: 1px solid #999;
   }
   .basic-info{
        p{
            margin-top: 34px;
        text-indent: 26px;
        color:#55bb22;
        font-size: 30px;
        width: 100%;
        border-bottom: 1px solid #999;
        span{
            color:#000;
        }
        }
   }
</style>

<template lang="html">
    <p class="top-p">账号：</p>
    <div class="basic-info">
        <p>手机号&nbsp;<span>18813750848</span></p>
        <p>&nbsp;学&nbsp;&nbsp;号&nbsp;<span>2013081008</span></p>
        <p>一卡通&nbsp;<span>20026648</span></p>
    </div>
    <div class="detail-info">
        <p>用户名：one</p>
        <p>密码：******</p>
        <input type="checkbox" v-on:checked="" >修改密码</input>
    </div>
    <div class="change-password" >
        <label >旧密码：<input type="text" placeholder="请输入旧密码"></label>
        <label >新密码：<input type="text" placeholder="请输入新密码"></label>
        <label >再次输入：<input type="text" placeholder="与上面相同"></label>
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
