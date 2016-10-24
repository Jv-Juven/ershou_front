<template lang="html">
   <footer class="footer-btn">
       <input type="button" value="发布" class="btn btn-left" :disabled="ableone" :style="publishStyle" v-on:click="submit"></input>
       <input type="button" value="重置" class="btn btn-right" @click='zero'></input>
   </footer>
</template>

<script type="text/javascript">
    // import {reset} from "../.././../vuex/actions"
        export default {
            data() {
                    return {
                        // ableone:'disabled',
                    }
                },
                vuex:{
                    getters:{
                        ableone:function(state){
                        return state.publish.able
                        },
                        publishStyle:function(state){
                            return state.publish.publishStyle
                        },

                    },
                    actions:{
                        zero:function({dispatch}){
    dispatch('RESET')
}
                    },
                },
                computed: {

                },
                // mounted() {},
                methods: {
                    submit:function(){
                        alert(this.ableone)
                    }
                },
                components: {}
        }

</script>

<style lang="less" media="screen" scoped>
    .footer-btn{
        width: 100%;
        height: 60px;
        margin-top: 30px;
    }
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
</style>

