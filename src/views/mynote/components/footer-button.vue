<style lang="less" media="screen" scoped>
	.footer-btn{
		width: 100%;
		height: 100px;
		line-height: 100px;
	}
	.page{
		float: left;
		a{
			text-decoration: none;
			display: inline-block;
			width: 90px;
			height: 40px;
			text-align: center;
			color: #55bb22;
			&:active{
				color:red;
			}
		}
	}
	.button{
		width: 80px;
    			height: 40px;
    			font-size: 22px;
    			text-align: center;
    			background-color: #55bb22;
    			color:#fff;
    			margin-top: 30px;
    			float: right;
    			margin-right: 50px;
	}
</style>

<template>
  <footer class="footer-btn">
    <div class="page">
    	<a href="#">首页</a>
    	<a href="#">上一页</a>
    	<a href="#">下一页</a>
    	<a href="#">尾页</a>
    </div>
  	</input><input type="button" value="删除" class="button"></input><input type="button" value="修改" class="button">
  </footer>
</template>
<script type="text/javascript">
	 import * as actions from 'data/actions'
	export default {
		vuex: {
			actions
		},
		data() {
			return {}
		},
		
	}
</script>
