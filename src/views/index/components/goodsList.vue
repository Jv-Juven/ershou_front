<template>
	<div class="new">
		<span>最新活动</span>
	</div>
	<a v-link="{path:'participator?school=1'}">
		<div class="activity-list">
			<img src="../../../../static/image/indexfloat/newershou.png" >
			<div></div>
			<span class="school">广中医</span>
			<span class="word">义卖</span>
		</div>
	</a>
	<a v-link="{path:'donationparticipator?school=1'}">
		<div class="activity-list">
			<img src="../../../../static/image/indexfloat/newyijuan.png" >
			<div></div>
			<span class="school">广中医</span>
			<span class="word">义捐</span>
		</div>
	</a>
	<div style="clear:both;"></div>
	<div class="new">
		<span>最新上架</span>
	</div>
	<a v-for="goods in goodslist" goodsid="{{goods.goodsId}}" @click="skip">
		<div class="goods-list">
			<img :src="goods.src"  >
			<span class="title">{{goods.title}}</span>
			<div></div>
			<span class="price">{{goods.price}}</span>
		</div>
	</a>
	<!-- <a href="">
		<div class="goods-list">
			<img src="../../../../static/image/phone/iphone6s.png"  >
			<span class="title">iphone 6s</span>
			<div></div>
			<span class="price">￥2000</span>
		</div>
	</a>
	<a href="">
		<div class="goods-list">
			<img src="../../../../static/image/phone/iphone6s.png"  >
			<span class="title">iphone 6s</span>
			<div></div>
			<span class="price">￥2000</span>
		</div>
	</a> -->
	<div style="clear:both;"></div>
	<div class="footer"></div>
</template>

<script type="text/javascript"> 
    export default {
        data() {
            return {
            	goodslist:[
            	{title:'iphpne',src:'./static/image/phone/iphone6s.png',price:'￥2000',goodsId:'201308'},
            	{title:'iphpne',src:'./static/image/phone/iphone6s.png',price:'￥2000',goodsId:'201309'},
            	{title:'iphpne',src:'./static/image/phone/iphone6s.png',price:'￥2000',goodsId:'201310'}
            	],
            }
        },
        methods:{
        	skip:function () {
        		
        		var goodsId=event.currentTarget.getAttribute('goodsid')
        		
        		var url='/look?goodsId='+goodsId;
        		this.$router.go(url)
        	}
        },
        
    }
</script>

<style lang="less" media="screen" scoped>
	.new{
		height: 70px;
		background-color: #eee;
		line-height: 70px;
		span{
			font-size: 30px;
			margin-left: 20px;
		}
	}
	.activity-list{
			width: 50%;
			float: left;
			height: 300px;
			overflow: auto;
			text-align: center;
			margin-bottom: 20px;
			img{
				margin-top: 10px;
				// margin-bottom: 20px;
				height: 250px;
				width: 250px;
			}
			.school{
				font-size: 36px;
				color: red;
			}
			.word{
				font-size: 36px;
				color: #000;
			}
		}
	.goods-list{
		margin-top: 10px;
		height: 300px;
		width: 33.3%;
		float: left;
		text-align: center;
		// border:1px solid #ccc;
		// margin-top: 20px;
		overflow: hidden;
		margin-bottom: 20px;
		// position: relative;
		img{
			height: 200px;
			width: 200px;
			// float: left;
			// position: absolute;
			// top: 50%;
			// margin-top: -60px;
			// margin-left: 20px;
		}
		.title{
			font-size: 30px;
			color:#000;
			line-height: 40px;
		}
		.price{
			line-height: 40px;
			font-size: 30px;
			color:red;
		}
	}
	.footer{
		height: 100px
	}
</style>

