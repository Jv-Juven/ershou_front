<template>
	<div class="container">
		<div class="component clright">
			<img src="../../../../static/image/indexfloat/activity.png"  class="picture" v-link="{path:'chooseactivity'}">
			<span v-link="{path:'chooseactivity'}">活动</span>
		</div>
		<div class="component">
			<img src="../../../../static/image/indexfloat/market.png"  class="picture" v-link="{path:'market'}">
			<span v-link="{path:'market'}">商城</span>
		</div>
		<div class="component">
			<img src="../../../../static/image/indexfloat/publishnote.png"  class="picture" v-link="{path:'publish'}">
			<span v-link="{path:'publish'}">发帖</span>
		</div>
		<!-- <div class="component">
			<img src="../../../../static/image/mynote.gif"  class="picture" v-link="{path:'mynote'}">
			<span v-link="{path:'mynote'}">我的帖子</span>
		</div> -->
		<div class="component clright">
			<img src="../../../../static/image/indexfloat/chat.png"  class="picture" v-link="{path:'server'}">
			<span v-link="{path:'server'}">客服</span>
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

<style lang="less" media="screen" scoped>
	.container{
		width: 100%;
		// height: 500px;
		margin: 60px auto;
		overflow: auto;

	}
	.component{
		width: 25%;
		// height: 250px;
		float: left;	
	}
	.clright{
		margin-right: 0px;
	}
	.picture{
		width: 120px ;
		height: 120px;
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
		font-size: 30px;
		text-align: center;
		margin: 0px auto;
		cursor: pointer;
	}
</style>

