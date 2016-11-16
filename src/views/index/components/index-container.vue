<template>
	<div class="container">
		<div class="component">
			<img src="../../../../static/image/publishnote.gif"  class="picture" v-link="{path:'publish'}">
			<span v-link="{path:'publish'}">发布帖子</span>
		</div>
		<div class="component">
			<img src="../../../../static/image/mynote.gif"  class="picture" v-link="{path:'mynote'}">
			<span v-link="{path:'mynote'}">我的帖子</span>
		</div>
		<div class="component clright">
			<img src="../../../../static/image/chat.gif"  class="picture" v-link="{path:'server'}">
			<span v-link="{path:'server'}">联系客服</span>
		</div>
		<div class="component">
			<img src="../../../../static/image/market.gif"  class="picture" v-link="{path:'market'}">
			<span v-link="{path:'market'}">二手市场</span>
		</div>
		<div class="component">
			<img src="../../../../static/image/setting.gif"  class="picture" v-link="{path:'setting'}">
			<span v-link="{path:'setting'}">个人设置</span>
		</div>
		<div class="component clright">
			<img src="../../../../static/image/report.gif"  class="picture" v-link="{path:'activity'}">
			<span v-link="{path:'activity'}">义卖活动</span>
		</div>
	</div>
</template>

<script type="text/javascript"> 
    export default {
        data() {
            return {}
        },
        
    }
</script>

<style lang="less" media="screen">
	.container{
		width: 600px;
		height: 500px;
		margin: 60px auto;

	}
	.component{
		width: 200px;
		height: 250px;
		float: left;	
	}
	.clright{
		margin-right: 0px;
	}
	.picture{
		height: 180px ;
		height: 180px;
		display: block;
		margin: 20px auto;
		cursor: pointer;
	}
	.component span{
		width: 150px;
		height: 30px;
		line-height: 30px;
		display: block;
		color:#55bb22;
		text-align: center;
		margin: -40px auto;
		cursor: pointer;
	}
</style>

