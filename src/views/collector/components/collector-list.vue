<template>
    <div class="record">
        <div class="record-top">
            <p><b>收藏记录</b><span>(收藏记录保存七天)</span></p>
            <input type="button" value="发布" class="publish-note" v-link="{path:'publish'}"></input>
        </div>
        <div class="record-bottom">
            <span>管理收藏</span>
            
            <input type="button" value="全选" class="checkall"></input>
        </div>
    </div>
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
    <footer class="footer-btn">
    <div class="page">
        <a href="#">首页</a>
        <a href="#">上一页</a>
        <a href="#">下一页</a>
        <a href="#">尾页</a>
    </div>
        </input><input type="button" value="删除" class="button"></input>
    </footer>
</template>
<script type="text/javascript">
	 
	export default {
		vuex: {
			
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

