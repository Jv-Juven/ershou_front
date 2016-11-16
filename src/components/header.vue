<template>
	<header class="publish-header">
        <span class="header-left" v-on:click="back()">&lt;</span>
        <span class="header-right">{{msgone}}</span>
        <div  class="index"><img src="../../static/image/home.png" height="60" width="60" class="index-picture" v-link="{path:'index'}"></div>
    </header>
</template>

<script>
	export default {
		props:['msgone'],
		data () {
			return {
				// note: changing this line won't causes changes
				// with hot-reload because the reloaded component
				// preserves its current state and we are modifying
				// its initial state.
				
			}
		},
		methods:{
			back:function(){
				window.history.go(-1)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" media="screen" scoped>
	.publish-header{
        height: 120px;
        width: 100%;
        background-color: #55bb22;
        line-height: 120px;
        position: relative;
        overflow: hidden;

    }
    .font{
        color: #fff;
        font-size: 55px;
        font-weight: bold;
    }
    .header-left{
        .font;
        margin-left: 40px;
        float: left;

    }
    .header-right{
        .font;
        display: block;
        width: 300px;
        height: 60px;
        line-height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        margin-top: -30px;
        text-align: center; 

    }
    .index{
        float: right;
        margin-right: 50px;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
</style>
