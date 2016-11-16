<template lang="html">
    <!-- <div style="clear:both;"> </div> -->
    <ul>
        <li v-for="item in items" >
        <a href="#">
            <img :src="item.src">
            <span class="word">{{item.text}}</span>
            <span class="arrow">&gt;</span>
        </li>
        </a>

    </ul>
</template>

<script type="text/javascript">
    export default {
    	data() {
    		return {
    			items: [{
    					src: './static/image/market/phone.png',
    					text: '手机'
    				}, {
    					src: './static/image/market/electrical.png',
    					text: '家电'
    				}, {
    					src: './static/image/market/parts.png',
    					text: '配件'
    				}, {
    					src: './static/image/market/sport.png',
    					text: '运动'
    				}, {
    					src: './static/image/market/camera.png',
    					text: '相机'
    				}, {
    					src: './static/image/market/accessory.png',
    					text: '饰品'
    				}],
    		}
    	},
    	computed: {},
    	// mounted() {},
    	methods: {},
    	components: {}
    }
</script>

<style lang="less" media="screen" scoped>
ul {
    list-style: none;
    li {
        height: 80px;
        line-height: 80px;

        border-bottom: 1px solid #999;
        position: relative;
        color: #55bb22;
        a {
            display: inline-block;
            width: 100%;
            height: 80px;
        }
        img {
            height: 35px;
            width: 35px;
            margin-left: 30px;
            margin-top: 12.5px;
        }
        .word {
            position: absolute;
            left: 100px;
            // display: inline-block;
            // width: 80px;
            // height: 40px;
            // line-height: 40px;
            // margin-top: -30px;
        }
        .arrow {
            clear: both;
            position: absolute;
            right: 50px;
        }
    }
}
</style>
