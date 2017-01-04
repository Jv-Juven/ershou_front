<template>
	
	<footer id="abcd">
		<a v-link="{path:'index'}" v-if="a">
			<img src="../../static/image/indexfloat/home-default.png">
			<div></div>
			<span>首页</span>
		</a>
		<a v-link="{path:'index'}" v-if="!a">
			<img src="../../static/image/indexfloat/home-active.png">
			<div></div>
			<span style="color:red;">首页</span>
		</a>
		<a v-link="{path:'chooseactivity'}" v-if="b">
			<img src="../../static/image/indexfloat/activity-default.png" >
			<div></div>
			<span>活动</span>
		</a>
		<a v-link="{path:'chooseactivity'}" v-if="!b">
			<img src="../../static/image/indexfloat/activity-active.png" >
			<div></div>
			<span style="color:red;">活动</span>
		</a>
		<a v-link="{path:'market'}" v-if="c">
			<img src="../../static/image/indexfloat/market-small-default.png" class="market">
			<div></div>
			<span>商店</span>
		</a>
		<a v-link="{path:'market'}" v-if="!c">
			<img src="../../static/image/indexfloat/market-small-active.png" class="market">
			<div></div>
			<span style="color:red;">商店</span>
		</a>
		<a v-link="{path:'setting'}" v-if="d">
			<img src="../../static/image/indexfloat/my-default.png" >
			<div></div>
			<span>我的</span>
		</a>
		<a v-link="{path:'setting'}" v-if="!d">
			<img src="../../static/image/indexfloat/my-active.png" >
			<div></div>
			<span style="color:red;">我的</span>
		</a>
	</footer>
</template>

<script type="text/javascript"> 
    export default {
    	props:["a","b","c","d"],
        data() {
            return {


            }
        },
        ready(){
        	// window.onresize=function () {
		    	// body... 
		    	// alert('ddd')
		    	var a=document.getElementById('abcd');
        		// alert(a.style.top)
            	var top1=a.offsetTop;
            	// alert(top1)
            	var current=a.offsetParent;
            	// console.log(current)
            	if(current !=null){
            		top1 +=current.offsetTop;
            		current=current.offsetParent;
            	}
            	a.style.top=top1+'px';
    		// }
        		// var a=document.getElementById('abcd');
        		// // alert(a.style.top)
          //   	var top1=a.offsetTop;
          //   	// alert(top1)
          //   	var current=a.offsetParent;
          //   	// console.log(current)
          //   	if(current !=null){
          //   		top1 +=current.offsetTop;
          //   		current=current.offsetParent;
          //   	}
          //   	a.style.top=top1+'px';
          //   	// alert(top1)
          //   	// alert(a.style.top)
        }
        
    }
    
</script>

<style lang="less" media="screen" scoped>
	footer{
		height: 100px;
		width: 100%;
		border-top: 1px solid #ccc;
		position: fixed;
		left: 0px;
		// top:1225px;
		// top:2038px;
		bottom: 0px;
		z-index: 1000;
		background: #fff;
		padding-bottom: 2px;
		// background:red;
		a{
			display: inline-block;
			width: 25%;
			height: 100%;
			text-align: center;
			float: left;
			text-decoration: none;
			color:#000;
			img{
				margin-top: 3px;
				width: 60px;
				height: 60px;
			}
			.market{
				width: 50px;
				height: 50px;
				padding: 5px;
			}


		}
	}
</style>

