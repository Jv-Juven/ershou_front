<template lang="html">
   <section class="searchbox">
        <div>
            <!-- <select class="search-select">
                <option>广中医</option>
                <option>广药</option>
                <option>华工</option>
                <option>中大</option>
                <option>广外</option>
                <option>华师</option>
                <option>广美</option>
                <option>星海</option>
                <option>广大</option>
                <option>广工</option>
            </select> -->
            <div class="message">
                <img src="../../static/image/indexfloat/messages.png" v-link="{path:'/mymessage'}">
            </div>
            <input type="text" placeholder="输入关键字" class="searchtext" ></input>
            <div class="search-btn"  @click="abcd">
                <img src="../../static/image/indexfloat/search-btn.png" >
            </div>
            <!-- <input type="button" name="search-btn" id="search-btn" value="搜索"> -->
        </div>
    </section>
</template>

<script type="text/javascript">
        export default {
            data() {
                    return {
                        abc:'',
                    }
                },
                computed: {},
                // mounted() {},
                methods: {
                    abcd:function () {
                        var value=$('.searchtext').val();
                        if(value){
                            this.$router.go('/goodslist?goodsId='+value);
                        }else{
                            this.$router.go('/market');
                        }
                        //this.$router.go('/goodslist?goodsId'+value);
                        // alert("ddd")
                        // this.$router.push({path:'/login'})
                    }
                },
                components: {}
        }

</script>

<style lang="less" media="screen">
    .searchbox{
        width: 90%;
        height: 60px;
        margin: 20px auto;
        line-height: 60px;
        font-size: 0px;
        vertical-align:middle;
        .message{
            float: left;
            // margin-left: 40px;
            margin-right: 20px;
            width: 50px;
            height: 50px;
        }
        .search-btn{
            float: left;
            margin-left: 20px;
            width: 53px;
            height: 53px;
            float: left;
        }
     }
    // .search-select{
    //     border:none;
    //     margin-left: 30px;
    //     font-size: 20px;
    //  }

    .search-select:focus{outline:0;}
    .radius (@radius: 5px) {
        border-radius: @radius;
        -o-border-radius: @radius;
        -ms-border-radius: @radius;
        -moz-border-radius: @radius;
        -webkit-border-radius: @radius;
      }  
    .searchtext{
        width: 70%;
        height: 50px;
        line-height: 50px;
        .radius(10px);
        font-size: 28px;
        padding-left: 20px;
        background-color: #eee;
        color:red;
        float: left;
        border:none;
        // vertical-align: bottom;
        vertical-align:middle;
    }
    .searchtext:focus{
        outline:0;
    }
    #search-btn{
        float: left;
        height: 50px;
        line-height: 50px;
        width: 100px;
        font-size: 20px;
        background-color: #55bb22;
        margin-left: 20px;
        color: #fff;
        vertical-align:middle;
    }
</style>
