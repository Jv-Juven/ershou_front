<template>
    <div class="record">
    	<div class="record-top">
    		<p><b>发帖记录</b><span>(每天最多发布三条，记录保存七天)</span></p>
    		<input type="button" value="发布" class="publish-note"></input>
    	</div>
    	<div class="record-bottom">
    		<span>管理帖子</span>
    		
    		<input type="button" value="全选" class="checkall"></input>
    	</div>
    </div>
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

<style lang="less" media="screen" scoped>
    .record{
        width: 100%;
        height: 200px;
        border:1px solid #999;
        .record-top{
            clear: both;
            
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            color: #55bb22;
            text-indent: 30px;
            p{
                font-size: 30px;
                font-weight: bold;
                float: left;
                span{
                    font-size: 20px;
                    color: #999;
                }

            }

            .publish-note{

                width: 80px;
                height: 40px;
                font-size: 22px;
                text-align: center;
                background-color: #55bb22;
                color:#fff;
                margin-top: 30px;
                float: right;
                margin-right: 30px;

            }
            
        }
        .record-bottom{
            clear: both;
            height: 100px;
            line-height: 100px;
            font-size: 26px;
            color: #55bb22;
            text-indent: 30px;
            .checkall{
                width: 80px;
                height: 40px;
                font-size: 22px;
                text-align: center;
                background-color: #55bb22;
                color:#fff;
                margin-top: 30px;
                float: right;
                margin-right: 30px;
            }
            
        }
    }
</style>

