<template>
	<header class="publish-header">
        <span class="header-left" v-on:click="back()">&lt;</span>
        <span class="header-right">{{msgone}}</span>
        <div class="index" v-link="{path:'index'}">
			<!-- <img src="" height="60" width="60" class="index-picture" v-link="{path:'index'}"> -->
		</div>
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
	@import "../assets/less/func/index.less";
	@height: 100px;
	@spacing: 30px;
	.publish-header{
        height: @height;
        width: 100%;
        background-color: #55bb22;
        position: relative;
        overflow: hidden;
		.flex-layout();
    }
    .font{
        color: #fff;
        .font-dpr(18px);
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
    	@w: 40px;
        margin-right: @spacing;
		width: @w;
        height: @w;
	    background: url("../../static/image/home.png") no-repeat;
		background-size: 100%;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
</style>
