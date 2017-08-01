<template lang="html">
   <section>
       <p class="top">
           声明：举报，是为了提高交易效率，维护系统交易真实性，鼓励举报，打击虚假、有误二手信息。共建诚信交易平台！
       </p>
       <p class="target">举报目标</p>
       <div class="good">
           <img src="#">
           <span>商品信息</span>
       </div>
       <div class="reportbox">
           <p class="reportreason">举报原因</p>
           <input type="radio" id="outdate" name="reason"></input>
           <label for="outdate">这条信息过期</label>
           <input type="radio" id="falseinfo" name="reason"></input>
           <label for="falseinfo">这条信息虚假</label>
           <p class="other">填写其他举报原因</p>
           <textarea class="writebox" placeholder="请在此处填写"></textarea>
           <input type="button" value="确认举报" class="report-btn"></input>
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
        .top{
            color:#999;
            margin-top: 15px;
            margin-bottom: 20px;
        }
        .target{
            font-size: 36px;
            padding-bottom: 20px;
            border-bottom: 1px solid #000;
        }
        .good{
            height: 150px;
            border-bottom: 1px solid #000;
            img{
                height: 120px;
                width: 120px;
                margin-top: 15px;
            }
        }
        .reportbox{
            .reportreason{
                margin-top: 20px;
                color: red;
                font-size: 30px;
                margin-bottom: 20px;
            }
            input{
                height: 20px;
                width: 20px;
            }
            .other{
                font-size: 30px;
                color:red;
                margin-left: 30px;
                margin-top: 20px;
            }
            .writebox{
                margin-top: 20px;
                height: 200px;
                width: 100%;
                font-size: 26px;
            }
            .report-btn{
                width: 500px;
                height: 80px;
                position: absolute;
                left: 50%;
                margin-left: -250px;
                text-align: center;
                font-size: 30px;
                margin-top: 50px;
                background: #55bb22;
                color: #fff;
            }
        }
    }
</style>

