<template lang="html">
    <section>
        <p class="tips">
            请填写以下信息，方便我们及时为您提供服务
        </p>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">活动主题</span>
                <textarea placeholder="请输入活动主题"></textarea>
                <span class="err">字数大于0小于60</span>
            </div>
        </div>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">活动介绍</span>
                <textarea placeholder="请输入活动介绍"></textarea>
                <span class="err">字数大于0小于60</span>
            </div>
        </div>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">活动时间</span>
                <input type="text" placeholder="请输入活动时间"></input>
                <span class="err">注意格式</span>
            </div>
        </div>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">主办方</span>
                <input type="text" placeholder="请输入主办方"></input>
                <span class="err">必填</span>
            </div>
        </div>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">负责人</span>
                <input type="text" placeholder="请输入负责人"></input>
                <span class="err">必填</span>
            </div>
        </div>
        <div class="activity-info">
            <div class="theme">
                <span class="theme-left">联系电话</span>
                <input type="text" placeholder="请输入联系电话"></input>
                <span class="err">注意格式11位数</span>
            </div>
        </div>
        <p class="check">验证资料，请拍照上传</p>
        <div class="goods-picture">
            <img src="../../../../static/image/photo.png" class="photo">
            <div class="other-picture"></div>
            <div class="other-picture"></div>
            <div class="other-picture"></div>
        </div>
        <div class="btn">
            <input type="button" value="提交" class="btn btn-left" v-link="{ path:'/examine'}"></input>
            <input type="button" value="重置" class="btn btn-right"></input>
        </div>
    </section>
    
   
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {}
                },
                computed: {},
                // mounted() {},
                methods: {},
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
    section{
        .tips{
            text-indent: 30px;
            color:red;
            font-size: 30px;
            margin-top: 20px;
            margin-bottom: 40px;
        }
        .theme{
            
            height: 100px;
            border: 1px solid #999;
            line-height: 100px;
            position: relative;
            font-size: 0px;
            .theme-left{
                color:#55bb22;
                display: inline-block;
                width: 20%;
                height: 100px;
                font-size: 26px;
                text-align: center;
                border-right: 1px solid #999;
            }
            textarea{
                position: absolute;
                // border:none;
                font-size: 26px;
                height: 98px;
                width: 40%;
                &:focus{
                    outline: 0px;
                }
            }
            input{
                height: 96px;
                width: 40%;
                font-size: 26px;
                &:focus{
                    outline: 0px;
                }
            }
            .err{
                clear: both;
                display: inline-block;
                height: 98px;
                line-height: 98px;
                width: 40%;
                text-align: center;
                position: absolute;
                font-size: 26px;
                color:#55bb22;
                right: 0px;
            }
        }
        .goods-picture{
            width: 100%;
            height: 200px;
            background-color: #F7F7F7;

        }
        .size{
            width: 175px;
            height: 175px;
        }
        .photo{
            .size;
            float: left;
            margin-top: 12.5px;
            margin-left: 15px;
            margin-right: 15px;
        }
        .other-picture{
            .size;
            float: left;
            border:1px solid red;
            margin-top: 12.5px;
        }
        .check{
            color:#55bb22;
            font-size: 26px;
            margin-top: 10px;
        }
        .btn{
            width: 100%;
            height: 60px;
            margin-top: 30px;
            .btn{
                    width: 130px;
                    height: 40px;
                    background-color: #55bb22;
                    font-size: 22px;
                    color: #fff;
                }
                .btn-left{
                    margin-left: 200px;
                }
                .btn-right{
                    float: right;
                    margin-right: 200px;
                }
        }
    }
</style>

