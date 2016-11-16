<template>
  <header class="searchtop">
    <div class="left">
    <span v-on:click="back()">&lt;</span>
      <!-- <a href="javascript:history.go(-1);">&lt;</a> -->
    </div>
    <div class="right">
      <input type="text" placeholder="请输入关键字" class="search-box"></input>
      <img src="../../../../static/image/search.jpg" class="search-jpg" >
      <!-- <input type="button" value="搜索" class="search-btn" ></input> -->
    </div>
    <div  class="index"><img src="../../../../static/image/home.png" class="index-picture" v-link="{path:'index'}"></div>
    <div ></div>
  </header>
</template>
<script type="text/javascript">
     import * as actions from 'data/actions'
    export default {
        vuex: {
            actions
        },
        data() {
            return {
                value:'aaa',
            }
        },
        methods: {
            text:function(){
                alert(this.value)
            },
            back:function(){
                window.history.go(-1)
            }
        },
        
    }
</script>

<style lang="less" media="screen" scoped>
    .searchtop{
        width: 100%;
        height: 120px;
        background: #55bb22;
        line-height: 120px;

        font-size: 28px;
        overflow: hidden;
    }
    .left{
        margin-left: 40px;
        float: left;

    }
    span{
        color:#fff;
        font-size: 70px;
    }
    .right{
        font-size: 0px;
        float: left;
        margin-left: 5px;
        width: 63%;
        height: 60px;
        // overflow: hidden;
    }
    .search-box {
        font-size: 28px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        border:1px solid #fff;
        border-radius: 5px;
        float: left;
        margin-left: 30px;
        padding-left: 30px;
        margin-top: 30px;
    }
    .search-box:focus{
        outline: 1px solid #55bb22;
    }
    .search-jpg{
        height: 35px;
        width: 35px;
        margin-left: -55px;
        margin-top: 43px;
    }
    .search-jpg:focus{
        background: red;
    }
    // .search-btn{
    //     width: 120px;
    //     height: 60px;
    //     line-height: 60px;
    //     color: #fff;
    //     background-color: #55bb22;
    //     border:2px solid #fff;
    //     border-radius: 5px;
    //     font-size: 30px;
    //     float: right;
    //     margin-right: 30px;
    //     margin-top: 30px;
    
    // }
    // .search-btn:hover{
    //     cursor: pointer;
    // }
    // .search-btn:focus{
    //     outline:2px solid #55bb22;
    // }
    .index{
        float: right;
        margin-right: 35px;
    }
    .index-picture{
        height: 60px;
        width: 60px;
        margin-top: 30px;
    }
</style>

