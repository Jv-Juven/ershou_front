<style lang="less" media="screen">
    .searchbox{
        width: 80%;
        height: 60px;
        margin: 20px auto;
        
     }
    .search-select{
        border:none;
        margin-left: 30px;
        font-size: 20px;
     }
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
        height: 40px;
        line-height: 40px;
        .radius(30px);
        font-size: 28px;
        padding-left: 20px;
      }
    .searchtext:focus{
        outline:0;
    }
</style>

<template lang="html">
   <section class="searchbox">
        <div>
            <select class="search-select">
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
            </select>
            <input type="text" placeholder="点击查找物品" class="searchtext" ></input>
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
