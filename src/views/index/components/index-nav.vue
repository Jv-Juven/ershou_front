<template lang="html">
	<div class="nav">
        <span class="welcome">欢迎您:</span>
        <span class="username" v-link="{path:'/account'}">{{username}}</span>   
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                username:'357448012@qq.com',
            }
        },
        computed: {},
        mounted() {},
        methods: {},
        components: {}
}

</script>

<style lang="less">
	.nav{
        margin-top: 20px;
        margin-left: 30px;
        .welcome{
            color:#ccc;
            font-size: 26px;
        }
        .username{
            color:#55bb22;
        }
    }
	
</style>

