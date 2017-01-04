<template lang="html">
    <h2>欢迎进入捐赠参与专场，请选择对应学校</h2>
    <p class="holder"><a v-link="{path:'schooldonation'}">举办方入口</a></p>
   <ul>
        <li><a v-link="{path:'donationparticipator?school=1'}">广州中医药大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=2'}">广东药科大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=3'}">华南理工大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=4'}">中山大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=5'}">星海音乐大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=6'}">广州美术大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=7'}">华南师范大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=8'}">广东工业大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=9'}">广州大学<span>&gt;</span></a></li>
        <li><a v-link="{path:'donationparticipator?school=10'}">广东外语外贸大学<span>&gt;</span></a></li>
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
        h2{
            margin-top: 40px;
            font-size: 36px;
            margin-left: 20px;
            margin-bottom: 10px;
        }
    .holder{
            margin-top: 20px;
        }
        .holder a{
            font-size: 30px;
            margin-left: 20px;
            // margin-top: 10px;
            color: red;
            text-decoration: underline;

        }
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

