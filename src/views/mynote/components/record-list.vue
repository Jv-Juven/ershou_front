<style lang="less" media="screen" scoped>
    .recordlist{
        width: 100%;
        height: auto;
    }
    .list{
        height: 200px;
        border:1px solid red;
        position: relative;
        // margin-top: -1px;
        .list-left{
            img{
                display: inline-block;
                height: 180px;
                width: 180px;
                position: absolute;
                top: 50%;
                margin-top: -90px;
                z-index:-1;
            }
           
        }
        .list-middle{
            height: 200px;
            width: 60%;
            max-width: 420px;
            
            margin-left: 200px;
            position: relative;
            float: left;
            span{
                font-size: 26px;
                line-height: 65px;
            }
            .date{
                position: absolute;
                bottom:20px;
                right: 20px;
                color:red;
            }
        }
        .list-right{
            float: left;
            width: 14%;
            height: 200px;
           
            position:relative;
            input{
                width: 40px;
                height: 40px;
                position: absolute;
                top: 50%;
                margin-top: -20px;
                margin-left: 40px;
            }
            

        }
    }
</style>

<template>
    <div class="recordlist">
    	<div class="list">
            <div class="list-left">
                <img src="../../../../static/image/phone/iphone6s.png">
            </div>   
            <div class="list-middle">
                <span>iphone6s转让<br>3000元<br>广中医</span>
                <div class="date">2016-10-16</div>
            </div>
            <div class="list-right">
                <input type="checkbox" ></input>
            </div>
        </div>
        <div class="list" style="border-top:0px">
            <div class="list-left">
                <img src="../../../../static/image/phone/iphone6s.png">
            </div>   
            <div class="list-middle">
                <span>iphone6s转让<br>3000元<br>广中医</span>
                <div class="date">2016-10-16</div>
            </div>
            <div class="list-right">
                <input type="checkbox" ></input>
            </div>
        </div><div class="list" style="border-top:0px">
            <div class="list-left">
                <img src="../../../../static/image/phone/iphone6s.png">
            </div>   
            <div class="list-middle">
                <span>iphone6s转让<br>3000元<br>广中医</span>
                <div class="date">2016-10-16</div>
            </div>
            <div class="list-right">
                <input type="checkbox" ></input>
            </div>
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
