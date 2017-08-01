<template>
  <header class="searchtop">
	<div class="left">
	  <span v-on:click="back()">&lt;</span>
	</div>
	<div class="right">
      <input type="text" placeholder="请输入关键字" class="search-box" ></input>
      <img src="../../../../static/image/search.jpg" class="search-jpg" >
      <!-- <input type="button" value="搜索" class="search-btn" ></input> -->
    </div>
    <div  class="index"><img src="../../../../static/image/home.png" class="index-picture" v-link="{path:'index'}"></div>
  </header>
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
    methods:{
      back:function(){
                window.history.go(-1)
            }
    }
		
	}
</script>

<style lang="less" media="screen" scoped>
	.searchtop{
		width: 100%;
		height: 120px;
		background: #55bb22;
		line-height: 120px;

		font-size: 28px;
	}
    .left{
		margin-left: 40px;
		float: left;

  	}
   	span{
		color:#fff;
		font-size: 55px;
   	}
  	.right{
        font-size: 0px;
        float: left;
        margin-left: 5px;
        width: 65%;
    }
    .search-box {
        font-size: 28px;
        width: 100%;
        height: 60px;
        line-height: 80px;
        border:1px solid #fff;
        border-radius: 5px;
        float: left;
        margin-left: 30px;
        padding-left: 30px;
        margin-top: 30px;
    }
    .search-box:focus{
        outline: 0px;
    }
    .search-jpg{
        height: 35px;
        width: 35px;
        margin-left: -55px;
        margin-top: 40px;
    }
    .index{
        float: right;
        margin-right: 30px;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
  //  	.search-btn{
		// width: 120px;
		// height: 60px;
		// line-height: 60px;
		// color: #fff;
		// background-color: #55bb22;
		// border:2px solid #fff;
		// border-radius: 5px;
		// font-size: 30px;
		// float: right;
		// margin-right: 30px;
		// margin-top: 30px;
	
  //  	}
  //  	.search-btn:hover{
  //  		cursor: pointer;
  //  	}
  //  	.search-btn:focus{
		// outline:2px solid #55bb22;
  //  	}
</style>

